#!/usr/bin/env node
import fs from "fs";
import path from "path";
import url from "url";
import { fileURLToPath } from "url";
import minimist from "minimist";
import kleur from "kleur";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function toClassName(raw) {
  const noScope = raw.replace(/^@[^/]+\//, "");
  return noScope
    .split(/[\W_]+/)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src)) {
    const s = path.join(src, entry);
    const d = path.join(dest, entry);
    const stat = fs.statSync(s);
    if (stat.isDirectory()) {
      copyDir(s, d);
    } else {
      const content = fs.readFileSync(s);
      fs.writeFileSync(d, content);
    }
  }
}

function replaceInFiles(rootDir, replacements) {
  const exts = new Set([".md", ".ts", ".tsx", ".js", ".json"]);
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir)) {
      const p = path.join(dir, entry);
      const stat = fs.statSync(p);
      if (stat.isDirectory()) {
        walk(p);
      } else if (exts.has(path.extname(p))) {
        let txt = fs.readFileSync(p, "utf8");
        Object.entries(replacements).forEach(([from, to]) => {
          const re = new RegExp(from, "g");
          txt = txt.replace(re, to);
        });
        fs.writeFileSync(p, txt);
      }
    }
  };
  walk(rootDir);
}

function main() {
  const args = minimist(process.argv.slice(2));
  const targetArg = args._[0] || ".";
  const targetDir = path.resolve(process.cwd(), targetArg);

  const pkgName = args.name || args.n || path.basename(targetDir);
  const label = args.label || "PrimeBI Chart";
  const className = args.class || toClassName(pkgName);

  const templateDir = path.resolve(__dirname, "..", "template");
  if (!fs.existsSync(templateDir)) {
    console.error(kleur.red(`Template directory not found: ${templateDir}`));
    process.exit(1);
  }

  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  copyDir(templateDir, targetDir);

  replaceInFiles(targetDir, {
    "{{PLUGIN_PACKAGE_NAME}}": pkgName,
    "{{PLUGIN_CLASS_NAME}}": className,
    PrimeBIChartPlugin: className,
    "{{PLUGIN_LABEL}}": label,
  });

  console.log(
    kleur.green("✔ Generated PrimeBI plugin template at:"),
    targetDir
  );
  console.log(kleur.gray("Next steps:"));
  console.log(`  cd ${path.relative(process.cwd(), targetDir) || "."}`);
  console.log("  npm install");
  console.log("  npm run build");
}

main();
