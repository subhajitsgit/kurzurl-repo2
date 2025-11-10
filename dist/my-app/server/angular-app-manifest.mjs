
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/privacy"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16315, hash: '760759869e24fba02c79941411c4d526f19dcca13fb4a1e517be60e490491b84', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12068, hash: 'c976c3a397446929defa6f5e6c3000a59a1a74a51ee9ea05da49469714003725', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34807, hash: '4b5dc3461e31458853a2e641fe99e50abd64a4a008323104ef749fd89cf50c59', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'privacy/index.html': {size: 36216, hash: '627fbca18bceb99d02fe26bad01aea1c5adf2560fee74cafec512ec9db325642', text: () => import('./assets-chunks/privacy_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 36628, hash: '926dbbd7faeb5208d99ddb67794523bbabcf88749aef9c5bddab798c96d3a864', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-CZ6NJLA3.css': {size: 231456, hash: 'l62VI5Z0dX4', text: () => import('./assets-chunks/styles-CZ6NJLA3_css.mjs').then(m => m.default)}
  },
};
