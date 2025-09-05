# create-primebiplugin

Initialize an Apache Superset chart plugin template .

## Usage

- With npm init:


### Step1
- Please run this command in the superset-frontend/plugins directory
```bash
npm init create-primebiplugin@latest my-superset-plugin 
```
- Or via npx:
```bash
npx create-primebiplugin my-superset-plugin 
```

### Step2
Add the local dependency in superset-frontend/package.json
```js
{
  ...
  "dependencies": {
    ...
    "@superset-ui/my-superset-plugin": "file:./plugins/my-superset-plugin",
    ...
  }
  ...
}
```

### Step3
Run the following command in the superset-frontend directory
```bash
npm install
```

Add the plugin in superset-frontend/src/visualizations/presets/MainPreset.js
```js
import { MySupersetPlugin } from '@superset-ui/my-superset-plugin';
new MySupersetPlugin().configure({ key: 'my-superset-plugin' }),
```



This way, you don't need to follow the official plugin installation process and can skip the following parts from the official example.
```bash
npm i -g yo
cd superset-frontend/packages/generator-superset
npm i
npm link

## This step is in a separate directory. You can install this plugin directly in your project directory and use it as a local plugin.
mkdir /tmp/superset-plugin-chart-hello-world
cd /tmp/superset-plugin-chart-hello-world

## Initialize the viz plugin:
yo @superset-ui/superset

## To build the viz plugin, run the following commands:
npm i --force
npm run build

## Local Development
npm run dev

## To add the package to Superset, go to the superset-frontend subdirectory in your Superset source folder run
npm i -S /tmp/superset-plugin-chart-hello-world
```

## Template source
Based on Superset generator templates:
- https://github.com/apache/superset/tree/master/superset-frontend/packages/generator-superset/generators/plugin-chart/templates 