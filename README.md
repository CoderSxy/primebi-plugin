# create-primebiplugin

Initialize an Apache Superset chart plugin template (PrimeBI flavor).

## Usage

- With npm init:

```bash
npm init create-primebiplugin@latest my-superset-plugin \
  -- --name @primebi/plugin-chart-sample \
  --label "PrimeBI Sample" \
  --class PrimeBISamplePlugin
```

- Or via npx:

```bash
npx create-primebiplugin my-superset-plugin \
  --name @primebi/plugin-chart-sample \
  --label "PrimeBI Sample" \
  --class PrimeBISamplePlugin
```

Then in the generated folder:

```bash
npm install
npm run build   # builds lib/ (CJS), esm/ (ESM), and lib/*.d.ts
npm test
```

## Options
- `--name` or `-n`: package name for the generated plugin
- `--label`: human-readable chart label shown in Superset
- `--class`: chart plugin class name (defaults to derived from name)

## Template source
Based on Superset generator templates:
- https://github.com/apache/superset/tree/master/superset-frontend/packages/generator-superset/generators/plugin-chart/templates 