(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lc="170",Jf=0,Vc=1,Qf=2,Eu=1,Tu=2,Ti=3,Yi=0,En=1,Xe=2,ln=0,Xi=1,ni=2,Hc=3,Wc=4,Au=5,Kn=100,td=101,ed=102,nd=103,id=104,Ar=200,sd=201,rd=202,ad=203,il=204,sl=205,rl=206,od=207,al=208,ld=209,cd=210,hd=211,ud=212,fd=213,dd=214,ol=0,ll=1,cl=2,ir=3,hl=4,ul=5,fl=6,dl=7,cc=0,pd=1,md=2,qi=0,Cu=1,Ru=2,Pu=3,hc=4,gd=5,Du=6,Lu=7,Iu=300,sr=301,rr=302,pl=303,ml=304,Ka=306,di=1e3,cs=1001,gl=1002,hn=1003,vd=1004,na=1005,ci=1006,uo=1007,hs=1008,pi=1009,Uu=1010,Nu=1011,kr=1012,uc=1013,xs=1014,ei=1015,Gn=1016,fc=1017,dc=1018,_s=1020,zu=35902,Fu=1021,Ou=1022,Bn=1023,ku=1024,Bu=1025,js=1026,Ms=1027,Ja=1028,pc=1029,Gu=1030,mc=1031,gc=1033,ka=33776,Ba=33777,Ga=33778,Va=33779,vl=35840,xl=35841,_l=35842,Ml=35843,yl=36196,Sl=37492,bl=37496,wl=37808,El=37809,Tl=37810,Al=37811,Cl=37812,Rl=37813,Pl=37814,Dl=37815,Ll=37816,Il=37817,Ul=37818,Nl=37819,zl=37820,Fl=37821,Ha=36492,Ol=36494,kl=36495,Vu=36283,Bl=36284,Gl=36285,Vl=36286,xd=3200,_d=3201,vc=0,Md=1,Vi="",cn="srgb",fr="srgb-linear",Qa="linear",Pe="srgb",Cs=7680,Xc=519,yd=512,Sd=513,bd=514,Hu=515,wd=516,Ed=517,Td=518,Ad=519,qc=35044,Yc=35048,$c="300 es",Ri=2e3,Ya=2001;class dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const Dr=Math.PI/180,Br=180/Math.PI;function bs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function an(i,t,e){return Math.max(t,Math.min(e,i))}function xc(i,t){return(i%t+t)%t}function Cd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Rd(i,t,e){return i!==t?(e-i)/(t-i):0}function Lr(i,t,e){return(1-e)*i+e*t}function Pd(i,t,e,n){return Lr(i,t,1-Math.exp(-e*n))}function Dd(i,t=1){return t-Math.abs(xc(i,t*2)-t)}function Ld(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Id(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ud(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Nd(i,t){return i+Math.random()*(t-i)}function zd(i){return i*(.5-Math.random())}function Fd(i){i!==void 0&&(jc=i);let t=jc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Od(i){return i*Dr}function kd(i){return i*Br}function Bd(i){return(i&i-1)===0&&i!==0}function Gd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const be={DEG2RAD:Dr,RAD2DEG:Br,generateUUID:bs,clamp:an,euclideanModulo:xc,mapLinear:Cd,inverseLerp:Rd,lerp:Lr,damp:Pd,pingpong:Dd,smoothstep:Ld,smootherstep:Id,randInt:Ud,randFloat:Nd,randFloatSpread:zd,seededRandom:Fd,degToRad:Od,radToDeg:kd,isPowerOfTwo:Bd,ceilPowerOfTwo:Gd,floorPowerOfTwo:Vd,setQuaternionFromProperEuler:Hd,normalize:yn,denormalize:qs};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class me{constructor(t,e,n,s,r,a,o,l,c){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],v=n[8],x=s[0],m=s[3],p=s[6],y=s[1],S=s[4],g=s[7],T=s[2],E=s[5],w=s[8];return r[0]=a*x+o*y+l*T,r[3]=a*m+o*S+l*E,r[6]=a*p+o*g+l*w,r[1]=c*x+h*y+u*T,r[4]=c*m+h*S+u*E,r[7]=c*p+h*g+u*w,r[2]=f*x+d*y+v*T,r[5]=f*m+d*S+v*E,r[8]=f*p+d*g+v*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,v=e*u+n*f+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(fo.makeScale(t,e)),this}rotate(t){return this.premultiply(fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fo=new me;function Wu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wd(){const i=$a("canvas");return i.style.display="block",i}const Zc={};function Cr(i){i in Zc||(Zc[i]=!0,console.warn(i))}function Xd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function qd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Se={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Pe&&(i.r=Di(i.r),i.g=Di(i.g),i.b=Di(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Pe&&(i.r=Zs(i.r),i.g=Zs(i.g),i.b=Zs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vi?Qa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Kc=[.64,.33,.3,.6,.15,.06],Jc=[.2126,.7152,.0722],Qc=[.3127,.329],th=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Se.define({[fr]:{primaries:Kc,whitePoint:Qc,transfer:Qa,toXYZ:th,fromXYZ:eh,luminanceCoefficients:Jc,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:Kc,whitePoint:Qc,transfer:Pe,toXYZ:th,fromXYZ:eh,luminanceCoefficients:Jc,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}});let Rs;class $d{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rs===void 0&&(Rs=$a("canvas")),Rs.width=t.width,Rs.height=t.height;const n=Rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$a("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jd=0;class Xu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=bs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(po(s[a].image)):r.push(po(s[a]))}else r=po(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$d.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zd=0;class vn extends dr{constructor(t=vn.DEFAULT_IMAGE,e=vn.DEFAULT_MAPPING,n=cs,s=cs,r=ci,a=hs,o=Bn,l=pi,c=vn.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=bs(),this.name="",this.source=new Xu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case di:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case di:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Iu;vn.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,s=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],v=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,g=(d+1)/2,T=(p+1)/2,E=(h+f)/4,w=(u+x)/4,C=(v+m)/4;return S>g&&S>T?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=w/n):g>T?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=E/s,r=C/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-v)*(m-v)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kd extends dr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new vn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Kd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qu extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jd extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],v=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=v,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==v){let m=1-o;const p=l*f+c*d+h*v+u*x,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const T=Math.sqrt(S),E=Math.atan2(T,p*y);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T}const g=o*y;if(l=l*m+f*g,c=c*m+d*g,h=h*m+v*g,u=u*m+x*g,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],v=r[a+3];return t[e]=o*v+h*u+l*d-c*f,t[e+1]=l*v+h*f+c*u-o*d,t[e+2]=c*v+h*d+o*f-l*u,t[e+3]=h*v-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u-f*d*v;break;case"YXZ":this._x=f*h*u+c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u+f*d*v;break;case"ZXY":this._x=f*h*u-c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u-f*d*v;break;case"ZYX":this._x=f*h*u-c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u+f*d*v;break;case"YZX":this._x=f*h*u+c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u-f*d*v;break;case"XZY":this._x=f*h*u-c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mo.copy(this).projectOnVector(t),this.sub(mo)}reflect(t){return this.sub(mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new O,nh=new Kr;class ws{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),sa.subVectors(this.max,Mr),Ps.subVectors(t.a,Mr),Ds.subVectors(t.b,Mr),Ls.subVectors(t.c,Mr),Ni.subVectors(Ds,Ps),zi.subVectors(Ls,Ds),Ji.subVectors(Ps,Ls);let e=[0,-Ni.z,Ni.y,0,-zi.z,zi.y,0,-Ji.z,Ji.y,Ni.z,0,-Ni.x,zi.z,0,-zi.x,Ji.z,0,-Ji.x,-Ni.y,Ni.x,0,-zi.y,zi.x,0,-Ji.y,Ji.x,0];return!go(e,Ps,Ds,Ls,sa)||(e=[1,0,0,0,1,0,0,0,1],!go(e,Ps,Ds,Ls,sa))?!1:(ra.crossVectors(Ni,zi),e=[ra.x,ra.y,ra.z],go(e,Ps,Ds,Ls,sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _i=[new O,new O,new O,new O,new O,new O,new O,new O],Yn=new O,ia=new ws,Ps=new O,Ds=new O,Ls=new O,Ni=new O,zi=new O,Ji=new O,Mr=new O,sa=new O,ra=new O,Qi=new O;function go(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qi.fromArray(i,r);const o=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=t.dot(Qi),c=e.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Qd=new ws,yr=new O,vo=new O;class pr{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);const e=yr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(vo)),this.expandByPoint(yr.copy(t.center).sub(vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new O,xo=new O,aa=new O,Fi=new O,_o=new O,oa=new O,Mo=new O;class _c{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xo.copy(t).add(e).multiplyScalar(.5),aa.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(xo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(aa),o=Fi.dot(this.direction),l=-Fi.dot(aa),c=Fi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,v;if(h>0)if(u=a*l-o,f=a*o-l,v=r*h,u>=0)if(f>=-v)if(f<=v){const x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xo).addScaledVector(aa,f),d}intersectSphere(t,e){Mi.subVectors(t.center,this.origin);const n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,s,r){_o.subVectors(e,t),oa.subVectors(n,t),Mo.crossVectors(_o,oa);let a=this.direction.dot(Mo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,t);const l=o*this.direction.dot(oa.crossVectors(Fi,oa));if(l<0)return null;const c=o*this.direction.dot(_o.cross(Fi));if(c<0||l+c>a)return null;const h=-o*Fi.dot(Mo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,v,x,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,v,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,v,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=v,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),r=1/Is.setFromMatrixColumn(t,1).length(),a=1/Is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,v=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+v*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=v+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,v=c*h,x=c*u;e[0]=f+x*o,e[4]=v*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-v,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,v=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=v+d*o,e[1]=d+v*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,v=o*h,x=o*u;e[0]=l*h,e[4]=v*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,v=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=v*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+v,e[10]=f-x*u}else if(t.order==="XZY"){const f=a*l,d=a*c,v=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-v,e[2]=v*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tp,t,ep)}lookAt(t,e,n){const s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Oi.crossVectors(n,Pn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Oi.crossVectors(n,Pn)),Oi.normalize(),la.crossVectors(Pn,Oi),s[0]=Oi.x,s[4]=la.x,s[8]=Pn.x,s[1]=Oi.y,s[5]=la.y,s[9]=Pn.y,s[2]=Oi.z,s[6]=la.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],v=n[2],x=n[6],m=n[10],p=n[14],y=n[3],S=n[7],g=n[11],T=n[15],E=s[0],w=s[4],C=s[8],M=s[12],_=s[1],A=s[5],D=s[9],G=s[13],L=s[2],k=s[6],V=s[10],X=s[14],B=s[3],j=s[7],at=s[11],lt=s[15];return r[0]=a*E+o*_+l*L+c*B,r[4]=a*w+o*A+l*k+c*j,r[8]=a*C+o*D+l*V+c*at,r[12]=a*M+o*G+l*X+c*lt,r[1]=h*E+u*_+f*L+d*B,r[5]=h*w+u*A+f*k+d*j,r[9]=h*C+u*D+f*V+d*at,r[13]=h*M+u*G+f*X+d*lt,r[2]=v*E+x*_+m*L+p*B,r[6]=v*w+x*A+m*k+p*j,r[10]=v*C+x*D+m*V+p*at,r[14]=v*M+x*G+m*X+p*lt,r[3]=y*E+S*_+g*L+T*B,r[7]=y*w+S*A+g*k+T*j,r[11]=y*C+S*D+g*V+T*at,r[15]=y*M+S*G+g*X+T*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],v=t[3],x=t[7],m=t[11],p=t[15];return v*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+x*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],v=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*f*c+x*l*d-o*m*d-u*l*p+o*f*p,S=v*f*c-h*m*c-v*l*d+a*m*d+h*l*p-a*f*p,g=h*x*c-v*u*c+v*o*d-a*x*d-h*o*p+a*u*p,T=v*u*l-h*x*l-v*o*f+a*x*f+h*o*m-a*u*m,E=e*y+n*S+s*g+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=y*w,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*w,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*w,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*w,t[4]=S*w,t[5]=(h*m*r-v*f*r+v*s*d-e*m*d-h*s*p+e*f*p)*w,t[6]=(v*l*r-a*m*r-v*s*c+e*m*c+a*s*p-e*l*p)*w,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*w,t[8]=g*w,t[9]=(v*u*r-h*x*r-v*n*d+e*x*d+h*n*p-e*u*p)*w,t[10]=(a*x*r-v*o*r+v*n*c-e*x*c-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*w,t[12]=T*w,t[13]=(h*x*s-v*u*s+v*n*f-e*x*f-h*n*m+e*u*m)*w,t[14]=(v*o*s-a*x*s-v*n*l+e*x*l+a*n*m-e*o*m)*w,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,v=r*u,x=a*h,m=a*u,p=o*u,y=l*c,S=l*h,g=l*u,T=n.x,E=n.y,w=n.z;return s[0]=(1-(x+p))*T,s[1]=(d+g)*T,s[2]=(v-S)*T,s[3]=0,s[4]=(d-g)*E,s[5]=(1-(f+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(v+S)*w,s[9]=(m-y)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Is.set(s[0],s[1],s[2]).length();const a=Is.set(s[4],s[5],s[6]).length(),o=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$n.copy(this);const c=1/r,h=1/a,u=1/o;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,e.setFromRotationMatrix($n),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ri){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,v;if(o===Ri)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ya)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ri){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,d=(n+s)*h;let v,x;if(o===Ri)v=(a+r)*u,x=-2*u;else if(o===Ya)v=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Is=new O,$n=new we,tp=new O(0,0,0),ep=new O(1,1,1),Oi=new O,la=new O,Pn=new O,ih=new we,sh=new Kr;class mi{constructor(t=0,e=0,n=0,s=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let np=0;const rh=new O,Us=new Kr,yi=new we,ca=new O,Sr=new O,ip=new O,sp=new Kr,ah=new O(1,0,0),oh=new O(0,1,0),lh=new O(0,0,1),ch={type:"added"},rp={type:"removed"},Ns={type:"childadded",child:null},yo={type:"childremoved",child:null};class Fe extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new O,e=new mi,n=new Kr,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new me}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(ah,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ah,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ca.copy(t):ca.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Sr,ca,this.up):yi.lookAt(ca,Sr,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(yi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ch),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rp),yo.child=t,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ch),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new O(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new O,Si=new O,So=new O,bi=new O,zs=new O,Fs=new O,hh=new O,bo=new O,wo=new O,Eo=new O,To=new Le,Ao=new Le,Co=new Le;class Jn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),jn.subVectors(t,e),s.cross(jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){jn.subVectors(s,e),Si.subVectors(n,e),So.subVectors(t,e);const a=jn.dot(jn),o=jn.dot(Si),l=jn.dot(So),c=Si.dot(Si),h=Si.dot(So),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,v=(a*h-o*l)*f;return r.set(1-d-v,v,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(a,bi.y),l.addScaledVector(o,bi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return To.setScalar(0),Ao.setScalar(0),Co.setScalar(0),To.fromBufferAttribute(t,e),Ao.fromBufferAttribute(t,n),Co.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(To,r.x),a.addScaledVector(Ao,r.y),a.addScaledVector(Co,r.z),a}static isFrontFacing(t,e,n,s){return jn.subVectors(n,e),Si.subVectors(t,e),jn.cross(Si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),jn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Jn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Jn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Jn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Jn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Jn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;zs.subVectors(s,n),Fs.subVectors(r,n),bo.subVectors(t,n);const l=zs.dot(bo),c=Fs.dot(bo);if(l<=0&&c<=0)return e.copy(n);wo.subVectors(t,s);const h=zs.dot(wo),u=Fs.dot(wo);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(zs,a);Eo.subVectors(t,r);const d=zs.dot(Eo),v=Fs.dot(Eo);if(v>=0&&d<=v)return e.copy(r);const x=d*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Fs,o);const m=h*v-d*u;if(m<=0&&u-h>=0&&d-v>=0)return hh.subVectors(r,s),o=(u-h)/(u-h+(d-v)),e.copy(s).addScaledVector(hh,o);const p=1/(m+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(zs,a).addScaledVector(Fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Ro(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Se.workingColorSpace){if(t=xc(t,1),e=an(e,0,1),n=an(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ro(a,r,t+1/3),this.g=Ro(a,r,t),this.b=Ro(a,r,t-1/3)}return Se.toWorkingColorSpace(this,s),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=Yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return Se.fromWorkingColorSpace(pn.copy(this),t),Math.round(an(pn.r*255,0,255))*65536+Math.round(an(pn.g*255,0,255))*256+Math.round(an(pn.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,s=pn.g,r=pn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=cn){Se.fromWorkingColorSpace(pn.copy(this),t);const e=pn.r,n=pn.g,s=pn.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(ha);const n=Lr(ki.h,ha.h,e),s=Lr(ki.s,ha.s,e),r=Lr(ki.l,ha.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Ct;Ct.NAMES=Yu;let ap=0;class Es extends dr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=bs(),this.name="",this.blending=Xi,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=sl,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==il&&(n.blendSrc=this.blendSrc),this.blendDst!==sl&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Te extends Es{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ye=new O,ua=new St;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ua.fromBufferAttribute(this,e),ua.applyMatrix3(t),this.setXY(e,ua.x,ua.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),s=yn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),s=yn(s,this.array),r=yn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qc&&(t.usage=this.usage),t}}class $u extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ju extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let op=0;const Fn=new we,Po=new Fe,Os=new O,Dn=new ws,br=new ws,sn=new O;class Ce extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wu(t)?ju:$u)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return Po.lookAt(t),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];br.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Dn.min,br.min),Dn.expandByPoint(sn),sn.addVectors(Dn.max,br.max),Dn.expandByPoint(sn)):(Dn.expandByPoint(br.min),Dn.expandByPoint(br.max))}Dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(sn));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)sn.fromBufferAttribute(o,c),l&&(Os.fromBufferAttribute(t,c),sn.add(Os)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new O,l[C]=new O;const c=new O,h=new O,u=new O,f=new St,d=new St,v=new St,x=new O,m=new O;function p(C,M,_){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,M),v.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),v.sub(f);const A=1/(d.x*v.y-v.x*d.y);isFinite(A)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-d.y).multiplyScalar(A),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(A),o[C].add(x),o[M].add(x),o[_].add(x),l[C].add(m),l[M].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,M=y.length;C<M;++C){const _=y[C],A=_.start,D=_.count;for(let G=A,L=A+D;G<L;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const S=new O,g=new O,T=new O,E=new O;function w(C){T.fromBufferAttribute(s,C),E.copy(T);const M=o[C];S.copy(M),S.sub(T.multiplyScalar(T.dot(M))).normalize(),g.crossVectors(E,M);const A=g.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,A)}for(let C=0,M=y.length;C<M;++C){const _=y[C],A=_.start,D=_.count;for(let G=A,L=A+D;G<L;G+=3)w(t.getX(G+0)),w(t.getX(G+1)),w(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){const v=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[v++]=c[d++]}return new Ue(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new we,ts=new _c,fa=new pr,fh=new O,da=new O,pa=new O,ma=new O,Do=new O,ga=new O,dh=new O,va=new O;class se extends Fe{constructor(t=new Ce,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Do.fromBufferAttribute(u,t),a?ga.addScaledVector(Do,h):ga.addScaledVector(Do.sub(e),h))}e.add(ga)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(fa.containsPoint(ts.origin)===!1&&(ts.intersectSphere(fa,fh)===null||ts.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(uh.copy(r).invert(),ts.copy(t.ray).applyMatrix4(uh),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],p=a[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let g=y,T=S;g<T;g+=3){const E=o.getX(g),w=o.getX(g+1),C=o.getX(g+2);s=xa(this,p,t,n,c,h,u,E,w,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=v,p=x;m<p;m+=3){const y=o.getX(m),S=o.getX(m+1),g=o.getX(m+2);s=xa(this,a,t,n,c,h,u,y,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],p=a[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let g=y,T=S;g<T;g+=3){const E=g,w=g+1,C=g+2;s=xa(this,p,t,n,c,h,u,E,w,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=v,p=x;m<p;m+=3){const y=m,S=m+1,g=m+2;s=xa(this,a,t,n,c,h,u,y,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function lp(i,t,e,n,s,r,a,o){let l;if(t.side===En?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Yi,o),l===null)return null;va.copy(o),va.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(va);return c<e.near||c>e.far?null:{distance:c,point:va.clone(),object:i}}function xa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,da),i.getVertexPosition(l,pa),i.getVertexPosition(c,ma);const h=lp(i,t,e,n,da,pa,ma,dh);if(h){const u=new O;Jn.getBarycoord(dh,da,pa,ma,u),s&&(h.uv=Jn.getInterpolatedAttribute(s,o,l,c,u,new St)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,o,l,c,u,new St)),a&&(h.normal=Jn.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};Jn.getNormal(da,pa,ma,f.normal),h.face=f,h.barycoord=u}return h}class An extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function v(x,m,p,y,S,g,T,E,w,C,M){const _=g/w,A=T/C,D=g/2,G=T/2,L=E/2,k=w+1,V=C+1;let X=0,B=0;const j=new O;for(let at=0;at<V;at++){const lt=at*A-G;for(let wt=0;wt<k;wt++){const Qt=wt*_-D;j[x]=Qt*y,j[m]=lt*S,j[p]=L,c.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[p]=E>0?1:-1,h.push(j.x,j.y,j.z),u.push(wt/w),u.push(1-at/C),X+=1}}for(let at=0;at<C;at++)for(let lt=0;lt<w;lt++){const wt=f+lt+k*at,Qt=f+lt+k*(at+1),et=f+(lt+1)+k*(at+1),pt=f+(lt+1)+k*at;l.push(wt,Qt,pt),l.push(Qt,et,pt),B+=6}o.addGroup(d,B,M),d+=B,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ar(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Sn(i){const t={};for(let e=0;e<i.length;e++){const n=ar(i[e]);for(const s in n)t[s]=n[s]}return t}function cp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const Qn={clone:ar,merge:Sn};var hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends Es{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ku extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new O,ph=new St,mh=new St;class Ln extends Ku{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,ph,mh),e.subVectors(mh,ph)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ks=-90,Bs=1;class fp extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(ks,Bs,t,e);s.layers=this.layers,this.add(s);const r=new Ln(ks,Bs,t,e);r.layers=this.layers,this.add(r);const a=new Ln(ks,Bs,t,e);a.layers=this.layers,this.add(a);const o=new Ln(ks,Bs,t,e);o.layers=this.layers,this.add(o);const l=new Ln(ks,Bs,t,e);l.layers=this.layers,this.add(l);const c=new Ln(ks,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Ju extends vn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:sr,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dp extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ju(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ci}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new An(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:ln});r.uniforms.tEquirect.value=e;const a=new se(s,r),o=e.minFilter;return e.minFilter===hs&&(e.minFilter=ci),new fp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Lo=new O,pp=new O,mp=new me;class as{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Lo.subVectors(n,e).cross(pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mp.getNormalMatrix(t),s=this.coplanarPoint(Lo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new pr,_a=new O;class yc{constructor(t=new as,e=new as,n=new as,s=new as,r=new as,a=new as){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],v=s[9],x=s[10],m=s[11],p=s[12],y=s[13],S=s[14],g=s[15];if(n[0].setComponents(l-r,f-c,m-d,g-p).normalize(),n[1].setComponents(l+r,f+c,m+d,g+p).normalize(),n[2].setComponents(l+a,f+h,m+v,g+y).normalize(),n[3].setComponents(l-a,f-h,m-v,g-y).normalize(),n[4].setComponents(l-o,f-u,m-x,g-S).normalize(),e===Ri)n[5].setComponents(l+o,f+u,m+x,g+S).normalize();else if(e===Ya)n[5].setComponents(o,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(_a.x=s.normal.x>0?t.max.x:t.min.x,_a.y=s.normal.y>0?t.max.y:t.min.y,_a.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_a)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gp(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<u.length;d++){const v=u[f],x=u[d];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,v=u.length;d<v;d++){const x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Hn extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],v=[],x=[],m=[];for(let p=0;p<h;p++){const y=p*f-a;for(let S=0;S<c;S++){const g=S*u-r;v.push(g,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const S=y+c*p,g=y+c*(p+1),T=y+1+c*(p+1),E=y+1+c*p;d.push(S,g,E),d.push(g,T,E)}this.setIndex(d),this.setAttribute("position",new ue(v,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.widthSegments,t.heightSegments)}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xp=`#ifdef USE_ALPHAHASH
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
#endif`,_p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
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
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ep=`#ifdef USE_BATCHING
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
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pp=`#ifdef USE_IRIDESCENCE
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
#endif`,Dp=`#ifdef USE_BUMPMAP
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
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bp=`#define PI 3.141592653589793
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
} // validated`,Gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vp=`vec3 transformedNormal = objectNormal;
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
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s0=`#ifdef USE_GRADIENTMAP
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
}`,r0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
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
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p0=`PhysicalMaterial material;
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
#endif`,m0=`struct PhysicalMaterial {
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
}`,g0=`
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T0=`#if defined( USE_POINTS_UV )
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
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`#ifdef USE_MORPHTARGETS
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
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k0=`#ifdef USE_NORMALMAP
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
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,wm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Lm=`#define LAMBERT
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
}`,Im=`#define LAMBERT
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
}`,Um=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,zm=`#define NORMAL
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
}`,Fm=`#define NORMAL
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
}`,Om=`#define PHONG
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
}`,km=`#define PHONG
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
}`,Bm=`#define STANDARD
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
}`,Gm=`#define STANDARD
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
}`,Vm=`#define TOON
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
}`,Hm=`#define TOON
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
}`,Wm=`uniform float size;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Ym=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
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
}`,jm=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:vp,alphahash_pars_fragment:xp,alphamap_fragment:_p,alphamap_pars_fragment:Mp,alphatest_fragment:yp,alphatest_pars_fragment:Sp,aomap_fragment:bp,aomap_pars_fragment:wp,batching_pars_vertex:Ep,batching_vertex:Tp,begin_vertex:Ap,beginnormal_vertex:Cp,bsdfs:Rp,iridescence_fragment:Pp,bumpmap_pars_fragment:Dp,clipping_planes_fragment:Lp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Np,color_fragment:zp,color_pars_fragment:Fp,color_pars_vertex:Op,color_vertex:kp,common:Bp,cube_uv_reflection_fragment:Gp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Hp,displacementmap_vertex:Wp,emissivemap_fragment:Xp,emissivemap_pars_fragment:qp,colorspace_fragment:Yp,colorspace_pars_fragment:$p,envmap_fragment:jp,envmap_common_pars_fragment:Zp,envmap_pars_fragment:Kp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:c0,envmap_vertex:Qp,fog_vertex:t0,fog_pars_vertex:e0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:s0,lightmap_pars_fragment:r0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:o0,lights_pars_begin:l0,lights_toon_fragment:h0,lights_toon_pars_fragment:u0,lights_phong_fragment:f0,lights_phong_pars_fragment:d0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:g0,lights_fragment_maps:v0,lights_fragment_end:x0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:S0,map_fragment:b0,map_pars_fragment:w0,map_particle_fragment:E0,map_particle_pars_fragment:T0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:C0,morphinstance_vertex:R0,morphcolor_vertex:P0,morphnormal_vertex:D0,morphtarget_pars_vertex:L0,morphtarget_vertex:I0,normal_fragment_begin:U0,normal_fragment_maps:N0,normal_pars_fragment:z0,normal_pars_vertex:F0,normal_vertex:O0,normalmap_pars_fragment:k0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:G0,clearcoat_pars_fragment:V0,iridescence_pars_fragment:H0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:q0,project_vertex:Y0,dithering_fragment:$0,dithering_pars_fragment:j0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:K0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:Q0,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:am,specularmap_pars_fragment:om,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:fm,uv_pars_vertex:dm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:vm,backgroundCube_vert:xm,backgroundCube_frag:_m,cube_vert:Mm,cube_frag:ym,depth_vert:Sm,depth_frag:bm,distanceRGBA_vert:wm,distanceRGBA_frag:Em,equirect_vert:Tm,equirect_frag:Am,linedashed_vert:Cm,linedashed_frag:Rm,meshbasic_vert:Pm,meshbasic_frag:Dm,meshlambert_vert:Lm,meshlambert_frag:Im,meshmatcap_vert:Um,meshmatcap_frag:Nm,meshnormal_vert:zm,meshnormal_frag:Fm,meshphong_vert:Om,meshphong_frag:km,meshphysical_vert:Bm,meshphysical_frag:Gm,meshtoon_vert:Vm,meshtoon_frag:Hm,points_vert:Wm,points_frag:Xm,shadow_vert:qm,shadow_frag:Ym,sprite_vert:$m,sprite_frag:jm},kt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},li={basic:{uniforms:Sn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Sn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Sn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Sn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Sn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Sn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Sn([kt.points,kt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Sn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Sn([kt.common,kt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Sn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Sn([kt.sprite,kt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Sn([kt.common,kt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Sn([kt.lights,kt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};li.physical={uniforms:Sn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Ma={r:0,b:0,g:0},ns=new mi,Zm=new we;function Km(i,t,e,n,s,r,a){const o=new Ct(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function v(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function x(y){let S=!1;const g=v(y);g===null?p(o,l):g&&g.isColor&&(p(g,1),S=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const g=v(S);g&&(g.isCubeTexture||g.mapping===Ka)?(h===void 0&&(h=new se(new An(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:ar(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ns.copy(S.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(ns)),h.material.toneMapped=Se.getTransfer(g.colorSpace)!==Pe,(u!==g||f!==g.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=g,f=g.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new se(new Hn(2,2),new Ve({name:"BackgroundMaterial",uniforms:ar(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Se.getTransfer(g.colorSpace)!==Pe,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=g,f=g.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(Ma,Zu(i)),n.buffers.color.setClear(Ma.r,Ma.g,Ma.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:m}}function Jm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,A,D,G,L){let k=!1;const V=u(G,D,A);r!==V&&(r=V,c(r.object)),k=d(_,G,D,L),k&&v(_,G,D,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,g(_,A,D,G),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,A,D){const G=D.wireframe===!0;let L=n[_.id];L===void 0&&(L={},n[_.id]=L);let k=L[A.id];k===void 0&&(k={},L[A.id]=k);let V=k[G];return V===void 0&&(V=f(l()),k[G]=V),V}function f(_){const A=[],D=[],G=[];for(let L=0;L<e;L++)A[L]=0,D[L]=0,G[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:G,object:_,attributes:{},index:null}}function d(_,A,D,G){const L=r.attributes,k=A.attributes;let V=0;const X=D.getAttributes();for(const B in X)if(X[B].location>=0){const at=L[B];let lt=k[B];if(lt===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(lt=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(lt=_.instanceColor)),at===void 0||at.attribute!==lt||lt&&at.data!==lt.data)return!0;V++}return r.attributesNum!==V||r.index!==G}function v(_,A,D,G){const L={},k=A.attributes;let V=0;const X=D.getAttributes();for(const B in X)if(X[B].location>=0){let at=k[B];at===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(at=_.instanceColor));const lt={};lt.attribute=at,at&&at.data&&(lt.data=at.data),L[B]=lt,V++}r.attributes=L,r.attributesNum=V,r.index=G}function x(){const _=r.newAttributes;for(let A=0,D=_.length;A<D;A++)_[A]=0}function m(_){p(_,0)}function p(_,A){const D=r.newAttributes,G=r.enabledAttributes,L=r.attributeDivisors;D[_]=1,G[_]===0&&(i.enableVertexAttribArray(_),G[_]=1),L[_]!==A&&(i.vertexAttribDivisor(_,A),L[_]=A)}function y(){const _=r.newAttributes,A=r.enabledAttributes;for(let D=0,G=A.length;D<G;D++)A[D]!==_[D]&&(i.disableVertexAttribArray(D),A[D]=0)}function S(_,A,D,G,L,k,V){V===!0?i.vertexAttribIPointer(_,A,D,L,k):i.vertexAttribPointer(_,A,D,G,L,k)}function g(_,A,D,G){x();const L=G.attributes,k=D.getAttributes(),V=A.defaultAttributeValues;for(const X in k){const B=k[X];if(B.location>=0){let j=L[X];if(j===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(j=_.instanceColor)),j!==void 0){const at=j.normalized,lt=j.itemSize,wt=t.get(j);if(wt===void 0)continue;const Qt=wt.buffer,et=wt.type,pt=wt.bytesPerElement,Tt=et===i.INT||et===i.UNSIGNED_INT||j.gpuType===uc;if(j.isInterleavedBufferAttribute){const ft=j.data,Bt=ft.stride,Xt=j.offset;if(ft.isInstancedInterleavedBuffer){for(let $t=0;$t<B.locationSize;$t++)p(B.location+$t,ft.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let $t=0;$t<B.locationSize;$t++)m(B.location+$t);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let $t=0;$t<B.locationSize;$t++)S(B.location+$t,lt/B.locationSize,et,at,Bt*pt,(Xt+lt/B.locationSize*$t)*pt,Tt)}else{if(j.isInstancedBufferAttribute){for(let ft=0;ft<B.locationSize;ft++)p(B.location+ft,j.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ft=0;ft<B.locationSize;ft++)m(B.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let ft=0;ft<B.locationSize;ft++)S(B.location+ft,lt/B.locationSize,et,at,lt*pt,lt/B.locationSize*ft*pt,Tt)}}else if(V!==void 0){const at=V[X];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(B.location,at);break;case 3:i.vertexAttrib3fv(B.location,at);break;case 4:i.vertexAttrib4fv(B.location,at);break;default:i.vertexAttrib1fv(B.location,at)}}}}y()}function T(){C();for(const _ in n){const A=n[_];for(const D in A){const G=A[D];for(const L in G)h(G[L].object),delete G[L];delete A[D]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const A=n[_.id];for(const D in A){const G=A[D];for(const L in G)h(G[L].object),delete G[L];delete A[D]}delete n[_.id]}function w(_){for(const A in n){const D=n[A];if(D[_.id]===void 0)continue;const G=D[_.id];for(const L in G)h(G[L].object),delete G[L];delete D[_.id]}}function C(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Qm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let v=0;v<u;v++)d+=h[v];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)a(c[v],h[v],f[v]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x]*f[x];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==pi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ei&&!C)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:g,vertexTextures:T,maxSamples:E}}function eg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new as,o=new me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const v=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,S=y*4;let g=p.clippingState||null;l.value=g,g=h(v,f,S,d);for(let T=0;T!==S;++T)g[T]=e[T];p.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,v){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const p=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,g=d;S!==x;++S,g+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function ng(i){let t=new WeakMap;function e(a,o){return o===pl?a.mapping=sr:o===ml&&(a.mapping=rr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===pl||o===ml)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new dp(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Sc extends Ku{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ys=4,gh=[.125,.215,.35,.446,.526,.582],ls=20,Io=new Sc,vh=new Ct;let Uo=null,No=0,zo=0,Fo=!1;const os=(1+Math.sqrt(5))/2,Gs=1/os,xh=[new O(-os,Gs,0),new O(os,Gs,0),new O(-Gs,0,os),new O(Gs,0,os),new O(0,os,-Gs),new O(0,os,Gs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class _h{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uo,No,zo),this._renderer.xr.enabled=Fo,t.scissorTest=!1,ya(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Gn,format:Bn,colorSpace:fr,depthBuffer:!1},s=Mh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(r)),this._blurMaterial=sg(r,t,e)}return s}_compileMaterial(t){const e=new se(this._lodPlanes[0],t);this._renderer.compile(e,Io)}_sceneToCubeUV(t,e,n,s){const o=new Ln(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(vh),h.toneMapping=qi,h.autoClear=!1;const d=new Te({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),v=new se(new An,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(vh),x=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;ya(s,y*S,p>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===sr||t.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ya(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Io)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xh[(s-r-1)%xh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new se(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ls-1),x=r/v,m=isFinite(r)?1+Math.floor(h*x):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const p=[];let y=0;for(let w=0;w<ls;++w){const C=w/x,M=Math.exp(-C*C/2);p.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const g=this._sizeLods[s],T=3*g*(s>S-Ys?s-S+Ys:0),E=4*(this._cubeSize-g);ya(e,T,E,3*g,2*g),l.setRenderTarget(e),l.render(u,Io)}}function ig(i){const t=[],e=[],n=[];let s=i;const r=i-Ys+1+gh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ys?l=gh[a-i+Ys-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,v=6,x=3,m=2,p=1,y=new Float32Array(x*v*d),S=new Float32Array(m*v*d),g=new Float32Array(p*v*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,C=E>2?0:-1,M=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(M,x*v*E),S.set(f,m*v*E);const _=[E,E,E,E,E,E];g.set(_,p*v*E)}const T=new Ce;T.setAttribute("position",new Ue(y,x)),T.setAttribute("uv",new Ue(S,m)),T.setAttribute("faceIndex",new Ue(g,p)),t.push(T),s>Ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mh(i,t,e){const n=new Rn(i,t,e);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ya(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sg(i,t,e){const n=new Float32Array(ls),s=new O(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function yh(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Sh(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}function rg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===pl||l===ml,h=l===sr||l===rr;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new _h(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new _h(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ag(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function og(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const v in d){const x=d[v];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,v=u.attributes.position;let x=0;if(d!==null){const y=d.array;x=d.version;for(let S=0,g=y.length;S<g;S+=3){const T=y[S+0],E=y[S+1],w=y[S+2];f.push(T,E,E,w,w,T)}}else if(v!==void 0){const y=v.array;x=v.version;for(let S=0,g=y.length/3-1;S<g;S+=3){const T=S+0,E=S+1,w=S+2;f.push(T,E,E,w,w,T)}}else return;const m=new(Wu(f)?ju:$u)(f,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function lg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,v){v!==0&&(i.drawElementsInstanced(n,d,r,f*a,v),e.update(d,n,v))}function h(f,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=d[p];e.update(m,n,1)}function u(f,d,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,v);let p=0;for(let y=0;y<v;y++)p+=d[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hg(i,t,e){const n=new WeakMap,s=new Le;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let _=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let g=0;v===!0&&(g=1),x===!0&&(g=2),m===!0&&(g=3);let T=o.attributes.position.count*g,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*E*4*u),C=new qu(w,T,E,u);C.type=ei,C.needsUpdate=!0;const M=g*4;for(let A=0;A<u;A++){const D=p[A],G=y[A],L=S[A],k=T*E*4*A;for(let V=0;V<D.count;V++){const X=V*M;v===!0&&(s.fromBufferAttribute(D,V),w[k+X+0]=s.x,w[k+X+1]=s.y,w[k+X+2]=s.z,w[k+X+3]=0),x===!0&&(s.fromBufferAttribute(G,V),w[k+X+4]=s.x,w[k+X+5]=s.y,w[k+X+6]=s.z,w[k+X+7]=0),m===!0&&(s.fromBufferAttribute(L,V),w[k+X+8]=s.x,w[k+X+9]=s.y,w[k+X+10]=s.z,w[k+X+11]=L.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new St(T,E)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ug(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class wc extends vn{constructor(t,e,n,s,r,a,o,l,c,h=js){if(h!==js&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===js&&(n=xs),n===void 0&&h===Ms&&(n=_s),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tf=new vn,bh=new wc(1,1),ef=new qu,nf=new Jd,sf=new Ju,wh=[],Eh=[],Th=new Float32Array(16),Ah=new Float32Array(9),Ch=new Float32Array(4);function mr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=wh[s];if(r===void 0&&(r=new Float32Array(s),wh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function to(i,t){let e=Eh[t];e===void 0&&(e=new Int32Array(t),Eh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2fv(this.addr,t),tn(e,t)}}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;i.uniform3fv(this.addr,t),tn(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4fv(this.addr,t),tn(e,t)}}function gg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Ch.set(n),i.uniformMatrix2fv(this.addr,!1,Ch),tn(e,n)}}function vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),tn(e,n)}}function xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Th.set(n),i.uniformMatrix4fv(this.addr,!1,Th),tn(e,n)}}function _g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2iv(this.addr,t),tn(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3iv(this.addr,t),tn(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4iv(this.addr,t),tn(e,t)}}function bg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2uiv(this.addr,t),tn(e,t)}}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3uiv(this.addr,t),tn(e,t)}}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4uiv(this.addr,t),tn(e,t)}}function Ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bh.compareFunction=Hu,r=bh):r=tf,e.setTexture2D(t||r,s)}function Cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nf,s)}function Rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||sf,s)}function Pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ef,s)}function Dg(i){switch(i){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return vg;case 35676:return xg;case 5124:case 35670:return _g;case 35667:case 35671:return Mg;case 35668:case 35672:return yg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return wg;case 36295:return Eg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Lg(i,t){i.uniform1fv(this.addr,t)}function Ig(i,t){const e=mr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ug(i,t){const e=mr(t,this.size,3);i.uniform3fv(this.addr,e)}function Ng(i,t){const e=mr(t,this.size,4);i.uniform4fv(this.addr,e)}function zg(i,t){const e=mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fg(i,t){const e=mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Og(i,t){const e=mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kg(i,t){i.uniform1iv(this.addr,t)}function Bg(i,t){i.uniform2iv(this.addr,t)}function Gg(i,t){i.uniform3iv(this.addr,t)}function Vg(i,t){i.uniform4iv(this.addr,t)}function Hg(i,t){i.uniform1uiv(this.addr,t)}function Wg(i,t){i.uniform2uiv(this.addr,t)}function Xg(i,t){i.uniform3uiv(this.addr,t)}function qg(i,t){i.uniform4uiv(this.addr,t)}function Yg(i,t,e){const n=this.cache,s=t.length,r=to(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||tf,r[a])}function $g(i,t,e){const n=this.cache,s=t.length,r=to(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||nf,r[a])}function jg(i,t,e){const n=this.cache,s=t.length,r=to(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||sf,r[a])}function Zg(i,t,e){const n=this.cache,s=t.length,r=to(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ef,r[a])}function Kg(i){switch(i){case 5126:return Lg;case 35664:return Ig;case 35665:return Ug;case 35666:return Ng;case 35674:return zg;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return kg;case 35667:case 35671:return Bg;case 35668:case 35672:return Gg;case 35669:case 35673:return Vg;case 5125:return Hg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Zg}}class Jg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dg(e.type)}}class Qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kg(e.type)}}class tv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function Rh(i,t){i.seq.push(t),i.map[t.id]=t}function ev(i,t,e){const n=i.name,s=n.length;for(Oo.lastIndex=0;;){const r=Oo.exec(n),a=Oo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rh(e,c===void 0?new Jg(o,i,t):new Qg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new tv(o),Rh(e,u)),e=u}}}class Wa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);ev(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ph(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const nv=37297;let iv=0;function sv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Dh=new me;function rv(i){Se._getMatrix(Dh,Se.workingColorSpace,i);const t=`mat3( ${Dh.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(i)){case Qa:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sv(i.getShaderSource(t),a)}else return s}function av(i,t){const e=rv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ov(i,t){let e;switch(t){case Cu:e="Linear";break;case Ru:e="Reinhard";break;case Pu:e="Cineon";break;case hc:e="ACESFilmic";break;case Du:e="AgX";break;case Lu:e="Neutral";break;case gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sa=new O;function lv(){Se.getLuminanceCoefficients(Sa);const i=Sa.x.toFixed(4),t=Sa.y.toFixed(4),e=Sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function hv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function uv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Rr(i){return i!==""}function Ih(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(i){return i.replace(fv,pv)}const dv=new Map;function pv(i,t){let e=ve[t];if(e===void 0){const n=dv.get(t);if(n!==void 0)e=ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hl(e)}const mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(i){return i.replace(mv,gv)}function gv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function vv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ti&&(t="SHADOWMAP_TYPE_VSM"),t}function xv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case rr:t="ENVMAP_TYPE_CUBE";break;case Ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _v(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function Mv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case pd:t="ENVMAP_BLENDING_MIX";break;case md:t="ENVMAP_BLENDING_ADD";break}return t}function yv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=vv(e),c=xv(e),h=_v(e),u=Mv(e),f=yv(e),d=cv(e),v=hv(r),x=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Rr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(m=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?ve.tonemapping_pars_fragment:"",e.toneMapping!==qi?ov("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,av("linearToOutputTexel",e.outputColorSpace),lv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),a=Hl(a),a=Ih(a,e),a=Uh(a,e),o=Hl(o),o=Ih(o,e),o=Uh(o,e),a=Nh(a),o=Nh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+a,g=y+p+o,T=Ph(s,s.VERTEX_SHADER,S),E=Ph(s,s.FRAGMENT_SHADER,g);s.attachShader(x,T),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(A){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(x).trim(),G=s.getShaderInfoLog(T).trim(),L=s.getShaderInfoLog(E).trim();let k=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,E);else{const X=Lh(s,T,"vertex"),B=Lh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+D+`
`+X+`
`+B)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(G===""||L==="")&&(V=!1);V&&(A.diagnostics={runnable:k,programLog:D,vertexShader:{log:G,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(T),s.deleteShader(E),C=new Wa(s,x),M=uv(s,x)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,nv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}let bv=0;class wv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ev(t),e.set(t,n)),n}}class Ev{constructor(t){this.id=bv++,this.code=t,this.usedTimes=0}}function Tv(i,t,e,n,s,r,a){const o=new Mc,l=new wv,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,A,D,G){const L=D.fog,k=G.geometry,V=M.isMeshStandardMaterial?D.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),B=X&&X.mapping===Ka?X.image.height:null,j=v[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const at=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,lt=at!==void 0?at.length:0;let wt=0;k.morphAttributes.position!==void 0&&(wt=1),k.morphAttributes.normal!==void 0&&(wt=2),k.morphAttributes.color!==void 0&&(wt=3);let Qt,et,pt,Tt;if(j){const Lt=li[j];Qt=Lt.vertexShader,et=Lt.fragmentShader}else Qt=M.vertexShader,et=M.fragmentShader,l.update(M),pt=l.getVertexShaderID(M),Tt=l.getFragmentShaderID(M);const ft=i.getRenderTarget(),Bt=i.state.buffers.depth.getReversed(),Xt=G.isInstancedMesh===!0,$t=G.isBatchedMesh===!0,ee=!!M.map,dt=!!M.matcap,bt=!!X,N=!!M.aoMap,Ht=!!M.lightMap,_t=!!M.bumpMap,zt=!!M.normalMap,Rt=!!M.displacementMap,Kt=!!M.emissiveMap,q=!!M.metalnessMap,R=!!M.roughnessMap,b=M.anisotropy>0,H=M.clearcoat>0,K=M.dispersion>0,Q=M.iridescence>0,tt=M.sheen>0,Ut=M.transmission>0,Mt=b&&!!M.anisotropyMap,At=H&&!!M.clearcoatMap,ne=H&&!!M.clearcoatNormalMap,yt=H&&!!M.clearcoatRoughnessMap,Wt=Q&&!!M.iridescenceMap,ie=Q&&!!M.iridescenceThicknessMap,re=tt&&!!M.sheenColorMap,jt=tt&&!!M.sheenRoughnessMap,ge=!!M.specularMap,oe=!!M.specularColorMap,pe=!!M.specularIntensityMap,W=Ut&&!!M.transmissionMap,Pt=Ut&&!!M.thicknessMap,nt=!!M.gradientMap,vt=!!M.alphaMap,Ot=M.alphaTest>0,Ft=!!M.alphaHash,F=!!M.extensions;let ht=qi;M.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ht=i.toneMapping);const Nt={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Qt,fragmentShader:et,defines:M.defines,customVertexShaderID:pt,customFragmentShaderID:Tt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:$t,batchingColor:$t&&G._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&G.instanceColor!==null,instancingMorph:Xt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:fr,alphaToCoverage:!!M.alphaToCoverage,map:ee,matcap:dt,envMap:bt,envMapMode:bt&&X.mapping,envMapCubeUVHeight:B,aoMap:N,lightMap:Ht,bumpMap:_t,normalMap:zt,displacementMap:f&&Rt,emissiveMap:Kt,normalMapObjectSpace:zt&&M.normalMapType===Md,normalMapTangentSpace:zt&&M.normalMapType===vc,metalnessMap:q,roughnessMap:R,anisotropy:b,anisotropyMap:Mt,clearcoat:H,clearcoatMap:At,clearcoatNormalMap:ne,clearcoatRoughnessMap:yt,dispersion:K,iridescence:Q,iridescenceMap:Wt,iridescenceThicknessMap:ie,sheen:tt,sheenColorMap:re,sheenRoughnessMap:jt,specularMap:ge,specularColorMap:oe,specularIntensityMap:pe,transmission:Ut,transmissionMap:W,thicknessMap:Pt,gradientMap:nt,opaque:M.transparent===!1&&M.blending===Xi&&M.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ot,alphaHash:Ft,combine:M.combine,mapUv:ee&&x(M.map.channel),aoMapUv:N&&x(M.aoMap.channel),lightMapUv:Ht&&x(M.lightMap.channel),bumpMapUv:_t&&x(M.bumpMap.channel),normalMapUv:zt&&x(M.normalMap.channel),displacementMapUv:Rt&&x(M.displacementMap.channel),emissiveMapUv:Kt&&x(M.emissiveMap.channel),metalnessMapUv:q&&x(M.metalnessMap.channel),roughnessMapUv:R&&x(M.roughnessMap.channel),anisotropyMapUv:Mt&&x(M.anisotropyMap.channel),clearcoatMapUv:At&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:re&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:jt&&x(M.sheenRoughnessMap.channel),specularMapUv:ge&&x(M.specularMap.channel),specularColorMapUv:oe&&x(M.specularColorMap.channel),specularIntensityMapUv:pe&&x(M.specularIntensityMap.channel),transmissionMapUv:W&&x(M.transmissionMap.channel),thicknessMapUv:Pt&&x(M.thicknessMap.channel),alphaMapUv:vt&&x(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(zt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!k.attributes.uv&&(ee||vt),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Bt,skinning:G.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:wt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:ee&&M.map.isVideoTexture===!0&&Se.getTransfer(M.map.colorSpace)===Pe,decodeVideoTextureEmissive:Kt&&M.emissiveMap.isVideoTexture===!0&&Se.getTransfer(M.emissiveMap.colorSpace)===Pe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xe,flipSided:M.side===En,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:F&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(F&&M.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function p(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const A in M.defines)_.push(A),_.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(y(_,M),S(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function y(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function S(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function g(M){const _=v[M.type];let A;if(_){const D=li[_];A=Qn.clone(D.uniforms)}else A=M.uniforms;return A}function T(M,_){let A;for(let D=0,G=h.length;D<G;D++){const L=h[D];if(L.cacheKey===_){A=L,++A.usedTimes;break}}return A===void 0&&(A=new Sv(i,_,M,r),h.push(A)),A}function E(M){if(--M.usedTimes===0){const _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function w(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:g,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:C}}function Av(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Cv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Oh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,v,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:v,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,f,d,v,x,m){const p=a(u,f,d,v,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,v,x,m){const p=a(u,f,d,v,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Cv),n.length>1&&n.sort(f||Fh),s.length>1&&s.sort(f||Fh)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Rv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Oh,i.set(n,[a])):s>=r.length?(a=new Oh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Pv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Ct};break;case"SpotLight":e={position:new O,direction:new O,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Dv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Lv=0;function Iv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Uv(i){const t=new Pv,e=Dv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new we,a=new we;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,v=0,x=0,m=0,p=0,y=0,S=0,g=0,T=0,E=0,w=0;c.sort(Iv);for(let M=0,_=c.length;M<_;M++){const A=c[M],D=A.color,G=A.intensity,L=A.distance,k=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=D.r*G,u+=D.g*G,f+=D.b*G;else if(A.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(A.sh.coefficients[V],G);w++}else if(A.isDirectionalLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const X=A.shadow,B=e.get(A);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=A.shadow.matrix,y++}n.directional[d]=V,d++}else if(A.isSpotLight){const V=t.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(D).multiplyScalar(G),V.distance=L,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,n.spot[x]=V;const X=A.shadow;if(A.map&&(n.spotLightMap[T]=A.map,T++,X.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[x]=X.matrix,A.castShadow){const B=e.get(A);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=k,g++}x++}else if(A.isRectAreaLight){const V=t.get(A);V.color.copy(D).multiplyScalar(G),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=V,m++}else if(A.isPointLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){const X=A.shadow,B=e.get(A);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,B.shadowCameraNear=X.camera.near,B.shadowCameraFar=X.camera.far,n.pointShadow[v]=B,n.pointShadowMap[v]=k,n.pointShadowMatrix[v]=A.shadow.matrix,S++}n.point[v]=V,v++}else if(A.isHemisphereLight){const V=t.get(A);V.skyColor.copy(A.color).multiplyScalar(G),V.groundColor.copy(A.groundColor).multiplyScalar(G),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=kt.LTC_FLOAT_1,n.rectAreaLTC2=kt.LTC_FLOAT_2):(n.rectAreaLTC1=kt.LTC_HALF_1,n.rectAreaLTC2=kt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==v||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==S||C.numSpotShadows!==g||C.numSpotMaps!==T||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=g+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,C.directionalLength=d,C.pointLength=v,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=S,C.numSpotShadows=g,C.numSpotMaps=T,C.numLightProbes=w,n.version=Lv++)}function l(c,h){let u=0,f=0,d=0,v=0,x=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const g=n.directional[u];g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),u++}else if(S.isSpotLight){const g=n.spot[d];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const g=n.rectArea[v];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(S.width*.5,0,0),g.halfHeight.set(0,S.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const g=n.point[f];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const g=n.hemi[x];g.direction.setFromMatrixPosition(S.matrixWorld),g.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function kh(i){const t=new Uv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Nv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new kh(i),t.set(s,[o])):r>=a.length?(o=new kh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class zv extends Es{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fv extends Es{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kv=`uniform sampler2D shadow_pass;
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
}`;function Bv(i,t,e){let n=new yc;const s=new St,r=new St,a=new Le,o=new zv({depthPacking:_d}),l=new Fv,c={},h=e.maxTextureSize,u={[Yi]:En,[En]:Yi,[Xe]:Xe},f=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Ov,fragmentShader:kv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new Ce;v.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new se(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let p=this.type;this.render=function(E,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ln),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const G=p!==Ti&&this.type===Ti,L=p===Ti&&this.type!==Ti;for(let k=0,V=E.length;k<V;k++){const X=E[k],B=X.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const j=B.getFrameExtents();if(s.multiply(j),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,B.mapSize.y=r.y)),B.map===null||G===!0||L===!0){const lt=this.type!==Ti?{minFilter:hn,magFilter:hn}:{};B.map!==null&&B.map.dispose(),B.map=new Rn(s.x,s.y,lt),B.map.texture.name=X.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const at=B.getViewportCount();for(let lt=0;lt<at;lt++){const wt=B.getViewport(lt);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),D.viewport(a),B.updateMatrices(X,lt),n=B.getFrustum(),g(w,C,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===Ti&&y(B,C),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,A)};function y(E,w){const C=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Rn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,C,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,C,d,x,null)}function S(E,w,C,M){let _=null;const A=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)_=A;else if(_=C.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const D=_.uuid,G=w.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let k=L[G];k===void 0&&(k=_.clone(),L[G]=k,w.addEventListener("dispose",T)),_=k}if(_.visible=w.visible,_.wireframe=w.wireframe,M===Ti?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:u[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const D=i.properties.get(_);D.light=C}return _}function g(E,w,C,M,_){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Ti)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const G=t.update(E),L=E.material;if(Array.isArray(L)){const k=G.groups;for(let V=0,X=k.length;V<X;V++){const B=k[V],j=L[B.materialIndex];if(j&&j.visible){const at=S(E,j,M,_);E.onBeforeShadow(i,E,w,C,G,at,B),i.renderBufferDirect(C,null,G,at,E,B),E.onAfterShadow(i,E,w,C,G,at,B)}}}else if(L.visible){const k=S(E,L,M,_);E.onBeforeShadow(i,E,w,C,G,k,null),i.renderBufferDirect(C,null,G,k,E,null),E.onAfterShadow(i,E,w,C,G,k,null)}}const D=E.children;for(let G=0,L=D.length;G<L;G++)g(D[G],w,C,M,_)}function T(E){E.target.removeEventListener("dispose",T);for(const C in c){const M=c[C],_=E.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const Gv={[ol]:ll,[cl]:fl,[hl]:dl,[ir]:ul,[ll]:ol,[fl]:cl,[dl]:hl,[ul]:ir};function Vv(i,t){function e(){let W=!1;const Pt=new Le;let nt=null;const vt=new Le(0,0,0,0);return{setMask:function(Ot){nt!==Ot&&!W&&(i.colorMask(Ot,Ot,Ot,Ot),nt=Ot)},setLocked:function(Ot){W=Ot},setClear:function(Ot,Ft,F,ht,Nt){Nt===!0&&(Ot*=ht,Ft*=ht,F*=ht),Pt.set(Ot,Ft,F,ht),vt.equals(Pt)===!1&&(i.clearColor(Ot,Ft,F,ht),vt.copy(Pt))},reset:function(){W=!1,nt=null,vt.set(-1,0,0,0)}}}function n(){let W=!1,Pt=!1,nt=null,vt=null,Ot=null;return{setReversed:function(Ft){if(Pt!==Ft){const F=t.get("EXT_clip_control");Pt?F.clipControlEXT(F.LOWER_LEFT_EXT,F.ZERO_TO_ONE_EXT):F.clipControlEXT(F.LOWER_LEFT_EXT,F.NEGATIVE_ONE_TO_ONE_EXT);const ht=Ot;Ot=null,this.setClear(ht)}Pt=Ft},getReversed:function(){return Pt},setTest:function(Ft){Ft?ft(i.DEPTH_TEST):Bt(i.DEPTH_TEST)},setMask:function(Ft){nt!==Ft&&!W&&(i.depthMask(Ft),nt=Ft)},setFunc:function(Ft){if(Pt&&(Ft=Gv[Ft]),vt!==Ft){switch(Ft){case ol:i.depthFunc(i.NEVER);break;case ll:i.depthFunc(i.ALWAYS);break;case cl:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case hl:i.depthFunc(i.EQUAL);break;case ul:i.depthFunc(i.GEQUAL);break;case fl:i.depthFunc(i.GREATER);break;case dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=Ft}},setLocked:function(Ft){W=Ft},setClear:function(Ft){Ot!==Ft&&(Pt&&(Ft=1-Ft),i.clearDepth(Ft),Ot=Ft)},reset:function(){W=!1,nt=null,vt=null,Ot=null,Pt=!1}}}function s(){let W=!1,Pt=null,nt=null,vt=null,Ot=null,Ft=null,F=null,ht=null,Nt=null;return{setTest:function(Lt){W||(Lt?ft(i.STENCIL_TEST):Bt(i.STENCIL_TEST))},setMask:function(Lt){Pt!==Lt&&!W&&(i.stencilMask(Lt),Pt=Lt)},setFunc:function(Lt,ae,te){(nt!==Lt||vt!==ae||Ot!==te)&&(i.stencilFunc(Lt,ae,te),nt=Lt,vt=ae,Ot=te)},setOp:function(Lt,ae,te){(Ft!==Lt||F!==ae||ht!==te)&&(i.stencilOp(Lt,ae,te),Ft=Lt,F=ae,ht=te)},setLocked:function(Lt){W=Lt},setClear:function(Lt){Nt!==Lt&&(i.clearStencil(Lt),Nt=Lt)},reset:function(){W=!1,Pt=null,nt=null,vt=null,Ot=null,Ft=null,F=null,ht=null,Nt=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],v=null,x=!1,m=null,p=null,y=null,S=null,g=null,T=null,E=null,w=new Ct(0,0,0),C=0,M=!1,_=null,A=null,D=null,G=null,L=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,X=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=X>=1):B.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=X>=2);let j=null,at={};const lt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),Qt=new Le().fromArray(lt),et=new Le().fromArray(wt);function pt(W,Pt,nt,vt){const Ot=new Uint8Array(4),Ft=i.createTexture();i.bindTexture(W,Ft),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let F=0;F<nt;F++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Ot):i.texImage2D(Pt+F,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ot);return Ft}const Tt={};Tt[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),a.setFunc(ir),_t(!1),zt(Vc),ft(i.CULL_FACE),N(ln);function ft(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function Bt(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function Xt(W,Pt){return u[W]!==Pt?(i.bindFramebuffer(W,Pt),u[W]=Pt,W===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Pt),W===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function $t(W,Pt){let nt=d,vt=!1;if(W){nt=f.get(Pt),nt===void 0&&(nt=[],f.set(Pt,nt));const Ot=W.textures;if(nt.length!==Ot.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Ft=0,F=Ot.length;Ft<F;Ft++)nt[Ft]=i.COLOR_ATTACHMENT0+Ft;nt.length=Ot.length,vt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(nt)}function ee(W){return v!==W?(i.useProgram(W),v=W,!0):!1}const dt={[Kn]:i.FUNC_ADD,[td]:i.FUNC_SUBTRACT,[ed]:i.FUNC_REVERSE_SUBTRACT};dt[nd]=i.MIN,dt[id]=i.MAX;const bt={[Ar]:i.ZERO,[sd]:i.ONE,[rd]:i.SRC_COLOR,[il]:i.SRC_ALPHA,[cd]:i.SRC_ALPHA_SATURATE,[al]:i.DST_COLOR,[rl]:i.DST_ALPHA,[ad]:i.ONE_MINUS_SRC_COLOR,[sl]:i.ONE_MINUS_SRC_ALPHA,[ld]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[hd]:i.CONSTANT_COLOR,[ud]:i.ONE_MINUS_CONSTANT_COLOR,[fd]:i.CONSTANT_ALPHA,[dd]:i.ONE_MINUS_CONSTANT_ALPHA};function N(W,Pt,nt,vt,Ot,Ft,F,ht,Nt,Lt){if(W===ln){x===!0&&(Bt(i.BLEND),x=!1);return}if(x===!1&&(ft(i.BLEND),x=!0),W!==Au){if(W!==m||Lt!==M){if((p!==Kn||g!==Kn)&&(i.blendEquation(i.FUNC_ADD),p=Kn,g=Kn),Lt)switch(W){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ni:i.blendFunc(i.ONE,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ni:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}y=null,S=null,T=null,E=null,w.set(0,0,0),C=0,m=W,M=Lt}return}Ot=Ot||Pt,Ft=Ft||nt,F=F||vt,(Pt!==p||Ot!==g)&&(i.blendEquationSeparate(dt[Pt],dt[Ot]),p=Pt,g=Ot),(nt!==y||vt!==S||Ft!==T||F!==E)&&(i.blendFuncSeparate(bt[nt],bt[vt],bt[Ft],bt[F]),y=nt,S=vt,T=Ft,E=F),(ht.equals(w)===!1||Nt!==C)&&(i.blendColor(ht.r,ht.g,ht.b,Nt),w.copy(ht),C=Nt),m=W,M=!1}function Ht(W,Pt){W.side===Xe?Bt(i.CULL_FACE):ft(i.CULL_FACE);let nt=W.side===En;Pt&&(nt=!nt),_t(nt),W.blending===Xi&&W.transparent===!1?N(ln):N(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);const vt=W.stencilWrite;o.setTest(vt),vt&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Kt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(W){_!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),_=W)}function zt(W){W!==Jf?(ft(i.CULL_FACE),W!==A&&(W===Vc?i.cullFace(i.BACK):W===Qf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Bt(i.CULL_FACE),A=W}function Rt(W){W!==D&&(V&&i.lineWidth(W),D=W)}function Kt(W,Pt,nt){W?(ft(i.POLYGON_OFFSET_FILL),(G!==Pt||L!==nt)&&(i.polygonOffset(Pt,nt),G=Pt,L=nt)):Bt(i.POLYGON_OFFSET_FILL)}function q(W){W?ft(i.SCISSOR_TEST):Bt(i.SCISSOR_TEST)}function R(W){W===void 0&&(W=i.TEXTURE0+k-1),j!==W&&(i.activeTexture(W),j=W)}function b(W,Pt,nt){nt===void 0&&(j===null?nt=i.TEXTURE0+k-1:nt=j);let vt=at[nt];vt===void 0&&(vt={type:void 0,texture:void 0},at[nt]=vt),(vt.type!==W||vt.texture!==Pt)&&(j!==nt&&(i.activeTexture(nt),j=nt),i.bindTexture(W,Pt||Tt[W]),vt.type=W,vt.texture=Pt)}function H(){const W=at[j];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function yt(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Wt(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function re(W){Qt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Qt.copy(W))}function jt(W){et.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),et.copy(W))}function ge(W,Pt){let nt=c.get(Pt);nt===void 0&&(nt=new WeakMap,c.set(Pt,nt));let vt=nt.get(W);vt===void 0&&(vt=i.getUniformBlockIndex(Pt,W.name),nt.set(W,vt))}function oe(W,Pt){const vt=c.get(Pt).get(W);l.get(Pt)!==vt&&(i.uniformBlockBinding(Pt,vt,W.__bindingPointIndex),l.set(Pt,vt))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,at={},u={},f=new WeakMap,d=[],v=null,x=!1,m=null,p=null,y=null,S=null,g=null,T=null,E=null,w=new Ct(0,0,0),C=0,M=!1,_=null,A=null,D=null,G=null,L=null,Qt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ft,disable:Bt,bindFramebuffer:Xt,drawBuffers:$t,useProgram:ee,setBlending:N,setMaterial:Ht,setFlipSided:_t,setCullFace:zt,setLineWidth:Rt,setPolygonOffset:Kt,setScissorTest:q,activeTexture:R,bindTexture:b,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:Wt,texImage3D:ie,updateUBOMapping:ge,uniformBlockBinding:oe,texStorage2D:ne,texStorage3D:yt,texSubImage2D:tt,texSubImage3D:Ut,compressedTexSubImage2D:Mt,compressedTexSubImage3D:At,scissor:re,viewport:jt,reset:pe}}function Bh(i,t,e,n){const s=Hv(n);switch(e){case Fu:return i*t;case ku:return i*t;case Bu:return i*t*2;case Ja:return i*t/s.components*s.byteLength;case pc:return i*t/s.components*s.byteLength;case Gu:return i*t*2/s.components*s.byteLength;case mc:return i*t*2/s.components*s.byteLength;case Ou:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case gc:return i*t*4/s.components*s.byteLength;case ka:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xl:case Ml:return Math.max(i,16)*Math.max(t,8)/4;case vl:case _l:return Math.max(i,8)*Math.max(t,8)/2;case yl:case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ha:case Ol:case kl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vu:case Bl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hv(i){switch(i){case pi:case Uu:return{byteLength:1,components:1};case kr:case Nu:case Gn:return{byteLength:2,components:1};case fc:case dc:return{byteLength:2,components:4};case xs:case uc:case ei:return{byteLength:4,components:1};case zu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Wv(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,b){return d?new OffscreenCanvas(R,b):$a("canvas")}function x(R,b,H){let K=1;const Q=q(R);if((Q.width>H||Q.height>H)&&(K=H/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const tt=Math.floor(K*Q.width),Ut=Math.floor(K*Q.height);u===void 0&&(u=v(tt,Ut));const Mt=b?v(tt,Ut):u;return Mt.width=tt,Mt.height=Ut,Mt.getContext("2d").drawImage(R,0,0,tt,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+tt+"x"+Ut+")."),Mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,b,H,K,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let tt=b;if(b===i.RED&&(H===i.FLOAT&&(tt=i.R32F),H===i.HALF_FLOAT&&(tt=i.R16F),H===i.UNSIGNED_BYTE&&(tt=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.R8UI),H===i.UNSIGNED_SHORT&&(tt=i.R16UI),H===i.UNSIGNED_INT&&(tt=i.R32UI),H===i.BYTE&&(tt=i.R8I),H===i.SHORT&&(tt=i.R16I),H===i.INT&&(tt=i.R32I)),b===i.RG&&(H===i.FLOAT&&(tt=i.RG32F),H===i.HALF_FLOAT&&(tt=i.RG16F),H===i.UNSIGNED_BYTE&&(tt=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RG8UI),H===i.UNSIGNED_SHORT&&(tt=i.RG16UI),H===i.UNSIGNED_INT&&(tt=i.RG32UI),H===i.BYTE&&(tt=i.RG8I),H===i.SHORT&&(tt=i.RG16I),H===i.INT&&(tt=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),H===i.UNSIGNED_INT&&(tt=i.RGB32UI),H===i.BYTE&&(tt=i.RGB8I),H===i.SHORT&&(tt=i.RGB16I),H===i.INT&&(tt=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),H===i.UNSIGNED_INT&&(tt=i.RGBA32UI),H===i.BYTE&&(tt=i.RGBA8I),H===i.SHORT&&(tt=i.RGBA16I),H===i.INT&&(tt=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),b===i.RGBA){const Ut=Q?Qa:Se.getTransfer(K);H===i.FLOAT&&(tt=i.RGBA32F),H===i.HALF_FLOAT&&(tt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(tt=Ut===Pe?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function g(R,b){let H;return R?b===null||b===xs||b===_s?H=i.DEPTH24_STENCIL8:b===ei?H=i.DEPTH32F_STENCIL8:b===kr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===xs||b===_s?H=i.DEPTH_COMPONENT24:b===ei?H=i.DEPTH_COMPONENT32F:b===kr&&(H=i.DEPTH_COMPONENT16),H}function T(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==ci?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function E(R){const b=R.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&h.delete(b)}function w(R){const b=R.target;b.removeEventListener("dispose",w),_(b)}function C(R){const b=n.get(R);if(b.__webglInit===void 0)return;const H=R.source,K=f.get(H);if(K){const Q=K[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(R),Object.keys(K).length===0&&f.delete(H)}n.remove(R)}function M(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const H=R.source,K=f.get(H);delete K[b.__cacheKey],a.memory.textures--}function _(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let Q=0;Q<b.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=R.textures;for(let K=0,Q=H.length;K<Q;K++){const tt=n.get(H[K]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(H[K])}n.remove(R)}let A=0;function D(){A=0}function G(){const R=A;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function L(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function k(R,b){const H=n.get(R);if(R.isVideoTexture&&Rt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(H,R,b);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function V(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){et(H,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function X(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){et(H,R,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function B(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){pt(H,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const j={[di]:i.REPEAT,[cs]:i.CLAMP_TO_EDGE,[gl]:i.MIRRORED_REPEAT},at={[hn]:i.NEAREST,[vd]:i.NEAREST_MIPMAP_NEAREST,[na]:i.NEAREST_MIPMAP_LINEAR,[ci]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},lt={[yd]:i.NEVER,[Ad]:i.ALWAYS,[Sd]:i.LESS,[Hu]:i.LEQUAL,[bd]:i.EQUAL,[Td]:i.GEQUAL,[wd]:i.GREATER,[Ed]:i.NOTEQUAL};function wt(R,b){if(b.type===ei&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ci||b.magFilter===uo||b.magFilter===na||b.magFilter===hs||b.minFilter===ci||b.minFilter===uo||b.minFilter===na||b.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,j[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,j[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,j[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,at[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,at[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,lt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===hn||b.minFilter!==na&&b.minFilter!==hs||b.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Qt(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",E));const K=b.source;let Q=f.get(K);Q===void 0&&(Q={},f.set(K,Q));const tt=L(b);if(tt!==R.__cacheKey){Q[tt]===void 0&&(Q[tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[tt].usedTimes++;const Ut=Q[R.__cacheKey];Ut!==void 0&&(Q[R.__cacheKey].usedTimes--,Ut.usedTimes===0&&M(b)),R.__cacheKey=tt,R.__webglTexture=Q[tt].texture}return H}function et(R,b,H){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const Q=Qt(R,b),tt=b.source;e.bindTexture(K,R.__webglTexture,i.TEXTURE0+H);const Ut=n.get(tt);if(tt.version!==Ut.__version||Q===!0){e.activeTexture(i.TEXTURE0+H);const Mt=Se.getPrimaries(Se.workingColorSpace),At=b.colorSpace===Vi?null:Se.getPrimaries(b.colorSpace),ne=b.colorSpace===Vi||Mt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let yt=x(b.image,!1,s.maxTextureSize);yt=Kt(b,yt);const Wt=r.convert(b.format,b.colorSpace),ie=r.convert(b.type);let re=S(b.internalFormat,Wt,ie,b.colorSpace,b.isVideoTexture);wt(K,b);let jt;const ge=b.mipmaps,oe=b.isVideoTexture!==!0,pe=Ut.__version===void 0||Q===!0,W=tt.dataReady,Pt=T(b,yt);if(b.isDepthTexture)re=g(b.format===Ms,b.type),pe&&(oe?e.texStorage2D(i.TEXTURE_2D,1,re,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,re,yt.width,yt.height,0,Wt,ie,null));else if(b.isDataTexture)if(ge.length>0){oe&&pe&&e.texStorage2D(i.TEXTURE_2D,Pt,re,ge[0].width,ge[0].height);for(let nt=0,vt=ge.length;nt<vt;nt++)jt=ge[nt],oe?W&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,jt.width,jt.height,Wt,ie,jt.data):e.texImage2D(i.TEXTURE_2D,nt,re,jt.width,jt.height,0,Wt,ie,jt.data);b.generateMipmaps=!1}else oe?(pe&&e.texStorage2D(i.TEXTURE_2D,Pt,re,yt.width,yt.height),W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt.width,yt.height,Wt,ie,yt.data)):e.texImage2D(i.TEXTURE_2D,0,re,yt.width,yt.height,0,Wt,ie,yt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){oe&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,re,ge[0].width,ge[0].height,yt.depth);for(let nt=0,vt=ge.length;nt<vt;nt++)if(jt=ge[nt],b.format!==Bn)if(Wt!==null)if(oe){if(W)if(b.layerUpdates.size>0){const Ot=Bh(jt.width,jt.height,b.format,b.type);for(const Ft of b.layerUpdates){const F=jt.data.subarray(Ft*Ot/jt.data.BYTES_PER_ELEMENT,(Ft+1)*Ot/jt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,Ft,jt.width,jt.height,1,Wt,F)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,jt.width,jt.height,yt.depth,Wt,jt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,re,jt.width,jt.height,yt.depth,0,jt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,jt.width,jt.height,yt.depth,Wt,ie,jt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,re,jt.width,jt.height,yt.depth,0,Wt,ie,jt.data)}else{oe&&pe&&e.texStorage2D(i.TEXTURE_2D,Pt,re,ge[0].width,ge[0].height);for(let nt=0,vt=ge.length;nt<vt;nt++)jt=ge[nt],b.format!==Bn?Wt!==null?oe?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,jt.width,jt.height,Wt,jt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,re,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?W&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,jt.width,jt.height,Wt,ie,jt.data):e.texImage2D(i.TEXTURE_2D,nt,re,jt.width,jt.height,0,Wt,ie,jt.data)}else if(b.isDataArrayTexture)if(oe){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,re,yt.width,yt.height,yt.depth),W)if(b.layerUpdates.size>0){const nt=Bh(yt.width,yt.height,b.format,b.type);for(const vt of b.layerUpdates){const Ot=yt.data.subarray(vt*nt/yt.data.BYTES_PER_ELEMENT,(vt+1)*nt/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,yt.width,yt.height,1,Wt,ie,Ot)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Wt,ie,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,re,yt.width,yt.height,yt.depth,0,Wt,ie,yt.data);else if(b.isData3DTexture)oe?(pe&&e.texStorage3D(i.TEXTURE_3D,Pt,re,yt.width,yt.height,yt.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Wt,ie,yt.data)):e.texImage3D(i.TEXTURE_3D,0,re,yt.width,yt.height,yt.depth,0,Wt,ie,yt.data);else if(b.isFramebufferTexture){if(pe)if(oe)e.texStorage2D(i.TEXTURE_2D,Pt,re,yt.width,yt.height);else{let nt=yt.width,vt=yt.height;for(let Ot=0;Ot<Pt;Ot++)e.texImage2D(i.TEXTURE_2D,Ot,re,nt,vt,0,Wt,ie,null),nt>>=1,vt>>=1}}else if(ge.length>0){if(oe&&pe){const nt=q(ge[0]);e.texStorage2D(i.TEXTURE_2D,Pt,re,nt.width,nt.height)}for(let nt=0,vt=ge.length;nt<vt;nt++)jt=ge[nt],oe?W&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Wt,ie,jt):e.texImage2D(i.TEXTURE_2D,nt,re,Wt,ie,jt);b.generateMipmaps=!1}else if(oe){if(pe){const nt=q(yt);e.texStorage2D(i.TEXTURE_2D,Pt,re,nt.width,nt.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,ie,yt)}else e.texImage2D(i.TEXTURE_2D,0,re,Wt,ie,yt);m(b)&&p(K),Ut.__version=tt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function pt(R,b,H){if(b.image.length!==6)return;const K=Qt(R,b),Q=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const tt=n.get(Q);if(Q.version!==tt.__version||K===!0){e.activeTexture(i.TEXTURE0+H);const Ut=Se.getPrimaries(Se.workingColorSpace),Mt=b.colorSpace===Vi?null:Se.getPrimaries(b.colorSpace),At=b.colorSpace===Vi||Ut===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const ne=b.isCompressedTexture||b.image[0].isCompressedTexture,yt=b.image[0]&&b.image[0].isDataTexture,Wt=[];for(let vt=0;vt<6;vt++)!ne&&!yt?Wt[vt]=x(b.image[vt],!0,s.maxCubemapSize):Wt[vt]=yt?b.image[vt].image:b.image[vt],Wt[vt]=Kt(b,Wt[vt]);const ie=Wt[0],re=r.convert(b.format,b.colorSpace),jt=r.convert(b.type),ge=S(b.internalFormat,re,jt,b.colorSpace),oe=b.isVideoTexture!==!0,pe=tt.__version===void 0||K===!0,W=Q.dataReady;let Pt=T(b,ie);wt(i.TEXTURE_CUBE_MAP,b);let nt;if(ne){oe&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ge,ie.width,ie.height);for(let vt=0;vt<6;vt++){nt=Wt[vt].mipmaps;for(let Ot=0;Ot<nt.length;Ot++){const Ft=nt[Ot];b.format!==Bn?re!==null?oe?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot,0,0,Ft.width,Ft.height,re,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot,ge,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot,0,0,Ft.width,Ft.height,re,jt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot,ge,Ft.width,Ft.height,0,re,jt,Ft.data)}}}else{if(nt=b.mipmaps,oe&&pe){nt.length>0&&Pt++;const vt=q(Wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ge,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(yt){oe?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Wt[vt].width,Wt[vt].height,re,jt,Wt[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ge,Wt[vt].width,Wt[vt].height,0,re,jt,Wt[vt].data);for(let Ot=0;Ot<nt.length;Ot++){const F=nt[Ot].image[vt].image;oe?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot+1,0,0,F.width,F.height,re,jt,F.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot+1,ge,F.width,F.height,0,re,jt,F.data)}}else{oe?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,re,jt,Wt[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ge,re,jt,Wt[vt]);for(let Ot=0;Ot<nt.length;Ot++){const Ft=nt[Ot];oe?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot+1,0,0,re,jt,Ft.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot+1,ge,re,jt,Ft.image[vt])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),tt.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Tt(R,b,H,K,Q,tt){const Ut=r.convert(H.format,H.colorSpace),Mt=r.convert(H.type),At=S(H.internalFormat,Ut,Mt,H.colorSpace),ne=n.get(b),yt=n.get(H);if(yt.__renderTarget=b,!ne.__hasExternalTextures){const Wt=Math.max(1,b.width>>tt),ie=Math.max(1,b.height>>tt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,tt,At,Wt,ie,b.depth,0,Ut,Mt,null):e.texImage2D(Q,tt,At,Wt,ie,0,Ut,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),zt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Q,yt.__webglTexture,0,_t(b)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Q,yt.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(R,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const K=b.depthTexture,Q=K&&K.isDepthTexture?K.type:null,tt=g(b.stencilBuffer,Q),Ut=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=_t(b);zt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,tt,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,tt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,tt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,R)}else{const K=b.textures;for(let Q=0;Q<K.length;Q++){const tt=K[Q],Ut=r.convert(tt.format,tt.colorSpace),Mt=r.convert(tt.type),At=S(tt.internalFormat,Ut,Mt,tt.colorSpace),ne=_t(b);H&&zt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,At,b.width,b.height):zt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,At,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,At,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const Q=K.__webglTexture,tt=_t(b);if(b.depthTexture.format===js)zt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Ms)zt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Xt(R){const b=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=K}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Bt(b.__webglFramebuffer,R)}else if(H){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),ft(b.__webglDepthbuffer[K],R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ft(b.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(R,b,H){const K=n.get(R);b!==void 0&&Tt(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Xt(R)}function ee(R){const b=R.texture,H=n.get(R),K=n.get(b);R.addEventListener("dispose",w);const Q=R.textures,tt=R.isWebGLCubeRenderTarget===!0,Ut=Q.length>1;if(Ut||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,a.memory.textures++),tt){H.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[Mt]=[];for(let At=0;At<b.mipmaps.length;At++)H.__webglFramebuffer[Mt][At]=i.createFramebuffer()}else H.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)H.__webglFramebuffer[Mt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let Mt=0,At=Q.length;Mt<At;Mt++){const ne=n.get(Q[Mt]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&zt(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Mt=0;Mt<Q.length;Mt++){const At=Q[Mt];H.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Mt]);const ne=r.convert(At.format,At.colorSpace),yt=r.convert(At.type),Wt=S(At.internalFormat,ne,yt,At.colorSpace,R.isXRRenderTarget===!0),ie=_t(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Wt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,H.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),wt(i.TEXTURE_CUBE_MAP,b);for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)Tt(H.__webglFramebuffer[Mt][At],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,At);else Tt(H.__webglFramebuffer[Mt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let Mt=0,At=Q.length;Mt<At;Mt++){const ne=Q[Mt],yt=n.get(ne);e.bindTexture(i.TEXTURE_2D,yt.__webglTexture),wt(i.TEXTURE_2D,ne),Tt(H.__webglFramebuffer,R,ne,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),m(ne)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,K.__webglTexture),wt(Mt,b),b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)Tt(H.__webglFramebuffer[At],R,b,i.COLOR_ATTACHMENT0,Mt,At);else Tt(H.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,Mt,0);m(b)&&p(Mt),e.unbindTexture()}R.depthBuffer&&Xt(R)}function dt(R){const b=R.textures;for(let H=0,K=b.length;H<K;H++){const Q=b[H];if(m(Q)){const tt=y(R),Ut=n.get(Q).__webglTexture;e.bindTexture(tt,Ut),p(tt),e.unbindTexture()}}}const bt=[],N=[];function Ht(R){if(R.samples>0){if(zt(R)===!1){const b=R.textures,H=R.width,K=R.height;let Q=i.COLOR_BUFFER_BIT;const tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(R),Mt=b.length>1;if(Mt)for(let At=0;At<b.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let At=0;At<b.length;At++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[At]);const ne=n.get(b[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,Q,i.NEAREST),l===!0&&(bt.length=0,N.length=0,bt.push(i.COLOR_ATTACHMENT0+At),R.depthBuffer&&R.resolveDepthBuffer===!1&&(bt.push(tt),N.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let At=0;At<b.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[At]);const ne=n.get(b[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function _t(R){return Math.min(s.maxSamples,R.samples)}function zt(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Rt(R){const b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Kt(R,b){const H=R.colorSpace,K=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==fr&&H!==Vi&&(Se.getTransfer(H)===Pe?(K!==Bn||Q!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function q(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=B,this.rebindTextures=$t,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=zt}function Xv(i,t){function e(n,s=Vi){let r;const a=Se.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uu)return i.BYTE;if(n===Nu)return i.SHORT;if(n===kr)return i.UNSIGNED_SHORT;if(n===uc)return i.INT;if(n===xs)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===Fu)return i.ALPHA;if(n===Ou)return i.RGB;if(n===Bn)return i.RGBA;if(n===ku)return i.LUMINANCE;if(n===Bu)return i.LUMINANCE_ALPHA;if(n===js)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===Ja)return i.RED;if(n===pc)return i.RED_INTEGER;if(n===Gu)return i.RG;if(n===mc)return i.RG_INTEGER;if(n===gc)return i.RGBA_INTEGER;if(n===ka||n===Ba||n===Ga||n===Va)if(a===Pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===xl||n===_l||n===Ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yl||n===Sl||n===bl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yl||n===Sl)return a===Pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wl||n===El||n===Tl||n===Al||n===Cl||n===Rl||n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Nl||n===zl||n===Fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Al)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ll)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Il)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===Ol||n===kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ha)return a===Pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vu||n===Bl||n===Gl||n===Vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class qv extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xe extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yv={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,v=.005;c.inputState.pinching&&f>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jv=`
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

}`;class Zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new vn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:$v,fragmentShader:jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kv extends dr{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,v=null;const x=new Zv,m=e.getContextAttributes();let p=null,y=null;const S=[],g=[],T=new St;let E=null;const w=new Ln;w.viewport=new Le;const C=new Ln;C.viewport=new Le;const M=[w,C],_=new qv;let A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let pt=S[et];return pt===void 0&&(pt=new ko,S[et]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(et){let pt=S[et];return pt===void 0&&(pt=new ko,S[et]=pt),pt.getGripSpace()},this.getHand=function(et){let pt=S[et];return pt===void 0&&(pt=new ko,S[et]=pt),pt.getHandSpace()};function G(et){const pt=g.indexOf(et.inputSource);if(pt===-1)return;const Tt=S[pt];Tt!==void 0&&(Tt.update(et.inputSource,et.frame,c||a),Tt.dispatchEvent({type:et.type,data:et.inputSource}))}function L(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",k);for(let et=0;et<S.length;et++){const pt=g[et];pt!==null&&(g[et]=null,S[et].disconnect(pt))}A=null,D=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,y=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",L),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const pt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Rn(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let pt=null,Tt=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=m.stencil?Ms:js,Tt=m.stencil?_s:xs);const Bt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Rn(f.textureWidth,f.textureHeight,{format:Bn,type:pi,depthTexture:new wc(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(et){for(let pt=0;pt<et.removed.length;pt++){const Tt=et.removed[pt],ft=g.indexOf(Tt);ft>=0&&(g[ft]=null,S[ft].disconnect(Tt))}for(let pt=0;pt<et.added.length;pt++){const Tt=et.added[pt];let ft=g.indexOf(Tt);if(ft===-1){for(let Xt=0;Xt<S.length;Xt++)if(Xt>=g.length){g.push(Tt),ft=Xt;break}else if(g[Xt]===null){g[Xt]=Tt,ft=Xt;break}if(ft===-1)break}const Bt=S[ft];Bt&&Bt.connect(Tt)}}const V=new O,X=new O;function B(et,pt,Tt){V.setFromMatrixPosition(pt.matrixWorld),X.setFromMatrixPosition(Tt.matrixWorld);const ft=V.distanceTo(X),Bt=pt.projectionMatrix.elements,Xt=Tt.projectionMatrix.elements,$t=Bt[14]/(Bt[10]-1),ee=Bt[14]/(Bt[10]+1),dt=(Bt[9]+1)/Bt[5],bt=(Bt[9]-1)/Bt[5],N=(Bt[8]-1)/Bt[0],Ht=(Xt[8]+1)/Xt[0],_t=$t*N,zt=$t*Ht,Rt=ft/(-N+Ht),Kt=Rt*-N;if(pt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Kt),et.translateZ(Rt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Bt[10]===-1)et.projectionMatrix.copy(pt.projectionMatrix),et.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const q=$t+Rt,R=ee+Rt,b=_t-Kt,H=zt+(ft-Kt),K=dt*ee/R*q,Q=bt*ee/R*q;et.projectionMatrix.makePerspective(b,H,K,Q,q,R),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function j(et,pt){pt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(pt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let pt=et.near,Tt=et.far;x.texture!==null&&(x.depthNear>0&&(pt=x.depthNear),x.depthFar>0&&(Tt=x.depthFar)),_.near=C.near=w.near=pt,_.far=C.far=w.far=Tt,(A!==_.near||D!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,D=_.far),w.layers.mask=et.layers.mask|2,C.layers.mask=et.layers.mask|4,_.layers.mask=w.layers.mask|C.layers.mask;const ft=et.parent,Bt=_.cameras;j(_,ft);for(let Xt=0;Xt<Bt.length;Xt++)j(Bt[Xt],ft);Bt.length===2?B(_,w,C):_.projectionMatrix.copy(w.projectionMatrix),at(et,_,ft)};function at(et,pt,Tt){Tt===null?et.matrix.copy(pt.matrixWorld):(et.matrix.copy(Tt.matrixWorld),et.matrix.invert(),et.matrix.multiply(pt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(pt.projectionMatrix),et.projectionMatrixInverse.copy(pt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Br*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let lt=null;function wt(et,pt){if(h=pt.getViewerPose(c||a),v=pt,h!==null){const Tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ft=!1;Tt.length!==_.cameras.length&&(_.cameras.length=0,ft=!0);for(let Xt=0;Xt<Tt.length;Xt++){const $t=Tt[Xt];let ee=null;if(d!==null)ee=d.getViewport($t);else{const bt=u.getViewSubImage(f,$t);ee=bt.viewport,Xt===0&&(t.setRenderTargetTextures(y,bt.colorTexture,f.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(y))}let dt=M[Xt];dt===void 0&&(dt=new Ln,dt.layers.enable(Xt),dt.viewport=new Le,M[Xt]=dt),dt.matrix.fromArray($t.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray($t.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ee.x,ee.y,ee.width,ee.height),Xt===0&&(_.matrix.copy(dt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ft===!0&&_.cameras.push(dt)}const Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){const Xt=u.getDepthInformation(Tt[0]);Xt&&Xt.isValid&&Xt.texture&&x.init(t,Xt,s.renderState)}}for(let Tt=0;Tt<S.length;Tt++){const ft=g[Tt],Bt=S[Tt];ft!==null&&Bt!==void 0&&Bt.update(ft,pt,c||a)}lt&&lt(et,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),v=null}const Qt=new Qu;Qt.setAnimationLoop(wt),this.setAnimationLoop=function(et){lt=et},this.dispose=function(){}}}const is=new mi,Jv=new we;function Qv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,g){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,g)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),S=y.envMap,g=y.envMapRotation;S&&(m.envMap.value=S,is.copy(g),is.x*=-1,is.y*=-1,is.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(Jv.makeRotationFromEuler(is)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const g=S.program;n.uniformBlockBinding(y,g)}function c(y,S){let g=s[y.id];g===void 0&&(v(y),g=h(y),s[y.id]=g,y.addEventListener("dispose",m));const T=S.program;n.updateUBOMapping(y,T);const E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){const S=u();y.__bindingPointIndex=S;const g=i.createBuffer(),T=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,g),g}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=s[y.id],g=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,w=g.length;E<w;E++){const C=Array.isArray(g[E])?g[E]:[g[E]];for(let M=0,_=C.length;M<_;M++){const A=C[M];if(d(A,E,M,T)===!0){const D=A.__offset,G=Array.isArray(A.value)?A.value:[A.value];let L=0;for(let k=0;k<G.length;k++){const V=G[k],X=x(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,D+L,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):(V.toArray(A.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,S,g,T){const E=y.value,w=S+"_"+g;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{const C=T[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return T[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function v(y){const S=y.uniforms;let g=0;const T=16;for(let w=0,C=S.length;w<C;w++){const M=Array.isArray(S[w])?S[w]:[S[w]];for(let _=0,A=M.length;_<A;_++){const D=M[_],G=Array.isArray(D.value)?D.value:[D.value];for(let L=0,k=G.length;L<k;L++){const V=G[L],X=x(V),B=g%T,j=B%X.boundary,at=B+j;g+=j,at!==0&&T-at<X.storage&&(g+=T-at),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=g,g+=X.storage}}}const E=g%T;return E>0&&(g+=T-E),y.__size=g,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const g=a.indexOf(S.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ex{constructor(t={}){const{canvas:e=Wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=qi,this.toneMappingExposure=1;const g=this;let T=!1,E=0,w=0,C=null,M=-1,_=null;const A=new Le,D=new Le;let G=null;const L=new Ct(0);let k=0,V=e.width,X=e.height,B=1,j=null,at=null;const lt=new Le(0,0,V,X),wt=new Le(0,0,V,X);let Qt=!1;const et=new yc;let pt=!1,Tt=!1;const ft=new we,Bt=new we,Xt=new O,$t=new Le,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function bt(){return C===null?B:1}let N=n;function Ht(P,Y){return e.getContext(P,Y)}try{const P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lc}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),N===null){const Y="webgl2";if(N=Ht(Y,P),N===null)throw Ht(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let _t,zt,Rt,Kt,q,R,b,H,K,Q,tt,Ut,Mt,At,ne,yt,Wt,ie,re,jt,ge,oe,pe,W;function Pt(){_t=new ag(N),_t.init(),oe=new Xv(N,_t),zt=new tg(N,_t,t,oe),Rt=new Vv(N,_t),zt.reverseDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),Kt=new cg(N),q=new Av,R=new Wv(N,_t,Rt,q,zt,oe,Kt),b=new ng(g),H=new rg(g),K=new gp(N),pe=new Jm(N,K),Q=new og(N,K,Kt,pe),tt=new ug(N,Q,K,Kt),re=new hg(N,zt,R),yt=new eg(q),Ut=new Tv(g,b,H,_t,zt,pe,yt),Mt=new Qv(g,q),At=new Rv,ne=new Nv(_t),ie=new Km(g,b,H,Rt,tt,d,l),Wt=new Bv(g,tt,zt),W=new tx(N,Kt,zt,Rt),jt=new Qm(N,_t,Kt),ge=new lg(N,_t,Kt),Kt.programs=Ut.programs,g.capabilities=zt,g.extensions=_t,g.properties=q,g.renderLists=At,g.shadowMap=Wt,g.state=Rt,g.info=Kt}Pt();const nt=new Kv(g,N);this.xr=nt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const P=_t.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=_t.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(V,X,!1))},this.getSize=function(P){return P.set(V,X)},this.setSize=function(P,Y,it=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=P,X=Y,e.width=Math.floor(P*B),e.height=Math.floor(Y*B),it===!0&&(e.style.width=P+"px",e.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(V*B,X*B).floor()},this.setDrawingBufferSize=function(P,Y,it){V=P,X=Y,B=it,e.width=Math.floor(P*it),e.height=Math.floor(Y*it),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(lt)},this.setViewport=function(P,Y,it,st){P.isVector4?lt.set(P.x,P.y,P.z,P.w):lt.set(P,Y,it,st),Rt.viewport(A.copy(lt).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(wt)},this.setScissor=function(P,Y,it,st){P.isVector4?wt.set(P.x,P.y,P.z,P.w):wt.set(P,Y,it,st),Rt.scissor(D.copy(wt).multiplyScalar(B).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(P){Rt.setScissorTest(Qt=P)},this.setOpaqueSort=function(P){j=P},this.setTransparentSort=function(P){at=P},this.getClearColor=function(P){return P.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(P=!0,Y=!0,it=!0){let st=0;if(P){let $=!1;if(C!==null){const It=C.texture.format;$=It===gc||It===mc||It===pc}if($){const It=C.texture.type,qt=It===pi||It===xs||It===kr||It===_s||It===fc||It===dc,z=ie.getClearColor(),I=ie.getClearAlpha(),Z=z.r,rt=z.g,ot=z.b;qt?(v[0]=Z,v[1]=rt,v[2]=ot,v[3]=I,N.clearBufferuiv(N.COLOR,0,v)):(x[0]=Z,x[1]=rt,x[2]=ot,x[3]=I,N.clearBufferiv(N.COLOR,0,x))}else st|=N.COLOR_BUFFER_BIT}Y&&(st|=N.DEPTH_BUFFER_BIT),it&&(st|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),At.dispose(),ne.dispose(),q.dispose(),b.dispose(),H.dispose(),tt.dispose(),pe.dispose(),W.dispose(),Ut.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",fe),nt.removeEventListener("sessionend",Jt),Me.stop()};function vt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const P=Kt.autoReset,Y=Wt.enabled,it=Wt.autoUpdate,st=Wt.needsUpdate,$=Wt.type;Pt(),Kt.autoReset=P,Wt.enabled=Y,Wt.autoUpdate=it,Wt.needsUpdate=st,Wt.type=$}function Ft(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function F(P){const Y=P.target;Y.removeEventListener("dispose",F),ht(Y)}function ht(P){Nt(P),q.remove(P)}function Nt(P){const Y=q.get(P).programs;Y!==void 0&&(Y.forEach(function(it){Ut.releaseProgram(it)}),P.isShaderMaterial&&Ut.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,it,st,$,It){Y===null&&(Y=ee);const qt=$.isMesh&&$.matrixWorld.determinant()<0,z=Gc(P,Y,it,st,$);Rt.setMaterial(st,qt);let I=it.index,Z=1;if(st.wireframe===!0){if(I=Q.getWireframeAttribute(it),I===void 0)return;Z=2}const rt=it.drawRange,ot=it.attributes.position;let xt=rt.start*Z,Et=(rt.start+rt.count)*Z;It!==null&&(xt=Math.max(xt,It.start*Z),Et=Math.min(Et,(It.start+It.count)*Z)),I!==null?(xt=Math.max(xt,0),Et=Math.min(Et,I.count)):ot!=null&&(xt=Math.max(xt,0),Et=Math.min(Et,ot.count));const ct=Et-xt;if(ct<0||ct===1/0)return;pe.setup($,st,z,it,I);let Vt,Gt=jt;if(I!==null&&(Vt=K.get(I),Gt=ge,Gt.setIndex(Vt)),$.isMesh)st.wireframe===!0?(Rt.setLineWidth(st.wireframeLinewidth*bt()),Gt.setMode(N.LINES)):Gt.setMode(N.TRIANGLES);else if($.isLine){let Dt=st.linewidth;Dt===void 0&&(Dt=1),Rt.setLineWidth(Dt*bt()),$.isLineSegments?Gt.setMode(N.LINES):$.isLineLoop?Gt.setMode(N.LINE_LOOP):Gt.setMode(N.LINE_STRIP)}else $.isPoints?Gt.setMode(N.POINTS):$.isSprite&&Gt.setMode(N.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Gt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Gt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Dt=$._multiDrawStarts,_e=$._multiDrawCounts,le=$._multiDrawCount,_n=I?K.get(I).bytesPerElement:1,fn=q.get(st).currentProgram.getUniforms();for(let $e=0;$e<le;$e++)fn.setValue(N,"_gl_DrawID",$e),Gt.render(Dt[$e]/_n,_e[$e])}else if($.isInstancedMesh)Gt.renderInstances(xt,ct,$.count);else if(it.isInstancedBufferGeometry){const Dt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,_e=Math.min(it.instanceCount,Dt);Gt.renderInstances(xt,ct,_e)}else Gt.render(xt,ct)};function Lt(P,Y,it){P.transparent===!0&&P.side===Xe&&P.forceSinglePass===!1?(P.side=En,P.needsUpdate=!0,Zi(P,Y,it),P.side=Yi,P.needsUpdate=!0,Zi(P,Y,it),P.side=Xe):Zi(P,Y,it)}this.compile=function(P,Y,it=null){it===null&&(it=P),p=ne.get(it),p.init(Y),S.push(p),it.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),P!==it&&P.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const st=new Set;return P.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const It=$.material;if(It)if(Array.isArray(It))for(let qt=0;qt<It.length;qt++){const z=It[qt];Lt(z,it,$),st.add(z)}else Lt(It,it,$),st.add(It)}),S.pop(),p=null,st},this.compileAsync=function(P,Y,it=null){const st=this.compile(P,Y,it);return new Promise($=>{function It(){if(st.forEach(function(qt){q.get(qt).currentProgram.isReady()&&st.delete(qt)}),st.size===0){$(P);return}setTimeout(It,10)}_t.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let ae=null;function te(P){ae&&ae(P)}function fe(){Me.stop()}function Jt(){Me.start()}const Me=new Qu;Me.setAnimationLoop(te),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(P){ae=P,nt.setAnimationLoop(P),P===null?Me.stop():Me.start()},nt.addEventListener("sessionstart",fe),nt.addEventListener("sessionend",Jt),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(Y),Y=nt.getCamera()),P.isScene===!0&&P.onBeforeRender(g,P,Y,C),p=ne.get(P,S.length),p.init(Y),S.push(p),Bt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),et.setFromProjectionMatrix(Bt),Tt=this.localClippingEnabled,pt=yt.init(this.clippingPlanes,Tt),m=At.get(P,y.length),m.init(),y.push(m),nt.enabled===!0&&nt.isPresenting===!0){const It=g.xr.getDepthSensingMesh();It!==null&&Ne(It,Y,-1/0,g.sortObjects)}Ne(P,Y,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(j,at),dt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,dt&&ie.addToRenderList(m,P),this.info.render.frame++,pt===!0&&yt.beginShadows();const it=p.state.shadowsArray;Wt.render(it,P,Y),pt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=m.opaque,$=m.transmissive;if(p.setupLights(),Y.isArrayCamera){const It=Y.cameras;if($.length>0)for(let qt=0,z=It.length;qt<z;qt++){const I=It[qt];un(st,$,P,I)}dt&&ie.render(P);for(let qt=0,z=It.length;qt<z;qt++){const I=It[qt];qe(m,P,I,I.viewport)}}else $.length>0&&un(st,$,P,Y),dt&&ie.render(P),qe(m,P,Y);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(g,P,Y),pe.resetDefaultState(),M=-1,_=null,S.pop(),S.length>0?(p=S[S.length-1],pt===!0&&yt.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ne(P,Y,it,st){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)it=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||et.intersectsSprite(P)){st&&$t.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Bt);const qt=tt.update(P),z=P.material;z.visible&&m.push(P,qt,z,it,$t.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||et.intersectsObject(P))){const qt=tt.update(P),z=P.material;if(st&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),$t.copy(P.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),$t.copy(qt.boundingSphere.center)),$t.applyMatrix4(P.matrixWorld).applyMatrix4(Bt)),Array.isArray(z)){const I=qt.groups;for(let Z=0,rt=I.length;Z<rt;Z++){const ot=I[Z],xt=z[ot.materialIndex];xt&&xt.visible&&m.push(P,qt,xt,it,$t.z,ot)}}else z.visible&&m.push(P,qt,z,it,$t.z,null)}}const It=P.children;for(let qt=0,z=It.length;qt<z;qt++)Ne(It[qt],Y,it,st)}function qe(P,Y,it,st){const $=P.opaque,It=P.transmissive,qt=P.transparent;p.setupLightsView(it),pt===!0&&yt.setGlobalState(g.clippingPlanes,it),st&&Rt.viewport(A.copy(st)),$.length>0&&en($,Y,it),It.length>0&&en(It,Y,it),qt.length>0&&en(qt,Y,it),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function un(P,Y,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[st.id]===void 0&&(p.state.transmissionRenderTarget[st.id]=new Rn(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Gn:pi,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));const It=p.state.transmissionRenderTarget[st.id],qt=st.viewport||A;It.setSize(qt.z,qt.w);const z=g.getRenderTarget();g.setRenderTarget(It),g.getClearColor(L),k=g.getClearAlpha(),k<1&&g.setClearColor(16777215,.5),g.clear(),dt&&ie.render(it);const I=g.toneMapping;g.toneMapping=qi;const Z=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),p.setupLightsView(st),pt===!0&&yt.setGlobalState(g.clippingPlanes,st),en(P,it,st),R.updateMultisampleRenderTarget(It),R.updateRenderTargetMipmap(It),_t.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let ot=0,xt=Y.length;ot<xt;ot++){const Et=Y[ot],ct=Et.object,Vt=Et.geometry,Gt=Et.material,Dt=Et.group;if(Gt.side===Xe&&ct.layers.test(st.layers)){const _e=Gt.side;Gt.side=En,Gt.needsUpdate=!0,ji(ct,it,st,Vt,Gt,Dt),Gt.side=_e,Gt.needsUpdate=!0,rt=!0}}rt===!0&&(R.updateMultisampleRenderTarget(It),R.updateRenderTargetMipmap(It))}g.setRenderTarget(z),g.setClearColor(L,k),Z!==void 0&&(st.viewport=Z),g.toneMapping=I}function en(P,Y,it){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,It=P.length;$<It;$++){const qt=P[$],z=qt.object,I=qt.geometry,Z=st===null?qt.material:st,rt=qt.group;z.layers.test(it.layers)&&ji(z,Y,it,I,Z,rt)}}function ji(P,Y,it,st,$,It){P.onBeforeRender(g,Y,it,st,$,It),P.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),$.onBeforeRender(g,Y,it,st,P,It),$.transparent===!0&&$.side===Xe&&$.forceSinglePass===!1?($.side=En,$.needsUpdate=!0,g.renderBufferDirect(it,Y,st,$,P,It),$.side=Yi,$.needsUpdate=!0,g.renderBufferDirect(it,Y,st,$,P,It),$.side=Xe):g.renderBufferDirect(it,Y,st,$,P,It),P.onAfterRender(g,Y,it,st,$,It)}function Zi(P,Y,it){Y.isScene!==!0&&(Y=ee);const st=q.get(P),$=p.state.lights,It=p.state.shadowsArray,qt=$.state.version,z=Ut.getParameters(P,$.state,It,Y,it),I=Ut.getProgramCacheKey(z);let Z=st.programs;st.environment=P.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(P.isMeshStandardMaterial?H:b).get(P.envMap||st.environment),st.envMapRotation=st.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,Z===void 0&&(P.addEventListener("dispose",F),Z=new Map,st.programs=Z);let rt=Z.get(I);if(rt!==void 0){if(st.currentProgram===rt&&st.lightsStateVersion===qt)return si(P,z),rt}else z.uniforms=Ut.getUniforms(P),P.onBeforeCompile(z,g),rt=Ut.acquireProgram(z,I),Z.set(I,rt),st.uniforms=z.uniforms;const ot=st.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ot.clippingPlanes=yt.uniform),si(P,z),st.needsLights=Ki(P),st.lightsStateVersion=qt,st.needsLights&&(ot.ambientLightColor.value=$.state.ambient,ot.lightProbe.value=$.state.probe,ot.directionalLights.value=$.state.directional,ot.directionalLightShadows.value=$.state.directionalShadow,ot.spotLights.value=$.state.spot,ot.spotLightShadows.value=$.state.spotShadow,ot.rectAreaLights.value=$.state.rectArea,ot.ltc_1.value=$.state.rectAreaLTC1,ot.ltc_2.value=$.state.rectAreaLTC2,ot.pointLights.value=$.state.point,ot.pointLightShadows.value=$.state.pointShadow,ot.hemisphereLights.value=$.state.hemi,ot.directionalShadowMap.value=$.state.directionalShadowMap,ot.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ot.spotShadowMap.value=$.state.spotShadowMap,ot.spotLightMatrix.value=$.state.spotLightMatrix,ot.spotLightMap.value=$.state.spotLightMap,ot.pointShadowMap.value=$.state.pointShadowMap,ot.pointShadowMatrix.value=$.state.pointShadowMatrix),st.currentProgram=rt,st.uniformsList=null,rt}function Ui(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=Wa.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function si(P,Y){const it=q.get(P);it.outputColorSpace=Y.outputColorSpace,it.batching=Y.batching,it.batchingColor=Y.batchingColor,it.instancing=Y.instancing,it.instancingColor=Y.instancingColor,it.instancingMorph=Y.instancingMorph,it.skinning=Y.skinning,it.morphTargets=Y.morphTargets,it.morphNormals=Y.morphNormals,it.morphColors=Y.morphColors,it.morphTargetsCount=Y.morphTargetsCount,it.numClippingPlanes=Y.numClippingPlanes,it.numIntersection=Y.numClipIntersection,it.vertexAlphas=Y.vertexAlphas,it.vertexTangents=Y.vertexTangents,it.toneMapping=Y.toneMapping}function Gc(P,Y,it,st,$){Y.isScene!==!0&&(Y=ee),R.resetTextureUnits();const It=Y.fog,qt=st.isMeshStandardMaterial?Y.environment:null,z=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:fr,I=(st.isMeshStandardMaterial?H:b).get(st.envMap||qt),Z=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,rt=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),ot=!!it.morphAttributes.position,xt=!!it.morphAttributes.normal,Et=!!it.morphAttributes.color;let ct=qi;st.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ct=g.toneMapping);const Vt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Gt=Vt!==void 0?Vt.length:0,Dt=q.get(st),_e=p.state.lights;if(pt===!0&&(Tt===!0||P!==_)){const nn=P===_&&st.id===M;yt.setState(st,P,nn)}let le=!1;st.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==_e.state.version||Dt.outputColorSpace!==z||$.isBatchedMesh&&Dt.batching===!1||!$.isBatchedMesh&&Dt.batching===!0||$.isBatchedMesh&&Dt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Dt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Dt.instancing===!1||!$.isInstancedMesh&&Dt.instancing===!0||$.isSkinnedMesh&&Dt.skinning===!1||!$.isSkinnedMesh&&Dt.skinning===!0||$.isInstancedMesh&&Dt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Dt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Dt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Dt.instancingMorph===!1&&$.morphTexture!==null||Dt.envMap!==I||st.fog===!0&&Dt.fog!==It||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==yt.numPlanes||Dt.numIntersection!==yt.numIntersection)||Dt.vertexAlphas!==Z||Dt.vertexTangents!==rt||Dt.morphTargets!==ot||Dt.morphNormals!==xt||Dt.morphColors!==Et||Dt.toneMapping!==ct||Dt.morphTargetsCount!==Gt)&&(le=!0):(le=!0,Dt.__version=st.version);let _n=Dt.currentProgram;le===!0&&(_n=Zi(st,Y,$));let fn=!1,$e=!1,Wn=!1;const Re=_n.getUniforms(),Mn=Dt.uniforms;if(Rt.useProgram(_n.program)&&(fn=!0,$e=!0,Wn=!0),st.id!==M&&(M=st.id,$e=!0),fn||_!==P){Rt.buffers.depth.getReversed()?(ft.copy(P.projectionMatrix),qd(ft),Yd(ft),Re.setValue(N,"projectionMatrix",ft)):Re.setValue(N,"projectionMatrix",P.projectionMatrix),Re.setValue(N,"viewMatrix",P.matrixWorldInverse);const Nn=Re.map.cameraPosition;Nn!==void 0&&Nn.setValue(N,Xt.setFromMatrixPosition(P.matrixWorld)),zt.logarithmicDepthBuffer&&Re.setValue(N,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Re.setValue(N,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,$e=!0,Wn=!0)}if($.isSkinnedMesh){Re.setOptional(N,$,"bindMatrix"),Re.setOptional(N,$,"bindMatrixInverse");const nn=$.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Re.setValue(N,"boneTexture",nn.boneTexture,R))}$.isBatchedMesh&&(Re.setOptional(N,$,"batchingTexture"),Re.setValue(N,"batchingTexture",$._matricesTexture,R),Re.setOptional(N,$,"batchingIdTexture"),Re.setValue(N,"batchingIdTexture",$._indirectTexture,R),Re.setOptional(N,$,"batchingColorTexture"),$._colorsTexture!==null&&Re.setValue(N,"batchingColorTexture",$._colorsTexture,R));const ri=it.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&re.update($,it,_n),($e||Dt.receiveShadow!==$.receiveShadow)&&(Dt.receiveShadow=$.receiveShadow,Re.setValue(N,"receiveShadow",$.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Mn.envMap.value=I,Mn.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(Mn.envMapIntensity.value=Y.environmentIntensity),$e&&(Re.setValue(N,"toneMappingExposure",g.toneMappingExposure),Dt.needsLights&&vr(Mn,Wn),It&&st.fog===!0&&Mt.refreshFogUniforms(Mn,It),Mt.refreshMaterialUniforms(Mn,st,B,X,p.state.transmissionRenderTarget[P.id]),Wa.upload(N,Ui(Dt),Mn,R)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Wa.upload(N,Ui(Dt),Mn,R),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Re.setValue(N,"center",$.center),Re.setValue(N,"modelViewMatrix",$.modelViewMatrix),Re.setValue(N,"normalMatrix",$.normalMatrix),Re.setValue(N,"modelMatrix",$.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const nn=st.uniformsGroups;for(let Nn=0,zn=nn.length;Nn<zn;Nn++){const xi=nn[Nn];W.update(xi,_n),W.bind(xi,_n)}}return _n}function vr(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Ki(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,Y,it){q.get(P.texture).__webglTexture=Y,q.get(P.depthTexture).__webglTexture=it;const st=q.get(P);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Y){const it=q.get(P);it.__webglFramebuffer=Y,it.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,it=0){C=P,E=Y,w=it;let st=!0,$=null,It=!1,qt=!1;if(P){const I=q.get(P);if(I.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(N.FRAMEBUFFER,null),st=!1;else if(I.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(I.__hasExternalTextures)R.rebindTextures(P,q.get(P.texture).__webglTexture,q.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ot=P.depthTexture;if(I.__boundDepthTexture!==ot){if(ot!==null&&q.has(ot)&&(P.width!==ot.image.width||P.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const Z=P.texture;(Z.isData3DTexture||Z.isDataArrayTexture||Z.isCompressedArrayTexture)&&(qt=!0);const rt=q.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(rt[Y])?$=rt[Y][it]:$=rt[Y],It=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?$=q.get(P).__webglMultisampledFramebuffer:Array.isArray(rt)?$=rt[it]:$=rt,A.copy(P.viewport),D.copy(P.scissor),G=P.scissorTest}else A.copy(lt).multiplyScalar(B).floor(),D.copy(wt).multiplyScalar(B).floor(),G=Qt;if(Rt.bindFramebuffer(N.FRAMEBUFFER,$)&&st&&Rt.drawBuffers(P,$),Rt.viewport(A),Rt.scissor(D),Rt.setScissorTest(G),It){const I=q.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+Y,I.__webglTexture,it)}else if(qt){const I=q.get(P.texture),Z=Y||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,I.__webglTexture,it||0,Z)}M=-1},this.readRenderTargetPixels=function(P,Y,it,st,$,It,qt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let z=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qt!==void 0&&(z=z[qt]),z){Rt.bindFramebuffer(N.FRAMEBUFFER,z);try{const I=P.texture,Z=I.format,rt=I.type;if(!zt.textureFormatReadable(Z)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-st&&it>=0&&it<=P.height-$&&N.readPixels(Y,it,st,$,oe.convert(Z),oe.convert(rt),It)}finally{const I=C!==null?q.get(C).__webglFramebuffer:null;Rt.bindFramebuffer(N.FRAMEBUFFER,I)}}},this.readRenderTargetPixelsAsync=async function(P,Y,it,st,$,It,qt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let z=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qt!==void 0&&(z=z[qt]),z){const I=P.texture,Z=I.format,rt=I.type;if(!zt.textureFormatReadable(Z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=P.width-st&&it>=0&&it<=P.height-$){Rt.bindFramebuffer(N.FRAMEBUFFER,z);const ot=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ot),N.bufferData(N.PIXEL_PACK_BUFFER,It.byteLength,N.STREAM_READ),N.readPixels(Y,it,st,$,oe.convert(Z),oe.convert(rt),0);const xt=C!==null?q.get(C).__webglFramebuffer:null;Rt.bindFramebuffer(N.FRAMEBUFFER,xt);const Et=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Xd(N,Et,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ot),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,It),N.deleteBuffer(ot),N.deleteSync(Et),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Y=null,it=0){P.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,P=arguments[1]);const st=Math.pow(2,-it),$=Math.floor(P.image.width*st),It=Math.floor(P.image.height*st),qt=Y!==null?Y.x:0,z=Y!==null?Y.y:0;R.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,it,0,0,qt,z,$,It),Rt.unbindTexture()},this.copyTextureToTexture=function(P,Y,it=null,st=null,$=0){P.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,P=arguments[1],Y=arguments[2],$=arguments[3]||0,it=null);let It,qt,z,I,Z,rt,ot,xt,Et;const ct=P.isCompressedTexture?P.mipmaps[$]:P.image;it!==null?(It=it.max.x-it.min.x,qt=it.max.y-it.min.y,z=it.isBox3?it.max.z-it.min.z:1,I=it.min.x,Z=it.min.y,rt=it.isBox3?it.min.z:0):(It=ct.width,qt=ct.height,z=ct.depth||1,I=0,Z=0,rt=0),st!==null?(ot=st.x,xt=st.y,Et=st.z):(ot=0,xt=0,Et=0);const Vt=oe.convert(Y.format),Gt=oe.convert(Y.type);let Dt;Y.isData3DTexture?(R.setTexture3D(Y,0),Dt=N.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(R.setTexture2DArray(Y,0),Dt=N.TEXTURE_2D_ARRAY):(R.setTexture2D(Y,0),Dt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Y.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Y.unpackAlignment);const _e=N.getParameter(N.UNPACK_ROW_LENGTH),le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),_n=N.getParameter(N.UNPACK_SKIP_PIXELS),fn=N.getParameter(N.UNPACK_SKIP_ROWS),$e=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ct.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,I),N.pixelStorei(N.UNPACK_SKIP_ROWS,Z),N.pixelStorei(N.UNPACK_SKIP_IMAGES,rt);const Wn=P.isDataArrayTexture||P.isData3DTexture,Re=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const Mn=q.get(P),ri=q.get(Y),nn=q.get(Mn.__renderTarget),Nn=q.get(ri.__renderTarget);Rt.bindFramebuffer(N.READ_FRAMEBUFFER,nn.__webglFramebuffer),Rt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let zn=0;zn<z;zn++)Wn&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(P).__webglTexture,$,rt+zn),P.isDepthTexture?(Re&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(Y).__webglTexture,$,Et+zn),N.blitFramebuffer(I,Z,It,qt,ot,xt,It,qt,N.DEPTH_BUFFER_BIT,N.NEAREST)):Re?N.copyTexSubImage3D(Dt,$,ot,xt,Et+zn,I,Z,It,qt):N.copyTexSubImage2D(Dt,$,ot,xt,Et+zn,I,Z,It,qt);Rt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Re?P.isDataTexture||P.isData3DTexture?N.texSubImage3D(Dt,$,ot,xt,Et,It,qt,z,Vt,Gt,ct.data):Y.isCompressedArrayTexture?N.compressedTexSubImage3D(Dt,$,ot,xt,Et,It,qt,z,Vt,ct.data):N.texSubImage3D(Dt,$,ot,xt,Et,It,qt,z,Vt,Gt,ct):P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,$,ot,xt,It,qt,Vt,Gt,ct.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,$,ot,xt,ct.width,ct.height,Vt,ct.data):N.texSubImage2D(N.TEXTURE_2D,$,ot,xt,It,qt,Vt,Gt,ct);N.pixelStorei(N.UNPACK_ROW_LENGTH,_e),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_n),N.pixelStorei(N.UNPACK_SKIP_ROWS,fn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,$e),$===0&&Y.generateMipmaps&&N.generateMipmap(Dt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,it=null,st=null,$=0){return P.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,st=arguments[1]||null,P=arguments[2],Y=arguments[3],$=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Y,it,st,$)},this.initRenderTarget=function(P){q.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),Rt.unbindTexture()},this.resetState=function(){E=0,w=0,C=null,Rt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}}class Ec{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new Ec(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nx extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class eo extends vn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=hn,h=hn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gh extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Vs=new we,Vh=new we,ba=[],Hh=new ws,ix=new we,wr=new se,Er=new pr;class gn extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ix)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ws),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),Hh.copy(t.boundingBox).applyMatrix4(Vs),this.boundingBox.union(Hh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),Er.copy(t.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),t.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),Vh.multiplyMatrices(n,Vs),wr.matrixWorld=Vh,wr.raycast(t,ba);for(let a=0,o=ba.length;a<o;a++){const l=ba[a];l.instanceId=r,l.object=this,e.push(l)}ba.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new eo(new Float32Array(s*this.count),s,this.count,Ja,ei));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class no extends Es{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wh=new we,Wl=new _c,wa=new pr,Ea=new O;class Tc extends Fe{constructor(t=new Ce,e=new no){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,t.ray.intersectsSphere(wa)===!1)return;Wh.copy(s).invert(),Wl.copy(t.ray).applyMatrix4(Wh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let v=f,x=d;v<x;v++){const m=c.getX(v);Ea.fromBufferAttribute(u,m),Xh(Ea,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let v=f,x=d;v<x;v++)Ea.fromBufferAttribute(u,v),Xh(Ea,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xh(i,t,e,n,s,r,a){const o=Wl.distanceSqToPoint(i);if(o<e){const l=new O;Wl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ui extends vn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new St:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,s=[],r=[],a=[],o=new O,l=new we;for(let d=0;d<=t;d++){const v=d/t;s[d]=this.getTangentAt(v,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(an(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(an(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ac extends vi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new St){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class sx extends Ac{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Cc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ta=new O,Bo=new Cc,Go=new Cc,Vo=new Cc;class Rc extends vi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ta.subVectors(s[0],s[1]).add(s[0]),c=Ta);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ta.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ta),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Bo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,v,x,m),Go.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,v,x,m),Vo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,v,x,m)}else this.curveType==="catmullrom"&&(Bo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Go.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Vo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Bo.calc(l),Go.calc(l),Vo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function rx(i,t){const e=1-i;return e*e*t}function ax(i,t){return 2*(1-i)*i*t}function ox(i,t){return i*i*t}function Ir(i,t,e,n){return rx(i,t)+ax(i,e)+ox(i,n)}function lx(i,t){const e=1-i;return e*e*e*t}function cx(i,t){const e=1-i;return 3*e*e*i*t}function hx(i,t){return 3*(1-i)*i*i*t}function ux(i,t){return i*i*i*t}function Ur(i,t,e,n,s){return lx(i,t)+cx(i,e)+hx(i,n)+ux(i,s)}class rf extends vi{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ur(t,s.x,r.x,a.x,o.x),Ur(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fx extends vi{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ur(t,s.x,r.x,a.x,o.x),Ur(t,s.y,r.y,a.y,o.y),Ur(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class af extends vi{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dx extends vi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class of extends vi{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class px extends vi{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y),Ir(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lf extends vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(qh(o,l.x,c.x,h.x,u.x),qh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new St().fromArray(s))}return this}}var Xl=Object.freeze({__proto__:null,ArcCurve:sx,CatmullRomCurve3:Rc,CubicBezierCurve:rf,CubicBezierCurve3:fx,EllipseCurve:Ac,LineCurve:af,LineCurve3:dx,QuadraticBezierCurve:of,QuadraticBezierCurve3:px,SplineCurve:lf});class mx extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Xl[s.type]().fromJSON(s))}return this}}class ql extends mx{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new af(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new of(this.currentPoint.clone(),new St(t,e),new St(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new rf(this.currentPoint.clone(),new St(t,e),new St(n,s),new St(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new lf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Ac(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Pc extends Ce{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=an(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new O,f=new St,d=new O,v=new O,x=new O;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(v)}for(let y=0;y<=e;y++){const S=n+y*h*s,g=Math.sin(S),T=Math.cos(S);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*g,u.y=t[E].y,u.z=t[E].x*T,a.push(u.x,u.y,u.z),f.x=y/e,f.y=E/(t.length-1),o.push(f.x,f.y);const w=l[3*E+0]*g,C=l[3*E+1],M=l[3*E+0]*T;c.push(w,C,M)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){const g=S+y*t.length,T=g,E=g+t.length,w=g+t.length+1,C=g+1;r.push(T,E,C),r.push(w,C,E)}this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("uv",new ue(o,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pc(t.points,t.segments,t.phiStart,t.phiLength)}}class io extends Pc{constructor(t=1,e=1,n=4,s=8){const r=new ql;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new io(t.radius,t.length,t.capSegments,t.radialSegments)}}class or extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new O,h=new St;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ke extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let v=0;const x=[],m=n/2;let p=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(d,2));function y(){const g=new O,T=new O;let E=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const M=[],_=C/r,A=_*(e-t)+t;for(let D=0;D<=s;D++){const G=D/s,L=G*l+o,k=Math.sin(L),V=Math.cos(L);T.x=A*k,T.y=-_*n+m,T.z=A*V,u.push(T.x,T.y,T.z),g.set(k,w,V).normalize(),f.push(g.x,g.y,g.z),d.push(G,1-_),M.push(v++)}x.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){const _=x[M][C],A=x[M+1][C],D=x[M+1][C+1],G=x[M][C+1];(t>0||M!==0)&&(h.push(_,A,G),E+=3),(e>0||M!==r-1)&&(h.push(A,D,G),E+=3)}c.addGroup(p,E,0),p+=E}function S(g){const T=v,E=new St,w=new O;let C=0;const M=g===!0?t:e,_=g===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),v++;const A=v;for(let D=0;D<=s;D++){const L=D/s*l+o,k=Math.cos(L),V=Math.sin(L);w.x=M*V,w.y=m*_,w.z=M*k,u.push(w.x,w.y,w.z),f.push(0,_,0),E.x=k*.5+.5,E.y=V*.5*_+.5,d.push(E.x,E.y),v++}for(let D=0;D<s;D++){const G=T+D,L=A+D;g===!0?h.push(L,L+1,G):h.push(L+1,L,G),C+=3}c.addGroup(p,C,g===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fi extends ke{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new fi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jr extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new O,g=new O,T=new O;for(let E=0;E<e.length;E+=3)d(e[E+0],S),d(e[E+1],g),d(e[E+2],T),l(S,g,T,y)}function l(y,S,g,T){const E=T+1,w=[];for(let C=0;C<=E;C++){w[C]=[];const M=y.clone().lerp(g,C/E),_=S.clone().lerp(g,C/E),A=E-C;for(let D=0;D<=A;D++)D===0&&C===E?w[C][D]=M:w[C][D]=M.clone().lerp(_,D/A)}for(let C=0;C<E;C++)for(let M=0;M<2*(E-C)-1;M++){const _=Math.floor(M/2);M%2===0?(f(w[C][_+1]),f(w[C+1][_]),f(w[C][_])):(f(w[C][_+1]),f(w[C+1][_+1]),f(w[C+1][_]))}}function c(y){const S=new O;for(let g=0;g<r.length;g+=3)S.x=r[g+0],S.y=r[g+1],S.z=r[g+2],S.normalize().multiplyScalar(y),r[g+0]=S.x,r[g+1]=S.y,r[g+2]=S.z}function h(){const y=new O;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const g=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;a.push(g,1-T)}v(),u()}function u(){for(let y=0;y<a.length;y+=6){const S=a[y+0],g=a[y+2],T=a[y+4],E=Math.max(S,g,T),w=Math.min(S,g,T);E>.9&&w<.1&&(S<.2&&(a[y+0]+=1),g<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,S){const g=y*3;S.x=t[g+0],S.y=t[g+1],S.z=t[g+2]}function v(){const y=new O,S=new O,g=new O,T=new O,E=new St,w=new St,C=new St;for(let M=0,_=0;M<r.length;M+=9,_+=6){y.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),g.set(r[M+6],r[M+7],r[M+8]),E.set(a[_+0],a[_+1]),w.set(a[_+2],a[_+3]),C.set(a[_+4],a[_+5]),T.copy(y).add(S).add(g).divideScalar(3);const A=m(T);x(E,_+0,y,A),x(w,_+2,S,A),x(C,_+4,g,A)}}function x(y,S,g,T){T<0&&y.x===1&&(a[S]=y.x-1),g.x===0&&g.z===0&&(a[S]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.vertices,t.indices,t.radius,t.details)}}class so extends Jr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new so(t.radius,t.detail)}}class cf extends ql{constructor(t){super(t),this.uuid=bs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ql().fromJSON(s))}return this}}const gx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=hf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=yx(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let v=e;v<s;v+=e)u=i[v],f=i[v+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Gr(r,a,e,o,l,d,0),a}};function hf(i,t,e,n,s){let r,a;if(s===Lx(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Yh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Yh(r,i[r],i[r+1],a);return a&&ro(a,a.next)&&(Hr(a),a=a.next),a}function ys(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ro(e,e.next)||He(e.prev,e,e.next)===0)){if(Hr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Gr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Tx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?xx(i,n,s,r):vx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Hr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=_x(ys(i),t,e),Gr(i,t,e,n,s,r,2)):a===2&&Mx(i,t,e,n,s,r):Gr(ys(i),t,e,n,s,r,1);break}}}function vx(i){const t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let v=n.next;for(;v!==t;){if(v.x>=h&&v.x<=f&&v.y>=u&&v.y<=d&&$s(s,o,r,l,a,c,v.x,v.y)&&He(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function xx(i,t,e,n){const s=i.prev,r=i,a=i.next;if(He(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,v=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Yl(d,v,t,e,n),y=Yl(x,m,t,e,n);let S=i.prevZ,g=i.nextZ;for(;S&&S.z>=p&&g&&g.z<=y;){if(S.x>=d&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&$s(o,h,l,u,c,f,S.x,S.y)&&He(S.prev,S,S.next)>=0||(S=S.prevZ,g.x>=d&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==a&&$s(o,h,l,u,c,f,g.x,g.y)&&He(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&$s(o,h,l,u,c,f,S.x,S.y)&&He(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;g&&g.z<=y;){if(g.x>=d&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==a&&$s(o,h,l,u,c,f,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function _x(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ro(s,r)&&uf(s,n,n.next,r)&&Vr(s,r)&&Vr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Hr(n),Hr(n.next),n=i=r),n=n.next}while(n!==i);return ys(n)}function Mx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rx(a,o)){let l=ff(a,o);a=ys(a,a.next),l=ys(l,l.next),Gr(a,t,e,n,s,r,0),Gr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function yx(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=hf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Cx(c));for(s.sort(Sx),r=0;r<s.length;r++)e=bx(s[r],e);return e}function Sx(i,t){return i.x-t.x}function bx(i,t){const e=wx(i,t);if(!e)return t;const n=ff(e,i);return ys(n,n.next),ys(e,e.next)}function wx(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&$s(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Vr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Ex(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Ex(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function Tx(i,t,e,n){let s=i;do s.z===0&&(s.z=Yl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ax(s)}function Ax(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Yl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Cx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $s(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Rx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Px(i,t)&&(Vr(i,t)&&Vr(t,i)&&Dx(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||ro(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ro(i,t){return i.x===t.x&&i.y===t.y}function uf(i,t,e,n){const s=Ca(He(i,t,e)),r=Ca(He(i,t,n)),a=Ca(He(e,n,i)),o=Ca(He(e,n,t));return!!(s!==r&&a!==o||s===0&&Aa(i,e,t)||r===0&&Aa(i,n,t)||a===0&&Aa(e,i,n)||o===0&&Aa(e,t,n))}function Aa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ca(i){return i>0?1:i<0?-1:0}function Px(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&uf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vr(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function Dx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ff(i,t){const e=new $l(i.i,i.x,i.y),n=new $l(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yh(i,t,e,n){const s=new $l(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $l(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Nr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Nr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];$h(t),jh(n,t);let a=t.length;e.forEach($h);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,jh(n,e[l]);const o=gx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function $h(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function jh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Dc extends Ce{constructor(t=new cf([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Ix;let S,g=!1,T,E,w,C;p&&(S=p.getSpacedPoints(h),g=!0,f=!1,T=p.computeFrenetFrames(h,!1),E=new O,w=new O,C=new O),f||(m=0,d=0,v=0,x=0);const M=o.extractPoints(c);let _=M.shape;const A=M.holes;if(!Nr.isClockWise(_)){_=_.reverse();for(let dt=0,bt=A.length;dt<bt;dt++){const N=A[dt];Nr.isClockWise(N)&&(A[dt]=N.reverse())}}const G=Nr.triangulateShape(_,A),L=_;for(let dt=0,bt=A.length;dt<bt;dt++){const N=A[dt];_=_.concat(N)}function k(dt,bt,N){return bt||console.error("THREE.ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(bt,N)}const V=_.length,X=G.length;function B(dt,bt,N){let Ht,_t,zt;const Rt=dt.x-bt.x,Kt=dt.y-bt.y,q=N.x-dt.x,R=N.y-dt.y,b=Rt*Rt+Kt*Kt,H=Rt*R-Kt*q;if(Math.abs(H)>Number.EPSILON){const K=Math.sqrt(b),Q=Math.sqrt(q*q+R*R),tt=bt.x-Kt/K,Ut=bt.y+Rt/K,Mt=N.x-R/Q,At=N.y+q/Q,ne=((Mt-tt)*R-(At-Ut)*q)/(Rt*R-Kt*q);Ht=tt+Rt*ne-dt.x,_t=Ut+Kt*ne-dt.y;const yt=Ht*Ht+_t*_t;if(yt<=2)return new St(Ht,_t);zt=Math.sqrt(yt/2)}else{let K=!1;Rt>Number.EPSILON?q>Number.EPSILON&&(K=!0):Rt<-Number.EPSILON?q<-Number.EPSILON&&(K=!0):Math.sign(Kt)===Math.sign(R)&&(K=!0),K?(Ht=-Kt,_t=Rt,zt=Math.sqrt(b)):(Ht=Rt,_t=Kt,zt=Math.sqrt(b/2))}return new St(Ht/zt,_t/zt)}const j=[];for(let dt=0,bt=L.length,N=bt-1,Ht=dt+1;dt<bt;dt++,N++,Ht++)N===bt&&(N=0),Ht===bt&&(Ht=0),j[dt]=B(L[dt],L[N],L[Ht]);const at=[];let lt,wt=j.concat();for(let dt=0,bt=A.length;dt<bt;dt++){const N=A[dt];lt=[];for(let Ht=0,_t=N.length,zt=_t-1,Rt=Ht+1;Ht<_t;Ht++,zt++,Rt++)zt===_t&&(zt=0),Rt===_t&&(Rt=0),lt[Ht]=B(N[Ht],N[zt],N[Rt]);at.push(lt),wt=wt.concat(lt)}for(let dt=0;dt<m;dt++){const bt=dt/m,N=d*Math.cos(bt*Math.PI/2),Ht=v*Math.sin(bt*Math.PI/2)+x;for(let _t=0,zt=L.length;_t<zt;_t++){const Rt=k(L[_t],j[_t],Ht);ft(Rt.x,Rt.y,-N)}for(let _t=0,zt=A.length;_t<zt;_t++){const Rt=A[_t];lt=at[_t];for(let Kt=0,q=Rt.length;Kt<q;Kt++){const R=k(Rt[Kt],lt[Kt],Ht);ft(R.x,R.y,-N)}}}const Qt=v+x;for(let dt=0;dt<V;dt++){const bt=f?k(_[dt],wt[dt],Qt):_[dt];g?(w.copy(T.normals[0]).multiplyScalar(bt.x),E.copy(T.binormals[0]).multiplyScalar(bt.y),C.copy(S[0]).add(w).add(E),ft(C.x,C.y,C.z)):ft(bt.x,bt.y,0)}for(let dt=1;dt<=h;dt++)for(let bt=0;bt<V;bt++){const N=f?k(_[bt],wt[bt],Qt):_[bt];g?(w.copy(T.normals[dt]).multiplyScalar(N.x),E.copy(T.binormals[dt]).multiplyScalar(N.y),C.copy(S[dt]).add(w).add(E),ft(C.x,C.y,C.z)):ft(N.x,N.y,u/h*dt)}for(let dt=m-1;dt>=0;dt--){const bt=dt/m,N=d*Math.cos(bt*Math.PI/2),Ht=v*Math.sin(bt*Math.PI/2)+x;for(let _t=0,zt=L.length;_t<zt;_t++){const Rt=k(L[_t],j[_t],Ht);ft(Rt.x,Rt.y,u+N)}for(let _t=0,zt=A.length;_t<zt;_t++){const Rt=A[_t];lt=at[_t];for(let Kt=0,q=Rt.length;Kt<q;Kt++){const R=k(Rt[Kt],lt[Kt],Ht);g?ft(R.x,R.y+S[h-1].y,S[h-1].x+N):ft(R.x,R.y,u+N)}}}et(),pt();function et(){const dt=s.length/3;if(f){let bt=0,N=V*bt;for(let Ht=0;Ht<X;Ht++){const _t=G[Ht];Bt(_t[2]+N,_t[1]+N,_t[0]+N)}bt=h+m*2,N=V*bt;for(let Ht=0;Ht<X;Ht++){const _t=G[Ht];Bt(_t[0]+N,_t[1]+N,_t[2]+N)}}else{for(let bt=0;bt<X;bt++){const N=G[bt];Bt(N[2],N[1],N[0])}for(let bt=0;bt<X;bt++){const N=G[bt];Bt(N[0]+V*h,N[1]+V*h,N[2]+V*h)}}n.addGroup(dt,s.length/3-dt,0)}function pt(){const dt=s.length/3;let bt=0;Tt(L,bt),bt+=L.length;for(let N=0,Ht=A.length;N<Ht;N++){const _t=A[N];Tt(_t,bt),bt+=_t.length}n.addGroup(dt,s.length/3-dt,1)}function Tt(dt,bt){let N=dt.length;for(;--N>=0;){const Ht=N;let _t=N-1;_t<0&&(_t=dt.length-1);for(let zt=0,Rt=h+m*2;zt<Rt;zt++){const Kt=V*zt,q=V*(zt+1),R=bt+Ht+Kt,b=bt+_t+Kt,H=bt+_t+q,K=bt+Ht+q;Xt(R,b,H,K)}}}function ft(dt,bt,N){l.push(dt),l.push(bt),l.push(N)}function Bt(dt,bt,N){$t(dt),$t(bt),$t(N);const Ht=s.length/3,_t=y.generateTopUV(n,s,Ht-3,Ht-2,Ht-1);ee(_t[0]),ee(_t[1]),ee(_t[2])}function Xt(dt,bt,N,Ht){$t(dt),$t(bt),$t(Ht),$t(bt),$t(N),$t(Ht);const _t=s.length/3,zt=y.generateSideWallUV(n,s,_t-6,_t-3,_t-2,_t-1);ee(zt[0]),ee(zt[1]),ee(zt[3]),ee(zt[1]),ee(zt[2]),ee(zt[3])}function $t(dt){s.push(l[dt*3+0]),s.push(l[dt*3+1]),s.push(l[dt*3+2])}function ee(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ux(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Xl[s.type]().fromJSON(s)),new Dc(n,t.options)}}const Ix={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new St(r,a),new St(o,l),new St(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],v=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new St(a,1-l),new St(c,1-u),new St(f,1-v),new St(x,1-p)]:[new St(o,1-l),new St(h,1-u),new St(d,1-v),new St(m,1-p)]}};function Ux(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ps extends Jr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ps(t.radius,t.detail)}}class Wr extends Jr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wr(t.radius,t.detail)}}class $i extends Ce{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new O,v=new St;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),v.x=(d.x/e+1)/2,v.y=(d.y/e+1)/2,h.push(v.x,v.y)}u+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const y=p+m,S=y,g=y+n+1,T=y+n+2,E=y+1;o.push(S,g,E),o.push(g,T,E)}}this.setIndex(o),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class gi extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new O,f=new O,d=[],v=[],x=[],m=[];for(let p=0;p<=n;p++){const y=[],S=p/n;let g=0;p===0&&a===0?g=.5/e:p===n&&l===Math.PI&&(g=-.5/e);for(let T=0;T<=e;T++){const E=T/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+S*o),v.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+g,1-S),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const S=h[p][y+1],g=h[p][y],T=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&d.push(S,g,E),(p!==n-1||l<Math.PI)&&d.push(g,T,E)}this.setIndex(d),this.setAttribute("position",new ue(v,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ks extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new O,u=new O,f=new O;for(let d=0;d<=n;d++)for(let v=0;v<=s;v++){const x=v/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let v=1;v<=s;v++){const x=(s+1)*d+v-1,m=(s+1)*(d-1)+v-1,p=(s+1)*(d-1)+v,y=(s+1)*d+v;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Nx extends Ve{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class zx extends Es{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class ze extends Es{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lc extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Fx extends Lc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ho=new we,Zh=new O,Kh=new O;class df{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yc,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zh),Kh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kh),e.updateMatrixWorld(),Ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ho)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Jh=new we,Tr=new O,Wo=new O;class Ox extends df{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new Le(2,1,1,1),new Le(0,1,1,1),new Le(3,1,1,1),new Le(1,1,1,1),new Le(3,0,1,1),new Le(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Tr),Wo.copy(n.position),Wo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Wo),n.updateMatrixWorld(),s.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh)}}class Xr extends Lc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ox}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kx extends df{constructor(){super(new Sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bx extends Lc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new kx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qh(){return performance.now()}const tu=new we;class Gx{constructor(t,e,n=0,s=1/0){this.ray=new _c(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return tu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tu),this}intersectObject(t,e=!0,n=[]){return jl(t,this,n,e),n.sort(eu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)jl(t[s],this,n,e);return n.sort(eu),n}}function eu(i,t){return i.distance-t.distance}function jl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)jl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);const mn=(i,t={})=>new ze({color:i,flatShading:!0,...t});function Ra(i){const t=i.map(a=>a.toNonIndexed()),e=t.reduce((a,o)=>a+o.attributes.position.count,0),n=new Float32Array(e*3);let s=0;for(const a of t)n.set(a.attributes.position.array,s),s+=a.attributes.position.array.length;const r=new Ce;return r.setAttribute("position",new Ue(n,3)),r.computeVertexNormals(),r}function Vx(i,t,e,n,s,r){const a=r.id,{heightAt:o,pathDist:l,plinths:c}=t,h=t.lighthouse.pos,u=new Fe,f=new Ct,d=[],v=(F,ht,Nt,Lt=2,ae=5)=>l(F,ht)>Nt&&Math.hypot(F-h.x,ht-h.z)>ae&&!c.some(te=>Math.hypot(te.x-F,te.z-ht)<Lt),x=(F,ht,Nt=F*20)=>{const Lt=[];for(let ae=0;ae<Nt&&Lt.length<F;ae++){const te=(n()-.5)*104,fe=(n()-.5)*104,Jt=o(te,fe);ht(te,fe,Jt)&&Lt.push({x:te,z:fe,h:Jt,r:n(),s:n()})}return Lt},m=(F,ht,Nt,Lt,ae=!1)=>{const te=new gn(F,ht,Math.max(1,Nt.length));return te.count=Nt.length,Nt.forEach((fe,Jt)=>{Lt(fe,Jt,te),u.updateMatrix(),te.setMatrixAt(Jt,u.matrix)}),te.instanceColor&&(te.instanceColor.needsUpdate=!0),te.castShadow=ae,te.receiveShadow=!0,i.add(te),te},p=(e.mobile?.55:1)*1.8,y=(()=>{const F=[[-.9,.5,.05],[-.45,.68,-.06],[0,.78,.02],[.45,.66,-.04],[.9,.48,.06]].map(([ae,te,fe])=>{const Jt=new fi(.045,te,3);return Jt.translate(0,te/2,0),Jt.rotateZ(ae*.45),Jt.rotateX(fe*3),Jt.translate(ae*.09,0,fe),Jt}),ht=Ra(F),Nt=ht.attributes.position,Lt=[];for(let ae=0;ae<Nt.count;ae++){const te=be.clamp(Nt.getY(ae)/.7,0,1),fe=.5+.7*te;Lt.push(fe,fe,fe*.95)}return ht.setAttribute("color",new ue(Lt,3)),ht})(),S=x(Math.round(280*p),(F,ht,Nt)=>Nt>.8&&v(F,ht,1.7,1.7,4.4));m(y,mn("#ffffff",{vertexColors:!0}),S,(F,ht,Nt)=>{u.position.set(F.x,F.h-.05,F.z),u.rotation.set(0,F.r*6,0),u.scale.setScalar(.8+F.s*.7),Nt.setColorAt(ht,f.set(a==="vinter"?F.s<.5?"#c8d4c0":"#e6eef4":a==="vulkan"?F.s<.5?"#5a6a3a":"#7a7a4a":F.s<.5?"#7fae4e":"#9cc45e"))});const g=x(Math.round((a==="vinter"?0:a==="vulkan"?30:120)*p),(F,ht,Nt)=>Nt>.85&&v(F,ht,1.9,2,4.5)),T=new ke(.025,.03,.4,4);T.translate(0,.2,0);const E=new ps(.11,0);E.translate(0,.42,0);const w=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];if(m(T,mn("#5f8f3a"),g,F=>{u.position.set(F.x,F.h-.03,F.z),u.rotation.set(0,0,0),u.scale.setScalar(.9+F.s*.6)}),m(E,mn("#ffffff"),g,(F,ht,Nt)=>{u.position.set(F.x,F.h-.03,F.z),u.scale.setScalar(.9+F.s*.6),Nt.setColorAt(ht,f.set(w[Math.floor(F.r*w.length)]))}),a!=="vulkan"){const F=(()=>{const Lt=[],ae=[];for(let Jt=0;Jt<8;Jt++){const Me=Jt/8*Math.PI*2,Ne=.32;Lt.push(0,0,0,Math.cos(Me)*.12,0,Math.sin(Me)*.12,Math.cos(Me-Ne)*.045,0,Math.sin(Me-Ne)*.045),Lt.push(0,0,0,Math.cos(Me+Ne)*.045,0,Math.sin(Me+Ne)*.045,Math.cos(Me)*.12,0,Math.sin(Me)*.12);for(let qe=0;qe<6;qe++)ae.push(1,1,1)}for(let Jt=0;Jt<6;Jt++){const Me=Jt/6*Math.PI*2,Ne=(Jt+1)/6*Math.PI*2;Lt.push(0,.012,0,Math.cos(Ne)*.035,.012,Math.sin(Ne)*.035,Math.cos(Me)*.035,.012,Math.sin(Me)*.035);for(let qe=0;qe<3;qe++)ae.push(1,.78,.18)}const fe=new Ce;return fe.setAttribute("position",new ue(Lt,3)),fe.setAttribute("color",new ue(ae,3)),fe.setAttribute("normal",new ue(new Array(Lt.length/3).fill(0).flatMap(()=>[0,1,0]),3)),fe})(),ht=x(Math.round((a==="vinter"?10:60)*p),(Lt,ae,te)=>te>.9&&v(Lt,ae,1.6,2,4.5)),Nt=[];for(const Lt of ht){const ae=5+Math.floor(Lt.r*9);for(let te=0;te<ae;te++){const fe=n()*6.28,Jt=Math.sqrt(n())*1.6,Me=Lt.x+Math.cos(fe)*Jt,Ne=Lt.z+Math.sin(fe)*Jt,qe=o(Me,Ne);qe>.85&&v(Me,Ne,1.4,2,4.5)&&Nt.push({x:Me,z:Ne,h:qe,r:n(),s:n()})}}m(F,new ze({color:"#ffffff",vertexColors:!0,side:Xe}),Nt,(Lt,ae,te)=>{u.position.set(Lt.x,Lt.h+.035,Lt.z),u.rotation.set((Lt.s-.5)*.3,Lt.r*6.28,0),u.scale.setScalar(1.3+Lt.s*.7),te.setColorAt(ae,f.setRGB(1,.97+Lt.r*.03,.94+Lt.s*.06))})}const C=x(Math.round((a==="tak"?36:0)*p),(F,ht,Nt)=>Nt>1&&v(F,ht,2.4,2.4,5)),M=new gi(.22,8,4,0,Math.PI*2,0,Math.PI/2);M.scale(1,.7,1),M.translate(0,.28,0);const _=new ke(.07,.09,.3,6);_.translate(0,.14,0),m(_,mn("#f4ead6"),C,F=>{u.position.set(F.x,F.h-.03,F.z),u.rotation.set(0,0,(F.r-.5)*.3),u.scale.setScalar(.8+F.s)},!0),m(M,mn("#ffffff"),C,(F,ht,Nt)=>{u.position.set(F.x,F.h-.03,F.z),u.rotation.set(0,0,(F.r-.5)*.3),u.scale.setScalar(.8+F.s),Nt.setColorAt(ht,f.set(F.r<.6?"#d8453a":"#c89a5a"))},!0);const A=Ra([[-.08,0],[.07,.05],[0,-.07]].map(([F,ht],Nt)=>{const Lt=new fi(.04,1.1+Nt*.2,3);return Lt.translate(F,.55+Nt*.1,ht),Lt}).concat([(()=>{const F=new io(.05,.18,2,4);return F.translate(.07,1.25,.05),F})()])),D=x(Math.round(150*p),(F,ht,Nt)=>Nt>.05&&Nt<.55&&v(F,ht,2.2,2,5),6e3),G=m(A,mn(a==="vinter"?"#a89878":a==="vulkan"?"#5a5a3a":"#9aa856"),D,F=>{u.position.set(F.x,F.h-.1,F.z),u.rotation.set(0,F.r*6,0),u.scale.setScalar(.8+F.s*.6)}),L=[],k=[];for(const F of t.paths)for(const ht of[-1,1]){let Nt=null,Lt=0,ae=0;for(let te=2;te<F.length-7;te+=1.7){const fe=te/F.length,Jt=F.curve.getPointAt(fe),Me=F.curve.getTangentAt(fe),Ne=Jt.x-Me.z*ht*2.25,qe=Jt.z+Me.x*ht*2.25,un=o(Ne,qe);if(!(un>.5&&ae<=0&&v(Ne,qe,1.9,2.6,6))){Nt=null,ae>0&&ae--;continue}L.push({x:Ne,z:qe,h:un}),Nt&&k.push({a:Nt,b:{x:Ne,z:qe,h:un}}),Nt={x:Ne,z:qe,h:un},++Lt>4+Math.floor(n()*5)&&(Lt=0,Nt=null,ae=3+Math.floor(n()*5))}}const V=new An(.14,.8,.14);V.translate(0,.4,0);const X=new An(1,.07,.06),B=mn("#a07650");m(V,B,L,F=>{u.position.set(F.x,F.h-.05,F.z),u.rotation.set(0,n()*.3,(n()-.5)*.12),u.scale.set(1,1,1)},!0);const j=k.flatMap(F=>[{...F,y:.32},{...F,y:.62}]);m(X,B,j,({a:F,b:ht,y:Nt})=>{const Lt=Math.hypot(ht.x-F.x,ht.z-F.z);u.position.set((F.x+ht.x)/2,(F.h+ht.h)/2+Nt-.05,(F.z+ht.z)/2),u.rotation.set(0,-Math.atan2(ht.z-F.z,ht.x-F.x),0),u.scale.set(Lt,1,1)},!0);const at=r.dockTheta??-2.35,lt=new St(Math.cos(at),Math.sin(at)),wt=s(at);let Qt=wt-6;for(let F=wt-10;F<wt+4;F+=.25)if(o(lt.x*F,lt.y*F)<.3){Qt=F;break}const et=new xe,pt=mn("#b48a5e"),Tt=mn("#6e4a2c"),ft=8,Bt=Qt-2.5;for(let F=0;F<ft/.55;F++){const ht=new se(new An(.5,.12,2.2),pt);ht.position.set(Bt+F*.55,.75+(n()-.5)*.04,0),ht.rotation.y=(n()-.5)*.05,ht.castShadow=ht.receiveShadow=!0,et.add(ht)}for(let F=0;F<=ft;F+=2)for(const ht of[-1,1]){const Nt=new se(new ke(.12,.12,2.2,6),Tt);Nt.position.set(Bt+F,.1,ht*1.05),Nt.castShadow=!0,et.add(Nt)}et.rotation.y=-at,i.add(et);const Xt=new xe,$t=new ke(.9,.9,3.4,10,1,!0,0,Math.PI);$t.rotateZ(Math.PI/2),$t.rotateX(Math.PI/2),$t.scale(1,.6,.7);const ee=new se($t,mn("#3f6f9a",{side:Xe}));ee.rotation.y=Math.PI/2,ee.castShadow=!0,Xt.add(ee);for(const F of[-.6,.6]){const ht=new se(new An(.3,.08,1.2),pt);ht.position.set(F,-.15,0),Xt.add(ht)}const dt=new se(new An(2.4,.06,.12),pt);dt.position.set(.2,.05,.4),dt.rotation.y=.3,Xt.add(dt);const bt=lt.x*(Bt+ft-1)+-lt.y*2.1,N=lt.y*(Bt+ft-1)+lt.x*2.1;Xt.position.set(bt,.3,N),Xt.rotation.y=-at,i.add(Xt);const Ht=new xe,_t=new se(new Hn(3,1.4,10,5),new Te({color:"#4a3a2a",wireframe:!0}));_t.position.y=1;const zt=_t.geometry.attributes.position;for(let F=0;F<zt.count;F++)zt.setZ(F,Math.sin(zt.getX(F)/3*Math.PI+1.5)*.15-Math.abs(zt.getY(F))*.05);Ht.add(_t);for(const F of[-1.6,1.6]){const ht=new se(new ke(.07,.09,2,5),Tt);ht.position.set(F,.9,0),ht.castShadow=!0,Ht.add(ht)}for(let F=0;F<5;F++){const ht=new se(new gi(.09,6,4),mn("#f0a43a"));ht.position.set(-1.2+F*.6,1.66,.05),Ht.add(ht)}const Rt=Qt-4.5,Kt=4.2,q=lt.x*Rt-lt.y*Kt,R=lt.y*Rt+lt.x*Kt;Ht.position.set(q,o(q,R)-.1,R),Ht.rotation.y=-at+Math.PI/2,i.add(Ht),d.push({x:q,z:R,r:1.4});const b=new ke(.42,.42,.95,10);b.translate(0,.47,0);const H=new ke(.44,.44,.08,10),K=new An(.8,.8,.8);K.translate(0,.4,0);const Q=[],tt=(F,ht,Nt,Lt)=>{for(let ae=0;ae<60&&Nt>0;ae++){const te=F+(n()-.5)*6,fe=ht+(n()-.5)*6,Jt=o(te,fe);Jt<.4||!v(te,fe,2.3,2.4,4.6)||Q.some(Me=>Math.hypot(Me.x-te,Me.z-fe)<1.1)||(Q.push({x:te,z:fe,h:Jt,kind:Lt??(n()<.6?"barrel":"crate"),r:n()}),Nt--)}};tt(lt.x*(Qt-2.5),lt.y*(Qt-2.5),5),tt(h.x+6,h.z+1,3,"barrel"),tt(h.x-6,h.z+2,2);const Ut=Q.filter(F=>F.kind==="barrel"),Mt=Q.filter(F=>F.kind==="crate");m(b,mn("#8a5a36"),Ut,F=>{u.position.set(F.x,F.h-.05,F.z),u.rotation.set(0,F.r*6,0),u.scale.setScalar(1)},!0),m(H,mn("#3e3a38"),Ut.flatMap(F=>[{...F,y:.2},{...F,y:.75}]),F=>{u.position.set(F.x,F.h-.05+F.y,F.z)},!1),m(K,mn("#b8925e"),Mt,F=>{u.position.set(F.x,F.h-.05,F.z),u.rotation.set(0,F.r*6,0),u.scale.setScalar(.8+F.r*.4)},!0);for(const F of Q)d.push({x:F.x,z:F.z,r:.55});const At=x(Math.round(380*p),(F,ht,Nt)=>Nt>.9&&v(F,ht,1.6,1.6,4.4)),ne=new ps(.06,0);ne.translate(0,.06,0),m(ne,new ze({color:a==="vulkan"?"#ff9a5a":"#fffdf4"}),At,F=>{u.position.set(F.x,F.h-.02,F.z),u.rotation.set(0,0,0),u.scale.setScalar(.8+F.s*.8)});const yt=(F,ht,Nt)=>{const Lt=[];for(let ae=0;ae<F*40&&Lt.length<F;ae++){const te=(n()-.5)*130,fe=(n()-.5)*130,Jt=o(te,fe),Me=.05-Jt;Me>ht&&Me<Nt&&Math.hypot(te-h.x,fe-h.z)>6&&Lt.push({x:te,z:fe,h:Jt,r:n(),s:n()})}return Lt},Wt=Ra([0,1,2].map(F=>{const ht=new fi(.08,.9+F*.25,3);return ht.translate((F-1)*.12,.45+F*.12,F%2*.1),ht.rotateZ((F-1)*.25),ht})),ie=yt(Math.round(90*p),.35,1.8),re=m(Wt,mn("#4f9a5a"),ie,F=>{u.position.set(F.x,F.h,F.z),u.rotation.set(0,F.r*6,0),u.scale.setScalar(.8+F.s*.7)}),jt=Ra([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([F,ht,Nt])=>{const Lt=new ps(Nt,0);return Lt.translate(F,Nt*.8,ht),Lt})),ge=yt(Math.round((a==="tak"?28:0)*p),.5,1.6),oe=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];m(jt,mn("#ffffff"),ge,(F,ht,Nt)=>{u.position.set(F.x,F.h,F.z),u.rotation.set(0,F.r*6,0),u.scale.setScalar(.8+F.s*.9),Nt.setColorAt(ht,f.set(oe[Math.floor(F.r*oe.length)]))});const pe=new Wr(.16,0);pe.scale(.45,.3,1.4);const W=yt(e.mobile?5:8,.9,2.6).map(F=>({...F,rad:2+F.s*3,speed:(.25+F.r*.3)*(F.r<.5?1:-1)})),Pt=9,nt=new gn(pe,new Te({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,W.length*Pt));nt.count=W.length*Pt,nt.renderOrder=1,i.add(nt);const vt=Array.from({length:Pt},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),Ot=F=>{Xt.position.y=.3+Math.sin(F*1.2)*.08,Xt.rotation.z=Math.sin(F*.9)*.04,Xt.rotation.x=Math.sin(F*1.3+1)*.03,W.forEach((ht,Nt)=>{const Lt=F*ht.speed+ht.r*6,ae=ht.x+Math.cos(Lt)*ht.rad,te=ht.z+Math.sin(Lt)*ht.rad,fe=Math.atan2(-Math.sin(Lt)*ht.speed,Math.cos(Lt)*ht.speed);for(let Jt=0;Jt<Pt;Jt++){const[Me,Ne,qe,un]=vt[Jt];u.position.set(ae+Me+Math.sin(F*2+un)*.1,Math.max(o(ae,te)+.25,-.75)+Ne,te+qe),u.rotation.set(0,fe+Math.sin(F*6+un)*.15,0),u.scale.setScalar(1),u.updateMatrix(),nt.setMatrixAt(Nt*Pt+Jt,u.matrix)}}),nt.instanceMatrix.needsUpdate=!0,!((F*60|0)%2)&&(D.forEach((ht,Nt)=>{u.position.set(ht.x,ht.h-.1,ht.z),u.rotation.set(Math.sin(F*1.7+ht.x*.3)*.08,ht.r*6,Math.cos(F*1.4+ht.z*.3)*.08),u.scale.setScalar(.8+ht.s*.6),u.updateMatrix(),G.setMatrixAt(Nt,u.matrix)}),G.instanceMatrix.needsUpdate=!0,ie.forEach((ht,Nt)=>{u.position.set(ht.x,ht.h,ht.z),u.rotation.set(Math.sin(F*1.1+ht.x)*.12,ht.r*6,Math.cos(F*.9+ht.z)*.12),u.scale.setScalar(.8+ht.s*.7),u.updateMatrix(),re.setMatrixAt(Nt,u.matrix)}),re.instanceMatrix.needsUpdate=!0)};et.updateMatrixWorld(!0);const Ft=[];return et.children.forEach(F=>{if(F.geometry.type==="CylinderGeometry"){const ht=F.getWorldPosition(new O);Ft.push({x:ht.x,z:ht.z,r:.15})}}),Ft.push({x:bt,z:N,r:.9}),{colliders:d,update:Ot,obstacles:Ft}}function nu(i,{heightTex:t,ext:e,grid:n,quality:s,sunDir:r,colors:a,level:o=.05,size:l=220,center:c=[0,0],maxDepth:h=100}){const u=Qn.merge([kt.fog,{uTime:{value:0},uHeight:{value:t},uExt:{value:e},uGrid:{value:n},uLevel:{value:o},uMaxDepth:{value:h},uShallow:{value:new Ct(a.shallow)},uMid:{value:new Ct(a.mid)},uDeep:{value:new Ct(a.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*a.caustic}}]);u.uHeight.value=t;const f=new Ve({uniforms:u,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
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
      }`}),d=l<50?8:s.mobile?40:64,v=new Hn(l,l,d,d);v.rotateX(-Math.PI/2);const x=new se(v,f);return x.position.set(c[0],o,c[1]),x.renderOrder=2,i.add(x),{mesh:x,update(m){u.uTime.value=m}}}function iu(i,t){const e=new eo(Float32Array.from(i),t,t,Ja,ei);return e.magFilter=e.minFilter=hn,e.generateMipmaps=!1,e.needsUpdate=!0,e}const Zl={uOlPx:{value:2},uOlRes:{value:new St(1,1)},uInk:{value:new Ct("#1f1a1c")}},Hx=.16,Wx=.65,Kl={rock:new Set,tree:new Set,tower:new Set,figure:new Set},Jl={rock:!0,tree:!0,tower:!0,figure:!0};function Xx(i,t,e,n){Zl.uOlPx.value=i*t,Zl.uOlRes.value.set(Math.max(1,e*t),Math.max(1,n*t))}function mf(i){for(const t in Kl)Jl[t]=!!i[t],Kl[t].forEach(e=>e.visible=Jl[t])}function gf(i){if(i.attributes.olNormal)return;i.attributes.normal||i.computeVertexNormals();const t=i.attributes.position,e=i.attributes.normal,n=t.count,s=new Map,r=new Array(n);for(let o=0;o<n;o++){const l=`${Math.round(t.getX(o)*1e4)},${Math.round(t.getY(o)*1e4)},${Math.round(t.getZ(o)*1e4)}`;r[o]=l;const c=s.get(l)||[0,0,0];c[0]+=e.getX(o),c[1]+=e.getY(o),c[2]+=e.getZ(o),s.set(l,c)}const a=new Float32Array(n*3);for(let o=0;o<n;o++){const l=s.get(r[o]),c=Math.hypot(l[0],l[1],l[2])||1;a[o*3]=l[0]/c,a[o*3+1]=l[1]/c,a[o*3+2]=l[2]/c}i.setAttribute("olNormal",new Ue(a,3))}const Xo=new Map;function vf(i,t,e,n){const s=`${i?i.uuid:"batch"}|${t}|${e}|${n}`;if(Xo.has(s))return Xo.get(s);const r=new Te({side:En,vertexColors:e});return r.color.copy(e||!i?new Ct(1,1,1):i.color).multiplyScalar(Hx),r.visible=Jl[t],r.onBeforeCompile=a=>{Object.assign(a.uniforms,Zl),a.vertexShader=`attribute vec3 olNormal;
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
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, ${Wx.toFixed(2)});`),n&&(a.uniforms.uKeep=lr.uKeep,a.uniforms.uRad=lr.uRad,a.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+a.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
          if (k > 0.0 && vOlZ < uKeep.z + 0.8) { // kronen ligger ~2 enheter nærmere kameraet enn foten
            float b = mod(floor(gl_FragCoord.x) + 2.0 * floor(gl_FragCoord.y), 4.0) / 4.0;
            if (k * 0.9 > b + 0.05) discard;
          }
        }`))},r.customProgramCacheKey=()=>`ol${n?"f":""}`,Kl[t].add(r),Xo.set(s,r),r}const xf=i=>{const t=i.material;return i.isMesh&&!Array.isArray(t)&&(t.isMeshLambertMaterial||t.isMeshStandardMaterial)&&!t.transparent&&t.side!==Xe};function Ql(i,t,e=!1){if(!xf(i))return null;gf(i.geometry);const n=!!(i.material.vertexColors&&i.geometry.attributes.color),s=new gn(i.geometry,vf(i.material,t,n,e),i.instanceMatrix.count);return s.instanceMatrix=i.instanceMatrix,s.count=i.count,s.frustumCulled=!1,s.renderOrder=1,s.onBeforeRender=()=>{s.count=i.count},i.add(s),s}const su=512,ru=new Map;let tc=null;function qx(i){tc=i}function Yx(i,t){const e=`${i.uuid}|${t}`;let n=ru.get(e);if(n)return n;gf(i);const s=new gn(i,vf(null,t,!1,!1),su);return s.instanceMatrix.setUsage(Yc),s.setColorAt(0,new Ct),s.instanceColor.setUsage(Yc),s.count=0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.renderOrder=1,s.raycast=()=>{},n={mesh:s,parts:[]},s.onBeforeRender=()=>{const r=s.instanceMatrix.array,a=s.instanceColor.array;let o=0;for(let l=n.parts.length-1;l>=0;l--){const c=n.parts[l];let h=c,u=!0;for(;h.parent;){if(!h.visible){u=!1;break}h=h.parent}if(h!==tc){++c.userData.olMiss>300&&n.parts.splice(l,1);continue}if(c.userData.olMiss=0,!u||o>=su)continue;r.set(c.matrixWorld.elements,o*16);const f=c.material.color;a[o*3]=f.r,a[o*3+1]=f.g,a[o*3+2]=f.b,o++}s.count=o,o&&(s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,o*16),s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,o*3),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0)},tc.add(s),ru.set(e,n),n}function Qr(i,t){return i.traverse(e=>{!xf(e)||e.userData.noOutline||(e.userData.olMiss=0,Yx(e.geometry,t).parts.push(e))}),i}function Ss(i){const t=i.map(([u])=>u.index?u.toNonIndexed():u),e=t.reduce((u,f)=>u+f.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Ct,a=new O;let o=0;t.forEach((u,f)=>{const d=i[f][1],v=u.attributes.position;for(let x=0;x<v.count;x++)a.fromBufferAttribute(v,x),d(a,r),n.set([a.x,a.y,a.z],(o+x)*3),s.set([r.r,r.g,r.b],(o+x)*3);o+=v.count});const l=new Ce;l.setAttribute("position",new Ue(n,3)),l.setAttribute("color",new Ue(s,3)),l.computeVertexNormals();let c=0;const h=l.attributes.normal;return t.forEach((u,f)=>{const d=i[f][2],v=u.attributes.position.count;if(d)for(let x=0;x<v;x++)a.fromBufferAttribute(l.attributes.position,c+x).sub(d).normalize(),h.setXYZ(c+x,a.x,a.y,a.z);c+=v}),l}const ec=.7,nc=3.8;function $x(){const i=[],e=nc/8,n=new Ct("#7a5434"),s=new Ct("#a57a4e");for(let r=0;r<8;r++){const a=r/8,o=(r+1)/8,l=.24-a*.08,c=.24-o*.08,h=new ke(c,l*1.12,e,7,1),u=h.attributes.position;for(let f=0;f<u.count;f++){const d=u.getY(f)+e/2+r*e,v=d/nc;u.setXYZ(f,u.getX(f)+ec*v*v,d,u.getZ(f))}i.push([h,(f,d)=>d.copy(n).lerp(s,f.y/e%1)])}return Ss(i)}function jx(i){const n=[],s=[];for(let a=0;a<=12;a++){const o=a/12;s.push(new O(0,.35*o-1.25*o*o,o*2.7))}for(let a=0;a<12;a++){const o=a/12,l=s[a],c=s[a+1],h=.62*Math.sin(Math.PI*Math.min(1,o*1.1+.08))+.05;for(const u of[-1,1]){const f=new O(u*h,l.y-.08-h*.25,l.z+.32);n.push(l.x,l.y,l.z,c.x,c.y,c.z,f.x,f.y,f.z)}}const r=new Ce;return r.setAttribute("position",new ue(n,3)),r}function Zx(){const i=[],t=new Ct("#3f8a3a"),e=new Ct("#9ad25a"),n=8;for(let s=0;s<n;s++){const r=jx();r.rotateX(-.15+s%2*.25),r.rotateY(s/n*Math.PI*2+s%2*.2),i.push([r,(a,o)=>{const l=Math.hypot(a.x,a.z);o.copy(t).lerp(e,Math.min(1,l/2.4))}])}for(let s=0;s<3;s++){const r=new gi(.16,6,4);r.translate(Math.cos(s*2.1)*.18,-.2,Math.sin(s*2.1)*.18),i.push([r,(a,o)=>o.set("#6b4a2a")])}return Ss(i)}function au(i,t,e){const n=i.map(([s,r,a,o],l)=>{const c=new ps(o,2),h=c.attributes.position;for(let u=0;u<h.count;u++){const f=h.getX(u),d=h.getY(u),v=h.getZ(u),x=1+.07*Math.sin(f*7+l)*Math.sin(d*6)+.05*Math.sin(v*9+d*4);h.setXYZ(u,f*x,d*x*.92,v*x)}return c.translate(s,r,a),[c,(u,f)=>f.copy(e).lerp(t,be.smoothstep(u.y,r-o*.6,r+o*.9)),new O(s,r,a)]});return Ss(n)}function Kx(i){const t=[],e=new Ct("#2f6a48"),n=new Ct("#4a8a5a"),s=new Ct("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,a,o])=>{const l=new fi(r,a,10,2),c=l.attributes.position;for(let h=0;h<c.count;h++)c.getY(h)<-a/2+.01&&c.setY(h,c.getY(h)+Math.sin(h*1.7)*.12);l.translate(0,o,0),t.push([l,(h,u)=>{const f=(h.y-o+a/2)/a;u.copy(e).lerp(n,f),i&&f>.12&&u.lerp(s,Math.min(1,(f-.12)*2.6))}])}),Ss(t)}function Jx(){const i=[],t=new ke(.12,.26,3,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getY(n);e.setX(n,e.getX(n)+Math.sin(s*1.7)*.12)}return t.translate(0,1.5,0),i.push([t,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,a])=>{const o=new ke(.03,.08,a,4);o.translate(0,a/2,0),o.rotateZ(r),o.translate(n*.3,s,0),i.push([o,(l,c)=>c.set("#2e2622")])}),Ss(i)}const lr={uKeep:{value:new O(-1e4,-1e4,0)},uRad:{value:120}};function ou(i){return i.onBeforeCompile=t=>{t.uniforms.uKeep=lr.uKeep,t.uniforms.uRad=lr.uRad,t.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+t.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      {
        float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
        if (k > 0.0 && -vViewPosition.z < uKeep.z - 1.2) {
          float b = mod(floor(gl_FragCoord.x) + 2.0 * floor(gl_FragCoord.y), 4.0) / 4.0;
          if (k * 0.9 > b + 0.05) discard;
        }
      }`)},i}function Qx(i,t,e,n){const s=t.filter(L=>L.kind==="palm"),r=t.filter(L=>L.kind==="round"),a=t.filter(L=>L.kind==="bush"),o=t.filter(L=>L.kind==="pine"),l=t.filter(L=>L.kind==="dead"),c=ou(new ze({vertexColors:!0})),h=ou(new ze({vertexColors:!0,side:Xe})),u=new Ct(n.trees.leaf[0]),f=new Ct(n.trees.leaf[1]),d=new ke(.16,.26,1.6,7);d.translate(0,.8,0);const v=Ss([[d,(L,k)=>k.set("#7a5434")]]),x=au([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],u,f),m=au([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],u,f),p=(L,k,V)=>{const X=new gn(L,k,Math.max(1,V));return X.count=V,X.castShadow=!0,X.receiveShadow=!0,i.add(X),Ql(X,"tree",!0),X},y=p($x(),c,s.length),S=p(Zx(),h,s.length),g=p(v,c,r.length),T=p(x,c,r.length),E=p(m,c,a.length),w=new ke(.14,.22,1.2,6);w.translate(0,.6,0);const C=p(Ss([[w,(L,k)=>k.set("#5a3e2a")]]),c,o.length),M=p(Kx(n.id==="vinter"),c,o.length),_=p(Jx(),c,l.length),A=new Fe;s.forEach((L,k)=>{A.position.set(L.x,L.y-.1,L.z),A.rotation.set(0,L.phase,0),A.scale.setScalar(L.s),A.updateMatrix(),y.setMatrixAt(k,A.matrix)}),r.forEach((L,k)=>{A.position.set(L.x,L.y-.1,L.z),A.rotation.set(0,L.phase,0),A.scale.setScalar(L.s),A.updateMatrix(),g.setMatrixAt(k,A.matrix)}),o.forEach((L,k)=>{A.position.set(L.x,L.y-.1,L.z),A.rotation.set(0,L.phase,0),A.scale.setScalar(L.s),A.updateMatrix(),C.setMatrixAt(k,A.matrix)}),l.forEach((L,k)=>{A.position.set(L.x,L.y-.1,L.z),A.rotation.set(0,L.phase,(L.phase%1-.5)*.15),A.scale.setScalar(L.s),A.updateMatrix(),_.setMatrixAt(k,A.matrix)});const D=L=>{s.forEach((k,V)=>{const X=Math.cos(k.phase),B=Math.sin(k.phase);A.position.set(k.x+ec*X*k.s,k.y-.1+nc*k.s,k.z-ec*B*k.s),A.rotation.set(Math.sin(L*1.2+k.phase)*.07,k.phase+Math.sin(L*.7+k.phase)*.05,Math.cos(L*1+k.phase)*.07),A.scale.setScalar(k.s),A.updateMatrix(),S.setMatrixAt(V,A.matrix)}),S.instanceMatrix.needsUpdate=!0,r.forEach((k,V)=>{A.position.set(k.x,k.y-.1,k.z),A.rotation.set(Math.sin(L*1.1+k.phase)*.025,k.phase,Math.cos(L*.9+k.phase)*.025),A.scale.setScalar(k.s),A.updateMatrix(),T.setMatrixAt(V,A.matrix)}),T.instanceMatrix.needsUpdate=!0,a.forEach((k,V)=>{const X=1+Math.sin(L*1.6+k.phase)*.035;A.position.set(k.x,k.y-.12,k.z),A.rotation.set(0,k.phase,0),A.scale.set(k.s*X,k.s/X,k.s*X),A.updateMatrix(),E.setMatrixAt(V,A.matrix)}),E.instanceMatrix.needsUpdate=!0,o.forEach((k,V)=>{A.position.set(k.x,k.y-.1,k.z),A.rotation.set(Math.sin(L*.9+k.phase)*.02,k.phase,Math.cos(L*.8+k.phase)*.02),A.scale.setScalar(k.s),A.updateMatrix(),M.setMatrixAt(V,A.matrix)}),M.instanceMatrix.needsUpdate=!0};return D(0),{colliders:[...s.map(L=>({x:L.x,z:L.z,r:.35*L.s})),...r.map(L=>({x:L.x,z:L.z,r:.4*L.s})),...a.map(L=>({x:L.x,z:L.z,r:.7*L.s})),...o.map(L=>({x:L.x,z:L.z,r:.4*L.s})),...l.map(L=>({x:L.x,z:L.z,r:.3*L.s}))],update:D}}function qo(i,t=5){const e=[],n=[],s=new Ct,r=new Ct;for(let o=0;o<t;o++){const l=i()*Math.PI*2,c=i()*.16,h=.28+i()*.3,u=.04+i()*.03,f=Math.cos(l)*c,d=Math.sin(l)*c,v=(i()-.5)*.25,x=i()*Math.PI,m=Math.cos(x)*u,p=Math.sin(x)*u;e.push(f-m,0,d-p,f+m,0,d+p,f+Math.cos(l)*v,h,d+Math.sin(l)*v),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const a=new Ce;return a.setAttribute("position",new ue(e,3)),a.setAttribute("color",new ue(n,3)),a.setAttribute("normal",new ue(new Array(e.length/3).fill(0).flatMap(()=>[0,1,0]),3)),a}function t_(){const i=[];for(let a=0;a<3;a++){const o=new gi(.07,6,3);o.scale(1,.25,1.15);const l=a*2.094;o.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(o.toNonIndexed())}const t=i.reduce((a,o)=>a+o.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const a of i)e.set(a.attributes.position.array,s*3),n.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count;const r=new Ce;return r.setAttribute("position",new Ue(e,3)),r.setAttribute("normal",new Ue(n,3)),r}function e_(i,t,e,n,s){const{heightAt:r,pathDist:a,plinths:o}=t,l=t.lighthouse.pos,c={uTime:{value:0}},u=(A=>(A.onBeforeCompile=D=>{D.uniforms.uTime=c.uTime,D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),D.fragmentShader=D.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},A))(new ze({vertexColors:!0,side:Xe})),f=new ze({color:"#ffffff"}),d=[qo(s,7),qo(s,8),qo(s,6)],v=t_(),x={tak:{grass:["#3f8a3a","#6fbf4a"],density:1,clover:.22,cloverCol:["#3a8a3a","#5aa84a"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(e.mobile?.45:1)*x.density,p=13,y=8,S=Math.round(720*m),g=[],T=new Fe,E=new Ct,w=new Ct(x.grass[0]),C=new Ct(x.grass[1]),M=(A,D,G)=>{if(G<.72)return!1;const L=a(A,D);if(L<1||L<1.7&&s()<.6||Math.hypot(A-l.x,D-l.z)<4.3||n.volcano&&Math.hypot(A-n.volcano.x,D-n.volcano.z)<n.volcano.r*.7)return!1;for(const k of o)if((k.x-A)**2+(k.z-D)**2<2.6)return!1;return!t.extrasBlock||!t.extrasBlock(A,D)};for(let A=0;A<y;A++)for(let D=0;D<y;D++){const G=-y*p/2+A*p,L=-y*p/2+D*p;for(const[k,V]of[[0,S*.4],[1,S*.35],[2,S*.25]]){const X=[];for(let j=0;j<V*3&&X.length<V;j++){const at=G+s()*p,lt=L+s()*p,wt=r(at,lt);M(at,lt,wt)&&X.push([at,lt,wt])}if(!X.length)continue;const B=new gn(d[k],u,X.length);B.userData.tier=k,X.forEach(([j,at,lt],wt)=>{T.position.set(j,lt-.04,at),T.rotation.set(0,s()*6.28,0),T.scale.setScalar(.8+s()*.7),T.updateMatrix(),B.setMatrixAt(wt,T.matrix),B.setColorAt(wt,E.copy(w).lerp(C,s()))}),B.receiveShadow=!0,B.computeBoundingSphere(),i.add(B),g.push(B)}if(x.clover>0){const k=[],V=G+s()*p,X=L+s()*p;for(let B=0;B<S*x.clover*3&&k.length<S*x.clover;B++){const j=V+(s()-.5)*6,at=X+(s()-.5)*6,lt=r(j,at);M(j,at,lt)&&k.push([j,at,lt])}if(k.length){const B=new gn(v,f,k.length),j=new Ct(x.cloverCol[0]),at=new Ct(x.cloverCol[1]);k.forEach(([lt,wt,Qt],et)=>{T.position.set(lt,Qt-.02,wt),T.rotation.set(0,s()*6.28,0),T.scale.setScalar(.8+s()*.8),T.updateMatrix(),B.setMatrixAt(et,T.matrix),B.setColorAt(et,E.copy(j).lerp(at,s()))}),B.receiveShadow=!0,B.userData.tier=1,B.computeBoundingSphere(),i.add(B),g.push(B)}}}return{update(A){c.uTime.value=A},setLevel:A=>g.forEach(D=>{D.visible=A==="high"||D.userData.tier===0,D.receiveShadow=A==="high"}),count:g.reduce((A,D)=>A+D.count,0)}}function lu(i,{arms:t=4,rStart:e=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:a=16}={}){const o=[];for(let l=0;l<t;l++){const c=r+l/t*Math.PI*2,h=[];for(let u=0;u<=a;u++){const f=u/a,d=e*(1-f)+n*f,v=c+f*s*Math.PI*2;h.push([i[0]+Math.cos(v)*d,i[1]+Math.sin(v)*d])}o.push(h)}return o}const n_={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},i_=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],s_=[90,210,330].map(i=>i*Math.PI/180),Xa=11,r_=()=>{const i=[];for(let e=0;e<=48;e++){const n=e/48*Math.PI*2;i.push([Math.cos(n)*Xa,Math.sin(n)*Xa])}const t=s_.map(e=>[Xa,20,30,40,50].map((n,s)=>{const r=e+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...t]},gr=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:lu([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#dcc796",grass:"#62a84a",grass2:"#44893a",path:"#b49c74",deep:"#cdb987",pathMix:.35},water:{shallow:"#a6e6cc",mid:"#45c2ae",deep:"#1f9aa2",caustic:1},sky:{fog:"#b9d4dc",hemiSky:"#eaf4ff",hemiGround:"#4a5a44",hemi:1.1,sun:"#fff1d8",sunI:2.5,exposure:1,sunDir:[14,30,10],grade:{tint:[1,1,.99],lift:[0,.006,.02],sat:1.06,vignette:.22}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a8d85a","#2f7a3a"]},rock:["#b6bab8","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.5,types:{clerk:{hp:.7},complainer:{hp:.7},tank:{hp:.75}},extra:null},intro:{complainer:2,drone:3,lobbyist:5,heli:6,auditor:7,balloon:8}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:i_,shape:"fjord",fjord:n_,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4"},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#a9b2bc","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,types:{tank:{hp:.95},clerk:{hp:1},lobbyMini:{hp:.9}},extra:{type:"tank",n:1,gap:4,path:"both",from:3}},intro:{balloon:3,auditor:4,lobbyist:5,drone:5,heli:6,complainer:6}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:lu([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:r_(),moat:Xa,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,types:{lobbyist:{hp:.6},lobbyMini:{hp:.6},clerk:{hp:.85},complainer:{hp:.85}},extra:{type:"gull",n:1,gap:1.4,from:3}},intro:{complainer:2,drone:2,lobbyist:3,heli:4,auditor:5,balloon:7}}];function a_(i){const[t,e,n]=i.edgeAmp,s=i.seed;return r=>i.radius+t*Math.sin(3*r+.4*s)+e*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}const cu={clerk:["complainer","lobbyist"],swarm:["complainer"],tank:["auditor","lobbyist"],gull:["drone","heli","balloon"]},Yo={clerk:22,swarm:7,tank:95,gull:16,complainer:17,lobbyist:97,auditor:112,drone:9,heli:62,balloon:150},$o={complainer:.6,lobbyist:1.8,auditor:2.2,drone:.4,heli:2.4,balloon:3.5};function o_(i,t){let e=i.seed*9301+49297;const n=()=>(e=(e*9301+49297)%233280)/233280,s=i.intro||{};return t.map((r,a)=>{const o=a+1,l=r.map(f=>({...f})),c=i.balance.extra;c&&o>=c.from&&l.push({...c,n:c.n+Math.floor((o-c.from)/2),at:5});const h=(f,d,v)=>Math.max(1,Math.round(f*Math.min(1,Yo[d]/Yo[v]))),u=(f,d)=>{f.n=h(f.n,f.type,d),f.gap=$o[d]??f.gap,f.type=d};for(const[f,d]of Object.entries(s)){if(d!==o)continue;const v=l.find(x=>{var m;return(m=cu[x.type])==null?void 0:m.includes(f)});if(v&&v.n>=2){const x=Math.floor(v.n/2);l.push({...v,type:f,n:h(x,v.type,f),gap:$o[f]??v.gap,at:(v.at??0)+2}),v.n-=x}else v?u(v,f):l.push({type:f,n:Math.max(1,Math.min(3,Math.round(44/Yo[f]))),gap:$o[f],path:0,at:6})}for(const f of l){const d=(cu[f.type]||[]).filter(v=>s[v]&&s[v]<o);d.length&&n()<.45&&u(f,d[Math.floor(n()*d.length)])}return l})}function qr(){try{return Math.max(1,Math.min(gr.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function l_(i){try{i+2>qr()&&localStorage.setItem("glod-unlocked",String(Math.min(gr.length,i+2)))}catch{}}function Pa(i,t,{color:e,size:n,speed:s,drift:r,additive:a,area:o=46,top:l=22}){const c=new Float32Array(t*3),h=new Float32Array(t);for(let p=0;p<t;p++)c[p*3]=(Math.random()-.5)*o*2,c[p*3+1]=Math.random()*l,c[p*3+2]=(Math.random()-.5)*o*2,h[p]=Math.random()*6.28;const u=new Ce;u.setAttribute("position",new Ue(c,3));const f=document.createElement("canvas");f.width=f.height=32;const d=f.getContext("2d"),v=d.createRadialGradient(16,16,0,16,16,16);v.addColorStop(0,"rgba(255,255,255,1)"),v.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=v,d.fillRect(0,0,32,32);const x=new no({color:e,size:n,map:new ui(f),transparent:!0,depthWrite:!1,blending:a?ni:Xi,opacity:a?1:.85}),m=new Tc(u,x);return m.frustumCulled=!1,i.add(m),(p,y,S)=>{for(let g=0;g<t;g++){let T=c[g*3+1]-s*p*(.7+h[g]%1*.6);c[g*3]+=Math.sin(S*.7+h[g])*r*p,(s<0?T>l:T<0)&&(T=s<0?0:l,c[g*3]=y.x+(Math.random()-.5)*o*2,c[g*3+2]=y.z+(Math.random()-.5)*o*2),c[g*3+1]=T}u.attributes.position.needsUpdate=!0}}function c_(i,t,e,n,s=160){const r=new Rc(i.map(([u,f])=>new O(u,0,f))),a=r.getLength(),o=[],l=[],c=[];for(let u=0;u<=s;u++){const f=u/s,d=r.getPointAt(f),v=r.getTangentAt(f),x=-v.z,m=v.x,p=t*(.75+.25*Math.sin(f*9));for(const y of[-1,1]){const S=d.x+x*p*y,g=d.z+m*p*y;o.push(S,e(S,g)+n,g),l.push(f*a,(y+1)/2)}if(u<s){const y=u*2;c.push(y,y+1,y+2,y+1,y+3,y+2)}}const h=new Ce;return h.setAttribute("position",new ue(o,3)),h.setAttribute("uv",new ue(l,2)),h.setIndex(c),h.computeVertexNormals(),{geo:h,curve:r,len:a}}function h_(i,t,e,n){var x;const{heightAt:s}=t,r=[],a=[],o=[],l=[],c=[],h=e.mobile?.5:1,u=new Set(n.life);if(u.has("aurora")){const m=new Ve({transparent:!0,depthWrite:!1,blending:ni,side:Xe,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const[p,y,S]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const g=new se(new Hn(150,26,96,1),m);g.position.set(p,20,y),g.rotation.y=S,i.add(g)}a.push((p,y,S)=>m.uniforms.uTime.value=S)}if(u.has("snow")&&a.push(Pa(i,Math.round(900*h),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),u.has("ash")&&a.push(Pa(i,Math.round(500*h),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),u.has("embers")&&a.push(Pa(i,Math.round(160*h),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),u.has("icefloes")){const m=[];for(let T=0;T<6e3&&m.length<70*h;T++){const E=(Math.random()-.5)*120,w=(Math.random()-.5)*120,C=.05-s(E,w);C>.15&&C<1.4&&m.every(M=>Math.hypot(M.x-E,M.z-w)>2.2)&&m.push({x:E,z:w,s:.6+Math.random()*1.1,r:Math.random()*6})}const p=new ke(1,.9,.18,7),y=p.attributes.position;for(let T=0;T<y.count;T++){const E=Math.atan2(y.getZ(T),y.getX(T)),w=.75+.35*Math.abs(Math.sin(E*2.3+T));y.setX(T,y.getX(T)*w),y.setZ(T,y.getZ(T)*w)}p.computeVertexNormals();const S=new gn(p,new ze({color:"#eaf6ff"}),Math.max(1,m.length));S.count=m.length,S.receiveShadow=!0,i.add(S);const g=new Fe;a.push((T,E,w)=>{m.forEach((C,M)=>{g.position.set(C.x+Math.sin(w*.1+C.r)*.4,.08+Math.sin(w*1.1+C.r)*.03,C.z),g.rotation.set(Math.sin(w*.9+C.r)*.03,C.r+w*.02,Math.cos(w*.8+C.r)*.03),g.scale.set(C.s,1,C.s),g.updateMatrix(),S.setMatrixAt(M,g.matrix)}),S.instanceMatrix.needsUpdate=!0})}if(n.lava){const m=new Ve({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const g of n.lava){const T=c_(g,1.25,s,.07);i.add(new se(T.geo,m));const E=[];let w=!1;for(let C=0;C<=1;C+=1.4/T.len){const M=T.curve.getPointAt(Math.min(1,C));if(t.pathDist(M.x,M.z)<2.4){w||c.push({x:M.x,z:M.z,tan:T.curve.getTangentAt(Math.min(1,C))}),w=!0;continue}w=!1,o.push({x:M.x,z:M.z,r:1.4})}for(const C of[.25,.7]){const M=T.curve.getPointAt(C),_=new Xr("#ff6a2a",14,12,1.6);_.position.set(M.x,s(M.x,M.z)+1.2,M.z),i.add(_),E.push(_)}a.push((C,M,_)=>E.forEach((A,D)=>A.intensity=12+3*Math.sin(_*2.3+D)))}a.push((g,T,E)=>m.uniforms.uTime.value=E);const p=new An(3.4,.35,4.2),y=new ze({color:((x=n.rock)==null?void 0:x[0])??"#555"}),S=new ke(2.4,2.4,.1,18);for(const g of c){const T=s(g.x,g.z)+.12,E=new se(p,y);E.position.set(g.x,T,g.z),E.rotation.y=-Math.atan2(g.tan.z,g.tan.x),E.castShadow=E.receiveShadow=!0,i.add(E);const w=new se(S,new Te({color:new Ct("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));w.position.set(g.x,T+.25,g.z),w.visible=!1,i.add(w);const C=new Xr("#ff6a2a",0,14,1.6);C.position.set(g.x,T+1.6,g.z),i.add(C);let M=!1;l.push({x:g.x,z:g.z,get closed(){return M},setClosed(_){M=_,w.visible=_}}),a.push((_,A,D)=>{const G=M?1:0;w.material.opacity+=(G*.9-w.material.opacity)*Math.min(1,_*3),!M&&w.material.opacity<.02&&(w.visible=!1),C.intensity=w.material.opacity*(22+6*Math.sin(D*9))})}}if(n.volcano){const m=n.volcano;o.push({x:m.x,z:m.z,r:m.r*.55});const p=new se(new or(m.r*.22,20),new Te({color:new Ct("#ff5a1a").multiplyScalar(2.4)}));p.rotation.x=-Math.PI/2,p.position.set(m.x,s(m.x,m.z)+.2,m.z),i.add(p);const y=new so(.35,0),S=[];for(let E=0;E<3e3&&S.length<50*h;E++){const w=(Math.random()-.5)*96,C=(Math.random()-.5)*96,M=s(w,C);M>.4&&t.pathDist(w,C)>2.2&&S.push({x:w,z:C,h:M,s:.5+Math.random()})}const g=new gn(y,new Te({color:new Ct("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,S.length));g.count=S.length;const T=new Fe;S.forEach((E,w)=>{T.position.set(E.x,E.h,E.z),T.rotation.set(E.s,E.s*3,0),T.scale.set(E.s,E.s*.5,E.s),T.updateMatrix(),g.setMatrixAt(w,T.matrix)}),i.add(g)}if(n.waterfall&&n.waterfall._lvl!==void 0){const m=n.waterfall,p=m.basin[0]-m.lip[0],y=m.basin[1]-m.lip[1],S=Math.hypot(p,y),g=p/S,T=y/S,E=m._lvl-.1,w=14,C=1.25,M=[],_=[],A=[];for(let B=0;B<=w;B++){const j=B/w,at=.35+1.5*j*j,lt=E-(E-.06)*(j*j*.6+j*.4);for(const wt of[-1,1])M.push(m.lip[0]+g*at-T*C*wt*(.85+j*.3),lt,m.lip[1]+T*at+g*C*wt*(.85+j*.3)),_.push((wt+1)/2,j);if(B<w){const wt=B*2;A.push(wt,wt+1,wt+2,wt+1,wt+3,wt+2)}}const D=new Ce;D.setAttribute("position",new ue(M,3)),D.setAttribute("uv",new ue(_,2)),D.setIndex(A);const G=new Ve({transparent:!0,depthWrite:!1,side:Xe,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new se(D,G));const L=new se(new or(1.4,20),new Te({color:"#ffffff",transparent:!0,opacity:.7,depthWrite:!1}));L.rotation.x=-Math.PI/2;const k=m.lip[0]+g*1.9,V=m.lip[1]+T*1.9;L.position.set(k,.1,V),i.add(L);const X=Pa(i,Math.round(60*h),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});a.push((B,j,at)=>{G.uniforms.uTime.value=at,L.scale.setScalar(1+Math.sin(at*5)*.08),L.material.opacity=.55+.15*Math.sin(at*7),X(B,{x:k,z:V},at)}),o.push({x:k,z:V,r:.9})}const f=(m,p)=>o.some(y=>(y.x-m)**2+(y.z-p)**2<y.r*y.r);let d=0;return{colliders:r,update:(m,p=t.lighthouse.pos)=>{const y=Math.min(.05,Math.max(0,m-d));d=m;for(const S of a)S(y,p,m)},blocks:f,blockers:o,bridges:l}}function _f(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ce;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let v=0;v<d.count;++v)u.push(d.getX(v)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=hu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);const v=hu(d);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function hu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ue(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let v=0;v<e;v++){const x=h.getComponent(f,v);o.setComponent(f+u,v,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function Mf(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,S=o.length;y<S;y++){const g=o[y],T=i.attributes[g];l[g]=new T.constructor(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);const E=i.morphAttributes[g];E&&(c[g]||(c[g]=[]),E.forEach((w,C)=>{const M=new w.array.constructor(w.count*w.itemSize);c[g][C]=new w.constructor(M,w.itemSize,w.normalized)}))}const d=t*.5,v=Math.log10(1/t),x=Math.pow(10,v),m=d*x;for(let y=0;y<r;y++){const S=n?n.getX(y):y;let g="";for(let T=0,E=o.length;T<E;T++){const w=o[T],C=i.getAttribute(w),M=C.itemSize;for(let _=0;_<M;_++)g+=`${~~(C[u[_]](S)*x+m)},`}if(g in e)h.push(e[g]);else{for(let T=0,E=o.length;T<E;T++){const w=o[T],C=i.getAttribute(w),M=i.morphAttributes[w],_=C.itemSize,A=l[w],D=c[w];for(let G=0;G<_;G++){const L=u[G],k=f[G];if(A[k](a,C[L](S)),M)for(let V=0,X=M.length;V<X;V++)D[V][k](a,M[V][L](S))}}e[g]=a,h.push(a),a++}}const p=i.clone();for(const y in i.attributes){const S=l[y];if(p.setAttribute(y,new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)),y in c)for(let g=0;g<c[y].length;g++){const T=c[y][g];p.morphAttributes[y][g]=new T.constructor(T.array.slice(0,a*T.itemSize),T.itemSize,T.normalized)}}return p.setIndex(h),p}const cr=20;function On(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function u_(i){const t=new Rc(i.map(([s,r])=>new O(s,0,r)),!1,"catmullrom",.5),e=t.getLength(),n=t.getSpacedPoints(400);return{curve:t,length:e,samples:n}}function f_(i,t,e,n,s){const a=new An(1,1,1,5,5,5),o=a.attributes.position,l=new O,c=new O,h=i/2,u=t/2,f=e/2,d=Math.min(n,h,u,f)*.98,v=s()*10,x=(s()-.5)*.12;for(let p=0;p<o.count;p++){l.set(o.getX(p)*i,o.getY(p)*t,o.getZ(p)*e),c.set(be.clamp(l.x,-h+d,h-d),be.clamp(l.y,-u+d,u-d),be.clamp(l.z,-f+d,f-d)),l.sub(c);const y=l.length();y>0&&l.multiplyScalar(d/y),l.add(c);const S=1+.035*Math.sin(l.x*4.1+v)*Math.sin(l.z*3.7-v)+.025*Math.sin(l.y*6+v*2);l.x*=S,l.z*=S,l.y+=l.x*x,o.setXYZ(p,l.x,l.y,l.z)}a.deleteAttribute("normal"),a.deleteAttribute("uv");const m=Mf(a);return m.computeVertexNormals(),m}function d_(i,t,e,n){const s=new Ct(t),r=new Ct(e),a=new Ct,o=[[[2.3,.85,1.9,0,0,0],[1.6,.7,1.4,.2,-.1,.35]],[[1.5,1.5,1.4,-.35,.1,.1],[1.4,.8,1.3,.75,-.2,-.3],[.9,.6,.85,-.3,.05,.6]],[[2.4,.7,2,0,0,.2],[1.8,.65,1.5,-.15,.15,-.25],[1.1,.55,1,.2,-.1,.5]]][n%3],l=[];let c=0,h=0;o.forEach(([p,y,S,g,T,E],w)=>{const C=.88+i()*.24,M=f_(p*C,y*(.9+i()*.2),S*C,Math.min(p,y,S)*.28,i);M.rotateY(E+(i()-.5)*.3);const _=n%3===1&&w===1?0:c;M.translate(g,_+y/2,T),n%3===1&&w===1||(c=_+y*.92),h=Math.max(h,_+y),l.push(M)});const u=_f(l),f=u.attributes.position,d=u.attributes.normal,v=[],x=.95+i()*.1,m=i()*10;for(let p=0;p<f.count;p++){const y=f.getX(p),S=f.getY(p),g=f.getZ(p);a.copy(s).multiplyScalar(x*(.72+.28*be.smoothstep(S,0,.9))*(d.getY(p)<-.3?.8:1));const T=Math.sin(y*2.3+m)*Math.sin(g*2.7-m)+.5*Math.sin(y*5.1-g*4.3+m),E=be.smoothstep(d.getY(p),.6,.9)*be.smoothstep(S,h-.3,h-.08)*be.smoothstep(T,-.55,0);a.lerp(r,E),v.push(a.r,a.g,a.b)}return u.setAttribute("color",new ue(v,3)),u}function uu(i,t,e,n,s,r,a=12){const o=new ke(t,e,n,a,3,!0),l=new $i(.001,t,a,4);l.rotateX(-Math.PI/2),l.translate(0,n/2,0);const c=_f([o,l]),h=c.attributes.position,u=i()*10;for(let S=0;S<h.count;S++){const g=h.getX(S),T=h.getY(S),E=h.getZ(S),w=Math.hypot(g,E);if(w<1e-4)continue;const C=Math.atan2(E,g);let M=1+.05*Math.sin(C*3+u)+.035*Math.sin(C*7-u*2)+.025*Math.sin(T*9+C*4),_=T;T>n/2-1e-4&&w>t*.97&&(M*=.93,_-=.08),h.setXYZ(S,g*M,_,E*M)}c.deleteAttribute("normal"),c.deleteAttribute("uv");const f=Mf(c);f.computeVertexNormals(),f.translate(0,n/2,0);const d=new Ct(s),v=new Ct(r),x=new Ct,m=[],p=f.attributes.position,y=f.attributes.normal;for(let S=0;S<p.count;S++){const g=p.getX(S),T=p.getY(S),E=p.getZ(S),w=Math.atan2(E,g),C=Math.hypot(g,E);x.copy(d).multiplyScalar(.72+.28*be.smoothstep(T,0,n*.9));const M=Math.sin(g*1.9+u)*Math.sin(E*2.3-u)+.5*Math.sin(w*5+u)+.3*Math.sin(C*4),_=be.smoothstep(T,n-.25,n-.05)*be.smoothstep(M,0,.5)*be.smoothstep(y.getY(S),.2,.7);x.lerp(v,_),m.push(x.r,x.g,x.b)}return f.setAttribute("color",new ue(m,3)),f}function fu(i,t=.55){const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,256,256);const s=On(4242);for(let l=0;l<90;l++){const c=225+s()*30|0;n.fillStyle=`rgba(${c},${c},${c},0.5)`,n.beginPath(),n.ellipse(s()*256,s()*256,8+s()*22,4+s()*10,s()*3,0,Math.PI*2),n.fill()}n.lineCap="round",n.lineJoin="round";const r=(l,c,h,u,f)=>{n.lineWidth=f,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c);for(let d=0;d<u;d++)h+=(s()-.5)*.9,l+=Math.cos(h)*9,c+=Math.sin(h)*9,n.lineTo(l,c),s()<.12&&f>1.2&&(n.stroke(),r(l,c,h+(s()<.5?1:-1)*(.6+s()*.6),u>>1,f*.7),n.lineWidth=f,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c));n.stroke()};for(let l=0;l<9;l++){const c=s()*256,h=s()*256,u=s()*6.28,f=5+(s()*7|0),d=1.6+s()*1.2;for(const[v,x]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]])n.save(),n.translate(v,x),r(c,h,u,f,d),n.restore()}const a=new ui(e);a.colorSpace=cn,a.wrapS=a.wrapT=di,a.anisotropy=4;const o=new ze({vertexColors:!0});return o.onBeforeCompile=l=>{l.uniforms.uCrack={value:a},l.uniforms.uWaterC={value:new Ct(i)},l.vertexShader=`varying vec3 vRP;
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
      }`)},o.customProgramCacheKey=()=>`rock${t}`,o}function p_(i,t,e){const n=a_(e),s=new O(e.lighthouse[0],0,e.lighthouse[1]),r=e.paths.map(u_),a=r.flatMap(z=>z.samples),o=(z,I)=>{let Z=1/0;for(let rt=0;rt<a.length;rt+=3){const ot=a[rt],xt=(ot.x-z)**2+(ot.z-I)**2;xt<Z&&(Z=xt)}return Math.sqrt(Z)};if(e.plateausAuto&&!e.plateaus){const z=On(500+e.seed),I=[];for(const Z of e.plateausAuto){let rt=null,ot=-1;for(let xt=0;xt<500;xt++){const Et=z()*Math.PI*2,ct=12+z()*24,Vt=Math.cos(Et)*ct,Gt=Math.sin(Et)*ct,Dt=o(Vt,Gt);if(Dt<Z.r+3.5||Math.hypot(Vt-s.x,Gt-s.z)<Z.r+9||I.some(le=>Math.hypot(le.x-Vt,le.z-Gt)<le.r+Z.r+5))continue;const _e=Math.min(Dt-Z.r,9)+z()*.5;_e>ot&&(ot=_e,rt={x:Vt,z:Gt,...Z})}rt&&I.push(rt)}if(e.plateaus=I,e.waterfall&&I[0]){const Z=I[0],rt=e.waterfall;let ot=0,xt=-1;for(let Vt=0;Vt<16;Vt++){const Gt=Vt/16*Math.PI*2,Dt=Z.x+Math.cos(Gt)*(Z.r+3.2),_e=Z.z+Math.sin(Gt)*(Z.r+3.2),le=o(Dt,_e);le>xt&&(xt=le,ot=Gt)}const Et=Math.cos(ot),ct=Math.sin(ot);rt.pool=[Z.x+Et*(Z.r-2.4),Z.z+ct*(Z.r-2.4)],rt.lip=[Z.x+Et*(Z.r-.3),Z.z+ct*(Z.r-.3)],rt.basin=[Z.x+Et*(Z.r+3),Z.z+ct*(Z.r+3)]}}const l=e.fjord,c=e.nes,h=(z,I)=>{if(e.shape==="fjord"){const Z=I+30+2.2*Math.sin(z*.21)+1.2*Math.sin(z*.53+1),rt=be.clamp(I,c.z1,c.z0),ot=c.r-Math.hypot(z-c.x,I-rt)+(I<c.z1?0:.6*Math.sin(I*.7));return Math.max(Z,ot)}return n(Math.atan2(I,z))-Math.hypot(z,I)},u=(z,I,Z=!1)=>{const rt=be.smoothstep(h(z,I),-3,7),ot=.9+.7*Math.sin(z*.17+1)*Math.cos(I*.21)+.35*Math.sin(z*.5+I*.4)+.3*Math.sin(z*.31-I*.23+2.1)+.18*Math.cos(z*.73+I*.61),xt=2.4*Math.exp(-((z-s.x-2)**2+(I-s.z+1)**2)/60);let Et=-2.2+rt*(2.2+ot+xt);if(rt>.85&&Et<.35&&(Et=Math.max(-.42,.35-(.35-Et)*3.2)),l){const ct=Math.max(be.smoothstep(Math.abs(z),l.wall-3,l.wall+6),be.smoothstep(I,l.top+6,l.top+14));Et+=ct*(7+1.5*Math.sin(I*.13+z*.05));const Vt=Math.abs(z-l.xc(I)),Gt=1-be.smoothstep(I,l.top-6,l.top+2);Vt<l.w+1.5&&Gt>0&&(Et=Math.min(Et,be.lerp(Et,-1.6,Gt*(1-be.smoothstep(Vt,l.w-.8,l.w+1.5)))))}for(const ct of e.plateaus||[]){const Vt=Math.hypot(z-ct.x,I-ct.z),Gt=Math.atan2(I-ct.z,z-ct.x),Dt=ct.r+Math.sin(Gt*5+ct.x)*.8+Math.sin(Gt*11)*.3;Et+=ct.h*be.smoothstep(Dt-Vt,0,1.3)}if(e.waterfall&&!Z){const ct=e.waterfall,Vt=Math.hypot(z-ct.pool[0],I-ct.pool[1]);Vt<ct.poolR+.6&&(ct._lvl??(ct._lvl=u(ct.pool[0],ct.pool[1],!0)-.12),Et=Math.min(Et,ct._lvl-.48*Math.sqrt(Math.max(0,1-Vt/(ct.poolR+.6)))));const Gt=be.clamp(((z-ct.pool[0])*(ct.lip[0]-ct.pool[0])+(I-ct.pool[1])*(ct.lip[1]-ct.pool[1]))/((ct.lip[0]-ct.pool[0])**2+(ct.lip[1]-ct.pool[1])**2),0,1),Dt=ct.pool[0]+(ct.lip[0]-ct.pool[0])*Gt,_e=ct.pool[1]+(ct.lip[1]-ct.pool[1])*Gt;Math.hypot(z-Dt,I-_e)<.75&&ct._lvl!==void 0&&(Et=Math.min(Et,ct._lvl-.25));const le=Math.hypot(z-ct.basin[0],I-ct.basin[1]);le<ct.basinR&&(Et=Math.min(Et,Math.max(-.42,.05-.47*Math.sqrt(1-le/ct.basinR))))}if(e.volcano){const ct=e.volcano,Vt=Math.hypot(z-ct.x,I-ct.z);Et+=ct.h*Math.max(0,1-Vt/ct.r)**1.4-ct.h*.5*Math.max(0,1-Vt/(ct.r*.25))}return Et},f=68,d=t.mobile?160:176,v=new Float32Array((d+1)*(d+1)),x=new Float32Array((d+1)*(d+1));for(let z=0;z<=d;z++)for(let I=0;I<=d;I++){const Z=-f+I/d*f*2,rt=-f+z/d*f*2,ot=o(Z,rt);x[z*(d+1)+I]=ot;let xt=u(Z,rt);const Et=be.smoothstep(ot,1.4,3.2),ct=Math.max(u(Z,rt)*.6+.3,.45);xt=be.lerp(Math.min(xt,ct+.1),xt,Et),l&&Math.abs(rt-l.bridgeZ)<4&&Math.abs(Z-l.xc(rt))<l.w+2&&ot<2.2&&(xt=Math.max(xt,.5)),v[z*(d+1)+I]=xt}const m=(z,I,Z)=>{const rt=be.clamp((I+f)/(f*2)*d,0,d-.001),ot=be.clamp((Z+f)/(f*2)*d,0,d-.001),xt=Math.floor(rt),Et=Math.floor(ot),ct=rt-xt,Vt=ot-Et,Gt=z[Et*(d+1)+xt],Dt=z[Et*(d+1)+xt+1],_e=z[(Et+1)*(d+1)+xt],le=z[(Et+1)*(d+1)+xt+1];return(Gt*(1-ct)+Dt*ct)*(1-Vt)+(_e*(1-ct)+le*ct)*Vt},p=(z,I)=>m(v,z,I),y=(z,I)=>m(x,z,I),S=(z,I)=>p(z,I)>.35,g=.5,T=(z,I)=>Math.max(Math.abs(p(z+.4,I)-p(z-.4,I)),Math.abs(p(z,I+.4)-p(z,I-.4)))/.8,E=(z,I)=>!!l&&Math.abs(I-l.bridgeZ)<4&&Math.abs(z-l.xc(I))<l.w+1.5&&y(z,I)<2.6,w=new Ct("#cfeaff"),C=(z,I)=>p(z,I)>.05-g&&T(z,I)<1.05,M=t.mobile?170:256,_=new Hn(f*2,f*2,M,M);_.rotateX(-Math.PI/2);const A=_.attributes.position,D=new Float32Array(A.count*3),G=new Float32Array(A.count*3),L=new Float32Array(A.count),k=new Float32Array(A.count*4),V=new Ct,X=new Ct,B=e.palette,j=new Ct(e.rock[0]).multiplyScalar(.7),at=new Ct(e.rock[0]).multiplyScalar(1.08),lt=new Ct,wt=new Ct(B.sand),Qt=new Ct(B.grass),et=new Ct(B.grass2),pt=new Ct(B.path),Tt=new Ct(B.deep),ft=new Ct,Bt=On(7);for(let z=0;z<A.count;z++){const I=A.getX(z),Z=A.getZ(z),rt=p(I,Z);A.setY(z,rt);const ot=y(I,Z),xt=(Bt()-.5)*.04,Et=ft.copy(Qt).lerp(et,be.clamp((rt-1)*.6+Bt()*.3,0,1)).offsetHSL(0,0,xt);G.set([Et.r,Et.g,Et.b],z*3),V.copy(Tt).lerp(wt,be.smoothstep(rt,0,.3)).offsetHSL(0,0,xt),D.set([V.r,V.g,V.b],z*3);const ct=.5+.5*Math.sin(I*1.7+Z*.9)*Math.cos(Z*1.3-I*.6);L[z]=1.9-Math.min(ot,6)+(ct-.5)*(B.pathMix??.3)*2.4-Math.max(0,.3-rt)*2.5;let Vt=0;l&&E(I,Z)&&(X.copy(w),Vt=.85);const Gt=T(I,Z);if(Gt>.75){const Dt=.5+.5*Math.sin(rt*7.5+Math.sin(I*.7+Z*.5)*1.5);lt.copy(j).lerp(at,Dt);const _e=be.smoothstep(Gt,.75,1.3);X.copy(Vt?X:lt).lerp(lt,_e),Vt=Math.max(Vt,_e)}k.set([X.r,X.g,X.b,Vt],z*4)}_.setAttribute("aLow",new Ue(D,3)),_.setAttribute("aGrass",new Ue(G,3)),_.setAttribute("aPathF",new Ue(L,1)),_.setAttribute("aOver",new Ue(k,4)),_.computeVertexNormals();const Xt=new ze({color:"#ffffff"});Xt.onBeforeCompile=z=>{z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
attribute vec3 aLow, aGrass;
attribute vec4 aOver;
attribute float aPathF;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vLow = aLow; vGrass = aGrass; vOver = aOver; vPathF = aPathF;`),z.uniforms.uPath={value:pt},z.fragmentShader=z.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const $t=new se(_,Xt);$t.receiveShadow=!0,i.add($t);const ee=[],dt=(z,I)=>Math.hypot(z-s.x,I-s.z)>6;for(const[z,I]of r.entries()){let Z=z%2===0?1:-1,rt=0;for(let ot=.16;ot<.95&&rt<6;ot+=.055){const xt=I.curve.getPointAt(ot),Et=I.curve.getTangentAt(ot),ct=new O(-Et.z,0,Et.x).normalize();for(const Vt of[Z,-Z]){const Gt=xt.x+ct.x*3.6*Vt,Dt=xt.z+ct.z*3.6*Vt;if(!(y(Gt,Dt)<2.7||!S(Gt,Dt)||!dt(Gt,Dt))&&!ee.some(_e=>Math.hypot(_e.x-Gt,_e.z-Dt)<5.2)&&!(e.volcano&&Math.hypot(Gt-e.volcano.x,Dt-e.volcano.z)<e.volcano.r+2)){ee.push({x:Gt,z:Dt,tower:null}),rt++;break}}Z=-Z}}const bt=fu(e.water.mid),N=new Te({color:"#ffe3a0",transparent:!0,opacity:.28,depthWrite:!1}),Ht=new Te({color:"#f5f7f8",transparent:!0,opacity:.12,depthWrite:!1}),_t=uu(On(61+e.seed),1.3,1.5,.98,e.rock[0],e.rock[1]);_t.translate(0,-.1,0);const zt=new $i(.55,.75,6);zt.rotateX(-Math.PI/2);const Rt=new gi(1,7,5),Kt=ee.length,q=new gn(_t,bt,Kt),R=new gn(zt,N,Kt),b=new gn(Rt,Ht,Kt*3);q.castShadow=q.receiveShadow=!0;const H=new Fe;ee.forEach((z,I)=>{z.y0=p(z.x,z.z),z.y=z.y0+.88,H.position.set(z.x,z.y0,z.z),H.rotation.set(0,I,0),H.scale.setScalar(1),H.updateMatrix(),q.setMatrixAt(I,H.matrix)}),i.add(q,R,b),Ql(q,"rock");const K=z=>{ee.forEach((I,Z)=>{const rt=!I.tower;H.position.set(I.x,I.y0+.9,I.z),H.rotation.set(0,z*.5,0),H.scale.setScalar(rt?1:0),H.updateMatrix(),R.setMatrixAt(Z,H.matrix);for(let ot=0;ot<3;ot++){const xt=z*.4+ot*2.1+I.x,Et=(xt%1+1)%1;H.position.set(I.x+Math.cos(xt*2.3)*.9,I.y0+.5+Et*.9,I.z+Math.sin(xt*2.3)*.9),H.rotation.set(0,0,0),H.scale.set(rt?.6+Et*.5:0,rt?.3+Et*.2:0,rt?.6+Et*.5:0),H.updateMatrix(),b.setMatrixAt(Z*3+ot,H.matrix)}}),R.instanceMatrix.needsUpdate=!0,b.instanceMatrix.needsUpdate=!0},Q=new xe,tt=p(s.x,s.z);Q.position.set(s.x,tt,s.z);const Ut=(()=>{const z=document.createElement("canvas");z.width=512,z.height=512;const I=z.getContext("2d");I.fillStyle="#f6f1e6",I.fillRect(0,0,512,512);const Z=On(5);for(let ot=0;ot<520;ot++){const xt=Z()*512,Et=Z()*512,ct=2+Z()*9,Vt=Z()<.65;I.fillStyle=Vt?`rgba(${90+Z()*40},${120+Z()*40},${60+Z()*20},${.12+Z()*.18})`:`rgba(${130+Z()*30},${95+Z()*20},60,${.12+Z()*.15})`,I.beginPath(),I.ellipse(xt,Et,ct,ct*(.4+Z()*.6),Z()*3,0,Math.PI*2),I.fill()}for(let ot=0;ot<1200;ot++){I.strokeStyle=`rgba(190,170,140,${.04+Z()*.07})`,I.lineWidth=1;const xt=Z()*512,Et=Z()*512;I.beginPath(),I.moveTo(xt,Et),I.lineTo(xt+(Z()-.5)*8,Et+6+Z()*20),I.stroke()}for(let ot=0;ot<26;ot++){const xt=Z()*512;I.strokeStyle=Z()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",I.lineWidth=2+Z()*5,I.beginPath(),I.moveTo(xt,512),I.bezierCurveTo(xt+40,350,xt-30,160,xt+20+Z()*40,0),I.stroke()}I.strokeStyle="rgba(175,145,100,0.55)",I.lineWidth=4,I.beginPath(),I.moveTo(60,512),I.bezierCurveTo(90,330,110,180,150,0),I.stroke();const rt=new ui(z);return rt.colorSpace=cn,rt.wrapS=di,rt})(),Mt=new ze({map:Ut}),At=(()=>{const z=document.createElement("canvas");z.width=z.height=128;const I=z.getContext("2d");I.fillStyle="#e9dcbf",I.fillRect(0,0,128,128),I.strokeStyle="#a88d62",I.lineWidth=3,I.beginPath();for(let rt=0;rt<Math.PI*9;rt+=.1){const ot=4+rt*2;I.lineTo(64+Math.cos(rt)*ot,64+Math.sin(rt)*ot)}I.stroke();const Z=new ui(z);return Z.colorSpace=cn,Z})(),ne=new ze({color:"#e6d8b8"}),yt=new ze({map:At}),Wt=new ze({color:"#3a3330",flatShading:!0}),ie=new ze({color:"#b8b2aa",flatShading:!0}),re=(()=>{const z=document.createElement("canvas");z.width=256,z.height=128;const I=z.getContext("2d"),Z=I.createLinearGradient(0,0,0,128);Z.addColorStop(0,"#fff0b0"),Z.addColorStop(.45,"#ffb040"),Z.addColorStop(1,"#ff5a10"),I.fillStyle=Z,I.fillRect(0,0,256,128);const rt=On(11);for(let xt=0;xt<70;xt++){const Et=rt();I.fillStyle=Et<.5?`rgba(70,60,55,${.5+rt()*.4})`:`rgba(170,165,160,${.5+rt()*.4})`,I.beginPath(),I.ellipse(rt()*256,20+rt()*108,4+rt()*14,2+rt()*6,rt()*3,0,Math.PI*2),I.fill()}I.strokeStyle="rgba(60,30,20,0.6)",I.lineWidth=1.5;for(let xt=0;xt<40;xt++){const Et=rt()*256,ct=rt()*128;I.beginPath(),I.moveTo(Et,ct),I.lineTo(Et+(rt()-.5)*30,ct+(rt()-.5)*20),I.stroke()}const ot=new ui(z);return ot.colorSpace=cn,ot})(),jt=new Te({map:re,color:new Ct("#ffffff").multiplyScalar(2.2)});function ge({len:z,rTop:I,rBot:Z,crutchH:rt,seg:ot,bend:xt,glowMat:Et,shadow:ct}){const Vt=new xe,Gt=new se(new ke(Z*.98,Z*.95,rt,ot),[ne,ne,yt]);Gt.position.y=rt/2,Gt.castShadow=ct,Vt.add(Gt);const Dt=new ke(I,Z,z,ot,8,!0),_e=Dt.attributes.position,le=On(Math.round(z*100)),_n=Array.from({length:6},()=>[le()*6.28,le()*3,.03+le()*.04]);for(let Ee=0;Ee<_e.count;Ee++){const Xn=_e.getY(Ee),qn=(Xn+z/2)/z,_r=Math.atan2(_e.getZ(Ee),_e.getX(Ee));let As=1+Math.sin(_r*7+Xn*3)*.018;for(const[jf,Zf,Kf]of _n)As+=Math.cos(_r-jf)*Math.sin(qn*6+Zf)*Kf*.5;_e.setXYZ(Ee,_e.getX(Ee)*As+xt*qn*qn*z,Xn,_e.getZ(Ee)*As)}Dt.translate(0,z/2,0),Dt.computeVertexNormals();const fn=new se(Dt,Mt);fn.position.y=rt,fn.castShadow=ct,fn.receiveShadow=!0,Vt.add(fn);const $e=xt*z,Wn=rt+z,Re=new ke(I*1.02,I*1.04,I*.35,ot,1,!0),Mn=Re.attributes.position;for(let Ee=0;Ee<Mn.count;Ee++)Mn.getY(Ee)>0&&Mn.setY(Ee,Mn.getY(Ee)+Math.sin(Ee*2.7)*I*.12);Re.computeVertexNormals();const ri=new se(Re,Wt);ri.position.set($e,Wn+I*.12,0),Vt.add(ri);const nn=new se(new gi(I*.97,ot,6,0,Math.PI*2,0,Math.PI/2),Et);nn.scale.y=.38,nn.position.set($e,Wn+I*.2,0),Vt.add(nn);const Nn=[];for(let Ee=0;Ee<5;Ee++){const Xn=new se(new so(I*(.2+Ee%3*.07),0),ie),qn=Ee*1.25+.3;Xn.position.set($e+Math.cos(qn)*I*.55,Wn+I*.33,Math.sin(qn)*I*.55),Xn.scale.y=.4,Vt.add(Xn),Nn.push(Xn)}const zn=new fi(I*.28,I*1.1,6,4),xi=zn.attributes.position;for(let Ee=0;Ee<xi.count;Ee++){const Xn=xi.getY(Ee),qn=(Xn/(I*1.1)+.5)*2.2,_r=xi.getX(Ee),As=xi.getZ(Ee);xi.setX(Ee,_r*Math.cos(qn)-As*Math.sin(qn)+(Xn+I*.55)*.25),xi.setZ(Ee,_r*Math.sin(qn)+As*Math.cos(qn))}zn.computeVertexNormals();const xr=new se(zn,Wt);return xr.position.set($e+I*.1,Wn+I*.7,I*.1),xr.rotation.z=-.35,Vt.add(xr),Vt.userData={glow:nn,top:new O($e,Wn,0),charRing:ri,ashFlakes:Nn,body:fn,twist:xr,len:z,rTop:I,rBot:Z,bend:xt,crutchH:rt,base:fn.geometry.attributes.position.array.slice(),topParts:[ri,nn,xr,...Nn].map(Ee=>[Ee,Ee.position.clone(),Ee.scale.clone()])},Vt}const oe=new Ct(e.rock[0]).multiplyScalar(.86),pe=new se(uu(On(67+e.seed),3.3,3.9,1,oe,e.rock[1],16),fu(e.water.mid,.2));pe.position.y=-.2,pe.castShadow=pe.receiveShadow=!0,Q.add(pe),Qr(pe,"rock");const W=7.4,Pt=1.4,nt=ge({len:W,rTop:2.35,rBot:.95,crutchH:Pt,seg:22,bend:.06,glowMat:jt,shadow:!0});nt.position.y=.75,nt.rotation.set(.06,0,-.03);const vt=nt.userData.charRing;Q.add(nt);const Ot=new Fe;Ot.position.y=Pt+W+1.2,nt.add(Ot);const Ft=new Xr("#ff8a3a",40,34,1.5);Ft.position.y=Pt+W+1.4,nt.add(Ft);const F=new fi(2.2,16,16,6,!0);F.translate(0,-8,0);{const z=F.attributes.position,I=new Float32Array(z.count*3);for(let Z=0;Z<z.count;Z++){const rt=Math.pow(1-Math.min(1,-z.getY(Z)/16),1.6);I.set([rt,rt,rt],Z*3)}F.setAttribute("color",new Ue(I,3))}F.rotateZ(Math.PI/2);const ht=new Te({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:ni,depthWrite:!1,side:Xe,fog:!1}),Nt=new xe;Nt.position.y=Pt+W+.8;const Lt=new se(F,ht),ae=Lt.clone();ae.rotation.y=Math.PI,Nt.add(Lt,ae),nt.add(Nt);const te=new Xr("#ffa050",12,10,1.4);te.position.set(0,1.3,4.6),Q.add(te),i.add(Q),Q.updateMatrixWorld(!0);const fe=new O;Ot.getWorldPosition(fe);const Jt=nt.userData,Me=[Ot,Ft,Nt].map(z=>[z,z.position.y]),Ne=z=>Jt.rBot+(Jt.rTop-Jt.rBot)*z;function qe(z){const I=.15+.85*Math.max(0,Math.min(1,z)),Z=Jt.body.geometry.attributes.position,rt=Jt.base;for(let ct=0;ct<Z.count;ct++){const Vt=rt[ct*3+1],Gt=Vt/Jt.len,Dt=Gt*I,_e=Ne(Dt)/Ne(Gt);Z.setXYZ(ct,(rt[ct*3]-Jt.bend*Gt*Gt*Jt.len)*_e+Jt.bend*Dt*Dt*Jt.len,Dt*Jt.len,rt[ct*3+2]*_e)}Z.needsUpdate=!0,Jt.body.geometry.computeVertexNormals(),Jt.body.geometry.computeBoundingSphere();const ot=(I-1)*Jt.len,xt=Ne(I)/Jt.rTop,Et=Jt.bend*Jt.len*(I*I-1);for(const[ct,Vt,Gt]of Jt.topParts)ct.position.set(Jt.top.x+(Vt.x-Jt.top.x)*xt+Et,Vt.y+ot,Vt.z*xt),ct.scale.set(Gt.x*xt,Gt.y*xt,Gt.z*xt);for(const[ct,Vt]of Me)ct.position.y=Vt+ot;Q.updateMatrixWorld(!0),Ot.getWorldPosition(fe)}const un={tip:fe,pos:new O(s.x,tt,s.z),lights:cr,flamePos(){return fe.clone()},setLights(z){this.lights=z;const I=z/cr;qe(I),this.glow=I,te.intensity=3+9*I,ht.opacity=.01+.04*I,vt.scale.y*=1+(1-I)*2.5}},en=On(42),ji=[];for(let z=0;z<3e3&&ji.length<(t.mobile?70:104);z++){const I=(en()-.5)*102,Z=(en()-.5)*102,rt=p(I,Z);if(rt<.75||y(I,Z)<3.2||!dt(I,Z)||ee.some(ct=>Math.hypot(ct.x-I,ct.z-Z)<3.2)||ji.some(ct=>Math.hypot(ct.x-I,ct.z-Z)<2.4)||e.volcano&&Math.hypot(I-e.volcano.x,Z-e.volcano.z)<e.volcano.r)continue;const ot=rt<1.45?e.trees.beach:e.trees.inland;let xt=en(),Et="bush";for(const[ct,Vt]of Object.entries(ot)){if(xt<Vt){Et=ct;break}xt-=Vt}ji.push({x:I,z:Z,y:rt,s:(Et==="bush"?.8:.75)+en()*.45,phase:en()*6.28,kind:Et})}const Zi=Qx(i,ji,t,e),Ui=new Fe,si=[];for(let z=0;z<1200&&si.length<(t.mobile?40:56);z++){const I=en()*Math.PI*2,Z=n(I)-3+en()*5.5,rt=Math.cos(I)*Z,ot=Math.sin(I)*Z;y(rt,ot)<3.4||p(rt,ot)<-1.2||si.some(xt=>Math.hypot(xt.x-rt,xt.z-ot)<2.2)||si.push({x:rt,z:ot,s:.6+en()*1.2,r:en()*6})}for(const z of e.plateaus||[]){const I=Math.round(z.r*2*Math.PI/2.3);for(let Z=0;Z<I;Z++){const rt=Z/I*Math.PI*2+en()*.2,ot=z.r+Math.sin(rt*5+z.x)*.8+Math.sin(rt*11)*.3-.2,xt=z.x+Math.cos(rt)*ot,Et=z.z+Math.sin(rt)*ot;e.waterfall&&Math.hypot(xt-e.waterfall.lip[0],Et-e.waterfall.lip[1])<2.2||y(xt,Et)<2.6||si.push({x:xt,z:Et,s:1.3+en()*.9,r:en()*6,cliff:!0})}}[0,1,2].map(z=>d_(On(31+z*7+e.seed),e.rock[0],e.rock[1],z)).map((z,I)=>{const Z=si.filter((ot,xt)=>xt%3===I),rt=new gn(z,bt,Math.max(1,Z.length));return rt.count=Z.length,Z.forEach((ot,xt)=>{Ui.position.set(ot.x,p(ot.x,ot.z)-.2*ot.s,ot.z),Ui.rotation.set(0,ot.r*2,0),Ui.scale.set(ot.s*1.1,ot.s*.9,ot.s),Ui.updateMatrix(),rt.setMatrixAt(xt,Ui.matrix)}),rt.castShadow=rt.receiveShadow=!0,i.add(rt),Ql(rt,"rock"),rt});const vr=Vx(i,{heightAt:p,pathDist:y,plinths:ee,paths:r,lighthouse:un},t,On(99+e.seed),n,e),Ki=h_(i,{heightAt:p,pathDist:y,paths:r,lighthouse:un,islandEdge:n},t,e),P=e_(i,{heightAt:p,pathDist:y,plinths:ee,lighthouse:un,extrasBlock:Ki.blocks},t,e,On(7+e.seed)),Y=Float32Array.from(v),it=[...si.map(z=>({x:z.x,z:z.z,r:z.s*.85})),...vr.obstacles];for(const z of it){const I=z.r+1,Z=f*2/d,rt=Math.floor((z.x-I+f)/Z),ot=Math.ceil((z.x+I+f)/Z),xt=Math.floor((z.z-I+f)/Z),Et=Math.ceil((z.z+I+f)/Z);for(let ct=Math.max(0,xt);ct<=Math.min(d,Et);ct++)for(let Vt=Math.max(0,rt);Vt<=Math.min(d,ot);Vt++){const Gt=-f+Vt*Z,Dt=-f+ct*Z,_e=Math.max(0,Math.hypot(Gt-z.x,Dt-z.z)-z.r);if(_e>.9)continue;const le=ct*(d+1)+Vt,_n=.06-_e*.35,fn=1-_e/.9;Y[le]=Math.max(Y[le],Y[le]+(_n-Y[le])*fn*fn)}}if(e.waterfall&&e.waterfall._lvl!==void 0){const z=e.waterfall;nu(i,{heightTex:iu(Y,d+1),ext:f,grid:d,quality:t,sunDir:new O(24,17,4),colors:e.water,level:z._lvl,size:9,maxDepth:.8,center:[(z.pool[0]+z.lip[0])/2,(z.pool[1]+z.lip[1])/2]})}const st=nu(i,{heightTex:iu(Y,d+1),ext:f,grid:d,quality:t,sunDir:new O(24,17,4),colors:e.water}),$=[{x:s.x,z:s.z,r:3.5},...ee.map(z=>({x:z.x,z:z.z,r:1.4})),...Zi.colliders,...si.filter(z=>p(z.x,z.z)>-.45).map(z=>({x:z.x,z:z.z,r:z.s*.85})),...vr.colliders,...Ki.colliders];return{def:e,paths:r,plinths:ee,lighthouse:un,heightAt:p,pathDist:y,slopeAt:T,isLand:S,isIce:E,landDist:h,isWalkable:(z,I)=>C(z,I)&&!Ki.blocks(z,I),colliders:$,update:z=>{st.update(z),vr.update(z),Ki.update(z),P.update(z);const I=un.glow??1,Z=.75+.25*Math.sin(z*1.3)+.1*Math.sin(z*7.1);jt.color.setRGB(1,.85,.75).multiplyScalar(I>0?(.7+1.5*I)*Z:.12),Ft.intensity=(8+40*I)*Z,Nt.rotation.y=z*.6,Zi.update(z),K(z)},terrain:$t,extras:Ki,grass:P}}const ce=(i,t={})=>new ze({color:i,flatShading:!0,...t}),Hs=(i,t)=>new Te({color:new Ct(i).multiplyScalar(t)}),ut={coat:ce("#f2c23c"),coatDark:ce("#c99a22"),skin:ce("#f1c7a0"),beanieG:ce("#3f8f4a"),beanieY:ce("#f2c94c"),beanieR:ce("#d4553a"),boot:ce("#3a2c22"),eyeW:new Te({color:"#ffffff"}),eyeB:new Te({color:"#1c1820"}),suit:ce("#6b6f78"),suitDark:ce("#3c4150"),suitNavy:ce("#2c3a5c"),shirt:ce("#f4f1ea"),tie:ce("#b8322a"),paper:ce("#fbfaf4"),stampInk:ce("#a8233a"),woodLight:ce("#c49360"),glasses:ce("#222428"),binderR:ce("#c94f3f"),binderB:ce("#3f6fc9"),binderY:ce("#e6b93f"),gull:ce("#f4f2ee"),gullWing:ce("#c4ccd4"),gullTip:ce("#2e3038"),gullBand:ce("#8e98a4"),beak:ce("#f0a43a"),megaRed:ce("#d8453a"),mouth:new Te({color:"#4a2a2a"}),smile:new Te({color:"#c8485a"}),wood:ce("#9a6a42"),woodDark:ce("#6e4a2c"),iron:ce("#55585e"),speaker:ce("#2a2a30"),cone:ce("#4a4a52"),rasG:ce("#3f9a4a"),rasY:ce("#f2c94c"),rasR:ce("#d4553a"),chipsBag:ce("#f2b632"),chipsRed:ce("#d8453a"),chip:ce("#f0c860"),ringMat:new ze({color:"#f1efe9",transparent:!0,opacity:.8}),ember:Hs("#ff9a3a",2.4),emberCore:Hs("#fff1c2",2),rolling:ce("#5a9a5a"),rollingPaper:ce("#fffdf5"),lantern:Hs("#ffd27a",2.2),hpBg:new Te({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new Te({color:"#d8553a",depthTest:!1}),levelPip:Hs("#9fffb0",1.6),bottle:new ze({color:"#7fd6ff",transparent:!0,opacity:.8}),bubble:new ze({color:"#dff6ff",transparent:!0,opacity:.45,emissive:"#5a7a9a"}),kiteSail:new ze({color:"#ff7a5a",side:Xe}),rope:ce("#d9c8a0"),ledger:ce("#2f5a3a"),track:ce("#8a4ac8"),briefcase:ce("#6a3a1a"),brass:ce("#d8b040"),rotor:new Te({color:"#cfd6dc",transparent:!0,opacity:.45}),redLight:Hs("#ff3030",2),balloonA:ce("#e8e4d8"),balloonB:ce("#c8463a"),heli:ce("#f2c23c"),glassDark:ce("#2a3440"),spot:new Te({color:"#fff6c8",transparent:!0,opacity:.18,blending:ni,depthWrite:!1,side:Xe}),pizza:ce("#e8603a"),pizzaCrust:ce("#e8b866"),lampGlass:new ze({color:"#ff8a5a",transparent:!0,opacity:.45,emissive:"#6a1a10"}),lampBlob:Hs("#ff9a2a",2.2)},mt={sphere:new gi(1,10,8),lowSphere:new ps(1,1),capsule:new io(.5,.7,3,8),cyl:new ke(1,1,1,10),cone:new fi(1,1,10),box:new An(1,1,1),dome:new gi(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new Wr(.22,0),leaf:new Wr(.3,0),plane:new Hn(1,1),smileArc:new Ks(.06,.018,4,10,Math.PI),ring:new Ks(.32,.12,6,14),bubbleRing:new Ks(.18,.025,4,12)};function gt(i,t,e,n,s,r=0,a=0,o=0,l=!0){const c=new se(i,t);return c.scale.set(e,n,s),c.position.set(r,a,o),c.castShadow=l,c}function Ic(i,t,e,n,s=.12,r=.18){const a=new xe;a.position.set(t,e,n),a.userData.isEyes=!0;for(const o of[-1,1])a.add(gt(mt.sphere,ut.eyeW,s,s,s,o*r,0,0,!1)),a.add(gt(mt.sphere,ut.eyeB,s*.55,s*.55,s*.55,o*r,.01,-s*.7,!1));return i.add(a),a}const m_=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,31);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.25)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ui(i)})(),g_=new Te({map:m_,transparent:!0,depthWrite:!1,fog:!1}),v_=new Hn(1,1).rotateX(-Math.PI/2);function yf(i,t){const e=new se(v_,g_);e.scale.set(t*2,1,t*2),e.position.y=.04,e.renderOrder=1,i.add(e),i.userData.blob=e}function Sf(i){const t=[];i.traverse(e=>{e.userData.isEyes&&t.push(e)}),i.userData.eyes=t}function bf(i,t,e,n=1){const s=gt(mt.box,ut.mouth,.14*n,.025*n,.02,0,t,e,!1);s.rotation.z=.15;const r=gt(mt.smileArc,ut.smile,n,n,n,0,t+.03*n,e,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}function x_(){const i=new xe,t=new xe;i.add(t),t.add(gt(mt.capsule,ut.coat,.75,.75,.7,0,.75,0)),t.add(gt(mt.cyl,ut.coatDark,.4,.06,.38,0,.62,0));const e=new xe;e.position.y=1.62,e.scale.setScalar(1.22),e.add(gt(mt.sphere,ut.skin,.33,.32,.32)),e.add(gt(mt.cyl,ut.beanieG,.35,.1,.35,0,.14,0)),e.add(gt(mt.cyl,ut.beanieY,.31,.1,.31,0,.24,0)),e.add(gt(mt.dome,ut.beanieR,.27,.22,.27,0,.29,0)),e.add(gt(mt.sphere,ut.beanieY,.08,.08,.08,0,.52,0)),Ic(e,0,.02,-.26,.07,.12);const n=bf(e,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,t.add(e);const s=[-1,1].map(c=>{const h=gt(mt.capsule,ut.boot,.24,.32,.24,c*.18,.2,0);return t.add(h),h}),r=new xe;r.position.set(.48,1,-.1),r.add(gt(mt.box,ut.iron,.2,.28,.2,0,-.25,0)),r.add(gt(mt.sphere,ut.lantern,.1,.13,.1,0,-.25,0,!1)),t.add(r);const a=new xe;a.position.set(-.46,1.08,0),a.add(gt(mt.capsule,ut.coat,.16,.34,.16,0,-.28,0)),a.add(gt(mt.sphere,ut.skin,.1,.1,.1,0,-.52,0)),t.add(a);const o=new xe;o.add(gt(mt.box,ut.rolling,.7,.12,.42,0,0,0,!1)),o.add(gt(mt.box,ut.rollingPaper,.6,.08,.36,.06,.08,0,!1)),o.add(gt(mt.leaf,ut.rasG,.35,.05,.35,-.12,.07,0,!1)),o.position.y=2.35,o.visible=!1,i.add(o);const l=new xe;l.position.y=2;for(let c=0;c<3;c++)l.add(gt(mt.ember,ut.emberCore,.6,.6,.6,Math.cos(c*2.1)*.45,0,Math.sin(c*2.1)*.45,!1));return l.visible=!1,i.add(l),yf(i,.62),i.userData={body:t,legs:s,head:e,lanternArm:r,armL:a,carried:o,stars:l,blob:i.userData.blob},Sf(i),i}function ai(i,t){const e=new xe;e.position.y=t;const n=new se(mt.plane,ut.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new se(mt.plane,ut.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,e.add(n,s),e.visible=!1,i.add(e),i.userData.hpBar=e,i.userData.hpFg=s}function Ws(i,{scale:t=1,suit:e=ut.suit,wide:n=1}={}){const s=t;i.add(gt(mt.capsule,e,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(gt(mt.box,ut.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(gt(mt.box,ut.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const o of[-1,1])i.add(gt(mt.capsule,ut.suitDark,.2*s,.25*s,.2*s,o*.16*s,.17*s,0));const r=new xe;r.position.y=1.5*s,r.add(gt(mt.sphere,ut.skin,.3*s,.3*s,.3*s)),r.add(gt(mt.dome,ut.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),Ic(r,0,.03*s,-.25*s,.065*s,.11*s);const a=bf(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:a}}function __(i){const t=new xe,e=new xe;if(t.add(e),t.userData.body=e,i==="clerk"){const{head:n,mouth:s}=Ws(e);for(const o of[-1,1])n.add(gt(mt.box,ut.glasses,.11,.07,.02,o*.11,.03,-.3,!1));n.add(gt(mt.box,ut.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new xe;r.position.set(.48,.9,-.15),r.add(gt(mt.cyl,ut.woodLight,.06,.25,.06,0,.12,0)),r.add(gt(mt.sphere,ut.woodLight,.09,.09,.09,0,.27,0)),r.add(gt(mt.box,ut.stampInk,.22,.08,.16,0,-.02,0)),e.add(r);const a=gt(mt.box,ut.paper,.3,.38,.02,-.46,.92,-.2);a.rotation.y=.4,e.add(a),t.userData.mouth=s,t.userData.arm=r,ai(t,2.15)}else if(i==="tank"){const{mouth:n}=Ws(e,{scale:1.25,suit:ut.suitNavy,wide:1.45}),s=new xe;s.position.set(0,0,-.95),s.add(gt(mt.box,ut.woodDark,.75,1.05,.45,0,.52,0));const r=gt(mt.box,ut.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(gt(mt.cyl,ut.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(gt(mt.sphere,ut.speaker,.05,.05,.05,.18,1.52,.04,!1)),e.add(s),t.userData.mouth=n,ai(t,2.6)}else if(i==="gull"){e.add(gt(mt.lowSphere,ut.gull,.36,.3,.6,0,0,0)),e.add(gt(mt.cone,ut.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=gt(mt.cone,ut.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,e.add(n),e.add(gt(mt.cyl,ut.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const a=new xe;a.position.set(r*.25,.05,0),a.add(gt(mt.box,ut.gullWing,.6,.06,.42,r*.3,0,0)),a.add(gt(mt.box,ut.gullBand,.58,.065,.1,r*.31,0,.17));const o=gt(mt.box,ut.gullTip,.42,.055,.3,r*.78,0,.04);return o.rotation.y=r*.18,a.add(o),e.add(a),a});t.userData.wings=s,Ic(e,0,.12,-.42,.06,.13),t.userData.mouth=null,ai(t,.8)}else if(i==="swarm"){const{mouth:n}=Ws(e,{scale:.6}),s=[ut.binderR,ut.binderB,ut.binderY],r=gt(mt.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);e.add(r),t.userData.mouth=n,ai(t,1.3)}else if(i==="auditor"){const{head:n,mouth:s}=Ws(e,{scale:1.1,suit:ut.suitDark});for(const a of[-1,1])n.add(gt(mt.box,ut.glasses,.12,.08,.02,a*.12,.03,-.33,!1));const r=new xe;r.position.set(0,.95,-.55),r.add(gt(mt.box,ut.ledger,1.05,1.2,.14)),r.add(gt(mt.box,ut.paper,.95,1.1,.1,0,0,.03,!1)),r.add(gt(mt.box,ut.brass,.3,.3,.02,0,.15,-.08,!1)),e.add(r),t.userData.mouth=s,t.userData.shield=r,ai(t,2.3)}else if(i==="complainer"){const{head:n,mouth:s}=Ws(e,{scale:.85,suit:ut.track});n.add(gt(mt.cyl,ut.rasR,.27,.06,.27,0,.1,0,!1));const r=new xe;r.position.set(.35,1.2,-.1),r.add(gt(mt.cyl,ut.track,.06,.45,.06,0,.2,0)),r.add(gt(mt.box,ut.paper,.32,.42,.02,0,.55,0)),e.add(r),t.userData.mouth=s,t.userData.arm=r,ai(t,1.8)}else if(i==="lobbyist"||i==="lobbyMini"){const n=i==="lobbyMini",{mouth:s}=Ws(e,{scale:n?.55:1.05,suit:ut.suitNavy});e.add(gt(mt.box,ut.brass,.08,.3,.05,0,n?.52:.99,n?-.17:-.32,!1)),e.add(gt(mt.box,ut.briefcase,n?.28:.5,n?.22:.36,.12,n?.3:.55,n?.3:.55,0)),t.userData.mouth=s,ai(t,n?1.2:2.1)}else if(i==="drone"){e.add(gt(mt.box,ut.iron,.42,.14,.42));const n=[];for(const[s,r]of[[1,1],[-1,1],[1,-1],[-1,-1]]){e.add(gt(mt.box,ut.speaker,.5,.04,.05,s*.22,0,r*.22).rotateY(s*r>0?Math.PI/4:-Math.PI/4));const a=gt(mt.cyl,ut.rotor,.2,.01,.2,s*.4,.08,r*.4,!1);e.add(a),n.push(a)}e.add(gt(mt.sphere,ut.redLight,.07,.07,.07,0,-.06,-.22,!1)),t.userData.rotors=n,t.userData.mouth=null,ai(t,.6)}else if(i==="balloon"){e.add(gt(mt.sphere,ut.balloonA,1.1,1.3,1.1,0,1.6,0));for(let n=0;n<4;n++)e.add(gt(mt.cyl,ut.balloonB,1.12-Math.abs(n-1.5)*.18,.18,1.12-Math.abs(n-1.5)*.18,0,1+n*.42,0,!1));e.add(gt(mt.box,ut.woodLight,.6,.4,.6,0,-.1,0)),e.add(gt(mt.sphere,ut.skin,.2,.2,.2,0,.25,0)),e.add(gt(mt.dome,ut.suitDark,.21,.1,.21,0,.32,0,!1));for(const[n,s]of[[1,1],[-1,1],[1,-1],[-1,-1]])e.add(gt(mt.cyl,ut.rope,.015,.8,.015,n*.28,.45,s*.28,!1));t.userData.mouth=null,ai(t,3.3)}else if(i==="heli"){e.add(gt(mt.capsule,ut.heli,.6,.55,.9,0,0,0).rotateX(Math.PI/2)),e.add(gt(mt.sphere,ut.glassDark,.28,.22,.24,0,.05,-.38,!1)),e.add(gt(mt.box,ut.heli,.12,.12,1.1,0,.05,.85));const n=gt(mt.box,ut.speaker,1.9,.02,.12,0,.4,0,!1),s=gt(mt.box,ut.speaker,.04,.5,.08,.08,.1,1.38,!1);e.add(n,s);const r=new se(new fi(1.2,4.5,14,1,!0),ut.spot);r.position.set(0,-2.3,-.2),r.visible=!1,e.add(r),t.userData.rotor=n,t.userData.tail=s,t.userData.beam=r,t.userData.mouth=null,ai(t,1)}return yf(t,{tank:.85,auditor:.7,balloon:.9,heli:.6,swarm:.35,lobbyMini:.35,drone:.35,gull:.45}[i]??.55),Sf(t),t}function M_(i){const t=i.mesh.userData.mouth;t&&(t.sour.visible=!1,t.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function y_(i){const t=new xe,e=new xe;if(t.add(e),i==="ring"){t.add(gt(mt.box,ut.wood,.9,.5,.9,0,.25,0)),e.position.y=.95;const a=gt(mt.cyl,ut.iron,.32,1.1,.32,0,0,-.15);a.rotation.x=Math.PI/2-.15,e.add(a),e.add(gt(mt.cyl,ut.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),e.add(gt(mt.sphere,ut.iron,.42,.42,.42,0,0,.42)),e.add(gt(mt.sphere,ut.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){t.add(gt(mt.cyl,ut.iron,.7,.3,.7,0,.15,0)),e.position.y=.3;const a=gt(mt.box,ut.chipsBag,.95,1.1,.6,0,.6,0);a.rotation.x=-.35,e.add(a),e.add(gt(mt.box,ut.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let o=0;o<5;o++)e.add(gt(mt.leaf,ut.chip,.3,.08,.3,(o-2)*.17,1.2,-.3-o%2*.1,!1))}else if(i==="speaker"){const a=new xe;a.add(gt(mt.box,ut.speaker,1,1.5,.75,0,.75,0)),a.add(gt(mt.box,ut.rasG,1.02,.12,.77,0,1.38,0,!1)),a.add(gt(mt.box,ut.rasY,1.02,.12,.77,0,1.26,0,!1)),a.add(gt(mt.box,ut.rasR,1.02,.12,.77,0,1.14,0,!1));const o=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const h=gt(mt.cyl,ut.cone,c,.08,c,0,l,-.38,!1);h.rotation.x=Math.PI/2,a.add(h),o.push(h)}e.add(a),t.userData.woofers=o}else if(i==="bubble"){t.add(gt(mt.cyl,ut.speaker,.5,.25,.5,0,.12,0)),e.position.y=.3,e.add(gt(mt.cyl,ut.bottle,.36,1,.36,0,.5,0)),e.add(gt(mt.cyl,ut.rasR,.22,.2,.22,0,1.08,0));const a=gt(mt.cyl,ut.wood,.03,.8,.03,0,1.4,-.2);a.rotation.x=.5,e.add(a),e.add(gt(mt.bubbleRing,ut.rasY,1,1,1,0,1.75,-.42,!1).rotateX(.5));for(let o=0;o<3;o++)e.add(gt(mt.sphere,ut.bubble,.14+o*.04,.14+o*.04,.14+o*.04,.3-o*.25,1.7+o*.3,-.7-o*.15,!1))}else if(i==="kite"){for(let o=0;o<3;o++){const l=o/3*Math.PI*2,c=gt(mt.cyl,ut.wood,.07,1.6,.07,Math.cos(l)*.45,.7,Math.sin(l)*.45);c.rotation.set(Math.sin(l)*.28,0,-Math.cos(l)*.28),t.add(c)}e.position.y=1.55,e.add(gt(mt.cyl,ut.iron,.22,.3,.22,0,0,0).rotateZ(Math.PI/2));const a=Af();a.position.set(0,.7,0),a.scale.setScalar(.8),e.add(a),t.userData.kite=a}else if(i==="pizza"){t.add(gt(mt.box,ut.wood,1.2,.35,.9,0,.18,0));for(const o of[-1,1])t.add(gt(mt.box,ut.woodDark,.12,.9,.12,o*.45,.65,0));e.position.y=1;const a=new xe;a.add(gt(mt.box,ut.woodLight,.12,.12,1.5,0,0,-.4)),a.add(gt(mt.cyl,ut.pizzaCrust,.32,.06,.32,0,.08,-1.1)),a.add(gt(mt.cyl,ut.pizza,.27,.03,.27,0,.12,-1.1,!1)),a.rotation.x=-.35,e.add(a),t.userData.arm=a}else if(i==="lamp"){t.add(gt(mt.cone,ut.brass,.55,.7,.55,0,.35,0)),e.position.y=.7,e.add(gt(mt.capsule,ut.lampGlass,.75,.9,.75,0,.75,0,!1));const a=[];for(let o=0;o<3;o++){const l=gt(mt.sphere,ut.lampBlob,.16,.2,.16,0,.5+o*.3,0,!1);e.add(l),a.push(l)}e.add(gt(mt.cone,ut.brass,.3,.35,.3,0,1.55,0)),t.userData.blobs=a}const n=[];for(let a=0;a<5;a++){const o=gt(mt.leaf,ut.levelPip,.45,.1,.45,Math.cos(a*1.2566)*.95,.15,Math.sin(a*1.2566)*.95,!1);o.visible=a===0,t.add(o),n.push(o)}const s=new $i(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new se(s,new Te({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,t.add(r),t.traverse(a=>{a.isMesh&&a!==r&&a.material!==ut.levelPip&&(a.castShadow=!0)}),t.userData.head=e,t.userData.pips=n,t.userData.ring=r,t}function wf(i,t){i.mesh.userData.pips.forEach((e,n)=>e.visible=n<t),i.mesh.scale.setScalar(1+(t-1)*.08)}function Yr(i,t){const e=i.mesh.userData.ring;if(e.visible=t>0,t<=0)return;e.geometry.dispose();const n=new $i(1.45,1.7,40,1,0,Math.PI*2*t);n.rotateX(-Math.PI/2),e.geometry=n}function S_(){const i=new xe;return i.add(gt(mt.ember,ut.ember,1,1.3,1,0,0,0,!1)),i.add(gt(mt.ember,ut.emberCore,.5,.7,.5,0,0,0,!1)),i}function b_(){const i=new se(mt.ring,ut.ringMat);return i.castShadow=!1,i}function Ef(){const i=new xe;return i.add(gt(mt.box,ut.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(gt(mt.box,ut.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function Tf(){const i=new Ks(1,.08,4,32);return i.rotateX(Math.PI/2),new se(i,new Te({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}let Da=null;function w_(){if(Da)return Da;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d");["#d8453a","#f2c94c","#d8453a","#f2c94c","#3f9a4a","#f2c94c","#d8453a","#f2c94c"].forEach((n,s)=>{t.fillStyle=n,t.fillRect(0,s*8,64,8)});const e=new ui(i);return e.colorSpace=cn,e.wrapS=e.wrapT=di,e.repeat.set(1,1.4),e.magFilter=hn,Da=new ze({map:e,flatShading:!0}),Da}function Af(){const i=new xe,t=new cf([new St(0,.55),new St(.38,0),new St(0,-.75),new St(-.38,0)]),e=new Dc(t,{depth:.035,bevelEnabled:!1});e.translate(0,0,-.0175);const n=new se(e,w_());n.rotation.x=-Math.PI/2.4,n.castShadow=!0,i.add(n);const s=gt(mt.box,ut.woodDark,.025,1.3,.025,0,-.1,.03,!1),r=gt(mt.box,ut.woodDark,.76,.025,.025,0,0,.03,!1);n.add(s,r);const a=new xe;a.position.set(0,-.68,0),n.add(a);const o=[ut.rasR,ut.rasY,ut.rasG,ut.rasR,ut.rasY];let l=a;const c=[];for(let h=0;h<o.length;h++){const u=new xe;u.position.y=h?-.2:0,u.add(gt(mt.box,ut.rope,.015,.2,.015,0,-.1,0,!1));const f=new xe;f.position.y=-.2;for(const d of[-1,1]){const v=gt(mt.cone,o[h],.05,.1,.03,d*.05,0,0,!1);v.rotation.z=d*Math.PI/2,f.add(v)}u.add(f),l.add(u),l=u,c.push(u)}return i.userData.tailSegs=c,i}function Cf(){return gt(mt.sphere,ut.bubble,.28,.28,.28,0,0,0,!1)}function E_(){const i=new xe;return i.add(gt(mt.cyl,ut.pizzaCrust,.3,.06,.3,0,0,0,!0)),i.add(gt(mt.cyl,ut.pizza,.25,.03,.25,0,.04,0,!1)),i}const zr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const T_=new Sc(-1,1,1,-1,0,1);class A_ extends Ce{constructor(){super(),this.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ue([0,2,0,0,2,0],2))}}const C_=new A_;class ao{constructor(t){this._mesh=new se(C_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,T_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Rf extends Ts{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Qn.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ao(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class du extends Ts{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class R_ extends Ts{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class P_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new St);this._width=n.width,this._height=n.height,e=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rf(zr),this.copyPass.material.blending=ln,this.clock=new pf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}du!==void 0&&(a instanceof du?n=!0:a instanceof R_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new St);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class D_ extends Ts{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const La={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new St},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new we},cameraProjectionMatrixInverse:{value:new we},cameraWorldMatrix:{value:new we},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

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
		}`},Ia={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},jo={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function L_(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=I_(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=e[a],l=2*Math.PI*o/n,c=new O(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new eo(s,t,t);return r.wrapS=di,r.wrapT=di,r.needsUpdate=!0,r}function I_(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}const Ua={defines:{SAMPLES:16,SAMPLE_VECTORS:Pf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new St},cameraProjectionMatrixInverse:{value:new we},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Pf(i,t,e){const n=U_(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function U_(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new O(Math.cos(r),Math.sin(r),a))}return n}class N_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,v=t-f,x=e-d;let m,p;v>x?(m=1,p=0):(m=0,p=1);const y=v-m+h,S=x-p+h,g=v-1+2*h,T=x-1+2*h,E=l&255,w=c&255,C=this.perm[E+this.perm[w]]%12,M=this.perm[E+m+this.perm[w+p]]%12,_=this.perm[E+1+this.perm[w+1]]%12;let A=.5-v*v-x*x;A<0?n=0:(A*=A,n=A*A*this.dot(this.grad3[C],v,x));let D=.5-y*y-S*S;D<0?s=0:(D*=D,s=D*D*this.dot(this.grad3[M],y,S));let G=.5-g*g-T*T;return G<0?r=0:(G*=G,r=G*G*this.dot(this.grad3[_],g,T)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),f=Math.floor(n+c),d=1/6,v=(h+u+f)*d,x=h-v,m=u-v,p=f-v,y=t-x,S=e-m,g=n-p;let T,E,w,C,M,_;y>=S?S>=g?(T=1,E=0,w=0,C=1,M=1,_=0):y>=g?(T=1,E=0,w=0,C=1,M=0,_=1):(T=0,E=0,w=1,C=1,M=0,_=1):S<g?(T=0,E=0,w=1,C=0,M=1,_=1):y<g?(T=0,E=1,w=0,C=0,M=1,_=1):(T=0,E=1,w=0,C=1,M=1,_=0);const A=y-T+d,D=S-E+d,G=g-w+d,L=y-C+2*d,k=S-M+2*d,V=g-_+2*d,X=y-1+3*d,B=S-1+3*d,j=g-1+3*d,at=h&255,lt=u&255,wt=f&255,Qt=this.perm[at+this.perm[lt+this.perm[wt]]]%12,et=this.perm[at+T+this.perm[lt+E+this.perm[wt+w]]]%12,pt=this.perm[at+C+this.perm[lt+M+this.perm[wt+_]]]%12,Tt=this.perm[at+1+this.perm[lt+1+this.perm[wt+1]]]%12;let ft=.6-y*y-S*S-g*g;ft<0?s=0:(ft*=ft,s=ft*ft*this.dot3(this.grad3[Qt],y,S,g));let Bt=.6-A*A-D*D-G*G;Bt<0?r=0:(Bt*=Bt,r=Bt*Bt*this.dot3(this.grad3[et],A,D,G));let Xt=.6-L*L-k*k-V*V;Xt<0?a=0:(Xt*=Xt,a=Xt*Xt*this.dot3(this.grad3[pt],L,k,V));let $t=.6-X*X-B*B-j*j;return $t<0?o=0:($t*=$t,o=$t*$t*this.dot3(this.grad3[Tt],X,B,j)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,f,d,v;const x=(t+e+n+s)*l,m=Math.floor(t+x),p=Math.floor(e+x),y=Math.floor(n+x),S=Math.floor(s+x),g=(m+p+y+S)*c,T=m-g,E=p-g,w=y-g,C=S-g,M=t-T,_=e-E,A=n-w,D=s-C,G=M>_?32:0,L=M>A?16:0,k=_>A?8:0,V=M>D?4:0,X=_>D?2:0,B=A>D?1:0,j=G+L+k+V+X+B,at=a[j][0]>=3?1:0,lt=a[j][1]>=3?1:0,wt=a[j][2]>=3?1:0,Qt=a[j][3]>=3?1:0,et=a[j][0]>=2?1:0,pt=a[j][1]>=2?1:0,Tt=a[j][2]>=2?1:0,ft=a[j][3]>=2?1:0,Bt=a[j][0]>=1?1:0,Xt=a[j][1]>=1?1:0,$t=a[j][2]>=1?1:0,ee=a[j][3]>=1?1:0,dt=M-at+c,bt=_-lt+c,N=A-wt+c,Ht=D-Qt+c,_t=M-et+2*c,zt=_-pt+2*c,Rt=A-Tt+2*c,Kt=D-ft+2*c,q=M-Bt+3*c,R=_-Xt+3*c,b=A-$t+3*c,H=D-ee+3*c,K=M-1+4*c,Q=_-1+4*c,tt=A-1+4*c,Ut=D-1+4*c,Mt=m&255,At=p&255,ne=y&255,yt=S&255,Wt=o[Mt+o[At+o[ne+o[yt]]]]%32,ie=o[Mt+at+o[At+lt+o[ne+wt+o[yt+Qt]]]]%32,re=o[Mt+et+o[At+pt+o[ne+Tt+o[yt+ft]]]]%32,jt=o[Mt+Bt+o[At+Xt+o[ne+$t+o[yt+ee]]]]%32,ge=o[Mt+1+o[At+1+o[ne+1+o[yt+1]]]]%32;let oe=.6-M*M-_*_-A*A-D*D;oe<0?h=0:(oe*=oe,h=oe*oe*this.dot4(r[Wt],M,_,A,D));let pe=.6-dt*dt-bt*bt-N*N-Ht*Ht;pe<0?u=0:(pe*=pe,u=pe*pe*this.dot4(r[ie],dt,bt,N,Ht));let W=.6-_t*_t-zt*zt-Rt*Rt-Kt*Kt;W<0?f=0:(W*=W,f=W*W*this.dot4(r[re],_t,zt,Rt,Kt));let Pt=.6-q*q-R*R-b*b-H*H;Pt<0?d=0:(Pt*=Pt,d=Pt*Pt*this.dot4(r[jt],q,R,b,H));let nt=.6-K*K-Q*Q-tt*tt-Ut*Ut;return nt<0?v=0:(nt*=nt,v=nt*nt*this.dot4(r[ge],K,Q,tt,Ut)),27*(h+u+f+d+v)}}class oi extends Ts{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=L_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Rn(this.width,this.height,{type:Gn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ve({defines:Object.assign({},La.defines),uniforms:Qn.clone(La.uniforms),vertexShader:La.vertexShader,fragmentShader:La.fragmentShader,blending:ln,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new zx,this.normalMaterial.blending=ln,this.pdMaterial=new Ve({defines:Object.assign({},Ua.defines),uniforms:Qn.clone(Ua.uniforms),vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ve({defines:Object.assign({},Ia.defines),uniforms:Qn.clone(Ia.uniforms),vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader,blending:ln}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ve({uniforms:Qn.clone(zr.uniforms),vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:al,blendDst:Ar,blendEquation:Kn,blendSrcAlpha:rl,blendDstAlpha:Ar,blendEquationAlpha:Kn}),this.blendMaterial=new Ve({uniforms:Qn.clone(jo.uniforms),vertexShader:jo.vertexShader,fragmentShader:jo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Au,blendSrc:al,blendDst:Ar,blendEquation:Kn,blendSrcAlpha:rl,blendDstAlpha:Ar,blendEquationAlpha:Kn}),this.fsQuad=new ao(null),this.originalClearColor=new Ct,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new wc,this.depthTexture.format=Ms,this.depthTexture.type=_s,this.normalRenderTarget=new Rn(this.width,this.height,{minFilter:hn,magFilter:hn,type:Gn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Pf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case oi.OUTPUT.Off:break;case oi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=ln,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case oi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=ln,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case oi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=ln,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case oi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case oi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=ln,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case oi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=ln,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new N_,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){const l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new eo(s,t,t,Bn,pi);return r.wrapS=di,r.wrapT=di,r.needsUpdate=!0,r}}oi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const z_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class hr extends Ts{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new St(t.x,t.y):new St(256,256),this.clearColor=new Ct(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(r,a,{type:Gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Rn(r,a,{type:Gn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Rn(r,a,{type:Gn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=z_;this.highPassUniforms=Qn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ve({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new St(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=zr;this.copyUniforms=Qn.clone(h.uniforms),this.blendMaterial=new Ve({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ni,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ct,this.oldClearAlpha=1,this.basic=new Te,this.fsQuad=new ao(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new St(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=hr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=hr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new St(.5,.5)},direction:{value:new St(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}hr.BlurDirectionX=new St(1,0);hr.BlurDirectionY=new St(0,1);const F_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class O_ extends Ts{constructor(){super();const t=F_;this.uniforms=Qn.clone(t.uniforms),this.material=new Nx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ao(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Se.getTransfer(this._outputColorSpace)===Pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ru?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Du?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const k_={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new O(1,1,1)},uLift:{value:new O},uSat:{value:1.08}},vertexShader:`
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
    }`},B_=new URLSearchParams(location.search).get("ao")==="1";function G_(i,t,e,n={}){const s=new P_(i,new Rn(1,1,{type:Gn})),r=new D_(t,e),a=new oi(t,e,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});a.blendIntensity=1;const o=new hr(new St(256,256),.6,.55,1),l=new Rf(k_);n.tint&&l.uniforms.uTint.value.set(...n.tint),n.lift&&l.uniforms.uLift.value.set(...n.lift),n.sat&&(l.uniforms.uSat.value=n.sat),l.uniforms.uVignette.value=n.vignette??.25;const c=new O_;for(const v of[r,a,o,l,c])s.addPass(v);let h="high",u=1,f=1;const d={composer:s,get level(){return h},setLevel(v){h=v,a.enabled=v==="high"&&B_,o.strength=v==="high"?.6:.5;const x=v==="high"?4:0;for(const m of[s.renderTarget1,s.renderTarget2])m.samples!==x&&(m.samples=x,m.dispose());d.setSize(u,f)},setSize(v,x){u=v,f=x;const m=i.getPixelRatio();s.setPixelRatio(m),s.setSize(v,x);const p=h==="high"?2:4;o.resolution.set(v*m/p,x*m/p),o.setSize(v*m/p,x*m/p)},render(v){s.render(v)}};return d}function V_(i,t,e,n,s,r=null){const{heightAt:a}=t,o=e.mobile?.5:1,l=new Set(n.life),c=new Fe,h=new Ct,u=[],f=()=>{for(let v=0;v<50;v++){const x=(Math.random()-.5)*80,m=(Math.random()-.5)*80,p=a(x,m);if(p>.8)return{x,z:m,h:p}}return{x:0,z:0,h:1}};if(l.has("butterflies")){const v=Math.round(26*o),x=new or(.16,6,0,Math.PI);x.scale(1,1.3,1);const p=[-1,1].map(()=>new ze({color:"#ffffff",side:Xe})).map(g=>{const T=new gn(x,g,v);return i.add(T),T}),y=Array.from({length:v},(g,T)=>({...f(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),S=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];y.forEach((g,T)=>{g.home={x:g.x,z:g.z},p.forEach(E=>E.setColorAt(T,h.set(S[T%S.length])))}),p.forEach(g=>g.instanceColor.needsUpdate=!0),u.push((g,T)=>{y.forEach((E,w)=>{E.a+=Math.sin(T*.7+E.ph)*1.6*g,E.x+=Math.cos(E.a)*E.sp*g,E.z+=Math.sin(E.a)*E.sp*g,Math.hypot(E.x-E.home.x,E.z-E.home.z)>5&&(E.a=Math.atan2(E.home.z-E.z,E.home.x-E.x));const C=a(E.x,E.z)+.6+Math.sin(T*2+E.ph)*.25,M=Math.sin(T*18+E.ph)*1.1;p.forEach((_,A)=>{c.position.set(E.x,C,E.z),c.rotation.set(0,-E.a+Math.PI/2,0),c.rotateZ((A?1:-1)*(.3+M*.5)),c.rotateX(-Math.PI/2),c.scale.set(A?1:-1,1,1),c.updateMatrix(),_.setMatrixAt(w,c.matrix)})}),p.forEach(E=>E.instanceMatrix.needsUpdate=!0)})}if(l.has("birds")){const x=new Ce;x.setAttribute("position",new ue([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),x.computeVertexNormals();const m=new gn(x,new ze({color:"#f4f4f0",side:Xe}),7);m.castShadow=!0,i.add(m);const p=Array.from({length:7},(y,S)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:S}));u.push((y,S)=>{p.forEach((g,T)=>{const E=S*g.sp+g.ph;c.position.set(g.cx+Math.cos(E)*g.r,g.y+Math.sin(S*.7+T)*.4,g.cz+Math.sin(E)*g.r),c.rotation.set(0,-E,Math.sin(S*.5+T)*.15);const w=1+Math.sin(S*6+T)*.35*(Math.sin(S*.4+T)>.3?1:.1),C=r?be.smoothstep(c.position.distanceTo(r.position),3,7):1;c.scale.set(1.4*C,w*1.4*C,1.4*C),c.updateMatrix(),m.setMatrixAt(T,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("leaves")){const v=Math.round(60*o),x=new Hn(.16,.1),m=new gn(x,new ze({color:"#ffffff",side:Xe}),v);i.add(m);const p=Array.from({length:v},(y,S)=>({...f(),ph:Math.random()*6,sp:1+Math.random()*1.5}));p.forEach((y,S)=>m.setColorAt(S,h.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][S%4]))),m.instanceColor.needsUpdate=!0,u.push((y,S)=>{p.forEach((g,T)=>{g.x+=g.sp*y,g.z+=Math.sin(S*.8+g.ph)*.6*y,g.x>45&&Object.assign(g,f(),{x:-45});const E=Math.max(a(g.x,g.z),.1)+.3+Math.abs(Math.sin(S*1.3+g.ph))*.9;c.position.set(g.x,E,g.z),c.rotation.set(S*3+g.ph,S*2+g.ph,S*1.5),c.scale.setScalar(1),c.updateMatrix(),m.setMatrixAt(T,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("fireflies")&&s==="skumring"){const v=Math.round(120*o),x=new Float32Array(v*3),m=new Float32Array(v*3),p=Array.from({length:v},()=>({...f(),ph:Math.random()*6})),y=new Ce;y.setAttribute("position",new Ue(x,3)),y.setAttribute("color",new Ue(m,3));const S=document.createElement("canvas");S.width=S.height=32;const g=S.getContext("2d"),T=g.createRadialGradient(16,16,0,16,16,16);T.addColorStop(0,"rgba(255,255,255,1)"),T.addColorStop(1,"rgba(255,255,255,0)"),g.fillStyle=T,g.fillRect(0,0,32,32);const E=new Tc(y,new no({size:.35,map:new ui(S),vertexColors:!0,transparent:!0,blending:ni,depthWrite:!1}));E.frustumCulled=!1,i.add(E),u.push((w,C)=>{p.forEach((M,_)=>{x[_*3]=M.x+Math.sin(C*.4+M.ph)*1.2,x[_*3+1]=M.h+.5+Math.sin(C*.9+M.ph*2)*.4,x[_*3+2]=M.z+Math.cos(C*.35+M.ph)*1.2;const A=Math.max(0,Math.sin(C*1.7+M.ph*3))**3*2.5;m[_*3]=1*A,m[_*3+1]=.9*A,m[_*3+2]=.35*A}),y.attributes.position.needsUpdate=!0,y.attributes.color.needsUpdate=!0})}let d=0;return{update(v){const x=Math.min(.05,Math.max(0,v-d));d=v;for(const m of u)m(x,v)}}}function H_(i,{cell:t=.75,ext:e=68}={}){const n=Math.ceil(e*2/t)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),a=new Float32Array(n*n),o=i.lighthouse.pos,l=(w,C)=>[Math.round((w+e)/t),Math.round((C+e)/t)],c=(w,C)=>[-e+w*t,-e+C*t];let h=()=>!1;function u(){for(let w=0;w<n;w++)for(let C=0;C<n;C++){const[M,_]=c(C,w),A=i.heightAt(M,_),D=w*n+C,G=Math.hypot(M-o.x,_-o.z);let L=1.8;A<-.5||i.slopeAt(M,_)>1.1||i.extras.blocks(M,_)||h(M,_)||G<3.2?L=1/0:i.pathDist(M,_)<1.6?L=.2:A<.05&&(L=2.6),r[D]=L}}function f(){s.fill(1/0),a.fill(0);const w=[],C=(A,D)=>{w.push([A,D]);let G=w.length-1;for(;G>0;){const L=G-1>>1;if(w[L][0]<=w[G][0])break;[w[L],w[G]]=[w[G],w[L]],G=L}},M=()=>{const A=w[0],D=w.pop();if(w.length){w[0]=D;let G=0;for(;;){const L=2*G+1,k=L+1;let V=G;if(L<w.length&&w[L][0]<w[V][0]&&(V=L),k<w.length&&w[k][0]<w[V][0]&&(V=k),V===G)break;[w[V],w[G]]=[w[G],w[V]],G=V}}return A};for(let A=0;A<n;A++)for(let D=0;D<n;D++){const[G,L]=c(D,A),k=Math.hypot(G-o.x,L-o.z);k>=3.2&&k<4.2&&r[A*n+D]<1/0&&(s[A*n+D]=0,C(0,A*n+D))}const _=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;w.length;){const[A,D]=M();if(A>s[D])continue;const G=D%n,L=D/n|0;for(const[k,V,X]of _){const B=G+k,j=L+V;if(B<0||j<0||B>=n||j>=n)continue;const at=j*n+B,lt=r[at];if(lt===1/0)continue;const wt=A+X*t*(lt+r[D])*.5;wt<s[at]&&(s[at]=wt,a[at]=a[D]+X*t,C(wt,at))}}}const d=(w,C)=>{const[M,_]=l(w,C);return M<0||_<0||M>=n||_>=n?1/0:s[_*n+M]};function v(w,C){const[M,_]=l(w,C);let A=d(w,C),D=0,G=0;for(let k=-1;k<=1;k++)for(let V=-1;V<=1;V++){if(!V&&!k)continue;const X=M+V,B=_+k;if(X<0||B<0||X>=n||B>=n)continue;const j=s[B*n+X];j<A&&(A=j,D=V,G=k)}const L=Math.hypot(D,G)||1;return[D/L,G/L,A]}const x=(w,C)=>{const[M,_]=l(w,C);return M<0||_<0||M>=n||_>=n?-1:_*n+M},m=(w,C)=>{const M=x(w,C);return M<0||s[M]===1/0?0:a[M]};function p(){const w=[];for(const C of i.paths){const M=C.samples.find(_=>i.heightAt(_.x,_.z)>-.4&&m(_.x,_.z)>0);M&&w.push([M.x,M.z])}return w}function y(w,C=22,{near:M=8,minFrac:_=.6}={}){const A=p(),D=Math.max(0,...A.map(([V,X])=>m(V,X))),G=(V,X)=>{const B=i.heightAt(V,X);return B>-.4&&B<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([j,at])=>i.heightAt(V+j,X+at)<-.9)},L=A.map(([V,X])=>{const B=[],j=[],at=Math.ceil(M/t),[lt,wt]=l(V,X);for(let et=-at;et<=at;et++)for(let pt=-at;pt<=at;pt++){const[Tt,ft]=c(lt+pt,wt+et);Math.hypot(Tt-V,ft-X)>M||m(Tt,ft)<_*D||(G(Tt,ft)?B.push([Tt,ft]):i.heightAt(Tt,ft)>.3&&i.slopeAt(Tt,ft)<.6&&j.push([Tt,ft]))}return(B.length?B:j).sort(()=>Math.random()-.5)}).filter(V=>V.length).sort(()=>Math.random()-.5),k=[];for(let V=0;k.length<w&&V<4;V++){for(const X of L){const B=X.find(j=>k.every(at=>Math.hypot(at[0]-j[0],at[1]-j[1])>C));if(B&&k.push(B),k.length>=w)break}C=Math.min(C,6)}return k}let S=null;function g(w,C){if(!S){S=new Float32Array(n*n);for(let V=0;V<n;V++)for(let X=0;X<n;X++){const[B,j]=c(X,V);S[V*n+X]=i.isWalkable(B,j)?i.heightAt(B,j)<.05?1.6:1:1/0}}const M=new Float64Array(n*n).fill(1/0),_=[],A=(V,X)=>{_.push([V,X]);let B=_.length-1;for(;B>0;){const j=B-1>>1;if(_[j][0]<=_[B][0])break;[_[j],_[B]]=[_[B],_[j]],B=j}},D=()=>{const V=_[0],X=_.pop();if(_.length){_[0]=X;let B=0;for(;;){const j=2*B+1,at=j+1;let lt=B;if(j<_.length&&_[j][0]<_[lt][0]&&(lt=j),at<_.length&&_[at][0]<_[lt][0]&&(lt=at),lt===B)break;[_[lt],_[B]]=[_[B],_[lt]],B=lt}}return V},G=x(w,C);if(G<0)return null;M[G]=0,A(0,G);const L=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;_.length;){const[V,X]=D();if(V>M[X])continue;const B=X%n,j=X/n|0;for(const[at,lt,wt]of L){const Qt=B+at,et=j+lt;if(Qt<0||et<0||Qt>=n||et>=n)continue;const pt=et*n+Qt,Tt=S[pt];if(Tt===1/0)continue;const ft=V+wt*t*Tt;ft<M[pt]&&(M[pt]=ft,A(ft,pt))}}const k=(V,X)=>{const B=x(V,X);return B<0?1/0:M[B]};return{at:k,dir(V,X){const[B,j]=l(V,X);let at=k(V,X),lt=0,wt=0;for(let et=-1;et<=1;et++)for(let pt=-1;pt<=1;pt++){if(!pt&&!et)continue;const Tt=B+pt,ft=j+et;Tt<0||ft<0||Tt>=n||ft>=n||M[ft*n+Tt]<at&&(at=M[ft*n+Tt],lt=pt,wt=et)}const Qt=Math.hypot(lt,wt)||1;return[lt/Qt,wt/Qt]}}}const T=()=>{let w=0;for(const C of s)C<1/0&&C>w&&(w=C);return w},E=()=>{u(),f()};return E(),{at:d,dir:v,coastPoints:y,roadEnds:p,routeLen:m,walkField:g,rebuild:E,setBlock(w){h=w,E()},maxDist:T(),N:n,cell:t}}function Df(i,t=700,{blending:e=ni,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const a=new Ct(r||"#000000"),o=new Float32Array(t*3),l=new Float32Array(t*3),c=new Float32Array(t*3),h=new Float32Array(t*3),u=new Float32Array(t),f=new Float32Array(t),d=new Float32Array(t);let v=0;const x=new Ce;x.setAttribute("position",new Ue(o,3)),x.setAttribute("color",new Ue(l,3));const m=document.createElement("canvas");m.width=m.height=64;const p=m.getContext("2d"),y=p.createRadialGradient(32,32,0,32,32,32);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.4,"rgba(255,255,255,0.6)"),y.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=y,p.fillRect(0,0,64,64);const S=new no({size:n,map:new ui(m),vertexColors:!0,transparent:!0,opacity:s,blending:e,depthWrite:!1}),g=new Tc(x,S);g.frustumCulled=!1,i.add(g);for(let C=0;C<t;C++)o[C*3+1]=-999;const T=new Ct;function E(C,M,_,{n:A=10,color:D="#ffb347",speed:G=4,up:L=3,life:k=.7,gravity:V=9,spread:X=1}={}){T.set(D);for(let B=0;B<A;B++){const j=v;v=(v+1)%t,o[j*3]=C,o[j*3+1]=M,o[j*3+2]=_;const at=Math.random()*Math.PI*2,lt=G*(.4+Math.random()*.6)*X;c[j*3]=Math.cos(at)*lt,c[j*3+1]=L*(.5+Math.random()),c[j*3+2]=Math.sin(at)*lt,h[j*3]=T.r,h[j*3+1]=T.g,h[j*3+2]=T.b,f[j]=u[j]=k*(.6+Math.random()*.6),d[j]=V}}function w(C){for(let M=0;M<t;M++){if(u[M]<=0)continue;if(u[M]-=C,u[M]<=0){o[M*3+1]=-999,l[M*3]=l[M*3+1]=l[M*3+2]=0;continue}c[M*3+1]-=d[M]*C,o[M*3]+=c[M*3]*C,o[M*3+1]+=c[M*3+1]*C,o[M*3+2]+=c[M*3+2]*C;const _=u[M]/f[M];l[M*3]=h[M*3]*_+a.r*(1-_),l[M*3+1]=h[M*3+1]*_+a.g*(1-_),l[M*3+2]=h[M*3+2]*_+a.b*(1-_)}x.attributes.position.needsUpdate=!0,x.attributes.color.needsUpdate=!0}return{emit:E,update:w}}const W_={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},X_={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},q_={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function pu(i=""){const t=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(t)?"switch":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(t)?"ps":"xbox"}function Y_(i){const t=i==="switch";return{build:t?1:0,carry:t?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function $_(i){const t=new Set,e={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=g=>e.pressed.add(g),s=g=>{e.device=g};addEventListener("keydown",g=>{if(s("kb"),(g.code==="Space"||g.code.startsWith("Arrow")||g.code==="Tab")&&g.preventDefault(),g.repeat)return;t.add(g.code);const T={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Digit4:"b4",Digit5:"b5",Digit6:"b6",Digit7:"b7",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",Numpad4:"b4",Numpad5:"b5",Numpad6:"b6",Numpad7:"b7",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};T[g.code]&&n(T[g.code])}),addEventListener("keyup",g=>t.delete(g.code)),addEventListener("blur",()=>t.clear()),i.addEventListener("wheel",g=>{g.preventDefault(),s("kb"),e.zoom=Na(e.zoom*(g.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",g=>g.preventDefault());const r=new Map;let a=0,o=1,l=null;const c=g=>({x:g.clientX/innerWidth*2-1,y:-(g.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",g=>{if(s(g.pointerType==="touch"?"touch":"kb"),g.pointerType==="mouse"&&g.button===2){l={x:g.clientX},i.setPointerCapture(g.pointerId);return}g.pointerType==="mouse"&&g.button!==0||(r.set(g.pointerId,{e:g,t:performance.now(),x0:g.clientX,y0:g.clientY}),r.size===2&&(a=mu(r),o=e.zoom))}),i.addEventListener("pointermove",g=>{if(l){e.lookDelta+=(g.clientX-l.x)*.008,l.x=g.clientX;return}const T=r.get(g.pointerId);T&&(T.e=g,r.size===2&&a>0&&(e.zoom=Na(o*(a/mu(r)),.55,4.5)))});const h=g=>{if(l&&g.button===2){l=null;return}const T=r.get(g.pointerId);T&&r.size===1&&a===0&&Math.hypot(g.clientX-T.x0,g.clientY-T.y0)<12&&e.clicks.push(c(g)),r.delete(g.pointerId),r.size<2&&(a=0)};i.addEventListener("pointerup",h),i.addEventListener("pointercancel",g=>{r.delete(g.pointerId),l=null,a=0});const u=document.getElementById("stick"),f=document.getElementById("knob"),d={x:0,z:0};let v=null;const x=g=>{const T=u.getBoundingClientRect();let E=g.clientX-(T.left+T.width/2),w=g.clientY-(T.top+T.height/2);const C=T.width/2,M=Math.hypot(E,w);M>C&&(E*=C/M,w*=C/M),f.style.transform=`translate(${E}px, ${w}px)`;const _=M/C<.15?0:1;d.x=E/C*_,d.z=w/C*_};u.addEventListener("pointerdown",g=>{s("touch"),v=g.pointerId,u.setPointerCapture(g.pointerId),x(g)}),u.addEventListener("pointermove",g=>{g.pointerId===v&&x(g)});const m=g=>{g.pointerId===v&&(v=null,d.x=d.z=0,f.style.transform="")};u.addEventListener("pointerup",m),u.addEventListener("pointercancel",m);const p=(g,T)=>g.addEventListener("pointerdown",E=>{E.preventDefault(),E.stopPropagation(),E.pointerType==="touch"&&s("touch"),n(T)});p(document.getElementById("btn-build"),"build"),p(document.getElementById("btn-carry"),"carry"),p(document.getElementById("btn-next"),"next"),p(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((g,T)=>p(g,"b"+(T+1)));let y=[];addEventListener("gamepadconnected",g=>{e.padId=g.gamepad.id,e.padKind=pu(g.gamepad.id)});function S(){const T=[...navigator.getGamepads?navigator.getGamepads():[]].find(L=>L&&L.connected);if(!T)return null;T.id!==e.padId&&(e.padId=T.id,e.padKind=pu(T.id));const E=Y_(e.padKind),w=T.buttons.map(L=>L.pressed||L.value>.5),C=L=>w[L]&&!y[L],M=L=>Math.abs(L)<.2?0:(L-Math.sign(L)*.2)/.8;let _=M(T.axes[0]||0),A=M(T.axes[1]||0);w[14]&&(_=-1),w[15]&&(_=1),w[12]&&(A=-1),w[13]&&(A=1);const D=M(T.axes[2]||0);return(_||A||D||w.some(Boolean))&&s("pad"),C(E.build)&&n("build"),C(E.carry)&&n("carry"),C(E.next)&&n("next"),C(E.prev)&&n("selPrev"),C(E.nextSel)&&n("selNext"),C(E.pause)&&n("pause"),C(E.back)&&n("restart"),C(2)&&e.padKind!=="switch"&&n("next"),y=w,{x:_,z:A,look:D,zoomIn:w[E.zoomIn],zoomOut:w[E.zoomOut]}}return e.update=g=>{let T=0,E=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(T-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(T+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(E-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(E+=1);const w=S();w&&(w.x||w.z)&&(T=w.x,E=w.z),(d.x||d.z)&&(T=d.x,E=d.z);const C=Math.hypot(T,E);C>1&&(T/=C,E/=C),e.move.x=T,e.move.z=E,e.look=e.lookDelta+(w?w.look*2.2*g:0),e.lookDelta=0,w!=null&&w.zoomIn&&(e.zoom=Na(e.zoom/(1+g*1.2),.55,4.5)),w!=null&&w.zoomOut&&(e.zoom=Na(e.zoom*(1+g*1.2),.55,4.5))},e.labels=()=>e.device==="pad"?W_[e.padKind]:e.device==="touch"?q_:X_,e.consume=g=>e.pressed.delete(g),e.clear=()=>{e.pressed.clear(),e.clicks.length=0},e}const Na=(i,t,e)=>Math.max(t,Math.min(e,i));function mu(i){const[t,e]=[...i.values()].map(n=>n.e);return Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY)||1}let Oe=null,Js=null,$r=null;function j_(){if(Oe){Oe.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;Oe=new i,Js=Oe.createGain(),Js.gain.value=.5,Js.connect(Oe.destination),$r=Oe.createBuffer(1,Oe.sampleRate*2,Oe.sampleRate);const t=$r.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;Z_()}const Lf=()=>Oe?{ctx:Oe,noiseBuf:$r}:null;function We(i,t,{type:e="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!Oe)return;const a=Oe.currentTime+r,o=Oe.createOscillator(),l=Oe.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(Js),o.start(a),o.stop(a+t+.02)}function ss(i,{vol:t=.3,freq:e=800,q:n=.7,delay:s=0}={}){if(!Oe)return;const r=Oe.currentTime+s,a=Oe.createBufferSource();a.buffer=$r;const o=Oe.createBiquadFilter();o.type="lowpass",o.frequency.value=e,o.Q.value=n;const l=Oe.createGain();l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),a.connect(o).connect(l).connect(Js),a.start(r,Math.random()),a.stop(r+i+.02)}function Z_(){const i=Oe.createBufferSource();i.buffer=$r,i.loop=!0;const t=Oe.createBiquadFilter();t.type="lowpass",t.frequency.value=420;const e=Oe.createGain();e.gain.value=.035;const n=Oe.createOscillator(),s=Oe.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(e.gain),i.connect(t).connect(e).connect(Js),i.start(),n.start()}let gu=0;const Be={pickup(){if(!Oe)return;const i=Oe.currentTime,t=i-gu<.4?1.12:1;gu=i,We(880*t+Math.random()*60,.12,{type:"triangle",vol:.12}),We(1320*t,.1,{type:"sine",vol:.06,delay:.04})},puff(){ss(.18,{vol:.07,freq:600,q:.3}),We(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)ss(.05,{vol:.1,freq:3500,delay:i*.03});We(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>We(i,.11,{type:"square",vol:.025})),We(98,.3,{vol:.08})},chill(){We(330,.5,{type:"sine",vol:.07,slide:160}),We(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){We(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){ss(.12,{vol:.12,freq:500}),We(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){ss(.45,{vol:.28,freq:380}),We(90,.35,{vol:.18,slide:-50})},horn(){We(196,.5,{type:"sawtooth",vol:.035}),We(147,.55,{type:"sine",vol:.06})},hit(){ss(.05,{vol:.08,freq:2500})},die(){We(420,.18,{type:"triangle",vol:.09,slide:-280}),ss(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,t)=>We(i,.25,{type:"triangle",vol:.1,delay:t*.06}))},upgrade(){[523,659,784,1047].forEach((i,t)=>We(i,.22,{type:"triangle",vol:.1,delay:t*.07}))},stone(){We(660,.2,{type:"sine",vol:.1,slide:200})},lose(){We(220,.6,{type:"sawtooth",vol:.06,slide:-120}),ss(.3,{vol:.08,freq:300})},stun(){We(700,.4,{type:"square",vol:.05,slide:-500})},deny(){We(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,t)=>We(i,.3,{type:"sawtooth",vol:.04,delay:t*.18}))},win(){[523,659,784,1047,1319].forEach((i,t)=>We(i,.4,{type:"triangle",vol:.12,delay:t*.12}))}},ic=172,wi=60/ic/4,rs=i=>440*Math.pow(2,(i-69)/12),vu={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},Zo={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},xu=[["build",8],["drop",16],["break",8],["drop",16]];function K_(i,t,e){const n=vu[e]||vu.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const a=i.createGain();a.gain.value=0,s.connect(r).connect(a).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,a.connect(o);const l={};for(const q of["drums","bass","pad","arp","lead"]){const R=i.createGain();R.gain.value=0,R.connect(s),l[q]=R}const c={};for(const q of["pad","bass"]){const R=i.createGain();R.gain.value=1,R.connect(l[q]),c[q]=R}const h=(q,R)=>{const b=i.createBuffer(2,Math.floor(i.sampleRate*q),i.sampleRate);for(let H=0;H<2;H++){const K=b.getChannelData(H);for(let Q=0;Q<K.length;Q++)K[Q]=(Math.random()*2-1)*Math.pow(1-Q/K.length,R)}return b},u=i.createConvolver();u.buffer=h(2.4,2.5);const f=i.createGain();f.gain.value=n.space,u.connect(f).connect(s);const d=i.createConvolver();d.buffer=h(.5,.4);const v=i.createGain();v.gain.value=0,d.connect(v).connect(l.drums);const x=i.createDelay(1);x.delayTime.value=wi*3;const m=i.createGain();m.gain.value=.38;const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=2400;const y=i.createStereoPanner(),S=i.createOscillator(),g=i.createGain();S.frequency.value=ic/60/3,g.gain.value=.8,S.connect(g).connect(y.pan),S.start(),x.connect(p).connect(m).connect(x),p.connect(y).connect(l.arp);const T=i.createBiquadFilter();T.type="highpass",T.frequency.value=180;const E=i.createBiquadFilter();E.type="lowpass",E.frequency.value=n.padCut,E.Q.value=2;const w=i.createOscillator(),C=i.createGain();w.frequency.value=.07,C.gain.value=n.padCut*.45,w.connect(C).connect(E.frequency),w.start();const M=i.createDelay(.05);M.delayTime.value=.014;const _=i.createOscillator(),A=i.createGain();_.frequency.value=.5,A.gain.value=.004,_.connect(A).connect(M.delayTime),_.start();const D=i.createStereoPanner();D.pan.value=.6,T.connect(E),E.connect(c.pad),E.connect(M).connect(D).connect(c.pad),E.connect(u);const G=i.createBiquadFilter();G.type="lowpass",G.frequency.value=420,G.Q.value=6;const L=i.createOscillator(),k=i.createGain();if(L.frequency.value=ic/60/4,k.gain.value=260,L.connect(k).connect(G.frequency),L.start(),n.drive>0){const q=i.createWaveShaper(),R=new Float32Array(1024);for(let b=0;b<1024;b++){const H=b/512-1;R[b]=Math.tanh(H*(1+n.drive*6))}q.curve=R,G.connect(q).connect(c.bass)}else G.connect(c.bass);const V=i.createBiquadFilter();V.type="lowpass",V.frequency.value=3600,V.Q.value=3,V.connect(l.lead),V.connect(x),V.connect(u);const X=(q,R,b,H,K,Q)=>{q.gain.setValueAtTime(1e-4,R),q.gain.exponentialRampToValueAtTime(H,R+b),q.gain.setValueAtTime(H,R+Math.max(b,Q-K)),q.gain.exponentialRampToValueAtTime(1e-4,R+Q)},B=(q,R)=>{const b=i.createStereoPanner();return b.pan.value=R,q.connect(b),b},j=(q,R,b,H,K,Q,tt="bandpass",Ut=0)=>{const Mt=i.createBufferSource();Mt.buffer=t;const At=i.createBiquadFilter();At.type=tt,At.frequency.value=b,At.Q.value=H;const ne=i.createGain();X(ne,q,.001,K,R*.8,R),Mt.connect(At).connect(ne);const yt=Ut?B(ne,Ut):ne;for(const Wt of Q)yt.connect(Wt);Mt.start(q,Math.random()*1.5),Mt.stop(q+R+.02)},at=(q,R=1)=>{const b=i.createOscillator(),H=i.createGain();b.frequency.setValueAtTime(160,q),b.frequency.exponentialRampToValueAtTime(44,q+.11),X(H,q,.002,1*R,.2,.3),b.connect(H).connect(l.drums),b.start(q),b.stop(q+.32),j(q,.012,3500,.7,.35*R,[l.drums],"highpass");for(const K of Object.values(c))K.gain.cancelScheduledValues(q),K.gain.setValueAtTime(.35,q),K.gain.linearRampToValueAtTime(1,q+.2)},lt=(q,R=1)=>{j(q,.17,1900,.8,.5*R,[l.drums,d]);for(const[b,H,K]of[[200,160,.3],[340,260,.14]]){const Q=i.createOscillator(),tt=i.createGain();Q.type="triangle",Q.frequency.setValueAtTime(b,q),Q.frequency.exponentialRampToValueAtTime(H,q+.08),X(tt,q,.001,K*R,.06,.11),Q.connect(tt).connect(l.drums),Q.start(q),Q.stop(q+.13)}v.gain.setValueAtTime(.9*R,q),v.gain.setValueAtTime(1e-4,q+.21)};let wt=1;const Qt=(q,R,b)=>{wt=-wt,j(q,b?.14:.035,9e3,.6,(b?.12:.08)*R,[l.drums],"highpass",wt*.35)},et=(q,R,b)=>{for(const Q of[-n.reeseDetune,n.reeseDetune]){const tt=i.createOscillator(),Ut=i.createGain();tt.type="sawtooth",tt.frequency.value=rs(R),tt.detune.value=Q,X(Ut,q,.02,.2,.1,b),B(tt.connect(Ut),Q>0?.25:-.25).connect(G),tt.start(q),tt.stop(q+b+.05)}const H=i.createOscillator(),K=i.createGain();H.frequency.value=rs(R-12),X(K,q,.02,.42,.1,b),H.connect(K).connect(c.bass),H.start(q),H.stop(q+b+.05)},pt=(q,R,b,H=1)=>{for(const K of R.slice(1))for(const[Q,tt]of[[-9,-.6],[0,0],[8,.6]]){const Ut=i.createOscillator(),Mt=i.createGain();Ut.type=n.pad,Ut.frequency.value=rs(K),Ut.detune.value=Q,X(Mt,q,.8,.026*H,1.4,b),B(Ut.connect(Mt),tt).connect(T),Ut.start(q),Ut.stop(q+b+.1)}},Tt=(q,R,b=1)=>{const H=i.createOscillator(),K=i.createGain();H.type="square",H.frequency.value=rs(R+n.arpOct);const Q=i.createBiquadFilter();Q.type="lowpass",Q.frequency.value=3200,X(K,q,.003,.05*b,.08,wi*1.6),H.connect(Q).connect(K),K.connect(l.arp),K.connect(x),H.start(q),H.stop(q+wi*2)},ft=(q,R,b,H)=>{const K=b*wi;for(const Q of[-6,6]){const tt=i.createOscillator(),Ut=i.createGain();tt.type=n.lead,H?(tt.frequency.setValueAtTime(rs(H),q),tt.frequency.exponentialRampToValueAtTime(rs(R),q+.05)):tt.frequency.value=rs(R),tt.detune.value=Q;const Mt=i.createOscillator(),At=i.createGain();Mt.frequency.value=5.5,At.gain.value=9,Mt.connect(At).connect(tt.detune),Mt.start(q+.12),Mt.stop(q+K+.05),X(Ut,q,.01,.07,Math.min(.12,K*.4),K),B(tt.connect(Ut),Q>0?.2:-.2).connect(V),tt.start(q),tt.stop(q+K+.05)}};let Bt=0,Xt=0,$t=null,ee=0,dt=.7,bt=!1,N=0;const Ht=xu.reduce((q,[,R])=>q+R,0),_t=()=>{if(ee<.5)return"ambient";let q=N%Ht;for(const[R,b]of xu){if(q<b)return R;q-=b}return"drop"},zt=()=>{const q=i.currentTime,R=(H,K)=>{H.gain.cancelScheduledValues(q),H.gain.setTargetAtTime(K,q,.8)},b=ee;R(l.drums,.1+.85*b),R(l.bass,.3+.6*b),R(l.pad,.75-.2*b),R(l.arp,.35+.3*b),R(l.lead,.55+.35*b),a.gain.cancelScheduledValues(q),a.gain.setTargetAtTime(bt?0:dt*.8,q,.3)},Rt=q=>q%2?wi*.12:0,Kt=()=>{for(;Xt<i.currentTime+.15;){const q=Bt%32,R=Math.floor(Bt/16),b=Math.floor(Bt/32)%n.chords.length,H=n.chords[b];q%16===0&&Bt>0&&ee>.5&&N++;const K=_t(),Q=Xt+Rt(q),tt=N%8;if(K==="drop"||K==="build"){const Mt=tt%4===3&&q>=16?Zo.FILL:tt>=6?Zo.B:Zo.A,At=K==="build"&&tt<4;Mt.k[q]==="x"&&!(At&&q%8)&&at(Q),Mt.s[q]==="x"&&!At&&lt(Q,K==="build"?.7:1),Mt.g[q]==="x"&&lt(Q,.3),(!At||q%2===0)&&Qt(Q,q%2?.6:1,q%8===6)}else K==="break"?(q%4===2&&Qt(Q,.6,!1),(q===0||q===16)&&at(Q,.4)):q%4===2&&Qt(Q,.45,!1);if(q===0&&(pt(Q,H,wi*32,K==="break"?1.3:1),et(Q,H[0],wi*(K==="drop"?14:30))),K==="drop"&&q===16&&et(Q,H[0]+(b%2?3:7),wi*14),q%n.arpRate===0&&K!=="break"&&Tt(Q,H[1+q/n.arpRate%4]+(q>=16?12:0),K==="ambient"?.7:1),K==="drop"||(K==="break"||K==="ambient")&&Math.floor(R/4)%2===1){const Mt=n.hook.findIndex(([At])=>At===q);if(Mt>=0){const[,At,ne]=n.hook[Mt];ft(Q,At+(K==="ambient"?-12:0),ne,Mt>0?n.hook[Mt-1][1]:0)}}Xt+=wi,Bt++}};return{start(){$t||(Xt=i.currentTime+.1,$t=setInterval(Kt,25),zt())},stop(){clearInterval($t),$t=null,a.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity(q){q>.5&&ee<=.5&&(N=0),ee=q,zt()},setVolume(q){dt=q,zt()},setMuted(q){bt=q,zt()},get muted(){return bt},get volume(){return dt},rms(){const q=new Float32Array(o.fftSize);return o.getFloatTimeDomainData(q),Math.sqrt(q.reduce((R,b)=>R+b*b,0)/q.length)},get intensity(){return ee},get section(){return _t()},tap(q){a.connect(q)}}}const Zt={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:.4,upgradeTime:[15,20,25,30],keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,chillMax:100,stressInvuln:1,stressPush:7,airStress:10,faintTime:6,faintLoss:.25,wakeChill:.6,regen:3,regenReach:9,bagChance:.05,bagHeal:25,bagLife:20,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8]},Qs={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!0,tip:"rask · bakke + luft"},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5,tip:"splash · kun bakke"},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2,tip:"bremser i ring"},bubble:{name:"Bobleblåser",cost:20,range:7,dmg:2.5,cooldown:.38,air:!0,ground:!1,trap:1.4,tip:"fanger flyvere · kun luft"},kite:{name:"Papirdrage",cost:40,range:13,dmg:5,cooldown:2.8,air:!0,ground:!1,zone:3.4,hover:2.4,tip:"sone, lang · kun luft"},pizza:{name:"Pizza-katapult",cost:55,range:14,dmg:24,cooldown:3,air:!1,splash:2.9,tip:"lang splash · kun bakke"},lamp:{name:"Lavalampe",cost:50,range:4.6,dmg:1.1,cooldown:.3,air:!0,slowTime:.5,tip:"aura, bremser alt"}},oo={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0",stress:10},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0",resist:{ring:.5,chips:1.5},stress:15},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0,swoop:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a",stress:8},auditor:{name:"Revisoren",hp:70,speed:1.6,embers:8,anim:7,puff:"#9fffb0",shield:.25,resist:{lamp:1.5},info:"skjold forfra (×0,25), ikke mot aura",stress:14},complainer:{name:"Naboklageren",hp:12,speed:4.3,embers:3,anim:18,puff:"#ffb0f0",resist:{chips:.5,ring:1.5},info:"rask, mørtel bommer",stress:10},lobbyist:{name:"Lobbyisten",hp:55,speed:1.9,embers:6,anim:9,puff:"#ffe08a",splits:3,resist:{speaker:.5,pizza:1.5},noMood:!0,info:"deler seg i tre, immun mot stemning",stress:12},lobbyMini:{name:"Mini-lobbyist",hp:14,speed:2.7,embers:1,anim:14,puff:"#ffe08a",resist:{speaker:.5,pizza:1.5},noMood:!0,stress:8},drone:{name:"Overvåkings-drone",hp:9,speed:4.6,embers:1,anim:30,puff:"#c8d8ff",flying:!0,alt:3.6,resist:{bubble:1.5,lamp:1.5,kite:.5},info:"rask sverm i lufta"},balloon:{name:"Ballong-byråkraten",hp:150,speed:1.05,embers:14,anim:2,puff:"#ffffff",flying:!0,alt:5.6,resist:{bubble:.5,kite:1.5},info:"seig, høyt oppe"},heli:{name:"Mini-helikopteret",hp:48,speed:2.5,embers:7,anim:40,puff:"#ffffff",flying:!0,alt:4.6,blind:{every:6,dur:3,range:9},resist:{ring:.5,kite:1.5},info:"søkelys blender et tårn i 3 s"}},J_=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],on=new URLSearchParams(location.search),If=on.has("demo");if(on.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(gr.length))}catch{}let wn=Number(on.get("world"));if(!Number.isInteger(wn))try{wn=Number(localStorage.getItem("glod-world"))||0}catch{wn=0}wn=Math.max(0,Math.min(qr()-1,wn));try{localStorage.setItem("glod-world",String(wn))}catch{}const Ke=gr[wn],Uc=o_(Ke,J_);function Q_(){return 1}const tM=Math.max(1,Math.min(20,Number(on.get("speed"))||1)),Ii=matchMedia("(pointer: coarse)").matches||on.has("mobile"),sc={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:2}};let ii=Ii?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(ii=i)}catch{}(on.get("q")==="high"||on.get("q")==="low")&&(ii=on.get("q"));const jr={mobile:Ii,shadow:sc[ii].shadow,dprCap:sc[ii].dprCap},eM={high:["rock","tree","tower","figure"],low:["rock","tree","tower","figure"]};function Uf(i){const t=on.has("ol")?on.get("ol").split(","):eM[i];mf(Object.fromEntries(["rock","tree","tower","figure"].map(e=>[e,t.includes(e)])))}Uf(ii);const Nf=document.getElementById("game"),xn=new ex({canvas:Nf,antialias:!Ii,powerPreference:"high-performance",preserveDrawingBuffer:on.has("shot")});let Hi=Math.min(devicePixelRatio||1,jr.dprCap);xn.setPixelRatio(Hi);xn.shadowMap.enabled=!0;xn.shadowMap.type=Tu;xn.toneMapping=hc;let ms="dag";try{ms=localStorage.getItem("glod-tid")||"dag"}catch{}on.get("tid")&&(ms=on.get("tid"));const Vn=ms==="skumring"&&Ke.skyDusk?Ke.skyDusk:Ke.sky;xn.toneMappingExposure=Vn.exposure;xn.info.autoReset=!1;const ye=new nx,zf=new Ct(Vn.fog);ye.background=zf;ye.fog=new Ec(zf,...Ke.fog??[55,115]);const Ge=new Ln(38,1,.5,200),nM=new Fx(Vn.hemiSky,Vn.hemiGround,Vn.hemi);ye.add(nM);const rn=new Bx(Vn.sun,Vn.sunI);rn.castShadow=!0;rn.shadow.mapSize.set(jr.shadow,jr.shadow);Object.assign(rn.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});rn.shadow.bias=-8e-4;rn.shadow.normalBias=.03;ye.add(rn,rn.target);qx(ye);const Yt=p_(ye,jr,Ke);Yt.grass.setLevel(ii);const iM=V_(ye,Yt,jr,Ke,ms,Ge),Tn=H_(Yt);window.__nav=Tn;const Ie=Df(ye,Ii?450:800),ur=Df(ye,Ii?120:220,{blending:Xi,size:1.6,opacity:.45,fadeTo:Vn.fog}),ta=G_(xn,ye,Ge,Vn.grade);ta.setLevel(ii);const de=$_(Nf);function ea(){const i=innerWidth,t=innerHeight;xn.setSize(i,t,!1),Ge.aspect=i/t,Ge.updateProjectionMatrix(),ta.setSize(i,t),Xx(Ii?2:2.2,xn.getPixelRatio(),i,t)}function Ff(i){ii=i;try{localStorage.setItem("glod-quality",i)}catch{}const t=sc[i];rn.shadow.mapSize.set(t.shadow,t.shadow),rn.shadow.map&&(rn.shadow.map.dispose(),rn.shadow.map=null),Hi=Math.min(devicePixelRatio||1,t.dprCap),xn.setPixelRatio(Hi),ta.setLevel(i),Yt.grass.setLevel(i),Uf(i),ea(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",ea);ea();const J={phase:"title",wave:0,timer:0,embers:Zt.startEmbers,lights:cr,spawnQueue:[],leaks:{},seen:{},time:0,sel:0,paused:!1},Ko=Zt.upgradeTime.length+1,Gi=["ring","chips","speaker","bubble","kite","pizza","lamp"];let Ai=Ke.camYaw??0;const _u=new Gx,Cn=[],In=[],Zn=[],us=[],tr=[],Fr=[],Je=Qr(x_(),"figure"),U={x:Yt.lighthouse.pos.x+1,z:Yt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:Zt.chillMax,inv:0,faint:0,faints:0};Je.position.set(U.x,Yt.heightAt(U.x,U.z),U.z);ye.add(Je);const Nc=new Xr("#ffcf70",2.6,6,1.8);Nc.position.set(.8,.45,-.3);Je.add(Nc);const he=i=>document.getElementById(i),je={chill:he("hud-chill"),lights:he("hud-lights"),embers:he("hud-embers"),wave:he("hud-wave"),timer:he("hud-timer")},Pi=he("hint"),hi=he("build-panel"),zc=he("btn-next"),Fc=he("fps");on.has("debug")||Fc.classList.add("hidden");let Li={};function Un(i,t,e,n){Li[t]!==e&&(Li[t]=e,i.querySelector("b").textContent=e,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const sM=4;let Of=0;function Mu(i){if(Pi.textContent===i)return;Pi.textContent=i,Of=0,Pi.classList.remove("faded");const t=hi.classList.contains("hidden")?null:hi.getBoundingClientRect();Pi.style.bottom=t&&t.height?`${Math.round(innerHeight-t.top+6)}px`:""}function rM(i){(Of+=i)>sM&&Pi.classList.add("faded")}function kf(i){J.phase="prep",J.timer=i,zc.classList.remove("hidden"),aM()}function aM(){const i=J.wave+1,t=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);J.spawnPoints=Tn.coastPoints(t,24),J.spawnPoints.length||(J.spawnPoints=Tn.coastPoints(t,8,{near:12,minFrac:.5})),J.spawnPoints.length||(J.spawnPoints=Tn.roadEnds().slice(0,t)),hM()}function Bf(){J.wave+=1,J.phase="wave",zc.classList.add("hidden"),J.spawnQueue=[];for(const i of Uc[J.wave-1]){const t=J.wave<=Zt.earlyScale.length?J.wave-1:-1,e=J.spawnPoints.length,n=oo[i.type].flying?Ke.balance.air??1:1,s=Math.max(1,Math.round(i.n*(Ke.balance.count||1)*n*(t>=0?Zt.earlyScale[t]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,e));for(let a=0;a<e;a++)for(let o=0;o<r;o++)J.spawnQueue.push({t:(i.at??0)+o*i.gap+a*.3,type:i.type,path:a})}else{const r=i.path??0;for(let a=0;a<s;a++)J.spawnQueue.push({t:(i.at??0)+a*i.gap,type:i.type,path:(r+a%2)%e})}}J.spawnQueue.sort((i,t)=>i.t-t.t),J.waveClock=0,Be.wave(),De==null||De.setIntensity(1),Un(je.wave,"wave",J.wave,"bump")}function Oc(i,t){var l,c;const e=oo[i],n=Qr(__(i),"figure"),s=e.hp*(1+Zt.hpGrowth*(J.wave-1))*Ke.balance.hp*(((c=(l=Ke.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*Q_(),r={type:i,def:e,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:Ke.balance.speed*(e.flying?Ke.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4};r.var=.95+Math.random()*.1,r.speedMul*=.95+Math.random()*.1,n.scale.setScalar(r.var),r.blinkT=Math.random()*4;const a=J.spawnPoints[t%J.spawnPoints.length]||[0,50],o=Yt.lighthouse.pos;if(e.flying){const h=Math.atan2(a[1]-o.z,a[0]-o.x)+(Math.random()-.5)*.5,u=o.x+Math.cos(h)*66,f=o.z+Math.sin(h)*66;r.x=u,r.z=f,r.y=e.alt||4,r.dist0=Math.hypot(o.x-u,o.z-f),r.hitCd=0}else r.x=a[0]+(Math.random()-.5)*1.5,r.z=a[1]+(Math.random()-.5)*1.5,r.y=Yt.heightAt(r.x,r.z),r.remain=Tn.at(r.x,r.z);return n.position.set(r.x,r.y,r.z),ye.add(n),Cn.push(r),!J.seen[i]&&i!=="lobbyMini"&&(J.seen[i]=!0,oM(r)),r}const rc={ring:"💨",chips:"🥔",speaker:"🔊",bubble:"🫧",kite:"🪁",pizza:"🍕",lamp:"🌋"};function Gf(i){const t=Object.entries(i.resist||{}),e=t.filter(([,s])=>s<1).map(([s])=>rc[s]).join(""),n=t.filter(([,s])=>s>1).map(([s])=>rc[s]).join("");return{tough:e+(i.shield?"📒":""),weak:n}}const fs=[],lo=document.createElement("div");lo.id="tags";document.body.appendChild(lo);function oM(i){const{tough:t,weak:e}=Gf(i.def),n=document.createElement("div");n.className="enemy-tag",n.innerHTML=`<b>${i.def.flying?"🪶":"🐾"} ${i.def.name}</b>${t?`<span>🛡️${t}</span>`:""}${e?`<span>💥${e}</span>`:""}`,lo.appendChild(n),fs.push({m:i,el:n,t:0}),(J.wave>1||i.def.flying)&&Ze(`Ny fiende: ${i.def.name}${t?` · tåler ${t}`:""}${e?` · svak mot ${e}`:""}`)}function lM(i){var e;const t=fs.length?he("hud").getBoundingClientRect().bottom:0;for(let n=fs.length-1;n>=0;n--){const s=fs[n];s.age=(s.age||0)+i,Ae.set(s.m.x,s.m.y+(((e=s.m.mesh.userData.hpBar)==null?void 0:e.position.y)??2.2)+.5,s.m.z).project(Ge);const r=Ae.z<1&&Math.abs(Ae.x)<1&&Math.abs(Ae.y)<1;s.el.style.display=r?"flex":"none",r&&(s.t+=i);const a=s.el.offsetWidth,o=s.el.offsetHeight;s.el.style.left=`${Math.min(Math.max((Ae.x*.5+.5)*innerWidth,a/2+6),innerWidth-a/2-6)}px`,s.el.style.top=`${Math.max((-Ae.y*.5+.5)*innerHeight,t+o+6)}px`,s.el.style.opacity=String(Math.min(1,(6-s.t)/.6)),(s.t>6||s.age>90||!s.m.alive)&&(s.el.remove(),fs.splice(n,1))}}function cM(i){return i.def.flying?1-Math.hypot(Yt.lighthouse.pos.x-i.x,Yt.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??Tn.maxDist)/Tn.maxDist)}const qa=[],gs=document.createElement("div");gs.id="warn";document.body.appendChild(gs);function hM(){for(const e of qa)ye.remove(e);qa.length=0,gs.innerHTML="";for(const[e,n]of J.spawnPoints){const s=new se(Vf,new Te({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));s.position.set(e,Math.max(Yt.heightAt(e,n),.08)+.1,n);const r=new se(uM,new Te({color:"#ff8a3a",transparent:!0,opacity:.35,blending:ni,depthWrite:!1,fog:!1}));r.position.y=4,s.add(r),ye.add(s),qa.push(s);const a=document.createElement("div");a.className="warn-arrow",a.innerHTML='<span class="arr">➤</span><span class="kind"></span>',gs.appendChild(a)}const i=J.spawnPoints.length,t=J.spawnPoints.map(()=>({air:!1,ground:!1}));for(const e of Uc[J.wave]||[]){const n=e.path==="both"?t.map((s,r)=>r):[(e.path??0)%i,((e.path??0)+1)%i];for(const s of n)t[s][oo[e.type].flying?"air":"ground"]=!0}t.forEach((e,n)=>{var r;const s=(r=gs.children[n])==null?void 0:r.querySelector(".kind");s&&(s.textContent=(e.air?"🪶":"")+(e.ground?"🐾":""))})}const Vf=new $i(1.6,2.2,32);Vf.rotateX(-Math.PI/2);const uM=new ke(.5,1.4,8,12,1,!0);function fM(){var a;const i=J.phase==="prep"||J.phase==="wave"&&J.waveClock<8,t=gs.children,e=i&&!hi.classList.contains("hidden")?hi.getBoundingClientRect():null,n=e&&Pi.textContent&&!Pi.classList.contains("faded"),s=i?he("hud").getBoundingClientRect().bottom:0;gs.style.visibility=lo.style.visibility=J.paused?"hidden":"";const r=e?n?Math.min(e.top,Pi.getBoundingClientRect().top):e.top:0;(a=J.spawnPoints)==null||a.forEach(([o,l],c)=>{const h=qa[c],u=t[c];if(!h||!u)return;h.visible=i;const f=.5+.5*Math.sin(J.time*6);h.scale.setScalar(1+f*.35),h.material.opacity=.35+.5*f,Ae.set(o,h.position.y,l).project(Ge);const d=Math.abs(Ae.x)>.92||Math.abs(Ae.y)>.88||Ae.z>1;if(u.style.display=i?"block":"none",u.classList.toggle("onscreen",!d),i&&!d&&(u.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,u.style.top=`${Math.max((-Ae.y*.5+.5)*innerHeight-30,s+30)}px`,u.style.transform="translate(-50%, -50%)",u.firstChild.style.transform=""),i&&d){let v=Ae.x,x=Ae.y;Ae.z>1&&(v=-v,x=-x);const m=Math.atan2(-x,v),p=Math.max(Math.abs(v),Math.abs(x))||1,y=be.clamp(v/p,-1,1),S=be.clamp(x/p,-1,1),g=(y*.46+.5)*innerWidth;let T=(-S*.44+.5)*innerHeight;e&&g>e.left-24&&g<e.right+24&&T>r-24&&(T=r-24),T=Math.max(T,s+30),u.style.left=`${g}px`,u.style.top=`${T}px`,u.style.transform=`translate(-50%, -50%) scale(${1+f*.25})`,u.firstChild.style.transform=`rotate(${m}rad)`}})}function ds(i,t,e){var n;if(i.alive){if(e&&(t*=((n=i.def.resist)==null?void 0:n[e.type])??1,i.def.shield&&e.type!=="lamp")){const s=e.x-i.x,r=e.z-i.z,a=Math.hypot(s,r)||1,o=Math.hypot(i.hx||0,i.hz||0)||1;(s*(i.hx||0)+r*(i.hz||0))/(a*o)>.35&&(t*=i.def.shield,Math.random()<.3&&Ie.emit(i.x,i.y+1,i.z,{n:2,color:"#d8c890",speed:1.5,up:1,life:.3}))}i.hp-=t,i.hitT=.18,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&dM(i)}}function dM(i){i.alive=!1,i.chillT=0,M_(i),Fr.push(i),Ie.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),Be.chill(),kc(i.x,i.y+.5,i.z,i.def.embers,i.def.flying),!i.def.flying&&Math.random()<Zt.bagChance&&Hf(i.x,i.z);for(let t=0;t<(i.def.splits||0);t++){const e=Oc("lobbyMini",0);e.x=i.x+(t-1)*.6,e.z=i.z+(t%2?.5:-.5),e.y=Yt.heightAt(e.x,e.z),e.mesh.position.set(e.x,e.y,e.z)}}function pM(i){var t;for(let e=Fr.length-1;e>=0;e--){const n=Fr[e];n.chillT+=i;const s=n.chillT,r=n.mesh.userData.body;if(n.def.flying)n.y+=i*2.5,n.z+=i*3,(t=n.mesh.userData.wings)==null||t.forEach((o,l)=>o.rotation.z=Math.sin(s*6)*.4*(l?-1:1));else if(s<1.4){const o=Math.min(1,s/.4);r.position.y=-.25*o*(n.type==="tank"?1.3:1),r.rotation.x=.25*o,r.rotation.z=Math.sin(s*3)*.05}else{r.rotation.x=0,r.position.y=Math.abs(Math.sin(s*7))*.06;const[o,l]=Tn.dir(n.x,n.z),c=n.x-o*n.def.speed*.45*i,h=n.z-l*n.def.speed*.45*i;Yt.isWalkable(c,h)&&(n.x=c,n.z=h),n.y=Yt.heightAt(n.x,n.z),(o||l)&&(n.mesh.rotation.y=Math.atan2(o,l))}Math.random()<i*1.5&&Ie.emit(n.x,n.y+1.8,n.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4}),s>2.6&&!n.popped&&(n.popped=!0,ur.emit(n.x,n.y+.8,n.z,{n:8,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}));const a=Math.max(0,Math.min(1,(3.2-s)/.6));n.mesh.scale.setScalar(a*(n.var||1)*(s>2.6?1+Math.sin((s-2.6)*10)*.08:1)),n.mesh.position.set(n.x,n.y,n.z),s>3.2&&(ye.remove(n.mesh),Fr.splice(e,1))}}function kc(i,t,e,n,s=!1,r=1){const a=Math.min(n,n>=6?3:n>=3?2:1);let o=n;for(let l=0;l<a;l++){const c=l===a-1?o:Math.ceil(n/a);o-=c;const h=S_(),u=Math.random()*Math.PI*2,f=(1.2+Math.random()*1.8)*r,d={mesh:h,x:i,y:t,z:e,vx:Math.cos(u)*f,vz:Math.sin(u)*f,vy:5+Math.random()*2,life:Zt.emberLife,value:c,settled:!1,phase:Math.random()*6};h.scale.setScalar(.8+Math.min(c,6)*.08),ye.add(h),us.push(d)}}function Zr(i,t,e,n,s=()=>!0){let r=null,a=n;for(const o of i){if(!s(o))continue;const l=Math.hypot(o.x-t,o.z-e);l<a&&(a=l,r=o)}return r}function Bc(){const i=Zr(Yt.plinths,U.x,U.z,Zt.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const t=-Math.sin(U.face),e=-Math.cos(U.face),n=U.x+t*Zt.placeAhead,s=U.z+e*Zt.placeAhead,r=Yt.heightAt(n,s),a=Yt.lighthouse.pos;let o="";return r<.35?o="i vannet":Yt.extras.blocks(n,s)?o="i lavaen":Yt.pathDist(n,s)<1.9?o="på stien":Yt.slopeAt(n,s)>.6?o="for bratt":Math.hypot(n-a.x,s-a.z)<5.5?o="for nær fyret":In.some(l=>Math.hypot(l.x-n,l.z-s)<Zt.minTowerGap)?o="for nær et annet tårn":Yt.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?o="oppå en sokkel (gå helt bort til den)":Yt.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(o="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!o,why:o}}function ja(i){const t=Bc();if(!t.ok){Be.deny(),Ze(`Ikke lov å bygge her: ${t.why}`);return}const e=Qs[i];if(J.embers<e.cost){Be.deny(),Ze(`Trenger ${e.cost} ✦ glør`),Un(je.embers,"embersBad",Math.random(),"bad");return}J.embers-=e.cost;const n=Qr(y_(i),"tower");if(n.position.set(t.x,t.y,t.z),!t.plinth){const r=new se(mM,gM);r.position.y=.04,r.receiveShadow=!0,n.add(r)}ye.add(n);const s={type:i,def:e,mesh:n,x:t.x,z:t.z,y:t.y,level:1,cd:.3,plinth:t.plinth,onPlinth:!!t.plinth};t.plinth&&(t.plinth.tower=s),In.push(s),Yt.colliders.push({x:t.x,z:t.z,r:1,tower:s}),Ie.emit(t.x,t.y+.3,t.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),Be.build(),J.buildMode=!1,t.plinth&&Ze(`${e.name} på gammel sokkel: +25 % rekkevidde`)}const mM=new ke(.95,1.05,.12,10),gM=new ze({color:"#8a8478"}),Ci=new xe;{const i=new se(new or(1,24),new Te({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const t=new $i(.965,1,64);t.rotateX(-Math.PI/2);const e=new se(t,new Te({transparent:!0,opacity:.6,depthWrite:!1})),n=new se(new ke(.55,.7,1.6,10),new Te({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,Ci.add(i,e,n),Ci.userData={disc:i,ring:e,pillar:n},Ci.visible=!1,Ci.renderOrder=20,ye.add(Ci)}function vM(i,t,e){if(Ci.visible=i,!i)return;const n=t.ok,s=n?t.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=Qs[e].range*(t.plinth?Zt.plinthBonus:1);Ci.position.set(t.x,t.y+.06,t.z);const a=Ci.userData;for(const o of[a.disc,a.ring,a.pillar])o.material.color.set(s);a.ring.scale.setScalar(r),a.ring.visible=n,a.pillar.visible=!t.plinth}const Ei=(i,t)=>{const e=i.level-1;return t==="range"?i.def.range*(1+.12*e)*(i.onPlinth?Zt.plinthBonus:1):t==="dmg"?i.def.dmg*[1,1.7,2.6,3.9,5.85][e]:t==="rate"?i.def.cooldown/(1+.15*e):i.def[t]};function xM(i){for(const t of In){if(t.cd-=i,t.upg){const c=U.stun<=0&&Math.hypot(U.x-t.x,U.z-t.z)<Zt.reach+.3;c?t.upg.t+=i:t.upg.t>0&&(t.upg.t=0,co("😩"),Ze(`Rullingen ble avbrutt! Start på nytt ved ${t.def.name}`)),Yr(t,Math.min(1,t.upg.t/t.upg.dur)),c&&Math.random()<i*8&&Ie.emit(U.x,Je.position.y+2.2,U.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),t.upg.t>=t.upg.dur&&(t.upg=null,t.level+=1,wf(t,t.level),Yr(t,0),Ie.emit(t.x,t.y+1.2,t.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Be.upgrade(),Ze(`${t.def.name} er nå nivå ${t.level}`))}if(t.armBack>0&&(t.armBack-=i,t.armBack<=0&&(t.mesh.userData.arm.rotation.x=-.35)),t.type==="lamp"&&t.mesh.userData.blobs.forEach((c,h)=>c.position.y=.75+Math.sin(J.time*.8+h*2.1)*.35),t.blind>0){t.blind-=i,Math.random()<i*8&&Ie.emit(t.x,t.y+2,t.z,{n:1,color:"#fff6c8",speed:.6,up:.8,life:.5,gravity:-.4});continue}const e=Ei(t,"range");let n=null,s=-1;for(const c of Cn){if(!c.alive||(c.def.flying?!t.def.air:t.def.ground===!1)||Math.hypot(c.x-t.x,c.z-t.z)>e)continue;const h=cM(c);h>s&&(s=h,n=c)}const r=t.mesh.userData.head;if(t.type==="speaker"){const c=Math.max(0,Math.sin(J.time*7.3));r.rotation.z=Math.sin(J.time*3.65)*.05,t.mesh.userData.woofers.forEach(h=>h.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=oc(Math.atan2(-(n.x-t.x),-(n.z-t.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-t.x),-(n.z-t.z));r.rotation.y+=oc(c,r.rotation.y)*Math.min(1,i*10)}if(!n||t.cd>0)continue;t.cd=Ei(t,"rate");const a=t.x,o=t.y+1.4*t.mesh.scale.y,l=t.z;if(t.type==="ring"){const c=b_();c.position.set(a,o-.3,l),ye.add(c),Zn.push({kind:"bolt",src:t,mesh:c,target:n,dmg:Ei(t,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),Be.puff()}else if(t.type==="chips"){const c=Ef();c.position.set(a,t.y+1,l),ye.add(c);const[h,u]=n.def.flying?[0,0]:Tn.dir(n.x,n.z),f=n.x+h*n.def.speed*.6,d=n.z+u*n.def.speed*.6;Zn.push({kind:"shell",src:t,mesh:c,sx:a,sy:t.y+1,sz:l,ex:f,ez:d,ey:Yt.heightAt(f,d),t:0,dur:.95,dmg:Ei(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),Ie.emit(a,t.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),Be.mortar()}else if(t.type==="speaker"){for(const h of Cn)!h.alive||Math.hypot(h.x-t.x,h.z-t.z)>e||(h.def.noMood||(h.slow=t.def.slowTime),ds(h,Ei(t,"dmg"),t));const c=Tf();c.position.set(t.x,t.y+.3,t.z),ye.add(c),tr.push({mesh:c,t:0,r:e}),Ie.emit(t.x,t.y+1.8,t.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),Be.skank()}else if(t.type==="bubble"){const c=Cf();c.position.set(a,o+.2,l),ye.add(c),Zn.push({kind:"bubble",src:t,mesh:c,target:n,dmg:Ei(t,"dmg"),trap:t.def.trap,tx:n.x,ty:n.y,tz:n.z}),Be.pickup()}else if(t.type==="kite"){if(Zn.some(h=>h.kind==="kite"&&h.tower===t)){t.cd=.2;continue}const c=Qr(Af(),"tower");c.position.set(a,o,l),ye.add(c),Zn.push({kind:"kite",mesh:c,tower:t,sx:a,sz:l,tx:n.x,tz:n.z,phase:"out",t:0,tick:0,dmg:Ei(t,"dmg"),zone:t.def.zone*(1+.1*(t.level-1)),hover:t.def.hover}),Be.puff()}else if(t.type==="pizza"){const c=E_();c.position.set(a,t.y+1.2,l),ye.add(c);const[h,u]=Tn.dir(n.x,n.z),f=n.x+h*n.def.speed*1.1,d=n.z+u*n.def.speed*1.1;Zn.push({kind:"shell",src:t,pizza:!0,mesh:c,sx:a,sy:t.y+1.2,sz:l,ex:f,ez:d,ey:Yt.heightAt(f,d),t:0,dur:1.3,arc:7,dmg:Ei(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),t.mesh.userData.arm.rotation.x=.9,t.armBack=.5,Be.mortar()}else if(t.type==="lamp"){for(const c of Cn)!c.alive||Math.hypot(c.x-t.x,c.z-t.z)>e||(c.slow=Math.max(c.slow,t.def.slowTime),ds(c,Ei(t,"dmg"),t));Math.random()<.3&&Ie.emit(t.x,t.y+1.6,t.z,{n:2,color:"#ff9a3a",speed:.8,up:1.2,life:.8,gravity:-.3})}}}function _M(i){var t;for(let e=Zn.length-1;e>=0;e--){const n=Zn[e];let s=!1;if(n.kind==="bolt"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y+(n.target.def.flying?0:.5),n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),h=18*i;n.age+=i,n.mesh.lookAt(n.tx,n.ty,n.tz),n.mesh.scale.setScalar(.7+n.age*2.2),c<=h+.3?(s=!0,n.target.alive&&(ds(n.target,n.dmg,n.src),ur.emit(n.tx,n.ty+.3,n.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),Be.hit())):r.set(r.x+a/c*h,r.y+o/c*h,r.z+l/c*h)}else if(n.kind==="shell"){n.t+=i/n.dur;const r=Math.min(1,n.t);if(n.mesh.position.set(n.sx+(n.ex-n.sx)*r,n.sy+(n.ey-n.sy)*r+Math.sin(Math.PI*r)*(n.arc||5),n.sz+(n.ez-n.sz)*r),n.mesh.rotation.set(r*9,r*5,0),n.t>=1){s=!0;for(const a of Cn){if(!a.alive||a.def.flying)continue;const o=Math.hypot(a.x-n.ex,a.z-n.ez);o<n.splash&&ds(a,n.dmg*(o<n.splash*.4?1:.6),n.src)}Ie.emit(n.ex,n.ey+.3,n.ez,{n:26,color:n.pizza?"#ff7040":"#ffd060",speed:5,up:5,life:.7,gravity:12}),ur.emit(n.ex,n.ey+.3,n.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),Be.crunch(),kn=Math.max(kn,.12)}}else if(n.kind==="bubble"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y,n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),h=13*i;n.mesh.scale.setScalar(1+Math.sin(J.time*12)*.06),c<=h+.3?(s=!0,n.target.alive&&(ds(n.target,n.dmg,n.src),n.target.trap=Math.max(n.target.trap||0,n.trap*Math.min(1,((t=n.target.def.resist)==null?void 0:t.bubble)??1))),Ie.emit(n.tx,n.ty,n.tz,{n:6,color:"#dff6ff",speed:2,up:1,life:.35})):r.set(r.x+a/c*h,r.y+o/c*h,r.z+l/c*h)}else if(n.kind==="kite"){n.t+=i;const r=n.mesh.position;if(n.mesh.userData.tailSegs.forEach((a,o)=>{a.rotation.x=Math.sin(J.time*5-o*.9)*.35,a.rotation.z=Math.sin(J.time*3.7-o*.7)*.25}),In.includes(n.tower)||(n.phase="back"),n.phase==="out"){const a=n.tx-r.x,o=n.tz-r.z,l=Math.hypot(a,o),c=9*i;r.y+=(4.2-r.y)*Math.min(1,i*2),l<c?(n.phase="hover",n.t=0):(r.x+=a/l*c,r.z+=o/l*c)}else if(n.phase==="hover"){if(r.x=n.tx+Math.sin(J.time*1.7)*.6,r.z=n.tz+Math.cos(J.time*1.3)*.4,r.y=4.2+Math.sin(J.time*2.3)*.3,n.tick-=i,n.tick<=0){n.tick=.25;for(const a of Cn)a.alive&&a.def.flying&&Math.hypot(a.x-r.x,a.z-r.z)<n.zone&&(ds(a,n.dmg*.4,n.tower),a.slow=Math.max(a.slow,.4));Ie.emit(r.x,r.y-.3,r.z,{n:2,color:"#ffd0b0",speed:1.5,up:-.5,life:.5,gravity:0})}n.t>n.hover&&(n.phase="back")}else{const a=n.sx-r.x,o=n.sz-r.z,l=Math.hypot(a,o),c=11*i;l<c?s=!0:(r.x+=a/l*c,r.z+=o/l*c)}n.mesh.rotation.set(Math.sin(J.time*3)*.2,J.time*.5,Math.cos(J.time*2.5)*.25)}s&&(ye.remove(n.mesh),Zn.splice(e,1))}for(let e=tr.length-1;e>=0;e--){const n=tr[e];n.t+=i/(n.dur||.6),n.mesh.scale.setScalar(.5+n.t*n.r),n.mesh.material.opacity=.7*(1-n.t),n.t>=1&&(ye.remove(n.mesh),n.mesh.material.dispose(),tr.splice(e,1))}}function MM(i){var t,e;for(const n of Cn){if(!n.alive)continue;n.phase+=i*n.def.anim;const s=n.slow>0?.5:1;n.slow-=i;let r=n.def.speed*s*(n.speedMul||1);n.trap>0?(n.trap-=i,r*=.15,n.bubbleFx||(n.bubbleFx=Cf(),n.bubbleFx.scale.setScalar(3.2),n.mesh.add(n.bubbleFx)),n.bubbleFx.visible=!0):n.bubbleFx&&(n.bubbleFx.visible=!1);const a=n.mesh.userData.body;if(n.def.flying){const l=Yt.lighthouse.pos;let c=l.x-n.x,h=l.z-n.z;const u=Math.hypot(U.x-n.x,U.z-n.z);let f=n.trap>0?1.1:n.def.alt||4.2;if(n.def.swoop&&u<6&&U.stun<=0&&n.hitCd<=0&&!(n.trap>0)){const y=Math.hypot(c,h);c=c/y*.5+(U.x-n.x)/u*.9,h=h/y*.5+(U.z-n.z)/u*.9,f=1.5}n.hitCd-=i;const d=Math.hypot(c,h)||1,v=Math.cos(J.time*1.3+n.lane*4)*(n.type==="balloon"?.4:1.2);n.x+=(c/d+-h/d*v*.35)*r*i,n.z+=(h/d+c/d*v*.35)*r*i,n.mesh.rotation.z=-v*(n.type==="balloon"?.05:.25);const x=Math.max(Yt.heightAt(n.x,n.z),0);n.y+=(x+f-n.y)*Math.min(1,i*2.5);const m=n.mesh.userData.blob;m&&(m.position.y=(x-n.y)/n.var+.05,m.material.opacity=1,m.scale.setScalar(1)),n.mesh.rotation.y=Math.atan2(-c,-h);const p=n.mesh.userData;if((t=p.wings)==null||t.forEach((y,S)=>y.rotation.z=Math.sin(n.phase)*.45*(S?-1:1)),(e=p.rotors)==null||e.forEach(y=>y.rotation.y+=i*40),p.rotor&&(p.rotor.rotation.y+=i*30,p.tail.rotation.x+=i*30),a.position.y=Math.sin(n.phase*.5)*(n.type==="balloon"?.3:.15),n.def.blind&&(n.blindCd=(n.blindCd??n.def.blind.every*.5)-i,p.beam&&(p.beam.visible=n.blindCd>n.def.blind.every-.8),n.blindCd<=0)){n.blindCd=n.def.blind.every;const y=Zr(In,n.x,n.z,n.def.blind.range);y&&(y.blind=n.def.blind.dur,Ze(`${n.def.name} blendet ${y.def.name}!`)),Math.hypot(U.x-n.x,U.z-n.z)<5&&ac(Zt.airStress,n.x,n.z,!0)}n.def.swoop&&u<1.3&&Math.abs(n.y-Je.position.y-1)<1.4&&U.stun<=0&&n.hitCd<=0&&bM(n),Math.hypot(l.x-n.x,l.z-n.z)<3.4&&yu(n)}else{const[l,c,h]=Tn.dir(n.x,n.z);n.remain=h;const u=Yt.lighthouse.pos,f=Math.hypot(u.x-n.x,u.z-n.z);if(f<4.3||h<.6){yu(n);continue}let d=l,v=c;!d&&!v&&(d=(u.x-n.x)/f,v=(u.z-n.z)/f),n.hx=(n.hx||0)+(d-(n.hx||0))*Math.min(1,i*6),n.hz=(n.hz||0)+(v-(n.hz||0))*Math.min(1,i*6);const x=Math.hypot(n.hx,n.hz)||1,m=n.lane*Math.min(1,f/10);if(n.x+=n.hx/x*r*i+-n.hz/x*m*i*.5,n.z+=n.hz/x*r*i+n.hx/x*m*i*.5,n.y=Yt.heightAt(n.x,n.z),n.mesh.rotation.y=Math.atan2(-n.hx,-n.hz),U.inv<=0&&U.faint<=0&&Math.abs(U.x-n.x)<1.2&&Math.abs(U.z-n.z)<1.2&&Math.hypot(U.x-n.x,U.z-n.z)<1.1&&ac(n.def.stress??10,n.x,n.z),n.type==="clerk")a.position.y=Math.abs(Math.sin(n.phase))*.12,a.rotation.z=Math.sin(n.phase)*.06,n.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(n.phase*.5))*.25;else if(n.type==="tank"){const p=Math.abs(Math.sin(n.phase));a.position.y=p*.05,a.rotation.z=Math.sin(n.phase)*.07;const y=Math.pow(1-p,6);a.scale.set(1+y*.06,1-y*.08,1+y*.06)}else n.type==="swarm"?(a.position.y=Math.abs(Math.sin(n.phase))*.14,a.rotation.y=Math.sin(n.phase*.5)*.3):n.type==="complainer"?(a.position.y=Math.abs(Math.sin(n.phase))*.16,n.mesh.userData.arm.rotation.z=Math.sin(n.phase*.5)*.4):n.type==="lobbyist"||n.type==="lobbyMini"?(a.position.y=Math.abs(Math.sin(n.phase))*.05,a.rotation.z=Math.sin(n.phase*.5)*.17):n.type==="auditor"?(a.position.y=Math.abs(Math.sin(n.phase))*.03,a.rotation.z=0):(a.position.y=Math.abs(Math.sin(n.phase))*.08,a.rotation.z=Math.sin(n.phase)*.05)}if(n.hitT>0){n.hitT-=i;const l=Math.max(0,n.hitT)/.18;a.scale.set(1+l*.16,1-l*.16,1+l*.16),a.position.z=l*.15,n.hitT<=0&&(a.scale.set(1,1,1),a.position.z=0)}n.blinkT-=i,n.blinkT<-.12&&(n.blinkT=2+Math.random()*3.5);for(const l of n.mesh.userData.eyes)l.scale.y=n.blinkT<0?.12:1;n.mesh.position.set(n.x,n.y,n.z),n.slow>0&&Math.random()<i*6&&Ie.emit(n.x,n.y+.8,n.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const o=n.mesh.userData.hpBar;if(o.visible){o.quaternion.copy(Ge.quaternion),o.quaternion.premultiply(n.mesh.quaternion.clone().invert());const l=Math.max(0,n.hp/n.maxHp),c=n.mesh.userData.hpFg;c.scale.x=.96*l,c.position.x=-.48*(1-l),c.material.color.setHSL(.33*(1-l),.7,.55)}}for(let n=Cn.length-1;n>=0;n--)Cn[n].alive||Cn.splice(n,1)}function yu(i){J.leaks[i.type]=(J.leaks[i.type]||0)+1,i.alive=!1,ye.remove(i.mesh),J.lights=Math.max(0,J.lights-1),Yt.lighthouse.setLights(J.lights),Un(je.lights,"lights",J.lights,"bad");const t=Yt.lighthouse.flamePos();ur.emit(t.x,t.y,t.z,{n:10,color:"#b8b4b0",speed:.8,up:1.6,life:1.8,gravity:-.4}),Ie.emit(t.x,t.y,t.z,{n:14,color:"#8a8580",speed:1.6,up:.6,life:1.6,gravity:4}),Ze(`${i.def.name} slukket litt glød!`),Be.lose(),kn=.3,J.lights<=0&&Xf(!1)}const er=[],ti=document.createElement("div");ti.id="chillbar";ti.innerHTML="<i></i>";document.body.appendChild(ti);let Su=0;function co(i){const t=document.createElement("div");t.className="pop-emoji",t.textContent=i,Ae.set(U.x,Je.position.y+2.6,U.z).project(Ge),t.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,t.style.top=`${(-Ae.y*.5+.5)*innerHeight}px`,document.body.appendChild(t),setTimeout(()=>t.remove(),900)}function ac(i,t,e,n=!1){if(!(U.faint>0||U.inv>0)){if(U.chill=Math.max(0,U.chill-i),U.inv=Zt.stressInvuln,U.flinch=.55,!n){const s=U.x-t,r=U.z-e,a=Math.hypot(s,r)||1;U.vx+=s/a*Zt.stressPush,U.vz+=r/a*Zt.stressPush,U.goal=null}Ie.emit(U.x,Je.position.y+1.4,U.z,{n:8,color:"#ff6a5a",speed:2,up:1.5,life:.4}),co("😓"),ti.classList.remove("hit"),ti.offsetWidth,ti.classList.add("hit"),Un(je.chill,"chillBad",Math.random(),"bad"),U.chill<=0&&yM()}}function yM(){U.faint=Zt.faintTime,U.stun=Zt.faintTime,U.faints++,U.goal=null,U.vx=U.vz=0;const i=Math.floor(J.embers*Zt.faintLoss);i>0&&(J.embers-=i,kc(U.x,Je.position.y+1,U.z,i,!1,1.6)),U.carrying&&(U.carrying=!1),co("😵"),Ze(`😵 Vokteren besvimte av stress! Våkner ved fyret om ${Zt.faintTime} s`),Be.stun()}function Hf(i,t){const e=Ef();e.scale.setScalar(1.8),e.position.set(i,Yt.heightAt(i,t)+.5,t),ye.add(e),er.push({mesh:e,x:i,z:t,life:Zt.bagLife})}function SM(i){U.inv-=i;const t=Yt.lighthouse.pos;U.faint>0?(U.faint-=i,U.faint<=0&&(U.x=t.x+1,U.z=t.z+7.5,U.vx=U.vz=0,U.stun=0,U.chill=Zt.chillMax*Zt.wakeChill,U.inv=Zt.stressInvuln*2,Ie.emit(U.x,Yt.heightAt(U.x,U.z)+1,U.z,{n:14,color:"#9fffb0",speed:2,up:2,life:.7}))):Math.hypot(t.x-U.x,t.z-U.z)<Zt.regenReach&&(U.chill=Math.min(Zt.chillMax,U.chill+Zt.regen*i));for(let s=er.length-1;s>=0;s--){const r=er[s];r.life-=i,r.mesh.rotation.y+=i*1.5,r.mesh.position.y=Yt.heightAt(r.x,r.z)+.5+Math.sin(J.time*3+s)*.12,r.mesh.visible=r.life>4||Math.sin(r.life*12)>0,U.faint<=0&&Math.hypot(r.x-U.x,r.z-U.z)<1.4&&(U.chill=Math.min(Zt.chillMax,U.chill+Zt.bagHeal),Ze(`🥔 Chips! +${Zt.bagHeal} chill`),co("😌"),Be.pickup(),r.life=0),r.life<=0&&(ye.remove(r.mesh),er.splice(s,1))}const e=Math.round(U.chill);Un(je.chill,"chill",e),je.chill.classList.toggle("low",e<30),e!==Su&&(Su=e,ti.firstChild.style.width=`${100*U.chill/Zt.chillMax}%`,ti.classList.toggle("low",e<30));const n=(e<Zt.chillMax||U.faint>0)&&J.phase!=="title";ti.style.display=n?"block":"none",n&&(Ae.set(U.x,Je.position.y+2.3,U.z).project(Ge),ti.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,ti.style.top=`${(-Ae.y*.5+.5)*innerHeight}px`)}function bM(i){if(ac(Zt.airStress,i.x,i.z,!0),U.faint>0)return;U.stun=Zt.stunTime,i.hitCd=4;const t=Math.floor(J.embers*Zt.stunLoss);t>0&&(J.embers-=t,kc(U.x,Je.position.y+1,U.z,t,!1,1.6)),U.carrying&&(U.carrying=!1,Ze("Rullepapiret blåste bort!")),Ie.emit(U.x,Je.position.y+1.5,U.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),Be.stun(),kn=.2}function wM(i){for(let t=us.length-1;t>=0;t--){const e=us[t];e.life-=i,e.phase+=i;const n=Math.max(Yt.heightAt(e.x,e.z),.1)+.35;e.settled||(e.vy-=16*i,e.x+=e.vx*i,e.z+=e.vz*i,e.y+=e.vy*i,e.y<=n&&(e.y=n,Math.abs(e.vy)>2.5?(e.vy=-e.vy*.4,e.vx*=.6,e.vz*=.6):e.settled=!0));const s=Math.hypot(U.x-e.x,U.z-e.z);if(U.stun<=0&&s<Zt.magnet){const l=(1-s/Zt.magnet)*14+3;e.x+=(U.x-e.x)/s*l*i,e.z+=(U.z-e.z)/s*l*i,e.settled=!0,e.y=n}const r=e.settled?Math.sin(e.phase*3)*.12:0;e.mesh.position.set(e.x,e.y+r,e.z),e.mesh.rotation.y+=i*3;const a=e.life<5,o=(.8+Math.min(e.value,6)*.08)*(a?.55+.45*(e.life/5):1);if(e.mesh.scale.setScalar(o),e.mesh.visible=!a||Math.sin(e.life*(e.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Ie.emit(e.x,e.y+.2,e.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),U.stun<=0&&s<.9)J.embers+=e.value,Un(je.embers,"embers",J.embers,"bump"),Ie.emit(e.x,e.y+.3,e.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Be.pickup(),ye.remove(e.mesh),us.splice(t,1);else if(e.life<=0){const l=Math.max(1,Math.round(e.value*Zt.expiredRefund));J.embers+=l,Ie.emit(e.x,e.y,e.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),ye.remove(e.mesh),us.splice(t,1)}}}let Za=0,Wf="";function Ze(i){Za=2,Wf=i,Pi.textContent=""}function bu(i){var _,A;const t=Je.userData;(J.phase==="prep"||J.phase==="wave")&&SM(i),U.stun-=i,t.stars.visible=U.stun>0,t.stars.rotation.y+=i*6;let e=0,n=0;if(U.stun<=0&&(J.phase==="prep"||J.phase==="wave")){if(de.move.x||de.move.z){U.goal=null;const D=Math.cos(Ai),G=Math.sin(Ai);e=de.move.x*D+de.move.z*G,n=-de.move.x*G+de.move.z*D}else if(U.goal){const D=U.goal,G=D.x-U.x,L=D.z-U.z;if(D.field===void 0){D.field=null;const X=Math.ceil(Math.hypot(G,L)/.5);for(let B=1;B<X;B++)if(!Yt.isWalkable(U.x+G*B/X,U.z+L*B/X)){D.field=Tn.walkField(D.x,D.z);break}}const k=D.field?Math.min(D.field.at(U.x,U.z),Math.hypot(G,L)+50):Math.hypot(G,L);D.t+=i;const V=k<.35||D.spot&&Math.hypot(D.spot.x-U.x,D.spot.z-U.z)<D.reach;if(k<D.best-.3&&(D.best=k,D.lastGain=D.t),V||D.t>12||D.t-D.lastGain>1.5)U.goal=null;else{const X=Math.min(1,k/.8),B=D.field&&Math.hypot(G,L)>1.5?D.field.dir(U.x,U.z):null,j=B&&(B[0]||B[1])?B[0]:G/Math.hypot(G,L),at=B&&(B[0]||B[1])?B[1]:L/Math.hypot(G,L);e=j,n=at;for(const wt of Yt.colliders){if(D.spot&&wt.x===D.spot.x&&wt.z===D.spot.z)continue;const Qt=wt.x-U.x,et=wt.z-U.z,pt=Qt*j+et*at;if(pt<=0||pt>wt.r+2.2||pt>k)continue;const Tt=-Qt*at+et*j;if(Math.abs(Tt)>wt.r+.6)continue;const ft=(1-Math.abs(Tt)/(wt.r+.6))*1.6*(Tt>=0?1:-1);e-=-at*ft,n-=j*ft}const lt=Math.hypot(e,n)||1;e=e/lt*X,n=n/lt*X}}}const r=Yt.heightAt(U.x,U.z)<.05,a=Zt.keeperSpeed*(U.carrying?Zt.carrySlow:1)*(r?Zt.wadeSlow:1),o=e*a,l=n*a,c=(_=Yt.isIce)!=null&&_.call(Yt,U.x,U.z)?1.6:12;U.vx+=(o-U.vx)*Math.min(1,i*c),U.vz+=(l-U.vz)*Math.min(1,i*c);let h=U.x+U.vx*i,u=U.z+U.vz*i;Yt.isWalkable(h,u)||(Yt.isWalkable(h,U.z)?u=U.z:Yt.isWalkable(U.x,u)?h=U.x:(h=U.x,u=U.z));for(const D of Yt.colliders){const G=h-D.x,L=u-D.z,k=Math.hypot(G,L),V=D.r+.4;k<V&&k>1e-4&&(h=D.x+G/k*V,u=D.z+L/k*V)}U.x=h,U.z=u;const f=Math.hypot(U.vx,U.vz);if(f>.3){const D=Math.atan2(-U.vx,-U.vz);U.face+=oc(D,U.face)*Math.min(1,i*12),U.walk+=i*f*2.2}if(Je.rotation.y=U.face,Je.position.set(U.x,Math.max(Yt.heightAt(U.x,U.z),-.25),U.z),r&&f>1&&(U.splash=(U.splash||0)-i,U.splash<=0)){U.splash=.22,Ie.emit(U.x,.15,U.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const D=Tf();D.position.set(U.x,.1,U.z),D.material.color.set("#f4fdff"),ye.add(D),tr.push({mesh:D,t:0,r:1.6,dur:.9})}const d=Math.min(1,f/3),v=Math.sin(U.walk)*d;t.legs[0].position.z=v*.2,t.legs[1].position.z=-v*.2,t.legs[0].position.y=.2+Math.max(0,v)*.12,t.legs[1].position.y=.2+Math.max(0,-v)*.12;const x=f>.6;x!==!!U.wasMoving&&(U.sq=x?1:-1,U.wasMoving=x),U.sq=(U.sq||0)*Math.exp(-i*7);const m=f<.3?Math.sin(J.time*2.2)*.025:0;t.body.scale.set(1-m*.5-U.sq*.07,1+m+U.sq*.12,1-m*.5-U.sq*.07);const p=Math.sign(Math.sin(U.walk));f>2&&!r&&p!==U.lastStep&&Ie.emit(U.x,Je.position.y+.1,U.z,{n:2,color:"#d9c9a4",speed:.7,up:.6,life:.45,gravity:1}),U.lastStep=p,U.flinch=Math.max(0,(U.flinch||0)-i),U.cheer=Math.max(0,(U.cheer||0)-i);const y=f>.5&&((A=Yt.isIce)==null?void 0:A.call(Yt,U.x,U.z)),S=Math.abs(v)*.09+(U.cheer>0?Math.abs(Math.sin(U.cheer*9))*.35:0);t.body.position.y=S,t.body.rotation.x=U.faint>0?0:-.35*Math.min(1,U.flinch*2.5),t.body.rotation.z=U.faint>0?1.45:U.stun>0?.5:v*.05+(y?Math.sin(J.time*7)*.12:0)+(U.flinch>0?Math.sin(U.flinch*40)*.08:0);let g=v*.6,T=-v*.45,E=0,w=0;y&&(E=-1.25+Math.sin(J.time*9)*.25,w=1.25+Math.cos(J.time*8)*.25,g=T=0),U.cheer>0&&(g=T=-2.9,E=-.3,w=.3),U.flinch>0&&(g=-2.5,E=.5);const C=Math.min(1,i*14);t.armL.rotation.x+=(g-t.armL.rotation.x)*C,t.armL.rotation.z+=(E-t.armL.rotation.z)*C,t.lanternArm.rotation.x+=(T-t.lanternArm.rotation.x)*C,t.lanternArm.rotation.z+=(w-t.lanternArm.rotation.z)*C,U.idle=f<.3?(U.idle||0)+i:0;const M=U.idle>2?Math.sin(J.time*.55)*.7*Math.min(1,(U.idle-2)/1.5):0;t.head.rotation.y+=(M-t.head.rotation.y)*Math.min(1,i*4),U.blink=(U.blink??2)-i,U.blink<-.12&&(U.blink=2+Math.random()*3);for(const D of t.eyes)D.scale.y=U.faint>0?.1:U.blink<0?.12:1;t.carried.visible=U.carrying,t.carried.rotation.y+=i*2,t.carried.position.y=2.35+Math.sin(J.time*3)*.08,Nc.intensity=2.6+Math.sin(J.time*11)*.3}function EM(){for(const i of de.clicks.splice(0)){_u.setFromCamera(i,Ge);const t=_u.intersectObject(Yt.terrain)[0];if(!t)continue;let e=t.point.x,n=t.point.z;const s=Yt.lighthouse.pos,r=Zr(Yt.plinths,e,n,2.2)||(Math.hypot(s.x-e,s.z-n)<4.5?{x:s.x,z:s.z,big:!0}:null);if(r){const a=r.big?4.3:1.95;let o=U.x-r.x,l=U.z-r.z;const c=Math.hypot(o,l)||1;e=r.x+o/c*a,n=r.z+l/c*a}U.goal={x:e,z:n,t:0,best:1/0,lastGain:0,spot:r,reach:r?r.big?Zt.lighthouseReach-.4:Zt.reach-.25:0},Ie.emit(e,Yt.heightAt(e,n)+.2,n,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}}function nr(i=!J.paused,t=!1){J.paused=i;const e=de.labels();he("pause-keys").textContent=`${e.name}: fortsett med ${e.pause} · start på nytt med ${e.restart}`,he("pause").classList.toggle("hidden",!i),he("confirm").classList.toggle("hidden",!t),J.confirming=i&&t}try{sessionStorage.getItem("glod-portrait")&&document.documentElement.classList.add("portrait-ok")}catch{}he("btn-portrait").addEventListener("click",()=>{document.documentElement.classList.add("portrait-ok");try{sessionStorage.setItem("glod-portrait","1")}catch{}ea()});he("btn-resume").addEventListener("click",()=>nr(!1));he("btn-restart").addEventListener("click",()=>nr(!0,!0));he("btn-yes").addEventListener("click",()=>Or());he("btn-no").addEventListener("click",()=>nr(!0,!1));he("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${wn}`});he("btn-lex").addEventListener("click",()=>{const i=he("lex");i.innerHTML||(i.innerHTML=Object.entries(oo).filter(([t])=>t!=="lobbyMini").map(([t,e])=>{const{tough:n,weak:s}=Gf(e);return`<div class="lex-row"><b>${e.flying?"🪶":"🐾"} ${e.name}</b><small>${e.info||(e.flying?"flyr rett mot fyret":"går langs veien")}</small><span>${n?`🛡️ ${n}`:""} ${s?`💥 ${s}`:""}</span></div>`}).join("")+`<p class="lex-key">🛡️ tåler · 💥 svak mot · ${Object.entries(rc).map(([t,e])=>`${e} ${Qs[t].name}`).join(" · ")} · 📒 skjold forfra</p>`),i.classList.toggle("hidden")});function Or(){for(const i of fs)i.el.remove();fs.length=0;for(const i of[Cn,Fr,us,Zn,tr]){for(const t of i)t.mesh&&ye.remove(t.mesh);i.length=0}for(const i of In)ye.remove(i.mesh);In.length=0;for(const i of Yt.plinths)i.tower=null;for(let i=Yt.colliders.length-1;i>=0;i--)Yt.colliders[i].tower&&Yt.colliders.splice(i,1);J.buildMode=!1,U.chargeTower&&Yr(U.chargeTower,0),Object.assign(J,{phase:"title",wave:0,timer:0,embers:Zt.startEmbers,lights:cr,spawnQueue:[],leaks:{},seen:{},waveClock:0,sel:0,paused:!1,confirming:!1}),Object.assign(U,{x:Yt.lighthouse.pos.x+1,z:Yt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,charge:0,chargeTower:null,goal:null,chill:Zt.chillMax,inv:0,faint:0,faints:0});for(const i of er)ye.remove(i.mesh);er.length=0,Yt.lighthouse.setLights(cr),DM(),kn=0,Za=0,Li={},Un(je.lights,"lights",J.lights),Un(je.embers,"embers",J.embers),Un(je.wave,"wave",0),je.timer.textContent="",he("pause").classList.add("hidden"),he("confirm").classList.add("hidden"),he("overlay").classList.add("hidden"),de.clear(),J.phase="title",ho(!0),window.__restarts=(window.__restarts||0)+1}function TM(){const i=de.device;if(Li.device===i+de.padKind)return;Li.device=i+de.padKind;const t=de.labels();he("touch").classList.toggle("hidden",i!=="touch"||J.phase==="title"),hi.querySelectorAll("button i").forEach((e,n)=>{e.textContent=i==="pad"?n===J.sel?t.build:"":i==="touch"?"":String(n+1)}),zc.textContent="Neste bølge ▶",Li.sel=-1}function AM(i){if(de.consume("fps")&&Fc.classList.toggle("hidden"),de.consume("music")&&Yf(),TM(),J.phase==="title"){["build","carry","next","pause"].some(f=>de.consume(f))&&ho(),de.clear();return}if(Un(je.embers,"embers",J.embers),!(J.phase==="prep"||J.phase==="wave")){if((J.phase==="won"||J.phase==="lost")&&de.consume("restart")){Or();return}de.clear(),hi.classList.add("hidden"),Mu("");return}if(de.consume("restart")){J.confirming?Or():nr(!0,!0);return}if(de.consume("pause")&&nr(!J.paused),J.confirming){if(de.consume("build")||de.consume("next")){Or();return}de.consume("carry")&&nr(!0,!1)}if(J.paused){de.clear();return}EM(),de.consume("next")&&J.phase==="prep"&&(J.timer=0),de.consume("selPrev")&&(J.sel=(J.sel+Gi.length-1)%Gi.length),de.consume("selNext")&&(J.sel=(J.sel+1)%Gi.length);const e=Zr(Yt.plinths,U.x,U.z,Zt.reach,f=>!f.tower),n=Zr(In,U.x,U.z,Zt.reach),s=Yt.lighthouse.pos,r=Math.hypot(s.x-U.x,s.z-U.z)<Zt.lighthouseReach,a=U.stun>0,o=Bc();de.consume("build")&&!a&&(J.buildMode||e?ja(Gi[J.sel]):J.buildMode=!0),Gi.forEach((f,d)=>{de.consume("b"+(d+1))&&!a&&(J.sel=d,ja(f))});const l=(J.buildMode||!!e)&&!a&&!U.carrying;vM(l,o,Gi[J.sel]),hi.classList.toggle("hidden",!l),l&&(hi.querySelectorAll("button").forEach((f,d)=>{f.disabled=J.embers<Qs[f.dataset.tower].cost,f.classList.toggle("sel",d===J.sel)}),Li.sel!==J.sel&&de.device==="pad"&&(Li.sel=J.sel,hi.querySelectorAll("button i").forEach((f,d)=>f.textContent=d===J.sel?de.labels().build:""))),de.consume("carry")&&!a&&(!U.carrying&&r?J.embers>=Zt.stoneCost?(J.embers-=Zt.stoneCost,U.carrying=!0,Un(je.embers,"embers",J.embers,"bump"),Ie.emit(U.x,Je.position.y+2.3,U.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),Be.stone()):(Be.deny(),Ze(`Rullepapir koster ${Zt.stoneCost} ✦`)):U.carrying&&r?(U.carrying=!1,J.embers+=Zt.stoneCost,Be.stone(),Ze("Rullepapiret er lagt tilbake")):!U.carrying&&J.buildMode?J.buildMode=!1:U.carrying?n||Ze("Bær rullepapiret til et tårn"):Ze("Rullepapir hentes ved fyret"));const c=U.carrying&&!a&&n&&n.level<Ko&&!n.upg?n:null;c!==U.chargeTower&&(U.chargeTower&&Yr(U.chargeTower,0),U.chargeTower=c,U.charge=0),c&&(U.charge+=i/Zt.chargeTime,Yr(c,Math.min(1,U.charge)),Math.random()<i*20&&Ie.emit(U.x,Je.position.y+2.2,U.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),U.charge>=1&&(c.upg={t:0,dur:Zt.upgradeTime[c.level-1]},U.carrying=!1,U.chargeTower=null,U.charge=0,Ie.emit(c.x,c.y+1.2,c.z,{n:12,color:"#8ff0ff",speed:2,up:2,life:.6}),Be.stone(),Ze(`${c.def.name}: bli stående i ${c.upg.dur} s for å oppgradere`)));const h=de.labels();Za-=i;let u="";if(Za>0)u=Wf;else if(a)u="Moralpanikk! Måka slo deg ut";else if(c)u="Leverer rullepapiret …";else if(n!=null&&n.upg)u=`Lader ${n.def.name} … ${Math.ceil(n.upg.dur-n.upg.t)} s igjen (bli stående)`;else if(U.carrying&&n&&n.level>=Ko)u="Tårnet er på maks nivå";else if(U.carrying)u="Bær rullepapiret til et tårn";else if(r&&!U.carrying)u=`${h.carry} = hent rullepapir (${Zt.stoneCost} ✦)`;else if(r&&U.carrying)u=`${h.carry} = legg rullepapiret tilbake`;else if(n&&n.level<Ko)u=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(l&&!o.ok)u=`Ikke lov her: ${o.why} · ${h.carry} = avbryt`;else if(l){const f=`${Qs[Gi[J.sel]].name} (${Qs[Gi[J.sel]].tip})`,d=o.plinth?" (sokkel: +25 % rekkevidde)":"";u=de.device==="pad"?`${h.sel} = velg tårn · ${h.build} = sett ned ${f}${d}`:de.device==="touch"?`Trykk på et tårn, eller Bygg = ${f}${d}`:`1 / 2 / 3 eller ${h.build} = sett ned ${f}${d}`}else J.phase==="prep"&&J.wave===0&&(u=`${h.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);Mu(u),rM(i)}const vs=new xe;{const i=document.createElement("canvas");i.width=64,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,256),t.globalCompositeOperation="destination-in";const n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,256);const s=new ui(i);for(let r=0;r<6;r++){const a=new se(new Hn(1,1),new Te({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:ni,depthWrite:!1,depthTest:!1,fog:!1}));a.scale.set(2.5+r%3*1.8,34,1),a.position.set(-22+r*8.5,9,-4+r%2*6),a.rotation.set(-.95,0,.55),a.userData.phase=r*1.3,vs.add(a)}}vs.visible=Ke.id==="tak";vs.renderOrder=50;ye.add(vs);function CM(i){vs.position.set(bn.x,0,bn.z),vs.rotation.y=Ai,vs.children.forEach(t=>t.material.opacity=.03+.025*Math.sin(i*.35+t.userData.phase))}let kn=0;const Ae=new O,Jo=new O,Xs=new O,za=new O,Qo=new O,bn=new O(U.x,0,U.z);function RM(i){bn.x+=(U.x-bn.x)*Math.min(1,i*4),bn.z+=(U.z-bn.z)*Math.min(1,i*4),bn.y=Je.position.y;const t=Ii?1.15:1,e=de.zoom*t,n=Ge.aspect<1.2?1.25:1;Ai+=de.look;const s=6.6*e*n;Ge.position.set(bn.x+Math.sin(Ai)*s,bn.y+12.5*e*n,bn.z+Math.cos(Ai)*s),kn=Math.max(0,kn-i),kn>0&&(Ge.position.x+=(Math.random()-.5)*kn*2,Ge.position.y+=(Math.random()-.5)*kn),Ge.lookAt(bn.x-Math.sin(Ai),bn.y+.5,bn.z-Math.cos(Ai)),Ge.updateMatrixWorld();let r=0,a=0,o=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([p,y])=>{const S=Ae.set(p,y,.5).unproject(Ge),g=S.sub(Ge.position).normalize(),T=g.y<-.05?(bn.y-Ge.position.y)/g.y:80;return[Ge.position.x+g.x*Math.min(T,80),Ge.position.z+g.z*Math.min(T,80)]});for(const[p,y]of l)r+=p/4,a+=y/4;for(const[p,y]of l)o=Math.max(o,Math.hypot(p-r,y-a));const c=be.clamp(Math.ceil((o+4)/4)*4,16,80);rn.shadow.camera.right!==c&&(Object.assign(rn.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),rn.shadow.camera.updateProjectionMatrix());const h=2*c/rn.shadow.mapSize.x;Xs.set(Vn.sunDir[0],Vn.sunDir[1],Vn.sunDir[2]).normalize(),za.set(0,1,0).cross(Xs).normalize(),Qo.copy(Xs).cross(za).normalize(),Ae.set(r,bn.y,a);const u=Math.round(Ae.dot(za)/h)*h,f=Math.round(Ae.dot(Qo)/h)*h,d=Ae.dot(Xs);Jo.copy(za).multiplyScalar(u).addScaledVector(Qo,f).addScaledVector(Xs,d),rn.target.position.copy(Jo),rn.position.copy(Jo).addScaledVector(Xs,40),rn.shadow.camera.far=40+c+20,CM(J.time),fM(),Ae.set(U.x,Je.position.y+.9,U.z);const v=-Ae.clone().applyMatrix4(Ge.matrixWorldInverse).z;Ae.project(Ge);const x=innerWidth*xn.getPixelRatio(),m=innerHeight*xn.getPixelRatio();lr.uKeep.value.set((Ae.x*.5+.5)*x,(Ae.y*.5+.5)*m,v),lr.uRad.value=m*.3,lM(J.paused?0:i)}const tl=Ke.eruption,el=Yt.extras.bridges??[];let Pr=0,Wi=null;function PM(i){if(!(!tl||!el.length||J.phase!=="wave")){if(Pr+=i,Wi&&Pr>=tl.closed)Wi.setClosed(!1),Wi=null,Tn.setBlock(()=>!1);else if(!Wi&&Pr>=tl.every){Pr=0;const t=el[Math.random()*el.length|0];t.setClosed(!0),Wi=t,Tn.setBlock((e,n)=>(e-t.x)**2+(n-t.z)**2<2.8*2.8),kn=Math.max(kn,.35),Be.boom(),Ze("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function DM(){Wi&&(Wi.setClosed(!1),Tn.setBlock(()=>!1)),Wi=null,Pr=0}function LM(i){if(PM(i),J.phase==="prep")J.timer-=i,je.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,J.timer))} s`,J.timer<=0&&(je.timer.textContent="",Bf());else if(J.phase==="wave"){for(J.waveClock+=i;J.spawnQueue.length&&J.spawnQueue[0].t<=J.waveClock;){const t=J.spawnQueue.shift();Oc(t.type,t.path)}if(je.timer.textContent=`${Cn.length+J.spawnQueue.length} monstre igjen`,!J.spawnQueue.length&&!Cn.length){if(je.timer.textContent="",J.wave>=Uc.length){Xf(!0);return}const t=Zt.waveBonus+J.wave*Zt.waveBonusPer+Math.floor(Math.min(J.embers,300)*Zt.interest);J.embers+=t,Un(je.embers,"embers",J.embers,"bump"),Ze(`Bølge ${J.wave} slått! +${t} ✦`),U.cheer=1.4,kf(Zt.prepTime),De==null||De.setIntensity(0)}}}function Xf(i){J.phase=i?"won":"lost",he("touch").classList.add("hidden"),he("btn-pause").classList.add("hidden"),hi.classList.add("hidden");let t="";if(De==null||De.setIntensity(0),i){Be.win();const n=qr();l_(wn),qr()>n&&(t=`<p class="lead">🔓 Ny verden låst opp: <b>${gr[wn+1].name}</b>!</p>`)}const e=he("overlay");e.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${J.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${t}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${t?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${J.wave}. Rull opp ermene og prøv igjen.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,e.classList.remove("hidden"),he("btn-again").addEventListener("click",()=>Or()),he("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${wn}`}),t&&he("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${wn+1}`})}let De=null;const wu=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})();function qf(){try{localStorage.setItem("glod-music",JSON.stringify({vol:De.volume,muted:De.muted}))}catch{}}function IM(){const i=Lf();De||!i||on.has("nomusic")||(De=K_(i.ctx,i.noiseBuf,Ke.id),De.setVolume(wu.vol??.7),De.setMuted(!!wu.muted),De.start(),he("music-vol").value=Math.round(De.volume*100),he("btn-mute").textContent=De.muted?"M: av":"M: på",window.__music=De,window.__audioCtx=i.ctx)}function Yf(){De&&(De.setMuted(!De.muted),he("btn-mute").textContent=De.muted?"M: av":"M: på",qf(),Ze(De.muted?"🎶 Musikk av":"🎶 Musikk på"))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const t=Lf();t&&t.ctx.state!=="running"&&t.ctx.resume()},{passive:!0});he("music-vol").addEventListener("input",i=>{De&&(De.setVolume(i.target.value/100),qf())});he("btn-mute").addEventListener("click",i=>{i.preventDefault(),Yf()});function ho(i=!1){J.phase==="title"&&(j_(),IM(),De==null||De.setIntensity(0),i&&he("touch").classList.toggle("hidden",de.device!=="touch"),he("overlay").classList.add("hidden"),Ii&&(de.device="touch"),Li.device=null,he("btn-pause").classList.remove("hidden"),Yt.lighthouse.setLights(J.lights),Un(je.embers,"embers",J.embers),kf(Zt.firstPrep),If&&UM())}he("btn-start").addEventListener("click",ho);{const i=he("worlds"),t=qr();if(gr.forEach((e,n)=>{const s=document.createElement("button");s.className="world"+(n===wn?" sel":"")+(n>=t?" locked":""),s.innerHTML=`<b>${n>=t?"🔒 ":""}${e.name}</b><small>${n>=t?"Vinn forrige verden for å låse opp":e.blurb}</small>`,s.disabled=n>=t,s.addEventListener("click",()=>{n!==wn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),he("btn-start").textContent=`Tenn gløden på ${Ke.name}`,Ke.skyDusk){const e=document.createElement("button");e.id="btn-tod",e.className="tod",e.textContent=ms==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",e.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",ms==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${wn}&tid=${ms==="skumring"?"dag":"skumring"}`}),he("worlds").after(e)}}he("btn-quality").addEventListener("click",()=>Ff(ii==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&Ff(ii==="high"?"low":"high")});he("btn-quality").textContent=ii==="high"?"Høy":"Lav";he("btn-pause").classList.add("hidden");function UM(){J.embers=999;const i=Yt.lighthouse.pos,t=Yt.plinths.slice().sort((e,n)=>Math.hypot(e.x-i.x,e.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((e,n)=>{const s=t[n];U.x=s.x+1.9,U.z=s.z,ja(e),n<3&&(In[In.length-1].level=n+1,wf(In[In.length-1],n+1))}),U.x=i.x+1,U.z=i.z+6,U.carrying=!0,J.wave=Number(on.get("demo"))||4,J.wave-=1,Bf(),J.waveClock=6,J.embers=142}const NM=new pf;let nl=0,Fa=0,Oa=0;window.__fpsSamples=[];window.__game={S:J,monsters:Cn,towers:In,embers:us,world:Yt,K:U,renderer:xn,camera:Ge,input:de,buildSpot:()=>Bc(),build:i=>ja(i),renderOnce:()=>ta.render(0),outlineCats:mf,spawnMonster:Oc,projectiles:Zn,damage:ds,dropBag:(i,t)=>Hf(i,t),ghost:Ci,get camYaw(){return Ai}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function $f(){requestAnimationFrame($f);const i=NM.getDelta(),t=Math.min(i,.05);J.paused||(J.time+=t),de.update(t),J.paused||(Yt.update(J.time),iM.update(J.time));for(let e=0;e<tM&&!J.paused&&(J.phase==="prep"||J.phase==="wave");e++)e>0&&(J.time+=t,bu(t)),LM(t),MM(t),xM(t),_M(t),wM(t),pM(t);if(J.paused||bu(t),AM(t),!J.paused){if(Ie.update(t),Math.random()<t*(4+10*(J.lights/cr))){const e=Yt.lighthouse.tip;ur.emit(e.x,e.y,e.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}ur.update(t)}if(RM(t),xn.info.reset(),ta.render(t),nl++,Fa+=i,Fa>=.5){const e=nl/Fa;window.__fpsSamples.push(e),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),Fc.textContent=`${e.toFixed(0)} fps · ${xn.info.render.calls} dc`,Oa=e<(Ii?28:45)?Oa+1:0,Oa>=6&&Hi>1&&(Hi=Math.max(1,Hi-.25),xn.setPixelRatio(Hi),ea(),Oa=0,window.__dprDrops=(window.__dprDrops||0)+1,on.has("debug")&&console.info(`[fps] ${e.toFixed(0)} fps over tid → dpr senket til ${Hi}`)),nl=0,Fa=0}}$f();If&&on.has("autostart")&&ho();function oc(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}
