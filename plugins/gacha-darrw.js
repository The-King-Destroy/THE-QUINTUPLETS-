/*
《✧》DERECHOS RESERVADOS POR EL AUTOR 《✧》
- DavidChian (@David-Chian)
*/

const _0x5f2451=_0x3397;(function(_0x2c39fc,_0x5dd6b8){const _0x40f7e1=_0x3397,_0x4a84fe=_0x2c39fc();while(!![]){try{const _0x36e03c=-parseInt(_0x40f7e1(0x6f))/0x1+-parseInt(_0x40f7e1(0x94))/0x2+-parseInt(_0x40f7e1(0x87))/0x3*(parseInt(_0x40f7e1(0x7c))/0x4)+parseInt(_0x40f7e1(0x91))/0x5+-parseInt(_0x40f7e1(0x7a))/0x6+-parseInt(_0x40f7e1(0x78))/0x7+parseInt(_0x40f7e1(0xa5))/0x8*(parseInt(_0x40f7e1(0xa3))/0x9);if(_0x36e03c===_0x5dd6b8)break;else _0x4a84fe['push'](_0x4a84fe['shift']());}catch(_0x4eb6bc){_0x4a84fe['push'](_0x4a84fe['shift']());}}}(_0x2e54,0xe91a6));import _0x1b39a1 from'fs';const obtenerDatos=()=>{const _0x367072=_0x3397;return _0x1b39a1[_0x367072(0x9b)](_0x367072(0x93))?JSON['parse'](_0x1b39a1[_0x367072(0x73)](_0x367072(0x93),_0x367072(0x70))):{'usuarios':{},'personajesReservados':[]};},guardarDatos=_0x52ea32=>{const _0x490f6b=_0x3397;_0x1b39a1['writeFileSync'](_0x490f6b(0x93),JSON[_0x490f6b(0xa0)](_0x52ea32,null,0x2));},obtenerPersonajes=()=>{const _0x48be93=_0x3397;if(_0x1b39a1['existsSync'](_0x48be93(0x75)))return JSON[_0x48be93(0x8c)](_0x1b39a1[_0x48be93(0x73)](_0x48be93(0x75),_0x48be93(0x70)));else throw new Error('✧\x20No\x20se\x20encontró\x20el\x20archivo\x20de\x20personajes.');};let handler=async(_0x5ae974,{conn:_0x1dc082,args:_0x3e7e61})=>{const _0xe86e6=_0x3397;if(_0x3e7e61['length']<0x2){_0x1dc082[_0xe86e6(0x83)](_0x5ae974[_0xe86e6(0xa1)],_0xe86e6(0x77),_0x5ae974);return;}const _0x1183ee=()=>{const _0x1cb4ff=_0xe86e6;try{const _0x44fda4=JSON['parse'](_0x1b39a1[_0x1cb4ff(0x73)]('./package.json',_0x1cb4ff(0x70)));if(_0x44fda4[_0x1cb4ff(0x98)]!==_0x1cb4ff(0x74))return![];if(_0x44fda4[_0x1cb4ff(0x79)][_0x1cb4ff(0x84)]!==_0x1cb4ff(0x85))return![];return!![];}catch(_0xaaa15f){return console[_0x1cb4ff(0x9e)](_0x1cb4ff(0x95),_0xaaa15f),![];}};if(!_0x1183ee()){await _0x1dc082[_0xe86e6(0x86)](_0x5ae974['chat'],_0xe86e6(0xa4),_0x5ae974,rcanal);return;}let _0xcbf8e3=_0x5ae974[_0xe86e6(0x6e)][0x0];if(!_0xcbf8e3){_0x1dc082[_0xe86e6(0x83)](_0x5ae974[_0xe86e6(0xa1)],_0xe86e6(0x76),_0x5ae974);return;}let _0x2bbec8=_0x3e7e61[_0xe86e6(0x71)](0x1)[_0xe86e6(0x7f)]('\x20')[_0xe86e6(0x92)](),_0x49b2ee=_0x5ae974[_0xe86e6(0x96)],_0x2bcb8e=obtenerDatos(),_0x3b42fa=_0x2bcb8e['usuarios'][_0x49b2ee];if(!_0x3b42fa||_0x3b42fa[_0xe86e6(0x81)][_0xe86e6(0x6c)]===0x0){_0x1dc082[_0xe86e6(0x83)](_0x5ae974[_0xe86e6(0xa1)],_0xe86e6(0x7b),_0x5ae974);return;}let _0x3b083e=_0x3b42fa[_0xe86e6(0x81)]['findIndex'](_0x2cfb3d=>_0x2cfb3d['name'][_0xe86e6(0x92)]()===_0x2bbec8[_0xe86e6(0x92)]()[_0xe86e6(0x8d)]());if(_0x3b083e===-0x1){_0x1dc082[_0xe86e6(0x83)](_0x5ae974['chat'],'《✧》El\x20personaje\x20'+_0x2bbec8+_0xe86e6(0xa2),_0x5ae974);return;}let _0x46cf23=obtenerPersonajes(),_0x4d736c=_0x46cf23[_0xe86e6(0x8a)](_0x2f9879=>_0x2f9879[_0xe86e6(0x98)][_0xe86e6(0x92)]()===_0x2bbec8[_0xe86e6(0x92)]()[_0xe86e6(0x8d)]());if(!_0x4d736c){_0x1dc082[_0xe86e6(0x83)](_0x5ae974['chat'],_0xe86e6(0x7d)+_0x2bbec8+'\x20en\x20la\x20base\x20de\x20datos.',_0x5ae974);return;}let _0x460b93={'name':_0x3b42fa[_0xe86e6(0x81)][_0x3b083e]['name'],'value':_0x4d736c[_0xe86e6(0x9c)],'url':_0x4d736c[_0xe86e6(0x84)]},_0x5dd795=_0x2bcb8e['usuarios'][_0xcbf8e3];!_0x5dd795&&(_0x5dd795={'characterCount':0x0,'totalRwcoins':0x0,'characters':[]});_0x5dd795[_0xe86e6(0x81)][_0xe86e6(0x82)]({'name':_0x460b93[_0xe86e6(0x98)],'url':_0x460b93[_0xe86e6(0x84)],'value':_0x460b93[_0xe86e6(0x9c)]}),_0x5dd795[_0xe86e6(0x88)]++,_0x5dd795[_0xe86e6(0x99)]+=_0x460b93[_0xe86e6(0x9c)],_0x2bcb8e[_0xe86e6(0x8e)][_0xcbf8e3]=_0x5dd795,_0x3b42fa[_0xe86e6(0x81)]['splice'](_0x3b083e,0x1),_0x3b42fa[_0xe86e6(0x88)]--,_0x3b42fa[_0xe86e6(0x99)]-=_0x460b93[_0xe86e6(0x9c)],_0x2bcb8e[_0xe86e6(0x8e)][_0x49b2ee]=_0x3b42fa,guardarDatos(_0x2bcb8e);let _0x3fb432=await _0x1dc082[_0xe86e6(0x97)](_0xcbf8e3),_0x33a0b7=await _0x1dc082[_0xe86e6(0x97)](_0x49b2ee),_0x35cb2b=_0xe86e6(0x90)+_0x460b93[_0xe86e6(0x98)]+_0xe86e6(0x9d)+_0x49b2ee[_0xe86e6(0x80)]('@')[0x0]+_0xe86e6(0x9a)+_0xcbf8e3['split']('@')[0x0]+_0xe86e6(0x8f)+_0x460b93[_0xe86e6(0x9c)]+'\x20RWCoins';await _0x1dc082[_0xe86e6(0x86)](_0x5ae974[_0xe86e6(0xa1)],{'image':{'url':_0x460b93[_0xe86e6(0x84)]},'caption':_0x35cb2b,'mentions':[_0xcbf8e3,_0x49b2ee]},{'quoted':_0x5ae974});};handler[_0x5f2451(0x8b)]=['darrw'],handler[_0x5f2451(0x89)]=[_0x5f2451(0x6d)],handler[_0x5f2451(0x7e)]=[_0x5f2451(0x72)],handler[_0x5f2451(0x9f)]=!![];export default handler;function _0x3397(_0x28cbb0,_0x18c4a9){const _0x2e547d=_0x2e54();return _0x3397=function(_0x33971f,_0x2665e7){_0x33971f=_0x33971f-0x6c;let _0x6a461b=_0x2e547d[_0x33971f];return _0x6a461b;},_0x3397(_0x28cbb0,_0x18c4a9);}function _0x2e54(){const _0x51563f=['gacha','mentionedJid','967046XCwMbX','utf-8','slice','darrw','readFileSync','THE-QUINTUPLETS','./src/JSON/characters.json','《✧》Debes\x20mencionar\x20a\x20un\x20usuario\x20valido.','《✧》Debes\x20mencionar\x20a\x20un\x20usuario\x20y\x20el\x20nombre\x20del\x20personaje.\x0a>\x20✎\x20Ejemplo:\x20#darrw\x20@user\x20Yuki Suou`.','13237917kLRshf','repository','10897920vJBOci','《✧》No\x20tienes\x20personajes\x20en\x20tu\x20inventario.','42740nGyMKR','《✧》No\x20se\x20encontró\x20el\x20personaje\x20','command','join','split','characters','push','reply','url','git+https://github.com/LOBO50K/THE-QUINTUPLETS-.git','sendMessage','225nhpEUt','characterCount','tags','find','help','parse','trim','usuarios','\x0aAdemas,\x20obtienes\x20','《✧》El\x20personaje\x0a','4629675DRvJsk','toLowerCase','data.json','3706776aESNiA','✧\x20Error\x20al\x20leer\x20package.json:','sender','getName','name','totalRwcoins','\x0aAhora\x20es\x20de\x20@','existsSync','value','\x0aDe\x20@','error','register','stringify','chat','\x20no\x20está\x20en\x20tu\x20inventario.','135rCJKNG','✧\x20Este\x20comando\x20solo\x20es\x20disponible\x20en\x20THE-QUINTUPLETS\x0a◇\x20https://github.com/LOBO50K/THE-QUINTUPLETS-','3924328eZvZzt','length'];_0x2e54=function(){return _0x51563f;};return _0x2e54();}