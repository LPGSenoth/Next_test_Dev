
  
  const require = (await import("node:module")).createRequire(import.meta.url);
  const __filename = (await import("node:url")).fileURLToPath(import.meta.url);
  const __dirname = (await import("node:path")).dirname(__filename);
  
  
  globalThis.openNextDebug = false;globalThis.openNextVersion = "3.0.8";
async function s(n){let t=new URL(n.url).pathname,e=globalThis._ROUTES.find(r=>r.regex.some(a=>new RegExp(a).test(t)));if(!e)throw new Error(`No route found for ${n.url}`);let o=await self._ENTRIES[`middleware_${e.name}`].default({page:e.page,request:{...n,page:{name:e.name}}});return await o.waitUntil,o.response}export{s as default};
