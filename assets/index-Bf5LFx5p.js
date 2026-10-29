(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="170",sd=0,qc=1,rd=2,Ru=1,Pu=2,Di=3,ts=0,Pn=1,Je=2,pn=0,Ji=1,fi=2,Yc=3,$c=4,Du=5,ai=100,ad=101,od=102,ld=103,cd=104,Dr=200,hd=201,ud=202,fd=203,ol=204,ll=205,cl=206,dd=207,hl=208,pd=209,md=210,gd=211,vd=212,xd=213,_d=214,ul=0,fl=1,dl=2,or=3,pl=4,ml=5,gl=6,vl=7,dc=0,Md=1,yd=2,Qi=0,Lu=1,Iu=2,Uu=3,pc=4,Sd=5,Nu=6,zu=7,Fu=300,lr=301,cr=302,xl=303,_l=304,Qa=306,_i=1e3,ds=1001,Ml=1002,vn=1003,bd=1004,ra=1005,vi=1006,go=1007,ps=1008,Mi=1009,Ou=1010,ku=1011,Hr=1012,mc=1013,ys=1014,hi=1015,jn=1016,gc=1017,vc=1018,Ss=1020,Bu=35902,Gu=1021,Vu=1022,$n=1023,Hu=1024,Wu=1025,Qs=1026,bs=1027,to=1028,xc=1029,Xu=1030,_c=1031,Mc=1033,Ga=33776,Va=33777,Ha=33778,Wa=33779,yl=35840,Sl=35841,bl=35842,wl=35843,El=36196,Tl=37492,Al=37496,Cl=37808,Rl=37809,Pl=37810,Dl=37811,Ll=37812,Il=37813,Ul=37814,Nl=37815,zl=37816,Fl=37817,Ol=37818,kl=37819,Bl=37820,Gl=37821,Xa=36492,Vl=36494,Hl=36495,qu=36283,Wl=36284,Xl=36285,ql=36286,wd=3200,Ed=3201,yc=0,Td=1,ji="",mn="srgb",vr="srgb-linear",eo="linear",Fe="srgb",Ls=7680,jc=519,Ad=512,Cd=513,Rd=514,Yu=515,Pd=516,Dd=517,Ld=518,Id=519,Zc=35044,Kc=35048,Jc="300 es",Ni=2e3,ja=2001;class xr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qc=1234567;const Nr=Math.PI/180,Wr=180/Math.PI;function Ts(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function un(i,t,e){return Math.max(t,Math.min(e,i))}function Sc(i,t){return(i%t+t)%t}function Ud(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Nd(i,t,e){return i!==t?(e-i)/(t-i):0}function zr(i,t,e){return(1-e)*i+e*t}function zd(i,t,e,n){return zr(i,t,1-Math.exp(-e*n))}function Fd(i,t=1){return t-Math.abs(Sc(i,t*2)-t)}function Od(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Bd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gd(i,t){return i+Math.random()*(t-i)}function Vd(i){return i*(.5-Math.random())}function Hd(i){i!==void 0&&(Qc=i);let t=Qc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wd(i){return i*Nr}function Xd(i){return i*Wr}function qd(i){return(i&i-1)===0&&i!==0}function Yd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $d(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function En(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xe={DEG2RAD:Nr,RAD2DEG:Wr,generateUUID:Ts,clamp:un,euclideanModulo:Sc,mapLinear:Ud,inverseLerp:Nd,lerp:zr,damp:zd,pingpong:Fd,smoothstep:Od,smootherstep:kd,randInt:Bd,randFloat:Gd,randFloatSpread:Vd,seededRandom:Hd,degToRad:Wd,radToDeg:Xd,isPowerOfTwo:qd,ceilPowerOfTwo:Yd,floorPowerOfTwo:$d,setQuaternionFromProperEuler:jd,normalize:En,denormalize:Zs};class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _e{constructor(t,e,n,s,r,a,o,l,c){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],v=n[8],x=s[0],m=s[3],d=s[6],y=s[1],S=s[4],g=s[7],A=s[2],E=s[5],w=s[8];return r[0]=a*x+o*y+l*A,r[3]=a*m+o*S+l*E,r[6]=a*d+o*g+l*w,r[1]=c*x+u*y+h*A,r[4]=c*m+u*S+h*E,r[7]=c*d+u*g+h*w,r[2]=f*x+p*y+v*A,r[5]=f*m+p*S+v*E,r[8]=f*d+p*g+v*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,v=e*h+n*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(vo.makeScale(t,e)),this}rotate(t){return this.premultiply(vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new _e;function $u(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zd(){const i=Za("canvas");return i.style.display="block",i}const th={};function Lr(i){i in th||(th[i]=!0,console.warn(i))}function Kd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Jd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pe={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Fe&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Fe&&(i.r=tr(i.r),i.g=tr(i.g),i.b=tr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ji?eo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const eh=[.64,.33,.3,.6,.15,.06],nh=[.2126,.7152,.0722],ih=[.3127,.329],sh=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Pe.define({[vr]:{primaries:eh,whitePoint:ih,transfer:eo,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:nh,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:eh,whitePoint:ih,transfer:Fe,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:nh,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});let Is;class tp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Is===void 0&&(Is=Za("canvas")),Is.width=t.width,Is.height=t.height;const n=Is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Za("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fi(e[n]/255)*255):e[n]=Fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ep=0;class ju{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xo(s[a].image)):r.push(xo(s[a]))}else r=xo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let np=0;class bn extends xr{constructor(t=bn.DEFAULT_IMAGE,e=bn.DEFAULT_MAPPING,n=ds,s=ds,r=vi,a=ps,o=$n,l=Mi,c=bn.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Ts(),this.name="",this.source=new ju(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _i:t.x=t.x-Math.floor(t.x);break;case ds:t.x=t.x<0?0:1;break;case Ml:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _i:t.y=t.y-Math.floor(t.y);break;case ds:t.y=t.y<0?0:1;break;case Ml:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Fu;bn.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,n=0,s=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],v=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,g=(p+1)/2,A=(d+1)/2,E=(u+f)/4,w=(h+x)/4,C=(v+m)/4;return S>g&&S>A?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=w/n):g>A?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=E/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(h-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ip extends xr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new bn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ju(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends ip{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zu extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sp extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ta{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],p=r[a+1],v=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=v,t[e+3]=x;return}if(h!==x||l!==f||c!==p||u!==v){let m=1-o;const d=l*f+c*p+u*v+h*x,y=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const A=Math.sqrt(S),E=Math.atan2(A,d*y);m=Math.sin(m*E)/A,o=Math.sin(o*E)/A}const g=o*y;if(l=l*m+f*g,c=c*m+p*g,u=u*m+v*g,h=h*m+x*g,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return t[e]=o*v+u*h+l*p-c*f,t[e+1]=l*v+u*f+c*h-o*p,t[e+2]=c*v+u*p+o*f-l*h,t[e+3]=u*v-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"YZX":this._x=f*u*h+c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h-f*p*v;break;case"XZY":this._x=f*u*h-c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ah.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _o=new B,ah=new ta;class As{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ni):ni.fromBufferAttribute(r,a),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(t.matrixWorld),this.union(aa)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),oa.subVectors(this.max,wr),Us.subVectors(t.a,wr),Ns.subVectors(t.b,wr),zs.subVectors(t.c,wr),Gi.subVectors(Ns,Us),Vi.subVectors(zs,Ns),ns.subVectors(Us,zs);let e=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-ns.z,ns.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,ns.z,0,-ns.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-ns.y,ns.x,0];return!Mo(e,Us,Ns,zs,oa)||(e=[1,0,0,0,1,0,0,0,1],!Mo(e,Us,Ns,zs,oa))?!1:(la.crossVectors(Gi,Vi),e=[la.x,la.y,la.z],Mo(e,Us,Ns,zs,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wi=[new B,new B,new B,new B,new B,new B,new B,new B],ni=new B,aa=new As,Us=new B,Ns=new B,zs=new B,Gi=new B,Vi=new B,ns=new B,wr=new B,oa=new B,la=new B,is=new B;function Mo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){is.fromArray(i,r);const o=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),u=n.dot(is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const rp=new As,Er=new B,yo=new B;class _r{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);const e=Er.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(yo)),this.expandByPoint(Er.copy(t.center).sub(yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new B,So=new B,ca=new B,Hi=new B,bo=new B,ha=new B,wo=new B;class bc{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){So.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(So);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ca),o=Hi.dot(this.direction),l=-Hi.dot(ca),c=Hi.lengthSq(),u=Math.abs(1-a*a);let h,f,p,v;if(u>0)if(h=a*l-o,f=a*o-l,v=r*u,h>=0)if(f>=-v)if(f<=v){const x=1/u;h*=x,f*=x,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(So).addScaledVector(ca,f),p}intersectSphere(t,e){Ei.subVectors(t.center,this.origin);const n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,n,s,r){bo.subVectors(e,t),ha.subVectors(n,t),wo.crossVectors(bo,ha);let a=this.direction.dot(wo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,t);const l=o*this.direction.dot(ha.crossVectors(Hi,ha));if(l<0)return null;const c=o*this.direction.dot(bo.cross(Hi));if(c<0||l+c>a)return null;const u=-o*Hi.dot(wo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(t,e,n,s,r,a,o,l,c,u,h,f,p,v,x,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,f,p,v,x,m)}set(t,e,n,s,r,a,o,l,c,u,h,f,p,v,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),a=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,p=a*h,v=o*u,x=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+v*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=v+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,v=c*u,x=c*h;e[0]=f+x*o,e[4]=v*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-v,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,v=c*u,x=c*h;e[0]=f-x*o,e[4]=-a*h,e[8]=v+p*o,e[1]=p+v*o,e[5]=a*u,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*h,v=o*u,x=o*h;e[0]=l*u,e[4]=v*c-p,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=p*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,v=o*l,x=o*c;e[0]=l*u,e[4]=x-f*h,e[8]=v*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+v,e[10]=f-x*h}else if(t.order==="XZY"){const f=a*l,p=a*c,v=o*l,x=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=a*u,e[9]=p*h-v,e[2]=v*h-p,e[6]=o*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ap,t,op)}lookAt(t,e,n){const s=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Wi.crossVectors(n,zn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Wi.crossVectors(n,zn)),Wi.normalize(),ua.crossVectors(zn,Wi),s[0]=Wi.x,s[4]=ua.x,s[8]=zn.x,s[1]=Wi.y,s[5]=ua.y,s[9]=zn.y,s[2]=Wi.z,s[6]=ua.z,s[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],v=n[2],x=n[6],m=n[10],d=n[14],y=n[3],S=n[7],g=n[11],A=n[15],E=s[0],w=s[4],C=s[8],M=s[12],_=s[1],T=s[5],D=s[9],k=s[13],L=s[2],O=s[6],V=s[10],W=s[14],G=s[3],j=s[7],nt=s[11],ot=s[15];return r[0]=a*E+o*_+l*L+c*G,r[4]=a*w+o*T+l*O+c*j,r[8]=a*C+o*D+l*V+c*nt,r[12]=a*M+o*k+l*W+c*ot,r[1]=u*E+h*_+f*L+p*G,r[5]=u*w+h*T+f*O+p*j,r[9]=u*C+h*D+f*V+p*nt,r[13]=u*M+h*k+f*W+p*ot,r[2]=v*E+x*_+m*L+d*G,r[6]=v*w+x*T+m*O+d*j,r[10]=v*C+x*D+m*V+d*nt,r[14]=v*M+x*k+m*W+d*ot,r[3]=y*E+S*_+g*L+A*G,r[7]=y*w+S*T+g*O+A*j,r[11]=y*C+S*D+g*V+A*nt,r[15]=y*M+S*k+g*W+A*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],v=t[3],x=t[7],m=t[11],d=t[15];return v*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+x*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+e*c*h-e*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-s*o*u-e*l*h+e*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],v=t[12],x=t[13],m=t[14],d=t[15],y=h*m*c-x*f*c+x*l*p-o*m*p-h*l*d+o*f*d,S=v*f*c-u*m*c-v*l*p+a*m*p+u*l*d-a*f*d,g=u*x*c-v*h*c+v*o*p-a*x*p-u*o*d+a*h*d,A=v*h*l-u*x*l-v*o*f+a*x*f+u*o*m-a*h*m,E=e*y+n*S+s*g+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=y*w,t[1]=(x*f*r-h*m*r-x*s*p+n*m*p+h*s*d-n*f*d)*w,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*d+n*l*d)*w,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*w,t[4]=S*w,t[5]=(u*m*r-v*f*r+v*s*p-e*m*p-u*s*d+e*f*d)*w,t[6]=(v*l*r-a*m*r-v*s*c+e*m*c+a*s*d-e*l*d)*w,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*p+e*l*p)*w,t[8]=g*w,t[9]=(v*h*r-u*x*r-v*n*p+e*x*p+u*n*d-e*h*d)*w,t[10]=(a*x*r-v*o*r+v*n*c-e*x*c-a*n*d+e*o*d)*w,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*p-e*o*p)*w,t[12]=A*w,t[13]=(u*x*s-v*h*s+v*n*f-e*x*f-u*n*m+e*h*m)*w,t[14]=(v*o*s-a*x*s-v*n*l+e*x*l+a*n*m-e*o*m)*w,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,v=r*h,x=a*u,m=a*h,d=o*h,y=l*c,S=l*u,g=l*h,A=n.x,E=n.y,w=n.z;return s[0]=(1-(x+d))*A,s[1]=(p+g)*A,s[2]=(v-S)*A,s[3]=0,s[4]=(p-g)*E,s[5]=(1-(f+d))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(v+S)*w,s[9]=(m-y)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Fs.set(s[0],s[1],s[2]).length();const a=Fs.set(s[4],s[5],s[6]).length(),o=Fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ii.copy(this);const c=1/r,u=1/a,h=1/o;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=h,ii.elements[9]*=h,ii.elements[10]*=h,e.setFromRotationMatrix(ii),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ni){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let p,v;if(o===Ni)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ja)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ni){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),f=(e+t)*c,p=(n+s)*u;let v,x;if(o===Ni)v=(a+r)*h,x=-2*h;else if(o===ja)v=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fs=new B,ii=new Le,ap=new B(0,0,0),op=new B(1,1,1),Wi=new B,ua=new B,zn=new B,oh=new Le,lh=new ta;class yi{constructor(t=0,e=0,n=0,s=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lh.setFromEuler(this),this.setFromQuaternion(lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lp=0;const ch=new B,Os=new ta,Ti=new Le,fa=new B,Tr=new B,cp=new B,hp=new ta,hh=new B(1,0,0),uh=new B(0,1,0),fh=new B(0,0,1),dh={type:"added"},up={type:"removed"},ks={type:"childadded",child:null},Eo={type:"childremoved",child:null};class He extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new B,e=new yi,n=new ta,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new _e}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(fh,t)}translateOnAxis(t,e){return ch.copy(t).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fa.copy(t):fa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Tr,fa,this.up):Ti.lookAt(fa,Tr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(Ti),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dh),ks.child=t,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(up),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dh),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,hp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}He.DEFAULT_UP=new B(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new B,Ai=new B,To=new B,Ci=new B,Bs=new B,Gs=new B,ph=new B,Ao=new B,Co=new B,Ro=new B,Po=new Be,Do=new Be,Lo=new Be;class oi{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),si.subVectors(t,e),s.cross(si);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){si.subVectors(s,e),Ai.subVectors(n,e),To.subVectors(t,e);const a=si.dot(si),o=si.dot(Ai),l=si.dot(To),c=Ai.dot(Ai),u=Ai.dot(To),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,v=(a*u-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Po.setScalar(0),Do.setScalar(0),Lo.setScalar(0),Po.fromBufferAttribute(t,e),Do.fromBufferAttribute(t,n),Lo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Po,r.x),a.addScaledVector(Do,r.y),a.addScaledVector(Lo,r.z),a}static isFrontFacing(t,e,n,s){return si.subVectors(n,e),Ai.subVectors(t,e),si.cross(Ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),si.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return oi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return oi.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Bs.subVectors(s,n),Gs.subVectors(r,n),Ao.subVectors(t,n);const l=Bs.dot(Ao),c=Gs.dot(Ao);if(l<=0&&c<=0)return e.copy(n);Co.subVectors(t,s);const u=Bs.dot(Co),h=Gs.dot(Co);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Bs,a);Ro.subVectors(t,r);const p=Bs.dot(Ro),v=Gs.dot(Ro);if(v>=0&&p<=v)return e.copy(r);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Gs,o);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return ph.subVectors(r,s),o=(h-u)/(h-u+(p-v)),e.copy(s).addScaledVector(ph,o);const d=1/(m+x+f);return a=x*d,o=f*d,e.copy(n).addScaledVector(Bs,a).addScaledVector(Gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},da={h:0,s:0,l:0};function Io(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Pe.workingColorSpace){if(t=Sc(t,1),e=un(e,0,1),n=un(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Io(a,r,t+1/3),this.g=Io(a,r,t),this.b=Io(a,r,t-1/3)}return Pe.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=Ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return Pe.fromWorkingColorSpace(Sn.copy(this),t),Math.round(un(Sn.r*255,0,255))*65536+Math.round(un(Sn.g*255,0,255))*256+Math.round(un(Sn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.fromWorkingColorSpace(Sn.copy(this),e);const n=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Pe.workingColorSpace){return Pe.fromWorkingColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=mn){Pe.fromWorkingColorSpace(Sn.copy(this),t);const e=Sn.r,n=Sn.g,s=Sn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(da);const n=zr(Xi.h,da.h,e),s=zr(Xi.s,da.s,e),r=zr(Xi.l,da.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Ct;Ct.NAMES=Ku;let fp=0;class Cs extends xr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Ts(),this.name="",this.blending=Ji,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=ll,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==ts&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ol&&(n.blendSrc=this.blendSrc),this.blendDst!==ll&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class De extends Cs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qe=new B,pa=new bt;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zc,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array),r=En(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zc&&(t.usage=this.usage),t}}class Ju extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qu extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let dp=0;const qn=new Le,Uo=new He,Vs=new B,Fn=new As,Ar=new As,cn=new B;class Ne extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($u(t)?Qu:Ju)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new _e().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return Uo.lookAt(t),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Fn.min,Ar.min),Fn.expandByPoint(cn),cn.addVectors(Fn.max,Ar.max),Fn.expandByPoint(cn)):(Fn.expandByPoint(Ar.min),Fn.expandByPoint(Ar.max))}Fn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)cn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(cn));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)cn.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(t,c),cn.add(Vs)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new B,l[C]=new B;const c=new B,u=new B,h=new B,f=new bt,p=new bt,v=new bt,x=new B,m=new B;function d(C,M,_){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,_),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,_),u.sub(c),h.sub(c),p.sub(f),v.sub(f);const T=1/(p.x*v.y-v.x*p.y);isFinite(T)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(T),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(T),o[C].add(x),o[M].add(x),o[_].add(x),l[C].add(m),l[M].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,M=y.length;C<M;++C){const _=y[C],T=_.start,D=_.count;for(let k=T,L=T+D;k<L;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new B,g=new B,A=new B,E=new B;function w(C){A.fromBufferAttribute(s,C),E.copy(A);const M=o[C];S.copy(M),S.sub(A.multiplyScalar(A.dot(M))).normalize(),g.crossVectors(E,M);const T=g.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,T)}for(let C=0,M=y.length;C<M;++C){const _=y[C],T=_.start,D=_.count;for(let k=T,L=T+D;k<L;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)f[v++]=c[p++]}return new Ve(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mh=new Le,ss=new bc,ma=new _r,gh=new B,ga=new B,va=new B,xa=new B,No=new B,_a=new B,vh=new B,Ma=new B;class oe extends He{constructor(t=new Ne,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){_a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(No.fromBufferAttribute(h,t),a?_a.addScaledVector(No,u):_a.addScaledVector(No.sub(e),u))}e.add(_a)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(ma.containsPoint(ss.origin)===!1&&(ss.intersectSphere(ma,gh)===null||ss.origin.distanceToSquared(gh)>(t.far-t.near)**2))&&(mh.copy(r).invert(),ss.copy(t.ray).applyMatrix4(mh),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],d=a[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let g=y,A=S;g<A;g+=3){const E=o.getX(g),w=o.getX(g+1),C=o.getX(g+2);s=ya(this,d,t,n,c,u,h,E,w,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const y=o.getX(m),S=o.getX(m+1),g=o.getX(m+2);s=ya(this,a,t,n,c,u,h,y,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],d=a[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=y,A=S;g<A;g+=3){const E=g,w=g+1,C=g+2;s=ya(this,d,t,n,c,u,h,E,w,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const y=m,S=m+1,g=m+2;s=ya(this,a,t,n,c,u,h,y,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function pp(i,t,e,n,s,r,a,o){let l;if(t.side===Pn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ts,o),l===null)return null;Ma.copy(o),Ma.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ma);return c<e.near||c>e.far?null:{distance:c,point:Ma.clone(),object:i}}function ya(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ga),i.getVertexPosition(l,va),i.getVertexPosition(c,xa);const u=pp(i,t,e,n,ga,va,xa,vh);if(u){const h=new B;oi.getBarycoord(vh,ga,va,xa,h),s&&(u.uv=oi.getInterpolatedAttribute(s,o,l,c,h,new bt)),r&&(u.uv1=oi.getInterpolatedAttribute(r,o,l,c,h,new bt)),a&&(u.normal=oi.getInterpolatedAttribute(a,o,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};oi.getNormal(ga,va,xa,f.normal),u.face=f,u.barycoord=h}return u}class Cn extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(h,2));function v(x,m,d,y,S,g,A,E,w,C,M){const _=g/w,T=A/C,D=g/2,k=A/2,L=E/2,O=w+1,V=C+1;let W=0,G=0;const j=new B;for(let nt=0;nt<V;nt++){const ot=nt*T-k;for(let At=0;At<O;At++){const kt=At*_-D;j[x]=kt*y,j[m]=ot*S,j[d]=L,c.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[d]=E>0?1:-1,u.push(j.x,j.y,j.z),h.push(At/w),h.push(1-nt/C),W+=1}}for(let nt=0;nt<C;nt++)for(let ot=0;ot<w;ot++){const At=f+ot+O*nt,kt=f+ot+O*(nt+1),it=f+(ot+1)+O*(nt+1),ut=f+(ot+1)+O*nt;l.push(At,kt,ut),l.push(kt,it,ut),G+=6}o.addGroup(p,G,M),p+=G,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Tn(i){const t={};for(let e=0;e<i.length;e++){const n=hr(i[e]);for(const s in n)t[s]=n[s]}return t}function mp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const li={clone:hr,merge:Tn};var gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends Cs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ef extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new B,xh=new bt,_h=new bt;class kn extends ef{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,xh,_h),e.subVectors(_h,xh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hs=-90,Ws=1;class xp extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kn(Hs,Ws,t,e);s.layers=this.layers,this.add(s);const r=new kn(Hs,Ws,t,e);r.layers=this.layers,this.add(r);const a=new kn(Hs,Ws,t,e);a.layers=this.layers,this.add(a);const o=new kn(Hs,Ws,t,e);o.layers=this.layers,this.add(o);const l=new kn(Hs,Ws,t,e);l.layers=this.layers,this.add(l);const c=new kn(Hs,Ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class nf extends bn{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:lr,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _p extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new nf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Cn(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:pn});r.uniforms.tEquirect.value=e;const a=new oe(s,r),o=e.minFilter;return e.minFilter===ps&&(e.minFilter=vi),new xp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const zo=new B,Mp=new B,yp=new _e;class hs{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=zo.subVectors(n,e).cross(Mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(zo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yp.getNormalMatrix(t),s=this.coplanarPoint(zo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new _r,Sa=new B;class Ec{constructor(t=new hs,e=new hs,n=new hs,s=new hs,r=new hs,a=new hs){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ni){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],v=s[9],x=s[10],m=s[11],d=s[12],y=s[13],S=s[14],g=s[15];if(n[0].setComponents(l-r,f-c,m-p,g-d).normalize(),n[1].setComponents(l+r,f+c,m+p,g+d).normalize(),n[2].setComponents(l+a,f+u,m+v,g+y).normalize(),n[3].setComponents(l-a,f-u,m-v,g-y).normalize(),n[4].setComponents(l-o,f-h,m-x,g-S).normalize(),e===Ni)n[5].setComponents(l+o,f+h,m+x,g+S).normalize();else if(e===ja)n[5].setComponents(o,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Sa.x=s.normal.x>0?t.max.x:t.min.x,Sa.y=s.normal.y>0?t.max.y:t.min.y,Sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sp(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){const v=h[f],x=h[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){const x=h[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Zn extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,p=[],v=[],x=[],m=[];for(let d=0;d<u;d++){const y=d*f-a;for(let S=0;S<c;S++){const g=S*h-r;v.push(g,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const S=y+c*d,g=y+c*(d+1),A=y+1+c*(d+1),E=y+1+c*d;p.push(S,g,E),p.push(g,A,E)}this.setIndex(p),this.setAttribute("position",new pe(v,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.width,t.height,t.widthSegments,t.heightSegments)}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",t0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,a0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,m0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,g0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,y0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,k0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,G0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,J0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,om=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,um=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ym=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Se={alphahash_fragment:bp,alphahash_pars_fragment:wp,alphamap_fragment:Ep,alphamap_pars_fragment:Tp,alphatest_fragment:Ap,alphatest_pars_fragment:Cp,aomap_fragment:Rp,aomap_pars_fragment:Pp,batching_pars_vertex:Dp,batching_vertex:Lp,begin_vertex:Ip,beginnormal_vertex:Up,bsdfs:Np,iridescence_fragment:zp,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:Gp,color_fragment:Vp,color_pars_fragment:Hp,color_pars_vertex:Wp,color_vertex:Xp,common:qp,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:$p,displacementmap_pars_vertex:jp,displacementmap_vertex:Zp,emissivemap_fragment:Kp,emissivemap_pars_fragment:Jp,colorspace_fragment:Qp,colorspace_pars_fragment:t0,envmap_fragment:e0,envmap_common_pars_fragment:n0,envmap_pars_fragment:i0,envmap_pars_vertex:s0,envmap_physical_pars_fragment:m0,envmap_vertex:r0,fog_vertex:a0,fog_pars_vertex:o0,fog_fragment:l0,fog_pars_fragment:c0,gradientmap_pars_fragment:h0,lightmap_pars_fragment:u0,lights_lambert_fragment:f0,lights_lambert_pars_fragment:d0,lights_pars_begin:p0,lights_toon_fragment:g0,lights_toon_pars_fragment:v0,lights_phong_fragment:x0,lights_phong_pars_fragment:_0,lights_physical_fragment:M0,lights_physical_pars_fragment:y0,lights_fragment_begin:S0,lights_fragment_maps:b0,lights_fragment_end:w0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:T0,logdepthbuf_pars_vertex:A0,logdepthbuf_vertex:C0,map_fragment:R0,map_pars_fragment:P0,map_particle_fragment:D0,map_particle_pars_fragment:L0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:U0,morphinstance_vertex:N0,morphcolor_vertex:z0,morphnormal_vertex:F0,morphtarget_pars_vertex:O0,morphtarget_vertex:k0,normal_fragment_begin:B0,normal_fragment_maps:G0,normal_pars_fragment:V0,normal_pars_vertex:H0,normal_vertex:W0,normalmap_pars_fragment:X0,clearcoat_normal_fragment_begin:q0,clearcoat_normal_fragment_maps:Y0,clearcoat_pars_fragment:$0,iridescence_pars_fragment:j0,opaque_fragment:Z0,packing:K0,premultiplied_alpha_fragment:J0,project_vertex:Q0,dithering_fragment:tm,dithering_pars_fragment:em,roughnessmap_fragment:nm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:sm,shadowmap_pars_vertex:rm,shadowmap_vertex:am,shadowmask_pars_fragment:om,skinbase_vertex:lm,skinning_pars_vertex:cm,skinning_vertex:hm,skinnormal_vertex:um,specularmap_fragment:fm,specularmap_pars_fragment:dm,tonemapping_fragment:pm,tonemapping_pars_fragment:mm,transmission_fragment:gm,transmission_pars_fragment:vm,uv_pars_fragment:xm,uv_pars_vertex:_m,uv_vertex:Mm,worldpos_vertex:ym,background_vert:Sm,background_frag:bm,backgroundCube_vert:wm,backgroundCube_frag:Em,cube_vert:Tm,cube_frag:Am,depth_vert:Cm,depth_frag:Rm,distanceRGBA_vert:Pm,distanceRGBA_frag:Dm,equirect_vert:Lm,equirect_frag:Im,linedashed_vert:Um,linedashed_frag:Nm,meshbasic_vert:zm,meshbasic_frag:Fm,meshlambert_vert:Om,meshlambert_frag:km,meshmatcap_vert:Bm,meshmatcap_frag:Gm,meshnormal_vert:Vm,meshnormal_frag:Hm,meshphong_vert:Wm,meshphong_frag:Xm,meshphysical_vert:qm,meshphysical_frag:Ym,meshtoon_vert:$m,meshtoon_frag:jm,points_vert:Zm,points_frag:Km,shadow_vert:Jm,shadow_frag:Qm,sprite_vert:tg,sprite_frag:eg},Bt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},gi={basic:{uniforms:Tn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Tn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Tn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Tn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Tn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Tn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Tn([Bt.points,Bt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Tn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Tn([Bt.common,Bt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Tn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Tn([Bt.sprite,Bt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:Tn([Bt.common,Bt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:Tn([Bt.lights,Bt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};gi.physical={uniforms:Tn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const ba={r:0,b:0,g:0},as=new yi,ng=new Le;function ig(i,t,e,n,s,r,a){const o=new Ct(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function v(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function x(y){let S=!1;const g=v(y);g===null?d(o,l):g&&g.isColor&&(d(g,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const g=v(S);g&&(g.isCubeTexture||g.mapping===Qa)?(u===void 0&&(u=new oe(new Cn(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:hr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),as.copy(S.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ng.makeRotationFromEuler(as)),u.material.toneMapped=Pe.getTransfer(g.colorSpace)!==Fe,(h!==g||f!==g.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,f=g.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new oe(new Zn(2,2),new je({name:"BackgroundMaterial",uniforms:hr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Pe.getTransfer(g.colorSpace)!==Fe,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=g,f=g.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,S){y.getRGB(ba,tf(i)),n.buffers.color.setClear(ba.r,ba.g,ba.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:x,addToRenderList:m}}function sg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,T,D,k,L){let O=!1;const V=h(k,D,T);r!==V&&(r=V,c(r.object)),O=p(_,k,D,L),O&&v(_,k,D,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,g(_,T,D,k),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,T,D){const k=D.wireframe===!0;let L=n[_.id];L===void 0&&(L={},n[_.id]=L);let O=L[T.id];O===void 0&&(O={},L[T.id]=O);let V=O[k];return V===void 0&&(V=f(l()),O[k]=V),V}function f(_){const T=[],D=[],k=[];for(let L=0;L<e;L++)T[L]=0,D[L]=0,k[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:D,attributeDivisors:k,object:_,attributes:{},index:null}}function p(_,T,D,k){const L=r.attributes,O=T.attributes;let V=0;const W=D.getAttributes();for(const G in W)if(W[G].location>=0){const nt=L[G];let ot=O[G];if(ot===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor)),nt===void 0||nt.attribute!==ot||ot&&nt.data!==ot.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function v(_,T,D,k){const L={},O=T.attributes;let V=0;const W=D.getAttributes();for(const G in W)if(W[G].location>=0){let nt=O[G];nt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(nt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(nt=_.instanceColor));const ot={};ot.attribute=nt,nt&&nt.data&&(ot.data=nt.data),L[G]=ot,V++}r.attributes=L,r.attributesNum=V,r.index=k}function x(){const _=r.newAttributes;for(let T=0,D=_.length;T<D;T++)_[T]=0}function m(_){d(_,0)}function d(_,T){const D=r.newAttributes,k=r.enabledAttributes,L=r.attributeDivisors;D[_]=1,k[_]===0&&(i.enableVertexAttribArray(_),k[_]=1),L[_]!==T&&(i.vertexAttribDivisor(_,T),L[_]=T)}function y(){const _=r.newAttributes,T=r.enabledAttributes;for(let D=0,k=T.length;D<k;D++)T[D]!==_[D]&&(i.disableVertexAttribArray(D),T[D]=0)}function S(_,T,D,k,L,O,V){V===!0?i.vertexAttribIPointer(_,T,D,L,O):i.vertexAttribPointer(_,T,D,k,L,O)}function g(_,T,D,k){x();const L=k.attributes,O=D.getAttributes(),V=T.defaultAttributeValues;for(const W in O){const G=O[W];if(G.location>=0){let j=L[W];if(j===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(j=_.instanceColor)),j!==void 0){const nt=j.normalized,ot=j.itemSize,At=t.get(j);if(At===void 0)continue;const kt=At.buffer,it=At.type,ut=At.bytesPerElement,Rt=it===i.INT||it===i.UNSIGNED_INT||j.gpuType===mc;if(j.isInterleavedBufferAttribute){const dt=j.data,Gt=dt.stride,qt=j.offset;if(dt.isInstancedInterleavedBuffer){for(let $t=0;$t<G.locationSize;$t++)d(G.location+$t,dt.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let $t=0;$t<G.locationSize;$t++)m(G.location+$t);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let $t=0;$t<G.locationSize;$t++)S(G.location+$t,ot/G.locationSize,it,nt,Gt*ut,(qt+ot/G.locationSize*$t)*ut,Rt)}else{if(j.isInstancedBufferAttribute){for(let dt=0;dt<G.locationSize;dt++)d(G.location+dt,j.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let dt=0;dt<G.locationSize;dt++)m(G.location+dt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let dt=0;dt<G.locationSize;dt++)S(G.location+dt,ot/G.locationSize,it,nt,ot*ut,ot/G.locationSize*dt*ut,Rt)}}else if(V!==void 0){const nt=V[W];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(G.location,nt);break;case 3:i.vertexAttrib3fv(G.location,nt);break;case 4:i.vertexAttrib4fv(G.location,nt);break;default:i.vertexAttrib1fv(G.location,nt)}}}}y()}function A(){C();for(const _ in n){const T=n[_];for(const D in T){const k=T[D];for(const L in k)u(k[L].object),delete k[L];delete T[D]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const T=n[_.id];for(const D in T){const k=T[D];for(const L in k)u(k[L].object),delete k[L];delete T[D]}delete n[_.id]}function w(_){for(const T in n){const D=n[T];if(D[_.id]===void 0)continue;const k=D[_.id];for(const L in k)u(k[L].object),delete k[L];delete D[_.id]}}function C(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function rg(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x]*f[x];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ag(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==$n&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Mi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==hi&&!C)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:g,vertexTextures:A,maxSamples:E}}function og(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new hs,o=new _e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,S=y*4;let g=d.clippingState||null;l.value=g,g=u(v,f,S,p);for(let A=0;A!==S;++A)g[A]=e[A];d.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const d=p+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,g=p;S!==x;++S,g+=4)a.copy(h[S]).applyMatrix4(y,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function lg(i){let t=new WeakMap;function e(a,o){return o===xl?a.mapping=lr:o===_l&&(a.mapping=cr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===xl||o===_l)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _p(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Tc extends ef{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ks=4,Mh=[.125,.215,.35,.446,.526,.582],fs=20,Fo=new Tc,yh=new Ct;let Oo=null,ko=0,Bo=0,Go=!1;const us=(1+Math.sqrt(5))/2,Xs=1/us,Sh=[new B(-us,Xs,0),new B(us,Xs,0),new B(-Xs,0,us),new B(Xs,0,us),new B(0,us,-Xs),new B(0,us,Xs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class bh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Oo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oo,ko,Bo),this._renderer.xr.enabled=Go,t.scissorTest=!1,wa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===lr||t.mapping===cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:jn,format:$n,colorSpace:vr,depthBuffer:!1},s=wh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cg(r)),this._blurMaterial=hg(r,t,e)}return s}_compileMaterial(t){const e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,n,s){const o=new kn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(yh),u.toneMapping=Qi,u.autoClear=!1;const p=new De({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),v=new oe(new Cn,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(yh),x=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const S=this._cubeSize;wa(s,y*S,d>2?S:0,S,S),u.setRenderTarget(s),x&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===lr||t.mapping===cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;wa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Fo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sh[(s-r-1)%Sh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new oe(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fs-1),x=r/v,m=isFinite(r)?1+Math.floor(u*x):fs;m>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);const d=[];let y=0;for(let w=0;w<fs;++w){const C=w/x,M=Math.exp(-C*C/2);d.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const g=this._sizeLods[s],A=3*g*(s>S-Ks?s-S+Ks:0),E=4*(this._cubeSize-g);wa(e,A,E,3*g,2*g),l.setRenderTarget(e),l.render(h,Fo)}}function cg(i){const t=[],e=[],n=[];let s=i;const r=i-Ks+1+Mh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ks?l=Mh[a-i+Ks-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,x=3,m=2,d=1,y=new Float32Array(x*v*p),S=new Float32Array(m*v*p),g=new Float32Array(d*v*p);for(let E=0;E<p;E++){const w=E%3*2/3-1,C=E>2?0:-1,M=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(M,x*v*E),S.set(f,m*v*E);const _=[E,E,E,E,E,E];g.set(_,d*v*E)}const A=new Ne;A.setAttribute("position",new Ve(y,x)),A.setAttribute("uv",new Ve(S,m)),A.setAttribute("faceIndex",new Ve(g,d)),t.push(A),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wh(i,t,e){const n=new In(i,t,e);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function hg(i,t,e){const n=new Float32Array(fs),s=new B(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Eh(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Th(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ac(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ug(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===xl||l===_l,u=l===lr||l===cr;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new bh(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new bh(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function fg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dg(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const y=p.array;x=p.version;for(let S=0,g=y.length;S<g;S+=3){const A=y[S+0],E=y[S+1],w=y[S+2];f.push(A,E,E,w,w,A)}}else if(v!==void 0){const y=v.array;x=v.version;for(let S=0,g=y.length/3-1;S<g;S+=3){const A=S+0,E=S+1,w=S+2;f.push(A,E,E,w,w,A)}}else return;const m=new($u(f)?Qu:Ju)(f,1);m.version=x;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function pg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,f*a,v),e.update(p,n,v))}function u(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];e.update(m,n,1)}function h(f,p,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,v);let d=0;for(let y=0;y<v;y++)d+=p[y]*x[y];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function mg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gg(i,t,e){const n=new WeakMap,s=new Be;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let _=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var p=_;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let g=0;v===!0&&(g=1),x===!0&&(g=2),m===!0&&(g=3);let A=o.attributes.position.count*g,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const w=new Float32Array(A*E*4*h),C=new Zu(w,A,E,h);C.type=hi,C.needsUpdate=!0;const M=g*4;for(let T=0;T<h;T++){const D=d[T],k=y[T],L=S[T],O=A*E*4*T;for(let V=0;V<D.count;V++){const W=V*M;v===!0&&(s.fromBufferAttribute(D,V),w[O+W+0]=s.x,w[O+W+1]=s.y,w[O+W+2]=s.z,w[O+W+3]=0),x===!0&&(s.fromBufferAttribute(k,V),w[O+W+4]=s.x,w[O+W+5]=s.y,w[O+W+6]=s.z,w[O+W+7]=0),m===!0&&(s.fromBufferAttribute(L,V),w[O+W+8]=s.x,w[O+W+9]=s.y,w[O+W+10]=s.z,w[O+W+11]=L.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new bt(A,E)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function vg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Cc extends bn{constructor(t,e,n,s,r,a,o,l,c,u=Qs){if(u!==Qs&&u!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qs&&(n=ys),n===void 0&&u===bs&&(n=Ss),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const rf=new bn,Ah=new Cc(1,1),af=new Zu,of=new sp,lf=new nf,Ch=[],Rh=[],Ph=new Float32Array(16),Dh=new Float32Array(9),Lh=new Float32Array(4);function Mr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ch[s];if(r===void 0&&(r=new Float32Array(s),Ch[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function on(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function no(i,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function Sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Lh.set(n),i.uniformMatrix2fv(this.addr,!1,Lh),ln(e,n)}}function bg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Dh.set(n),i.uniformMatrix3fv(this.addr,!1,Dh),ln(e,n)}}function wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Ph.set(n),i.uniformMatrix4fv(this.addr,!1,Ph),ln(e,n)}}function Eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function Cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function Rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function Dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function Ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ah.compareFunction=Yu,r=Ah):r=rf,e.setTexture2D(t||r,s)}function Ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||of,s)}function Ng(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||lf,s)}function zg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||af,s)}function Fg(i){switch(i){case 5126:return xg;case 35664:return _g;case 35665:return Mg;case 35666:return yg;case 35674:return Sg;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Cg;case 5125:return Rg;case 36294:return Pg;case 36295:return Dg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return zg}}function Og(i,t){i.uniform1fv(this.addr,t)}function kg(i,t){const e=Mr(t,this.size,2);i.uniform2fv(this.addr,e)}function Bg(i,t){const e=Mr(t,this.size,3);i.uniform3fv(this.addr,e)}function Gg(i,t){const e=Mr(t,this.size,4);i.uniform4fv(this.addr,e)}function Vg(i,t){const e=Mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hg(i,t){const e=Mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wg(i,t){const e=Mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xg(i,t){i.uniform1iv(this.addr,t)}function qg(i,t){i.uniform2iv(this.addr,t)}function Yg(i,t){i.uniform3iv(this.addr,t)}function $g(i,t){i.uniform4iv(this.addr,t)}function jg(i,t){i.uniform1uiv(this.addr,t)}function Zg(i,t){i.uniform2uiv(this.addr,t)}function Kg(i,t){i.uniform3uiv(this.addr,t)}function Jg(i,t){i.uniform4uiv(this.addr,t)}function Qg(i,t,e){const n=this.cache,s=t.length,r=no(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||rf,r[a])}function tv(i,t,e){const n=this.cache,s=t.length,r=no(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||of,r[a])}function ev(i,t,e){const n=this.cache,s=t.length,r=no(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||lf,r[a])}function nv(i,t,e){const n=this.cache,s=t.length,r=no(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||af,r[a])}function iv(i){switch(i){case 5126:return Og;case 35664:return kg;case 35665:return Bg;case 35666:return Gg;case 35674:return Vg;case 35675:return Hg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return $g;case 5125:return jg;case 36294:return Zg;case 36295:return Kg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return nv}}class sv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fg(e.type)}}class rv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iv(e.type)}}class av{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function Ih(i,t){i.seq.push(t),i.map[t.id]=t}function ov(i,t,e){const n=i.name,s=n.length;for(Vo.lastIndex=0;;){const r=Vo.exec(n),a=Vo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ih(e,c===void 0?new sv(o,i,t):new rv(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new av(o),Ih(e,h)),e=h}}}class qa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);ov(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Uh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const lv=37297;let cv=0;function hv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Nh=new _e;function uv(i){Pe._getMatrix(Nh,Pe.workingColorSpace,i);const t=`mat3( ${Nh.elements.map(e=>e.toFixed(4))} )`;switch(Pe.getTransfer(i)){case eo:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hv(i.getShaderSource(t),a)}else return s}function fv(i,t){const e=uv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dv(i,t){let e;switch(t){case Lu:e="Linear";break;case Iu:e="Reinhard";break;case Uu:e="Cineon";break;case pc:e="ACESFilmic";break;case Nu:e="AgX";break;case zu:e="Neutral";break;case Sd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ea=new B;function pv(){Pe.getLuminanceCoefficients(Ea);const i=Ea.x.toFixed(4),t=Ea.y.toFixed(4),e=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function gv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ir(i){return i!==""}function Fh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(i){return i.replace(xv,Mv)}const _v=new Map;function Mv(i,t){let e=Se[t];if(e===void 0){const n=_v.get(t);if(n!==void 0)e=Se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yl(e)}const yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(i){return i.replace(yv,Sv)}function Sv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ru?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function wv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case cr:t="ENVMAP_TYPE_CUBE";break;case Qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ev(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cr:t="ENVMAP_MODE_REFRACTION";break}return t}function Tv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dc:t="ENVMAP_BLENDING_MULTIPLY";break;case Md:t="ENVMAP_BLENDING_MIX";break;case yd:t="ENVMAP_BLENDING_ADD";break}return t}function Av(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=bv(e),c=wv(e),u=Ev(e),h=Tv(e),f=Av(e),p=mv(e),v=gv(r),x=s.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ir).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ir).join(`
`),d.length>0&&(d+=`
`)):(m=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),d=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?Se.tonemapping_pars_fragment:"",e.toneMapping!==Qi?dv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,fv("linearToOutputTexel",e.outputColorSpace),pv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),a=Yl(a),a=Fh(a,e),a=Oh(a,e),o=Yl(o),o=Fh(o,e),o=Oh(o,e),a=kh(a),o=kh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=y+m+a,g=y+d+o,A=Uh(s,s.VERTEX_SHADER,S),E=Uh(s,s.FRAGMENT_SHADER,g);s.attachShader(x,A),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(T){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(A).trim(),L=s.getShaderInfoLog(E).trim();let O=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{const W=zh(s,A,"vertex"),G=zh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+D+`
`+W+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(k===""||L==="")&&(V=!1);V&&(T.diagnostics={runnable:O,programLog:D,vertexShader:{log:k,prefix:m},fragmentShader:{log:L,prefix:d}})}s.deleteShader(A),s.deleteShader(E),C=new qa(s,x),M=vv(s,x)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,lv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let Rv=0;class Pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dv(t),e.set(t,n)),n}}class Dv{constructor(t){this.id=Rv++,this.code=t,this.usedTimes=0}}function Lv(i,t,e,n,s,r,a){const o=new wc,l=new Pv,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,T,D,k){const L=D.fog,O=k.geometry,V=M.isMeshStandardMaterial?D.environment:null,W=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),G=W&&W.mapping===Qa?W.image.height:null,j=v[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const nt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ot=nt!==void 0?nt.length:0;let At=0;O.morphAttributes.position!==void 0&&(At=1),O.morphAttributes.normal!==void 0&&(At=2),O.morphAttributes.color!==void 0&&(At=3);let kt,it,ut,Rt;if(j){const we=gi[j];kt=we.vertexShader,it=we.fragmentShader}else kt=M.vertexShader,it=M.fragmentShader,l.update(M),ut=l.getVertexShaderID(M),Rt=l.getFragmentShaderID(M);const dt=i.getRenderTarget(),Gt=i.state.buffers.depth.getReversed(),qt=k.isInstancedMesh===!0,$t=k.isBatchedMesh===!0,te=!!M.map,ft=!!M.matcap,wt=!!W,F=!!M.aoMap,Ht=!!M.lightMap,_t=!!M.bumpMap,Nt=!!M.normalMap,Dt=!!M.displacementMap,ee=!!M.emissiveMap,q=!!M.metalnessMap,R=!!M.roughnessMap,b=M.anisotropy>0,H=M.clearcoat>0,Z=M.dispersion>0,tt=M.iridescence>0,et=M.sheen>0,Ut=M.transmission>0,Mt=b&&!!M.anisotropyMap,Pt=H&&!!M.clearcoatMap,re=H&&!!M.clearcoatNormalMap,yt=H&&!!M.clearcoatRoughnessMap,Wt=tt&&!!M.iridescenceMap,ae=tt&&!!M.iridescenceThicknessMap,le=et&&!!M.sheenColorMap,jt=et&&!!M.sheenRoughnessMap,Me=!!M.specularMap,ce=!!M.specularColorMap,ye=!!M.specularIntensityMap,X=Ut&&!!M.transmissionMap,It=Ut&&!!M.thicknessMap,rt=!!M.gradientMap,gt=!!M.alphaMap,zt=M.alphaTest>0,Ft=!!M.alphaHash,he=!!M.extensions;let ze=Qi;M.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ze=i.toneMapping);const ke={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:kt,fragmentShader:it,defines:M.defines,customVertexShaderID:ut,customFragmentShaderID:Rt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:$t,batchingColor:$t&&k._colorsTexture!==null,instancing:qt,instancingColor:qt&&k.instanceColor!==null,instancingMorph:qt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:vr,alphaToCoverage:!!M.alphaToCoverage,map:te,matcap:ft,envMap:wt,envMapMode:wt&&W.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:Ht,bumpMap:_t,normalMap:Nt,displacementMap:f&&Dt,emissiveMap:ee,normalMapObjectSpace:Nt&&M.normalMapType===Td,normalMapTangentSpace:Nt&&M.normalMapType===yc,metalnessMap:q,roughnessMap:R,anisotropy:b,anisotropyMap:Mt,clearcoat:H,clearcoatMap:Pt,clearcoatNormalMap:re,clearcoatRoughnessMap:yt,dispersion:Z,iridescence:tt,iridescenceMap:Wt,iridescenceThicknessMap:ae,sheen:et,sheenColorMap:le,sheenRoughnessMap:jt,specularMap:Me,specularColorMap:ce,specularIntensityMap:ye,transmission:Ut,transmissionMap:X,thicknessMap:It,gradientMap:rt,opaque:M.transparent===!1&&M.blending===Ji&&M.alphaToCoverage===!1,alphaMap:gt,alphaTest:zt,alphaHash:Ft,combine:M.combine,mapUv:te&&x(M.map.channel),aoMapUv:F&&x(M.aoMap.channel),lightMapUv:Ht&&x(M.lightMap.channel),bumpMapUv:_t&&x(M.bumpMap.channel),normalMapUv:Nt&&x(M.normalMap.channel),displacementMapUv:Dt&&x(M.displacementMap.channel),emissiveMapUv:ee&&x(M.emissiveMap.channel),metalnessMapUv:q&&x(M.metalnessMap.channel),roughnessMapUv:R&&x(M.roughnessMap.channel),anisotropyMapUv:Mt&&x(M.anisotropyMap.channel),clearcoatMapUv:Pt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:le&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:jt&&x(M.sheenRoughnessMap.channel),specularMapUv:Me&&x(M.specularMap.channel),specularColorMapUv:ce&&x(M.specularColorMap.channel),specularIntensityMapUv:ye&&x(M.specularIntensityMap.channel),transmissionMapUv:X&&x(M.transmissionMap.channel),thicknessMapUv:It&&x(M.thicknessMap.channel),alphaMapUv:gt&&x(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Nt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(te||gt),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Gt,skinning:k.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:At,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:te&&M.map.isVideoTexture===!0&&Pe.getTransfer(M.map.colorSpace)===Fe,decodeVideoTextureEmissive:ee&&M.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(M.emissiveMap.colorSpace)===Fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Je,flipSided:M.side===Pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:he&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&M.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function d(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)_.push(T),_.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(y(_,M),S(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function y(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function S(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function g(M){const _=v[M.type];let T;if(_){const D=gi[_];T=li.clone(D.uniforms)}else T=M.uniforms;return T}function A(M,_){let T;for(let D=0,k=u.length;D<k;D++){const L=u[D];if(L.cacheKey===_){T=L,++T.usedTimes;break}}return T===void 0&&(T=new Cv(i,_,M,r),u.push(T)),T}function E(M){if(--M.usedTimes===0){const _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:g,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:C}}function Iv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Uv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,p,v,x,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=x,d.group=m),t++,d}function o(h,f,p,v,x,m){const d=a(h,f,p,v,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,f,p,v,x,m){const d=a(h,f,p,v,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||Uv),n.length>1&&n.sort(f||Gh),s.length>1&&s.sort(f||Gh)}function u(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Nv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Vh,i.set(n,[a])):s>=r.length?(a=new Vh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function zv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Ct};break;case"SpotLight":e={position:new B,direction:new B,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function Fv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ov=0;function kv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bv(i){const t=new zv,e=Fv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new Le,a=new Le;function o(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,v=0,x=0,m=0,d=0,y=0,S=0,g=0,A=0,E=0,w=0;c.sort(kv);for(let M=0,_=c.length;M<_;M++){const T=c[M],D=T.color,k=T.intensity,L=T.distance,O=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=D.r*k,h+=D.g*k,f+=D.b*k;else if(T.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(T.sh.coefficients[V],k);w++}else if(T.isDirectionalLight){const V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const W=T.shadow,G=e.get(T);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=T.shadow.matrix,y++}n.directional[p]=V,p++}else if(T.isSpotLight){const V=t.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(D).multiplyScalar(k),V.distance=L,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,n.spot[x]=V;const W=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,W.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[x]=W.matrix,T.castShadow){const G=e.get(T);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=O,g++}x++}else if(T.isRectAreaLight){const V=t.get(T);V.color.copy(D).multiplyScalar(k),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=V,m++}else if(T.isPointLight){const V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){const W=T.shadow,G=e.get(T);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,G.shadowCameraNear=W.camera.near,G.shadowCameraFar=W.camera.far,n.pointShadow[v]=G,n.pointShadowMap[v]=O,n.pointShadowMatrix[v]=T.shadow.matrix,S++}n.point[v]=V,v++}else if(T.isHemisphereLight){const V=t.get(T);V.skyColor.copy(T.color).multiplyScalar(k),V.groundColor.copy(T.groundColor).multiplyScalar(k),n.hemi[d]=V,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Bt.LTC_FLOAT_1,n.rectAreaLTC2=Bt.LTC_FLOAT_2):(n.rectAreaLTC1=Bt.LTC_HALF_1,n.rectAreaLTC2=Bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==v||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==y||C.numPointShadows!==S||C.numSpotShadows!==g||C.numSpotMaps!==A||C.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=g+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,C.directionalLength=p,C.pointLength=v,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=y,C.numPointShadows=S,C.numSpotShadows=g,C.numSpotMaps=A,C.numLightProbes=w,n.version=Ov++)}function l(c,u){let h=0,f=0,p=0,v=0,x=0;const m=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const S=c[d];if(S.isDirectionalLight){const g=n.directional[h];g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),h++}else if(S.isSpotLight){const g=n.spot[p];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const g=n.rectArea[v];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(S.width*.5,0,0),g.halfHeight.set(0,S.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const g=n.point[f];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const g=n.hemi[x];g.direction.setFromMatrixPosition(S.matrixWorld),g.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Hh(i){const t=new Bv(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Gv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Hh(i),t.set(s,[o])):r>=a.length?(o=new Hh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Vv extends Cs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hv extends Cs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qv(i,t,e){let n=new Ec;const s=new bt,r=new bt,a=new Be,o=new Vv({depthPacking:Ed}),l=new Hv,c={},u=e.maxTextureSize,h={[ts]:Pn,[Pn]:ts,[Je]:Je},f=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Wv,fragmentShader:Xv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ne;v.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new oe(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let d=this.type;this.render=function(E,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),D=i.state;D.setBlending(pn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=d!==Di&&this.type===Di,L=d===Di&&this.type!==Di;for(let O=0,V=E.length;O<V;O++){const W=E[O],G=W.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const j=G.getFrameExtents();if(s.multiply(j),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,G.mapSize.y=r.y)),G.map===null||k===!0||L===!0){const ot=this.type!==Di?{minFilter:vn,magFilter:vn}:{};G.map!==null&&G.map.dispose(),G.map=new In(s.x,s.y,ot),G.map.texture.name=W.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const nt=G.getViewportCount();for(let ot=0;ot<nt;ot++){const At=G.getViewport(ot);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),D.viewport(a),G.updateMatrices(W,ot),n=G.getFrustum(),g(w,C,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===Di&&y(G,C),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,T)};function y(E,w){const C=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new In(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,C,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,C,p,x,null)}function S(E,w,C,M){let _=null;const T=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)_=T;else if(_=C.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const D=_.uuid,k=w.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let O=L[k];O===void 0&&(O=_.clone(),L[k]=O,w.addEventListener("dispose",A)),_=O}if(_.visible=w.visible,_.wireframe=w.wireframe,M===Di?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:h[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const D=i.properties.get(_);D.light=C}return _}function g(E,w,C,M,_){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Di)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const k=t.update(E),L=E.material;if(Array.isArray(L)){const O=k.groups;for(let V=0,W=O.length;V<W;V++){const G=O[V],j=L[G.materialIndex];if(j&&j.visible){const nt=S(E,j,M,_);E.onBeforeShadow(i,E,w,C,k,nt,G),i.renderBufferDirect(C,null,k,nt,E,G),E.onAfterShadow(i,E,w,C,k,nt,G)}}}else if(L.visible){const O=S(E,L,M,_);E.onBeforeShadow(i,E,w,C,k,O,null),i.renderBufferDirect(C,null,k,O,E,null),E.onAfterShadow(i,E,w,C,k,O,null)}}const D=E.children;for(let k=0,L=D.length;k<L;k++)g(D[k],w,C,M,_)}function A(E){E.target.removeEventListener("dispose",A);for(const C in c){const M=c[C],_=E.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const Yv={[ul]:fl,[dl]:gl,[pl]:vl,[or]:ml,[fl]:ul,[gl]:dl,[vl]:pl,[ml]:or};function $v(i,t){function e(){let X=!1;const It=new Be;let rt=null;const gt=new Be(0,0,0,0);return{setMask:function(zt){rt!==zt&&!X&&(i.colorMask(zt,zt,zt,zt),rt=zt)},setLocked:function(zt){X=zt},setClear:function(zt,Ft,he,ze,ke){ke===!0&&(zt*=ze,Ft*=ze,he*=ze),It.set(zt,Ft,he,ze),gt.equals(It)===!1&&(i.clearColor(zt,Ft,he,ze),gt.copy(It))},reset:function(){X=!1,rt=null,gt.set(-1,0,0,0)}}}function n(){let X=!1,It=!1,rt=null,gt=null,zt=null;return{setReversed:function(Ft){if(It!==Ft){const he=t.get("EXT_clip_control");It?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT);const ze=zt;zt=null,this.setClear(ze)}It=Ft},getReversed:function(){return It},setTest:function(Ft){Ft?dt(i.DEPTH_TEST):Gt(i.DEPTH_TEST)},setMask:function(Ft){rt!==Ft&&!X&&(i.depthMask(Ft),rt=Ft)},setFunc:function(Ft){if(It&&(Ft=Yv[Ft]),gt!==Ft){switch(Ft){case ul:i.depthFunc(i.NEVER);break;case fl:i.depthFunc(i.ALWAYS);break;case dl:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case pl:i.depthFunc(i.EQUAL);break;case ml:i.depthFunc(i.GEQUAL);break;case gl:i.depthFunc(i.GREATER);break;case vl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Ft}},setLocked:function(Ft){X=Ft},setClear:function(Ft){zt!==Ft&&(It&&(Ft=1-Ft),i.clearDepth(Ft),zt=Ft)},reset:function(){X=!1,rt=null,gt=null,zt=null,It=!1}}}function s(){let X=!1,It=null,rt=null,gt=null,zt=null,Ft=null,he=null,ze=null,ke=null;return{setTest:function(we){X||(we?dt(i.STENCIL_TEST):Gt(i.STENCIL_TEST))},setMask:function(we){It!==we&&!X&&(i.stencilMask(we),It=we)},setFunc:function(we,xn,dn){(rt!==we||gt!==xn||zt!==dn)&&(i.stencilFunc(we,xn,dn),rt=we,gt=xn,zt=dn)},setOp:function(we,xn,dn){(Ft!==we||he!==xn||ze!==dn)&&(i.stencilOp(we,xn,dn),Ft=we,he=xn,ze=dn)},setLocked:function(we){X=we},setClear:function(we){ke!==we&&(i.clearStencil(we),ke=we)},reset:function(){X=!1,It=null,rt=null,gt=null,zt=null,Ft=null,he=null,ze=null,ke=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],v=null,x=!1,m=null,d=null,y=null,S=null,g=null,A=null,E=null,w=new Ct(0,0,0),C=0,M=!1,_=null,T=null,D=null,k=null,L=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=W>=1):G.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=W>=2);let j=null,nt={};const ot=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),kt=new Be().fromArray(ot),it=new Be().fromArray(At);function ut(X,It,rt,gt){const zt=new Uint8Array(4),Ft=i.createTexture();i.bindTexture(X,Ft),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<rt;he++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(It,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(It+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return Ft}const Rt={};Rt[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(i.DEPTH_TEST),a.setFunc(or),_t(!1),Nt(qc),dt(i.CULL_FACE),F(pn);function dt(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function Gt(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function qt(X,It){return h[X]!==It?(i.bindFramebuffer(X,It),h[X]=It,X===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=It),X===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=It),!0):!1}function $t(X,It){let rt=p,gt=!1;if(X){rt=f.get(It),rt===void 0&&(rt=[],f.set(It,rt));const zt=X.textures;if(rt.length!==zt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Ft=0,he=zt.length;Ft<he;Ft++)rt[Ft]=i.COLOR_ATTACHMENT0+Ft;rt.length=zt.length,gt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,gt=!0);gt&&i.drawBuffers(rt)}function te(X){return v!==X?(i.useProgram(X),v=X,!0):!1}const ft={[ai]:i.FUNC_ADD,[ad]:i.FUNC_SUBTRACT,[od]:i.FUNC_REVERSE_SUBTRACT};ft[ld]=i.MIN,ft[cd]=i.MAX;const wt={[Dr]:i.ZERO,[hd]:i.ONE,[ud]:i.SRC_COLOR,[ol]:i.SRC_ALPHA,[md]:i.SRC_ALPHA_SATURATE,[hl]:i.DST_COLOR,[cl]:i.DST_ALPHA,[fd]:i.ONE_MINUS_SRC_COLOR,[ll]:i.ONE_MINUS_SRC_ALPHA,[pd]:i.ONE_MINUS_DST_COLOR,[dd]:i.ONE_MINUS_DST_ALPHA,[gd]:i.CONSTANT_COLOR,[vd]:i.ONE_MINUS_CONSTANT_COLOR,[xd]:i.CONSTANT_ALPHA,[_d]:i.ONE_MINUS_CONSTANT_ALPHA};function F(X,It,rt,gt,zt,Ft,he,ze,ke,we){if(X===pn){x===!0&&(Gt(i.BLEND),x=!1);return}if(x===!1&&(dt(i.BLEND),x=!0),X!==Du){if(X!==m||we!==M){if((d!==ai||g!==ai)&&(i.blendEquation(i.FUNC_ADD),d=ai,g=ai),we)switch(X){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fi:i.blendFunc(i.ONE,i.ONE);break;case Yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $c:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}y=null,S=null,A=null,E=null,w.set(0,0,0),C=0,m=X,M=we}return}zt=zt||It,Ft=Ft||rt,he=he||gt,(It!==d||zt!==g)&&(i.blendEquationSeparate(ft[It],ft[zt]),d=It,g=zt),(rt!==y||gt!==S||Ft!==A||he!==E)&&(i.blendFuncSeparate(wt[rt],wt[gt],wt[Ft],wt[he]),y=rt,S=gt,A=Ft,E=he),(ze.equals(w)===!1||ke!==C)&&(i.blendColor(ze.r,ze.g,ze.b,ke),w.copy(ze),C=ke),m=X,M=!1}function Ht(X,It){X.side===Je?Gt(i.CULL_FACE):dt(i.CULL_FACE);let rt=X.side===Pn;It&&(rt=!rt),_t(rt),X.blending===Ji&&X.transparent===!1?F(pn):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),r.setMask(X.colorWrite);const gt=X.stencilWrite;o.setTest(gt),gt&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ee(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(X){_!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),_=X)}function Nt(X){X!==sd?(dt(i.CULL_FACE),X!==T&&(X===qc?i.cullFace(i.BACK):X===rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Gt(i.CULL_FACE),T=X}function Dt(X){X!==D&&(V&&i.lineWidth(X),D=X)}function ee(X,It,rt){X?(dt(i.POLYGON_OFFSET_FILL),(k!==It||L!==rt)&&(i.polygonOffset(It,rt),k=It,L=rt)):Gt(i.POLYGON_OFFSET_FILL)}function q(X){X?dt(i.SCISSOR_TEST):Gt(i.SCISSOR_TEST)}function R(X){X===void 0&&(X=i.TEXTURE0+O-1),j!==X&&(i.activeTexture(X),j=X)}function b(X,It,rt){rt===void 0&&(j===null?rt=i.TEXTURE0+O-1:rt=j);let gt=nt[rt];gt===void 0&&(gt={type:void 0,texture:void 0},nt[rt]=gt),(gt.type!==X||gt.texture!==It)&&(j!==rt&&(i.activeTexture(rt),j=rt),i.bindTexture(X,It||Rt[X]),gt.type=X,gt.texture=It)}function H(){const X=nt[j];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ae(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function le(X){kt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),kt.copy(X))}function jt(X){it.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),it.copy(X))}function Me(X,It){let rt=c.get(It);rt===void 0&&(rt=new WeakMap,c.set(It,rt));let gt=rt.get(X);gt===void 0&&(gt=i.getUniformBlockIndex(It,X.name),rt.set(X,gt))}function ce(X,It){const gt=c.get(It).get(X);l.get(It)!==gt&&(i.uniformBlockBinding(It,gt,X.__bindingPointIndex),l.set(It,gt))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,nt={},h={},f=new WeakMap,p=[],v=null,x=!1,m=null,d=null,y=null,S=null,g=null,A=null,E=null,w=new Ct(0,0,0),C=0,M=!1,_=null,T=null,D=null,k=null,L=null,kt.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:Gt,bindFramebuffer:qt,drawBuffers:$t,useProgram:te,setBlending:F,setMaterial:Ht,setFlipSided:_t,setCullFace:Nt,setLineWidth:Dt,setPolygonOffset:ee,setScissorTest:q,activeTexture:R,bindTexture:b,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:Wt,texImage3D:ae,updateUBOMapping:Me,uniformBlockBinding:ce,texStorage2D:re,texStorage3D:yt,texSubImage2D:et,texSubImage3D:Ut,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Pt,scissor:le,viewport:jt,reset:ye}}function Wh(i,t,e,n){const s=jv(n);switch(e){case Gu:return i*t;case Hu:return i*t;case Wu:return i*t*2;case to:return i*t/s.components*s.byteLength;case xc:return i*t/s.components*s.byteLength;case Xu:return i*t*2/s.components*s.byteLength;case _c:return i*t*2/s.components*s.byteLength;case Vu:return i*t*3/s.components*s.byteLength;case $n:return i*t*4/s.components*s.byteLength;case Mc:return i*t*4/s.components*s.byteLength;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:case wl:return Math.max(i,16)*Math.max(t,8)/4;case yl:case bl:return Math.max(i,8)*Math.max(t,8)/2;case El:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xa:case Vl:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qu:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xl:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jv(i){switch(i){case Mi:case Ou:return{byteLength:1,components:1};case Hr:case ku:case jn:return{byteLength:2,components:1};case gc:case vc:return{byteLength:2,components:4};case ys:case mc:case hi:return{byteLength:4,components:1};case Bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Zv(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,b){return p?new OffscreenCanvas(R,b):Za("canvas")}function x(R,b,H){let Z=1;const tt=q(R);if((tt.width>H||tt.height>H)&&(Z=H/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const et=Math.floor(Z*tt.width),Ut=Math.floor(Z*tt.height);h===void 0&&(h=v(et,Ut));const Mt=b?v(et,Ut):h;return Mt.width=et,Mt.height=Ut,Mt.getContext("2d").drawImage(R,0,0,et,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+et+"x"+Ut+")."),Mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,b,H,Z,tt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=b;if(b===i.RED&&(H===i.FLOAT&&(et=i.R32F),H===i.HALF_FLOAT&&(et=i.R16F),H===i.UNSIGNED_BYTE&&(et=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.R8UI),H===i.UNSIGNED_SHORT&&(et=i.R16UI),H===i.UNSIGNED_INT&&(et=i.R32UI),H===i.BYTE&&(et=i.R8I),H===i.SHORT&&(et=i.R16I),H===i.INT&&(et=i.R32I)),b===i.RG&&(H===i.FLOAT&&(et=i.RG32F),H===i.HALF_FLOAT&&(et=i.RG16F),H===i.UNSIGNED_BYTE&&(et=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RG8UI),H===i.UNSIGNED_SHORT&&(et=i.RG16UI),H===i.UNSIGNED_INT&&(et=i.RG32UI),H===i.BYTE&&(et=i.RG8I),H===i.SHORT&&(et=i.RG16I),H===i.INT&&(et=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGB8UI),H===i.UNSIGNED_SHORT&&(et=i.RGB16UI),H===i.UNSIGNED_INT&&(et=i.RGB32UI),H===i.BYTE&&(et=i.RGB8I),H===i.SHORT&&(et=i.RGB16I),H===i.INT&&(et=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),H===i.UNSIGNED_INT&&(et=i.RGBA32UI),H===i.BYTE&&(et=i.RGBA8I),H===i.SHORT&&(et=i.RGBA16I),H===i.INT&&(et=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),b===i.RGBA){const Ut=tt?eo:Pe.getTransfer(Z);H===i.FLOAT&&(et=i.RGBA32F),H===i.HALF_FLOAT&&(et=i.RGBA16F),H===i.UNSIGNED_BYTE&&(et=Ut===Fe?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function g(R,b){let H;return R?b===null||b===ys||b===Ss?H=i.DEPTH24_STENCIL8:b===hi?H=i.DEPTH32F_STENCIL8:b===Hr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ys||b===Ss?H=i.DEPTH_COMPONENT24:b===hi?H=i.DEPTH_COMPONENT32F:b===Hr&&(H=i.DEPTH_COMPONENT16),H}function A(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==vn&&R.minFilter!==vi?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function E(R){const b=R.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&u.delete(b)}function w(R){const b=R.target;b.removeEventListener("dispose",w),_(b)}function C(R){const b=n.get(R);if(b.__webglInit===void 0)return;const H=R.source,Z=f.get(H);if(Z){const tt=Z[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(R),Object.keys(Z).length===0&&f.delete(H)}n.remove(R)}function M(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const H=R.source,Z=f.get(H);delete Z[b.__cacheKey],a.memory.textures--}function _(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let tt=0;tt<b.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=R.textures;for(let Z=0,tt=H.length;Z<tt;Z++){const et=n.get(H[Z]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(R)}let T=0;function D(){T=0}function k(){const R=T;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),T+=1,R}function L(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function O(R,b){const H=n.get(R);if(R.isVideoTexture&&Dt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(H,R,b);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function V(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){it(H,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function W(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){it(H,R,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function G(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){ut(H,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const j={[_i]:i.REPEAT,[ds]:i.CLAMP_TO_EDGE,[Ml]:i.MIRRORED_REPEAT},nt={[vn]:i.NEAREST,[bd]:i.NEAREST_MIPMAP_NEAREST,[ra]:i.NEAREST_MIPMAP_LINEAR,[vi]:i.LINEAR,[go]:i.LINEAR_MIPMAP_NEAREST,[ps]:i.LINEAR_MIPMAP_LINEAR},ot={[Ad]:i.NEVER,[Id]:i.ALWAYS,[Cd]:i.LESS,[Yu]:i.LEQUAL,[Rd]:i.EQUAL,[Ld]:i.GEQUAL,[Pd]:i.GREATER,[Dd]:i.NOTEQUAL};function At(R,b){if(b.type===hi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===vi||b.magFilter===go||b.magFilter===ra||b.magFilter===ps||b.minFilter===vi||b.minFilter===go||b.minFilter===ra||b.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,j[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,j[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,j[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,nt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,nt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ot[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===vn||b.minFilter!==ra&&b.minFilter!==ps||b.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function kt(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",E));const Z=b.source;let tt=f.get(Z);tt===void 0&&(tt={},f.set(Z,tt));const et=L(b);if(et!==R.__cacheKey){tt[et]===void 0&&(tt[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),tt[et].usedTimes++;const Ut=tt[R.__cacheKey];Ut!==void 0&&(tt[R.__cacheKey].usedTimes--,Ut.usedTimes===0&&M(b)),R.__cacheKey=et,R.__webglTexture=tt[et].texture}return H}function it(R,b,H){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=kt(R,b),et=b.source;e.bindTexture(Z,R.__webglTexture,i.TEXTURE0+H);const Ut=n.get(et);if(et.version!==Ut.__version||tt===!0){e.activeTexture(i.TEXTURE0+H);const Mt=Pe.getPrimaries(Pe.workingColorSpace),Pt=b.colorSpace===ji?null:Pe.getPrimaries(b.colorSpace),re=b.colorSpace===ji||Mt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let yt=x(b.image,!1,s.maxTextureSize);yt=ee(b,yt);const Wt=r.convert(b.format,b.colorSpace),ae=r.convert(b.type);let le=S(b.internalFormat,Wt,ae,b.colorSpace,b.isVideoTexture);At(Z,b);let jt;const Me=b.mipmaps,ce=b.isVideoTexture!==!0,ye=Ut.__version===void 0||tt===!0,X=et.dataReady,It=A(b,yt);if(b.isDepthTexture)le=g(b.format===bs,b.type),ye&&(ce?e.texStorage2D(i.TEXTURE_2D,1,le,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,le,yt.width,yt.height,0,Wt,ae,null));else if(b.isDataTexture)if(Me.length>0){ce&&ye&&e.texStorage2D(i.TEXTURE_2D,It,le,Me[0].width,Me[0].height);for(let rt=0,gt=Me.length;rt<gt;rt++)jt=Me[rt],ce?X&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,jt.width,jt.height,Wt,ae,jt.data):e.texImage2D(i.TEXTURE_2D,rt,le,jt.width,jt.height,0,Wt,ae,jt.data);b.generateMipmaps=!1}else ce?(ye&&e.texStorage2D(i.TEXTURE_2D,It,le,yt.width,yt.height),X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt.width,yt.height,Wt,ae,yt.data)):e.texImage2D(i.TEXTURE_2D,0,le,yt.width,yt.height,0,Wt,ae,yt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ce&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,le,Me[0].width,Me[0].height,yt.depth);for(let rt=0,gt=Me.length;rt<gt;rt++)if(jt=Me[rt],b.format!==$n)if(Wt!==null)if(ce){if(X)if(b.layerUpdates.size>0){const zt=Wh(jt.width,jt.height,b.format,b.type);for(const Ft of b.layerUpdates){const he=jt.data.subarray(Ft*zt/jt.data.BYTES_PER_ELEMENT,(Ft+1)*zt/jt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Ft,jt.width,jt.height,1,Wt,he)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,jt.width,jt.height,yt.depth,Wt,jt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,le,jt.width,jt.height,yt.depth,0,jt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,jt.width,jt.height,yt.depth,Wt,ae,jt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,le,jt.width,jt.height,yt.depth,0,Wt,ae,jt.data)}else{ce&&ye&&e.texStorage2D(i.TEXTURE_2D,It,le,Me[0].width,Me[0].height);for(let rt=0,gt=Me.length;rt<gt;rt++)jt=Me[rt],b.format!==$n?Wt!==null?ce?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,jt.width,jt.height,Wt,jt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,le,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?X&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,jt.width,jt.height,Wt,ae,jt.data):e.texImage2D(i.TEXTURE_2D,rt,le,jt.width,jt.height,0,Wt,ae,jt.data)}else if(b.isDataArrayTexture)if(ce){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,le,yt.width,yt.height,yt.depth),X)if(b.layerUpdates.size>0){const rt=Wh(yt.width,yt.height,b.format,b.type);for(const gt of b.layerUpdates){const zt=yt.data.subarray(gt*rt/yt.data.BYTES_PER_ELEMENT,(gt+1)*rt/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,yt.width,yt.height,1,Wt,ae,zt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Wt,ae,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,le,yt.width,yt.height,yt.depth,0,Wt,ae,yt.data);else if(b.isData3DTexture)ce?(ye&&e.texStorage3D(i.TEXTURE_3D,It,le,yt.width,yt.height,yt.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Wt,ae,yt.data)):e.texImage3D(i.TEXTURE_3D,0,le,yt.width,yt.height,yt.depth,0,Wt,ae,yt.data);else if(b.isFramebufferTexture){if(ye)if(ce)e.texStorage2D(i.TEXTURE_2D,It,le,yt.width,yt.height);else{let rt=yt.width,gt=yt.height;for(let zt=0;zt<It;zt++)e.texImage2D(i.TEXTURE_2D,zt,le,rt,gt,0,Wt,ae,null),rt>>=1,gt>>=1}}else if(Me.length>0){if(ce&&ye){const rt=q(Me[0]);e.texStorage2D(i.TEXTURE_2D,It,le,rt.width,rt.height)}for(let rt=0,gt=Me.length;rt<gt;rt++)jt=Me[rt],ce?X&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Wt,ae,jt):e.texImage2D(i.TEXTURE_2D,rt,le,Wt,ae,jt);b.generateMipmaps=!1}else if(ce){if(ye){const rt=q(yt);e.texStorage2D(i.TEXTURE_2D,It,le,rt.width,rt.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,ae,yt)}else e.texImage2D(i.TEXTURE_2D,0,le,Wt,ae,yt);m(b)&&d(Z),Ut.__version=et.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ut(R,b,H){if(b.image.length!==6)return;const Z=kt(R,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const et=n.get(tt);if(tt.version!==et.__version||Z===!0){e.activeTexture(i.TEXTURE0+H);const Ut=Pe.getPrimaries(Pe.workingColorSpace),Mt=b.colorSpace===ji?null:Pe.getPrimaries(b.colorSpace),Pt=b.colorSpace===ji||Ut===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const re=b.isCompressedTexture||b.image[0].isCompressedTexture,yt=b.image[0]&&b.image[0].isDataTexture,Wt=[];for(let gt=0;gt<6;gt++)!re&&!yt?Wt[gt]=x(b.image[gt],!0,s.maxCubemapSize):Wt[gt]=yt?b.image[gt].image:b.image[gt],Wt[gt]=ee(b,Wt[gt]);const ae=Wt[0],le=r.convert(b.format,b.colorSpace),jt=r.convert(b.type),Me=S(b.internalFormat,le,jt,b.colorSpace),ce=b.isVideoTexture!==!0,ye=et.__version===void 0||Z===!0,X=tt.dataReady;let It=A(b,ae);At(i.TEXTURE_CUBE_MAP,b);let rt;if(re){ce&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Me,ae.width,ae.height);for(let gt=0;gt<6;gt++){rt=Wt[gt].mipmaps;for(let zt=0;zt<rt.length;zt++){const Ft=rt[zt];b.format!==$n?le!==null?ce?X&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt,0,0,Ft.width,Ft.height,le,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt,Me,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt,0,0,Ft.width,Ft.height,le,jt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt,Me,Ft.width,Ft.height,0,le,jt,Ft.data)}}}else{if(rt=b.mipmaps,ce&&ye){rt.length>0&&It++;const gt=q(Wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Me,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(yt){ce?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Wt[gt].width,Wt[gt].height,le,jt,Wt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Me,Wt[gt].width,Wt[gt].height,0,le,jt,Wt[gt].data);for(let zt=0;zt<rt.length;zt++){const he=rt[zt].image[gt].image;ce?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt+1,0,0,he.width,he.height,le,jt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt+1,Me,he.width,he.height,0,le,jt,he.data)}}else{ce?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,le,jt,Wt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Me,le,jt,Wt[gt]);for(let zt=0;zt<rt.length;zt++){const Ft=rt[zt];ce?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt+1,0,0,le,jt,Ft.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt+1,Me,le,jt,Ft.image[gt])}}}m(b)&&d(i.TEXTURE_CUBE_MAP),et.__version=tt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Rt(R,b,H,Z,tt,et){const Ut=r.convert(H.format,H.colorSpace),Mt=r.convert(H.type),Pt=S(H.internalFormat,Ut,Mt,H.colorSpace),re=n.get(b),yt=n.get(H);if(yt.__renderTarget=b,!re.__hasExternalTextures){const Wt=Math.max(1,b.width>>et),ae=Math.max(1,b.height>>et);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,et,Pt,Wt,ae,b.depth,0,Ut,Mt,null):e.texImage2D(tt,et,Pt,Wt,ae,0,Ut,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Nt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,yt.__webglTexture,0,_t(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,yt.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(R,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const Z=b.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,et=g(b.stencilBuffer,tt),Ut=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=_t(b);Nt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,et,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,et,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,et,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,R)}else{const Z=b.textures;for(let tt=0;tt<Z.length;tt++){const et=Z[tt],Ut=r.convert(et.format,et.colorSpace),Mt=r.convert(et.type),Pt=S(et.internalFormat,Ut,Mt,et.colorSpace),re=_t(b);H&&Nt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Pt,b.width,b.height):Nt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Pt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Gt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const tt=Z.__webglTexture,et=_t(b);if(b.depthTexture.format===Qs)Nt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(b.depthTexture.format===bs)Nt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function qt(R){const b=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=Z}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Gt(b.__webglFramebuffer,R)}else if(H){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=i.createRenderbuffer(),dt(b.__webglDepthbuffer[Z],R,!1);else{const tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),dt(b.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(R,b,H){const Z=n.get(R);b!==void 0&&Rt(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&qt(R)}function te(R){const b=R.texture,H=n.get(R),Z=n.get(b);R.addEventListener("dispose",w);const tt=R.textures,et=R.isWebGLCubeRenderTarget===!0,Ut=tt.length>1;if(Ut||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,a.memory.textures++),et){H.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[Mt]=[];for(let Pt=0;Pt<b.mipmaps.length;Pt++)H.__webglFramebuffer[Mt][Pt]=i.createFramebuffer()}else H.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)H.__webglFramebuffer[Mt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let Mt=0,Pt=tt.length;Mt<Pt;Mt++){const re=n.get(tt[Mt]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Nt(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Mt=0;Mt<tt.length;Mt++){const Pt=tt[Mt];H.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Mt]);const re=r.convert(Pt.format,Pt.colorSpace),yt=r.convert(Pt.type),Wt=S(Pt.internalFormat,re,yt,Pt.colorSpace,R.isXRRenderTarget===!0),ae=_t(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Wt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,H.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),At(i.TEXTURE_CUBE_MAP,b);for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)Rt(H.__webglFramebuffer[Mt][Pt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Pt);else Rt(H.__webglFramebuffer[Mt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(b)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let Mt=0,Pt=tt.length;Mt<Pt;Mt++){const re=tt[Mt],yt=n.get(re);e.bindTexture(i.TEXTURE_2D,yt.__webglTexture),At(i.TEXTURE_2D,re),Rt(H.__webglFramebuffer,R,re,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),m(re)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Z.__webglTexture),At(Mt,b),b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)Rt(H.__webglFramebuffer[Pt],R,b,i.COLOR_ATTACHMENT0,Mt,Pt);else Rt(H.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,Mt,0);m(b)&&d(Mt),e.unbindTexture()}R.depthBuffer&&qt(R)}function ft(R){const b=R.textures;for(let H=0,Z=b.length;H<Z;H++){const tt=b[H];if(m(tt)){const et=y(R),Ut=n.get(tt).__webglTexture;e.bindTexture(et,Ut),d(et),e.unbindTexture()}}}const wt=[],F=[];function Ht(R){if(R.samples>0){if(Nt(R)===!1){const b=R.textures,H=R.width,Z=R.height;let tt=i.COLOR_BUFFER_BIT;const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(R),Mt=b.length>1;if(Mt)for(let Pt=0;Pt<b.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Pt=0;Pt<b.length;Pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);const re=n.get(b[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,tt,i.NEAREST),l===!0&&(wt.length=0,F.length=0,wt.push(i.COLOR_ATTACHMENT0+Pt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(wt.push(et),F.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Pt=0;Pt<b.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);const re=n.get(b[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function _t(R){return Math.min(s.maxSamples,R.samples)}function Nt(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Dt(R){const b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function ee(R,b){const H=R.colorSpace,Z=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==vr&&H!==ji&&(Pe.getTransfer(H)===Fe?(Z!==$n||tt!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function q(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=G,this.rebindTextures=$t,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Nt}function Kv(i,t){function e(n,s=ji){let r;const a=Pe.getTransfer(s);if(n===Mi)return i.UNSIGNED_BYTE;if(n===gc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ou)return i.BYTE;if(n===ku)return i.SHORT;if(n===Hr)return i.UNSIGNED_SHORT;if(n===mc)return i.INT;if(n===ys)return i.UNSIGNED_INT;if(n===hi)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===Gu)return i.ALPHA;if(n===Vu)return i.RGB;if(n===$n)return i.RGBA;if(n===Hu)return i.LUMINANCE;if(n===Wu)return i.LUMINANCE_ALPHA;if(n===Qs)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===to)return i.RED;if(n===xc)return i.RED_INTEGER;if(n===Xu)return i.RG;if(n===_c)return i.RG_INTEGER;if(n===Mc)return i.RGBA_INTEGER;if(n===Ga||n===Va||n===Ha||n===Wa)if(a===Fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===Sl||n===bl||n===wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===Tl||n===Al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===El||n===Tl)return a===Fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Al)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cl||n===Rl||n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Nl||n===zl||n===Fl||n===Ol||n===kl||n===Bl||n===Gl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ul)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ol)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===Vl||n===Hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return a===Fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qu||n===Wl||n===Xl||n===ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Jv extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class be extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qv={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new bn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new je({vertexShader:tx,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ix extends xr{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,v=null;const x=new nx,m=e.getContextAttributes();let d=null,y=null;const S=[],g=[],A=new bt;let E=null;const w=new kn;w.viewport=new Be;const C=new kn;C.viewport=new Be;const M=[w,C],_=new Jv;let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ut=S[it];return ut===void 0&&(ut=new Ho,S[it]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(it){let ut=S[it];return ut===void 0&&(ut=new Ho,S[it]=ut),ut.getGripSpace()},this.getHand=function(it){let ut=S[it];return ut===void 0&&(ut=new Ho,S[it]=ut),ut.getHandSpace()};function k(it){const ut=g.indexOf(it.inputSource);if(ut===-1)return;const Rt=S[ut];Rt!==void 0&&(Rt.update(it.inputSource,it.frame,c||a),Rt.dispatchEvent({type:it.type,data:it.inputSource}))}function L(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",O);for(let it=0;it<S.length;it++){const ut=g[it];ut!==null&&(g[it]=null,S[it].disconnect(ut))}T=null,D=null,x.reset(),t.setRenderTarget(d),p=null,f=null,h=null,s=null,y=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",L),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new In(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,Rt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?bs:Qs,Rt=m.stencil?Ss:ys);const Gt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Gt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new In(f.textureWidth,f.textureHeight,{format:$n,type:Mi,depthTexture:new Cc(f.textureWidth,f.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(it){for(let ut=0;ut<it.removed.length;ut++){const Rt=it.removed[ut],dt=g.indexOf(Rt);dt>=0&&(g[dt]=null,S[dt].disconnect(Rt))}for(let ut=0;ut<it.added.length;ut++){const Rt=it.added[ut];let dt=g.indexOf(Rt);if(dt===-1){for(let qt=0;qt<S.length;qt++)if(qt>=g.length){g.push(Rt),dt=qt;break}else if(g[qt]===null){g[qt]=Rt,dt=qt;break}if(dt===-1)break}const Gt=S[dt];Gt&&Gt.connect(Rt)}}const V=new B,W=new B;function G(it,ut,Rt){V.setFromMatrixPosition(ut.matrixWorld),W.setFromMatrixPosition(Rt.matrixWorld);const dt=V.distanceTo(W),Gt=ut.projectionMatrix.elements,qt=Rt.projectionMatrix.elements,$t=Gt[14]/(Gt[10]-1),te=Gt[14]/(Gt[10]+1),ft=(Gt[9]+1)/Gt[5],wt=(Gt[9]-1)/Gt[5],F=(Gt[8]-1)/Gt[0],Ht=(qt[8]+1)/qt[0],_t=$t*F,Nt=$t*Ht,Dt=dt/(-F+Ht),ee=Dt*-F;if(ut.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ee),it.translateZ(Dt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Gt[10]===-1)it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const q=$t+Dt,R=te+Dt,b=_t-ee,H=Nt+(dt-ee),Z=ft*te/R*q,tt=wt*te/R*q;it.projectionMatrix.makePerspective(b,H,Z,tt,q,R),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function j(it,ut){ut===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ut.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let ut=it.near,Rt=it.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(Rt=x.depthFar)),_.near=C.near=w.near=ut,_.far=C.far=w.far=Rt,(T!==_.near||D!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,D=_.far),w.layers.mask=it.layers.mask|2,C.layers.mask=it.layers.mask|4,_.layers.mask=w.layers.mask|C.layers.mask;const dt=it.parent,Gt=_.cameras;j(_,dt);for(let qt=0;qt<Gt.length;qt++)j(Gt[qt],dt);Gt.length===2?G(_,w,C):_.projectionMatrix.copy(w.projectionMatrix),nt(it,_,dt)};function nt(it,ut,Rt){Rt===null?it.matrix.copy(ut.matrixWorld):(it.matrix.copy(Rt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ut.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Wr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(it){l=it,f!==null&&(f.fixedFoveation=it),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=it)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ot=null;function At(it,ut){if(u=ut.getViewerPose(c||a),v=ut,u!==null){const Rt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let dt=!1;Rt.length!==_.cameras.length&&(_.cameras.length=0,dt=!0);for(let qt=0;qt<Rt.length;qt++){const $t=Rt[qt];let te=null;if(p!==null)te=p.getViewport($t);else{const wt=h.getViewSubImage(f,$t);te=wt.viewport,qt===0&&(t.setRenderTargetTextures(y,wt.colorTexture,f.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(y))}let ft=M[qt];ft===void 0&&(ft=new kn,ft.layers.enable(qt),ft.viewport=new Be,M[qt]=ft),ft.matrix.fromArray($t.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray($t.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(te.x,te.y,te.width,te.height),qt===0&&(_.matrix.copy(ft.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),dt===!0&&_.cameras.push(ft)}const Gt=s.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){const qt=h.getDepthInformation(Rt[0]);qt&&qt.isValid&&qt.texture&&x.init(t,qt,s.renderState)}}for(let Rt=0;Rt<S.length;Rt++){const dt=g[Rt],Gt=S[Rt];dt!==null&&Gt!==void 0&&Gt.update(dt,ut,c||a)}ot&&ot(it,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),v=null}const kt=new sf;kt.setAnimationLoop(At),this.setAnimationLoop=function(it){ot=it},this.dispose=function(){}}}const os=new yi,sx=new Le;function rx(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,tf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,S,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,g)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d),S=y.envMap,g=y.envMapRotation;S&&(m.envMap.value=S,os.copy(g),os.x*=-1,os.y*=-1,os.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),m.envMapRotation.value.setFromMatrix4(sx.makeRotationFromEuler(os)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ax(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const g=S.program;n.uniformBlockBinding(y,g)}function c(y,S){let g=s[y.id];g===void 0&&(v(y),g=u(y),s[y.id]=g,y.addEventListener("dispose",m));const A=S.program;n.updateUBOMapping(y,A);const E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function u(y){const S=h();y.__bindingPointIndex=S;const g=i.createBuffer(),A=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,g),g}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=s[y.id],g=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,w=g.length;E<w;E++){const C=Array.isArray(g[E])?g[E]:[g[E]];for(let M=0,_=C.length;M<_;M++){const T=C[M];if(p(T,E,M,A)===!0){const D=T.__offset,k=Array.isArray(T.value)?T.value:[T.value];let L=0;for(let O=0;O<k.length;O++){const V=k[O],W=x(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,D+L,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,S,g,A){const E=y.value,w=S+"_"+g;if(A[w]===void 0)return typeof E=="number"||typeof E=="boolean"?A[w]=E:A[w]=E.clone(),!0;{const C=A[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return A[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function v(y){const S=y.uniforms;let g=0;const A=16;for(let w=0,C=S.length;w<C;w++){const M=Array.isArray(S[w])?S[w]:[S[w]];for(let _=0,T=M.length;_<T;_++){const D=M[_],k=Array.isArray(D.value)?D.value:[D.value];for(let L=0,O=k.length;L<O;L++){const V=k[L],W=x(V),G=g%A,j=G%W.boundary,nt=G+j;g+=j,nt!==0&&A-nt<W.storage&&(g+=A-nt),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=g,g+=W.storage}}}const E=g%A;return E>0&&(g+=A-E),y.__size=g,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const g=a.indexOf(S.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class ox{constructor(t={}){const{canvas:e=Zd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=Qi,this.toneMappingExposure=1;const g=this;let A=!1,E=0,w=0,C=null,M=-1,_=null;const T=new Be,D=new Be;let k=null;const L=new Ct(0);let O=0,V=e.width,W=e.height,G=1,j=null,nt=null;const ot=new Be(0,0,V,W),At=new Be(0,0,V,W);let kt=!1;const it=new Ec;let ut=!1,Rt=!1;const dt=new Le,Gt=new Le,qt=new B,$t=new Be,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function wt(){return C===null?G:1}let F=n;function Ht(P,$){return e.getContext(P,$)}try{const P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fc}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),F===null){const $="webgl2";if(F=Ht($,P),F===null)throw Ht($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let _t,Nt,Dt,ee,q,R,b,H,Z,tt,et,Ut,Mt,Pt,re,yt,Wt,ae,le,jt,Me,ce,ye,X;function It(){_t=new fg(F),_t.init(),ce=new Kv(F,_t),Nt=new ag(F,_t,t,ce),Dt=new $v(F,_t),Nt.reverseDepthBuffer&&f&&Dt.buffers.depth.setReversed(!0),ee=new mg(F),q=new Iv,R=new Zv(F,_t,Dt,q,Nt,ce,ee),b=new lg(g),H=new ug(g),Z=new Sp(F),ye=new sg(F,Z),tt=new dg(F,Z,ee,ye),et=new vg(F,tt,Z,ee),le=new gg(F,Nt,R),yt=new og(q),Ut=new Lv(g,b,H,_t,Nt,ye,yt),Mt=new rx(g,q),Pt=new Nv,re=new Gv(_t),ae=new ig(g,b,H,Dt,et,p,l),Wt=new qv(g,et,Nt),X=new ax(F,ee,Nt,Dt),jt=new rg(F,_t,ee),Me=new pg(F,_t,ee),ee.programs=Ut.programs,g.capabilities=Nt,g.extensions=_t,g.properties=q,g.renderLists=Pt,g.shadowMap=Wt,g.state=Dt,g.info=ee}It();const rt=new ix(g,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=_t.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=_t.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(P){P!==void 0&&(G=P,this.setSize(V,W,!1))},this.getSize=function(P){return P.set(V,W)},this.setSize=function(P,$,st=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=P,W=$,e.width=Math.floor(P*G),e.height=Math.floor($*G),st===!0&&(e.style.width=P+"px",e.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(V*G,W*G).floor()},this.setDrawingBufferSize=function(P,$,st){V=P,W=$,G=st,e.width=Math.floor(P*st),e.height=Math.floor($*st),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(ot)},this.setViewport=function(P,$,st,at){P.isVector4?ot.set(P.x,P.y,P.z,P.w):ot.set(P,$,st,at),Dt.viewport(T.copy(ot).multiplyScalar(G).round())},this.getScissor=function(P){return P.copy(At)},this.setScissor=function(P,$,st,at){P.isVector4?At.set(P.x,P.y,P.z,P.w):At.set(P,$,st,at),Dt.scissor(D.copy(At).multiplyScalar(G).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(P){Dt.setScissorTest(kt=P)},this.setOpaqueSort=function(P){j=P},this.setTransparentSort=function(P){nt=P},this.getClearColor=function(P){return P.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(P=!0,$=!0,st=!0){let at=0;if(P){let Y=!1;if(C!==null){const Lt=C.texture.format;Y=Lt===Mc||Lt===_c||Lt===xc}if(Y){const Lt=C.texture.type,Xt=Lt===Mi||Lt===ys||Lt===Hr||Lt===Ss||Lt===gc||Lt===vc,ne=ae.getClearColor(),ie=ae.getClearAlpha(),ge=ne.r,I=ne.g,N=ne.b;Xt?(v[0]=ge,v[1]=I,v[2]=N,v[3]=ie,F.clearBufferuiv(F.COLOR,0,v)):(x[0]=ge,x[1]=I,x[2]=N,x[3]=ie,F.clearBufferiv(F.COLOR,0,x))}else at|=F.COLOR_BUFFER_BIT}$&&(at|=F.DEPTH_BUFFER_BIT),st&&(at|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),Pt.dispose(),re.dispose(),q.dispose(),b.dispose(),H.dispose(),et.dispose(),ye.dispose(),X.dispose(),Ut.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Kn),rt.removeEventListener("sessionend",U),pt.stop()};function gt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=ee.autoReset,$=Wt.enabled,st=Wt.autoUpdate,at=Wt.needsUpdate,Y=Wt.type;It(),ee.autoReset=P,Wt.enabled=$,Wt.autoUpdate=st,Wt.needsUpdate=at,Wt.type=Y}function Ft(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function he(P){const $=P.target;$.removeEventListener("dispose",he),ze($)}function ze(P){ke(P),q.remove(P)}function ke(P){const $=q.get(P).programs;$!==void 0&&($.forEach(function(st){Ut.releaseProgram(st)}),P.isShaderMaterial&&Ut.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,st,at,Y,Lt){$===null&&($=te);const Xt=Y.isMesh&&Y.matrixWorld.determinant()<0,ne=en(P,$,st,at,Y);Dt.setMaterial(at,Xt);let ie=st.index,ge=1;if(at.wireframe===!0){if(ie=tt.getWireframeAttribute(st),ie===void 0)return;ge=2}const I=st.drawRange,N=st.attributes.position;let K=I.start*ge,ct=(I.start+I.count)*ge;Lt!==null&&(K=Math.max(K,Lt.start*ge),ct=Math.min(ct,(Lt.start+Lt.count)*ge)),ie!==null?(K=Math.max(K,0),ct=Math.min(ct,ie.count)):N!=null&&(K=Math.max(K,0),ct=Math.min(ct,N.count));const xt=ct-K;if(xt<0||xt===1/0)return;ye.setup(Y,at,ne,st,ie);let Tt,St=jt;if(ie!==null&&(Tt=Z.get(ie),St=Me,St.setIndex(Tt)),Y.isMesh)at.wireframe===!0?(Dt.setLineWidth(at.wireframeLinewidth*wt()),St.setMode(F.LINES)):St.setMode(F.TRIANGLES);else if(Y.isLine){let Q=at.linewidth;Q===void 0&&(Q=1),Dt.setLineWidth(Q*wt()),Y.isLineSegments?St.setMode(F.LINES):Y.isLineLoop?St.setMode(F.LINE_LOOP):St.setMode(F.LINE_STRIP)}else Y.isPoints?St.setMode(F.POINTS):Y.isSprite&&St.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)St.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Q=Y._multiDrawStarts,Vt=Y._multiDrawCounts,Ot=Y._multiDrawCount,ue=ie?Z.get(ie).bytesPerElement:1,Te=q.get(at).currentProgram.getUniforms();for(let Re=0;Re<Ot;Re++)Te.setValue(F,"_gl_DrawID",Re),St.render(Q[Re]/ue,Vt[Re])}else if(Y.isInstancedMesh)St.renderInstances(K,xt,Y.count);else if(st.isInstancedBufferGeometry){const Q=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Vt=Math.min(st.instanceCount,Q);St.renderInstances(K,xt,Vt)}else St.render(K,xt)};function we(P,$,st){P.transparent===!0&&P.side===Je&&P.forceSinglePass===!1?(P.side=Pn,P.needsUpdate=!0,se(P,$,st),P.side=ts,P.needsUpdate=!0,se(P,$,st),P.side=Je):se(P,$,st)}this.compile=function(P,$,st=null){st===null&&(st=P),d=re.get(st),d.init($),S.push(d),st.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),P!==st&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights();const at=new Set;return P.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Lt=Y.material;if(Lt)if(Array.isArray(Lt))for(let Xt=0;Xt<Lt.length;Xt++){const ne=Lt[Xt];we(ne,st,Y),at.add(ne)}else we(Lt,st,Y),at.add(Lt)}),S.pop(),d=null,at},this.compileAsync=function(P,$,st=null){const at=this.compile(P,$,st);return new Promise(Y=>{function Lt(){if(at.forEach(function(Xt){q.get(Xt).currentProgram.isReady()&&at.delete(Xt)}),at.size===0){Y(P);return}setTimeout(Lt,10)}_t.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let xn=null;function dn(P){xn&&xn(P)}function Kn(){pt.stop()}function U(){pt.start()}const pt=new sf;pt.setAnimationLoop(dn),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(P){xn=P,rt.setAnimationLoop(P),P===null?pt.stop():pt.start()},rt.addEventListener("sessionstart",Kn),rt.addEventListener("sessionend",U),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera($),$=rt.getCamera()),P.isScene===!0&&P.onBeforeRender(g,P,$,C),d=re.get(P,S.length),d.init($),S.push(d),Gt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),it.setFromProjectionMatrix(Gt),Rt=this.localClippingEnabled,ut=yt.init(this.clippingPlanes,Rt),m=Pt.get(P,y.length),m.init(),y.push(m),rt.enabled===!0&&rt.isPresenting===!0){const Lt=g.xr.getDepthSensingMesh();Lt!==null&&lt(Lt,$,-1/0,g.sortObjects)}lt(P,$,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(j,nt),ft=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,ft&&ae.addToRenderList(m,P),this.info.render.frame++,ut===!0&&yt.beginShadows();const st=d.state.shadowsArray;Wt.render(st,P,$),ut===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=m.opaque,Y=m.transmissive;if(d.setupLights(),$.isArrayCamera){const Lt=$.cameras;if(Y.length>0)for(let Xt=0,ne=Lt.length;Xt<ne;Xt++){const ie=Lt[Xt];Qt(at,Y,P,ie)}ft&&ae.render(P);for(let Xt=0,ne=Lt.length;Xt<ne;Xt++){const ie=Lt[Xt];Zt(m,P,ie,ie.viewport)}}else Y.length>0&&Qt(at,Y,P,$),ft&&ae.render(P),Zt(m,P,$);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(g,P,$),ye.resetDefaultState(),M=-1,_=null,S.pop(),S.length>0?(d=S[S.length-1],ut===!0&&yt.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function lt(P,$,st,at){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)st=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||it.intersectsSprite(P)){at&&$t.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Gt);const Xt=et.update(P),ne=P.material;ne.visible&&m.push(P,Xt,ne,st,$t.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||it.intersectsObject(P))){const Xt=et.update(P),ne=P.material;if(at&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),$t.copy(P.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),$t.copy(Xt.boundingSphere.center)),$t.applyMatrix4(P.matrixWorld).applyMatrix4(Gt)),Array.isArray(ne)){const ie=Xt.groups;for(let ge=0,I=ie.length;ge<I;ge++){const N=ie[ge],K=ne[N.materialIndex];K&&K.visible&&m.push(P,Xt,K,st,$t.z,N)}}else ne.visible&&m.push(P,Xt,ne,st,$t.z,null)}}const Lt=P.children;for(let Xt=0,ne=Lt.length;Xt<ne;Xt++)lt(Lt[Xt],$,st,at)}function Zt(P,$,st,at){const Y=P.opaque,Lt=P.transmissive,Xt=P.transparent;d.setupLightsView(st),ut===!0&&yt.setGlobalState(g.clippingPlanes,st),at&&Dt.viewport(T.copy(at)),Y.length>0&&Et(Y,$,st),Lt.length>0&&Et(Lt,$,st),Xt.length>0&&Et(Xt,$,st),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Qt(P,$,st,at){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[at.id]===void 0&&(d.state.transmissionRenderTarget[at.id]=new In(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?jn:Mi,minFilter:ps,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace}));const Lt=d.state.transmissionRenderTarget[at.id],Xt=at.viewport||T;Lt.setSize(Xt.z,Xt.w);const ne=g.getRenderTarget();g.setRenderTarget(Lt),g.getClearColor(L),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear(),ft&&ae.render(st);const ie=g.toneMapping;g.toneMapping=Qi;const ge=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),d.setupLightsView(at),ut===!0&&yt.setGlobalState(g.clippingPlanes,at),Et(P,st,at),R.updateMultisampleRenderTarget(Lt),R.updateRenderTargetMipmap(Lt),_t.has("WEBGL_multisampled_render_to_texture")===!1){let I=!1;for(let N=0,K=$.length;N<K;N++){const ct=$[N],xt=ct.object,Tt=ct.geometry,St=ct.material,Q=ct.group;if(St.side===Je&&xt.layers.test(at.layers)){const Vt=St.side;St.side=Pn,St.needsUpdate=!0,Kt(xt,st,at,Tt,St,Q),St.side=Vt,St.needsUpdate=!0,I=!0}}I===!0&&(R.updateMultisampleRenderTarget(Lt),R.updateRenderTargetMipmap(Lt))}g.setRenderTarget(ne),g.setClearColor(L,O),ge!==void 0&&(at.viewport=ge),g.toneMapping=ie}function Et(P,$,st){const at=$.isScene===!0?$.overrideMaterial:null;for(let Y=0,Lt=P.length;Y<Lt;Y++){const Xt=P[Y],ne=Xt.object,ie=Xt.geometry,ge=at===null?Xt.material:at,I=Xt.group;ne.layers.test(st.layers)&&Kt(ne,$,st,ie,ge,I)}}function Kt(P,$,st,at,Y,Lt){P.onBeforeRender(g,$,st,at,Y,Lt),P.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(g,$,st,at,P,Lt),Y.transparent===!0&&Y.side===Je&&Y.forceSinglePass===!1?(Y.side=Pn,Y.needsUpdate=!0,g.renderBufferDirect(st,$,at,Y,P,Lt),Y.side=ts,Y.needsUpdate=!0,g.renderBufferDirect(st,$,at,Y,P,Lt),Y.side=Je):g.renderBufferDirect(st,$,at,Y,P,Lt),P.onAfterRender(g,$,st,at,Y,Lt)}function se(P,$,st){$.isScene!==!0&&($=te);const at=q.get(P),Y=d.state.lights,Lt=d.state.shadowsArray,Xt=Y.state.version,ne=Ut.getParameters(P,Y.state,Lt,$,st),ie=Ut.getProgramCacheKey(ne);let ge=at.programs;at.environment=P.isMeshStandardMaterial?$.environment:null,at.fog=$.fog,at.envMap=(P.isMeshStandardMaterial?H:b).get(P.envMap||at.environment),at.envMapRotation=at.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,ge===void 0&&(P.addEventListener("dispose",he),ge=new Map,at.programs=ge);let I=ge.get(ie);if(I!==void 0){if(at.currentProgram===I&&at.lightsStateVersion===Xt)return Ee(P,ne),I}else ne.uniforms=Ut.getUniforms(P),P.onBeforeCompile(ne,g),I=Ut.acquireProgram(ne,ie),ge.set(ie,I),at.uniforms=ne.uniforms;const N=at.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(N.clippingPlanes=yt.uniform),Ee(P,ne),at.needsLights=Jn(P),at.lightsStateVersion=Xt,at.needsLights&&(N.ambientLightColor.value=Y.state.ambient,N.lightProbe.value=Y.state.probe,N.directionalLights.value=Y.state.directional,N.directionalLightShadows.value=Y.state.directionalShadow,N.spotLights.value=Y.state.spot,N.spotLightShadows.value=Y.state.spotShadow,N.rectAreaLights.value=Y.state.rectArea,N.ltc_1.value=Y.state.rectAreaLTC1,N.ltc_2.value=Y.state.rectAreaLTC2,N.pointLights.value=Y.state.point,N.pointLightShadows.value=Y.state.pointShadow,N.hemisphereLights.value=Y.state.hemi,N.directionalShadowMap.value=Y.state.directionalShadowMap,N.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,N.spotShadowMap.value=Y.state.spotShadowMap,N.spotLightMatrix.value=Y.state.spotLightMatrix,N.spotLightMap.value=Y.state.spotLightMap,N.pointShadowMap.value=Y.state.pointShadowMap,N.pointShadowMatrix.value=Y.state.pointShadowMatrix),at.currentProgram=I,at.uniformsList=null,I}function me(P){if(P.uniformsList===null){const $=P.currentProgram.getUniforms();P.uniformsList=qa.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function Ee(P,$){const st=q.get(P);st.outputColorSpace=$.outputColorSpace,st.batching=$.batching,st.batchingColor=$.batchingColor,st.instancing=$.instancing,st.instancingColor=$.instancingColor,st.instancingMorph=$.instancingMorph,st.skinning=$.skinning,st.morphTargets=$.morphTargets,st.morphNormals=$.morphNormals,st.morphColors=$.morphColors,st.morphTargetsCount=$.morphTargetsCount,st.numClippingPlanes=$.numClippingPlanes,st.numIntersection=$.numClipIntersection,st.vertexAlphas=$.vertexAlphas,st.vertexTangents=$.vertexTangents,st.toneMapping=$.toneMapping}function en(P,$,st,at,Y){$.isScene!==!0&&($=te),R.resetTextureUnits();const Lt=$.fog,Xt=at.isMeshStandardMaterial?$.environment:null,ne=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:vr,ie=(at.isMeshStandardMaterial?H:b).get(at.envMap||Xt),ge=at.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,I=!!st.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),N=!!st.morphAttributes.position,K=!!st.morphAttributes.normal,ct=!!st.morphAttributes.color;let xt=Qi;at.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=g.toneMapping);const Tt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,St=Tt!==void 0?Tt.length:0,Q=q.get(at),Vt=d.state.lights;if(ut===!0&&(Rt===!0||P!==_)){const Mn=P===_&&at.id===M;yt.setState(at,P,Mn)}let Ot=!1;at.version===Q.__version?(Q.needsLights&&Q.lightsStateVersion!==Vt.state.version||Q.outputColorSpace!==ne||Y.isBatchedMesh&&Q.batching===!1||!Y.isBatchedMesh&&Q.batching===!0||Y.isBatchedMesh&&Q.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Q.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Q.instancing===!1||!Y.isInstancedMesh&&Q.instancing===!0||Y.isSkinnedMesh&&Q.skinning===!1||!Y.isSkinnedMesh&&Q.skinning===!0||Y.isInstancedMesh&&Q.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Q.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Q.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Q.instancingMorph===!1&&Y.morphTexture!==null||Q.envMap!==ie||at.fog===!0&&Q.fog!==Lt||Q.numClippingPlanes!==void 0&&(Q.numClippingPlanes!==yt.numPlanes||Q.numIntersection!==yt.numIntersection)||Q.vertexAlphas!==ge||Q.vertexTangents!==I||Q.morphTargets!==N||Q.morphNormals!==K||Q.morphColors!==ct||Q.toneMapping!==xt||Q.morphTargetsCount!==St)&&(Ot=!0):(Ot=!0,Q.__version=at.version);let ue=Q.currentProgram;Ot===!0&&(ue=se(at,$,Y));let Te=!1,Re=!1,bi=!1;const Ce=ue.getUniforms(),_n=Q.uniforms;if(Dt.useProgram(ue.program)&&(Te=!0,Re=!0,bi=!0),at.id!==M&&(M=at.id,Re=!0),Te||_!==P){Dt.buffers.depth.getReversed()?(dt.copy(P.projectionMatrix),Jd(dt),Qd(dt),Ce.setValue(F,"projectionMatrix",dt)):Ce.setValue(F,"projectionMatrix",P.projectionMatrix),Ce.setValue(F,"viewMatrix",P.matrixWorldInverse);const Un=Ce.map.cameraPosition;Un!==void 0&&Un.setValue(F,qt.setFromMatrixPosition(P.matrixWorld)),Nt.logarithmicDepthBuffer&&Ce.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ce.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,Re=!0,bi=!0)}if(Y.isSkinnedMesh){Ce.setOptional(F,Y,"bindMatrix"),Ce.setOptional(F,Y,"bindMatrixInverse");const Mn=Y.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ce.setValue(F,"boneTexture",Mn.boneTexture,R))}Y.isBatchedMesh&&(Ce.setOptional(F,Y,"batchingTexture"),Ce.setValue(F,"batchingTexture",Y._matricesTexture,R),Ce.setOptional(F,Y,"batchingIdTexture"),Ce.setValue(F,"batchingIdTexture",Y._indirectTexture,R),Ce.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ce.setValue(F,"batchingColorTexture",Y._colorsTexture,R));const Qn=st.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&le.update(Y,st,ue),(Re||Q.receiveShadow!==Y.receiveShadow)&&(Q.receiveShadow=Y.receiveShadow,Ce.setValue(F,"receiveShadow",Y.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(_n.envMap.value=ie,_n.flipEnvMap.value=ie.isCubeTexture&&ie.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&$.environment!==null&&(_n.envMapIntensity.value=$.environmentIntensity),Re&&(Ce.setValue(F,"toneMappingExposure",g.toneMappingExposure),Q.needsLights&&Xn(_n,bi),Lt&&at.fog===!0&&Mt.refreshFogUniforms(_n,Lt),Mt.refreshMaterialUniforms(_n,at,G,W,d.state.transmissionRenderTarget[P.id]),qa.upload(F,me(Q),_n,R)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(qa.upload(F,me(Q),_n,R),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ce.setValue(F,"center",Y.center),Ce.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Ce.setValue(F,"normalMatrix",Y.normalMatrix),Ce.setValue(F,"modelMatrix",Y.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Mn=at.uniformsGroups;for(let Un=0,Nn=Mn.length;Un<Nn;Un++){const Bi=Mn[Un];X.update(Bi,ue),X.bind(Bi,ue)}}return ue}function Xn(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function Jn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,$,st){q.get(P.texture).__webglTexture=$,q.get(P.depthTexture).__webglTexture=st;const at=q.get(P);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=st===void 0,at.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,$){const st=q.get(P);st.__webglFramebuffer=$,st.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(P,$=0,st=0){C=P,E=$,w=st;let at=!0,Y=null,Lt=!1,Xt=!1;if(P){const ie=q.get(P);if(ie.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(F.FRAMEBUFFER,null),at=!1;else if(ie.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(ie.__hasExternalTextures)R.rebindTextures(P,q.get(P.texture).__webglTexture,q.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const N=P.depthTexture;if(ie.__boundDepthTexture!==N){if(N!==null&&q.has(N)&&(P.width!==N.image.width||P.height!==N.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const ge=P.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(Xt=!0);const I=q.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(I[$])?Y=I[$][st]:Y=I[$],Lt=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?Y=q.get(P).__webglMultisampledFramebuffer:Array.isArray(I)?Y=I[st]:Y=I,T.copy(P.viewport),D.copy(P.scissor),k=P.scissorTest}else T.copy(ot).multiplyScalar(G).floor(),D.copy(At).multiplyScalar(G).floor(),k=kt;if(Dt.bindFramebuffer(F.FRAMEBUFFER,Y)&&at&&Dt.drawBuffers(P,Y),Dt.viewport(T),Dt.scissor(D),Dt.setScissorTest(k),Lt){const ie=q.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie.__webglTexture,st)}else if(Xt){const ie=q.get(P.texture),ge=$||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ie.__webglTexture,st||0,ge)}M=-1},this.readRenderTargetPixels=function(P,$,st,at,Y,Lt,Xt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Xt!==void 0&&(ne=ne[Xt]),ne){Dt.bindFramebuffer(F.FRAMEBUFFER,ne);try{const ie=P.texture,ge=ie.format,I=ie.type;if(!Nt.textureFormatReadable(ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(I)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-at&&st>=0&&st<=P.height-Y&&F.readPixels($,st,at,Y,ce.convert(ge),ce.convert(I),Lt)}finally{const ie=C!==null?q.get(C).__webglFramebuffer:null;Dt.bindFramebuffer(F.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(P,$,st,at,Y,Lt,Xt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Xt!==void 0&&(ne=ne[Xt]),ne){const ie=P.texture,ge=ie.format,I=ie.type;if(!Nt.textureFormatReadable(ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(I))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=P.width-at&&st>=0&&st<=P.height-Y){Dt.bindFramebuffer(F.FRAMEBUFFER,ne);const N=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,N),F.bufferData(F.PIXEL_PACK_BUFFER,Lt.byteLength,F.STREAM_READ),F.readPixels($,st,at,Y,ce.convert(ge),ce.convert(I),0);const K=C!==null?q.get(C).__webglFramebuffer:null;Dt.bindFramebuffer(F.FRAMEBUFFER,K);const ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Kd(F,ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,N),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Lt),F.deleteBuffer(N),F.deleteSync(ct),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,$=null,st=0){P.isTexture!==!0&&(Lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1]);const at=Math.pow(2,-st),Y=Math.floor(P.image.width*at),Lt=Math.floor(P.image.height*at),Xt=$!==null?$.x:0,ne=$!==null?$.y:0;R.setTexture2D(P,0),F.copyTexSubImage2D(F.TEXTURE_2D,st,0,0,Xt,ne,Y,Lt),Dt.unbindTexture()},this.copyTextureToTexture=function(P,$,st=null,at=null,Y=0){P.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,P=arguments[1],$=arguments[2],Y=arguments[3]||0,st=null);let Lt,Xt,ne,ie,ge,I,N,K,ct;const xt=P.isCompressedTexture?P.mipmaps[Y]:P.image;st!==null?(Lt=st.max.x-st.min.x,Xt=st.max.y-st.min.y,ne=st.isBox3?st.max.z-st.min.z:1,ie=st.min.x,ge=st.min.y,I=st.isBox3?st.min.z:0):(Lt=xt.width,Xt=xt.height,ne=xt.depth||1,ie=0,ge=0,I=0),at!==null?(N=at.x,K=at.y,ct=at.z):(N=0,K=0,ct=0);const Tt=ce.convert($.format),St=ce.convert($.type);let Q;$.isData3DTexture?(R.setTexture3D($,0),Q=F.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(R.setTexture2DArray($,0),Q=F.TEXTURE_2D_ARRAY):(R.setTexture2D($,0),Q=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);const Vt=F.getParameter(F.UNPACK_ROW_LENGTH),Ot=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ue=F.getParameter(F.UNPACK_SKIP_PIXELS),Te=F.getParameter(F.UNPACK_SKIP_ROWS),Re=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,xt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ie),F.pixelStorei(F.UNPACK_SKIP_ROWS,ge),F.pixelStorei(F.UNPACK_SKIP_IMAGES,I);const bi=P.isDataArrayTexture||P.isData3DTexture,Ce=$.isDataArrayTexture||$.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const _n=q.get(P),Qn=q.get($),Mn=q.get(_n.__renderTarget),Un=q.get(Qn.__renderTarget);Dt.bindFramebuffer(F.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Nn=0;Nn<ne;Nn++)bi&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(P).__webglTexture,Y,I+Nn),P.isDepthTexture?(Ce&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get($).__webglTexture,Y,ct+Nn),F.blitFramebuffer(ie,ge,Lt,Xt,N,K,Lt,Xt,F.DEPTH_BUFFER_BIT,F.NEAREST)):Ce?F.copyTexSubImage3D(Q,Y,N,K,ct+Nn,ie,ge,Lt,Xt):F.copyTexSubImage2D(Q,Y,N,K,ct+Nn,ie,ge,Lt,Xt);Dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ce?P.isDataTexture||P.isData3DTexture?F.texSubImage3D(Q,Y,N,K,ct,Lt,Xt,ne,Tt,St,xt.data):$.isCompressedArrayTexture?F.compressedTexSubImage3D(Q,Y,N,K,ct,Lt,Xt,ne,Tt,xt.data):F.texSubImage3D(Q,Y,N,K,ct,Lt,Xt,ne,Tt,St,xt):P.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Y,N,K,Lt,Xt,Tt,St,xt.data):P.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Y,N,K,xt.width,xt.height,Tt,xt.data):F.texSubImage2D(F.TEXTURE_2D,Y,N,K,Lt,Xt,Tt,St,xt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Vt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ue),F.pixelStorei(F.UNPACK_SKIP_ROWS,Te),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Re),Y===0&&$.generateMipmaps&&F.generateMipmap(Q),Dt.unbindTexture()},this.copyTextureToTexture3D=function(P,$,st=null,at=null,Y=0){return P.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,at=arguments[1]||null,P=arguments[2],$=arguments[3],Y=arguments[4]||0),Lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,$,st,at,Y)},this.initRenderTarget=function(P){q.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),Dt.unbindTexture()},this.resetState=function(){E=0,w=0,C=null,Dt.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Pe._getUnpackColorSpace()}}class Rc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new Rc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lx extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class io extends bn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=vn,u=vn,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xh extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qs=new Le,qh=new Le,Ta=[],Yh=new As,cx=new Le,Cr=new oe,Rr=new _r;class gn extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new As),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Yh.copy(t.boundingBox).applyMatrix4(qs),this.boundingBox.union(Yh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _r),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Rr.copy(t.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Cr.geometry=this.geometry,Cr.material=this.material,Cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),t.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qs),qh.multiplyMatrices(n,qs),Cr.matrixWorld=qh,Cr.raycast(t,Ta);for(let a=0,o=Ta.length;a<o;a++){const l=Ta[a];l.instanceId=r,l.object=this,e.push(l)}Ta.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new io(new Float32Array(s*this.count),s,this.count,to,hi));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class so extends Cs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $h=new Le,$l=new bc,Aa=new _r,Ca=new B;class Pc extends He{constructor(t=new Ne,e=new so){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,t.ray.intersectsSphere(Aa)===!1)return;$h.copy(s).invert(),$l.copy(t.ray).applyMatrix4($h);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=f,x=p;v<x;v++){const m=c.getX(v);Ca.fromBufferAttribute(h,m),jh(Ca,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,x=p;v<x;v++)Ca.fromBufferAttribute(h,v),jh(Ca,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function jh(i,t,e,n,s,r,a){const o=$l.distanceSqToPoint(i);if(o<e){const l=new B;$l.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ui extends bn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],f=n[s+1]-u,p=(a-u)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new bt:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new B,s=[],r=[],a=[],o=new B,l=new Le;for(let p=0;p<=t;p++){const v=p/t;s[p]=this.getTangentAt(v,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(un(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(un(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],p*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dc extends Si{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new bt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class hx extends Dc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Lc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,p*=u,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ra=new B,Wo=new Lc,Xo=new Lc,qo=new Lc;class Ic extends Si{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Ra.subVectors(s[0],s[1]).add(s[0]),c=Ra);const h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ra.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ra),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Wo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,v,x,m),Xo.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,v,x,m),qo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,v,x,m)}else this.curveType==="catmullrom"&&(Wo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Xo.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),qo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Wo.calc(l),Xo.calc(l),qo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function ux(i,t){const e=1-i;return e*e*t}function fx(i,t){return 2*(1-i)*i*t}function dx(i,t){return i*i*t}function Fr(i,t,e,n){return ux(i,t)+fx(i,e)+dx(i,n)}function px(i,t){const e=1-i;return e*e*e*t}function mx(i,t){const e=1-i;return 3*e*e*i*t}function gx(i,t){return 3*(1-i)*i*i*t}function vx(i,t){return i*i*i*t}function Or(i,t,e,n,s){return px(i,t)+mx(i,e)+gx(i,n)+vx(i,s)}class cf extends Si{constructor(t=new bt,e=new bt,n=new bt,s=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new bt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Or(t,s.x,r.x,a.x,o.x),Or(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xx extends Si{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Or(t,s.x,r.x,a.x,o.x),Or(t,s.y,r.y,a.y,o.y),Or(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hf extends Si{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _x extends Si{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uf extends Si{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Fr(t,s.x,r.x,a.x),Fr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mx extends Si{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Fr(t,s.x,r.x,a.x),Fr(t,s.y,r.y,a.y),Fr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ff extends Si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Zh(o,l.x,c.x,u.x,h.x),Zh(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new bt().fromArray(s))}return this}}var jl=Object.freeze({__proto__:null,ArcCurve:hx,CatmullRomCurve3:Ic,CubicBezierCurve:cf,CubicBezierCurve3:xx,EllipseCurve:Dc,LineCurve:hf,LineCurve3:_x,QuadraticBezierCurve:uf,QuadraticBezierCurve3:Mx,SplineCurve:ff});class yx extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new jl[s.type]().fromJSON(s))}return this}}class Zl extends yx{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new hf(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new uf(this.currentPoint.clone(),new bt(t,e),new bt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new cf(this.currentPoint.clone(),new bt(t,e),new bt(n,s),new bt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ff(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Dc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Uc extends Ne{constructor(t=[new bt(0,-.5),new bt(.5,0),new bt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=un(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,h=new B,f=new bt,p=new B,v=new B,x=new B;let m=0,d=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,p.x=d*1,p.y=-m,p.z=d*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(v)}for(let y=0;y<=e;y++){const S=n+y*u*s,g=Math.sin(S),A=Math.cos(S);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*g,h.y=t[E].y,h.z=t[E].x*A,a.push(h.x,h.y,h.z),f.x=y/e,f.y=E/(t.length-1),o.push(f.x,f.y);const w=l[3*E+0]*g,C=l[3*E+1],M=l[3*E+0]*A;c.push(w,C,M)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){const g=S+y*t.length,A=g,E=g+t.length,w=g+t.length+1,C=g+1;r.push(A,E,C),r.push(w,C,E)}this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("uv",new pe(o,2)),this.setAttribute("normal",new pe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.points,t.segments,t.phiStart,t.phiLength)}}class ro extends Uc{constructor(t=1,e=1,n=4,s=8){const r=new Zl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ro(t.radius,t.length,t.capSegments,t.radialSegments)}}class ur extends Ne{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new B,u=new bt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=n+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xe extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let v=0;const x=[],m=n/2;let d=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new pe(h,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(p,2));function y(){const g=new B,A=new B;let E=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const M=[],_=C/r,T=_*(e-t)+t;for(let D=0;D<=s;D++){const k=D/s,L=k*l+o,O=Math.sin(L),V=Math.cos(L);A.x=T*O,A.y=-_*n+m,A.z=T*V,h.push(A.x,A.y,A.z),g.set(O,w,V).normalize(),f.push(g.x,g.y,g.z),p.push(k,1-_),M.push(v++)}x.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){const _=x[M][C],T=x[M+1][C],D=x[M+1][C+1],k=x[M][C+1];(t>0||M!==0)&&(u.push(_,T,k),E+=3),(e>0||M!==r-1)&&(u.push(T,D,k),E+=3)}c.addGroup(d,E,0),d+=E}function S(g){const A=v,E=new bt,w=new B;let C=0;const M=g===!0?t:e,_=g===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*_,0),f.push(0,_,0),p.push(.5,.5),v++;const T=v;for(let D=0;D<=s;D++){const L=D/s*l+o,O=Math.cos(L),V=Math.sin(L);w.x=M*V,w.y=m*_,w.z=M*O,h.push(w.x,w.y,w.z),f.push(0,_,0),E.x=O*.5+.5,E.y=V*.5*_+.5,p.push(E.x,E.y),v++}for(let D=0;D<s;D++){const k=A+D,L=T+D;g===!0?u.push(L,L+1,k):u.push(L+1,L,k),C+=3}c.addGroup(d,C,g===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bn extends Xe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Bn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ea extends Ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new B,g=new B,A=new B;for(let E=0;E<e.length;E+=3)p(e[E+0],S),p(e[E+1],g),p(e[E+2],A),l(S,g,A,y)}function l(y,S,g,A){const E=A+1,w=[];for(let C=0;C<=E;C++){w[C]=[];const M=y.clone().lerp(g,C/E),_=S.clone().lerp(g,C/E),T=E-C;for(let D=0;D<=T;D++)D===0&&C===E?w[C][D]=M:w[C][D]=M.clone().lerp(_,D/T)}for(let C=0;C<E;C++)for(let M=0;M<2*(E-C)-1;M++){const _=Math.floor(M/2);M%2===0?(f(w[C][_+1]),f(w[C+1][_]),f(w[C][_])):(f(w[C][_+1]),f(w[C+1][_+1]),f(w[C+1][_]))}}function c(y){const S=new B;for(let g=0;g<r.length;g+=3)S.x=r[g+0],S.y=r[g+1],S.z=r[g+2],S.normalize().multiplyScalar(y),r[g+0]=S.x,r[g+1]=S.y,r[g+2]=S.z}function u(){const y=new B;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const g=m(y)/2/Math.PI+.5,A=d(y)/Math.PI+.5;a.push(g,1-A)}v(),h()}function h(){for(let y=0;y<a.length;y+=6){const S=a[y+0],g=a[y+2],A=a[y+4],E=Math.max(S,g,A),w=Math.min(S,g,A);E>.9&&w<.1&&(S<.2&&(a[y+0]+=1),g<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,S){const g=y*3;S.x=t[g+0],S.y=t[g+1],S.z=t[g+2]}function v(){const y=new B,S=new B,g=new B,A=new B,E=new bt,w=new bt,C=new bt;for(let M=0,_=0;M<r.length;M+=9,_+=6){y.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),g.set(r[M+6],r[M+7],r[M+8]),E.set(a[_+0],a[_+1]),w.set(a[_+2],a[_+3]),C.set(a[_+4],a[_+5]),A.copy(y).add(S).add(g).divideScalar(3);const T=m(A);x(E,_+0,y,T),x(w,_+2,S,T),x(C,_+4,g,T)}}function x(y,S,g,A){A<0&&y.x===1&&(a[S]=y.x-1),g.x===0&&g.z===0&&(a[S]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.vertices,t.indices,t.radius,t.details)}}class ao extends ea{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ao(t.radius,t.detail)}}class df extends Zl{constructor(t){super(t),this.uuid=Ts(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Zl().fromJSON(s))}return this}}const Sx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=pf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,f,p;if(n&&(r=Ax(i,t,r,e)),i.length>80*e){o=c=i[0],l=u=i[1];for(let v=e;v<s;v+=e)h=i[v],f=i[v+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return Xr(r,a,e,o,l,p,0),a}};function pf(i,t,e,n,s){let r,a;if(s===Ox(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Kh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Kh(r,i[r],i[r+1],a);return a&&oo(a,a.next)&&(Yr(a),a=a.next),a}function ws(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(oo(e,e.next)||Ze(e.prev,e,e.next)===0)){if(Yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Lx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?wx(i,n,s,r):bx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Yr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ex(ws(i),t,e),Xr(i,t,e,n,s,r,2)):a===2&&Tx(i,t,e,n,s,r):Xr(ws(i),t,e,n,s,r,1);break}}}function bx(i){const t=i.prev,e=i,n=i.next;if(Ze(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let v=n.next;for(;v!==t;){if(v.x>=u&&v.x<=f&&v.y>=h&&v.y<=p&&Js(s,o,r,l,a,c,v.x,v.y)&&Ze(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function wx(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ze(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,v=u<h?u<f?u:f:h<f?h:f,x=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=Kl(p,v,t,e,n),y=Kl(x,m,t,e,n);let S=i.prevZ,g=i.nextZ;for(;S&&S.z>=d&&g&&g.z<=y;){if(S.x>=p&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&Js(o,u,l,h,c,f,S.x,S.y)&&Ze(S.prev,S,S.next)>=0||(S=S.prevZ,g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==a&&Js(o,u,l,h,c,f,g.x,g.y)&&Ze(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;S&&S.z>=d;){if(S.x>=p&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&Js(o,u,l,h,c,f,S.x,S.y)&&Ze(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;g&&g.z<=y;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==a&&Js(o,u,l,h,c,f,g.x,g.y)&&Ze(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Ex(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!oo(s,r)&&mf(s,n,n.next,r)&&qr(s,r)&&qr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Yr(n),Yr(n.next),n=i=r),n=n.next}while(n!==i);return ws(n)}function Tx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Nx(a,o)){let l=gf(a,o);a=ws(a,a.next),l=ws(l,l.next),Xr(a,t,e,n,s,r,0),Xr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ax(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=pf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ux(c));for(s.sort(Cx),r=0;r<s.length;r++)e=Rx(s[r],e);return e}function Cx(i,t){return i.x-t.x}function Rx(i,t){const e=Px(i,t);if(!e)return t;const n=gf(e,i);return ws(n,n.next),ws(e,e.next)}function Px(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Js(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),qr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Dx(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function Dx(i,t){return Ze(i.prev,i,t.prev)<0&&Ze(t.next,i,i.next)<0}function Lx(i,t,e,n){let s=i;do s.z===0&&(s.z=Kl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ix(s)}function Ix(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Kl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ux(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Js(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Nx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!zx(i,t)&&(qr(i,t)&&qr(t,i)&&Fx(i,t)&&(Ze(i.prev,i,t.prev)||Ze(i,t.prev,t))||oo(i,t)&&Ze(i.prev,i,i.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function oo(i,t){return i.x===t.x&&i.y===t.y}function mf(i,t,e,n){const s=Da(Ze(i,t,e)),r=Da(Ze(i,t,n)),a=Da(Ze(e,n,i)),o=Da(Ze(e,n,t));return!!(s!==r&&a!==o||s===0&&Pa(i,e,t)||r===0&&Pa(i,n,t)||a===0&&Pa(e,i,n)||o===0&&Pa(e,t,n))}function Pa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Da(i){return i>0?1:i<0?-1:0}function zx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&mf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qr(i,t){return Ze(i.prev,i,i.next)<0?Ze(i,t,i.next)>=0&&Ze(i,i.prev,t)>=0:Ze(i,t,i.prev)<0||Ze(i,i.next,t)<0}function Fx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gf(i,t){const e=new Jl(i.i,i.x,i.y),n=new Jl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Kh(i,t,e,n){const s=new Jl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Jl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ox(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class kr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return kr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Jh(t),Qh(n,t);let a=t.length;e.forEach(Jh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Qh(n,e[l]);const o=Sx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Jh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Nc extends Ne{constructor(t=new df([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:kx;let S,g=!1,A,E,w,C;d&&(S=d.getSpacedPoints(u),g=!0,f=!1,A=d.computeFrenetFrames(u,!1),E=new B,w=new B,C=new B),f||(m=0,p=0,v=0,x=0);const M=o.extractPoints(c);let _=M.shape;const T=M.holes;if(!kr.isClockWise(_)){_=_.reverse();for(let ft=0,wt=T.length;ft<wt;ft++){const F=T[ft];kr.isClockWise(F)&&(T[ft]=F.reverse())}}const k=kr.triangulateShape(_,T),L=_;for(let ft=0,wt=T.length;ft<wt;ft++){const F=T[ft];_=_.concat(F)}function O(ft,wt,F){return wt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ft.clone().addScaledVector(wt,F)}const V=_.length,W=k.length;function G(ft,wt,F){let Ht,_t,Nt;const Dt=ft.x-wt.x,ee=ft.y-wt.y,q=F.x-ft.x,R=F.y-ft.y,b=Dt*Dt+ee*ee,H=Dt*R-ee*q;if(Math.abs(H)>Number.EPSILON){const Z=Math.sqrt(b),tt=Math.sqrt(q*q+R*R),et=wt.x-ee/Z,Ut=wt.y+Dt/Z,Mt=F.x-R/tt,Pt=F.y+q/tt,re=((Mt-et)*R-(Pt-Ut)*q)/(Dt*R-ee*q);Ht=et+Dt*re-ft.x,_t=Ut+ee*re-ft.y;const yt=Ht*Ht+_t*_t;if(yt<=2)return new bt(Ht,_t);Nt=Math.sqrt(yt/2)}else{let Z=!1;Dt>Number.EPSILON?q>Number.EPSILON&&(Z=!0):Dt<-Number.EPSILON?q<-Number.EPSILON&&(Z=!0):Math.sign(ee)===Math.sign(R)&&(Z=!0),Z?(Ht=-ee,_t=Dt,Nt=Math.sqrt(b)):(Ht=Dt,_t=ee,Nt=Math.sqrt(b/2))}return new bt(Ht/Nt,_t/Nt)}const j=[];for(let ft=0,wt=L.length,F=wt-1,Ht=ft+1;ft<wt;ft++,F++,Ht++)F===wt&&(F=0),Ht===wt&&(Ht=0),j[ft]=G(L[ft],L[F],L[Ht]);const nt=[];let ot,At=j.concat();for(let ft=0,wt=T.length;ft<wt;ft++){const F=T[ft];ot=[];for(let Ht=0,_t=F.length,Nt=_t-1,Dt=Ht+1;Ht<_t;Ht++,Nt++,Dt++)Nt===_t&&(Nt=0),Dt===_t&&(Dt=0),ot[Ht]=G(F[Ht],F[Nt],F[Dt]);nt.push(ot),At=At.concat(ot)}for(let ft=0;ft<m;ft++){const wt=ft/m,F=p*Math.cos(wt*Math.PI/2),Ht=v*Math.sin(wt*Math.PI/2)+x;for(let _t=0,Nt=L.length;_t<Nt;_t++){const Dt=O(L[_t],j[_t],Ht);dt(Dt.x,Dt.y,-F)}for(let _t=0,Nt=T.length;_t<Nt;_t++){const Dt=T[_t];ot=nt[_t];for(let ee=0,q=Dt.length;ee<q;ee++){const R=O(Dt[ee],ot[ee],Ht);dt(R.x,R.y,-F)}}}const kt=v+x;for(let ft=0;ft<V;ft++){const wt=f?O(_[ft],At[ft],kt):_[ft];g?(w.copy(A.normals[0]).multiplyScalar(wt.x),E.copy(A.binormals[0]).multiplyScalar(wt.y),C.copy(S[0]).add(w).add(E),dt(C.x,C.y,C.z)):dt(wt.x,wt.y,0)}for(let ft=1;ft<=u;ft++)for(let wt=0;wt<V;wt++){const F=f?O(_[wt],At[wt],kt):_[wt];g?(w.copy(A.normals[ft]).multiplyScalar(F.x),E.copy(A.binormals[ft]).multiplyScalar(F.y),C.copy(S[ft]).add(w).add(E),dt(C.x,C.y,C.z)):dt(F.x,F.y,h/u*ft)}for(let ft=m-1;ft>=0;ft--){const wt=ft/m,F=p*Math.cos(wt*Math.PI/2),Ht=v*Math.sin(wt*Math.PI/2)+x;for(let _t=0,Nt=L.length;_t<Nt;_t++){const Dt=O(L[_t],j[_t],Ht);dt(Dt.x,Dt.y,h+F)}for(let _t=0,Nt=T.length;_t<Nt;_t++){const Dt=T[_t];ot=nt[_t];for(let ee=0,q=Dt.length;ee<q;ee++){const R=O(Dt[ee],ot[ee],Ht);g?dt(R.x,R.y+S[u-1].y,S[u-1].x+F):dt(R.x,R.y,h+F)}}}it(),ut();function it(){const ft=s.length/3;if(f){let wt=0,F=V*wt;for(let Ht=0;Ht<W;Ht++){const _t=k[Ht];Gt(_t[2]+F,_t[1]+F,_t[0]+F)}wt=u+m*2,F=V*wt;for(let Ht=0;Ht<W;Ht++){const _t=k[Ht];Gt(_t[0]+F,_t[1]+F,_t[2]+F)}}else{for(let wt=0;wt<W;wt++){const F=k[wt];Gt(F[2],F[1],F[0])}for(let wt=0;wt<W;wt++){const F=k[wt];Gt(F[0]+V*u,F[1]+V*u,F[2]+V*u)}}n.addGroup(ft,s.length/3-ft,0)}function ut(){const ft=s.length/3;let wt=0;Rt(L,wt),wt+=L.length;for(let F=0,Ht=T.length;F<Ht;F++){const _t=T[F];Rt(_t,wt),wt+=_t.length}n.addGroup(ft,s.length/3-ft,1)}function Rt(ft,wt){let F=ft.length;for(;--F>=0;){const Ht=F;let _t=F-1;_t<0&&(_t=ft.length-1);for(let Nt=0,Dt=u+m*2;Nt<Dt;Nt++){const ee=V*Nt,q=V*(Nt+1),R=wt+Ht+ee,b=wt+_t+ee,H=wt+_t+q,Z=wt+Ht+q;qt(R,b,H,Z)}}}function dt(ft,wt,F){l.push(ft),l.push(wt),l.push(F)}function Gt(ft,wt,F){$t(ft),$t(wt),$t(F);const Ht=s.length/3,_t=y.generateTopUV(n,s,Ht-3,Ht-2,Ht-1);te(_t[0]),te(_t[1]),te(_t[2])}function qt(ft,wt,F,Ht){$t(ft),$t(wt),$t(Ht),$t(wt),$t(F),$t(Ht);const _t=s.length/3,Nt=y.generateSideWallUV(n,s,_t-6,_t-3,_t-2,_t-1);te(Nt[0]),te(Nt[1]),te(Nt[3]),te(Nt[1]),te(Nt[2]),te(Nt[3])}function $t(ft){s.push(l[ft*3+0]),s.push(l[ft*3+1]),s.push(l[ft*3+2])}function te(ft){r.push(ft.x),r.push(ft.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new jl[s.type]().fromJSON(s)),new Nc(n,t.options)}}const kx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new bt(r,a),new bt(o,l),new bt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],p=t[s*3+1],v=t[s*3+2],x=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new bt(a,1-l),new bt(c,1-h),new bt(f,1-v),new bt(x,1-d)]:[new bt(o,1-l),new bt(u,1-h),new bt(p,1-v),new bt(m,1-d)]}};function Bx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class vs extends ea{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vs(t.radius,t.detail)}}class fr extends ea{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fr(t.radius,t.detail)}}class es extends Ne{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,p=new B,v=new bt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/e+1)/2,v.y=(p.y/e+1)/2,u.push(v.x,v.y)}h+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let d=0;d<n;d++){const y=d+m,S=y,g=y+n+1,A=y+n+2,E=y+1;o.push(S,g,E),o.push(g,A,E)}}this.setIndex(o),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Gn extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new B,f=new B,p=[],v=[],x=[],m=[];for(let d=0;d<=n;d++){const y=[],S=d/n;let g=0;d===0&&a===0?g=.5/e:d===n&&l===Math.PI&&(g=-.5/e);for(let A=0;A<=e;A++){const E=A/e;h.x=-t*Math.cos(s+E*r)*Math.sin(a+S*o),h.y=t*Math.cos(a+S*o),h.z=t*Math.sin(s+E*r)*Math.sin(a+S*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(E+g,1-S),y.push(c++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const S=u[d][y+1],g=u[d][y],A=u[d+1][y],E=u[d+1][y+1];(d!==0||a>0)&&p.push(S,g,E),(d!==n-1||l<Math.PI)&&p.push(g,A,E)}this.setIndex(p),this.setAttribute("position",new pe(v,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class er extends Ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new B,h=new B,f=new B;for(let p=0;p<=n;p++)for(let v=0;v<=s;v++){const x=v/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=s;v++){const x=(s+1)*p+v-1,m=(s+1)*(p-1)+v-1,d=(s+1)*(p-1)+v,y=(s+1)*p+v;a.push(x,m,y),a.push(m,d,y)}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Gx extends je{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Vx extends Cs{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class We extends Cs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zc extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Hx extends zc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Yo=new Le,tu=new B,eu=new B;class vf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(tu),eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eu),e.updateMatrixWorld(),Yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const nu=new Le,Pr=new B,$o=new B;class Wx extends vf{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new Be(2,1,1,1),new Be(0,1,1,1),new Be(3,1,1,1),new Be(1,1,1,1),new Be(3,0,1,1),new Be(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Pr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Pr),$o.copy(n.position),$o.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($o),n.updateMatrixWorld(),s.makeTranslation(-Pr.x,-Pr.y,-Pr.z),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu)}}class $r extends zc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Xx extends vf{constructor(){super(new Tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qx extends zc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Xx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class xf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=iu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=iu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function iu(){return performance.now()}const su=new Le;class Yx{constructor(t,e,n=0,s=1/0){this.ray=new bc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return su.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(su),this}intersectObject(t,e=!0,n=[]){return Ql(t,this,n,e),n.sort(ru),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ql(t[s],this,n,e);return n.sort(ru),n}}function ru(i,t){return i.distance-t.distance}function Ql(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ql(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);const tn=(i,t={})=>new We({color:i,flatShading:!0,...t});function Yi(i){const t=i.map(a=>a.toNonIndexed()),e=t.reduce((a,o)=>a+o.attributes.position.count,0),n=new Float32Array(e*3);let s=0;for(const a of t)n.set(a.attributes.position.array,s),s+=a.attributes.position.array.length;const r=new Ne;return r.setAttribute("position",new Ve(n,3)),r.computeVertexNormals(),r}function $x(i,t,e,n,s,r){const a=r.id,{heightAt:o,pathDist:l,plinths:c}=t,u=t.lighthouse.pos,h=new He,f=new Ct,p=[],v=(U,pt,lt,Zt=2,Qt=5)=>l(U,pt)>lt&&Math.hypot(U-u.x,pt-u.z)>Qt&&!c.some(Et=>Math.hypot(Et.x-U,Et.z-pt)<Zt),x=(U,pt,lt=U*20)=>{const Zt=[];for(let Qt=0;Qt<lt&&Zt.length<U;Qt++){const Et=(n()-.5)*104,Kt=(n()-.5)*104,se=o(Et,Kt);pt(Et,Kt,se)&&Zt.push({x:Et,z:Kt,h:se,r:n(),s:n()})}return Zt},m=(U,pt,lt,Zt,Qt=!1)=>{const Et=new gn(U,pt,Math.max(1,lt.length));return Et.count=lt.length,lt.forEach((Kt,se)=>{Zt(Kt,se,Et),h.updateMatrix(),Et.setMatrixAt(se,h.matrix)}),Et.instanceColor&&(Et.instanceColor.needsUpdate=!0),Et.castShadow=Qt,Et.receiveShadow=!0,i.add(Et),Et},d=(e.mobile?.55:1)*1.8,y=(()=>{const U=[[-.9,.5,.05],[-.45,.68,-.06],[0,.78,.02],[.45,.66,-.04],[.9,.48,.06]].map(([Qt,Et,Kt])=>{const se=new Bn(.045,Et,3);return se.translate(0,Et/2,0),se.rotateZ(Qt*.45),se.rotateX(Kt*3),se.translate(Qt*.09,0,Kt),se}),pt=Yi(U),lt=pt.attributes.position,Zt=[];for(let Qt=0;Qt<lt.count;Qt++){const Et=xe.clamp(lt.getY(Qt)/.7,0,1),Kt=.5+.7*Et;Zt.push(Kt,Kt,Kt*.95)}return pt.setAttribute("color",new pe(Zt,3)),pt})(),S=x(Math.round(280*d),(U,pt,lt)=>lt>.8&&v(U,pt,1.7,1.7,4.4));m(y,tn("#ffffff",{vertexColors:!0}),S,(U,pt,lt)=>{h.position.set(U.x,U.h-.05,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.s*.7),lt.setColorAt(pt,f.set(a==="vinter"?U.s<.5?"#c8d4c0":"#e6eef4":a==="vulkan"?U.s<.5?"#5a6a3a":"#7a7a4a":U.s<.5?"#7fae4e":"#9cc45e"))});const g=x(Math.round((a==="vinter"?0:a==="vulkan"?30:120)*d),(U,pt,lt)=>lt>.85&&v(U,pt,1.9,2,4.5)),A=new Xe(.025,.03,.4,4);A.translate(0,.2,0);const E=new vs(.11,0);E.translate(0,.42,0);const w=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];if(m(A,tn("#5f8f3a"),g,U=>{h.position.set(U.x,U.h-.03,U.z),h.rotation.set(0,0,0),h.scale.setScalar(.9+U.s*.6)}),m(E,tn("#ffffff"),g,(U,pt,lt)=>{h.position.set(U.x,U.h-.03,U.z),h.scale.setScalar(.9+U.s*.6),lt.setColorAt(pt,f.set(w[Math.floor(U.r*w.length)]))}),a!=="vulkan"){const U=(()=>{const Zt=[],Qt=[];for(let se=0;se<8;se++){const me=se/8*Math.PI*2,Ee=.32;Zt.push(0,0,0,Math.cos(me)*.12,0,Math.sin(me)*.12,Math.cos(me-Ee)*.045,0,Math.sin(me-Ee)*.045),Zt.push(0,0,0,Math.cos(me+Ee)*.045,0,Math.sin(me+Ee)*.045,Math.cos(me)*.12,0,Math.sin(me)*.12);for(let en=0;en<6;en++)Qt.push(1,1,1)}for(let se=0;se<6;se++){const me=se/6*Math.PI*2,Ee=(se+1)/6*Math.PI*2;Zt.push(0,.012,0,Math.cos(Ee)*.035,.012,Math.sin(Ee)*.035,Math.cos(me)*.035,.012,Math.sin(me)*.035);for(let en=0;en<3;en++)Qt.push(1,.78,.18)}const Kt=new Ne;return Kt.setAttribute("position",new pe(Zt,3)),Kt.setAttribute("color",new pe(Qt,3)),Kt.setAttribute("normal",new pe(new Array(Zt.length/3).fill(0).flatMap(()=>[0,1,0]),3)),Kt})(),pt=x(Math.round((a==="vinter"?10:60)*d),(Zt,Qt,Et)=>Et>.9&&v(Zt,Qt,1.6,2,4.5)),lt=[];for(const Zt of pt){const Qt=5+Math.floor(Zt.r*9);for(let Et=0;Et<Qt;Et++){const Kt=n()*6.28,se=Math.sqrt(n())*1.6,me=Zt.x+Math.cos(Kt)*se,Ee=Zt.z+Math.sin(Kt)*se,en=o(me,Ee);en>.85&&v(me,Ee,1.4,2,4.5)&&lt.push({x:me,z:Ee,h:en,r:n(),s:n()})}}m(U,new We({color:"#ffffff",vertexColors:!0,side:Je}),lt,(Zt,Qt,Et)=>{h.position.set(Zt.x,Zt.h+.035,Zt.z),h.rotation.set((Zt.s-.5)*.3,Zt.r*6.28,0),h.scale.setScalar(1.3+Zt.s*.7),Et.setColorAt(Qt,f.setRGB(1,.97+Zt.r*.03,.94+Zt.s*.06))})}const C=x(Math.round((a==="tak"?36:0)*d),(U,pt,lt)=>lt>1&&v(U,pt,2.4,2.4,5)),M=new Gn(.22,8,4,0,Math.PI*2,0,Math.PI/2);M.scale(1,.7,1),M.translate(0,.28,0);const _=new Xe(.07,.09,.3,6);_.translate(0,.14,0),m(_,tn("#f4ead6"),C,U=>{h.position.set(U.x,U.h-.03,U.z),h.rotation.set(0,0,(U.r-.5)*.3),h.scale.setScalar(.8+U.s)},!0),m(M,tn("#ffffff"),C,(U,pt,lt)=>{h.position.set(U.x,U.h-.03,U.z),h.rotation.set(0,0,(U.r-.5)*.3),h.scale.setScalar(.8+U.s),lt.setColorAt(pt,f.set(U.r<.6?"#d8453a":"#c89a5a"))},!0);const T=Yi([[-.08,0],[.07,.05],[0,-.07]].map(([U,pt],lt)=>{const Zt=new Bn(.04,1.1+lt*.2,3);return Zt.translate(U,.55+lt*.1,pt),Zt}).concat([(()=>{const U=new ro(.05,.18,2,4);return U.translate(.07,1.25,.05),U})()])),D=x(Math.round(150*d),(U,pt,lt)=>lt>.05&&lt<.55&&v(U,pt,2.2,2,5),6e3),k=m(T,tn(a==="vinter"?"#a89878":a==="vulkan"?"#5a5a3a":"#9aa856"),D,U=>{h.position.set(U.x,U.h-.1,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.s*.6)}),L=[],O=[];for(const U of t.paths)for(const pt of[-1,1]){let lt=null,Zt=0,Qt=0;for(let Et=2;Et<U.length-7;Et+=1.7){const Kt=Et/U.length,se=U.curve.getPointAt(Kt),me=U.curve.getTangentAt(Kt),Ee=se.x-me.z*pt*2.25,en=se.z+me.x*pt*2.25,Xn=o(Ee,en);if(!(Xn>.5&&Qt<=0&&v(Ee,en,1.9,2.6,6))){lt=null,Qt>0&&Qt--;continue}L.push({x:Ee,z:en,h:Xn}),lt&&O.push({a:lt,b:{x:Ee,z:en,h:Xn}}),lt={x:Ee,z:en,h:Xn},++Zt>4+Math.floor(n()*5)&&(Zt=0,lt=null,Qt=3+Math.floor(n()*5))}}const V=new Cn(.14,.8,.14);V.translate(0,.4,0);const W=new Cn(1,.07,.06),G=tn("#a07650");m(V,G,L,U=>{h.position.set(U.x,U.h-.05,U.z),h.rotation.set(0,n()*.3,(n()-.5)*.12),h.scale.set(1,1,1)},!0);const j=O.flatMap(U=>[{...U,y:.32},{...U,y:.62}]);m(W,G,j,({a:U,b:pt,y:lt})=>{const Zt=Math.hypot(pt.x-U.x,pt.z-U.z);h.position.set((U.x+pt.x)/2,(U.h+pt.h)/2+lt-.05,(U.z+pt.z)/2),h.rotation.set(0,-Math.atan2(pt.z-U.z,pt.x-U.x),0),h.scale.set(Zt,1,1)},!0);const nt=r.dockTheta??-2.35,ot=new bt(Math.cos(nt),Math.sin(nt)),At=s(nt);let kt=At-6;for(let U=At-10;U<At+4;U+=.25)if(o(ot.x*U,ot.y*U)<.3){kt=U;break}const it=new be,ut=tn("#b48a5e"),Rt=tn("#6e4a2c"),dt=8,Gt=kt-2.5;for(let U=0;U<dt/.55;U++){const pt=new oe(new Cn(.5,.12,2.2),ut);pt.position.set(Gt+U*.55,.75+(n()-.5)*.04,0),pt.rotation.y=(n()-.5)*.05,pt.castShadow=pt.receiveShadow=!0,it.add(pt)}for(let U=0;U<=dt;U+=2)for(const pt of[-1,1]){const lt=new oe(new Xe(.12,.12,2.2,6),Rt);lt.position.set(Gt+U,.1,pt*1.05),lt.castShadow=!0,it.add(lt)}it.rotation.y=-nt,i.add(it);const qt=new be,$t=new Xe(.9,.9,3.4,10,1,!0,0,Math.PI);$t.rotateZ(Math.PI/2),$t.rotateX(Math.PI/2),$t.scale(1,.6,.7);const te=new oe($t,tn("#3f6f9a",{side:Je}));te.rotation.y=Math.PI/2,te.castShadow=!0,qt.add(te);for(const U of[-.6,.6]){const pt=new oe(new Cn(.3,.08,1.2),ut);pt.position.set(U,-.15,0),qt.add(pt)}const ft=new oe(new Cn(2.4,.06,.12),ut);ft.position.set(.2,.05,.4),ft.rotation.y=.3,qt.add(ft);const wt=ot.x*(Gt+dt-1)+-ot.y*2.1,F=ot.y*(Gt+dt-1)+ot.x*2.1;qt.position.set(wt,.3,F),qt.rotation.y=-nt,i.add(qt);const Ht=new be,_t=new oe(new Zn(3,1.4,10,5),new De({color:"#4a3a2a",wireframe:!0}));_t.position.y=1;const Nt=_t.geometry.attributes.position;for(let U=0;U<Nt.count;U++)Nt.setZ(U,Math.sin(Nt.getX(U)/3*Math.PI+1.5)*.15-Math.abs(Nt.getY(U))*.05);Ht.add(_t);for(const U of[-1.6,1.6]){const pt=new oe(new Xe(.07,.09,2,5),Rt);pt.position.set(U,.9,0),pt.castShadow=!0,Ht.add(pt)}for(let U=0;U<5;U++){const pt=new oe(new Gn(.09,6,4),tn("#f0a43a"));pt.position.set(-1.2+U*.6,1.66,.05),Ht.add(pt)}const Dt=kt-4.5,ee=4.2,q=ot.x*Dt-ot.y*ee,R=ot.y*Dt+ot.x*ee;Ht.position.set(q,o(q,R)-.1,R),Ht.rotation.y=-nt+Math.PI/2,i.add(Ht),p.push({x:q,z:R,r:1.4});const b=new Xe(.42,.42,.95,10);b.translate(0,.47,0);const H=new Xe(.44,.44,.08,10),Z=new Cn(.8,.8,.8);Z.translate(0,.4,0);const tt=[],et=(U,pt,lt,Zt)=>{for(let Qt=0;Qt<60&&lt>0;Qt++){const Et=U+(n()-.5)*6,Kt=pt+(n()-.5)*6,se=o(Et,Kt);se<.4||!v(Et,Kt,2.3,2.4,4.6)||tt.some(me=>Math.hypot(me.x-Et,me.z-Kt)<1.1)||(tt.push({x:Et,z:Kt,h:se,kind:Zt??(n()<.6?"barrel":"crate"),r:n()}),lt--)}};et(ot.x*(kt-2.5),ot.y*(kt-2.5),5),et(u.x+6,u.z+1,3,"barrel"),et(u.x-6,u.z+2,2);const Ut=tt.filter(U=>U.kind==="barrel"),Mt=tt.filter(U=>U.kind==="crate");m(b,tn("#8a5a36"),Ut,U=>{h.position.set(U.x,U.h-.05,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(1)},!0),m(H,tn("#3e3a38"),Ut.flatMap(U=>[{...U,y:.2},{...U,y:.75}]),U=>{h.position.set(U.x,U.h-.05+U.y,U.z)},!1),m(Z,tn("#b8925e"),Mt,U=>{h.position.set(U.x,U.h-.05,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.r*.4)},!0);for(const U of tt)p.push({x:U.x,z:U.z,r:.55});const Pt=x(Math.round(380*d),(U,pt,lt)=>lt>.9&&v(U,pt,1.6,1.6,4.4)),re=new vs(.06,0);re.translate(0,.06,0),m(re,new We({color:a==="vulkan"?"#ff9a5a":"#fffdf4"}),Pt,U=>{h.position.set(U.x,U.h-.02,U.z),h.rotation.set(0,0,0),h.scale.setScalar(.8+U.s*.8)});const yt=(U,pt,lt)=>{const Zt=[];for(let Qt=0;Qt<U*40&&Zt.length<U;Qt++){const Et=(n()-.5)*130,Kt=(n()-.5)*130,se=o(Et,Kt),me=.05-se;me>pt&&me<lt&&Math.hypot(Et-u.x,Kt-u.z)>6&&Zt.push({x:Et,z:Kt,h:se,r:n(),s:n()})}return Zt},Wt=Yi([0,1,2].map(U=>{const pt=new Bn(.08,.9+U*.25,3);return pt.translate((U-1)*.12,.45+U*.12,U%2*.1),pt.rotateZ((U-1)*.25),pt})),ae=yt(Math.round(90*d),.35,1.8),le=m(Wt,tn("#4f9a5a"),ae,U=>{h.position.set(U.x,U.h,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.s*.7)}),jt=Yi([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([U,pt,lt])=>{const Zt=new vs(lt,0);return Zt.translate(U,lt*.8,pt),Zt})),Me=yt(Math.round((a==="tak"?28:0)*d),.5,1.6),ce=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];if(m(jt,tn("#ffffff"),Me,(U,pt,lt)=>{h.position.set(U.x,U.h,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.s*.9),lt.setColorAt(pt,f.set(ce[Math.floor(U.r*ce.length)]))}),a==="tak"){const U=Yi([[0,0,0,.55],[.12,.05,.4,.42],[-.13,-.04,-.45,.4],[.05,.12,.2,.33],[-.06,-.1,-.15,.36]].map(([Et,Kt,se,me])=>{const Ee=new Bn(.05,me,4);return Ee.translate(0,me/2,0),Ee.rotateZ(se),Ee.rotateX(Kt*2),Ee.translate(Et,0,Kt),Ee})),pt=Yi([(()=>{const Et=new Xe(.12,.16,.12,7);return Et.translate(0,.06,0),Et})(),...Array.from({length:7},(Et,Kt)=>{const se=new Bn(.025,.2,3),me=Kt/7*6.28;return se.translate(0,.1,0),se.rotateZ(.5),se.rotateY(me),se.translate(Math.cos(me)*.08,.12,-Math.sin(me)*.08),se})]),lt=x(Math.round(16*d),(Et,Kt,se)=>.05-se>.08&&t.landDist(Et,Kt)>5,3e4).map(Et=>({...Et,big:2.4,pool:!0})),Zt=[...yt(Math.round(36*d),.12,.9),...lt],Qt=["#ff5a80","#a060ff","#ffb820","#ff5a2a","#ff7ad0","#f4d070"];m(U,tn("#ffffff"),Zt.filter((Et,Kt)=>Kt%2===0),(Et,Kt,se)=>{h.position.set(Et.x,Et.h-.02,Et.z),h.rotation.set(0,Et.r*6,0),h.scale.setScalar((.8+Et.s*.8)*(Et.big??1)),se.setColorAt(Kt,f.set(Qt[Math.floor(Et.r*Qt.length)]).multiplyScalar(Et.pool?1.6:1))}),m(pt,tn("#ffffff"),Zt.filter((Et,Kt)=>Kt%2===1),(Et,Kt,se)=>{h.position.set(Et.x,Et.h-.02,Et.z),h.rotation.set(0,Et.r*6,0),h.scale.setScalar((.9+Et.s*.9)*(Et.big??1)),se.setColorAt(Kt,f.set(Qt[(Math.floor(Et.s*Qt.length)+2)%Qt.length]).multiplyScalar(Et.pool?1.6:1))})}const ye=Yi([(()=>{const U=new Gn(.17,7,4);return U.scale(1.2,.5,.85),U.translate(0,.07,0),U})(),...[-1,1].map(U=>{const pt=new Gn(.06,5,3);return pt.scale(1.3,.7,1),pt.translate(U*.17,.08,.15),pt}),...[-1,1].flatMap(U=>[0,1,2].map(pt=>{const lt=new Cn(.16,.02,.02);return lt.rotateZ(U*-.5),lt.translate(U*.18,.04,-.06+pt*.07),lt})),...[-1,1].map(U=>{const pt=new Gn(.025,4,3);return pt.translate(U*.05,.13,.09),pt})]),X=a==="vulkan"?[]:x(Math.round((a==="vinter"?5:18)*d),(U,pt,lt)=>lt>.08&&lt<.42&&v(U,pt,2.2,2,5),12e3).map(U=>({...U,home:{x:U.x,z:U.z},dir:U.r*6.28,t:U.s*4,run:0})),It=m(ye,tn(a==="vinter"?"#b8584a":"#d8553a"),X,U=>{h.position.set(U.x,U.h,U.z),h.rotation.set(0,U.dir,0),h.scale.setScalar(1)},!0),rt=Yi([(()=>{const pt=new Gn(.07,6,4);return pt.scale(.6,.5,1.4),pt})(),(()=>{const pt=new Bn(.06,.1,3);return pt.rotateX(-Math.PI/2),pt.translate(0,0,-.13),pt})()]),gt=[...yt(Math.round(26*d),.1,.8),...x(Math.round(12*d),(U,pt,lt)=>.05-lt>.12&&t.landDist(U,pt)>5,3e4).map(U=>({...U,big:1.5}))].map(U=>({...U,rad:.5+U.s*.9,sp:(.5+U.r)*(U.s<.5?1:-1)})),zt=["#ff9a3a","#3a7ad8","#f2c94c","#2f8f9a"],Ft=m(rt,tn("#ffffff"),gt,(U,pt,lt)=>{h.position.set(U.x,U.h,U.z),lt.setColorAt(pt,f.set(zt[pt%zt.length]))}),he=new fr(.16,0);he.scale(.45,.3,1.4);const ze=yt(e.mobile?5:8,.9,2.6).map(U=>({...U,rad:2+U.s*3,speed:(.25+U.r*.3)*(U.r<.5?1:-1)})),ke=9,we=new gn(he,new De({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,ze.length*ke));we.count=ze.length*ke,we.renderOrder=1,i.add(we);const xn=Array.from({length:ke},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),dn=U=>{qt.position.y=.3+Math.sin(U*1.2)*.08,qt.rotation.z=Math.sin(U*.9)*.04,qt.rotation.x=Math.sin(U*1.3+1)*.03,ze.forEach((lt,Zt)=>{const Qt=U*lt.speed+lt.r*6,Et=lt.x+Math.cos(Qt)*lt.rad,Kt=lt.z+Math.sin(Qt)*lt.rad,se=Math.atan2(-Math.sin(Qt)*lt.speed,Math.cos(Qt)*lt.speed);for(let me=0;me<ke;me++){const[Ee,en,Xn,Jn]=xn[me];h.position.set(Et+Ee+Math.sin(U*2+Jn)*.1,Math.max(o(Et,Kt)+.25,-.75)+en,Kt+Xn),h.rotation.set(0,se+Math.sin(U*6+Jn)*.15,0),h.scale.setScalar(1),h.updateMatrix(),we.setMatrixAt(Zt*ke+me,h.matrix)}}),we.instanceMatrix.needsUpdate=!0,gt.forEach((lt,Zt)=>{const Qt=U*lt.sp+lt.r*6+Math.sin(U*.7+Zt)*.6,Et=lt.x+Math.cos(Qt)*lt.rad,Kt=lt.z+Math.sin(Qt)*lt.rad;h.position.set(Et,Math.min(o(Et,Kt)+.08,0),Kt),h.rotation.set(0,-Qt+(lt.sp>0?0:Math.PI),Math.sin(U*9+Zt)*.2),h.scale.setScalar((.9+lt.s*.5)*(lt.big??1)),h.updateMatrix(),Ft.setMatrixAt(Zt,h.matrix)}),Ft.instanceMatrix.needsUpdate=!0;const pt=Math.min(.05,Math.max(0,U-(dn.last??U)));dn.last=U,X.forEach((lt,Zt)=>{if(lt.t-=pt,lt.t<=0&&(lt.run>0?(lt.run=0,lt.t=.8+Math.random()*2.5):(lt.run=(Math.random()<.5?-1:1)*(.9+Math.random()*.8),lt.t=.4+Math.random()*.9,Math.random()<.3&&(lt.dir+=(Math.random()-.5)*1.5))),lt.run){const Qt=lt.x+Math.cos(lt.dir)*lt.run*pt,Et=lt.z-Math.sin(lt.dir)*lt.run*pt,Kt=o(Qt,Et);Kt>.05&&Kt<.5&&Math.hypot(Qt-lt.home.x,Et-lt.home.z)<3.5?(lt.x=Qt,lt.z=Et,lt.h=Kt):lt.run=-lt.run}h.position.set(lt.x,lt.h+(lt.run?Math.abs(Math.sin(U*30+Zt))*.015:0),lt.z),h.rotation.set(0,lt.dir,lt.run?Math.sin(U*30+Zt)*.08:0),h.scale.setScalar(1),h.updateMatrix(),It.setMatrixAt(Zt,h.matrix)}),It.instanceMatrix.needsUpdate=!0,!((U*60|0)%2)&&(D.forEach((lt,Zt)=>{h.position.set(lt.x,lt.h-.1,lt.z),h.rotation.set(Math.sin(U*1.7+lt.x*.3)*.08,lt.r*6,Math.cos(U*1.4+lt.z*.3)*.08),h.scale.setScalar(.8+lt.s*.6),h.updateMatrix(),k.setMatrixAt(Zt,h.matrix)}),k.instanceMatrix.needsUpdate=!0,ae.forEach((lt,Zt)=>{h.position.set(lt.x,lt.h,lt.z),h.rotation.set(Math.sin(U*1.1+lt.x)*.12,lt.r*6,Math.cos(U*.9+lt.z)*.12),h.scale.setScalar(.8+lt.s*.7),h.updateMatrix(),le.setMatrixAt(Zt,h.matrix)}),le.instanceMatrix.needsUpdate=!0)};it.updateMatrixWorld(!0);const Kn=[];return it.children.forEach(U=>{if(U.geometry.type==="CylinderGeometry"){const pt=U.getWorldPosition(new B);Kn.push({x:pt.x,z:pt.z,r:.15})}}),Kn.push({x:wt,z:F,r:.9}),{colliders:p,update:dn,obstacles:Kn}}function au(i,{heightTex:t,ext:e,grid:n,quality:s,sunDir:r,colors:a,level:o=.05,size:l=220,center:c=[0,0],maxDepth:u=100}){const h=li.merge([Bt.fog,{uTime:{value:0},uHeight:{value:t},uExt:{value:e},uGrid:{value:n},uLevel:{value:o},uMaxDepth:{value:u},uShallow:{value:new Ct(a.shallow)},uMid:{value:new Ct(a.mid)},uDeep:{value:new Ct(a.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*a.caustic}}]);h.uHeight.value=t;const f=new je({uniforms:h,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
      #include <fog_pars_vertex>
      uniform float uTime;
      varying vec3 vWorld;
      void main() {
        vec3 p = position;
        p.y += sin(p.x * 0.35 + uTime * 0.9) * 0.025 + cos(p.z * 0.3 + uTime * 0.7) * 0.025;
        vec4 wp = modelMatrix * vec4(p, 1.0);
        vWorld = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      #include <common>
      #include <fog_pars_fragment>
      uniform float uTime, uExt, uLevel, uCaustic, uGrid, uMaxDepth;
      uniform sampler2D uHeight;
      uniform vec3 uShallow, uMid, uDeep, uSun;
      varying vec3 vWorld;

      vec2 hash2(vec2 p) {
        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
        return fract(sin(p) * 43758.5453);
      }
      // Avstand til nærmeste celle-kant (F2 − F1) gir det lysende nettverket
      float voronoiEdge(vec2 p, float t) {
        vec2 n = floor(p), f = fract(p);
        float d1 = 8.0, d2 = 8.0;
        for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
          vec2 g = vec2(float(i), float(j));
          vec2 o = hash2(n + g);
          o = 0.5 + 0.45 * sin(t + 6.2831 * o);
          float d = length(g + o - f);
          if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
        }
        return d2 - d1;
      }
      float ground(vec2 xz) {
        // Manuell bilineær filtrering (noen drivere filtrerer ikke HalfFloat-teksturer → trappetrinn)
        vec2 g = clamp((xz + uExt) / (2.0 * uExt), 0.0, 1.0) * uGrid;
        vec2 i = floor(g), f = fract(g);
        f = f * f * (3.0 - 2.0 * f); // myk (smoothstep) interpolasjon i stedet for lineær
        float n = uGrid + 1.0;
        float a = texture2D(uHeight, (i + vec2(0.5, 0.5)) / n).r;
        float b = texture2D(uHeight, (i + vec2(1.5, 0.5)) / n).r;
        float c = texture2D(uHeight, (i + vec2(0.5, 1.5)) / n).r;
        float d = texture2D(uHeight, (i + vec2(1.5, 1.5)) / n).r;
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      // Billig enkelt-oppslag (nærmeste celle) for de grove ring-estimatene under
      float ground1(vec2 xz) {
        vec2 g = clamp((xz + uExt) / (2.0 * uExt), 0.0, 1.0) * uGrid;
        return texture2D(uHeight, (floor(g) + 0.5) / (uGrid + 1.0)).r;
      }
      // Snitt-dybde i en ring rundt punktet: fine = bilineær (glatt falsk dybde), ellers grovt (bare kyst-maske)
      float ringDepth(vec2 xz, float r, bool fine) {
        float s = 0.0;
        for (int k = 0; k < 6; k++) {
          float a = float(k) * 1.0472 + 0.4;
          vec2 q = xz + vec2(cos(a), sin(a)) * r;
          s += clamp(uLevel - (fine ? ground(q) : ground1(q)), -0.4, 0.8);
        }
        return s / 6.0;
      }

      void main() {
        float depth = uLevel - ground(vWorld.xz);
        if (depth < -0.02 || depth > uMaxDepth) discard; // maxDepth: små basseng skal ikke tegnes over lavlandet
        float d = max(depth, 0.0);
        // G3c: grunne pytter får falsk dybde fra hvor mye vann som ligger rundt (mørkner mot midten), og
        // innestengte pytter (land rundt i større ring) får mykt i stedet for hardt hvitt skum i kanten
        float de = d, coast = 1.0, fd = 0.0;
        if (d < 0.6) {
          fd = ringDepth(vWorld.xz, 1.6, true);
          de = max(d, fd * 3.5);
          coast = smoothstep(-0.25, 0.25, ringDepth(vWorld.xz, 5.5, true)); // bilineært: grovt oppslag ga firkant-flekker
        }

        // Farge og gjennomsiktighet etter dybde
        // G3: lang overgang (sandbunnen synes langt ut), og grunt vann er nesten klart, ikke melkete
        vec3 col = mix(uShallow, uMid, smoothstep(0.05, 0.7, de));
        col = mix(col, uDeep, smoothstep(1.3, 3.8, de));
        float alpha = mix(0.16, 0.92, smoothstep(0.0, 2.4, de));
        alpha = max(alpha, 0.5 * smoothstep(0.03, 0.22, de)); // grunne laguner/pytter blir turkise, ikke grå glassplater
        alpha *= smoothstep(0.0, 0.05, d) * 0.6 + 0.4; // myk overgang helt i kanten (våt sand synes gjennom)
        // Innestengte pytter: klar turkis (som kulpen i raw4) med bevegelige krusninger, så de ikke ser ut som is
        float pool = (1.0 - coast) * smoothstep(0.015, 0.08, d);
        col = mix(col, uMid, 0.55 * pool);
        col = mix(col, uDeep, 0.45 * pool * smoothstep(0.03, 0.14, fd)); // mørkere mot midten (falsk dybde)
        float inner = smoothstep(0.02, 0.16, fd); // 0 i ytre ~30 % av pytten, 1 mot midten
        alpha *= mix(1.0, 0.3 + 0.7 * inner, 1.0 - coast); // ytre del av pytten: sandbunnen skinner gjennom, ikke melkete rand
        alpha = max(alpha, 0.68 * pool * inner);
        float rp = sin(dot(vWorld.xz, vec2(1.7, 0.9)) * 2.4 + uTime * 1.8) * sin(dot(vWorld.xz, vec2(-0.6, 1.4)) * 2.0 - uTime * 1.3);
        col += vec3(0.9, 1.0, 1.0) * rp * 0.06 * pool;

        // Sandriller under grunt vann
        float rip = sin(vWorld.x * 2.1 + sin(vWorld.z * 0.6) * 2.0 + vWorld.z * 0.7);
        col *= 1.0 - 0.05 * rip * (1.0 - smoothstep(0.2, 1.4, d));

        // Kaustikk: to lag med ulik skala og fart, sterkest på grunt/middels vann
        // Bredt, mykt kaustikk-nett i stor skala (som referansen), synlig også på middels dypt vann
        float c1 = voronoiEdge(vWorld.xz * 0.2 + vec2(uTime * 0.02, uTime * 0.015), uTime * 0.35);
        float c2 = voronoiEdge(vWorld.xz * 0.33 - vec2(uTime * 0.018, -uTime * 0.022), uTime * 0.5 + 2.0);
        float caustic = pow(1.0 - smoothstep(0.0, 0.17, c1), 2.0) * 0.65 + pow(1.0 - smoothstep(0.0, 0.12, c2), 2.0) * 0.35;
        float cMask = smoothstep(0.03, 0.3, de) * (1.0 - smoothstep(2.8, 5.5, de));
        col += vec3(0.85, 1.0, 0.95) * caustic * cMask * 0.17 * uCaustic;
        alpha = max(alpha, caustic * cMask * 0.16 * uCaustic);

        // Skum: tynn linje som pulserer inn og ut langs kysten, pluss en svakere ute
        float wave = 0.5 + 0.5 * sin(uTime * 1.1 + vWorld.x * 0.08 + vWorld.z * 0.06);
        float edge1 = 0.05 + wave * 0.16;
        // Linjebredden følger dybde-gradienten, så slake bunner (pytter) ikke blir hvite flater
        float fw = max(fwidth(d) * 1.6, 0.006);
        float foam = 1.0 - smoothstep(0.0, min(0.035, fw * 1.5), abs(d - edge1)); // skarp, tynn skumlinje
        foam += (1.0 - smoothstep(0.0, 0.035, d)) * 0.8;
        float edge2 = 0.42 + wave * 0.18;
        foam += (1.0 - smoothstep(0.0, min(0.05, fw * 2.0), abs(d - edge2))) * 0.35 * smoothstep(0.004, 0.02, fw);
        // brudd i linja så den ikke ser tegnet ut
        foam *= 0.8 + 0.2 * sin(vWorld.x * 1.7 + vWorld.z * 1.3 + uTime * 0.7);
        foam = clamp(foam, 0.0, 1.0) * mix(0.18, 1.0, coast); // pytter: bare et svakt skumslør, ingen hard rand
        col = mix(col, vec3(1.0), foam);
        alpha = max(alpha, foam * 0.97); // klar hvit skumlinje (raw1)

        // Små krusninger og solglans
        vec3 nrm = normalize(vec3(
          sin(vWorld.x * 1.3 + uTime * 1.4) * 0.06 + sin(vWorld.z * 2.2 - uTime * 1.1) * 0.04, 1.0,
          cos(vWorld.z * 1.1 + uTime * 1.2) * 0.06 + cos(vWorld.x * 1.9 + uTime) * 0.04));
        vec3 viewDir = normalize(cameraPosition - vWorld);
        vec3 h = normalize(uSun + viewDir);
        float spec = pow(max(dot(nrm, h), 0.0), 90.0);
        col += vec3(1.0, 0.9, 0.75) * spec * 0.8 * smoothstep(0.15, 1.2, de);
        alpha = max(alpha, spec * 0.6);

        gl_FragColor = vec4(col, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`}),p=l<50?8:s.mobile?40:64,v=new Zn(l,l,p,p);v.rotateX(-Math.PI/2);const x=new oe(v,f);return x.position.set(c[0],o,c[1]),x.renderOrder=2,i.add(x),{mesh:x,update(m){h.uTime.value=m}}}function ou(i,t){const e=new io(Float32Array.from(i),t,t,to,hi);return e.magFilter=e.minFilter=vn,e.generateMipmaps=!1,e.needsUpdate=!0,e}const tc={uOlPx:{value:2},uOlRes:{value:new bt(1,1)},uInk:{value:new Ct("#1f1a1c")}},jx=.16,Zx=.65,ec={rock:new Set,tree:new Set,tower:new Set,figure:new Set},nc={rock:!0,tree:!0,tower:!0,figure:!0};function Kx(i,t,e,n){tc.uOlPx.value=i*t,tc.uOlRes.value.set(Math.max(1,e*t),Math.max(1,n*t))}function _f(i){for(const t in ec)nc[t]=!!i[t],ec[t].forEach(e=>e.visible=nc[t])}function Mf(i){if(i.attributes.olNormal)return;i.attributes.normal||i.computeVertexNormals();const t=i.attributes.position,e=i.attributes.normal,n=t.count,s=new Map,r=new Array(n);for(let o=0;o<n;o++){const l=`${Math.round(t.getX(o)*1e4)},${Math.round(t.getY(o)*1e4)},${Math.round(t.getZ(o)*1e4)}`;r[o]=l;const c=s.get(l)||[0,0,0];c[0]+=e.getX(o),c[1]+=e.getY(o),c[2]+=e.getZ(o),s.set(l,c)}const a=new Float32Array(n*3);for(let o=0;o<n;o++){const l=s.get(r[o]),c=Math.hypot(l[0],l[1],l[2])||1;a[o*3]=l[0]/c,a[o*3+1]=l[1]/c,a[o*3+2]=l[2]/c}i.setAttribute("olNormal",new Ve(a,3))}const jo=new Map;function yf(i,t,e,n){const s=`${i?i.uuid:"batch"}|${t}|${e}|${n}`;if(jo.has(s))return jo.get(s);const r=new De({side:Pn,vertexColors:e});return r.color.copy(e||!i?new Ct(1,1,1):i.color).multiplyScalar(jx),r.visible=nc[t],r.onBeforeCompile=a=>{Object.assign(a.uniforms,tc),a.vertexShader=`attribute vec3 olNormal;
uniform float uOlPx;
uniform vec2 uOlRes;
varying float vOlZ;
`+a.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        {
          vec3 on = olNormal;
          #ifdef USE_INSTANCING
            on = mat3(instanceMatrix) * on;
          #endif
          vec2 dn = (normalMatrix * on).xy;
          float l = length(dn);
          if (l > 1e-4) gl_Position.xy += dn / max(l, 0.35) * (2.0 * uOlPx / uOlRes) * gl_Position.w;
          // Dybden til objektets fot (instansens origo), ikke fragmentets: baksidene ligger bak vokteren
          // selv når treet står foran ham, og ble stående som en mørk klump inne i dither-hullet
          vec4 o0 = vec4(0.0, 0.0, 0.0, 1.0);
          #ifdef USE_INSTANCING
            o0 = instanceMatrix * o0;
          #endif
          vOlZ = -(modelViewMatrix * o0).z;
        }`),a.fragmentShader=`varying float vOlZ;
uniform vec3 uInk;
`+a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, ${Zx.toFixed(2)});`),n&&(a.uniforms.uKeep=dr.uKeep,a.uniforms.uRad=dr.uRad,a.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+a.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
          if (k > 0.0 && vOlZ < uKeep.z + 0.8) { // kronen ligger ~2 enheter nærmere kameraet enn foten
            float b = fract(52.9829189 * fract(dot(floor(gl_FragCoord.xy), vec2(0.06711056, 0.00583715)))); // samme støy som trærne (G7)
            if (k * 0.95 > b + 0.02) discard;
          }
        }`))},r.customProgramCacheKey=()=>`ol${n?"f":""}`,ec[t].add(r),jo.set(s,r),r}const Sf=i=>{const t=i.material;return i.isMesh&&!Array.isArray(t)&&(t.isMeshLambertMaterial||t.isMeshStandardMaterial)&&!t.transparent&&t.side!==Je};function ic(i,t,e=!1){if(!Sf(i))return null;Mf(i.geometry);const n=!!(i.material.vertexColors&&i.geometry.attributes.color),s=new gn(i.geometry,yf(i.material,t,n,e),i.instanceMatrix.count);return s.instanceMatrix=i.instanceMatrix,s.count=i.count,s.frustumCulled=!1,s.renderOrder=1,s.onBeforeRender=()=>{s.count=i.count},i.add(s),s}const lu=512,cu=new Map;let sc=null;function Jx(i){sc=i}function Qx(i,t){const e=`${i.uuid}|${t}`;let n=cu.get(e);if(n)return n;Mf(i);const s=new gn(i,yf(null,t,!1,!1),lu);return s.instanceMatrix.setUsage(Kc),s.setColorAt(0,new Ct),s.instanceColor.setUsage(Kc),s.count=0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.renderOrder=1,s.raycast=()=>{},n={mesh:s,parts:[]},s.onBeforeRender=()=>{const r=s.instanceMatrix.array,a=s.instanceColor.array;let o=0;for(let l=n.parts.length-1;l>=0;l--){const c=n.parts[l];let u=c,h=!0;for(;u.parent;){if(!u.visible){h=!1;break}u=u.parent}if(u!==sc){++c.userData.olMiss>300&&n.parts.splice(l,1);continue}if(c.userData.olMiss=0,!h||o>=lu)continue;r.set(c.matrixWorld.elements,o*16);const f=c.material.color;a[o*3]=f.r,a[o*3+1]=f.g,a[o*3+2]=f.b,o++}s.count=o,o&&(s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,o*16),s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,o*3),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0)},sc.add(s),cu.set(e,n),n}function na(i,t){return i.traverse(e=>{!Sf(e)||e.userData.noOutline||(e.userData.olMiss=0,Qx(e.geometry,t).parts.push(e))}),i}function Es(i){const t=i.map(([h])=>h.index?h.toNonIndexed():h),e=t.reduce((h,f)=>h+f.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Ct,a=new B;let o=0;t.forEach((h,f)=>{const p=i[f][1],v=h.attributes.position;for(let x=0;x<v.count;x++)a.fromBufferAttribute(v,x),p(a,r),n.set([a.x,a.y,a.z],(o+x)*3),s.set([r.r,r.g,r.b],(o+x)*3);o+=v.count});const l=new Ne;l.setAttribute("position",new Ve(n,3)),l.setAttribute("color",new Ve(s,3)),l.computeVertexNormals();let c=0;const u=l.attributes.normal;return t.forEach((h,f)=>{const p=i[f][2],v=h.attributes.position.count;if(p)for(let x=0;x<v;x++)a.fromBufferAttribute(l.attributes.position,c+x).sub(p).normalize(),u.setXYZ(c+x,a.x,a.y,a.z);c+=v}),l}const rc=.7,ac=3.8;function t_(){const i=[],e=ac/8,n=new Ct("#7a5434"),s=new Ct("#a57a4e");for(let r=0;r<8;r++){const a=r/8,o=(r+1)/8,l=.24-a*.08,c=.24-o*.08,u=new Xe(c,l*1.12,e,7,1),h=u.attributes.position;for(let f=0;f<h.count;f++){const p=h.getY(f)+e/2+r*e,v=p/ac;h.setXYZ(f,h.getX(f)+rc*v*v,p,h.getZ(f))}i.push([u,(f,p)=>p.copy(n).lerp(s,f.y/e%1).multiplyScalar(.55+.45*xe.smoothstep(f.y,0,1.3))])}return Es(i)}function e_(i){const n=[],s=[];for(let a=0;a<=12;a++){const o=a/12;s.push(new B(0,.35*o-1.25*o*o,o*2.7))}for(let a=0;a<12;a++){const o=a/12,l=s[a],c=s[a+1],u=.62*Math.sin(Math.PI*Math.min(1,o*1.1+.08))+.05;for(const h of[-1,1]){const f=new B(h*u,l.y-.08-u*.25,l.z+.32);h>0?n.push(l.x,l.y,l.z,c.x,c.y,c.z,f.x,f.y,f.z):n.push(l.x,l.y,l.z,f.x,f.y,f.z,c.x,c.y,c.z)}}const r=new Ne;return r.setAttribute("position",new pe(n,3)),r}function n_(){const i=[],t=new Ct("#3f8a3a"),e=new Ct("#9ad25a"),n=8;for(let s=0;s<n;s++){const r=e_();r.rotateX(-.15+s%2*.25),r.rotateY(s/n*Math.PI*2+s%2*.2),i.push([r,(a,o)=>{const l=Math.hypot(a.x,a.z);o.copy(t).lerp(e,Math.min(1,l/2.4))}])}for(let s=0;s<3;s++){const r=new Gn(.16,6,4);r.translate(Math.cos(s*2.1)*.18,-.2,Math.sin(s*2.1)*.18),i.push([r,(a,o)=>o.set("#6b4a2a")])}return Es(i)}function hu(i,t,e){const n=i.map(([s,r,a,o],l)=>{const c=new vs(o,2),u=c.attributes.position;for(let h=0;h<u.count;h++){const f=u.getX(h),p=u.getY(h),v=u.getZ(h),x=1+.07*Math.sin(f*7+l)*Math.sin(p*6)+.05*Math.sin(v*9+p*4);u.setXYZ(h,f*x,p*x*.92,v*x)}return c.translate(s,r,a),[c,(h,f)=>f.copy(e).lerp(t,xe.smoothstep(h.y,r-o*.6,r+o*.9)).multiplyScalar((.6+.4*xe.smoothstep(h.y,r-o,r))*(.55+.45*xe.smoothstep(Math.hypot(h.x,h.z),.1,.9+o*.5))),new B(s,r,a)]});return Es(n)}function i_(i){const t=[],e=new Ct("#2f6a48"),n=new Ct("#4a8a5a"),s=new Ct("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,a,o])=>{const l=new Bn(r,a,10,2),c=l.attributes.position;for(let u=0;u<c.count;u++)c.getY(u)<-a/2+.01&&c.setY(u,c.getY(u)+Math.sin(u*1.7)*.12);l.translate(0,o,0),t.push([l,(u,h)=>{const f=(u.y-o+a/2)/a;h.copy(e).lerp(n,f),i&&f>.12&&h.lerp(s,Math.min(1,(f-.12)*2.6))}])}),Es(t)}function s_(){const i=[],t=new Xe(.12,.26,3,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getY(n);e.setX(n,e.getX(n)+Math.sin(s*1.7)*.12)}return t.translate(0,1.5,0),i.push([t,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,a])=>{const o=new Xe(.03,.08,a,4);o.translate(0,a/2,0),o.rotateZ(r),o.translate(n*.3,s,0),i.push([o,(l,c)=>c.set("#2e2622")])}),Es(i)}const dr={uKeep:{value:new B(-1e4,-1e4,0)},uRad:{value:120}};function uu(i){return i.onBeforeCompile=t=>{t.uniforms.uKeep=dr.uKeep,t.uniforms.uRad=dr.uRad,t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      #ifdef DOUBLE_SIDED
        if (!gl_FrontFacing) diffuseColor.rgb *= 0.6; // G7: undersiden av palmebladene er mørkere (raw4)
      #endif`),t.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+t.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      {
        float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
        if (k > 0.0 && -vViewPosition.z < uKeep.z - 1.2) {
          // G7: interleaved gradient noise (blå-støy-aktig) i stedet for et 4-trinns rutenett, som synes som prikker
          float b = fract(52.9829189 * fract(dot(floor(gl_FragCoord.xy), vec2(0.06711056, 0.00583715))));
          if (k * 0.95 > b + 0.02) discard;
        }
      }`)},i}function r_(i,t,e,n){const s=t.filter(L=>L.kind==="palm"),r=t.filter(L=>L.kind==="round"),a=t.filter(L=>L.kind==="bush"),o=t.filter(L=>L.kind==="pine"),l=t.filter(L=>L.kind==="dead"),c=uu(new We({vertexColors:!0})),u=uu(new We({vertexColors:!0,side:Je})),h=new Ct(n.trees.leaf[0]),f=new Ct(n.trees.leaf[1]),p=new Xe(.16,.26,1.6,7);p.translate(0,.8,0);const v=Es([[p,(L,O)=>O.set("#7a5434").multiplyScalar(.55+.45*xe.smoothstep(L.y,0,1.1))]]),x=hu([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],h,f),m=hu([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],h,f),d=(L,O,V)=>{const W=new gn(L,O,Math.max(1,V));return W.count=V,W.castShadow=!0,W.receiveShadow=!0,i.add(W),ic(W,"tree",!0),W},y=d(t_(),c,s.length),S=d(n_(),u,s.length),g=d(v,c,r.length),A=d(x,c,r.length),E=d(m,c,a.length),w=new Xe(.14,.22,1.2,6);w.translate(0,.6,0);const C=d(Es([[w,(L,O)=>O.set("#5a3e2a").multiplyScalar(.55+.45*xe.smoothstep(L.y,0,1))]]),c,o.length),M=d(i_(n.id==="vinter"),c,o.length),_=d(s_(),c,l.length),T=new He;s.forEach((L,O)=>{T.position.set(L.x,L.y-.1,L.z),T.rotation.set(0,L.phase,0),T.scale.setScalar(L.s),T.updateMatrix(),y.setMatrixAt(O,T.matrix)}),r.forEach((L,O)=>{T.position.set(L.x,L.y-.1,L.z),T.rotation.set(0,L.phase,0),T.scale.setScalar(L.s),T.updateMatrix(),g.setMatrixAt(O,T.matrix)}),o.forEach((L,O)=>{T.position.set(L.x,L.y-.1,L.z),T.rotation.set(0,L.phase,0),T.scale.setScalar(L.s),T.updateMatrix(),C.setMatrixAt(O,T.matrix)}),l.forEach((L,O)=>{T.position.set(L.x,L.y-.1,L.z),T.rotation.set(0,L.phase,(L.phase%1-.5)*.15),T.scale.setScalar(L.s),T.updateMatrix(),_.setMatrixAt(O,T.matrix)});const D=L=>{s.forEach((O,V)=>{const W=Math.cos(O.phase),G=Math.sin(O.phase);T.position.set(O.x+rc*W*O.s,O.y-.1+ac*O.s,O.z-rc*G*O.s),T.rotation.set(Math.sin(L*1.2+O.phase)*.07,O.phase+Math.sin(L*.7+O.phase)*.05,Math.cos(L*1+O.phase)*.07),T.scale.setScalar(O.s),T.updateMatrix(),S.setMatrixAt(V,T.matrix)}),S.instanceMatrix.needsUpdate=!0,r.forEach((O,V)=>{T.position.set(O.x,O.y-.1,O.z),T.rotation.set(Math.sin(L*1.1+O.phase)*.025,O.phase,Math.cos(L*.9+O.phase)*.025),T.scale.setScalar(O.s),T.updateMatrix(),A.setMatrixAt(V,T.matrix)}),A.instanceMatrix.needsUpdate=!0,a.forEach((O,V)=>{const W=1+Math.sin(L*1.6+O.phase)*.035;T.position.set(O.x,O.y-.12,O.z),T.rotation.set(0,O.phase,0),T.scale.set(O.s*W,O.s/W,O.s*W),T.updateMatrix(),E.setMatrixAt(V,T.matrix)}),E.instanceMatrix.needsUpdate=!0,o.forEach((O,V)=>{T.position.set(O.x,O.y-.1,O.z),T.rotation.set(Math.sin(L*.9+O.phase)*.02,O.phase,Math.cos(L*.8+O.phase)*.02),T.scale.setScalar(O.s),T.updateMatrix(),M.setMatrixAt(V,T.matrix)}),M.instanceMatrix.needsUpdate=!0};return D(0),{colliders:[...s.map(L=>({x:L.x,z:L.z,r:.35*L.s})),...r.map(L=>({x:L.x,z:L.z,r:.4*L.s})),...a.map(L=>({x:L.x,z:L.z,r:.7*L.s})),...o.map(L=>({x:L.x,z:L.z,r:.4*L.s})),...l.map(L=>({x:L.x,z:L.z,r:.3*L.s}))],update:D}}function Zo(i,t=5){const e=[],n=[],s=new Ct,r=new Ct;for(let o=0;o<t;o++){const l=i()*Math.PI*2,c=i()*.16,u=.28+i()*.3,h=.04+i()*.03,f=Math.cos(l)*c,p=Math.sin(l)*c,v=(i()-.5)*.25,x=i()*Math.PI,m=Math.cos(x)*h,d=Math.sin(x)*h;e.push(f-m,0,p-d,f+m,0,p+d,f+Math.cos(l)*v,u,p+Math.sin(l)*v),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const a=new Ne;return a.setAttribute("position",new pe(e,3)),a.setAttribute("color",new pe(n,3)),a.setAttribute("normal",new pe(new Array(e.length/3).fill(0).flatMap(()=>[0,1,0]),3)),a}function a_(){const i=[];for(let a=0;a<3;a++){const o=new Gn(.07,6,3);o.scale(1,.25,1.15);const l=a*2.094;o.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(o.toNonIndexed())}const t=i.reduce((a,o)=>a+o.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const a of i)e.set(a.attributes.position.array,s*3),n.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count;const r=new Ne;return r.setAttribute("position",new Ve(e,3)),r.setAttribute("normal",new Ve(n,3)),r}function o_(i,t,e,n,s){const{heightAt:r,pathDist:a,plinths:o}=t,l=t.lighthouse.pos,c={uTime:{value:0}},h=(T=>(T.onBeforeCompile=D=>{D.uniforms.uTime=c.uTime,D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),D.fragmentShader=D.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},T))(new We({vertexColors:!0,side:Je})),f=new We({color:"#ffffff"}),p=[Zo(s,7),Zo(s,8),Zo(s,6)],v=a_(),x={tak:{grass:["#4a8638","#86b452"],density:1,clover:.22,cloverCol:["#3a8a3a","#5aa84a"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(e.mobile?.45:1)*x.density,d=13,y=8,S=Math.round(720*m),g=[],A=new He,E=new Ct,w=new Ct(x.grass[0]),C=new Ct(x.grass[1]),M=(T,D,k)=>{if(k<.72)return!1;const L=a(T,D);if(L<1||L<1.7&&s()<.6||Math.hypot(T-l.x,D-l.z)<4.3||n.volcano&&Math.hypot(T-n.volcano.x,D-n.volcano.z)<n.volcano.r*.7)return!1;for(const O of o)if((O.x-T)**2+(O.z-D)**2<2.6)return!1;return!t.extrasBlock||!t.extrasBlock(T,D)};for(let T=0;T<y;T++)for(let D=0;D<y;D++){const k=-y*d/2+T*d,L=-y*d/2+D*d;for(const[O,V]of[[0,S*.4],[1,S*.35],[2,S*.25]]){const W=[];for(let j=0;j<V*3&&W.length<V;j++){const nt=k+s()*d,ot=L+s()*d,At=r(nt,ot);M(nt,ot,At)&&W.push([nt,ot,At])}if(!W.length)continue;const G=new gn(p[O],h,W.length);G.userData.tier=O,W.forEach(([j,nt,ot],At)=>{A.position.set(j,ot-.04,nt),A.rotation.set(0,s()*6.28,0),A.scale.setScalar(.8+s()*.7),A.updateMatrix(),G.setMatrixAt(At,A.matrix),G.setColorAt(At,E.copy(w).lerp(C,s()).multiplyScalar(t.shadeAt?t.shadeAt(j,nt):1))}),G.receiveShadow=!0,G.computeBoundingSphere(),i.add(G),g.push(G)}if(x.clover>0){const O=[],V=k+s()*d,W=L+s()*d;for(let G=0;G<S*x.clover*3&&O.length<S*x.clover;G++){const j=V+(s()-.5)*6,nt=W+(s()-.5)*6,ot=r(j,nt);M(j,nt,ot)&&O.push([j,nt,ot])}if(O.length){const G=new gn(v,f,O.length),j=new Ct(x.cloverCol[0]),nt=new Ct(x.cloverCol[1]);O.forEach(([ot,At,kt],it)=>{A.position.set(ot,kt-.02,At),A.rotation.set(0,s()*6.28,0),A.scale.setScalar(.8+s()*.8),A.updateMatrix(),G.setMatrixAt(it,A.matrix),G.setColorAt(it,E.copy(j).lerp(nt,s()).multiplyScalar(t.shadeAt?t.shadeAt(ot,At):1))}),G.receiveShadow=!0,G.userData.tier=1,G.computeBoundingSphere(),i.add(G),g.push(G)}}}return{update(T){c.uTime.value=T},setLevel:T=>g.forEach(D=>{D.visible=T==="high"||D.userData.tier===0,D.receiveShadow=T==="high"}),count:g.reduce((T,D)=>T+D.count,0)}}function fu(i,{arms:t=4,rStart:e=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:a=16}={}){const o=[];for(let l=0;l<t;l++){const c=r+l/t*Math.PI*2,u=[];for(let h=0;h<=a;h++){const f=h/a,p=e*(1-f)+n*f,v=c+f*s*Math.PI*2;u.push([i[0]+Math.cos(v)*p,i[1]+Math.sin(v)*p])}o.push(u)}return o}const l_={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},c_=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],h_=[90,210,330].map(i=>i*Math.PI/180),Ya=11,u_=()=>{const i=[];for(let e=0;e<=48;e++){const n=e/48*Math.PI*2;i.push([Math.cos(n)*Ya,Math.sin(n)*Ya])}const t=h_.map(e=>[Ya,20,30,40,50].map((n,s)=>{const r=e+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...t]},yr=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:fu([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#d8bb88",grass:"#6c9f4a",grass2:"#4d8340",path:"#b49c74",deep:"#cdb987",pathMix:.35},water:{shallow:"#a6e6cc",mid:"#45c2ae",deep:"#1f9aa2",caustic:1},sky:{fog:"#c4d8dc",hemiSky:"#dce9ff",hemiGround:"#5a6650",hemi:1.35,sun:"#ffeccc",sunI:2.25,exposure:.92,sunDir:[14,30,10],lantern:.9,grade:{tint:[1.02,1,.965],lift:[.008,.02,.035],sat:.92,vignette:.2}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a2cc5c","#357238"]},rock:["#b6bab8","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.5,types:{clerk:{hp:.7},complainer:{hp:.7},tank:{hp:.65},gull:{hp:.75}},extra:null},intro:{complainer:2,drone:3,lobbyist:5,heli:6,auditor:7,balloon:8}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:c_,shape:"fjord",fjord:l_,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4"},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#a9b2bc","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,types:{tank:{hp:.95},clerk:{hp:1},lobbyMini:{hp:.9}},extra:{type:"tank",n:1,gap:4,path:"both",from:3}},intro:{balloon:3,auditor:4,lobbyist:5,drone:5,heli:6,complainer:6}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:fu([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:u_(),moat:Ya,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,types:{lobbyist:{hp:.6},lobbyMini:{hp:.6},clerk:{hp:.72},complainer:{hp:.72},gull:{hp:.75},drone:{hp:.8}},extra:{type:"gull",n:1,gap:1.4,from:3}},intro:{complainer:2,drone:2,lobbyist:3,heli:4,auditor:5,balloon:7}}];function f_(i){const[t,e,n]=i.edgeAmp,s=i.seed;return r=>i.radius+t*Math.sin(3*r+.4*s)+e*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}const du={clerk:["complainer","lobbyist"],swarm:["complainer"],tank:["auditor","lobbyist"],gull:["drone","heli","balloon"]},Ko={clerk:22,swarm:7,tank:95,gull:16,complainer:17,lobbyist:97,auditor:112,drone:9,heli:62,balloon:150},Jo={complainer:.6,lobbyist:1.8,auditor:2.2,drone:.4,heli:2.4,balloon:3.5};function d_(i,t){let e=i.seed*9301+49297;const n=()=>(e=(e*9301+49297)%233280)/233280,s=i.intro||{};return t.map((r,a)=>{const o=a+1,l=r.map(f=>({...f})),c=i.balance.extra;c&&o>=c.from&&l.push({...c,n:c.n+Math.floor((o-c.from)/2),at:5});const u=(f,p,v)=>Math.max(1,Math.round(f*Math.min(1,Ko[p]/Ko[v]))),h=(f,p)=>{f.n=u(f.n,f.type,p),f.gap=Jo[p]??f.gap,f.type=p};for(const[f,p]of Object.entries(s)){if(p!==o)continue;const v=l.find(x=>{var m;return(m=du[x.type])==null?void 0:m.includes(f)});if(v&&v.n>=2){const x=Math.floor(v.n/2);l.push({...v,type:f,n:u(x,v.type,f),gap:Jo[f]??v.gap,at:(v.at??0)+2}),v.n-=x}else v?h(v,f):l.push({type:f,n:Math.max(1,Math.min(3,Math.round(44/Ko[f]))),gap:Jo[f],path:0,at:6})}for(const f of l){const p=(du[f.type]||[]).filter(v=>s[v]&&s[v]<o);p.length&&n()<.45&&h(f,p[Math.floor(n()*p.length)])}return l})}function jr(){try{return Math.max(1,Math.min(yr.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function p_(i){try{i+2>jr()&&localStorage.setItem("glod-unlocked",String(Math.min(yr.length,i+2)))}catch{}}function La(i,t,{color:e,size:n,speed:s,drift:r,additive:a,area:o=46,top:l=22}){const c=new Float32Array(t*3),u=new Float32Array(t);for(let d=0;d<t;d++)c[d*3]=(Math.random()-.5)*o*2,c[d*3+1]=Math.random()*l,c[d*3+2]=(Math.random()-.5)*o*2,u[d]=Math.random()*6.28;const h=new Ne;h.setAttribute("position",new Ve(c,3));const f=document.createElement("canvas");f.width=f.height=32;const p=f.getContext("2d"),v=p.createRadialGradient(16,16,0,16,16,16);v.addColorStop(0,"rgba(255,255,255,1)"),v.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=v,p.fillRect(0,0,32,32);const x=new so({color:e,size:n,map:new ui(f),transparent:!0,depthWrite:!1,blending:a?fi:Ji,opacity:a?1:.85}),m=new Pc(h,x);return m.frustumCulled=!1,i.add(m),(d,y,S)=>{for(let g=0;g<t;g++){let A=c[g*3+1]-s*d*(.7+u[g]%1*.6);c[g*3]+=Math.sin(S*.7+u[g])*r*d,(s<0?A>l:A<0)&&(A=s<0?0:l,c[g*3]=y.x+(Math.random()-.5)*o*2,c[g*3+2]=y.z+(Math.random()-.5)*o*2),c[g*3+1]=A}h.attributes.position.needsUpdate=!0}}function m_(i,t,e,n,s=160){const r=new Ic(i.map(([h,f])=>new B(h,0,f))),a=r.getLength(),o=[],l=[],c=[];for(let h=0;h<=s;h++){const f=h/s,p=r.getPointAt(f),v=r.getTangentAt(f),x=-v.z,m=v.x,d=t*(.75+.25*Math.sin(f*9));for(const y of[-1,1]){const S=p.x+x*d*y,g=p.z+m*d*y;o.push(S,e(S,g)+n,g),l.push(f*a,(y+1)/2)}if(h<s){const y=h*2;c.push(y,y+1,y+2,y+1,y+3,y+2)}}const u=new Ne;return u.setAttribute("position",new pe(o,3)),u.setAttribute("uv",new pe(l,2)),u.setIndex(c),u.computeVertexNormals(),{geo:u,curve:r,len:a}}function g_(i,t,e,n){var x;const{heightAt:s}=t,r=[],a=[],o=[],l=[],c=[],u=e.mobile?.5:1,h=new Set(n.life);if(h.has("aurora")){const m=new je({transparent:!0,depthWrite:!1,blending:fi,side:Je,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
        uniform float uTime; varying vec2 vUv;
        void main() {
          vUv = uv; vec3 p = position;
          p.z += sin(p.x * 0.08 + uTime * 0.3) * 5.0 + sin(p.x * 0.21 - uTime * 0.5) * 1.5;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }`,fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        void main() {
          float bands = 0.55 + 0.45 * sin(vUv.x * 40.0 + uTime * 0.8 + sin(vUv.x * 13.0 - uTime * 0.4) * 2.0);
          float fade = smoothstep(0.0, 0.25, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y));
          vec3 col = mix(vec3(0.15, 1.0, 0.55), vec3(0.7, 0.3, 1.0), smoothstep(0.35, 0.95, vUv.y));
          gl_FragColor = vec4(col * bands * fade * 0.55, 1.0);
        }`});for(const[d,y,S]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const g=new oe(new Zn(150,26,96,1),m);g.position.set(d,20,y),g.rotation.y=S,i.add(g)}a.push((d,y,S)=>m.uniforms.uTime.value=S)}if(h.has("snow")&&a.push(La(i,Math.round(900*u),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),h.has("ash")&&a.push(La(i,Math.round(500*u),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),h.has("embers")&&a.push(La(i,Math.round(160*u),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),h.has("icefloes")){const m=[];for(let A=0;A<6e3&&m.length<70*u;A++){const E=(Math.random()-.5)*120,w=(Math.random()-.5)*120,C=.05-s(E,w);C>.15&&C<1.4&&m.every(M=>Math.hypot(M.x-E,M.z-w)>2.2)&&m.push({x:E,z:w,s:.6+Math.random()*1.1,r:Math.random()*6})}const d=new Xe(1,.9,.18,7),y=d.attributes.position;for(let A=0;A<y.count;A++){const E=Math.atan2(y.getZ(A),y.getX(A)),w=.75+.35*Math.abs(Math.sin(E*2.3+A));y.setX(A,y.getX(A)*w),y.setZ(A,y.getZ(A)*w)}d.computeVertexNormals();const S=new gn(d,new We({color:"#eaf6ff"}),Math.max(1,m.length));S.count=m.length,S.receiveShadow=!0,i.add(S);const g=new He;a.push((A,E,w)=>{m.forEach((C,M)=>{g.position.set(C.x+Math.sin(w*.1+C.r)*.4,.08+Math.sin(w*1.1+C.r)*.03,C.z),g.rotation.set(Math.sin(w*.9+C.r)*.03,C.r+w*.02,Math.cos(w*.8+C.r)*.03),g.scale.set(C.s,1,C.s),g.updateMatrix(),S.setMatrixAt(M,g.matrix)}),S.instanceMatrix.needsUpdate=!0})}if(n.lava){const m=new je({uniforms:{uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
        void main() {
          vec2 p = vec2(vUv.x * 0.7 - uTime * 0.35, vUv.y * 2.0);
          float v = n(p * 1.3) * 0.6 + n(p * 3.1 + 7.0) * 0.4;
          float edge = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.75, vUv.y);
          vec3 crust = vec3(0.12, 0.05, 0.04), hot = vec3(1.0, 0.35, 0.05), white = vec3(1.0, 0.85, 0.4);
          vec3 col = mix(crust, hot, smoothstep(0.35, 0.6, v) * edge);
          col = mix(col, white, smoothstep(0.72, 0.9, v) * edge);
          gl_FragColor = vec4(col * (1.0 + 2.2 * smoothstep(0.4, 0.8, v) * edge), 1.0);
        }`});for(const g of n.lava){const A=m_(g,1.25,s,.07);i.add(new oe(A.geo,m));const E=[];let w=!1;for(let C=0;C<=1;C+=1.4/A.len){const M=A.curve.getPointAt(Math.min(1,C));if(t.pathDist(M.x,M.z)<2.4){w||c.push({x:M.x,z:M.z,tan:A.curve.getTangentAt(Math.min(1,C))}),w=!0;continue}w=!1,o.push({x:M.x,z:M.z,r:1.4})}for(const C of[.25,.7]){const M=A.curve.getPointAt(C),_=new $r("#ff6a2a",14,12,1.6);_.position.set(M.x,s(M.x,M.z)+1.2,M.z),i.add(_),E.push(_)}a.push((C,M,_)=>E.forEach((T,D)=>T.intensity=12+3*Math.sin(_*2.3+D)))}a.push((g,A,E)=>m.uniforms.uTime.value=E);const d=new Cn(3.4,.35,4.2),y=new We({color:((x=n.rock)==null?void 0:x[0])??"#555"}),S=new Xe(2.4,2.4,.1,18);for(const g of c){const A=s(g.x,g.z)+.12,E=new oe(d,y);E.position.set(g.x,A,g.z),E.rotation.y=-Math.atan2(g.tan.z,g.tan.x),E.castShadow=E.receiveShadow=!0,i.add(E);const w=new oe(S,new De({color:new Ct("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));w.position.set(g.x,A+.25,g.z),w.visible=!1,i.add(w);const C=new $r("#ff6a2a",0,14,1.6);C.position.set(g.x,A+1.6,g.z),i.add(C);let M=!1;l.push({x:g.x,z:g.z,get closed(){return M},setClosed(_){M=_,w.visible=_}}),a.push((_,T,D)=>{const k=M?1:0;w.material.opacity+=(k*.9-w.material.opacity)*Math.min(1,_*3),!M&&w.material.opacity<.02&&(w.visible=!1),C.intensity=w.material.opacity*(22+6*Math.sin(D*9))})}}if(n.volcano){const m=n.volcano;o.push({x:m.x,z:m.z,r:m.r*.55});const d=new oe(new ur(m.r*.22,20),new De({color:new Ct("#ff5a1a").multiplyScalar(2.4)}));d.rotation.x=-Math.PI/2,d.position.set(m.x,s(m.x,m.z)+.2,m.z),i.add(d);const y=new ao(.35,0),S=[];for(let E=0;E<3e3&&S.length<50*u;E++){const w=(Math.random()-.5)*96,C=(Math.random()-.5)*96,M=s(w,C);M>.4&&t.pathDist(w,C)>2.2&&S.push({x:w,z:C,h:M,s:.5+Math.random()})}const g=new gn(y,new De({color:new Ct("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,S.length));g.count=S.length;const A=new He;S.forEach((E,w)=>{A.position.set(E.x,E.h,E.z),A.rotation.set(E.s,E.s*3,0),A.scale.set(E.s,E.s*.5,E.s),A.updateMatrix(),g.setMatrixAt(w,A.matrix)}),i.add(g)}if(n.waterfall&&n.waterfall._lvl!==void 0){const m=n.waterfall,d=m.basin[0]-m.lip[0],y=m.basin[1]-m.lip[1],S=Math.hypot(d,y),g=d/S,A=y/S,E=m._lvl-.1,w=14,C=1.25,M=[],_=[],T=[];for(let j=0;j<=w;j++){const nt=j/w,ot=.35+1.5*nt*nt,At=E-(E-.06)*(nt*nt*.6+nt*.4);for(const kt of[-1,1])M.push(m.lip[0]+g*ot-A*C*kt*(.85+nt*.3),At,m.lip[1]+A*ot+g*C*kt*(.85+nt*.3)),_.push((kt+1)/2,nt);if(j<w){const kt=j*2;T.push(kt,kt+1,kt+2,kt+1,kt+3,kt+2)}}const D=new Ne;D.setAttribute("position",new pe(M,3)),D.setAttribute("uv",new pe(_,2)),D.setIndex(T);const k=new je({transparent:!0,depthWrite:!1,side:Je,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new oe(D,k));const L=(()=>{const j=document.createElement("canvas");j.width=j.height=128;const nt=j.getContext("2d"),ot=(()=>{let kt=9;return()=>(kt=kt*16807%2147483647)/2147483647})();for(let kt=0;kt<260;kt++){const it=ot()*Math.PI*2,ut=Math.pow(ot(),.7)*58,Rt=1.5+ot()*5*(1-ut/70);nt.fillStyle=`rgba(255,255,255,${.55+ot()*.45})`,nt.beginPath(),nt.arc(64+Math.cos(it)*ut,64+Math.sin(it)*ut,Rt,0,Math.PI*2),nt.fill()}nt.globalCompositeOperation="destination-in";const At=nt.createRadialGradient(64,64,8,64,64,63);return At.addColorStop(0,"rgba(0,0,0,1)"),At.addColorStop(.6,"rgba(0,0,0,0.85)"),At.addColorStop(1,"rgba(0,0,0,0)"),nt.fillStyle=At,nt.fillRect(0,0,128,128),new ui(j)})(),O=new oe(new ur(1.5,20),new De({map:L,color:"#ffffff",transparent:!0,opacity:.9,depthWrite:!1}));O.rotation.x=-Math.PI/2;const V=m.lip[0]+g*1.9,W=m.lip[1]+A*1.9;O.position.set(V,.1,W),i.add(O);const G=La(i,Math.round(60*u),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});a.push((j,nt,ot)=>{k.uniforms.uTime.value=ot,O.scale.setScalar(1+Math.sin(ot*5)*.06),O.rotation.z=ot*.4,O.material.opacity=.8+.12*Math.sin(ot*7),G(j,{x:V,z:W},ot)}),o.push({x:V,z:W,r:.9})}const f=(m,d)=>o.some(y=>(y.x-m)**2+(y.z-d)**2<y.r*y.r);let p=0;return{colliders:r,update:(m,d=t.lighthouse.pos)=>{const y=Math.min(.05,Math.max(0,m-p));p=m;for(const S of a)S(y,d,m)},blocks:f,blockers:o,bridges:l}}function bf(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ne;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let v=0;v<p.count;++v)h.push(p.getX(v)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=pu(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let x=0;x<a[u].length;++x)p.push(a[u][x][f]);const v=pu(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(v)}}return l}function pu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new Ve(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let f=0,p=u.count;f<p;f++)for(let v=0;v<e;v++){const x=u.getComponent(f,v);o.setComponent(f+h,v,x)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}function wf(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,S=o.length;y<S;y++){const g=o[y],A=i.attributes[g];l[g]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const E=i.morphAttributes[g];E&&(c[g]||(c[g]=[]),E.forEach((w,C)=>{const M=new w.array.constructor(w.count*w.itemSize);c[g][C]=new w.constructor(M,w.itemSize,w.normalized)}))}const p=t*.5,v=Math.log10(1/t),x=Math.pow(10,v),m=p*x;for(let y=0;y<r;y++){const S=n?n.getX(y):y;let g="";for(let A=0,E=o.length;A<E;A++){const w=o[A],C=i.getAttribute(w),M=C.itemSize;for(let _=0;_<M;_++)g+=`${~~(C[h[_]](S)*x+m)},`}if(g in e)u.push(e[g]);else{for(let A=0,E=o.length;A<E;A++){const w=o[A],C=i.getAttribute(w),M=i.morphAttributes[w],_=C.itemSize,T=l[w],D=c[w];for(let k=0;k<_;k++){const L=h[k],O=f[k];if(T[O](a,C[L](S)),M)for(let V=0,W=M.length;V<W;V++)D[V][O](a,M[V][L](S))}}e[g]=a,u.push(a),a++}}const d=i.clone();for(const y in i.attributes){const S=l[y];if(d.setAttribute(y,new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)),y in c)for(let g=0;g<c[y].length;g++){const A=c[y][g];d.morphAttributes[y][g]=new A.constructor(A.array.slice(0,a*A.itemSize),A.itemSize,A.normalized)}}return d.setIndex(u),d}const fe=(i,t={})=>new We({color:i,flatShading:!0,...t}),Ys=(i,t)=>new De({color:new Ct(i).multiplyScalar(t)}),ht={coat:fe("#f2c23c"),coatDark:fe("#c99a22"),skin:fe("#f1c7a0"),beanieG:fe("#3f8f4a"),beanieY:fe("#f2c94c"),beanieR:fe("#d4553a"),boot:fe("#3a2c22"),eyeW:new De({color:"#ffffff"}),eyeB:new De({color:"#1c1820"}),suit:fe("#6b6f78"),suitDark:fe("#3c4150"),suitNavy:fe("#2c3a5c"),shirt:fe("#f4f1ea"),tie:fe("#b8322a"),paper:fe("#fbfaf4"),stampInk:fe("#a8233a"),woodLight:fe("#c49360"),glasses:fe("#222428"),binderR:fe("#c94f3f"),binderB:fe("#3f6fc9"),binderY:fe("#e6b93f"),gull:fe("#f4f2ee"),gullWing:fe("#c4ccd4"),gullTip:fe("#2e3038"),gullBand:fe("#8e98a4"),beak:fe("#f0a43a"),megaRed:fe("#d8453a"),mouth:new De({color:"#4a2a2a"}),smile:new De({color:"#c8485a"}),wood:fe("#9a6a42"),woodDark:fe("#6e4a2c"),iron:fe("#55585e"),speaker:fe("#2a2a30"),cone:fe("#4a4a52"),rasG:fe("#3f9a4a"),rasY:fe("#f2c94c"),rasR:fe("#d4553a"),chipsBag:fe("#f2b632"),chipsRed:fe("#d8453a"),chip:fe("#f0c860"),ringMat:new We({color:"#f1efe9",transparent:!0,opacity:.8}),ember:Ys("#ff9a3a",2.4),emberCore:Ys("#fff1c2",2),rolling:fe("#5a9a5a"),rollingPaper:fe("#fffdf5"),lantern:Ys("#ffd27a",2.2),hpBg:new De({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new De({color:"#d8553a",depthTest:!1}),levelPip:Ys("#9fffb0",1.6),bottle:new We({color:"#7fd6ff",transparent:!0,opacity:.8}),bubble:new We({color:"#dff6ff",transparent:!0,opacity:.45,emissive:"#5a7a9a"}),kiteSail:new We({color:"#ff7a5a",side:Je}),rope:fe("#d9c8a0"),ledger:fe("#2f5a3a"),track:fe("#8a4ac8"),briefcase:fe("#6a3a1a"),brass:fe("#d8b040"),rotor:new De({color:"#cfd6dc",transparent:!0,opacity:.45}),redLight:Ys("#ff3030",2),balloonA:fe("#e8e4d8"),balloonB:fe("#c8463a"),heli:fe("#f2c23c"),glassDark:fe("#2a3440"),spot:new De({color:"#fff6c8",transparent:!0,opacity:.18,blending:fi,depthWrite:!1,side:Je}),pizza:fe("#e8603a"),pizzaCrust:fe("#e8b866"),lampGlass:new We({color:"#ff8a5a",transparent:!0,opacity:.45,emissive:"#6a1a10"}),lampBlob:Ys("#ff9a2a",2.2)},mt={sphere:new Gn(1,10,8),lowSphere:new vs(1,1),capsule:new ro(.5,.7,3,8),cyl:new Xe(1,1,1,10),cone:new Bn(1,1,10),box:new Cn(1,1,1),dome:new Gn(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new fr(.22,0),leaf:new fr(.3,0),plane:new Zn(1,1),smileArc:new er(.06,.018,4,10,Math.PI),ring:new er(.32,.12,6,14),bubbleRing:new er(.18,.025,4,12)};function vt(i,t,e,n,s,r=0,a=0,o=0,l=!0){const c=new oe(i,t);return c.scale.set(e,n,s),c.position.set(r,a,o),c.castShadow=l,c}function Fc(i,t,e,n,s=.12,r=.18){const a=new be;a.position.set(t,e,n),a.userData.isEyes=!0;for(const o of[-1,1])a.add(vt(mt.sphere,ht.eyeW,s,s,s,o*r,0,0,!1)),a.add(vt(mt.sphere,ht.eyeB,s*.55,s*.55,s*.55,o*r,.01,-s*.7,!1));return i.add(a),a}const Ef=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,31);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.25)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ui(i)})(),v_=new De({map:Ef,transparent:!0,depthWrite:!1,fog:!1}),Tf=new Zn(1,1).rotateX(-Math.PI/2);function Oc(i,t){const e=new oe(Tf,v_);e.scale.set(t*2,1,t*2),e.position.y=.04,e.renderOrder=1,i.add(e),i.userData.blob=e}function x_(i,t,e=.8){const n=new De({map:Ef,color:"#000000",transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new gn(Tf,n,Math.max(1,t.length));s.count=t.length;const r=new He;return t.forEach((a,o)=>{r.position.set(a.x,a.y+.04,a.z),r.scale.set(a.r*2,1,a.r*2),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.renderOrder=1,i.add(s),s}function Af(i){const t=[];i.traverse(e=>{e.userData.isEyes&&t.push(e)}),i.userData.eyes=t}function Cf(i,t,e,n=1){const s=vt(mt.box,ht.mouth,.14*n,.025*n,.02,0,t,e,!1);s.rotation.z=.15;const r=vt(mt.smileArc,ht.smile,n,n,n,0,t+.03*n,e,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}function __(){const i=new be,t=new be;i.add(t),t.add(vt(mt.capsule,ht.coat,.75,.75,.7,0,.75,0)),t.add(vt(mt.cyl,ht.coatDark,.4,.06,.38,0,.62,0));const e=new be;e.position.y=1.62,e.scale.setScalar(1.22),e.add(vt(mt.sphere,ht.skin,.33,.32,.32)),e.add(vt(mt.cyl,ht.beanieG,.35,.1,.35,0,.14,0)),e.add(vt(mt.cyl,ht.beanieY,.31,.1,.31,0,.24,0)),e.add(vt(mt.dome,ht.beanieR,.27,.22,.27,0,.29,0)),e.add(vt(mt.sphere,ht.beanieY,.08,.08,.08,0,.52,0)),Fc(e,0,.02,-.26,.07,.12);const n=Cf(e,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,t.add(e);const s=[-1,1].map(c=>{const u=vt(mt.capsule,ht.boot,.24,.32,.24,c*.18,.2,0);return t.add(u),u}),r=new be;r.position.set(.48,1,-.1),r.add(vt(mt.box,ht.iron,.2,.28,.2,0,-.25,0)),r.add(vt(mt.sphere,ht.lantern,.1,.13,.1,0,-.25,0,!1)),t.add(r);const a=new be;a.position.set(-.46,1.08,0),a.add(vt(mt.capsule,ht.coat,.16,.34,.16,0,-.28,0)),a.add(vt(mt.sphere,ht.skin,.1,.1,.1,0,-.52,0)),t.add(a);const o=new be;o.add(vt(mt.box,ht.rolling,.7,.12,.42,0,0,0,!1)),o.add(vt(mt.box,ht.rollingPaper,.6,.08,.36,.06,.08,0,!1)),o.add(vt(mt.leaf,ht.rasG,.35,.05,.35,-.12,.07,0,!1)),o.position.y=2.35,o.visible=!1,i.add(o);const l=new be;l.position.y=2;for(let c=0;c<3;c++)l.add(vt(mt.ember,ht.emberCore,.6,.6,.6,Math.cos(c*2.1)*.45,0,Math.sin(c*2.1)*.45,!1));return l.visible=!1,i.add(l),Oc(i,.62),i.userData={body:t,legs:s,head:e,lanternArm:r,armL:a,carried:o,stars:l,blob:i.userData.blob},Af(i),i}function pi(i,t){const e=new be;e.position.y=t;const n=new oe(mt.plane,ht.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new oe(mt.plane,ht.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,e.add(n,s),e.visible=!1,i.add(e),i.userData.hpBar=e,i.userData.hpFg=s}function $s(i,{scale:t=1,suit:e=ht.suit,wide:n=1}={}){const s=t;i.add(vt(mt.capsule,e,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(vt(mt.box,ht.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(vt(mt.box,ht.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const o of[-1,1])i.add(vt(mt.capsule,ht.suitDark,.2*s,.25*s,.2*s,o*.16*s,.17*s,0));const r=new be;r.position.y=1.5*s,r.add(vt(mt.sphere,ht.skin,.3*s,.3*s,.3*s)),r.add(vt(mt.dome,ht.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),Fc(r,0,.03*s,-.25*s,.065*s,.11*s);const a=Cf(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:a}}function M_(i){const t=new be,e=new be;if(t.add(e),t.userData.body=e,i==="clerk"){const{head:n,mouth:s}=$s(e);for(const o of[-1,1])n.add(vt(mt.box,ht.glasses,.11,.07,.02,o*.11,.03,-.3,!1));n.add(vt(mt.box,ht.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new be;r.position.set(.48,.9,-.15),r.add(vt(mt.cyl,ht.woodLight,.06,.25,.06,0,.12,0)),r.add(vt(mt.sphere,ht.woodLight,.09,.09,.09,0,.27,0)),r.add(vt(mt.box,ht.stampInk,.22,.08,.16,0,-.02,0)),e.add(r);const a=vt(mt.box,ht.paper,.3,.38,.02,-.46,.92,-.2);a.rotation.y=.4,e.add(a),t.userData.mouth=s,t.userData.arm=r,pi(t,2.15)}else if(i==="tank"){const{mouth:n}=$s(e,{scale:1.25,suit:ht.suitNavy,wide:1.45}),s=new be;s.position.set(0,0,-.95),s.add(vt(mt.box,ht.woodDark,.75,1.05,.45,0,.52,0));const r=vt(mt.box,ht.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(vt(mt.cyl,ht.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(vt(mt.sphere,ht.speaker,.05,.05,.05,.18,1.52,.04,!1)),e.add(s),t.userData.mouth=n,pi(t,2.6)}else if(i==="gull"){e.add(vt(mt.lowSphere,ht.gull,.36,.3,.6,0,0,0)),e.add(vt(mt.cone,ht.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=vt(mt.cone,ht.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,e.add(n),e.add(vt(mt.cyl,ht.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const a=new be;a.position.set(r*.25,.05,0),a.add(vt(mt.box,ht.gullWing,.6,.06,.42,r*.3,0,0)),a.add(vt(mt.box,ht.gullBand,.58,.065,.1,r*.31,0,.17));const o=vt(mt.box,ht.gullTip,.42,.055,.3,r*.78,0,.04);return o.rotation.y=r*.18,a.add(o),e.add(a),a});t.userData.wings=s,Fc(e,0,.12,-.42,.06,.13),t.userData.mouth=null,pi(t,.8)}else if(i==="swarm"){const{mouth:n}=$s(e,{scale:.6}),s=[ht.binderR,ht.binderB,ht.binderY],r=vt(mt.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);e.add(r),t.userData.mouth=n,pi(t,1.3)}else if(i==="auditor"){const{head:n,mouth:s}=$s(e,{scale:1.1,suit:ht.suitDark});for(const a of[-1,1])n.add(vt(mt.box,ht.glasses,.12,.08,.02,a*.12,.03,-.33,!1));const r=new be;r.position.set(0,.95,-.55),r.add(vt(mt.box,ht.ledger,1.05,1.2,.14)),r.add(vt(mt.box,ht.paper,.95,1.1,.1,0,0,.03,!1)),r.add(vt(mt.box,ht.brass,.3,.3,.02,0,.15,-.08,!1)),e.add(r),t.userData.mouth=s,t.userData.shield=r,pi(t,2.3)}else if(i==="complainer"){const{head:n,mouth:s}=$s(e,{scale:.85,suit:ht.track});n.add(vt(mt.cyl,ht.rasR,.27,.06,.27,0,.1,0,!1));const r=new be;r.position.set(.35,1.2,-.1),r.add(vt(mt.cyl,ht.track,.06,.45,.06,0,.2,0)),r.add(vt(mt.box,ht.paper,.32,.42,.02,0,.55,0)),e.add(r),t.userData.mouth=s,t.userData.arm=r,pi(t,1.8)}else if(i==="lobbyist"||i==="lobbyMini"){const n=i==="lobbyMini",{mouth:s}=$s(e,{scale:n?.55:1.05,suit:ht.suitNavy});e.add(vt(mt.box,ht.brass,.08,.3,.05,0,n?.52:.99,n?-.17:-.32,!1)),e.add(vt(mt.box,ht.briefcase,n?.28:.5,n?.22:.36,.12,n?.3:.55,n?.3:.55,0)),t.userData.mouth=s,pi(t,n?1.2:2.1)}else if(i==="drone"){e.add(vt(mt.box,ht.iron,.42,.14,.42));const n=[];for(const[s,r]of[[1,1],[-1,1],[1,-1],[-1,-1]]){e.add(vt(mt.box,ht.speaker,.5,.04,.05,s*.22,0,r*.22).rotateY(s*r>0?Math.PI/4:-Math.PI/4));const a=vt(mt.cyl,ht.rotor,.2,.01,.2,s*.4,.08,r*.4,!1);e.add(a),n.push(a)}e.add(vt(mt.sphere,ht.redLight,.07,.07,.07,0,-.06,-.22,!1)),t.userData.rotors=n,t.userData.mouth=null,pi(t,.6)}else if(i==="balloon"){e.add(vt(mt.sphere,ht.balloonA,1.1,1.3,1.1,0,1.6,0));for(let n=0;n<4;n++)e.add(vt(mt.cyl,ht.balloonB,1.12-Math.abs(n-1.5)*.18,.18,1.12-Math.abs(n-1.5)*.18,0,1+n*.42,0,!1));e.add(vt(mt.box,ht.woodLight,.6,.4,.6,0,-.1,0)),e.add(vt(mt.sphere,ht.skin,.2,.2,.2,0,.25,0)),e.add(vt(mt.dome,ht.suitDark,.21,.1,.21,0,.32,0,!1));for(const[n,s]of[[1,1],[-1,1],[1,-1],[-1,-1]])e.add(vt(mt.cyl,ht.rope,.015,.8,.015,n*.28,.45,s*.28,!1));t.userData.mouth=null,pi(t,3.3)}else if(i==="heli"){e.add(vt(mt.capsule,ht.heli,.6,.55,.9,0,0,0).rotateX(Math.PI/2)),e.add(vt(mt.sphere,ht.glassDark,.28,.22,.24,0,.05,-.38,!1)),e.add(vt(mt.box,ht.heli,.12,.12,1.1,0,.05,.85));const n=vt(mt.box,ht.speaker,1.9,.02,.12,0,.4,0,!1),s=vt(mt.box,ht.speaker,.04,.5,.08,.08,.1,1.38,!1);e.add(n,s);const r=new oe(new Bn(1.2,4.5,14,1,!0),ht.spot);r.position.set(0,-2.3,-.2),r.visible=!1,e.add(r),t.userData.rotor=n,t.userData.tail=s,t.userData.beam=r,t.userData.mouth=null,pi(t,1)}return Oc(t,{tank:.85,auditor:.7,balloon:.9,heli:.6,swarm:.35,lobbyMini:.35,drone:.35,gull:.45}[i]??.55),Af(t),t}function y_(i){const t=i.mesh.userData.mouth;t&&(t.sour.visible=!1,t.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function S_(i){const t=new be,e=new be;if(t.add(e),i==="ring"){t.add(vt(mt.box,ht.wood,.9,.5,.9,0,.25,0)),e.position.y=.95;const a=vt(mt.cyl,ht.iron,.32,1.1,.32,0,0,-.15);a.rotation.x=Math.PI/2-.15,e.add(a),e.add(vt(mt.cyl,ht.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),e.add(vt(mt.sphere,ht.iron,.42,.42,.42,0,0,.42)),e.add(vt(mt.sphere,ht.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){t.add(vt(mt.cyl,ht.iron,.7,.3,.7,0,.15,0)),e.position.y=.3;const a=vt(mt.box,ht.chipsBag,.95,1.1,.6,0,.6,0);a.rotation.x=-.35,e.add(a),e.add(vt(mt.box,ht.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let o=0;o<5;o++)e.add(vt(mt.leaf,ht.chip,.3,.08,.3,(o-2)*.17,1.2,-.3-o%2*.1,!1))}else if(i==="speaker"){const a=new be;a.add(vt(mt.box,ht.speaker,1,1.5,.75,0,.75,0)),a.add(vt(mt.box,ht.rasG,1.02,.12,.77,0,1.38,0,!1)),a.add(vt(mt.box,ht.rasY,1.02,.12,.77,0,1.26,0,!1)),a.add(vt(mt.box,ht.rasR,1.02,.12,.77,0,1.14,0,!1));const o=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const u=vt(mt.cyl,ht.cone,c,.08,c,0,l,-.38,!1);u.rotation.x=Math.PI/2,a.add(u),o.push(u)}e.add(a),t.userData.woofers=o}else if(i==="bubble"){t.add(vt(mt.cyl,ht.speaker,.5,.25,.5,0,.12,0)),e.position.y=.3,e.add(vt(mt.cyl,ht.bottle,.36,1,.36,0,.5,0)),e.add(vt(mt.cyl,ht.rasR,.22,.2,.22,0,1.08,0));const a=vt(mt.cyl,ht.wood,.03,.8,.03,0,1.4,-.2);a.rotation.x=.5,e.add(a),e.add(vt(mt.bubbleRing,ht.rasY,1,1,1,0,1.75,-.42,!1).rotateX(.5));for(let o=0;o<3;o++)e.add(vt(mt.sphere,ht.bubble,.14+o*.04,.14+o*.04,.14+o*.04,.3-o*.25,1.7+o*.3,-.7-o*.15,!1))}else if(i==="kite"){for(let o=0;o<3;o++){const l=o/3*Math.PI*2,c=vt(mt.cyl,ht.wood,.07,1.6,.07,Math.cos(l)*.45,.7,Math.sin(l)*.45);c.rotation.set(Math.sin(l)*.28,0,-Math.cos(l)*.28),t.add(c)}e.position.y=1.55,e.add(vt(mt.cyl,ht.iron,.22,.3,.22,0,0,0).rotateZ(Math.PI/2));const a=Lf();a.position.set(0,.7,0),a.scale.setScalar(.8),e.add(a),t.userData.kite=a}else if(i==="pizza"){t.add(vt(mt.box,ht.wood,1.2,.35,.9,0,.18,0));for(const o of[-1,1])t.add(vt(mt.box,ht.woodDark,.12,.9,.12,o*.45,.65,0));e.position.y=1;const a=new be;a.add(vt(mt.box,ht.woodLight,.12,.12,1.5,0,0,-.4)),a.add(vt(mt.cyl,ht.pizzaCrust,.32,.06,.32,0,.08,-1.1)),a.add(vt(mt.cyl,ht.pizza,.27,.03,.27,0,.12,-1.1,!1)),a.rotation.x=-.35,e.add(a),t.userData.arm=a}else if(i==="lamp"){t.add(vt(mt.cone,ht.brass,.55,.7,.55,0,.35,0)),e.position.y=.7,e.add(vt(mt.capsule,ht.lampGlass,.75,.9,.75,0,.75,0,!1));const a=[];for(let o=0;o<3;o++){const l=vt(mt.sphere,ht.lampBlob,.16,.2,.16,0,.5+o*.3,0,!1);e.add(l),a.push(l)}e.add(vt(mt.cone,ht.brass,.3,.35,.3,0,1.55,0)),t.userData.blobs=a}const n=[];for(let a=0;a<5;a++){const o=vt(mt.leaf,ht.levelPip,.45,.1,.45,Math.cos(a*1.2566)*.95,.15,Math.sin(a*1.2566)*.95,!1);o.visible=a===0,t.add(o),n.push(o)}const s=new es(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new oe(s,new De({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,t.add(r),t.traverse(a=>{a.isMesh&&a!==r&&a.material!==ht.levelPip&&(a.castShadow=!0)}),Oc(t,1),t.userData.head=e,t.userData.pips=n,t.userData.ring=r,t}function Rf(i,t){i.mesh.userData.pips.forEach((e,n)=>e.visible=n<t),i.mesh.scale.setScalar(1+(t-1)*.08)}function Zr(i,t){const e=i.mesh.userData.ring;if(e.visible=t>0,t<=0)return;e.geometry.dispose();const n=new es(1.45,1.7,40,1,0,Math.PI*2*t);n.rotateX(-Math.PI/2),e.geometry=n}function b_(){const i=new be;return i.add(vt(mt.ember,ht.ember,1,1.3,1,0,0,0,!1)),i.add(vt(mt.ember,ht.emberCore,.5,.7,.5,0,0,0,!1)),i}function w_(){const i=new oe(mt.ring,ht.ringMat);return i.castShadow=!1,i}function Pf(){const i=new be;return i.add(vt(mt.box,ht.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(vt(mt.box,ht.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function Df(){const i=new er(1,.08,4,32);return i.rotateX(Math.PI/2),new oe(i,new De({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}let Ia=null;function E_(){if(Ia)return Ia;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d");["#d8453a","#f2c94c","#d8453a","#f2c94c","#3f9a4a","#f2c94c","#d8453a","#f2c94c"].forEach((n,s)=>{t.fillStyle=n,t.fillRect(0,s*8,64,8)});const e=new ui(i);return e.colorSpace=mn,e.wrapS=e.wrapT=_i,e.repeat.set(1,1.4),e.magFilter=vn,Ia=new We({map:e,flatShading:!0}),Ia}function Lf(){const i=new be,t=new df([new bt(0,.55),new bt(.38,0),new bt(0,-.75),new bt(-.38,0)]),e=new Nc(t,{depth:.035,bevelEnabled:!1});e.translate(0,0,-.0175);const n=new oe(e,E_());n.rotation.x=-Math.PI/2.4,n.castShadow=!0,i.add(n);const s=vt(mt.box,ht.woodDark,.025,1.3,.025,0,-.1,.03,!1),r=vt(mt.box,ht.woodDark,.76,.025,.025,0,0,.03,!1);n.add(s,r);const a=new be;a.position.set(0,-.68,0),n.add(a);const o=[ht.rasR,ht.rasY,ht.rasG,ht.rasR,ht.rasY];let l=a;const c=[];for(let u=0;u<o.length;u++){const h=new be;h.position.y=u?-.2:0,h.add(vt(mt.box,ht.rope,.015,.2,.015,0,-.1,0,!1));const f=new be;f.position.y=-.2;for(const p of[-1,1]){const v=vt(mt.cone,o[u],.05,.1,.03,p*.05,0,0,!1);v.rotation.z=p*Math.PI/2,f.add(v)}h.add(f),l.add(h),l=h,c.push(h)}return i.userData.tailSegs=c,i}function If(){return vt(mt.sphere,ht.bubble,.28,.28,.28,0,0,0,!1)}function T_(){const i=new be;return i.add(vt(mt.cyl,ht.pizzaCrust,.3,.06,.3,0,0,0,!0)),i.add(vt(mt.cyl,ht.pizza,.25,.03,.25,0,.04,0,!1)),i}const pr=20;function On(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function A_(i){const t=new Ic(i.map(([s,r])=>new B(s,0,r)),!1,"catmullrom",.5),e=t.getLength(),n=t.getSpacedPoints(400);return{curve:t,length:e,samples:n}}function C_(i,t,e,n,s){const a=new Cn(1,1,1,5,5,5),o=a.attributes.position,l=new B,c=new B,u=i/2,h=t/2,f=e/2,p=Math.min(n,u,h,f)*.98,v=s()*10,x=(s()-.5)*.12;for(let d=0;d<o.count;d++){l.set(o.getX(d)*i,o.getY(d)*t,o.getZ(d)*e),c.set(xe.clamp(l.x,-u+p,u-p),xe.clamp(l.y,-h+p,h-p),xe.clamp(l.z,-f+p,f-p)),l.sub(c);const y=l.length();y>0&&l.multiplyScalar(p/y),l.add(c);const S=1+.035*Math.sin(l.x*4.1+v)*Math.sin(l.z*3.7-v)+.025*Math.sin(l.y*6+v*2);l.x*=S,l.z*=S,l.y+=l.x*x,o.setXYZ(d,l.x,l.y,l.z)}a.deleteAttribute("normal"),a.deleteAttribute("uv");const m=wf(a);return m.computeVertexNormals(),m}function R_(i,t,e,n){const s=new Ct(t),r=new Ct(e),a=new Ct,o=[[[2.3,.85,1.9,0,0,0],[1.6,.7,1.4,.2,-.1,.35]],[[1.5,1.5,1.4,-.35,.1,.1],[1.4,.8,1.3,.75,-.2,-.3],[.9,.6,.85,-.3,.05,.6]],[[2.4,.7,2,0,0,.2],[1.8,.65,1.5,-.15,.15,-.25],[1.1,.55,1,.2,-.1,.5]]][n%3],l=[];let c=0,u=0;o.forEach(([d,y,S,g,A,E],w)=>{const C=.88+i()*.24,M=C_(d*C,y*(.9+i()*.2),S*C,Math.min(d,y,S)*.28,i);M.rotateY(E+(i()-.5)*.3);const _=n%3===1&&w===1?0:c;M.translate(g,_+y/2,A),n%3===1&&w===1||(c=_+y*.92),u=Math.max(u,_+y),l.push(M)});const h=bf(l),f=h.attributes.position,p=h.attributes.normal,v=[],x=.95+i()*.1,m=i()*10;for(let d=0;d<f.count;d++){const y=f.getX(d),S=f.getY(d),g=f.getZ(d);a.copy(s).multiplyScalar(x*(.72+.28*xe.smoothstep(S,0,.9))*(p.getY(d)<-.3?.8:1));const A=Math.sin(y*2.3+m)*Math.sin(g*2.7-m)+.5*Math.sin(y*5.1-g*4.3+m),E=xe.smoothstep(p.getY(d),.6,.9)*xe.smoothstep(S,u-.3,u-.08)*xe.smoothstep(A,-.55,0);a.lerp(r,E),v.push(a.r,a.g,a.b)}return h.setAttribute("color",new pe(v,3)),h}function mu(i,t,e,n,s,r,a=12,o={}){const l=o.dressed?.3:1,c=new Xe(t,e,n,a,3,!0),u=new es(.001,t,a,4);u.rotateX(-Math.PI/2),u.translate(0,n/2,0);const h=bf([c,u]),f=h.attributes.position,p=i()*10;for(let E=0;E<f.count;E++){const w=f.getX(E),C=f.getY(E),M=f.getZ(E),_=Math.hypot(w,M);if(_<1e-4)continue;const T=Math.atan2(M,w);let D=1+l*(.05*Math.sin(T*3+p)+.035*Math.sin(T*7-p*2)+.025*Math.sin(C*9+T*4)),k=C;C>n/2-1e-4&&_>t*.97&&(D*=.93,k-=.08),f.setXYZ(E,w*D,k,M*D)}h.deleteAttribute("normal"),h.deleteAttribute("uv");const v=wf(h);v.computeVertexNormals(),v.translate(0,n/2,0);const x=new Ct(s),m=new Ct(r),d=new Ct,y=[],S=new Ct("#ece3cc"),g=v.attributes.position,A=v.attributes.normal;for(let E=0;E<g.count;E++){const w=g.getX(E),C=g.getY(E),M=g.getZ(E),_=Math.atan2(M,w),T=Math.hypot(w,M);if(d.copy(x).multiplyScalar(.55+.45*xe.smoothstep(C,0,n*.9)),o.dressed){const L=xe.smoothstep(A.getY(E),.75,.95)*xe.smoothstep(C,n-.15,n-.08),O=1-xe.smoothstep(Math.abs(T-t*.72),.04,.1);d.lerp(S,L*(1-.75*O)),d.multiplyScalar(1-.45*O*L),y.push(d.r,d.g,d.b);continue}const D=Math.sin(w*1.9+p)*Math.sin(M*2.3-p)+.5*Math.sin(_*5+p)+.3*Math.sin(T*4),k=xe.smoothstep(C,n-.25,n-.05)*xe.smoothstep(D,0,.5)*xe.smoothstep(A.getY(E),.2,.7);d.lerp(m,k),y.push(d.r,d.g,d.b)}return v.setAttribute("color",new pe(y,3)),v}function gu(i,t=.55){const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,256,256);const s=On(4242);for(let l=0;l<90;l++){const c=225+s()*30|0;n.fillStyle=`rgba(${c},${c},${c},0.5)`,n.beginPath(),n.ellipse(s()*256,s()*256,8+s()*22,4+s()*10,s()*3,0,Math.PI*2),n.fill()}n.lineCap="round",n.lineJoin="round";const r=(l,c,u,h,f)=>{n.lineWidth=f,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c);for(let p=0;p<h;p++)u+=(s()-.5)*.9,l+=Math.cos(u)*9,c+=Math.sin(u)*9,n.lineTo(l,c),s()<.12&&f>1.2&&(n.stroke(),r(l,c,u+(s()<.5?1:-1)*(.6+s()*.6),h>>1,f*.7),n.lineWidth=f,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c));n.stroke()};for(let l=0;l<9;l++){const c=s()*256,u=s()*256,h=s()*6.28,f=5+(s()*7|0),p=1.6+s()*1.2;for(const[v,x]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]])n.save(),n.translate(v,x),r(c,u,h,f,p),n.restore()}const a=new ui(e);a.colorSpace=mn,a.wrapS=a.wrapT=_i,a.anisotropy=4;const o=new We({vertexColors:!0});return o.onBeforeCompile=l=>{l.uniforms.uCrack={value:a},l.uniforms.uWaterC={value:new Ct(i)},l.vertexShader=`varying vec3 vRP;
varying vec3 vRN;
varying float vRWY;
`+l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vRP = position; vRN = normal;
  vec4 rw = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    rw = instanceMatrix * rw;
  #endif
  vRWY = (modelMatrix * rw).y;`),l.fragmentShader=`uniform sampler2D uCrack;
uniform vec3 uWaterC;
varying vec3 vRP;
varying vec3 vRN;
varying float vRWY;
`+l.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      {
        vec3 w = pow(abs(normalize(vRN)), vec3(4.0)); w /= (w.x + w.y + w.z);
        vec3 q = vRP * ${t.toFixed(3)}; // sprekk-tetthet per objektrom-enhet (store fyrfoten trenger glissere)
        vec3 cr = texture2D(uCrack, q.zy).rgb * w.x + texture2D(uCrack, q.xz).rgb * w.y + texture2D(uCrack, q.xy).rgb * w.z;
        diffuseColor.rgb *= cr;
        // Under vannflata (0,05) tar steinen vannets farge (som de turkise undervannssteinene i raw1):
        // flate blokk-topper rett under overflata viste seg ellers som lyse grå firkanter i det klare vannet
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.35 + uWaterC * 0.55, 0.8 * smoothstep(-0.03, 0.06, 0.05 - vRWY));
      }`)},o.customProgramCacheKey=()=>`rock${t}`,o}function P_(i,t,e){const n=f_(e),s=new B(e.lighthouse[0],0,e.lighthouse[1]),r=e.paths.map(A_),a=r.flatMap(I=>I.samples),o=(I,N)=>{let K=1/0;for(let ct=0;ct<a.length;ct+=3){const xt=a[ct],Tt=(xt.x-I)**2+(xt.z-N)**2;Tt<K&&(K=Tt)}return Math.sqrt(K)};if(e.plateausAuto&&!e.plateaus){const I=On(500+e.seed),N=[];for(const K of e.plateausAuto){let ct=null,xt=-1;for(let Tt=0;Tt<500;Tt++){const St=I()*Math.PI*2,Q=12+I()*24,Vt=Math.cos(St)*Q,Ot=Math.sin(St)*Q,ue=o(Vt,Ot);if(ue<K.r+3.5||Math.hypot(Vt-s.x,Ot-s.z)<K.r+9||N.some(Re=>Math.hypot(Re.x-Vt,Re.z-Ot)<Re.r+K.r+5))continue;const Te=Math.min(ue-K.r,9)+I()*.5;Te>xt&&(xt=Te,ct={x:Vt,z:Ot,...K})}ct&&N.push(ct)}if(e.plateaus=N,e.waterfall&&N[0]){const K=N[0],ct=e.waterfall;let xt=0,Tt=-1;for(let Vt=0;Vt<16;Vt++){const Ot=Vt/16*Math.PI*2,ue=K.x+Math.cos(Ot)*(K.r+3.2),Te=K.z+Math.sin(Ot)*(K.r+3.2),Re=o(ue,Te);Re>Tt&&(Tt=Re,xt=Ot)}const St=Math.cos(xt),Q=Math.sin(xt);ct.pool=[K.x+St*(K.r-2.4),K.z+Q*(K.r-2.4)],ct.lip=[K.x+St*(K.r-.3),K.z+Q*(K.r-.3)],ct.basin=[K.x+St*(K.r+3),K.z+Q*(K.r+3)]}}const l=e.fjord,c=e.nes,u=(I,N)=>{if(e.shape==="fjord"){const K=N+30+2.2*Math.sin(I*.21)+1.2*Math.sin(I*.53+1),ct=xe.clamp(N,c.z1,c.z0),xt=c.r-Math.hypot(I-c.x,N-ct)+(N<c.z1?0:.6*Math.sin(N*.7));return Math.max(K,xt)}return n(Math.atan2(N,I))-Math.hypot(I,N)},h=(I,N,K=!1)=>{const ct=xe.smoothstep(u(I,N),-3,7),xt=.9+.7*Math.sin(I*.17+1)*Math.cos(N*.21)+.35*Math.sin(I*.5+N*.4)+.3*Math.sin(I*.31-N*.23+2.1)+.18*Math.cos(I*.73+N*.61),Tt=2.4*Math.exp(-((I-s.x-2)**2+(N-s.z+1)**2)/60);let St=-2.2+ct*(2.2+xt+Tt);if(ct>.85&&St<.35&&(St=Math.max(-.42,.35-(.35-St)*3.2)),l){const Q=Math.max(xe.smoothstep(Math.abs(I),l.wall-3,l.wall+6),xe.smoothstep(N,l.top+6,l.top+14));St+=Q*(7+1.5*Math.sin(N*.13+I*.05));const Vt=Math.abs(I-l.xc(N)),Ot=1-xe.smoothstep(N,l.top-6,l.top+2);Vt<l.w+1.5&&Ot>0&&(St=Math.min(St,xe.lerp(St,-1.6,Ot*(1-xe.smoothstep(Vt,l.w-.8,l.w+1.5)))))}for(const Q of e.plateaus||[]){const Vt=Math.hypot(I-Q.x,N-Q.z),Ot=Math.atan2(N-Q.z,I-Q.x),ue=Q.r+Math.sin(Ot*5+Q.x)*.8+Math.sin(Ot*11)*.3;St+=Q.h*xe.smoothstep(ue-Vt,0,1.3)}if(e.waterfall&&!K){const Q=e.waterfall,Vt=Math.hypot(I-Q.pool[0],N-Q.pool[1]);Vt<Q.poolR+.6&&(Q._lvl??(Q._lvl=h(Q.pool[0],Q.pool[1],!0)-.12),St=Math.min(St,Q._lvl-.48*Math.sqrt(Math.max(0,1-Vt/(Q.poolR+.6)))));const Ot=xe.clamp(((I-Q.pool[0])*(Q.lip[0]-Q.pool[0])+(N-Q.pool[1])*(Q.lip[1]-Q.pool[1]))/((Q.lip[0]-Q.pool[0])**2+(Q.lip[1]-Q.pool[1])**2),0,1),ue=Q.pool[0]+(Q.lip[0]-Q.pool[0])*Ot,Te=Q.pool[1]+(Q.lip[1]-Q.pool[1])*Ot;Math.hypot(I-ue,N-Te)<.75&&Q._lvl!==void 0&&(St=Math.min(St,Q._lvl-.25));const Re=Math.hypot(I-Q.basin[0],N-Q.basin[1]);Re<Q.basinR&&(St=Math.min(St,Math.max(-.42,.05-.47*Math.sqrt(1-Re/Q.basinR))))}if(e.volcano){const Q=e.volcano,Vt=Math.hypot(I-Q.x,N-Q.z);St+=Q.h*Math.max(0,1-Vt/Q.r)**1.4-Q.h*.5*Math.max(0,1-Vt/(Q.r*.25))}return St},f=68,p=t.mobile?160:176,v=new Float32Array((p+1)*(p+1)),x=new Float32Array((p+1)*(p+1));for(let I=0;I<=p;I++)for(let N=0;N<=p;N++){const K=-f+N/p*f*2,ct=-f+I/p*f*2,xt=o(K,ct);x[I*(p+1)+N]=xt;let Tt=h(K,ct);const St=xe.smoothstep(xt,1.4,3.2),Q=Math.max(h(K,ct)*.6+.3,.45);Tt=xe.lerp(Math.min(Tt,Q+.1),Tt,St),l&&Math.abs(ct-l.bridgeZ)<4&&Math.abs(K-l.xc(ct))<l.w+2&&xt<2.2&&(Tt=Math.max(Tt,.5)),v[I*(p+1)+N]=Tt}const m=(I,N,K)=>{const ct=xe.clamp((N+f)/(f*2)*p,0,p-.001),xt=xe.clamp((K+f)/(f*2)*p,0,p-.001),Tt=Math.floor(ct),St=Math.floor(xt),Q=ct-Tt,Vt=xt-St,Ot=I[St*(p+1)+Tt],ue=I[St*(p+1)+Tt+1],Te=I[(St+1)*(p+1)+Tt],Re=I[(St+1)*(p+1)+Tt+1];return(Ot*(1-Q)+ue*Q)*(1-Vt)+(Te*(1-Q)+Re*Q)*Vt},d=(I,N)=>m(v,I,N),y=(I,N)=>m(x,I,N),S=(I,N)=>d(I,N)>.35,g=.5,A=(I,N)=>Math.max(Math.abs(d(I+.4,N)-d(I-.4,N)),Math.abs(d(I,N+.4)-d(I,N-.4)))/.8,E=(I,N)=>!!l&&Math.abs(N-l.bridgeZ)<4&&Math.abs(I-l.xc(N))<l.w+1.5&&y(I,N)<2.6,w=new Ct("#cfeaff"),C=(I,N)=>d(I,N)>.05-g&&A(I,N)<1.05,M=t.mobile?170:256,_=new Zn(f*2,f*2,M,M);_.rotateX(-Math.PI/2);const T=_.attributes.position,D=new Float32Array(T.count*3),k=new Float32Array(T.count*3),L=new Float32Array(T.count),O=new Float32Array(T.count*4),V=new Ct,W=new Ct,G=e.palette,j=new Ct(e.rock[0]).multiplyScalar(.7),nt=new Ct(e.rock[0]).multiplyScalar(1.08),ot=new Ct,At=new Ct(G.sand),kt=new Ct(G.grass),it=new Ct(G.grass2),ut=new Ct(G.path),Rt=new Ct(G.deep),dt=new Ct,Gt=On(7);for(let I=0;I<T.count;I++){const N=T.getX(I),K=T.getZ(I),ct=d(N,K);T.setY(I,ct);const xt=y(N,K),Tt=(Gt()-.5)*.04,St=dt.copy(kt).lerp(it,xe.clamp((ct-1)*.6+Gt()*.3,0,1)).offsetHSL(0,0,Tt);k.set([St.r,St.g,St.b],I*3),V.copy(Rt).lerp(At,xe.smoothstep(ct,0,.3)).offsetHSL(0,0,Tt),D.set([V.r,V.g,V.b],I*3);const Q=.5+.5*Math.sin(N*1.7+K*.9)*Math.cos(K*1.3-N*.6);L[I]=1.9-Math.min(xt,6)+(Q-.5)*(G.pathMix??.3)*2.4-Math.max(0,.3-ct)*2.5;let Vt=0;l&&E(N,K)&&(W.copy(w),Vt=.85);const Ot=A(N,K);if(Ot>.75){const ue=.5+.5*Math.sin(ct*7.5+Math.sin(N*.7+K*.5)*1.5);ot.copy(j).lerp(nt,ue);const Te=xe.smoothstep(Ot,.75,1.3);W.copy(Vt?W:ot).lerp(ot,Te),Vt=Math.max(Vt,Te)}O.set([W.r,W.g,W.b,Vt],I*4)}_.setAttribute("aLow",new Ve(D,3)),_.setAttribute("aGrass",new Ve(k,3)),_.setAttribute("aPathF",new Ve(L,1)),_.setAttribute("aOver",new Ve(O,4)),_.computeVertexNormals();const qt=new We({color:"#ffffff"});qt.onBeforeCompile=I=>{I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
attribute vec3 aLow, aGrass;
attribute vec4 aOver;
attribute float aPathF;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vLow = aLow; vGrass = aGrass; vOver = aOver; vPathF = aPathF;`),I.uniforms.uPath={value:ut},I.fragmentShader=I.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
uniform vec3 uPath;`).replace("#include <color_fragment>",`#include <color_fragment>
        // Skarpe overganger: sand → gress på en støyete høydekontur, sti på en terskel i stifeltet
        float edgeN = sin(vTW.x * 2.1 + sin(vTW.z * 1.3) * 1.5) * sin(vTW.z * 1.7 - vTW.x * 0.6);
        vec3 ground = mix(vLow, vGrass, smoothstep(0.76, 0.80, vTW.y + edgeN * 0.06));
        ground = mix(ground, uPath, smoothstep(0.34, 0.40, vPathF));
        diffuseColor.rgb = mix(ground, vOver.rgb, vOver.a);
        // Våt sand: mørkere stripe langs vannkanten og under vann (G3)
        diffuseColor.rgb *= mix(1.0, 0.8, 1.0 - smoothstep(0.08, 0.34, vTW.y));
        float sandMask = 1.0 - smoothstep(0.55, 0.85, vTW.y);
        // G5: sandkrusninger (raw5): forvridde, asymmetriske riller med smal lys kam og bredere skygge.
        // fwidth tar dem bort der de blir finere enn et par piksler (ellers moiré på avstand/mobil)
        {
          vec2 sq = vTW.xz;
          float warp = sin(sq.x * 0.45 + sin(sq.y * 0.6) * 1.4) * 1.6 + sin(sq.y * 0.9 - sq.x * 0.3) * 0.7;
          float ph = dot(sq, vec2(0.6, 0.8)) * 8.0 + warp * 2.4;
          float s = sin(ph);
          float crest = smoothstep(0.55, 0.97, s), trough = smoothstep(0.1, -0.85, s);
          float aa = 1.0 - smoothstep(0.5, 1.4, fwidth(ph));
          float wetR = 1.0 - smoothstep(0.08, 0.34, vTW.y);
          // Overalt der bakken er sand: lav sand under gress-konturen og sand-stiene (ikke på gress/klippe-overlegg)
          float sandy = max(1.0 - smoothstep(0.76, 0.80, vTW.y + edgeN * 0.06), smoothstep(0.34, 0.40, vPathF)) * (1.0 - vOver.a);
          diffuseColor.rgb *= 1.0 + (0.1 * crest - 0.11 * trough) * sandy * aa * mix(1.0, 0.45, wetR);
        }
        // Malt overflate: myk to-oktavs støy i lyshet og litt i fargetone
        vec2 q = vTW.xz;
        float n1 = sin(q.x * 0.9 + sin(q.y * 0.7) * 1.7) * sin(q.y * 1.1 + sin(q.x * 0.5) * 1.3);
        float n2 = sin(q.x * 3.7 + q.y * 2.3) * sin(q.y * 3.1 - q.x * 1.9);
        diffuseColor.rgb *= 0.93 + 0.07 * n1 + 0.035 * n2;
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const $t=new oe(_,qt);$t.receiveShadow=!0,i.add($t);const te=[],ft=(I,N)=>Math.hypot(I-s.x,N-s.z)>6;for(const[I,N]of r.entries()){let K=I%2===0?1:-1,ct=0;for(let xt=.16;xt<.95&&ct<6;xt+=.055){const Tt=N.curve.getPointAt(xt),St=N.curve.getTangentAt(xt),Q=new B(-St.z,0,St.x).normalize();for(const Vt of[K,-K]){const Ot=Tt.x+Q.x*3.6*Vt,ue=Tt.z+Q.z*3.6*Vt;if(!(y(Ot,ue)<2.7||!S(Ot,ue)||!ft(Ot,ue))&&!te.some(Te=>Math.hypot(Te.x-Ot,Te.z-ue)<5.2)&&!(e.volcano&&Math.hypot(Ot-e.volcano.x,ue-e.volcano.z)<e.volcano.r+2)){te.push({x:Ot,z:ue,tower:null}),ct++;break}}K=-K}}const wt=gu(e.water.mid),F=new De({color:new Ct("#ffd27a").multiplyScalar(1.6),transparent:!0,opacity:.75,depthWrite:!1}),Ht=new De({color:new Ct("#ffe9a8").multiplyScalar(2),transparent:!0,opacity:.85,depthWrite:!1}),_t=mu(On(61+e.seed),1.3,1.45,.98,e.rock[0],e.rock[1],8,{dressed:!0});_t.translate(0,-.1,0);const Nt=new es(.55,.75,6);Nt.rotateX(-Math.PI/2);const Dt=new fr(1,0),ee=te.length,q=new gn(_t,wt,ee),R=new gn(Nt,F,ee),b=new gn(Dt,Ht,ee*3);q.castShadow=q.receiveShadow=!0;const H=new He;te.forEach((I,N)=>{I.y0=d(I.x,I.z),I.y=I.y0+.88,H.position.set(I.x,I.y0,I.z),H.rotation.set(0,N,0),H.scale.setScalar(1),H.updateMatrix(),q.setMatrixAt(N,H.matrix)}),i.add(q,R,b),ic(q,"rock");const Z=I=>{te.forEach((N,K)=>{const ct=!N.tower;H.position.set(N.x,N.y0+.9,N.z),H.rotation.set(0,I*.5,0),H.scale.setScalar(ct?1:0),H.updateMatrix(),R.setMatrixAt(K,H.matrix);for(let xt=0;xt<3;xt++){const Tt=I*.4+xt*2.1+N.x,St=(Tt%1+1)%1;H.position.set(N.x+Math.cos(Tt*2.3)*.55,N.y0+1+St*1.1,N.z+Math.sin(Tt*2.3)*.55),H.rotation.set(0,Tt*3,0);const Q=ct?.07*Math.sin(St*Math.PI):0;H.scale.set(Q,Q*1.6,Q),H.updateMatrix(),b.setMatrixAt(K*3+xt,H.matrix)}}),R.instanceMatrix.needsUpdate=!0,b.instanceMatrix.needsUpdate=!0},tt=new be,et=d(s.x,s.z);tt.position.set(s.x,et,s.z);const Ut=(()=>{const I=document.createElement("canvas");I.width=512,I.height=512;const N=I.getContext("2d");N.fillStyle="#f6f1e6",N.fillRect(0,0,512,512);const K=On(5);for(let xt=0;xt<520;xt++){const Tt=K()*512,St=K()*512,Q=2+K()*9,Vt=K()<.65;N.fillStyle=Vt?`rgba(${90+K()*40},${120+K()*40},${60+K()*20},${.12+K()*.18})`:`rgba(${130+K()*30},${95+K()*20},60,${.12+K()*.15})`,N.beginPath(),N.ellipse(Tt,St,Q,Q*(.4+K()*.6),K()*3,0,Math.PI*2),N.fill()}for(let xt=0;xt<1200;xt++){N.strokeStyle=`rgba(190,170,140,${.04+K()*.07})`,N.lineWidth=1;const Tt=K()*512,St=K()*512;N.beginPath(),N.moveTo(Tt,St),N.lineTo(Tt+(K()-.5)*8,St+6+K()*20),N.stroke()}for(let xt=0;xt<26;xt++){const Tt=K()*512;N.strokeStyle=K()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",N.lineWidth=2+K()*5,N.beginPath(),N.moveTo(Tt,512),N.bezierCurveTo(Tt+40,350,Tt-30,160,Tt+20+K()*40,0),N.stroke()}N.strokeStyle="rgba(175,145,100,0.55)",N.lineWidth=4,N.beginPath(),N.moveTo(60,512),N.bezierCurveTo(90,330,110,180,150,0),N.stroke();const ct=new ui(I);return ct.colorSpace=mn,ct.wrapS=_i,ct})(),Mt=new We({map:Ut}),Pt=(()=>{const I=document.createElement("canvas");I.width=I.height=128;const N=I.getContext("2d");N.fillStyle="#e9dcbf",N.fillRect(0,0,128,128),N.strokeStyle="#a88d62",N.lineWidth=3,N.beginPath();for(let ct=0;ct<Math.PI*9;ct+=.1){const xt=4+ct*2;N.lineTo(64+Math.cos(ct)*xt,64+Math.sin(ct)*xt)}N.stroke();const K=new ui(I);return K.colorSpace=mn,K})(),re=new We({color:"#e6d8b8"}),yt=new We({map:Pt}),Wt=new We({color:"#3a3330",flatShading:!0}),ae=new We({color:"#b8b2aa",flatShading:!0}),le=(()=>{const I=document.createElement("canvas");I.width=256,I.height=128;const N=I.getContext("2d"),K=N.createLinearGradient(0,0,0,128);K.addColorStop(0,"#fff0b0"),K.addColorStop(.45,"#ffb040"),K.addColorStop(1,"#ff5a10"),N.fillStyle=K,N.fillRect(0,0,256,128);const ct=On(11);for(let Tt=0;Tt<70;Tt++){const St=ct();N.fillStyle=St<.5?`rgba(70,60,55,${.5+ct()*.4})`:`rgba(170,165,160,${.5+ct()*.4})`,N.beginPath(),N.ellipse(ct()*256,20+ct()*108,4+ct()*14,2+ct()*6,ct()*3,0,Math.PI*2),N.fill()}N.strokeStyle="rgba(60,30,20,0.6)",N.lineWidth=1.5;for(let Tt=0;Tt<40;Tt++){const St=ct()*256,Q=ct()*128;N.beginPath(),N.moveTo(St,Q),N.lineTo(St+(ct()-.5)*30,Q+(ct()-.5)*20),N.stroke()}const xt=new ui(I);return xt.colorSpace=mn,xt})(),jt=new De({map:le,color:new Ct("#ffffff").multiplyScalar(2.2)});function Me({len:I,rTop:N,rBot:K,crutchH:ct,seg:xt,bend:Tt,glowMat:St,shadow:Q}){const Vt=new be,Ot=new oe(new Xe(K*.98,K*.95,ct,xt),[re,re,yt]);Ot.position.y=ct/2,Ot.castShadow=Q,Vt.add(Ot);const ue=new Xe(N,K,I,xt,8,!0),Te=ue.attributes.position,Re=On(Math.round(I*100)),bi=Array.from({length:6},()=>[Re()*6.28,Re()*3,.03+Re()*.04]);for(let Ie=0;Ie<Te.count;Ie++){const ti=Te.getY(Ie),ei=(ti+I/2)/I,br=Math.atan2(Te.getZ(Ie),Te.getX(Ie));let Ds=1+Math.sin(br*7+ti*3)*.018;for(const[ed,nd,id]of bi)Ds+=Math.cos(br-ed)*Math.sin(ei*6+nd)*id*.5;Te.setXYZ(Ie,Te.getX(Ie)*Ds+Tt*ei*ei*I,ti,Te.getZ(Ie)*Ds)}ue.translate(0,I/2,0),ue.computeVertexNormals();const Ce=new oe(ue,Mt);Ce.position.y=ct,Ce.castShadow=Q,Ce.receiveShadow=!0,Vt.add(Ce);const _n=Tt*I,Qn=ct+I,Mn=new Xe(N*1.02,N*1.04,N*.35,xt,1,!0),Un=Mn.attributes.position;for(let Ie=0;Ie<Un.count;Ie++)Un.getY(Ie)>0&&Un.setY(Ie,Un.getY(Ie)+Math.sin(Ie*2.7)*N*.12);Mn.computeVertexNormals();const Nn=new oe(Mn,Wt);Nn.position.set(_n,Qn+N*.12,0),Vt.add(Nn);const Bi=new oe(new Gn(N*.97,xt,6,0,Math.PI*2,0,Math.PI/2),St);Bi.scale.y=.38,Bi.position.set(_n,Qn+N*.2,0),Vt.add(Bi);const po=[];for(let Ie=0;Ie<5;Ie++){const ti=new oe(new ao(N*(.2+Ie%3*.07),0),ae),ei=Ie*1.25+.3;ti.position.set(_n+Math.cos(ei)*N*.55,Qn+N*.33,Math.sin(ei)*N*.55),ti.scale.y=.4,Vt.add(ti),po.push(ti)}const mo=new Bn(N*.28,N*1.1,6,4),Ps=mo.attributes.position;for(let Ie=0;Ie<Ps.count;Ie++){const ti=Ps.getY(Ie),ei=(ti/(N*1.1)+.5)*2.2,br=Ps.getX(Ie),Ds=Ps.getZ(Ie);Ps.setX(Ie,br*Math.cos(ei)-Ds*Math.sin(ei)+(ti+N*.55)*.25),Ps.setZ(Ie,br*Math.sin(ei)+Ds*Math.cos(ei))}mo.computeVertexNormals();const Sr=new oe(mo,Wt);return Sr.position.set(_n+N*.1,Qn+N*.7,N*.1),Sr.rotation.z=-.35,Vt.add(Sr),Vt.userData={glow:Bi,top:new B(_n,Qn,0),charRing:Nn,ashFlakes:po,body:Ce,twist:Sr,len:I,rTop:N,rBot:K,bend:Tt,crutchH:ct,base:Ce.geometry.attributes.position.array.slice(),topParts:[Nn,Bi,Sr,...po].map(Ie=>[Ie,Ie.position.clone(),Ie.scale.clone()])},Vt}const ce=new Ct(e.rock[0]).multiplyScalar(.86),ye=new oe(mu(On(67+e.seed),3.3,3.9,1,ce,e.rock[1],16),gu(e.water.mid,.2));ye.position.y=-.2,ye.castShadow=ye.receiveShadow=!0,tt.add(ye),na(ye,"rock");const X=7.4,It=1.4,rt=Me({len:X,rTop:2.35,rBot:.95,crutchH:It,seg:22,bend:.06,glowMat:jt,shadow:!0});rt.position.y=.75,rt.rotation.set(.06,0,-.03);const gt=rt.userData.charRing;tt.add(rt);const zt=new He;zt.position.y=It+X+1.2,rt.add(zt);const Ft=new $r("#ff8a3a",40,34,1.5);Ft.position.y=It+X+1.4,rt.add(Ft);const he=new Bn(2.2,16,16,6,!0);he.translate(0,-8,0);{const I=he.attributes.position,N=new Float32Array(I.count*3);for(let K=0;K<I.count;K++){const ct=Math.pow(1-Math.min(1,-I.getY(K)/16),1.6);N.set([ct,ct,ct],K*3)}he.setAttribute("color",new Ve(N,3))}he.rotateZ(Math.PI/2);const ze=new De({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:fi,depthWrite:!1,side:Je,fog:!1}),ke=new be;ke.position.y=It+X+.8;const we=new oe(he,ze),xn=we.clone();xn.rotation.y=Math.PI,ke.add(we,xn),rt.add(ke);const dn=new $r("#ffa050",12,10,1.4);dn.position.set(0,1.3,4.6),tt.add(dn),i.add(tt),tt.updateMatrixWorld(!0);const Kn=new B;zt.getWorldPosition(Kn);const U=rt.userData,pt=[zt,Ft,ke].map(I=>[I,I.position.y]),lt=I=>U.rBot+(U.rTop-U.rBot)*I;function Zt(I){const N=.15+.85*Math.max(0,Math.min(1,I)),K=U.body.geometry.attributes.position,ct=U.base;for(let Q=0;Q<K.count;Q++){const Vt=ct[Q*3+1],Ot=Vt/U.len,ue=Ot*N,Te=lt(ue)/lt(Ot);K.setXYZ(Q,(ct[Q*3]-U.bend*Ot*Ot*U.len)*Te+U.bend*ue*ue*U.len,ue*U.len,ct[Q*3+2]*Te)}K.needsUpdate=!0,U.body.geometry.computeVertexNormals(),U.body.geometry.computeBoundingSphere();const xt=(N-1)*U.len,Tt=lt(N)/U.rTop,St=U.bend*U.len*(N*N-1);for(const[Q,Vt,Ot]of U.topParts)Q.position.set(U.top.x+(Vt.x-U.top.x)*Tt+St,Vt.y+xt,Vt.z*Tt),Q.scale.set(Ot.x*Tt,Ot.y*Tt,Ot.z*Tt);for(const[Q,Vt]of pt)Q.position.y=Vt+xt;tt.updateMatrixWorld(!0),zt.getWorldPosition(Kn)}const Qt={tip:Kn,pos:new B(s.x,et,s.z),lights:pr,flamePos(){return Kn.clone()},setLights(I){this.lights=I;const N=I/pr;Zt(N),this.glow=N,dn.intensity=3+9*N,ze.opacity=.01+.04*N,gt.scale.y*=1+(1-N)*2.5}},Et=On(42),Kt=[];for(let I=0;I<3e3&&Kt.length<(t.mobile?70:104);I++){const N=(Et()-.5)*102,K=(Et()-.5)*102,ct=d(N,K);if(ct<.75||y(N,K)<3.2||!ft(N,K)||te.some(Q=>Math.hypot(Q.x-N,Q.z-K)<3.2)||Kt.some(Q=>Math.hypot(Q.x-N,Q.z-K)<2.4)||e.volcano&&Math.hypot(N-e.volcano.x,K-e.volcano.z)<e.volcano.r)continue;const xt=ct<1.45?e.trees.beach:e.trees.inland;let Tt=Et(),St="bush";for(const[Q,Vt]of Object.entries(xt)){if(Tt<Vt){St=Q;break}Tt-=Vt}Kt.push({x:N,z:K,y:ct,s:(St==="bush"?.8:.75)+Et()*.45,phase:Et()*6.28,kind:St})}if(e.trees.inland.bush){const I=On(303+e.seed),N=Kt.filter(K=>K.kind!=="bush"&&K.y>=1);for(const K of N){if(I()>(t.mobile?.6:.75))continue;const ct=1+Math.floor(I()*3);for(let xt=0;xt<ct;xt++){const Tt=I()*6.28,St=1.3+I()*1,Q=K.x+Math.cos(Tt)*St,Vt=K.z+Math.sin(Tt)*St,Ot=d(Q,Vt);Ot<1||y(Q,Vt)<3||!ft(Q,Vt)||te.some(ue=>Math.hypot(ue.x-Q,ue.z-Vt)<3)||Kt.some(ue=>ue!==K&&Math.hypot(ue.x-Q,ue.z-Vt)<1.3)||Kt.push({x:Q,z:Vt,y:Ot,s:.55+I()*.35,phase:I()*6.28,kind:"bush"})}}}const se=r_(i,Kt,t,e),me=new He,Ee=[];for(let I=0;I<1200&&Ee.length<(t.mobile?40:56);I++){const N=Et()*Math.PI*2,K=n(N)-3+Et()*5.5,ct=Math.cos(N)*K,xt=Math.sin(N)*K;y(ct,xt)<3.4||d(ct,xt)<-1.2||Ee.some(Tt=>Math.hypot(Tt.x-ct,Tt.z-xt)<2.2)||Ee.push({x:ct,z:xt,s:.6+Et()*1.2,r:Et()*6})}for(const I of e.plateaus||[]){const N=Math.round(I.r*2*Math.PI/2.3);for(let K=0;K<N;K++){const ct=K/N*Math.PI*2+Et()*.2,xt=I.r+Math.sin(ct*5+I.x)*.8+Math.sin(ct*11)*.3-.2,Tt=I.x+Math.cos(ct)*xt,St=I.z+Math.sin(ct)*xt;e.waterfall&&Math.hypot(Tt-e.waterfall.lip[0],St-e.waterfall.lip[1])<2.2||y(Tt,St)<2.6||Ee.push({x:Tt,z:St,s:1.3+Et()*.9,r:Et()*6,cliff:!0})}}[0,1,2].map(I=>R_(On(31+I*7+e.seed),e.rock[0],e.rock[1],I)).map((I,N)=>{const K=Ee.filter((xt,Tt)=>Tt%3===N),ct=new gn(I,wt,Math.max(1,K.length));return ct.count=K.length,K.forEach((xt,Tt)=>{me.position.set(xt.x,d(xt.x,xt.z)-.2*xt.s,xt.z),me.rotation.set(0,xt.r*2,0),me.scale.set(xt.s*1.1,xt.s*.9,xt.s),me.updateMatrix(),ct.setMatrixAt(Tt,me.matrix)}),ct.castShadow=ct.receiveShadow=!0,i.add(ct),ic(ct,"rock"),ct});const Xn=$x(i,{heightAt:d,pathDist:y,plinths:te,paths:r,lighthouse:Qt,landDist:u},t,On(99+e.seed),n,e),Jn=g_(i,{heightAt:d,pathDist:y,paths:r,lighthouse:Qt,islandEdge:n},t,e),P=[...Kt.map(I=>[I.x,I.z,1.3*I.s]),...Ee.map(I=>[I.x,I.z,I.s*1.6]),...te.map(I=>[I.x,I.z,1.9])],$=(I,N)=>{let K=1;for(const[ct,xt,Tt]of P){const St=(ct-I)**2+(xt-N)**2;St<Tt*Tt&&(K=Math.min(K,.55+.45*Math.sqrt(St)/Tt))}return K},st=o_(i,{heightAt:d,pathDist:y,plinths:te,lighthouse:Qt,extrasBlock:Jn.blocks,shadeAt:$},t,e,On(7+e.seed)),at={palm:.9,round:1.45,bush:1,pine:1.35,dead:.6};x_(i,[...Kt.map(I=>({x:I.x,y:I.y,z:I.z,r:(at[I.kind]??1)*I.s})),...Ee.map(I=>({x:I.x,y:d(I.x,I.z),z:I.z,r:I.s*(I.cliff?1.7:1.55)})).filter(I=>I.y>.05),...te.map(I=>({x:I.x,y:I.y0,z:I.z,r:1.95})),{x:s.x,y:et,z:s.z,r:4.8}]);const Y=Float32Array.from(v),Lt=[...Ee.map(I=>({x:I.x,z:I.z,r:I.s*.85})),...Xn.obstacles];for(const I of Lt){const N=I.r+1,K=f*2/p,ct=Math.floor((I.x-N+f)/K),xt=Math.ceil((I.x+N+f)/K),Tt=Math.floor((I.z-N+f)/K),St=Math.ceil((I.z+N+f)/K);for(let Q=Math.max(0,Tt);Q<=Math.min(p,St);Q++)for(let Vt=Math.max(0,ct);Vt<=Math.min(p,xt);Vt++){const Ot=-f+Vt*K,ue=-f+Q*K,Te=Math.max(0,Math.hypot(Ot-I.x,ue-I.z)-I.r);if(Te>.9)continue;const Re=Q*(p+1)+Vt,bi=.06-Te*.35,Ce=1-Te/.9;Y[Re]=Math.max(Y[Re],Y[Re]+(bi-Y[Re])*Ce*Ce)}}if(e.waterfall&&e.waterfall._lvl!==void 0){const I=e.waterfall;au(i,{heightTex:ou(Y,p+1),ext:f,grid:p,quality:t,sunDir:new B(24,17,4),colors:e.water,level:I._lvl,size:9,maxDepth:.8,center:[(I.pool[0]+I.lip[0])/2,(I.pool[1]+I.lip[1])/2]})}const Xt=au(i,{heightTex:ou(Y,p+1),ext:f,grid:p,quality:t,sunDir:new B(24,17,4),colors:e.water}),ne=[{x:s.x,z:s.z,r:3.5},...te.map(I=>({x:I.x,z:I.z,r:1.4})),...se.colliders,...Ee.filter(I=>d(I.x,I.z)>-.45).map(I=>({x:I.x,z:I.z,r:I.s*.85})),...Xn.colliders,...Jn.colliders];return{def:e,paths:r,plinths:te,lighthouse:Qt,heightAt:d,pathDist:y,slopeAt:A,isLand:S,isIce:E,landDist:u,isWalkable:(I,N)=>C(I,N)&&!Jn.blocks(I,N),colliders:ne,update:I=>{Xt.update(I),Xn.update(I),Jn.update(I),st.update(I);const N=Qt.glow??1,K=.75+.25*Math.sin(I*1.3)+.1*Math.sin(I*7.1);jt.color.setRGB(1,.85,.75).multiplyScalar(N>0?(.7+1.5*N)*K:.12),Ft.intensity=(8+40*N)*K,ke.rotation.y=I*.6,se.update(I),Z(I)},terrain:$t,extras:Jn,grass:st}}const Br={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Rs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const D_=new Tc(-1,1,1,-1,0,1);class L_ extends Ne{constructor(){super(),this.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pe([0,2,0,0,2,0],2))}}const I_=new L_;class lo{constructor(t){this._mesh=new oe(I_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,D_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Uf extends Rs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof je?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=li.clone(t.uniforms),this.material=new je({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new lo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vu extends Rs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class U_ extends Rs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class N_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new bt);this._width=n.width,this._height=n.height,e=new In(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uf(Br),this.copyPass.material.blending=pn,this.clock=new xf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vu!==void 0&&(a instanceof vu?n=!0:a instanceof U_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class z_ extends Rs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Ua={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new bt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Le},cameraProjectionMatrixInverse:{value:new Le},cameraWorldMatrix:{value:new Le},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new B(-1,-1,-1)},sceneBoxMax:{value:new B(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Na={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Qo={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function F_(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=O_(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=e[a],l=2*Math.PI*o/n,c=new B(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new io(s,t,t);return r.wrapS=_i,r.wrapT=_i,r.needsUpdate=!0,r}function O_(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}const za={defines:{SAMPLES:16,SAMPLE_VECTORS:Nf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new bt},cameraProjectionMatrixInverse:{value:new Le},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Nf(i,t,e){const n=k_(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function k_(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new B(Math.cos(r),Math.sin(r),a))}return n}class B_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,p=c-h,v=t-f,x=e-p;let m,d;v>x?(m=1,d=0):(m=0,d=1);const y=v-m+u,S=x-d+u,g=v-1+2*u,A=x-1+2*u,E=l&255,w=c&255,C=this.perm[E+this.perm[w]]%12,M=this.perm[E+m+this.perm[w+d]]%12,_=this.perm[E+1+this.perm[w+1]]%12;let T=.5-v*v-x*x;T<0?n=0:(T*=T,n=T*T*this.dot(this.grad3[C],v,x));let D=.5-y*y-S*S;D<0?s=0:(D*=D,s=D*D*this.dot(this.grad3[M],y,S));let k=.5-g*g-A*A;return k<0?r=0:(k*=k,r=k*k*this.dot(this.grad3[_],g,A)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const c=(t+e+n)*.3333333333333333,u=Math.floor(t+c),h=Math.floor(e+c),f=Math.floor(n+c),p=1/6,v=(u+h+f)*p,x=u-v,m=h-v,d=f-v,y=t-x,S=e-m,g=n-d;let A,E,w,C,M,_;y>=S?S>=g?(A=1,E=0,w=0,C=1,M=1,_=0):y>=g?(A=1,E=0,w=0,C=1,M=0,_=1):(A=0,E=0,w=1,C=1,M=0,_=1):S<g?(A=0,E=0,w=1,C=0,M=1,_=1):y<g?(A=0,E=1,w=0,C=0,M=1,_=1):(A=0,E=1,w=0,C=1,M=1,_=0);const T=y-A+p,D=S-E+p,k=g-w+p,L=y-C+2*p,O=S-M+2*p,V=g-_+2*p,W=y-1+3*p,G=S-1+3*p,j=g-1+3*p,nt=u&255,ot=h&255,At=f&255,kt=this.perm[nt+this.perm[ot+this.perm[At]]]%12,it=this.perm[nt+A+this.perm[ot+E+this.perm[At+w]]]%12,ut=this.perm[nt+C+this.perm[ot+M+this.perm[At+_]]]%12,Rt=this.perm[nt+1+this.perm[ot+1+this.perm[At+1]]]%12;let dt=.6-y*y-S*S-g*g;dt<0?s=0:(dt*=dt,s=dt*dt*this.dot3(this.grad3[kt],y,S,g));let Gt=.6-T*T-D*D-k*k;Gt<0?r=0:(Gt*=Gt,r=Gt*Gt*this.dot3(this.grad3[it],T,D,k));let qt=.6-L*L-O*O-V*V;qt<0?a=0:(qt*=qt,a=qt*qt*this.dot3(this.grad3[ut],L,O,V));let $t=.6-W*W-G*G-j*j;return $t<0?o=0:($t*=$t,o=$t*$t*this.dot3(this.grad3[Rt],W,G,j)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,f,p,v;const x=(t+e+n+s)*l,m=Math.floor(t+x),d=Math.floor(e+x),y=Math.floor(n+x),S=Math.floor(s+x),g=(m+d+y+S)*c,A=m-g,E=d-g,w=y-g,C=S-g,M=t-A,_=e-E,T=n-w,D=s-C,k=M>_?32:0,L=M>T?16:0,O=_>T?8:0,V=M>D?4:0,W=_>D?2:0,G=T>D?1:0,j=k+L+O+V+W+G,nt=a[j][0]>=3?1:0,ot=a[j][1]>=3?1:0,At=a[j][2]>=3?1:0,kt=a[j][3]>=3?1:0,it=a[j][0]>=2?1:0,ut=a[j][1]>=2?1:0,Rt=a[j][2]>=2?1:0,dt=a[j][3]>=2?1:0,Gt=a[j][0]>=1?1:0,qt=a[j][1]>=1?1:0,$t=a[j][2]>=1?1:0,te=a[j][3]>=1?1:0,ft=M-nt+c,wt=_-ot+c,F=T-At+c,Ht=D-kt+c,_t=M-it+2*c,Nt=_-ut+2*c,Dt=T-Rt+2*c,ee=D-dt+2*c,q=M-Gt+3*c,R=_-qt+3*c,b=T-$t+3*c,H=D-te+3*c,Z=M-1+4*c,tt=_-1+4*c,et=T-1+4*c,Ut=D-1+4*c,Mt=m&255,Pt=d&255,re=y&255,yt=S&255,Wt=o[Mt+o[Pt+o[re+o[yt]]]]%32,ae=o[Mt+nt+o[Pt+ot+o[re+At+o[yt+kt]]]]%32,le=o[Mt+it+o[Pt+ut+o[re+Rt+o[yt+dt]]]]%32,jt=o[Mt+Gt+o[Pt+qt+o[re+$t+o[yt+te]]]]%32,Me=o[Mt+1+o[Pt+1+o[re+1+o[yt+1]]]]%32;let ce=.6-M*M-_*_-T*T-D*D;ce<0?u=0:(ce*=ce,u=ce*ce*this.dot4(r[Wt],M,_,T,D));let ye=.6-ft*ft-wt*wt-F*F-Ht*Ht;ye<0?h=0:(ye*=ye,h=ye*ye*this.dot4(r[ae],ft,wt,F,Ht));let X=.6-_t*_t-Nt*Nt-Dt*Dt-ee*ee;X<0?f=0:(X*=X,f=X*X*this.dot4(r[le],_t,Nt,Dt,ee));let It=.6-q*q-R*R-b*b-H*H;It<0?p=0:(It*=It,p=It*It*this.dot4(r[jt],q,R,b,H));let rt=.6-Z*Z-tt*tt-et*et-Ut*Ut;return rt<0?v=0:(rt*=rt,v=rt*rt*this.dot4(r[Me],Z,tt,et,Ut)),27*(u+h+f+p+v)}}class mi extends Rs{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=F_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new In(this.width,this.height,{type:jn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new je({defines:Object.assign({},Ua.defines),uniforms:li.clone(Ua.uniforms),vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader,blending:pn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Vx,this.normalMaterial.blending=pn,this.pdMaterial=new je({defines:Object.assign({},za.defines),uniforms:li.clone(za.uniforms),vertexShader:za.vertexShader,fragmentShader:za.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new je({defines:Object.assign({},Na.defines),uniforms:li.clone(Na.uniforms),vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader,blending:pn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new je({uniforms:li.clone(Br.uniforms),vertexShader:Br.vertexShader,fragmentShader:Br.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:hl,blendDst:Dr,blendEquation:ai,blendSrcAlpha:cl,blendDstAlpha:Dr,blendEquationAlpha:ai}),this.blendMaterial=new je({uniforms:li.clone(Qo.uniforms),vertexShader:Qo.vertexShader,fragmentShader:Qo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Du,blendSrc:hl,blendDst:Dr,blendEquation:ai,blendSrcAlpha:cl,blendDstAlpha:Dr,blendEquationAlpha:ai}),this.fsQuad=new lo(null),this.originalClearColor=new Ct,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Cc,this.depthTexture.format=bs,this.depthTexture.type=Ss,this.normalRenderTarget=new In(this.width,this.height,{minFilter:vn,magFilter:vn,type:jn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Nf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case mi.OUTPUT.Off:break;case mi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case mi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case mi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case mi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case mi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case mi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new B_,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){const l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new io(s,t,t,$n,Mi);return r.wrapS=_i,r.wrapT=_i,r.needsUpdate=!0,r}}mi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const G_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class mr extends Rs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new bt(t.x,t.y):new bt(256,256),this.clearColor=new Ct(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new In(r,a,{type:jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new In(r,a,{type:jn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new In(r,a,{type:jn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=G_;this.highPassUniforms=li.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new je({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new bt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Br;this.copyUniforms=li.clone(u.uniforms),this.blendMaterial=new je({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:fi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ct,this.oldClearAlpha=1,this.basic=new De,this.fsQuad=new lo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new bt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=mr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=mr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new je({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new bt(.5,.5)},direction:{value:new bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new je({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}mr.BlurDirectionX=new bt(1,0);mr.BlurDirectionY=new bt(0,1);const V_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class H_ extends Rs{constructor(){super();const t=V_;this.uniforms=li.clone(t.uniforms),this.material=new Gx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new lo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Pe.getTransfer(this._outputColorSpace)===Fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Iu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Uu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===pc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const W_={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new B(1,1,1)},uLift:{value:new B},uSat:{value:1.08}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uVignette, uSat;
    uniform vec3 uTint, uLift;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(l), c.rgb, uSat);
      c.rgb *= uTint;                     // fargetone (dag: nøytral, skumring: varm)
      c.rgb += uLift * (1.0 - l);         // løft i skyggene (dag: kjølig blått)
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - uVignette * dot(d, d) * 2.2;
      gl_FragColor = c;
    }`},X_=new URLSearchParams(location.search).get("ao")==="1";function q_(i,t,e,n={}){const s=new N_(i,new In(1,1,{type:jn})),r=new z_(t,e),a=new mi(t,e,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});a.blendIntensity=1;const o=new mr(new bt(256,256),.6,.55,1),l=new Uf(W_);n.tint&&l.uniforms.uTint.value.set(...n.tint),n.lift&&l.uniforms.uLift.value.set(...n.lift),n.sat&&(l.uniforms.uSat.value=n.sat),l.uniforms.uVignette.value=n.vignette??.25;const c=new H_;for(const v of[r,a,o,l,c])s.addPass(v);let u="high",h=1,f=1;const p={composer:s,get level(){return u},setLevel(v){u=v,a.enabled=v==="high"&&X_,o.strength=v==="high"?.6:.5;const x=v==="high"?4:0;for(const m of[s.renderTarget1,s.renderTarget2])m.samples!==x&&(m.samples=x,m.dispose());p.setSize(h,f)},setSize(v,x){h=v,f=x;const m=i.getPixelRatio();s.setPixelRatio(m),s.setSize(v,x);const d=u==="high"?2:4;o.resolution.set(v*m/d,x*m/d),o.setSize(v*m/d,x*m/d)},render(v){s.render(v)}};return p}function Y_(i,t,e,n,s,r=null){const{heightAt:a}=t,o=e.mobile?.5:1,l=new Set(n.life),c=new He,u=new Ct,h=[],f=()=>{for(let v=0;v<50;v++){const x=(Math.random()-.5)*80,m=(Math.random()-.5)*80,d=a(x,m);if(d>.8)return{x,z:m,h:d}}return{x:0,z:0,h:1}};if(l.has("butterflies")){const v=Math.round(26*o),x=new ur(.16,6,0,Math.PI);x.scale(1,1.3,1);const d=[-1,1].map(()=>new We({color:"#ffffff",side:Je})).map(g=>{const A=new gn(x,g,v);return i.add(A),A}),y=Array.from({length:v},(g,A)=>({...f(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),S=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];y.forEach((g,A)=>{g.home={x:g.x,z:g.z},d.forEach(E=>E.setColorAt(A,u.set(S[A%S.length])))}),d.forEach(g=>g.instanceColor.needsUpdate=!0),h.push((g,A)=>{y.forEach((E,w)=>{E.a+=Math.sin(A*.7+E.ph)*1.6*g,E.x+=Math.cos(E.a)*E.sp*g,E.z+=Math.sin(E.a)*E.sp*g,Math.hypot(E.x-E.home.x,E.z-E.home.z)>5&&(E.a=Math.atan2(E.home.z-E.z,E.home.x-E.x));const C=a(E.x,E.z)+.6+Math.sin(A*2+E.ph)*.25,M=Math.sin(A*18+E.ph)*1.1;d.forEach((_,T)=>{c.position.set(E.x,C,E.z),c.rotation.set(0,-E.a+Math.PI/2,0),c.rotateZ((T?1:-1)*(.3+M*.5)),c.rotateX(-Math.PI/2),c.scale.set(T?1:-1,1,1),c.updateMatrix(),_.setMatrixAt(w,c.matrix)})}),d.forEach(E=>E.instanceMatrix.needsUpdate=!0)})}if(l.has("birds")){const x=new Ne;x.setAttribute("position",new pe([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),x.computeVertexNormals();const m=new gn(x,new We({color:"#f4f4f0",side:Je}),7);m.castShadow=!0,i.add(m);const d=Array.from({length:7},(y,S)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:S}));h.push((y,S)=>{d.forEach((g,A)=>{const E=S*g.sp+g.ph;c.position.set(g.cx+Math.cos(E)*g.r,g.y+Math.sin(S*.7+A)*.4,g.cz+Math.sin(E)*g.r),c.rotation.set(0,-E,Math.sin(S*.5+A)*.15);const w=1+Math.sin(S*6+A)*.35*(Math.sin(S*.4+A)>.3?1:.1),C=r?xe.smoothstep(c.position.distanceTo(r.position),3,7):1;c.scale.set(1.4*C,w*1.4*C,1.4*C),c.updateMatrix(),m.setMatrixAt(A,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("leaves")){const v=Math.round(60*o),x=new Zn(.16,.1),m=new gn(x,new We({color:"#ffffff",side:Je}),v);i.add(m);const d=Array.from({length:v},(y,S)=>({...f(),ph:Math.random()*6,sp:1+Math.random()*1.5}));d.forEach((y,S)=>m.setColorAt(S,u.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][S%4]))),m.instanceColor.needsUpdate=!0,h.push((y,S)=>{d.forEach((g,A)=>{g.x+=g.sp*y,g.z+=Math.sin(S*.8+g.ph)*.6*y,g.x>45&&Object.assign(g,f(),{x:-45});const E=Math.max(a(g.x,g.z),.1)+.3+Math.abs(Math.sin(S*1.3+g.ph))*.9;c.position.set(g.x,E,g.z),c.rotation.set(S*3+g.ph,S*2+g.ph,S*1.5),c.scale.setScalar(1),c.updateMatrix(),m.setMatrixAt(A,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("fireflies")&&s==="skumring"){const v=Math.round(120*o),x=new Float32Array(v*3),m=new Float32Array(v*3),d=Array.from({length:v},()=>({...f(),ph:Math.random()*6})),y=new Ne;y.setAttribute("position",new Ve(x,3)),y.setAttribute("color",new Ve(m,3));const S=document.createElement("canvas");S.width=S.height=32;const g=S.getContext("2d"),A=g.createRadialGradient(16,16,0,16,16,16);A.addColorStop(0,"rgba(255,255,255,1)"),A.addColorStop(1,"rgba(255,255,255,0)"),g.fillStyle=A,g.fillRect(0,0,32,32);const E=new Pc(y,new so({size:.35,map:new ui(S),vertexColors:!0,transparent:!0,blending:fi,depthWrite:!1}));E.frustumCulled=!1,i.add(E),h.push((w,C)=>{d.forEach((M,_)=>{x[_*3]=M.x+Math.sin(C*.4+M.ph)*1.2,x[_*3+1]=M.h+.5+Math.sin(C*.9+M.ph*2)*.4,x[_*3+2]=M.z+Math.cos(C*.35+M.ph)*1.2;const T=Math.max(0,Math.sin(C*1.7+M.ph*3))**3*2.5;m[_*3]=1*T,m[_*3+1]=.9*T,m[_*3+2]=.35*T}),y.attributes.position.needsUpdate=!0,y.attributes.color.needsUpdate=!0})}let p=0;return{update(v){const x=Math.min(.05,Math.max(0,v-p));p=v;for(const m of h)m(x,v)}}}function $_(i,{cell:t=.75,ext:e=68}={}){const n=Math.ceil(e*2/t)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),a=new Float32Array(n*n),o=i.lighthouse.pos,l=(w,C)=>[Math.round((w+e)/t),Math.round((C+e)/t)],c=(w,C)=>[-e+w*t,-e+C*t];let u=()=>!1;function h(){for(let w=0;w<n;w++)for(let C=0;C<n;C++){const[M,_]=c(C,w),T=i.heightAt(M,_),D=w*n+C,k=Math.hypot(M-o.x,_-o.z);let L=1.8;T<-.5||i.slopeAt(M,_)>1.1||i.extras.blocks(M,_)||u(M,_)||k<3.2?L=1/0:i.pathDist(M,_)<1.6?L=.2:T<.05&&(L=2.6),r[D]=L}}function f(){s.fill(1/0),a.fill(0);const w=[],C=(T,D)=>{w.push([T,D]);let k=w.length-1;for(;k>0;){const L=k-1>>1;if(w[L][0]<=w[k][0])break;[w[L],w[k]]=[w[k],w[L]],k=L}},M=()=>{const T=w[0],D=w.pop();if(w.length){w[0]=D;let k=0;for(;;){const L=2*k+1,O=L+1;let V=k;if(L<w.length&&w[L][0]<w[V][0]&&(V=L),O<w.length&&w[O][0]<w[V][0]&&(V=O),V===k)break;[w[V],w[k]]=[w[k],w[V]],k=V}}return T};for(let T=0;T<n;T++)for(let D=0;D<n;D++){const[k,L]=c(D,T),O=Math.hypot(k-o.x,L-o.z);O>=3.2&&O<4.2&&r[T*n+D]<1/0&&(s[T*n+D]=0,C(0,T*n+D))}const _=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;w.length;){const[T,D]=M();if(T>s[D])continue;const k=D%n,L=D/n|0;for(const[O,V,W]of _){const G=k+O,j=L+V;if(G<0||j<0||G>=n||j>=n)continue;const nt=j*n+G,ot=r[nt];if(ot===1/0)continue;const At=T+W*t*(ot+r[D])*.5;At<s[nt]&&(s[nt]=At,a[nt]=a[D]+W*t,C(At,nt))}}}const p=(w,C)=>{const[M,_]=l(w,C);return M<0||_<0||M>=n||_>=n?1/0:s[_*n+M]};function v(w,C){const[M,_]=l(w,C);let T=p(w,C),D=0,k=0;for(let O=-1;O<=1;O++)for(let V=-1;V<=1;V++){if(!V&&!O)continue;const W=M+V,G=_+O;if(W<0||G<0||W>=n||G>=n)continue;const j=s[G*n+W];j<T&&(T=j,D=V,k=O)}const L=Math.hypot(D,k)||1;return[D/L,k/L,T]}const x=(w,C)=>{const[M,_]=l(w,C);return M<0||_<0||M>=n||_>=n?-1:_*n+M},m=(w,C)=>{const M=x(w,C);return M<0||s[M]===1/0?0:a[M]};function d(){const w=[];for(const C of i.paths){const M=C.samples.find(_=>i.heightAt(_.x,_.z)>-.4&&m(_.x,_.z)>0);M&&w.push([M.x,M.z])}return w}function y(w,C=22,{near:M=8,minFrac:_=.6}={}){const T=d(),D=Math.max(0,...T.map(([V,W])=>m(V,W))),k=(V,W)=>{const G=i.heightAt(V,W);return G>-.4&&G<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([j,nt])=>i.heightAt(V+j,W+nt)<-.9)},L=T.map(([V,W])=>{const G=[],j=[],nt=Math.ceil(M/t),[ot,At]=l(V,W);for(let it=-nt;it<=nt;it++)for(let ut=-nt;ut<=nt;ut++){const[Rt,dt]=c(ot+ut,At+it);Math.hypot(Rt-V,dt-W)>M||m(Rt,dt)<_*D||(k(Rt,dt)?G.push([Rt,dt]):i.heightAt(Rt,dt)>.3&&i.slopeAt(Rt,dt)<.6&&j.push([Rt,dt]))}return(G.length?G:j).sort(()=>Math.random()-.5)}).filter(V=>V.length).sort(()=>Math.random()-.5),O=[];for(let V=0;O.length<w&&V<4;V++){for(const W of L){const G=W.find(j=>O.every(nt=>Math.hypot(nt[0]-j[0],nt[1]-j[1])>C));if(G&&O.push(G),O.length>=w)break}C=Math.min(C,6)}return O}let S=null;function g(w,C){if(!S){S=new Float32Array(n*n);for(let V=0;V<n;V++)for(let W=0;W<n;W++){const[G,j]=c(W,V);S[V*n+W]=i.isWalkable(G,j)?i.heightAt(G,j)<.05?1.6:1:1/0}}const M=new Float64Array(n*n).fill(1/0),_=[],T=(V,W)=>{_.push([V,W]);let G=_.length-1;for(;G>0;){const j=G-1>>1;if(_[j][0]<=_[G][0])break;[_[j],_[G]]=[_[G],_[j]],G=j}},D=()=>{const V=_[0],W=_.pop();if(_.length){_[0]=W;let G=0;for(;;){const j=2*G+1,nt=j+1;let ot=G;if(j<_.length&&_[j][0]<_[ot][0]&&(ot=j),nt<_.length&&_[nt][0]<_[ot][0]&&(ot=nt),ot===G)break;[_[ot],_[G]]=[_[G],_[ot]],G=ot}}return V},k=x(w,C);if(k<0)return null;M[k]=0,T(0,k);const L=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;_.length;){const[V,W]=D();if(V>M[W])continue;const G=W%n,j=W/n|0;for(const[nt,ot,At]of L){const kt=G+nt,it=j+ot;if(kt<0||it<0||kt>=n||it>=n)continue;const ut=it*n+kt,Rt=S[ut];if(Rt===1/0)continue;const dt=V+At*t*Rt;dt<M[ut]&&(M[ut]=dt,T(dt,ut))}}const O=(V,W)=>{const G=x(V,W);return G<0?1/0:M[G]};return{at:O,dir(V,W){const[G,j]=l(V,W);let nt=O(V,W),ot=0,At=0;for(let it=-1;it<=1;it++)for(let ut=-1;ut<=1;ut++){if(!ut&&!it)continue;const Rt=G+ut,dt=j+it;Rt<0||dt<0||Rt>=n||dt>=n||M[dt*n+Rt]<nt&&(nt=M[dt*n+Rt],ot=ut,At=it)}const kt=Math.hypot(ot,At)||1;return[ot/kt,At/kt]}}}const A=()=>{let w=0;for(const C of s)C<1/0&&C>w&&(w=C);return w},E=()=>{h(),f()};return E(),{at:p,dir:v,coastPoints:y,roadEnds:d,routeLen:m,walkField:g,rebuild:E,setBlock(w){u=w,E()},maxDist:A(),N:n,cell:t}}function zf(i,t=700,{blending:e=fi,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const a=new Ct(r||"#000000"),o=new Float32Array(t*3),l=new Float32Array(t*3),c=new Float32Array(t*3),u=new Float32Array(t*3),h=new Float32Array(t),f=new Float32Array(t),p=new Float32Array(t);let v=0;const x=new Ne;x.setAttribute("position",new Ve(o,3)),x.setAttribute("color",new Ve(l,3));const m=document.createElement("canvas");m.width=m.height=64;const d=m.getContext("2d"),y=d.createRadialGradient(32,32,0,32,32,32);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.4,"rgba(255,255,255,0.6)"),y.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=y,d.fillRect(0,0,64,64);const S=new so({size:n,map:new ui(m),vertexColors:!0,transparent:!0,opacity:s,blending:e,depthWrite:!1}),g=new Pc(x,S);g.frustumCulled=!1,i.add(g);for(let C=0;C<t;C++)o[C*3+1]=-999;const A=new Ct;function E(C,M,_,{n:T=10,color:D="#ffb347",speed:k=4,up:L=3,life:O=.7,gravity:V=9,spread:W=1}={}){A.set(D);for(let G=0;G<T;G++){const j=v;v=(v+1)%t,o[j*3]=C,o[j*3+1]=M,o[j*3+2]=_;const nt=Math.random()*Math.PI*2,ot=k*(.4+Math.random()*.6)*W;c[j*3]=Math.cos(nt)*ot,c[j*3+1]=L*(.5+Math.random()),c[j*3+2]=Math.sin(nt)*ot,u[j*3]=A.r,u[j*3+1]=A.g,u[j*3+2]=A.b,f[j]=h[j]=O*(.6+Math.random()*.6),p[j]=V}}function w(C){for(let M=0;M<t;M++){if(h[M]<=0)continue;if(h[M]-=C,h[M]<=0){o[M*3+1]=-999,l[M*3]=l[M*3+1]=l[M*3+2]=0;continue}c[M*3+1]-=p[M]*C,o[M*3]+=c[M*3]*C,o[M*3+1]+=c[M*3+1]*C,o[M*3+2]+=c[M*3+2]*C;const _=h[M]/f[M];l[M*3]=u[M*3]*_+a.r*(1-_),l[M*3+1]=u[M*3+1]*_+a.g*(1-_),l[M*3+2]=u[M*3+2]*_+a.b*(1-_)}x.attributes.position.needsUpdate=!0,x.attributes.color.needsUpdate=!0}return{emit:E,update:w}}const j_={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},Z_={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},K_={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function xu(i=""){const t=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(t)?"switch":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(t)?"ps":"xbox"}function J_(i){const t=i==="switch";return{build:t?1:0,carry:t?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function Q_(i){const t=new Set,e={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=g=>e.pressed.add(g),s=g=>{e.device=g};addEventListener("keydown",g=>{if(s("kb"),(g.code==="Space"||g.code.startsWith("Arrow")||g.code==="Tab")&&g.preventDefault(),g.repeat)return;t.add(g.code);const A={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Digit4:"b4",Digit5:"b5",Digit6:"b6",Digit7:"b7",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",Numpad4:"b4",Numpad5:"b5",Numpad6:"b6",Numpad7:"b7",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};A[g.code]&&n(A[g.code])}),addEventListener("keyup",g=>t.delete(g.code)),addEventListener("blur",()=>t.clear()),i.addEventListener("wheel",g=>{g.preventDefault(),s("kb"),e.zoom=Fa(e.zoom*(g.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",g=>g.preventDefault());const r=new Map;let a=0,o=1,l=null;const c=g=>({x:g.clientX/innerWidth*2-1,y:-(g.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",g=>{if(s(g.pointerType==="touch"?"touch":"kb"),g.pointerType==="mouse"&&g.button===2){l={x:g.clientX},i.setPointerCapture(g.pointerId);return}g.pointerType==="mouse"&&g.button!==0||(r.set(g.pointerId,{e:g,t:performance.now(),x0:g.clientX,y0:g.clientY}),r.size===2&&(a=_u(r),o=e.zoom))}),i.addEventListener("pointermove",g=>{if(l){e.lookDelta+=(g.clientX-l.x)*.008,l.x=g.clientX;return}const A=r.get(g.pointerId);A&&(A.e=g,r.size===2&&a>0&&(e.zoom=Fa(o*(a/_u(r)),.55,4.5)))});const u=g=>{if(l&&g.button===2){l=null;return}const A=r.get(g.pointerId);A&&r.size===1&&a===0&&Math.hypot(g.clientX-A.x0,g.clientY-A.y0)<12&&e.clicks.push(c(g)),r.delete(g.pointerId),r.size<2&&(a=0)};i.addEventListener("pointerup",u),i.addEventListener("pointercancel",g=>{r.delete(g.pointerId),l=null,a=0});const h=document.getElementById("stick"),f=document.getElementById("knob"),p={x:0,z:0};let v=null;const x=g=>{const A=h.getBoundingClientRect();let E=g.clientX-(A.left+A.width/2),w=g.clientY-(A.top+A.height/2);const C=A.width/2,M=Math.hypot(E,w);M>C&&(E*=C/M,w*=C/M),f.style.transform=`translate(${E}px, ${w}px)`;const _=M/C<.15?0:1;p.x=E/C*_,p.z=w/C*_};h.addEventListener("pointerdown",g=>{s("touch"),v=g.pointerId,h.setPointerCapture(g.pointerId),x(g)}),h.addEventListener("pointermove",g=>{g.pointerId===v&&x(g)});const m=g=>{g.pointerId===v&&(v=null,p.x=p.z=0,f.style.transform="")};h.addEventListener("pointerup",m),h.addEventListener("pointercancel",m);const d=(g,A)=>g.addEventListener("pointerdown",E=>{E.preventDefault(),E.stopPropagation(),E.pointerType==="touch"&&s("touch"),n(A)});d(document.getElementById("btn-build"),"build"),d(document.getElementById("btn-carry"),"carry"),d(document.getElementById("btn-next"),"next"),d(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((g,A)=>d(g,"b"+(A+1)));let y=[];addEventListener("gamepadconnected",g=>{e.padId=g.gamepad.id,e.padKind=xu(g.gamepad.id)});function S(){const A=[...navigator.getGamepads?navigator.getGamepads():[]].find(L=>L&&L.connected);if(!A)return null;A.id!==e.padId&&(e.padId=A.id,e.padKind=xu(A.id));const E=J_(e.padKind),w=A.buttons.map(L=>L.pressed||L.value>.5),C=L=>w[L]&&!y[L],M=L=>Math.abs(L)<.2?0:(L-Math.sign(L)*.2)/.8;let _=M(A.axes[0]||0),T=M(A.axes[1]||0);w[14]&&(_=-1),w[15]&&(_=1),w[12]&&(T=-1),w[13]&&(T=1);const D=M(A.axes[2]||0);return(_||T||D||w.some(Boolean))&&s("pad"),C(E.build)&&n("build"),C(E.carry)&&n("carry"),C(E.next)&&n("next"),C(E.prev)&&n("selPrev"),C(E.nextSel)&&n("selNext"),C(E.pause)&&n("pause"),C(E.back)&&n("restart"),C(2)&&e.padKind!=="switch"&&n("next"),y=w,{x:_,z:T,look:D,zoomIn:w[E.zoomIn],zoomOut:w[E.zoomOut]}}return e.update=g=>{let A=0,E=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(A-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(A+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(E-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(E+=1);const w=S();w&&(w.x||w.z)&&(A=w.x,E=w.z),(p.x||p.z)&&(A=p.x,E=p.z);const C=Math.hypot(A,E);C>1&&(A/=C,E/=C),e.move.x=A,e.move.z=E,e.look=e.lookDelta+(w?w.look*2.2*g:0),e.lookDelta=0,w!=null&&w.zoomIn&&(e.zoom=Fa(e.zoom/(1+g*1.2),.55,4.5)),w!=null&&w.zoomOut&&(e.zoom=Fa(e.zoom*(1+g*1.2),.55,4.5))},e.labels=()=>e.device==="pad"?j_[e.padKind]:e.device==="touch"?K_:Z_,e.consume=g=>e.pressed.delete(g),e.clear=()=>{e.pressed.clear(),e.clicks.length=0},e}const Fa=(i,t,e)=>Math.max(t,Math.min(e,i));function _u(i){const[t,e]=[...i.values()].map(n=>n.e);return Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY)||1}let qe=null,nr=null,Kr=null;function t1(){if(qe){qe.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;qe=new i,nr=qe.createGain(),nr.gain.value=.5,nr.connect(qe.destination),Kr=qe.createBuffer(1,qe.sampleRate*2,qe.sampleRate);const t=Kr.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;e1()}const Ff=()=>qe?{ctx:qe,noiseBuf:Kr}:null;function Ke(i,t,{type:e="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!qe)return;const a=qe.currentTime+r,o=qe.createOscillator(),l=qe.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(nr),o.start(a),o.stop(a+t+.02)}function ls(i,{vol:t=.3,freq:e=800,q:n=.7,delay:s=0}={}){if(!qe)return;const r=qe.currentTime+s,a=qe.createBufferSource();a.buffer=Kr;const o=qe.createBiquadFilter();o.type="lowpass",o.frequency.value=e,o.Q.value=n;const l=qe.createGain();l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),a.connect(o).connect(l).connect(nr),a.start(r,Math.random()),a.stop(r+i+.02)}function e1(){const i=qe.createBufferSource();i.buffer=Kr,i.loop=!0;const t=qe.createBiquadFilter();t.type="lowpass",t.frequency.value=420;const e=qe.createGain();e.gain.value=.035;const n=qe.createOscillator(),s=qe.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(e.gain),i.connect(t).connect(e).connect(nr),i.start(),n.start()}let Mu=0;const Ye={pickup(){if(!qe)return;const i=qe.currentTime,t=i-Mu<.4?1.12:1;Mu=i,Ke(880*t+Math.random()*60,.12,{type:"triangle",vol:.12}),Ke(1320*t,.1,{type:"sine",vol:.06,delay:.04})},puff(){ls(.18,{vol:.07,freq:600,q:.3}),Ke(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)ls(.05,{vol:.1,freq:3500,delay:i*.03});Ke(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>Ke(i,.11,{type:"square",vol:.025})),Ke(98,.3,{vol:.08})},chill(){Ke(330,.5,{type:"sine",vol:.07,slide:160}),Ke(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){Ke(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){ls(.12,{vol:.12,freq:500}),Ke(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){ls(.45,{vol:.28,freq:380}),Ke(90,.35,{vol:.18,slide:-50})},horn(){Ke(196,.5,{type:"sawtooth",vol:.035}),Ke(147,.55,{type:"sine",vol:.06})},hit(){ls(.05,{vol:.08,freq:2500})},die(){Ke(420,.18,{type:"triangle",vol:.09,slide:-280}),ls(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,t)=>Ke(i,.25,{type:"triangle",vol:.1,delay:t*.06}))},upgrade(){[523,659,784,1047].forEach((i,t)=>Ke(i,.22,{type:"triangle",vol:.1,delay:t*.07}))},stone(){Ke(660,.2,{type:"sine",vol:.1,slide:200})},lose(){Ke(220,.6,{type:"sawtooth",vol:.06,slide:-120}),ls(.3,{vol:.08,freq:300})},stun(){Ke(700,.4,{type:"square",vol:.05,slide:-500})},deny(){Ke(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,t)=>Ke(i,.3,{type:"sawtooth",vol:.04,delay:t*.18}))},win(){[523,659,784,1047,1319].forEach((i,t)=>Ke(i,.4,{type:"triangle",vol:.12,delay:t*.12}))}},oc=172,Ri=60/oc/4,cs=i=>440*Math.pow(2,(i-69)/12),yu={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},tl={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},Su=[["build",8],["drop",16],["break",8],["drop",16]];function n1(i,t,e){const n=yu[e]||yu.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const a=i.createGain();a.gain.value=0,s.connect(r).connect(a).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,a.connect(o);const l={};for(const q of["drums","bass","pad","arp","lead"]){const R=i.createGain();R.gain.value=0,R.connect(s),l[q]=R}const c={};for(const q of["pad","bass"]){const R=i.createGain();R.gain.value=1,R.connect(l[q]),c[q]=R}const u=(q,R)=>{const b=i.createBuffer(2,Math.floor(i.sampleRate*q),i.sampleRate);for(let H=0;H<2;H++){const Z=b.getChannelData(H);for(let tt=0;tt<Z.length;tt++)Z[tt]=(Math.random()*2-1)*Math.pow(1-tt/Z.length,R)}return b},h=i.createConvolver();h.buffer=u(2.4,2.5);const f=i.createGain();f.gain.value=n.space,h.connect(f).connect(s);const p=i.createConvolver();p.buffer=u(.5,.4);const v=i.createGain();v.gain.value=0,p.connect(v).connect(l.drums);const x=i.createDelay(1);x.delayTime.value=Ri*3;const m=i.createGain();m.gain.value=.38;const d=i.createBiquadFilter();d.type="lowpass",d.frequency.value=2400;const y=i.createStereoPanner(),S=i.createOscillator(),g=i.createGain();S.frequency.value=oc/60/3,g.gain.value=.8,S.connect(g).connect(y.pan),S.start(),x.connect(d).connect(m).connect(x),d.connect(y).connect(l.arp);const A=i.createBiquadFilter();A.type="highpass",A.frequency.value=180;const E=i.createBiquadFilter();E.type="lowpass",E.frequency.value=n.padCut,E.Q.value=2;const w=i.createOscillator(),C=i.createGain();w.frequency.value=.07,C.gain.value=n.padCut*.45,w.connect(C).connect(E.frequency),w.start();const M=i.createDelay(.05);M.delayTime.value=.014;const _=i.createOscillator(),T=i.createGain();_.frequency.value=.5,T.gain.value=.004,_.connect(T).connect(M.delayTime),_.start();const D=i.createStereoPanner();D.pan.value=.6,A.connect(E),E.connect(c.pad),E.connect(M).connect(D).connect(c.pad),E.connect(h);const k=i.createBiquadFilter();k.type="lowpass",k.frequency.value=420,k.Q.value=6;const L=i.createOscillator(),O=i.createGain();if(L.frequency.value=oc/60/4,O.gain.value=260,L.connect(O).connect(k.frequency),L.start(),n.drive>0){const q=i.createWaveShaper(),R=new Float32Array(1024);for(let b=0;b<1024;b++){const H=b/512-1;R[b]=Math.tanh(H*(1+n.drive*6))}q.curve=R,k.connect(q).connect(c.bass)}else k.connect(c.bass);const V=i.createBiquadFilter();V.type="lowpass",V.frequency.value=3600,V.Q.value=3,V.connect(l.lead),V.connect(x),V.connect(h);const W=(q,R,b,H,Z,tt)=>{q.gain.setValueAtTime(1e-4,R),q.gain.exponentialRampToValueAtTime(H,R+b),q.gain.setValueAtTime(H,R+Math.max(b,tt-Z)),q.gain.exponentialRampToValueAtTime(1e-4,R+tt)},G=(q,R)=>{const b=i.createStereoPanner();return b.pan.value=R,q.connect(b),b},j=(q,R,b,H,Z,tt,et="bandpass",Ut=0)=>{const Mt=i.createBufferSource();Mt.buffer=t;const Pt=i.createBiquadFilter();Pt.type=et,Pt.frequency.value=b,Pt.Q.value=H;const re=i.createGain();W(re,q,.001,Z,R*.8,R),Mt.connect(Pt).connect(re);const yt=Ut?G(re,Ut):re;for(const Wt of tt)yt.connect(Wt);Mt.start(q,Math.random()*1.5),Mt.stop(q+R+.02)},nt=(q,R=1)=>{const b=i.createOscillator(),H=i.createGain();b.frequency.setValueAtTime(160,q),b.frequency.exponentialRampToValueAtTime(44,q+.11),W(H,q,.002,1*R,.2,.3),b.connect(H).connect(l.drums),b.start(q),b.stop(q+.32),j(q,.012,3500,.7,.35*R,[l.drums],"highpass");for(const Z of Object.values(c))Z.gain.cancelScheduledValues(q),Z.gain.setValueAtTime(.35,q),Z.gain.linearRampToValueAtTime(1,q+.2)},ot=(q,R=1)=>{j(q,.17,1900,.8,.5*R,[l.drums,p]);for(const[b,H,Z]of[[200,160,.3],[340,260,.14]]){const tt=i.createOscillator(),et=i.createGain();tt.type="triangle",tt.frequency.setValueAtTime(b,q),tt.frequency.exponentialRampToValueAtTime(H,q+.08),W(et,q,.001,Z*R,.06,.11),tt.connect(et).connect(l.drums),tt.start(q),tt.stop(q+.13)}v.gain.setValueAtTime(.9*R,q),v.gain.setValueAtTime(1e-4,q+.21)};let At=1;const kt=(q,R,b)=>{At=-At,j(q,b?.14:.035,9e3,.6,(b?.12:.08)*R,[l.drums],"highpass",At*.35)},it=(q,R,b)=>{for(const tt of[-n.reeseDetune,n.reeseDetune]){const et=i.createOscillator(),Ut=i.createGain();et.type="sawtooth",et.frequency.value=cs(R),et.detune.value=tt,W(Ut,q,.02,.2,.1,b),G(et.connect(Ut),tt>0?.25:-.25).connect(k),et.start(q),et.stop(q+b+.05)}const H=i.createOscillator(),Z=i.createGain();H.frequency.value=cs(R-12),W(Z,q,.02,.42,.1,b),H.connect(Z).connect(c.bass),H.start(q),H.stop(q+b+.05)},ut=(q,R,b,H=1)=>{for(const Z of R.slice(1))for(const[tt,et]of[[-9,-.6],[0,0],[8,.6]]){const Ut=i.createOscillator(),Mt=i.createGain();Ut.type=n.pad,Ut.frequency.value=cs(Z),Ut.detune.value=tt,W(Mt,q,.8,.026*H,1.4,b),G(Ut.connect(Mt),et).connect(A),Ut.start(q),Ut.stop(q+b+.1)}},Rt=(q,R,b=1)=>{const H=i.createOscillator(),Z=i.createGain();H.type="square",H.frequency.value=cs(R+n.arpOct);const tt=i.createBiquadFilter();tt.type="lowpass",tt.frequency.value=3200,W(Z,q,.003,.05*b,.08,Ri*1.6),H.connect(tt).connect(Z),Z.connect(l.arp),Z.connect(x),H.start(q),H.stop(q+Ri*2)},dt=(q,R,b,H)=>{const Z=b*Ri;for(const tt of[-6,6]){const et=i.createOscillator(),Ut=i.createGain();et.type=n.lead,H?(et.frequency.setValueAtTime(cs(H),q),et.frequency.exponentialRampToValueAtTime(cs(R),q+.05)):et.frequency.value=cs(R),et.detune.value=tt;const Mt=i.createOscillator(),Pt=i.createGain();Mt.frequency.value=5.5,Pt.gain.value=9,Mt.connect(Pt).connect(et.detune),Mt.start(q+.12),Mt.stop(q+Z+.05),W(Ut,q,.01,.07,Math.min(.12,Z*.4),Z),G(et.connect(Ut),tt>0?.2:-.2).connect(V),et.start(q),et.stop(q+Z+.05)}};let Gt=0,qt=0,$t=null,te=0,ft=.7,wt=!1,F=0;const Ht=Su.reduce((q,[,R])=>q+R,0),_t=()=>{if(te<.5)return"ambient";let q=F%Ht;for(const[R,b]of Su){if(q<b)return R;q-=b}return"drop"},Nt=()=>{const q=i.currentTime,R=(H,Z)=>{H.gain.cancelScheduledValues(q),H.gain.setTargetAtTime(Z,q,.8)},b=te;R(l.drums,.1+.85*b),R(l.bass,.3+.6*b),R(l.pad,.75-.2*b),R(l.arp,.35+.3*b),R(l.lead,.55+.35*b),a.gain.cancelScheduledValues(q),a.gain.setTargetAtTime(wt?0:ft*.8,q,.3)},Dt=q=>q%2?Ri*.12:0,ee=()=>{for(;qt<i.currentTime+.15;){const q=Gt%32,R=Math.floor(Gt/16),b=Math.floor(Gt/32)%n.chords.length,H=n.chords[b];q%16===0&&Gt>0&&te>.5&&F++;const Z=_t(),tt=qt+Dt(q),et=F%8;if(Z==="drop"||Z==="build"){const Mt=et%4===3&&q>=16?tl.FILL:et>=6?tl.B:tl.A,Pt=Z==="build"&&et<4;Mt.k[q]==="x"&&!(Pt&&q%8)&&nt(tt),Mt.s[q]==="x"&&!Pt&&ot(tt,Z==="build"?.7:1),Mt.g[q]==="x"&&ot(tt,.3),(!Pt||q%2===0)&&kt(tt,q%2?.6:1,q%8===6)}else Z==="break"?(q%4===2&&kt(tt,.6,!1),(q===0||q===16)&&nt(tt,.4)):q%4===2&&kt(tt,.45,!1);if(q===0&&(ut(tt,H,Ri*32,Z==="break"?1.3:1),it(tt,H[0],Ri*(Z==="drop"?14:30))),Z==="drop"&&q===16&&it(tt,H[0]+(b%2?3:7),Ri*14),q%n.arpRate===0&&Z!=="break"&&Rt(tt,H[1+q/n.arpRate%4]+(q>=16?12:0),Z==="ambient"?.7:1),Z==="drop"||(Z==="break"||Z==="ambient")&&Math.floor(R/4)%2===1){const Mt=n.hook.findIndex(([Pt])=>Pt===q);if(Mt>=0){const[,Pt,re]=n.hook[Mt];dt(tt,Pt+(Z==="ambient"?-12:0),re,Mt>0?n.hook[Mt-1][1]:0)}}qt+=Ri,Gt++}};return{start(){$t||(qt=i.currentTime+.1,$t=setInterval(ee,25),Nt())},stop(){clearInterval($t),$t=null,a.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity(q){q>.5&&te<=.5&&(F=0),te=q,Nt()},setVolume(q){ft=q,Nt()},setMuted(q){wt=q,Nt()},get muted(){return wt},get volume(){return ft},rms(){const q=new Float32Array(o.fftSize);return o.getFloatTimeDomainData(q),Math.sqrt(q.reduce((R,b)=>R+b*b,0)/q.length)},get intensity(){return te},get section(){return _t()},tap(q){a.connect(q)}}}const Jt={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:.4,upgradeTime:[15,20,25,30],keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,chillMax:100,stressInvuln:1,stressPush:7,airStress:10,faintTime:6,faintLoss:.25,wakeChill:.6,regen:3,regenReach:9,bagChance:.05,bagHeal:25,bagLife:20,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8]},ir={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!0,tip:"rask · bakke + luft"},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5,tip:"splash · kun bakke"},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2,tip:"bremser i ring"},bubble:{name:"Bobleblåser",cost:20,range:7,dmg:2.5,cooldown:.38,air:!0,ground:!1,trap:1.4,tip:"fanger flyvere · kun luft"},kite:{name:"Papirdrage",cost:40,range:13,dmg:5,cooldown:2.8,air:!0,ground:!1,zone:3.4,hover:2.4,tip:"sone, lang · kun luft"},pizza:{name:"Pizza-katapult",cost:55,range:14,dmg:24,cooldown:3,air:!1,splash:2.9,tip:"lang splash · kun bakke"},lamp:{name:"Lavalampe",cost:50,range:4.6,dmg:1.1,cooldown:.3,air:!0,slowTime:.5,tip:"aura, bremser alt"}},co={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0",stress:10},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0",resist:{ring:.5,chips:1.5},stress:15},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0,swoop:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a",stress:8},auditor:{name:"Revisoren",hp:70,speed:1.6,embers:8,anim:7,puff:"#9fffb0",shield:.25,resist:{lamp:1.5},info:"skjold forfra (×0,25), ikke mot aura",stress:14},complainer:{name:"Naboklageren",hp:12,speed:4.3,embers:3,anim:18,puff:"#ffb0f0",resist:{chips:.5,ring:1.5},info:"rask, mørtel bommer",stress:10},lobbyist:{name:"Lobbyisten",hp:55,speed:1.9,embers:6,anim:9,puff:"#ffe08a",splits:3,resist:{speaker:.5,pizza:1.5},noMood:!0,info:"deler seg i tre, immun mot stemning",stress:12},lobbyMini:{name:"Mini-lobbyist",hp:14,speed:2.7,embers:1,anim:14,puff:"#ffe08a",resist:{speaker:.5,pizza:1.5},noMood:!0,stress:8},drone:{name:"Overvåkings-drone",hp:9,speed:4.6,embers:1,anim:30,puff:"#c8d8ff",flying:!0,alt:3.6,resist:{bubble:1.5,lamp:1.5,kite:.5},info:"rask sverm i lufta"},balloon:{name:"Ballong-byråkraten",hp:150,speed:1.05,embers:14,anim:2,puff:"#ffffff",flying:!0,alt:5.6,resist:{bubble:.5,kite:1.5},info:"seig, høyt oppe"},heli:{name:"Mini-helikopteret",hp:48,speed:2.5,embers:7,anim:40,puff:"#ffffff",flying:!0,alt:4.6,blind:{every:6,dur:3,range:9},resist:{ring:.5,kite:1.5},info:"søkelys blender et tårn i 3 s"}},i1=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],fn=new URLSearchParams(location.search),Of=fn.has("demo");if(fn.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(yr.length))}catch{}let Rn=Number(fn.get("world"));if(!Number.isInteger(Rn))try{Rn=Number(localStorage.getItem("glod-world"))||0}catch{Rn=0}Rn=Math.max(0,Math.min(jr()-1,Rn));try{localStorage.setItem("glod-world",String(Rn))}catch{}const rn=yr[Rn],kc=d_(rn,i1);function s1(){return 1}const r1=Math.max(1,Math.min(20,Number(fn.get("speed"))||1)),ki=matchMedia("(pointer: coarse)").matches||fn.has("mobile"),lc={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:2}};let di=ki?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(di=i)}catch{}(fn.get("q")==="high"||fn.get("q")==="low")&&(di=fn.get("q"));const Jr={mobile:ki,shadow:lc[di].shadow,dprCap:lc[di].dprCap},a1={high:["rock","tree","tower","figure"],low:["rock","tree","tower","figure"]};function kf(i){const t=fn.has("ol")?fn.get("ol").split(","):a1[i];_f(Object.fromEntries(["rock","tree","tower","figure"].map(e=>[e,t.includes(e)])))}kf(di);const Bf=document.getElementById("game"),wn=new ox({canvas:Bf,antialias:!ki,powerPreference:"high-performance",preserveDrawingBuffer:fn.has("shot")});let Zi=Math.min(devicePixelRatio||1,Jr.dprCap);wn.setPixelRatio(Zi);wn.shadowMap.enabled=!0;wn.shadowMap.type=Pu;wn.toneMapping=pc;let xs="dag";try{xs=localStorage.getItem("glod-tid")||"dag"}catch{}fn.get("tid")&&(xs=fn.get("tid"));const Hn=xs==="skumring"&&rn.skyDusk?rn.skyDusk:rn.sky;wn.toneMappingExposure=Hn.exposure;wn.info.autoReset=!1;const Ae=new lx,Gf=new Ct(Hn.fog);Ae.background=Gf;Ae.fog=new Rc(Gf,...rn.fog??[55,115]);const $e=new kn(38,1,.5,200),o1=new Hx(Hn.hemiSky,Hn.hemiGround,Hn.hemi);Ae.add(o1);const hn=new qx(Hn.sun,Hn.sunI);hn.castShadow=!0;hn.shadow.mapSize.set(Jr.shadow,Jr.shadow);Object.assign(hn.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});hn.shadow.bias=-8e-4;hn.shadow.normalBias=.03;Ae.add(hn,hn.target);Jx(Ae);const Yt=P_(Ae,Jr,rn);Yt.grass.setLevel(di);const l1=Y_(Ae,Yt,Jr,rn,xs,$e),Dn=$_(Yt);window.__nav=Dn;const Ge=zf(Ae,ki?450:800),gr=zf(Ae,ki?120:220,{blending:Ji,size:1.6,opacity:.45,fadeTo:Hn.fog}),ia=q_(wn,Ae,$e,Hn.grade);ia.setLevel(di);const ve=Q_(Bf);function sa(){const i=innerWidth,t=innerHeight;wn.setSize(i,t,!1),$e.aspect=i/t,$e.updateProjectionMatrix(),ia.setSize(i,t),Kx(ki?2:2.2,wn.getPixelRatio(),i,t)}function Vf(i){di=i;try{localStorage.setItem("glod-quality",i)}catch{}const t=lc[i];hn.shadow.mapSize.set(t.shadow,t.shadow),hn.shadow.map&&(hn.shadow.map.dispose(),hn.shadow.map=null),Zi=Math.min(devicePixelRatio||1,t.dprCap),wn.setPixelRatio(Zi),ia.setLevel(i),Yt.grass.setLevel(i),kf(i),sa(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",sa);sa();const J={phase:"title",wave:0,timer:0,embers:Jt.startEmbers,lights:pr,spawnQueue:[],leaks:{},seen:{},time:0,sel:0,paused:!1},el=Jt.upgradeTime.length+1,$i=["ring","chips","speaker","bubble","kite","pizza","lamp"];let Ii=rn.camYaw??0;const bu=new Yx,Ln=[],Vn=[],ri=[],ms=[],sr=[],Gr=[],an=na(__(),"figure"),z={x:Yt.lighthouse.pos.x+1,z:Yt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:Jt.chillMax,inv:0,faint:0,faints:0};an.position.set(z.x,Yt.heightAt(z.x,z.z),z.z);Ae.add(an);const Hf=Hn.lantern??2.6,Bc=new $r("#ffcf70",Hf,6,1.8);Bc.position.set(.8,.45,-.3);an.add(Bc);const de=i=>document.getElementById(i),nn={chill:de("hud-chill"),lights:de("hud-lights"),embers:de("hud-embers"),wave:de("hud-wave"),timer:de("hud-timer")},zi=de("hint"),xi=de("build-panel"),Gc=de("btn-next"),Vc=de("fps");fn.has("debug")||Vc.classList.add("hidden");let Oi={};function Wn(i,t,e,n){Oi[t]!==e&&(Oi[t]=e,i.querySelector("b").textContent=e,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const c1=4;let Wf=0;function wu(i){if(zi.textContent===i)return;zi.textContent=i,Wf=0,zi.classList.remove("faded");const t=xi.classList.contains("hidden")?null:xi.getBoundingClientRect();zi.style.bottom=t&&t.height?`${Math.round(innerHeight-t.top+6)}px`:""}function h1(i){(Wf+=i)>c1&&zi.classList.add("faded")}function Xf(i){J.phase="prep",J.timer=i,Gc.classList.remove("hidden"),u1()}function u1(){const i=J.wave+1,t=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);J.spawnPoints=Dn.coastPoints(t,24),J.spawnPoints.length||(J.spawnPoints=Dn.coastPoints(t,8,{near:12,minFrac:.5})),J.spawnPoints.length||(J.spawnPoints=Dn.roadEnds().slice(0,t)),m1()}function qf(){J.wave+=1,J.phase="wave",Gc.classList.add("hidden"),J.spawnQueue=[];for(const i of kc[J.wave-1]){const t=J.wave<=Jt.earlyScale.length?J.wave-1:-1,e=J.spawnPoints.length,n=co[i.type].flying?rn.balance.air??1:1,s=Math.max(1,Math.round(i.n*(rn.balance.count||1)*n*(t>=0?Jt.earlyScale[t]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,e));for(let a=0;a<e;a++)for(let o=0;o<r;o++)J.spawnQueue.push({t:(i.at??0)+o*i.gap+a*.3,type:i.type,path:a})}else{const r=i.path??0;for(let a=0;a<s;a++)J.spawnQueue.push({t:(i.at??0)+a*i.gap,type:i.type,path:(r+a%2)%e})}}J.spawnQueue.sort((i,t)=>i.t-t.t),J.waveClock=0,Ye.wave(),Oe==null||Oe.setIntensity(1),Wn(nn.wave,"wave",J.wave,"bump")}function Hc(i,t){var l,c;const e=co[i],n=na(M_(i),"figure"),s=e.hp*(1+Jt.hpGrowth*(J.wave-1))*rn.balance.hp*(((c=(l=rn.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*s1(),r={type:i,def:e,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:rn.balance.speed*(e.flying?rn.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4};r.var=.95+Math.random()*.1,r.speedMul*=.95+Math.random()*.1,n.scale.setScalar(r.var),r.blinkT=Math.random()*4;const a=J.spawnPoints[t%J.spawnPoints.length]||[0,50],o=Yt.lighthouse.pos;if(e.flying){const u=Math.atan2(a[1]-o.z,a[0]-o.x)+(Math.random()-.5)*.5,h=o.x+Math.cos(u)*66,f=o.z+Math.sin(u)*66;r.x=h,r.z=f,r.y=e.alt||4,r.dist0=Math.hypot(o.x-h,o.z-f),r.hitCd=0}else r.x=a[0]+(Math.random()-.5)*1.5,r.z=a[1]+(Math.random()-.5)*1.5,r.y=Yt.heightAt(r.x,r.z),r.remain=Dn.at(r.x,r.z);return n.position.set(r.x,r.y,r.z),Ae.add(n),Ln.push(r),!J.seen[i]&&i!=="lobbyMini"&&(J.seen[i]=!0,f1(r)),r}const cc={ring:"💨",chips:"🥔",speaker:"🔊",bubble:"🫧",kite:"🪁",pizza:"🍕",lamp:"🌋"};function Yf(i){const t=Object.entries(i.resist||{}),e=t.filter(([,s])=>s<1).map(([s])=>cc[s]).join(""),n=t.filter(([,s])=>s>1).map(([s])=>cc[s]).join("");return{tough:e+(i.shield?"📒":""),weak:n}}const Li=[],ho=document.createElement("div");ho.id="tags";document.body.appendChild(ho);function f1(i){const{tough:t,weak:e}=Yf(i.def),n=document.createElement("div");n.className="enemy-tag",n.innerHTML=`<b>${i.def.flying?"🪶":"🐾"} ${i.def.name}</b>${t?`<span>🛡️${t}</span>`:""}${e?`<span>💥${e}</span>`:""}`,ho.appendChild(n),Li.push({m:i,el:n,t:0}),(J.wave>1||i.def.flying)&&sn(`Ny fiende: ${i.def.name}${t?` · tåler ${t}`:""}${e?` · svak mot ${e}`:""}`)}function d1(i){var n;const t=Li.length?de("hud").getBoundingClientRect().bottom:0;for(let s=Li.length-1;s>=0;s--){const r=Li[s];r.age=(r.age||0)+i,Ue.set(r.m.x,r.m.y+(((n=r.m.mesh.userData.hpBar)==null?void 0:n.position.y)??2.2)+.5,r.m.z).project($e);const a=Ue.z<1&&Math.abs(Ue.x)<1&&Math.abs(Ue.y)<1;r.el.style.display=a?"flex":"none",a&&(r.t+=i);const o=r.el.offsetWidth,l=r.el.offsetHeight;r.x=Math.min(Math.max((Ue.x*.5+.5)*innerWidth,o/2+6),innerWidth-o/2-6),r.y=Math.max((-Ue.y*.5+.5)*innerHeight,t+l+6),r.w=o,r.h=l,r.on=a,r.el.style.opacity=String(Math.min(1,(6-r.t)/.6)),(r.t>6||r.age>90||!r.m.alive)&&(r.el.remove(),Li.splice(s,1))}const e=[];for(const s of Li.filter(r=>r.on).sort((r,a)=>r.y-a.y)){let r=!0;for(let a=0;r&&a<8;a++){r=!1;for(const o of e)Math.abs(s.x-o.x)<(s.w+o.w)/2+4&&s.y>o.y-o.h-3&&s.y-s.h<o.y+3&&(s.y=o.y+s.h+4,r=!0)}e.push(s)}for(const s of Li)s.on&&(s.el.style.left=`${s.x}px`,s.el.style.top=`${s.y}px`)}function p1(i){return i.def.flying?1-Math.hypot(Yt.lighthouse.pos.x-i.x,Yt.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??Dn.maxDist)/Dn.maxDist)}const $a=[],_s=document.createElement("div");_s.id="warn";document.body.appendChild(_s);function m1(){for(const e of $a)Ae.remove(e);$a.length=0,_s.innerHTML="";for(const[e,n]of J.spawnPoints){const s=new oe($f,new De({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));s.position.set(e,Math.max(Yt.heightAt(e,n),.08)+.1,n);const r=new oe(g1,new De({color:"#ff8a3a",transparent:!0,opacity:.35,blending:fi,depthWrite:!1,fog:!1}));r.position.y=4,s.add(r),Ae.add(s),$a.push(s);const a=document.createElement("div");a.className="warn-arrow",a.innerHTML='<span class="arr">➤</span><span class="kind"></span>',_s.appendChild(a)}const i=J.spawnPoints.length,t=J.spawnPoints.map(()=>({air:!1,ground:!1}));for(const e of kc[J.wave]||[]){const n=e.path==="both"?t.map((s,r)=>r):[(e.path??0)%i,((e.path??0)+1)%i];for(const s of n)t[s][co[e.type].flying?"air":"ground"]=!0}t.forEach((e,n)=>{var r;const s=(r=_s.children[n])==null?void 0:r.querySelector(".kind");s&&(s.textContent=(e.air?"🪶":"")+(e.ground?"🐾":""))})}const $f=new es(1.6,2.2,32);$f.rotateX(-Math.PI/2);const g1=new Xe(.5,1.4,8,12,1,!0);function v1(){var a;const i=J.phase==="prep"||J.phase==="wave"&&J.waveClock<8,t=_s.children,e=i&&!xi.classList.contains("hidden")?xi.getBoundingClientRect():null,n=e&&zi.textContent&&!zi.classList.contains("faded"),s=i?de("hud").getBoundingClientRect().bottom:0;_s.style.visibility=ho.style.visibility=J.paused?"hidden":"";const r=e?n?Math.min(e.top,zi.getBoundingClientRect().top):e.top:0;(a=J.spawnPoints)==null||a.forEach(([o,l],c)=>{const u=$a[c],h=t[c];if(!u||!h)return;u.visible=i;const f=.5+.5*Math.sin(J.time*6);u.scale.setScalar(1+f*.35),u.material.opacity=.35+.5*f,Ue.set(o,u.position.y,l).project($e);const p=Math.abs(Ue.x)>.92||Math.abs(Ue.y)>.88||Ue.z>1;if(h.style.display=i?"block":"none",h.classList.toggle("onscreen",!p),i&&!p&&(h.style.left=`${(Ue.x*.5+.5)*innerWidth}px`,h.style.top=`${Math.max((-Ue.y*.5+.5)*innerHeight-30,s+30)}px`,h.style.transform="translate(-50%, -50%)",h.firstChild.style.transform=""),i&&p){let v=Ue.x,x=Ue.y;Ue.z>1&&(v=-v,x=-x);const m=Math.atan2(-x,v),d=Math.max(Math.abs(v),Math.abs(x))||1,y=xe.clamp(v/d,-1,1),S=xe.clamp(x/d,-1,1),g=(y*.46+.5)*innerWidth;let A=(-S*.44+.5)*innerHeight;e&&g>e.left-24&&g<e.right+24&&A>r-24&&(A=r-24),A=Math.max(A,s+30),h.style.left=`${g}px`,h.style.top=`${A}px`,h.style.transform=`translate(-50%, -50%) scale(${1+f*.25})`,h.firstChild.style.transform=`rotate(${m}rad)`}})}function gs(i,t,e){var n;if(i.alive){if(e&&(t*=((n=i.def.resist)==null?void 0:n[e.type])??1,i.def.shield&&e.type!=="lamp")){const s=e.x-i.x,r=e.z-i.z,a=Math.hypot(s,r)||1,o=Math.hypot(i.hx||0,i.hz||0)||1;(s*(i.hx||0)+r*(i.hz||0))/(a*o)>.35&&(t*=i.def.shield,Math.random()<.3&&Ge.emit(i.x,i.y+1,i.z,{n:2,color:"#d8c890",speed:1.5,up:1,life:.3}))}i.hp-=t,i.hitT=.18,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&x1(i)}}function x1(i){i.alive=!1,i.chillT=0,y_(i),Gr.push(i),Ge.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),Ye.chill(),Wc(i.x,i.y+.5,i.z,i.def.embers,i.def.flying),!i.def.flying&&Math.random()<Jt.bagChance&&jf(i.x,i.z);for(let t=0;t<(i.def.splits||0);t++){const e=Hc("lobbyMini",0);e.x=i.x+(t-1)*.6,e.z=i.z+(t%2?.5:-.5),e.y=Yt.heightAt(e.x,e.z),e.mesh.position.set(e.x,e.y,e.z)}}function _1(i){var t;for(let e=Gr.length-1;e>=0;e--){const n=Gr[e];n.chillT+=i;const s=n.chillT,r=n.mesh.userData.body;if(n.def.flying)n.y+=i*2.5,n.z+=i*3,(t=n.mesh.userData.wings)==null||t.forEach((o,l)=>o.rotation.z=Math.sin(s*6)*.4*(l?-1:1));else if(s<1.4){const o=Math.min(1,s/.4);r.position.y=-.25*o*(n.type==="tank"?1.3:1),r.rotation.x=.25*o,r.rotation.z=Math.sin(s*3)*.05}else{r.rotation.x=0,r.position.y=Math.abs(Math.sin(s*7))*.06;const[o,l]=Dn.dir(n.x,n.z),c=n.x-o*n.def.speed*.45*i,u=n.z-l*n.def.speed*.45*i;Yt.isWalkable(c,u)&&(n.x=c,n.z=u),n.y=Yt.heightAt(n.x,n.z),(o||l)&&(n.mesh.rotation.y=Math.atan2(o,l))}Math.random()<i*1.5&&Ge.emit(n.x,n.y+1.8,n.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4}),s>2.6&&!n.popped&&(n.popped=!0,gr.emit(n.x,n.y+.8,n.z,{n:8,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}));const a=Math.max(0,Math.min(1,(3.2-s)/.6));n.mesh.scale.setScalar(a*(n.var||1)*(s>2.6?1+Math.sin((s-2.6)*10)*.08:1)),n.mesh.position.set(n.x,n.y,n.z),s>3.2&&(Ae.remove(n.mesh),Gr.splice(e,1))}}function Wc(i,t,e,n,s=!1,r=1){const a=Math.min(n,n>=6?3:n>=3?2:1);let o=n;for(let l=0;l<a;l++){const c=l===a-1?o:Math.ceil(n/a);o-=c;const u=b_(),h=Math.random()*Math.PI*2,f=(1.2+Math.random()*1.8)*r,p={mesh:u,x:i,y:t,z:e,vx:Math.cos(h)*f,vz:Math.sin(h)*f,vy:5+Math.random()*2,life:Jt.emberLife,value:c,settled:!1,phase:Math.random()*6};u.scale.setScalar(.8+Math.min(c,6)*.08),Ae.add(u),ms.push(p)}}function Qr(i,t,e,n,s=()=>!0){let r=null,a=n;for(const o of i){if(!s(o))continue;const l=Math.hypot(o.x-t,o.z-e);l<a&&(a=l,r=o)}return r}function Xc(){const i=Qr(Yt.plinths,z.x,z.z,Jt.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const t=-Math.sin(z.face),e=-Math.cos(z.face),n=z.x+t*Jt.placeAhead,s=z.z+e*Jt.placeAhead,r=Yt.heightAt(n,s),a=Yt.lighthouse.pos;let o="";return r<.35?o="i vannet":Yt.extras.blocks(n,s)?o="i lavaen":Yt.pathDist(n,s)<1.9?o="på stien":Yt.slopeAt(n,s)>.6?o="for bratt":Math.hypot(n-a.x,s-a.z)<5.5?o="for nær fyret":Vn.some(l=>Math.hypot(l.x-n,l.z-s)<Jt.minTowerGap)?o="for nær et annet tårn":Yt.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?o="oppå en sokkel (gå helt bort til den)":Yt.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(o="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!o,why:o}}function Ka(i){const t=Xc();if(!t.ok){Ye.deny(),sn(`Ikke lov å bygge her: ${t.why}`);return}const e=ir[i];if(J.embers<e.cost){Ye.deny(),sn(`Trenger ${e.cost} ✦ glør`),Wn(nn.embers,"embersBad",Math.random(),"bad");return}J.embers-=e.cost;const n=na(S_(i),"tower");if(n.position.set(t.x,t.y,t.z),!t.plinth){const r=new oe(M1,y1);r.position.y=.04,r.receiveShadow=!0,n.add(r)}Ae.add(n);const s={type:i,def:e,mesh:n,x:t.x,z:t.z,y:t.y,level:1,cd:.3,plinth:t.plinth,onPlinth:!!t.plinth};t.plinth&&(t.plinth.tower=s),Vn.push(s),Yt.colliders.push({x:t.x,z:t.z,r:1,tower:s}),Ge.emit(t.x,t.y+.3,t.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),Ye.build(),J.buildMode=!1,t.plinth&&sn(`${e.name} på gammel sokkel: +25 % rekkevidde`)}const M1=new Xe(.95,1.05,.12,10),y1=new We({color:"#8a8478"}),Ui=new be;{const i=new oe(new ur(1,24),new De({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const t=new es(.965,1,64);t.rotateX(-Math.PI/2);const e=new oe(t,new De({transparent:!0,opacity:.6,depthWrite:!1})),n=new oe(new Xe(.55,.7,1.6,10),new De({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,Ui.add(i,e,n),Ui.userData={disc:i,ring:e,pillar:n},Ui.visible=!1,Ui.renderOrder=20,Ae.add(Ui)}function S1(i,t,e){if(Ui.visible=i,!i)return;const n=t.ok,s=n?t.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=ir[e].range*(t.plinth?Jt.plinthBonus:1);Ui.position.set(t.x,t.y+.06,t.z);const a=Ui.userData;for(const o of[a.disc,a.ring,a.pillar])o.material.color.set(s);a.ring.scale.setScalar(r),a.ring.visible=n,a.pillar.visible=!t.plinth}const Pi=(i,t)=>{const e=i.level-1;return t==="range"?i.def.range*(1+.12*e)*(i.onPlinth?Jt.plinthBonus:1):t==="dmg"?i.def.dmg*[1,1.7,2.6,3.9,5.85][e]:t==="rate"?i.def.cooldown/(1+.15*e):i.def[t]};function b1(i){for(const t of Vn){if(t.cd-=i,t.upg){const c=z.stun<=0&&Math.hypot(z.x-t.x,z.z-t.z)<Jt.reach+.3;c?t.upg.t+=i:t.upg.t>0&&(t.upg.t=0,uo("😩"),sn(`Rullingen ble avbrutt! Start på nytt ved ${t.def.name}`)),Zr(t,Math.min(1,t.upg.t/t.upg.dur)),c&&Math.random()<i*8&&Ge.emit(z.x,an.position.y+2.2,z.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),t.upg.t>=t.upg.dur&&(t.upg=null,t.level+=1,Rf(t,t.level),Zr(t,0),Ge.emit(t.x,t.y+1.2,t.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Ye.upgrade(),sn(`${t.def.name} er nå nivå ${t.level}`))}if(t.armBack>0&&(t.armBack-=i,t.armBack<=0&&(t.mesh.userData.arm.rotation.x=-.35)),t.type==="lamp"&&t.mesh.userData.blobs.forEach((c,u)=>c.position.y=.75+Math.sin(J.time*.8+u*2.1)*.35),t.blind>0){t.blind-=i,Math.random()<i*8&&Ge.emit(t.x,t.y+2,t.z,{n:1,color:"#fff6c8",speed:.6,up:.8,life:.5,gravity:-.4});continue}const e=Pi(t,"range");let n=null,s=-1;for(const c of Ln){if(!c.alive||(c.def.flying?!t.def.air:t.def.ground===!1)||Math.hypot(c.x-t.x,c.z-t.z)>e)continue;const u=p1(c);u>s&&(s=u,n=c)}const r=t.mesh.userData.head;if(t.type==="speaker"){const c=Math.max(0,Math.sin(J.time*7.3));r.rotation.z=Math.sin(J.time*3.65)*.05,t.mesh.userData.woofers.forEach(u=>u.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=uc(Math.atan2(-(n.x-t.x),-(n.z-t.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-t.x),-(n.z-t.z));r.rotation.y+=uc(c,r.rotation.y)*Math.min(1,i*10)}if(!n||t.cd>0)continue;t.cd=Pi(t,"rate");const a=t.x,o=t.y+1.4*t.mesh.scale.y,l=t.z;if(t.type==="ring"){const c=w_();c.position.set(a,o-.3,l),Ae.add(c),ri.push({kind:"bolt",src:t,mesh:c,target:n,dmg:Pi(t,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),Ye.puff()}else if(t.type==="chips"){const c=Pf();c.position.set(a,t.y+1,l),Ae.add(c);const[u,h]=n.def.flying?[0,0]:Dn.dir(n.x,n.z),f=n.x+u*n.def.speed*.6,p=n.z+h*n.def.speed*.6;ri.push({kind:"shell",src:t,mesh:c,sx:a,sy:t.y+1,sz:l,ex:f,ez:p,ey:Yt.heightAt(f,p),t:0,dur:.95,dmg:Pi(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),Ge.emit(a,t.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),Ye.mortar()}else if(t.type==="speaker"){for(const u of Ln)!u.alive||Math.hypot(u.x-t.x,u.z-t.z)>e||(u.def.noMood||(u.slow=t.def.slowTime),gs(u,Pi(t,"dmg"),t));const c=Df();c.position.set(t.x,t.y+.3,t.z),Ae.add(c),sr.push({mesh:c,t:0,r:e}),Ge.emit(t.x,t.y+1.8,t.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),Ye.skank()}else if(t.type==="bubble"){const c=If();c.position.set(a,o+.2,l),Ae.add(c),ri.push({kind:"bubble",src:t,mesh:c,target:n,dmg:Pi(t,"dmg"),trap:t.def.trap,tx:n.x,ty:n.y,tz:n.z}),Ye.pickup()}else if(t.type==="kite"){if(ri.some(u=>u.kind==="kite"&&u.tower===t)){t.cd=.2;continue}const c=na(Lf(),"tower");c.position.set(a,o,l),Ae.add(c),ri.push({kind:"kite",mesh:c,tower:t,sx:a,sz:l,tx:n.x,tz:n.z,phase:"out",t:0,tick:0,dmg:Pi(t,"dmg"),zone:t.def.zone*(1+.1*(t.level-1)),hover:t.def.hover}),Ye.puff()}else if(t.type==="pizza"){const c=T_();c.position.set(a,t.y+1.2,l),Ae.add(c);const[u,h]=Dn.dir(n.x,n.z),f=n.x+u*n.def.speed*1.1,p=n.z+h*n.def.speed*1.1;ri.push({kind:"shell",src:t,pizza:!0,mesh:c,sx:a,sy:t.y+1.2,sz:l,ex:f,ez:p,ey:Yt.heightAt(f,p),t:0,dur:1.3,arc:7,dmg:Pi(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),t.mesh.userData.arm.rotation.x=.9,t.armBack=.5,Ye.mortar()}else if(t.type==="lamp"){for(const c of Ln)!c.alive||Math.hypot(c.x-t.x,c.z-t.z)>e||(c.slow=Math.max(c.slow,t.def.slowTime),gs(c,Pi(t,"dmg"),t));Math.random()<.3&&Ge.emit(t.x,t.y+1.6,t.z,{n:2,color:"#ff9a3a",speed:.8,up:1.2,life:.8,gravity:-.3})}}}function w1(i){var t;for(let e=ri.length-1;e>=0;e--){const n=ri[e];let s=!1;if(n.kind==="bolt"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y+(n.target.def.flying?0:.5),n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),u=18*i;n.age+=i,n.mesh.lookAt(n.tx,n.ty,n.tz),n.mesh.scale.setScalar(.7+n.age*2.2),c<=u+.3?(s=!0,n.target.alive&&(gs(n.target,n.dmg,n.src),gr.emit(n.tx,n.ty+.3,n.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),Ye.hit())):r.set(r.x+a/c*u,r.y+o/c*u,r.z+l/c*u)}else if(n.kind==="shell"){n.t+=i/n.dur;const r=Math.min(1,n.t);if(n.mesh.position.set(n.sx+(n.ex-n.sx)*r,n.sy+(n.ey-n.sy)*r+Math.sin(Math.PI*r)*(n.arc||5),n.sz+(n.ez-n.sz)*r),n.mesh.rotation.set(r*9,r*5,0),n.t>=1){s=!0;for(const a of Ln){if(!a.alive||a.def.flying)continue;const o=Math.hypot(a.x-n.ex,a.z-n.ez);o<n.splash&&gs(a,n.dmg*(o<n.splash*.4?1:.6),n.src)}Ge.emit(n.ex,n.ey+.3,n.ez,{n:26,color:n.pizza?"#ff7040":"#ffd060",speed:5,up:5,life:.7,gravity:12}),gr.emit(n.ex,n.ey+.3,n.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),Ye.crunch(),Yn=Math.max(Yn,.12)}}else if(n.kind==="bubble"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y,n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),u=13*i;n.mesh.scale.setScalar(1+Math.sin(J.time*12)*.06),c<=u+.3?(s=!0,n.target.alive&&(gs(n.target,n.dmg,n.src),n.target.trap=Math.max(n.target.trap||0,n.trap*Math.min(1,((t=n.target.def.resist)==null?void 0:t.bubble)??1))),Ge.emit(n.tx,n.ty,n.tz,{n:6,color:"#dff6ff",speed:2,up:1,life:.35})):r.set(r.x+a/c*u,r.y+o/c*u,r.z+l/c*u)}else if(n.kind==="kite"){n.t+=i;const r=n.mesh.position;if(n.mesh.userData.tailSegs.forEach((a,o)=>{a.rotation.x=Math.sin(J.time*5-o*.9)*.35,a.rotation.z=Math.sin(J.time*3.7-o*.7)*.25}),Vn.includes(n.tower)||(n.phase="back"),n.phase==="out"){const a=n.tx-r.x,o=n.tz-r.z,l=Math.hypot(a,o),c=9*i;r.y+=(4.2-r.y)*Math.min(1,i*2),l<c?(n.phase="hover",n.t=0):(r.x+=a/l*c,r.z+=o/l*c)}else if(n.phase==="hover"){if(r.x=n.tx+Math.sin(J.time*1.7)*.6,r.z=n.tz+Math.cos(J.time*1.3)*.4,r.y=4.2+Math.sin(J.time*2.3)*.3,n.tick-=i,n.tick<=0){n.tick=.25;for(const a of Ln)a.alive&&a.def.flying&&Math.hypot(a.x-r.x,a.z-r.z)<n.zone&&(gs(a,n.dmg*.4,n.tower),a.slow=Math.max(a.slow,.4));Ge.emit(r.x,r.y-.3,r.z,{n:2,color:"#ffd0b0",speed:1.5,up:-.5,life:.5,gravity:0})}n.t>n.hover&&(n.phase="back")}else{const a=n.sx-r.x,o=n.sz-r.z,l=Math.hypot(a,o),c=11*i;l<c?s=!0:(r.x+=a/l*c,r.z+=o/l*c)}n.mesh.rotation.set(Math.sin(J.time*3)*.2,J.time*.5,Math.cos(J.time*2.5)*.25)}s&&(Ae.remove(n.mesh),ri.splice(e,1))}for(let e=sr.length-1;e>=0;e--){const n=sr[e];n.t+=i/(n.dur||.6),n.mesh.scale.setScalar(.5+n.t*n.r),n.mesh.material.opacity=.7*(1-n.t),n.t>=1&&(Ae.remove(n.mesh),n.mesh.material.dispose(),sr.splice(e,1))}}function E1(i){var t,e;for(const n of Ln){if(!n.alive)continue;n.phase+=i*n.def.anim;const s=n.slow>0?.5:1;n.slow-=i;let r=n.def.speed*s*(n.speedMul||1);n.trap>0?(n.trap-=i,r*=.15,n.bubbleFx||(n.bubbleFx=If(),n.bubbleFx.scale.setScalar(3.2),n.mesh.add(n.bubbleFx)),n.bubbleFx.visible=!0):n.bubbleFx&&(n.bubbleFx.visible=!1);const a=n.mesh.userData.body;if(n.def.flying){const l=Yt.lighthouse.pos;let c=l.x-n.x,u=l.z-n.z;const h=Math.hypot(z.x-n.x,z.z-n.z);let f=n.trap>0?1.1:n.def.alt||4.2;if(n.def.swoop&&h<6&&z.stun<=0&&n.hitCd<=0&&!(n.trap>0)){const y=Math.hypot(c,u);c=c/y*.5+(z.x-n.x)/h*.9,u=u/y*.5+(z.z-n.z)/h*.9,f=1.5}n.hitCd-=i;const p=Math.hypot(c,u)||1,v=Math.cos(J.time*1.3+n.lane*4)*(n.type==="balloon"?.4:1.2);n.x+=(c/p+-u/p*v*.35)*r*i,n.z+=(u/p+c/p*v*.35)*r*i,n.mesh.rotation.z=-v*(n.type==="balloon"?.05:.25);const x=Math.max(Yt.heightAt(n.x,n.z),0);n.y+=(x+f-n.y)*Math.min(1,i*2.5);const m=n.mesh.userData.blob;m&&(m.position.y=(x-n.y)/n.var+.05,m.material.opacity=1,m.scale.setScalar(1)),n.mesh.rotation.y=Math.atan2(-c,-u);const d=n.mesh.userData;if((t=d.wings)==null||t.forEach((y,S)=>y.rotation.z=Math.sin(n.phase)*.45*(S?-1:1)),(e=d.rotors)==null||e.forEach(y=>y.rotation.y+=i*40),d.rotor&&(d.rotor.rotation.y+=i*30,d.tail.rotation.x+=i*30),a.position.y=Math.sin(n.phase*.5)*(n.type==="balloon"?.3:.15),n.def.blind&&(n.blindCd=(n.blindCd??n.def.blind.every*.5)-i,d.beam&&(d.beam.visible=n.blindCd>n.def.blind.every-.8),n.blindCd<=0)){n.blindCd=n.def.blind.every;const y=Qr(Vn,n.x,n.z,n.def.blind.range);y&&(y.blind=n.def.blind.dur,sn(`${n.def.name} blendet ${y.def.name}!`)),Math.hypot(z.x-n.x,z.z-n.z)<5&&hc(Jt.airStress,n.x,n.z,!0)}n.def.swoop&&h<1.3&&Math.abs(n.y-an.position.y-1)<1.4&&z.stun<=0&&n.hitCd<=0&&C1(n),Math.hypot(l.x-n.x,l.z-n.z)<3.4&&Eu(n)}else{const[l,c,u]=Dn.dir(n.x,n.z);n.remain=u;const h=Yt.lighthouse.pos,f=Math.hypot(h.x-n.x,h.z-n.z);if(f<4.3||u<.6){Eu(n);continue}let p=l,v=c;!p&&!v&&(p=(h.x-n.x)/f,v=(h.z-n.z)/f),n.hx=(n.hx||0)+(p-(n.hx||0))*Math.min(1,i*6),n.hz=(n.hz||0)+(v-(n.hz||0))*Math.min(1,i*6);const x=Math.hypot(n.hx,n.hz)||1,m=n.lane*Math.min(1,f/10);if(n.x+=n.hx/x*r*i+-n.hz/x*m*i*.5,n.z+=n.hz/x*r*i+n.hx/x*m*i*.5,n.y=Yt.heightAt(n.x,n.z),n.mesh.rotation.y=Math.atan2(-n.hx,-n.hz),z.inv<=0&&z.faint<=0&&Math.abs(z.x-n.x)<1.2&&Math.abs(z.z-n.z)<1.2&&Math.hypot(z.x-n.x,z.z-n.z)<1.1&&hc(n.def.stress??10,n.x,n.z),n.type==="clerk")a.position.y=Math.abs(Math.sin(n.phase))*.12,a.rotation.z=Math.sin(n.phase)*.06,n.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(n.phase*.5))*.25;else if(n.type==="tank"){const d=Math.abs(Math.sin(n.phase));a.position.y=d*.05,a.rotation.z=Math.sin(n.phase)*.07;const y=Math.pow(1-d,6);a.scale.set(1+y*.06,1-y*.08,1+y*.06)}else n.type==="swarm"?(a.position.y=Math.abs(Math.sin(n.phase))*.14,a.rotation.y=Math.sin(n.phase*.5)*.3):n.type==="complainer"?(a.position.y=Math.abs(Math.sin(n.phase))*.16,n.mesh.userData.arm.rotation.z=Math.sin(n.phase*.5)*.4):n.type==="lobbyist"||n.type==="lobbyMini"?(a.position.y=Math.abs(Math.sin(n.phase))*.05,a.rotation.z=Math.sin(n.phase*.5)*.17):n.type==="auditor"?(a.position.y=Math.abs(Math.sin(n.phase))*.03,a.rotation.z=0):(a.position.y=Math.abs(Math.sin(n.phase))*.08,a.rotation.z=Math.sin(n.phase)*.05)}if(n.hitT>0){n.hitT-=i;const l=Math.max(0,n.hitT)/.18;a.scale.set(1+l*.16,1-l*.16,1+l*.16),a.position.z=l*.15,n.hitT<=0&&(a.scale.set(1,1,1),a.position.z=0)}n.blinkT-=i,n.blinkT<-.12&&(n.blinkT=2+Math.random()*3.5);for(const l of n.mesh.userData.eyes)l.scale.y=n.blinkT<0?.12:1;n.mesh.position.set(n.x,n.y,n.z),n.slow>0&&Math.random()<i*6&&Ge.emit(n.x,n.y+.8,n.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const o=n.mesh.userData.hpBar;if(o.visible){o.quaternion.copy($e.quaternion),o.quaternion.premultiply(n.mesh.quaternion.clone().invert());const l=Math.max(0,n.hp/n.maxHp),c=n.mesh.userData.hpFg;c.scale.x=.96*l,c.position.x=-.48*(1-l),c.material.color.setHSL(.33*(1-l),.7,.55)}}for(let n=Ln.length-1;n>=0;n--)Ln[n].alive||Ln.splice(n,1)}function Eu(i){J.leaks[i.type]=(J.leaks[i.type]||0)+1,i.alive=!1,Ae.remove(i.mesh),J.lights=Math.max(0,J.lights-1),Yt.lighthouse.setLights(J.lights),Wn(nn.lights,"lights",J.lights,"bad");const t=Yt.lighthouse.flamePos();gr.emit(t.x,t.y,t.z,{n:10,color:"#b8b4b0",speed:.8,up:1.6,life:1.8,gravity:-.4}),Ge.emit(t.x,t.y,t.z,{n:14,color:"#8a8580",speed:1.6,up:.6,life:1.6,gravity:4}),sn(`${i.def.name} slukket litt glød!`),Ye.lose(),Yn=.3,J.lights<=0&&Kf(!1)}const rr=[],ci=document.createElement("div");ci.id="chillbar";ci.innerHTML="<i></i>";document.body.appendChild(ci);let Tu=0;function uo(i){const t=document.createElement("div");t.className="pop-emoji",t.textContent=i,Ue.set(z.x,an.position.y+2.6,z.z).project($e),t.style.left=`${(Ue.x*.5+.5)*innerWidth}px`,t.style.top=`${(-Ue.y*.5+.5)*innerHeight}px`,document.body.appendChild(t),setTimeout(()=>t.remove(),900)}function hc(i,t,e,n=!1){if(!(z.faint>0||z.inv>0)){if(z.chill=Math.max(0,z.chill-i),z.inv=Jt.stressInvuln,z.flinch=.55,!n){const s=z.x-t,r=z.z-e,a=Math.hypot(s,r)||1;z.vx+=s/a*Jt.stressPush,z.vz+=r/a*Jt.stressPush,z.goal=null}Ge.emit(z.x,an.position.y+1.4,z.z,{n:8,color:"#ff6a5a",speed:2,up:1.5,life:.4}),uo("😓"),ci.classList.remove("hit"),ci.offsetWidth,ci.classList.add("hit"),Wn(nn.chill,"chillBad",Math.random(),"bad"),z.chill<=0&&T1()}}function T1(){z.faint=Jt.faintTime,z.stun=Jt.faintTime,z.faints++,z.goal=null,z.vx=z.vz=0;const i=Math.floor(J.embers*Jt.faintLoss);i>0&&(J.embers-=i,Wc(z.x,an.position.y+1,z.z,i,!1,1.6)),z.carrying&&(z.carrying=!1),uo("😵"),sn(`😵 Vokteren besvimte av stress! Våkner ved fyret om ${Jt.faintTime} s`),Ye.stun()}function jf(i,t){const e=Pf();e.scale.setScalar(1.8),e.position.set(i,Yt.heightAt(i,t)+.5,t),Ae.add(e),rr.push({mesh:e,x:i,z:t,life:Jt.bagLife})}function A1(i){z.inv-=i;const t=Yt.lighthouse.pos;z.faint>0?(z.faint-=i,z.faint<=0&&(z.x=t.x+1,z.z=t.z+7.5,z.vx=z.vz=0,z.stun=0,z.chill=Jt.chillMax*Jt.wakeChill,z.inv=Jt.stressInvuln*2,Ge.emit(z.x,Yt.heightAt(z.x,z.z)+1,z.z,{n:14,color:"#9fffb0",speed:2,up:2,life:.7}))):Math.hypot(t.x-z.x,t.z-z.z)<Jt.regenReach&&(z.chill=Math.min(Jt.chillMax,z.chill+Jt.regen*i));for(let s=rr.length-1;s>=0;s--){const r=rr[s];r.life-=i,r.mesh.rotation.y+=i*1.5,r.mesh.position.y=Yt.heightAt(r.x,r.z)+.5+Math.sin(J.time*3+s)*.12,r.mesh.visible=r.life>4||Math.sin(r.life*12)>0,z.faint<=0&&Math.hypot(r.x-z.x,r.z-z.z)<1.4&&(z.chill=Math.min(Jt.chillMax,z.chill+Jt.bagHeal),sn(`🥔 Chips! +${Jt.bagHeal} chill`),uo("😌"),Ye.pickup(),r.life=0),r.life<=0&&(Ae.remove(r.mesh),rr.splice(s,1))}const e=Math.round(z.chill);Wn(nn.chill,"chill",e),nn.chill.classList.toggle("low",e<30),e!==Tu&&(Tu=e,ci.firstChild.style.width=`${100*z.chill/Jt.chillMax}%`,ci.classList.toggle("low",e<30));const n=(e<Jt.chillMax||z.faint>0)&&J.phase!=="title";ci.style.display=n?"block":"none",n&&(Ue.set(z.x,an.position.y+2.3,z.z).project($e),ci.style.left=`${(Ue.x*.5+.5)*innerWidth}px`,ci.style.top=`${(-Ue.y*.5+.5)*innerHeight}px`)}function C1(i){if(hc(Jt.airStress,i.x,i.z,!0),z.faint>0)return;z.stun=Jt.stunTime,i.hitCd=4;const t=Math.floor(J.embers*Jt.stunLoss);t>0&&(J.embers-=t,Wc(z.x,an.position.y+1,z.z,t,!1,1.6)),z.carrying&&(z.carrying=!1,sn("Rullepapiret blåste bort!")),Ge.emit(z.x,an.position.y+1.5,z.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),Ye.stun(),Yn=.2}function R1(i){for(let t=ms.length-1;t>=0;t--){const e=ms[t];e.life-=i,e.phase+=i;const n=Math.max(Yt.heightAt(e.x,e.z),.1)+.35;e.settled||(e.vy-=16*i,e.x+=e.vx*i,e.z+=e.vz*i,e.y+=e.vy*i,e.y<=n&&(e.y=n,Math.abs(e.vy)>2.5?(e.vy=-e.vy*.4,e.vx*=.6,e.vz*=.6):e.settled=!0));const s=Math.hypot(z.x-e.x,z.z-e.z);if(z.stun<=0&&s<Jt.magnet){const l=(1-s/Jt.magnet)*14+3;e.x+=(z.x-e.x)/s*l*i,e.z+=(z.z-e.z)/s*l*i,e.settled=!0,e.y=n}const r=e.settled?Math.sin(e.phase*3)*.12:0;e.mesh.position.set(e.x,e.y+r,e.z),e.mesh.rotation.y+=i*3;const a=e.life<5,o=(.8+Math.min(e.value,6)*.08)*(a?.55+.45*(e.life/5):1);if(e.mesh.scale.setScalar(o),e.mesh.visible=!a||Math.sin(e.life*(e.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Ge.emit(e.x,e.y+.2,e.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),z.stun<=0&&s<.9)J.embers+=e.value,Wn(nn.embers,"embers",J.embers,"bump"),Ge.emit(e.x,e.y+.3,e.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Ye.pickup(),Ae.remove(e.mesh),ms.splice(t,1);else if(e.life<=0){const l=Math.max(1,Math.round(e.value*Jt.expiredRefund));J.embers+=l,Ge.emit(e.x,e.y,e.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),Ae.remove(e.mesh),ms.splice(t,1)}}}let Ja=0,Zf="";function sn(i){Ja=2,Zf=i,zi.textContent=""}function Au(i){var _,T;const t=an.userData;(J.phase==="prep"||J.phase==="wave")&&A1(i),z.stun-=i,t.stars.visible=z.stun>0,t.stars.rotation.y+=i*6;let e=0,n=0;if(z.stun<=0&&(J.phase==="prep"||J.phase==="wave")){if(ve.move.x||ve.move.z){z.goal=null;const D=Math.cos(Ii),k=Math.sin(Ii);e=ve.move.x*D+ve.move.z*k,n=-ve.move.x*k+ve.move.z*D}else if(z.goal){const D=z.goal,k=D.x-z.x,L=D.z-z.z;if(D.field===void 0){D.field=null;const W=Math.ceil(Math.hypot(k,L)/.5);for(let G=1;G<W;G++)if(!Yt.isWalkable(z.x+k*G/W,z.z+L*G/W)){D.field=Dn.walkField(D.x,D.z);break}}const O=D.field?Math.min(D.field.at(z.x,z.z),Math.hypot(k,L)+50):Math.hypot(k,L);D.t+=i;const V=O<.35||D.spot&&Math.hypot(D.spot.x-z.x,D.spot.z-z.z)<D.reach;if(O<D.best-.3&&(D.best=O,D.lastGain=D.t),V||D.t>12||D.t-D.lastGain>1.5)z.goal=null;else{const W=Math.min(1,O/.8),G=D.field&&Math.hypot(k,L)>1.5?D.field.dir(z.x,z.z):null,j=G&&(G[0]||G[1])?G[0]:k/Math.hypot(k,L),nt=G&&(G[0]||G[1])?G[1]:L/Math.hypot(k,L);e=j,n=nt;for(const At of Yt.colliders){if(D.spot&&At.x===D.spot.x&&At.z===D.spot.z)continue;const kt=At.x-z.x,it=At.z-z.z,ut=kt*j+it*nt;if(ut<=0||ut>At.r+2.2||ut>O)continue;const Rt=-kt*nt+it*j;if(Math.abs(Rt)>At.r+.6)continue;const dt=(1-Math.abs(Rt)/(At.r+.6))*1.6*(Rt>=0?1:-1);e-=-nt*dt,n-=j*dt}const ot=Math.hypot(e,n)||1;e=e/ot*W,n=n/ot*W}}}const r=Yt.heightAt(z.x,z.z)<.05,a=Jt.keeperSpeed*(z.carrying?Jt.carrySlow:1)*(r?Jt.wadeSlow:1),o=e*a,l=n*a,c=(_=Yt.isIce)!=null&&_.call(Yt,z.x,z.z)?1.6:12;z.vx+=(o-z.vx)*Math.min(1,i*c),z.vz+=(l-z.vz)*Math.min(1,i*c);let u=z.x+z.vx*i,h=z.z+z.vz*i;Yt.isWalkable(u,h)||(Yt.isWalkable(u,z.z)?h=z.z:Yt.isWalkable(z.x,h)?u=z.x:(u=z.x,h=z.z));for(const D of Yt.colliders){const k=u-D.x,L=h-D.z,O=Math.hypot(k,L),V=D.r+.4;O<V&&O>1e-4&&(u=D.x+k/O*V,h=D.z+L/O*V)}z.x=u,z.z=h;const f=Math.hypot(z.vx,z.vz);if(f>.3){const D=Math.atan2(-z.vx,-z.vz);z.face+=uc(D,z.face)*Math.min(1,i*12),z.walk+=i*f*2.2}if(an.rotation.y=z.face,an.position.set(z.x,Math.max(Yt.heightAt(z.x,z.z),-.25),z.z),r&&f>1&&(z.splash=(z.splash||0)-i,z.splash<=0)){z.splash=.22,Ge.emit(z.x,.15,z.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const D=Df();D.position.set(z.x,.1,z.z),D.material.color.set("#f4fdff"),Ae.add(D),sr.push({mesh:D,t:0,r:1.6,dur:.9})}const p=Math.min(1,f/3),v=Math.sin(z.walk)*p;t.legs[0].position.z=v*.2,t.legs[1].position.z=-v*.2,t.legs[0].position.y=.2+Math.max(0,v)*.12,t.legs[1].position.y=.2+Math.max(0,-v)*.12;const x=f>.6;x!==!!z.wasMoving&&(z.sq=x?1:-1,z.wasMoving=x),z.sq=(z.sq||0)*Math.exp(-i*7);const m=f<.3?Math.sin(J.time*2.2)*.025:0;t.body.scale.set(1-m*.5-z.sq*.07,1+m+z.sq*.12,1-m*.5-z.sq*.07);const d=Math.sign(Math.sin(z.walk));f>2&&!r&&d!==z.lastStep&&Ge.emit(z.x,an.position.y+.1,z.z,{n:2,color:"#d9c9a4",speed:.7,up:.6,life:.45,gravity:1}),z.lastStep=d,z.flinch=Math.max(0,(z.flinch||0)-i),z.cheer=Math.max(0,(z.cheer||0)-i);const y=f>.5&&((T=Yt.isIce)==null?void 0:T.call(Yt,z.x,z.z)),S=Math.abs(v)*.09+(z.cheer>0?Math.abs(Math.sin(z.cheer*9))*.35:0);t.body.position.y=S,t.body.rotation.x=z.faint>0?0:-.35*Math.min(1,z.flinch*2.5),t.body.rotation.z=z.faint>0?1.45:z.stun>0?.5:v*.05+(y?Math.sin(J.time*7)*.12:0)+(z.flinch>0?Math.sin(z.flinch*40)*.08:0);let g=v*.6,A=-v*.45,E=0,w=0;y&&(E=-1.25+Math.sin(J.time*9)*.25,w=1.25+Math.cos(J.time*8)*.25,g=A=0),z.cheer>0&&(g=A=-2.9,E=-.3,w=.3),z.flinch>0&&(g=-2.5,E=.5);const C=Math.min(1,i*14);t.armL.rotation.x+=(g-t.armL.rotation.x)*C,t.armL.rotation.z+=(E-t.armL.rotation.z)*C,t.lanternArm.rotation.x+=(A-t.lanternArm.rotation.x)*C,t.lanternArm.rotation.z+=(w-t.lanternArm.rotation.z)*C,z.idle=f<.3?(z.idle||0)+i:0;const M=z.idle>2?Math.sin(J.time*.55)*.7*Math.min(1,(z.idle-2)/1.5):0;t.head.rotation.y+=(M-t.head.rotation.y)*Math.min(1,i*4),z.blink=(z.blink??2)-i,z.blink<-.12&&(z.blink=2+Math.random()*3);for(const D of t.eyes)D.scale.y=z.faint>0?.1:z.blink<0?.12:1;t.carried.visible=z.carrying,t.carried.rotation.y+=i*2,t.carried.position.y=2.35+Math.sin(J.time*3)*.08,Bc.intensity=Hf*(1+Math.sin(J.time*11)*.115)}function P1(){for(const i of ve.clicks.splice(0)){bu.setFromCamera(i,$e);const t=bu.intersectObject(Yt.terrain)[0];if(!t)continue;let e=t.point.x,n=t.point.z;const s=Yt.lighthouse.pos,r=Qr(Yt.plinths,e,n,2.2)||(Math.hypot(s.x-e,s.z-n)<4.5?{x:s.x,z:s.z,big:!0}:null);if(r){const a=r.big?4.3:1.95;let o=z.x-r.x,l=z.z-r.z;const c=Math.hypot(o,l)||1;e=r.x+o/c*a,n=r.z+l/c*a}z.goal={x:e,z:n,t:0,best:1/0,lastGain:0,spot:r,reach:r?r.big?Jt.lighthouseReach-.4:Jt.reach-.25:0},Ge.emit(e,Yt.heightAt(e,n)+.2,n,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}}function ar(i=!J.paused,t=!1){J.paused=i;const e=ve.labels();de("pause-keys").textContent=`${e.name}: fortsett med ${e.pause} · start på nytt med ${e.restart}`,de("pause").classList.toggle("hidden",!i),de("confirm").classList.toggle("hidden",!t),J.confirming=i&&t}try{sessionStorage.getItem("glod-portrait")&&document.documentElement.classList.add("portrait-ok")}catch{}de("btn-portrait").addEventListener("click",()=>{document.documentElement.classList.add("portrait-ok");try{sessionStorage.setItem("glod-portrait","1")}catch{}sa()});de("btn-resume").addEventListener("click",()=>ar(!1));de("btn-restart").addEventListener("click",()=>ar(!0,!0));de("btn-yes").addEventListener("click",()=>Vr());de("btn-no").addEventListener("click",()=>ar(!0,!1));de("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn}`});de("btn-lex").addEventListener("click",()=>{const i=de("lex");i.innerHTML||(i.innerHTML=Object.entries(co).filter(([t])=>t!=="lobbyMini").map(([t,e])=>{const{tough:n,weak:s}=Yf(e);return`<div class="lex-row"><b>${e.flying?"🪶":"🐾"} ${e.name}</b><small>${e.info||(e.flying?"flyr rett mot fyret":"går langs veien")}</small><span>${n?`🛡️ ${n}`:""} ${s?`💥 ${s}`:""}</span></div>`}).join("")+`<p class="lex-key">🛡️ tåler · 💥 svak mot · ${Object.entries(cc).map(([t,e])=>`${e} ${ir[t].name}`).join(" · ")} · 📒 skjold forfra</p>`),i.classList.toggle("hidden")});function Vr(){for(const i of Li)i.el.remove();Li.length=0;for(const i of[Ln,Gr,ms,ri,sr]){for(const t of i)t.mesh&&Ae.remove(t.mesh);i.length=0}for(const i of Vn)Ae.remove(i.mesh);Vn.length=0;for(const i of Yt.plinths)i.tower=null;for(let i=Yt.colliders.length-1;i>=0;i--)Yt.colliders[i].tower&&Yt.colliders.splice(i,1);J.buildMode=!1,z.chargeTower&&Zr(z.chargeTower,0),Object.assign(J,{phase:"title",wave:0,timer:0,embers:Jt.startEmbers,lights:pr,spawnQueue:[],leaks:{},seen:{},waveClock:0,sel:0,paused:!1,confirming:!1}),Object.assign(z,{x:Yt.lighthouse.pos.x+1,z:Yt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,charge:0,chargeTower:null,goal:null,chill:Jt.chillMax,inv:0,faint:0,faints:0});for(const i of rr)Ae.remove(i.mesh);rr.length=0,Yt.lighthouse.setLights(pr),z1(),Yn=0,Ja=0,Oi={},Wn(nn.lights,"lights",J.lights),Wn(nn.embers,"embers",J.embers),Wn(nn.wave,"wave",0),nn.timer.textContent="",de("pause").classList.add("hidden"),de("confirm").classList.add("hidden"),de("overlay").classList.add("hidden"),ve.clear(),J.phase="title",fo(!0),window.__restarts=(window.__restarts||0)+1}function D1(){const i=ve.device;if(Oi.device===i+ve.padKind)return;Oi.device=i+ve.padKind;const t=ve.labels();de("touch").classList.toggle("hidden",i!=="touch"||J.phase==="title"),xi.querySelectorAll("button i").forEach((e,n)=>{e.textContent=i==="pad"?n===J.sel?t.build:"":i==="touch"?"":String(n+1)}),Gc.textContent="Neste bølge ▶",Oi.sel=-1}function L1(i){if(ve.consume("fps")&&Vc.classList.toggle("hidden"),ve.consume("music")&&Qf(),D1(),J.phase==="title"){["build","carry","next","pause"].some(f=>ve.consume(f))&&fo(),ve.clear();return}if(Wn(nn.embers,"embers",J.embers),!(J.phase==="prep"||J.phase==="wave")){if((J.phase==="won"||J.phase==="lost")&&ve.consume("restart")){Vr();return}ve.clear(),xi.classList.add("hidden"),wu("");return}if(ve.consume("restart")){J.confirming?Vr():ar(!0,!0);return}if(ve.consume("pause")&&ar(!J.paused),J.confirming){if(ve.consume("build")||ve.consume("next")){Vr();return}ve.consume("carry")&&ar(!0,!1)}if(J.paused){ve.clear();return}P1(),ve.consume("next")&&J.phase==="prep"&&(J.timer=0),ve.consume("selPrev")&&(J.sel=(J.sel+$i.length-1)%$i.length),ve.consume("selNext")&&(J.sel=(J.sel+1)%$i.length);const e=Qr(Yt.plinths,z.x,z.z,Jt.reach,f=>!f.tower),n=Qr(Vn,z.x,z.z,Jt.reach),s=Yt.lighthouse.pos,r=Math.hypot(s.x-z.x,s.z-z.z)<Jt.lighthouseReach,a=z.stun>0,o=Xc();ve.consume("build")&&!a&&(J.buildMode||e?Ka($i[J.sel]):J.buildMode=!0),$i.forEach((f,p)=>{ve.consume("b"+(p+1))&&!a&&(J.sel=p,Ka(f))});const l=(J.buildMode||!!e)&&!a&&!z.carrying;S1(l,o,$i[J.sel]),xi.classList.toggle("hidden",!l),l&&(xi.querySelectorAll("button").forEach((f,p)=>{f.disabled=J.embers<ir[f.dataset.tower].cost,f.classList.toggle("sel",p===J.sel)}),Oi.sel!==J.sel&&ve.device==="pad"&&(Oi.sel=J.sel,xi.querySelectorAll("button i").forEach((f,p)=>f.textContent=p===J.sel?ve.labels().build:""))),ve.consume("carry")&&!a&&(!z.carrying&&r?J.embers>=Jt.stoneCost?(J.embers-=Jt.stoneCost,z.carrying=!0,Wn(nn.embers,"embers",J.embers,"bump"),Ge.emit(z.x,an.position.y+2.3,z.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),Ye.stone()):(Ye.deny(),sn(`Rullepapir koster ${Jt.stoneCost} ✦`)):z.carrying&&r?(z.carrying=!1,J.embers+=Jt.stoneCost,Ye.stone(),sn("Rullepapiret er lagt tilbake")):!z.carrying&&J.buildMode?J.buildMode=!1:z.carrying?n||sn("Bær rullepapiret til et tårn"):sn("Rullepapir hentes ved fyret"));const c=z.carrying&&!a&&n&&n.level<el&&!n.upg?n:null;c!==z.chargeTower&&(z.chargeTower&&Zr(z.chargeTower,0),z.chargeTower=c,z.charge=0),c&&(z.charge+=i/Jt.chargeTime,Zr(c,Math.min(1,z.charge)),Math.random()<i*20&&Ge.emit(z.x,an.position.y+2.2,z.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),z.charge>=1&&(c.upg={t:0,dur:Jt.upgradeTime[c.level-1]},z.carrying=!1,z.chargeTower=null,z.charge=0,Ge.emit(c.x,c.y+1.2,c.z,{n:12,color:"#8ff0ff",speed:2,up:2,life:.6}),Ye.stone(),sn(`${c.def.name}: bli stående i ${c.upg.dur} s for å oppgradere`)));const u=ve.labels();Ja-=i;let h="";if(Ja>0)h=Zf;else if(a)h="Moralpanikk! Måka slo deg ut";else if(c)h="Leverer rullepapiret …";else if(n!=null&&n.upg)h=`Lader ${n.def.name} … ${Math.ceil(n.upg.dur-n.upg.t)} s igjen (bli stående)`;else if(z.carrying&&n&&n.level>=el)h="Tårnet er på maks nivå";else if(z.carrying)h="Bær rullepapiret til et tårn";else if(r&&!z.carrying)h=`${u.carry} = hent rullepapir (${Jt.stoneCost} ✦)`;else if(r&&z.carrying)h=`${u.carry} = legg rullepapiret tilbake`;else if(n&&n.level<el)h=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(l&&!o.ok)h=`Ikke lov her: ${o.why} · ${u.carry} = avbryt`;else if(l){const f=`${ir[$i[J.sel]].name} (${ir[$i[J.sel]].tip})`,p=o.plinth?" (sokkel: +25 % rekkevidde)":"";h=ve.device==="pad"?`${u.sel} = velg tårn · ${u.build} = sett ned ${f}${p}`:ve.device==="touch"?`Trykk på et tårn, eller Bygg = ${f}${p}`:`1 / 2 / 3 eller ${u.build} = sett ned ${f}${p}`}else J.phase==="prep"&&J.wave===0&&(h=`${u.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);wu(h),h1(i)}const Ms=new be;{const i=document.createElement("canvas");i.width=64,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,256),t.globalCompositeOperation="destination-in";const n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,256);const s=new ui(i);for(let r=0;r<6;r++){const a=new oe(new Zn(1,1),new De({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:fi,depthWrite:!1,depthTest:!1,fog:!1}));a.scale.set(3.5+r%3*2.4,34,1),a.position.set(-22+r*8.5,9,-4+r%2*6),a.rotation.set(-.95,0,.55),a.userData.phase=r*1.3,Ms.add(a)}}Ms.visible=rn.id==="tak";Ms.renderOrder=50;Ae.add(Ms);function I1(i){Ms.position.set(An.x,0,An.z),Ms.rotation.y=Ii,Ms.children.forEach(t=>t.material.opacity=.06+.035*Math.sin(i*.35+t.userData.phase))}let Yn=0;const Ue=new B,nl=new B,js=new B,Oa=new B,il=new B,An=new B(z.x,0,z.z);function U1(i){An.x+=(z.x-An.x)*Math.min(1,i*4),An.z+=(z.z-An.z)*Math.min(1,i*4),An.y=an.position.y;const t=ki?1.15:1,e=ve.zoom*t,n=$e.aspect<1.2?1.25:1;Ii+=ve.look;const s=6.6*e*n;$e.position.set(An.x+Math.sin(Ii)*s,An.y+12.5*e*n,An.z+Math.cos(Ii)*s),Yn=Math.max(0,Yn-i),Yn>0&&($e.position.x+=(Math.random()-.5)*Yn*2,$e.position.y+=(Math.random()-.5)*Yn),$e.lookAt(An.x-Math.sin(Ii),An.y+.5,An.z-Math.cos(Ii)),$e.updateMatrixWorld();let r=0,a=0,o=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([d,y])=>{const S=Ue.set(d,y,.5).unproject($e),g=S.sub($e.position).normalize(),A=g.y<-.05?(An.y-$e.position.y)/g.y:80;return[$e.position.x+g.x*Math.min(A,80),$e.position.z+g.z*Math.min(A,80)]});for(const[d,y]of l)r+=d/4,a+=y/4;for(const[d,y]of l)o=Math.max(o,Math.hypot(d-r,y-a));const c=xe.clamp(Math.ceil((o+4)/4)*4,16,80);hn.shadow.camera.right!==c&&(Object.assign(hn.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),hn.shadow.camera.updateProjectionMatrix());const u=2*c/hn.shadow.mapSize.x;js.set(Hn.sunDir[0],Hn.sunDir[1],Hn.sunDir[2]).normalize(),Oa.set(0,1,0).cross(js).normalize(),il.copy(js).cross(Oa).normalize(),Ue.set(r,An.y,a);const h=Math.round(Ue.dot(Oa)/u)*u,f=Math.round(Ue.dot(il)/u)*u,p=Ue.dot(js);nl.copy(Oa).multiplyScalar(h).addScaledVector(il,f).addScaledVector(js,p),hn.target.position.copy(nl),hn.position.copy(nl).addScaledVector(js,40),hn.shadow.camera.far=40+c+20,I1(J.time),v1(),Ue.set(z.x,an.position.y+.9,z.z);const v=-Ue.clone().applyMatrix4($e.matrixWorldInverse).z;Ue.project($e);const x=innerWidth*wn.getPixelRatio(),m=innerHeight*wn.getPixelRatio();dr.uKeep.value.set((Ue.x*.5+.5)*x,(Ue.y*.5+.5)*m,v),dr.uRad.value=m*.3,d1(J.paused?0:i)}const sl=rn.eruption,rl=Yt.extras.bridges??[];let Ur=0,Ki=null;function N1(i){if(!(!sl||!rl.length||J.phase!=="wave")){if(Ur+=i,Ki&&Ur>=sl.closed)Ki.setClosed(!1),Ki=null,Dn.setBlock(()=>!1);else if(!Ki&&Ur>=sl.every){Ur=0;const t=rl[Math.random()*rl.length|0];t.setClosed(!0),Ki=t,Dn.setBlock((e,n)=>(e-t.x)**2+(n-t.z)**2<2.8*2.8),Yn=Math.max(Yn,.35),Ye.boom(),sn("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function z1(){Ki&&(Ki.setClosed(!1),Dn.setBlock(()=>!1)),Ki=null,Ur=0}function F1(i){if(N1(i),J.phase==="prep")J.timer-=i,nn.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,J.timer))} s`,J.timer<=0&&(nn.timer.textContent="",qf());else if(J.phase==="wave"){for(J.waveClock+=i;J.spawnQueue.length&&J.spawnQueue[0].t<=J.waveClock;){const t=J.spawnQueue.shift();Hc(t.type,t.path)}if(nn.timer.textContent=`${Ln.length+J.spawnQueue.length} monstre igjen`,!J.spawnQueue.length&&!Ln.length){if(nn.timer.textContent="",J.wave>=kc.length){Kf(!0);return}const t=Jt.waveBonus+J.wave*Jt.waveBonusPer+Math.floor(Math.min(J.embers,300)*Jt.interest);J.embers+=t,Wn(nn.embers,"embers",J.embers,"bump"),sn(`Bølge ${J.wave} slått! +${t} ✦`),z.cheer=1.4,Xf(Jt.prepTime),Oe==null||Oe.setIntensity(0)}}}function Kf(i){J.phase=i?"won":"lost",de("touch").classList.add("hidden"),de("btn-pause").classList.add("hidden"),xi.classList.add("hidden");let t="";if(Oe==null||Oe.setIntensity(0),i){Ye.win();const n=jr();p_(Rn),jr()>n&&(t=`<p class="lead">🔓 Ny verden låst opp: <b>${yr[Rn+1].name}</b>!</p>`)}const e=de("overlay");e.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${J.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${t}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${t?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${J.wave}. Rull opp ermene og prøv igjen.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,e.classList.remove("hidden"),de("btn-again").addEventListener("click",()=>Vr()),de("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn}`}),t&&de("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn+1}`})}let Oe=null;const Cu=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})();function Jf(){try{localStorage.setItem("glod-music",JSON.stringify({vol:Oe.volume,muted:Oe.muted}))}catch{}}function O1(){const i=Ff();Oe||!i||fn.has("nomusic")||(Oe=n1(i.ctx,i.noiseBuf,rn.id),Oe.setVolume(Cu.vol??.7),Oe.setMuted(!!Cu.muted),Oe.start(),de("music-vol").value=Math.round(Oe.volume*100),de("btn-mute").textContent=Oe.muted?"M: av":"M: på",window.__music=Oe,window.__audioCtx=i.ctx)}function Qf(){Oe&&(Oe.setMuted(!Oe.muted),de("btn-mute").textContent=Oe.muted?"M: av":"M: på",Jf(),sn(Oe.muted?"🎶 Musikk av":"🎶 Musikk på"))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const t=Ff();t&&t.ctx.state!=="running"&&t.ctx.resume()},{passive:!0});de("music-vol").addEventListener("input",i=>{Oe&&(Oe.setVolume(i.target.value/100),Jf())});de("btn-mute").addEventListener("click",i=>{i.preventDefault(),Qf()});function fo(i=!1){J.phase==="title"&&(t1(),O1(),Oe==null||Oe.setIntensity(0),i&&de("touch").classList.toggle("hidden",ve.device!=="touch"),de("overlay").classList.add("hidden"),ki&&(ve.device="touch"),Oi.device=null,de("btn-pause").classList.remove("hidden"),Yt.lighthouse.setLights(J.lights),Wn(nn.embers,"embers",J.embers),Xf(Jt.firstPrep),Of&&k1())}de("btn-start").addEventListener("click",fo);{const i=de("worlds"),t=jr();if(yr.forEach((e,n)=>{const s=document.createElement("button");s.className="world"+(n===Rn?" sel":"")+(n>=t?" locked":""),s.innerHTML=`<b>${n>=t?"🔒 ":""}${e.name}</b><small>${n>=t?"Vinn forrige verden for å låse opp":e.blurb}</small>`,s.disabled=n>=t,s.addEventListener("click",()=>{n!==Rn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),de("btn-start").textContent=`Tenn gløden på ${rn.name}`,rn.skyDusk){const e=document.createElement("button");e.id="btn-tod",e.className="tod",e.textContent=xs==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",e.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",xs==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${Rn}&tid=${xs==="skumring"?"dag":"skumring"}`}),de("worlds").after(e)}}de("btn-quality").addEventListener("click",()=>Vf(di==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&Vf(di==="high"?"low":"high")});de("btn-quality").textContent=di==="high"?"Høy":"Lav";de("btn-pause").classList.add("hidden");function k1(){J.embers=999;const i=Yt.lighthouse.pos,t=Yt.plinths.slice().sort((e,n)=>Math.hypot(e.x-i.x,e.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((e,n)=>{const s=t[n];z.x=s.x+1.9,z.z=s.z,Ka(e),n<3&&(Vn[Vn.length-1].level=n+1,Rf(Vn[Vn.length-1],n+1))}),z.x=i.x+1,z.z=i.z+6,z.carrying=!0,J.wave=Number(fn.get("demo"))||4,J.wave-=1,qf(),J.waveClock=6,J.embers=142}const B1=new xf;let al=0,ka=0,Ba=0;window.__fpsSamples=[];window.__game={S:J,monsters:Ln,towers:Vn,embers:ms,world:Yt,K:z,renderer:wn,camera:$e,input:ve,buildSpot:()=>Xc(),build:i=>Ka(i),renderOnce:()=>ia.render(0),outlineCats:_f,spawnMonster:Hc,projectiles:ri,damage:gs,dropBag:(i,t)=>jf(i,t),ghost:Ui,get camYaw(){return Ii}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function td(){requestAnimationFrame(td);const i=B1.getDelta(),t=Math.min(i,.05);J.paused||(J.time+=t),ve.update(t),J.paused||(Yt.update(J.time),l1.update(J.time));for(let e=0;e<r1&&!J.paused&&(J.phase==="prep"||J.phase==="wave");e++)e>0&&(J.time+=t,Au(t)),F1(t),E1(t),b1(t),w1(t),R1(t),_1(t);if(J.paused||Au(t),L1(t),!J.paused){if(Ge.update(t),Math.random()<t*(4+10*(J.lights/pr))){const e=Yt.lighthouse.tip;gr.emit(e.x,e.y,e.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}gr.update(t)}if(U1(t),wn.info.reset(),ia.render(t),al++,ka+=i,ka>=.5){const e=al/ka;window.__fpsSamples.push(e),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),Vc.textContent=`${e.toFixed(0)} fps · ${wn.info.render.calls} dc`,Ba=e<(ki?28:45)?Ba+1:0,Ba>=6&&Zi>1&&(Zi=Math.max(1,Zi-.25),wn.setPixelRatio(Zi),sa(),Ba=0,window.__dprDrops=(window.__dprDrops||0)+1,fn.has("debug")&&console.info(`[fps] ${e.toFixed(0)} fps over tid → dpr senket til ${Zi}`)),al=0,ka=0}}td();Of&&fn.has("autostart")&&fo();function uc(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}
