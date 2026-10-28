(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="170",Af=0,Uc=1,Cf=2,hu=1,uu=2,Ti=3,$i=0,wn=1,Ye=2,nn=0,Xi=1,ei=2,Ic=3,Nc=4,fu=5,Zn=100,Rf=101,Pf=102,Df=103,Lf=104,Er=200,Uf=201,If=202,Nf=203,Jo=204,Qo=205,tl=206,zf=207,el=208,Ff=209,Of=210,Bf=211,kf=212,Vf=213,Gf=214,nl=0,il=1,sl=2,sr=3,rl=4,al=5,ol=6,ll=7,Ql=0,Hf=1,Wf=2,qi=0,du=1,pu=2,mu=3,tc=4,Xf=5,gu=6,vu=7,xu=300,rr=301,ar=302,cl=303,hl=304,qa=306,Ui=1e3,os=1001,ul=1002,un=1003,qf=1004,Kr=1005,ci=1006,lo=1007,ls=1008,fi=1009,_u=1010,Mu=1011,Fr=1012,ec=1013,ms=1014,ti=1015,kn=1016,nc=1017,ic=1018,gs=1020,yu=35902,Su=1021,bu=1022,Bn=1023,wu=1024,Eu=1025,js=1026,vs=1027,Ya=1028,sc=1029,Tu=1030,rc=1031,ac=1033,Ua=33776,Ia=33777,Na=33778,za=33779,fl=35840,dl=35841,pl=35842,ml=35843,gl=36196,vl=37492,xl=37496,_l=37808,Ml=37809,yl=37810,Sl=37811,bl=37812,wl=37813,El=37814,Tl=37815,Al=37816,Cl=37817,Rl=37818,Pl=37819,Dl=37820,Ll=37821,Fa=36492,Ul=36494,Il=36495,Au=36283,Nl=36284,zl=36285,Fl=36286,Yf=3200,$f=3201,oc=0,jf=1,Gi="",cn="srgb",hr="srgb-linear",$a="linear",be="srgb",Cs=7680,zc=519,Zf=512,Kf=513,Jf=514,Cu=515,Qf=516,td=517,ed=518,nd=519,Fc=35044,Oc="300 es",Ri=2e3,Ha=2001;class ur{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const Rr=Math.PI/180,Or=180/Math.PI;function Ms(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function tn(i,t,e){return Math.max(t,Math.min(e,i))}function lc(i,t){return(i%t+t)%t}function id(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function sd(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function rd(i,t,e,n){return Pr(i,t,1-Math.exp(-e*n))}function ad(i,t=1){return t-Math.abs(lc(i,t*2)-t)}function od(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ld(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function cd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function hd(i,t){return i+Math.random()*(t-i)}function ud(i){return i*(.5-Math.random())}function fd(i){i!==void 0&&(Bc=i);let t=Bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dd(i){return i*Rr}function pd(i){return i*Or}function md(i){return(i&i-1)===0&&i!==0}function gd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ze={DEG2RAD:Rr,RAD2DEG:Or,generateUUID:Ms,clamp:tn,euclideanModulo:lc,mapLinear:id,inverseLerp:sd,lerp:Pr,damp:rd,pingpong:ad,smoothstep:od,smootherstep:ld,randInt:cd,randFloat:hd,randFloatSpread:ud,seededRandom:fd,degToRad:dd,radToDeg:pd,isPowerOfTwo:md,ceilPowerOfTwo:gd,floorPowerOfTwo:vd,setQuaternionFromProperEuler:xd,normalize:mn,denormalize:qs};class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,n,s,r,a,o,l,c){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],v=n[8],x=s[0],m=s[3],p=s[6],y=s[1],S=s[4],g=s[7],T=s[2],E=s[5],w=s[8];return r[0]=a*x+o*y+l*T,r[3]=a*m+o*S+l*E,r[6]=a*p+o*g+l*w,r[1]=c*x+u*y+h*T,r[4]=c*m+u*S+h*E,r[7]=c*p+u*g+h*w,r[2]=f*x+d*y+v*T,r[5]=f*m+d*S+v*E,r[8]=f*p+d*g+v*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,v=e*h+n*f+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const co=new le;function Ru(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _d(){const i=Wa("canvas");return i.style.display="block",i}const kc={};function Tr(i){i in kc||(kc[i]=!0,console.warn(i))}function Md(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function yd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xe={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===be&&(i.r=Di(i.r),i.g=Di(i.g),i.b=Di(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===be&&(i.r=Zs(i.r),i.g=Zs(i.g),i.b=Zs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?$a:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Vc=[.64,.33,.3,.6,.15,.06],Gc=[.2126,.7152,.0722],Hc=[.3127,.329],Wc=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xe.define({[hr]:{primaries:Vc,whitePoint:Hc,transfer:$a,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:Gc,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:Vc,whitePoint:Hc,transfer:be,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:Gc,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}});let Rs;class bd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rs===void 0&&(Rs=Wa("canvas")),Rs.width=t.width,Rs.height=t.height;const n=Rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wd=0;class Pu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Ms(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ho(s[a].image)):r.push(ho(s[a]))}else r=ho(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ho(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ed=0;class fn extends ur{constructor(t=fn.DEFAULT_IMAGE,e=fn.DEFAULT_MAPPING,n=os,s=os,r=ci,a=ls,o=Bn,l=fi,c=fn.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Ms(),this.name="",this.source=new Pu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ui:t.x=t.x-Math.floor(t.x);break;case os:t.x=t.x<0?0:1;break;case ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ui:t.y=t.y-Math.floor(t.y);break;case os:t.y=t.y<0?0:1;break;case ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=xu;fn.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,n=0,s=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],v=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,g=(d+1)/2,T=(p+1)/2,E=(u+f)/4,w=(h+x)/4,A=(v+m)/4;return S>g&&S>T?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=w/n):g>T?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=E/s,r=A/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=A/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(h-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Td extends ur{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Pu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends Td{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Du extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ad extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],d=r[a+1],v=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=v,t[e+3]=x;return}if(h!==x||l!==f||c!==d||u!==v){let m=1-o;const p=l*f+c*d+u*v+h*x,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const T=Math.sqrt(S),E=Math.atan2(T,p*y);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T}const g=o*y;if(l=l*m+f*g,c=c*m+d*g,u=u*m+v*g,h=h*m+x*g,m===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],v=r[a+3];return t[e]=o*v+u*h+l*d-c*f,t[e+1]=l*v+u*f+c*h-o*d,t[e+2]=c*v+u*d+o*f-l*h,t[e+3]=u*v-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),d=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h-f*d*v;break;case"YXZ":this._x=f*u*h+c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h+f*d*v;break;case"ZXY":this._x=f*u*h-c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h-f*d*v;break;case"ZYX":this._x=f*u*h-c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h+f*d*v;break;case"YZX":this._x=f*u*h+c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h-f*d*v;break;case"XZY":this._x=f*u*h-c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uo.copy(this).projectOnVector(t),this.sub(uo)}reflect(t){return this.sub(uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uo=new z,qc=new jr;class ys{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(t.matrixWorld),this.union(Jr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),Qr.subVectors(this.max,xr),Ps.subVectors(t.a,xr),Ds.subVectors(t.b,xr),Ls.subVectors(t.c,xr),Ni.subVectors(Ds,Ps),zi.subVectors(Ls,Ds),Zi.subVectors(Ps,Ls);let e=[0,-Ni.z,Ni.y,0,-zi.z,zi.y,0,-Zi.z,Zi.y,Ni.z,0,-Ni.x,zi.z,0,-zi.x,Zi.z,0,-Zi.x,-Ni.y,Ni.x,0,-zi.y,zi.x,0,-Zi.y,Zi.x,0];return!fo(e,Ps,Ds,Ls,Qr)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,Ps,Ds,Ls,Qr))?!1:(ta.crossVectors(Ni,zi),e=[ta.x,ta.y,ta.z],fo(e,Ps,Ds,Ls,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _i=[new z,new z,new z,new z,new z,new z,new z,new z],qn=new z,Jr=new ys,Ps=new z,Ds=new z,Ls=new z,Ni=new z,zi=new z,Zi=new z,xr=new z,Qr=new z,ta=new z,Ki=new z;function fo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ki.fromArray(i,r);const o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=t.dot(Ki),c=e.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Cd=new ys,_r=new z,po=new z;class fr{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_r.subVectors(t,this.center);const e=_r.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_r,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_r.copy(t.center).add(po)),this.expandByPoint(_r.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new z,mo=new z,ea=new z,Fi=new z,go=new z,na=new z,vo=new z;class cc{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){mo.copy(t).add(e).multiplyScalar(.5),ea.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(mo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ea),o=Fi.dot(this.direction),l=-Fi.dot(ea),c=Fi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,v;if(u>0)if(h=a*l-o,f=a*o-l,v=r*u,h>=0)if(f>=-v)if(f<=v){const x=1/u;h*=x,f*=x,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(mo).addScaledVector(ea,f),d}intersectSphere(t,e){Mi.subVectors(t.center,this.origin);const n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,s,r){go.subVectors(e,t),na.subVectors(n,t),vo.crossVectors(go,na);let a=this.direction.dot(vo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,t);const l=o*this.direction.dot(na.crossVectors(Fi,na));if(l<0)return null;const c=o*this.direction.dot(go.cross(Fi));if(c<0||l+c>a)return null;const u=-o*Fi.dot(vo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,a,o,l,c,u,h,f,d,v,x,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,f,d,v,x,m)}set(t,e,n,s,r,a,o,l,c,u,h,f,d,v,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=v,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),a=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,d=a*h,v=o*u,x=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+v*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=v+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,v=c*u,x=c*h;e[0]=f+x*o,e[4]=v*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-v,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,v=c*u,x=c*h;e[0]=f-x*o,e[4]=-a*h,e[8]=v+d*o,e[1]=d+v*o,e[5]=a*u,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,v=o*u,x=o*h;e[0]=l*u,e[4]=v*c-d,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=d*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,v=o*l,x=o*c;e[0]=l*u,e[4]=x-f*h,e[8]=v*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+v,e[10]=f-x*h}else if(t.order==="XZY"){const f=a*l,d=a*c,v=o*l,x=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=a*u,e[9]=d*h-v,e[2]=v*h-d,e[6]=o*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rd,t,Pd)}lookAt(t,e,n){const s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Oi.crossVectors(n,Cn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Oi.crossVectors(n,Cn)),Oi.normalize(),ia.crossVectors(Cn,Oi),s[0]=Oi.x,s[4]=ia.x,s[8]=Cn.x,s[1]=Oi.y,s[5]=ia.y,s[9]=Cn.y,s[2]=Oi.z,s[6]=ia.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],v=n[2],x=n[6],m=n[10],p=n[14],y=n[3],S=n[7],g=n[11],T=n[15],E=s[0],w=s[4],A=s[8],M=s[12],_=s[1],C=s[5],N=s[9],F=s[13],U=s[2],O=s[6],V=s[10],$=s[14],B=s[3],Q=s[7],at=s[11],ht=s[15];return r[0]=a*E+o*_+l*U+c*B,r[4]=a*w+o*C+l*O+c*Q,r[8]=a*A+o*N+l*V+c*at,r[12]=a*M+o*F+l*$+c*ht,r[1]=u*E+h*_+f*U+d*B,r[5]=u*w+h*C+f*O+d*Q,r[9]=u*A+h*N+f*V+d*at,r[13]=u*M+h*F+f*$+d*ht,r[2]=v*E+x*_+m*U+p*B,r[6]=v*w+x*C+m*O+p*Q,r[10]=v*A+x*N+m*V+p*at,r[14]=v*M+x*F+m*$+p*ht,r[3]=y*E+S*_+g*U+T*B,r[7]=y*w+S*C+g*O+T*Q,r[11]=y*A+S*N+g*V+T*at,r[15]=y*M+S*F+g*$+T*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],v=t[3],x=t[7],m=t[11],p=t[15];return v*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*d-n*l*d)+x*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*u-r*l*u)+m*(+e*c*h-e*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+p*(-s*o*u-e*l*h+e*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],v=t[12],x=t[13],m=t[14],p=t[15],y=h*m*c-x*f*c+x*l*d-o*m*d-h*l*p+o*f*p,S=v*f*c-u*m*c-v*l*d+a*m*d+u*l*p-a*f*p,g=u*x*c-v*h*c+v*o*d-a*x*d-u*o*p+a*h*p,T=v*h*l-u*x*l-v*o*f+a*x*f+u*o*m-a*h*m,E=e*y+n*S+s*g+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=y*w,t[1]=(x*f*r-h*m*r-x*s*d+n*m*d+h*s*p-n*f*p)*w,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*w,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*d-n*l*d)*w,t[4]=S*w,t[5]=(u*m*r-v*f*r+v*s*d-e*m*d-u*s*p+e*f*p)*w,t[6]=(v*l*r-a*m*r-v*s*c+e*m*c+a*s*p-e*l*p)*w,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*d+e*l*d)*w,t[8]=g*w,t[9]=(v*h*r-u*x*r-v*n*d+e*x*d+u*n*p-e*h*p)*w,t[10]=(a*x*r-v*o*r+v*n*c-e*x*c-a*n*p+e*o*p)*w,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*d-e*o*d)*w,t[12]=T*w,t[13]=(u*x*s-v*h*s+v*n*f-e*x*f-u*n*m+e*h*m)*w,t[14]=(v*o*s-a*x*s-v*n*l+e*x*l+a*n*m-e*o*m)*w,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,v=r*h,x=a*u,m=a*h,p=o*h,y=l*c,S=l*u,g=l*h,T=n.x,E=n.y,w=n.z;return s[0]=(1-(x+p))*T,s[1]=(d+g)*T,s[2]=(v-S)*T,s[3]=0,s[4]=(d-g)*E,s[5]=(1-(f+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(v+S)*w,s[9]=(m-y)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Us.set(s[0],s[1],s[2]).length();const a=Us.set(s[4],s[5],s[6]).length(),o=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Yn.copy(this);const c=1/r,u=1/a,h=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,e.setFromRotationMatrix(Yn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ri){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,v;if(o===Ri)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ha)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ri){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),f=(e+t)*c,d=(n+s)*u;let v,x;if(o===Ri)v=(a+r)*h,x=-2*h;else if(o===Ha)v=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Us=new z,Yn=new _e,Rd=new z(0,0,0),Pd=new z(1,1,1),Oi=new z,ia=new z,Cn=new z,Yc=new _e,$c=new jr;class di{constructor(t=0,e=0,n=0,s=di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class hc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dd=0;const jc=new z,Is=new jr,yi=new _e,sa=new z,Mr=new z,Ld=new z,Ud=new jr,Zc=new z(1,0,0),Kc=new z(0,1,0),Jc=new z(0,0,1),Qc={type:"added"},Id={type:"removed"},Ns={type:"childadded",child:null},xo={type:"childremoved",child:null};class Re extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new z,e=new di,n=new jr,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new le}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(Zc,t)}rotateY(t){return this.rotateOnAxis(Kc,t)}rotateZ(t){return this.rotateOnAxis(Jc,t)}translateOnAxis(t,e){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zc,t)}translateY(t){return this.translateOnAxis(Kc,t)}translateZ(t){return this.translateOnAxis(Jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sa.copy(t):sa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Mr,sa,this.up):yi.lookAt(sa,Mr,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(yi),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qc),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Id),xo.child=t,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qc),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,Ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new z(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new z,Si=new z,_o=new z,bi=new z,zs=new z,Fs=new z,th=new z,Mo=new z,yo=new z,So=new z,bo=new Ce,wo=new Ce,Eo=new Ce;class Kn{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$n.subVectors(s,e),Si.subVectors(n,e),_o.subVectors(t,e);const a=$n.dot($n),o=$n.dot(Si),l=$n.dot(_o),c=Si.dot(Si),u=Si.dot(_o),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,v=(a*u-o*l)*f;return r.set(1-d-v,v,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(a,bi.y),l.addScaledVector(o,bi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return bo.setScalar(0),wo.setScalar(0),Eo.setScalar(0),bo.fromBufferAttribute(t,e),wo.fromBufferAttribute(t,n),Eo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(bo,r.x),a.addScaledVector(wo,r.y),a.addScaledVector(Eo,r.z),a}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),Si.subVectors(t,e),$n.cross(Si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),$n.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Kn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;zs.subVectors(s,n),Fs.subVectors(r,n),Mo.subVectors(t,n);const l=zs.dot(Mo),c=Fs.dot(Mo);if(l<=0&&c<=0)return e.copy(n);yo.subVectors(t,s);const u=zs.dot(yo),h=Fs.dot(yo);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(zs,a);So.subVectors(t,r);const d=zs.dot(So),v=Fs.dot(So);if(v>=0&&d<=v)return e.copy(r);const x=d*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Fs,o);const m=u*v-d*h;if(m<=0&&h-u>=0&&d-v>=0)return th.subVectors(r,s),o=(h-u)/(h-u+(d-v)),e.copy(s).addScaledVector(th,o);const p=1/(m+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(zs,a).addScaledVector(Fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function To(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=lc(t,1),e=tn(e,0,1),n=tn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=To(a,r,t+1/3),this.g=To(a,r,t),this.b=To(a,r,t-1/3)}return xe.toWorkingColorSpace(this,s),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=Lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return xe.fromWorkingColorSpace(on.copy(this),t),Math.round(tn(on.r*255,0,255))*65536+Math.round(tn(on.g*255,0,255))*256+Math.round(tn(on.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(on.copy(this),e);const n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=cn){xe.fromWorkingColorSpace(on.copy(this),t);const e=on.r,n=on.g,s=on.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(ra);const n=Pr(Bi.h,ra.h,e),s=Pr(Bi.s,ra.s,e),r=Pr(Bi.l,ra.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Ct;Ct.NAMES=Lu;let Nd=0;class Ss extends ur{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Ms(),this.name="",this.blending=Xi,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Qo,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Qo&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Se extends Ss{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qe=new z,aa=new Tt;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fc,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fc&&(t.usage=this.usage),t}}class Uu extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Iu extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zd=0;const zn=new _e,Ao=new Re,Os=new z,Rn=new ys,yr=new ys,Je=new z;class Ee extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ru(t)?Iu:Uu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return Ao.lookAt(t),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(Rn.min,yr.min),Rn.expandByPoint(Je),Je.addVectors(Rn.max,yr.max),Rn.expandByPoint(Je)):(Rn.expandByPoint(yr.min),Rn.expandByPoint(yr.max))}Rn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Je.fromBufferAttribute(o,c),l&&(Os.fromBufferAttribute(t,c),Je.add(Os)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new z,l[A]=new z;const c=new z,u=new z,h=new z,f=new Tt,d=new Tt,v=new Tt,x=new z,m=new z;function p(A,M,_){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,_),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,M),v.fromBufferAttribute(r,_),u.sub(c),h.sub(c),d.sub(f),v.sub(f);const C=1/(d.x*v.y-v.x*d.y);isFinite(C)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(C),o[A].add(x),o[M].add(x),o[_].add(x),l[A].add(m),l[M].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,M=y.length;A<M;++A){const _=y[A],C=_.start,N=_.count;for(let F=C,U=C+N;F<U;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const S=new z,g=new z,T=new z,E=new z;function w(A){T.fromBufferAttribute(s,A),E.copy(T);const M=o[A];S.copy(M),S.sub(T.multiplyScalar(T.dot(M))).normalize(),g.crossVectors(E,M);const C=g.dot(l[A])<0?-1:1;a.setXYZW(A,S.x,S.y,S.z,C)}for(let A=0,M=y.length;A<M;++A){const _=y[A],C=_.start,N=_.count;for(let F=C,U=C+N;F<U;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,h=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){const v=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let p=0;p<u;p++)f[v++]=c[d++]}return new Ve(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eh=new _e,Ji=new cc,oa=new fr,nh=new z,la=new z,ca=new z,ha=new z,Co=new z,ua=new z,ih=new z,fa=new z;class Jt extends Re{constructor(t=new Ee,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Co.fromBufferAttribute(h,t),a?ua.addScaledVector(Co,u):ua.addScaledVector(Co.sub(e),u))}e.add(ua)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),Ji.copy(t.ray).recast(t.near),!(oa.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(oa,nh)===null||Ji.origin.distanceToSquared(nh)>(t.far-t.near)**2))&&(eh.copy(r).invert(),Ji.copy(t.ray).applyMatrix4(eh),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],p=a[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let g=y,T=S;g<T;g+=3){const E=o.getX(g),w=o.getX(g+1),A=o.getX(g+2);s=da(this,p,t,n,c,u,h,E,w,A),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=v,p=x;m<p;m+=3){const y=o.getX(m),S=o.getX(m+1),g=o.getX(m+2);s=da(this,a,t,n,c,u,h,y,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],p=a[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let g=y,T=S;g<T;g+=3){const E=g,w=g+1,A=g+2;s=da(this,p,t,n,c,u,h,E,w,A),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=v,p=x;m<p;m+=3){const y=m,S=m+1,g=m+2;s=da(this,a,t,n,c,u,h,y,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Fd(i,t,e,n,s,r,a,o){let l;if(t.side===wn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===$i,o),l===null)return null;fa.copy(o),fa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(fa);return c<e.near||c>e.far?null:{distance:c,point:fa.clone(),object:i}}function da(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,la),i.getVertexPosition(l,ca),i.getVertexPosition(c,ha);const u=Fd(i,t,e,n,la,ca,ha,ih);if(u){const h=new z;Kn.getBarycoord(ih,la,ca,ha,h),s&&(u.uv=Kn.getInterpolatedAttribute(s,o,l,c,h,new Tt)),r&&(u.uv1=Kn.getInterpolatedAttribute(r,o,l,c,h,new Tt)),a&&(u.normal=Kn.getInterpolatedAttribute(a,o,l,c,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new z,materialIndex:0};Kn.getNormal(la,ca,ha,f.normal),u.face=f,u.barycoord=h}return u}class Pn extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(h,2));function v(x,m,p,y,S,g,T,E,w,A,M){const _=g/w,C=T/A,N=g/2,F=T/2,U=E/2,O=w+1,V=A+1;let $=0,B=0;const Q=new z;for(let at=0;at<V;at++){const ht=at*C-F;for(let Mt=0;Mt<O;Mt++){const qt=Mt*_-N;Q[x]=qt*y,Q[m]=ht*S,Q[p]=U,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[p]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(Mt/w),h.push(1-at/A),$+=1}}for(let at=0;at<A;at++)for(let ht=0;ht<w;ht++){const Mt=f+ht+O*at,qt=f+ht+O*(at+1),it=f+(ht+1)+O*(at+1),ut=f+(ht+1)+O*at;l.push(Mt,qt,ut),l.push(qt,it,ut),B+=6}o.addGroup(d,B,M),d+=B,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function or(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function gn(i){const t={};for(let e=0;e<i.length;e++){const n=or(i[e]);for(const s in n)t[s]=n[s]}return t}function Od(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const Jn={clone:or,merge:gn};var Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oe extends Ss{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=Od(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zu extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new z,sh=new Tt,rh=new Tt;class Dn extends zu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,sh,rh),e.subVectors(rh,sh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bs=-90,ks=1;class Vd extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(Bs,ks,t,e);s.layers=this.layers,this.add(s);const r=new Dn(Bs,ks,t,e);r.layers=this.layers,this.add(r);const a=new Dn(Bs,ks,t,e);a.layers=this.layers,this.add(a);const o=new Dn(Bs,ks,t,e);o.layers=this.layers,this.add(o);const l=new Dn(Bs,ks,t,e);l.layers=this.layers,this.add(l);const c=new Dn(Bs,ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Fu extends fn{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:rr,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gd extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ci}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pn(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:nn});r.uniforms.tEquirect.value=e;const a=new Jt(s,r),o=e.minFilter;return e.minFilter===ls&&(e.minFilter=ci),new Vd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ro=new z,Hd=new z,Wd=new le;class ss{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ro.subVectors(n,e).cross(Hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ro),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wd.getNormalMatrix(t),s=this.coplanarPoint(Ro).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new fr,pa=new z;class uc{constructor(t=new ss,e=new ss,n=new ss,s=new ss,r=new ss,a=new ss){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],v=s[9],x=s[10],m=s[11],p=s[12],y=s[13],S=s[14],g=s[15];if(n[0].setComponents(l-r,f-c,m-d,g-p).normalize(),n[1].setComponents(l+r,f+c,m+d,g+p).normalize(),n[2].setComponents(l+a,f+u,m+v,g+y).normalize(),n[3].setComponents(l-a,f-u,m-v,g-y).normalize(),n[4].setComponents(l-o,f-h,m-x,g-S).normalize(),e===Ri)n[5].setComponents(l+o,f+h,m+x,g+S).normalize();else if(e===Ha)n[5].setComponents(o,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(pa.x=s.normal.x>0?t.max.x:t.min.x,pa.y=s.normal.y>0?t.max.y:t.min.y,pa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ou(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xd(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<h.length;d++){const v=h[f],x=h[d];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,v=h.length;d<v;d++){const x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ni extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,d=[],v=[],x=[],m=[];for(let p=0;p<u;p++){const y=p*f-a;for(let S=0;S<c;S++){const g=S*h-r;v.push(g,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const S=y+c*p,g=y+c*(p+1),T=y+1+c*(p+1),E=y+1+c*p;d.push(S,g,E),d.push(g,T,E)}this.setIndex(d),this.setAttribute("position",new re(v,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.widthSegments,t.heightSegments)}}var qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
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
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
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
#endif`,Qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
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
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rp=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mp=`#define PI 3.141592653589793
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
} // validated`,gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vp=`vec3 transformedNormal = objectNormal;
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
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
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
}`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fp=`uniform bool receiveShadow;
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
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Wp=`struct PhysicalMaterial {
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
}`,Xp=`
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e0=`#if defined( USE_POINTS_UV )
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
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
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
#endif`,l0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
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
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P0=`float getShadowMask() {
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
}`,D0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,U0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,tm=`#define DISTANCE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`uniform float scale;
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#define LAMBERT
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
}`,lm=`#define LAMBERT
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
}`,cm=`#define MATCAP
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
}`,hm=`#define MATCAP
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
}`,um=`#define NORMAL
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
}`,fm=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,pm=`#define PHONG
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
}`,mm=`#define STANDARD
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
}`,gm=`#define STANDARD
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
}`,vm=`#define TOON
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
}`,xm=`#define TOON
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
}`,_m=`uniform float size;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,Sm=`uniform vec3 color;
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
}`,bm=`uniform float rotation;
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
}`,wm=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:qd,alphahash_pars_fragment:Yd,alphamap_fragment:$d,alphamap_pars_fragment:jd,alphatest_fragment:Zd,alphatest_pars_fragment:Kd,aomap_fragment:Jd,aomap_pars_fragment:Qd,batching_pars_vertex:tp,batching_vertex:ep,begin_vertex:np,beginnormal_vertex:ip,bsdfs:sp,iridescence_fragment:rp,bumpmap_pars_fragment:ap,clipping_planes_fragment:op,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:cp,clipping_planes_vertex:hp,color_fragment:up,color_pars_fragment:fp,color_pars_vertex:dp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:vp,displacementmap_pars_vertex:xp,displacementmap_vertex:_p,emissivemap_fragment:Mp,emissivemap_pars_fragment:yp,colorspace_fragment:Sp,colorspace_pars_fragment:bp,envmap_fragment:wp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:Tp,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Op,envmap_vertex:Cp,fog_vertex:Rp,fog_pars_vertex:Pp,fog_fragment:Dp,fog_pars_fragment:Lp,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Ip,lights_lambert_fragment:Np,lights_lambert_pars_fragment:zp,lights_pars_begin:Fp,lights_toon_fragment:Bp,lights_toon_pars_fragment:kp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:qp,lights_fragment_end:Yp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Kp,map_fragment:Jp,map_pars_fragment:Qp,map_particle_fragment:t0,map_particle_pars_fragment:e0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:s0,morphcolor_vertex:r0,morphnormal_vertex:a0,morphtarget_pars_vertex:o0,morphtarget_vertex:l0,normal_fragment_begin:c0,normal_fragment_maps:h0,normal_pars_fragment:u0,normal_pars_vertex:f0,normal_vertex:d0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:x0,opaque_fragment:_0,packing:M0,premultiplied_alpha_fragment:y0,project_vertex:S0,dithering_fragment:b0,dithering_pars_fragment:w0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:C0,shadowmap_vertex:R0,shadowmask_pars_fragment:P0,skinbase_vertex:D0,skinning_pars_vertex:L0,skinning_vertex:U0,skinnormal_vertex:I0,specularmap_fragment:N0,specularmap_pars_fragment:z0,tonemapping_fragment:F0,tonemapping_pars_fragment:O0,transmission_fragment:B0,transmission_pars_fragment:k0,uv_pars_fragment:V0,uv_pars_vertex:G0,uv_vertex:H0,worldpos_vertex:W0,background_vert:X0,background_frag:q0,backgroundCube_vert:Y0,backgroundCube_frag:$0,cube_vert:j0,cube_frag:Z0,depth_vert:K0,depth_frag:J0,distanceRGBA_vert:Q0,distanceRGBA_frag:tm,equirect_vert:em,equirect_frag:nm,linedashed_vert:im,linedashed_frag:sm,meshbasic_vert:rm,meshbasic_frag:am,meshlambert_vert:om,meshlambert_frag:lm,meshmatcap_vert:cm,meshmatcap_frag:hm,meshnormal_vert:um,meshnormal_frag:fm,meshphong_vert:dm,meshphong_frag:pm,meshphysical_vert:mm,meshphysical_frag:gm,meshtoon_vert:vm,meshtoon_frag:xm,points_vert:_m,points_frag:Mm,shadow_vert:ym,shadow_frag:Sm,sprite_vert:bm,sprite_frag:wm},Ut={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},li={basic:{uniforms:gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ct(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:gn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:gn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ct(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:gn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:gn([Ut.points,Ut.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:gn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:gn([Ut.common,Ut.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:gn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:gn([Ut.sprite,Ut.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:gn([Ut.common,Ut.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:gn([Ut.lights,Ut.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};li.physical={uniforms:gn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const ma={r:0,b:0,g:0},ts=new di,Em=new _e;function Tm(i,t,e,n,s,r,a){const o=new Ct(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function v(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function x(y){let S=!1;const g=v(y);g===null?p(o,l):g&&g.isColor&&(p(g,1),S=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const g=v(S);g&&(g.isCubeTexture||g.mapping===qa)?(u===void 0&&(u=new Jt(new Pn(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:or(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ts.copy(S.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Em.makeRotationFromEuler(ts)),u.material.toneMapped=xe.getTransfer(g.colorSpace)!==be,(h!==g||f!==g.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,f=g.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Jt(new ni(2,2),new Oe({name:"BackgroundMaterial",uniforms:or(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=xe.getTransfer(g.colorSpace)!==be,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=g,f=g.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(ma,Nu(i)),n.buffers.color.setClear(ma.r,ma.g,ma.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:m}}function Am(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,C,N,F,U){let O=!1;const V=h(F,N,C);r!==V&&(r=V,c(r.object)),O=d(_,F,N,U),O&&v(_,F,N,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,g(_,C,N,F),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,C,N){const F=N.wireframe===!0;let U=n[_.id];U===void 0&&(U={},n[_.id]=U);let O=U[C.id];O===void 0&&(O={},U[C.id]=O);let V=O[F];return V===void 0&&(V=f(l()),O[F]=V),V}function f(_){const C=[],N=[],F=[];for(let U=0;U<e;U++)C[U]=0,N[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:F,object:_,attributes:{},index:null}}function d(_,C,N,F){const U=r.attributes,O=C.attributes;let V=0;const $=N.getAttributes();for(const B in $)if($[B].location>=0){const at=U[B];let ht=O[B];if(ht===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor)),at===void 0||at.attribute!==ht||ht&&at.data!==ht.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function v(_,C,N,F){const U={},O=C.attributes;let V=0;const $=N.getAttributes();for(const B in $)if($[B].location>=0){let at=O[B];at===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(at=_.instanceColor));const ht={};ht.attribute=at,at&&at.data&&(ht.data=at.data),U[B]=ht,V++}r.attributes=U,r.attributesNum=V,r.index=F}function x(){const _=r.newAttributes;for(let C=0,N=_.length;C<N;C++)_[C]=0}function m(_){p(_,0)}function p(_,C){const N=r.newAttributes,F=r.enabledAttributes,U=r.attributeDivisors;N[_]=1,F[_]===0&&(i.enableVertexAttribArray(_),F[_]=1),U[_]!==C&&(i.vertexAttribDivisor(_,C),U[_]=C)}function y(){const _=r.newAttributes,C=r.enabledAttributes;for(let N=0,F=C.length;N<F;N++)C[N]!==_[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function S(_,C,N,F,U,O,V){V===!0?i.vertexAttribIPointer(_,C,N,U,O):i.vertexAttribPointer(_,C,N,F,U,O)}function g(_,C,N,F){x();const U=F.attributes,O=N.getAttributes(),V=C.defaultAttributeValues;for(const $ in O){const B=O[$];if(B.location>=0){let Q=U[$];if(Q===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),Q!==void 0){const at=Q.normalized,ht=Q.itemSize,Mt=t.get(Q);if(Mt===void 0)continue;const qt=Mt.buffer,it=Mt.type,ut=Mt.bytesPerElement,yt=it===i.INT||it===i.UNSIGNED_INT||Q.gpuType===ec;if(Q.isInterleavedBufferAttribute){const pt=Q.data,Nt=pt.stride,Bt=Q.offset;if(pt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<B.locationSize;Xt++)p(B.location+Xt,pt.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Xt=0;Xt<B.locationSize;Xt++)m(B.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Xt=0;Xt<B.locationSize;Xt++)S(B.location+Xt,ht/B.locationSize,it,at,Nt*ut,(Bt+ht/B.locationSize*Xt)*ut,yt)}else{if(Q.isInstancedBufferAttribute){for(let pt=0;pt<B.locationSize;pt++)p(B.location+pt,Q.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let pt=0;pt<B.locationSize;pt++)m(B.location+pt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let pt=0;pt<B.locationSize;pt++)S(B.location+pt,ht/B.locationSize,it,at,ht*ut,ht/B.locationSize*pt*ut,yt)}}else if(V!==void 0){const at=V[$];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(B.location,at);break;case 3:i.vertexAttrib3fv(B.location,at);break;case 4:i.vertexAttrib4fv(B.location,at);break;default:i.vertexAttrib1fv(B.location,at)}}}}y()}function T(){A();for(const _ in n){const C=n[_];for(const N in C){const F=C[N];for(const U in F)u(F[U].object),delete F[U];delete C[N]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const C=n[_.id];for(const N in C){const F=C[N];for(const U in F)u(F[U].object),delete F[U];delete C[N]}delete n[_.id]}function w(_){for(const C in n){const N=n[C];if(N[_.id]===void 0)continue;const F=N[_.id];for(const U in F)u(F[U].object),delete F[U];delete N[_.id]}}function A(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Cm(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let v=0;v<h;v++)d+=u[v];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)a(c[v],u[v],f[v]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x]*f[x];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Rm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==fi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ti&&!A)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:g,vertexTextures:T,maxSamples:E}}function Pm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ss,o=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,S=y*4;let g=p.clippingState||null;l.value=g,g=u(v,f,S,d);for(let T=0;T!==S;++T)g[T]=e[T];p.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const p=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,g=d;S!==x;++S,g+=4)a.copy(h[S]).applyMatrix4(y,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Dm(i){let t=new WeakMap;function e(a,o){return o===cl?a.mapping=rr:o===hl&&(a.mapping=ar),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===cl||o===hl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class fc extends zu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ys=4,ah=[.125,.215,.35,.446,.526,.582],as=20,Po=new fc,oh=new Ct;let Do=null,Lo=0,Uo=0,Io=!1;const rs=(1+Math.sqrt(5))/2,Vs=1/rs,lh=[new z(-rs,Vs,0),new z(rs,Vs,0),new z(-Vs,0,rs),new z(Vs,0,rs),new z(0,rs,-Vs),new z(0,rs,Vs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class ch{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Do=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do,Lo,Uo),this._renderer.xr.enabled=Io,t.scissorTest=!1,ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:kn,format:Bn,colorSpace:hr,depthBuffer:!1},s=hh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lm(r)),this._blurMaterial=Um(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,Po)}_sceneToCubeUV(t,e,n,s){const o=new Dn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(oh),u.toneMapping=qi,u.autoClear=!1;const d=new Se({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),v=new Jt(new Pn,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(oh),x=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;ga(s,y*S,p>2?S:0,S,S),u.setRenderTarget(s),x&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===rr||t.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ga(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Po)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lh[(s-r-1)%lh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*as-1),x=r/v,m=isFinite(r)?1+Math.floor(u*x):as;m>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const p=[];let y=0;for(let w=0;w<as;++w){const A=w/x,M=Math.exp(-A*A/2);p.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const g=this._sizeLods[s],T=3*g*(s>S-Ys?s-S+Ys:0),E=4*(this._cubeSize-g);ga(e,T,E,3*g,2*g),l.setRenderTarget(e),l.render(h,Po)}}function Lm(i){const t=[],e=[],n=[];let s=i;const r=i-Ys+1+ah.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ys?l=ah[a-i+Ys-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,v=6,x=3,m=2,p=1,y=new Float32Array(x*v*d),S=new Float32Array(m*v*d),g=new Float32Array(p*v*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,A=E>2?0:-1,M=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];y.set(M,x*v*E),S.set(f,m*v*E);const _=[E,E,E,E,E,E];g.set(_,p*v*E)}const T=new Ee;T.setAttribute("position",new Ve(y,x)),T.setAttribute("uv",new Ve(S,m)),T.setAttribute("faceIndex",new Ve(g,p)),t.push(T),s>Ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hh(i,t,e){const n=new En(i,t,e);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Um(i,t,e){const n=new Float32Array(as),s=new z(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dc(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function uh(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function fh(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function Im(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===cl||l===hl,u=l===rr||l===ar;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ch(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new ch(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Nm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Tr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zm(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const v in d){const x=d[v];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,v=h.attributes.position;let x=0;if(d!==null){const y=d.array;x=d.version;for(let S=0,g=y.length;S<g;S+=3){const T=y[S+0],E=y[S+1],w=y[S+2];f.push(T,E,E,w,w,T)}}else if(v!==void 0){const y=v.array;x=v.version;for(let S=0,g=y.length/3-1;S<g;S+=3){const T=S+0,E=S+1,w=S+2;f.push(T,E,E,w,w,T)}}else return;const m=new(Ru(f)?Iu:Uu)(f,1);m.version=x;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Fm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,v){v!==0&&(i.drawElementsInstanced(n,d,r,f*a,v),e.update(d,n,v))}function u(f,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=d[p];e.update(m,n,1)}function h(f,d,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,v);let p=0;for(let y=0;y<v;y++)p+=d[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Om(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bm(i,t,e){const n=new WeakMap,s=new Ce;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let _=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let g=0;v===!0&&(g=1),x===!0&&(g=2),m===!0&&(g=3);let T=o.attributes.position.count*g,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*E*4*h),A=new Du(w,T,E,h);A.type=ti,A.needsUpdate=!0;const M=g*4;for(let C=0;C<h;C++){const N=p[C],F=y[C],U=S[C],O=T*E*4*C;for(let V=0;V<N.count;V++){const $=V*M;v===!0&&(s.fromBufferAttribute(N,V),w[O+$+0]=s.x,w[O+$+1]=s.y,w[O+$+2]=s.z,w[O+$+3]=0),x===!0&&(s.fromBufferAttribute(F,V),w[O+$+4]=s.x,w[O+$+5]=s.y,w[O+$+6]=s.z,w[O+$+7]=0),m===!0&&(s.fromBufferAttribute(U,V),w[O+$+8]=s.x,w[O+$+9]=s.y,w[O+$+10]=s.z,w[O+$+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new Tt(T,E)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function km(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class pc extends fn{constructor(t,e,n,s,r,a,o,l,c,u=js){if(u!==js&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===js&&(n=ms),n===void 0&&u===vs&&(n=gs),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bu=new fn,dh=new pc(1,1),ku=new Du,Vu=new Ad,Gu=new Fu,ph=[],mh=[],gh=new Float32Array(16),vh=new Float32Array(9),xh=new Float32Array(4);function dr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ph[s];if(r===void 0&&(r=new Float32Array(s),ph[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ja(i,t){let e=mh[t];e===void 0&&(e=new Int32Array(t),mh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function Xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;xh.set(n),i.uniformMatrix2fv(this.addr,!1,xh),Ke(e,n)}}function qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;vh.set(n),i.uniformMatrix3fv(this.addr,!1,vh),Ke(e,n)}}function Ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;gh.set(n),i.uniformMatrix4fv(this.addr,!1,gh),Ke(e,n)}}function $m(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function Jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function ng(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dh.compareFunction=Cu,r=dh):r=Bu,e.setTexture2D(t||r,s)}function ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vu,s)}function sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gu,s)}function rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ku,s)}function ag(i){switch(i){case 5126:return Vm;case 35664:return Gm;case 35665:return Hm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return $m;case 35667:case 35671:return jm;case 35668:case 35672:return Zm;case 35669:case 35673:return Km;case 5125:return Jm;case 36294:return Qm;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}function og(i,t){i.uniform1fv(this.addr,t)}function lg(i,t){const e=dr(t,this.size,2);i.uniform2fv(this.addr,e)}function cg(i,t){const e=dr(t,this.size,3);i.uniform3fv(this.addr,e)}function hg(i,t){const e=dr(t,this.size,4);i.uniform4fv(this.addr,e)}function ug(i,t){const e=dr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fg(i,t){const e=dr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dg(i,t){const e=dr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pg(i,t){i.uniform1iv(this.addr,t)}function mg(i,t){i.uniform2iv(this.addr,t)}function gg(i,t){i.uniform3iv(this.addr,t)}function vg(i,t){i.uniform4iv(this.addr,t)}function xg(i,t){i.uniform1uiv(this.addr,t)}function _g(i,t){i.uniform2uiv(this.addr,t)}function Mg(i,t){i.uniform3uiv(this.addr,t)}function yg(i,t){i.uniform4uiv(this.addr,t)}function Sg(i,t,e){const n=this.cache,s=t.length,r=ja(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Bu,r[a])}function bg(i,t,e){const n=this.cache,s=t.length,r=ja(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vu,r[a])}function wg(i,t,e){const n=this.cache,s=t.length,r=ja(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Gu,r[a])}function Eg(i,t,e){const n=this.cache,s=t.length,r=ja(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ku,r[a])}function Tg(i){switch(i){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return fg;case 35676:return dg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return vg;case 5125:return xg;case 36294:return _g;case 36295:return Mg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Eg}}class Ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ag(e.type)}}class Cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tg(e.type)}}class Rg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const No=/(\w+)(\])?(\[|\.)?/g;function _h(i,t){i.seq.push(t),i.map[t.id]=t}function Pg(i,t,e){const n=i.name,s=n.length;for(No.lastIndex=0;;){const r=No.exec(n),a=No.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_h(e,c===void 0?new Ag(o,i,t):new Cg(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Rg(o),_h(e,h)),e=h}}}class Oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Pg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Mh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Dg=37297;let Lg=0;function Ug(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const yh=new le;function Ig(i){xe._getMatrix(yh,xe.workingColorSpace,i);const t=`mat3( ${yh.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case $a:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Sh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ug(i.getShaderSource(t),a)}else return s}function Ng(i,t){const e=Ig(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zg(i,t){let e;switch(t){case du:e="Linear";break;case pu:e="Reinhard";break;case mu:e="Cineon";break;case tc:e="ACESFilmic";break;case gu:e="AgX";break;case vu:e="Neutral";break;case Xf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const va=new z;function Fg(){xe.getLuminanceCoefficients(va);const i=va.x.toFixed(4),t=va.y.toFixed(4),e=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function Bg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ar(i){return i!==""}function bh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(Vg,Hg)}const Gg=new Map;function Hg(i,t){let e=he[t];if(e===void 0){const n=Gg.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ol(e)}const Wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(i){return i.replace(Wg,Xg)}function Xg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Th(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function qg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===uu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Yg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rr:case ar:t="ENVMAP_TYPE_CUBE";break;case qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $g(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:t="ENVMAP_MODE_REFRACTION";break}return t}function jg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ql:t="ENVMAP_BLENDING_MULTIPLY";break;case Hf:t="ENVMAP_BLENDING_MIX";break;case Wf:t="ENVMAP_BLENDING_ADD";break}return t}function Zg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Kg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=qg(e),c=Yg(e),u=$g(e),h=jg(e),f=Zg(e),d=Og(e),v=Bg(r),x=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ar).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ar).join(`
`),p.length>0&&(p+=`
`)):(m=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),p=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?he.tonemapping_pars_fragment:"",e.toneMapping!==qi?zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Ng("linearToOutputTexel",e.outputColorSpace),Fg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),a=Ol(a),a=bh(a,e),a=wh(a,e),o=Ol(o),o=bh(o,e),o=wh(o,e),a=Eh(a),o=Eh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+a,g=y+p+o,T=Mh(s,s.VERTEX_SHADER,S),E=Mh(s,s.FRAGMENT_SHADER,g);s.attachShader(x,T),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(E).trim();let O=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,E);else{const $=Sh(s,T,"vertex"),B=Sh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+$+`
`+B)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||U==="")&&(V=!1);V&&(C.diagnostics={runnable:O,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(T),s.deleteShader(E),A=new Oa(s,x),M=kg(s,x)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,Dg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}let Jg=0;class Qg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tv(t),e.set(t,n)),n}}class tv{constructor(t){this.id=Jg++,this.code=t,this.usedTimes=0}}function ev(i,t,e,n,s,r,a){const o=new hc,l=new Qg,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,C,N,F){const U=N.fog,O=F.geometry,V=M.isMeshStandardMaterial?N.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),B=$&&$.mapping===qa?$.image.height:null,Q=v[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const at=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ht=at!==void 0?at.length:0;let Mt=0;O.morphAttributes.position!==void 0&&(Mt=1),O.morphAttributes.normal!==void 0&&(Mt=2),O.morphAttributes.color!==void 0&&(Mt=3);let qt,it,ut,yt;if(Q){const Gt=li[Q];qt=Gt.vertexShader,it=Gt.fragmentShader}else qt=M.vertexShader,it=M.fragmentShader,l.update(M),ut=l.getVertexShaderID(M),yt=l.getFragmentShaderID(M);const pt=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),Bt=F.isInstancedMesh===!0,Xt=F.isBatchedMesh===!0,ue=!!M.map,te=!!M.matcap,pe=!!$,X=!!M.aoMap,Te=!!M.lightMap,ee=!!M.bumpMap,Zt=!!M.normalMap,Vt=!!M.displacementMap,fe=!!M.emissiveMap,j=!!M.metalnessMap,R=!!M.roughnessMap,b=M.anisotropy>0,H=M.clearcoat>0,Z=M.dispersion>0,tt=M.iridescence>0,et=M.sheen>0,Rt=M.transmission>0,vt=b&&!!M.anisotropyMap,bt=H&&!!M.clearcoatMap,Qt=H&&!!M.clearcoatNormalMap,_t=H&&!!M.clearcoatRoughnessMap,zt=tt&&!!M.iridescenceMap,Yt=tt&&!!M.iridescenceThicknessMap,Kt=et&&!!M.sheenColorMap,Ot=et&&!!M.sheenRoughnessMap,ae=!!M.specularMap,$t=!!M.specularColorMap,ce=!!M.specularIntensityMap,G=Rt&&!!M.transmissionMap,At=Rt&&!!M.thicknessMap,rt=!!M.gradientMap,ft=!!M.alphaMap,Pt=M.alphaTest>0,Dt=!!M.alphaHash,I=!!M.extensions;let ot=qi;M.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ot=i.toneMapping);const It={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:qt,fragmentShader:it,defines:M.defines,customVertexShaderID:ut,customFragmentShaderID:yt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Xt,batchingColor:Xt&&F._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&F.instanceColor!==null,instancingMorph:Bt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:hr,alphaToCoverage:!!M.alphaToCoverage,map:ue,matcap:te,envMap:pe,envMapMode:pe&&$.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:Te,bumpMap:ee,normalMap:Zt,displacementMap:f&&Vt,emissiveMap:fe,normalMapObjectSpace:Zt&&M.normalMapType===jf,normalMapTangentSpace:Zt&&M.normalMapType===oc,metalnessMap:j,roughnessMap:R,anisotropy:b,anisotropyMap:vt,clearcoat:H,clearcoatMap:bt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:_t,dispersion:Z,iridescence:tt,iridescenceMap:zt,iridescenceThicknessMap:Yt,sheen:et,sheenColorMap:Kt,sheenRoughnessMap:Ot,specularMap:ae,specularColorMap:$t,specularIntensityMap:ce,transmission:Rt,transmissionMap:G,thicknessMap:At,gradientMap:rt,opaque:M.transparent===!1&&M.blending===Xi&&M.alphaToCoverage===!1,alphaMap:ft,alphaTest:Pt,alphaHash:Dt,combine:M.combine,mapUv:ue&&x(M.map.channel),aoMapUv:X&&x(M.aoMap.channel),lightMapUv:Te&&x(M.lightMap.channel),bumpMapUv:ee&&x(M.bumpMap.channel),normalMapUv:Zt&&x(M.normalMap.channel),displacementMapUv:Vt&&x(M.displacementMap.channel),emissiveMapUv:fe&&x(M.emissiveMap.channel),metalnessMapUv:j&&x(M.metalnessMap.channel),roughnessMapUv:R&&x(M.roughnessMap.channel),anisotropyMapUv:vt&&x(M.anisotropyMap.channel),clearcoatMapUv:bt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(M.sheenRoughnessMap.channel),specularMapUv:ae&&x(M.specularMap.channel),specularColorMapUv:$t&&x(M.specularColorMap.channel),specularIntensityMapUv:ce&&x(M.specularIntensityMap.channel),transmissionMapUv:G&&x(M.transmissionMap.channel),thicknessMapUv:At&&x(M.thicknessMap.channel),alphaMapUv:ft&&x(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Zt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(ue||ft),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Nt,skinning:F.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Mt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:ue&&M.map.isVideoTexture===!0&&xe.getTransfer(M.map.colorSpace)===be,decodeVideoTextureEmissive:fe&&M.emissiveMap.isVideoTexture===!0&&xe.getTransfer(M.emissiveMap.colorSpace)===be,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ye,flipSided:M.side===wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:I&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(I&&M.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function p(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)_.push(C),_.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(y(_,M),S(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function y(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function S(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function g(M){const _=v[M.type];let C;if(_){const N=li[_];C=Jn.clone(N.uniforms)}else C=M.uniforms;return C}function T(M,_){let C;for(let N=0,F=u.length;N<F;N++){const U=u[N];if(U.cacheKey===_){C=U,++C.usedTimes;break}}return C===void 0&&(C=new Kg(i,_,M,r),u.push(C)),C}function E(M){if(--M.usedTimes===0){const _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:g,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:A}}function nv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function iv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ah(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ch(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,d,v,x,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=x,p.group=m),t++,p}function o(h,f,d,v,x,m){const p=a(h,f,d,v,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,v,x,m){const p=a(h,f,d,v,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||iv),n.length>1&&n.sort(f||Ah),s.length>1&&s.sort(f||Ah)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function sv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ch,i.set(n,[a])):s>=r.length?(a=new Ch,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function rv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Ct};break;case"SpotLight":e={position:new z,direction:new z,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function av(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ov=0;function lv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cv(i){const t=new rv,e=av(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,r=new _e,a=new _e;function o(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,v=0,x=0,m=0,p=0,y=0,S=0,g=0,T=0,E=0,w=0;c.sort(lv);for(let M=0,_=c.length;M<_;M++){const C=c[M],N=C.color,F=C.intensity,U=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=N.r*F,h+=N.g*F,f+=N.b*F;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],F);w++}else if(C.isDirectionalLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,B=e.get(C);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=C.shadow.matrix,y++}n.directional[d]=V,d++}else if(C.isSpotLight){const V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(N).multiplyScalar(F),V.distance=U,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[x]=V;const $=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,$.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[x]=$.matrix,C.castShadow){const B=e.get(C);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=O,g++}x++}else if(C.isRectAreaLight){const V=t.get(C);V.color.copy(N).multiplyScalar(F),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=V,m++}else if(C.isPointLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const $=C.shadow,B=e.get(C);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,n.pointShadow[v]=B,n.pointShadowMap[v]=O,n.pointShadowMatrix[v]=C.shadow.matrix,S++}n.point[v]=V,v++}else if(C.isHemisphereLight){const V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(F),V.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==d||A.pointLength!==v||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==S||A.numSpotShadows!==g||A.numSpotMaps!==T||A.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=g+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,A.directionalLength=d,A.pointLength=v,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=S,A.numSpotShadows=g,A.numSpotMaps=T,A.numLightProbes=w,n.version=ov++)}function l(c,u){let h=0,f=0,d=0,v=0,x=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const g=n.directional[h];g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),h++}else if(S.isSpotLight){const g=n.spot[d];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const g=n.rectArea[v];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(S.width*.5,0,0),g.halfHeight.set(0,S.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const g=n.point[f];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const g=n.hemi[x];g.direction.setFromMatrixPosition(S.matrixWorld),g.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Rh(i){const t=new cv(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function hv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Rh(i),t.set(s,[o])):r>=a.length?(o=new Rh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class uv extends Ss{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fv extends Ss{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
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
}`;function mv(i,t,e){let n=new uc;const s=new Tt,r=new Tt,a=new Ce,o=new uv({depthPacking:$f}),l=new fv,c={},u=e.maxTextureSize,h={[$i]:wn,[wn]:$i,[Ye]:Ye},f=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:dv,fragmentShader:pv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new Ee;v.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Jt(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let p=this.type;this.render=function(E,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(nn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==Ti&&this.type===Ti,U=p===Ti&&this.type!==Ti;for(let O=0,V=E.length;O<V;O++){const $=E[O],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Q=B.getFrameExtents();if(s.multiply(Q),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,B.mapSize.y=r.y)),B.map===null||F===!0||U===!0){const ht=this.type!==Ti?{minFilter:un,magFilter:un}:{};B.map!==null&&B.map.dispose(),B.map=new En(s.x,s.y,ht),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const at=B.getViewportCount();for(let ht=0;ht<at;ht++){const Mt=B.getViewport(ht);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),N.viewport(a),B.updateMatrices($,ht),n=B.getFrustum(),g(w,A,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===Ti&&y(B,A),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,C)};function y(E,w){const A=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new En(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,A,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,A,d,x,null)}function S(E,w,A,M){let _=null;const C=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)_=C;else if(_=A.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=_.uuid,F=w.uuid;let U=c[N];U===void 0&&(U={},c[N]=U);let O=U[F];O===void 0&&(O=_.clone(),U[F]=O,w.addEventListener("dispose",T)),_=O}if(_.visible=w.visible,_.wireframe=w.wireframe,M===Ti?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:h[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const N=i.properties.get(_);N.light=A}return _}function g(E,w,A,M,_){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Ti)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const F=t.update(E),U=E.material;if(Array.isArray(U)){const O=F.groups;for(let V=0,$=O.length;V<$;V++){const B=O[V],Q=U[B.materialIndex];if(Q&&Q.visible){const at=S(E,Q,M,_);E.onBeforeShadow(i,E,w,A,F,at,B),i.renderBufferDirect(A,null,F,at,E,B),E.onAfterShadow(i,E,w,A,F,at,B)}}}else if(U.visible){const O=S(E,U,M,_);E.onBeforeShadow(i,E,w,A,F,O,null),i.renderBufferDirect(A,null,F,O,E,null),E.onAfterShadow(i,E,w,A,F,O,null)}}const N=E.children;for(let F=0,U=N.length;F<U;F++)g(N[F],w,A,M,_)}function T(E){E.target.removeEventListener("dispose",T);for(const A in c){const M=c[A],_=E.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const gv={[nl]:il,[sl]:ol,[rl]:ll,[sr]:al,[il]:nl,[ol]:sl,[ll]:rl,[al]:sr};function vv(i,t){function e(){let G=!1;const At=new Ce;let rt=null;const ft=new Ce(0,0,0,0);return{setMask:function(Pt){rt!==Pt&&!G&&(i.colorMask(Pt,Pt,Pt,Pt),rt=Pt)},setLocked:function(Pt){G=Pt},setClear:function(Pt,Dt,I,ot,It){It===!0&&(Pt*=ot,Dt*=ot,I*=ot),At.set(Pt,Dt,I,ot),ft.equals(At)===!1&&(i.clearColor(Pt,Dt,I,ot),ft.copy(At))},reset:function(){G=!1,rt=null,ft.set(-1,0,0,0)}}}function n(){let G=!1,At=!1,rt=null,ft=null,Pt=null;return{setReversed:function(Dt){if(At!==Dt){const I=t.get("EXT_clip_control");At?I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT):I.clipControlEXT(I.LOWER_LEFT_EXT,I.NEGATIVE_ONE_TO_ONE_EXT);const ot=Pt;Pt=null,this.setClear(ot)}At=Dt},getReversed:function(){return At},setTest:function(Dt){Dt?pt(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(Dt){rt!==Dt&&!G&&(i.depthMask(Dt),rt=Dt)},setFunc:function(Dt){if(At&&(Dt=gv[Dt]),ft!==Dt){switch(Dt){case nl:i.depthFunc(i.NEVER);break;case il:i.depthFunc(i.ALWAYS);break;case sl:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case rl:i.depthFunc(i.EQUAL);break;case al:i.depthFunc(i.GEQUAL);break;case ol:i.depthFunc(i.GREATER);break;case ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Dt}},setLocked:function(Dt){G=Dt},setClear:function(Dt){Pt!==Dt&&(At&&(Dt=1-Dt),i.clearDepth(Dt),Pt=Dt)},reset:function(){G=!1,rt=null,ft=null,Pt=null,At=!1}}}function s(){let G=!1,At=null,rt=null,ft=null,Pt=null,Dt=null,I=null,ot=null,It=null;return{setTest:function(Gt){G||(Gt?pt(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(Gt){At!==Gt&&!G&&(i.stencilMask(Gt),At=Gt)},setFunc:function(Gt,de,ie){(rt!==Gt||ft!==de||Pt!==ie)&&(i.stencilFunc(Gt,de,ie),rt=Gt,ft=de,Pt=ie)},setOp:function(Gt,de,ie){(Dt!==Gt||I!==de||ot!==ie)&&(i.stencilOp(Gt,de,ie),Dt=Gt,I=de,ot=ie)},setLocked:function(Gt){G=Gt},setClear:function(Gt){It!==Gt&&(i.clearStencil(Gt),It=Gt)},reset:function(){G=!1,At=null,rt=null,ft=null,Pt=null,Dt=null,I=null,ot=null,It=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],v=null,x=!1,m=null,p=null,y=null,S=null,g=null,T=null,E=null,w=new Ct(0,0,0),A=0,M=!1,_=null,C=null,N=null,F=null,U=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=$>=2);let Q=null,at={};const ht=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),qt=new Ce().fromArray(ht),it=new Ce().fromArray(Mt);function ut(G,At,rt,ft){const Pt=new Uint8Array(4),Dt=i.createTexture();i.bindTexture(G,Dt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let I=0;I<rt;I++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(At+I,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Dt}const yt={};yt[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),a.setFunc(sr),ee(!1),Zt(Uc),pt(i.CULL_FACE),X(nn);function pt(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function Nt(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Bt(G,At){return h[G]!==At?(i.bindFramebuffer(G,At),h[G]=At,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=At),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=At),!0):!1}function Xt(G,At){let rt=d,ft=!1;if(G){rt=f.get(At),rt===void 0&&(rt=[],f.set(At,rt));const Pt=G.textures;if(rt.length!==Pt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Dt=0,I=Pt.length;Dt<I;Dt++)rt[Dt]=i.COLOR_ATTACHMENT0+Dt;rt.length=Pt.length,ft=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,ft=!0);ft&&i.drawBuffers(rt)}function ue(G){return v!==G?(i.useProgram(G),v=G,!0):!1}const te={[Zn]:i.FUNC_ADD,[Rf]:i.FUNC_SUBTRACT,[Pf]:i.FUNC_REVERSE_SUBTRACT};te[Df]=i.MIN,te[Lf]=i.MAX;const pe={[Er]:i.ZERO,[Uf]:i.ONE,[If]:i.SRC_COLOR,[Jo]:i.SRC_ALPHA,[Of]:i.SRC_ALPHA_SATURATE,[el]:i.DST_COLOR,[tl]:i.DST_ALPHA,[Nf]:i.ONE_MINUS_SRC_COLOR,[Qo]:i.ONE_MINUS_SRC_ALPHA,[Ff]:i.ONE_MINUS_DST_COLOR,[zf]:i.ONE_MINUS_DST_ALPHA,[Bf]:i.CONSTANT_COLOR,[kf]:i.ONE_MINUS_CONSTANT_COLOR,[Vf]:i.CONSTANT_ALPHA,[Gf]:i.ONE_MINUS_CONSTANT_ALPHA};function X(G,At,rt,ft,Pt,Dt,I,ot,It,Gt){if(G===nn){x===!0&&(Nt(i.BLEND),x=!1);return}if(x===!1&&(pt(i.BLEND),x=!0),G!==fu){if(G!==m||Gt!==M){if((p!==Zn||g!==Zn)&&(i.blendEquation(i.FUNC_ADD),p=Zn,g=Zn),Gt)switch(G){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ei:i.blendFunc(i.ONE,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ei:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,S=null,T=null,E=null,w.set(0,0,0),A=0,m=G,M=Gt}return}Pt=Pt||At,Dt=Dt||rt,I=I||ft,(At!==p||Pt!==g)&&(i.blendEquationSeparate(te[At],te[Pt]),p=At,g=Pt),(rt!==y||ft!==S||Dt!==T||I!==E)&&(i.blendFuncSeparate(pe[rt],pe[ft],pe[Dt],pe[I]),y=rt,S=ft,T=Dt,E=I),(ot.equals(w)===!1||It!==A)&&(i.blendColor(ot.r,ot.g,ot.b,It),w.copy(ot),A=It),m=G,M=!1}function Te(G,At){G.side===Ye?Nt(i.CULL_FACE):pt(i.CULL_FACE);let rt=G.side===wn;At&&(rt=!rt),ee(rt),G.blending===Xi&&G.transparent===!1?X(nn):X(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const ft=G.stencilWrite;o.setTest(ft),ft&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),fe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(G){_!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),_=G)}function Zt(G){G!==Af?(pt(i.CULL_FACE),G!==C&&(G===Uc?i.cullFace(i.BACK):G===Cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),C=G}function Vt(G){G!==N&&(V&&i.lineWidth(G),N=G)}function fe(G,At,rt){G?(pt(i.POLYGON_OFFSET_FILL),(F!==At||U!==rt)&&(i.polygonOffset(At,rt),F=At,U=rt)):Nt(i.POLYGON_OFFSET_FILL)}function j(G){G?pt(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function R(G){G===void 0&&(G=i.TEXTURE0+O-1),Q!==G&&(i.activeTexture(G),Q=G)}function b(G,At,rt){rt===void 0&&(Q===null?rt=i.TEXTURE0+O-1:rt=Q);let ft=at[rt];ft===void 0&&(ft={type:void 0,texture:void 0},at[rt]=ft),(ft.type!==G||ft.texture!==At)&&(Q!==rt&&(i.activeTexture(rt),Q=rt),i.bindTexture(G,At||yt[G]),ft.type=G,ft.texture=At)}function H(){const G=at[Q];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _t(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Yt(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Kt(G){qt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),qt.copy(G))}function Ot(G){it.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),it.copy(G))}function ae(G,At){let rt=c.get(At);rt===void 0&&(rt=new WeakMap,c.set(At,rt));let ft=rt.get(G);ft===void 0&&(ft=i.getUniformBlockIndex(At,G.name),rt.set(G,ft))}function $t(G,At){const ft=c.get(At).get(G);l.get(At)!==ft&&(i.uniformBlockBinding(At,ft,G.__bindingPointIndex),l.set(At,ft))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Q=null,at={},h={},f=new WeakMap,d=[],v=null,x=!1,m=null,p=null,y=null,S=null,g=null,T=null,E=null,w=new Ct(0,0,0),A=0,M=!1,_=null,C=null,N=null,F=null,U=null,qt.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pt,disable:Nt,bindFramebuffer:Bt,drawBuffers:Xt,useProgram:ue,setBlending:X,setMaterial:Te,setFlipSided:ee,setCullFace:Zt,setLineWidth:Vt,setPolygonOffset:fe,setScissorTest:j,activeTexture:R,bindTexture:b,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:zt,texImage3D:Yt,updateUBOMapping:ae,uniformBlockBinding:$t,texStorage2D:Qt,texStorage3D:_t,texSubImage2D:et,texSubImage3D:Rt,compressedTexSubImage2D:vt,compressedTexSubImage3D:bt,scissor:Kt,viewport:Ot,reset:ce}}function Ph(i,t,e,n){const s=xv(n);switch(e){case Su:return i*t;case wu:return i*t;case Eu:return i*t*2;case Ya:return i*t/s.components*s.byteLength;case sc:return i*t/s.components*s.byteLength;case Tu:return i*t*2/s.components*s.byteLength;case rc:return i*t*2/s.components*s.byteLength;case bu:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case ac:return i*t*4/s.components*s.byteLength;case Ua:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dl:case ml:return Math.max(i,16)*Math.max(t,8)/4;case fl:case pl:return Math.max(i,8)*Math.max(t,8)/2;case gl:case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fa:case Ul:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Au:case Nl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zl:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xv(i){switch(i){case fi:case _u:return{byteLength:1,components:1};case Fr:case Mu:case kn:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case ms:case ec:case ti:return{byteLength:4,components:1};case yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _v(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,b){return d?new OffscreenCanvas(R,b):Wa("canvas")}function x(R,b,H){let Z=1;const tt=j(R);if((tt.width>H||tt.height>H)&&(Z=H/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const et=Math.floor(Z*tt.width),Rt=Math.floor(Z*tt.height);h===void 0&&(h=v(et,Rt));const vt=b?v(et,Rt):h;return vt.width=et,vt.height=Rt,vt.getContext("2d").drawImage(R,0,0,et,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+et+"x"+Rt+")."),vt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,b,H,Z,tt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=b;if(b===i.RED&&(H===i.FLOAT&&(et=i.R32F),H===i.HALF_FLOAT&&(et=i.R16F),H===i.UNSIGNED_BYTE&&(et=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.R8UI),H===i.UNSIGNED_SHORT&&(et=i.R16UI),H===i.UNSIGNED_INT&&(et=i.R32UI),H===i.BYTE&&(et=i.R8I),H===i.SHORT&&(et=i.R16I),H===i.INT&&(et=i.R32I)),b===i.RG&&(H===i.FLOAT&&(et=i.RG32F),H===i.HALF_FLOAT&&(et=i.RG16F),H===i.UNSIGNED_BYTE&&(et=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RG8UI),H===i.UNSIGNED_SHORT&&(et=i.RG16UI),H===i.UNSIGNED_INT&&(et=i.RG32UI),H===i.BYTE&&(et=i.RG8I),H===i.SHORT&&(et=i.RG16I),H===i.INT&&(et=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGB8UI),H===i.UNSIGNED_SHORT&&(et=i.RGB16UI),H===i.UNSIGNED_INT&&(et=i.RGB32UI),H===i.BYTE&&(et=i.RGB8I),H===i.SHORT&&(et=i.RGB16I),H===i.INT&&(et=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),H===i.UNSIGNED_INT&&(et=i.RGBA32UI),H===i.BYTE&&(et=i.RGBA8I),H===i.SHORT&&(et=i.RGBA16I),H===i.INT&&(et=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),b===i.RGBA){const Rt=tt?$a:xe.getTransfer(Z);H===i.FLOAT&&(et=i.RGBA32F),H===i.HALF_FLOAT&&(et=i.RGBA16F),H===i.UNSIGNED_BYTE&&(et=Rt===be?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function g(R,b){let H;return R?b===null||b===ms||b===gs?H=i.DEPTH24_STENCIL8:b===ti?H=i.DEPTH32F_STENCIL8:b===Fr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ms||b===gs?H=i.DEPTH_COMPONENT24:b===ti?H=i.DEPTH_COMPONENT32F:b===Fr&&(H=i.DEPTH_COMPONENT16),H}function T(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==un&&R.minFilter!==ci?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function E(R){const b=R.target;b.removeEventListener("dispose",E),A(b),b.isVideoTexture&&u.delete(b)}function w(R){const b=R.target;b.removeEventListener("dispose",w),_(b)}function A(R){const b=n.get(R);if(b.__webglInit===void 0)return;const H=R.source,Z=f.get(H);if(Z){const tt=Z[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(R),Object.keys(Z).length===0&&f.delete(H)}n.remove(R)}function M(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const H=R.source,Z=f.get(H);delete Z[b.__cacheKey],a.memory.textures--}function _(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let tt=0;tt<b.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=R.textures;for(let Z=0,tt=H.length;Z<tt;Z++){const et=n.get(H[Z]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(R)}let C=0;function N(){C=0}function F(){const R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function U(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function O(R,b){const H=n.get(R);if(R.isVideoTexture&&Vt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(H,R,b);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function V(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){it(H,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function $(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){it(H,R,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function B(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){ut(H,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const Q={[Ui]:i.REPEAT,[os]:i.CLAMP_TO_EDGE,[ul]:i.MIRRORED_REPEAT},at={[un]:i.NEAREST,[qf]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[ci]:i.LINEAR,[lo]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},ht={[Zf]:i.NEVER,[nd]:i.ALWAYS,[Kf]:i.LESS,[Cu]:i.LEQUAL,[Jf]:i.EQUAL,[ed]:i.GEQUAL,[Qf]:i.GREATER,[td]:i.NOTEQUAL};function Mt(R,b){if(b.type===ti&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ci||b.magFilter===lo||b.magFilter===Kr||b.magFilter===ls||b.minFilter===ci||b.minFilter===lo||b.minFilter===Kr||b.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Q[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Q[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Q[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,at[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,at[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ht[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===un||b.minFilter!==Kr&&b.minFilter!==ls||b.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function qt(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",E));const Z=b.source;let tt=f.get(Z);tt===void 0&&(tt={},f.set(Z,tt));const et=U(b);if(et!==R.__cacheKey){tt[et]===void 0&&(tt[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),tt[et].usedTimes++;const Rt=tt[R.__cacheKey];Rt!==void 0&&(tt[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&M(b)),R.__cacheKey=et,R.__webglTexture=tt[et].texture}return H}function it(R,b,H){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=qt(R,b),et=b.source;e.bindTexture(Z,R.__webglTexture,i.TEXTURE0+H);const Rt=n.get(et);if(et.version!==Rt.__version||tt===!0){e.activeTexture(i.TEXTURE0+H);const vt=xe.getPrimaries(xe.workingColorSpace),bt=b.colorSpace===Gi?null:xe.getPrimaries(b.colorSpace),Qt=b.colorSpace===Gi||vt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let _t=x(b.image,!1,s.maxTextureSize);_t=fe(b,_t);const zt=r.convert(b.format,b.colorSpace),Yt=r.convert(b.type);let Kt=S(b.internalFormat,zt,Yt,b.colorSpace,b.isVideoTexture);Mt(Z,b);let Ot;const ae=b.mipmaps,$t=b.isVideoTexture!==!0,ce=Rt.__version===void 0||tt===!0,G=et.dataReady,At=T(b,_t);if(b.isDepthTexture)Kt=g(b.format===vs,b.type),ce&&($t?e.texStorage2D(i.TEXTURE_2D,1,Kt,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,Kt,_t.width,_t.height,0,zt,Yt,null));else if(b.isDataTexture)if(ae.length>0){$t&&ce&&e.texStorage2D(i.TEXTURE_2D,At,Kt,ae[0].width,ae[0].height);for(let rt=0,ft=ae.length;rt<ft;rt++)Ot=ae[rt],$t?G&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Ot.width,Ot.height,zt,Yt,Ot.data):e.texImage2D(i.TEXTURE_2D,rt,Kt,Ot.width,Ot.height,0,zt,Yt,Ot.data);b.generateMipmaps=!1}else $t?(ce&&e.texStorage2D(i.TEXTURE_2D,At,Kt,_t.width,_t.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t.width,_t.height,zt,Yt,_t.data)):e.texImage2D(i.TEXTURE_2D,0,Kt,_t.width,_t.height,0,zt,Yt,_t.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$t&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Kt,ae[0].width,ae[0].height,_t.depth);for(let rt=0,ft=ae.length;rt<ft;rt++)if(Ot=ae[rt],b.format!==Bn)if(zt!==null)if($t){if(G)if(b.layerUpdates.size>0){const Pt=Ph(Ot.width,Ot.height,b.format,b.type);for(const Dt of b.layerUpdates){const I=Ot.data.subarray(Dt*Pt/Ot.data.BYTES_PER_ELEMENT,(Dt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Dt,Ot.width,Ot.height,1,zt,I)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Ot.width,Ot.height,_t.depth,zt,Ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Kt,Ot.width,Ot.height,_t.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Ot.width,Ot.height,_t.depth,zt,Yt,Ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Kt,Ot.width,Ot.height,_t.depth,0,zt,Yt,Ot.data)}else{$t&&ce&&e.texStorage2D(i.TEXTURE_2D,At,Kt,ae[0].width,ae[0].height);for(let rt=0,ft=ae.length;rt<ft;rt++)Ot=ae[rt],b.format!==Bn?zt!==null?$t?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Ot.width,Ot.height,zt,Ot.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?G&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Ot.width,Ot.height,zt,Yt,Ot.data):e.texImage2D(i.TEXTURE_2D,rt,Kt,Ot.width,Ot.height,0,zt,Yt,Ot.data)}else if(b.isDataArrayTexture)if($t){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Kt,_t.width,_t.height,_t.depth),G)if(b.layerUpdates.size>0){const rt=Ph(_t.width,_t.height,b.format,b.type);for(const ft of b.layerUpdates){const Pt=_t.data.subarray(ft*rt/_t.data.BYTES_PER_ELEMENT,(ft+1)*rt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,_t.width,_t.height,1,zt,Yt,Pt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,zt,Yt,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Kt,_t.width,_t.height,_t.depth,0,zt,Yt,_t.data);else if(b.isData3DTexture)$t?(ce&&e.texStorage3D(i.TEXTURE_3D,At,Kt,_t.width,_t.height,_t.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,zt,Yt,_t.data)):e.texImage3D(i.TEXTURE_3D,0,Kt,_t.width,_t.height,_t.depth,0,zt,Yt,_t.data);else if(b.isFramebufferTexture){if(ce)if($t)e.texStorage2D(i.TEXTURE_2D,At,Kt,_t.width,_t.height);else{let rt=_t.width,ft=_t.height;for(let Pt=0;Pt<At;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Kt,rt,ft,0,zt,Yt,null),rt>>=1,ft>>=1}}else if(ae.length>0){if($t&&ce){const rt=j(ae[0]);e.texStorage2D(i.TEXTURE_2D,At,Kt,rt.width,rt.height)}for(let rt=0,ft=ae.length;rt<ft;rt++)Ot=ae[rt],$t?G&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,zt,Yt,Ot):e.texImage2D(i.TEXTURE_2D,rt,Kt,zt,Yt,Ot);b.generateMipmaps=!1}else if($t){if(ce){const rt=j(_t);e.texStorage2D(i.TEXTURE_2D,At,Kt,rt.width,rt.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,zt,Yt,_t)}else e.texImage2D(i.TEXTURE_2D,0,Kt,zt,Yt,_t);m(b)&&p(Z),Rt.__version=et.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ut(R,b,H){if(b.image.length!==6)return;const Z=qt(R,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const et=n.get(tt);if(tt.version!==et.__version||Z===!0){e.activeTexture(i.TEXTURE0+H);const Rt=xe.getPrimaries(xe.workingColorSpace),vt=b.colorSpace===Gi?null:xe.getPrimaries(b.colorSpace),bt=b.colorSpace===Gi||Rt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Qt=b.isCompressedTexture||b.image[0].isCompressedTexture,_t=b.image[0]&&b.image[0].isDataTexture,zt=[];for(let ft=0;ft<6;ft++)!Qt&&!_t?zt[ft]=x(b.image[ft],!0,s.maxCubemapSize):zt[ft]=_t?b.image[ft].image:b.image[ft],zt[ft]=fe(b,zt[ft]);const Yt=zt[0],Kt=r.convert(b.format,b.colorSpace),Ot=r.convert(b.type),ae=S(b.internalFormat,Kt,Ot,b.colorSpace),$t=b.isVideoTexture!==!0,ce=et.__version===void 0||Z===!0,G=tt.dataReady;let At=T(b,Yt);Mt(i.TEXTURE_CUBE_MAP,b);let rt;if(Qt){$t&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,ae,Yt.width,Yt.height);for(let ft=0;ft<6;ft++){rt=zt[ft].mipmaps;for(let Pt=0;Pt<rt.length;Pt++){const Dt=rt[Pt];b.format!==Bn?Kt!==null?$t?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,0,0,Dt.width,Dt.height,Kt,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,ae,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,0,0,Dt.width,Dt.height,Kt,Ot,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,ae,Dt.width,Dt.height,0,Kt,Ot,Dt.data)}}}else{if(rt=b.mipmaps,$t&&ce){rt.length>0&&At++;const ft=j(zt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,ae,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(_t){$t?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,zt[ft].width,zt[ft].height,Kt,Ot,zt[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ae,zt[ft].width,zt[ft].height,0,Kt,Ot,zt[ft].data);for(let Pt=0;Pt<rt.length;Pt++){const I=rt[Pt].image[ft].image;$t?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,0,0,I.width,I.height,Kt,Ot,I.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,ae,I.width,I.height,0,Kt,Ot,I.data)}}else{$t?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Kt,Ot,zt[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ae,Kt,Ot,zt[ft]);for(let Pt=0;Pt<rt.length;Pt++){const Dt=rt[Pt];$t?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,0,0,Kt,Ot,Dt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,ae,Kt,Ot,Dt.image[ft])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),et.__version=tt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function yt(R,b,H,Z,tt,et){const Rt=r.convert(H.format,H.colorSpace),vt=r.convert(H.type),bt=S(H.internalFormat,Rt,vt,H.colorSpace),Qt=n.get(b),_t=n.get(H);if(_t.__renderTarget=b,!Qt.__hasExternalTextures){const zt=Math.max(1,b.width>>et),Yt=Math.max(1,b.height>>et);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,et,bt,zt,Yt,b.depth,0,Rt,vt,null):e.texImage2D(tt,et,bt,zt,Yt,0,Rt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Zt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,_t.__webglTexture,0,ee(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,_t.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(R,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const Z=b.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,et=g(b.stencilBuffer,tt),Rt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=ee(b);Zt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,et,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,et,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,et,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,R)}else{const Z=b.textures;for(let tt=0;tt<Z.length;tt++){const et=Z[tt],Rt=r.convert(et.format,et.colorSpace),vt=r.convert(et.type),bt=S(et.internalFormat,Rt,vt,et.colorSpace),Qt=ee(b);H&&Zt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,bt,b.width,b.height):Zt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,bt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,bt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const tt=Z.__webglTexture,et=ee(b);if(b.depthTexture.format===js)Zt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(b.depthTexture.format===vs)Zt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Bt(R){const b=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=Z}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Nt(b.__webglFramebuffer,R)}else if(H){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=i.createRenderbuffer(),pt(b.__webglDepthbuffer[Z],R,!1);else{const tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),pt(b.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(R,b,H){const Z=n.get(R);b!==void 0&&yt(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Bt(R)}function ue(R){const b=R.texture,H=n.get(R),Z=n.get(b);R.addEventListener("dispose",w);const tt=R.textures,et=R.isWebGLCubeRenderTarget===!0,Rt=tt.length>1;if(Rt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,a.memory.textures++),et){H.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[vt]=[];for(let bt=0;bt<b.mipmaps.length;bt++)H.__webglFramebuffer[vt][bt]=i.createFramebuffer()}else H.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let vt=0;vt<b.mipmaps.length;vt++)H.__webglFramebuffer[vt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let vt=0,bt=tt.length;vt<bt;vt++){const Qt=n.get(tt[vt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Zt(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let vt=0;vt<tt.length;vt++){const bt=tt[vt];H.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[vt]);const Qt=r.convert(bt.format,bt.colorSpace),_t=r.convert(bt.type),zt=S(bt.internalFormat,Qt,_t,bt.colorSpace,R.isXRRenderTarget===!0),Yt=ee(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,zt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,H.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,b);for(let vt=0;vt<6;vt++)if(b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)yt(H.__webglFramebuffer[vt][bt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt);else yt(H.__webglFramebuffer[vt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let vt=0,bt=tt.length;vt<bt;vt++){const Qt=tt[vt],_t=n.get(Qt);e.bindTexture(i.TEXTURE_2D,_t.__webglTexture),Mt(i.TEXTURE_2D,Qt),yt(H.__webglFramebuffer,R,Qt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),m(Qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(vt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Z.__webglTexture),Mt(vt,b),b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)yt(H.__webglFramebuffer[bt],R,b,i.COLOR_ATTACHMENT0,vt,bt);else yt(H.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,vt,0);m(b)&&p(vt),e.unbindTexture()}R.depthBuffer&&Bt(R)}function te(R){const b=R.textures;for(let H=0,Z=b.length;H<Z;H++){const tt=b[H];if(m(tt)){const et=y(R),Rt=n.get(tt).__webglTexture;e.bindTexture(et,Rt),p(et),e.unbindTexture()}}}const pe=[],X=[];function Te(R){if(R.samples>0){if(Zt(R)===!1){const b=R.textures,H=R.width,Z=R.height;let tt=i.COLOR_BUFFER_BIT;const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(R),vt=b.length>1;if(vt)for(let bt=0;bt<b.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let bt=0;bt<b.length;bt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);const Qt=n.get(b[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,tt,i.NEAREST),l===!0&&(pe.length=0,X.length=0,pe.push(i.COLOR_ATTACHMENT0+bt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(pe.push(et),X.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let bt=0;bt<b.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);const Qt=n.get(b[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ee(R){return Math.min(s.maxSamples,R.samples)}function Zt(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Vt(R){const b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function fe(R,b){const H=R.colorSpace,Z=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==hr&&H!==Gi&&(xe.getTransfer(H)===be?(Z!==Bn||tt!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function j(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=Xt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Zt}function Mv(i,t){function e(n,s=Gi){let r;const a=xe.getTransfer(s);if(n===fi)return i.UNSIGNED_BYTE;if(n===nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ic)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_u)return i.BYTE;if(n===Mu)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===ec)return i.INT;if(n===ms)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===kn)return i.HALF_FLOAT;if(n===Su)return i.ALPHA;if(n===bu)return i.RGB;if(n===Bn)return i.RGBA;if(n===wu)return i.LUMINANCE;if(n===Eu)return i.LUMINANCE_ALPHA;if(n===js)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===Ya)return i.RED;if(n===sc)return i.RED_INTEGER;if(n===Tu)return i.RG;if(n===rc)return i.RG_INTEGER;if(n===ac)return i.RGBA_INTEGER;if(n===Ua||n===Ia||n===Na||n===za)if(a===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===dl||n===pl||n===ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gl||n===vl||n===xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gl||n===vl)return a===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_l||n===Ml||n===yl||n===Sl||n===bl||n===wl||n===El||n===Tl||n===Al||n===Cl||n===Rl||n===Pl||n===Dl||n===Ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_l)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ml)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Al)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ll)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fa||n===Ul||n===Il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fa)return a===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Au||n===Nl||n===zl||n===Fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class yv extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sv={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,v=.005;c.inputState.pinching&&f>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
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

}`;class Ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new fn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Oe({vertexShader:bv,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tv extends ur{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,v=null;const x=new Ev,m=e.getContextAttributes();let p=null,y=null;const S=[],g=[],T=new Tt;let E=null;const w=new Dn;w.viewport=new Ce;const A=new Dn;A.viewport=new Ce;const M=[w,A],_=new yv;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ut=S[it];return ut===void 0&&(ut=new zo,S[it]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(it){let ut=S[it];return ut===void 0&&(ut=new zo,S[it]=ut),ut.getGripSpace()},this.getHand=function(it){let ut=S[it];return ut===void 0&&(ut=new zo,S[it]=ut),ut.getHandSpace()};function F(it){const ut=g.indexOf(it.inputSource);if(ut===-1)return;const yt=S[ut];yt!==void 0&&(yt.update(it.inputSource,it.frame,c||a),yt.dispatchEvent({type:it.type,data:it.inputSource}))}function U(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",O);for(let it=0;it<S.length;it++){const ut=g[it];ut!==null&&(g[it]=null,S[it].disconnect(ut))}C=null,N=null,x.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,y=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",U),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new En(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,yt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?vs:js,yt=m.stencil?gs:ms);const Nt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new En(f.textureWidth,f.textureHeight,{format:Bn,type:fi,depthTexture:new pc(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(it){for(let ut=0;ut<it.removed.length;ut++){const yt=it.removed[ut],pt=g.indexOf(yt);pt>=0&&(g[pt]=null,S[pt].disconnect(yt))}for(let ut=0;ut<it.added.length;ut++){const yt=it.added[ut];let pt=g.indexOf(yt);if(pt===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=g.length){g.push(yt),pt=Bt;break}else if(g[Bt]===null){g[Bt]=yt,pt=Bt;break}if(pt===-1)break}const Nt=S[pt];Nt&&Nt.connect(yt)}}const V=new z,$=new z;function B(it,ut,yt){V.setFromMatrixPosition(ut.matrixWorld),$.setFromMatrixPosition(yt.matrixWorld);const pt=V.distanceTo($),Nt=ut.projectionMatrix.elements,Bt=yt.projectionMatrix.elements,Xt=Nt[14]/(Nt[10]-1),ue=Nt[14]/(Nt[10]+1),te=(Nt[9]+1)/Nt[5],pe=(Nt[9]-1)/Nt[5],X=(Nt[8]-1)/Nt[0],Te=(Bt[8]+1)/Bt[0],ee=Xt*X,Zt=Xt*Te,Vt=pt/(-X+Te),fe=Vt*-X;if(ut.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(fe),it.translateZ(Vt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Nt[10]===-1)it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const j=Xt+Vt,R=ue+Vt,b=ee-fe,H=Zt+(pt-fe),Z=te*ue/R*j,tt=pe*ue/R*j;it.projectionMatrix.makePerspective(b,H,Z,tt,j,R),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Q(it,ut){ut===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ut.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let ut=it.near,yt=it.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),_.near=A.near=w.near=ut,_.far=A.far=w.far=yt,(C!==_.near||N!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,N=_.far),w.layers.mask=it.layers.mask|2,A.layers.mask=it.layers.mask|4,_.layers.mask=w.layers.mask|A.layers.mask;const pt=it.parent,Nt=_.cameras;Q(_,pt);for(let Bt=0;Bt<Nt.length;Bt++)Q(Nt[Bt],pt);Nt.length===2?B(_,w,A):_.projectionMatrix.copy(w.projectionMatrix),at(it,_,pt)};function at(it,ut,yt){yt===null?it.matrix.copy(ut.matrixWorld):(it.matrix.copy(yt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ut.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Or*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(it){l=it,f!==null&&(f.fixedFoveation=it),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=it)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ht=null;function Mt(it,ut){if(u=ut.getViewerPose(c||a),v=ut,u!==null){const yt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let pt=!1;yt.length!==_.cameras.length&&(_.cameras.length=0,pt=!0);for(let Bt=0;Bt<yt.length;Bt++){const Xt=yt[Bt];let ue=null;if(d!==null)ue=d.getViewport(Xt);else{const pe=h.getViewSubImage(f,Xt);ue=pe.viewport,Bt===0&&(t.setRenderTargetTextures(y,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),t.setRenderTarget(y))}let te=M[Bt];te===void 0&&(te=new Dn,te.layers.enable(Bt),te.viewport=new Ce,M[Bt]=te),te.matrix.fromArray(Xt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Xt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ue.x,ue.y,ue.width,ue.height),Bt===0&&(_.matrix.copy(te.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),pt===!0&&_.cameras.push(te)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Bt=h.getDepthInformation(yt[0]);Bt&&Bt.isValid&&Bt.texture&&x.init(t,Bt,s.renderState)}}for(let yt=0;yt<S.length;yt++){const pt=g[yt],Nt=S[yt];pt!==null&&Nt!==void 0&&Nt.update(pt,ut,c||a)}ht&&ht(it,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),v=null}const qt=new Ou;qt.setAnimationLoop(Mt),this.setAnimationLoop=function(it){ht=it},this.dispose=function(){}}}const es=new di,Av=new _e;function Cv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,g){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,g)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),S=y.envMap,g=y.envMapRotation;S&&(m.envMap.value=S,es.copy(g),es.x*=-1,es.y*=-1,es.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(Av.makeRotationFromEuler(es)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rv(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const g=S.program;n.uniformBlockBinding(y,g)}function c(y,S){let g=s[y.id];g===void 0&&(v(y),g=u(y),s[y.id]=g,y.addEventListener("dispose",m));const T=S.program;n.updateUBOMapping(y,T);const E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function u(y){const S=h();y.__bindingPointIndex=S;const g=i.createBuffer(),T=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,g),g}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=s[y.id],g=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,w=g.length;E<w;E++){const A=Array.isArray(g[E])?g[E]:[g[E]];for(let M=0,_=A.length;M<_;M++){const C=A[M];if(d(C,E,M,T)===!0){const N=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let U=0;for(let O=0;O<F.length;O++){const V=F[O],$=x(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,N+U,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,U),U+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,S,g,T){const E=y.value,w=S+"_"+g;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{const A=T[w];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return T[w]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function v(y){const S=y.uniforms;let g=0;const T=16;for(let w=0,A=S.length;w<A;w++){const M=Array.isArray(S[w])?S[w]:[S[w]];for(let _=0,C=M.length;_<C;_++){const N=M[_],F=Array.isArray(N.value)?N.value:[N.value];for(let U=0,O=F.length;U<O;U++){const V=F[U],$=x(V),B=g%T,Q=B%$.boundary,at=B+Q;g+=Q,at!==0&&T-at<$.storage&&(g+=T-at),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=g,g+=$.storage}}}const E=g%T;return E>0&&(g+=T-E),y.__size=g,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const g=a.indexOf(S.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Pv{constructor(t={}){const{canvas:e=_d(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=qi,this.toneMappingExposure=1;const g=this;let T=!1,E=0,w=0,A=null,M=-1,_=null;const C=new Ce,N=new Ce;let F=null;const U=new Ct(0);let O=0,V=e.width,$=e.height,B=1,Q=null,at=null;const ht=new Ce(0,0,V,$),Mt=new Ce(0,0,V,$);let qt=!1;const it=new uc;let ut=!1,yt=!1;const pt=new _e,Nt=new _e,Bt=new z,Xt=new Ce,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function pe(){return A===null?B:1}let X=n;function Te(P,q){return e.getContext(P,q)}try{const P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jl}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),X===null){const q="webgl2";if(X=Te(q,P),X===null)throw Te(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ee,Zt,Vt,fe,j,R,b,H,Z,tt,et,Rt,vt,bt,Qt,_t,zt,Yt,Kt,Ot,ae,$t,ce,G;function At(){ee=new Nm(X),ee.init(),$t=new Mv(X,ee),Zt=new Rm(X,ee,t,$t),Vt=new vv(X,ee),Zt.reverseDepthBuffer&&f&&Vt.buffers.depth.setReversed(!0),fe=new Om(X),j=new nv,R=new _v(X,ee,Vt,j,Zt,$t,fe),b=new Dm(g),H=new Im(g),Z=new Xd(X),ce=new Am(X,Z),tt=new zm(X,Z,fe,ce),et=new km(X,tt,Z,fe),Kt=new Bm(X,Zt,R),_t=new Pm(j),Rt=new ev(g,b,H,ee,Zt,ce,_t),vt=new Cv(g,j),bt=new sv,Qt=new hv(ee),Yt=new Tm(g,b,H,Vt,et,d,l),zt=new mv(g,et,Zt),G=new Rv(X,fe,Zt,Vt),Ot=new Cm(X,ee,fe),ae=new Fm(X,ee,fe),fe.programs=Rt.programs,g.capabilities=Zt,g.extensions=ee,g.properties=j,g.renderLists=bt,g.shadowMap=zt,g.state=Vt,g.info=fe}At();const rt=new Tv(g,X);this.xr=rt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const P=ee.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ee.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(V,$,!1))},this.getSize=function(P){return P.set(V,$)},this.setSize=function(P,q,nt=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=P,$=q,e.width=Math.floor(P*B),e.height=Math.floor(q*B),nt===!0&&(e.style.width=P+"px",e.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(V*B,$*B).floor()},this.setDrawingBufferSize=function(P,q,nt){V=P,$=q,B=nt,e.width=Math.floor(P*nt),e.height=Math.floor(q*nt),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(ht)},this.setViewport=function(P,q,nt,st){P.isVector4?ht.set(P.x,P.y,P.z,P.w):ht.set(P,q,nt,st),Vt.viewport(C.copy(ht).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(Mt)},this.setScissor=function(P,q,nt,st){P.isVector4?Mt.set(P.x,P.y,P.z,P.w):Mt.set(P,q,nt,st),Vt.scissor(N.copy(Mt).multiplyScalar(B).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(P){Vt.setScissorTest(qt=P)},this.setOpaqueSort=function(P){Q=P},this.setTransparentSort=function(P){at=P},this.getClearColor=function(P){return P.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(P=!0,q=!0,nt=!0){let st=0;if(P){let Y=!1;if(A!==null){const Et=A.texture.format;Y=Et===ac||Et===rc||Et===sc}if(Y){const Et=A.texture.type,Ft=Et===fi||Et===ms||Et===Fr||Et===gs||Et===nc||Et===ic,Wt=Yt.getClearColor(),L=Yt.getClearAlpha(),D=Wt.r,W=Wt.g,J=Wt.b;Ft?(v[0]=D,v[1]=W,v[2]=J,v[3]=L,X.clearBufferuiv(X.COLOR,0,v)):(x[0]=D,x[1]=W,x[2]=J,x[3]=L,X.clearBufferiv(X.COLOR,0,x))}else st|=X.COLOR_BUFFER_BIT}q&&(st|=X.DEPTH_BUFFER_BIT),nt&&(st|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),bt.dispose(),Qt.dispose(),j.dispose(),b.dispose(),H.dispose(),et.dispose(),ce.dispose(),G.dispose(),Rt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Le),rt.removeEventListener("sessionend",Ne),He.stop()};function ft(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const P=fe.autoReset,q=zt.enabled,nt=zt.autoUpdate,st=zt.needsUpdate,Y=zt.type;At(),fe.autoReset=P,zt.enabled=q,zt.autoUpdate=nt,zt.needsUpdate=st,zt.type=Y}function Dt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function I(P){const q=P.target;q.removeEventListener("dispose",I),ot(q)}function ot(P){It(P),j.remove(P)}function It(P){const q=j.get(P).programs;q!==void 0&&(q.forEach(function(nt){Rt.releaseProgram(nt)}),P.isShaderMaterial&&Rt.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,nt,st,Y,Et){q===null&&(q=ue);const Ft=Y.isMesh&&Y.matrixWorld.determinant()<0,Wt=xi(P,q,nt,st,Y);Vt.setMaterial(st,Ft);let L=nt.index,D=1;if(st.wireframe===!0){if(L=tt.getWireframeAttribute(nt),L===void 0)return;D=2}const W=nt.drawRange,J=nt.attributes.position;let lt=W.start*D,xt=(W.start+W.count)*D;Et!==null&&(lt=Math.max(lt,Et.start*D),xt=Math.min(xt,(Et.start+Et.count)*D)),L!==null?(lt=Math.max(lt,0),xt=Math.min(xt,L.count)):J!=null&&(lt=Math.max(lt,0),xt=Math.min(xt,J.count));const St=xt-lt;if(St<0||St===1/0)return;ce.setup(Y,st,Wt,nt,L);let dt,Lt=Ot;if(L!==null&&(dt=Z.get(L),Lt=ae,Lt.setIndex(dt)),Y.isMesh)st.wireframe===!0?(Vt.setLineWidth(st.wireframeLinewidth*pe()),Lt.setMode(X.LINES)):Lt.setMode(X.TRIANGLES);else if(Y.isLine){let wt=st.linewidth;wt===void 0&&(wt=1),Vt.setLineWidth(wt*pe()),Y.isLineSegments?Lt.setMode(X.LINES):Y.isLineLoop?Lt.setMode(X.LINE_LOOP):Lt.setMode(X.LINE_STRIP)}else Y.isPoints?Lt.setMode(X.POINTS):Y.isSprite&&Lt.setMode(X.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Lt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))Lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const wt=Y._multiDrawStarts,ve=Y._multiDrawCounts,jt=Y._multiDrawCount,Me=L?Z.get(L).bytesPerElement:1,ii=j.get(st).currentProgram.getUniforms();for(let Xe=0;Xe<jt;Xe++)ii.setValue(X,"_gl_DrawID",Xe),Lt.render(wt[Xe]/Me,ve[Xe])}else if(Y.isInstancedMesh)Lt.renderInstances(lt,St,Y.count);else if(nt.isInstancedBufferGeometry){const wt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,ve=Math.min(nt.instanceCount,wt);Lt.renderInstances(lt,St,ve)}else Lt.render(lt,St)};function Gt(P,q,nt){P.transparent===!0&&P.side===Ye&&P.forceSinglePass===!1?(P.side=wn,P.needsUpdate=!0,vi(P,q,nt),P.side=$i,P.needsUpdate=!0,vi(P,q,nt),P.side=Ye):vi(P,q,nt)}this.compile=function(P,q,nt=null){nt===null&&(nt=P),p=Qt.get(nt),p.init(q),S.push(p),nt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),P!==nt&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const st=new Set;return P.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Et=Y.material;if(Et)if(Array.isArray(Et))for(let Ft=0;Ft<Et.length;Ft++){const Wt=Et[Ft];Gt(Wt,nt,Y),st.add(Wt)}else Gt(Et,nt,Y),st.add(Et)}),S.pop(),p=null,st},this.compileAsync=function(P,q,nt=null){const st=this.compile(P,q,nt);return new Promise(Y=>{function Et(){if(st.forEach(function(Ft){j.get(Ft).currentProgram.isReady()&&st.delete(Ft)}),st.size===0){Y(P);return}setTimeout(Et,10)}ee.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let de=null;function ie(P){de&&de(P)}function Le(){He.stop()}function Ne(){He.start()}const He=new Ou;He.setAnimationLoop(ie),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(P){de=P,rt.setAnimationLoop(P),P===null?He.stop():He.start()},rt.addEventListener("sessionstart",Le),rt.addEventListener("sessionend",Ne),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(q),q=rt.getCamera()),P.isScene===!0&&P.onBeforeRender(g,P,q,A),p=Qt.get(P,S.length),p.init(q),S.push(p),Nt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),it.setFromProjectionMatrix(Nt),yt=this.localClippingEnabled,ut=_t.init(this.clippingPlanes,yt),m=bt.get(P,y.length),m.init(),y.push(m),rt.enabled===!0&&rt.isPresenting===!0){const Et=g.xr.getDepthSensingMesh();Et!==null&&en(Et,q,-1/0,g.sortObjects)}en(P,q,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(Q,at),te=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,te&&Yt.addToRenderList(m,P),this.info.render.frame++,ut===!0&&_t.beginShadows();const nt=p.state.shadowsArray;zt.render(nt,P,q),ut===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=m.opaque,Y=m.transmissive;if(p.setupLights(),q.isArrayCamera){const Et=q.cameras;if(Y.length>0)for(let Ft=0,Wt=Et.length;Ft<Wt;Ft++){const L=Et[Ft];Tn(st,Y,P,L)}te&&Yt.render(P);for(let Ft=0,Wt=Et.length;Ft<Wt;Ft++){const L=Et[Ft];Nn(m,P,L,L.viewport)}}else Y.length>0&&Tn(st,Y,P,q),te&&Yt.render(P),Nn(m,P,q);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(g,P,q),ce.resetDefaultState(),M=-1,_=null,S.pop(),S.length>0?(p=S[S.length-1],ut===!0&&_t.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function en(P,q,nt,st){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)nt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||it.intersectsSprite(P)){st&&Xt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Nt);const Ft=et.update(P),Wt=P.material;Wt.visible&&m.push(P,Ft,Wt,nt,Xt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||it.intersectsObject(P))){const Ft=et.update(P),Wt=P.material;if(st&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Xt.copy(P.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Xt.copy(Ft.boundingSphere.center)),Xt.applyMatrix4(P.matrixWorld).applyMatrix4(Nt)),Array.isArray(Wt)){const L=Ft.groups;for(let D=0,W=L.length;D<W;D++){const J=L[D],lt=Wt[J.materialIndex];lt&&lt.visible&&m.push(P,Ft,lt,nt,Xt.z,J)}}else Wt.visible&&m.push(P,Ft,Wt,nt,Xt.z,null)}}const Et=P.children;for(let Ft=0,Wt=Et.length;Ft<Wt;Ft++)en(Et[Ft],q,nt,st)}function Nn(P,q,nt,st){const Y=P.opaque,Et=P.transmissive,Ft=P.transparent;p.setupLightsView(nt),ut===!0&&_t.setGlobalState(g.clippingPlanes,nt),st&&Vt.viewport(C.copy(st)),Y.length>0&&yn(Y,q,nt),Et.length>0&&yn(Et,q,nt),Ft.length>0&&yn(Ft,q,nt),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Tn(P,q,nt,st){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[st.id]===void 0&&(p.state.transmissionRenderTarget[st.id]=new En(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?kn:fi,minFilter:ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));const Et=p.state.transmissionRenderTarget[st.id],Ft=st.viewport||C;Et.setSize(Ft.z,Ft.w);const Wt=g.getRenderTarget();g.setRenderTarget(Et),g.getClearColor(U),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear(),te&&Yt.render(nt);const L=g.toneMapping;g.toneMapping=qi;const D=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),p.setupLightsView(st),ut===!0&&_t.setGlobalState(g.clippingPlanes,st),yn(P,nt,st),R.updateMultisampleRenderTarget(Et),R.updateRenderTargetMipmap(Et),ee.has("WEBGL_multisampled_render_to_texture")===!1){let W=!1;for(let J=0,lt=q.length;J<lt;J++){const xt=q[J],St=xt.object,dt=xt.geometry,Lt=xt.material,wt=xt.group;if(Lt.side===Ye&&St.layers.test(st.layers)){const ve=Lt.side;Lt.side=wn,Lt.needsUpdate=!0,pn(St,nt,st,dt,Lt,wt),Lt.side=ve,Lt.needsUpdate=!0,W=!0}}W===!0&&(R.updateMultisampleRenderTarget(Et),R.updateRenderTargetMipmap(Et))}g.setRenderTarget(Wt),g.setClearColor(U,O),D!==void 0&&(st.viewport=D),g.toneMapping=L}function yn(P,q,nt){const st=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Et=P.length;Y<Et;Y++){const Ft=P[Y],Wt=Ft.object,L=Ft.geometry,D=st===null?Ft.material:st,W=Ft.group;Wt.layers.test(nt.layers)&&pn(Wt,q,nt,L,D,W)}}function pn(P,q,nt,st,Y,Et){P.onBeforeRender(g,q,nt,st,Y,Et),P.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(g,q,nt,st,P,Et),Y.transparent===!0&&Y.side===Ye&&Y.forceSinglePass===!1?(Y.side=wn,Y.needsUpdate=!0,g.renderBufferDirect(nt,q,st,Y,P,Et),Y.side=$i,Y.needsUpdate=!0,g.renderBufferDirect(nt,q,st,Y,P,Et),Y.side=Ye):g.renderBufferDirect(nt,q,st,Y,P,Et),P.onAfterRender(g,q,nt,st,Y,Et)}function vi(P,q,nt){q.isScene!==!0&&(q=ue);const st=j.get(P),Y=p.state.lights,Et=p.state.shadowsArray,Ft=Y.state.version,Wt=Rt.getParameters(P,Y.state,Et,q,nt),L=Rt.getProgramCacheKey(Wt);let D=st.programs;st.environment=P.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(P.isMeshStandardMaterial?H:b).get(P.envMap||st.environment),st.envMapRotation=st.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,D===void 0&&(P.addEventListener("dispose",I),D=new Map,st.programs=D);let W=D.get(L);if(W!==void 0){if(st.currentProgram===W&&st.lightsStateVersion===Ft)return Ii(P,Wt),W}else Wt.uniforms=Rt.getUniforms(P),P.onBeforeCompile(Wt,g),W=Rt.acquireProgram(Wt,L),D.set(L,W),st.uniforms=Wt.uniforms;const J=st.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(J.clippingPlanes=_t.uniform),Ii(P,Wt),st.needsLights=gr(P),st.lightsStateVersion=Ft,st.needsLights&&(J.ambientLightColor.value=Y.state.ambient,J.lightProbe.value=Y.state.probe,J.directionalLights.value=Y.state.directional,J.directionalLightShadows.value=Y.state.directionalShadow,J.spotLights.value=Y.state.spot,J.spotLightShadows.value=Y.state.spotShadow,J.rectAreaLights.value=Y.state.rectArea,J.ltc_1.value=Y.state.rectAreaLTC1,J.ltc_2.value=Y.state.rectAreaLTC2,J.pointLights.value=Y.state.point,J.pointLightShadows.value=Y.state.pointShadow,J.hemisphereLights.value=Y.state.hemi,J.directionalShadowMap.value=Y.state.directionalShadowMap,J.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,J.spotShadowMap.value=Y.state.spotShadowMap,J.spotLightMatrix.value=Y.state.spotLightMatrix,J.spotLightMap.value=Y.state.spotLightMap,J.pointShadowMap.value=Y.state.pointShadowMap,J.pointShadowMatrix.value=Y.state.pointShadowMatrix),st.currentProgram=W,st.uniformsList=null,W}function mr(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=Oa.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function Ii(P,q){const nt=j.get(P);nt.outputColorSpace=q.outputColorSpace,nt.batching=q.batching,nt.batchingColor=q.batchingColor,nt.instancing=q.instancing,nt.instancingColor=q.instancingColor,nt.instancingMorph=q.instancingMorph,nt.skinning=q.skinning,nt.morphTargets=q.morphTargets,nt.morphNormals=q.morphNormals,nt.morphColors=q.morphColors,nt.morphTargetsCount=q.morphTargetsCount,nt.numClippingPlanes=q.numClippingPlanes,nt.numIntersection=q.numClipIntersection,nt.vertexAlphas=q.vertexAlphas,nt.vertexTangents=q.vertexTangents,nt.toneMapping=q.toneMapping}function xi(P,q,nt,st,Y){q.isScene!==!0&&(q=ue),R.resetTextureUnits();const Et=q.fog,Ft=st.isMeshStandardMaterial?q.environment:null,Wt=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:hr,L=(st.isMeshStandardMaterial?H:b).get(st.envMap||Ft),D=st.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,W=!!nt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),J=!!nt.morphAttributes.position,lt=!!nt.morphAttributes.normal,xt=!!nt.morphAttributes.color;let St=qi;st.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(St=g.toneMapping);const dt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Lt=dt!==void 0?dt.length:0,wt=j.get(st),ve=p.state.lights;if(ut===!0&&(yt===!0||P!==_)){const rn=P===_&&st.id===M;_t.setState(st,P,rn)}let jt=!1;st.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ve.state.version||wt.outputColorSpace!==Wt||Y.isBatchedMesh&&wt.batching===!1||!Y.isBatchedMesh&&wt.batching===!0||Y.isBatchedMesh&&wt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&wt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&wt.instancing===!1||!Y.isInstancedMesh&&wt.instancing===!0||Y.isSkinnedMesh&&wt.skinning===!1||!Y.isSkinnedMesh&&wt.skinning===!0||Y.isInstancedMesh&&wt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&wt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&wt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&wt.instancingMorph===!1&&Y.morphTexture!==null||wt.envMap!==L||st.fog===!0&&wt.fog!==Et||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==_t.numPlanes||wt.numIntersection!==_t.numIntersection)||wt.vertexAlphas!==D||wt.vertexTangents!==W||wt.morphTargets!==J||wt.morphNormals!==lt||wt.morphColors!==xt||wt.toneMapping!==St||wt.morphTargetsCount!==Lt)&&(jt=!0):(jt=!0,wt.__version=st.version);let Me=wt.currentProgram;jt===!0&&(Me=vi(st,q,Y));let ii=!1,Xe=!1,Gn=!1;const ye=Me.getUniforms(),Sn=wt.uniforms;if(Vt.useProgram(Me.program)&&(ii=!0,Xe=!0,Gn=!0),st.id!==M&&(M=st.id,Xe=!0),ii||_!==P){Vt.buffers.depth.getReversed()?(pt.copy(P.projectionMatrix),yd(pt),Sd(pt),ye.setValue(X,"projectionMatrix",pt)):ye.setValue(X,"projectionMatrix",P.projectionMatrix),ye.setValue(X,"viewMatrix",P.matrixWorldInverse);const An=ye.map.cameraPosition;An!==void 0&&An.setValue(X,Bt.setFromMatrixPosition(P.matrixWorld)),Zt.logarithmicDepthBuffer&&ye.setValue(X,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ye.setValue(X,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,Xe=!0,Gn=!0)}if(Y.isSkinnedMesh){ye.setOptional(X,Y,"bindMatrix"),ye.setOptional(X,Y,"bindMatrixInverse");const rn=Y.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),ye.setValue(X,"boneTexture",rn.boneTexture,R))}Y.isBatchedMesh&&(ye.setOptional(X,Y,"batchingTexture"),ye.setValue(X,"batchingTexture",Y._matricesTexture,R),ye.setOptional(X,Y,"batchingIdTexture"),ye.setValue(X,"batchingIdTexture",Y._indirectTexture,R),ye.setOptional(X,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ye.setValue(X,"batchingColorTexture",Y._colorsTexture,R));const si=nt.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&Kt.update(Y,nt,Me),(Xe||wt.receiveShadow!==Y.receiveShadow)&&(wt.receiveShadow=Y.receiveShadow,ye.setValue(X,"receiveShadow",Y.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Sn.envMap.value=L,Sn.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),Xe&&(ye.setValue(X,"toneMappingExposure",g.toneMappingExposure),wt.needsLights&&Lc(Sn,Gn),Et&&st.fog===!0&&vt.refreshFogUniforms(Sn,Et),vt.refreshMaterialUniforms(Sn,st,B,$,p.state.transmissionRenderTarget[P.id]),Oa.upload(X,mr(wt),Sn,R)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Oa.upload(X,mr(wt),Sn,R),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ye.setValue(X,"center",Y.center),ye.setValue(X,"modelViewMatrix",Y.modelViewMatrix),ye.setValue(X,"normalMatrix",Y.normalMatrix),ye.setValue(X,"modelMatrix",Y.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const rn=st.uniformsGroups;for(let An=0,Hn=rn.length;An<Hn;An++){const Es=rn[An];G.update(Es,Me),G.bind(Es,Me)}}return Me}function Lc(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function gr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,q,nt){j.get(P.texture).__webglTexture=q,j.get(P.depthTexture).__webglTexture=nt;const st=j.get(P);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=nt===void 0,st.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,q){const nt=j.get(P);nt.__webglFramebuffer=q,nt.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,nt=0){A=P,E=q,w=nt;let st=!0,Y=null,Et=!1,Ft=!1;if(P){const L=j.get(P);if(L.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(X.FRAMEBUFFER,null),st=!1;else if(L.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(L.__hasExternalTextures)R.rebindTextures(P,j.get(P.texture).__webglTexture,j.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const J=P.depthTexture;if(L.__boundDepthTexture!==J){if(J!==null&&j.has(J)&&(P.width!==J.image.width||P.height!==J.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const D=P.texture;(D.isData3DTexture||D.isDataArrayTexture||D.isCompressedArrayTexture)&&(Ft=!0);const W=j.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(W[q])?Y=W[q][nt]:Y=W[q],Et=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?Y=j.get(P).__webglMultisampledFramebuffer:Array.isArray(W)?Y=W[nt]:Y=W,C.copy(P.viewport),N.copy(P.scissor),F=P.scissorTest}else C.copy(ht).multiplyScalar(B).floor(),N.copy(Mt).multiplyScalar(B).floor(),F=qt;if(Vt.bindFramebuffer(X.FRAMEBUFFER,Y)&&st&&Vt.drawBuffers(P,Y),Vt.viewport(C),Vt.scissor(N),Vt.setScissorTest(F),Et){const L=j.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,L.__webglTexture,nt)}else if(Ft){const L=j.get(P.texture),D=q||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,L.__webglTexture,nt||0,D)}M=-1},this.readRenderTargetPixels=function(P,q,nt,st,Y,Et,Ft){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=j.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ft!==void 0&&(Wt=Wt[Ft]),Wt){Vt.bindFramebuffer(X.FRAMEBUFFER,Wt);try{const L=P.texture,D=L.format,W=L.type;if(!Zt.textureFormatReadable(D)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(W)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-st&&nt>=0&&nt<=P.height-Y&&X.readPixels(q,nt,st,Y,$t.convert(D),$t.convert(W),Et)}finally{const L=A!==null?j.get(A).__webglFramebuffer:null;Vt.bindFramebuffer(X.FRAMEBUFFER,L)}}},this.readRenderTargetPixelsAsync=async function(P,q,nt,st,Y,Et,Ft){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=j.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ft!==void 0&&(Wt=Wt[Ft]),Wt){const L=P.texture,D=L.format,W=L.type;if(!Zt.textureFormatReadable(D))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(W))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=P.width-st&&nt>=0&&nt<=P.height-Y){Vt.bindFramebuffer(X.FRAMEBUFFER,Wt);const J=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,J),X.bufferData(X.PIXEL_PACK_BUFFER,Et.byteLength,X.STREAM_READ),X.readPixels(q,nt,st,Y,$t.convert(D),$t.convert(W),0);const lt=A!==null?j.get(A).__webglFramebuffer:null;Vt.bindFramebuffer(X.FRAMEBUFFER,lt);const xt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Md(X,xt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,J),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Et),X.deleteBuffer(J),X.deleteSync(xt),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,q=null,nt=0){P.isTexture!==!0&&(Tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,P=arguments[1]);const st=Math.pow(2,-nt),Y=Math.floor(P.image.width*st),Et=Math.floor(P.image.height*st),Ft=q!==null?q.x:0,Wt=q!==null?q.y:0;R.setTexture2D(P,0),X.copyTexSubImage2D(X.TEXTURE_2D,nt,0,0,Ft,Wt,Y,Et),Vt.unbindTexture()},this.copyTextureToTexture=function(P,q,nt=null,st=null,Y=0){P.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,P=arguments[1],q=arguments[2],Y=arguments[3]||0,nt=null);let Et,Ft,Wt,L,D,W,J,lt,xt;const St=P.isCompressedTexture?P.mipmaps[Y]:P.image;nt!==null?(Et=nt.max.x-nt.min.x,Ft=nt.max.y-nt.min.y,Wt=nt.isBox3?nt.max.z-nt.min.z:1,L=nt.min.x,D=nt.min.y,W=nt.isBox3?nt.min.z:0):(Et=St.width,Ft=St.height,Wt=St.depth||1,L=0,D=0,W=0),st!==null?(J=st.x,lt=st.y,xt=st.z):(J=0,lt=0,xt=0);const dt=$t.convert(q.format),Lt=$t.convert(q.type);let wt;q.isData3DTexture?(R.setTexture3D(q,0),wt=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(R.setTexture2DArray(q,0),wt=X.TEXTURE_2D_ARRAY):(R.setTexture2D(q,0),wt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);const ve=X.getParameter(X.UNPACK_ROW_LENGTH),jt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Me=X.getParameter(X.UNPACK_SKIP_PIXELS),ii=X.getParameter(X.UNPACK_SKIP_ROWS),Xe=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,St.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,St.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,L),X.pixelStorei(X.UNPACK_SKIP_ROWS,D),X.pixelStorei(X.UNPACK_SKIP_IMAGES,W);const Gn=P.isDataArrayTexture||P.isData3DTexture,ye=q.isDataArrayTexture||q.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const Sn=j.get(P),si=j.get(q),rn=j.get(Sn.__renderTarget),An=j.get(si.__renderTarget);Vt.bindFramebuffer(X.READ_FRAMEBUFFER,rn.__webglFramebuffer),Vt.bindFramebuffer(X.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Hn=0;Hn<Wt;Hn++)Gn&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,j.get(P).__webglTexture,Y,W+Hn),P.isDepthTexture?(ye&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,j.get(q).__webglTexture,Y,xt+Hn),X.blitFramebuffer(L,D,Et,Ft,J,lt,Et,Ft,X.DEPTH_BUFFER_BIT,X.NEAREST)):ye?X.copyTexSubImage3D(wt,Y,J,lt,xt+Hn,L,D,Et,Ft):X.copyTexSubImage2D(wt,Y,J,lt,xt+Hn,L,D,Et,Ft);Vt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else ye?P.isDataTexture||P.isData3DTexture?X.texSubImage3D(wt,Y,J,lt,xt,Et,Ft,Wt,dt,Lt,St.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(wt,Y,J,lt,xt,Et,Ft,Wt,dt,St.data):X.texSubImage3D(wt,Y,J,lt,xt,Et,Ft,Wt,dt,Lt,St):P.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Y,J,lt,Et,Ft,dt,Lt,St.data):P.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Y,J,lt,St.width,St.height,dt,St.data):X.texSubImage2D(X.TEXTURE_2D,Y,J,lt,Et,Ft,dt,Lt,St);X.pixelStorei(X.UNPACK_ROW_LENGTH,ve),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,jt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Me),X.pixelStorei(X.UNPACK_SKIP_ROWS,ii),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Xe),Y===0&&q.generateMipmaps&&X.generateMipmap(wt),Vt.unbindTexture()},this.copyTextureToTexture3D=function(P,q,nt=null,st=null,Y=0){return P.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,st=arguments[1]||null,P=arguments[2],q=arguments[3],Y=arguments[4]||0),Tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,q,nt,st,Y)},this.initRenderTarget=function(P){j.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),Vt.unbindTexture()},this.resetState=function(){E=0,w=0,A=null,Vt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}class mc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new mc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dv extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Za extends fn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=un,u=un,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dh extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Gs=new _e,Lh=new _e,xa=[],Uh=new ys,Lv=new _e,Sr=new Jt,br=new fr;class hn extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Dh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ys),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),Uh.copy(t.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Uh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),br.copy(t.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),t.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Lh.multiplyMatrices(n,Gs),Sr.matrixWorld=Lh,Sr.raycast(t,xa);for(let a=0,o=xa.length;a<o;a++){const l=xa[a];l.instanceId=r,l.object=this,e.push(l)}xa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Dh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Za(new Float32Array(s*this.count),s,this.count,Ya,ti));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ka extends Ss{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ih=new _e,Bl=new cc,_a=new fr,Ma=new z;class gc extends Re{constructor(t=new Ee,e=new Ka){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,t.ray.intersectsSphere(_a)===!1)return;Ih.copy(s).invert(),Bl.copy(t.ray).applyMatrix4(Ih);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let v=f,x=d;v<x;v++){const m=c.getX(v);Ma.fromBufferAttribute(h,m),Nh(Ma,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let v=f,x=d;v<x;v++)Ma.fromBufferAttribute(h,v),Nh(Ma,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nh(i,t,e,n,s,r,a){const o=Bl.distanceSqToPoint(i);if(o<e){const l=new z;Bl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Wi extends fn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(a-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Tt:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new z,s=[],r=[],a=[],o=new z,l=new _e;for(let d=0;d<=t;d++){const v=d/t;s[d]=this.getTangentAt(v,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(tn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(tn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vc extends gi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Uv extends vc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function xc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const ya=new z,Fo=new xc,Oo=new xc,Bo=new xc;class _c extends gi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(ya.subVectors(s[0],s[1]).add(s[0]),c=ya);const h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ya.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ya),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Fo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,v,x,m),Oo.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,v,x,m),Bo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,v,x,m)}else this.curveType==="catmullrom"&&(Fo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Oo.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Bo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Fo.calc(l),Oo.calc(l),Bo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function zh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Iv(i,t){const e=1-i;return e*e*t}function Nv(i,t){return 2*(1-i)*i*t}function zv(i,t){return i*i*t}function Dr(i,t,e,n){return Iv(i,t)+Nv(i,e)+zv(i,n)}function Fv(i,t){const e=1-i;return e*e*e*t}function Ov(i,t){const e=1-i;return 3*e*e*i*t}function Bv(i,t){return 3*(1-i)*i*i*t}function kv(i,t){return i*i*i*t}function Lr(i,t,e,n,s){return Fv(i,t)+Ov(i,e)+Bv(i,n)+kv(i,s)}class Hu extends gi{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Lr(t,s.x,r.x,a.x,o.x),Lr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vv extends gi{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Lr(t,s.x,r.x,a.x,o.x),Lr(t,s.y,r.y,a.y,o.y),Lr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wu extends gi{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gv extends gi{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xu extends gi{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Dr(t,s.x,r.x,a.x),Dr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hv extends gi{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Dr(t,s.x,r.x,a.x),Dr(t,s.y,r.y,a.y),Dr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qu extends gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(zh(o,l.x,c.x,u.x,h.x),zh(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}}var Fh=Object.freeze({__proto__:null,ArcCurve:Uv,CatmullRomCurve3:_c,CubicBezierCurve:Hu,CubicBezierCurve3:Vv,EllipseCurve:vc,LineCurve:Wu,LineCurve3:Gv,QuadraticBezierCurve:Xu,QuadraticBezierCurve3:Hv,SplineCurve:qu});class Wv extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Fh[s.type]().fromJSON(s))}return this}}class kl extends Wv{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Wu(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Xu(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Hu(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s),new Tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new qu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new vc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Mc extends Ee{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=tn(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,h=new z,f=new Tt,d=new z,v=new z,x=new z;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(v)}for(let y=0;y<=e;y++){const S=n+y*u*s,g=Math.sin(S),T=Math.cos(S);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*g,h.y=t[E].y,h.z=t[E].x*T,a.push(h.x,h.y,h.z),f.x=y/e,f.y=E/(t.length-1),o.push(f.x,f.y);const w=l[3*E+0]*g,A=l[3*E+1],M=l[3*E+0]*T;c.push(w,A,M)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){const g=S+y*t.length,T=g,E=g+t.length,w=g+t.length+1,A=g+1;r.push(T,E,A),r.push(w,A,E)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.points,t.segments,t.phiStart,t.phiLength)}}class Ja extends Mc{constructor(t=1,e=1,n=4,s=8){const r=new kl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Ja(t.radius,t.length,t.capSegments,t.radialSegments)}}class lr extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new z,u=new Tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class De extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let v=0;const x=[],m=n/2;let p=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new re(h,3)),this.setAttribute("normal",new re(f,3)),this.setAttribute("uv",new re(d,2));function y(){const g=new z,T=new z;let E=0;const w=(e-t)/n;for(let A=0;A<=r;A++){const M=[],_=A/r,C=_*(e-t)+t;for(let N=0;N<=s;N++){const F=N/s,U=F*l+o,O=Math.sin(U),V=Math.cos(U);T.x=C*O,T.y=-_*n+m,T.z=C*V,h.push(T.x,T.y,T.z),g.set(O,w,V).normalize(),f.push(g.x,g.y,g.z),d.push(F,1-_),M.push(v++)}x.push(M)}for(let A=0;A<s;A++)for(let M=0;M<r;M++){const _=x[M][A],C=x[M+1][A],N=x[M+1][A+1],F=x[M][A+1];(t>0||M!==0)&&(u.push(_,C,F),E+=3),(e>0||M!==r-1)&&(u.push(C,N,F),E+=3)}c.addGroup(p,E,0),p+=E}function S(g){const T=v,E=new Tt,w=new z;let A=0;const M=g===!0?t:e,_=g===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),v++;const C=v;for(let N=0;N<=s;N++){const U=N/s*l+o,O=Math.cos(U),V=Math.sin(U);w.x=M*V,w.y=m*_,w.z=M*O,h.push(w.x,w.y,w.z),f.push(0,_,0),E.x=O*.5+.5,E.y=V*.5*_+.5,d.push(E.x,E.y),v++}for(let N=0;N<s;N++){const F=T+N,U=C+N;g===!0?u.push(U,U+1,F):u.push(U+1,U,F),A+=3}c.addGroup(p,A,g===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ui extends De{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ui(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zr extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new z,g=new z,T=new z;for(let E=0;E<e.length;E+=3)d(e[E+0],S),d(e[E+1],g),d(e[E+2],T),l(S,g,T,y)}function l(y,S,g,T){const E=T+1,w=[];for(let A=0;A<=E;A++){w[A]=[];const M=y.clone().lerp(g,A/E),_=S.clone().lerp(g,A/E),C=E-A;for(let N=0;N<=C;N++)N===0&&A===E?w[A][N]=M:w[A][N]=M.clone().lerp(_,N/C)}for(let A=0;A<E;A++)for(let M=0;M<2*(E-A)-1;M++){const _=Math.floor(M/2);M%2===0?(f(w[A][_+1]),f(w[A+1][_]),f(w[A][_])):(f(w[A][_+1]),f(w[A+1][_+1]),f(w[A+1][_]))}}function c(y){const S=new z;for(let g=0;g<r.length;g+=3)S.x=r[g+0],S.y=r[g+1],S.z=r[g+2],S.normalize().multiplyScalar(y),r[g+0]=S.x,r[g+1]=S.y,r[g+2]=S.z}function u(){const y=new z;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const g=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;a.push(g,1-T)}v(),h()}function h(){for(let y=0;y<a.length;y+=6){const S=a[y+0],g=a[y+2],T=a[y+4],E=Math.max(S,g,T),w=Math.min(S,g,T);E>.9&&w<.1&&(S<.2&&(a[y+0]+=1),g<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,S){const g=y*3;S.x=t[g+0],S.y=t[g+1],S.z=t[g+2]}function v(){const y=new z,S=new z,g=new z,T=new z,E=new Tt,w=new Tt,A=new Tt;for(let M=0,_=0;M<r.length;M+=9,_+=6){y.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),g.set(r[M+6],r[M+7],r[M+8]),E.set(a[_+0],a[_+1]),w.set(a[_+2],a[_+3]),A.set(a[_+4],a[_+5]),T.copy(y).add(S).add(g).divideScalar(3);const C=m(T);x(E,_+0,y,C),x(w,_+2,S,C),x(A,_+4,g,C)}}function x(y,S,g,T){T<0&&y.x===1&&(a[S]=y.x-1),g.x===0&&g.z===0&&(a[S]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.vertices,t.indices,t.radius,t.details)}}class Qa extends Zr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qa(t.radius,t.detail)}}class Yu extends kl{constructor(t){super(t),this.uuid=Ms(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new kl().fromJSON(s))}return this}}const Xv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=$u(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,f,d;if(n&&(r=Zv(i,t,r,e)),i.length>80*e){o=c=i[0],l=u=i[1];for(let v=e;v<s;v+=e)h=i[v],f=i[v+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return Br(r,a,e,o,l,d,0),a}};function $u(i,t,e,n,s){let r,a;if(s===ox(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Oh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Oh(r,i[r],i[r+1],a);return a&&to(a,a.next)&&(Vr(a),a=a.next),a}function xs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(to(e,e.next)||ke(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Br(i,t,e,n,s,r,a){if(!i)return;!a&&r&&ex(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Yv(i,n,s,r):qv(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Vr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=$v(xs(i),t,e),Br(i,t,e,n,s,r,2)):a===2&&jv(i,t,e,n,s,r):Br(xs(i),t,e,n,s,r,1);break}}}function qv(i){const t=i.prev,e=i,n=i.next;if(ke(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let v=n.next;for(;v!==t;){if(v.x>=u&&v.x<=f&&v.y>=h&&v.y<=d&&$s(s,o,r,l,a,c,v.x,v.y)&&ke(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Yv(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ke(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,v=u<h?u<f?u:f:h<f?h:f,x=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=Vl(d,v,t,e,n),y=Vl(x,m,t,e,n);let S=i.prevZ,g=i.nextZ;for(;S&&S.z>=p&&g&&g.z<=y;){if(S.x>=d&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&$s(o,u,l,h,c,f,S.x,S.y)&&ke(S.prev,S,S.next)>=0||(S=S.prevZ,g.x>=d&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==a&&$s(o,u,l,h,c,f,g.x,g.y)&&ke(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&$s(o,u,l,h,c,f,S.x,S.y)&&ke(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;g&&g.z<=y;){if(g.x>=d&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==a&&$s(o,u,l,h,c,f,g.x,g.y)&&ke(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function $v(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!to(s,r)&&ju(s,n,n.next,r)&&kr(s,r)&&kr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Vr(n),Vr(n.next),n=i=r),n=n.next}while(n!==i);return xs(n)}function jv(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sx(a,o)){let l=Zu(a,o);a=xs(a,a.next),l=xs(l,l.next),Br(a,t,e,n,s,r,0),Br(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Zv(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=$u(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(ix(c));for(s.sort(Kv),r=0;r<s.length;r++)e=Jv(s[r],e);return e}function Kv(i,t){return i.x-t.x}function Jv(i,t){const e=Qv(i,t);if(!e)return t;const n=Zu(e,i);return xs(n,n.next),xs(e,e.next)}function Qv(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&$s(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),kr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&tx(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function tx(i,t){return ke(i.prev,i,t.prev)<0&&ke(t.next,i,i.next)<0}function ex(i,t,e,n){let s=i;do s.z===0&&(s.z=Vl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,nx(s)}function nx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Vl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ix(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $s(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function sx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!rx(i,t)&&(kr(i,t)&&kr(t,i)&&ax(i,t)&&(ke(i.prev,i,t.prev)||ke(i,t.prev,t))||to(i,t)&&ke(i.prev,i,i.next)>0&&ke(t.prev,t,t.next)>0)}function ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function to(i,t){return i.x===t.x&&i.y===t.y}function ju(i,t,e,n){const s=ba(ke(i,t,e)),r=ba(ke(i,t,n)),a=ba(ke(e,n,i)),o=ba(ke(e,n,t));return!!(s!==r&&a!==o||s===0&&Sa(i,e,t)||r===0&&Sa(i,n,t)||a===0&&Sa(e,i,n)||o===0&&Sa(e,t,n))}function Sa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ba(i){return i>0?1:i<0?-1:0}function rx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ju(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function kr(i,t){return ke(i.prev,i,i.next)<0?ke(i,t,i.next)>=0&&ke(i,i.prev,t)>=0:ke(i,t,i.prev)<0||ke(i,i.next,t)<0}function ax(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Zu(i,t){const e=new Gl(i.i,i.x,i.y),n=new Gl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Oh(i,t,e,n){const s=new Gl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ox(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Ur{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ur.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Bh(t),kh(n,t);let a=t.length;e.forEach(Bh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,kh(n,e[l]);const o=Xv.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Bh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Yi extends Zr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yi(t.radius,t.detail)}}class Gr extends Zr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gr(t.radius,t.detail)}}class bs extends Ee{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,d=new z,v=new Tt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),v.x=(d.x/e+1)/2,v.y=(d.y/e+1)/2,u.push(v.x,v.y)}h+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const y=p+m,S=y,g=y+n+1,T=y+n+2,E=y+1;o.push(S,g,E),o.push(g,T,E)}}this.setIndex(o),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class yc extends Ee{constructor(t=new Yu([new Tt(0,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(a,2));function c(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const v=f.holes;Ur.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=v.length;m<p;m++){const y=v[m];Ur.isClockWise(y)===!0&&(v[m]=y.reverse())}const x=Ur.triangulateShape(d,v);for(let m=0,p=v.length;m<p;m++){const y=v[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){const y=x[m],S=y[0]+h,g=y[1]+h,T=y[2]+h;n.push(S,g,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return lx(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new yc(n,t.curveSegments)}}function lx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class pi extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new z,f=new z,d=[],v=[],x=[],m=[];for(let p=0;p<=n;p++){const y=[],S=p/n;let g=0;p===0&&a===0?g=.5/e:p===n&&l===Math.PI&&(g=-.5/e);for(let T=0;T<=e;T++){const E=T/e;h.x=-t*Math.cos(s+E*r)*Math.sin(a+S*o),h.y=t*Math.cos(a+S*o),h.z=t*Math.sin(s+E*r)*Math.sin(a+S*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(E+g,1-S),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const S=u[p][y+1],g=u[p][y],T=u[p+1][y],E=u[p+1][y+1];(p!==0||a>0)&&d.push(S,g,E),(p!==n-1||l<Math.PI)&&d.push(g,T,E)}this.setIndex(d),this.setAttribute("position",new re(v,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ks extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new z,h=new z,f=new z;for(let d=0;d<=n;d++)for(let v=0;v<=s;v++){const x=v/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let v=1;v<=s;v++){const x=(s+1)*d+v-1,m=(s+1)*(d-1)+v-1,p=(s+1)*(d-1)+v,y=(s+1)*d+v;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class cx extends Oe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class hx extends Ss{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Pe extends Ss{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sc extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ux extends Sc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ko=new _e,Vh=new z,Gh=new z;class Ku{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uc,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vh),Gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gh),e.updateMatrixWorld(),ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hh=new _e,wr=new z,Vo=new z;class fx extends Ku{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new Ce(2,1,1,1),new Ce(0,1,1,1),new Ce(3,1,1,1),new Ce(1,1,1,1),new Ce(3,0,1,1),new Ce(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wr.setFromMatrixPosition(t.matrixWorld),n.position.copy(wr),Vo.copy(n.position),Vo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vo),n.updateMatrixWorld(),s.makeTranslation(-wr.x,-wr.y,-wr.z),Hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh)}}class Hr extends Sc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class dx extends Ku{constructor(){super(new fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class px extends Sc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new dx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ju{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Wh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Wh(){return performance.now()}const Xh=new _e;class mx{constructor(t,e,n=0,s=1/0){this.ray=new cc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xh),this}intersectObject(t,e=!0,n=[]){return Hl(t,this,n,e),n.sort(qh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Hl(t[s],this,n,e);return n.sort(qh),n}}function qh(i,t){return i.distance-t.distance}function Hl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Hl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);const ln=(i,t={})=>new Pe({color:i,flatShading:!0,...t});function wa(i){const t=i.map(a=>a.toNonIndexed()),e=t.reduce((a,o)=>a+o.attributes.position.count,0),n=new Float32Array(e*3);let s=0;for(const a of t)n.set(a.attributes.position.array,s),s+=a.attributes.position.array.length;const r=new Ee;return r.setAttribute("position",new Ve(n,3)),r.computeVertexNormals(),r}function gx(i,t,e,n,s,r){const a=r.id,{heightAt:o,pathDist:l,plinths:c}=t,u=t.lighthouse.pos,h=new Re,f=new Ct,d=[],v=(I,ot,It,Gt=2,de=5)=>l(I,ot)>It&&Math.hypot(I-u.x,ot-u.z)>de&&!c.some(ie=>Math.hypot(ie.x-I,ie.z-ot)<Gt),x=(I,ot,It=I*20)=>{const Gt=[];for(let de=0;de<It&&Gt.length<I;de++){const ie=(n()-.5)*104,Le=(n()-.5)*104,Ne=o(ie,Le);ot(ie,Le,Ne)&&Gt.push({x:ie,z:Le,h:Ne,r:n(),s:n()})}return Gt},m=(I,ot,It,Gt,de=!1)=>{const ie=new hn(I,ot,Math.max(1,It.length));return ie.count=It.length,It.forEach((Le,Ne)=>{Gt(Le,Ne,ie),h.updateMatrix(),ie.setMatrixAt(Ne,h.matrix)}),ie.instanceColor&&(ie.instanceColor.needsUpdate=!0),ie.castShadow=de,ie.receiveShadow=!0,i.add(ie),ie},p=(e.mobile?.55:1)*1.8,y=wa([-.5,0,.5].map(I=>{const ot=new ui(.07,.55,3);return ot.translate(0,.27,0),ot.rotateZ(I*.5),ot.translate(I*.12,0,(I*I-.2)*.1),ot})),S=x(Math.round(280*p),(I,ot,It)=>It>.8&&v(I,ot,1.7,1.7,4.4));m(y,ln("#ffffff"),S,(I,ot,It)=>{h.position.set(I.x,I.h-.05,I.z),h.rotation.set(0,I.r*6,0),h.scale.setScalar(.8+I.s*.7),It.setColorAt(ot,f.set(a==="vinter"?I.s<.5?"#c8d4c0":"#e6eef4":a==="vulkan"?I.s<.5?"#5a6a3a":"#7a7a4a":I.s<.5?"#7fae4e":"#9cc45e"))});const g=x(Math.round((a==="vinter"?0:a==="vulkan"?30:120)*p),(I,ot,It)=>It>.85&&v(I,ot,1.9,2,4.5)),T=new De(.025,.03,.4,4);T.translate(0,.2,0);const E=new Yi(.11,0);E.translate(0,.42,0);const w=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];m(T,ln("#5f8f3a"),g,I=>{h.position.set(I.x,I.h-.03,I.z),h.rotation.set(0,0,0),h.scale.setScalar(.9+I.s*.6)}),m(E,ln("#ffffff"),g,(I,ot,It)=>{h.position.set(I.x,I.h-.03,I.z),h.scale.setScalar(.9+I.s*.6),It.setColorAt(ot,f.set(w[Math.floor(I.r*w.length)]))});const A=x(Math.round((a==="tak"?36:0)*p),(I,ot,It)=>It>1&&v(I,ot,2.4,2.4,5)),M=new pi(.22,8,4,0,Math.PI*2,0,Math.PI/2);M.scale(1,.7,1),M.translate(0,.28,0);const _=new De(.07,.09,.3,6);_.translate(0,.14,0),m(_,ln("#f4ead6"),A,I=>{h.position.set(I.x,I.h-.03,I.z),h.rotation.set(0,0,(I.r-.5)*.3),h.scale.setScalar(.8+I.s)},!0),m(M,ln("#ffffff"),A,(I,ot,It)=>{h.position.set(I.x,I.h-.03,I.z),h.rotation.set(0,0,(I.r-.5)*.3),h.scale.setScalar(.8+I.s),It.setColorAt(ot,f.set(I.r<.6?"#d8453a":"#c89a5a"))},!0);const C=wa([[-.08,0],[.07,.05],[0,-.07]].map(([I,ot],It)=>{const Gt=new ui(.04,1.1+It*.2,3);return Gt.translate(I,.55+It*.1,ot),Gt}).concat([(()=>{const I=new Ja(.05,.18,2,4);return I.translate(.07,1.25,.05),I})()])),N=x(Math.round(150*p),(I,ot,It)=>It>.05&&It<.55&&v(I,ot,2.2,2,5),6e3),F=m(C,ln(a==="vinter"?"#a89878":a==="vulkan"?"#5a5a3a":"#9aa856"),N,I=>{h.position.set(I.x,I.h-.1,I.z),h.rotation.set(0,I.r*6,0),h.scale.setScalar(.8+I.s*.6)}),U=[],O=[];for(const I of t.paths)for(const ot of[-1,1]){let It=null,Gt=0,de=0;for(let ie=2;ie<I.length-7;ie+=1.7){const Le=ie/I.length,Ne=I.curve.getPointAt(Le),He=I.curve.getTangentAt(Le),en=Ne.x-He.z*ot*2.25,Nn=Ne.z+He.x*ot*2.25,Tn=o(en,Nn);if(!(Tn>.5&&de<=0&&v(en,Nn,1.9,2.6,6))){It=null,de>0&&de--;continue}U.push({x:en,z:Nn,h:Tn}),It&&O.push({a:It,b:{x:en,z:Nn,h:Tn}}),It={x:en,z:Nn,h:Tn},++Gt>4+Math.floor(n()*5)&&(Gt=0,It=null,de=3+Math.floor(n()*5))}}const V=new Pn(.14,.8,.14);V.translate(0,.4,0);const $=new Pn(1,.07,.06),B=ln("#a07650");m(V,B,U,I=>{h.position.set(I.x,I.h-.05,I.z),h.rotation.set(0,n()*.3,(n()-.5)*.12),h.scale.set(1,1,1)},!0);const Q=O.flatMap(I=>[{...I,y:.32},{...I,y:.62}]);m($,B,Q,({a:I,b:ot,y:It})=>{const Gt=Math.hypot(ot.x-I.x,ot.z-I.z);h.position.set((I.x+ot.x)/2,(I.h+ot.h)/2+It-.05,(I.z+ot.z)/2),h.rotation.set(0,-Math.atan2(ot.z-I.z,ot.x-I.x),0),h.scale.set(Gt,1,1)},!0);const at=r.dockTheta??-2.35,ht=new Tt(Math.cos(at),Math.sin(at)),Mt=s(at);let qt=Mt-6;for(let I=Mt-10;I<Mt+4;I+=.25)if(o(ht.x*I,ht.y*I)<.3){qt=I;break}const it=new me,ut=ln("#b48a5e"),yt=ln("#6e4a2c"),pt=8,Nt=qt-2.5;for(let I=0;I<pt/.55;I++){const ot=new Jt(new Pn(.5,.12,2.2),ut);ot.position.set(Nt+I*.55,.75+(n()-.5)*.04,0),ot.rotation.y=(n()-.5)*.05,ot.castShadow=ot.receiveShadow=!0,it.add(ot)}for(let I=0;I<=pt;I+=2)for(const ot of[-1,1]){const It=new Jt(new De(.12,.12,2.2,6),yt);It.position.set(Nt+I,.1,ot*1.05),It.castShadow=!0,it.add(It)}it.rotation.y=-at,i.add(it);const Bt=new me,Xt=new De(.9,.9,3.4,10,1,!0,0,Math.PI);Xt.rotateZ(Math.PI/2),Xt.rotateX(Math.PI/2),Xt.scale(1,.6,.7);const ue=new Jt(Xt,ln("#3f6f9a",{side:Ye}));ue.rotation.y=Math.PI/2,ue.castShadow=!0,Bt.add(ue);for(const I of[-.6,.6]){const ot=new Jt(new Pn(.3,.08,1.2),ut);ot.position.set(I,-.15,0),Bt.add(ot)}const te=new Jt(new Pn(2.4,.06,.12),ut);te.position.set(.2,.05,.4),te.rotation.y=.3,Bt.add(te);const pe=ht.x*(Nt+pt-1)+-ht.y*2.1,X=ht.y*(Nt+pt-1)+ht.x*2.1;Bt.position.set(pe,.3,X),Bt.rotation.y=-at,i.add(Bt);const Te=new me,ee=new Jt(new ni(3,1.4,10,5),new Se({color:"#4a3a2a",wireframe:!0}));ee.position.y=1;const Zt=ee.geometry.attributes.position;for(let I=0;I<Zt.count;I++)Zt.setZ(I,Math.sin(Zt.getX(I)/3*Math.PI+1.5)*.15-Math.abs(Zt.getY(I))*.05);Te.add(ee);for(const I of[-1.6,1.6]){const ot=new Jt(new De(.07,.09,2,5),yt);ot.position.set(I,.9,0),ot.castShadow=!0,Te.add(ot)}for(let I=0;I<5;I++){const ot=new Jt(new pi(.09,6,4),ln("#f0a43a"));ot.position.set(-1.2+I*.6,1.66,.05),Te.add(ot)}const Vt=qt-4.5,fe=4.2,j=ht.x*Vt-ht.y*fe,R=ht.y*Vt+ht.x*fe;Te.position.set(j,o(j,R)-.1,R),Te.rotation.y=-at+Math.PI/2,i.add(Te),d.push({x:j,z:R,r:1.4});const b=new De(.42,.42,.95,10);b.translate(0,.47,0);const H=new De(.44,.44,.08,10),Z=new Pn(.8,.8,.8);Z.translate(0,.4,0);const tt=[],et=(I,ot,It,Gt)=>{for(let de=0;de<60&&It>0;de++){const ie=I+(n()-.5)*6,Le=ot+(n()-.5)*6,Ne=o(ie,Le);Ne<.4||!v(ie,Le,2.3,2.4,4.6)||tt.some(He=>Math.hypot(He.x-ie,He.z-Le)<1.1)||(tt.push({x:ie,z:Le,h:Ne,kind:Gt??(n()<.6?"barrel":"crate"),r:n()}),It--)}};et(ht.x*(qt-2.5),ht.y*(qt-2.5),5),et(u.x+6,u.z+1,3,"barrel"),et(u.x-6,u.z+2,2);const Rt=tt.filter(I=>I.kind==="barrel"),vt=tt.filter(I=>I.kind==="crate");m(b,ln("#8a5a36"),Rt,I=>{h.position.set(I.x,I.h-.05,I.z),h.rotation.set(0,I.r*6,0),h.scale.setScalar(1)},!0),m(H,ln("#3e3a38"),Rt.flatMap(I=>[{...I,y:.2},{...I,y:.75}]),I=>{h.position.set(I.x,I.h-.05+I.y,I.z)},!1),m(Z,ln("#b8925e"),vt,I=>{h.position.set(I.x,I.h-.05,I.z),h.rotation.set(0,I.r*6,0),h.scale.setScalar(.8+I.r*.4)},!0);for(const I of tt)d.push({x:I.x,z:I.z,r:.55});const bt=x(Math.round(380*p),(I,ot,It)=>It>.9&&v(I,ot,1.6,1.6,4.4)),Qt=new Yi(.06,0);Qt.translate(0,.06,0),m(Qt,new Pe({color:a==="vulkan"?"#ff9a5a":"#fffdf4"}),bt,I=>{h.position.set(I.x,I.h-.02,I.z),h.rotation.set(0,0,0),h.scale.setScalar(.8+I.s*.8)});const _t=(I,ot,It)=>{const Gt=[];for(let de=0;de<I*40&&Gt.length<I;de++){const ie=(n()-.5)*130,Le=(n()-.5)*130,Ne=o(ie,Le),He=.05-Ne;He>ot&&He<It&&Math.hypot(ie-u.x,Le-u.z)>6&&Gt.push({x:ie,z:Le,h:Ne,r:n(),s:n()})}return Gt},zt=wa([0,1,2].map(I=>{const ot=new ui(.08,.9+I*.25,3);return ot.translate((I-1)*.12,.45+I*.12,I%2*.1),ot.rotateZ((I-1)*.25),ot})),Yt=_t(Math.round(90*p),.35,1.8),Kt=m(zt,ln("#4f9a5a"),Yt,I=>{h.position.set(I.x,I.h,I.z),h.rotation.set(0,I.r*6,0),h.scale.setScalar(.8+I.s*.7)}),Ot=wa([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([I,ot,It])=>{const Gt=new Yi(It,0);return Gt.translate(I,It*.8,ot),Gt})),ae=_t(Math.round((a==="tak"?28:0)*p),.5,1.6),$t=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];m(Ot,ln("#ffffff"),ae,(I,ot,It)=>{h.position.set(I.x,I.h,I.z),h.rotation.set(0,I.r*6,0),h.scale.setScalar(.8+I.s*.9),It.setColorAt(ot,f.set($t[Math.floor(I.r*$t.length)]))});const ce=new Gr(.16,0);ce.scale(.45,.3,1.4);const G=_t(e.mobile?5:8,.9,2.6).map(I=>({...I,rad:2+I.s*3,speed:(.25+I.r*.3)*(I.r<.5?1:-1)})),At=9,rt=new hn(ce,new Se({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,G.length*At));rt.count=G.length*At,rt.renderOrder=1,i.add(rt);const ft=Array.from({length:At},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),Pt=I=>{Bt.position.y=.3+Math.sin(I*1.2)*.08,Bt.rotation.z=Math.sin(I*.9)*.04,Bt.rotation.x=Math.sin(I*1.3+1)*.03,G.forEach((ot,It)=>{const Gt=I*ot.speed+ot.r*6,de=ot.x+Math.cos(Gt)*ot.rad,ie=ot.z+Math.sin(Gt)*ot.rad,Le=Math.atan2(-Math.sin(Gt)*ot.speed,Math.cos(Gt)*ot.speed);for(let Ne=0;Ne<At;Ne++){const[He,en,Nn,Tn]=ft[Ne];h.position.set(de+He+Math.sin(I*2+Tn)*.1,Math.max(o(de,ie)+.25,-.75)+en,ie+Nn),h.rotation.set(0,Le+Math.sin(I*6+Tn)*.15,0),h.scale.setScalar(1),h.updateMatrix(),rt.setMatrixAt(It*At+Ne,h.matrix)}}),rt.instanceMatrix.needsUpdate=!0,!((I*60|0)%2)&&(N.forEach((ot,It)=>{h.position.set(ot.x,ot.h-.1,ot.z),h.rotation.set(Math.sin(I*1.7+ot.x*.3)*.08,ot.r*6,Math.cos(I*1.4+ot.z*.3)*.08),h.scale.setScalar(.8+ot.s*.6),h.updateMatrix(),F.setMatrixAt(It,h.matrix)}),F.instanceMatrix.needsUpdate=!0,Yt.forEach((ot,It)=>{h.position.set(ot.x,ot.h,ot.z),h.rotation.set(Math.sin(I*1.1+ot.x)*.12,ot.r*6,Math.cos(I*.9+ot.z)*.12),h.scale.setScalar(.8+ot.s*.7),h.updateMatrix(),Kt.setMatrixAt(It,h.matrix)}),Kt.instanceMatrix.needsUpdate=!0)};it.updateMatrixWorld(!0);const Dt=[];return it.children.forEach(I=>{if(I.geometry.type==="CylinderGeometry"){const ot=I.getWorldPosition(new z);Dt.push({x:ot.x,z:ot.z,r:.15})}}),Dt.push({x:pe,z:X,r:.9}),{colliders:d,update:Pt,obstacles:Dt}}function Yh(i,{heightTex:t,ext:e,grid:n,quality:s,sunDir:r,colors:a,level:o=.05,size:l=220,center:c=[0,0],maxDepth:u=100}){const h=Jn.merge([Ut.fog,{uTime:{value:0},uHeight:{value:t},uExt:{value:e},uGrid:{value:n},uLevel:{value:o},uMaxDepth:{value:u},uShallow:{value:new Ct(a.shallow)},uMid:{value:new Ct(a.mid)},uDeep:{value:new Ct(a.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*a.caustic}}]);h.uHeight.value=t;const f=new Oe({uniforms:h,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
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

      void main() {
        float depth = uLevel - ground(vWorld.xz);
        if (depth < -0.02 || depth > uMaxDepth) discard; // maxDepth: små basseng skal ikke tegnes over lavlandet
        float d = max(depth, 0.0);

        // Farge og gjennomsiktighet etter dybde
        vec3 col = mix(uShallow, uMid, smoothstep(0.02, 0.5, d));
        col = mix(col, uDeep, smoothstep(0.9, 2.2, d));
        float alpha = mix(0.3, 0.93, smoothstep(0.0, 1.6, d));
        alpha = max(alpha, 0.72 * smoothstep(0.06, 0.32, d)); // grunne pytter blir turkise, ikke melkehvite

        // Sandriller under grunt vann
        float rip = sin(vWorld.x * 2.1 + sin(vWorld.z * 0.6) * 2.0 + vWorld.z * 0.7);
        col *= 1.0 - 0.05 * rip * (1.0 - smoothstep(0.2, 1.4, d));

        // Kaustikk: to lag med ulik skala og fart, sterkest på grunt/middels vann
        float c1 = voronoiEdge(vWorld.xz * 0.24 + vec2(uTime * 0.03, uTime * 0.02), uTime * 0.45);
        float c2 = voronoiEdge(vWorld.xz * 0.39 - vec2(uTime * 0.025, -uTime * 0.03), uTime * 0.6 + 2.0);
        float caustic = pow(1.0 - smoothstep(0.0, 0.09, c1), 3.0) * 0.6 + pow(1.0 - smoothstep(0.0, 0.07, c2), 3.0) * 0.4;
        float cMask = smoothstep(0.05, 0.35, d) * (1.0 - smoothstep(0.9, 2.1, d));
        col += vec3(0.85, 1.0, 0.95) * caustic * cMask * 0.2 * uCaustic;
        alpha = max(alpha, caustic * cMask * 0.12);

        // Skum: tynn linje som pulserer inn og ut langs kysten, pluss en svakere ute
        float wave = 0.5 + 0.5 * sin(uTime * 1.1 + vWorld.x * 0.08 + vWorld.z * 0.06);
        float edge1 = 0.05 + wave * 0.16;
        // Linjebredden følger dybde-gradienten, så slake bunner (pytter) ikke blir hvite flater
        float fw = max(fwidth(d) * 1.6, 0.006);
        float foam = 1.0 - smoothstep(0.0, min(0.05, fw * 2.0), abs(d - edge1));
        foam += (1.0 - smoothstep(0.0, 0.035, d)) * 0.8;
        float edge2 = 0.42 + wave * 0.18;
        foam += (1.0 - smoothstep(0.0, min(0.05, fw * 2.0), abs(d - edge2))) * 0.35 * smoothstep(0.004, 0.02, fw);
        // brudd i linja så den ikke ser tegnet ut
        foam *= 0.65 + 0.35 * sin(vWorld.x * 1.7 + vWorld.z * 1.3 + uTime * 0.7);
        foam = clamp(foam, 0.0, 1.0);
        col = mix(col, vec3(1.0), foam * 0.9);
        alpha = max(alpha, foam * 0.92);

        // Små krusninger og solglans
        vec3 nrm = normalize(vec3(
          sin(vWorld.x * 1.3 + uTime * 1.4) * 0.06 + sin(vWorld.z * 2.2 - uTime * 1.1) * 0.04, 1.0,
          cos(vWorld.z * 1.1 + uTime * 1.2) * 0.06 + cos(vWorld.x * 1.9 + uTime) * 0.04));
        vec3 viewDir = normalize(cameraPosition - vWorld);
        vec3 h = normalize(uSun + viewDir);
        float spec = pow(max(dot(nrm, h), 0.0), 90.0);
        col += vec3(1.0, 0.9, 0.75) * spec * 0.8 * smoothstep(0.3, 1.5, d);
        alpha = max(alpha, spec * 0.6);

        gl_FragColor = vec4(col, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`}),d=l<50?8:s.mobile?40:64,v=new ni(l,l,d,d);v.rotateX(-Math.PI/2);const x=new Jt(v,f);return x.position.set(c[0],o,c[1]),x.renderOrder=2,i.add(x),{mesh:x,update(m){h.uTime.value=m}}}function $h(i,t){const e=new Za(Float32Array.from(i),t,t,Ya,ti);return e.magFilter=e.minFilter=un,e.generateMipmaps=!1,e.needsUpdate=!0,e}function _s(i){const t=i.map(([h])=>h.index?h.toNonIndexed():h),e=t.reduce((h,f)=>h+f.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Ct,a=new z;let o=0;t.forEach((h,f)=>{const d=i[f][1],v=h.attributes.position;for(let x=0;x<v.count;x++)a.fromBufferAttribute(v,x),d(a,r),n.set([a.x,a.y,a.z],(o+x)*3),s.set([r.r,r.g,r.b],(o+x)*3);o+=v.count});const l=new Ee;l.setAttribute("position",new Ve(n,3)),l.setAttribute("color",new Ve(s,3)),l.computeVertexNormals();let c=0;const u=l.attributes.normal;return t.forEach((h,f)=>{const d=i[f][2],v=h.attributes.position.count;if(d)for(let x=0;x<v;x++)a.fromBufferAttribute(l.attributes.position,c+x).sub(d).normalize(),u.setXYZ(c+x,a.x,a.y,a.z);c+=v}),l}const Wl=.7,Xl=3.8;function vx(){const i=[],e=Xl/8,n=new Ct("#7a5434"),s=new Ct("#a57a4e");for(let r=0;r<8;r++){const a=r/8,o=(r+1)/8,l=.24-a*.08,c=.24-o*.08,u=new De(c,l*1.12,e,7,1),h=u.attributes.position;for(let f=0;f<h.count;f++){const d=h.getY(f)+e/2+r*e,v=d/Xl;h.setXYZ(f,h.getX(f)+Wl*v*v,d,h.getZ(f))}i.push([u,(f,d)=>d.copy(n).lerp(s,f.y/e%1)])}return _s(i)}function xx(i){const n=[],s=[];for(let a=0;a<=12;a++){const o=a/12;s.push(new z(0,.35*o-1.25*o*o,o*2.7))}for(let a=0;a<12;a++){const o=a/12,l=s[a],c=s[a+1],u=.62*Math.sin(Math.PI*Math.min(1,o*1.1+.08))+.05;for(const h of[-1,1]){const f=new z(h*u,l.y-.08-u*.25,l.z+.32);n.push(l.x,l.y,l.z,c.x,c.y,c.z,f.x,f.y,f.z)}}const r=new Ee;return r.setAttribute("position",new re(n,3)),r}function _x(){const i=[],t=new Ct("#3f8a3a"),e=new Ct("#9ad25a"),n=8;for(let s=0;s<n;s++){const r=xx();r.rotateX(-.15+s%2*.25),r.rotateY(s/n*Math.PI*2+s%2*.2),i.push([r,(a,o)=>{const l=Math.hypot(a.x,a.z);o.copy(t).lerp(e,Math.min(1,l/2.4))}])}for(let s=0;s<3;s++){const r=new pi(.16,6,4);r.translate(Math.cos(s*2.1)*.18,-.2,Math.sin(s*2.1)*.18),i.push([r,(a,o)=>o.set("#6b4a2a")])}return _s(i)}function jh(i,t,e){const n=i.map(([s,r,a,o],l)=>{const c=new Yi(o,2),u=c.attributes.position;for(let h=0;h<u.count;h++){const f=u.getX(h),d=u.getY(h),v=u.getZ(h),x=1+.07*Math.sin(f*7+l)*Math.sin(d*6)+.05*Math.sin(v*9+d*4);u.setXYZ(h,f*x,d*x*.92,v*x)}return c.translate(s,r,a),[c,(h,f)=>f.copy(e).lerp(t,ze.smoothstep(h.y,r-o*.6,r+o*.9)),new z(s,r,a)]});return _s(n)}function Mx(i){const t=[],e=new Ct("#2f6a48"),n=new Ct("#4a8a5a"),s=new Ct("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,a,o])=>{const l=new ui(r,a,10,2),c=l.attributes.position;for(let u=0;u<c.count;u++)c.getY(u)<-a/2+.01&&c.setY(u,c.getY(u)+Math.sin(u*1.7)*.12);l.translate(0,o,0),t.push([l,(u,h)=>{const f=(u.y-o+a/2)/a;h.copy(e).lerp(n,f),i&&f>.12&&h.lerp(s,Math.min(1,(f-.12)*2.6))}])}),_s(t)}function yx(){const i=[],t=new De(.12,.26,3,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getY(n);e.setX(n,e.getX(n)+Math.sin(s*1.7)*.12)}return t.translate(0,1.5,0),i.push([t,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,a])=>{const o=new De(.03,.08,a,4);o.translate(0,a/2,0),o.rotateZ(r),o.translate(n*.3,s,0),i.push([o,(l,c)=>c.set("#2e2622")])}),_s(i)}function Sx(i,t,e,n){const s=t.filter(U=>U.kind==="palm"),r=t.filter(U=>U.kind==="round"),a=t.filter(U=>U.kind==="bush"),o=t.filter(U=>U.kind==="pine"),l=t.filter(U=>U.kind==="dead"),c=new Pe({vertexColors:!0}),u=new Pe({vertexColors:!0,side:Ye}),h=new Ct(n.trees.leaf[0]),f=new Ct(n.trees.leaf[1]),d=new De(.16,.26,1.6,7);d.translate(0,.8,0);const v=_s([[d,(U,O)=>O.set("#7a5434")]]),x=jh([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],h,f),m=jh([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],h,f),p=(U,O,V)=>{const $=new hn(U,O,Math.max(1,V));return $.count=V,$.castShadow=!0,$.receiveShadow=!0,i.add($),$},y=p(vx(),c,s.length),S=p(_x(),u,s.length),g=p(v,c,r.length),T=p(x,c,r.length),E=p(m,c,a.length),w=new De(.14,.22,1.2,6);w.translate(0,.6,0);const A=p(_s([[w,(U,O)=>O.set("#5a3e2a")]]),c,o.length),M=p(Mx(n.id==="vinter"),c,o.length),_=p(yx(),c,l.length),C=new Re;s.forEach((U,O)=>{C.position.set(U.x,U.y-.1,U.z),C.rotation.set(0,U.phase,0),C.scale.setScalar(U.s),C.updateMatrix(),y.setMatrixAt(O,C.matrix)}),r.forEach((U,O)=>{C.position.set(U.x,U.y-.1,U.z),C.rotation.set(0,U.phase,0),C.scale.setScalar(U.s),C.updateMatrix(),g.setMatrixAt(O,C.matrix)}),o.forEach((U,O)=>{C.position.set(U.x,U.y-.1,U.z),C.rotation.set(0,U.phase,0),C.scale.setScalar(U.s),C.updateMatrix(),A.setMatrixAt(O,C.matrix)}),l.forEach((U,O)=>{C.position.set(U.x,U.y-.1,U.z),C.rotation.set(0,U.phase,(U.phase%1-.5)*.15),C.scale.setScalar(U.s),C.updateMatrix(),_.setMatrixAt(O,C.matrix)});const N=U=>{s.forEach((O,V)=>{const $=Math.cos(O.phase),B=Math.sin(O.phase);C.position.set(O.x+Wl*$*O.s,O.y-.1+Xl*O.s,O.z-Wl*B*O.s),C.rotation.set(Math.sin(U*1.2+O.phase)*.07,O.phase+Math.sin(U*.7+O.phase)*.05,Math.cos(U*1+O.phase)*.07),C.scale.setScalar(O.s),C.updateMatrix(),S.setMatrixAt(V,C.matrix)}),S.instanceMatrix.needsUpdate=!0,r.forEach((O,V)=>{C.position.set(O.x,O.y-.1,O.z),C.rotation.set(Math.sin(U*1.1+O.phase)*.025,O.phase,Math.cos(U*.9+O.phase)*.025),C.scale.setScalar(O.s),C.updateMatrix(),T.setMatrixAt(V,C.matrix)}),T.instanceMatrix.needsUpdate=!0,a.forEach((O,V)=>{const $=1+Math.sin(U*1.6+O.phase)*.035;C.position.set(O.x,O.y-.12,O.z),C.rotation.set(0,O.phase,0),C.scale.set(O.s*$,O.s/$,O.s*$),C.updateMatrix(),E.setMatrixAt(V,C.matrix)}),E.instanceMatrix.needsUpdate=!0,o.forEach((O,V)=>{C.position.set(O.x,O.y-.1,O.z),C.rotation.set(Math.sin(U*.9+O.phase)*.02,O.phase,Math.cos(U*.8+O.phase)*.02),C.scale.setScalar(O.s),C.updateMatrix(),M.setMatrixAt(V,C.matrix)}),M.instanceMatrix.needsUpdate=!0};return N(0),{colliders:[...s.map(U=>({x:U.x,z:U.z,r:.35*U.s})),...r.map(U=>({x:U.x,z:U.z,r:.4*U.s})),...a.map(U=>({x:U.x,z:U.z,r:.7*U.s})),...o.map(U=>({x:U.x,z:U.z,r:.4*U.s})),...l.map(U=>({x:U.x,z:U.z,r:.3*U.s}))],update:N}}function Go(i,t=5){const e=[],n=[],s=new Ct,r=new Ct;for(let o=0;o<t;o++){const l=i()*Math.PI*2,c=i()*.16,u=.28+i()*.3,h=.04+i()*.03,f=Math.cos(l)*c,d=Math.sin(l)*c,v=(i()-.5)*.25,x=i()*Math.PI,m=Math.cos(x)*h,p=Math.sin(x)*h;e.push(f-m,0,d-p,f+m,0,d+p,f+Math.cos(l)*v,u,d+Math.sin(l)*v),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const a=new Ee;return a.setAttribute("position",new re(e,3)),a.setAttribute("color",new re(n,3)),a.setAttribute("normal",new re(new Array(e.length/3).fill(0).flatMap(()=>[0,1,0]),3)),a}function bx(){const i=[];for(let a=0;a<3;a++){const o=new pi(.07,6,3);o.scale(1,.25,1.15);const l=a*2.094;o.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(o.toNonIndexed())}const t=i.reduce((a,o)=>a+o.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const a of i)e.set(a.attributes.position.array,s*3),n.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count;const r=new Ee;return r.setAttribute("position",new Ve(e,3)),r.setAttribute("normal",new Ve(n,3)),r}function wx(i,t,e,n,s){const{heightAt:r,pathDist:a,plinths:o}=t,l=t.lighthouse.pos,c={uTime:{value:0}},h=(C=>(C.onBeforeCompile=N=>{N.uniforms.uTime=c.uTime,N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),N.fragmentShader=N.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},C))(new Pe({vertexColors:!0,side:Ye})),f=new Pe({color:"#ffffff"}),d=[Go(s,7),Go(s,8),Go(s,6)],v=bx(),x={tak:{grass:["#3f8a3a","#6fbf4a"],density:1,clover:.22,cloverCol:["#3a8a3a","#5aa84a"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(e.mobile?.45:1)*x.density,p=13,y=8,S=Math.round(720*m),g=[],T=new Re,E=new Ct,w=new Ct(x.grass[0]),A=new Ct(x.grass[1]),M=(C,N,F)=>{if(F<.72)return!1;const U=a(C,N);if(U<1||U<1.7&&s()<.6||Math.hypot(C-l.x,N-l.z)<4.3||n.volcano&&Math.hypot(C-n.volcano.x,N-n.volcano.z)<n.volcano.r*.7)return!1;for(const O of o)if((O.x-C)**2+(O.z-N)**2<2.6)return!1;return!t.extrasBlock||!t.extrasBlock(C,N)};for(let C=0;C<y;C++)for(let N=0;N<y;N++){const F=-y*p/2+C*p,U=-y*p/2+N*p;for(const[O,V]of[[0,S*.4],[1,S*.35],[2,S*.25]]){const $=[];for(let Q=0;Q<V*3&&$.length<V;Q++){const at=F+s()*p,ht=U+s()*p,Mt=r(at,ht);M(at,ht,Mt)&&$.push([at,ht,Mt])}if(!$.length)continue;const B=new hn(d[O],h,$.length);B.userData.tier=O,$.forEach(([Q,at,ht],Mt)=>{T.position.set(Q,ht-.04,at),T.rotation.set(0,s()*6.28,0),T.scale.setScalar(.8+s()*.7),T.updateMatrix(),B.setMatrixAt(Mt,T.matrix),B.setColorAt(Mt,E.copy(w).lerp(A,s()))}),B.receiveShadow=!0,B.computeBoundingSphere(),i.add(B),g.push(B)}if(x.clover>0){const O=[],V=F+s()*p,$=U+s()*p;for(let B=0;B<S*x.clover*3&&O.length<S*x.clover;B++){const Q=V+(s()-.5)*6,at=$+(s()-.5)*6,ht=r(Q,at);M(Q,at,ht)&&O.push([Q,at,ht])}if(O.length){const B=new hn(v,f,O.length),Q=new Ct(x.cloverCol[0]),at=new Ct(x.cloverCol[1]);O.forEach(([ht,Mt,qt],it)=>{T.position.set(ht,qt-.02,Mt),T.rotation.set(0,s()*6.28,0),T.scale.setScalar(.8+s()*.8),T.updateMatrix(),B.setMatrixAt(it,T.matrix),B.setColorAt(it,E.copy(Q).lerp(at,s()))}),B.receiveShadow=!0,B.userData.tier=1,B.computeBoundingSphere(),i.add(B),g.push(B)}}}return{update(C){c.uTime.value=C},setLevel:C=>g.forEach(N=>{N.visible=C==="high"||N.userData.tier===0,N.receiveShadow=C==="high"}),count:g.reduce((C,N)=>C+N.count,0)}}function Zh(i,{arms:t=4,rStart:e=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:a=16}={}){const o=[];for(let l=0;l<t;l++){const c=r+l/t*Math.PI*2,u=[];for(let h=0;h<=a;h++){const f=h/a,d=e*(1-f)+n*f,v=c+f*s*Math.PI*2;u.push([i[0]+Math.cos(v)*d,i[1]+Math.sin(v)*d])}o.push(u)}return o}const Ex={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},Tx=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],Ax=[90,210,330].map(i=>i*Math.PI/180),Ba=11,Cx=()=>{const i=[];for(let e=0;e<=48;e++){const n=e/48*Math.PI*2;i.push([Math.cos(n)*Ba,Math.sin(n)*Ba])}const t=Ax.map(e=>[Ba,20,30,40,50].map((n,s)=>{const r=e+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...t]},pr=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:Zh([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#d6bf8c",grass:"#5a9e44",grass2:"#3c8236",path:"#9c8462",deep:"#cdb987",pathMix:.35},water:{shallow:"#8fe6d2",mid:"#3cc8c4",deep:"#1a8ea4",caustic:1},sky:{fog:"#b9d4dc",hemiSky:"#eaf4ff",hemiGround:"#4a5a44",hemi:1.1,sun:"#fff1d8",sunI:2.5,exposure:1,sunDir:[14,30,10],grade:{tint:[1,1,.99],lift:[0,.006,.02],sat:1.06,vignette:.22}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a8d85a","#2f7a3a"]},rock:["#a9a49c","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.6,types:{clerk:{hp:.8},complainer:{hp:.8},tank:{hp:.85}},extra:null},intro:{complainer:2,drone:3,lobbyist:5,heli:6,auditor:7,balloon:8}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:Tx,shape:"fjord",fjord:Ex,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4"},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#8a929c","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,types:{tank:{hp:.8},clerk:{hp:.9},lobbyMini:{hp:.8}},extra:{type:"tank",n:1,gap:4,path:"both",from:3}},intro:{balloon:3,auditor:4,lobbyist:5,drone:5,heli:6,complainer:6}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:Zh([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:Cx(),moat:Ba,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,types:{lobbyist:{hp:.75},lobbyMini:{hp:.8},clerk:{hp:.9}},extra:{type:"gull",n:1,gap:1.4,from:3}},intro:{complainer:2,drone:2,lobbyist:3,heli:4,auditor:5,balloon:7}}];function Rx(i){const[t,e,n]=i.edgeAmp,s=i.seed;return r=>i.radius+t*Math.sin(3*r+.4*s)+e*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}const Kh={clerk:["complainer","lobbyist"],swarm:["complainer"],tank:["auditor","lobbyist"],gull:["drone","heli","balloon"]},Ho={clerk:22,swarm:7,tank:95,gull:16,complainer:17,lobbyist:97,auditor:112,drone:9,heli:62,balloon:150},Wo={complainer:.6,lobbyist:1.8,auditor:2.2,drone:.4,heli:2.4,balloon:3.5};function Px(i,t){let e=i.seed*9301+49297;const n=()=>(e=(e*9301+49297)%233280)/233280,s=i.intro||{};return t.map((r,a)=>{const o=a+1,l=r.map(f=>({...f})),c=i.balance.extra;c&&o>=c.from&&l.push({...c,n:c.n+Math.floor((o-c.from)/2),at:5});const u=(f,d,v)=>Math.max(1,Math.round(f*Math.min(1,Ho[d]/Ho[v]))),h=(f,d)=>{f.n=u(f.n,f.type,d),f.gap=Wo[d]??f.gap,f.type=d};for(const[f,d]of Object.entries(s)){if(d!==o)continue;const v=l.find(x=>{var m;return(m=Kh[x.type])==null?void 0:m.includes(f)});if(v&&v.n>=2){const x=Math.floor(v.n/2);l.push({...v,type:f,n:u(x,v.type,f),gap:Wo[f]??v.gap,at:(v.at??0)+2}),v.n-=x}else v?h(v,f):l.push({type:f,n:Math.max(1,Math.min(3,Math.round(44/Ho[f]))),gap:Wo[f],path:0,at:6})}for(const f of l){const d=(Kh[f.type]||[]).filter(v=>s[v]&&s[v]<o);d.length&&n()<.45&&h(f,d[Math.floor(n()*d.length)])}return l})}function Wr(){try{return Math.max(1,Math.min(pr.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function Dx(i){try{i+2>Wr()&&localStorage.setItem("glod-unlocked",String(Math.min(pr.length,i+2)))}catch{}}function Ea(i,t,{color:e,size:n,speed:s,drift:r,additive:a,area:o=46,top:l=22}){const c=new Float32Array(t*3),u=new Float32Array(t);for(let p=0;p<t;p++)c[p*3]=(Math.random()-.5)*o*2,c[p*3+1]=Math.random()*l,c[p*3+2]=(Math.random()-.5)*o*2,u[p]=Math.random()*6.28;const h=new Ee;h.setAttribute("position",new Ve(c,3));const f=document.createElement("canvas");f.width=f.height=32;const d=f.getContext("2d"),v=d.createRadialGradient(16,16,0,16,16,16);v.addColorStop(0,"rgba(255,255,255,1)"),v.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=v,d.fillRect(0,0,32,32);const x=new Ka({color:e,size:n,map:new Wi(f),transparent:!0,depthWrite:!1,blending:a?ei:Xi,opacity:a?1:.85}),m=new gc(h,x);return m.frustumCulled=!1,i.add(m),(p,y,S)=>{for(let g=0;g<t;g++){let T=c[g*3+1]-s*p*(.7+u[g]%1*.6);c[g*3]+=Math.sin(S*.7+u[g])*r*p,(s<0?T>l:T<0)&&(T=s<0?0:l,c[g*3]=y.x+(Math.random()-.5)*o*2,c[g*3+2]=y.z+(Math.random()-.5)*o*2),c[g*3+1]=T}h.attributes.position.needsUpdate=!0}}function Lx(i,t,e,n,s=160){const r=new _c(i.map(([h,f])=>new z(h,0,f))),a=r.getLength(),o=[],l=[],c=[];for(let h=0;h<=s;h++){const f=h/s,d=r.getPointAt(f),v=r.getTangentAt(f),x=-v.z,m=v.x,p=t*(.75+.25*Math.sin(f*9));for(const y of[-1,1]){const S=d.x+x*p*y,g=d.z+m*p*y;o.push(S,e(S,g)+n,g),l.push(f*a,(y+1)/2)}if(h<s){const y=h*2;c.push(y,y+1,y+2,y+1,y+3,y+2)}}const u=new Ee;return u.setAttribute("position",new re(o,3)),u.setAttribute("uv",new re(l,2)),u.setIndex(c),u.computeVertexNormals(),{geo:u,curve:r,len:a}}function Ux(i,t,e,n){var x;const{heightAt:s}=t,r=[],a=[],o=[],l=[],c=[],u=e.mobile?.5:1,h=new Set(n.life);if(h.has("aurora")){const m=new Oe({transparent:!0,depthWrite:!1,blending:ei,side:Ye,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const[p,y,S]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const g=new Jt(new ni(150,26,96,1),m);g.position.set(p,20,y),g.rotation.y=S,i.add(g)}a.push((p,y,S)=>m.uniforms.uTime.value=S)}if(h.has("snow")&&a.push(Ea(i,Math.round(900*u),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),h.has("ash")&&a.push(Ea(i,Math.round(500*u),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),h.has("embers")&&a.push(Ea(i,Math.round(160*u),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),h.has("icefloes")){const m=[];for(let T=0;T<6e3&&m.length<70*u;T++){const E=(Math.random()-.5)*120,w=(Math.random()-.5)*120,A=.05-s(E,w);A>.15&&A<1.4&&m.every(M=>Math.hypot(M.x-E,M.z-w)>2.2)&&m.push({x:E,z:w,s:.6+Math.random()*1.1,r:Math.random()*6})}const p=new De(1,.9,.18,7),y=p.attributes.position;for(let T=0;T<y.count;T++){const E=Math.atan2(y.getZ(T),y.getX(T)),w=.75+.35*Math.abs(Math.sin(E*2.3+T));y.setX(T,y.getX(T)*w),y.setZ(T,y.getZ(T)*w)}p.computeVertexNormals();const S=new hn(p,new Pe({color:"#eaf6ff"}),Math.max(1,m.length));S.count=m.length,S.receiveShadow=!0,i.add(S);const g=new Re;a.push((T,E,w)=>{m.forEach((A,M)=>{g.position.set(A.x+Math.sin(w*.1+A.r)*.4,.08+Math.sin(w*1.1+A.r)*.03,A.z),g.rotation.set(Math.sin(w*.9+A.r)*.03,A.r+w*.02,Math.cos(w*.8+A.r)*.03),g.scale.set(A.s,1,A.s),g.updateMatrix(),S.setMatrixAt(M,g.matrix)}),S.instanceMatrix.needsUpdate=!0})}if(n.lava){const m=new Oe({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const g of n.lava){const T=Lx(g,1.25,s,.07);i.add(new Jt(T.geo,m));const E=[];let w=!1;for(let A=0;A<=1;A+=1.4/T.len){const M=T.curve.getPointAt(Math.min(1,A));if(t.pathDist(M.x,M.z)<2.4){w||c.push({x:M.x,z:M.z,tan:T.curve.getTangentAt(Math.min(1,A))}),w=!0;continue}w=!1,o.push({x:M.x,z:M.z,r:1.4})}for(const A of[.25,.7]){const M=T.curve.getPointAt(A),_=new Hr("#ff6a2a",14,12,1.6);_.position.set(M.x,s(M.x,M.z)+1.2,M.z),i.add(_),E.push(_)}a.push((A,M,_)=>E.forEach((C,N)=>C.intensity=12+3*Math.sin(_*2.3+N)))}a.push((g,T,E)=>m.uniforms.uTime.value=E);const p=new Pn(3.4,.35,4.2),y=new Pe({color:((x=n.rock)==null?void 0:x[0])??"#555"}),S=new De(2.4,2.4,.1,18);for(const g of c){const T=s(g.x,g.z)+.12,E=new Jt(p,y);E.position.set(g.x,T,g.z),E.rotation.y=-Math.atan2(g.tan.z,g.tan.x),E.castShadow=E.receiveShadow=!0,i.add(E);const w=new Jt(S,new Se({color:new Ct("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));w.position.set(g.x,T+.25,g.z),w.visible=!1,i.add(w);const A=new Hr("#ff6a2a",0,14,1.6);A.position.set(g.x,T+1.6,g.z),i.add(A);let M=!1;l.push({x:g.x,z:g.z,get closed(){return M},setClosed(_){M=_,w.visible=_}}),a.push((_,C,N)=>{const F=M?1:0;w.material.opacity+=(F*.9-w.material.opacity)*Math.min(1,_*3),!M&&w.material.opacity<.02&&(w.visible=!1),A.intensity=w.material.opacity*(22+6*Math.sin(N*9))})}}if(n.volcano){const m=n.volcano;o.push({x:m.x,z:m.z,r:m.r*.55});const p=new Jt(new lr(m.r*.22,20),new Se({color:new Ct("#ff5a1a").multiplyScalar(2.4)}));p.rotation.x=-Math.PI/2,p.position.set(m.x,s(m.x,m.z)+.2,m.z),i.add(p);const y=new Qa(.35,0),S=[];for(let E=0;E<3e3&&S.length<50*u;E++){const w=(Math.random()-.5)*96,A=(Math.random()-.5)*96,M=s(w,A);M>.4&&t.pathDist(w,A)>2.2&&S.push({x:w,z:A,h:M,s:.5+Math.random()})}const g=new hn(y,new Se({color:new Ct("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,S.length));g.count=S.length;const T=new Re;S.forEach((E,w)=>{T.position.set(E.x,E.h,E.z),T.rotation.set(E.s,E.s*3,0),T.scale.set(E.s,E.s*.5,E.s),T.updateMatrix(),g.setMatrixAt(w,T.matrix)}),i.add(g)}if(n.waterfall&&n.waterfall._lvl!==void 0){const m=n.waterfall,p=m.basin[0]-m.lip[0],y=m.basin[1]-m.lip[1],S=Math.hypot(p,y),g=p/S,T=y/S,E=m._lvl-.1,w=14,A=1.25,M=[],_=[],C=[];for(let B=0;B<=w;B++){const Q=B/w,at=.35+1.5*Q*Q,ht=E-(E-.06)*(Q*Q*.6+Q*.4);for(const Mt of[-1,1])M.push(m.lip[0]+g*at-T*A*Mt*(.85+Q*.3),ht,m.lip[1]+T*at+g*A*Mt*(.85+Q*.3)),_.push((Mt+1)/2,Q);if(B<w){const Mt=B*2;C.push(Mt,Mt+1,Mt+2,Mt+1,Mt+3,Mt+2)}}const N=new Ee;N.setAttribute("position",new re(M,3)),N.setAttribute("uv",new re(_,2)),N.setIndex(C);const F=new Oe({transparent:!0,depthWrite:!1,side:Ye,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new Jt(N,F));const U=new Jt(new lr(1.4,20),new Se({color:"#ffffff",transparent:!0,opacity:.7,depthWrite:!1}));U.rotation.x=-Math.PI/2;const O=m.lip[0]+g*1.9,V=m.lip[1]+T*1.9;U.position.set(O,.1,V),i.add(U);const $=Ea(i,Math.round(60*u),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});a.push((B,Q,at)=>{F.uniforms.uTime.value=at,U.scale.setScalar(1+Math.sin(at*5)*.08),U.material.opacity=.55+.15*Math.sin(at*7),$(B,{x:O,z:V},at)}),o.push({x:O,z:V,r:.9})}const f=(m,p)=>o.some(y=>(y.x-m)**2+(y.z-p)**2<y.r*y.r);let d=0;return{colliders:r,update:(m,p=t.lighthouse.pos)=>{const y=Math.min(.05,Math.max(0,m-d));d=m;for(const S of a)S(y,p,m)},blocks:f,blockers:o,bridges:l}}const Fn=20;function ri(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ix(i){const t=new _c(i.map(([s,r])=>new z(s,0,r)),!1,"catmullrom",.5),e=t.getLength(),n=t.getSpacedPoints(400);return{curve:t,length:e,samples:n}}function Nx(i,t,e,n){const s=3+n%2,r=[],a=[],o=[],l=new Ct(t),c=l.clone().multiplyScalar(.72),u=new Ct(e),h=new Ct;let f=0,d=0,v=0;for(let m=0;m<s;m++){const p=1.25-m*.22+i()*.15,y=.45+i()*.25,S=new Yi(1,2).toNonIndexed(),g=S.attributes.position,T=S.attributes.uv;for(let E=0;E<g.count;E++){let w=g.getX(E),A=g.getY(E),M=g.getZ(E);A=Math.sign(A)*Math.pow(Math.abs(A),.55);const _=1+.12*Math.sin(w*5+m)*Math.sin(M*4+n)+.06*Math.sin(A*9);w*=p*_,M*=p*.85*_,A=A*y*.5;const C=ze.smoothstep(A/(y*.5),.45,.85);h.copy(c).lerp(l,ze.smoothstep(A/(y*.5),-.9,.3)).lerp(u,C*(m===s-1?1:.6)),r.push(w+d,A+f+y*.5,M+v),a.push(h.r,h.g,h.b),o.push(T.getX(E)*2,T.getY(E)*2)}f+=y*.82,d+=(i()-.5)*.4,v+=(i()-.5)*.35}const x=new Ee;return x.setAttribute("position",new re(r,3)),x.setAttribute("color",new re(a,3)),x.setAttribute("uv",new re(o,2)),x.computeVertexNormals(),x}function zx(i,t,e){const n=Rx(e),s=new z(e.lighthouse[0],0,e.lighthouse[1]),r=e.paths.map(Ix),a=r.flatMap(L=>L.samples),o=(L,D)=>{let W=1/0;for(let J=0;J<a.length;J+=3){const lt=a[J],xt=(lt.x-L)**2+(lt.z-D)**2;xt<W&&(W=xt)}return Math.sqrt(W)};if(e.plateausAuto&&!e.plateaus){const L=ri(500+e.seed),D=[];for(const W of e.plateausAuto){let J=null,lt=-1;for(let xt=0;xt<500;xt++){const St=L()*Math.PI*2,dt=12+L()*24,Lt=Math.cos(St)*dt,wt=Math.sin(St)*dt,ve=o(Lt,wt);if(ve<W.r+3.5||Math.hypot(Lt-s.x,wt-s.z)<W.r+9||D.some(Me=>Math.hypot(Me.x-Lt,Me.z-wt)<Me.r+W.r+5))continue;const jt=Math.min(ve-W.r,9)+L()*.5;jt>lt&&(lt=jt,J={x:Lt,z:wt,...W})}J&&D.push(J)}if(e.plateaus=D,e.waterfall&&D[0]){const W=D[0],J=e.waterfall;let lt=0,xt=-1;for(let Lt=0;Lt<16;Lt++){const wt=Lt/16*Math.PI*2,ve=W.x+Math.cos(wt)*(W.r+3.2),jt=W.z+Math.sin(wt)*(W.r+3.2),Me=o(ve,jt);Me>xt&&(xt=Me,lt=wt)}const St=Math.cos(lt),dt=Math.sin(lt);J.pool=[W.x+St*(W.r-2.4),W.z+dt*(W.r-2.4)],J.lip=[W.x+St*(W.r-.3),W.z+dt*(W.r-.3)],J.basin=[W.x+St*(W.r+3),W.z+dt*(W.r+3)]}}const l=e.fjord,c=e.nes,u=(L,D)=>{if(e.shape==="fjord"){const W=D+30+2.2*Math.sin(L*.21)+1.2*Math.sin(L*.53+1),J=ze.clamp(D,c.z1,c.z0),lt=c.r-Math.hypot(L-c.x,D-J)+(D<c.z1?0:.6*Math.sin(D*.7));return Math.max(W,lt)}return n(Math.atan2(D,L))-Math.hypot(L,D)},h=(L,D,W=!1)=>{const J=ze.smoothstep(u(L,D),-3,7),lt=.9+.7*Math.sin(L*.17+1)*Math.cos(D*.21)+.35*Math.sin(L*.5+D*.4)+.3*Math.sin(L*.31-D*.23+2.1)+.18*Math.cos(L*.73+D*.61),xt=2.4*Math.exp(-((L-s.x-2)**2+(D-s.z+1)**2)/60);let St=-2.2+J*(2.2+lt+xt);if(J>.85&&St<.35&&(St=Math.max(-.42,.35-(.35-St)*3.2)),l){const dt=Math.max(ze.smoothstep(Math.abs(L),l.wall-3,l.wall+6),ze.smoothstep(D,l.top+6,l.top+14));St+=dt*(7+1.5*Math.sin(D*.13+L*.05));const Lt=Math.abs(L-l.xc(D)),wt=1-ze.smoothstep(D,l.top-6,l.top+2);Lt<l.w+1.5&&wt>0&&(St=Math.min(St,ze.lerp(St,-1.6,wt*(1-ze.smoothstep(Lt,l.w-.8,l.w+1.5)))))}for(const dt of e.plateaus||[]){const Lt=Math.hypot(L-dt.x,D-dt.z),wt=Math.atan2(D-dt.z,L-dt.x),ve=dt.r+Math.sin(wt*5+dt.x)*.8+Math.sin(wt*11)*.3;St+=dt.h*ze.smoothstep(ve-Lt,0,1.3)}if(e.waterfall&&!W){const dt=e.waterfall,Lt=Math.hypot(L-dt.pool[0],D-dt.pool[1]);Lt<dt.poolR+.6&&(dt._lvl??(dt._lvl=h(dt.pool[0],dt.pool[1],!0)-.12),St=Math.min(St,dt._lvl-.48*Math.sqrt(Math.max(0,1-Lt/(dt.poolR+.6)))));const wt=ze.clamp(((L-dt.pool[0])*(dt.lip[0]-dt.pool[0])+(D-dt.pool[1])*(dt.lip[1]-dt.pool[1]))/((dt.lip[0]-dt.pool[0])**2+(dt.lip[1]-dt.pool[1])**2),0,1),ve=dt.pool[0]+(dt.lip[0]-dt.pool[0])*wt,jt=dt.pool[1]+(dt.lip[1]-dt.pool[1])*wt;Math.hypot(L-ve,D-jt)<.75&&dt._lvl!==void 0&&(St=Math.min(St,dt._lvl-.25));const Me=Math.hypot(L-dt.basin[0],D-dt.basin[1]);Me<dt.basinR&&(St=Math.min(St,Math.max(-.42,.05-.47*Math.sqrt(1-Me/dt.basinR))))}if(e.volcano){const dt=e.volcano,Lt=Math.hypot(L-dt.x,D-dt.z);St+=dt.h*Math.max(0,1-Lt/dt.r)**1.4-dt.h*.5*Math.max(0,1-Lt/(dt.r*.25))}return St},f=68,d=t.mobile?160:176,v=new Float32Array((d+1)*(d+1)),x=new Float32Array((d+1)*(d+1));for(let L=0;L<=d;L++)for(let D=0;D<=d;D++){const W=-f+D/d*f*2,J=-f+L/d*f*2,lt=o(W,J);x[L*(d+1)+D]=lt;let xt=h(W,J);const St=ze.smoothstep(lt,1.4,3.2),dt=Math.max(h(W,J)*.6+.3,.45);xt=ze.lerp(Math.min(xt,dt+.1),xt,St),l&&Math.abs(J-l.bridgeZ)<4&&Math.abs(W-l.xc(J))<l.w+2&&lt<2.2&&(xt=Math.max(xt,.5)),v[L*(d+1)+D]=xt}const m=(L,D,W)=>{const J=ze.clamp((D+f)/(f*2)*d,0,d-.001),lt=ze.clamp((W+f)/(f*2)*d,0,d-.001),xt=Math.floor(J),St=Math.floor(lt),dt=J-xt,Lt=lt-St,wt=L[St*(d+1)+xt],ve=L[St*(d+1)+xt+1],jt=L[(St+1)*(d+1)+xt],Me=L[(St+1)*(d+1)+xt+1];return(wt*(1-dt)+ve*dt)*(1-Lt)+(jt*(1-dt)+Me*dt)*Lt},p=(L,D)=>m(v,L,D),y=(L,D)=>m(x,L,D),S=(L,D)=>p(L,D)>.35,g=.5,T=(L,D)=>Math.max(Math.abs(p(L+.4,D)-p(L-.4,D)),Math.abs(p(L,D+.4)-p(L,D-.4)))/.8,E=(L,D)=>!!l&&Math.abs(D-l.bridgeZ)<4&&Math.abs(L-l.xc(D))<l.w+1.5&&y(L,D)<2.6,w=new Ct("#cfeaff"),A=(L,D)=>p(L,D)>.05-g&&T(L,D)<1.05,M=t.mobile?170:256,_=new ni(f*2,f*2,M,M);_.rotateX(-Math.PI/2);const C=_.attributes.position,N=new Float32Array(C.count*3),F=e.palette,U=new Ct(e.rock[0]).multiplyScalar(.7),O=new Ct(e.rock[0]).multiplyScalar(1.08),V=new Ct,$=new Ct(F.sand),B=new Ct(F.grass),Q=new Ct(F.grass2),at=new Ct(F.path),ht=new Ct(F.deep),Mt=new Ct,qt=ri(7);for(let L=0;L<C.count;L++){const D=C.getX(L),W=C.getZ(L),J=p(D,W);C.setY(L,J);const lt=y(D,W),xt=Mt.copy(B).lerp(Q,ze.clamp((J-1)*.6+qt()*.3,0,1)).clone();Mt.copy(ht).lerp($,ze.smoothstep(J,0,.3)).lerp(xt,ze.smoothstep(J,.62,.95));const St=.5+.5*Math.sin(D*1.7+W*.9)*Math.cos(W*1.3-D*.6);lt<2.1&&J>.15&&Mt.lerp(at,ze.smoothstep(1.9-lt+(St-.5)*(F.pathMix??.3)*2.4,0,.7)),l&&E(D,W)&&Mt.lerp(w,.85);const dt=T(D,W);if(dt>.75){const Lt=.5+.5*Math.sin(J*7.5+Math.sin(D*.7+W*.5)*1.5);V.copy(U).lerp(O,Lt),Mt.lerp(V,ze.smoothstep(dt,.75,1.3))}Mt.offsetHSL(0,0,(qt()-.5)*.04),N.set([Mt.r,Mt.g,Mt.b],L*3)}_.setAttribute("color",new Ve(N,3)),_.computeVertexNormals();const it=new Pe({vertexColors:!0});it.onBeforeCompile=L=>{L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),L.fragmentShader=L.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTW;`).replace("#include <color_fragment>",`#include <color_fragment>
        float sandMask = 1.0 - smoothstep(0.55, 0.85, vTW.y);
        float rip = sin(vTW.x * 2.3 + sin(vTW.z * 0.5) * 2.2 + vTW.z * 0.8);
        diffuseColor.rgb *= 1.0 - 0.045 * rip * sandMask;
        // Malt overflate: myk to-oktavs støy i lyshet og litt i fargetone
        vec2 q = vTW.xz;
        float n1 = sin(q.x * 0.9 + sin(q.y * 0.7) * 1.7) * sin(q.y * 1.1 + sin(q.x * 0.5) * 1.3);
        float n2 = sin(q.x * 3.7 + q.y * 2.3) * sin(q.y * 3.1 - q.x * 1.9);
        diffuseColor.rgb *= 0.93 + 0.07 * n1 + 0.035 * n2;
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const ut=new Jt(_,it);ut.receiveShadow=!0,i.add(ut);const yt=[],pt=(L,D)=>Math.hypot(L-s.x,D-s.z)>6;for(const[L,D]of r.entries()){let W=L%2===0?1:-1,J=0;for(let lt=.16;lt<.95&&J<6;lt+=.055){const xt=D.curve.getPointAt(lt),St=D.curve.getTangentAt(lt),dt=new z(-St.z,0,St.x).normalize();for(const Lt of[W,-W]){const wt=xt.x+dt.x*3.6*Lt,ve=xt.z+dt.z*3.6*Lt;if(!(y(wt,ve)<2.7||!S(wt,ve)||!pt(wt,ve))&&!yt.some(jt=>Math.hypot(jt.x-wt,jt.z-ve)<5.2)&&!(e.volcano&&Math.hypot(wt-e.volcano.x,ve-e.volcano.z)<e.volcano.r+2)){yt.push({x:wt,z:ve,tower:null}),J++;break}}W=-W}}const Nt=(()=>{const L=document.createElement("canvas");L.width=L.height=256;const D=L.getContext("2d");D.fillStyle="#ffffff",D.fillRect(0,0,256,256);const W=ri(77);for(let lt=0;lt<260;lt++){const xt=200+W()*55|0;D.fillStyle=`rgba(${xt},${xt},${xt-6},${.25+W()*.35})`,D.beginPath(),D.ellipse(W()*256,W()*256,6+W()*26,3+W()*12,W()*3,0,Math.PI*2),D.fill()}D.strokeStyle="rgba(90,90,90,0.35)",D.lineWidth=1.5;for(let lt=0;lt<26;lt++){let xt=W()*256,St=W()*256;D.beginPath(),D.moveTo(xt,St);for(let dt=0;dt<4;dt++)xt+=(W()-.5)*30,St+=W()*18,D.lineTo(xt,St);D.stroke()}const J=new Wi(L);return J.colorSpace=cn,J.wrapS=J.wrapT=Ui,J})(),Bt=new Pe({color:"#8c8f88",map:Nt}),Xt=new Pe({color:"#5f8a42",map:Nt}),ue=new Se({color:"#ffe3a0",transparent:!0,opacity:.28,depthWrite:!1}),te=new Se({color:"#f5f7f8",transparent:!0,opacity:.12,depthWrite:!1}),pe=new De(1.25,1.5,.9,8);pe.translate(0,.35,0);const X=new De(1.28,1.28,.12,8);X.translate(0,.82,0);const Te=new bs(.55,.75,6);Te.rotateX(-Math.PI/2);const ee=new pi(1,7,5),Zt=yt.length,Vt=new hn(pe,Bt,Zt),fe=new hn(X,Xt,Zt),j=new hn(Te,ue,Zt),R=new hn(ee,te,Zt*3);Vt.castShadow=Vt.receiveShadow=fe.receiveShadow=!0;const b=new Re;yt.forEach((L,D)=>{L.y0=p(L.x,L.z),L.y=L.y0+.88,b.position.set(L.x,L.y0,L.z),b.rotation.set(0,D,0),b.scale.setScalar(1),b.updateMatrix(),Vt.setMatrixAt(D,b.matrix),fe.setMatrixAt(D,b.matrix)}),i.add(Vt,fe,j,R);const H=L=>{yt.forEach((D,W)=>{const J=!D.tower;b.position.set(D.x,D.y0+.9,D.z),b.rotation.set(0,L*.5,0),b.scale.setScalar(J?1:0),b.updateMatrix(),j.setMatrixAt(W,b.matrix);for(let lt=0;lt<3;lt++){const xt=L*.4+lt*2.1+D.x,St=(xt%1+1)%1;b.position.set(D.x+Math.cos(xt*2.3)*.9,D.y0+.5+St*.9,D.z+Math.sin(xt*2.3)*.9),b.rotation.set(0,0,0),b.scale.set(J?.6+St*.5:0,J?.3+St*.2:0,J?.6+St*.5:0),b.updateMatrix(),R.setMatrixAt(W*3+lt,b.matrix)}}),j.instanceMatrix.needsUpdate=!0,R.instanceMatrix.needsUpdate=!0},Z=new me,tt=p(s.x,s.z);Z.position.set(s.x,tt,s.z);const et=(()=>{const L=document.createElement("canvas");L.width=512,L.height=512;const D=L.getContext("2d");D.fillStyle="#f6f1e6",D.fillRect(0,0,512,512);const W=ri(5);for(let lt=0;lt<520;lt++){const xt=W()*512,St=W()*512,dt=2+W()*9,Lt=W()<.65;D.fillStyle=Lt?`rgba(${90+W()*40},${120+W()*40},${60+W()*20},${.12+W()*.18})`:`rgba(${130+W()*30},${95+W()*20},60,${.12+W()*.15})`,D.beginPath(),D.ellipse(xt,St,dt,dt*(.4+W()*.6),W()*3,0,Math.PI*2),D.fill()}for(let lt=0;lt<1200;lt++){D.strokeStyle=`rgba(190,170,140,${.04+W()*.07})`,D.lineWidth=1;const xt=W()*512,St=W()*512;D.beginPath(),D.moveTo(xt,St),D.lineTo(xt+(W()-.5)*8,St+6+W()*20),D.stroke()}for(let lt=0;lt<26;lt++){const xt=W()*512;D.strokeStyle=W()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",D.lineWidth=2+W()*5,D.beginPath(),D.moveTo(xt,512),D.bezierCurveTo(xt+40,350,xt-30,160,xt+20+W()*40,0),D.stroke()}D.strokeStyle="rgba(175,145,100,0.55)",D.lineWidth=4,D.beginPath(),D.moveTo(60,512),D.bezierCurveTo(90,330,110,180,150,0),D.stroke();const J=new Wi(L);return J.colorSpace=cn,J.wrapS=Ui,J})(),Rt=new Pe({map:et}),vt=(()=>{const L=document.createElement("canvas");L.width=L.height=128;const D=L.getContext("2d");D.fillStyle="#e9dcbf",D.fillRect(0,0,128,128),D.strokeStyle="#a88d62",D.lineWidth=3,D.beginPath();for(let J=0;J<Math.PI*9;J+=.1){const lt=4+J*2;D.lineTo(64+Math.cos(J)*lt,64+Math.sin(J)*lt)}D.stroke();const W=new Wi(L);return W.colorSpace=cn,W})(),bt=new Pe({color:"#e6d8b8"}),Qt=new Pe({map:vt}),_t=new Pe({color:"#3a3330",flatShading:!0}),zt=new Pe({color:"#b8b2aa",flatShading:!0}),Yt=(()=>{const L=document.createElement("canvas");L.width=256,L.height=128;const D=L.getContext("2d"),W=D.createLinearGradient(0,0,0,128);W.addColorStop(0,"#fff0b0"),W.addColorStop(.45,"#ffb040"),W.addColorStop(1,"#ff5a10"),D.fillStyle=W,D.fillRect(0,0,256,128);const J=ri(11);for(let xt=0;xt<70;xt++){const St=J();D.fillStyle=St<.5?`rgba(70,60,55,${.5+J()*.4})`:`rgba(170,165,160,${.5+J()*.4})`,D.beginPath(),D.ellipse(J()*256,20+J()*108,4+J()*14,2+J()*6,J()*3,0,Math.PI*2),D.fill()}D.strokeStyle="rgba(60,30,20,0.6)",D.lineWidth=1.5;for(let xt=0;xt<40;xt++){const St=J()*256,dt=J()*128;D.beginPath(),D.moveTo(St,dt),D.lineTo(St+(J()-.5)*30,dt+(J()-.5)*20),D.stroke()}const lt=new Wi(L);return lt.colorSpace=cn,lt})(),Kt=new Se({map:Yt,color:new Ct("#ffffff").multiplyScalar(2.2)});function Ot({len:L,rTop:D,rBot:W,crutchH:J,seg:lt,bend:xt,glowMat:St,shadow:dt}){const Lt=new me,wt=new Jt(new De(W*.98,W*.95,J,lt),[bt,bt,Qt]);wt.position.y=J/2,wt.castShadow=dt,Lt.add(wt);const ve=new De(D,W,L,lt,8,!0),jt=ve.attributes.position,Me=ri(Math.round(L*100)),ii=Array.from({length:6},()=>[Me()*6.28,Me()*3,.03+Me()*.04]);for(let Ae=0;Ae<jt.count;Ae++){const Wn=jt.getY(Ae),Xn=(Wn+L/2)/L,vr=Math.atan2(jt.getZ(Ae),jt.getX(Ae));let As=1+Math.sin(vr*7+Wn*3)*.018;for(const[wf,Ef,Tf]of ii)As+=Math.cos(vr-wf)*Math.sin(Xn*6+Ef)*Tf*.5;jt.setXYZ(Ae,jt.getX(Ae)*As+xt*Xn*Xn*L,Wn,jt.getZ(Ae)*As)}ve.translate(0,J+L/2,0),ve.computeVertexNormals();const Xe=new Jt(ve,Rt);Xe.castShadow=dt,Xe.receiveShadow=!0,Lt.add(Xe);const Gn=xt*L,ye=J+L,Sn=new De(D*1.02,D*1.04,D*.35,lt,1,!0),si=Sn.attributes.position;for(let Ae=0;Ae<si.count;Ae++)si.getY(Ae)>0&&si.setY(Ae,si.getY(Ae)+Math.sin(Ae*2.7)*D*.12);Sn.computeVertexNormals();const rn=new Jt(Sn,_t);rn.position.set(Gn,ye+D*.12,0),Lt.add(rn);const An=new Jt(new pi(D*.97,lt,6,0,Math.PI*2,0,Math.PI/2),St);An.scale.y=.38,An.position.set(Gn,ye+D*.2,0),Lt.add(An);const Hn=[];for(let Ae=0;Ae<5;Ae++){const Wn=new Jt(new Qa(D*(.2+Ae%3*.07),0),zt),Xn=Ae*1.25+.3;Wn.position.set(Gn+Math.cos(Xn)*D*.55,ye+D*.33,Math.sin(Xn)*D*.55),Wn.scale.y=.4,Lt.add(Wn),Hn.push(Wn)}const Es=new ui(D*.28,D*1.1,6,4),Ts=Es.attributes.position;for(let Ae=0;Ae<Ts.count;Ae++){const Wn=Ts.getY(Ae),Xn=(Wn/(D*1.1)+.5)*2.2,vr=Ts.getX(Ae),As=Ts.getZ(Ae);Ts.setX(Ae,vr*Math.cos(Xn)-As*Math.sin(Xn)+(Wn+D*.55)*.25),Ts.setZ(Ae,vr*Math.sin(Xn)+As*Math.cos(Xn))}Es.computeVertexNormals();const oo=new Jt(Es,_t);return oo.position.set(Gn+D*.1,ye+D*.7,D*.1),oo.rotation.z=-.35,Lt.add(oo),Lt.userData={glow:An,top:new z(Gn,ye,0),charRing:rn,ashFlakes:Hn},Lt}const ae=new Jt(new De(3.3,3.9,1,9),Bt);ae.position.y=.3,ae.castShadow=ae.receiveShadow=!0,Z.add(ae);const $t=7.4,ce=1.4,G=Ot({len:$t,rTop:2.35,rBot:.95,crutchH:ce,seg:22,bend:.06,glowMat:Kt,shadow:!0});G.position.y=.75,G.rotation.set(.06,0,-.03);const At=G.userData.charRing;Z.add(G);const rt=new Re;rt.position.y=ce+$t+1.2,G.add(rt);const ft=new Hr("#ff8a3a",40,34,1.5);ft.position.y=ce+$t+1.4,G.add(ft);const Pt=new ui(2.2,16,16,6,!0);Pt.translate(0,-8,0);{const L=Pt.attributes.position,D=new Float32Array(L.count*3);for(let W=0;W<L.count;W++){const J=Math.pow(1-Math.min(1,-L.getY(W)/16),1.6);D.set([J,J,J],W*3)}Pt.setAttribute("color",new Ve(D,3))}Pt.rotateZ(Math.PI/2);const Dt=new Se({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:ei,depthWrite:!1,side:Ye,fog:!1}),I=new me;I.position.y=ce+$t+.8;const ot=new Jt(Pt,Dt),It=ot.clone();It.rotation.y=Math.PI,I.add(ot,It),G.add(I);const Gt=new Hr("#ffa050",12,10,1.4);Gt.position.set(0,1.3,4.6),Z.add(Gt);const de=[],ie=new Se({color:new Ct("#ffffff").multiplyScalar(3.2)}),Le=new Ct("#ff6a1a"),Ne=new Ct("#1a1716"),He=Ot({len:.78,rTop:.16,rBot:.075,crutchH:.16,seg:8,bend:.08,glowMat:ie,shadow:!0});He.updateMatrixWorld(!0);for(let L=0;L<Fn;L++){const D=L/Fn*Math.PI*2,W=new Re;W.position.set(Math.cos(D)*3.45,.8,Math.sin(D)*3.45),W.scale.setScalar(1.45),W.rotation.set(Math.sin(D)*.35,D,-Math.cos(D)*.35),Z.add(W),W.updateMatrix(),de.push(W)}let en=null;const Nn=new _e;for(const L of He.children){if(!L.isMesh)continue;const D=new hn(L.geometry,L.material,Fn);if(D.castShadow=L.castShadow,de.forEach((W,J)=>D.setMatrixAt(J,Nn.multiplyMatrices(W.matrix,L.matrix))),L.material===ie){en=D;for(let W=0;W<Fn;W++)D.setColorAt(W,Le)}Z.add(D)}i.add(Z),Z.updateMatrixWorld(!0);const Tn=new z;rt.getWorldPosition(Tn);const yn={tip:Tn,pos:new z(s.x,tt,s.z),lights:Fn,flamePos(L){const D=new z(0,1,0);return de[Math.max(0,Math.min(Fn-1,L))].localToWorld(D)},setLights(L){this.lights=L;for(let W=0;W<Fn;W++)en.setColorAt(W,W<L?Le:Ne);en.instanceColor.needsUpdate=!0;const D=L/Fn;this.glow=D,Gt.intensity=3+9*D,Dt.opacity=.01+.04*D,At.scale.y=1+(1-D)*2.5}},pn=ri(42),vi=[];for(let L=0;L<3e3&&vi.length<(t.mobile?70:104);L++){const D=(pn()-.5)*102,W=(pn()-.5)*102,J=p(D,W);if(J<.75||y(D,W)<3.2||!pt(D,W)||yt.some(dt=>Math.hypot(dt.x-D,dt.z-W)<3.2)||vi.some(dt=>Math.hypot(dt.x-D,dt.z-W)<2.4)||e.volcano&&Math.hypot(D-e.volcano.x,W-e.volcano.z)<e.volcano.r)continue;const lt=J<1.45?e.trees.beach:e.trees.inland;let xt=pn(),St="bush";for(const[dt,Lt]of Object.entries(lt)){if(xt<Lt){St=dt;break}xt-=Lt}vi.push({x:D,z:W,y:J,s:(St==="bush"?.8:.75)+pn()*.45,phase:pn()*6.28,kind:St})}const mr=Sx(i,vi,t,e),Ii=new Re,xi=[];for(let L=0;L<1200&&xi.length<(t.mobile?40:56);L++){const D=pn()*Math.PI*2,W=n(D)-3+pn()*5.5,J=Math.cos(D)*W,lt=Math.sin(D)*W;y(J,lt)<3.4||p(J,lt)<-1.2||xi.some(xt=>Math.hypot(xt.x-J,xt.z-lt)<2.2)||xi.push({x:J,z:lt,s:.6+pn()*1.2,r:pn()*6})}for(const L of e.plateaus||[]){const D=Math.round(L.r*2*Math.PI/2.3);for(let W=0;W<D;W++){const J=W/D*Math.PI*2+pn()*.2,lt=L.r+Math.sin(J*5+L.x)*.8+Math.sin(J*11)*.3-.2,xt=L.x+Math.cos(J)*lt,St=L.z+Math.sin(J)*lt;e.waterfall&&Math.hypot(xt-e.waterfall.lip[0],St-e.waterfall.lip[1])<2.2||y(xt,St)<2.6||xi.push({x:xt,z:St,s:1.3+pn()*.9,r:pn()*6,cliff:!0})}}[0,1,2].map(L=>Nx(ri(31+L*7+e.seed),e.rock[0],e.rock[1],L)).map((L,D)=>{const W=xi.filter((lt,xt)=>xt%3===D),J=new hn(L,new Pe({vertexColors:!0,map:Nt}),Math.max(1,W.length));return J.count=W.length,W.forEach((lt,xt)=>{Ii.position.set(lt.x,p(lt.x,lt.z)-.2*lt.s,lt.z),Ii.rotation.set(0,lt.r*2,0),Ii.scale.set(lt.s*1.1,lt.s*.9,lt.s),Ii.updateMatrix(),J.setMatrixAt(xt,Ii.matrix)}),J.castShadow=J.receiveShadow=!0,i.add(J),J});const gr=gx(i,{heightAt:p,pathDist:y,plinths:yt,paths:r,lighthouse:yn},t,ri(99+e.seed),n,e),P=Ux(i,{heightAt:p,pathDist:y,paths:r,lighthouse:yn,islandEdge:n},t,e),q=wx(i,{heightAt:p,pathDist:y,plinths:yt,lighthouse:yn,extrasBlock:P.blocks},t,e,ri(7+e.seed)),nt=Float32Array.from(v),st=[...xi.map(L=>({x:L.x,z:L.z,r:L.s*.85})),...gr.obstacles];for(const L of st){const D=L.r+1,W=f*2/d,J=Math.floor((L.x-D+f)/W),lt=Math.ceil((L.x+D+f)/W),xt=Math.floor((L.z-D+f)/W),St=Math.ceil((L.z+D+f)/W);for(let dt=Math.max(0,xt);dt<=Math.min(d,St);dt++)for(let Lt=Math.max(0,J);Lt<=Math.min(d,lt);Lt++){const wt=-f+Lt*W,ve=-f+dt*W,jt=Math.max(0,Math.hypot(wt-L.x,ve-L.z)-L.r);if(jt>.9)continue;const Me=dt*(d+1)+Lt,ii=.06-jt*.35,Xe=1-jt/.9;nt[Me]=Math.max(nt[Me],nt[Me]+(ii-nt[Me])*Xe*Xe)}}if(e.waterfall&&e.waterfall._lvl!==void 0){const L=e.waterfall;Yh(i,{heightTex:$h(nt,d+1),ext:f,grid:d,quality:t,sunDir:new z(24,17,4),colors:e.water,level:L._lvl,size:9,maxDepth:.8,center:[(L.pool[0]+L.lip[0])/2,(L.pool[1]+L.lip[1])/2]})}const Y=Yh(i,{heightTex:$h(nt,d+1),ext:f,grid:d,quality:t,sunDir:new z(24,17,4),colors:e.water}),Et=[{x:s.x,z:s.z,r:3.5},...yt.map(L=>({x:L.x,z:L.z,r:1.4})),...mr.colliders,...xi.filter(L=>p(L.x,L.z)>-.45).map(L=>({x:L.x,z:L.z,r:L.s*.85})),...gr.colliders,...P.colliders];return{def:e,paths:r,plinths:yt,lighthouse:yn,heightAt:p,pathDist:y,slopeAt:T,isLand:S,isIce:E,landDist:u,isWalkable:(L,D)=>A(L,D)&&!P.blocks(L,D),colliders:Et,update:L=>{Y.update(L),gr.update(L),P.update(L),q.update(L);const D=yn.glow??1,W=.75+.25*Math.sin(L*1.3)+.1*Math.sin(L*7.1);Kt.color.setRGB(1,.85,.75).multiplyScalar(D>0?(.7+1.5*D)*W:.12),ft.intensity=(8+40*D)*W,I.rotation.y=L*.6,mr.update(L);const J=yn._c||(yn._c=new Ct);for(let lt=0;lt<yn.lights;lt++)en.setColorAt(lt,J.copy(Le).multiplyScalar(.75+.25*Math.sin(L*9+lt*1.7)));en.instanceColor.needsUpdate=!0,H(L)},terrain:ut,extras:P,grass:q}}const ne=(i,t={})=>new Pe({color:i,flatShading:!0,...t}),Hs=(i,t)=>new Se({color:new Ct(i).multiplyScalar(t)}),ct={coat:ne("#f2c23c"),coatDark:ne("#c99a22"),skin:ne("#f1c7a0"),beanieG:ne("#3f8f4a"),beanieY:ne("#f2c94c"),beanieR:ne("#d4553a"),boot:ne("#3a2c22"),eyeW:new Se({color:"#ffffff"}),eyeB:new Se({color:"#1c1820"}),suit:ne("#6b6f78"),suitDark:ne("#3c4150"),suitNavy:ne("#2c3a5c"),shirt:ne("#f4f1ea"),tie:ne("#b8322a"),paper:ne("#fbfaf4"),stampInk:ne("#a8233a"),woodLight:ne("#c49360"),glasses:ne("#222428"),binderR:ne("#c94f3f"),binderB:ne("#3f6fc9"),binderY:ne("#e6b93f"),gull:ne("#f4f2ee"),gullWing:ne("#b8c0c8"),beak:ne("#f0a43a"),megaRed:ne("#d8453a"),mouth:new Se({color:"#4a2a2a"}),smile:new Se({color:"#c8485a"}),wood:ne("#9a6a42"),woodDark:ne("#6e4a2c"),iron:ne("#55585e"),speaker:ne("#2a2a30"),cone:ne("#4a4a52"),rasG:ne("#3f9a4a"),rasY:ne("#f2c94c"),rasR:ne("#d4553a"),chipsBag:ne("#f2b632"),chipsRed:ne("#d8453a"),chip:ne("#f0c860"),ringMat:new Pe({color:"#f1efe9",transparent:!0,opacity:.8}),ember:Hs("#ff9a3a",2.4),emberCore:Hs("#fff1c2",2),rolling:ne("#5a9a5a"),rollingPaper:ne("#fffdf5"),lantern:Hs("#ffd27a",2.2),hpBg:new Se({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new Se({color:"#d8553a",depthTest:!1}),levelPip:Hs("#9fffb0",1.6),bottle:new Pe({color:"#7fd6ff",transparent:!0,opacity:.8}),bubble:new Pe({color:"#dff6ff",transparent:!0,opacity:.45,emissive:"#5a7a9a"}),kiteSail:new Pe({color:"#ff7a5a",side:Ye}),rope:ne("#d9c8a0"),ledger:ne("#2f5a3a"),track:ne("#8a4ac8"),briefcase:ne("#6a3a1a"),brass:ne("#d8b040"),rotor:new Se({color:"#cfd6dc",transparent:!0,opacity:.45}),redLight:Hs("#ff3030",2),balloonA:ne("#e8e4d8"),balloonB:ne("#c8463a"),heli:ne("#f2c23c"),glassDark:ne("#2a3440"),spot:new Se({color:"#fff6c8",transparent:!0,opacity:.18,blending:ei,depthWrite:!1,side:Ye}),pizza:ne("#e8603a"),pizzaCrust:ne("#e8b866"),lampGlass:new Pe({color:"#ff8a5a",transparent:!0,opacity:.45,emissive:"#6a1a10"}),lampBlob:Hs("#ff9a2a",2.2)},mt={sphere:new pi(1,10,8),lowSphere:new Yi(1,1),capsule:new Ja(.5,.7,3,8),cyl:new De(1,1,1,10),cone:new ui(1,1,10),box:new Pn(1,1,1),dome:new pi(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new Gr(.22,0),leaf:new Gr(.3,0),plane:new ni(1,1),smileArc:new Ks(.06,.018,4,10,Math.PI),ring:new Ks(.32,.12,6,14),bubbleRing:new Ks(.18,.025,4,12)};function gt(i,t,e,n,s,r=0,a=0,o=0,l=!0){const c=new Jt(i,t);return c.scale.set(e,n,s),c.position.set(r,a,o),c.castShadow=l,c}function bc(i,t,e,n,s=.12,r=.18){for(const a of[-1,1])i.add(gt(mt.sphere,ct.eyeW,s,s,s,t+a*r,e,n,!1)),i.add(gt(mt.sphere,ct.eyeB,s*.55,s*.55,s*.55,t+a*r,e+.01,n-s*.7,!1))}function Qu(i,t,e,n=1){const s=gt(mt.box,ct.mouth,.14*n,.025*n,.02,0,t,e,!1);s.rotation.z=.15;const r=gt(mt.smileArc,ct.smile,n,n,n,0,t+.03*n,e,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}function Fx(){const i=new me,t=new me;i.add(t),t.add(gt(mt.capsule,ct.coat,.75,.75,.7,0,.75,0)),t.add(gt(mt.cyl,ct.coatDark,.4,.06,.38,0,.62,0));const e=new me;e.position.y=1.55,e.add(gt(mt.sphere,ct.skin,.33,.32,.32)),e.add(gt(mt.cyl,ct.beanieG,.35,.1,.35,0,.14,0)),e.add(gt(mt.cyl,ct.beanieY,.31,.1,.31,0,.24,0)),e.add(gt(mt.dome,ct.beanieR,.27,.22,.27,0,.29,0)),e.add(gt(mt.sphere,ct.beanieY,.08,.08,.08,0,.52,0)),bc(e,0,.02,-.26,.07,.12);const n=Qu(e,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,t.add(e);const s=[-1,1].map(l=>{const c=gt(mt.capsule,ct.boot,.24,.32,.24,l*.18,.2,0);return t.add(c),c}),r=new me;r.position.set(.48,1,-.1),r.add(gt(mt.box,ct.iron,.2,.28,.2,0,-.25,0)),r.add(gt(mt.sphere,ct.lantern,.1,.13,.1,0,-.25,0,!1)),t.add(r);const a=new me;a.add(gt(mt.box,ct.rolling,.7,.12,.42,0,0,0,!1)),a.add(gt(mt.box,ct.rollingPaper,.6,.08,.36,.06,.08,0,!1)),a.add(gt(mt.leaf,ct.rasG,.35,.05,.35,-.12,.07,0,!1)),a.position.y=2.35,a.visible=!1,i.add(a);const o=new me;o.position.y=2;for(let l=0;l<3;l++)o.add(gt(mt.ember,ct.emberCore,.6,.6,.6,Math.cos(l*2.1)*.45,0,Math.sin(l*2.1)*.45,!1));return o.visible=!1,i.add(o),i.userData={body:t,legs:s,head:e,lanternArm:r,carried:a,stars:o},i}function ai(i,t){const e=new me;e.position.y=t;const n=new Jt(mt.plane,ct.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new Jt(mt.plane,ct.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,e.add(n,s),e.visible=!1,i.add(e),i.userData.hpBar=e,i.userData.hpFg=s}function Ws(i,{scale:t=1,suit:e=ct.suit,wide:n=1}={}){const s=t;i.add(gt(mt.capsule,e,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(gt(mt.box,ct.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(gt(mt.box,ct.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const o of[-1,1])i.add(gt(mt.capsule,ct.suitDark,.2*s,.25*s,.2*s,o*.16*s,.17*s,0));const r=new me;r.position.y=1.5*s,r.add(gt(mt.sphere,ct.skin,.3*s,.3*s,.3*s)),r.add(gt(mt.dome,ct.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),bc(r,0,.03*s,-.25*s,.065*s,.11*s);const a=Qu(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:a}}function Ox(i){const t=new me,e=new me;if(t.add(e),t.userData.body=e,i==="clerk"){const{head:n,mouth:s}=Ws(e);for(const o of[-1,1])n.add(gt(mt.box,ct.glasses,.11,.07,.02,o*.11,.03,-.3,!1));n.add(gt(mt.box,ct.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new me;r.position.set(.48,.9,-.15),r.add(gt(mt.cyl,ct.woodLight,.06,.25,.06,0,.12,0)),r.add(gt(mt.sphere,ct.woodLight,.09,.09,.09,0,.27,0)),r.add(gt(mt.box,ct.stampInk,.22,.08,.16,0,-.02,0)),e.add(r);const a=gt(mt.box,ct.paper,.3,.38,.02,-.46,.92,-.2);a.rotation.y=.4,e.add(a),t.userData.mouth=s,t.userData.arm=r,ai(t,2.15)}else if(i==="tank"){const{mouth:n}=Ws(e,{scale:1.25,suit:ct.suitNavy,wide:1.45}),s=new me;s.position.set(0,0,-.95),s.add(gt(mt.box,ct.woodDark,.75,1.05,.45,0,.52,0));const r=gt(mt.box,ct.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(gt(mt.cyl,ct.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(gt(mt.sphere,ct.speaker,.05,.05,.05,.18,1.52,.04,!1)),e.add(s),t.userData.mouth=n,ai(t,2.6)}else if(i==="gull"){e.add(gt(mt.lowSphere,ct.gull,.36,.3,.6,0,0,0)),e.add(gt(mt.cone,ct.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=gt(mt.cone,ct.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,e.add(n),e.add(gt(mt.cyl,ct.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const a=new me;return a.position.set(r*.25,.05,0),a.add(gt(mt.box,ct.gullWing,.95,.05,.42,r*.48,0,0)),e.add(a),a});t.userData.wings=s,bc(e,0,.12,-.42,.06,.13),t.userData.mouth=null,ai(t,.8)}else if(i==="swarm"){const{mouth:n}=Ws(e,{scale:.6}),s=[ct.binderR,ct.binderB,ct.binderY],r=gt(mt.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);e.add(r),t.userData.mouth=n,ai(t,1.3)}else if(i==="auditor"){const{head:n,mouth:s}=Ws(e,{scale:1.1,suit:ct.suitDark});for(const a of[-1,1])n.add(gt(mt.box,ct.glasses,.12,.08,.02,a*.12,.03,-.33,!1));const r=new me;r.position.set(0,.95,-.55),r.add(gt(mt.box,ct.ledger,1.05,1.2,.14)),r.add(gt(mt.box,ct.paper,.95,1.1,.1,0,0,.03,!1)),r.add(gt(mt.box,ct.brass,.3,.3,.02,0,.15,-.08,!1)),e.add(r),t.userData.mouth=s,t.userData.shield=r,ai(t,2.3)}else if(i==="complainer"){const{head:n,mouth:s}=Ws(e,{scale:.85,suit:ct.track});n.add(gt(mt.cyl,ct.rasR,.27,.06,.27,0,.1,0,!1));const r=new me;r.position.set(.35,1.2,-.1),r.add(gt(mt.cyl,ct.track,.06,.45,.06,0,.2,0)),r.add(gt(mt.box,ct.paper,.32,.42,.02,0,.55,0)),e.add(r),t.userData.mouth=s,t.userData.arm=r,ai(t,1.8)}else if(i==="lobbyist"||i==="lobbyMini"){const n=i==="lobbyMini",{mouth:s}=Ws(e,{scale:n?.55:1.05,suit:ct.suitNavy});e.add(gt(mt.box,ct.brass,.08,.3,.05,0,n?.52:.99,n?-.17:-.32,!1)),e.add(gt(mt.box,ct.briefcase,n?.28:.5,n?.22:.36,.12,n?.3:.55,n?.3:.55,0)),t.userData.mouth=s,ai(t,n?1.2:2.1)}else if(i==="drone"){e.add(gt(mt.box,ct.iron,.42,.14,.42));const n=[];for(const[s,r]of[[1,1],[-1,1],[1,-1],[-1,-1]]){e.add(gt(mt.box,ct.speaker,.5,.04,.05,s*.22,0,r*.22).rotateY(s*r>0?Math.PI/4:-Math.PI/4));const a=gt(mt.cyl,ct.rotor,.2,.01,.2,s*.4,.08,r*.4,!1);e.add(a),n.push(a)}e.add(gt(mt.sphere,ct.redLight,.07,.07,.07,0,-.06,-.22,!1)),t.userData.rotors=n,t.userData.mouth=null,ai(t,.6)}else if(i==="balloon"){e.add(gt(mt.sphere,ct.balloonA,1.1,1.3,1.1,0,1.6,0));for(let n=0;n<4;n++)e.add(gt(mt.cyl,ct.balloonB,1.12-Math.abs(n-1.5)*.18,.18,1.12-Math.abs(n-1.5)*.18,0,1+n*.42,0,!1));e.add(gt(mt.box,ct.woodLight,.6,.4,.6,0,-.1,0)),e.add(gt(mt.sphere,ct.skin,.2,.2,.2,0,.25,0)),e.add(gt(mt.dome,ct.suitDark,.21,.1,.21,0,.32,0,!1));for(const[n,s]of[[1,1],[-1,1],[1,-1],[-1,-1]])e.add(gt(mt.cyl,ct.rope,.015,.8,.015,n*.28,.45,s*.28,!1));t.userData.mouth=null,ai(t,3.3)}else if(i==="heli"){e.add(gt(mt.capsule,ct.heli,.6,.55,.9,0,0,0).rotateX(Math.PI/2)),e.add(gt(mt.sphere,ct.glassDark,.28,.22,.24,0,.05,-.38,!1)),e.add(gt(mt.box,ct.heli,.12,.12,1.1,0,.05,.85));const n=gt(mt.box,ct.speaker,1.9,.02,.12,0,.4,0,!1),s=gt(mt.box,ct.speaker,.04,.5,.08,.08,.1,1.38,!1);e.add(n,s);const r=new Jt(new ui(1.2,4.5,14,1,!0),ct.spot);r.position.set(0,-2.3,-.2),r.visible=!1,e.add(r),t.userData.rotor=n,t.userData.tail=s,t.userData.beam=r,t.userData.mouth=null,ai(t,1)}return t}function Bx(i){const t=i.mesh.userData.mouth;t&&(t.sour.visible=!1,t.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function kx(i){const t=new me,e=new me;if(t.add(e),i==="ring"){t.add(gt(mt.box,ct.wood,.9,.5,.9,0,.25,0)),e.position.y=.95;const a=gt(mt.cyl,ct.iron,.32,1.1,.32,0,0,-.15);a.rotation.x=Math.PI/2-.15,e.add(a),e.add(gt(mt.cyl,ct.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),e.add(gt(mt.sphere,ct.iron,.42,.42,.42,0,0,.42)),e.add(gt(mt.sphere,ct.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){t.add(gt(mt.cyl,ct.iron,.7,.3,.7,0,.15,0)),e.position.y=.3;const a=gt(mt.box,ct.chipsBag,.95,1.1,.6,0,.6,0);a.rotation.x=-.35,e.add(a),e.add(gt(mt.box,ct.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let o=0;o<5;o++)e.add(gt(mt.leaf,ct.chip,.3,.08,.3,(o-2)*.17,1.2,-.3-o%2*.1,!1))}else if(i==="speaker"){const a=new me;a.add(gt(mt.box,ct.speaker,1,1.5,.75,0,.75,0)),a.add(gt(mt.box,ct.rasG,1.02,.12,.77,0,1.38,0,!1)),a.add(gt(mt.box,ct.rasY,1.02,.12,.77,0,1.26,0,!1)),a.add(gt(mt.box,ct.rasR,1.02,.12,.77,0,1.14,0,!1));const o=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const u=gt(mt.cyl,ct.cone,c,.08,c,0,l,-.38,!1);u.rotation.x=Math.PI/2,a.add(u),o.push(u)}e.add(a),t.userData.woofers=o}else if(i==="bubble"){t.add(gt(mt.cyl,ct.speaker,.5,.25,.5,0,.12,0)),e.position.y=.3,e.add(gt(mt.cyl,ct.bottle,.36,1,.36,0,.5,0)),e.add(gt(mt.cyl,ct.rasR,.22,.2,.22,0,1.08,0));const a=gt(mt.cyl,ct.wood,.03,.8,.03,0,1.4,-.2);a.rotation.x=.5,e.add(a),e.add(gt(mt.bubbleRing,ct.rasY,1,1,1,0,1.75,-.42,!1).rotateX(.5));for(let o=0;o<3;o++)e.add(gt(mt.sphere,ct.bubble,.14+o*.04,.14+o*.04,.14+o*.04,.3-o*.25,1.7+o*.3,-.7-o*.15,!1))}else if(i==="kite"){for(let o=0;o<3;o++){const l=o/3*Math.PI*2,c=gt(mt.cyl,ct.wood,.07,1.6,.07,Math.cos(l)*.45,.7,Math.sin(l)*.45);c.rotation.set(Math.sin(l)*.28,0,-Math.cos(l)*.28),t.add(c)}e.position.y=1.55,e.add(gt(mt.cyl,ct.iron,.22,.3,.22,0,0,0).rotateZ(Math.PI/2));const a=sf();a.position.set(0,.7,0),a.scale.setScalar(.8),e.add(a),t.userData.kite=a}else if(i==="pizza"){t.add(gt(mt.box,ct.wood,1.2,.35,.9,0,.18,0));for(const o of[-1,1])t.add(gt(mt.box,ct.woodDark,.12,.9,.12,o*.45,.65,0));e.position.y=1;const a=new me;a.add(gt(mt.box,ct.woodLight,.12,.12,1.5,0,0,-.4)),a.add(gt(mt.cyl,ct.pizzaCrust,.32,.06,.32,0,.08,-1.1)),a.add(gt(mt.cyl,ct.pizza,.27,.03,.27,0,.12,-1.1,!1)),a.rotation.x=-.35,e.add(a),t.userData.arm=a}else if(i==="lamp"){t.add(gt(mt.cone,ct.brass,.55,.7,.55,0,.35,0)),e.position.y=.7,e.add(gt(mt.capsule,ct.lampGlass,.75,.9,.75,0,.75,0,!1));const a=[];for(let o=0;o<3;o++){const l=gt(mt.sphere,ct.lampBlob,.16,.2,.16,0,.5+o*.3,0,!1);e.add(l),a.push(l)}e.add(gt(mt.cone,ct.brass,.3,.35,.3,0,1.55,0)),t.userData.blobs=a}const n=[];for(let a=0;a<3;a++){const o=gt(mt.leaf,ct.levelPip,.6,.12,.6,Math.cos(a*2.09)*.95,.15,Math.sin(a*2.09)*.95,!1);o.visible=a===0,t.add(o),n.push(o)}const s=new bs(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new Jt(s,new Se({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,t.add(r),t.traverse(a=>{a.isMesh&&a!==r&&a.material!==ct.levelPip&&(a.castShadow=!0)}),t.userData.head=e,t.userData.pips=n,t.userData.ring=r,t}function tf(i,t){i.mesh.userData.pips.forEach((e,n)=>e.visible=n<t),i.mesh.scale.setScalar(1+(t-1)*.12)}function ka(i,t){const e=i.mesh.userData.ring;if(e.visible=t>0,t<=0)return;e.geometry.dispose();const n=new bs(1.45,1.7,40,1,0,Math.PI*2*t);n.rotateX(-Math.PI/2),e.geometry=n}function Vx(){const i=new me;return i.add(gt(mt.ember,ct.ember,1,1.3,1,0,0,0,!1)),i.add(gt(mt.ember,ct.emberCore,.5,.7,.5,0,0,0,!1)),i}function Gx(){const i=new Jt(mt.ring,ct.ringMat);return i.castShadow=!1,i}function ef(){const i=new me;return i.add(gt(mt.box,ct.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(gt(mt.box,ct.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function nf(){const i=new Ks(1,.08,4,32);return i.rotateX(Math.PI/2),new Jt(i,new Se({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}function sf(){const i=new me,t=new Yu([new Tt(0,.55),new Tt(.38,0),new Tt(0,-.75),new Tt(-.38,0)]),e=new Jt(new yc(t),ct.kiteSail);e.rotation.x=-Math.PI/2.4,i.add(e);for(let n=0;n<4;n++)i.add(gt(mt.box,ct.rasY,.12,.02,.06,0,-.1*n-.1,.62+n*.18,!1));return i}function rf(){return gt(mt.sphere,ct.bubble,.28,.28,.28,0,0,0,!1)}function Hx(){const i=new me;return i.add(gt(mt.cyl,ct.pizzaCrust,.3,.06,.3,0,0,0,!0)),i.add(gt(mt.cyl,ct.pizza,.25,.03,.25,0,.04,0,!1)),i}const Ir={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Wx=new fc(-1,1,1,-1,0,1);class Xx extends Ee{constructor(){super(),this.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new re([0,2,0,0,2,0],2))}}const qx=new Xx;class eo{constructor(t){this._mesh=new Jt(qx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Wx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Va extends ws{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Jn.clone(t.uniforms),this.material=new Oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new eo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Jh extends ws{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Yx extends ws{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class $x{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Tt);this._width=n.width,this._height=n.height,e=new En(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:kn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Va(Ir),this.copyPass.material.blending=nn,this.clock=new Ju}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Jh!==void 0&&(a instanceof Jh?n=!0:a instanceof Yx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jx extends ws{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Ta={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Tt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new _e},cameraProjectionMatrixInverse:{value:new _e},cameraWorldMatrix:{value:new _e},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new z(-1,-1,-1)},sceneBoxMax:{value:new z(1,1,1)}},vertexShader:`

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
		}`},Aa={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Xo={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Zx(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=Kx(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=e[a],l=2*Math.PI*o/n,c=new z(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new Za(s,t,t);return r.wrapS=Ui,r.wrapT=Ui,r.needsUpdate=!0,r}function Kx(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}const Ca={defines:{SAMPLES:16,SAMPLE_VECTORS:af(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Tt},cameraProjectionMatrixInverse:{value:new _e},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function af(i,t,e){const n=Jx(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Jx(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new z(Math.cos(r),Math.sin(r),a))}return n}class Qx{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,v=t-f,x=e-d;let m,p;v>x?(m=1,p=0):(m=0,p=1);const y=v-m+u,S=x-p+u,g=v-1+2*u,T=x-1+2*u,E=l&255,w=c&255,A=this.perm[E+this.perm[w]]%12,M=this.perm[E+m+this.perm[w+p]]%12,_=this.perm[E+1+this.perm[w+1]]%12;let C=.5-v*v-x*x;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[A],v,x));let N=.5-y*y-S*S;N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[M],y,S));let F=.5-g*g-T*T;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[_],g,T)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const c=(t+e+n)*.3333333333333333,u=Math.floor(t+c),h=Math.floor(e+c),f=Math.floor(n+c),d=1/6,v=(u+h+f)*d,x=u-v,m=h-v,p=f-v,y=t-x,S=e-m,g=n-p;let T,E,w,A,M,_;y>=S?S>=g?(T=1,E=0,w=0,A=1,M=1,_=0):y>=g?(T=1,E=0,w=0,A=1,M=0,_=1):(T=0,E=0,w=1,A=1,M=0,_=1):S<g?(T=0,E=0,w=1,A=0,M=1,_=1):y<g?(T=0,E=1,w=0,A=0,M=1,_=1):(T=0,E=1,w=0,A=1,M=1,_=0);const C=y-T+d,N=S-E+d,F=g-w+d,U=y-A+2*d,O=S-M+2*d,V=g-_+2*d,$=y-1+3*d,B=S-1+3*d,Q=g-1+3*d,at=u&255,ht=h&255,Mt=f&255,qt=this.perm[at+this.perm[ht+this.perm[Mt]]]%12,it=this.perm[at+T+this.perm[ht+E+this.perm[Mt+w]]]%12,ut=this.perm[at+A+this.perm[ht+M+this.perm[Mt+_]]]%12,yt=this.perm[at+1+this.perm[ht+1+this.perm[Mt+1]]]%12;let pt=.6-y*y-S*S-g*g;pt<0?s=0:(pt*=pt,s=pt*pt*this.dot3(this.grad3[qt],y,S,g));let Nt=.6-C*C-N*N-F*F;Nt<0?r=0:(Nt*=Nt,r=Nt*Nt*this.dot3(this.grad3[it],C,N,F));let Bt=.6-U*U-O*O-V*V;Bt<0?a=0:(Bt*=Bt,a=Bt*Bt*this.dot3(this.grad3[ut],U,O,V));let Xt=.6-$*$-B*B-Q*Q;return Xt<0?o=0:(Xt*=Xt,o=Xt*Xt*this.dot3(this.grad3[yt],$,B,Q)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,f,d,v;const x=(t+e+n+s)*l,m=Math.floor(t+x),p=Math.floor(e+x),y=Math.floor(n+x),S=Math.floor(s+x),g=(m+p+y+S)*c,T=m-g,E=p-g,w=y-g,A=S-g,M=t-T,_=e-E,C=n-w,N=s-A,F=M>_?32:0,U=M>C?16:0,O=_>C?8:0,V=M>N?4:0,$=_>N?2:0,B=C>N?1:0,Q=F+U+O+V+$+B,at=a[Q][0]>=3?1:0,ht=a[Q][1]>=3?1:0,Mt=a[Q][2]>=3?1:0,qt=a[Q][3]>=3?1:0,it=a[Q][0]>=2?1:0,ut=a[Q][1]>=2?1:0,yt=a[Q][2]>=2?1:0,pt=a[Q][3]>=2?1:0,Nt=a[Q][0]>=1?1:0,Bt=a[Q][1]>=1?1:0,Xt=a[Q][2]>=1?1:0,ue=a[Q][3]>=1?1:0,te=M-at+c,pe=_-ht+c,X=C-Mt+c,Te=N-qt+c,ee=M-it+2*c,Zt=_-ut+2*c,Vt=C-yt+2*c,fe=N-pt+2*c,j=M-Nt+3*c,R=_-Bt+3*c,b=C-Xt+3*c,H=N-ue+3*c,Z=M-1+4*c,tt=_-1+4*c,et=C-1+4*c,Rt=N-1+4*c,vt=m&255,bt=p&255,Qt=y&255,_t=S&255,zt=o[vt+o[bt+o[Qt+o[_t]]]]%32,Yt=o[vt+at+o[bt+ht+o[Qt+Mt+o[_t+qt]]]]%32,Kt=o[vt+it+o[bt+ut+o[Qt+yt+o[_t+pt]]]]%32,Ot=o[vt+Nt+o[bt+Bt+o[Qt+Xt+o[_t+ue]]]]%32,ae=o[vt+1+o[bt+1+o[Qt+1+o[_t+1]]]]%32;let $t=.6-M*M-_*_-C*C-N*N;$t<0?u=0:($t*=$t,u=$t*$t*this.dot4(r[zt],M,_,C,N));let ce=.6-te*te-pe*pe-X*X-Te*Te;ce<0?h=0:(ce*=ce,h=ce*ce*this.dot4(r[Yt],te,pe,X,Te));let G=.6-ee*ee-Zt*Zt-Vt*Vt-fe*fe;G<0?f=0:(G*=G,f=G*G*this.dot4(r[Kt],ee,Zt,Vt,fe));let At=.6-j*j-R*R-b*b-H*H;At<0?d=0:(At*=At,d=At*At*this.dot4(r[Ot],j,R,b,H));let rt=.6-Z*Z-tt*tt-et*et-Rt*Rt;return rt<0?v=0:(rt*=rt,v=rt*rt*this.dot4(r[ae],Z,tt,et,Rt)),27*(u+h+f+d+v)}}class oi extends ws{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Zx(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new En(this.width,this.height,{type:kn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Oe({defines:Object.assign({},Ta.defines),uniforms:Jn.clone(Ta.uniforms),vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader,blending:nn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new hx,this.normalMaterial.blending=nn,this.pdMaterial=new Oe({defines:Object.assign({},Ca.defines),uniforms:Jn.clone(Ca.uniforms),vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Oe({defines:Object.assign({},Aa.defines),uniforms:Jn.clone(Aa.uniforms),vertexShader:Aa.vertexShader,fragmentShader:Aa.fragmentShader,blending:nn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Oe({uniforms:Jn.clone(Ir.uniforms),vertexShader:Ir.vertexShader,fragmentShader:Ir.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:el,blendDst:Er,blendEquation:Zn,blendSrcAlpha:tl,blendDstAlpha:Er,blendEquationAlpha:Zn}),this.blendMaterial=new Oe({uniforms:Jn.clone(Xo.uniforms),vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:fu,blendSrc:el,blendDst:Er,blendEquation:Zn,blendSrcAlpha:tl,blendDstAlpha:Er,blendEquationAlpha:Zn}),this.fsQuad=new eo(null),this.originalClearColor=new Ct,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new pc,this.depthTexture.format=vs,this.depthTexture.type=gs,this.normalRenderTarget=new En(this.width,this.height,{minFilter:un,magFilter:un,type:kn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=af(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case oi.OUTPUT.Off:break;case oi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=nn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case oi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case oi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case oi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case oi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case oi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=nn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new Qx,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){const l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new Za(s,t,t,Bn,fi);return r.wrapS=Ui,r.wrapT=Ui,r.needsUpdate=!0,r}}oi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const t_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class cr extends ws{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Tt(t.x,t.y):new Tt(256,256),this.clearColor=new Ct(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new En(r,a,{type:kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new En(r,a,{type:kn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new En(r,a,{type:kn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=t_;this.highPassUniforms=Jn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Tt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Ir;this.copyUniforms=Jn.clone(u.uniforms),this.blendMaterial=new Oe({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ei,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ct,this.oldClearAlpha=1,this.basic=new Se,this.fsQuad=new eo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Tt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=cr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=cr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Oe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Tt(.5,.5)},direction:{value:new Tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Oe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}cr.BlurDirectionX=new Tt(1,0);cr.BlurDirectionY=new Tt(0,1);const e_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class n_ extends ws{constructor(){super();const t=e_;this.uniforms=Jn.clone(t.uniforms),this.material=new cx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new eo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},xe.getTransfer(this._outputColorSpace)===be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===du?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===vu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const i_={name:"HorizontalTiltShiftShader",uniforms:{tDiffuse:{value:null},h:{value:1/512},r:{value:.35}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float hh = h * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * hh, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * hh, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},s_={name:"VerticalTiltShiftShader",uniforms:{tDiffuse:{value:null},v:{value:1/512},r:{value:.35}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float vv = v * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * vv ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * vv ) ) * 0.051;

			gl_FragColor = sum;

		}`},r_={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new z(1,1,1)},uLift:{value:new z},uSat:{value:1.08}},vertexShader:`
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
    }`},a_=new URLSearchParams(location.search).get("ao")==="1";function o_(i,t,e,n={}){const s=new $x(i,new En(1,1,{type:kn})),r=new jx(t,e),a=new oi(t,e,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});a.blendIntensity=1;const o=new cr(new Tt(256,256),.6,.55,1),l=new Va(i_),c=new Va(s_);l.uniforms.r.value=c.uniforms.r.value=.52;const u=new Va(r_);n.tint&&u.uniforms.uTint.value.set(...n.tint),n.lift&&u.uniforms.uLift.value.set(...n.lift),n.sat&&(u.uniforms.uSat.value=n.sat),u.uniforms.uVignette.value=n.vignette??.25;const h=new n_;for(const m of[r,a,o,l,c,u,h])s.addPass(m);let f="high",d=1,v=1;const x={composer:s,get level(){return f},setLevel(m){f=m,a.enabled=m==="high"&&a_,o.strength=m==="high"?.6:.5,x.setSize(d,v)},setSize(m,p){d=m,v=p;const y=i.getPixelRatio();s.setPixelRatio(y),s.setSize(m,p);const S=f==="high"?2:4;o.resolution.set(m*y/S,p*y/S),o.setSize(m*y/S,p*y/S);const g=f==="high"?.7:.5;l.uniforms.h.value=g/(m*y),c.uniforms.v.value=g/(p*y)},render(m){s.render(m)}};return x}function l_(i,t,e,n,s){const{heightAt:r}=t,a=e.mobile?.5:1,o=new Set(n.life),l=new Re,c=new Ct,u=[],h=()=>{for(let d=0;d<50;d++){const v=(Math.random()-.5)*80,x=(Math.random()-.5)*80,m=r(v,x);if(m>.8)return{x:v,z:x,h:m}}return{x:0,z:0,h:1}};if(o.has("butterflies")){const d=Math.round(26*a),v=new lr(.16,6,0,Math.PI);v.scale(1,1.3,1);const m=[-1,1].map(()=>new Pe({color:"#ffffff",side:Ye})).map(S=>{const g=new hn(v,S,d);return i.add(g),g}),p=Array.from({length:d},(S,g)=>({...h(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),y=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];p.forEach((S,g)=>{S.home={x:S.x,z:S.z},m.forEach(T=>T.setColorAt(g,c.set(y[g%y.length])))}),m.forEach(S=>S.instanceColor.needsUpdate=!0),u.push((S,g)=>{p.forEach((T,E)=>{T.a+=Math.sin(g*.7+T.ph)*1.6*S,T.x+=Math.cos(T.a)*T.sp*S,T.z+=Math.sin(T.a)*T.sp*S,Math.hypot(T.x-T.home.x,T.z-T.home.z)>5&&(T.a=Math.atan2(T.home.z-T.z,T.home.x-T.x));const w=r(T.x,T.z)+.6+Math.sin(g*2+T.ph)*.25,A=Math.sin(g*18+T.ph)*1.1;m.forEach((M,_)=>{l.position.set(T.x,w,T.z),l.rotation.set(0,-T.a+Math.PI/2,0),l.rotateZ((_?1:-1)*(.3+A*.5)),l.rotateX(-Math.PI/2),l.scale.set(_?1:-1,1,1),l.updateMatrix(),M.setMatrixAt(E,l.matrix)})}),m.forEach(T=>T.instanceMatrix.needsUpdate=!0)})}if(o.has("birds")){const v=new Ee;v.setAttribute("position",new re([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),v.computeVertexNormals();const x=new hn(v,new Pe({color:"#f4f4f0",side:Ye}),7);x.castShadow=!0,i.add(x);const m=Array.from({length:7},(p,y)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:y}));u.push((p,y)=>{m.forEach((S,g)=>{const T=y*S.sp+S.ph;l.position.set(S.cx+Math.cos(T)*S.r,S.y+Math.sin(y*.7+g)*.4,S.cz+Math.sin(T)*S.r),l.rotation.set(0,-T,Math.sin(y*.5+g)*.15);const E=1+Math.sin(y*6+g)*.35*(Math.sin(y*.4+g)>.3?1:.1);l.scale.set(1.4,E*1.4,1.4),l.updateMatrix(),x.setMatrixAt(g,l.matrix)}),x.instanceMatrix.needsUpdate=!0})}if(o.has("leaves")){const d=Math.round(60*a),v=new ni(.16,.1),x=new hn(v,new Pe({color:"#ffffff",side:Ye}),d);i.add(x);const m=Array.from({length:d},(p,y)=>({...h(),ph:Math.random()*6,sp:1+Math.random()*1.5}));m.forEach((p,y)=>x.setColorAt(y,c.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][y%4]))),x.instanceColor.needsUpdate=!0,u.push((p,y)=>{m.forEach((S,g)=>{S.x+=S.sp*p,S.z+=Math.sin(y*.8+S.ph)*.6*p,S.x>45&&Object.assign(S,h(),{x:-45});const T=Math.max(r(S.x,S.z),.1)+.3+Math.abs(Math.sin(y*1.3+S.ph))*.9;l.position.set(S.x,T,S.z),l.rotation.set(y*3+S.ph,y*2+S.ph,y*1.5),l.scale.setScalar(1),l.updateMatrix(),x.setMatrixAt(g,l.matrix)}),x.instanceMatrix.needsUpdate=!0})}if(o.has("fireflies")&&s==="skumring"){const d=Math.round(120*a),v=new Float32Array(d*3),x=new Float32Array(d*3),m=Array.from({length:d},()=>({...h(),ph:Math.random()*6})),p=new Ee;p.setAttribute("position",new Ve(v,3)),p.setAttribute("color",new Ve(x,3));const y=document.createElement("canvas");y.width=y.height=32;const S=y.getContext("2d"),g=S.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),S.fillStyle=g,S.fillRect(0,0,32,32);const T=new gc(p,new Ka({size:.35,map:new Wi(y),vertexColors:!0,transparent:!0,blending:ei,depthWrite:!1}));T.frustumCulled=!1,i.add(T),u.push((E,w)=>{m.forEach((A,M)=>{v[M*3]=A.x+Math.sin(w*.4+A.ph)*1.2,v[M*3+1]=A.h+.5+Math.sin(w*.9+A.ph*2)*.4,v[M*3+2]=A.z+Math.cos(w*.35+A.ph)*1.2;const _=Math.max(0,Math.sin(w*1.7+A.ph*3))**3*2.5;x[M*3]=1*_,x[M*3+1]=.9*_,x[M*3+2]=.35*_}),p.attributes.position.needsUpdate=!0,p.attributes.color.needsUpdate=!0})}let f=0;return{update(d){const v=Math.min(.05,Math.max(0,d-f));f=d;for(const x of u)x(v,d)}}}function c_(i,{cell:t=.75,ext:e=68}={}){const n=Math.ceil(e*2/t)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),a=new Float32Array(n*n),o=i.lighthouse.pos,l=(w,A)=>[Math.round((w+e)/t),Math.round((A+e)/t)],c=(w,A)=>[-e+w*t,-e+A*t];let u=()=>!1;function h(){for(let w=0;w<n;w++)for(let A=0;A<n;A++){const[M,_]=c(A,w),C=i.heightAt(M,_),N=w*n+A,F=Math.hypot(M-o.x,_-o.z);let U=1.8;C<-.5||i.slopeAt(M,_)>1.1||i.extras.blocks(M,_)||u(M,_)||F<3.2?U=1/0:i.pathDist(M,_)<1.6?U=.2:C<.05&&(U=2.6),r[N]=U}}function f(){s.fill(1/0),a.fill(0);const w=[],A=(C,N)=>{w.push([C,N]);let F=w.length-1;for(;F>0;){const U=F-1>>1;if(w[U][0]<=w[F][0])break;[w[U],w[F]]=[w[F],w[U]],F=U}},M=()=>{const C=w[0],N=w.pop();if(w.length){w[0]=N;let F=0;for(;;){const U=2*F+1,O=U+1;let V=F;if(U<w.length&&w[U][0]<w[V][0]&&(V=U),O<w.length&&w[O][0]<w[V][0]&&(V=O),V===F)break;[w[V],w[F]]=[w[F],w[V]],F=V}}return C};for(let C=0;C<n;C++)for(let N=0;N<n;N++){const[F,U]=c(N,C),O=Math.hypot(F-o.x,U-o.z);O>=3.2&&O<4.2&&r[C*n+N]<1/0&&(s[C*n+N]=0,A(0,C*n+N))}const _=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;w.length;){const[C,N]=M();if(C>s[N])continue;const F=N%n,U=N/n|0;for(const[O,V,$]of _){const B=F+O,Q=U+V;if(B<0||Q<0||B>=n||Q>=n)continue;const at=Q*n+B,ht=r[at];if(ht===1/0)continue;const Mt=C+$*t*(ht+r[N])*.5;Mt<s[at]&&(s[at]=Mt,a[at]=a[N]+$*t,A(Mt,at))}}}const d=(w,A)=>{const[M,_]=l(w,A);return M<0||_<0||M>=n||_>=n?1/0:s[_*n+M]};function v(w,A){const[M,_]=l(w,A);let C=d(w,A),N=0,F=0;for(let O=-1;O<=1;O++)for(let V=-1;V<=1;V++){if(!V&&!O)continue;const $=M+V,B=_+O;if($<0||B<0||$>=n||B>=n)continue;const Q=s[B*n+$];Q<C&&(C=Q,N=V,F=O)}const U=Math.hypot(N,F)||1;return[N/U,F/U,C]}const x=(w,A)=>{const[M,_]=l(w,A);return M<0||_<0||M>=n||_>=n?-1:_*n+M},m=(w,A)=>{const M=x(w,A);return M<0||s[M]===1/0?0:a[M]};function p(){const w=[];for(const A of i.paths){const M=A.samples.find(_=>i.heightAt(_.x,_.z)>-.4&&m(_.x,_.z)>0);M&&w.push([M.x,M.z])}return w}function y(w,A=22,{near:M=8,minFrac:_=.6}={}){const C=p(),N=Math.max(0,...C.map(([V,$])=>m(V,$))),F=(V,$)=>{const B=i.heightAt(V,$);return B>-.4&&B<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([Q,at])=>i.heightAt(V+Q,$+at)<-.9)},U=C.map(([V,$])=>{const B=[],Q=[],at=Math.ceil(M/t),[ht,Mt]=l(V,$);for(let it=-at;it<=at;it++)for(let ut=-at;ut<=at;ut++){const[yt,pt]=c(ht+ut,Mt+it);Math.hypot(yt-V,pt-$)>M||m(yt,pt)<_*N||(F(yt,pt)?B.push([yt,pt]):i.heightAt(yt,pt)>.3&&i.slopeAt(yt,pt)<.6&&Q.push([yt,pt]))}return(B.length?B:Q).sort(()=>Math.random()-.5)}).filter(V=>V.length).sort(()=>Math.random()-.5),O=[];for(let V=0;O.length<w&&V<4;V++){for(const $ of U){const B=$.find(Q=>O.every(at=>Math.hypot(at[0]-Q[0],at[1]-Q[1])>A));if(B&&O.push(B),O.length>=w)break}A=Math.min(A,6)}return O}let S=null;function g(w,A){if(!S){S=new Float32Array(n*n);for(let V=0;V<n;V++)for(let $=0;$<n;$++){const[B,Q]=c($,V);S[V*n+$]=i.isWalkable(B,Q)?i.heightAt(B,Q)<.05?1.6:1:1/0}}const M=new Float64Array(n*n).fill(1/0),_=[],C=(V,$)=>{_.push([V,$]);let B=_.length-1;for(;B>0;){const Q=B-1>>1;if(_[Q][0]<=_[B][0])break;[_[Q],_[B]]=[_[B],_[Q]],B=Q}},N=()=>{const V=_[0],$=_.pop();if(_.length){_[0]=$;let B=0;for(;;){const Q=2*B+1,at=Q+1;let ht=B;if(Q<_.length&&_[Q][0]<_[ht][0]&&(ht=Q),at<_.length&&_[at][0]<_[ht][0]&&(ht=at),ht===B)break;[_[ht],_[B]]=[_[B],_[ht]],B=ht}}return V},F=x(w,A);if(F<0)return null;M[F]=0,C(0,F);const U=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;_.length;){const[V,$]=N();if(V>M[$])continue;const B=$%n,Q=$/n|0;for(const[at,ht,Mt]of U){const qt=B+at,it=Q+ht;if(qt<0||it<0||qt>=n||it>=n)continue;const ut=it*n+qt,yt=S[ut];if(yt===1/0)continue;const pt=V+Mt*t*yt;pt<M[ut]&&(M[ut]=pt,C(pt,ut))}}const O=(V,$)=>{const B=x(V,$);return B<0?1/0:M[B]};return{at:O,dir(V,$){const[B,Q]=l(V,$);let at=O(V,$),ht=0,Mt=0;for(let it=-1;it<=1;it++)for(let ut=-1;ut<=1;ut++){if(!ut&&!it)continue;const yt=B+ut,pt=Q+it;yt<0||pt<0||yt>=n||pt>=n||M[pt*n+yt]<at&&(at=M[pt*n+yt],ht=ut,Mt=it)}const qt=Math.hypot(ht,Mt)||1;return[ht/qt,Mt/qt]}}}const T=()=>{let w=0;for(const A of s)A<1/0&&A>w&&(w=A);return w},E=()=>{h(),f()};return E(),{at:d,dir:v,coastPoints:y,roadEnds:p,routeLen:m,walkField:g,rebuild:E,setBlock(w){u=w,E()},maxDist:T(),N:n,cell:t}}function of(i,t=700,{blending:e=ei,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const a=new Ct(r||"#000000"),o=new Float32Array(t*3),l=new Float32Array(t*3),c=new Float32Array(t*3),u=new Float32Array(t*3),h=new Float32Array(t),f=new Float32Array(t),d=new Float32Array(t);let v=0;const x=new Ee;x.setAttribute("position",new Ve(o,3)),x.setAttribute("color",new Ve(l,3));const m=document.createElement("canvas");m.width=m.height=64;const p=m.getContext("2d"),y=p.createRadialGradient(32,32,0,32,32,32);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.4,"rgba(255,255,255,0.6)"),y.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=y,p.fillRect(0,0,64,64);const S=new Ka({size:n,map:new Wi(m),vertexColors:!0,transparent:!0,opacity:s,blending:e,depthWrite:!1}),g=new gc(x,S);g.frustumCulled=!1,i.add(g);for(let A=0;A<t;A++)o[A*3+1]=-999;const T=new Ct;function E(A,M,_,{n:C=10,color:N="#ffb347",speed:F=4,up:U=3,life:O=.7,gravity:V=9,spread:$=1}={}){T.set(N);for(let B=0;B<C;B++){const Q=v;v=(v+1)%t,o[Q*3]=A,o[Q*3+1]=M,o[Q*3+2]=_;const at=Math.random()*Math.PI*2,ht=F*(.4+Math.random()*.6)*$;c[Q*3]=Math.cos(at)*ht,c[Q*3+1]=U*(.5+Math.random()),c[Q*3+2]=Math.sin(at)*ht,u[Q*3]=T.r,u[Q*3+1]=T.g,u[Q*3+2]=T.b,f[Q]=h[Q]=O*(.6+Math.random()*.6),d[Q]=V}}function w(A){for(let M=0;M<t;M++){if(h[M]<=0)continue;if(h[M]-=A,h[M]<=0){o[M*3+1]=-999,l[M*3]=l[M*3+1]=l[M*3+2]=0;continue}c[M*3+1]-=d[M]*A,o[M*3]+=c[M*3]*A,o[M*3+1]+=c[M*3+1]*A,o[M*3+2]+=c[M*3+2]*A;const _=h[M]/f[M];l[M*3]=u[M*3]*_+a.r*(1-_),l[M*3+1]=u[M*3+1]*_+a.g*(1-_),l[M*3+2]=u[M*3+2]*_+a.b*(1-_)}x.attributes.position.needsUpdate=!0,x.attributes.color.needsUpdate=!0}return{emit:E,update:w}}const h_={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},u_={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},f_={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function Qh(i=""){const t=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(t)?"switch":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(t)?"ps":"xbox"}function d_(i){const t=i==="switch";return{build:t?1:0,carry:t?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function p_(i){const t=new Set,e={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=g=>e.pressed.add(g),s=g=>{e.device=g};addEventListener("keydown",g=>{if(s("kb"),(g.code==="Space"||g.code.startsWith("Arrow")||g.code==="Tab")&&g.preventDefault(),g.repeat)return;t.add(g.code);const T={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Digit4:"b4",Digit5:"b5",Digit6:"b6",Digit7:"b7",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",Numpad4:"b4",Numpad5:"b5",Numpad6:"b6",Numpad7:"b7",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};T[g.code]&&n(T[g.code])}),addEventListener("keyup",g=>t.delete(g.code)),addEventListener("blur",()=>t.clear()),i.addEventListener("wheel",g=>{g.preventDefault(),s("kb"),e.zoom=Ra(e.zoom*(g.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",g=>g.preventDefault());const r=new Map;let a=0,o=1,l=null;const c=g=>({x:g.clientX/innerWidth*2-1,y:-(g.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",g=>{if(s(g.pointerType==="touch"?"touch":"kb"),g.pointerType==="mouse"&&g.button===2){l={x:g.clientX},i.setPointerCapture(g.pointerId);return}g.pointerType==="mouse"&&g.button!==0||(r.set(g.pointerId,{e:g,t:performance.now(),x0:g.clientX,y0:g.clientY}),r.size===2&&(a=tu(r),o=e.zoom))}),i.addEventListener("pointermove",g=>{if(l){e.lookDelta+=(g.clientX-l.x)*.008,l.x=g.clientX;return}const T=r.get(g.pointerId);T&&(T.e=g,r.size===2&&a>0&&(e.zoom=Ra(o*(a/tu(r)),.55,4.5)))});const u=g=>{if(l&&g.button===2){l=null;return}const T=r.get(g.pointerId);T&&r.size===1&&a===0&&Math.hypot(g.clientX-T.x0,g.clientY-T.y0)<12&&e.clicks.push(c(g)),r.delete(g.pointerId),r.size<2&&(a=0)};i.addEventListener("pointerup",u),i.addEventListener("pointercancel",g=>{r.delete(g.pointerId),l=null,a=0});const h=document.getElementById("stick"),f=document.getElementById("knob"),d={x:0,z:0};let v=null;const x=g=>{const T=h.getBoundingClientRect();let E=g.clientX-(T.left+T.width/2),w=g.clientY-(T.top+T.height/2);const A=T.width/2,M=Math.hypot(E,w);M>A&&(E*=A/M,w*=A/M),f.style.transform=`translate(${E}px, ${w}px)`;const _=M/A<.15?0:1;d.x=E/A*_,d.z=w/A*_};h.addEventListener("pointerdown",g=>{s("touch"),v=g.pointerId,h.setPointerCapture(g.pointerId),x(g)}),h.addEventListener("pointermove",g=>{g.pointerId===v&&x(g)});const m=g=>{g.pointerId===v&&(v=null,d.x=d.z=0,f.style.transform="")};h.addEventListener("pointerup",m),h.addEventListener("pointercancel",m);const p=(g,T)=>g.addEventListener("pointerdown",E=>{E.preventDefault(),E.stopPropagation(),E.pointerType==="touch"&&s("touch"),n(T)});p(document.getElementById("btn-build"),"build"),p(document.getElementById("btn-carry"),"carry"),p(document.getElementById("btn-next"),"next"),p(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((g,T)=>p(g,"b"+(T+1)));let y=[];addEventListener("gamepadconnected",g=>{e.padId=g.gamepad.id,e.padKind=Qh(g.gamepad.id)});function S(){const T=[...navigator.getGamepads?navigator.getGamepads():[]].find(U=>U&&U.connected);if(!T)return null;T.id!==e.padId&&(e.padId=T.id,e.padKind=Qh(T.id));const E=d_(e.padKind),w=T.buttons.map(U=>U.pressed||U.value>.5),A=U=>w[U]&&!y[U],M=U=>Math.abs(U)<.2?0:(U-Math.sign(U)*.2)/.8;let _=M(T.axes[0]||0),C=M(T.axes[1]||0);w[14]&&(_=-1),w[15]&&(_=1),w[12]&&(C=-1),w[13]&&(C=1);const N=M(T.axes[2]||0);return(_||C||N||w.some(Boolean))&&s("pad"),A(E.build)&&n("build"),A(E.carry)&&n("carry"),A(E.next)&&n("next"),A(E.prev)&&n("selPrev"),A(E.nextSel)&&n("selNext"),A(E.pause)&&n("pause"),A(E.back)&&n("restart"),A(2)&&e.padKind!=="switch"&&n("next"),y=w,{x:_,z:C,look:N,zoomIn:w[E.zoomIn],zoomOut:w[E.zoomOut]}}return e.update=g=>{let T=0,E=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(T-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(T+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(E-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(E+=1);const w=S();w&&(w.x||w.z)&&(T=w.x,E=w.z),(d.x||d.z)&&(T=d.x,E=d.z);const A=Math.hypot(T,E);A>1&&(T/=A,E/=A),e.move.x=T,e.move.z=E,e.look=e.lookDelta+(w?w.look*2.2*g:0),e.lookDelta=0,w!=null&&w.zoomIn&&(e.zoom=Ra(e.zoom/(1+g*1.2),.55,4.5)),w!=null&&w.zoomOut&&(e.zoom=Ra(e.zoom*(1+g*1.2),.55,4.5))},e.labels=()=>e.device==="pad"?h_[e.padKind]:e.device==="touch"?f_:u_,e.consume=g=>e.pressed.delete(g),e.clear=()=>{e.pressed.clear(),e.clicks.length=0},e}const Ra=(i,t,e)=>Math.max(t,Math.min(e,i));function tu(i){const[t,e]=[...i.values()].map(n=>n.e);return Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY)||1}let Ie=null,Js=null,Xr=null;function m_(){if(Ie){Ie.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;Ie=new i,Js=Ie.createGain(),Js.gain.value=.5,Js.connect(Ie.destination),Xr=Ie.createBuffer(1,Ie.sampleRate*2,Ie.sampleRate);const t=Xr.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;g_()}const lf=()=>Ie?{ctx:Ie,noiseBuf:Xr}:null;function Ge(i,t,{type:e="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!Ie)return;const a=Ie.currentTime+r,o=Ie.createOscillator(),l=Ie.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(Js),o.start(a),o.stop(a+t+.02)}function ns(i,{vol:t=.3,freq:e=800,q:n=.7,delay:s=0}={}){if(!Ie)return;const r=Ie.currentTime+s,a=Ie.createBufferSource();a.buffer=Xr;const o=Ie.createBiquadFilter();o.type="lowpass",o.frequency.value=e,o.Q.value=n;const l=Ie.createGain();l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),a.connect(o).connect(l).connect(Js),a.start(r,Math.random()),a.stop(r+i+.02)}function g_(){const i=Ie.createBufferSource();i.buffer=Xr,i.loop=!0;const t=Ie.createBiquadFilter();t.type="lowpass",t.frequency.value=420;const e=Ie.createGain();e.gain.value=.035;const n=Ie.createOscillator(),s=Ie.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(e.gain),i.connect(t).connect(e).connect(Js),i.start(),n.start()}let eu=0;const Fe={pickup(){if(!Ie)return;const i=Ie.currentTime,t=i-eu<.4?1.12:1;eu=i,Ge(880*t+Math.random()*60,.12,{type:"triangle",vol:.12}),Ge(1320*t,.1,{type:"sine",vol:.06,delay:.04})},puff(){ns(.18,{vol:.07,freq:600,q:.3}),Ge(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)ns(.05,{vol:.1,freq:3500,delay:i*.03});Ge(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>Ge(i,.11,{type:"square",vol:.025})),Ge(98,.3,{vol:.08})},chill(){Ge(330,.5,{type:"sine",vol:.07,slide:160}),Ge(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){Ge(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){ns(.12,{vol:.12,freq:500}),Ge(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){ns(.45,{vol:.28,freq:380}),Ge(90,.35,{vol:.18,slide:-50})},horn(){Ge(196,.5,{type:"sawtooth",vol:.035}),Ge(147,.55,{type:"sine",vol:.06})},hit(){ns(.05,{vol:.08,freq:2500})},die(){Ge(420,.18,{type:"triangle",vol:.09,slide:-280}),ns(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,t)=>Ge(i,.25,{type:"triangle",vol:.1,delay:t*.06}))},upgrade(){[523,659,784,1047].forEach((i,t)=>Ge(i,.22,{type:"triangle",vol:.1,delay:t*.07}))},stone(){Ge(660,.2,{type:"sine",vol:.1,slide:200})},lose(){Ge(220,.6,{type:"sawtooth",vol:.06,slide:-120}),ns(.3,{vol:.08,freq:300})},stun(){Ge(700,.4,{type:"square",vol:.05,slide:-500})},deny(){Ge(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,t)=>Ge(i,.3,{type:"sawtooth",vol:.04,delay:t*.18}))},win(){[523,659,784,1047,1319].forEach((i,t)=>Ge(i,.4,{type:"triangle",vol:.12,delay:t*.12}))}},ql=172,wi=60/ql/4,is=i=>440*Math.pow(2,(i-69)/12),nu={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},qo={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},iu=[["build",8],["drop",16],["break",8],["drop",16]];function v_(i,t,e){const n=nu[e]||nu.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const a=i.createGain();a.gain.value=0,s.connect(r).connect(a).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,a.connect(o);const l={};for(const j of["drums","bass","pad","arp","lead"]){const R=i.createGain();R.gain.value=0,R.connect(s),l[j]=R}const c={};for(const j of["pad","bass"]){const R=i.createGain();R.gain.value=1,R.connect(l[j]),c[j]=R}const u=(j,R)=>{const b=i.createBuffer(2,Math.floor(i.sampleRate*j),i.sampleRate);for(let H=0;H<2;H++){const Z=b.getChannelData(H);for(let tt=0;tt<Z.length;tt++)Z[tt]=(Math.random()*2-1)*Math.pow(1-tt/Z.length,R)}return b},h=i.createConvolver();h.buffer=u(2.4,2.5);const f=i.createGain();f.gain.value=n.space,h.connect(f).connect(s);const d=i.createConvolver();d.buffer=u(.5,.4);const v=i.createGain();v.gain.value=0,d.connect(v).connect(l.drums);const x=i.createDelay(1);x.delayTime.value=wi*3;const m=i.createGain();m.gain.value=.38;const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=2400;const y=i.createStereoPanner(),S=i.createOscillator(),g=i.createGain();S.frequency.value=ql/60/3,g.gain.value=.8,S.connect(g).connect(y.pan),S.start(),x.connect(p).connect(m).connect(x),p.connect(y).connect(l.arp);const T=i.createBiquadFilter();T.type="highpass",T.frequency.value=180;const E=i.createBiquadFilter();E.type="lowpass",E.frequency.value=n.padCut,E.Q.value=2;const w=i.createOscillator(),A=i.createGain();w.frequency.value=.07,A.gain.value=n.padCut*.45,w.connect(A).connect(E.frequency),w.start();const M=i.createDelay(.05);M.delayTime.value=.014;const _=i.createOscillator(),C=i.createGain();_.frequency.value=.5,C.gain.value=.004,_.connect(C).connect(M.delayTime),_.start();const N=i.createStereoPanner();N.pan.value=.6,T.connect(E),E.connect(c.pad),E.connect(M).connect(N).connect(c.pad),E.connect(h);const F=i.createBiquadFilter();F.type="lowpass",F.frequency.value=420,F.Q.value=6;const U=i.createOscillator(),O=i.createGain();if(U.frequency.value=ql/60/4,O.gain.value=260,U.connect(O).connect(F.frequency),U.start(),n.drive>0){const j=i.createWaveShaper(),R=new Float32Array(1024);for(let b=0;b<1024;b++){const H=b/512-1;R[b]=Math.tanh(H*(1+n.drive*6))}j.curve=R,F.connect(j).connect(c.bass)}else F.connect(c.bass);const V=i.createBiquadFilter();V.type="lowpass",V.frequency.value=3600,V.Q.value=3,V.connect(l.lead),V.connect(x),V.connect(h);const $=(j,R,b,H,Z,tt)=>{j.gain.setValueAtTime(1e-4,R),j.gain.exponentialRampToValueAtTime(H,R+b),j.gain.setValueAtTime(H,R+Math.max(b,tt-Z)),j.gain.exponentialRampToValueAtTime(1e-4,R+tt)},B=(j,R)=>{const b=i.createStereoPanner();return b.pan.value=R,j.connect(b),b},Q=(j,R,b,H,Z,tt,et="bandpass",Rt=0)=>{const vt=i.createBufferSource();vt.buffer=t;const bt=i.createBiquadFilter();bt.type=et,bt.frequency.value=b,bt.Q.value=H;const Qt=i.createGain();$(Qt,j,.001,Z,R*.8,R),vt.connect(bt).connect(Qt);const _t=Rt?B(Qt,Rt):Qt;for(const zt of tt)_t.connect(zt);vt.start(j,Math.random()*1.5),vt.stop(j+R+.02)},at=(j,R=1)=>{const b=i.createOscillator(),H=i.createGain();b.frequency.setValueAtTime(160,j),b.frequency.exponentialRampToValueAtTime(44,j+.11),$(H,j,.002,1*R,.2,.3),b.connect(H).connect(l.drums),b.start(j),b.stop(j+.32),Q(j,.012,3500,.7,.35*R,[l.drums],"highpass");for(const Z of Object.values(c))Z.gain.cancelScheduledValues(j),Z.gain.setValueAtTime(.35,j),Z.gain.linearRampToValueAtTime(1,j+.2)},ht=(j,R=1)=>{Q(j,.17,1900,.8,.5*R,[l.drums,d]);for(const[b,H,Z]of[[200,160,.3],[340,260,.14]]){const tt=i.createOscillator(),et=i.createGain();tt.type="triangle",tt.frequency.setValueAtTime(b,j),tt.frequency.exponentialRampToValueAtTime(H,j+.08),$(et,j,.001,Z*R,.06,.11),tt.connect(et).connect(l.drums),tt.start(j),tt.stop(j+.13)}v.gain.setValueAtTime(.9*R,j),v.gain.setValueAtTime(1e-4,j+.21)};let Mt=1;const qt=(j,R,b)=>{Mt=-Mt,Q(j,b?.14:.035,9e3,.6,(b?.12:.08)*R,[l.drums],"highpass",Mt*.35)},it=(j,R,b)=>{for(const tt of[-n.reeseDetune,n.reeseDetune]){const et=i.createOscillator(),Rt=i.createGain();et.type="sawtooth",et.frequency.value=is(R),et.detune.value=tt,$(Rt,j,.02,.2,.1,b),B(et.connect(Rt),tt>0?.25:-.25).connect(F),et.start(j),et.stop(j+b+.05)}const H=i.createOscillator(),Z=i.createGain();H.frequency.value=is(R-12),$(Z,j,.02,.42,.1,b),H.connect(Z).connect(c.bass),H.start(j),H.stop(j+b+.05)},ut=(j,R,b,H=1)=>{for(const Z of R.slice(1))for(const[tt,et]of[[-9,-.6],[0,0],[8,.6]]){const Rt=i.createOscillator(),vt=i.createGain();Rt.type=n.pad,Rt.frequency.value=is(Z),Rt.detune.value=tt,$(vt,j,.8,.026*H,1.4,b),B(Rt.connect(vt),et).connect(T),Rt.start(j),Rt.stop(j+b+.1)}},yt=(j,R,b=1)=>{const H=i.createOscillator(),Z=i.createGain();H.type="square",H.frequency.value=is(R+n.arpOct);const tt=i.createBiquadFilter();tt.type="lowpass",tt.frequency.value=3200,$(Z,j,.003,.05*b,.08,wi*1.6),H.connect(tt).connect(Z),Z.connect(l.arp),Z.connect(x),H.start(j),H.stop(j+wi*2)},pt=(j,R,b,H)=>{const Z=b*wi;for(const tt of[-6,6]){const et=i.createOscillator(),Rt=i.createGain();et.type=n.lead,H?(et.frequency.setValueAtTime(is(H),j),et.frequency.exponentialRampToValueAtTime(is(R),j+.05)):et.frequency.value=is(R),et.detune.value=tt;const vt=i.createOscillator(),bt=i.createGain();vt.frequency.value=5.5,bt.gain.value=9,vt.connect(bt).connect(et.detune),vt.start(j+.12),vt.stop(j+Z+.05),$(Rt,j,.01,.07,Math.min(.12,Z*.4),Z),B(et.connect(Rt),tt>0?.2:-.2).connect(V),et.start(j),et.stop(j+Z+.05)}};let Nt=0,Bt=0,Xt=null,ue=0,te=.7,pe=!1,X=0;const Te=iu.reduce((j,[,R])=>j+R,0),ee=()=>{if(ue<.5)return"ambient";let j=X%Te;for(const[R,b]of iu){if(j<b)return R;j-=b}return"drop"},Zt=()=>{const j=i.currentTime,R=(H,Z)=>{H.gain.cancelScheduledValues(j),H.gain.setTargetAtTime(Z,j,.8)},b=ue;R(l.drums,.1+.85*b),R(l.bass,.3+.6*b),R(l.pad,.75-.2*b),R(l.arp,.35+.3*b),R(l.lead,.55+.35*b),a.gain.cancelScheduledValues(j),a.gain.setTargetAtTime(pe?0:te*.8,j,.3)},Vt=j=>j%2?wi*.12:0,fe=()=>{for(;Bt<i.currentTime+.15;){const j=Nt%32,R=Math.floor(Nt/16),b=Math.floor(Nt/32)%n.chords.length,H=n.chords[b];j%16===0&&Nt>0&&ue>.5&&X++;const Z=ee(),tt=Bt+Vt(j),et=X%8;if(Z==="drop"||Z==="build"){const vt=et%4===3&&j>=16?qo.FILL:et>=6?qo.B:qo.A,bt=Z==="build"&&et<4;vt.k[j]==="x"&&!(bt&&j%8)&&at(tt),vt.s[j]==="x"&&!bt&&ht(tt,Z==="build"?.7:1),vt.g[j]==="x"&&ht(tt,.3),(!bt||j%2===0)&&qt(tt,j%2?.6:1,j%8===6)}else Z==="break"?(j%4===2&&qt(tt,.6,!1),(j===0||j===16)&&at(tt,.4)):j%4===2&&qt(tt,.45,!1);if(j===0&&(ut(tt,H,wi*32,Z==="break"?1.3:1),it(tt,H[0],wi*(Z==="drop"?14:30))),Z==="drop"&&j===16&&it(tt,H[0]+(b%2?3:7),wi*14),j%n.arpRate===0&&Z!=="break"&&yt(tt,H[1+j/n.arpRate%4]+(j>=16?12:0),Z==="ambient"?.7:1),Z==="drop"||(Z==="break"||Z==="ambient")&&Math.floor(R/4)%2===1){const vt=n.hook.findIndex(([bt])=>bt===j);if(vt>=0){const[,bt,Qt]=n.hook[vt];pt(tt,bt+(Z==="ambient"?-12:0),Qt,vt>0?n.hook[vt-1][1]:0)}}Bt+=wi,Nt++}};return{start(){Xt||(Bt=i.currentTime+.1,Xt=setInterval(fe,25),Zt())},stop(){clearInterval(Xt),Xt=null,a.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity(j){j>.5&&ue<=.5&&(X=0),ue=j,Zt()},setVolume(j){te=j,Zt()},setMuted(j){pe=j,Zt()},get muted(){return pe},get volume(){return te},rms(){const j=new Float32Array(o.fftSize);return o.getFloatTimeDomainData(j),Math.sqrt(j.reduce((R,b)=>R+b*b,0)/j.length)},get intensity(){return ue},get section(){return ee()},tap(j){a.connect(j)}}}const Ht={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:1.2,keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,chillMax:100,stressInvuln:1,stressPush:7,airStress:10,faintTime:6,faintLoss:.25,wakeChill:.6,regen:3,regenReach:9,bagChance:.05,bagHeal:25,bagLife:20,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8]},Qs={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!0,tip:"rask · bakke + luft"},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5,tip:"splash · kun bakke"},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2,tip:"bremser i ring"},bubble:{name:"Bobleblåser",cost:20,range:7,dmg:2.5,cooldown:.38,air:!0,ground:!1,trap:1.4,tip:"fanger flyvere · kun luft"},kite:{name:"Papirdrage",cost:40,range:13,dmg:5,cooldown:2.8,air:!0,ground:!1,zone:3.4,hover:2.4,tip:"sone, lang · kun luft"},pizza:{name:"Pizza-katapult",cost:55,range:14,dmg:24,cooldown:3,air:!1,splash:2.9,tip:"lang splash · kun bakke"},lamp:{name:"Lavalampe",cost:50,range:4.6,dmg:1.1,cooldown:.3,air:!0,slowTime:.5,tip:"aura, bremser alt"}},no={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0",stress:10},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0",resist:{ring:.5,chips:1.5},stress:15},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0,swoop:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a",stress:8},auditor:{name:"Revisoren",hp:70,speed:1.6,embers:8,anim:7,puff:"#9fffb0",shield:.25,resist:{lamp:1.5},info:"skjold forfra (×0,25), ikke mot aura",stress:14},complainer:{name:"Naboklageren",hp:12,speed:4.3,embers:3,anim:18,puff:"#ffb0f0",resist:{chips:.5,ring:1.5},info:"rask, mørtel bommer",stress:10},lobbyist:{name:"Lobbyisten",hp:55,speed:1.9,embers:6,anim:9,puff:"#ffe08a",splits:3,resist:{speaker:.5,pizza:1.5},noMood:!0,info:"deler seg i tre, immun mot stemning",stress:12},lobbyMini:{name:"Mini-lobbyist",hp:14,speed:2.7,embers:1,anim:14,puff:"#ffe08a",resist:{speaker:.5,pizza:1.5},noMood:!0,stress:8},drone:{name:"Overvåkings-drone",hp:9,speed:4.6,embers:1,anim:30,puff:"#c8d8ff",flying:!0,alt:3.6,resist:{bubble:1.5,lamp:1.5,kite:.5},info:"rask sverm i lufta"},balloon:{name:"Ballong-byråkraten",hp:150,speed:1.05,embers:14,anim:2,puff:"#ffffff",flying:!0,alt:5.6,resist:{bubble:.5,kite:1.5},info:"seig, høyt oppe"},heli:{name:"Mini-helikopteret",hp:48,speed:2.5,embers:7,anim:40,puff:"#ffffff",flying:!0,alt:4.6,blind:{every:6,dur:3,range:9},resist:{ring:.5,kite:1.5},info:"søkelys blender et tårn i 3 s"}},x_=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],_n=new URLSearchParams(location.search),cf=_n.has("demo");if(_n.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(pr.length))}catch{}let xn=Number(_n.get("world"));if(!Number.isInteger(xn))try{xn=Number(localStorage.getItem("glod-world"))||0}catch{xn=0}xn=Math.max(0,Math.min(Wr()-1,xn));try{localStorage.setItem("glod-world",String(xn))}catch{}const je=pr[xn],wc=Px(je,x_);function __(){return 1}const M_=Math.max(1,Math.min(20,Number(_n.get("speed"))||1)),ji=matchMedia("(pointer: coarse)").matches||_n.has("mobile"),Yl={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:1.25}};let mi=ji?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(mi=i)}catch{}(_n.get("q")==="high"||_n.get("q")==="low")&&(mi=_n.get("q"));const qr={mobile:ji,shadow:Yl[mi].shadow,dprCap:Yl[mi].dprCap},hf=document.getElementById("game"),Un=new Pv({canvas:hf,antialias:!ji,powerPreference:"high-performance",preserveDrawingBuffer:_n.has("shot")});let cs=Math.min(devicePixelRatio||1,qr.dprCap);Un.setPixelRatio(cs);Un.shadowMap.enabled=!0;Un.shadowMap.type=uu;Un.toneMapping=tc;let fs="dag";try{fs=localStorage.getItem("glod-tid")||"dag"}catch{}_n.get("tid")&&(fs=_n.get("tid"));const Vn=fs==="skumring"&&je.skyDusk?je.skyDusk:je.sky;Un.toneMappingExposure=Vn.exposure;Un.info.autoReset=!1;const ge=new Dv,uf=new Ct(Vn.fog);ge.background=uf;ge.fog=new mc(uf,...je.fog??[55,115]);const We=new Dn(38,1,.5,200),y_=new ux(Vn.hemiSky,Vn.hemiGround,Vn.hemi);ge.add(y_);const Qe=new px(Vn.sun,Vn.sunI);Qe.castShadow=!0;Qe.shadow.mapSize.set(qr.shadow,qr.shadow);Object.assign(Qe.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});Qe.shadow.bias=-8e-4;Qe.shadow.normalBias=.03;ge.add(Qe,Qe.target);const kt=zx(ge,qr,je);kt.grass.setLevel(mi);const S_=l_(ge,kt,qr,je,fs),Mn=c_(kt);window.__nav=Mn;const Be=of(ge,ji?450:800),Yr=of(ge,ji?120:220,{blending:Xi,size:1.6,opacity:.45,fadeTo:Vn.fog}),io=o_(Un,ge,We,Vn.grade);io.setLevel(mi);const oe=p_(hf);function so(){const i=innerWidth,t=innerHeight;Un.setSize(i,t,!1),We.aspect=i/t,We.updateProjectionMatrix(),io.setSize(i,t)}function ff(i){mi=i;try{localStorage.setItem("glod-quality",i)}catch{}const t=Yl[i];Qe.shadow.mapSize.set(t.shadow,t.shadow),Qe.shadow.map&&(Qe.shadow.map.dispose(),Qe.shadow.map=null),cs=Math.min(devicePixelRatio||1,t.dprCap),Un.setPixelRatio(cs),io.setLevel(i),kt.grass.setLevel(i),so(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",so);so();const K={phase:"title",wave:0,timer:0,embers:Ht.startEmbers,lights:Fn,spawnQueue:[],leaks:{},seen:{},time:0,sel:0,paused:!1},Vi=["ring","chips","speaker","bubble","kite","pizza","lamp"];let Ai=je.camYaw??0;const su=new mx,bn=[],Ln=[],jn=[],hs=[],tr=[],Nr=[],dn=Fx(),k={x:kt.lighthouse.pos.x+1,z:kt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:Ht.chillMax,inv:0,faint:0,faints:0};dn.position.set(k.x,kt.heightAt(k.x,k.z),k.z);ge.add(dn);const Ec=new Hr("#ffcf70",6,7,1.8);Ec.position.set(.5,1.1,0);dn.add(Ec);const se=i=>document.getElementById(i),$e={chill:se("hud-chill"),lights:se("hud-lights"),embers:se("hud-embers"),wave:se("hud-wave"),timer:se("hud-timer")},Pi=se("hint"),hi=se("build-panel"),Tc=se("btn-next"),Ac=se("fps");_n.has("debug")||Ac.classList.add("hidden");let Li={};function In(i,t,e,n){Li[t]!==e&&(Li[t]=e,i.querySelector("b").textContent=e,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const b_=4;let df=0;function ru(i){if(Pi.textContent===i)return;Pi.textContent=i,df=0,Pi.classList.remove("faded");const t=hi.classList.contains("hidden")?null:hi.getBoundingClientRect();Pi.style.bottom=t&&t.height?`${Math.round(innerHeight-t.top+6)}px`:""}function w_(i){(df+=i)>b_&&Pi.classList.add("faded")}function pf(i){K.phase="prep",K.timer=i,Tc.classList.remove("hidden"),E_()}function E_(){const i=K.wave+1,t=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);K.spawnPoints=Mn.coastPoints(t,24),K.spawnPoints.length||(K.spawnPoints=Mn.coastPoints(t,8,{near:12,minFrac:.5})),K.spawnPoints.length||(K.spawnPoints=Mn.roadEnds().slice(0,t)),R_()}function mf(){K.wave+=1,K.phase="wave",Tc.classList.add("hidden"),K.spawnQueue=[];for(const i of wc[K.wave-1]){const t=K.wave<=Ht.earlyScale.length?K.wave-1:-1,e=K.spawnPoints.length,n=no[i.type].flying?je.balance.air??1:1,s=Math.max(1,Math.round(i.n*(je.balance.count||1)*n*(t>=0?Ht.earlyScale[t]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,e));for(let a=0;a<e;a++)for(let o=0;o<r;o++)K.spawnQueue.push({t:(i.at??0)+o*i.gap+a*.3,type:i.type,path:a})}else{const r=i.path??0;for(let a=0;a<s;a++)K.spawnQueue.push({t:(i.at??0)+a*i.gap,type:i.type,path:(r+a%2)%e})}}K.spawnQueue.sort((i,t)=>i.t-t.t),K.waveClock=0,Fe.wave(),we==null||we.setIntensity(1),In($e.wave,"wave",K.wave,"bump")}function Cc(i,t){var l,c;const e=no[i],n=Ox(i),s=e.hp*(1+Ht.hpGrowth*(K.wave-1))*je.balance.hp*(((c=(l=je.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*__(),r={type:i,def:e,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:je.balance.speed*(e.flying?je.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4},a=K.spawnPoints[t%K.spawnPoints.length]||[0,50],o=kt.lighthouse.pos;if(e.flying){const u=Math.atan2(a[1]-o.z,a[0]-o.x)+(Math.random()-.5)*.5,h=o.x+Math.cos(u)*66,f=o.z+Math.sin(u)*66;r.x=h,r.z=f,r.y=e.alt||4,r.dist0=Math.hypot(o.x-h,o.z-f),r.hitCd=0}else r.x=a[0]+(Math.random()-.5)*1.5,r.z=a[1]+(Math.random()-.5)*1.5,r.y=kt.heightAt(r.x,r.z),r.remain=Mn.at(r.x,r.z);return n.position.set(r.x,r.y,r.z),ge.add(n),bn.push(r),!K.seen[i]&&i!=="lobbyMini"&&(K.seen[i]=!0,T_(r)),r}const $l={ring:"💨",chips:"🥔",speaker:"🔊",bubble:"🫧",kite:"🪁",pizza:"🍕",lamp:"🌋"};function gf(i){const t=Object.entries(i.resist||{}),e=t.filter(([,s])=>s<1).map(([s])=>$l[s]).join(""),n=t.filter(([,s])=>s>1).map(([s])=>$l[s]).join("");return{tough:e+(i.shield?"📒":""),weak:n}}const er=[],ro=document.createElement("div");ro.id="tags";document.body.appendChild(ro);function T_(i){const{tough:t,weak:e}=gf(i.def),n=document.createElement("div");n.className="enemy-tag",n.innerHTML=`<b>${i.def.flying?"🪶":"🐾"} ${i.def.name}</b>${t?`<span>🛡️${t}</span>`:""}${e?`<span>💥${e}</span>`:""}`,ro.appendChild(n),er.push({m:i,el:n,t:0}),(K.wave>1||i.def.flying)&&sn(`Ny fiende: ${i.def.name}${t?` · tåler ${t}`:""}${e?` · svak mot ${e}`:""}`)}function A_(i){var t;for(let e=er.length-1;e>=0;e--){const n=er[e];n.age=(n.age||0)+i,Ue.set(n.m.x,n.m.y+(((t=n.m.mesh.userData.hpBar)==null?void 0:t.position.y)??2.2)+.5,n.m.z).project(We);const s=Ue.z<1&&Math.abs(Ue.x)<1&&Math.abs(Ue.y)<1;n.el.style.display=s?"flex":"none",s&&(n.t+=i),n.el.style.left=`${(Ue.x*.5+.5)*innerWidth}px`,n.el.style.top=`${(-Ue.y*.5+.5)*innerHeight}px`,n.el.style.opacity=String(Math.min(1,(6-n.t)/.6)),(n.t>6||n.age>90||!n.m.alive)&&(n.el.remove(),er.splice(e,1))}}function C_(i){return i.def.flying?1-Math.hypot(kt.lighthouse.pos.x-i.x,kt.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??Mn.maxDist)/Mn.maxDist)}const Ga=[],ds=document.createElement("div");ds.id="warn";document.body.appendChild(ds);function R_(){for(const e of Ga)ge.remove(e);Ga.length=0,ds.innerHTML="";for(const[e,n]of K.spawnPoints){const s=new Jt(vf,new Se({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));s.position.set(e,Math.max(kt.heightAt(e,n),.08)+.1,n);const r=new Jt(P_,new Se({color:"#ff8a3a",transparent:!0,opacity:.35,blending:ei,depthWrite:!1,fog:!1}));r.position.y=4,s.add(r),ge.add(s),Ga.push(s);const a=document.createElement("div");a.className="warn-arrow",a.innerHTML='<span class="arr">➤</span><span class="kind"></span>',ds.appendChild(a)}const i=K.spawnPoints.length,t=K.spawnPoints.map(()=>({air:!1,ground:!1}));for(const e of wc[K.wave]||[]){const n=e.path==="both"?t.map((s,r)=>r):[(e.path??0)%i,((e.path??0)+1)%i];for(const s of n)t[s][no[e.type].flying?"air":"ground"]=!0}t.forEach((e,n)=>{var r;const s=(r=ds.children[n])==null?void 0:r.querySelector(".kind");s&&(s.textContent=(e.air?"🪶":"")+(e.ground?"🐾":""))})}const vf=new bs(1.6,2.2,32);vf.rotateX(-Math.PI/2);const P_=new De(.5,1.4,8,12,1,!0);function D_(){var a;const i=K.phase==="prep"||K.phase==="wave"&&K.waveClock<8,t=ds.children,e=i&&!hi.classList.contains("hidden")?hi.getBoundingClientRect():null,n=e&&Pi.textContent&&!Pi.classList.contains("faded"),s=i?se("hud").getBoundingClientRect().bottom:0;ds.style.visibility=ro.style.visibility=K.paused?"hidden":"";const r=e?n?Math.min(e.top,Pi.getBoundingClientRect().top):e.top:0;(a=K.spawnPoints)==null||a.forEach(([o,l],c)=>{const u=Ga[c],h=t[c];if(!u||!h)return;u.visible=i;const f=.5+.5*Math.sin(K.time*6);u.scale.setScalar(1+f*.35),u.material.opacity=.35+.5*f,Ue.set(o,u.position.y,l).project(We);const d=Math.abs(Ue.x)>.92||Math.abs(Ue.y)>.88||Ue.z>1;if(h.style.display=i?"block":"none",h.classList.toggle("onscreen",!d),i&&!d&&(h.style.left=`${(Ue.x*.5+.5)*innerWidth}px`,h.style.top=`${Math.max((-Ue.y*.5+.5)*innerHeight-30,s+30)}px`,h.style.transform="translate(-50%, -50%)",h.firstChild.style.transform=""),i&&d){let v=Ue.x,x=Ue.y;Ue.z>1&&(v=-v,x=-x);const m=Math.atan2(-x,v),p=Math.max(Math.abs(v),Math.abs(x))||1,y=ze.clamp(v/p,-1,1),S=ze.clamp(x/p,-1,1),g=(y*.46+.5)*innerWidth;let T=(-S*.44+.5)*innerHeight;e&&g>e.left-24&&g<e.right+24&&T>r-24&&(T=r-24),T=Math.max(T,s+30),h.style.left=`${g}px`,h.style.top=`${T}px`,h.style.transform=`translate(-50%, -50%) scale(${1+f*.25})`,h.firstChild.style.transform=`rotate(${m}rad)`}})}function us(i,t,e){var n;if(i.alive){if(e&&(t*=((n=i.def.resist)==null?void 0:n[e.type])??1,i.def.shield&&e.type!=="lamp")){const s=e.x-i.x,r=e.z-i.z,a=Math.hypot(s,r)||1,o=Math.hypot(i.hx||0,i.hz||0)||1;(s*(i.hx||0)+r*(i.hz||0))/(a*o)>.35&&(t*=i.def.shield,Math.random()<.3&&Be.emit(i.x,i.y+1,i.z,{n:2,color:"#d8c890",speed:1.5,up:1,life:.3}))}i.hp-=t,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&L_(i)}}function L_(i){i.alive=!1,i.chillT=0,Bx(i),Nr.push(i),Be.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),Fe.chill(),Rc(i.x,i.y+.5,i.z,i.def.embers,i.def.flying),!i.def.flying&&Math.random()<Ht.bagChance&&xf(i.x,i.z);for(let t=0;t<(i.def.splits||0);t++){const e=Cc("lobbyMini",0);e.x=i.x+(t-1)*.6,e.z=i.z+(t%2?.5:-.5),e.y=kt.heightAt(e.x,e.z),e.mesh.position.set(e.x,e.y,e.z)}}function U_(i){var t;for(let e=Nr.length-1;e>=0;e--){const n=Nr[e];n.chillT+=i;const s=n.chillT,r=n.mesh.userData.body;if(n.def.flying)n.y+=i*2.5,n.z+=i*3,(t=n.mesh.userData.wings)==null||t.forEach((o,l)=>o.rotation.z=Math.sin(s*6)*.5*(l?-1:1));else if(s<1.4){const o=Math.min(1,s/.4);r.position.y=-.25*o*(n.type==="tank"?1.3:1),r.rotation.x=.25*o,r.rotation.z=Math.sin(s*3)*.05}else{r.rotation.x=0,r.position.y=Math.abs(Math.sin(s*7))*.06;const[o,l]=Mn.dir(n.x,n.z),c=n.x-o*n.def.speed*.45*i,u=n.z-l*n.def.speed*.45*i;kt.isWalkable(c,u)&&(n.x=c,n.z=u),n.y=kt.heightAt(n.x,n.z),(o||l)&&(n.mesh.rotation.y=Math.atan2(o,l))}Math.random()<i*1.5&&Be.emit(n.x,n.y+1.8,n.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4});const a=Math.max(0,Math.min(1,(3.2-s)/.6));n.mesh.scale.setScalar(a),n.mesh.position.set(n.x,n.y,n.z),s>3.2&&(ge.remove(n.mesh),Nr.splice(e,1))}}function Rc(i,t,e,n,s=!1,r=1){const a=Math.min(n,n>=6?3:n>=3?2:1);let o=n;for(let l=0;l<a;l++){const c=l===a-1?o:Math.ceil(n/a);o-=c;const u=Vx(),h=Math.random()*Math.PI*2,f=(1.2+Math.random()*1.8)*r,d={mesh:u,x:i,y:t,z:e,vx:Math.cos(h)*f,vz:Math.sin(h)*f,vy:5+Math.random()*2,life:Ht.emberLife,value:c,settled:!1,phase:Math.random()*6};u.scale.setScalar(.8+Math.min(c,6)*.08),ge.add(u),hs.push(d)}}function $r(i,t,e,n,s=()=>!0){let r=null,a=n;for(const o of i){if(!s(o))continue;const l=Math.hypot(o.x-t,o.z-e);l<a&&(a=l,r=o)}return r}function Pc(){const i=$r(kt.plinths,k.x,k.z,Ht.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const t=-Math.sin(k.face),e=-Math.cos(k.face),n=k.x+t*Ht.placeAhead,s=k.z+e*Ht.placeAhead,r=kt.heightAt(n,s),a=kt.lighthouse.pos;let o="";return r<.35?o="i vannet":kt.extras.blocks(n,s)?o="i lavaen":kt.pathDist(n,s)<1.9?o="på stien":kt.slopeAt(n,s)>.6?o="for bratt":Math.hypot(n-a.x,s-a.z)<5.5?o="for nær fyret":Ln.some(l=>Math.hypot(l.x-n,l.z-s)<Ht.minTowerGap)?o="for nær et annet tårn":kt.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?o="oppå en sokkel (gå helt bort til den)":kt.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(o="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!o,why:o}}function jl(i){const t=Pc();if(!t.ok){Fe.deny(),sn(`Ikke lov å bygge her: ${t.why}`);return}const e=Qs[i];if(K.embers<e.cost){Fe.deny(),sn(`Trenger ${e.cost} ✦ glør`),In($e.embers,"embersBad",Math.random(),"bad");return}K.embers-=e.cost;const n=kx(i);if(n.position.set(t.x,t.y,t.z),!t.plinth){const r=new Jt(I_,N_);r.position.y=.04,r.receiveShadow=!0,n.add(r)}ge.add(n);const s={type:i,def:e,mesh:n,x:t.x,z:t.z,y:t.y,level:1,cd:.3,plinth:t.plinth,onPlinth:!!t.plinth};t.plinth&&(t.plinth.tower=s),Ln.push(s),kt.colliders.push({x:t.x,z:t.z,r:1,tower:s}),Be.emit(t.x,t.y+.3,t.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),Fe.build(),K.buildMode=!1,t.plinth&&sn(`${e.name} på gammel sokkel: +25 % rekkevidde`)}const I_=new De(.95,1.05,.12,10),N_=new Pe({color:"#8a8478"}),Ci=new me;{const i=new Jt(new lr(1,24),new Se({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const t=new bs(.965,1,64);t.rotateX(-Math.PI/2);const e=new Jt(t,new Se({transparent:!0,opacity:.6,depthWrite:!1})),n=new Jt(new De(.55,.7,1.6,10),new Se({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,Ci.add(i,e,n),Ci.userData={disc:i,ring:e,pillar:n},Ci.visible=!1,Ci.renderOrder=20,ge.add(Ci)}function z_(i,t,e){if(Ci.visible=i,!i)return;const n=t.ok,s=n?t.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=Qs[e].range*(t.plinth?Ht.plinthBonus:1);Ci.position.set(t.x,t.y+.06,t.z);const a=Ci.userData;for(const o of[a.disc,a.ring,a.pillar])o.material.color.set(s);a.ring.scale.setScalar(r),a.ring.visible=n,a.pillar.visible=!t.plinth}const Ei=(i,t)=>{const e=i.level-1;return t==="range"?i.def.range*(1+.12*e)*(i.onPlinth?Ht.plinthBonus:1):t==="dmg"?i.def.dmg*[1,1.7,2.6][e]:t==="rate"?i.def.cooldown/(1+.15*e):i.def[t]};function F_(i){for(const t of Ln){if(t.cd-=i,t.armBack>0&&(t.armBack-=i,t.armBack<=0&&(t.mesh.userData.arm.rotation.x=-.35)),t.type==="lamp"&&t.mesh.userData.blobs.forEach((c,u)=>c.position.y=.75+Math.sin(K.time*.8+u*2.1)*.35),t.blind>0){t.blind-=i,Math.random()<i*8&&Be.emit(t.x,t.y+2,t.z,{n:1,color:"#fff6c8",speed:.6,up:.8,life:.5,gravity:-.4});continue}const e=Ei(t,"range");let n=null,s=-1;for(const c of bn){if(!c.alive||(c.def.flying?!t.def.air:t.def.ground===!1)||Math.hypot(c.x-t.x,c.z-t.z)>e)continue;const u=C_(c);u>s&&(s=u,n=c)}const r=t.mesh.userData.head;if(t.type==="speaker"){const c=Math.max(0,Math.sin(K.time*7.3));r.rotation.z=Math.sin(K.time*3.65)*.05,t.mesh.userData.woofers.forEach(u=>u.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=Kl(Math.atan2(-(n.x-t.x),-(n.z-t.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-t.x),-(n.z-t.z));r.rotation.y+=Kl(c,r.rotation.y)*Math.min(1,i*10)}if(!n||t.cd>0)continue;t.cd=Ei(t,"rate");const a=t.x,o=t.y+1.4*t.mesh.scale.y,l=t.z;if(t.type==="ring"){const c=Gx();c.position.set(a,o-.3,l),ge.add(c),jn.push({kind:"bolt",src:t,mesh:c,target:n,dmg:Ei(t,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),Fe.puff()}else if(t.type==="chips"){const c=ef();c.position.set(a,t.y+1,l),ge.add(c);const[u,h]=n.def.flying?[0,0]:Mn.dir(n.x,n.z),f=n.x+u*n.def.speed*.6,d=n.z+h*n.def.speed*.6;jn.push({kind:"shell",src:t,mesh:c,sx:a,sy:t.y+1,sz:l,ex:f,ez:d,ey:kt.heightAt(f,d),t:0,dur:.95,dmg:Ei(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),Be.emit(a,t.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),Fe.mortar()}else if(t.type==="speaker"){for(const u of bn)!u.alive||Math.hypot(u.x-t.x,u.z-t.z)>e||(u.def.noMood||(u.slow=t.def.slowTime),us(u,Ei(t,"dmg"),t));const c=nf();c.position.set(t.x,t.y+.3,t.z),ge.add(c),tr.push({mesh:c,t:0,r:e}),Be.emit(t.x,t.y+1.8,t.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),Fe.skank()}else if(t.type==="bubble"){const c=rf();c.position.set(a,o+.2,l),ge.add(c),jn.push({kind:"bubble",src:t,mesh:c,target:n,dmg:Ei(t,"dmg"),trap:t.def.trap,tx:n.x,ty:n.y,tz:n.z}),Fe.pickup()}else if(t.type==="kite"){if(jn.some(u=>u.kind==="kite"&&u.tower===t)){t.cd=.2;continue}const c=sf();c.position.set(a,o,l),ge.add(c),jn.push({kind:"kite",mesh:c,tower:t,sx:a,sz:l,tx:n.x,tz:n.z,phase:"out",t:0,tick:0,dmg:Ei(t,"dmg"),zone:t.def.zone*(1+.1*(t.level-1)),hover:t.def.hover}),Fe.puff()}else if(t.type==="pizza"){const c=Hx();c.position.set(a,t.y+1.2,l),ge.add(c);const[u,h]=Mn.dir(n.x,n.z),f=n.x+u*n.def.speed*1.1,d=n.z+h*n.def.speed*1.1;jn.push({kind:"shell",src:t,pizza:!0,mesh:c,sx:a,sy:t.y+1.2,sz:l,ex:f,ez:d,ey:kt.heightAt(f,d),t:0,dur:1.3,arc:7,dmg:Ei(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),t.mesh.userData.arm.rotation.x=.9,t.armBack=.5,Fe.mortar()}else if(t.type==="lamp"){for(const c of bn)!c.alive||Math.hypot(c.x-t.x,c.z-t.z)>e||(c.slow=Math.max(c.slow,t.def.slowTime),us(c,Ei(t,"dmg"),t));Math.random()<.3&&Be.emit(t.x,t.y+1.6,t.z,{n:2,color:"#ff9a3a",speed:.8,up:1.2,life:.8,gravity:-.3})}}}function O_(i){var t;for(let e=jn.length-1;e>=0;e--){const n=jn[e];let s=!1;if(n.kind==="bolt"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y+(n.target.def.flying?0:.5),n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),u=18*i;n.age+=i,n.mesh.lookAt(n.tx,n.ty,n.tz),n.mesh.scale.setScalar(.7+n.age*2.2),c<=u+.3?(s=!0,n.target.alive&&(us(n.target,n.dmg,n.src),Yr.emit(n.tx,n.ty+.3,n.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),Fe.hit())):r.set(r.x+a/c*u,r.y+o/c*u,r.z+l/c*u)}else if(n.kind==="shell"){n.t+=i/n.dur;const r=Math.min(1,n.t);if(n.mesh.position.set(n.sx+(n.ex-n.sx)*r,n.sy+(n.ey-n.sy)*r+Math.sin(Math.PI*r)*(n.arc||5),n.sz+(n.ez-n.sz)*r),n.mesh.rotation.set(r*9,r*5,0),n.t>=1){s=!0;for(const a of bn){if(!a.alive||a.def.flying)continue;const o=Math.hypot(a.x-n.ex,a.z-n.ez);o<n.splash&&us(a,n.dmg*(o<n.splash*.4?1:.6),n.src)}Be.emit(n.ex,n.ey+.3,n.ez,{n:26,color:n.pizza?"#ff7040":"#ffd060",speed:5,up:5,life:.7,gravity:12}),Yr.emit(n.ex,n.ey+.3,n.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),Fe.crunch(),On=Math.max(On,.12)}}else if(n.kind==="bubble"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y,n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),u=13*i;n.mesh.scale.setScalar(1+Math.sin(K.time*12)*.06),c<=u+.3?(s=!0,n.target.alive&&(us(n.target,n.dmg,n.src),n.target.trap=Math.max(n.target.trap||0,n.trap*Math.min(1,((t=n.target.def.resist)==null?void 0:t.bubble)??1))),Be.emit(n.tx,n.ty,n.tz,{n:6,color:"#dff6ff",speed:2,up:1,life:.35})):r.set(r.x+a/c*u,r.y+o/c*u,r.z+l/c*u)}else if(n.kind==="kite"){n.t+=i;const r=n.mesh.position;if(Ln.includes(n.tower)||(n.phase="back"),n.phase==="out"){const a=n.tx-r.x,o=n.tz-r.z,l=Math.hypot(a,o),c=9*i;r.y+=(4.2-r.y)*Math.min(1,i*2),l<c?(n.phase="hover",n.t=0):(r.x+=a/l*c,r.z+=o/l*c)}else if(n.phase==="hover"){if(r.x=n.tx+Math.sin(K.time*1.7)*.6,r.z=n.tz+Math.cos(K.time*1.3)*.4,r.y=4.2+Math.sin(K.time*2.3)*.3,n.tick-=i,n.tick<=0){n.tick=.25;for(const a of bn)a.alive&&a.def.flying&&Math.hypot(a.x-r.x,a.z-r.z)<n.zone&&(us(a,n.dmg*.4,n.tower),a.slow=Math.max(a.slow,.4));Be.emit(r.x,r.y-.3,r.z,{n:2,color:"#ffd0b0",speed:1.5,up:-.5,life:.5,gravity:0})}n.t>n.hover&&(n.phase="back")}else{const a=n.sx-r.x,o=n.sz-r.z,l=Math.hypot(a,o),c=11*i;l<c?s=!0:(r.x+=a/l*c,r.z+=o/l*c)}n.mesh.rotation.set(Math.sin(K.time*3)*.2,K.time*.5,Math.cos(K.time*2.5)*.25)}s&&(ge.remove(n.mesh),jn.splice(e,1))}for(let e=tr.length-1;e>=0;e--){const n=tr[e];n.t+=i/(n.dur||.6),n.mesh.scale.setScalar(.5+n.t*n.r),n.mesh.material.opacity=.7*(1-n.t),n.t>=1&&(ge.remove(n.mesh),n.mesh.material.dispose(),tr.splice(e,1))}}function B_(i){var t,e;for(const n of bn){if(!n.alive)continue;n.phase+=i*n.def.anim;const s=n.slow>0?.5:1;n.slow-=i;let r=n.def.speed*s*(n.speedMul||1);n.trap>0?(n.trap-=i,r*=.15,n.bubbleFx||(n.bubbleFx=rf(),n.bubbleFx.scale.setScalar(3.2),n.mesh.add(n.bubbleFx)),n.bubbleFx.visible=!0):n.bubbleFx&&(n.bubbleFx.visible=!1);const a=n.mesh.userData.body;if(n.def.flying){const l=kt.lighthouse.pos;let c=l.x-n.x,u=l.z-n.z;const h=Math.hypot(k.x-n.x,k.z-n.z);let f=n.trap>0?1.1:n.def.alt||4.2;if(n.def.swoop&&h<6&&k.stun<=0&&n.hitCd<=0&&!(n.trap>0)){const m=Math.hypot(c,u);c=c/m*.5+(k.x-n.x)/h*.9,u=u/m*.5+(k.z-n.z)/h*.9,f=1.5}n.hitCd-=i;const d=Math.hypot(c,u)||1;n.x+=c/d*r*i,n.z+=u/d*r*i;const v=Math.max(kt.heightAt(n.x,n.z),0);n.y+=(v+f-n.y)*Math.min(1,i*2.5),n.mesh.rotation.y=Math.atan2(-c,-u);const x=n.mesh.userData;if((t=x.wings)==null||t.forEach((m,p)=>m.rotation.z=Math.sin(n.phase)*.7*(p?-1:1)),(e=x.rotors)==null||e.forEach(m=>m.rotation.y+=i*40),x.rotor&&(x.rotor.rotation.y+=i*30,x.tail.rotation.x+=i*30),a.position.y=Math.sin(n.phase*.5)*(n.type==="balloon"?.3:.15),n.def.blind&&(n.blindCd=(n.blindCd??n.def.blind.every*.5)-i,x.beam&&(x.beam.visible=n.blindCd>n.def.blind.every-.8),n.blindCd<=0)){n.blindCd=n.def.blind.every;const m=$r(Ln,n.x,n.z,n.def.blind.range);m&&(m.blind=n.def.blind.dur,sn(`${n.def.name} blendet ${m.def.name}!`)),Math.hypot(k.x-n.x,k.z-n.z)<5&&Zl(Ht.airStress,n.x,n.z,!0)}n.def.swoop&&h<1.3&&Math.abs(n.y-dn.position.y-1)<1.4&&k.stun<=0&&n.hitCd<=0&&G_(n),Math.hypot(l.x-n.x,l.z-n.z)<3.4&&au(n)}else{const[l,c,u]=Mn.dir(n.x,n.z);n.remain=u;const h=kt.lighthouse.pos,f=Math.hypot(h.x-n.x,h.z-n.z);if(f<4.3||u<.6){au(n);continue}let d=l,v=c;!d&&!v&&(d=(h.x-n.x)/f,v=(h.z-n.z)/f),n.hx=(n.hx||0)+(d-(n.hx||0))*Math.min(1,i*6),n.hz=(n.hz||0)+(v-(n.hz||0))*Math.min(1,i*6);const x=Math.hypot(n.hx,n.hz)||1,m=n.lane*Math.min(1,f/10);n.x+=n.hx/x*r*i+-n.hz/x*m*i*.5,n.z+=n.hz/x*r*i+n.hx/x*m*i*.5,n.y=kt.heightAt(n.x,n.z),n.mesh.rotation.y=Math.atan2(-n.hx,-n.hz),k.inv<=0&&k.faint<=0&&Math.abs(k.x-n.x)<1.2&&Math.abs(k.z-n.z)<1.2&&Math.hypot(k.x-n.x,k.z-n.z)<1.1&&Zl(n.def.stress??10,n.x,n.z),n.type==="clerk"?(a.position.y=Math.abs(Math.sin(n.phase))*.12,a.rotation.z=Math.sin(n.phase)*.06,n.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(n.phase*.5))*.25):n.type==="tank"?(a.position.y=Math.abs(Math.sin(n.phase))*.05,a.rotation.z=Math.sin(n.phase)*.07):n.type==="swarm"?(a.position.y=Math.abs(Math.sin(n.phase))*.14,a.rotation.y=Math.sin(n.phase*.5)*.3):n.type==="complainer"?(a.position.y=Math.abs(Math.sin(n.phase))*.16,n.mesh.userData.arm.rotation.z=Math.sin(n.phase*.5)*.4):(a.position.y=Math.abs(Math.sin(n.phase))*.08,a.rotation.z=Math.sin(n.phase)*.05)}n.mesh.position.set(n.x,n.y,n.z),n.slow>0&&Math.random()<i*6&&Be.emit(n.x,n.y+.8,n.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const o=n.mesh.userData.hpBar;if(o.visible){o.quaternion.copy(We.quaternion),o.quaternion.premultiply(n.mesh.quaternion.clone().invert());const l=Math.max(0,n.hp/n.maxHp),c=n.mesh.userData.hpFg;c.scale.x=.96*l,c.position.x=-.48*(1-l),c.material.color.setHSL(.33*(1-l),.7,.55)}}for(let n=bn.length-1;n>=0;n--)bn[n].alive||bn.splice(n,1)}function au(i){K.leaks[i.type]=(K.leaks[i.type]||0)+1,i.alive=!1,ge.remove(i.mesh),K.lights=Math.max(0,K.lights-1),kt.lighthouse.setLights(K.lights),In($e.lights,"lights",K.lights,"bad");const t=kt.lighthouse.flamePos(K.lights);Yr.emit(t.x,t.y,t.z,{n:8,color:"#b8b4b0",speed:.6,up:1.4,life:1.8,gravity:-.4}),sn(`${i.def.name} slukket litt glød!`),Fe.lose(),On=.3,K.lights<=0&&Mf(!1)}const nr=[],Qn=document.createElement("div");Qn.id="chillbar";Qn.innerHTML="<i></i>";document.body.appendChild(Qn);let ou=0;function Dc(i){const t=document.createElement("div");t.className="pop-emoji",t.textContent=i,Ue.set(k.x,dn.position.y+2.6,k.z).project(We),t.style.left=`${(Ue.x*.5+.5)*innerWidth}px`,t.style.top=`${(-Ue.y*.5+.5)*innerHeight}px`,document.body.appendChild(t),setTimeout(()=>t.remove(),900)}function Zl(i,t,e,n=!1){if(!(k.faint>0||k.inv>0)){if(k.chill=Math.max(0,k.chill-i),k.inv=Ht.stressInvuln,!n){const s=k.x-t,r=k.z-e,a=Math.hypot(s,r)||1;k.vx+=s/a*Ht.stressPush,k.vz+=r/a*Ht.stressPush,k.goal=null}Be.emit(k.x,dn.position.y+1.4,k.z,{n:8,color:"#ff6a5a",speed:2,up:1.5,life:.4}),Dc("😓"),Qn.classList.remove("hit"),Qn.offsetWidth,Qn.classList.add("hit"),In($e.chill,"chillBad",Math.random(),"bad"),k.chill<=0&&k_()}}function k_(){k.faint=Ht.faintTime,k.stun=Ht.faintTime,k.faints++,k.goal=null,k.vx=k.vz=0;const i=Math.floor(K.embers*Ht.faintLoss);i>0&&(K.embers-=i,Rc(k.x,dn.position.y+1,k.z,i,!1,1.6)),k.carrying&&(k.carrying=!1),Dc("😵"),sn(`😵 Vokteren besvimte av stress! Våkner ved fyret om ${Ht.faintTime} s`),Fe.stun()}function xf(i,t){const e=ef();e.scale.setScalar(1.8),e.position.set(i,kt.heightAt(i,t)+.5,t),ge.add(e),nr.push({mesh:e,x:i,z:t,life:Ht.bagLife})}function V_(i){k.inv-=i;const t=kt.lighthouse.pos;k.faint>0?(k.faint-=i,k.faint<=0&&(k.x=t.x+1,k.z=t.z+7.5,k.vx=k.vz=0,k.stun=0,k.chill=Ht.chillMax*Ht.wakeChill,k.inv=Ht.stressInvuln*2,Be.emit(k.x,kt.heightAt(k.x,k.z)+1,k.z,{n:14,color:"#9fffb0",speed:2,up:2,life:.7}))):Math.hypot(t.x-k.x,t.z-k.z)<Ht.regenReach&&(k.chill=Math.min(Ht.chillMax,k.chill+Ht.regen*i));for(let s=nr.length-1;s>=0;s--){const r=nr[s];r.life-=i,r.mesh.rotation.y+=i*1.5,r.mesh.position.y=kt.heightAt(r.x,r.z)+.5+Math.sin(K.time*3+s)*.12,r.mesh.visible=r.life>4||Math.sin(r.life*12)>0,k.faint<=0&&Math.hypot(r.x-k.x,r.z-k.z)<1.4&&(k.chill=Math.min(Ht.chillMax,k.chill+Ht.bagHeal),sn(`🥔 Chips! +${Ht.bagHeal} chill`),Dc("😌"),Fe.pickup(),r.life=0),r.life<=0&&(ge.remove(r.mesh),nr.splice(s,1))}const e=Math.round(k.chill);In($e.chill,"chill",e),$e.chill.classList.toggle("low",e<30),e!==ou&&(ou=e,Qn.firstChild.style.width=`${100*k.chill/Ht.chillMax}%`,Qn.classList.toggle("low",e<30));const n=(e<Ht.chillMax||k.faint>0)&&K.phase!=="title";Qn.style.display=n?"block":"none",n&&(Ue.set(k.x,dn.position.y+2.3,k.z).project(We),Qn.style.left=`${(Ue.x*.5+.5)*innerWidth}px`,Qn.style.top=`${(-Ue.y*.5+.5)*innerHeight}px`)}function G_(i){if(Zl(Ht.airStress,i.x,i.z,!0),k.faint>0)return;k.stun=Ht.stunTime,i.hitCd=4;const t=Math.floor(K.embers*Ht.stunLoss);t>0&&(K.embers-=t,Rc(k.x,dn.position.y+1,k.z,t,!1,1.6)),k.carrying&&(k.carrying=!1,sn("Rullepapiret blåste bort!")),Be.emit(k.x,dn.position.y+1.5,k.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),Fe.stun(),On=.2}function H_(i){for(let t=hs.length-1;t>=0;t--){const e=hs[t];e.life-=i,e.phase+=i;const n=Math.max(kt.heightAt(e.x,e.z),.1)+.35;e.settled||(e.vy-=16*i,e.x+=e.vx*i,e.z+=e.vz*i,e.y+=e.vy*i,e.y<=n&&(e.y=n,Math.abs(e.vy)>2.5?(e.vy=-e.vy*.4,e.vx*=.6,e.vz*=.6):e.settled=!0));const s=Math.hypot(k.x-e.x,k.z-e.z);if(k.stun<=0&&s<Ht.magnet){const l=(1-s/Ht.magnet)*14+3;e.x+=(k.x-e.x)/s*l*i,e.z+=(k.z-e.z)/s*l*i,e.settled=!0,e.y=n}const r=e.settled?Math.sin(e.phase*3)*.12:0;e.mesh.position.set(e.x,e.y+r,e.z),e.mesh.rotation.y+=i*3;const a=e.life<5,o=(.8+Math.min(e.value,6)*.08)*(a?.55+.45*(e.life/5):1);if(e.mesh.scale.setScalar(o),e.mesh.visible=!a||Math.sin(e.life*(e.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Be.emit(e.x,e.y+.2,e.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),k.stun<=0&&s<.9)K.embers+=e.value,In($e.embers,"embers",K.embers,"bump"),Be.emit(e.x,e.y+.3,e.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Fe.pickup(),ge.remove(e.mesh),hs.splice(t,1);else if(e.life<=0){const l=Math.max(1,Math.round(e.value*Ht.expiredRefund));K.embers+=l,Be.emit(e.x,e.y,e.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),ge.remove(e.mesh),hs.splice(t,1)}}}let Xa=0,_f="";function sn(i){Xa=2,_f=i,Pi.textContent=""}function lu(i){var x;const t=dn.userData;(K.phase==="prep"||K.phase==="wave")&&V_(i),k.stun-=i,t.stars.visible=k.stun>0,t.stars.rotation.y+=i*6;let e=0,n=0;if(k.stun<=0&&(K.phase==="prep"||K.phase==="wave")){if(oe.move.x||oe.move.z){k.goal=null;const m=Math.cos(Ai),p=Math.sin(Ai);e=oe.move.x*m+oe.move.z*p,n=-oe.move.x*p+oe.move.z*m}else if(k.goal){const m=k.goal,p=m.x-k.x,y=m.z-k.z;if(m.field===void 0){m.field=null;const T=Math.ceil(Math.hypot(p,y)/.5);for(let E=1;E<T;E++)if(!kt.isWalkable(k.x+p*E/T,k.z+y*E/T)){m.field=Mn.walkField(m.x,m.z);break}}const S=m.field?Math.min(m.field.at(k.x,k.z),Math.hypot(p,y)+50):Math.hypot(p,y);m.t+=i;const g=S<.35||m.spot&&Math.hypot(m.spot.x-k.x,m.spot.z-k.z)<m.reach;if(S<m.best-.3&&(m.best=S,m.lastGain=m.t),g||m.t>12||m.t-m.lastGain>1.5)k.goal=null;else{const T=Math.min(1,S/.8),E=m.field&&Math.hypot(p,y)>1.5?m.field.dir(k.x,k.z):null,w=E&&(E[0]||E[1])?E[0]:p/Math.hypot(p,y),A=E&&(E[0]||E[1])?E[1]:y/Math.hypot(p,y);e=w,n=A;for(const _ of kt.colliders){if(m.spot&&_.x===m.spot.x&&_.z===m.spot.z)continue;const C=_.x-k.x,N=_.z-k.z,F=C*w+N*A;if(F<=0||F>_.r+2.2||F>S)continue;const U=-C*A+N*w;if(Math.abs(U)>_.r+.6)continue;const O=(1-Math.abs(U)/(_.r+.6))*1.6*(U>=0?1:-1);e-=-A*O,n-=w*O}const M=Math.hypot(e,n)||1;e=e/M*T,n=n/M*T}}}const r=kt.heightAt(k.x,k.z)<.05,a=Ht.keeperSpeed*(k.carrying?Ht.carrySlow:1)*(r?Ht.wadeSlow:1),o=e*a,l=n*a,c=(x=kt.isIce)!=null&&x.call(kt,k.x,k.z)?1.6:12;k.vx+=(o-k.vx)*Math.min(1,i*c),k.vz+=(l-k.vz)*Math.min(1,i*c);let u=k.x+k.vx*i,h=k.z+k.vz*i;kt.isWalkable(u,h)||(kt.isWalkable(u,k.z)?h=k.z:kt.isWalkable(k.x,h)?u=k.x:(u=k.x,h=k.z));for(const m of kt.colliders){const p=u-m.x,y=h-m.z,S=Math.hypot(p,y),g=m.r+.4;S<g&&S>1e-4&&(u=m.x+p/S*g,h=m.z+y/S*g)}k.x=u,k.z=h;const f=Math.hypot(k.vx,k.vz);if(f>.3){const m=Math.atan2(-k.vx,-k.vz);k.face+=Kl(m,k.face)*Math.min(1,i*12),k.walk+=i*f*2.2}if(dn.rotation.y=k.face,dn.position.set(k.x,Math.max(kt.heightAt(k.x,k.z),-.25),k.z),r&&f>1&&(k.splash=(k.splash||0)-i,k.splash<=0)){k.splash=.22,Be.emit(k.x,.15,k.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const m=nf();m.position.set(k.x,.1,k.z),m.material.color.set("#f4fdff"),ge.add(m),tr.push({mesh:m,t:0,r:1.6,dur:.9})}const d=Math.sin(k.walk)*Math.min(1,f/3);t.legs[0].position.z=d*.18,t.legs[1].position.z=-d*.18,t.body.position.y=Math.abs(d)*.08;const v=f<.3?Math.sin(K.time*2.2)*.025:0;t.body.scale.set(1-v*.5,1+v,1-v*.5),t.body.rotation.z=k.faint>0?1.45:k.stun>0?.5:d*.04,t.lanternArm.rotation.x=-d*.35,t.carried.visible=k.carrying,t.carried.rotation.y+=i*2,t.carried.position.y=2.35+Math.sin(K.time*3)*.08,Ec.intensity=5+Math.sin(K.time*11)*.6}function W_(){for(const i of oe.clicks.splice(0)){su.setFromCamera(i,We);const t=su.intersectObject(kt.terrain)[0];if(!t)continue;let e=t.point.x,n=t.point.z;const s=kt.lighthouse.pos,r=$r(kt.plinths,e,n,2.2)||(Math.hypot(s.x-e,s.z-n)<4.5?{x:s.x,z:s.z,big:!0}:null);if(r){const a=r.big?4.3:1.95;let o=k.x-r.x,l=k.z-r.z;const c=Math.hypot(o,l)||1;e=r.x+o/c*a,n=r.z+l/c*a}k.goal={x:e,z:n,t:0,best:1/0,lastGain:0,spot:r,reach:r?r.big?Ht.lighthouseReach-.4:Ht.reach-.25:0},Be.emit(e,kt.heightAt(e,n)+.2,n,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}}function ir(i=!K.paused,t=!1){K.paused=i;const e=oe.labels();se("pause-keys").textContent=`${e.name}: fortsett med ${e.pause} · start på nytt med ${e.restart}`,se("pause").classList.toggle("hidden",!i),se("confirm").classList.toggle("hidden",!t),K.confirming=i&&t}se("btn-resume").addEventListener("click",()=>ir(!1));se("btn-restart").addEventListener("click",()=>ir(!0,!0));se("btn-yes").addEventListener("click",()=>zr());se("btn-no").addEventListener("click",()=>ir(!0,!1));se("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${xn}`});se("btn-lex").addEventListener("click",()=>{const i=se("lex");i.innerHTML||(i.innerHTML=Object.entries(no).filter(([t])=>t!=="lobbyMini").map(([t,e])=>{const{tough:n,weak:s}=gf(e);return`<div class="lex-row"><b>${e.flying?"🪶":"🐾"} ${e.name}</b><small>${e.info||(e.flying?"flyr rett mot fyret":"går langs veien")}</small><span>${n?`🛡️ ${n}`:""} ${s?`💥 ${s}`:""}</span></div>`}).join("")+`<p class="lex-key">🛡️ tåler · 💥 svak mot · ${Object.entries($l).map(([t,e])=>`${e} ${Qs[t].name}`).join(" · ")} · 📒 skjold forfra</p>`),i.classList.toggle("hidden")});function zr(){for(const i of er)i.el.remove();er.length=0;for(const i of[bn,Nr,hs,jn,tr]){for(const t of i)t.mesh&&ge.remove(t.mesh);i.length=0}for(const i of Ln)ge.remove(i.mesh);Ln.length=0;for(const i of kt.plinths)i.tower=null;for(let i=kt.colliders.length-1;i>=0;i--)kt.colliders[i].tower&&kt.colliders.splice(i,1);K.buildMode=!1,k.chargeTower&&ka(k.chargeTower,0),Object.assign(K,{phase:"title",wave:0,timer:0,embers:Ht.startEmbers,lights:Fn,spawnQueue:[],leaks:{},seen:{},waveClock:0,sel:0,paused:!1,confirming:!1}),Object.assign(k,{x:kt.lighthouse.pos.x+1,z:kt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,charge:0,chargeTower:null,goal:null,chill:Ht.chillMax,inv:0,faint:0,faints:0});for(const i of nr)ge.remove(i.mesh);nr.length=0,kt.lighthouse.setLights(Fn),Z_(),On=0,Xa=0,Li={},In($e.lights,"lights",K.lights),In($e.embers,"embers",K.embers),In($e.wave,"wave",0),$e.timer.textContent="",se("pause").classList.add("hidden"),se("confirm").classList.add("hidden"),se("overlay").classList.add("hidden"),oe.clear(),K.phase="title",ao(!0),window.__restarts=(window.__restarts||0)+1}function X_(){const i=oe.device;if(Li.device===i+oe.padKind)return;Li.device=i+oe.padKind;const t=oe.labels();se("touch").classList.toggle("hidden",i!=="touch"||K.phase==="title"),hi.querySelectorAll("button i").forEach((e,n)=>{e.textContent=i==="pad"?n===K.sel?t.build:"":i==="touch"?"":String(n+1)}),Tc.textContent="Neste bølge ▶",Li.sel=-1}function q_(i){if(oe.consume("fps")&&Ac.classList.toggle("hidden"),oe.consume("music")&&Sf(),X_(),K.phase==="title"){["build","carry","next","pause"].some(f=>oe.consume(f))&&ao(),oe.clear();return}if(In($e.embers,"embers",K.embers),!(K.phase==="prep"||K.phase==="wave")){if((K.phase==="won"||K.phase==="lost")&&oe.consume("restart")){zr();return}oe.clear(),hi.classList.add("hidden"),ru("");return}if(oe.consume("restart")){K.confirming?zr():ir(!0,!0);return}if(oe.consume("pause")&&ir(!K.paused),K.confirming){if(oe.consume("build")||oe.consume("next")){zr();return}oe.consume("carry")&&ir(!0,!1)}if(K.paused){oe.clear();return}W_(),oe.consume("next")&&K.phase==="prep"&&(K.timer=0),oe.consume("selPrev")&&(K.sel=(K.sel+Vi.length-1)%Vi.length),oe.consume("selNext")&&(K.sel=(K.sel+1)%Vi.length);const e=$r(kt.plinths,k.x,k.z,Ht.reach,f=>!f.tower),n=$r(Ln,k.x,k.z,Ht.reach),s=kt.lighthouse.pos,r=Math.hypot(s.x-k.x,s.z-k.z)<Ht.lighthouseReach,a=k.stun>0,o=Pc();oe.consume("build")&&!a&&(K.buildMode||e?jl(Vi[K.sel]):K.buildMode=!0),Vi.forEach((f,d)=>{oe.consume("b"+(d+1))&&!a&&(K.sel=d,jl(f))});const l=(K.buildMode||!!e)&&!a&&!k.carrying;z_(l,o,Vi[K.sel]),hi.classList.toggle("hidden",!l),l&&(hi.querySelectorAll("button").forEach((f,d)=>{f.disabled=K.embers<Qs[f.dataset.tower].cost,f.classList.toggle("sel",d===K.sel)}),Li.sel!==K.sel&&oe.device==="pad"&&(Li.sel=K.sel,hi.querySelectorAll("button i").forEach((f,d)=>f.textContent=d===K.sel?oe.labels().build:""))),oe.consume("carry")&&!a&&(!k.carrying&&r?K.embers>=Ht.stoneCost?(K.embers-=Ht.stoneCost,k.carrying=!0,In($e.embers,"embers",K.embers,"bump"),Be.emit(k.x,dn.position.y+2.3,k.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),Fe.stone()):(Fe.deny(),sn(`Rullepapir koster ${Ht.stoneCost} ✦`)):k.carrying&&r?(k.carrying=!1,K.embers+=Ht.stoneCost,Fe.stone(),sn("Rullepapiret er lagt tilbake")):!k.carrying&&K.buildMode?K.buildMode=!1:k.carrying?n||sn("Bær rullepapiret til et tårn"):sn("Rullepapir hentes ved fyret"));const c=k.carrying&&!a&&n&&n.level<3?n:null;c!==k.chargeTower&&(k.chargeTower&&ka(k.chargeTower,0),k.chargeTower=c,k.charge=0),c&&(k.charge+=i/Ht.chargeTime,ka(c,Math.min(1,k.charge)),Math.random()<i*20&&Be.emit(k.x,dn.position.y+2.2,k.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),k.charge>=1&&(c.level+=1,tf(c,c.level),ka(c,0),k.carrying=!1,k.chargeTower=null,k.charge=0,Be.emit(c.x,c.y+1.2,c.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Fe.upgrade(),sn(`${c.def.name} er nå nivå ${c.level}`)));const u=oe.labels();Xa-=i;let h="";if(Xa>0)h=_f;else if(a)h="Moralpanikk! Måka slo deg ut";else if(c)h="Gir tårnet energi … bli stående";else if(k.carrying&&n&&n.level>=3)h="Tårnet er på maks nivå";else if(k.carrying)h="Bær rullepapiret til et tårn";else if(r&&!k.carrying)h=`${u.carry} = hent rullepapir (${Ht.stoneCost} ✦)`;else if(r&&k.carrying)h=`${u.carry} = legg rullepapiret tilbake`;else if(n&&n.level<3)h=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(l&&!o.ok)h=`Ikke lov her: ${o.why} · ${u.carry} = avbryt`;else if(l){const f=`${Qs[Vi[K.sel]].name} (${Qs[Vi[K.sel]].tip})`,d=o.plinth?" (sokkel: +25 % rekkevidde)":"";h=oe.device==="pad"?`${u.sel} = velg tårn · ${u.build} = sett ned ${f}${d}`:oe.device==="touch"?`Trykk på et tårn, eller Bygg = ${f}${d}`:`1 / 2 / 3 eller ${u.build} = sett ned ${f}${d}`}else K.phase==="prep"&&K.wave===0&&(h=`${u.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);ru(h),w_(i)}const ps=new me;{const i=document.createElement("canvas");i.width=64,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,256),t.globalCompositeOperation="destination-in";const n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,256);const s=new Wi(i);for(let r=0;r<6;r++){const a=new Jt(new ni(1,1),new Se({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:ei,depthWrite:!1,depthTest:!1,fog:!1}));a.scale.set(2.5+r%3*1.8,34,1),a.position.set(-22+r*8.5,9,-4+r%2*6),a.rotation.set(-.95,0,.55),a.userData.phase=r*1.3,ps.add(a)}}ps.visible=je.id==="tak";ps.renderOrder=50;ge.add(ps);function Y_(i){ps.position.set(vn.x,0,vn.z),ps.rotation.y=Ai,ps.children.forEach(t=>t.material.opacity=.03+.025*Math.sin(i*.35+t.userData.phase))}let On=0;const Ue=new z,Yo=new z,Xs=new z,Pa=new z,$o=new z,vn=new z(k.x,0,k.z);function $_(i){vn.x+=(k.x-vn.x)*Math.min(1,i*4),vn.z+=(k.z-vn.z)*Math.min(1,i*4),vn.y=dn.position.y;const t=ji?1.15:1,e=oe.zoom*t,n=We.aspect<1.2?1.25:1;Ai+=oe.look;const s=6.6*e*n;We.position.set(vn.x+Math.sin(Ai)*s,vn.y+12.5*e*n,vn.z+Math.cos(Ai)*s),On=Math.max(0,On-i),On>0&&(We.position.x+=(Math.random()-.5)*On*2,We.position.y+=(Math.random()-.5)*On),We.lookAt(vn.x-Math.sin(Ai),vn.y+.5,vn.z-Math.cos(Ai)),We.updateMatrixWorld();let r=0,a=0,o=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([v,x])=>{const m=Ue.set(v,x,.5).unproject(We),p=m.sub(We.position).normalize(),y=p.y<-.05?(vn.y-We.position.y)/p.y:80;return[We.position.x+p.x*Math.min(y,80),We.position.z+p.z*Math.min(y,80)]});for(const[v,x]of l)r+=v/4,a+=x/4;for(const[v,x]of l)o=Math.max(o,Math.hypot(v-r,x-a));const c=ze.clamp(Math.ceil((o+4)/4)*4,16,80);Qe.shadow.camera.right!==c&&(Object.assign(Qe.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),Qe.shadow.camera.updateProjectionMatrix());const u=2*c/Qe.shadow.mapSize.x;Xs.set(Vn.sunDir[0],Vn.sunDir[1],Vn.sunDir[2]).normalize(),Pa.set(0,1,0).cross(Xs).normalize(),$o.copy(Xs).cross(Pa).normalize(),Ue.set(r,vn.y,a);const h=Math.round(Ue.dot(Pa)/u)*u,f=Math.round(Ue.dot($o)/u)*u,d=Ue.dot(Xs);Yo.copy(Pa).multiplyScalar(h).addScaledVector($o,f).addScaledVector(Xs,d),Qe.target.position.copy(Yo),Qe.position.copy(Yo).addScaledVector(Xs,40),Qe.shadow.camera.far=40+c+20,Y_(K.time),D_(),A_(K.paused?0:i)}const jo=je.eruption,Zo=kt.extras.bridges??[];let Cr=0,Hi=null;function j_(i){if(!(!jo||!Zo.length||K.phase!=="wave")){if(Cr+=i,Hi&&Cr>=jo.closed)Hi.setClosed(!1),Hi=null,Mn.setBlock(()=>!1);else if(!Hi&&Cr>=jo.every){Cr=0;const t=Zo[Math.random()*Zo.length|0];t.setClosed(!0),Hi=t,Mn.setBlock((e,n)=>(e-t.x)**2+(n-t.z)**2<2.8*2.8),On=Math.max(On,.35),Fe.boom(),sn("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function Z_(){Hi&&(Hi.setClosed(!1),Mn.setBlock(()=>!1)),Hi=null,Cr=0}function K_(i){if(j_(i),K.phase==="prep")K.timer-=i,$e.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,K.timer))} s`,K.timer<=0&&($e.timer.textContent="",mf());else if(K.phase==="wave"){for(K.waveClock+=i;K.spawnQueue.length&&K.spawnQueue[0].t<=K.waveClock;){const t=K.spawnQueue.shift();Cc(t.type,t.path)}if($e.timer.textContent=`${bn.length+K.spawnQueue.length} monstre igjen`,!K.spawnQueue.length&&!bn.length){if($e.timer.textContent="",K.wave>=wc.length){Mf(!0);return}const t=Ht.waveBonus+K.wave*Ht.waveBonusPer+Math.floor(Math.min(K.embers,300)*Ht.interest);K.embers+=t,In($e.embers,"embers",K.embers,"bump"),sn(`Bølge ${K.wave} slått! +${t} ✦`),pf(Ht.prepTime),we==null||we.setIntensity(0)}}}function Mf(i){K.phase=i?"won":"lost",se("touch").classList.add("hidden"),se("btn-pause").classList.add("hidden"),hi.classList.add("hidden");let t="";if(we==null||we.setIntensity(0),i){Fe.win();const n=Wr();Dx(xn),Wr()>n&&(t=`<p class="lead">🔓 Ny verden låst opp: <b>${pr[xn+1].name}</b>!</p>`)}const e=se("overlay");e.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${K.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${t}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${t?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${K.wave}. Rull opp ermene og prøv igjen.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,e.classList.remove("hidden"),se("btn-again").addEventListener("click",()=>zr()),se("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${xn}`}),t&&se("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${xn+1}`})}let we=null;const cu=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})();function yf(){try{localStorage.setItem("glod-music",JSON.stringify({vol:we.volume,muted:we.muted}))}catch{}}function J_(){const i=lf();we||!i||_n.has("nomusic")||(we=v_(i.ctx,i.noiseBuf,je.id),we.setVolume(cu.vol??.7),we.setMuted(!!cu.muted),we.start(),se("music-vol").value=Math.round(we.volume*100),se("btn-mute").textContent=we.muted?"M: av":"M: på",window.__music=we,window.__audioCtx=i.ctx)}function Sf(){we&&(we.setMuted(!we.muted),se("btn-mute").textContent=we.muted?"M: av":"M: på",yf(),sn(we.muted?"🎶 Musikk av":"🎶 Musikk på"))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const t=lf();t&&t.ctx.state!=="running"&&t.ctx.resume()},{passive:!0});se("music-vol").addEventListener("input",i=>{we&&(we.setVolume(i.target.value/100),yf())});se("btn-mute").addEventListener("click",i=>{i.preventDefault(),Sf()});function ao(i=!1){K.phase==="title"&&(m_(),J_(),we==null||we.setIntensity(0),i&&se("touch").classList.toggle("hidden",oe.device!=="touch"),se("overlay").classList.add("hidden"),ji&&(oe.device="touch"),Li.device=null,se("btn-pause").classList.remove("hidden"),kt.lighthouse.setLights(K.lights),In($e.embers,"embers",K.embers),pf(Ht.firstPrep),cf&&Q_())}se("btn-start").addEventListener("click",ao);{const i=se("worlds"),t=Wr();if(pr.forEach((e,n)=>{const s=document.createElement("button");s.className="world"+(n===xn?" sel":"")+(n>=t?" locked":""),s.innerHTML=`<b>${n>=t?"🔒 ":""}${e.name}</b><small>${n>=t?"Vinn forrige verden for å låse opp":e.blurb}</small>`,s.disabled=n>=t,s.addEventListener("click",()=>{n!==xn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),se("btn-start").textContent=`Tenn gløden på ${je.name}`,je.skyDusk){const e=document.createElement("button");e.id="btn-tod",e.className="tod",e.textContent=fs==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",e.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",fs==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${xn}&tid=${fs==="skumring"?"dag":"skumring"}`}),se("worlds").after(e)}}se("btn-quality").addEventListener("click",()=>ff(mi==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&ff(mi==="high"?"low":"high")});se("btn-quality").textContent=mi==="high"?"Høy":"Lav";se("btn-pause").classList.add("hidden");function Q_(){K.embers=999;const i=kt.lighthouse.pos,t=kt.plinths.slice().sort((e,n)=>Math.hypot(e.x-i.x,e.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((e,n)=>{const s=t[n];k.x=s.x+1.9,k.z=s.z,jl(e),n<3&&(Ln[Ln.length-1].level=n+1,tf(Ln[Ln.length-1],n+1))}),k.x=i.x+1,k.z=i.z+6,k.carrying=!0,K.wave=Number(_n.get("demo"))||4,K.wave-=1,mf(),K.waveClock=6,K.embers=142}const tM=new Ju;let Ko=0,Da=0,La=0;window.__fpsSamples=[];window.__game={S:K,monsters:bn,towers:Ln,embers:hs,world:kt,K:k,renderer:Un,camera:We,input:oe,buildSpot:()=>Pc(),spawnMonster:Cc,projectiles:jn,damage:us,dropBag:(i,t)=>xf(i,t),ghost:Ci,get camYaw(){return Ai}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function bf(){requestAnimationFrame(bf);const i=tM.getDelta(),t=Math.min(i,.05);K.paused||(K.time+=t),oe.update(t),K.paused||(kt.update(K.time),S_.update(K.time));for(let e=0;e<M_&&!K.paused&&(K.phase==="prep"||K.phase==="wave");e++)e>0&&(K.time+=t,lu(t)),K_(t),B_(t),F_(t),O_(t),H_(t),U_(t);if(K.paused||lu(t),q_(t),!K.paused){if(Be.update(t),Math.random()<t*(4+10*(K.lights/Fn))){const e=kt.lighthouse.tip;Yr.emit(e.x,e.y,e.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}Yr.update(t)}if($_(t),Un.info.reset(),io.render(t),Ko++,Da+=i,Da>=.5){const e=Ko/Da;window.__fpsSamples.push(e),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),Ac.textContent=`${e.toFixed(0)} fps · ${Un.info.render.calls} dc`,La=e<(ji?28:45)?La+1:0,La>=6&&cs>1&&(cs=Math.max(1,cs-.25),Un.setPixelRatio(cs),so(),La=0),Ko=0,Da=0}}bf();cf&&_n.has("autostart")&&ao();function Kl(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}
