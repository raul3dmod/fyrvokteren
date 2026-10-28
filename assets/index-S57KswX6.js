(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lc="170",jf=0,Vc=1,Zf=2,bu=1,wu=2,Ei=3,ji=0,wn=1,$e=2,on=0,qi=1,ei=2,Hc=3,Wc=4,Eu=5,Zn=100,Kf=101,Jf=102,Qf=103,td=104,Ar=200,ed=201,nd=202,id=203,rl=204,al=205,ol=206,sd=207,ll=208,rd=209,ad=210,od=211,ld=212,cd=213,hd=214,cl=0,hl=1,ul=2,sr=3,fl=4,dl=5,pl=6,ml=7,cc=0,ud=1,fd=2,Yi=0,Tu=1,Au=2,Cu=3,hc=4,dd=5,Ru=6,Pu=7,Du=300,rr=301,ar=302,gl=303,vl=304,Ka=306,Ii=1e3,cs=1001,xl=1002,gn=1003,pd=1004,ia=1005,li=1006,po=1007,hs=1008,ui=1009,Lu=1010,Iu=1011,kr=1012,uc=1013,gs=1014,ti=1015,Bn=1016,fc=1017,dc=1018,vs=1020,Uu=35902,Nu=1021,zu=1022,kn=1023,Fu=1024,Ou=1025,js=1026,xs=1027,Ja=1028,pc=1029,ku=1030,mc=1031,gc=1033,ka=33776,Ba=33777,Ga=33778,Va=33779,_l=35840,Ml=35841,yl=35842,Sl=35843,bl=36196,wl=37492,El=37496,Tl=37808,Al=37809,Cl=37810,Rl=37811,Pl=37812,Dl=37813,Ll=37814,Il=37815,Ul=37816,Nl=37817,zl=37818,Fl=37819,Ol=37820,kl=37821,Ha=36492,Bl=36494,Gl=36495,Bu=36283,Vl=36284,Hl=36285,Wl=36286,md=3200,gd=3201,vc=0,vd=1,Hi="",mn="srgb",dr="srgb-linear",Qa="linear",Ce="srgb",Cs=7680,Xc=519,xd=512,_d=513,Md=514,Gu=515,yd=516,Sd=517,bd=518,wd=519,qc=35044,Yc=35048,$c="300 es",Ci=2e3,Ya=2001;class pr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const Dr=Math.PI/180,Br=180/Math.PI;function ys(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function rn(i,t,e){return Math.max(t,Math.min(e,i))}function xc(i,t){return(i%t+t)%t}function Ed(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Td(i,t,e){return i!==t?(e-i)/(t-i):0}function Lr(i,t,e){return(1-e)*i+e*t}function Ad(i,t,e,n){return Lr(i,t,1-Math.exp(-e*n))}function Cd(i,t=1){return t-Math.abs(xc(i,t*2)-t)}function Rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Dd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ld(i,t){return i+Math.random()*(t-i)}function Id(i){return i*(.5-Math.random())}function Ud(i){i!==void 0&&(jc=i);let t=jc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nd(i){return i*Dr}function zd(i){return i*Br}function Fd(i){return(i&i-1)===0&&i!==0}function Od(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ye={DEG2RAD:Dr,RAD2DEG:Br,generateUUID:ys,clamp:rn,euclideanModulo:xc,mapLinear:Ed,inverseLerp:Td,lerp:Lr,damp:Ad,pingpong:Cd,smoothstep:Rd,smootherstep:Pd,randInt:Dd,randFloat:Ld,randFloatSpread:Id,seededRandom:Ud,degToRad:Nd,radToDeg:zd,isPowerOfTwo:Fd,ceilPowerOfTwo:Od,floorPowerOfTwo:kd,setQuaternionFromProperEuler:Bd,normalize:Mn,denormalize:qs};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,s,r,a,o,l,c){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],v=n[8],x=s[0],m=s[3],p=s[6],y=s[1],S=s[4],g=s[7],E=s[2],T=s[5],w=s[8];return r[0]=a*x+o*y+l*E,r[3]=a*m+o*S+l*T,r[6]=a*p+o*g+l*w,r[1]=c*x+u*y+h*E,r[4]=c*m+u*S+h*T,r[7]=c*p+u*g+h*w,r[2]=f*x+d*y+v*E,r[5]=f*m+d*S+v*T,r[8]=f*p+d*g+v*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,v=e*h+n*f+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(mo.makeScale(t,e)),this}rotate(t){return this.premultiply(mo.makeRotation(-t)),this}translate(t,e){return this.premultiply(mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mo=new ue;function Vu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gd(){const i=$a("canvas");return i.style.display="block",i}const Zc={};function Cr(i){i in Zc||(Zc[i]=!0,console.warn(i))}function Vd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Hd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Se={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ce&&(i.r=Di(i.r),i.g=Di(i.g),i.b=Di(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ce&&(i.r=Zs(i.r),i.g=Zs(i.g),i.b=Zs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hi?Qa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Kc=[.64,.33,.3,.6,.15,.06],Jc=[.2126,.7152,.0722],Qc=[.3127,.329],th=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Se.define({[dr]:{primaries:Kc,whitePoint:Qc,transfer:Qa,toXYZ:th,fromXYZ:eh,luminanceCoefficients:Jc,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:Kc,whitePoint:Qc,transfer:Ce,toXYZ:th,fromXYZ:eh,luminanceCoefficients:Jc,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});let Rs;class Xd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rs===void 0&&(Rs=$a("canvas")),Rs.width=t.width,Rs.height=t.height;const n=Rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$a("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qd=0;class Hu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(go(s[a].image)):r.push(go(s[a]))}else r=go(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yd=0;class vn extends pr{constructor(t=vn.DEFAULT_IMAGE,e=vn.DEFAULT_MAPPING,n=cs,s=cs,r=li,a=hs,o=kn,l=ui,c=vn.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=ys(),this.name="",this.source=new Hu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ii:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ii:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Du;vn.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,n=0,s=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],v=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,g=(d+1)/2,E=(p+1)/2,T=(u+f)/4,w=(h+x)/4,A=(v+m)/4;return S>g&&S>E?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=w/n):g>E?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=T/s,r=A/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=w/r,s=A/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(h-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $d extends pr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new vn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Hu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends $d{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wu extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jd extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],d=r[a+1],v=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=v,t[e+3]=x;return}if(h!==x||l!==f||c!==d||u!==v){let m=1-o;const p=l*f+c*d+u*v+h*x,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const E=Math.sqrt(S),T=Math.atan2(E,p*y);m=Math.sin(m*T)/E,o=Math.sin(o*T)/E}const g=o*y;if(l=l*m+f*g,c=c*m+d*g,u=u*m+v*g,h=h*m+x*g,m===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],v=r[a+3];return t[e]=o*v+u*h+l*d-c*f,t[e+1]=l*v+u*f+c*h-o*d,t[e+2]=c*v+u*d+o*f-l*h,t[e+3]=u*v-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),d=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h-f*d*v;break;case"YXZ":this._x=f*u*h+c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h+f*d*v;break;case"ZXY":this._x=f*u*h-c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h-f*d*v;break;case"ZYX":this._x=f*u*h-c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h+f*d*v;break;case"YZX":this._x=f*u*h+c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h-f*d*v;break;case"XZY":this._x=f*u*h-c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vo.copy(this).projectOnVector(t),this.sub(vo)}reflect(t){return this.sub(vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vo=new O,nh=new Kr;class Ss{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),ra.subVectors(this.max,Mr),Ps.subVectors(t.a,Mr),Ds.subVectors(t.b,Mr),Ls.subVectors(t.c,Mr),zi.subVectors(Ds,Ps),Fi.subVectors(Ls,Ds),Ji.subVectors(Ps,Ls);let e=[0,-zi.z,zi.y,0,-Fi.z,Fi.y,0,-Ji.z,Ji.y,zi.z,0,-zi.x,Fi.z,0,-Fi.x,Ji.z,0,-Ji.x,-zi.y,zi.x,0,-Fi.y,Fi.x,0,-Ji.y,Ji.x,0];return!xo(e,Ps,Ds,Ls,ra)||(e=[1,0,0,0,1,0,0,0,1],!xo(e,Ps,Ds,Ls,ra))?!1:(aa.crossVectors(zi,Fi),e=[aa.x,aa.y,aa.z],xo(e,Ps,Ds,Ls,ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xi=[new O,new O,new O,new O,new O,new O,new O,new O],qn=new O,sa=new Ss,Ps=new O,Ds=new O,Ls=new O,zi=new O,Fi=new O,Ji=new O,Mr=new O,ra=new O,aa=new O,Qi=new O;function xo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qi.fromArray(i,r);const o=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=t.dot(Qi),c=e.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Zd=new Ss,yr=new O,_o=new O;class mr{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);const e=yr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(_o)),this.expandByPoint(yr.copy(t.center).sub(_o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new O,Mo=new O,oa=new O,Oi=new O,yo=new O,la=new O,So=new O;class _c{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Mo.copy(t).add(e).multiplyScalar(.5),oa.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(Mo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(oa),o=Oi.dot(this.direction),l=-Oi.dot(oa),c=Oi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,v;if(u>0)if(h=a*l-o,f=a*o-l,v=r*u,h>=0)if(f>=-v)if(f<=v){const x=1/u;h*=x,f*=x,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Mo).addScaledVector(oa,f),d}intersectSphere(t,e){_i.subVectors(t.center,this.origin);const n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,s,r){yo.subVectors(e,t),la.subVectors(n,t),So.crossVectors(yo,la);let a=this.direction.dot(So),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,t);const l=o*this.direction.dot(la.crossVectors(Oi,la));if(l<0)return null;const c=o*this.direction.dot(yo.cross(Oi));if(c<0||l+c>a)return null;const u=-o*Oi.dot(So);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,s,r,a,o,l,c,u,h,f,d,v,x,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,f,d,v,x,m)}set(t,e,n,s,r,a,o,l,c,u,h,f,d,v,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=v,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),r=1/Is.setFromMatrixColumn(t,1).length(),a=1/Is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,d=a*h,v=o*u,x=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+v*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=v+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,v=c*u,x=c*h;e[0]=f+x*o,e[4]=v*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-v,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,v=c*u,x=c*h;e[0]=f-x*o,e[4]=-a*h,e[8]=v+d*o,e[1]=d+v*o,e[5]=a*u,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,v=o*u,x=o*h;e[0]=l*u,e[4]=v*c-d,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=d*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,v=o*l,x=o*c;e[0]=l*u,e[4]=x-f*h,e[8]=v*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+v,e[10]=f-x*h}else if(t.order==="XZY"){const f=a*l,d=a*c,v=o*l,x=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=a*u,e[9]=d*h-v,e[2]=v*h-d,e[6]=o*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,Jd)}lookAt(t,e,n){const s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),ki.crossVectors(n,Pn),ki.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),ki.crossVectors(n,Pn)),ki.normalize(),ca.crossVectors(Pn,ki),s[0]=ki.x,s[4]=ca.x,s[8]=Pn.x,s[1]=ki.y,s[5]=ca.y,s[9]=Pn.y,s[2]=ki.z,s[6]=ca.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],v=n[2],x=n[6],m=n[10],p=n[14],y=n[3],S=n[7],g=n[11],E=n[15],T=s[0],w=s[4],A=s[8],M=s[12],_=s[1],C=s[5],D=s[9],B=s[13],I=s[2],k=s[6],G=s[10],W=s[14],F=s[3],K=s[7],at=s[11],ct=s[15];return r[0]=a*T+o*_+l*I+c*F,r[4]=a*w+o*C+l*k+c*K,r[8]=a*A+o*D+l*G+c*at,r[12]=a*M+o*B+l*W+c*ct,r[1]=u*T+h*_+f*I+d*F,r[5]=u*w+h*C+f*k+d*K,r[9]=u*A+h*D+f*G+d*at,r[13]=u*M+h*B+f*W+d*ct,r[2]=v*T+x*_+m*I+p*F,r[6]=v*w+x*C+m*k+p*K,r[10]=v*A+x*D+m*G+p*at,r[14]=v*M+x*B+m*W+p*ct,r[3]=y*T+S*_+g*I+E*F,r[7]=y*w+S*C+g*k+E*K,r[11]=y*A+S*D+g*G+E*at,r[15]=y*M+S*B+g*W+E*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],v=t[3],x=t[7],m=t[11],p=t[15];return v*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*d-n*l*d)+x*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*u-r*l*u)+m*(+e*c*h-e*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+p*(-s*o*u-e*l*h+e*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],v=t[12],x=t[13],m=t[14],p=t[15],y=h*m*c-x*f*c+x*l*d-o*m*d-h*l*p+o*f*p,S=v*f*c-u*m*c-v*l*d+a*m*d+u*l*p-a*f*p,g=u*x*c-v*h*c+v*o*d-a*x*d-u*o*p+a*h*p,E=v*h*l-u*x*l-v*o*f+a*x*f+u*o*m-a*h*m,T=e*y+n*S+s*g+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=y*w,t[1]=(x*f*r-h*m*r-x*s*d+n*m*d+h*s*p-n*f*p)*w,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*w,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*d-n*l*d)*w,t[4]=S*w,t[5]=(u*m*r-v*f*r+v*s*d-e*m*d-u*s*p+e*f*p)*w,t[6]=(v*l*r-a*m*r-v*s*c+e*m*c+a*s*p-e*l*p)*w,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*d+e*l*d)*w,t[8]=g*w,t[9]=(v*h*r-u*x*r-v*n*d+e*x*d+u*n*p-e*h*p)*w,t[10]=(a*x*r-v*o*r+v*n*c-e*x*c-a*n*p+e*o*p)*w,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*d-e*o*d)*w,t[12]=E*w,t[13]=(u*x*s-v*h*s+v*n*f-e*x*f-u*n*m+e*h*m)*w,t[14]=(v*o*s-a*x*s-v*n*l+e*x*l+a*n*m-e*o*m)*w,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,v=r*h,x=a*u,m=a*h,p=o*h,y=l*c,S=l*u,g=l*h,E=n.x,T=n.y,w=n.z;return s[0]=(1-(x+p))*E,s[1]=(d+g)*E,s[2]=(v-S)*E,s[3]=0,s[4]=(d-g)*T,s[5]=(1-(f+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(v+S)*w,s[9]=(m-y)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Is.set(s[0],s[1],s[2]).length();const a=Is.set(s[4],s[5],s[6]).length(),o=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Yn.copy(this);const c=1/r,u=1/a,h=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,e.setFromRotationMatrix(Yn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ci){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,v;if(o===Ci)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ya)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ci){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),f=(e+t)*c,d=(n+s)*u;let v,x;if(o===Ci)v=(a+r)*h,x=-2*h;else if(o===Ya)v=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Is=new O,Yn=new be,Kd=new O(0,0,0),Jd=new O(1,1,1),ki=new O,ca=new O,Pn=new O,ih=new be,sh=new Kr;class fi{constructor(t=0,e=0,n=0,s=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qd=0;const rh=new O,Us=new Kr,Mi=new be,ha=new O,Sr=new O,tp=new O,ep=new Kr,ah=new O(1,0,0),oh=new O(0,1,0),lh=new O(0,0,1),ch={type:"added"},np={type:"removed"},Ns={type:"childadded",child:null},bo={type:"childremoved",child:null};class Fe extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new O,e=new fi,n=new Kr,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new ue}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(ah,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ah,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ha.copy(t):ha.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Sr,ha,this.up):Mi.lookAt(ha,Sr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(Mi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ch),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(np),bo.child=t,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ch),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,tp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new O(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new O,yi=new O,wo=new O,Si=new O,zs=new O,Fs=new O,hh=new O,Eo=new O,To=new O,Ao=new O,Co=new De,Ro=new De,Po=new De;class Kn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$n.subVectors(s,e),yi.subVectors(n,e),wo.subVectors(t,e);const a=$n.dot($n),o=$n.dot(yi),l=$n.dot(wo),c=yi.dot(yi),u=yi.dot(wo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,v=(a*u-o*l)*f;return r.set(1-d-v,v,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Co.setScalar(0),Ro.setScalar(0),Po.setScalar(0),Co.fromBufferAttribute(t,e),Ro.fromBufferAttribute(t,n),Po.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Co,r.x),a.addScaledVector(Ro,r.y),a.addScaledVector(Po,r.z),a}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),yi.subVectors(t,e),$n.cross(yi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),$n.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Kn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;zs.subVectors(s,n),Fs.subVectors(r,n),Eo.subVectors(t,n);const l=zs.dot(Eo),c=Fs.dot(Eo);if(l<=0&&c<=0)return e.copy(n);To.subVectors(t,s);const u=zs.dot(To),h=Fs.dot(To);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(zs,a);Ao.subVectors(t,r);const d=zs.dot(Ao),v=Fs.dot(Ao);if(v>=0&&d<=v)return e.copy(r);const x=d*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Fs,o);const m=u*v-d*h;if(m<=0&&h-u>=0&&d-v>=0)return hh.subVectors(r,s),o=(h-u)/(h-u+(d-v)),e.copy(s).addScaledVector(hh,o);const p=1/(m+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(zs,a).addScaledVector(Fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Do(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Se.workingColorSpace){if(t=xc(t,1),e=rn(e,0,1),n=rn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Do(a,r,t+1/3),this.g=Do(a,r,t),this.b=Do(a,r,t-1/3)}return Se.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=Xu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return Se.fromWorkingColorSpace(dn.copy(this),t),Math.round(rn(dn.r*255,0,255))*65536+Math.round(rn(dn.g*255,0,255))*256+Math.round(rn(dn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,s=dn.g,r=dn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=mn){Se.fromWorkingColorSpace(dn.copy(this),t);const e=dn.r,n=dn.g,s=dn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(ua);const n=Lr(Bi.h,ua.h,e),s=Lr(Bi.s,ua.s,e),r=Lr(Bi.l,ua.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Ct;Ct.NAMES=Xu;let ip=0;class bs extends pr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=ys(),this.name="",this.blending=qi,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=al,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rl&&(n.blendSrc=this.blendSrc),this.blendDst!==al&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ee extends bs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const je=new O,fa=new Et;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fa.fromBufferAttribute(this,e),fa.applyMatrix3(t),this.setXY(e,fa.x,fa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array),s=Mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array),s=Mn(s,this.array),r=Mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qc&&(t.usage=this.usage),t}}class qu extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yu extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sp=0;const Fn=new be,Lo=new Fe,Os=new O,Dn=new Ss,br=new Ss,nn=new O;class Pe extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vu(t)?Yu:qu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return Lo.lookAt(t),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];br.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Dn.min,br.min),Dn.expandByPoint(nn),nn.addVectors(Dn.max,br.max),Dn.expandByPoint(nn)):(Dn.expandByPoint(br.min),Dn.expandByPoint(br.max))}Dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)nn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(nn));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)nn.fromBufferAttribute(o,c),l&&(Os.fromBufferAttribute(t,c),nn.add(Os)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new O,l[A]=new O;const c=new O,u=new O,h=new O,f=new Et,d=new Et,v=new Et,x=new O,m=new O;function p(A,M,_){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,_),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,M),v.fromBufferAttribute(r,_),u.sub(c),h.sub(c),d.sub(f),v.sub(f);const C=1/(d.x*v.y-v.x*d.y);isFinite(C)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(C),o[A].add(x),o[M].add(x),o[_].add(x),l[A].add(m),l[M].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,M=y.length;A<M;++A){const _=y[A],C=_.start,D=_.count;for(let B=C,I=C+D;B<I;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new O,g=new O,E=new O,T=new O;function w(A){E.fromBufferAttribute(s,A),T.copy(E);const M=o[A];S.copy(M),S.sub(E.multiplyScalar(E.dot(M))).normalize(),g.crossVectors(T,M);const C=g.dot(l[A])<0?-1:1;a.setXYZW(A,S.x,S.y,S.z,C)}for(let A=0,M=y.length;A<M;++A){const _=y[A],C=_.start,D=_.count;for(let B=C,I=C+D;B<I;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,u=new O,h=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){const v=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let p=0;p<u;p++)f[v++]=c[d++]}return new ze(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new be,ts=new _c,da=new mr,fh=new O,pa=new O,ma=new O,ga=new O,Io=new O,va=new O,dh=new O,xa=new O;class Zt extends Fe{constructor(t=new Pe,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Io.fromBufferAttribute(h,t),a?va.addScaledVector(Io,u):va.addScaledVector(Io.sub(e),u))}e.add(va)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(da.containsPoint(ts.origin)===!1&&(ts.intersectSphere(da,fh)===null||ts.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(uh.copy(r).invert(),ts.copy(t.ray).applyMatrix4(uh),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],p=a[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let g=y,E=S;g<E;g+=3){const T=o.getX(g),w=o.getX(g+1),A=o.getX(g+2);s=_a(this,p,t,n,c,u,h,T,w,A),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=v,p=x;m<p;m+=3){const y=o.getX(m),S=o.getX(m+1),g=o.getX(m+2);s=_a(this,a,t,n,c,u,h,y,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],p=a[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let g=y,E=S;g<E;g+=3){const T=g,w=g+1,A=g+2;s=_a(this,p,t,n,c,u,h,T,w,A),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=v,p=x;m<p;m+=3){const y=m,S=m+1,g=m+2;s=_a(this,a,t,n,c,u,h,y,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function rp(i,t,e,n,s,r,a,o){let l;if(t.side===wn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ji,o),l===null)return null;xa.copy(o),xa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xa);return c<e.near||c>e.far?null:{distance:c,point:xa.clone(),object:i}}function _a(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,pa),i.getVertexPosition(l,ma),i.getVertexPosition(c,ga);const u=rp(i,t,e,n,pa,ma,ga,dh);if(u){const h=new O;Kn.getBarycoord(dh,pa,ma,ga,h),s&&(u.uv=Kn.getInterpolatedAttribute(s,o,l,c,h,new Et)),r&&(u.uv1=Kn.getInterpolatedAttribute(r,o,l,c,h,new Et)),a&&(u.normal=Kn.getInterpolatedAttribute(a,o,l,c,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};Kn.getNormal(pa,ma,ga,f.normal),u.face=f,u.barycoord=h}return u}class Ln extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(h,2));function v(x,m,p,y,S,g,E,T,w,A,M){const _=g/w,C=E/A,D=g/2,B=E/2,I=T/2,k=w+1,G=A+1;let W=0,F=0;const K=new O;for(let at=0;at<G;at++){const ct=at*C-B;for(let bt=0;bt<k;bt++){const Yt=bt*_-D;K[x]=Yt*y,K[m]=ct*S,K[p]=I,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[p]=T>0?1:-1,u.push(K.x,K.y,K.z),h.push(bt/w),h.push(1-at/A),W+=1}}for(let at=0;at<A;at++)for(let ct=0;ct<w;ct++){const bt=f+ct+k*at,Yt=f+ct+k*(at+1),nt=f+(ct+1)+k*(at+1),ut=f+(ct+1)+k*at;l.push(bt,Yt,ut),l.push(Yt,nt,ut),F+=6}o.addGroup(d,F,M),d+=F,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function or(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function yn(i){const t={};for(let e=0;e<i.length;e++){const n=or(i[e]);for(const s in n)t[s]=n[s]}return t}function ap(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $u(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const Jn={clone:or,merge:yn};var op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends bs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=op,this.fragmentShader=lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=ap(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ju extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new O,ph=new Et,mh=new Et;class In extends ju{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,ph,mh),e.subVectors(mh,ph)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ks=-90,Bs=1;class cp extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(ks,Bs,t,e);s.layers=this.layers,this.add(s);const r=new In(ks,Bs,t,e);r.layers=this.layers,this.add(r);const a=new In(ks,Bs,t,e);a.layers=this.layers,this.add(a);const o=new In(ks,Bs,t,e);o.layers=this.layers,this.add(o);const l=new In(ks,Bs,t,e);l.layers=this.layers,this.add(l);const c=new In(ks,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Zu extends vn{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:rr,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hp extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:li}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ln(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:on});r.uniforms.tEquirect.value=e;const a=new Zt(s,r),o=e.minFilter;return e.minFilter===hs&&(e.minFilter=li),new cp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Uo=new O,up=new O,fp=new ue;class as{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Uo.subVectors(n,e).cross(up.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Uo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fp.getNormalMatrix(t),s=this.coplanarPoint(Uo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new mr,Ma=new O;class yc{constructor(t=new as,e=new as,n=new as,s=new as,r=new as,a=new as){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ci){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],v=s[9],x=s[10],m=s[11],p=s[12],y=s[13],S=s[14],g=s[15];if(n[0].setComponents(l-r,f-c,m-d,g-p).normalize(),n[1].setComponents(l+r,f+c,m+d,g+p).normalize(),n[2].setComponents(l+a,f+u,m+v,g+y).normalize(),n[3].setComponents(l-a,f-u,m-v,g-y).normalize(),n[4].setComponents(l-o,f-h,m-x,g-S).normalize(),e===Ci)n[5].setComponents(l+o,f+h,m+x,g+S).normalize();else if(e===Ya)n[5].setComponents(o,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ma.x=s.normal.x>0?t.max.x:t.min.x,Ma.y=s.normal.y>0?t.max.y:t.min.y,Ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ku(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dp(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<h.length;d++){const v=h[f],x=h[d];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,v=h.length;d<v;d++){const x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Vn extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,d=[],v=[],x=[],m=[];for(let p=0;p<u;p++){const y=p*f-a;for(let S=0;S<c;S++){const g=S*h-r;v.push(g,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const S=y+c*p,g=y+c*(p+1),E=y+1+c*(p+1),T=y+1+c*p;d.push(S,g,T),d.push(g,E,T)}this.setIndex(d),this.setAttribute("position",new oe(v,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.width,t.height,t.widthSegments,t.heightSegments)}}var pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
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
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mp=`#ifdef USE_AOMAP
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
#endif`,yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
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
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
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
#endif`,Cp=`#ifdef USE_BUMPMAP
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fp=`#define PI 3.141592653589793
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
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
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
}`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
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
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
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
#endif`,f0=`struct PhysicalMaterial {
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
}`,d0=`
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
#endif`,p0=`#if defined( RE_IndirectDiffuse )
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b0=`#if defined( USE_POINTS_UV )
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
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
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
#endif`,P0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z0=`#ifdef USE_NORMALMAP
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
#endif`,F0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,H0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J0=`float getShadowMask() {
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
}`,Q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,Mm=`#if DEPTH_PACKING == 3200
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
}`,ym=`#define DISTANCE
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
}`,Sm=`#define DISTANCE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Pm=`#define LAMBERT
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
}`,Dm=`#define MATCAP
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
}`,Lm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define PHONG
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
}`,zm=`#define PHONG
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
}`,Fm=`#define STANDARD
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
}`,Om=`#define STANDARD
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
}`,km=`#define TOON
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
}`,Bm=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Wm=`uniform vec3 color;
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
}`,Xm=`uniform float rotation;
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
}`,qm=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:vp,alphatest_fragment:xp,alphatest_pars_fragment:_p,aomap_fragment:Mp,aomap_pars_fragment:yp,batching_pars_vertex:Sp,batching_vertex:bp,begin_vertex:wp,beginnormal_vertex:Ep,bsdfs:Tp,iridescence_fragment:Ap,bumpmap_pars_fragment:Cp,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Lp,color_fragment:Ip,color_pars_fragment:Up,color_pars_vertex:Np,color_vertex:zp,common:Fp,cube_uv_reflection_fragment:Op,defaultnormal_vertex:kp,displacementmap_pars_vertex:Bp,displacementmap_vertex:Gp,emissivemap_fragment:Vp,emissivemap_pars_fragment:Hp,colorspace_fragment:Wp,colorspace_pars_fragment:Xp,envmap_fragment:qp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:$p,envmap_pars_vertex:jp,envmap_physical_pars_fragment:a0,envmap_vertex:Zp,fog_vertex:Kp,fog_pars_vertex:Jp,fog_fragment:Qp,fog_pars_fragment:t0,gradientmap_pars_fragment:e0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:s0,lights_pars_begin:r0,lights_toon_fragment:o0,lights_toon_pars_fragment:l0,lights_phong_fragment:c0,lights_phong_pars_fragment:h0,lights_physical_fragment:u0,lights_physical_pars_fragment:f0,lights_fragment_begin:d0,lights_fragment_maps:p0,lights_fragment_end:m0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:v0,logdepthbuf_pars_vertex:x0,logdepthbuf_vertex:_0,map_fragment:M0,map_pars_fragment:y0,map_particle_fragment:S0,map_particle_pars_fragment:b0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:E0,morphinstance_vertex:T0,morphcolor_vertex:A0,morphnormal_vertex:C0,morphtarget_pars_vertex:R0,morphtarget_vertex:P0,normal_fragment_begin:D0,normal_fragment_maps:L0,normal_pars_fragment:I0,normal_pars_vertex:U0,normal_vertex:N0,normalmap_pars_fragment:z0,clearcoat_normal_fragment_begin:F0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:k0,iridescence_pars_fragment:B0,opaque_fragment:G0,packing:V0,premultiplied_alpha_fragment:H0,project_vertex:W0,dithering_fragment:X0,dithering_pars_fragment:q0,roughnessmap_fragment:Y0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:Z0,shadowmap_vertex:K0,shadowmask_pars_fragment:J0,skinbase_vertex:Q0,skinning_pars_vertex:tm,skinning_vertex:em,skinnormal_vertex:nm,specularmap_fragment:im,specularmap_pars_fragment:sm,tonemapping_fragment:rm,tonemapping_pars_fragment:am,transmission_fragment:om,transmission_pars_fragment:lm,uv_pars_fragment:cm,uv_pars_vertex:hm,uv_vertex:um,worldpos_vertex:fm,background_vert:dm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:vm,cube_frag:xm,depth_vert:_m,depth_frag:Mm,distanceRGBA_vert:ym,distanceRGBA_frag:Sm,equirect_vert:bm,equirect_frag:wm,linedashed_vert:Em,linedashed_frag:Tm,meshbasic_vert:Am,meshbasic_frag:Cm,meshlambert_vert:Rm,meshlambert_frag:Pm,meshmatcap_vert:Dm,meshmatcap_frag:Lm,meshnormal_vert:Im,meshnormal_frag:Um,meshphong_vert:Nm,meshphong_frag:zm,meshphysical_vert:Fm,meshphysical_frag:Om,meshtoon_vert:km,meshtoon_frag:Bm,points_vert:Gm,points_frag:Vm,shadow_vert:Hm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:qm},Lt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},oi={basic:{uniforms:yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:yn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:yn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:yn([Lt.points,Lt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:yn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:yn([Lt.common,Lt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:yn([Lt.sprite,Lt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:yn([Lt.common,Lt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:yn([Lt.lights,Lt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};oi.physical={uniforms:yn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const ya={r:0,b:0,g:0},ns=new fi,Ym=new be;function $m(i,t,e,n,s,r,a){const o=new Ct(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function v(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function x(y){let S=!1;const g=v(y);g===null?p(o,l):g&&g.isColor&&(p(g,1),S=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const g=v(S);g&&(g.isCubeTexture||g.mapping===Ka)?(u===void 0&&(u=new Zt(new Ln(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:or(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ns.copy(S.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(ns)),u.material.toneMapped=Se.getTransfer(g.colorSpace)!==Ce,(h!==g||f!==g.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,f=g.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Zt(new Vn(2,2),new Ve({name:"BackgroundMaterial",uniforms:or(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Se.getTransfer(g.colorSpace)!==Ce,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=g,f=g.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(ya,$u(i)),n.buffers.color.setClear(ya.r,ya.g,ya.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:m}}function jm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,C,D,B,I){let k=!1;const G=h(B,D,C);r!==G&&(r=G,c(r.object)),k=d(_,B,D,I),k&&v(_,B,D,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,g(_,C,D,B),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,C,D){const B=D.wireframe===!0;let I=n[_.id];I===void 0&&(I={},n[_.id]=I);let k=I[C.id];k===void 0&&(k={},I[C.id]=k);let G=k[B];return G===void 0&&(G=f(l()),k[B]=G),G}function f(_){const C=[],D=[],B=[];for(let I=0;I<e;I++)C[I]=0,D[I]=0,B[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:B,object:_,attributes:{},index:null}}function d(_,C,D,B){const I=r.attributes,k=C.attributes;let G=0;const W=D.getAttributes();for(const F in W)if(W[F].location>=0){const at=I[F];let ct=k[F];if(ct===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(ct=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(ct=_.instanceColor)),at===void 0||at.attribute!==ct||ct&&at.data!==ct.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function v(_,C,D,B){const I={},k=C.attributes;let G=0;const W=D.getAttributes();for(const F in W)if(W[F].location>=0){let at=k[F];at===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(at=_.instanceColor));const ct={};ct.attribute=at,at&&at.data&&(ct.data=at.data),I[F]=ct,G++}r.attributes=I,r.attributesNum=G,r.index=B}function x(){const _=r.newAttributes;for(let C=0,D=_.length;C<D;C++)_[C]=0}function m(_){p(_,0)}function p(_,C){const D=r.newAttributes,B=r.enabledAttributes,I=r.attributeDivisors;D[_]=1,B[_]===0&&(i.enableVertexAttribArray(_),B[_]=1),I[_]!==C&&(i.vertexAttribDivisor(_,C),I[_]=C)}function y(){const _=r.newAttributes,C=r.enabledAttributes;for(let D=0,B=C.length;D<B;D++)C[D]!==_[D]&&(i.disableVertexAttribArray(D),C[D]=0)}function S(_,C,D,B,I,k,G){G===!0?i.vertexAttribIPointer(_,C,D,I,k):i.vertexAttribPointer(_,C,D,B,I,k)}function g(_,C,D,B){x();const I=B.attributes,k=D.getAttributes(),G=C.defaultAttributeValues;for(const W in k){const F=k[W];if(F.location>=0){let K=I[W];if(K===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){const at=K.normalized,ct=K.itemSize,bt=t.get(K);if(bt===void 0)continue;const Yt=bt.buffer,nt=bt.type,ut=bt.bytesPerElement,wt=nt===i.INT||nt===i.UNSIGNED_INT||K.gpuType===uc;if(K.isInterleavedBufferAttribute){const pt=K.data,Ft=pt.stride,Ot=K.offset;if(pt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<F.locationSize;Wt++)p(F.location+Wt,pt.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Wt=0;Wt<F.locationSize;Wt++)m(F.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Wt=0;Wt<F.locationSize;Wt++)S(F.location+Wt,ct/F.locationSize,nt,at,Ft*ut,(Ot+ct/F.locationSize*Wt)*ut,wt)}else{if(K.isInstancedBufferAttribute){for(let pt=0;pt<F.locationSize;pt++)p(F.location+pt,K.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pt=0;pt<F.locationSize;pt++)m(F.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let pt=0;pt<F.locationSize;pt++)S(F.location+pt,ct/F.locationSize,nt,at,ct*ut,ct/F.locationSize*pt*ut,wt)}}else if(G!==void 0){const at=G[W];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(F.location,at);break;case 3:i.vertexAttrib3fv(F.location,at);break;case 4:i.vertexAttrib4fv(F.location,at);break;default:i.vertexAttrib1fv(F.location,at)}}}}y()}function E(){A();for(const _ in n){const C=n[_];for(const D in C){const B=C[D];for(const I in B)u(B[I].object),delete B[I];delete C[D]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const C=n[_.id];for(const D in C){const B=C[D];for(const I in B)u(B[I].object),delete B[I];delete C[D]}delete n[_.id]}function w(_){for(const C in n){const D=n[C];if(D[_.id]===void 0)continue;const B=D[_.id];for(const I in B)u(B[I].object),delete B[I];delete D[_.id]}}function A(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Zm(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let v=0;v<h;v++)d+=u[v];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)a(c[v],u[v],f[v]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x]*f[x];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Km(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==kn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ui&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ti&&!A)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=v>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:g,vertexTextures:E,maxSamples:T}}function Jm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new as,o=new ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,S=y*4;let g=p.clippingState||null;l.value=g,g=u(v,f,S,d);for(let E=0;E!==S;++E)g[E]=e[E];p.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const p=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,g=d;S!==x;++S,g+=4)a.copy(h[S]).applyMatrix4(y,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Qm(i){let t=new WeakMap;function e(a,o){return o===gl?a.mapping=rr:o===vl&&(a.mapping=ar),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===gl||o===vl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hp(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Sc extends ju{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ys=4,gh=[.125,.215,.35,.446,.526,.582],ls=20,No=new Sc,vh=new Ct;let zo=null,Fo=0,Oo=0,ko=!1;const os=(1+Math.sqrt(5))/2,Gs=1/os,xh=[new O(-os,Gs,0),new O(os,Gs,0),new O(-Gs,0,os),new O(Gs,0,os),new O(0,os,-Gs),new O(0,os,Gs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class _h{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){zo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zo,Fo,Oo),this._renderer.xr.enabled=ko,t.scissorTest=!1,Sa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:li,minFilter:li,generateMipmaps:!1,type:Bn,format:kn,colorSpace:dr,depthBuffer:!1},s=Mh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tg(r)),this._blurMaterial=eg(r,t,e)}return s}_compileMaterial(t){const e=new Zt(this._lodPlanes[0],t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,n,s){const o=new In(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(vh),u.toneMapping=Yi,u.autoClear=!1;const d=new Ee({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),v=new Zt(new Ln,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(vh),x=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;Sa(s,y*S,p>2?S:0,S,S),u.setRenderTarget(s),x&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===rr||t.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Zt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Sa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,No)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xh[(s-r-1)%xh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Zt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ls-1),x=r/v,m=isFinite(r)?1+Math.floor(u*x):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const p=[];let y=0;for(let w=0;w<ls;++w){const A=w/x,M=Math.exp(-A*A/2);p.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const g=this._sizeLods[s],E=3*g*(s>S-Ys?s-S+Ys:0),T=4*(this._cubeSize-g);Sa(e,E,T,3*g,2*g),l.setRenderTarget(e),l.render(h,No)}}function tg(i){const t=[],e=[],n=[];let s=i;const r=i-Ys+1+gh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ys?l=gh[a-i+Ys-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,v=6,x=3,m=2,p=1,y=new Float32Array(x*v*d),S=new Float32Array(m*v*d),g=new Float32Array(p*v*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,A=T>2?0:-1,M=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];y.set(M,x*v*T),S.set(f,m*v*T);const _=[T,T,T,T,T,T];g.set(_,p*v*T)}const E=new Pe;E.setAttribute("position",new ze(y,x)),E.setAttribute("uv",new ze(S,m)),E.setAttribute("faceIndex",new ze(g,p)),t.push(E),s>Ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mh(i,t,e){const n=new An(i,t,e);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function eg(i,t,e){const n=new Float32Array(ls),s=new O(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function yh(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function Sh(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}function ng(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===gl||l===vl,u=l===rr||l===ar;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new _h(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new _h(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ig(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sg(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const v in d){const x=d[v];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,v=h.attributes.position;let x=0;if(d!==null){const y=d.array;x=d.version;for(let S=0,g=y.length;S<g;S+=3){const E=y[S+0],T=y[S+1],w=y[S+2];f.push(E,T,T,w,w,E)}}else if(v!==void 0){const y=v.array;x=v.version;for(let S=0,g=y.length/3-1;S<g;S+=3){const E=S+0,T=S+1,w=S+2;f.push(E,T,T,w,w,E)}}else return;const m=new(Vu(f)?Yu:qu)(f,1);m.version=x;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function rg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,v){v!==0&&(i.drawElementsInstanced(n,d,r,f*a,v),e.update(d,n,v))}function u(f,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=d[p];e.update(m,n,1)}function h(f,d,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,v);let p=0;for(let y=0;y<v;y++)p+=d[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ag(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function og(i,t,e){const n=new WeakMap,s=new De;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let _=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let g=0;v===!0&&(g=1),x===!0&&(g=2),m===!0&&(g=3);let E=o.attributes.position.count*g,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const w=new Float32Array(E*T*4*h),A=new Wu(w,E,T,h);A.type=ti,A.needsUpdate=!0;const M=g*4;for(let C=0;C<h;C++){const D=p[C],B=y[C],I=S[C],k=E*T*4*C;for(let G=0;G<D.count;G++){const W=G*M;v===!0&&(s.fromBufferAttribute(D,G),w[k+W+0]=s.x,w[k+W+1]=s.y,w[k+W+2]=s.z,w[k+W+3]=0),x===!0&&(s.fromBufferAttribute(B,G),w[k+W+4]=s.x,w[k+W+5]=s.y,w[k+W+6]=s.z,w[k+W+7]=0),m===!0&&(s.fromBufferAttribute(I,G),w[k+W+8]=s.x,w[k+W+9]=s.y,w[k+W+10]=s.z,w[k+W+11]=I.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new Et(E,T)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function lg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class wc extends vn{constructor(t,e,n,s,r,a,o,l,c,u=js){if(u!==js&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===js&&(n=gs),n===void 0&&u===xs&&(n=vs),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ju=new vn,bh=new wc(1,1),Qu=new Wu,tf=new jd,ef=new Zu,wh=[],Eh=[],Th=new Float32Array(16),Ah=new Float32Array(9),Ch=new Float32Array(4);function gr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=wh[s];if(r===void 0&&(r=new Float32Array(s),wh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function to(i,t){let e=Eh[t];e===void 0&&(e=new Int32Array(t),Eh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Ch.set(n),i.uniformMatrix2fv(this.addr,!1,Ch),en(e,n)}}function pg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),en(e,n)}}function mg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Th.set(n),i.uniformMatrix4fv(this.addr,!1,Th),en(e,n)}}function gg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function Mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function wg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bh.compareFunction=Gu,r=bh):r=Ju,e.setTexture2D(t||r,s)}function Eg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||tf,s)}function Tg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ef,s)}function Ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qu,s)}function Cg(i){switch(i){case 5126:return cg;case 35664:return hg;case 35665:return ug;case 35666:return fg;case 35674:return dg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return vg;case 35668:case 35672:return xg;case 35669:case 35673:return _g;case 5125:return Mg;case 36294:return yg;case 36295:return Sg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Rg(i,t){i.uniform1fv(this.addr,t)}function Pg(i,t){const e=gr(t,this.size,2);i.uniform2fv(this.addr,e)}function Dg(i,t){const e=gr(t,this.size,3);i.uniform3fv(this.addr,e)}function Lg(i,t){const e=gr(t,this.size,4);i.uniform4fv(this.addr,e)}function Ig(i,t){const e=gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ug(i,t){const e=gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ng(i,t){const e=gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zg(i,t){i.uniform1iv(this.addr,t)}function Fg(i,t){i.uniform2iv(this.addr,t)}function Og(i,t){i.uniform3iv(this.addr,t)}function kg(i,t){i.uniform4iv(this.addr,t)}function Bg(i,t){i.uniform1uiv(this.addr,t)}function Gg(i,t){i.uniform2uiv(this.addr,t)}function Vg(i,t){i.uniform3uiv(this.addr,t)}function Hg(i,t){i.uniform4uiv(this.addr,t)}function Wg(i,t,e){const n=this.cache,s=t.length,r=to(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ju,r[a])}function Xg(i,t,e){const n=this.cache,s=t.length,r=to(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||tf,r[a])}function qg(i,t,e){const n=this.cache,s=t.length,r=to(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ef,r[a])}function Yg(i,t,e){const n=this.cache,s=t.length,r=to(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qu,r[a])}function $g(i){switch(i){case 5126:return Rg;case 35664:return Pg;case 35665:return Dg;case 35666:return Lg;case 35674:return Ig;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return zg;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return kg;case 5125:return Bg;case 36294:return Gg;case 36295:return Vg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}class jg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cg(e.type)}}class Zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$g(e.type)}}class Kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Rh(i,t){i.seq.push(t),i.map[t.id]=t}function Jg(i,t,e){const n=i.name,s=n.length;for(Bo.lastIndex=0;;){const r=Bo.exec(n),a=Bo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rh(e,c===void 0?new jg(o,i,t):new Zg(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Kg(o),Rh(e,h)),e=h}}}class Wa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Jg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ph(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qg=37297;let tv=0;function ev(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Dh=new ue;function nv(i){Se._getMatrix(Dh,Se.workingColorSpace,i);const t=`mat3( ${Dh.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(i)){case Qa:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ev(i.getShaderSource(t),a)}else return s}function iv(i,t){const e=nv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sv(i,t){let e;switch(t){case Tu:e="Linear";break;case Au:e="Reinhard";break;case Cu:e="Cineon";break;case hc:e="ACESFilmic";break;case Ru:e="AgX";break;case Pu:e="Neutral";break;case dd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ba=new O;function rv(){Se.getLuminanceCoefficients(ba);const i=ba.x.toFixed(4),t=ba.y.toFixed(4),e=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function ov(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Rr(i){return i!==""}function Ih(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(i){return i.replace(cv,uv)}const hv=new Map;function uv(i,t){let e=fe[t];if(e===void 0){const n=hv.get(t);if(n!==void 0)e=fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xl(e)}const fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(i){return i.replace(fv,dv)}function dv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function pv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function mv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rr:case ar:t="ENVMAP_TYPE_CUBE";break;case Ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:t="ENVMAP_MODE_REFRACTION";break}return t}function vv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case ud:t="ENVMAP_BLENDING_MIX";break;case fd:t="ENVMAP_BLENDING_ADD";break}return t}function xv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function _v(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=pv(e),c=mv(e),u=gv(e),h=vv(e),f=xv(e),d=av(e),v=ov(r),x=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Rr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(m=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yi?"#define TONE_MAPPING":"",e.toneMapping!==Yi?fe.tonemapping_pars_fragment:"",e.toneMapping!==Yi?sv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,iv("linearToOutputTexel",e.outputColorSpace),rv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),a=Xl(a),a=Ih(a,e),a=Uh(a,e),o=Xl(o),o=Ih(o,e),o=Uh(o,e),a=Nh(a),o=Nh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+a,g=y+p+o,E=Ph(s,s.VERTEX_SHADER,S),T=Ph(s,s.FRAGMENT_SHADER,g);s.attachShader(x,E),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(C){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(E).trim(),I=s.getShaderInfoLog(T).trim();let k=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,T);else{const W=Lh(s,E,"vertex"),F=Lh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+W+`
`+F)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(B===""||I==="")&&(G=!1);G&&(C.diagnostics={runnable:k,programLog:D,vertexShader:{log:B,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(E),s.deleteShader(T),A=new Wa(s,x),M=lv(s,x)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,Qg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}let Mv=0;class yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sv(t),e.set(t,n)),n}}class Sv{constructor(t){this.id=Mv++,this.code=t,this.usedTimes=0}}function bv(i,t,e,n,s,r,a){const o=new Mc,l=new yv,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,C,D,B){const I=D.fog,k=B.geometry,G=M.isMeshStandardMaterial?D.environment:null,W=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),F=W&&W.mapping===Ka?W.image.height:null,K=v[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const at=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ct=at!==void 0?at.length:0;let bt=0;k.morphAttributes.position!==void 0&&(bt=1),k.morphAttributes.normal!==void 0&&(bt=2),k.morphAttributes.color!==void 0&&(bt=3);let Yt,nt,ut,wt;if(K){const Gt=oi[K];Yt=Gt.vertexShader,nt=Gt.fragmentShader}else Yt=M.vertexShader,nt=M.fragmentShader,l.update(M),ut=l.getVertexShaderID(M),wt=l.getFragmentShaderID(M);const pt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),Ot=B.isInstancedMesh===!0,Wt=B.isBatchedMesh===!0,te=!!M.map,ee=!!M.matcap,ge=!!W,X=!!M.aoMap,Ie=!!M.lightMap,ie=!!M.bumpMap,Qt=!!M.normalMap,Ht=!!M.displacementMap,de=!!M.emissiveMap,$=!!M.metalnessMap,R=!!M.roughnessMap,b=M.anisotropy>0,V=M.clearcoat>0,J=M.dispersion>0,tt=M.iridescence>0,et=M.sheen>0,yt=M.transmission>0,vt=b&&!!M.anisotropyMap,St=V&&!!M.clearcoatMap,Kt=V&&!!M.clearcoatNormalMap,_t=V&&!!M.clearcoatRoughnessMap,Nt=tt&&!!M.iridescenceMap,$t=tt&&!!M.iridescenceThicknessMap,jt=et&&!!M.sheenColorMap,kt=et&&!!M.sheenRoughnessMap,he=!!M.specularMap,Jt=!!M.specularColorMap,pe=!!M.specularIntensityMap,H=yt&&!!M.transmissionMap,At=yt&&!!M.thicknessMap,rt=!!M.gradientMap,ft=!!M.alphaMap,Dt=M.alphaTest>0,Rt=!!M.alphaHash,N=!!M.extensions;let lt=Yi;M.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(lt=i.toneMapping);const Pt={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:Yt,fragmentShader:nt,defines:M.defines,customVertexShaderID:ut,customFragmentShaderID:wt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Wt,batchingColor:Wt&&B._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&B.instanceColor!==null,instancingMorph:Ot&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:dr,alphaToCoverage:!!M.alphaToCoverage,map:te,matcap:ee,envMap:ge,envMapMode:ge&&W.mapping,envMapCubeUVHeight:F,aoMap:X,lightMap:Ie,bumpMap:ie,normalMap:Qt,displacementMap:f&&Ht,emissiveMap:de,normalMapObjectSpace:Qt&&M.normalMapType===vd,normalMapTangentSpace:Qt&&M.normalMapType===vc,metalnessMap:$,roughnessMap:R,anisotropy:b,anisotropyMap:vt,clearcoat:V,clearcoatMap:St,clearcoatNormalMap:Kt,clearcoatRoughnessMap:_t,dispersion:J,iridescence:tt,iridescenceMap:Nt,iridescenceThicknessMap:$t,sheen:et,sheenColorMap:jt,sheenRoughnessMap:kt,specularMap:he,specularColorMap:Jt,specularIntensityMap:pe,transmission:yt,transmissionMap:H,thicknessMap:At,gradientMap:rt,opaque:M.transparent===!1&&M.blending===qi&&M.alphaToCoverage===!1,alphaMap:ft,alphaTest:Dt,alphaHash:Rt,combine:M.combine,mapUv:te&&x(M.map.channel),aoMapUv:X&&x(M.aoMap.channel),lightMapUv:Ie&&x(M.lightMap.channel),bumpMapUv:ie&&x(M.bumpMap.channel),normalMapUv:Qt&&x(M.normalMap.channel),displacementMapUv:Ht&&x(M.displacementMap.channel),emissiveMapUv:de&&x(M.emissiveMap.channel),metalnessMapUv:$&&x(M.metalnessMap.channel),roughnessMapUv:R&&x(M.roughnessMap.channel),anisotropyMapUv:vt&&x(M.anisotropyMap.channel),clearcoatMapUv:St&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:kt&&x(M.sheenRoughnessMap.channel),specularMapUv:he&&x(M.specularMap.channel),specularColorMapUv:Jt&&x(M.specularColorMap.channel),specularIntensityMapUv:pe&&x(M.specularIntensityMap.channel),transmissionMapUv:H&&x(M.transmissionMap.channel),thicknessMapUv:At&&x(M.thicknessMap.channel),alphaMapUv:ft&&x(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Qt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(te||ft),fog:!!I,useFog:M.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ft,skinning:B.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:bt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,decodeVideoTexture:te&&M.map.isVideoTexture===!0&&Se.getTransfer(M.map.colorSpace)===Ce,decodeVideoTextureEmissive:de&&M.emissiveMap.isVideoTexture===!0&&Se.getTransfer(M.emissiveMap.colorSpace)===Ce,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===$e,flipSided:M.side===wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:N&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(N&&M.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)_.push(C),_.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(y(_,M),S(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function y(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function S(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function g(M){const _=v[M.type];let C;if(_){const D=oi[_];C=Jn.clone(D.uniforms)}else C=M.uniforms;return C}function E(M,_){let C;for(let D=0,B=u.length;D<B;D++){const I=u[D];if(I.cacheKey===_){C=I,++C.usedTimes;break}}return C===void 0&&(C=new _v(i,_,M,r),u.push(C)),C}function T(M){if(--M.usedTimes===0){const _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:g,acquireProgram:E,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:A}}function wv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ev(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Oh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,d,v,x,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=x,p.group=m),t++,p}function o(h,f,d,v,x,m){const p=a(h,f,d,v,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,v,x,m){const p=a(h,f,d,v,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||Ev),n.length>1&&n.sort(f||Fh),s.length>1&&s.sort(f||Fh)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Tv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Oh,i.set(n,[a])):s>=r.length?(a=new Oh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Av(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Ct};break;case"SpotLight":e={position:new O,direction:new O,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Cv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Rv=0;function Pv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dv(i){const t=new Av,e=Cv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new be,a=new be;function o(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,v=0,x=0,m=0,p=0,y=0,S=0,g=0,E=0,T=0,w=0;c.sort(Pv);for(let M=0,_=c.length;M<_;M++){const C=c[M],D=C.color,B=C.intensity,I=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=D.r*B,h+=D.g*B,f+=D.b*B;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],B);w++}else if(C.isDirectionalLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,F=e.get(C);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,n.directionalShadow[d]=F,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=C.shadow.matrix,y++}n.directional[d]=G,d++}else if(C.isSpotLight){const G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(D).multiplyScalar(B),G.distance=I,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[x]=G;const W=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,W.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[x]=W.matrix,C.castShadow){const F=e.get(C);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,n.spotShadow[x]=F,n.spotShadowMap[x]=k,g++}x++}else if(C.isRectAreaLight){const G=t.get(C);G.color.copy(D).multiplyScalar(B),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const W=C.shadow,F=e.get(C);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,F.shadowCameraNear=W.camera.near,F.shadowCameraFar=W.camera.far,n.pointShadow[v]=F,n.pointShadowMap[v]=k,n.pointShadowMatrix[v]=C.shadow.matrix,S++}n.point[v]=G,v++}else if(C.isHemisphereLight){const G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(B),G.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==d||A.pointLength!==v||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==S||A.numSpotShadows!==g||A.numSpotMaps!==E||A.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=g+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,A.directionalLength=d,A.pointLength=v,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=S,A.numSpotShadows=g,A.numSpotMaps=E,A.numLightProbes=w,n.version=Rv++)}function l(c,u){let h=0,f=0,d=0,v=0,x=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const g=n.directional[h];g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),h++}else if(S.isSpotLight){const g=n.spot[d];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const g=n.rectArea[v];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(S.width*.5,0,0),g.halfHeight.set(0,S.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const g=n.point[f];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const g=n.hemi[x];g.direction.setFromMatrixPosition(S.matrixWorld),g.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function kh(i){const t=new Dv(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Lv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new kh(i),t.set(s,[o])):r>=a.length?(o=new kh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Iv extends bs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Uv extends bs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zv=`uniform sampler2D shadow_pass;
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
}`;function Fv(i,t,e){let n=new yc;const s=new Et,r=new Et,a=new De,o=new Iv({depthPacking:gd}),l=new Uv,c={},u=e.maxTextureSize,h={[ji]:wn,[wn]:ji,[$e]:$e},f=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Nv,fragmentShader:zv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new Pe;v.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Zt(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu;let p=this.type;this.render=function(T,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(on),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=p!==Ei&&this.type===Ei,I=p===Ei&&this.type!==Ei;for(let k=0,G=T.length;k<G;k++){const W=T[k],F=W.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const K=F.getFrameExtents();if(s.multiply(K),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,F.mapSize.y=r.y)),F.map===null||B===!0||I===!0){const ct=this.type!==Ei?{minFilter:gn,magFilter:gn}:{};F.map!==null&&F.map.dispose(),F.map=new An(s.x,s.y,ct),F.map.texture.name=W.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const at=F.getViewportCount();for(let ct=0;ct<at;ct++){const bt=F.getViewport(ct);a.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),D.viewport(a),F.updateMatrices(W,ct),n=F.getFrustum(),g(w,A,F.camera,W,this.type)}F.isPointLightShadow!==!0&&this.type===Ei&&y(F,A),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,C)};function y(T,w){const A=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new An(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,A,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,A,d,x,null)}function S(T,w,A,M){let _=null;const C=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)_=C;else if(_=A.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const D=_.uuid,B=w.uuid;let I=c[D];I===void 0&&(I={},c[D]=I);let k=I[B];k===void 0&&(k=_.clone(),I[B]=k,w.addEventListener("dispose",E)),_=k}if(_.visible=w.visible,_.wireframe=w.wireframe,M===Ei?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:h[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const D=i.properties.get(_);D.light=A}return _}function g(T,w,A,M,_){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Ei)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const B=t.update(T),I=T.material;if(Array.isArray(I)){const k=B.groups;for(let G=0,W=k.length;G<W;G++){const F=k[G],K=I[F.materialIndex];if(K&&K.visible){const at=S(T,K,M,_);T.onBeforeShadow(i,T,w,A,B,at,F),i.renderBufferDirect(A,null,B,at,T,F),T.onAfterShadow(i,T,w,A,B,at,F)}}}else if(I.visible){const k=S(T,I,M,_);T.onBeforeShadow(i,T,w,A,B,k,null),i.renderBufferDirect(A,null,B,k,T,null),T.onAfterShadow(i,T,w,A,B,k,null)}}const D=T.children;for(let B=0,I=D.length;B<I;B++)g(D[B],w,A,M,_)}function E(T){T.target.removeEventListener("dispose",E);for(const A in c){const M=c[A],_=T.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const Ov={[cl]:hl,[ul]:pl,[fl]:ml,[sr]:dl,[hl]:cl,[pl]:ul,[ml]:fl,[dl]:sr};function kv(i,t){function e(){let H=!1;const At=new De;let rt=null;const ft=new De(0,0,0,0);return{setMask:function(Dt){rt!==Dt&&!H&&(i.colorMask(Dt,Dt,Dt,Dt),rt=Dt)},setLocked:function(Dt){H=Dt},setClear:function(Dt,Rt,N,lt,Pt){Pt===!0&&(Dt*=lt,Rt*=lt,N*=lt),At.set(Dt,Rt,N,lt),ft.equals(At)===!1&&(i.clearColor(Dt,Rt,N,lt),ft.copy(At))},reset:function(){H=!1,rt=null,ft.set(-1,0,0,0)}}}function n(){let H=!1,At=!1,rt=null,ft=null,Dt=null;return{setReversed:function(Rt){if(At!==Rt){const N=t.get("EXT_clip_control");At?N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT):N.clipControlEXT(N.LOWER_LEFT_EXT,N.NEGATIVE_ONE_TO_ONE_EXT);const lt=Dt;Dt=null,this.setClear(lt)}At=Rt},getReversed:function(){return At},setTest:function(Rt){Rt?pt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(Rt){rt!==Rt&&!H&&(i.depthMask(Rt),rt=Rt)},setFunc:function(Rt){if(At&&(Rt=Ov[Rt]),ft!==Rt){switch(Rt){case cl:i.depthFunc(i.NEVER);break;case hl:i.depthFunc(i.ALWAYS);break;case ul:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case fl:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case pl:i.depthFunc(i.GREATER);break;case ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Rt}},setLocked:function(Rt){H=Rt},setClear:function(Rt){Dt!==Rt&&(At&&(Rt=1-Rt),i.clearDepth(Rt),Dt=Rt)},reset:function(){H=!1,rt=null,ft=null,Dt=null,At=!1}}}function s(){let H=!1,At=null,rt=null,ft=null,Dt=null,Rt=null,N=null,lt=null,Pt=null;return{setTest:function(Gt){H||(Gt?pt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(Gt){At!==Gt&&!H&&(i.stencilMask(Gt),At=Gt)},setFunc:function(Gt,_e,ne){(rt!==Gt||ft!==_e||Dt!==ne)&&(i.stencilFunc(Gt,_e,ne),rt=Gt,ft=_e,Dt=ne)},setOp:function(Gt,_e,ne){(Rt!==Gt||N!==_e||lt!==ne)&&(i.stencilOp(Gt,_e,ne),Rt=Gt,N=_e,lt=ne)},setLocked:function(Gt){H=Gt},setClear:function(Gt){Pt!==Gt&&(i.clearStencil(Gt),Pt=Gt)},reset:function(){H=!1,At=null,rt=null,ft=null,Dt=null,Rt=null,N=null,lt=null,Pt=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],v=null,x=!1,m=null,p=null,y=null,S=null,g=null,E=null,T=null,w=new Ct(0,0,0),A=0,M=!1,_=null,C=null,D=null,B=null,I=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),G=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),G=W>=2);let K=null,at={};const ct=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),Yt=new De().fromArray(ct),nt=new De().fromArray(bt);function ut(H,At,rt,ft){const Dt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(H,Rt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let N=0;N<rt;N++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(At+N,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return Rt}const wt={};wt[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),a.setFunc(sr),ie(!1),Qt(Vc),pt(i.CULL_FACE),X(on);function pt(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function Ft(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function Ot(H,At){return h[H]!==At?(i.bindFramebuffer(H,At),h[H]=At,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=At),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=At),!0):!1}function Wt(H,At){let rt=d,ft=!1;if(H){rt=f.get(At),rt===void 0&&(rt=[],f.set(At,rt));const Dt=H.textures;if(rt.length!==Dt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,N=Dt.length;Rt<N;Rt++)rt[Rt]=i.COLOR_ATTACHMENT0+Rt;rt.length=Dt.length,ft=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,ft=!0);ft&&i.drawBuffers(rt)}function te(H){return v!==H?(i.useProgram(H),v=H,!0):!1}const ee={[Zn]:i.FUNC_ADD,[Kf]:i.FUNC_SUBTRACT,[Jf]:i.FUNC_REVERSE_SUBTRACT};ee[Qf]=i.MIN,ee[td]=i.MAX;const ge={[Ar]:i.ZERO,[ed]:i.ONE,[nd]:i.SRC_COLOR,[rl]:i.SRC_ALPHA,[ad]:i.SRC_ALPHA_SATURATE,[ll]:i.DST_COLOR,[ol]:i.DST_ALPHA,[id]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[rd]:i.ONE_MINUS_DST_COLOR,[sd]:i.ONE_MINUS_DST_ALPHA,[od]:i.CONSTANT_COLOR,[ld]:i.ONE_MINUS_CONSTANT_COLOR,[cd]:i.CONSTANT_ALPHA,[hd]:i.ONE_MINUS_CONSTANT_ALPHA};function X(H,At,rt,ft,Dt,Rt,N,lt,Pt,Gt){if(H===on){x===!0&&(Ft(i.BLEND),x=!1);return}if(x===!1&&(pt(i.BLEND),x=!0),H!==Eu){if(H!==m||Gt!==M){if((p!==Zn||g!==Zn)&&(i.blendEquation(i.FUNC_ADD),p=Zn,g=Zn),Gt)switch(H){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ei:i.blendFunc(i.ONE,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ei:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,S=null,E=null,T=null,w.set(0,0,0),A=0,m=H,M=Gt}return}Dt=Dt||At,Rt=Rt||rt,N=N||ft,(At!==p||Dt!==g)&&(i.blendEquationSeparate(ee[At],ee[Dt]),p=At,g=Dt),(rt!==y||ft!==S||Rt!==E||N!==T)&&(i.blendFuncSeparate(ge[rt],ge[ft],ge[Rt],ge[N]),y=rt,S=ft,E=Rt,T=N),(lt.equals(w)===!1||Pt!==A)&&(i.blendColor(lt.r,lt.g,lt.b,Pt),w.copy(lt),A=Pt),m=H,M=!1}function Ie(H,At){H.side===$e?Ft(i.CULL_FACE):pt(i.CULL_FACE);let rt=H.side===wn;At&&(rt=!rt),ie(rt),H.blending===qi&&H.transparent===!1?X(on):X(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const ft=H.stencilWrite;o.setTest(ft),ft&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),de(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(H){_!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),_=H)}function Qt(H){H!==jf?(pt(i.CULL_FACE),H!==C&&(H===Vc?i.cullFace(i.BACK):H===Zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),C=H}function Ht(H){H!==D&&(G&&i.lineWidth(H),D=H)}function de(H,At,rt){H?(pt(i.POLYGON_OFFSET_FILL),(B!==At||I!==rt)&&(i.polygonOffset(At,rt),B=At,I=rt)):Ft(i.POLYGON_OFFSET_FILL)}function $(H){H?pt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function R(H){H===void 0&&(H=i.TEXTURE0+k-1),K!==H&&(i.activeTexture(H),K=H)}function b(H,At,rt){rt===void 0&&(K===null?rt=i.TEXTURE0+k-1:rt=K);let ft=at[rt];ft===void 0&&(ft={type:void 0,texture:void 0},at[rt]=ft),(ft.type!==H||ft.texture!==At)&&(K!==rt&&(i.activeTexture(rt),K=rt),i.bindTexture(H,At||wt[H]),ft.type=H,ft.texture=At)}function V(){const H=at[K];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _t(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Nt(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $t(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function jt(H){Yt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Yt.copy(H))}function kt(H){nt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),nt.copy(H))}function he(H,At){let rt=c.get(At);rt===void 0&&(rt=new WeakMap,c.set(At,rt));let ft=rt.get(H);ft===void 0&&(ft=i.getUniformBlockIndex(At,H.name),rt.set(H,ft))}function Jt(H,At){const ft=c.get(At).get(H);l.get(At)!==ft&&(i.uniformBlockBinding(At,ft,H.__bindingPointIndex),l.set(At,ft))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,at={},h={},f=new WeakMap,d=[],v=null,x=!1,m=null,p=null,y=null,S=null,g=null,E=null,T=null,w=new Ct(0,0,0),A=0,M=!1,_=null,C=null,D=null,B=null,I=null,Yt.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pt,disable:Ft,bindFramebuffer:Ot,drawBuffers:Wt,useProgram:te,setBlending:X,setMaterial:Ie,setFlipSided:ie,setCullFace:Qt,setLineWidth:Ht,setPolygonOffset:de,setScissorTest:$,activeTexture:R,bindTexture:b,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:Nt,texImage3D:$t,updateUBOMapping:he,uniformBlockBinding:Jt,texStorage2D:Kt,texStorage3D:_t,texSubImage2D:et,texSubImage3D:yt,compressedTexSubImage2D:vt,compressedTexSubImage3D:St,scissor:jt,viewport:kt,reset:pe}}function Bh(i,t,e,n){const s=Bv(n);switch(e){case Nu:return i*t;case Fu:return i*t;case Ou:return i*t*2;case Ja:return i*t/s.components*s.byteLength;case pc:return i*t/s.components*s.byteLength;case ku:return i*t*2/s.components*s.byteLength;case mc:return i*t*2/s.components*s.byteLength;case zu:return i*t*3/s.components*s.byteLength;case kn:return i*t*4/s.components*s.byteLength;case gc:return i*t*4/s.components*s.byteLength;case ka:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ml:case Sl:return Math.max(i,16)*Math.max(t,8)/4;case _l:case yl:return Math.max(i,8)*Math.max(t,8)/2;case bl:case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ha:case Bl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bu:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bv(i){switch(i){case ui:case Lu:return{byteLength:1,components:1};case kr:case Iu:case Bn:return{byteLength:2,components:1};case fc:case dc:return{byteLength:2,components:4};case gs:case uc:case ti:return{byteLength:4,components:1};case Uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Gv(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,b){return d?new OffscreenCanvas(R,b):$a("canvas")}function x(R,b,V){let J=1;const tt=$(R);if((tt.width>V||tt.height>V)&&(J=V/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const et=Math.floor(J*tt.width),yt=Math.floor(J*tt.height);h===void 0&&(h=v(et,yt));const vt=b?v(et,yt):h;return vt.width=et,vt.height=yt,vt.getContext("2d").drawImage(R,0,0,et,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+et+"x"+yt+")."),vt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,b,V,J,tt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=b;if(b===i.RED&&(V===i.FLOAT&&(et=i.R32F),V===i.HALF_FLOAT&&(et=i.R16F),V===i.UNSIGNED_BYTE&&(et=i.R8)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.R8UI),V===i.UNSIGNED_SHORT&&(et=i.R16UI),V===i.UNSIGNED_INT&&(et=i.R32UI),V===i.BYTE&&(et=i.R8I),V===i.SHORT&&(et=i.R16I),V===i.INT&&(et=i.R32I)),b===i.RG&&(V===i.FLOAT&&(et=i.RG32F),V===i.HALF_FLOAT&&(et=i.RG16F),V===i.UNSIGNED_BYTE&&(et=i.RG8)),b===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RG8UI),V===i.UNSIGNED_SHORT&&(et=i.RG16UI),V===i.UNSIGNED_INT&&(et=i.RG32UI),V===i.BYTE&&(et=i.RG8I),V===i.SHORT&&(et=i.RG16I),V===i.INT&&(et=i.RG32I)),b===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RGB8UI),V===i.UNSIGNED_SHORT&&(et=i.RGB16UI),V===i.UNSIGNED_INT&&(et=i.RGB32UI),V===i.BYTE&&(et=i.RGB8I),V===i.SHORT&&(et=i.RGB16I),V===i.INT&&(et=i.RGB32I)),b===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),V===i.UNSIGNED_INT&&(et=i.RGBA32UI),V===i.BYTE&&(et=i.RGBA8I),V===i.SHORT&&(et=i.RGBA16I),V===i.INT&&(et=i.RGBA32I)),b===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),b===i.RGBA){const yt=tt?Qa:Se.getTransfer(J);V===i.FLOAT&&(et=i.RGBA32F),V===i.HALF_FLOAT&&(et=i.RGBA16F),V===i.UNSIGNED_BYTE&&(et=yt===Ce?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function g(R,b){let V;return R?b===null||b===gs||b===vs?V=i.DEPTH24_STENCIL8:b===ti?V=i.DEPTH32F_STENCIL8:b===kr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===gs||b===vs?V=i.DEPTH_COMPONENT24:b===ti?V=i.DEPTH_COMPONENT32F:b===kr&&(V=i.DEPTH_COMPONENT16),V}function E(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==li?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){const b=R.target;b.removeEventListener("dispose",T),A(b),b.isVideoTexture&&u.delete(b)}function w(R){const b=R.target;b.removeEventListener("dispose",w),_(b)}function A(R){const b=n.get(R);if(b.__webglInit===void 0)return;const V=R.source,J=f.get(V);if(J){const tt=J[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(R),Object.keys(J).length===0&&f.delete(V)}n.remove(R)}function M(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const V=R.source,J=f.get(V);delete J[b.__cacheKey],a.memory.textures--}function _(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let tt=0;tt<b.__webglFramebuffer[J].length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[J][tt]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=R.textures;for(let J=0,tt=V.length;J<tt;J++){const et=n.get(V[J]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(V[J])}n.remove(R)}let C=0;function D(){C=0}function B(){const R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function I(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function k(R,b){const V=n.get(R);if(R.isVideoTexture&&Ht(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(V,R,b);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function G(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){nt(V,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function W(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){nt(V,R,b);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function F(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){ut(V,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}const K={[Ii]:i.REPEAT,[cs]:i.CLAMP_TO_EDGE,[xl]:i.MIRRORED_REPEAT},at={[gn]:i.NEAREST,[pd]:i.NEAREST_MIPMAP_NEAREST,[ia]:i.NEAREST_MIPMAP_LINEAR,[li]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},ct={[xd]:i.NEVER,[wd]:i.ALWAYS,[_d]:i.LESS,[Gu]:i.LEQUAL,[Md]:i.EQUAL,[bd]:i.GEQUAL,[yd]:i.GREATER,[Sd]:i.NOTEQUAL};function bt(R,b){if(b.type===ti&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===li||b.magFilter===po||b.magFilter===ia||b.magFilter===hs||b.minFilter===li||b.minFilter===po||b.minFilter===ia||b.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,K[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,K[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,K[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,at[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,at[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ct[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===gn||b.minFilter!==ia&&b.minFilter!==hs||b.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Yt(R,b){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",T));const J=b.source;let tt=f.get(J);tt===void 0&&(tt={},f.set(J,tt));const et=I(b);if(et!==R.__cacheKey){tt[et]===void 0&&(tt[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),tt[et].usedTimes++;const yt=tt[R.__cacheKey];yt!==void 0&&(tt[R.__cacheKey].usedTimes--,yt.usedTimes===0&&M(b)),R.__cacheKey=et,R.__webglTexture=tt[et].texture}return V}function nt(R,b,V){let J=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=i.TEXTURE_3D);const tt=Yt(R,b),et=b.source;e.bindTexture(J,R.__webglTexture,i.TEXTURE0+V);const yt=n.get(et);if(et.version!==yt.__version||tt===!0){e.activeTexture(i.TEXTURE0+V);const vt=Se.getPrimaries(Se.workingColorSpace),St=b.colorSpace===Hi?null:Se.getPrimaries(b.colorSpace),Kt=b.colorSpace===Hi||vt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let _t=x(b.image,!1,s.maxTextureSize);_t=de(b,_t);const Nt=r.convert(b.format,b.colorSpace),$t=r.convert(b.type);let jt=S(b.internalFormat,Nt,$t,b.colorSpace,b.isVideoTexture);bt(J,b);let kt;const he=b.mipmaps,Jt=b.isVideoTexture!==!0,pe=yt.__version===void 0||tt===!0,H=et.dataReady,At=E(b,_t);if(b.isDepthTexture)jt=g(b.format===xs,b.type),pe&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,jt,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,jt,_t.width,_t.height,0,Nt,$t,null));else if(b.isDataTexture)if(he.length>0){Jt&&pe&&e.texStorage2D(i.TEXTURE_2D,At,jt,he[0].width,he[0].height);for(let rt=0,ft=he.length;rt<ft;rt++)kt=he[rt],Jt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,kt.width,kt.height,Nt,$t,kt.data):e.texImage2D(i.TEXTURE_2D,rt,jt,kt.width,kt.height,0,Nt,$t,kt.data);b.generateMipmaps=!1}else Jt?(pe&&e.texStorage2D(i.TEXTURE_2D,At,jt,_t.width,_t.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t.width,_t.height,Nt,$t,_t.data)):e.texImage2D(i.TEXTURE_2D,0,jt,_t.width,_t.height,0,Nt,$t,_t.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Jt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,jt,he[0].width,he[0].height,_t.depth);for(let rt=0,ft=he.length;rt<ft;rt++)if(kt=he[rt],b.format!==kn)if(Nt!==null)if(Jt){if(H)if(b.layerUpdates.size>0){const Dt=Bh(kt.width,kt.height,b.format,b.type);for(const Rt of b.layerUpdates){const N=kt.data.subarray(Rt*Dt/kt.data.BYTES_PER_ELEMENT,(Rt+1)*Dt/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Rt,kt.width,kt.height,1,Nt,N)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,kt.width,kt.height,_t.depth,Nt,kt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,jt,kt.width,kt.height,_t.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,kt.width,kt.height,_t.depth,Nt,$t,kt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,jt,kt.width,kt.height,_t.depth,0,Nt,$t,kt.data)}else{Jt&&pe&&e.texStorage2D(i.TEXTURE_2D,At,jt,he[0].width,he[0].height);for(let rt=0,ft=he.length;rt<ft;rt++)kt=he[rt],b.format!==kn?Nt!==null?Jt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,kt.width,kt.height,Nt,kt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,jt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,kt.width,kt.height,Nt,$t,kt.data):e.texImage2D(i.TEXTURE_2D,rt,jt,kt.width,kt.height,0,Nt,$t,kt.data)}else if(b.isDataArrayTexture)if(Jt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,jt,_t.width,_t.height,_t.depth),H)if(b.layerUpdates.size>0){const rt=Bh(_t.width,_t.height,b.format,b.type);for(const ft of b.layerUpdates){const Dt=_t.data.subarray(ft*rt/_t.data.BYTES_PER_ELEMENT,(ft+1)*rt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,_t.width,_t.height,1,Nt,$t,Dt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Nt,$t,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,jt,_t.width,_t.height,_t.depth,0,Nt,$t,_t.data);else if(b.isData3DTexture)Jt?(pe&&e.texStorage3D(i.TEXTURE_3D,At,jt,_t.width,_t.height,_t.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Nt,$t,_t.data)):e.texImage3D(i.TEXTURE_3D,0,jt,_t.width,_t.height,_t.depth,0,Nt,$t,_t.data);else if(b.isFramebufferTexture){if(pe)if(Jt)e.texStorage2D(i.TEXTURE_2D,At,jt,_t.width,_t.height);else{let rt=_t.width,ft=_t.height;for(let Dt=0;Dt<At;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,jt,rt,ft,0,Nt,$t,null),rt>>=1,ft>>=1}}else if(he.length>0){if(Jt&&pe){const rt=$(he[0]);e.texStorage2D(i.TEXTURE_2D,At,jt,rt.width,rt.height)}for(let rt=0,ft=he.length;rt<ft;rt++)kt=he[rt],Jt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Nt,$t,kt):e.texImage2D(i.TEXTURE_2D,rt,jt,Nt,$t,kt);b.generateMipmaps=!1}else if(Jt){if(pe){const rt=$(_t);e.texStorage2D(i.TEXTURE_2D,At,jt,rt.width,rt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Nt,$t,_t)}else e.texImage2D(i.TEXTURE_2D,0,jt,Nt,$t,_t);m(b)&&p(J),yt.__version=et.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ut(R,b,V){if(b.image.length!==6)return;const J=Yt(R,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);const et=n.get(tt);if(tt.version!==et.__version||J===!0){e.activeTexture(i.TEXTURE0+V);const yt=Se.getPrimaries(Se.workingColorSpace),vt=b.colorSpace===Hi?null:Se.getPrimaries(b.colorSpace),St=b.colorSpace===Hi||yt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,_t=b.image[0]&&b.image[0].isDataTexture,Nt=[];for(let ft=0;ft<6;ft++)!Kt&&!_t?Nt[ft]=x(b.image[ft],!0,s.maxCubemapSize):Nt[ft]=_t?b.image[ft].image:b.image[ft],Nt[ft]=de(b,Nt[ft]);const $t=Nt[0],jt=r.convert(b.format,b.colorSpace),kt=r.convert(b.type),he=S(b.internalFormat,jt,kt,b.colorSpace),Jt=b.isVideoTexture!==!0,pe=et.__version===void 0||J===!0,H=tt.dataReady;let At=E(b,$t);bt(i.TEXTURE_CUBE_MAP,b);let rt;if(Kt){Jt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,he,$t.width,$t.height);for(let ft=0;ft<6;ft++){rt=Nt[ft].mipmaps;for(let Dt=0;Dt<rt.length;Dt++){const Rt=rt[Dt];b.format!==kn?jt!==null?Jt?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt,0,0,Rt.width,Rt.height,jt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt,he,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt,0,0,Rt.width,Rt.height,jt,kt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt,he,Rt.width,Rt.height,0,jt,kt,Rt.data)}}}else{if(rt=b.mipmaps,Jt&&pe){rt.length>0&&At++;const ft=$(Nt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,he,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(_t){Jt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Nt[ft].width,Nt[ft].height,jt,kt,Nt[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,he,Nt[ft].width,Nt[ft].height,0,jt,kt,Nt[ft].data);for(let Dt=0;Dt<rt.length;Dt++){const N=rt[Dt].image[ft].image;Jt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt+1,0,0,N.width,N.height,jt,kt,N.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt+1,he,N.width,N.height,0,jt,kt,N.data)}}else{Jt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,jt,kt,Nt[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,he,jt,kt,Nt[ft]);for(let Dt=0;Dt<rt.length;Dt++){const Rt=rt[Dt];Jt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt+1,0,0,jt,kt,Rt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt+1,he,jt,kt,Rt.image[ft])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),et.__version=tt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function wt(R,b,V,J,tt,et){const yt=r.convert(V.format,V.colorSpace),vt=r.convert(V.type),St=S(V.internalFormat,yt,vt,V.colorSpace),Kt=n.get(b),_t=n.get(V);if(_t.__renderTarget=b,!Kt.__hasExternalTextures){const Nt=Math.max(1,b.width>>et),$t=Math.max(1,b.height>>et);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,et,St,Nt,$t,b.depth,0,yt,vt,null):e.texImage2D(tt,et,St,Nt,$t,0,yt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Qt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,tt,_t.__webglTexture,0,ie(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,tt,_t.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(R,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const J=b.depthTexture,tt=J&&J.isDepthTexture?J.type:null,et=g(b.stencilBuffer,tt),yt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=ie(b);Qt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,et,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,et,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,et,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,R)}else{const J=b.textures;for(let tt=0;tt<J.length;tt++){const et=J[tt],yt=r.convert(et.format,et.colorSpace),vt=r.convert(et.type),St=S(et.internalFormat,yt,vt,et.colorSpace),Kt=ie(b);V&&Qt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,St,b.width,b.height):Qt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,St,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,St,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const tt=J.__webglTexture,et=ie(b);if(b.depthTexture.format===js)Qt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(b.depthTexture.format===xs)Qt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Ot(R){const b=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=J}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ft(b.__webglFramebuffer,R)}else if(V){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=i.createRenderbuffer(),pt(b.__webglDepthbuffer[J],R,!1);else{const tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),pt(b.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(R,b,V){const J=n.get(R);b!==void 0&&wt(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ot(R)}function te(R){const b=R.texture,V=n.get(R),J=n.get(b);R.addEventListener("dispose",w);const tt=R.textures,et=R.isWebGLCubeRenderTarget===!0,yt=tt.length>1;if(yt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=b.version,a.memory.textures++),et){V.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[vt]=[];for(let St=0;St<b.mipmaps.length;St++)V.__webglFramebuffer[vt][St]=i.createFramebuffer()}else V.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let vt=0;vt<b.mipmaps.length;vt++)V.__webglFramebuffer[vt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(yt)for(let vt=0,St=tt.length;vt<St;vt++){const Kt=n.get(tt[vt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Qt(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let vt=0;vt<tt.length;vt++){const St=tt[vt];V.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[vt]);const Kt=r.convert(St.format,St.colorSpace),_t=r.convert(St.type),Nt=S(St.internalFormat,Kt,_t,St.colorSpace,R.isXRRenderTarget===!0),$t=ie(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Nt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,V.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),bt(i.TEXTURE_CUBE_MAP,b);for(let vt=0;vt<6;vt++)if(b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)wt(V.__webglFramebuffer[vt][St],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,St);else wt(V.__webglFramebuffer[vt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let vt=0,St=tt.length;vt<St;vt++){const Kt=tt[vt],_t=n.get(Kt);e.bindTexture(i.TEXTURE_2D,_t.__webglTexture),bt(i.TEXTURE_2D,Kt),wt(V.__webglFramebuffer,R,Kt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),m(Kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(vt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,J.__webglTexture),bt(vt,b),b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)wt(V.__webglFramebuffer[St],R,b,i.COLOR_ATTACHMENT0,vt,St);else wt(V.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,vt,0);m(b)&&p(vt),e.unbindTexture()}R.depthBuffer&&Ot(R)}function ee(R){const b=R.textures;for(let V=0,J=b.length;V<J;V++){const tt=b[V];if(m(tt)){const et=y(R),yt=n.get(tt).__webglTexture;e.bindTexture(et,yt),p(et),e.unbindTexture()}}}const ge=[],X=[];function Ie(R){if(R.samples>0){if(Qt(R)===!1){const b=R.textures,V=R.width,J=R.height;let tt=i.COLOR_BUFFER_BIT;const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(R),vt=b.length>1;if(vt)for(let St=0;St<b.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let St=0;St<b.length;St++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);const Kt=n.get(b[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,tt,i.NEAREST),l===!0&&(ge.length=0,X.length=0,ge.push(i.COLOR_ATTACHMENT0+St),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ge.push(et),X.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let St=0;St<b.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);const Kt=n.get(b[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ie(R){return Math.min(s.maxSamples,R.samples)}function Qt(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ht(R){const b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function de(R,b){const V=R.colorSpace,J=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==dr&&V!==Hi&&(Se.getTransfer(V)===Ce?(J!==kn||tt!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function $(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=F,this.rebindTextures=Wt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Qt}function Vv(i,t){function e(n,s=Hi){let r;const a=Se.getTransfer(s);if(n===ui)return i.UNSIGNED_BYTE;if(n===fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return i.BYTE;if(n===Iu)return i.SHORT;if(n===kr)return i.UNSIGNED_SHORT;if(n===uc)return i.INT;if(n===gs)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===Nu)return i.ALPHA;if(n===zu)return i.RGB;if(n===kn)return i.RGBA;if(n===Fu)return i.LUMINANCE;if(n===Ou)return i.LUMINANCE_ALPHA;if(n===js)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Ja)return i.RED;if(n===pc)return i.RED_INTEGER;if(n===ku)return i.RG;if(n===mc)return i.RG_INTEGER;if(n===gc)return i.RGBA_INTEGER;if(n===ka||n===Ba||n===Ga||n===Va)if(a===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===Ml||n===yl||n===Sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bl||n===wl||n===El)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bl||n===wl)return a===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tl||n===Al||n===Cl||n===Rl||n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Nl||n===zl||n===Fl||n===Ol||n===kl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tl)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cl)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ll)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nl)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fl)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kl)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===Bl||n===Gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ha)return a===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bu||n===Vl||n===Hl||n===Wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Hv extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wv={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,v=.005;c.inputState.pinching&&f>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qv=`
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

}`;class Yv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new vn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:Xv,fragmentShader:qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new Vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $v extends pr{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,v=null;const x=new Yv,m=e.getContextAttributes();let p=null,y=null;const S=[],g=[],E=new Et;let T=null;const w=new In;w.viewport=new De;const A=new In;A.viewport=new De;const M=[w,A],_=new Hv;let C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ut=S[nt];return ut===void 0&&(ut=new Go,S[nt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(nt){let ut=S[nt];return ut===void 0&&(ut=new Go,S[nt]=ut),ut.getGripSpace()},this.getHand=function(nt){let ut=S[nt];return ut===void 0&&(ut=new Go,S[nt]=ut),ut.getHandSpace()};function B(nt){const ut=g.indexOf(nt.inputSource);if(ut===-1)return;const wt=S[ut];wt!==void 0&&(wt.update(nt.inputSource,nt.frame,c||a),wt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function I(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",k);for(let nt=0;nt<S.length;nt++){const ut=g[nt];ut!==null&&(g[nt]=null,S[nt].disconnect(ut))}C=null,D=null,x.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,y=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",I),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new An(d.framebufferWidth,d.framebufferHeight,{format:kn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,wt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?xs:js,wt=m.stencil?vs:gs);const Ft={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new An(f.textureWidth,f.textureHeight,{format:kn,type:ui,depthTexture:new wc(f.textureWidth,f.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(nt){for(let ut=0;ut<nt.removed.length;ut++){const wt=nt.removed[ut],pt=g.indexOf(wt);pt>=0&&(g[pt]=null,S[pt].disconnect(wt))}for(let ut=0;ut<nt.added.length;ut++){const wt=nt.added[ut];let pt=g.indexOf(wt);if(pt===-1){for(let Ot=0;Ot<S.length;Ot++)if(Ot>=g.length){g.push(wt),pt=Ot;break}else if(g[Ot]===null){g[Ot]=wt,pt=Ot;break}if(pt===-1)break}const Ft=S[pt];Ft&&Ft.connect(wt)}}const G=new O,W=new O;function F(nt,ut,wt){G.setFromMatrixPosition(ut.matrixWorld),W.setFromMatrixPosition(wt.matrixWorld);const pt=G.distanceTo(W),Ft=ut.projectionMatrix.elements,Ot=wt.projectionMatrix.elements,Wt=Ft[14]/(Ft[10]-1),te=Ft[14]/(Ft[10]+1),ee=(Ft[9]+1)/Ft[5],ge=(Ft[9]-1)/Ft[5],X=(Ft[8]-1)/Ft[0],Ie=(Ot[8]+1)/Ot[0],ie=Wt*X,Qt=Wt*Ie,Ht=pt/(-X+Ie),de=Ht*-X;if(ut.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(de),nt.translateZ(Ht),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ft[10]===-1)nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const $=Wt+Ht,R=te+Ht,b=ie-de,V=Qt+(pt-de),J=ee*te/R*$,tt=ge*te/R*$;nt.projectionMatrix.makePerspective(b,V,J,tt,$,R),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function K(nt,ut){ut===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ut.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ut=nt.near,wt=nt.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),_.near=A.near=w.near=ut,_.far=A.far=w.far=wt,(C!==_.near||D!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,D=_.far),w.layers.mask=nt.layers.mask|2,A.layers.mask=nt.layers.mask|4,_.layers.mask=w.layers.mask|A.layers.mask;const pt=nt.parent,Ft=_.cameras;K(_,pt);for(let Ot=0;Ot<Ft.length;Ot++)K(Ft[Ot],pt);Ft.length===2?F(_,w,A):_.projectionMatrix.copy(w.projectionMatrix),at(nt,_,pt)};function at(nt,ut,wt){wt===null?nt.matrix.copy(ut.matrixWorld):(nt.matrix.copy(wt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ut.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Br*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(nt){l=nt,f!==null&&(f.fixedFoveation=nt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=nt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ct=null;function bt(nt,ut){if(u=ut.getViewerPose(c||a),v=ut,u!==null){const wt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let pt=!1;wt.length!==_.cameras.length&&(_.cameras.length=0,pt=!0);for(let Ot=0;Ot<wt.length;Ot++){const Wt=wt[Ot];let te=null;if(d!==null)te=d.getViewport(Wt);else{const ge=h.getViewSubImage(f,Wt);te=ge.viewport,Ot===0&&(t.setRenderTargetTextures(y,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(y))}let ee=M[Ot];ee===void 0&&(ee=new In,ee.layers.enable(Ot),ee.viewport=new De,M[Ot]=ee),ee.matrix.fromArray(Wt.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Wt.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(te.x,te.y,te.width,te.height),Ot===0&&(_.matrix.copy(ee.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),pt===!0&&_.cameras.push(ee)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Ot=h.getDepthInformation(wt[0]);Ot&&Ot.isValid&&Ot.texture&&x.init(t,Ot,s.renderState)}}for(let wt=0;wt<S.length;wt++){const pt=g[wt],Ft=S[wt];pt!==null&&Ft!==void 0&&Ft.update(pt,ut,c||a)}ct&&ct(nt,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),v=null}const Yt=new Ku;Yt.setAnimationLoop(bt),this.setAnimationLoop=function(nt){ct=nt},this.dispose=function(){}}}const is=new fi,jv=new be;function Zv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$u(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,g){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,g)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),S=y.envMap,g=y.envMapRotation;S&&(m.envMap.value=S,is.copy(g),is.x*=-1,is.y*=-1,is.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(is)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kv(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const g=S.program;n.uniformBlockBinding(y,g)}function c(y,S){let g=s[y.id];g===void 0&&(v(y),g=u(y),s[y.id]=g,y.addEventListener("dispose",m));const E=S.program;n.updateUBOMapping(y,E);const T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function u(y){const S=h();y.__bindingPointIndex=S;const g=i.createBuffer(),E=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,E,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,g),g}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=s[y.id],g=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,w=g.length;T<w;T++){const A=Array.isArray(g[T])?g[T]:[g[T]];for(let M=0,_=A.length;M<_;M++){const C=A[M];if(d(C,T,M,E)===!0){const D=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let I=0;for(let k=0;k<B.length;k++){const G=B[k],W=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,D+I,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,I),I+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,S,g,E){const T=y.value,w=S+"_"+g;if(E[w]===void 0)return typeof T=="number"||typeof T=="boolean"?E[w]=T:E[w]=T.clone(),!0;{const A=E[w];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return E[w]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function v(y){const S=y.uniforms;let g=0;const E=16;for(let w=0,A=S.length;w<A;w++){const M=Array.isArray(S[w])?S[w]:[S[w]];for(let _=0,C=M.length;_<C;_++){const D=M[_],B=Array.isArray(D.value)?D.value:[D.value];for(let I=0,k=B.length;I<k;I++){const G=B[I],W=x(G),F=g%E,K=F%W.boundary,at=F+K;g+=K,at!==0&&E-at<W.storage&&(g+=E-at),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=g,g+=W.storage}}}const T=g%E;return T>0&&(g+=E-T),y.__size=g,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const g=a.indexOf(S.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Jv{constructor(t={}){const{canvas:e=Gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=Yi,this.toneMappingExposure=1;const g=this;let E=!1,T=0,w=0,A=null,M=-1,_=null;const C=new De,D=new De;let B=null;const I=new Ct(0);let k=0,G=e.width,W=e.height,F=1,K=null,at=null;const ct=new De(0,0,G,W),bt=new De(0,0,G,W);let Yt=!1;const nt=new yc;let ut=!1,wt=!1;const pt=new be,Ft=new be,Ot=new O,Wt=new De,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function ge(){return A===null?F:1}let X=n;function Ie(P,Y){return e.getContext(P,Y)}try{const P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lc}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),X===null){const Y="webgl2";if(X=Ie(Y,P),X===null)throw Ie(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ie,Qt,Ht,de,$,R,b,V,J,tt,et,yt,vt,St,Kt,_t,Nt,$t,jt,kt,he,Jt,pe,H;function At(){ie=new ig(X),ie.init(),Jt=new Vv(X,ie),Qt=new Km(X,ie,t,Jt),Ht=new kv(X,ie),Qt.reverseDepthBuffer&&f&&Ht.buffers.depth.setReversed(!0),de=new ag(X),$=new wv,R=new Gv(X,ie,Ht,$,Qt,Jt,de),b=new Qm(g),V=new ng(g),J=new dp(X),pe=new jm(X,J),tt=new sg(X,J,de,pe),et=new lg(X,tt,J,de),jt=new og(X,Qt,R),_t=new Jm($),yt=new bv(g,b,V,ie,Qt,pe,_t),vt=new Zv(g,$),St=new Tv,Kt=new Lv(ie),$t=new $m(g,b,V,Ht,et,d,l),Nt=new Fv(g,et,Qt),H=new Kv(X,de,Qt,Ht),kt=new Zm(X,ie,de),he=new rg(X,ie,de),de.programs=yt.programs,g.capabilities=Qt,g.extensions=ie,g.properties=$,g.renderLists=St,g.shadowMap=Nt,g.state=Ht,g.info=de}At();const rt=new $v(g,X);this.xr=rt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const P=ie.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ie.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(P){P!==void 0&&(F=P,this.setSize(G,W,!1))},this.getSize=function(P){return P.set(G,W)},this.setSize=function(P,Y,it=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,W=Y,e.width=Math.floor(P*F),e.height=Math.floor(Y*F),it===!0&&(e.style.width=P+"px",e.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(G*F,W*F).floor()},this.setDrawingBufferSize=function(P,Y,it){G=P,W=Y,F=it,e.width=Math.floor(P*it),e.height=Math.floor(Y*it),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(ct)},this.setViewport=function(P,Y,it,st){P.isVector4?ct.set(P.x,P.y,P.z,P.w):ct.set(P,Y,it,st),Ht.viewport(C.copy(ct).multiplyScalar(F).round())},this.getScissor=function(P){return P.copy(bt)},this.setScissor=function(P,Y,it,st){P.isVector4?bt.set(P.x,P.y,P.z,P.w):bt.set(P,Y,it,st),Ht.scissor(D.copy(bt).multiplyScalar(F).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(P){Ht.setScissorTest(Yt=P)},this.setOpaqueSort=function(P){K=P},this.setTransparentSort=function(P){at=P},this.getClearColor=function(P){return P.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(P=!0,Y=!0,it=!0){let st=0;if(P){let q=!1;if(A!==null){const Tt=A.texture.format;q=Tt===gc||Tt===mc||Tt===pc}if(q){const Tt=A.texture.type,Ut=Tt===ui||Tt===gs||Tt===kr||Tt===vs||Tt===fc||Tt===dc,Xt=$t.getClearColor(),qt=$t.getClearAlpha(),ae=Xt.r,z=Xt.g,L=Xt.b;Ut?(v[0]=ae,v[1]=z,v[2]=L,v[3]=qt,X.clearBufferuiv(X.COLOR,0,v)):(x[0]=ae,x[1]=z,x[2]=L,x[3]=qt,X.clearBufferiv(X.COLOR,0,x))}else st|=X.COLOR_BUFFER_BIT}Y&&(st|=X.DEPTH_BUFFER_BIT),it&&(st|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),St.dispose(),Kt.dispose(),$.dispose(),b.dispose(),V.dispose(),et.dispose(),pe.dispose(),H.dispose(),yt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ke),rt.removeEventListener("sessionend",Be),Xe.stop()};function ft(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const P=de.autoReset,Y=Nt.enabled,it=Nt.autoUpdate,st=Nt.needsUpdate,q=Nt.type;At(),de.autoReset=P,Nt.enabled=Y,Nt.autoUpdate=it,Nt.needsUpdate=st,Nt.type=q}function Rt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function N(P){const Y=P.target;Y.removeEventListener("dispose",N),lt(Y)}function lt(P){Pt(P),$.remove(P)}function Pt(P){const Y=$.get(P).programs;Y!==void 0&&(Y.forEach(function(it){yt.releaseProgram(it)}),P.isShaderMaterial&&yt.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,it,st,q,Tt){Y===null&&(Y=te);const Ut=q.isMesh&&q.matrixWorld.determinant()<0,Xt=na(P,Y,it,st,q);Ht.setMaterial(st,Ut);let qt=it.index,ae=1;if(st.wireframe===!0){if(qt=tt.getWireframeAttribute(it),qt===void 0)return;ae=2}const z=it.drawRange,L=it.attributes.position;let j=z.start*ae,ot=(z.start+z.count)*ae;Tt!==null&&(j=Math.max(j,Tt.start*ae),ot=Math.min(ot,(Tt.start+Tt.count)*ae)),qt!==null?(j=Math.max(j,0),ot=Math.min(ot,qt.count)):L!=null&&(j=Math.max(j,0),ot=Math.min(ot,L.count));const dt=ot-j;if(dt<0||dt===1/0)return;pe.setup(q,st,Xt,it,qt);let Mt,xt=kt;if(qt!==null&&(Mt=J.get(qt),xt=he,xt.setIndex(Mt)),q.isMesh)st.wireframe===!0?(Ht.setLineWidth(st.wireframeLinewidth*ge()),xt.setMode(X.LINES)):xt.setMode(X.TRIANGLES);else if(q.isLine){let Q=st.linewidth;Q===void 0&&(Q=1),Ht.setLineWidth(Q*ge()),q.isLineSegments?xt.setMode(X.LINES):q.isLineLoop?xt.setMode(X.LINE_LOOP):xt.setMode(X.LINE_STRIP)}else q.isPoints?xt.setMode(X.POINTS):q.isSprite&&xt.setMode(X.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)xt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))xt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Q=q._multiDrawStarts,Bt=q._multiDrawCounts,It=q._multiDrawCount,le=qt?J.get(qt).bytesPerElement:1,ve=$.get(st).currentProgram.getUniforms();for(let ye=0;ye<It;ye++)ve.setValue(X,"_gl_DrawID",ye),xt.render(Q[ye]/le,Bt[ye])}else if(q.isInstancedMesh)xt.renderInstances(j,dt,q.count);else if(it.isInstancedBufferGeometry){const Q=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Bt=Math.min(it.instanceCount,Q);xt.renderInstances(j,dt,Bt)}else xt.render(j,dt)};function Gt(P,Y,it){P.transparent===!0&&P.side===$e&&P.forceSinglePass===!1?(P.side=wn,P.needsUpdate=!0,ii(P,Y,it),P.side=ji,P.needsUpdate=!0,ii(P,Y,it),P.side=$e):ii(P,Y,it)}this.compile=function(P,Y,it=null){it===null&&(it=P),p=Kt.get(it),p.init(Y),S.push(p),it.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),P!==it&&P.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const st=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Tt=q.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Xt=Tt[Ut];Gt(Xt,it,q),st.add(Xt)}else Gt(Tt,it,q),st.add(Tt)}),S.pop(),p=null,st},this.compileAsync=function(P,Y,it=null){const st=this.compile(P,Y,it);return new Promise(q=>{function Tt(){if(st.forEach(function(Ut){$.get(Ut).currentProgram.isReady()&&st.delete(Ut)}),st.size===0){q(P);return}setTimeout(Tt,10)}ie.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let _e=null;function ne(P){_e&&_e(P)}function ke(){Xe.stop()}function Be(){Xe.start()}const Xe=new Ku;Xe.setAnimationLoop(ne),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(P){_e=P,rt.setAnimationLoop(P),P===null?Xe.stop():Xe.start()},rt.addEventListener("sessionstart",ke),rt.addEventListener("sessionend",Be),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(Y),Y=rt.getCamera()),P.isScene===!0&&P.onBeforeRender(g,P,Y,A),p=Kt.get(P,S.length),p.init(Y),S.push(p),Ft.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),nt.setFromProjectionMatrix(Ft),wt=this.localClippingEnabled,ut=_t.init(this.clippingPlanes,wt),m=St.get(P,y.length),m.init(),y.push(m),rt.enabled===!0&&rt.isPresenting===!0){const Tt=g.xr.getDepthSensingMesh();Tt!==null&&cn(Tt,Y,-1/0,g.sortObjects)}cn(P,Y,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(K,at),ee=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,ee&&$t.addToRenderList(m,P),this.info.render.frame++,ut===!0&&_t.beginShadows();const it=p.state.shadowsArray;Nt.render(it,P,Y),ut===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=m.opaque,q=m.transmissive;if(p.setupLights(),Y.isArrayCamera){const Tt=Y.cameras;if(q.length>0)for(let Ut=0,Xt=Tt.length;Ut<Xt;Ut++){const qt=Tt[Ut];zn(st,q,P,qt)}ee&&$t.render(P);for(let Ut=0,Xt=Tt.length;Ut<Xt;Ut++){const qt=Tt[Ut];Te(m,P,qt,qt.viewport)}}else q.length>0&&zn(st,q,P,Y),ee&&$t.render(P),Te(m,P,Y);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(g,P,Y),pe.resetDefaultState(),M=-1,_=null,S.pop(),S.length>0?(p=S[S.length-1],ut===!0&&_t.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function cn(P,Y,it,st){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)it=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||nt.intersectsSprite(P)){st&&Wt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ft);const Ut=et.update(P),Xt=P.material;Xt.visible&&m.push(P,Ut,Xt,it,Wt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||nt.intersectsObject(P))){const Ut=et.update(P),Xt=P.material;if(st&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Wt.copy(P.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Wt.copy(Ut.boundingSphere.center)),Wt.applyMatrix4(P.matrixWorld).applyMatrix4(Ft)),Array.isArray(Xt)){const qt=Ut.groups;for(let ae=0,z=qt.length;ae<z;ae++){const L=qt[ae],j=Xt[L.materialIndex];j&&j.visible&&m.push(P,Ut,j,it,Wt.z,L)}}else Xt.visible&&m.push(P,Ut,Xt,it,Wt.z,null)}}const Tt=P.children;for(let Ut=0,Xt=Tt.length;Ut<Xt;Ut++)cn(Tt[Ut],Y,it,st)}function Te(P,Y,it,st){const q=P.opaque,Tt=P.transmissive,Ut=P.transparent;p.setupLightsView(it),ut===!0&&_t.setGlobalState(g.clippingPlanes,it),st&&Ht.viewport(C.copy(st)),q.length>0&&mi(q,Y,it),Tt.length>0&&mi(Tt,Y,it),Ut.length>0&&mi(Ut,Y,it),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function zn(P,Y,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[st.id]===void 0&&(p.state.transmissionRenderTarget[st.id]=new An(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Bn:ui,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));const Tt=p.state.transmissionRenderTarget[st.id],Ut=st.viewport||C;Tt.setSize(Ut.z,Ut.w);const Xt=g.getRenderTarget();g.setRenderTarget(Tt),g.getClearColor(I),k=g.getClearAlpha(),k<1&&g.setClearColor(16777215,.5),g.clear(),ee&&$t.render(it);const qt=g.toneMapping;g.toneMapping=Yi;const ae=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),p.setupLightsView(st),ut===!0&&_t.setGlobalState(g.clippingPlanes,st),mi(P,it,st),R.updateMultisampleRenderTarget(Tt),R.updateRenderTargetMipmap(Tt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let z=!1;for(let L=0,j=Y.length;L<j;L++){const ot=Y[L],dt=ot.object,Mt=ot.geometry,xt=ot.material,Q=ot.group;if(xt.side===$e&&dt.layers.test(st.layers)){const Bt=xt.side;xt.side=wn,xt.needsUpdate=!0,ea(dt,it,st,Mt,xt,Q),xt.side=Bt,xt.needsUpdate=!0,z=!0}}z===!0&&(R.updateMultisampleRenderTarget(Tt),R.updateRenderTargetMipmap(Tt))}g.setRenderTarget(Xt),g.setClearColor(I,k),ae!==void 0&&(st.viewport=ae),g.toneMapping=qt}function mi(P,Y,it){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,Tt=P.length;q<Tt;q++){const Ut=P[q],Xt=Ut.object,qt=Ut.geometry,ae=st===null?Ut.material:st,z=Ut.group;Xt.layers.test(it.layers)&&ea(Xt,Y,it,qt,ae,z)}}function ea(P,Y,it,st,q,Tt){P.onBeforeRender(g,Y,it,st,q,Tt),P.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(g,Y,it,st,P,Tt),q.transparent===!0&&q.side===$e&&q.forceSinglePass===!1?(q.side=wn,q.needsUpdate=!0,g.renderBufferDirect(it,Y,st,q,P,Tt),q.side=ji,q.needsUpdate=!0,g.renderBufferDirect(it,Y,st,q,P,Tt),q.side=$e):g.renderBufferDirect(it,Y,st,q,P,Tt),P.onAfterRender(g,Y,it,st,q,Tt)}function ii(P,Y,it){Y.isScene!==!0&&(Y=te);const st=$.get(P),q=p.state.lights,Tt=p.state.shadowsArray,Ut=q.state.version,Xt=yt.getParameters(P,q.state,Tt,Y,it),qt=yt.getProgramCacheKey(Xt);let ae=st.programs;st.environment=P.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(P.isMeshStandardMaterial?V:b).get(P.envMap||st.environment),st.envMapRotation=st.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,ae===void 0&&(P.addEventListener("dispose",N),ae=new Map,st.programs=ae);let z=ae.get(qt);if(z!==void 0){if(st.currentProgram===z&&st.lightsStateVersion===Ut)return Zi(P,Xt),z}else Xt.uniforms=yt.getUniforms(P),P.onBeforeCompile(Xt,g),z=yt.acquireProgram(Xt,qt),ae.set(qt,z),st.uniforms=Xt.uniforms;const L=st.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(L.clippingPlanes=_t.uniform),Zi(P,Xt),st.needsLights=gi(P),st.lightsStateVersion=Ut,st.needsLights&&(L.ambientLightColor.value=q.state.ambient,L.lightProbe.value=q.state.probe,L.directionalLights.value=q.state.directional,L.directionalLightShadows.value=q.state.directionalShadow,L.spotLights.value=q.state.spot,L.spotLightShadows.value=q.state.spotShadow,L.rectAreaLights.value=q.state.rectArea,L.ltc_1.value=q.state.rectAreaLTC1,L.ltc_2.value=q.state.rectAreaLTC2,L.pointLights.value=q.state.point,L.pointLightShadows.value=q.state.pointShadow,L.hemisphereLights.value=q.state.hemi,L.directionalShadowMap.value=q.state.directionalShadowMap,L.directionalShadowMatrix.value=q.state.directionalShadowMatrix,L.spotShadowMap.value=q.state.spotShadowMap,L.spotLightMatrix.value=q.state.spotLightMatrix,L.spotLightMap.value=q.state.spotLightMap,L.pointShadowMap.value=q.state.pointShadowMap,L.pointShadowMatrix.value=q.state.pointShadowMatrix),st.currentProgram=z,st.uniformsList=null,z}function _n(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=Wa.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function Zi(P,Y){const it=$.get(P);it.outputColorSpace=Y.outputColorSpace,it.batching=Y.batching,it.batchingColor=Y.batchingColor,it.instancing=Y.instancing,it.instancingColor=Y.instancingColor,it.instancingMorph=Y.instancingMorph,it.skinning=Y.skinning,it.morphTargets=Y.morphTargets,it.morphNormals=Y.morphNormals,it.morphColors=Y.morphColors,it.morphTargetsCount=Y.morphTargetsCount,it.numClippingPlanes=Y.numClippingPlanes,it.numIntersection=Y.numClipIntersection,it.vertexAlphas=Y.vertexAlphas,it.vertexTangents=Y.vertexTangents,it.toneMapping=Y.toneMapping}function na(P,Y,it,st,q){Y.isScene!==!0&&(Y=te),R.resetTextureUnits();const Tt=Y.fog,Ut=st.isMeshStandardMaterial?Y.environment:null,Xt=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:dr,qt=(st.isMeshStandardMaterial?V:b).get(st.envMap||Ut),ae=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,z=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),L=!!it.morphAttributes.position,j=!!it.morphAttributes.normal,ot=!!it.morphAttributes.color;let dt=Yi;st.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(dt=g.toneMapping);const Mt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,xt=Mt!==void 0?Mt.length:0,Q=$.get(st),Bt=p.state.lights;if(ut===!0&&(wt===!0||P!==_)){const un=P===_&&st.id===M;_t.setState(st,P,un)}let It=!1;st.version===Q.__version?(Q.needsLights&&Q.lightsStateVersion!==Bt.state.version||Q.outputColorSpace!==Xt||q.isBatchedMesh&&Q.batching===!1||!q.isBatchedMesh&&Q.batching===!0||q.isBatchedMesh&&Q.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Q.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Q.instancing===!1||!q.isInstancedMesh&&Q.instancing===!0||q.isSkinnedMesh&&Q.skinning===!1||!q.isSkinnedMesh&&Q.skinning===!0||q.isInstancedMesh&&Q.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Q.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Q.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Q.instancingMorph===!1&&q.morphTexture!==null||Q.envMap!==qt||st.fog===!0&&Q.fog!==Tt||Q.numClippingPlanes!==void 0&&(Q.numClippingPlanes!==_t.numPlanes||Q.numIntersection!==_t.numIntersection)||Q.vertexAlphas!==ae||Q.vertexTangents!==z||Q.morphTargets!==L||Q.morphNormals!==j||Q.morphColors!==ot||Q.toneMapping!==dt||Q.morphTargetsCount!==xt)&&(It=!0):(It=!0,Q.__version=st.version);let le=Q.currentProgram;It===!0&&(le=ii(st,Y,q));let ve=!1,ye=!1,vi=!1;const Me=le.getUniforms(),hn=Q.uniforms;if(Ht.useProgram(le.program)&&(ve=!0,ye=!0,vi=!0),st.id!==M&&(M=st.id,ye=!0),ve||_!==P){Ht.buffers.depth.getReversed()?(pt.copy(P.projectionMatrix),Hd(pt),Wd(pt),Me.setValue(X,"projectionMatrix",pt)):Me.setValue(X,"projectionMatrix",P.projectionMatrix),Me.setValue(X,"viewMatrix",P.matrixWorldInverse);const Cn=Me.map.cameraPosition;Cn!==void 0&&Cn.setValue(X,Ot.setFromMatrixPosition(P.matrixWorld)),Qt.logarithmicDepthBuffer&&Me.setValue(X,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Me.setValue(X,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,ye=!0,vi=!0)}if(q.isSkinnedMesh){Me.setOptional(X,q,"bindMatrix"),Me.setOptional(X,q,"bindMatrixInverse");const un=q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Me.setValue(X,"boneTexture",un.boneTexture,R))}q.isBatchedMesh&&(Me.setOptional(X,q,"batchingTexture"),Me.setValue(X,"batchingTexture",q._matricesTexture,R),Me.setOptional(X,q,"batchingIdTexture"),Me.setValue(X,"batchingIdTexture",q._indirectTexture,R),Me.setOptional(X,q,"batchingColorTexture"),q._colorsTexture!==null&&Me.setValue(X,"batchingColorTexture",q._colorsTexture,R));const Hn=it.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&jt.update(q,it,le),(ye||Q.receiveShadow!==q.receiveShadow)&&(Q.receiveShadow=q.receiveShadow,Me.setValue(X,"receiveShadow",q.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(hn.envMap.value=qt,hn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(hn.envMapIntensity.value=Y.environmentIntensity),ye&&(Me.setValue(X,"toneMappingExposure",g.toneMappingExposure),Q.needsLights&&Ki(hn,vi),Tt&&st.fog===!0&&vt.refreshFogUniforms(hn,Tt),vt.refreshMaterialUniforms(hn,st,F,W,p.state.transmissionRenderTarget[P.id]),Wa.upload(X,_n(Q),hn,R)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Wa.upload(X,_n(Q),hn,R),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Me.setValue(X,"center",q.center),Me.setValue(X,"modelViewMatrix",q.modelViewMatrix),Me.setValue(X,"normalMatrix",q.normalMatrix),Me.setValue(X,"modelMatrix",q.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const un=st.uniformsGroups;for(let Cn=0,Rn=un.length;Cn<Rn;Cn++){const Ni=un[Cn];H.update(Ni,le),H.bind(Ni,le)}}return le}function Ki(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function gi(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,Y,it){$.get(P.texture).__webglTexture=Y,$.get(P.depthTexture).__webglTexture=it;const st=$.get(P);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Y){const it=$.get(P);it.__webglFramebuffer=Y,it.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,it=0){A=P,T=Y,w=it;let st=!0,q=null,Tt=!1,Ut=!1;if(P){const qt=$.get(P);if(qt.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(X.FRAMEBUFFER,null),st=!1;else if(qt.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(qt.__hasExternalTextures)R.rebindTextures(P,$.get(P.texture).__webglTexture,$.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const L=P.depthTexture;if(qt.__boundDepthTexture!==L){if(L!==null&&$.has(L)&&(P.width!==L.image.width||P.height!==L.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const ae=P.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Ut=!0);const z=$.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(z[Y])?q=z[Y][it]:q=z[Y],Tt=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?q=$.get(P).__webglMultisampledFramebuffer:Array.isArray(z)?q=z[it]:q=z,C.copy(P.viewport),D.copy(P.scissor),B=P.scissorTest}else C.copy(ct).multiplyScalar(F).floor(),D.copy(bt).multiplyScalar(F).floor(),B=Yt;if(Ht.bindFramebuffer(X.FRAMEBUFFER,q)&&st&&Ht.drawBuffers(P,q),Ht.viewport(C),Ht.scissor(D),Ht.setScissorTest(B),Tt){const qt=$.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,qt.__webglTexture,it)}else if(Ut){const qt=$.get(P.texture),ae=Y||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,qt.__webglTexture,it||0,ae)}M=-1},this.readRenderTargetPixels=function(P,Y,it,st,q,Tt,Ut){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=$.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ut!==void 0&&(Xt=Xt[Ut]),Xt){Ht.bindFramebuffer(X.FRAMEBUFFER,Xt);try{const qt=P.texture,ae=qt.format,z=qt.type;if(!Qt.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(z)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-st&&it>=0&&it<=P.height-q&&X.readPixels(Y,it,st,q,Jt.convert(ae),Jt.convert(z),Tt)}finally{const qt=A!==null?$.get(A).__webglFramebuffer:null;Ht.bindFramebuffer(X.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(P,Y,it,st,q,Tt,Ut){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=$.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ut!==void 0&&(Xt=Xt[Ut]),Xt){const qt=P.texture,ae=qt.format,z=qt.type;if(!Qt.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=P.width-st&&it>=0&&it<=P.height-q){Ht.bindFramebuffer(X.FRAMEBUFFER,Xt);const L=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,L),X.bufferData(X.PIXEL_PACK_BUFFER,Tt.byteLength,X.STREAM_READ),X.readPixels(Y,it,st,q,Jt.convert(ae),Jt.convert(z),0);const j=A!==null?$.get(A).__webglFramebuffer:null;Ht.bindFramebuffer(X.FRAMEBUFFER,j);const ot=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Vd(X,ot,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,L),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Tt),X.deleteBuffer(L),X.deleteSync(ot),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Y=null,it=0){P.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,P=arguments[1]);const st=Math.pow(2,-it),q=Math.floor(P.image.width*st),Tt=Math.floor(P.image.height*st),Ut=Y!==null?Y.x:0,Xt=Y!==null?Y.y:0;R.setTexture2D(P,0),X.copyTexSubImage2D(X.TEXTURE_2D,it,0,0,Ut,Xt,q,Tt),Ht.unbindTexture()},this.copyTextureToTexture=function(P,Y,it=null,st=null,q=0){P.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,P=arguments[1],Y=arguments[2],q=arguments[3]||0,it=null);let Tt,Ut,Xt,qt,ae,z,L,j,ot;const dt=P.isCompressedTexture?P.mipmaps[q]:P.image;it!==null?(Tt=it.max.x-it.min.x,Ut=it.max.y-it.min.y,Xt=it.isBox3?it.max.z-it.min.z:1,qt=it.min.x,ae=it.min.y,z=it.isBox3?it.min.z:0):(Tt=dt.width,Ut=dt.height,Xt=dt.depth||1,qt=0,ae=0,z=0),st!==null?(L=st.x,j=st.y,ot=st.z):(L=0,j=0,ot=0);const Mt=Jt.convert(Y.format),xt=Jt.convert(Y.type);let Q;Y.isData3DTexture?(R.setTexture3D(Y,0),Q=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(R.setTexture2DArray(Y,0),Q=X.TEXTURE_2D_ARRAY):(R.setTexture2D(Y,0),Q=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const Bt=X.getParameter(X.UNPACK_ROW_LENGTH),It=X.getParameter(X.UNPACK_IMAGE_HEIGHT),le=X.getParameter(X.UNPACK_SKIP_PIXELS),ve=X.getParameter(X.UNPACK_SKIP_ROWS),ye=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,dt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,dt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,qt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ae),X.pixelStorei(X.UNPACK_SKIP_IMAGES,z);const vi=P.isDataArrayTexture||P.isData3DTexture,Me=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const hn=$.get(P),Hn=$.get(Y),un=$.get(hn.__renderTarget),Cn=$.get(Hn.__renderTarget);Ht.bindFramebuffer(X.READ_FRAMEBUFFER,un.__webglFramebuffer),Ht.bindFramebuffer(X.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Rn=0;Rn<Xt;Rn++)vi&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$.get(P).__webglTexture,q,z+Rn),P.isDepthTexture?(Me&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$.get(Y).__webglTexture,q,ot+Rn),X.blitFramebuffer(qt,ae,Tt,Ut,L,j,Tt,Ut,X.DEPTH_BUFFER_BIT,X.NEAREST)):Me?X.copyTexSubImage3D(Q,q,L,j,ot+Rn,qt,ae,Tt,Ut):X.copyTexSubImage2D(Q,q,L,j,ot+Rn,qt,ae,Tt,Ut);Ht.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Me?P.isDataTexture||P.isData3DTexture?X.texSubImage3D(Q,q,L,j,ot,Tt,Ut,Xt,Mt,xt,dt.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(Q,q,L,j,ot,Tt,Ut,Xt,Mt,dt.data):X.texSubImage3D(Q,q,L,j,ot,Tt,Ut,Xt,Mt,xt,dt):P.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,q,L,j,Tt,Ut,Mt,xt,dt.data):P.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,q,L,j,dt.width,dt.height,Mt,dt.data):X.texSubImage2D(X.TEXTURE_2D,q,L,j,Tt,Ut,Mt,xt,dt);X.pixelStorei(X.UNPACK_ROW_LENGTH,Bt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,It),X.pixelStorei(X.UNPACK_SKIP_PIXELS,le),X.pixelStorei(X.UNPACK_SKIP_ROWS,ve),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ye),q===0&&Y.generateMipmaps&&X.generateMipmap(Q),Ht.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,it=null,st=null,q=0){return P.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,st=arguments[1]||null,P=arguments[2],Y=arguments[3],q=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Y,it,st,q)},this.initRenderTarget=function(P){$.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),Ht.unbindTexture()},this.resetState=function(){T=0,w=0,A=null,Ht.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}}class Ec{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new Ec(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qv extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class eo extends vn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=gn,u=gn,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gh extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Vs=new be,Vh=new be,wa=[],Hh=new Ss,tx=new be,wr=new Zt,Er=new mr;class ln extends Zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ss),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),Hh.copy(t.boundingBox).applyMatrix4(Vs),this.boundingBox.union(Hh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),Er.copy(t.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),t.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),Vh.multiplyMatrices(n,Vs),wr.matrixWorld=Vh,wr.raycast(t,wa);for(let a=0,o=wa.length;a<o;a++){const l=wa[a];l.instanceId=r,l.object=this,e.push(l)}wa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new eo(new Float32Array(s*this.count),s,this.count,Ja,ti));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class no extends bs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wh=new be,ql=new _c,Ea=new mr,Ta=new O;class Tc extends Fe{constructor(t=new Pe,e=new no){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,t.ray.intersectsSphere(Ea)===!1)return;Wh.copy(s).invert(),ql.copy(t.ray).applyMatrix4(Wh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let v=f,x=d;v<x;v++){const m=c.getX(v);Ta.fromBufferAttribute(h,m),Xh(Ta,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let v=f,x=d;v<x;v++)Ta.fromBufferAttribute(h,v),Xh(Ta,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xh(i,t,e,n,s,r,a){const o=ql.distanceSqToPoint(i);if(o<e){const l=new O;ql.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ri extends vn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(a-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Et:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,s=[],r=[],a=[],o=new O,l=new be;for(let d=0;d<=t;d++){const v=d/t;s[d]=this.getTangentAt(v,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(rn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(rn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ac extends pi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Et){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ex extends Ac{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Cc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Aa=new O,Vo=new Cc,Ho=new Cc,Wo=new Cc;class Rc extends pi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Aa.subVectors(s[0],s[1]).add(s[0]),c=Aa);const h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Aa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Aa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Vo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,v,x,m),Ho.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,v,x,m),Wo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,v,x,m)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ho.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Wo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Vo.calc(l),Ho.calc(l),Wo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function nx(i,t){const e=1-i;return e*e*t}function ix(i,t){return 2*(1-i)*i*t}function sx(i,t){return i*i*t}function Ir(i,t,e,n){return nx(i,t)+ix(i,e)+sx(i,n)}function rx(i,t){const e=1-i;return e*e*e*t}function ax(i,t){const e=1-i;return 3*e*e*i*t}function ox(i,t){return 3*(1-i)*i*i*t}function lx(i,t){return i*i*i*t}function Ur(i,t,e,n,s){return rx(i,t)+ax(i,e)+ox(i,n)+lx(i,s)}class nf extends pi{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ur(t,s.x,r.x,a.x,o.x),Ur(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cx extends pi{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ur(t,s.x,r.x,a.x,o.x),Ur(t,s.y,r.y,a.y,o.y),Ur(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sf extends pi{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hx extends pi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rf extends pi{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ux extends pi{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y),Ir(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class af extends pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(qh(o,l.x,c.x,u.x,h.x),qh(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Et().fromArray(s))}return this}}var Yh=Object.freeze({__proto__:null,ArcCurve:ex,CatmullRomCurve3:Rc,CubicBezierCurve:nf,CubicBezierCurve3:cx,EllipseCurve:Ac,LineCurve:sf,LineCurve3:hx,QuadraticBezierCurve:rf,QuadraticBezierCurve3:ux,SplineCurve:af});class fx extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Yh[s.type]().fromJSON(s))}return this}}class Yl extends fx{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new sf(this.currentPoint.clone(),new Et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new rf(this.currentPoint.clone(),new Et(t,e),new Et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new nf(this.currentPoint.clone(),new Et(t,e),new Et(n,s),new Et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new af(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Ac(t,e,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Pc extends Pe{constructor(t=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=rn(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,h=new O,f=new Et,d=new O,v=new O,x=new O;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(v)}for(let y=0;y<=e;y++){const S=n+y*u*s,g=Math.sin(S),E=Math.cos(S);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*g,h.y=t[T].y,h.z=t[T].x*E,a.push(h.x,h.y,h.z),f.x=y/e,f.y=T/(t.length-1),o.push(f.x,f.y);const w=l[3*T+0]*g,A=l[3*T+1],M=l[3*T+0]*E;c.push(w,A,M)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){const g=S+y*t.length,E=g,T=g+t.length,w=g+t.length+1,A=g+1;r.push(E,T,A),r.push(w,A,T)}this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("uv",new oe(o,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pc(t.points,t.segments,t.phiStart,t.phiLength)}}class io extends Pc{constructor(t=1,e=1,n=4,s=8){const r=new Yl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new io(t.radius,t.length,t.capSegments,t.radialSegments)}}class lr extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new O,u=new Et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ne extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let v=0;const x=[],m=n/2;let p=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new oe(h,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(d,2));function y(){const g=new O,E=new O;let T=0;const w=(e-t)/n;for(let A=0;A<=r;A++){const M=[],_=A/r,C=_*(e-t)+t;for(let D=0;D<=s;D++){const B=D/s,I=B*l+o,k=Math.sin(I),G=Math.cos(I);E.x=C*k,E.y=-_*n+m,E.z=C*G,h.push(E.x,E.y,E.z),g.set(k,w,G).normalize(),f.push(g.x,g.y,g.z),d.push(B,1-_),M.push(v++)}x.push(M)}for(let A=0;A<s;A++)for(let M=0;M<r;M++){const _=x[M][A],C=x[M+1][A],D=x[M+1][A+1],B=x[M][A+1];(t>0||M!==0)&&(u.push(_,C,B),T+=3),(e>0||M!==r-1)&&(u.push(C,D,B),T+=3)}c.addGroup(p,T,0),p+=T}function S(g){const E=v,T=new Et,w=new O;let A=0;const M=g===!0?t:e,_=g===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),v++;const C=v;for(let D=0;D<=s;D++){const I=D/s*l+o,k=Math.cos(I),G=Math.sin(I);w.x=M*G,w.y=m*_,w.z=M*k,h.push(w.x,w.y,w.z),f.push(0,_,0),T.x=k*.5+.5,T.y=G*.5*_+.5,d.push(T.x,T.y),v++}for(let D=0;D<s;D++){const B=E+D,I=C+D;g===!0?u.push(I,I+1,B):u.push(I+1,I,B),A+=3}c.addGroup(p,A,g===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hi extends Ne{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new hi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jr extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new O,g=new O,E=new O;for(let T=0;T<e.length;T+=3)d(e[T+0],S),d(e[T+1],g),d(e[T+2],E),l(S,g,E,y)}function l(y,S,g,E){const T=E+1,w=[];for(let A=0;A<=T;A++){w[A]=[];const M=y.clone().lerp(g,A/T),_=S.clone().lerp(g,A/T),C=T-A;for(let D=0;D<=C;D++)D===0&&A===T?w[A][D]=M:w[A][D]=M.clone().lerp(_,D/C)}for(let A=0;A<T;A++)for(let M=0;M<2*(T-A)-1;M++){const _=Math.floor(M/2);M%2===0?(f(w[A][_+1]),f(w[A+1][_]),f(w[A][_])):(f(w[A][_+1]),f(w[A+1][_+1]),f(w[A+1][_]))}}function c(y){const S=new O;for(let g=0;g<r.length;g+=3)S.x=r[g+0],S.y=r[g+1],S.z=r[g+2],S.normalize().multiplyScalar(y),r[g+0]=S.x,r[g+1]=S.y,r[g+2]=S.z}function u(){const y=new O;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const g=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(g,1-E)}v(),h()}function h(){for(let y=0;y<a.length;y+=6){const S=a[y+0],g=a[y+2],E=a[y+4],T=Math.max(S,g,E),w=Math.min(S,g,E);T>.9&&w<.1&&(S<.2&&(a[y+0]+=1),g<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,S){const g=y*3;S.x=t[g+0],S.y=t[g+1],S.z=t[g+2]}function v(){const y=new O,S=new O,g=new O,E=new O,T=new Et,w=new Et,A=new Et;for(let M=0,_=0;M<r.length;M+=9,_+=6){y.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),g.set(r[M+6],r[M+7],r[M+8]),T.set(a[_+0],a[_+1]),w.set(a[_+2],a[_+3]),A.set(a[_+4],a[_+5]),E.copy(y).add(S).add(g).divideScalar(3);const C=m(E);x(T,_+0,y,C),x(w,_+2,S,C),x(A,_+4,g,C)}}function x(y,S,g,E){E<0&&y.x===1&&(a[S]=y.x-1),g.x===0&&g.z===0&&(a[S]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.vertices,t.indices,t.radius,t.details)}}class so extends Jr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new so(t.radius,t.detail)}}class of extends Yl{constructor(t){super(t),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Yl().fromJSON(s))}return this}}const dx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=lf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,f,d;if(n&&(r=xx(i,t,r,e)),i.length>80*e){o=c=i[0],l=u=i[1];for(let v=e;v<s;v+=e)h=i[v],f=i[v+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return Gr(r,a,e,o,l,d,0),a}};function lf(i,t,e,n,s){let r,a;if(s===Rx(i,t,e,n)>0)for(r=t;r<e;r+=n)a=$h(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=$h(r,i[r],i[r+1],a);return a&&ro(a,a.next)&&(Hr(a),a=a.next),a}function _s(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ro(e,e.next)||We(e.prev,e,e.next)===0)){if(Hr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Gr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&bx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?mx(i,n,s,r):px(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Hr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=gx(_s(i),t,e),Gr(i,t,e,n,s,r,2)):a===2&&vx(i,t,e,n,s,r):Gr(_s(i),t,e,n,s,r,1);break}}}function px(i){const t=i.prev,e=i,n=i.next;if(We(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let v=n.next;for(;v!==t;){if(v.x>=u&&v.x<=f&&v.y>=h&&v.y<=d&&$s(s,o,r,l,a,c,v.x,v.y)&&We(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function mx(i,t,e,n){const s=i.prev,r=i,a=i.next;if(We(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,v=u<h?u<f?u:f:h<f?h:f,x=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=$l(d,v,t,e,n),y=$l(x,m,t,e,n);let S=i.prevZ,g=i.nextZ;for(;S&&S.z>=p&&g&&g.z<=y;){if(S.x>=d&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&$s(o,u,l,h,c,f,S.x,S.y)&&We(S.prev,S,S.next)>=0||(S=S.prevZ,g.x>=d&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==a&&$s(o,u,l,h,c,f,g.x,g.y)&&We(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&$s(o,u,l,h,c,f,S.x,S.y)&&We(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;g&&g.z<=y;){if(g.x>=d&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==a&&$s(o,u,l,h,c,f,g.x,g.y)&&We(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function gx(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ro(s,r)&&cf(s,n,n.next,r)&&Vr(s,r)&&Vr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Hr(n),Hr(n.next),n=i=r),n=n.next}while(n!==i);return _s(n)}function vx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tx(a,o)){let l=hf(a,o);a=_s(a,a.next),l=_s(l,l.next),Gr(a,t,e,n,s,r,0),Gr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function xx(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=lf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ex(c));for(s.sort(_x),r=0;r<s.length;r++)e=Mx(s[r],e);return e}function _x(i,t){return i.x-t.x}function Mx(i,t){const e=yx(i,t);if(!e)return t;const n=hf(e,i);return _s(n,n.next),_s(e,e.next)}function yx(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&$s(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),Vr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Sx(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function Sx(i,t){return We(i.prev,i,t.prev)<0&&We(t.next,i,i.next)<0}function bx(i,t,e,n){let s=i;do s.z===0&&(s.z=$l(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wx(s)}function wx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function $l(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ex(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $s(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Tx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ax(i,t)&&(Vr(i,t)&&Vr(t,i)&&Cx(i,t)&&(We(i.prev,i,t.prev)||We(i,t.prev,t))||ro(i,t)&&We(i.prev,i,i.next)>0&&We(t.prev,t,t.next)>0)}function We(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ro(i,t){return i.x===t.x&&i.y===t.y}function cf(i,t,e,n){const s=Ra(We(i,t,e)),r=Ra(We(i,t,n)),a=Ra(We(e,n,i)),o=Ra(We(e,n,t));return!!(s!==r&&a!==o||s===0&&Ca(i,e,t)||r===0&&Ca(i,n,t)||a===0&&Ca(e,i,n)||o===0&&Ca(e,t,n))}function Ca(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ra(i){return i>0?1:i<0?-1:0}function Ax(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&cf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vr(i,t){return We(i.prev,i,i.next)<0?We(i,t,i.next)>=0&&We(i,i.prev,t)>=0:We(i,t,i.prev)<0||We(i,i.next,t)<0}function Cx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hf(i,t){const e=new jl(i.i,i.x,i.y),n=new jl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $h(i,t,e,n){const s=new jl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Rx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Nr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Nr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];jh(t),Zh(n,t);let a=t.length;e.forEach(jh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Zh(n,e[l]);const o=dx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function jh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class $i extends Jr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $i(t.radius,t.detail)}}class Wr extends Jr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wr(t.radius,t.detail)}}class ws extends Pe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,d=new O,v=new Et;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),v.x=(d.x/e+1)/2,v.y=(d.y/e+1)/2,u.push(v.x,v.y)}h+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const y=p+m,S=y,g=y+n+1,E=y+n+2,T=y+1;o.push(S,g,T),o.push(g,E,T)}}this.setIndex(o),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Dc extends Pe{constructor(t=new of([new Et(0,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(a,2));function c(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const v=f.holes;Nr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=v.length;m<p;m++){const y=v[m];Nr.isClockWise(y)===!0&&(v[m]=y.reverse())}const x=Nr.triangulateShape(d,v);for(let m=0,p=v.length;m<p;m++){const y=v[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){const y=x[m],S=y[0]+h,g=y[1]+h,E=y[2]+h;n.push(S,g,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Px(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Dc(n,t.curveSegments)}}function Px(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class di extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new O,f=new O,d=[],v=[],x=[],m=[];for(let p=0;p<=n;p++){const y=[],S=p/n;let g=0;p===0&&a===0?g=.5/e:p===n&&l===Math.PI&&(g=-.5/e);for(let E=0;E<=e;E++){const T=E/e;h.x=-t*Math.cos(s+T*r)*Math.sin(a+S*o),h.y=t*Math.cos(a+S*o),h.z=t*Math.sin(s+T*r)*Math.sin(a+S*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(T+g,1-S),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const S=u[p][y+1],g=u[p][y],E=u[p+1][y],T=u[p+1][y+1];(p!==0||a>0)&&d.push(S,g,T),(p!==n-1||l<Math.PI)&&d.push(g,E,T)}this.setIndex(d),this.setAttribute("position",new oe(v,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ks extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new O,h=new O,f=new O;for(let d=0;d<=n;d++)for(let v=0;v<=s;v++){const x=v/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let v=1;v<=s;v++){const x=(s+1)*d+v-1,m=(s+1)*(d-1)+v-1,p=(s+1)*(d-1)+v,y=(s+1)*d+v;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Dx extends Ve{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Lx extends bs{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Ue extends bs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lc extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ix extends Lc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Xo=new be,Kh=new O,Jh=new O;class uf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yc,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kh),Jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jh),e.updateMatrixWorld(),Xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Qh=new be,Tr=new O,qo=new O;class Ux extends uf{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new De(2,1,1,1),new De(0,1,1,1),new De(3,1,1,1),new De(1,1,1,1),new De(3,0,1,1),new De(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Tr),qo.copy(n.position),qo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(qo),n.updateMatrixWorld(),s.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh)}}class Xr extends Lc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ux}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Nx extends uf{constructor(){super(new Sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zx extends Lc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Nx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ff{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=tu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function tu(){return performance.now()}const eu=new be;class Fx{constructor(t,e,n=0,s=1/0){this.ray=new _c(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return eu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eu),this}intersectObject(t,e=!0,n=[]){return Zl(t,this,n,e),n.sort(nu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Zl(t[s],this,n,e);return n.sort(nu),n}}function nu(i,t){return i.distance-t.distance}function Zl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Zl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);const pn=(i,t={})=>new Ue({color:i,flatShading:!0,...t});function Pa(i){const t=i.map(a=>a.toNonIndexed()),e=t.reduce((a,o)=>a+o.attributes.position.count,0),n=new Float32Array(e*3);let s=0;for(const a of t)n.set(a.attributes.position.array,s),s+=a.attributes.position.array.length;const r=new Pe;return r.setAttribute("position",new ze(n,3)),r.computeVertexNormals(),r}function Ox(i,t,e,n,s,r){const a=r.id,{heightAt:o,pathDist:l,plinths:c}=t,u=t.lighthouse.pos,h=new Fe,f=new Ct,d=[],v=(N,lt,Pt,Gt=2,_e=5)=>l(N,lt)>Pt&&Math.hypot(N-u.x,lt-u.z)>_e&&!c.some(ne=>Math.hypot(ne.x-N,ne.z-lt)<Gt),x=(N,lt,Pt=N*20)=>{const Gt=[];for(let _e=0;_e<Pt&&Gt.length<N;_e++){const ne=(n()-.5)*104,ke=(n()-.5)*104,Be=o(ne,ke);lt(ne,ke,Be)&&Gt.push({x:ne,z:ke,h:Be,r:n(),s:n()})}return Gt},m=(N,lt,Pt,Gt,_e=!1)=>{const ne=new ln(N,lt,Math.max(1,Pt.length));return ne.count=Pt.length,Pt.forEach((ke,Be)=>{Gt(ke,Be,ne),h.updateMatrix(),ne.setMatrixAt(Be,h.matrix)}),ne.instanceColor&&(ne.instanceColor.needsUpdate=!0),ne.castShadow=_e,ne.receiveShadow=!0,i.add(ne),ne},p=(e.mobile?.55:1)*1.8,y=Pa([-.5,0,.5].map(N=>{const lt=new hi(.07,.55,3);return lt.translate(0,.27,0),lt.rotateZ(N*.5),lt.translate(N*.12,0,(N*N-.2)*.1),lt})),S=x(Math.round(280*p),(N,lt,Pt)=>Pt>.8&&v(N,lt,1.7,1.7,4.4));m(y,pn("#ffffff"),S,(N,lt,Pt)=>{h.position.set(N.x,N.h-.05,N.z),h.rotation.set(0,N.r*6,0),h.scale.setScalar(.8+N.s*.7),Pt.setColorAt(lt,f.set(a==="vinter"?N.s<.5?"#c8d4c0":"#e6eef4":a==="vulkan"?N.s<.5?"#5a6a3a":"#7a7a4a":N.s<.5?"#7fae4e":"#9cc45e"))});const g=x(Math.round((a==="vinter"?0:a==="vulkan"?30:120)*p),(N,lt,Pt)=>Pt>.85&&v(N,lt,1.9,2,4.5)),E=new Ne(.025,.03,.4,4);E.translate(0,.2,0);const T=new $i(.11,0);T.translate(0,.42,0);const w=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];m(E,pn("#5f8f3a"),g,N=>{h.position.set(N.x,N.h-.03,N.z),h.rotation.set(0,0,0),h.scale.setScalar(.9+N.s*.6)}),m(T,pn("#ffffff"),g,(N,lt,Pt)=>{h.position.set(N.x,N.h-.03,N.z),h.scale.setScalar(.9+N.s*.6),Pt.setColorAt(lt,f.set(w[Math.floor(N.r*w.length)]))});const A=x(Math.round((a==="tak"?36:0)*p),(N,lt,Pt)=>Pt>1&&v(N,lt,2.4,2.4,5)),M=new di(.22,8,4,0,Math.PI*2,0,Math.PI/2);M.scale(1,.7,1),M.translate(0,.28,0);const _=new Ne(.07,.09,.3,6);_.translate(0,.14,0),m(_,pn("#f4ead6"),A,N=>{h.position.set(N.x,N.h-.03,N.z),h.rotation.set(0,0,(N.r-.5)*.3),h.scale.setScalar(.8+N.s)},!0),m(M,pn("#ffffff"),A,(N,lt,Pt)=>{h.position.set(N.x,N.h-.03,N.z),h.rotation.set(0,0,(N.r-.5)*.3),h.scale.setScalar(.8+N.s),Pt.setColorAt(lt,f.set(N.r<.6?"#d8453a":"#c89a5a"))},!0);const C=Pa([[-.08,0],[.07,.05],[0,-.07]].map(([N,lt],Pt)=>{const Gt=new hi(.04,1.1+Pt*.2,3);return Gt.translate(N,.55+Pt*.1,lt),Gt}).concat([(()=>{const N=new io(.05,.18,2,4);return N.translate(.07,1.25,.05),N})()])),D=x(Math.round(150*p),(N,lt,Pt)=>Pt>.05&&Pt<.55&&v(N,lt,2.2,2,5),6e3),B=m(C,pn(a==="vinter"?"#a89878":a==="vulkan"?"#5a5a3a":"#9aa856"),D,N=>{h.position.set(N.x,N.h-.1,N.z),h.rotation.set(0,N.r*6,0),h.scale.setScalar(.8+N.s*.6)}),I=[],k=[];for(const N of t.paths)for(const lt of[-1,1]){let Pt=null,Gt=0,_e=0;for(let ne=2;ne<N.length-7;ne+=1.7){const ke=ne/N.length,Be=N.curve.getPointAt(ke),Xe=N.curve.getTangentAt(ke),cn=Be.x-Xe.z*lt*2.25,Te=Be.z+Xe.x*lt*2.25,zn=o(cn,Te);if(!(zn>.5&&_e<=0&&v(cn,Te,1.9,2.6,6))){Pt=null,_e>0&&_e--;continue}I.push({x:cn,z:Te,h:zn}),Pt&&k.push({a:Pt,b:{x:cn,z:Te,h:zn}}),Pt={x:cn,z:Te,h:zn},++Gt>4+Math.floor(n()*5)&&(Gt=0,Pt=null,_e=3+Math.floor(n()*5))}}const G=new Ln(.14,.8,.14);G.translate(0,.4,0);const W=new Ln(1,.07,.06),F=pn("#a07650");m(G,F,I,N=>{h.position.set(N.x,N.h-.05,N.z),h.rotation.set(0,n()*.3,(n()-.5)*.12),h.scale.set(1,1,1)},!0);const K=k.flatMap(N=>[{...N,y:.32},{...N,y:.62}]);m(W,F,K,({a:N,b:lt,y:Pt})=>{const Gt=Math.hypot(lt.x-N.x,lt.z-N.z);h.position.set((N.x+lt.x)/2,(N.h+lt.h)/2+Pt-.05,(N.z+lt.z)/2),h.rotation.set(0,-Math.atan2(lt.z-N.z,lt.x-N.x),0),h.scale.set(Gt,1,1)},!0);const at=r.dockTheta??-2.35,ct=new Et(Math.cos(at),Math.sin(at)),bt=s(at);let Yt=bt-6;for(let N=bt-10;N<bt+4;N+=.25)if(o(ct.x*N,ct.y*N)<.3){Yt=N;break}const nt=new me,ut=pn("#b48a5e"),wt=pn("#6e4a2c"),pt=8,Ft=Yt-2.5;for(let N=0;N<pt/.55;N++){const lt=new Zt(new Ln(.5,.12,2.2),ut);lt.position.set(Ft+N*.55,.75+(n()-.5)*.04,0),lt.rotation.y=(n()-.5)*.05,lt.castShadow=lt.receiveShadow=!0,nt.add(lt)}for(let N=0;N<=pt;N+=2)for(const lt of[-1,1]){const Pt=new Zt(new Ne(.12,.12,2.2,6),wt);Pt.position.set(Ft+N,.1,lt*1.05),Pt.castShadow=!0,nt.add(Pt)}nt.rotation.y=-at,i.add(nt);const Ot=new me,Wt=new Ne(.9,.9,3.4,10,1,!0,0,Math.PI);Wt.rotateZ(Math.PI/2),Wt.rotateX(Math.PI/2),Wt.scale(1,.6,.7);const te=new Zt(Wt,pn("#3f6f9a",{side:$e}));te.rotation.y=Math.PI/2,te.castShadow=!0,Ot.add(te);for(const N of[-.6,.6]){const lt=new Zt(new Ln(.3,.08,1.2),ut);lt.position.set(N,-.15,0),Ot.add(lt)}const ee=new Zt(new Ln(2.4,.06,.12),ut);ee.position.set(.2,.05,.4),ee.rotation.y=.3,Ot.add(ee);const ge=ct.x*(Ft+pt-1)+-ct.y*2.1,X=ct.y*(Ft+pt-1)+ct.x*2.1;Ot.position.set(ge,.3,X),Ot.rotation.y=-at,i.add(Ot);const Ie=new me,ie=new Zt(new Vn(3,1.4,10,5),new Ee({color:"#4a3a2a",wireframe:!0}));ie.position.y=1;const Qt=ie.geometry.attributes.position;for(let N=0;N<Qt.count;N++)Qt.setZ(N,Math.sin(Qt.getX(N)/3*Math.PI+1.5)*.15-Math.abs(Qt.getY(N))*.05);Ie.add(ie);for(const N of[-1.6,1.6]){const lt=new Zt(new Ne(.07,.09,2,5),wt);lt.position.set(N,.9,0),lt.castShadow=!0,Ie.add(lt)}for(let N=0;N<5;N++){const lt=new Zt(new di(.09,6,4),pn("#f0a43a"));lt.position.set(-1.2+N*.6,1.66,.05),Ie.add(lt)}const Ht=Yt-4.5,de=4.2,$=ct.x*Ht-ct.y*de,R=ct.y*Ht+ct.x*de;Ie.position.set($,o($,R)-.1,R),Ie.rotation.y=-at+Math.PI/2,i.add(Ie),d.push({x:$,z:R,r:1.4});const b=new Ne(.42,.42,.95,10);b.translate(0,.47,0);const V=new Ne(.44,.44,.08,10),J=new Ln(.8,.8,.8);J.translate(0,.4,0);const tt=[],et=(N,lt,Pt,Gt)=>{for(let _e=0;_e<60&&Pt>0;_e++){const ne=N+(n()-.5)*6,ke=lt+(n()-.5)*6,Be=o(ne,ke);Be<.4||!v(ne,ke,2.3,2.4,4.6)||tt.some(Xe=>Math.hypot(Xe.x-ne,Xe.z-ke)<1.1)||(tt.push({x:ne,z:ke,h:Be,kind:Gt??(n()<.6?"barrel":"crate"),r:n()}),Pt--)}};et(ct.x*(Yt-2.5),ct.y*(Yt-2.5),5),et(u.x+6,u.z+1,3,"barrel"),et(u.x-6,u.z+2,2);const yt=tt.filter(N=>N.kind==="barrel"),vt=tt.filter(N=>N.kind==="crate");m(b,pn("#8a5a36"),yt,N=>{h.position.set(N.x,N.h-.05,N.z),h.rotation.set(0,N.r*6,0),h.scale.setScalar(1)},!0),m(V,pn("#3e3a38"),yt.flatMap(N=>[{...N,y:.2},{...N,y:.75}]),N=>{h.position.set(N.x,N.h-.05+N.y,N.z)},!1),m(J,pn("#b8925e"),vt,N=>{h.position.set(N.x,N.h-.05,N.z),h.rotation.set(0,N.r*6,0),h.scale.setScalar(.8+N.r*.4)},!0);for(const N of tt)d.push({x:N.x,z:N.z,r:.55});const St=x(Math.round(380*p),(N,lt,Pt)=>Pt>.9&&v(N,lt,1.6,1.6,4.4)),Kt=new $i(.06,0);Kt.translate(0,.06,0),m(Kt,new Ue({color:a==="vulkan"?"#ff9a5a":"#fffdf4"}),St,N=>{h.position.set(N.x,N.h-.02,N.z),h.rotation.set(0,0,0),h.scale.setScalar(.8+N.s*.8)});const _t=(N,lt,Pt)=>{const Gt=[];for(let _e=0;_e<N*40&&Gt.length<N;_e++){const ne=(n()-.5)*130,ke=(n()-.5)*130,Be=o(ne,ke),Xe=.05-Be;Xe>lt&&Xe<Pt&&Math.hypot(ne-u.x,ke-u.z)>6&&Gt.push({x:ne,z:ke,h:Be,r:n(),s:n()})}return Gt},Nt=Pa([0,1,2].map(N=>{const lt=new hi(.08,.9+N*.25,3);return lt.translate((N-1)*.12,.45+N*.12,N%2*.1),lt.rotateZ((N-1)*.25),lt})),$t=_t(Math.round(90*p),.35,1.8),jt=m(Nt,pn("#4f9a5a"),$t,N=>{h.position.set(N.x,N.h,N.z),h.rotation.set(0,N.r*6,0),h.scale.setScalar(.8+N.s*.7)}),kt=Pa([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([N,lt,Pt])=>{const Gt=new $i(Pt,0);return Gt.translate(N,Pt*.8,lt),Gt})),he=_t(Math.round((a==="tak"?28:0)*p),.5,1.6),Jt=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];m(kt,pn("#ffffff"),he,(N,lt,Pt)=>{h.position.set(N.x,N.h,N.z),h.rotation.set(0,N.r*6,0),h.scale.setScalar(.8+N.s*.9),Pt.setColorAt(lt,f.set(Jt[Math.floor(N.r*Jt.length)]))});const pe=new Wr(.16,0);pe.scale(.45,.3,1.4);const H=_t(e.mobile?5:8,.9,2.6).map(N=>({...N,rad:2+N.s*3,speed:(.25+N.r*.3)*(N.r<.5?1:-1)})),At=9,rt=new ln(pe,new Ee({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,H.length*At));rt.count=H.length*At,rt.renderOrder=1,i.add(rt);const ft=Array.from({length:At},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),Dt=N=>{Ot.position.y=.3+Math.sin(N*1.2)*.08,Ot.rotation.z=Math.sin(N*.9)*.04,Ot.rotation.x=Math.sin(N*1.3+1)*.03,H.forEach((lt,Pt)=>{const Gt=N*lt.speed+lt.r*6,_e=lt.x+Math.cos(Gt)*lt.rad,ne=lt.z+Math.sin(Gt)*lt.rad,ke=Math.atan2(-Math.sin(Gt)*lt.speed,Math.cos(Gt)*lt.speed);for(let Be=0;Be<At;Be++){const[Xe,cn,Te,zn]=ft[Be];h.position.set(_e+Xe+Math.sin(N*2+zn)*.1,Math.max(o(_e,ne)+.25,-.75)+cn,ne+Te),h.rotation.set(0,ke+Math.sin(N*6+zn)*.15,0),h.scale.setScalar(1),h.updateMatrix(),rt.setMatrixAt(Pt*At+Be,h.matrix)}}),rt.instanceMatrix.needsUpdate=!0,!((N*60|0)%2)&&(D.forEach((lt,Pt)=>{h.position.set(lt.x,lt.h-.1,lt.z),h.rotation.set(Math.sin(N*1.7+lt.x*.3)*.08,lt.r*6,Math.cos(N*1.4+lt.z*.3)*.08),h.scale.setScalar(.8+lt.s*.6),h.updateMatrix(),B.setMatrixAt(Pt,h.matrix)}),B.instanceMatrix.needsUpdate=!0,$t.forEach((lt,Pt)=>{h.position.set(lt.x,lt.h,lt.z),h.rotation.set(Math.sin(N*1.1+lt.x)*.12,lt.r*6,Math.cos(N*.9+lt.z)*.12),h.scale.setScalar(.8+lt.s*.7),h.updateMatrix(),jt.setMatrixAt(Pt,h.matrix)}),jt.instanceMatrix.needsUpdate=!0)};nt.updateMatrixWorld(!0);const Rt=[];return nt.children.forEach(N=>{if(N.geometry.type==="CylinderGeometry"){const lt=N.getWorldPosition(new O);Rt.push({x:lt.x,z:lt.z,r:.15})}}),Rt.push({x:ge,z:X,r:.9}),{colliders:d,update:Dt,obstacles:Rt}}function iu(i,{heightTex:t,ext:e,grid:n,quality:s,sunDir:r,colors:a,level:o=.05,size:l=220,center:c=[0,0],maxDepth:u=100}){const h=Jn.merge([Lt.fog,{uTime:{value:0},uHeight:{value:t},uExt:{value:e},uGrid:{value:n},uLevel:{value:o},uMaxDepth:{value:u},uShallow:{value:new Ct(a.shallow)},uMid:{value:new Ct(a.mid)},uDeep:{value:new Ct(a.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*a.caustic}}]);h.uHeight.value=t;const f=new Ve({uniforms:h,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
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
      }`}),d=l<50?8:s.mobile?40:64,v=new Vn(l,l,d,d);v.rotateX(-Math.PI/2);const x=new Zt(v,f);return x.position.set(c[0],o,c[1]),x.renderOrder=2,i.add(x),{mesh:x,update(m){h.uTime.value=m}}}function su(i,t){const e=new eo(Float32Array.from(i),t,t,Ja,ti);return e.magFilter=e.minFilter=gn,e.generateMipmaps=!1,e.needsUpdate=!0,e}const Kl={uOlPx:{value:2},uOlRes:{value:new Et(1,1)}},kx=.16,Jl={rock:new Set,tree:new Set,tower:new Set,figure:new Set},Ql={rock:!0,tree:!0,tower:!0,figure:!0};function Bx(i,t,e,n){Kl.uOlPx.value=i*t,Kl.uOlRes.value.set(Math.max(1,e*t),Math.max(1,n*t))}function df(i){for(const t in Jl)Ql[t]=!!i[t],Jl[t].forEach(e=>e.visible=Ql[t])}function pf(i){if(i.attributes.olNormal)return;i.attributes.normal||i.computeVertexNormals();const t=i.attributes.position,e=i.attributes.normal,n=t.count,s=new Map,r=new Array(n);for(let o=0;o<n;o++){const l=`${Math.round(t.getX(o)*1e4)},${Math.round(t.getY(o)*1e4)},${Math.round(t.getZ(o)*1e4)}`;r[o]=l;const c=s.get(l)||[0,0,0];c[0]+=e.getX(o),c[1]+=e.getY(o),c[2]+=e.getZ(o),s.set(l,c)}const a=new Float32Array(n*3);for(let o=0;o<n;o++){const l=s.get(r[o]),c=Math.hypot(l[0],l[1],l[2])||1;a[o*3]=l[0]/c,a[o*3+1]=l[1]/c,a[o*3+2]=l[2]/c}i.setAttribute("olNormal",new ze(a,3))}const Yo=new Map;function mf(i,t,e,n){const s=`${i?i.uuid:"batch"}|${t}|${e}|${n}`;if(Yo.has(s))return Yo.get(s);const r=new Ee({side:wn,vertexColors:e});return r.color.copy(e||!i?new Ct(1,1,1):i.color).multiplyScalar(kx),r.visible=Ql[t],r.onBeforeCompile=a=>{Object.assign(a.uniforms,Kl),a.vertexShader=`attribute vec3 olNormal;
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
`+a.fragmentShader,n&&(a.uniforms.uKeep=cr.uKeep,a.uniforms.uRad=cr.uRad,a.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+a.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
          if (k > 0.0 && vOlZ < uKeep.z + 0.8) { // kronen ligger ~2 enheter nærmere kameraet enn foten
            float b = mod(floor(gl_FragCoord.x) + 2.0 * floor(gl_FragCoord.y), 4.0) / 4.0;
            if (k * 0.9 > b + 0.05) discard;
          }
        }`))},r.customProgramCacheKey=()=>`ol${n?"f":""}`,Jl[t].add(r),Yo.set(s,r),r}const gf=i=>{const t=i.material;return i.isMesh&&!Array.isArray(t)&&(t.isMeshLambertMaterial||t.isMeshStandardMaterial)&&!t.transparent&&t.side!==$e};function vf(i,t,e=!1){if(!gf(i))return null;pf(i.geometry);const n=!!(i.material.vertexColors&&i.geometry.attributes.color),s=new ln(i.geometry,mf(i.material,t,n,e),i.instanceMatrix.count);return s.instanceMatrix=i.instanceMatrix,s.count=i.count,s.frustumCulled=!1,s.renderOrder=1,s.onBeforeRender=()=>{s.count=i.count},i.add(s),s}const ru=512,au=new Map;let tc=null;function Gx(i){tc=i}function Vx(i,t){const e=`${i.uuid}|${t}`;let n=au.get(e);if(n)return n;pf(i);const s=new ln(i,mf(null,t,!1,!1),ru);return s.instanceMatrix.setUsage(Yc),s.setColorAt(0,new Ct),s.instanceColor.setUsage(Yc),s.count=0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.renderOrder=1,s.raycast=()=>{},n={mesh:s,parts:[]},s.onBeforeRender=()=>{const r=s.instanceMatrix.array,a=s.instanceColor.array;let o=0;for(let l=n.parts.length-1;l>=0;l--){const c=n.parts[l];let u=c,h=!0;for(;u.parent;){if(!u.visible){h=!1;break}u=u.parent}if(u!==tc){++c.userData.olMiss>300&&n.parts.splice(l,1);continue}if(c.userData.olMiss=0,!h||o>=ru)continue;r.set(c.matrixWorld.elements,o*16);const f=c.material.color;a[o*3]=f.r,a[o*3+1]=f.g,a[o*3+2]=f.b,o++}s.count=o,o&&(s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,o*16),s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,o*3),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0)},tc.add(s),au.set(e,n),n}function Ic(i,t){return i.traverse(e=>{!gf(e)||e.userData.noOutline||(e.userData.olMiss=0,Vx(e.geometry,t).parts.push(e))}),i}function Ms(i){const t=i.map(([h])=>h.index?h.toNonIndexed():h),e=t.reduce((h,f)=>h+f.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Ct,a=new O;let o=0;t.forEach((h,f)=>{const d=i[f][1],v=h.attributes.position;for(let x=0;x<v.count;x++)a.fromBufferAttribute(v,x),d(a,r),n.set([a.x,a.y,a.z],(o+x)*3),s.set([r.r,r.g,r.b],(o+x)*3);o+=v.count});const l=new Pe;l.setAttribute("position",new ze(n,3)),l.setAttribute("color",new ze(s,3)),l.computeVertexNormals();let c=0;const u=l.attributes.normal;return t.forEach((h,f)=>{const d=i[f][2],v=h.attributes.position.count;if(d)for(let x=0;x<v;x++)a.fromBufferAttribute(l.attributes.position,c+x).sub(d).normalize(),u.setXYZ(c+x,a.x,a.y,a.z);c+=v}),l}const ec=.7,nc=3.8;function Hx(){const i=[],e=nc/8,n=new Ct("#7a5434"),s=new Ct("#a57a4e");for(let r=0;r<8;r++){const a=r/8,o=(r+1)/8,l=.24-a*.08,c=.24-o*.08,u=new Ne(c,l*1.12,e,7,1),h=u.attributes.position;for(let f=0;f<h.count;f++){const d=h.getY(f)+e/2+r*e,v=d/nc;h.setXYZ(f,h.getX(f)+ec*v*v,d,h.getZ(f))}i.push([u,(f,d)=>d.copy(n).lerp(s,f.y/e%1)])}return Ms(i)}function Wx(i){const n=[],s=[];for(let a=0;a<=12;a++){const o=a/12;s.push(new O(0,.35*o-1.25*o*o,o*2.7))}for(let a=0;a<12;a++){const o=a/12,l=s[a],c=s[a+1],u=.62*Math.sin(Math.PI*Math.min(1,o*1.1+.08))+.05;for(const h of[-1,1]){const f=new O(h*u,l.y-.08-u*.25,l.z+.32);n.push(l.x,l.y,l.z,c.x,c.y,c.z,f.x,f.y,f.z)}}const r=new Pe;return r.setAttribute("position",new oe(n,3)),r}function Xx(){const i=[],t=new Ct("#3f8a3a"),e=new Ct("#9ad25a"),n=8;for(let s=0;s<n;s++){const r=Wx();r.rotateX(-.15+s%2*.25),r.rotateY(s/n*Math.PI*2+s%2*.2),i.push([r,(a,o)=>{const l=Math.hypot(a.x,a.z);o.copy(t).lerp(e,Math.min(1,l/2.4))}])}for(let s=0;s<3;s++){const r=new di(.16,6,4);r.translate(Math.cos(s*2.1)*.18,-.2,Math.sin(s*2.1)*.18),i.push([r,(a,o)=>o.set("#6b4a2a")])}return Ms(i)}function ou(i,t,e){const n=i.map(([s,r,a,o],l)=>{const c=new $i(o,2),u=c.attributes.position;for(let h=0;h<u.count;h++){const f=u.getX(h),d=u.getY(h),v=u.getZ(h),x=1+.07*Math.sin(f*7+l)*Math.sin(d*6)+.05*Math.sin(v*9+d*4);u.setXYZ(h,f*x,d*x*.92,v*x)}return c.translate(s,r,a),[c,(h,f)=>f.copy(e).lerp(t,Ye.smoothstep(h.y,r-o*.6,r+o*.9)),new O(s,r,a)]});return Ms(n)}function qx(i){const t=[],e=new Ct("#2f6a48"),n=new Ct("#4a8a5a"),s=new Ct("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,a,o])=>{const l=new hi(r,a,10,2),c=l.attributes.position;for(let u=0;u<c.count;u++)c.getY(u)<-a/2+.01&&c.setY(u,c.getY(u)+Math.sin(u*1.7)*.12);l.translate(0,o,0),t.push([l,(u,h)=>{const f=(u.y-o+a/2)/a;h.copy(e).lerp(n,f),i&&f>.12&&h.lerp(s,Math.min(1,(f-.12)*2.6))}])}),Ms(t)}function Yx(){const i=[],t=new Ne(.12,.26,3,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getY(n);e.setX(n,e.getX(n)+Math.sin(s*1.7)*.12)}return t.translate(0,1.5,0),i.push([t,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,a])=>{const o=new Ne(.03,.08,a,4);o.translate(0,a/2,0),o.rotateZ(r),o.translate(n*.3,s,0),i.push([o,(l,c)=>c.set("#2e2622")])}),Ms(i)}const cr={uKeep:{value:new O(-1e4,-1e4,0)},uRad:{value:120}};function lu(i){return i.onBeforeCompile=t=>{t.uniforms.uKeep=cr.uKeep,t.uniforms.uRad=cr.uRad,t.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+t.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      {
        float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
        if (k > 0.0 && -vViewPosition.z < uKeep.z - 1.2) {
          float b = mod(floor(gl_FragCoord.x) + 2.0 * floor(gl_FragCoord.y), 4.0) / 4.0;
          if (k * 0.9 > b + 0.05) discard;
        }
      }`)},i}function $x(i,t,e,n){const s=t.filter(I=>I.kind==="palm"),r=t.filter(I=>I.kind==="round"),a=t.filter(I=>I.kind==="bush"),o=t.filter(I=>I.kind==="pine"),l=t.filter(I=>I.kind==="dead"),c=lu(new Ue({vertexColors:!0})),u=lu(new Ue({vertexColors:!0,side:$e})),h=new Ct(n.trees.leaf[0]),f=new Ct(n.trees.leaf[1]),d=new Ne(.16,.26,1.6,7);d.translate(0,.8,0);const v=Ms([[d,(I,k)=>k.set("#7a5434")]]),x=ou([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],h,f),m=ou([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],h,f),p=(I,k,G)=>{const W=new ln(I,k,Math.max(1,G));return W.count=G,W.castShadow=!0,W.receiveShadow=!0,i.add(W),vf(W,"tree",!0),W},y=p(Hx(),c,s.length),S=p(Xx(),u,s.length),g=p(v,c,r.length),E=p(x,c,r.length),T=p(m,c,a.length),w=new Ne(.14,.22,1.2,6);w.translate(0,.6,0);const A=p(Ms([[w,(I,k)=>k.set("#5a3e2a")]]),c,o.length),M=p(qx(n.id==="vinter"),c,o.length),_=p(Yx(),c,l.length),C=new Fe;s.forEach((I,k)=>{C.position.set(I.x,I.y-.1,I.z),C.rotation.set(0,I.phase,0),C.scale.setScalar(I.s),C.updateMatrix(),y.setMatrixAt(k,C.matrix)}),r.forEach((I,k)=>{C.position.set(I.x,I.y-.1,I.z),C.rotation.set(0,I.phase,0),C.scale.setScalar(I.s),C.updateMatrix(),g.setMatrixAt(k,C.matrix)}),o.forEach((I,k)=>{C.position.set(I.x,I.y-.1,I.z),C.rotation.set(0,I.phase,0),C.scale.setScalar(I.s),C.updateMatrix(),A.setMatrixAt(k,C.matrix)}),l.forEach((I,k)=>{C.position.set(I.x,I.y-.1,I.z),C.rotation.set(0,I.phase,(I.phase%1-.5)*.15),C.scale.setScalar(I.s),C.updateMatrix(),_.setMatrixAt(k,C.matrix)});const D=I=>{s.forEach((k,G)=>{const W=Math.cos(k.phase),F=Math.sin(k.phase);C.position.set(k.x+ec*W*k.s,k.y-.1+nc*k.s,k.z-ec*F*k.s),C.rotation.set(Math.sin(I*1.2+k.phase)*.07,k.phase+Math.sin(I*.7+k.phase)*.05,Math.cos(I*1+k.phase)*.07),C.scale.setScalar(k.s),C.updateMatrix(),S.setMatrixAt(G,C.matrix)}),S.instanceMatrix.needsUpdate=!0,r.forEach((k,G)=>{C.position.set(k.x,k.y-.1,k.z),C.rotation.set(Math.sin(I*1.1+k.phase)*.025,k.phase,Math.cos(I*.9+k.phase)*.025),C.scale.setScalar(k.s),C.updateMatrix(),E.setMatrixAt(G,C.matrix)}),E.instanceMatrix.needsUpdate=!0,a.forEach((k,G)=>{const W=1+Math.sin(I*1.6+k.phase)*.035;C.position.set(k.x,k.y-.12,k.z),C.rotation.set(0,k.phase,0),C.scale.set(k.s*W,k.s/W,k.s*W),C.updateMatrix(),T.setMatrixAt(G,C.matrix)}),T.instanceMatrix.needsUpdate=!0,o.forEach((k,G)=>{C.position.set(k.x,k.y-.1,k.z),C.rotation.set(Math.sin(I*.9+k.phase)*.02,k.phase,Math.cos(I*.8+k.phase)*.02),C.scale.setScalar(k.s),C.updateMatrix(),M.setMatrixAt(G,C.matrix)}),M.instanceMatrix.needsUpdate=!0};return D(0),{colliders:[...s.map(I=>({x:I.x,z:I.z,r:.35*I.s})),...r.map(I=>({x:I.x,z:I.z,r:.4*I.s})),...a.map(I=>({x:I.x,z:I.z,r:.7*I.s})),...o.map(I=>({x:I.x,z:I.z,r:.4*I.s})),...l.map(I=>({x:I.x,z:I.z,r:.3*I.s}))],update:D}}function $o(i,t=5){const e=[],n=[],s=new Ct,r=new Ct;for(let o=0;o<t;o++){const l=i()*Math.PI*2,c=i()*.16,u=.28+i()*.3,h=.04+i()*.03,f=Math.cos(l)*c,d=Math.sin(l)*c,v=(i()-.5)*.25,x=i()*Math.PI,m=Math.cos(x)*h,p=Math.sin(x)*h;e.push(f-m,0,d-p,f+m,0,d+p,f+Math.cos(l)*v,u,d+Math.sin(l)*v),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const a=new Pe;return a.setAttribute("position",new oe(e,3)),a.setAttribute("color",new oe(n,3)),a.setAttribute("normal",new oe(new Array(e.length/3).fill(0).flatMap(()=>[0,1,0]),3)),a}function jx(){const i=[];for(let a=0;a<3;a++){const o=new di(.07,6,3);o.scale(1,.25,1.15);const l=a*2.094;o.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(o.toNonIndexed())}const t=i.reduce((a,o)=>a+o.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const a of i)e.set(a.attributes.position.array,s*3),n.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count;const r=new Pe;return r.setAttribute("position",new ze(e,3)),r.setAttribute("normal",new ze(n,3)),r}function Zx(i,t,e,n,s){const{heightAt:r,pathDist:a,plinths:o}=t,l=t.lighthouse.pos,c={uTime:{value:0}},h=(C=>(C.onBeforeCompile=D=>{D.uniforms.uTime=c.uTime,D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),D.fragmentShader=D.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},C))(new Ue({vertexColors:!0,side:$e})),f=new Ue({color:"#ffffff"}),d=[$o(s,7),$o(s,8),$o(s,6)],v=jx(),x={tak:{grass:["#3f8a3a","#6fbf4a"],density:1,clover:.22,cloverCol:["#3a8a3a","#5aa84a"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(e.mobile?.45:1)*x.density,p=13,y=8,S=Math.round(720*m),g=[],E=new Fe,T=new Ct,w=new Ct(x.grass[0]),A=new Ct(x.grass[1]),M=(C,D,B)=>{if(B<.72)return!1;const I=a(C,D);if(I<1||I<1.7&&s()<.6||Math.hypot(C-l.x,D-l.z)<4.3||n.volcano&&Math.hypot(C-n.volcano.x,D-n.volcano.z)<n.volcano.r*.7)return!1;for(const k of o)if((k.x-C)**2+(k.z-D)**2<2.6)return!1;return!t.extrasBlock||!t.extrasBlock(C,D)};for(let C=0;C<y;C++)for(let D=0;D<y;D++){const B=-y*p/2+C*p,I=-y*p/2+D*p;for(const[k,G]of[[0,S*.4],[1,S*.35],[2,S*.25]]){const W=[];for(let K=0;K<G*3&&W.length<G;K++){const at=B+s()*p,ct=I+s()*p,bt=r(at,ct);M(at,ct,bt)&&W.push([at,ct,bt])}if(!W.length)continue;const F=new ln(d[k],h,W.length);F.userData.tier=k,W.forEach(([K,at,ct],bt)=>{E.position.set(K,ct-.04,at),E.rotation.set(0,s()*6.28,0),E.scale.setScalar(.8+s()*.7),E.updateMatrix(),F.setMatrixAt(bt,E.matrix),F.setColorAt(bt,T.copy(w).lerp(A,s()))}),F.receiveShadow=!0,F.computeBoundingSphere(),i.add(F),g.push(F)}if(x.clover>0){const k=[],G=B+s()*p,W=I+s()*p;for(let F=0;F<S*x.clover*3&&k.length<S*x.clover;F++){const K=G+(s()-.5)*6,at=W+(s()-.5)*6,ct=r(K,at);M(K,at,ct)&&k.push([K,at,ct])}if(k.length){const F=new ln(v,f,k.length),K=new Ct(x.cloverCol[0]),at=new Ct(x.cloverCol[1]);k.forEach(([ct,bt,Yt],nt)=>{E.position.set(ct,Yt-.02,bt),E.rotation.set(0,s()*6.28,0),E.scale.setScalar(.8+s()*.8),E.updateMatrix(),F.setMatrixAt(nt,E.matrix),F.setColorAt(nt,T.copy(K).lerp(at,s()))}),F.receiveShadow=!0,F.userData.tier=1,F.computeBoundingSphere(),i.add(F),g.push(F)}}}return{update(C){c.uTime.value=C},setLevel:C=>g.forEach(D=>{D.visible=C==="high"||D.userData.tier===0,D.receiveShadow=C==="high"}),count:g.reduce((C,D)=>C+D.count,0)}}function cu(i,{arms:t=4,rStart:e=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:a=16}={}){const o=[];for(let l=0;l<t;l++){const c=r+l/t*Math.PI*2,u=[];for(let h=0;h<=a;h++){const f=h/a,d=e*(1-f)+n*f,v=c+f*s*Math.PI*2;u.push([i[0]+Math.cos(v)*d,i[1]+Math.sin(v)*d])}o.push(u)}return o}const Kx={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},Jx=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],Qx=[90,210,330].map(i=>i*Math.PI/180),Xa=11,t_=()=>{const i=[];for(let e=0;e<=48;e++){const n=e/48*Math.PI*2;i.push([Math.cos(n)*Xa,Math.sin(n)*Xa])}const t=Qx.map(e=>[Xa,20,30,40,50].map((n,s)=>{const r=e+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...t]},vr=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:cu([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#dcc796",grass:"#62a84a",grass2:"#44893a",path:"#b49c74",deep:"#cdb987",pathMix:.35},water:{shallow:"#a6e6cc",mid:"#45c2ae",deep:"#1f9aa2",caustic:1},sky:{fog:"#b9d4dc",hemiSky:"#eaf4ff",hemiGround:"#4a5a44",hemi:1.1,sun:"#fff1d8",sunI:2.5,exposure:1,sunDir:[14,30,10],grade:{tint:[1,1,.99],lift:[0,.006,.02],sat:1.06,vignette:.22}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a8d85a","#2f7a3a"]},rock:["#a9a49c","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.5,types:{clerk:{hp:.7},complainer:{hp:.7},tank:{hp:.75}},extra:null},intro:{complainer:2,drone:3,lobbyist:5,heli:6,auditor:7,balloon:8}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:Jx,shape:"fjord",fjord:Kx,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4"},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#8a929c","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,types:{tank:{hp:.95},clerk:{hp:1},lobbyMini:{hp:.9}},extra:{type:"tank",n:1,gap:4,path:"both",from:3}},intro:{balloon:3,auditor:4,lobbyist:5,drone:5,heli:6,complainer:6}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:cu([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:t_(),moat:Xa,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,types:{lobbyist:{hp:.6},lobbyMini:{hp:.6},clerk:{hp:.85},complainer:{hp:.85}},extra:{type:"gull",n:1,gap:1.4,from:3}},intro:{complainer:2,drone:2,lobbyist:3,heli:4,auditor:5,balloon:7}}];function e_(i){const[t,e,n]=i.edgeAmp,s=i.seed;return r=>i.radius+t*Math.sin(3*r+.4*s)+e*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}const hu={clerk:["complainer","lobbyist"],swarm:["complainer"],tank:["auditor","lobbyist"],gull:["drone","heli","balloon"]},jo={clerk:22,swarm:7,tank:95,gull:16,complainer:17,lobbyist:97,auditor:112,drone:9,heli:62,balloon:150},Zo={complainer:.6,lobbyist:1.8,auditor:2.2,drone:.4,heli:2.4,balloon:3.5};function n_(i,t){let e=i.seed*9301+49297;const n=()=>(e=(e*9301+49297)%233280)/233280,s=i.intro||{};return t.map((r,a)=>{const o=a+1,l=r.map(f=>({...f})),c=i.balance.extra;c&&o>=c.from&&l.push({...c,n:c.n+Math.floor((o-c.from)/2),at:5});const u=(f,d,v)=>Math.max(1,Math.round(f*Math.min(1,jo[d]/jo[v]))),h=(f,d)=>{f.n=u(f.n,f.type,d),f.gap=Zo[d]??f.gap,f.type=d};for(const[f,d]of Object.entries(s)){if(d!==o)continue;const v=l.find(x=>{var m;return(m=hu[x.type])==null?void 0:m.includes(f)});if(v&&v.n>=2){const x=Math.floor(v.n/2);l.push({...v,type:f,n:u(x,v.type,f),gap:Zo[f]??v.gap,at:(v.at??0)+2}),v.n-=x}else v?h(v,f):l.push({type:f,n:Math.max(1,Math.min(3,Math.round(44/jo[f]))),gap:Zo[f],path:0,at:6})}for(const f of l){const d=(hu[f.type]||[]).filter(v=>s[v]&&s[v]<o);d.length&&n()<.45&&h(f,d[Math.floor(n()*d.length)])}return l})}function qr(){try{return Math.max(1,Math.min(vr.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function i_(i){try{i+2>qr()&&localStorage.setItem("glod-unlocked",String(Math.min(vr.length,i+2)))}catch{}}function Da(i,t,{color:e,size:n,speed:s,drift:r,additive:a,area:o=46,top:l=22}){const c=new Float32Array(t*3),u=new Float32Array(t);for(let p=0;p<t;p++)c[p*3]=(Math.random()-.5)*o*2,c[p*3+1]=Math.random()*l,c[p*3+2]=(Math.random()-.5)*o*2,u[p]=Math.random()*6.28;const h=new Pe;h.setAttribute("position",new ze(c,3));const f=document.createElement("canvas");f.width=f.height=32;const d=f.getContext("2d"),v=d.createRadialGradient(16,16,0,16,16,16);v.addColorStop(0,"rgba(255,255,255,1)"),v.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=v,d.fillRect(0,0,32,32);const x=new no({color:e,size:n,map:new Ri(f),transparent:!0,depthWrite:!1,blending:a?ei:qi,opacity:a?1:.85}),m=new Tc(h,x);return m.frustumCulled=!1,i.add(m),(p,y,S)=>{for(let g=0;g<t;g++){let E=c[g*3+1]-s*p*(.7+u[g]%1*.6);c[g*3]+=Math.sin(S*.7+u[g])*r*p,(s<0?E>l:E<0)&&(E=s<0?0:l,c[g*3]=y.x+(Math.random()-.5)*o*2,c[g*3+2]=y.z+(Math.random()-.5)*o*2),c[g*3+1]=E}h.attributes.position.needsUpdate=!0}}function s_(i,t,e,n,s=160){const r=new Rc(i.map(([h,f])=>new O(h,0,f))),a=r.getLength(),o=[],l=[],c=[];for(let h=0;h<=s;h++){const f=h/s,d=r.getPointAt(f),v=r.getTangentAt(f),x=-v.z,m=v.x,p=t*(.75+.25*Math.sin(f*9));for(const y of[-1,1]){const S=d.x+x*p*y,g=d.z+m*p*y;o.push(S,e(S,g)+n,g),l.push(f*a,(y+1)/2)}if(h<s){const y=h*2;c.push(y,y+1,y+2,y+1,y+3,y+2)}}const u=new Pe;return u.setAttribute("position",new oe(o,3)),u.setAttribute("uv",new oe(l,2)),u.setIndex(c),u.computeVertexNormals(),{geo:u,curve:r,len:a}}function r_(i,t,e,n){var x;const{heightAt:s}=t,r=[],a=[],o=[],l=[],c=[],u=e.mobile?.5:1,h=new Set(n.life);if(h.has("aurora")){const m=new Ve({transparent:!0,depthWrite:!1,blending:ei,side:$e,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const[p,y,S]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const g=new Zt(new Vn(150,26,96,1),m);g.position.set(p,20,y),g.rotation.y=S,i.add(g)}a.push((p,y,S)=>m.uniforms.uTime.value=S)}if(h.has("snow")&&a.push(Da(i,Math.round(900*u),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),h.has("ash")&&a.push(Da(i,Math.round(500*u),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),h.has("embers")&&a.push(Da(i,Math.round(160*u),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),h.has("icefloes")){const m=[];for(let E=0;E<6e3&&m.length<70*u;E++){const T=(Math.random()-.5)*120,w=(Math.random()-.5)*120,A=.05-s(T,w);A>.15&&A<1.4&&m.every(M=>Math.hypot(M.x-T,M.z-w)>2.2)&&m.push({x:T,z:w,s:.6+Math.random()*1.1,r:Math.random()*6})}const p=new Ne(1,.9,.18,7),y=p.attributes.position;for(let E=0;E<y.count;E++){const T=Math.atan2(y.getZ(E),y.getX(E)),w=.75+.35*Math.abs(Math.sin(T*2.3+E));y.setX(E,y.getX(E)*w),y.setZ(E,y.getZ(E)*w)}p.computeVertexNormals();const S=new ln(p,new Ue({color:"#eaf6ff"}),Math.max(1,m.length));S.count=m.length,S.receiveShadow=!0,i.add(S);const g=new Fe;a.push((E,T,w)=>{m.forEach((A,M)=>{g.position.set(A.x+Math.sin(w*.1+A.r)*.4,.08+Math.sin(w*1.1+A.r)*.03,A.z),g.rotation.set(Math.sin(w*.9+A.r)*.03,A.r+w*.02,Math.cos(w*.8+A.r)*.03),g.scale.set(A.s,1,A.s),g.updateMatrix(),S.setMatrixAt(M,g.matrix)}),S.instanceMatrix.needsUpdate=!0})}if(n.lava){const m=new Ve({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const g of n.lava){const E=s_(g,1.25,s,.07);i.add(new Zt(E.geo,m));const T=[];let w=!1;for(let A=0;A<=1;A+=1.4/E.len){const M=E.curve.getPointAt(Math.min(1,A));if(t.pathDist(M.x,M.z)<2.4){w||c.push({x:M.x,z:M.z,tan:E.curve.getTangentAt(Math.min(1,A))}),w=!0;continue}w=!1,o.push({x:M.x,z:M.z,r:1.4})}for(const A of[.25,.7]){const M=E.curve.getPointAt(A),_=new Xr("#ff6a2a",14,12,1.6);_.position.set(M.x,s(M.x,M.z)+1.2,M.z),i.add(_),T.push(_)}a.push((A,M,_)=>T.forEach((C,D)=>C.intensity=12+3*Math.sin(_*2.3+D)))}a.push((g,E,T)=>m.uniforms.uTime.value=T);const p=new Ln(3.4,.35,4.2),y=new Ue({color:((x=n.rock)==null?void 0:x[0])??"#555"}),S=new Ne(2.4,2.4,.1,18);for(const g of c){const E=s(g.x,g.z)+.12,T=new Zt(p,y);T.position.set(g.x,E,g.z),T.rotation.y=-Math.atan2(g.tan.z,g.tan.x),T.castShadow=T.receiveShadow=!0,i.add(T);const w=new Zt(S,new Ee({color:new Ct("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));w.position.set(g.x,E+.25,g.z),w.visible=!1,i.add(w);const A=new Xr("#ff6a2a",0,14,1.6);A.position.set(g.x,E+1.6,g.z),i.add(A);let M=!1;l.push({x:g.x,z:g.z,get closed(){return M},setClosed(_){M=_,w.visible=_}}),a.push((_,C,D)=>{const B=M?1:0;w.material.opacity+=(B*.9-w.material.opacity)*Math.min(1,_*3),!M&&w.material.opacity<.02&&(w.visible=!1),A.intensity=w.material.opacity*(22+6*Math.sin(D*9))})}}if(n.volcano){const m=n.volcano;o.push({x:m.x,z:m.z,r:m.r*.55});const p=new Zt(new lr(m.r*.22,20),new Ee({color:new Ct("#ff5a1a").multiplyScalar(2.4)}));p.rotation.x=-Math.PI/2,p.position.set(m.x,s(m.x,m.z)+.2,m.z),i.add(p);const y=new so(.35,0),S=[];for(let T=0;T<3e3&&S.length<50*u;T++){const w=(Math.random()-.5)*96,A=(Math.random()-.5)*96,M=s(w,A);M>.4&&t.pathDist(w,A)>2.2&&S.push({x:w,z:A,h:M,s:.5+Math.random()})}const g=new ln(y,new Ee({color:new Ct("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,S.length));g.count=S.length;const E=new Fe;S.forEach((T,w)=>{E.position.set(T.x,T.h,T.z),E.rotation.set(T.s,T.s*3,0),E.scale.set(T.s,T.s*.5,T.s),E.updateMatrix(),g.setMatrixAt(w,E.matrix)}),i.add(g)}if(n.waterfall&&n.waterfall._lvl!==void 0){const m=n.waterfall,p=m.basin[0]-m.lip[0],y=m.basin[1]-m.lip[1],S=Math.hypot(p,y),g=p/S,E=y/S,T=m._lvl-.1,w=14,A=1.25,M=[],_=[],C=[];for(let F=0;F<=w;F++){const K=F/w,at=.35+1.5*K*K,ct=T-(T-.06)*(K*K*.6+K*.4);for(const bt of[-1,1])M.push(m.lip[0]+g*at-E*A*bt*(.85+K*.3),ct,m.lip[1]+E*at+g*A*bt*(.85+K*.3)),_.push((bt+1)/2,K);if(F<w){const bt=F*2;C.push(bt,bt+1,bt+2,bt+1,bt+3,bt+2)}}const D=new Pe;D.setAttribute("position",new oe(M,3)),D.setAttribute("uv",new oe(_,2)),D.setIndex(C);const B=new Ve({transparent:!0,depthWrite:!1,side:$e,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new Zt(D,B));const I=new Zt(new lr(1.4,20),new Ee({color:"#ffffff",transparent:!0,opacity:.7,depthWrite:!1}));I.rotation.x=-Math.PI/2;const k=m.lip[0]+g*1.9,G=m.lip[1]+E*1.9;I.position.set(k,.1,G),i.add(I);const W=Da(i,Math.round(60*u),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});a.push((F,K,at)=>{B.uniforms.uTime.value=at,I.scale.setScalar(1+Math.sin(at*5)*.08),I.material.opacity=.55+.15*Math.sin(at*7),W(F,{x:k,z:G},at)}),o.push({x:k,z:G,r:.9})}const f=(m,p)=>o.some(y=>(y.x-m)**2+(y.z-p)**2<y.r*y.r);let d=0;return{colliders:r,update:(m,p=t.lighthouse.pos)=>{const y=Math.min(.05,Math.max(0,m-d));d=m;for(const S of a)S(y,p,m)},blocks:f,blockers:o,bridges:l}}const hr=20;function si(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function a_(i){const t=new Rc(i.map(([s,r])=>new O(s,0,r)),!1,"catmullrom",.5),e=t.getLength(),n=t.getSpacedPoints(400);return{curve:t,length:e,samples:n}}function o_(i,t,e,n){const s=3+n%2,r=[],a=[],o=[],l=new Ct(t),c=l.clone().multiplyScalar(.72),u=new Ct(e),h=new Ct;let f=0,d=0,v=0;for(let m=0;m<s;m++){const p=1.25-m*.22+i()*.15,y=.45+i()*.25,S=new $i(1,2).toNonIndexed(),g=S.attributes.position,E=S.attributes.uv;for(let T=0;T<g.count;T++){let w=g.getX(T),A=g.getY(T),M=g.getZ(T);A=Math.sign(A)*Math.pow(Math.abs(A),.55);const _=1+.12*Math.sin(w*5+m)*Math.sin(M*4+n)+.06*Math.sin(A*9);w*=p*_,M*=p*.85*_,A=A*y*.5;const C=Ye.smoothstep(A/(y*.5),.45,.85);h.copy(c).lerp(l,Ye.smoothstep(A/(y*.5),-.9,.3)).lerp(u,C*(m===s-1?1:.6)),r.push(w+d,A+f+y*.5,M+v),a.push(h.r,h.g,h.b),o.push(E.getX(T)*2,E.getY(T)*2)}f+=y*.82,d+=(i()-.5)*.4,v+=(i()-.5)*.35}const x=new Pe;return x.setAttribute("position",new oe(r,3)),x.setAttribute("color",new oe(a,3)),x.setAttribute("uv",new oe(o,2)),x.computeVertexNormals(),x}function l_(i,t,e){const n=e_(e),s=new O(e.lighthouse[0],0,e.lighthouse[1]),r=e.paths.map(a_),a=r.flatMap(z=>z.samples),o=(z,L)=>{let j=1/0;for(let ot=0;ot<a.length;ot+=3){const dt=a[ot],Mt=(dt.x-z)**2+(dt.z-L)**2;Mt<j&&(j=Mt)}return Math.sqrt(j)};if(e.plateausAuto&&!e.plateaus){const z=si(500+e.seed),L=[];for(const j of e.plateausAuto){let ot=null,dt=-1;for(let Mt=0;Mt<500;Mt++){const xt=z()*Math.PI*2,Q=12+z()*24,Bt=Math.cos(xt)*Q,It=Math.sin(xt)*Q,le=o(Bt,It);if(le<j.r+3.5||Math.hypot(Bt-s.x,It-s.z)<j.r+9||L.some(ye=>Math.hypot(ye.x-Bt,ye.z-It)<ye.r+j.r+5))continue;const ve=Math.min(le-j.r,9)+z()*.5;ve>dt&&(dt=ve,ot={x:Bt,z:It,...j})}ot&&L.push(ot)}if(e.plateaus=L,e.waterfall&&L[0]){const j=L[0],ot=e.waterfall;let dt=0,Mt=-1;for(let Bt=0;Bt<16;Bt++){const It=Bt/16*Math.PI*2,le=j.x+Math.cos(It)*(j.r+3.2),ve=j.z+Math.sin(It)*(j.r+3.2),ye=o(le,ve);ye>Mt&&(Mt=ye,dt=It)}const xt=Math.cos(dt),Q=Math.sin(dt);ot.pool=[j.x+xt*(j.r-2.4),j.z+Q*(j.r-2.4)],ot.lip=[j.x+xt*(j.r-.3),j.z+Q*(j.r-.3)],ot.basin=[j.x+xt*(j.r+3),j.z+Q*(j.r+3)]}}const l=e.fjord,c=e.nes,u=(z,L)=>{if(e.shape==="fjord"){const j=L+30+2.2*Math.sin(z*.21)+1.2*Math.sin(z*.53+1),ot=Ye.clamp(L,c.z1,c.z0),dt=c.r-Math.hypot(z-c.x,L-ot)+(L<c.z1?0:.6*Math.sin(L*.7));return Math.max(j,dt)}return n(Math.atan2(L,z))-Math.hypot(z,L)},h=(z,L,j=!1)=>{const ot=Ye.smoothstep(u(z,L),-3,7),dt=.9+.7*Math.sin(z*.17+1)*Math.cos(L*.21)+.35*Math.sin(z*.5+L*.4)+.3*Math.sin(z*.31-L*.23+2.1)+.18*Math.cos(z*.73+L*.61),Mt=2.4*Math.exp(-((z-s.x-2)**2+(L-s.z+1)**2)/60);let xt=-2.2+ot*(2.2+dt+Mt);if(ot>.85&&xt<.35&&(xt=Math.max(-.42,.35-(.35-xt)*3.2)),l){const Q=Math.max(Ye.smoothstep(Math.abs(z),l.wall-3,l.wall+6),Ye.smoothstep(L,l.top+6,l.top+14));xt+=Q*(7+1.5*Math.sin(L*.13+z*.05));const Bt=Math.abs(z-l.xc(L)),It=1-Ye.smoothstep(L,l.top-6,l.top+2);Bt<l.w+1.5&&It>0&&(xt=Math.min(xt,Ye.lerp(xt,-1.6,It*(1-Ye.smoothstep(Bt,l.w-.8,l.w+1.5)))))}for(const Q of e.plateaus||[]){const Bt=Math.hypot(z-Q.x,L-Q.z),It=Math.atan2(L-Q.z,z-Q.x),le=Q.r+Math.sin(It*5+Q.x)*.8+Math.sin(It*11)*.3;xt+=Q.h*Ye.smoothstep(le-Bt,0,1.3)}if(e.waterfall&&!j){const Q=e.waterfall,Bt=Math.hypot(z-Q.pool[0],L-Q.pool[1]);Bt<Q.poolR+.6&&(Q._lvl??(Q._lvl=h(Q.pool[0],Q.pool[1],!0)-.12),xt=Math.min(xt,Q._lvl-.48*Math.sqrt(Math.max(0,1-Bt/(Q.poolR+.6)))));const It=Ye.clamp(((z-Q.pool[0])*(Q.lip[0]-Q.pool[0])+(L-Q.pool[1])*(Q.lip[1]-Q.pool[1]))/((Q.lip[0]-Q.pool[0])**2+(Q.lip[1]-Q.pool[1])**2),0,1),le=Q.pool[0]+(Q.lip[0]-Q.pool[0])*It,ve=Q.pool[1]+(Q.lip[1]-Q.pool[1])*It;Math.hypot(z-le,L-ve)<.75&&Q._lvl!==void 0&&(xt=Math.min(xt,Q._lvl-.25));const ye=Math.hypot(z-Q.basin[0],L-Q.basin[1]);ye<Q.basinR&&(xt=Math.min(xt,Math.max(-.42,.05-.47*Math.sqrt(1-ye/Q.basinR))))}if(e.volcano){const Q=e.volcano,Bt=Math.hypot(z-Q.x,L-Q.z);xt+=Q.h*Math.max(0,1-Bt/Q.r)**1.4-Q.h*.5*Math.max(0,1-Bt/(Q.r*.25))}return xt},f=68,d=t.mobile?160:176,v=new Float32Array((d+1)*(d+1)),x=new Float32Array((d+1)*(d+1));for(let z=0;z<=d;z++)for(let L=0;L<=d;L++){const j=-f+L/d*f*2,ot=-f+z/d*f*2,dt=o(j,ot);x[z*(d+1)+L]=dt;let Mt=h(j,ot);const xt=Ye.smoothstep(dt,1.4,3.2),Q=Math.max(h(j,ot)*.6+.3,.45);Mt=Ye.lerp(Math.min(Mt,Q+.1),Mt,xt),l&&Math.abs(ot-l.bridgeZ)<4&&Math.abs(j-l.xc(ot))<l.w+2&&dt<2.2&&(Mt=Math.max(Mt,.5)),v[z*(d+1)+L]=Mt}const m=(z,L,j)=>{const ot=Ye.clamp((L+f)/(f*2)*d,0,d-.001),dt=Ye.clamp((j+f)/(f*2)*d,0,d-.001),Mt=Math.floor(ot),xt=Math.floor(dt),Q=ot-Mt,Bt=dt-xt,It=z[xt*(d+1)+Mt],le=z[xt*(d+1)+Mt+1],ve=z[(xt+1)*(d+1)+Mt],ye=z[(xt+1)*(d+1)+Mt+1];return(It*(1-Q)+le*Q)*(1-Bt)+(ve*(1-Q)+ye*Q)*Bt},p=(z,L)=>m(v,z,L),y=(z,L)=>m(x,z,L),S=(z,L)=>p(z,L)>.35,g=.5,E=(z,L)=>Math.max(Math.abs(p(z+.4,L)-p(z-.4,L)),Math.abs(p(z,L+.4)-p(z,L-.4)))/.8,T=(z,L)=>!!l&&Math.abs(L-l.bridgeZ)<4&&Math.abs(z-l.xc(L))<l.w+1.5&&y(z,L)<2.6,w=new Ct("#cfeaff"),A=(z,L)=>p(z,L)>.05-g&&E(z,L)<1.05,M=t.mobile?170:256,_=new Vn(f*2,f*2,M,M);_.rotateX(-Math.PI/2);const C=_.attributes.position,D=new Float32Array(C.count*3),B=new Float32Array(C.count*3),I=new Float32Array(C.count),k=new Float32Array(C.count*4),G=new Ct,W=new Ct,F=e.palette,K=new Ct(e.rock[0]).multiplyScalar(.7),at=new Ct(e.rock[0]).multiplyScalar(1.08),ct=new Ct,bt=new Ct(F.sand),Yt=new Ct(F.grass),nt=new Ct(F.grass2),ut=new Ct(F.path),wt=new Ct(F.deep),pt=new Ct,Ft=si(7);for(let z=0;z<C.count;z++){const L=C.getX(z),j=C.getZ(z),ot=p(L,j);C.setY(z,ot);const dt=y(L,j),Mt=(Ft()-.5)*.04,xt=pt.copy(Yt).lerp(nt,Ye.clamp((ot-1)*.6+Ft()*.3,0,1)).offsetHSL(0,0,Mt);B.set([xt.r,xt.g,xt.b],z*3),G.copy(wt).lerp(bt,Ye.smoothstep(ot,0,.3)).offsetHSL(0,0,Mt),D.set([G.r,G.g,G.b],z*3);const Q=.5+.5*Math.sin(L*1.7+j*.9)*Math.cos(j*1.3-L*.6);I[z]=1.9-Math.min(dt,6)+(Q-.5)*(F.pathMix??.3)*2.4-Math.max(0,.3-ot)*2.5;let Bt=0;l&&T(L,j)&&(W.copy(w),Bt=.85);const It=E(L,j);if(It>.75){const le=.5+.5*Math.sin(ot*7.5+Math.sin(L*.7+j*.5)*1.5);ct.copy(K).lerp(at,le);const ve=Ye.smoothstep(It,.75,1.3);W.copy(Bt?W:ct).lerp(ct,ve),Bt=Math.max(Bt,ve)}k.set([W.r,W.g,W.b,Bt],z*4)}_.setAttribute("aLow",new ze(D,3)),_.setAttribute("aGrass",new ze(B,3)),_.setAttribute("aPathF",new ze(I,1)),_.setAttribute("aOver",new ze(k,4)),_.computeVertexNormals();const Ot=new Ue({color:"#ffffff"});Ot.onBeforeCompile=z=>{z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
attribute vec3 aLow, aGrass;
attribute vec4 aOver;
attribute float aPathF;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vLow = aLow; vGrass = aGrass; vOver = aOver; vPathF = aPathF;`),z.uniforms.uPath={value:ut},z.fragmentShader=z.fragmentShader.replace("#include <common>",`#include <common>
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
        float rip = sin(vTW.x * 2.3 + sin(vTW.z * 0.5) * 2.2 + vTW.z * 0.8);
        diffuseColor.rgb *= 1.0 - 0.045 * rip * sandMask;
        // Malt overflate: myk to-oktavs støy i lyshet og litt i fargetone
        vec2 q = vTW.xz;
        float n1 = sin(q.x * 0.9 + sin(q.y * 0.7) * 1.7) * sin(q.y * 1.1 + sin(q.x * 0.5) * 1.3);
        float n2 = sin(q.x * 3.7 + q.y * 2.3) * sin(q.y * 3.1 - q.x * 1.9);
        diffuseColor.rgb *= 0.93 + 0.07 * n1 + 0.035 * n2;
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const Wt=new Zt(_,Ot);Wt.receiveShadow=!0,i.add(Wt);const te=[],ee=(z,L)=>Math.hypot(z-s.x,L-s.z)>6;for(const[z,L]of r.entries()){let j=z%2===0?1:-1,ot=0;for(let dt=.16;dt<.95&&ot<6;dt+=.055){const Mt=L.curve.getPointAt(dt),xt=L.curve.getTangentAt(dt),Q=new O(-xt.z,0,xt.x).normalize();for(const Bt of[j,-j]){const It=Mt.x+Q.x*3.6*Bt,le=Mt.z+Q.z*3.6*Bt;if(!(y(It,le)<2.7||!S(It,le)||!ee(It,le))&&!te.some(ve=>Math.hypot(ve.x-It,ve.z-le)<5.2)&&!(e.volcano&&Math.hypot(It-e.volcano.x,le-e.volcano.z)<e.volcano.r+2)){te.push({x:It,z:le,tower:null}),ot++;break}}j=-j}}const ge=(()=>{const z=document.createElement("canvas");z.width=z.height=256;const L=z.getContext("2d");L.fillStyle="#ffffff",L.fillRect(0,0,256,256);const j=si(77);for(let dt=0;dt<260;dt++){const Mt=200+j()*55|0;L.fillStyle=`rgba(${Mt},${Mt},${Mt-6},${.25+j()*.35})`,L.beginPath(),L.ellipse(j()*256,j()*256,6+j()*26,3+j()*12,j()*3,0,Math.PI*2),L.fill()}L.strokeStyle="rgba(90,90,90,0.35)",L.lineWidth=1.5;for(let dt=0;dt<26;dt++){let Mt=j()*256,xt=j()*256;L.beginPath(),L.moveTo(Mt,xt);for(let Q=0;Q<4;Q++)Mt+=(j()-.5)*30,xt+=j()*18,L.lineTo(Mt,xt);L.stroke()}const ot=new Ri(z);return ot.colorSpace=mn,ot.wrapS=ot.wrapT=Ii,ot})(),X=new Ue({color:"#8c8f88",map:ge}),Ie=new Ue({color:"#5f8a42",map:ge}),ie=new Ee({color:"#ffe3a0",transparent:!0,opacity:.28,depthWrite:!1}),Qt=new Ee({color:"#f5f7f8",transparent:!0,opacity:.12,depthWrite:!1}),Ht=new Ne(1.25,1.5,.9,8);Ht.translate(0,.35,0);const de=new Ne(1.28,1.28,.12,8);de.translate(0,.82,0);const $=new ws(.55,.75,6);$.rotateX(-Math.PI/2);const R=new di(1,7,5),b=te.length,V=new ln(Ht,X,b),J=new ln(de,Ie,b),tt=new ln($,ie,b),et=new ln(R,Qt,b*3);V.castShadow=V.receiveShadow=J.receiveShadow=!0;const yt=new Fe;te.forEach((z,L)=>{z.y0=p(z.x,z.z),z.y=z.y0+.88,yt.position.set(z.x,z.y0,z.z),yt.rotation.set(0,L,0),yt.scale.setScalar(1),yt.updateMatrix(),V.setMatrixAt(L,yt.matrix),J.setMatrixAt(L,yt.matrix)}),i.add(V,J,tt,et);const vt=z=>{te.forEach((L,j)=>{const ot=!L.tower;yt.position.set(L.x,L.y0+.9,L.z),yt.rotation.set(0,z*.5,0),yt.scale.setScalar(ot?1:0),yt.updateMatrix(),tt.setMatrixAt(j,yt.matrix);for(let dt=0;dt<3;dt++){const Mt=z*.4+dt*2.1+L.x,xt=(Mt%1+1)%1;yt.position.set(L.x+Math.cos(Mt*2.3)*.9,L.y0+.5+xt*.9,L.z+Math.sin(Mt*2.3)*.9),yt.rotation.set(0,0,0),yt.scale.set(ot?.6+xt*.5:0,ot?.3+xt*.2:0,ot?.6+xt*.5:0),yt.updateMatrix(),et.setMatrixAt(j*3+dt,yt.matrix)}}),tt.instanceMatrix.needsUpdate=!0,et.instanceMatrix.needsUpdate=!0},St=new me,Kt=p(s.x,s.z);St.position.set(s.x,Kt,s.z);const _t=(()=>{const z=document.createElement("canvas");z.width=512,z.height=512;const L=z.getContext("2d");L.fillStyle="#f6f1e6",L.fillRect(0,0,512,512);const j=si(5);for(let dt=0;dt<520;dt++){const Mt=j()*512,xt=j()*512,Q=2+j()*9,Bt=j()<.65;L.fillStyle=Bt?`rgba(${90+j()*40},${120+j()*40},${60+j()*20},${.12+j()*.18})`:`rgba(${130+j()*30},${95+j()*20},60,${.12+j()*.15})`,L.beginPath(),L.ellipse(Mt,xt,Q,Q*(.4+j()*.6),j()*3,0,Math.PI*2),L.fill()}for(let dt=0;dt<1200;dt++){L.strokeStyle=`rgba(190,170,140,${.04+j()*.07})`,L.lineWidth=1;const Mt=j()*512,xt=j()*512;L.beginPath(),L.moveTo(Mt,xt),L.lineTo(Mt+(j()-.5)*8,xt+6+j()*20),L.stroke()}for(let dt=0;dt<26;dt++){const Mt=j()*512;L.strokeStyle=j()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",L.lineWidth=2+j()*5,L.beginPath(),L.moveTo(Mt,512),L.bezierCurveTo(Mt+40,350,Mt-30,160,Mt+20+j()*40,0),L.stroke()}L.strokeStyle="rgba(175,145,100,0.55)",L.lineWidth=4,L.beginPath(),L.moveTo(60,512),L.bezierCurveTo(90,330,110,180,150,0),L.stroke();const ot=new Ri(z);return ot.colorSpace=mn,ot.wrapS=Ii,ot})(),Nt=new Ue({map:_t}),$t=(()=>{const z=document.createElement("canvas");z.width=z.height=128;const L=z.getContext("2d");L.fillStyle="#e9dcbf",L.fillRect(0,0,128,128),L.strokeStyle="#a88d62",L.lineWidth=3,L.beginPath();for(let ot=0;ot<Math.PI*9;ot+=.1){const dt=4+ot*2;L.lineTo(64+Math.cos(ot)*dt,64+Math.sin(ot)*dt)}L.stroke();const j=new Ri(z);return j.colorSpace=mn,j})(),jt=new Ue({color:"#e6d8b8"}),kt=new Ue({map:$t}),he=new Ue({color:"#3a3330",flatShading:!0}),Jt=new Ue({color:"#b8b2aa",flatShading:!0}),pe=(()=>{const z=document.createElement("canvas");z.width=256,z.height=128;const L=z.getContext("2d"),j=L.createLinearGradient(0,0,0,128);j.addColorStop(0,"#fff0b0"),j.addColorStop(.45,"#ffb040"),j.addColorStop(1,"#ff5a10"),L.fillStyle=j,L.fillRect(0,0,256,128);const ot=si(11);for(let Mt=0;Mt<70;Mt++){const xt=ot();L.fillStyle=xt<.5?`rgba(70,60,55,${.5+ot()*.4})`:`rgba(170,165,160,${.5+ot()*.4})`,L.beginPath(),L.ellipse(ot()*256,20+ot()*108,4+ot()*14,2+ot()*6,ot()*3,0,Math.PI*2),L.fill()}L.strokeStyle="rgba(60,30,20,0.6)",L.lineWidth=1.5;for(let Mt=0;Mt<40;Mt++){const xt=ot()*256,Q=ot()*128;L.beginPath(),L.moveTo(xt,Q),L.lineTo(xt+(ot()-.5)*30,Q+(ot()-.5)*20),L.stroke()}const dt=new Ri(z);return dt.colorSpace=mn,dt})(),H=new Ee({map:pe,color:new Ct("#ffffff").multiplyScalar(2.2)});function At({len:z,rTop:L,rBot:j,crutchH:ot,seg:dt,bend:Mt,glowMat:xt,shadow:Q}){const Bt=new me,It=new Zt(new Ne(j*.98,j*.95,ot,dt),[jt,jt,kt]);It.position.y=ot/2,It.castShadow=Q,Bt.add(It);const le=new Ne(L,j,z,dt,8,!0),ve=le.attributes.position,ye=si(Math.round(z*100)),vi=Array.from({length:6},()=>[ye()*6.28,ye()*3,.03+ye()*.04]);for(let we=0;we<ve.count;we++){const Wn=ve.getY(we),Xn=(Wn+z/2)/z,_r=Math.atan2(ve.getZ(we),ve.getX(we));let As=1+Math.sin(_r*7+Wn*3)*.018;for(const[qf,Yf,$f]of vi)As+=Math.cos(_r-qf)*Math.sin(Xn*6+Yf)*$f*.5;ve.setXYZ(we,ve.getX(we)*As+Mt*Xn*Xn*z,Wn,ve.getZ(we)*As)}le.translate(0,z/2,0),le.computeVertexNormals();const Me=new Zt(le,Nt);Me.position.y=ot,Me.castShadow=Q,Me.receiveShadow=!0,Bt.add(Me);const hn=Mt*z,Hn=ot+z,un=new Ne(L*1.02,L*1.04,L*.35,dt,1,!0),Cn=un.attributes.position;for(let we=0;we<Cn.count;we++)Cn.getY(we)>0&&Cn.setY(we,Cn.getY(we)+Math.sin(we*2.7)*L*.12);un.computeVertexNormals();const Rn=new Zt(un,he);Rn.position.set(hn,Hn+L*.12,0),Bt.add(Rn);const Ni=new Zt(new di(L*.97,dt,6,0,Math.PI*2,0,Math.PI/2),xt);Ni.scale.y=.38,Ni.position.set(hn,Hn+L*.2,0),Bt.add(Ni);const uo=[];for(let we=0;we<5;we++){const Wn=new Zt(new so(L*(.2+we%3*.07),0),Jt),Xn=we*1.25+.3;Wn.position.set(hn+Math.cos(Xn)*L*.55,Hn+L*.33,Math.sin(Xn)*L*.55),Wn.scale.y=.4,Bt.add(Wn),uo.push(Wn)}const fo=new hi(L*.28,L*1.1,6,4),Ts=fo.attributes.position;for(let we=0;we<Ts.count;we++){const Wn=Ts.getY(we),Xn=(Wn/(L*1.1)+.5)*2.2,_r=Ts.getX(we),As=Ts.getZ(we);Ts.setX(we,_r*Math.cos(Xn)-As*Math.sin(Xn)+(Wn+L*.55)*.25),Ts.setZ(we,_r*Math.sin(Xn)+As*Math.cos(Xn))}fo.computeVertexNormals();const xr=new Zt(fo,he);return xr.position.set(hn+L*.1,Hn+L*.7,L*.1),xr.rotation.z=-.35,Bt.add(xr),Bt.userData={glow:Ni,top:new O(hn,Hn,0),charRing:Rn,ashFlakes:uo,body:Me,twist:xr,len:z,rTop:L,rBot:j,bend:Mt,crutchH:ot,base:Me.geometry.attributes.position.array.slice(),topParts:[Rn,Ni,xr,...uo].map(we=>[we,we.position.clone(),we.scale.clone()])},Bt}const rt=new Zt(new Ne(3.3,3.9,1,9),X);rt.position.y=.3,rt.castShadow=rt.receiveShadow=!0,St.add(rt);const ft=7.4,Dt=1.4,Rt=At({len:ft,rTop:2.35,rBot:.95,crutchH:Dt,seg:22,bend:.06,glowMat:H,shadow:!0});Rt.position.y=.75,Rt.rotation.set(.06,0,-.03);const N=Rt.userData.charRing;St.add(Rt);const lt=new Fe;lt.position.y=Dt+ft+1.2,Rt.add(lt);const Pt=new Xr("#ff8a3a",40,34,1.5);Pt.position.y=Dt+ft+1.4,Rt.add(Pt);const Gt=new hi(2.2,16,16,6,!0);Gt.translate(0,-8,0);{const z=Gt.attributes.position,L=new Float32Array(z.count*3);for(let j=0;j<z.count;j++){const ot=Math.pow(1-Math.min(1,-z.getY(j)/16),1.6);L.set([ot,ot,ot],j*3)}Gt.setAttribute("color",new ze(L,3))}Gt.rotateZ(Math.PI/2);const _e=new Ee({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:ei,depthWrite:!1,side:$e,fog:!1}),ne=new me;ne.position.y=Dt+ft+.8;const ke=new Zt(Gt,_e),Be=ke.clone();Be.rotation.y=Math.PI,ne.add(ke,Be),Rt.add(ne);const Xe=new Xr("#ffa050",12,10,1.4);Xe.position.set(0,1.3,4.6),St.add(Xe),i.add(St),St.updateMatrixWorld(!0);const cn=new O;lt.getWorldPosition(cn);const Te=Rt.userData,zn=[lt,Pt,ne].map(z=>[z,z.position.y]),mi=z=>Te.rBot+(Te.rTop-Te.rBot)*z;function ea(z){const L=.15+.85*Math.max(0,Math.min(1,z)),j=Te.body.geometry.attributes.position,ot=Te.base;for(let Q=0;Q<j.count;Q++){const Bt=ot[Q*3+1],It=Bt/Te.len,le=It*L,ve=mi(le)/mi(It);j.setXYZ(Q,(ot[Q*3]-Te.bend*It*It*Te.len)*ve+Te.bend*le*le*Te.len,le*Te.len,ot[Q*3+2]*ve)}j.needsUpdate=!0,Te.body.geometry.computeVertexNormals(),Te.body.geometry.computeBoundingSphere();const dt=(L-1)*Te.len,Mt=mi(L)/Te.rTop,xt=Te.bend*Te.len*(L*L-1);for(const[Q,Bt,It]of Te.topParts)Q.position.set(Te.top.x+(Bt.x-Te.top.x)*Mt+xt,Bt.y+dt,Bt.z*Mt),Q.scale.set(It.x*Mt,It.y*Mt,It.z*Mt);for(const[Q,Bt]of zn)Q.position.y=Bt+dt;St.updateMatrixWorld(!0),lt.getWorldPosition(cn)}const ii={tip:cn,pos:new O(s.x,Kt,s.z),lights:hr,flamePos(){return cn.clone()},setLights(z){this.lights=z;const L=z/hr;ea(L),this.glow=L,Xe.intensity=3+9*L,_e.opacity=.01+.04*L,N.scale.y*=1+(1-L)*2.5}},_n=si(42),Zi=[];for(let z=0;z<3e3&&Zi.length<(t.mobile?70:104);z++){const L=(_n()-.5)*102,j=(_n()-.5)*102,ot=p(L,j);if(ot<.75||y(L,j)<3.2||!ee(L,j)||te.some(Q=>Math.hypot(Q.x-L,Q.z-j)<3.2)||Zi.some(Q=>Math.hypot(Q.x-L,Q.z-j)<2.4)||e.volcano&&Math.hypot(L-e.volcano.x,j-e.volcano.z)<e.volcano.r)continue;const dt=ot<1.45?e.trees.beach:e.trees.inland;let Mt=_n(),xt="bush";for(const[Q,Bt]of Object.entries(dt)){if(Mt<Bt){xt=Q;break}Mt-=Bt}Zi.push({x:L,z:j,y:ot,s:(xt==="bush"?.8:.75)+_n()*.45,phase:_n()*6.28,kind:xt})}const na=$x(i,Zi,t,e),Ki=new Fe,gi=[];for(let z=0;z<1200&&gi.length<(t.mobile?40:56);z++){const L=_n()*Math.PI*2,j=n(L)-3+_n()*5.5,ot=Math.cos(L)*j,dt=Math.sin(L)*j;y(ot,dt)<3.4||p(ot,dt)<-1.2||gi.some(Mt=>Math.hypot(Mt.x-ot,Mt.z-dt)<2.2)||gi.push({x:ot,z:dt,s:.6+_n()*1.2,r:_n()*6})}for(const z of e.plateaus||[]){const L=Math.round(z.r*2*Math.PI/2.3);for(let j=0;j<L;j++){const ot=j/L*Math.PI*2+_n()*.2,dt=z.r+Math.sin(ot*5+z.x)*.8+Math.sin(ot*11)*.3-.2,Mt=z.x+Math.cos(ot)*dt,xt=z.z+Math.sin(ot)*dt;e.waterfall&&Math.hypot(Mt-e.waterfall.lip[0],xt-e.waterfall.lip[1])<2.2||y(Mt,xt)<2.6||gi.push({x:Mt,z:xt,s:1.3+_n()*.9,r:_n()*6,cliff:!0})}}[0,1,2].map(z=>o_(si(31+z*7+e.seed),e.rock[0],e.rock[1],z)).map((z,L)=>{const j=gi.filter((dt,Mt)=>Mt%3===L),ot=new ln(z,new Ue({vertexColors:!0,map:ge}),Math.max(1,j.length));return ot.count=j.length,j.forEach((dt,Mt)=>{Ki.position.set(dt.x,p(dt.x,dt.z)-.2*dt.s,dt.z),Ki.rotation.set(0,dt.r*2,0),Ki.scale.set(dt.s*1.1,dt.s*.9,dt.s),Ki.updateMatrix(),ot.setMatrixAt(Mt,Ki.matrix)}),ot.castShadow=ot.receiveShadow=!0,i.add(ot),vf(ot,"rock"),ot});const Y=Ox(i,{heightAt:p,pathDist:y,plinths:te,paths:r,lighthouse:ii},t,si(99+e.seed),n,e),it=r_(i,{heightAt:p,pathDist:y,paths:r,lighthouse:ii,islandEdge:n},t,e),st=Zx(i,{heightAt:p,pathDist:y,plinths:te,lighthouse:ii,extrasBlock:it.blocks},t,e,si(7+e.seed)),q=Float32Array.from(v),Tt=[...gi.map(z=>({x:z.x,z:z.z,r:z.s*.85})),...Y.obstacles];for(const z of Tt){const L=z.r+1,j=f*2/d,ot=Math.floor((z.x-L+f)/j),dt=Math.ceil((z.x+L+f)/j),Mt=Math.floor((z.z-L+f)/j),xt=Math.ceil((z.z+L+f)/j);for(let Q=Math.max(0,Mt);Q<=Math.min(d,xt);Q++)for(let Bt=Math.max(0,ot);Bt<=Math.min(d,dt);Bt++){const It=-f+Bt*j,le=-f+Q*j,ve=Math.max(0,Math.hypot(It-z.x,le-z.z)-z.r);if(ve>.9)continue;const ye=Q*(d+1)+Bt,vi=.06-ve*.35,Me=1-ve/.9;q[ye]=Math.max(q[ye],q[ye]+(vi-q[ye])*Me*Me)}}if(e.waterfall&&e.waterfall._lvl!==void 0){const z=e.waterfall;iu(i,{heightTex:su(q,d+1),ext:f,grid:d,quality:t,sunDir:new O(24,17,4),colors:e.water,level:z._lvl,size:9,maxDepth:.8,center:[(z.pool[0]+z.lip[0])/2,(z.pool[1]+z.lip[1])/2]})}const Ut=iu(i,{heightTex:su(q,d+1),ext:f,grid:d,quality:t,sunDir:new O(24,17,4),colors:e.water}),Xt=[{x:s.x,z:s.z,r:3.5},...te.map(z=>({x:z.x,z:z.z,r:1.4})),...na.colliders,...gi.filter(z=>p(z.x,z.z)>-.45).map(z=>({x:z.x,z:z.z,r:z.s*.85})),...Y.colliders,...it.colliders];return{def:e,paths:r,plinths:te,lighthouse:ii,heightAt:p,pathDist:y,slopeAt:E,isLand:S,isIce:T,landDist:u,isWalkable:(z,L)=>A(z,L)&&!it.blocks(z,L),colliders:Xt,update:z=>{Ut.update(z),Y.update(z),it.update(z),st.update(z);const L=ii.glow??1,j=.75+.25*Math.sin(z*1.3)+.1*Math.sin(z*7.1);H.color.setRGB(1,.85,.75).multiplyScalar(L>0?(.7+1.5*L)*j:.12),Pt.intensity=(8+40*L)*j,ne.rotation.y=z*.6,na.update(z),vt(z)},terrain:Wt,extras:it,grass:st}}const se=(i,t={})=>new Ue({color:i,flatShading:!0,...t}),Hs=(i,t)=>new Ee({color:new Ct(i).multiplyScalar(t)}),ht={coat:se("#f2c23c"),coatDark:se("#c99a22"),skin:se("#f1c7a0"),beanieG:se("#3f8f4a"),beanieY:se("#f2c94c"),beanieR:se("#d4553a"),boot:se("#3a2c22"),eyeW:new Ee({color:"#ffffff"}),eyeB:new Ee({color:"#1c1820"}),suit:se("#6b6f78"),suitDark:se("#3c4150"),suitNavy:se("#2c3a5c"),shirt:se("#f4f1ea"),tie:se("#b8322a"),paper:se("#fbfaf4"),stampInk:se("#a8233a"),woodLight:se("#c49360"),glasses:se("#222428"),binderR:se("#c94f3f"),binderB:se("#3f6fc9"),binderY:se("#e6b93f"),gull:se("#f4f2ee"),gullWing:se("#b8c0c8"),beak:se("#f0a43a"),megaRed:se("#d8453a"),mouth:new Ee({color:"#4a2a2a"}),smile:new Ee({color:"#c8485a"}),wood:se("#9a6a42"),woodDark:se("#6e4a2c"),iron:se("#55585e"),speaker:se("#2a2a30"),cone:se("#4a4a52"),rasG:se("#3f9a4a"),rasY:se("#f2c94c"),rasR:se("#d4553a"),chipsBag:se("#f2b632"),chipsRed:se("#d8453a"),chip:se("#f0c860"),ringMat:new Ue({color:"#f1efe9",transparent:!0,opacity:.8}),ember:Hs("#ff9a3a",2.4),emberCore:Hs("#fff1c2",2),rolling:se("#5a9a5a"),rollingPaper:se("#fffdf5"),lantern:Hs("#ffd27a",2.2),hpBg:new Ee({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new Ee({color:"#d8553a",depthTest:!1}),levelPip:Hs("#9fffb0",1.6),bottle:new Ue({color:"#7fd6ff",transparent:!0,opacity:.8}),bubble:new Ue({color:"#dff6ff",transparent:!0,opacity:.45,emissive:"#5a7a9a"}),kiteSail:new Ue({color:"#ff7a5a",side:$e}),rope:se("#d9c8a0"),ledger:se("#2f5a3a"),track:se("#8a4ac8"),briefcase:se("#6a3a1a"),brass:se("#d8b040"),rotor:new Ee({color:"#cfd6dc",transparent:!0,opacity:.45}),redLight:Hs("#ff3030",2),balloonA:se("#e8e4d8"),balloonB:se("#c8463a"),heli:se("#f2c23c"),glassDark:se("#2a3440"),spot:new Ee({color:"#fff6c8",transparent:!0,opacity:.18,blending:ei,depthWrite:!1,side:$e}),pizza:se("#e8603a"),pizzaCrust:se("#e8b866"),lampGlass:new Ue({color:"#ff8a5a",transparent:!0,opacity:.45,emissive:"#6a1a10"}),lampBlob:Hs("#ff9a2a",2.2)},mt={sphere:new di(1,10,8),lowSphere:new $i(1,1),capsule:new io(.5,.7,3,8),cyl:new Ne(1,1,1,10),cone:new hi(1,1,10),box:new Ln(1,1,1),dome:new di(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new Wr(.22,0),leaf:new Wr(.3,0),plane:new Vn(1,1),smileArc:new Ks(.06,.018,4,10,Math.PI),ring:new Ks(.32,.12,6,14),bubbleRing:new Ks(.18,.025,4,12)};function gt(i,t,e,n,s,r=0,a=0,o=0,l=!0){const c=new Zt(i,t);return c.scale.set(e,n,s),c.position.set(r,a,o),c.castShadow=l,c}function Uc(i,t,e,n,s=.12,r=.18){const a=new me;a.position.set(t,e,n),a.userData.isEyes=!0;for(const o of[-1,1])a.add(gt(mt.sphere,ht.eyeW,s,s,s,o*r,0,0,!1)),a.add(gt(mt.sphere,ht.eyeB,s*.55,s*.55,s*.55,o*r,.01,-s*.7,!1));return i.add(a),a}const c_=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,31);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.25)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Ri(i)})(),h_=new Ee({map:c_,transparent:!0,depthWrite:!1,fog:!1}),u_=new Vn(1,1).rotateX(-Math.PI/2);function xf(i,t){const e=new Zt(u_,h_);e.scale.set(t*2,1,t*2),e.position.y=.04,e.renderOrder=1,i.add(e),i.userData.blob=e}function _f(i){const t=[];i.traverse(e=>{e.userData.isEyes&&t.push(e)}),i.userData.eyes=t}function Mf(i,t,e,n=1){const s=gt(mt.box,ht.mouth,.14*n,.025*n,.02,0,t,e,!1);s.rotation.z=.15;const r=gt(mt.smileArc,ht.smile,n,n,n,0,t+.03*n,e,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}function f_(){const i=new me,t=new me;i.add(t),t.add(gt(mt.capsule,ht.coat,.75,.75,.7,0,.75,0)),t.add(gt(mt.cyl,ht.coatDark,.4,.06,.38,0,.62,0));const e=new me;e.position.y=1.62,e.scale.setScalar(1.22),e.add(gt(mt.sphere,ht.skin,.33,.32,.32)),e.add(gt(mt.cyl,ht.beanieG,.35,.1,.35,0,.14,0)),e.add(gt(mt.cyl,ht.beanieY,.31,.1,.31,0,.24,0)),e.add(gt(mt.dome,ht.beanieR,.27,.22,.27,0,.29,0)),e.add(gt(mt.sphere,ht.beanieY,.08,.08,.08,0,.52,0)),Uc(e,0,.02,-.26,.07,.12);const n=Mf(e,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,t.add(e);const s=[-1,1].map(c=>{const u=gt(mt.capsule,ht.boot,.24,.32,.24,c*.18,.2,0);return t.add(u),u}),r=new me;r.position.set(.48,1,-.1),r.add(gt(mt.box,ht.iron,.2,.28,.2,0,-.25,0)),r.add(gt(mt.sphere,ht.lantern,.1,.13,.1,0,-.25,0,!1)),t.add(r);const a=new me;a.position.set(-.46,1.08,0),a.add(gt(mt.capsule,ht.coat,.16,.34,.16,0,-.28,0)),a.add(gt(mt.sphere,ht.skin,.1,.1,.1,0,-.52,0)),t.add(a);const o=new me;o.add(gt(mt.box,ht.rolling,.7,.12,.42,0,0,0,!1)),o.add(gt(mt.box,ht.rollingPaper,.6,.08,.36,.06,.08,0,!1)),o.add(gt(mt.leaf,ht.rasG,.35,.05,.35,-.12,.07,0,!1)),o.position.y=2.35,o.visible=!1,i.add(o);const l=new me;l.position.y=2;for(let c=0;c<3;c++)l.add(gt(mt.ember,ht.emberCore,.6,.6,.6,Math.cos(c*2.1)*.45,0,Math.sin(c*2.1)*.45,!1));return l.visible=!1,i.add(l),xf(i,.62),i.userData={body:t,legs:s,head:e,lanternArm:r,armL:a,carried:o,stars:l,blob:i.userData.blob},_f(i),i}function ri(i,t){const e=new me;e.position.y=t;const n=new Zt(mt.plane,ht.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new Zt(mt.plane,ht.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,e.add(n,s),e.visible=!1,i.add(e),i.userData.hpBar=e,i.userData.hpFg=s}function Ws(i,{scale:t=1,suit:e=ht.suit,wide:n=1}={}){const s=t;i.add(gt(mt.capsule,e,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(gt(mt.box,ht.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(gt(mt.box,ht.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const o of[-1,1])i.add(gt(mt.capsule,ht.suitDark,.2*s,.25*s,.2*s,o*.16*s,.17*s,0));const r=new me;r.position.y=1.5*s,r.add(gt(mt.sphere,ht.skin,.3*s,.3*s,.3*s)),r.add(gt(mt.dome,ht.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),Uc(r,0,.03*s,-.25*s,.065*s,.11*s);const a=Mf(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:a}}function d_(i){const t=new me,e=new me;if(t.add(e),t.userData.body=e,i==="clerk"){const{head:n,mouth:s}=Ws(e);for(const o of[-1,1])n.add(gt(mt.box,ht.glasses,.11,.07,.02,o*.11,.03,-.3,!1));n.add(gt(mt.box,ht.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new me;r.position.set(.48,.9,-.15),r.add(gt(mt.cyl,ht.woodLight,.06,.25,.06,0,.12,0)),r.add(gt(mt.sphere,ht.woodLight,.09,.09,.09,0,.27,0)),r.add(gt(mt.box,ht.stampInk,.22,.08,.16,0,-.02,0)),e.add(r);const a=gt(mt.box,ht.paper,.3,.38,.02,-.46,.92,-.2);a.rotation.y=.4,e.add(a),t.userData.mouth=s,t.userData.arm=r,ri(t,2.15)}else if(i==="tank"){const{mouth:n}=Ws(e,{scale:1.25,suit:ht.suitNavy,wide:1.45}),s=new me;s.position.set(0,0,-.95),s.add(gt(mt.box,ht.woodDark,.75,1.05,.45,0,.52,0));const r=gt(mt.box,ht.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(gt(mt.cyl,ht.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(gt(mt.sphere,ht.speaker,.05,.05,.05,.18,1.52,.04,!1)),e.add(s),t.userData.mouth=n,ri(t,2.6)}else if(i==="gull"){e.add(gt(mt.lowSphere,ht.gull,.36,.3,.6,0,0,0)),e.add(gt(mt.cone,ht.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=gt(mt.cone,ht.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,e.add(n),e.add(gt(mt.cyl,ht.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const a=new me;return a.position.set(r*.25,.05,0),a.add(gt(mt.box,ht.gullWing,.95,.05,.42,r*.48,0,0)),e.add(a),a});t.userData.wings=s,Uc(e,0,.12,-.42,.06,.13),t.userData.mouth=null,ri(t,.8)}else if(i==="swarm"){const{mouth:n}=Ws(e,{scale:.6}),s=[ht.binderR,ht.binderB,ht.binderY],r=gt(mt.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);e.add(r),t.userData.mouth=n,ri(t,1.3)}else if(i==="auditor"){const{head:n,mouth:s}=Ws(e,{scale:1.1,suit:ht.suitDark});for(const a of[-1,1])n.add(gt(mt.box,ht.glasses,.12,.08,.02,a*.12,.03,-.33,!1));const r=new me;r.position.set(0,.95,-.55),r.add(gt(mt.box,ht.ledger,1.05,1.2,.14)),r.add(gt(mt.box,ht.paper,.95,1.1,.1,0,0,.03,!1)),r.add(gt(mt.box,ht.brass,.3,.3,.02,0,.15,-.08,!1)),e.add(r),t.userData.mouth=s,t.userData.shield=r,ri(t,2.3)}else if(i==="complainer"){const{head:n,mouth:s}=Ws(e,{scale:.85,suit:ht.track});n.add(gt(mt.cyl,ht.rasR,.27,.06,.27,0,.1,0,!1));const r=new me;r.position.set(.35,1.2,-.1),r.add(gt(mt.cyl,ht.track,.06,.45,.06,0,.2,0)),r.add(gt(mt.box,ht.paper,.32,.42,.02,0,.55,0)),e.add(r),t.userData.mouth=s,t.userData.arm=r,ri(t,1.8)}else if(i==="lobbyist"||i==="lobbyMini"){const n=i==="lobbyMini",{mouth:s}=Ws(e,{scale:n?.55:1.05,suit:ht.suitNavy});e.add(gt(mt.box,ht.brass,.08,.3,.05,0,n?.52:.99,n?-.17:-.32,!1)),e.add(gt(mt.box,ht.briefcase,n?.28:.5,n?.22:.36,.12,n?.3:.55,n?.3:.55,0)),t.userData.mouth=s,ri(t,n?1.2:2.1)}else if(i==="drone"){e.add(gt(mt.box,ht.iron,.42,.14,.42));const n=[];for(const[s,r]of[[1,1],[-1,1],[1,-1],[-1,-1]]){e.add(gt(mt.box,ht.speaker,.5,.04,.05,s*.22,0,r*.22).rotateY(s*r>0?Math.PI/4:-Math.PI/4));const a=gt(mt.cyl,ht.rotor,.2,.01,.2,s*.4,.08,r*.4,!1);e.add(a),n.push(a)}e.add(gt(mt.sphere,ht.redLight,.07,.07,.07,0,-.06,-.22,!1)),t.userData.rotors=n,t.userData.mouth=null,ri(t,.6)}else if(i==="balloon"){e.add(gt(mt.sphere,ht.balloonA,1.1,1.3,1.1,0,1.6,0));for(let n=0;n<4;n++)e.add(gt(mt.cyl,ht.balloonB,1.12-Math.abs(n-1.5)*.18,.18,1.12-Math.abs(n-1.5)*.18,0,1+n*.42,0,!1));e.add(gt(mt.box,ht.woodLight,.6,.4,.6,0,-.1,0)),e.add(gt(mt.sphere,ht.skin,.2,.2,.2,0,.25,0)),e.add(gt(mt.dome,ht.suitDark,.21,.1,.21,0,.32,0,!1));for(const[n,s]of[[1,1],[-1,1],[1,-1],[-1,-1]])e.add(gt(mt.cyl,ht.rope,.015,.8,.015,n*.28,.45,s*.28,!1));t.userData.mouth=null,ri(t,3.3)}else if(i==="heli"){e.add(gt(mt.capsule,ht.heli,.6,.55,.9,0,0,0).rotateX(Math.PI/2)),e.add(gt(mt.sphere,ht.glassDark,.28,.22,.24,0,.05,-.38,!1)),e.add(gt(mt.box,ht.heli,.12,.12,1.1,0,.05,.85));const n=gt(mt.box,ht.speaker,1.9,.02,.12,0,.4,0,!1),s=gt(mt.box,ht.speaker,.04,.5,.08,.08,.1,1.38,!1);e.add(n,s);const r=new Zt(new hi(1.2,4.5,14,1,!0),ht.spot);r.position.set(0,-2.3,-.2),r.visible=!1,e.add(r),t.userData.rotor=n,t.userData.tail=s,t.userData.beam=r,t.userData.mouth=null,ri(t,1)}return xf(t,{tank:.85,auditor:.7,balloon:.9,heli:.6,swarm:.35,lobbyMini:.35,drone:.35,gull:.45}[i]??.55),_f(t),t}function p_(i){const t=i.mesh.userData.mouth;t&&(t.sour.visible=!1,t.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function m_(i){const t=new me,e=new me;if(t.add(e),i==="ring"){t.add(gt(mt.box,ht.wood,.9,.5,.9,0,.25,0)),e.position.y=.95;const a=gt(mt.cyl,ht.iron,.32,1.1,.32,0,0,-.15);a.rotation.x=Math.PI/2-.15,e.add(a),e.add(gt(mt.cyl,ht.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),e.add(gt(mt.sphere,ht.iron,.42,.42,.42,0,0,.42)),e.add(gt(mt.sphere,ht.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){t.add(gt(mt.cyl,ht.iron,.7,.3,.7,0,.15,0)),e.position.y=.3;const a=gt(mt.box,ht.chipsBag,.95,1.1,.6,0,.6,0);a.rotation.x=-.35,e.add(a),e.add(gt(mt.box,ht.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let o=0;o<5;o++)e.add(gt(mt.leaf,ht.chip,.3,.08,.3,(o-2)*.17,1.2,-.3-o%2*.1,!1))}else if(i==="speaker"){const a=new me;a.add(gt(mt.box,ht.speaker,1,1.5,.75,0,.75,0)),a.add(gt(mt.box,ht.rasG,1.02,.12,.77,0,1.38,0,!1)),a.add(gt(mt.box,ht.rasY,1.02,.12,.77,0,1.26,0,!1)),a.add(gt(mt.box,ht.rasR,1.02,.12,.77,0,1.14,0,!1));const o=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const u=gt(mt.cyl,ht.cone,c,.08,c,0,l,-.38,!1);u.rotation.x=Math.PI/2,a.add(u),o.push(u)}e.add(a),t.userData.woofers=o}else if(i==="bubble"){t.add(gt(mt.cyl,ht.speaker,.5,.25,.5,0,.12,0)),e.position.y=.3,e.add(gt(mt.cyl,ht.bottle,.36,1,.36,0,.5,0)),e.add(gt(mt.cyl,ht.rasR,.22,.2,.22,0,1.08,0));const a=gt(mt.cyl,ht.wood,.03,.8,.03,0,1.4,-.2);a.rotation.x=.5,e.add(a),e.add(gt(mt.bubbleRing,ht.rasY,1,1,1,0,1.75,-.42,!1).rotateX(.5));for(let o=0;o<3;o++)e.add(gt(mt.sphere,ht.bubble,.14+o*.04,.14+o*.04,.14+o*.04,.3-o*.25,1.7+o*.3,-.7-o*.15,!1))}else if(i==="kite"){for(let o=0;o<3;o++){const l=o/3*Math.PI*2,c=gt(mt.cyl,ht.wood,.07,1.6,.07,Math.cos(l)*.45,.7,Math.sin(l)*.45);c.rotation.set(Math.sin(l)*.28,0,-Math.cos(l)*.28),t.add(c)}e.position.y=1.55,e.add(gt(mt.cyl,ht.iron,.22,.3,.22,0,0,0).rotateZ(Math.PI/2));const a=wf();a.position.set(0,.7,0),a.scale.setScalar(.8),e.add(a),t.userData.kite=a}else if(i==="pizza"){t.add(gt(mt.box,ht.wood,1.2,.35,.9,0,.18,0));for(const o of[-1,1])t.add(gt(mt.box,ht.woodDark,.12,.9,.12,o*.45,.65,0));e.position.y=1;const a=new me;a.add(gt(mt.box,ht.woodLight,.12,.12,1.5,0,0,-.4)),a.add(gt(mt.cyl,ht.pizzaCrust,.32,.06,.32,0,.08,-1.1)),a.add(gt(mt.cyl,ht.pizza,.27,.03,.27,0,.12,-1.1,!1)),a.rotation.x=-.35,e.add(a),t.userData.arm=a}else if(i==="lamp"){t.add(gt(mt.cone,ht.brass,.55,.7,.55,0,.35,0)),e.position.y=.7,e.add(gt(mt.capsule,ht.lampGlass,.75,.9,.75,0,.75,0,!1));const a=[];for(let o=0;o<3;o++){const l=gt(mt.sphere,ht.lampBlob,.16,.2,.16,0,.5+o*.3,0,!1);e.add(l),a.push(l)}e.add(gt(mt.cone,ht.brass,.3,.35,.3,0,1.55,0)),t.userData.blobs=a}const n=[];for(let a=0;a<5;a++){const o=gt(mt.leaf,ht.levelPip,.45,.1,.45,Math.cos(a*1.2566)*.95,.15,Math.sin(a*1.2566)*.95,!1);o.visible=a===0,t.add(o),n.push(o)}const s=new ws(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new Zt(s,new Ee({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,t.add(r),t.traverse(a=>{a.isMesh&&a!==r&&a.material!==ht.levelPip&&(a.castShadow=!0)}),t.userData.head=e,t.userData.pips=n,t.userData.ring=r,t}function yf(i,t){i.mesh.userData.pips.forEach((e,n)=>e.visible=n<t),i.mesh.scale.setScalar(1+(t-1)*.08)}function Yr(i,t){const e=i.mesh.userData.ring;if(e.visible=t>0,t<=0)return;e.geometry.dispose();const n=new ws(1.45,1.7,40,1,0,Math.PI*2*t);n.rotateX(-Math.PI/2),e.geometry=n}function g_(){const i=new me;return i.add(gt(mt.ember,ht.ember,1,1.3,1,0,0,0,!1)),i.add(gt(mt.ember,ht.emberCore,.5,.7,.5,0,0,0,!1)),i}function v_(){const i=new Zt(mt.ring,ht.ringMat);return i.castShadow=!1,i}function Sf(){const i=new me;return i.add(gt(mt.box,ht.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(gt(mt.box,ht.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function bf(){const i=new Ks(1,.08,4,32);return i.rotateX(Math.PI/2),new Zt(i,new Ee({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}function wf(){const i=new me,t=new of([new Et(0,.55),new Et(.38,0),new Et(0,-.75),new Et(-.38,0)]),e=new Zt(new Dc(t),ht.kiteSail);e.rotation.x=-Math.PI/2.4,i.add(e);for(let n=0;n<4;n++)i.add(gt(mt.box,ht.rasY,.12,.02,.06,0,-.1*n-.1,.62+n*.18,!1));return i}function Ef(){return gt(mt.sphere,ht.bubble,.28,.28,.28,0,0,0,!1)}function x_(){const i=new me;return i.add(gt(mt.cyl,ht.pizzaCrust,.3,.06,.3,0,0,0,!0)),i.add(gt(mt.cyl,ht.pizza,.25,.03,.25,0,.04,0,!1)),i}const zr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Es{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const __=new Sc(-1,1,1,-1,0,1);class M_ extends Pe{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}}const y_=new M_;class ao{constructor(t){this._mesh=new Zt(y_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,__)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Tf extends Es{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Jn.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ao(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class uu extends Es{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class S_ extends Es{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class b_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Et);this._width=n.width,this._height=n.height,e=new An(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tf(zr),this.copyPass.material.blending=on,this.clock=new ff}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}uu!==void 0&&(a instanceof uu?n=!0:a instanceof S_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class w_ extends Es{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const La={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Et},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new be},cameraProjectionMatrixInverse:{value:new be},cameraWorldMatrix:{value:new be},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

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

		}`},Ko={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function E_(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=T_(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=e[a],l=2*Math.PI*o/n,c=new O(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new eo(s,t,t);return r.wrapS=Ii,r.wrapT=Ii,r.needsUpdate=!0,r}function T_(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}const Ua={defines:{SAMPLES:16,SAMPLE_VECTORS:Af(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Et},cameraProjectionMatrixInverse:{value:new be},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Af(i,t,e){const n=A_(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function A_(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new O(Math.cos(r),Math.sin(r),a))}return n}class C_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,v=t-f,x=e-d;let m,p;v>x?(m=1,p=0):(m=0,p=1);const y=v-m+u,S=x-p+u,g=v-1+2*u,E=x-1+2*u,T=l&255,w=c&255,A=this.perm[T+this.perm[w]]%12,M=this.perm[T+m+this.perm[w+p]]%12,_=this.perm[T+1+this.perm[w+1]]%12;let C=.5-v*v-x*x;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[A],v,x));let D=.5-y*y-S*S;D<0?s=0:(D*=D,s=D*D*this.dot(this.grad3[M],y,S));let B=.5-g*g-E*E;return B<0?r=0:(B*=B,r=B*B*this.dot(this.grad3[_],g,E)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const c=(t+e+n)*.3333333333333333,u=Math.floor(t+c),h=Math.floor(e+c),f=Math.floor(n+c),d=1/6,v=(u+h+f)*d,x=u-v,m=h-v,p=f-v,y=t-x,S=e-m,g=n-p;let E,T,w,A,M,_;y>=S?S>=g?(E=1,T=0,w=0,A=1,M=1,_=0):y>=g?(E=1,T=0,w=0,A=1,M=0,_=1):(E=0,T=0,w=1,A=1,M=0,_=1):S<g?(E=0,T=0,w=1,A=0,M=1,_=1):y<g?(E=0,T=1,w=0,A=0,M=1,_=1):(E=0,T=1,w=0,A=1,M=1,_=0);const C=y-E+d,D=S-T+d,B=g-w+d,I=y-A+2*d,k=S-M+2*d,G=g-_+2*d,W=y-1+3*d,F=S-1+3*d,K=g-1+3*d,at=u&255,ct=h&255,bt=f&255,Yt=this.perm[at+this.perm[ct+this.perm[bt]]]%12,nt=this.perm[at+E+this.perm[ct+T+this.perm[bt+w]]]%12,ut=this.perm[at+A+this.perm[ct+M+this.perm[bt+_]]]%12,wt=this.perm[at+1+this.perm[ct+1+this.perm[bt+1]]]%12;let pt=.6-y*y-S*S-g*g;pt<0?s=0:(pt*=pt,s=pt*pt*this.dot3(this.grad3[Yt],y,S,g));let Ft=.6-C*C-D*D-B*B;Ft<0?r=0:(Ft*=Ft,r=Ft*Ft*this.dot3(this.grad3[nt],C,D,B));let Ot=.6-I*I-k*k-G*G;Ot<0?a=0:(Ot*=Ot,a=Ot*Ot*this.dot3(this.grad3[ut],I,k,G));let Wt=.6-W*W-F*F-K*K;return Wt<0?o=0:(Wt*=Wt,o=Wt*Wt*this.dot3(this.grad3[wt],W,F,K)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,f,d,v;const x=(t+e+n+s)*l,m=Math.floor(t+x),p=Math.floor(e+x),y=Math.floor(n+x),S=Math.floor(s+x),g=(m+p+y+S)*c,E=m-g,T=p-g,w=y-g,A=S-g,M=t-E,_=e-T,C=n-w,D=s-A,B=M>_?32:0,I=M>C?16:0,k=_>C?8:0,G=M>D?4:0,W=_>D?2:0,F=C>D?1:0,K=B+I+k+G+W+F,at=a[K][0]>=3?1:0,ct=a[K][1]>=3?1:0,bt=a[K][2]>=3?1:0,Yt=a[K][3]>=3?1:0,nt=a[K][0]>=2?1:0,ut=a[K][1]>=2?1:0,wt=a[K][2]>=2?1:0,pt=a[K][3]>=2?1:0,Ft=a[K][0]>=1?1:0,Ot=a[K][1]>=1?1:0,Wt=a[K][2]>=1?1:0,te=a[K][3]>=1?1:0,ee=M-at+c,ge=_-ct+c,X=C-bt+c,Ie=D-Yt+c,ie=M-nt+2*c,Qt=_-ut+2*c,Ht=C-wt+2*c,de=D-pt+2*c,$=M-Ft+3*c,R=_-Ot+3*c,b=C-Wt+3*c,V=D-te+3*c,J=M-1+4*c,tt=_-1+4*c,et=C-1+4*c,yt=D-1+4*c,vt=m&255,St=p&255,Kt=y&255,_t=S&255,Nt=o[vt+o[St+o[Kt+o[_t]]]]%32,$t=o[vt+at+o[St+ct+o[Kt+bt+o[_t+Yt]]]]%32,jt=o[vt+nt+o[St+ut+o[Kt+wt+o[_t+pt]]]]%32,kt=o[vt+Ft+o[St+Ot+o[Kt+Wt+o[_t+te]]]]%32,he=o[vt+1+o[St+1+o[Kt+1+o[_t+1]]]]%32;let Jt=.6-M*M-_*_-C*C-D*D;Jt<0?u=0:(Jt*=Jt,u=Jt*Jt*this.dot4(r[Nt],M,_,C,D));let pe=.6-ee*ee-ge*ge-X*X-Ie*Ie;pe<0?h=0:(pe*=pe,h=pe*pe*this.dot4(r[$t],ee,ge,X,Ie));let H=.6-ie*ie-Qt*Qt-Ht*Ht-de*de;H<0?f=0:(H*=H,f=H*H*this.dot4(r[jt],ie,Qt,Ht,de));let At=.6-$*$-R*R-b*b-V*V;At<0?d=0:(At*=At,d=At*At*this.dot4(r[kt],$,R,b,V));let rt=.6-J*J-tt*tt-et*et-yt*yt;return rt<0?v=0:(rt*=rt,v=rt*rt*this.dot4(r[he],J,tt,et,yt)),27*(u+h+f+d+v)}}class ai extends Es{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=E_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new An(this.width,this.height,{type:Bn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ve({defines:Object.assign({},La.defines),uniforms:Jn.clone(La.uniforms),vertexShader:La.vertexShader,fragmentShader:La.fragmentShader,blending:on,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Lx,this.normalMaterial.blending=on,this.pdMaterial=new Ve({defines:Object.assign({},Ua.defines),uniforms:Jn.clone(Ua.uniforms),vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ve({defines:Object.assign({},Ia.defines),uniforms:Jn.clone(Ia.uniforms),vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader,blending:on}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ve({uniforms:Jn.clone(zr.uniforms),vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ll,blendDst:Ar,blendEquation:Zn,blendSrcAlpha:ol,blendDstAlpha:Ar,blendEquationAlpha:Zn}),this.blendMaterial=new Ve({uniforms:Jn.clone(Ko.uniforms),vertexShader:Ko.vertexShader,fragmentShader:Ko.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Eu,blendSrc:ll,blendDst:Ar,blendEquation:Zn,blendSrcAlpha:ol,blendDstAlpha:Ar,blendEquationAlpha:Zn}),this.fsQuad=new ao(null),this.originalClearColor=new Ct,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new wc,this.depthTexture.format=xs,this.depthTexture.type=vs,this.normalRenderTarget=new An(this.width,this.height,{minFilter:gn,magFilter:gn,type:Bn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Af(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case ai.OUTPUT.Off:break;case ai.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=on,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ai.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=on,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ai.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=on,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ai.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case ai.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=on,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ai.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=on,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new C_,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){const l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new eo(s,t,t,kn,ui);return r.wrapS=Ii,r.wrapT=Ii,r.needsUpdate=!0,r}}ai.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const R_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ur extends Es{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Et(t.x,t.y):new Et(256,256),this.clearColor=new Ct(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new An(r,a,{type:Bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new An(r,a,{type:Bn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new An(r,a,{type:Bn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=R_;this.highPassUniforms=Jn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ve({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Et(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=zr;this.copyUniforms=Jn.clone(u.uniforms),this.blendMaterial=new Ve({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ei,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ct,this.oldClearAlpha=1,this.basic=new Ee,this.fsQuad=new ao(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Et(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ur.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ur.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Et(.5,.5)},direction:{value:new Et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}ur.BlurDirectionX=new Et(1,0);ur.BlurDirectionY=new Et(0,1);const P_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class D_ extends Es{constructor(){super();const t=P_;this.uniforms=Jn.clone(t.uniforms),this.material=new Dx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ao(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Se.getTransfer(this._outputColorSpace)===Ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Au?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Cu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ru?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Pu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const L_={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new O(1,1,1)},uLift:{value:new O},uSat:{value:1.08}},vertexShader:`
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
    }`},I_=new URLSearchParams(location.search).get("ao")==="1";function U_(i,t,e,n={}){const s=new b_(i,new An(1,1,{type:Bn})),r=new w_(t,e),a=new ai(t,e,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});a.blendIntensity=1;const o=new ur(new Et(256,256),.6,.55,1),l=new Tf(L_);n.tint&&l.uniforms.uTint.value.set(...n.tint),n.lift&&l.uniforms.uLift.value.set(...n.lift),n.sat&&(l.uniforms.uSat.value=n.sat),l.uniforms.uVignette.value=n.vignette??.25;const c=new D_;for(const v of[r,a,o,l,c])s.addPass(v);let u="high",h=1,f=1;const d={composer:s,get level(){return u},setLevel(v){u=v,a.enabled=v==="high"&&I_,o.strength=v==="high"?.6:.5;const x=v==="high"?4:0;for(const m of[s.renderTarget1,s.renderTarget2])m.samples!==x&&(m.samples=x,m.dispose());d.setSize(h,f)},setSize(v,x){h=v,f=x;const m=i.getPixelRatio();s.setPixelRatio(m),s.setSize(v,x);const p=u==="high"?2:4;o.resolution.set(v*m/p,x*m/p),o.setSize(v*m/p,x*m/p)},render(v){s.render(v)}};return d}function N_(i,t,e,n,s){const{heightAt:r}=t,a=e.mobile?.5:1,o=new Set(n.life),l=new Fe,c=new Ct,u=[],h=()=>{for(let d=0;d<50;d++){const v=(Math.random()-.5)*80,x=(Math.random()-.5)*80,m=r(v,x);if(m>.8)return{x:v,z:x,h:m}}return{x:0,z:0,h:1}};if(o.has("butterflies")){const d=Math.round(26*a),v=new lr(.16,6,0,Math.PI);v.scale(1,1.3,1);const m=[-1,1].map(()=>new Ue({color:"#ffffff",side:$e})).map(S=>{const g=new ln(v,S,d);return i.add(g),g}),p=Array.from({length:d},(S,g)=>({...h(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),y=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];p.forEach((S,g)=>{S.home={x:S.x,z:S.z},m.forEach(E=>E.setColorAt(g,c.set(y[g%y.length])))}),m.forEach(S=>S.instanceColor.needsUpdate=!0),u.push((S,g)=>{p.forEach((E,T)=>{E.a+=Math.sin(g*.7+E.ph)*1.6*S,E.x+=Math.cos(E.a)*E.sp*S,E.z+=Math.sin(E.a)*E.sp*S,Math.hypot(E.x-E.home.x,E.z-E.home.z)>5&&(E.a=Math.atan2(E.home.z-E.z,E.home.x-E.x));const w=r(E.x,E.z)+.6+Math.sin(g*2+E.ph)*.25,A=Math.sin(g*18+E.ph)*1.1;m.forEach((M,_)=>{l.position.set(E.x,w,E.z),l.rotation.set(0,-E.a+Math.PI/2,0),l.rotateZ((_?1:-1)*(.3+A*.5)),l.rotateX(-Math.PI/2),l.scale.set(_?1:-1,1,1),l.updateMatrix(),M.setMatrixAt(T,l.matrix)})}),m.forEach(E=>E.instanceMatrix.needsUpdate=!0)})}if(o.has("birds")){const v=new Pe;v.setAttribute("position",new oe([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),v.computeVertexNormals();const x=new ln(v,new Ue({color:"#f4f4f0",side:$e}),7);x.castShadow=!0,i.add(x);const m=Array.from({length:7},(p,y)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:y}));u.push((p,y)=>{m.forEach((S,g)=>{const E=y*S.sp+S.ph;l.position.set(S.cx+Math.cos(E)*S.r,S.y+Math.sin(y*.7+g)*.4,S.cz+Math.sin(E)*S.r),l.rotation.set(0,-E,Math.sin(y*.5+g)*.15);const T=1+Math.sin(y*6+g)*.35*(Math.sin(y*.4+g)>.3?1:.1);l.scale.set(1.4,T*1.4,1.4),l.updateMatrix(),x.setMatrixAt(g,l.matrix)}),x.instanceMatrix.needsUpdate=!0})}if(o.has("leaves")){const d=Math.round(60*a),v=new Vn(.16,.1),x=new ln(v,new Ue({color:"#ffffff",side:$e}),d);i.add(x);const m=Array.from({length:d},(p,y)=>({...h(),ph:Math.random()*6,sp:1+Math.random()*1.5}));m.forEach((p,y)=>x.setColorAt(y,c.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][y%4]))),x.instanceColor.needsUpdate=!0,u.push((p,y)=>{m.forEach((S,g)=>{S.x+=S.sp*p,S.z+=Math.sin(y*.8+S.ph)*.6*p,S.x>45&&Object.assign(S,h(),{x:-45});const E=Math.max(r(S.x,S.z),.1)+.3+Math.abs(Math.sin(y*1.3+S.ph))*.9;l.position.set(S.x,E,S.z),l.rotation.set(y*3+S.ph,y*2+S.ph,y*1.5),l.scale.setScalar(1),l.updateMatrix(),x.setMatrixAt(g,l.matrix)}),x.instanceMatrix.needsUpdate=!0})}if(o.has("fireflies")&&s==="skumring"){const d=Math.round(120*a),v=new Float32Array(d*3),x=new Float32Array(d*3),m=Array.from({length:d},()=>({...h(),ph:Math.random()*6})),p=new Pe;p.setAttribute("position",new ze(v,3)),p.setAttribute("color",new ze(x,3));const y=document.createElement("canvas");y.width=y.height=32;const S=y.getContext("2d"),g=S.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),S.fillStyle=g,S.fillRect(0,0,32,32);const E=new Tc(p,new no({size:.35,map:new Ri(y),vertexColors:!0,transparent:!0,blending:ei,depthWrite:!1}));E.frustumCulled=!1,i.add(E),u.push((T,w)=>{m.forEach((A,M)=>{v[M*3]=A.x+Math.sin(w*.4+A.ph)*1.2,v[M*3+1]=A.h+.5+Math.sin(w*.9+A.ph*2)*.4,v[M*3+2]=A.z+Math.cos(w*.35+A.ph)*1.2;const _=Math.max(0,Math.sin(w*1.7+A.ph*3))**3*2.5;x[M*3]=1*_,x[M*3+1]=.9*_,x[M*3+2]=.35*_}),p.attributes.position.needsUpdate=!0,p.attributes.color.needsUpdate=!0})}let f=0;return{update(d){const v=Math.min(.05,Math.max(0,d-f));f=d;for(const x of u)x(v,d)}}}function z_(i,{cell:t=.75,ext:e=68}={}){const n=Math.ceil(e*2/t)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),a=new Float32Array(n*n),o=i.lighthouse.pos,l=(w,A)=>[Math.round((w+e)/t),Math.round((A+e)/t)],c=(w,A)=>[-e+w*t,-e+A*t];let u=()=>!1;function h(){for(let w=0;w<n;w++)for(let A=0;A<n;A++){const[M,_]=c(A,w),C=i.heightAt(M,_),D=w*n+A,B=Math.hypot(M-o.x,_-o.z);let I=1.8;C<-.5||i.slopeAt(M,_)>1.1||i.extras.blocks(M,_)||u(M,_)||B<3.2?I=1/0:i.pathDist(M,_)<1.6?I=.2:C<.05&&(I=2.6),r[D]=I}}function f(){s.fill(1/0),a.fill(0);const w=[],A=(C,D)=>{w.push([C,D]);let B=w.length-1;for(;B>0;){const I=B-1>>1;if(w[I][0]<=w[B][0])break;[w[I],w[B]]=[w[B],w[I]],B=I}},M=()=>{const C=w[0],D=w.pop();if(w.length){w[0]=D;let B=0;for(;;){const I=2*B+1,k=I+1;let G=B;if(I<w.length&&w[I][0]<w[G][0]&&(G=I),k<w.length&&w[k][0]<w[G][0]&&(G=k),G===B)break;[w[G],w[B]]=[w[B],w[G]],B=G}}return C};for(let C=0;C<n;C++)for(let D=0;D<n;D++){const[B,I]=c(D,C),k=Math.hypot(B-o.x,I-o.z);k>=3.2&&k<4.2&&r[C*n+D]<1/0&&(s[C*n+D]=0,A(0,C*n+D))}const _=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;w.length;){const[C,D]=M();if(C>s[D])continue;const B=D%n,I=D/n|0;for(const[k,G,W]of _){const F=B+k,K=I+G;if(F<0||K<0||F>=n||K>=n)continue;const at=K*n+F,ct=r[at];if(ct===1/0)continue;const bt=C+W*t*(ct+r[D])*.5;bt<s[at]&&(s[at]=bt,a[at]=a[D]+W*t,A(bt,at))}}}const d=(w,A)=>{const[M,_]=l(w,A);return M<0||_<0||M>=n||_>=n?1/0:s[_*n+M]};function v(w,A){const[M,_]=l(w,A);let C=d(w,A),D=0,B=0;for(let k=-1;k<=1;k++)for(let G=-1;G<=1;G++){if(!G&&!k)continue;const W=M+G,F=_+k;if(W<0||F<0||W>=n||F>=n)continue;const K=s[F*n+W];K<C&&(C=K,D=G,B=k)}const I=Math.hypot(D,B)||1;return[D/I,B/I,C]}const x=(w,A)=>{const[M,_]=l(w,A);return M<0||_<0||M>=n||_>=n?-1:_*n+M},m=(w,A)=>{const M=x(w,A);return M<0||s[M]===1/0?0:a[M]};function p(){const w=[];for(const A of i.paths){const M=A.samples.find(_=>i.heightAt(_.x,_.z)>-.4&&m(_.x,_.z)>0);M&&w.push([M.x,M.z])}return w}function y(w,A=22,{near:M=8,minFrac:_=.6}={}){const C=p(),D=Math.max(0,...C.map(([G,W])=>m(G,W))),B=(G,W)=>{const F=i.heightAt(G,W);return F>-.4&&F<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([K,at])=>i.heightAt(G+K,W+at)<-.9)},I=C.map(([G,W])=>{const F=[],K=[],at=Math.ceil(M/t),[ct,bt]=l(G,W);for(let nt=-at;nt<=at;nt++)for(let ut=-at;ut<=at;ut++){const[wt,pt]=c(ct+ut,bt+nt);Math.hypot(wt-G,pt-W)>M||m(wt,pt)<_*D||(B(wt,pt)?F.push([wt,pt]):i.heightAt(wt,pt)>.3&&i.slopeAt(wt,pt)<.6&&K.push([wt,pt]))}return(F.length?F:K).sort(()=>Math.random()-.5)}).filter(G=>G.length).sort(()=>Math.random()-.5),k=[];for(let G=0;k.length<w&&G<4;G++){for(const W of I){const F=W.find(K=>k.every(at=>Math.hypot(at[0]-K[0],at[1]-K[1])>A));if(F&&k.push(F),k.length>=w)break}A=Math.min(A,6)}return k}let S=null;function g(w,A){if(!S){S=new Float32Array(n*n);for(let G=0;G<n;G++)for(let W=0;W<n;W++){const[F,K]=c(W,G);S[G*n+W]=i.isWalkable(F,K)?i.heightAt(F,K)<.05?1.6:1:1/0}}const M=new Float64Array(n*n).fill(1/0),_=[],C=(G,W)=>{_.push([G,W]);let F=_.length-1;for(;F>0;){const K=F-1>>1;if(_[K][0]<=_[F][0])break;[_[K],_[F]]=[_[F],_[K]],F=K}},D=()=>{const G=_[0],W=_.pop();if(_.length){_[0]=W;let F=0;for(;;){const K=2*F+1,at=K+1;let ct=F;if(K<_.length&&_[K][0]<_[ct][0]&&(ct=K),at<_.length&&_[at][0]<_[ct][0]&&(ct=at),ct===F)break;[_[ct],_[F]]=[_[F],_[ct]],F=ct}}return G},B=x(w,A);if(B<0)return null;M[B]=0,C(0,B);const I=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;_.length;){const[G,W]=D();if(G>M[W])continue;const F=W%n,K=W/n|0;for(const[at,ct,bt]of I){const Yt=F+at,nt=K+ct;if(Yt<0||nt<0||Yt>=n||nt>=n)continue;const ut=nt*n+Yt,wt=S[ut];if(wt===1/0)continue;const pt=G+bt*t*wt;pt<M[ut]&&(M[ut]=pt,C(pt,ut))}}const k=(G,W)=>{const F=x(G,W);return F<0?1/0:M[F]};return{at:k,dir(G,W){const[F,K]=l(G,W);let at=k(G,W),ct=0,bt=0;for(let nt=-1;nt<=1;nt++)for(let ut=-1;ut<=1;ut++){if(!ut&&!nt)continue;const wt=F+ut,pt=K+nt;wt<0||pt<0||wt>=n||pt>=n||M[pt*n+wt]<at&&(at=M[pt*n+wt],ct=ut,bt=nt)}const Yt=Math.hypot(ct,bt)||1;return[ct/Yt,bt/Yt]}}}const E=()=>{let w=0;for(const A of s)A<1/0&&A>w&&(w=A);return w},T=()=>{h(),f()};return T(),{at:d,dir:v,coastPoints:y,roadEnds:p,routeLen:m,walkField:g,rebuild:T,setBlock(w){u=w,T()},maxDist:E(),N:n,cell:t}}function Cf(i,t=700,{blending:e=ei,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const a=new Ct(r||"#000000"),o=new Float32Array(t*3),l=new Float32Array(t*3),c=new Float32Array(t*3),u=new Float32Array(t*3),h=new Float32Array(t),f=new Float32Array(t),d=new Float32Array(t);let v=0;const x=new Pe;x.setAttribute("position",new ze(o,3)),x.setAttribute("color",new ze(l,3));const m=document.createElement("canvas");m.width=m.height=64;const p=m.getContext("2d"),y=p.createRadialGradient(32,32,0,32,32,32);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.4,"rgba(255,255,255,0.6)"),y.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=y,p.fillRect(0,0,64,64);const S=new no({size:n,map:new Ri(m),vertexColors:!0,transparent:!0,opacity:s,blending:e,depthWrite:!1}),g=new Tc(x,S);g.frustumCulled=!1,i.add(g);for(let A=0;A<t;A++)o[A*3+1]=-999;const E=new Ct;function T(A,M,_,{n:C=10,color:D="#ffb347",speed:B=4,up:I=3,life:k=.7,gravity:G=9,spread:W=1}={}){E.set(D);for(let F=0;F<C;F++){const K=v;v=(v+1)%t,o[K*3]=A,o[K*3+1]=M,o[K*3+2]=_;const at=Math.random()*Math.PI*2,ct=B*(.4+Math.random()*.6)*W;c[K*3]=Math.cos(at)*ct,c[K*3+1]=I*(.5+Math.random()),c[K*3+2]=Math.sin(at)*ct,u[K*3]=E.r,u[K*3+1]=E.g,u[K*3+2]=E.b,f[K]=h[K]=k*(.6+Math.random()*.6),d[K]=G}}function w(A){for(let M=0;M<t;M++){if(h[M]<=0)continue;if(h[M]-=A,h[M]<=0){o[M*3+1]=-999,l[M*3]=l[M*3+1]=l[M*3+2]=0;continue}c[M*3+1]-=d[M]*A,o[M*3]+=c[M*3]*A,o[M*3+1]+=c[M*3+1]*A,o[M*3+2]+=c[M*3+2]*A;const _=h[M]/f[M];l[M*3]=u[M*3]*_+a.r*(1-_),l[M*3+1]=u[M*3+1]*_+a.g*(1-_),l[M*3+2]=u[M*3+2]*_+a.b*(1-_)}x.attributes.position.needsUpdate=!0,x.attributes.color.needsUpdate=!0}return{emit:T,update:w}}const F_={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},O_={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},k_={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function fu(i=""){const t=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(t)?"switch":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(t)?"ps":"xbox"}function B_(i){const t=i==="switch";return{build:t?1:0,carry:t?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function G_(i){const t=new Set,e={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=g=>e.pressed.add(g),s=g=>{e.device=g};addEventListener("keydown",g=>{if(s("kb"),(g.code==="Space"||g.code.startsWith("Arrow")||g.code==="Tab")&&g.preventDefault(),g.repeat)return;t.add(g.code);const E={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Digit4:"b4",Digit5:"b5",Digit6:"b6",Digit7:"b7",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",Numpad4:"b4",Numpad5:"b5",Numpad6:"b6",Numpad7:"b7",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};E[g.code]&&n(E[g.code])}),addEventListener("keyup",g=>t.delete(g.code)),addEventListener("blur",()=>t.clear()),i.addEventListener("wheel",g=>{g.preventDefault(),s("kb"),e.zoom=Na(e.zoom*(g.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",g=>g.preventDefault());const r=new Map;let a=0,o=1,l=null;const c=g=>({x:g.clientX/innerWidth*2-1,y:-(g.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",g=>{if(s(g.pointerType==="touch"?"touch":"kb"),g.pointerType==="mouse"&&g.button===2){l={x:g.clientX},i.setPointerCapture(g.pointerId);return}g.pointerType==="mouse"&&g.button!==0||(r.set(g.pointerId,{e:g,t:performance.now(),x0:g.clientX,y0:g.clientY}),r.size===2&&(a=du(r),o=e.zoom))}),i.addEventListener("pointermove",g=>{if(l){e.lookDelta+=(g.clientX-l.x)*.008,l.x=g.clientX;return}const E=r.get(g.pointerId);E&&(E.e=g,r.size===2&&a>0&&(e.zoom=Na(o*(a/du(r)),.55,4.5)))});const u=g=>{if(l&&g.button===2){l=null;return}const E=r.get(g.pointerId);E&&r.size===1&&a===0&&Math.hypot(g.clientX-E.x0,g.clientY-E.y0)<12&&e.clicks.push(c(g)),r.delete(g.pointerId),r.size<2&&(a=0)};i.addEventListener("pointerup",u),i.addEventListener("pointercancel",g=>{r.delete(g.pointerId),l=null,a=0});const h=document.getElementById("stick"),f=document.getElementById("knob"),d={x:0,z:0};let v=null;const x=g=>{const E=h.getBoundingClientRect();let T=g.clientX-(E.left+E.width/2),w=g.clientY-(E.top+E.height/2);const A=E.width/2,M=Math.hypot(T,w);M>A&&(T*=A/M,w*=A/M),f.style.transform=`translate(${T}px, ${w}px)`;const _=M/A<.15?0:1;d.x=T/A*_,d.z=w/A*_};h.addEventListener("pointerdown",g=>{s("touch"),v=g.pointerId,h.setPointerCapture(g.pointerId),x(g)}),h.addEventListener("pointermove",g=>{g.pointerId===v&&x(g)});const m=g=>{g.pointerId===v&&(v=null,d.x=d.z=0,f.style.transform="")};h.addEventListener("pointerup",m),h.addEventListener("pointercancel",m);const p=(g,E)=>g.addEventListener("pointerdown",T=>{T.preventDefault(),T.stopPropagation(),T.pointerType==="touch"&&s("touch"),n(E)});p(document.getElementById("btn-build"),"build"),p(document.getElementById("btn-carry"),"carry"),p(document.getElementById("btn-next"),"next"),p(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((g,E)=>p(g,"b"+(E+1)));let y=[];addEventListener("gamepadconnected",g=>{e.padId=g.gamepad.id,e.padKind=fu(g.gamepad.id)});function S(){const E=[...navigator.getGamepads?navigator.getGamepads():[]].find(I=>I&&I.connected);if(!E)return null;E.id!==e.padId&&(e.padId=E.id,e.padKind=fu(E.id));const T=B_(e.padKind),w=E.buttons.map(I=>I.pressed||I.value>.5),A=I=>w[I]&&!y[I],M=I=>Math.abs(I)<.2?0:(I-Math.sign(I)*.2)/.8;let _=M(E.axes[0]||0),C=M(E.axes[1]||0);w[14]&&(_=-1),w[15]&&(_=1),w[12]&&(C=-1),w[13]&&(C=1);const D=M(E.axes[2]||0);return(_||C||D||w.some(Boolean))&&s("pad"),A(T.build)&&n("build"),A(T.carry)&&n("carry"),A(T.next)&&n("next"),A(T.prev)&&n("selPrev"),A(T.nextSel)&&n("selNext"),A(T.pause)&&n("pause"),A(T.back)&&n("restart"),A(2)&&e.padKind!=="switch"&&n("next"),y=w,{x:_,z:C,look:D,zoomIn:w[T.zoomIn],zoomOut:w[T.zoomOut]}}return e.update=g=>{let E=0,T=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(E-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(E+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(T-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(T+=1);const w=S();w&&(w.x||w.z)&&(E=w.x,T=w.z),(d.x||d.z)&&(E=d.x,T=d.z);const A=Math.hypot(E,T);A>1&&(E/=A,T/=A),e.move.x=E,e.move.z=T,e.look=e.lookDelta+(w?w.look*2.2*g:0),e.lookDelta=0,w!=null&&w.zoomIn&&(e.zoom=Na(e.zoom/(1+g*1.2),.55,4.5)),w!=null&&w.zoomOut&&(e.zoom=Na(e.zoom*(1+g*1.2),.55,4.5))},e.labels=()=>e.device==="pad"?F_[e.padKind]:e.device==="touch"?k_:O_,e.consume=g=>e.pressed.delete(g),e.clear=()=>{e.pressed.clear(),e.clicks.length=0},e}const Na=(i,t,e)=>Math.max(t,Math.min(e,i));function du(i){const[t,e]=[...i.values()].map(n=>n.e);return Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY)||1}let Oe=null,Js=null,$r=null;function V_(){if(Oe){Oe.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;Oe=new i,Js=Oe.createGain(),Js.gain.value=.5,Js.connect(Oe.destination),$r=Oe.createBuffer(1,Oe.sampleRate*2,Oe.sampleRate);const t=$r.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;H_()}const Rf=()=>Oe?{ctx:Oe,noiseBuf:$r}:null;function qe(i,t,{type:e="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!Oe)return;const a=Oe.currentTime+r,o=Oe.createOscillator(),l=Oe.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(Js),o.start(a),o.stop(a+t+.02)}function ss(i,{vol:t=.3,freq:e=800,q:n=.7,delay:s=0}={}){if(!Oe)return;const r=Oe.currentTime+s,a=Oe.createBufferSource();a.buffer=$r;const o=Oe.createBiquadFilter();o.type="lowpass",o.frequency.value=e,o.Q.value=n;const l=Oe.createGain();l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),a.connect(o).connect(l).connect(Js),a.start(r,Math.random()),a.stop(r+i+.02)}function H_(){const i=Oe.createBufferSource();i.buffer=$r,i.loop=!0;const t=Oe.createBiquadFilter();t.type="lowpass",t.frequency.value=420;const e=Oe.createGain();e.gain.value=.035;const n=Oe.createOscillator(),s=Oe.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(e.gain),i.connect(t).connect(e).connect(Js),i.start(),n.start()}let pu=0;const Ge={pickup(){if(!Oe)return;const i=Oe.currentTime,t=i-pu<.4?1.12:1;pu=i,qe(880*t+Math.random()*60,.12,{type:"triangle",vol:.12}),qe(1320*t,.1,{type:"sine",vol:.06,delay:.04})},puff(){ss(.18,{vol:.07,freq:600,q:.3}),qe(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)ss(.05,{vol:.1,freq:3500,delay:i*.03});qe(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>qe(i,.11,{type:"square",vol:.025})),qe(98,.3,{vol:.08})},chill(){qe(330,.5,{type:"sine",vol:.07,slide:160}),qe(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){qe(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){ss(.12,{vol:.12,freq:500}),qe(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){ss(.45,{vol:.28,freq:380}),qe(90,.35,{vol:.18,slide:-50})},horn(){qe(196,.5,{type:"sawtooth",vol:.035}),qe(147,.55,{type:"sine",vol:.06})},hit(){ss(.05,{vol:.08,freq:2500})},die(){qe(420,.18,{type:"triangle",vol:.09,slide:-280}),ss(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,t)=>qe(i,.25,{type:"triangle",vol:.1,delay:t*.06}))},upgrade(){[523,659,784,1047].forEach((i,t)=>qe(i,.22,{type:"triangle",vol:.1,delay:t*.07}))},stone(){qe(660,.2,{type:"sine",vol:.1,slide:200})},lose(){qe(220,.6,{type:"sawtooth",vol:.06,slide:-120}),ss(.3,{vol:.08,freq:300})},stun(){qe(700,.4,{type:"square",vol:.05,slide:-500})},deny(){qe(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,t)=>qe(i,.3,{type:"sawtooth",vol:.04,delay:t*.18}))},win(){[523,659,784,1047,1319].forEach((i,t)=>qe(i,.4,{type:"triangle",vol:.12,delay:t*.12}))}},ic=172,bi=60/ic/4,rs=i=>440*Math.pow(2,(i-69)/12),mu={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},Jo={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},gu=[["build",8],["drop",16],["break",8],["drop",16]];function W_(i,t,e){const n=mu[e]||mu.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const a=i.createGain();a.gain.value=0,s.connect(r).connect(a).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,a.connect(o);const l={};for(const $ of["drums","bass","pad","arp","lead"]){const R=i.createGain();R.gain.value=0,R.connect(s),l[$]=R}const c={};for(const $ of["pad","bass"]){const R=i.createGain();R.gain.value=1,R.connect(l[$]),c[$]=R}const u=($,R)=>{const b=i.createBuffer(2,Math.floor(i.sampleRate*$),i.sampleRate);for(let V=0;V<2;V++){const J=b.getChannelData(V);for(let tt=0;tt<J.length;tt++)J[tt]=(Math.random()*2-1)*Math.pow(1-tt/J.length,R)}return b},h=i.createConvolver();h.buffer=u(2.4,2.5);const f=i.createGain();f.gain.value=n.space,h.connect(f).connect(s);const d=i.createConvolver();d.buffer=u(.5,.4);const v=i.createGain();v.gain.value=0,d.connect(v).connect(l.drums);const x=i.createDelay(1);x.delayTime.value=bi*3;const m=i.createGain();m.gain.value=.38;const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=2400;const y=i.createStereoPanner(),S=i.createOscillator(),g=i.createGain();S.frequency.value=ic/60/3,g.gain.value=.8,S.connect(g).connect(y.pan),S.start(),x.connect(p).connect(m).connect(x),p.connect(y).connect(l.arp);const E=i.createBiquadFilter();E.type="highpass",E.frequency.value=180;const T=i.createBiquadFilter();T.type="lowpass",T.frequency.value=n.padCut,T.Q.value=2;const w=i.createOscillator(),A=i.createGain();w.frequency.value=.07,A.gain.value=n.padCut*.45,w.connect(A).connect(T.frequency),w.start();const M=i.createDelay(.05);M.delayTime.value=.014;const _=i.createOscillator(),C=i.createGain();_.frequency.value=.5,C.gain.value=.004,_.connect(C).connect(M.delayTime),_.start();const D=i.createStereoPanner();D.pan.value=.6,E.connect(T),T.connect(c.pad),T.connect(M).connect(D).connect(c.pad),T.connect(h);const B=i.createBiquadFilter();B.type="lowpass",B.frequency.value=420,B.Q.value=6;const I=i.createOscillator(),k=i.createGain();if(I.frequency.value=ic/60/4,k.gain.value=260,I.connect(k).connect(B.frequency),I.start(),n.drive>0){const $=i.createWaveShaper(),R=new Float32Array(1024);for(let b=0;b<1024;b++){const V=b/512-1;R[b]=Math.tanh(V*(1+n.drive*6))}$.curve=R,B.connect($).connect(c.bass)}else B.connect(c.bass);const G=i.createBiquadFilter();G.type="lowpass",G.frequency.value=3600,G.Q.value=3,G.connect(l.lead),G.connect(x),G.connect(h);const W=($,R,b,V,J,tt)=>{$.gain.setValueAtTime(1e-4,R),$.gain.exponentialRampToValueAtTime(V,R+b),$.gain.setValueAtTime(V,R+Math.max(b,tt-J)),$.gain.exponentialRampToValueAtTime(1e-4,R+tt)},F=($,R)=>{const b=i.createStereoPanner();return b.pan.value=R,$.connect(b),b},K=($,R,b,V,J,tt,et="bandpass",yt=0)=>{const vt=i.createBufferSource();vt.buffer=t;const St=i.createBiquadFilter();St.type=et,St.frequency.value=b,St.Q.value=V;const Kt=i.createGain();W(Kt,$,.001,J,R*.8,R),vt.connect(St).connect(Kt);const _t=yt?F(Kt,yt):Kt;for(const Nt of tt)_t.connect(Nt);vt.start($,Math.random()*1.5),vt.stop($+R+.02)},at=($,R=1)=>{const b=i.createOscillator(),V=i.createGain();b.frequency.setValueAtTime(160,$),b.frequency.exponentialRampToValueAtTime(44,$+.11),W(V,$,.002,1*R,.2,.3),b.connect(V).connect(l.drums),b.start($),b.stop($+.32),K($,.012,3500,.7,.35*R,[l.drums],"highpass");for(const J of Object.values(c))J.gain.cancelScheduledValues($),J.gain.setValueAtTime(.35,$),J.gain.linearRampToValueAtTime(1,$+.2)},ct=($,R=1)=>{K($,.17,1900,.8,.5*R,[l.drums,d]);for(const[b,V,J]of[[200,160,.3],[340,260,.14]]){const tt=i.createOscillator(),et=i.createGain();tt.type="triangle",tt.frequency.setValueAtTime(b,$),tt.frequency.exponentialRampToValueAtTime(V,$+.08),W(et,$,.001,J*R,.06,.11),tt.connect(et).connect(l.drums),tt.start($),tt.stop($+.13)}v.gain.setValueAtTime(.9*R,$),v.gain.setValueAtTime(1e-4,$+.21)};let bt=1;const Yt=($,R,b)=>{bt=-bt,K($,b?.14:.035,9e3,.6,(b?.12:.08)*R,[l.drums],"highpass",bt*.35)},nt=($,R,b)=>{for(const tt of[-n.reeseDetune,n.reeseDetune]){const et=i.createOscillator(),yt=i.createGain();et.type="sawtooth",et.frequency.value=rs(R),et.detune.value=tt,W(yt,$,.02,.2,.1,b),F(et.connect(yt),tt>0?.25:-.25).connect(B),et.start($),et.stop($+b+.05)}const V=i.createOscillator(),J=i.createGain();V.frequency.value=rs(R-12),W(J,$,.02,.42,.1,b),V.connect(J).connect(c.bass),V.start($),V.stop($+b+.05)},ut=($,R,b,V=1)=>{for(const J of R.slice(1))for(const[tt,et]of[[-9,-.6],[0,0],[8,.6]]){const yt=i.createOscillator(),vt=i.createGain();yt.type=n.pad,yt.frequency.value=rs(J),yt.detune.value=tt,W(vt,$,.8,.026*V,1.4,b),F(yt.connect(vt),et).connect(E),yt.start($),yt.stop($+b+.1)}},wt=($,R,b=1)=>{const V=i.createOscillator(),J=i.createGain();V.type="square",V.frequency.value=rs(R+n.arpOct);const tt=i.createBiquadFilter();tt.type="lowpass",tt.frequency.value=3200,W(J,$,.003,.05*b,.08,bi*1.6),V.connect(tt).connect(J),J.connect(l.arp),J.connect(x),V.start($),V.stop($+bi*2)},pt=($,R,b,V)=>{const J=b*bi;for(const tt of[-6,6]){const et=i.createOscillator(),yt=i.createGain();et.type=n.lead,V?(et.frequency.setValueAtTime(rs(V),$),et.frequency.exponentialRampToValueAtTime(rs(R),$+.05)):et.frequency.value=rs(R),et.detune.value=tt;const vt=i.createOscillator(),St=i.createGain();vt.frequency.value=5.5,St.gain.value=9,vt.connect(St).connect(et.detune),vt.start($+.12),vt.stop($+J+.05),W(yt,$,.01,.07,Math.min(.12,J*.4),J),F(et.connect(yt),tt>0?.2:-.2).connect(G),et.start($),et.stop($+J+.05)}};let Ft=0,Ot=0,Wt=null,te=0,ee=.7,ge=!1,X=0;const Ie=gu.reduce(($,[,R])=>$+R,0),ie=()=>{if(te<.5)return"ambient";let $=X%Ie;for(const[R,b]of gu){if($<b)return R;$-=b}return"drop"},Qt=()=>{const $=i.currentTime,R=(V,J)=>{V.gain.cancelScheduledValues($),V.gain.setTargetAtTime(J,$,.8)},b=te;R(l.drums,.1+.85*b),R(l.bass,.3+.6*b),R(l.pad,.75-.2*b),R(l.arp,.35+.3*b),R(l.lead,.55+.35*b),a.gain.cancelScheduledValues($),a.gain.setTargetAtTime(ge?0:ee*.8,$,.3)},Ht=$=>$%2?bi*.12:0,de=()=>{for(;Ot<i.currentTime+.15;){const $=Ft%32,R=Math.floor(Ft/16),b=Math.floor(Ft/32)%n.chords.length,V=n.chords[b];$%16===0&&Ft>0&&te>.5&&X++;const J=ie(),tt=Ot+Ht($),et=X%8;if(J==="drop"||J==="build"){const vt=et%4===3&&$>=16?Jo.FILL:et>=6?Jo.B:Jo.A,St=J==="build"&&et<4;vt.k[$]==="x"&&!(St&&$%8)&&at(tt),vt.s[$]==="x"&&!St&&ct(tt,J==="build"?.7:1),vt.g[$]==="x"&&ct(tt,.3),(!St||$%2===0)&&Yt(tt,$%2?.6:1,$%8===6)}else J==="break"?($%4===2&&Yt(tt,.6,!1),($===0||$===16)&&at(tt,.4)):$%4===2&&Yt(tt,.45,!1);if($===0&&(ut(tt,V,bi*32,J==="break"?1.3:1),nt(tt,V[0],bi*(J==="drop"?14:30))),J==="drop"&&$===16&&nt(tt,V[0]+(b%2?3:7),bi*14),$%n.arpRate===0&&J!=="break"&&wt(tt,V[1+$/n.arpRate%4]+($>=16?12:0),J==="ambient"?.7:1),J==="drop"||(J==="break"||J==="ambient")&&Math.floor(R/4)%2===1){const vt=n.hook.findIndex(([St])=>St===$);if(vt>=0){const[,St,Kt]=n.hook[vt];pt(tt,St+(J==="ambient"?-12:0),Kt,vt>0?n.hook[vt-1][1]:0)}}Ot+=bi,Ft++}};return{start(){Wt||(Ot=i.currentTime+.1,Wt=setInterval(de,25),Qt())},stop(){clearInterval(Wt),Wt=null,a.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity($){$>.5&&te<=.5&&(X=0),te=$,Qt()},setVolume($){ee=$,Qt()},setMuted($){ge=$,Qt()},get muted(){return ge},get volume(){return ee},rms(){const $=new Float32Array(o.fftSize);return o.getFloatTimeDomainData($),Math.sqrt($.reduce((R,b)=>R+b*b,0)/$.length)},get intensity(){return te},get section(){return ie()},tap($){a.connect($)}}}const Vt={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:.4,upgradeTime:[15,20,25,30],keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,chillMax:100,stressInvuln:1,stressPush:7,airStress:10,faintTime:6,faintLoss:.25,wakeChill:.6,regen:3,regenReach:9,bagChance:.05,bagHeal:25,bagLife:20,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8]},Qs={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!0,tip:"rask · bakke + luft"},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5,tip:"splash · kun bakke"},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2,tip:"bremser i ring"},bubble:{name:"Bobleblåser",cost:20,range:7,dmg:2.5,cooldown:.38,air:!0,ground:!1,trap:1.4,tip:"fanger flyvere · kun luft"},kite:{name:"Papirdrage",cost:40,range:13,dmg:5,cooldown:2.8,air:!0,ground:!1,zone:3.4,hover:2.4,tip:"sone, lang · kun luft"},pizza:{name:"Pizza-katapult",cost:55,range:14,dmg:24,cooldown:3,air:!1,splash:2.9,tip:"lang splash · kun bakke"},lamp:{name:"Lavalampe",cost:50,range:4.6,dmg:1.1,cooldown:.3,air:!0,slowTime:.5,tip:"aura, bremser alt"}},oo={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0",stress:10},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0",resist:{ring:.5,chips:1.5},stress:15},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0,swoop:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a",stress:8},auditor:{name:"Revisoren",hp:70,speed:1.6,embers:8,anim:7,puff:"#9fffb0",shield:.25,resist:{lamp:1.5},info:"skjold forfra (×0,25), ikke mot aura",stress:14},complainer:{name:"Naboklageren",hp:12,speed:4.3,embers:3,anim:18,puff:"#ffb0f0",resist:{chips:.5,ring:1.5},info:"rask, mørtel bommer",stress:10},lobbyist:{name:"Lobbyisten",hp:55,speed:1.9,embers:6,anim:9,puff:"#ffe08a",splits:3,resist:{speaker:.5,pizza:1.5},noMood:!0,info:"deler seg i tre, immun mot stemning",stress:12},lobbyMini:{name:"Mini-lobbyist",hp:14,speed:2.7,embers:1,anim:14,puff:"#ffe08a",resist:{speaker:.5,pizza:1.5},noMood:!0,stress:8},drone:{name:"Overvåkings-drone",hp:9,speed:4.6,embers:1,anim:30,puff:"#c8d8ff",flying:!0,alt:3.6,resist:{bubble:1.5,lamp:1.5,kite:.5},info:"rask sverm i lufta"},balloon:{name:"Ballong-byråkraten",hp:150,speed:1.05,embers:14,anim:2,puff:"#ffffff",flying:!0,alt:5.6,resist:{bubble:.5,kite:1.5},info:"seig, høyt oppe"},heli:{name:"Mini-helikopteret",hp:48,speed:2.5,embers:7,anim:40,puff:"#ffffff",flying:!0,alt:4.6,blind:{every:6,dur:3,range:9},resist:{ring:.5,kite:1.5},info:"søkelys blender et tårn i 3 s"}},X_=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],an=new URLSearchParams(location.search),Pf=an.has("demo");if(an.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(vr.length))}catch{}let bn=Number(an.get("world"));if(!Number.isInteger(bn))try{bn=Number(localStorage.getItem("glod-world"))||0}catch{bn=0}bn=Math.max(0,Math.min(qr()-1,bn));try{localStorage.setItem("glod-world",String(bn))}catch{}const Je=vr[bn],Nc=n_(Je,X_);function q_(){return 1}const Y_=Math.max(1,Math.min(20,Number(an.get("speed"))||1)),Ui=matchMedia("(pointer: coarse)").matches||an.has("mobile"),sc={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:2}};let ni=Ui?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(ni=i)}catch{}(an.get("q")==="high"||an.get("q")==="low")&&(ni=an.get("q"));const jr={mobile:Ui,shadow:sc[ni].shadow,dprCap:sc[ni].dprCap},$_={high:["rock","tree","tower","figure"],low:["rock","tree","tower","figure"]};function Df(i){const t=an.has("ol")?an.get("ol").split(","):$_[i];df(Object.fromEntries(["rock","tree","tower","figure"].map(e=>[e,t.includes(e)])))}Df(ni);const Lf=document.getElementById("game"),xn=new Jv({canvas:Lf,antialias:!Ui,powerPreference:"high-performance",preserveDrawingBuffer:an.has("shot")});let Wi=Math.min(devicePixelRatio||1,jr.dprCap);xn.setPixelRatio(Wi);xn.shadowMap.enabled=!0;xn.shadowMap.type=wu;xn.toneMapping=hc;let ds="dag";try{ds=localStorage.getItem("glod-tid")||"dag"}catch{}an.get("tid")&&(ds=an.get("tid"));const Gn=ds==="skumring"&&Je.skyDusk?Je.skyDusk:Je.sky;xn.toneMappingExposure=Gn.exposure;xn.info.autoReset=!1;const xe=new Qv,If=new Ct(Gn.fog);xe.background=If;xe.fog=new Ec(If,...Je.fog??[55,115]);const He=new In(38,1,.5,200),j_=new Ix(Gn.hemiSky,Gn.hemiGround,Gn.hemi);xe.add(j_);const sn=new zx(Gn.sun,Gn.sunI);sn.castShadow=!0;sn.shadow.mapSize.set(jr.shadow,jr.shadow);Object.assign(sn.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});sn.shadow.bias=-8e-4;sn.shadow.normalBias=.03;xe.add(sn,sn.target);Gx(xe);const zt=l_(xe,jr,Je);zt.grass.setLevel(ni);const Z_=N_(xe,zt,jr,Je,ds),En=z_(zt);window.__nav=En;const Le=Cf(xe,Ui?450:800),fr=Cf(xe,Ui?120:220,{blending:qi,size:1.6,opacity:.45,fadeTo:Gn.fog}),Qr=U_(xn,xe,He,Gn.grade);Qr.setLevel(ni);const ce=G_(Lf);function ta(){const i=innerWidth,t=innerHeight;xn.setSize(i,t,!1),He.aspect=i/t,He.updateProjectionMatrix(),Qr.setSize(i,t),Bx(Ui?2:2.2,xn.getPixelRatio(),i,t)}function Uf(i){ni=i;try{localStorage.setItem("glod-quality",i)}catch{}const t=sc[i];sn.shadow.mapSize.set(t.shadow,t.shadow),sn.shadow.map&&(sn.shadow.map.dispose(),sn.shadow.map=null),Wi=Math.min(devicePixelRatio||1,t.dprCap),xn.setPixelRatio(Wi),Qr.setLevel(i),zt.grass.setLevel(i),Df(i),ta(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",ta);ta();const Z={phase:"title",wave:0,timer:0,embers:Vt.startEmbers,lights:hr,spawnQueue:[],leaks:{},seen:{},time:0,sel:0,paused:!1},Qo=Vt.upgradeTime.length+1,Vi=["ring","chips","speaker","bubble","kite","pizza","lamp"];let Ti=Je.camYaw??0;const vu=new Fx,Tn=[],Un=[],jn=[],us=[],tr=[],Fr=[],Qe=Ic(f_(),"figure"),U={x:zt.lighthouse.pos.x+1,z:zt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:Vt.chillMax,inv:0,faint:0,faints:0};Qe.position.set(U.x,zt.heightAt(U.x,U.z),U.z);xe.add(Qe);const zc=new Xr("#ffcf70",2.6,6,1.8);zc.position.set(.8,.45,-.3);Qe.add(zc);const re=i=>document.getElementById(i),Ze={chill:re("hud-chill"),lights:re("hud-lights"),embers:re("hud-embers"),wave:re("hud-wave"),timer:re("hud-timer")},Pi=re("hint"),ci=re("build-panel"),Fc=re("btn-next"),Oc=re("fps");an.has("debug")||Oc.classList.add("hidden");let Li={};function Nn(i,t,e,n){Li[t]!==e&&(Li[t]=e,i.querySelector("b").textContent=e,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const K_=4;let Nf=0;function xu(i){if(Pi.textContent===i)return;Pi.textContent=i,Nf=0,Pi.classList.remove("faded");const t=ci.classList.contains("hidden")?null:ci.getBoundingClientRect();Pi.style.bottom=t&&t.height?`${Math.round(innerHeight-t.top+6)}px`:""}function J_(i){(Nf+=i)>K_&&Pi.classList.add("faded")}function zf(i){Z.phase="prep",Z.timer=i,Fc.classList.remove("hidden"),Q_()}function Q_(){const i=Z.wave+1,t=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);Z.spawnPoints=En.coastPoints(t,24),Z.spawnPoints.length||(Z.spawnPoints=En.coastPoints(t,8,{near:12,minFrac:.5})),Z.spawnPoints.length||(Z.spawnPoints=En.roadEnds().slice(0,t)),iM()}function Ff(){Z.wave+=1,Z.phase="wave",Fc.classList.add("hidden"),Z.spawnQueue=[];for(const i of Nc[Z.wave-1]){const t=Z.wave<=Vt.earlyScale.length?Z.wave-1:-1,e=Z.spawnPoints.length,n=oo[i.type].flying?Je.balance.air??1:1,s=Math.max(1,Math.round(i.n*(Je.balance.count||1)*n*(t>=0?Vt.earlyScale[t]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,e));for(let a=0;a<e;a++)for(let o=0;o<r;o++)Z.spawnQueue.push({t:(i.at??0)+o*i.gap+a*.3,type:i.type,path:a})}else{const r=i.path??0;for(let a=0;a<s;a++)Z.spawnQueue.push({t:(i.at??0)+a*i.gap,type:i.type,path:(r+a%2)%e})}}Z.spawnQueue.sort((i,t)=>i.t-t.t),Z.waveClock=0,Ge.wave(),Re==null||Re.setIntensity(1),Nn(Ze.wave,"wave",Z.wave,"bump")}function kc(i,t){var l,c;const e=oo[i],n=Ic(d_(i),"figure"),s=e.hp*(1+Vt.hpGrowth*(Z.wave-1))*Je.balance.hp*(((c=(l=Je.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*q_(),r={type:i,def:e,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:Je.balance.speed*(e.flying?Je.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4};r.var=.95+Math.random()*.1,r.speedMul*=.95+Math.random()*.1,n.scale.setScalar(r.var),r.blinkT=Math.random()*4;const a=Z.spawnPoints[t%Z.spawnPoints.length]||[0,50],o=zt.lighthouse.pos;if(e.flying){const u=Math.atan2(a[1]-o.z,a[0]-o.x)+(Math.random()-.5)*.5,h=o.x+Math.cos(u)*66,f=o.z+Math.sin(u)*66;r.x=h,r.z=f,r.y=e.alt||4,r.dist0=Math.hypot(o.x-h,o.z-f),r.hitCd=0}else r.x=a[0]+(Math.random()-.5)*1.5,r.z=a[1]+(Math.random()-.5)*1.5,r.y=zt.heightAt(r.x,r.z),r.remain=En.at(r.x,r.z);return n.position.set(r.x,r.y,r.z),xe.add(n),Tn.push(r),!Z.seen[i]&&i!=="lobbyMini"&&(Z.seen[i]=!0,tM(r)),r}const rc={ring:"💨",chips:"🥔",speaker:"🔊",bubble:"🫧",kite:"🪁",pizza:"🍕",lamp:"🌋"};function Of(i){const t=Object.entries(i.resist||{}),e=t.filter(([,s])=>s<1).map(([s])=>rc[s]).join(""),n=t.filter(([,s])=>s>1).map(([s])=>rc[s]).join("");return{tough:e+(i.shield?"📒":""),weak:n}}const er=[],lo=document.createElement("div");lo.id="tags";document.body.appendChild(lo);function tM(i){const{tough:t,weak:e}=Of(i.def),n=document.createElement("div");n.className="enemy-tag",n.innerHTML=`<b>${i.def.flying?"🪶":"🐾"} ${i.def.name}</b>${t?`<span>🛡️${t}</span>`:""}${e?`<span>💥${e}</span>`:""}`,lo.appendChild(n),er.push({m:i,el:n,t:0}),(Z.wave>1||i.def.flying)&&Ke(`Ny fiende: ${i.def.name}${t?` · tåler ${t}`:""}${e?` · svak mot ${e}`:""}`)}function eM(i){var t;for(let e=er.length-1;e>=0;e--){const n=er[e];n.age=(n.age||0)+i,Ae.set(n.m.x,n.m.y+(((t=n.m.mesh.userData.hpBar)==null?void 0:t.position.y)??2.2)+.5,n.m.z).project(He);const s=Ae.z<1&&Math.abs(Ae.x)<1&&Math.abs(Ae.y)<1;n.el.style.display=s?"flex":"none",s&&(n.t+=i),n.el.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,n.el.style.top=`${(-Ae.y*.5+.5)*innerHeight}px`,n.el.style.opacity=String(Math.min(1,(6-n.t)/.6)),(n.t>6||n.age>90||!n.m.alive)&&(n.el.remove(),er.splice(e,1))}}function nM(i){return i.def.flying?1-Math.hypot(zt.lighthouse.pos.x-i.x,zt.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??En.maxDist)/En.maxDist)}const qa=[],ps=document.createElement("div");ps.id="warn";document.body.appendChild(ps);function iM(){for(const e of qa)xe.remove(e);qa.length=0,ps.innerHTML="";for(const[e,n]of Z.spawnPoints){const s=new Zt(kf,new Ee({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));s.position.set(e,Math.max(zt.heightAt(e,n),.08)+.1,n);const r=new Zt(sM,new Ee({color:"#ff8a3a",transparent:!0,opacity:.35,blending:ei,depthWrite:!1,fog:!1}));r.position.y=4,s.add(r),xe.add(s),qa.push(s);const a=document.createElement("div");a.className="warn-arrow",a.innerHTML='<span class="arr">➤</span><span class="kind"></span>',ps.appendChild(a)}const i=Z.spawnPoints.length,t=Z.spawnPoints.map(()=>({air:!1,ground:!1}));for(const e of Nc[Z.wave]||[]){const n=e.path==="both"?t.map((s,r)=>r):[(e.path??0)%i,((e.path??0)+1)%i];for(const s of n)t[s][oo[e.type].flying?"air":"ground"]=!0}t.forEach((e,n)=>{var r;const s=(r=ps.children[n])==null?void 0:r.querySelector(".kind");s&&(s.textContent=(e.air?"🪶":"")+(e.ground?"🐾":""))})}const kf=new ws(1.6,2.2,32);kf.rotateX(-Math.PI/2);const sM=new Ne(.5,1.4,8,12,1,!0);function rM(){var a;const i=Z.phase==="prep"||Z.phase==="wave"&&Z.waveClock<8,t=ps.children,e=i&&!ci.classList.contains("hidden")?ci.getBoundingClientRect():null,n=e&&Pi.textContent&&!Pi.classList.contains("faded"),s=i?re("hud").getBoundingClientRect().bottom:0;ps.style.visibility=lo.style.visibility=Z.paused?"hidden":"";const r=e?n?Math.min(e.top,Pi.getBoundingClientRect().top):e.top:0;(a=Z.spawnPoints)==null||a.forEach(([o,l],c)=>{const u=qa[c],h=t[c];if(!u||!h)return;u.visible=i;const f=.5+.5*Math.sin(Z.time*6);u.scale.setScalar(1+f*.35),u.material.opacity=.35+.5*f,Ae.set(o,u.position.y,l).project(He);const d=Math.abs(Ae.x)>.92||Math.abs(Ae.y)>.88||Ae.z>1;if(h.style.display=i?"block":"none",h.classList.toggle("onscreen",!d),i&&!d&&(h.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,h.style.top=`${Math.max((-Ae.y*.5+.5)*innerHeight-30,s+30)}px`,h.style.transform="translate(-50%, -50%)",h.firstChild.style.transform=""),i&&d){let v=Ae.x,x=Ae.y;Ae.z>1&&(v=-v,x=-x);const m=Math.atan2(-x,v),p=Math.max(Math.abs(v),Math.abs(x))||1,y=Ye.clamp(v/p,-1,1),S=Ye.clamp(x/p,-1,1),g=(y*.46+.5)*innerWidth;let E=(-S*.44+.5)*innerHeight;e&&g>e.left-24&&g<e.right+24&&E>r-24&&(E=r-24),E=Math.max(E,s+30),h.style.left=`${g}px`,h.style.top=`${E}px`,h.style.transform=`translate(-50%, -50%) scale(${1+f*.25})`,h.firstChild.style.transform=`rotate(${m}rad)`}})}function fs(i,t,e){var n;if(i.alive){if(e&&(t*=((n=i.def.resist)==null?void 0:n[e.type])??1,i.def.shield&&e.type!=="lamp")){const s=e.x-i.x,r=e.z-i.z,a=Math.hypot(s,r)||1,o=Math.hypot(i.hx||0,i.hz||0)||1;(s*(i.hx||0)+r*(i.hz||0))/(a*o)>.35&&(t*=i.def.shield,Math.random()<.3&&Le.emit(i.x,i.y+1,i.z,{n:2,color:"#d8c890",speed:1.5,up:1,life:.3}))}i.hp-=t,i.hitT=.18,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&aM(i)}}function aM(i){i.alive=!1,i.chillT=0,p_(i),Fr.push(i),Le.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),Ge.chill(),Bc(i.x,i.y+.5,i.z,i.def.embers,i.def.flying),!i.def.flying&&Math.random()<Vt.bagChance&&Bf(i.x,i.z);for(let t=0;t<(i.def.splits||0);t++){const e=kc("lobbyMini",0);e.x=i.x+(t-1)*.6,e.z=i.z+(t%2?.5:-.5),e.y=zt.heightAt(e.x,e.z),e.mesh.position.set(e.x,e.y,e.z)}}function oM(i){var t;for(let e=Fr.length-1;e>=0;e--){const n=Fr[e];n.chillT+=i;const s=n.chillT,r=n.mesh.userData.body;if(n.def.flying)n.y+=i*2.5,n.z+=i*3,(t=n.mesh.userData.wings)==null||t.forEach((o,l)=>o.rotation.z=Math.sin(s*6)*.5*(l?-1:1));else if(s<1.4){const o=Math.min(1,s/.4);r.position.y=-.25*o*(n.type==="tank"?1.3:1),r.rotation.x=.25*o,r.rotation.z=Math.sin(s*3)*.05}else{r.rotation.x=0,r.position.y=Math.abs(Math.sin(s*7))*.06;const[o,l]=En.dir(n.x,n.z),c=n.x-o*n.def.speed*.45*i,u=n.z-l*n.def.speed*.45*i;zt.isWalkable(c,u)&&(n.x=c,n.z=u),n.y=zt.heightAt(n.x,n.z),(o||l)&&(n.mesh.rotation.y=Math.atan2(o,l))}Math.random()<i*1.5&&Le.emit(n.x,n.y+1.8,n.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4}),s>2.6&&!n.popped&&(n.popped=!0,fr.emit(n.x,n.y+.8,n.z,{n:8,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}));const a=Math.max(0,Math.min(1,(3.2-s)/.6));n.mesh.scale.setScalar(a*(n.var||1)*(s>2.6?1+Math.sin((s-2.6)*10)*.08:1)),n.mesh.position.set(n.x,n.y,n.z),s>3.2&&(xe.remove(n.mesh),Fr.splice(e,1))}}function Bc(i,t,e,n,s=!1,r=1){const a=Math.min(n,n>=6?3:n>=3?2:1);let o=n;for(let l=0;l<a;l++){const c=l===a-1?o:Math.ceil(n/a);o-=c;const u=g_(),h=Math.random()*Math.PI*2,f=(1.2+Math.random()*1.8)*r,d={mesh:u,x:i,y:t,z:e,vx:Math.cos(h)*f,vz:Math.sin(h)*f,vy:5+Math.random()*2,life:Vt.emberLife,value:c,settled:!1,phase:Math.random()*6};u.scale.setScalar(.8+Math.min(c,6)*.08),xe.add(u),us.push(d)}}function Zr(i,t,e,n,s=()=>!0){let r=null,a=n;for(const o of i){if(!s(o))continue;const l=Math.hypot(o.x-t,o.z-e);l<a&&(a=l,r=o)}return r}function Gc(){const i=Zr(zt.plinths,U.x,U.z,Vt.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const t=-Math.sin(U.face),e=-Math.cos(U.face),n=U.x+t*Vt.placeAhead,s=U.z+e*Vt.placeAhead,r=zt.heightAt(n,s),a=zt.lighthouse.pos;let o="";return r<.35?o="i vannet":zt.extras.blocks(n,s)?o="i lavaen":zt.pathDist(n,s)<1.9?o="på stien":zt.slopeAt(n,s)>.6?o="for bratt":Math.hypot(n-a.x,s-a.z)<5.5?o="for nær fyret":Un.some(l=>Math.hypot(l.x-n,l.z-s)<Vt.minTowerGap)?o="for nær et annet tårn":zt.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?o="oppå en sokkel (gå helt bort til den)":zt.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(o="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!o,why:o}}function ja(i){const t=Gc();if(!t.ok){Ge.deny(),Ke(`Ikke lov å bygge her: ${t.why}`);return}const e=Qs[i];if(Z.embers<e.cost){Ge.deny(),Ke(`Trenger ${e.cost} ✦ glør`),Nn(Ze.embers,"embersBad",Math.random(),"bad");return}Z.embers-=e.cost;const n=Ic(m_(i),"tower");if(n.position.set(t.x,t.y,t.z),!t.plinth){const r=new Zt(lM,cM);r.position.y=.04,r.receiveShadow=!0,n.add(r)}xe.add(n);const s={type:i,def:e,mesh:n,x:t.x,z:t.z,y:t.y,level:1,cd:.3,plinth:t.plinth,onPlinth:!!t.plinth};t.plinth&&(t.plinth.tower=s),Un.push(s),zt.colliders.push({x:t.x,z:t.z,r:1,tower:s}),Le.emit(t.x,t.y+.3,t.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),Ge.build(),Z.buildMode=!1,t.plinth&&Ke(`${e.name} på gammel sokkel: +25 % rekkevidde`)}const lM=new Ne(.95,1.05,.12,10),cM=new Ue({color:"#8a8478"}),Ai=new me;{const i=new Zt(new lr(1,24),new Ee({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const t=new ws(.965,1,64);t.rotateX(-Math.PI/2);const e=new Zt(t,new Ee({transparent:!0,opacity:.6,depthWrite:!1})),n=new Zt(new Ne(.55,.7,1.6,10),new Ee({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,Ai.add(i,e,n),Ai.userData={disc:i,ring:e,pillar:n},Ai.visible=!1,Ai.renderOrder=20,xe.add(Ai)}function hM(i,t,e){if(Ai.visible=i,!i)return;const n=t.ok,s=n?t.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=Qs[e].range*(t.plinth?Vt.plinthBonus:1);Ai.position.set(t.x,t.y+.06,t.z);const a=Ai.userData;for(const o of[a.disc,a.ring,a.pillar])o.material.color.set(s);a.ring.scale.setScalar(r),a.ring.visible=n,a.pillar.visible=!t.plinth}const wi=(i,t)=>{const e=i.level-1;return t==="range"?i.def.range*(1+.12*e)*(i.onPlinth?Vt.plinthBonus:1):t==="dmg"?i.def.dmg*[1,1.7,2.6,3.9,5.85][e]:t==="rate"?i.def.cooldown/(1+.15*e):i.def[t]};function uM(i){for(const t of Un){if(t.cd-=i,t.upg){const c=U.stun<=0&&Math.hypot(U.x-t.x,U.z-t.z)<Vt.reach+.3;c?t.upg.t+=i:t.upg.t>0&&(t.upg.t=0,co("😩"),Ke(`Rullingen ble avbrutt! Start på nytt ved ${t.def.name}`)),Yr(t,Math.min(1,t.upg.t/t.upg.dur)),c&&Math.random()<i*8&&Le.emit(U.x,Qe.position.y+2.2,U.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),t.upg.t>=t.upg.dur&&(t.upg=null,t.level+=1,yf(t,t.level),Yr(t,0),Le.emit(t.x,t.y+1.2,t.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Ge.upgrade(),Ke(`${t.def.name} er nå nivå ${t.level}`))}if(t.armBack>0&&(t.armBack-=i,t.armBack<=0&&(t.mesh.userData.arm.rotation.x=-.35)),t.type==="lamp"&&t.mesh.userData.blobs.forEach((c,u)=>c.position.y=.75+Math.sin(Z.time*.8+u*2.1)*.35),t.blind>0){t.blind-=i,Math.random()<i*8&&Le.emit(t.x,t.y+2,t.z,{n:1,color:"#fff6c8",speed:.6,up:.8,life:.5,gravity:-.4});continue}const e=wi(t,"range");let n=null,s=-1;for(const c of Tn){if(!c.alive||(c.def.flying?!t.def.air:t.def.ground===!1)||Math.hypot(c.x-t.x,c.z-t.z)>e)continue;const u=nM(c);u>s&&(s=u,n=c)}const r=t.mesh.userData.head;if(t.type==="speaker"){const c=Math.max(0,Math.sin(Z.time*7.3));r.rotation.z=Math.sin(Z.time*3.65)*.05,t.mesh.userData.woofers.forEach(u=>u.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=oc(Math.atan2(-(n.x-t.x),-(n.z-t.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-t.x),-(n.z-t.z));r.rotation.y+=oc(c,r.rotation.y)*Math.min(1,i*10)}if(!n||t.cd>0)continue;t.cd=wi(t,"rate");const a=t.x,o=t.y+1.4*t.mesh.scale.y,l=t.z;if(t.type==="ring"){const c=v_();c.position.set(a,o-.3,l),xe.add(c),jn.push({kind:"bolt",src:t,mesh:c,target:n,dmg:wi(t,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),Ge.puff()}else if(t.type==="chips"){const c=Sf();c.position.set(a,t.y+1,l),xe.add(c);const[u,h]=n.def.flying?[0,0]:En.dir(n.x,n.z),f=n.x+u*n.def.speed*.6,d=n.z+h*n.def.speed*.6;jn.push({kind:"shell",src:t,mesh:c,sx:a,sy:t.y+1,sz:l,ex:f,ez:d,ey:zt.heightAt(f,d),t:0,dur:.95,dmg:wi(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),Le.emit(a,t.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),Ge.mortar()}else if(t.type==="speaker"){for(const u of Tn)!u.alive||Math.hypot(u.x-t.x,u.z-t.z)>e||(u.def.noMood||(u.slow=t.def.slowTime),fs(u,wi(t,"dmg"),t));const c=bf();c.position.set(t.x,t.y+.3,t.z),xe.add(c),tr.push({mesh:c,t:0,r:e}),Le.emit(t.x,t.y+1.8,t.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),Ge.skank()}else if(t.type==="bubble"){const c=Ef();c.position.set(a,o+.2,l),xe.add(c),jn.push({kind:"bubble",src:t,mesh:c,target:n,dmg:wi(t,"dmg"),trap:t.def.trap,tx:n.x,ty:n.y,tz:n.z}),Ge.pickup()}else if(t.type==="kite"){if(jn.some(u=>u.kind==="kite"&&u.tower===t)){t.cd=.2;continue}const c=wf();c.position.set(a,o,l),xe.add(c),jn.push({kind:"kite",mesh:c,tower:t,sx:a,sz:l,tx:n.x,tz:n.z,phase:"out",t:0,tick:0,dmg:wi(t,"dmg"),zone:t.def.zone*(1+.1*(t.level-1)),hover:t.def.hover}),Ge.puff()}else if(t.type==="pizza"){const c=x_();c.position.set(a,t.y+1.2,l),xe.add(c);const[u,h]=En.dir(n.x,n.z),f=n.x+u*n.def.speed*1.1,d=n.z+h*n.def.speed*1.1;jn.push({kind:"shell",src:t,pizza:!0,mesh:c,sx:a,sy:t.y+1.2,sz:l,ex:f,ez:d,ey:zt.heightAt(f,d),t:0,dur:1.3,arc:7,dmg:wi(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),t.mesh.userData.arm.rotation.x=.9,t.armBack=.5,Ge.mortar()}else if(t.type==="lamp"){for(const c of Tn)!c.alive||Math.hypot(c.x-t.x,c.z-t.z)>e||(c.slow=Math.max(c.slow,t.def.slowTime),fs(c,wi(t,"dmg"),t));Math.random()<.3&&Le.emit(t.x,t.y+1.6,t.z,{n:2,color:"#ff9a3a",speed:.8,up:1.2,life:.8,gravity:-.3})}}}function fM(i){var t;for(let e=jn.length-1;e>=0;e--){const n=jn[e];let s=!1;if(n.kind==="bolt"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y+(n.target.def.flying?0:.5),n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),u=18*i;n.age+=i,n.mesh.lookAt(n.tx,n.ty,n.tz),n.mesh.scale.setScalar(.7+n.age*2.2),c<=u+.3?(s=!0,n.target.alive&&(fs(n.target,n.dmg,n.src),fr.emit(n.tx,n.ty+.3,n.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),Ge.hit())):r.set(r.x+a/c*u,r.y+o/c*u,r.z+l/c*u)}else if(n.kind==="shell"){n.t+=i/n.dur;const r=Math.min(1,n.t);if(n.mesh.position.set(n.sx+(n.ex-n.sx)*r,n.sy+(n.ey-n.sy)*r+Math.sin(Math.PI*r)*(n.arc||5),n.sz+(n.ez-n.sz)*r),n.mesh.rotation.set(r*9,r*5,0),n.t>=1){s=!0;for(const a of Tn){if(!a.alive||a.def.flying)continue;const o=Math.hypot(a.x-n.ex,a.z-n.ez);o<n.splash&&fs(a,n.dmg*(o<n.splash*.4?1:.6),n.src)}Le.emit(n.ex,n.ey+.3,n.ez,{n:26,color:n.pizza?"#ff7040":"#ffd060",speed:5,up:5,life:.7,gravity:12}),fr.emit(n.ex,n.ey+.3,n.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),Ge.crunch(),On=Math.max(On,.12)}}else if(n.kind==="bubble"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y,n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),u=13*i;n.mesh.scale.setScalar(1+Math.sin(Z.time*12)*.06),c<=u+.3?(s=!0,n.target.alive&&(fs(n.target,n.dmg,n.src),n.target.trap=Math.max(n.target.trap||0,n.trap*Math.min(1,((t=n.target.def.resist)==null?void 0:t.bubble)??1))),Le.emit(n.tx,n.ty,n.tz,{n:6,color:"#dff6ff",speed:2,up:1,life:.35})):r.set(r.x+a/c*u,r.y+o/c*u,r.z+l/c*u)}else if(n.kind==="kite"){n.t+=i;const r=n.mesh.position;if(Un.includes(n.tower)||(n.phase="back"),n.phase==="out"){const a=n.tx-r.x,o=n.tz-r.z,l=Math.hypot(a,o),c=9*i;r.y+=(4.2-r.y)*Math.min(1,i*2),l<c?(n.phase="hover",n.t=0):(r.x+=a/l*c,r.z+=o/l*c)}else if(n.phase==="hover"){if(r.x=n.tx+Math.sin(Z.time*1.7)*.6,r.z=n.tz+Math.cos(Z.time*1.3)*.4,r.y=4.2+Math.sin(Z.time*2.3)*.3,n.tick-=i,n.tick<=0){n.tick=.25;for(const a of Tn)a.alive&&a.def.flying&&Math.hypot(a.x-r.x,a.z-r.z)<n.zone&&(fs(a,n.dmg*.4,n.tower),a.slow=Math.max(a.slow,.4));Le.emit(r.x,r.y-.3,r.z,{n:2,color:"#ffd0b0",speed:1.5,up:-.5,life:.5,gravity:0})}n.t>n.hover&&(n.phase="back")}else{const a=n.sx-r.x,o=n.sz-r.z,l=Math.hypot(a,o),c=11*i;l<c?s=!0:(r.x+=a/l*c,r.z+=o/l*c)}n.mesh.rotation.set(Math.sin(Z.time*3)*.2,Z.time*.5,Math.cos(Z.time*2.5)*.25)}s&&(xe.remove(n.mesh),jn.splice(e,1))}for(let e=tr.length-1;e>=0;e--){const n=tr[e];n.t+=i/(n.dur||.6),n.mesh.scale.setScalar(.5+n.t*n.r),n.mesh.material.opacity=.7*(1-n.t),n.t>=1&&(xe.remove(n.mesh),n.mesh.material.dispose(),tr.splice(e,1))}}function dM(i){var t,e;for(const n of Tn){if(!n.alive)continue;n.phase+=i*n.def.anim;const s=n.slow>0?.5:1;n.slow-=i;let r=n.def.speed*s*(n.speedMul||1);n.trap>0?(n.trap-=i,r*=.15,n.bubbleFx||(n.bubbleFx=Ef(),n.bubbleFx.scale.setScalar(3.2),n.mesh.add(n.bubbleFx)),n.bubbleFx.visible=!0):n.bubbleFx&&(n.bubbleFx.visible=!1);const a=n.mesh.userData.body;if(n.def.flying){const l=zt.lighthouse.pos;let c=l.x-n.x,u=l.z-n.z;const h=Math.hypot(U.x-n.x,U.z-n.z);let f=n.trap>0?1.1:n.def.alt||4.2;if(n.def.swoop&&h<6&&U.stun<=0&&n.hitCd<=0&&!(n.trap>0)){const y=Math.hypot(c,u);c=c/y*.5+(U.x-n.x)/h*.9,u=u/y*.5+(U.z-n.z)/h*.9,f=1.5}n.hitCd-=i;const d=Math.hypot(c,u)||1,v=Math.cos(Z.time*1.3+n.lane*4)*(n.type==="balloon"?.4:1.2);n.x+=(c/d+-u/d*v*.35)*r*i,n.z+=(u/d+c/d*v*.35)*r*i,n.mesh.rotation.z=-v*(n.type==="balloon"?.05:.25);const x=Math.max(zt.heightAt(n.x,n.z),0);n.y+=(x+f-n.y)*Math.min(1,i*2.5);const m=n.mesh.userData.blob;m&&(m.position.y=(x-n.y)/n.var+.05,m.material.opacity=1,m.scale.setScalar(1)),n.mesh.rotation.y=Math.atan2(-c,-u);const p=n.mesh.userData;if((t=p.wings)==null||t.forEach((y,S)=>y.rotation.z=Math.sin(n.phase)*.7*(S?-1:1)),(e=p.rotors)==null||e.forEach(y=>y.rotation.y+=i*40),p.rotor&&(p.rotor.rotation.y+=i*30,p.tail.rotation.x+=i*30),a.position.y=Math.sin(n.phase*.5)*(n.type==="balloon"?.3:.15),n.def.blind&&(n.blindCd=(n.blindCd??n.def.blind.every*.5)-i,p.beam&&(p.beam.visible=n.blindCd>n.def.blind.every-.8),n.blindCd<=0)){n.blindCd=n.def.blind.every;const y=Zr(Un,n.x,n.z,n.def.blind.range);y&&(y.blind=n.def.blind.dur,Ke(`${n.def.name} blendet ${y.def.name}!`)),Math.hypot(U.x-n.x,U.z-n.z)<5&&ac(Vt.airStress,n.x,n.z,!0)}n.def.swoop&&h<1.3&&Math.abs(n.y-Qe.position.y-1)<1.4&&U.stun<=0&&n.hitCd<=0&&gM(n),Math.hypot(l.x-n.x,l.z-n.z)<3.4&&_u(n)}else{const[l,c,u]=En.dir(n.x,n.z);n.remain=u;const h=zt.lighthouse.pos,f=Math.hypot(h.x-n.x,h.z-n.z);if(f<4.3||u<.6){_u(n);continue}let d=l,v=c;!d&&!v&&(d=(h.x-n.x)/f,v=(h.z-n.z)/f),n.hx=(n.hx||0)+(d-(n.hx||0))*Math.min(1,i*6),n.hz=(n.hz||0)+(v-(n.hz||0))*Math.min(1,i*6);const x=Math.hypot(n.hx,n.hz)||1,m=n.lane*Math.min(1,f/10);if(n.x+=n.hx/x*r*i+-n.hz/x*m*i*.5,n.z+=n.hz/x*r*i+n.hx/x*m*i*.5,n.y=zt.heightAt(n.x,n.z),n.mesh.rotation.y=Math.atan2(-n.hx,-n.hz),U.inv<=0&&U.faint<=0&&Math.abs(U.x-n.x)<1.2&&Math.abs(U.z-n.z)<1.2&&Math.hypot(U.x-n.x,U.z-n.z)<1.1&&ac(n.def.stress??10,n.x,n.z),n.type==="clerk")a.position.y=Math.abs(Math.sin(n.phase))*.12,a.rotation.z=Math.sin(n.phase)*.06,n.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(n.phase*.5))*.25;else if(n.type==="tank"){const p=Math.abs(Math.sin(n.phase));a.position.y=p*.05,a.rotation.z=Math.sin(n.phase)*.07;const y=Math.pow(1-p,6);a.scale.set(1+y*.06,1-y*.08,1+y*.06)}else n.type==="swarm"?(a.position.y=Math.abs(Math.sin(n.phase))*.14,a.rotation.y=Math.sin(n.phase*.5)*.3):n.type==="complainer"?(a.position.y=Math.abs(Math.sin(n.phase))*.16,n.mesh.userData.arm.rotation.z=Math.sin(n.phase*.5)*.4):n.type==="lobbyist"||n.type==="lobbyMini"?(a.position.y=Math.abs(Math.sin(n.phase))*.05,a.rotation.z=Math.sin(n.phase*.5)*.17):n.type==="auditor"?(a.position.y=Math.abs(Math.sin(n.phase))*.03,a.rotation.z=0):(a.position.y=Math.abs(Math.sin(n.phase))*.08,a.rotation.z=Math.sin(n.phase)*.05)}if(n.hitT>0){n.hitT-=i;const l=Math.max(0,n.hitT)/.18;a.scale.set(1+l*.16,1-l*.16,1+l*.16),a.position.z=l*.15,n.hitT<=0&&(a.scale.set(1,1,1),a.position.z=0)}n.blinkT-=i,n.blinkT<-.12&&(n.blinkT=2+Math.random()*3.5);for(const l of n.mesh.userData.eyes)l.scale.y=n.blinkT<0?.12:1;n.mesh.position.set(n.x,n.y,n.z),n.slow>0&&Math.random()<i*6&&Le.emit(n.x,n.y+.8,n.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const o=n.mesh.userData.hpBar;if(o.visible){o.quaternion.copy(He.quaternion),o.quaternion.premultiply(n.mesh.quaternion.clone().invert());const l=Math.max(0,n.hp/n.maxHp),c=n.mesh.userData.hpFg;c.scale.x=.96*l,c.position.x=-.48*(1-l),c.material.color.setHSL(.33*(1-l),.7,.55)}}for(let n=Tn.length-1;n>=0;n--)Tn[n].alive||Tn.splice(n,1)}function _u(i){Z.leaks[i.type]=(Z.leaks[i.type]||0)+1,i.alive=!1,xe.remove(i.mesh),Z.lights=Math.max(0,Z.lights-1),zt.lighthouse.setLights(Z.lights),Nn(Ze.lights,"lights",Z.lights,"bad");const t=zt.lighthouse.flamePos();fr.emit(t.x,t.y,t.z,{n:10,color:"#b8b4b0",speed:.8,up:1.6,life:1.8,gravity:-.4}),Le.emit(t.x,t.y,t.z,{n:14,color:"#8a8580",speed:1.6,up:.6,life:1.6,gravity:4}),Ke(`${i.def.name} slukket litt glød!`),Ge.lose(),On=.3,Z.lights<=0&&Vf(!1)}const nr=[],Qn=document.createElement("div");Qn.id="chillbar";Qn.innerHTML="<i></i>";document.body.appendChild(Qn);let Mu=0;function co(i){const t=document.createElement("div");t.className="pop-emoji",t.textContent=i,Ae.set(U.x,Qe.position.y+2.6,U.z).project(He),t.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,t.style.top=`${(-Ae.y*.5+.5)*innerHeight}px`,document.body.appendChild(t),setTimeout(()=>t.remove(),900)}function ac(i,t,e,n=!1){if(!(U.faint>0||U.inv>0)){if(U.chill=Math.max(0,U.chill-i),U.inv=Vt.stressInvuln,U.flinch=.55,!n){const s=U.x-t,r=U.z-e,a=Math.hypot(s,r)||1;U.vx+=s/a*Vt.stressPush,U.vz+=r/a*Vt.stressPush,U.goal=null}Le.emit(U.x,Qe.position.y+1.4,U.z,{n:8,color:"#ff6a5a",speed:2,up:1.5,life:.4}),co("😓"),Qn.classList.remove("hit"),Qn.offsetWidth,Qn.classList.add("hit"),Nn(Ze.chill,"chillBad",Math.random(),"bad"),U.chill<=0&&pM()}}function pM(){U.faint=Vt.faintTime,U.stun=Vt.faintTime,U.faints++,U.goal=null,U.vx=U.vz=0;const i=Math.floor(Z.embers*Vt.faintLoss);i>0&&(Z.embers-=i,Bc(U.x,Qe.position.y+1,U.z,i,!1,1.6)),U.carrying&&(U.carrying=!1),co("😵"),Ke(`😵 Vokteren besvimte av stress! Våkner ved fyret om ${Vt.faintTime} s`),Ge.stun()}function Bf(i,t){const e=Sf();e.scale.setScalar(1.8),e.position.set(i,zt.heightAt(i,t)+.5,t),xe.add(e),nr.push({mesh:e,x:i,z:t,life:Vt.bagLife})}function mM(i){U.inv-=i;const t=zt.lighthouse.pos;U.faint>0?(U.faint-=i,U.faint<=0&&(U.x=t.x+1,U.z=t.z+7.5,U.vx=U.vz=0,U.stun=0,U.chill=Vt.chillMax*Vt.wakeChill,U.inv=Vt.stressInvuln*2,Le.emit(U.x,zt.heightAt(U.x,U.z)+1,U.z,{n:14,color:"#9fffb0",speed:2,up:2,life:.7}))):Math.hypot(t.x-U.x,t.z-U.z)<Vt.regenReach&&(U.chill=Math.min(Vt.chillMax,U.chill+Vt.regen*i));for(let s=nr.length-1;s>=0;s--){const r=nr[s];r.life-=i,r.mesh.rotation.y+=i*1.5,r.mesh.position.y=zt.heightAt(r.x,r.z)+.5+Math.sin(Z.time*3+s)*.12,r.mesh.visible=r.life>4||Math.sin(r.life*12)>0,U.faint<=0&&Math.hypot(r.x-U.x,r.z-U.z)<1.4&&(U.chill=Math.min(Vt.chillMax,U.chill+Vt.bagHeal),Ke(`🥔 Chips! +${Vt.bagHeal} chill`),co("😌"),Ge.pickup(),r.life=0),r.life<=0&&(xe.remove(r.mesh),nr.splice(s,1))}const e=Math.round(U.chill);Nn(Ze.chill,"chill",e),Ze.chill.classList.toggle("low",e<30),e!==Mu&&(Mu=e,Qn.firstChild.style.width=`${100*U.chill/Vt.chillMax}%`,Qn.classList.toggle("low",e<30));const n=(e<Vt.chillMax||U.faint>0)&&Z.phase!=="title";Qn.style.display=n?"block":"none",n&&(Ae.set(U.x,Qe.position.y+2.3,U.z).project(He),Qn.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,Qn.style.top=`${(-Ae.y*.5+.5)*innerHeight}px`)}function gM(i){if(ac(Vt.airStress,i.x,i.z,!0),U.faint>0)return;U.stun=Vt.stunTime,i.hitCd=4;const t=Math.floor(Z.embers*Vt.stunLoss);t>0&&(Z.embers-=t,Bc(U.x,Qe.position.y+1,U.z,t,!1,1.6)),U.carrying&&(U.carrying=!1,Ke("Rullepapiret blåste bort!")),Le.emit(U.x,Qe.position.y+1.5,U.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),Ge.stun(),On=.2}function vM(i){for(let t=us.length-1;t>=0;t--){const e=us[t];e.life-=i,e.phase+=i;const n=Math.max(zt.heightAt(e.x,e.z),.1)+.35;e.settled||(e.vy-=16*i,e.x+=e.vx*i,e.z+=e.vz*i,e.y+=e.vy*i,e.y<=n&&(e.y=n,Math.abs(e.vy)>2.5?(e.vy=-e.vy*.4,e.vx*=.6,e.vz*=.6):e.settled=!0));const s=Math.hypot(U.x-e.x,U.z-e.z);if(U.stun<=0&&s<Vt.magnet){const l=(1-s/Vt.magnet)*14+3;e.x+=(U.x-e.x)/s*l*i,e.z+=(U.z-e.z)/s*l*i,e.settled=!0,e.y=n}const r=e.settled?Math.sin(e.phase*3)*.12:0;e.mesh.position.set(e.x,e.y+r,e.z),e.mesh.rotation.y+=i*3;const a=e.life<5,o=(.8+Math.min(e.value,6)*.08)*(a?.55+.45*(e.life/5):1);if(e.mesh.scale.setScalar(o),e.mesh.visible=!a||Math.sin(e.life*(e.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Le.emit(e.x,e.y+.2,e.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),U.stun<=0&&s<.9)Z.embers+=e.value,Nn(Ze.embers,"embers",Z.embers,"bump"),Le.emit(e.x,e.y+.3,e.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Ge.pickup(),xe.remove(e.mesh),us.splice(t,1);else if(e.life<=0){const l=Math.max(1,Math.round(e.value*Vt.expiredRefund));Z.embers+=l,Le.emit(e.x,e.y,e.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),xe.remove(e.mesh),us.splice(t,1)}}}let Za=0,Gf="";function Ke(i){Za=2,Gf=i,Pi.textContent=""}function yu(i){var _,C;const t=Qe.userData;(Z.phase==="prep"||Z.phase==="wave")&&mM(i),U.stun-=i,t.stars.visible=U.stun>0,t.stars.rotation.y+=i*6;let e=0,n=0;if(U.stun<=0&&(Z.phase==="prep"||Z.phase==="wave")){if(ce.move.x||ce.move.z){U.goal=null;const D=Math.cos(Ti),B=Math.sin(Ti);e=ce.move.x*D+ce.move.z*B,n=-ce.move.x*B+ce.move.z*D}else if(U.goal){const D=U.goal,B=D.x-U.x,I=D.z-U.z;if(D.field===void 0){D.field=null;const W=Math.ceil(Math.hypot(B,I)/.5);for(let F=1;F<W;F++)if(!zt.isWalkable(U.x+B*F/W,U.z+I*F/W)){D.field=En.walkField(D.x,D.z);break}}const k=D.field?Math.min(D.field.at(U.x,U.z),Math.hypot(B,I)+50):Math.hypot(B,I);D.t+=i;const G=k<.35||D.spot&&Math.hypot(D.spot.x-U.x,D.spot.z-U.z)<D.reach;if(k<D.best-.3&&(D.best=k,D.lastGain=D.t),G||D.t>12||D.t-D.lastGain>1.5)U.goal=null;else{const W=Math.min(1,k/.8),F=D.field&&Math.hypot(B,I)>1.5?D.field.dir(U.x,U.z):null,K=F&&(F[0]||F[1])?F[0]:B/Math.hypot(B,I),at=F&&(F[0]||F[1])?F[1]:I/Math.hypot(B,I);e=K,n=at;for(const bt of zt.colliders){if(D.spot&&bt.x===D.spot.x&&bt.z===D.spot.z)continue;const Yt=bt.x-U.x,nt=bt.z-U.z,ut=Yt*K+nt*at;if(ut<=0||ut>bt.r+2.2||ut>k)continue;const wt=-Yt*at+nt*K;if(Math.abs(wt)>bt.r+.6)continue;const pt=(1-Math.abs(wt)/(bt.r+.6))*1.6*(wt>=0?1:-1);e-=-at*pt,n-=K*pt}const ct=Math.hypot(e,n)||1;e=e/ct*W,n=n/ct*W}}}const r=zt.heightAt(U.x,U.z)<.05,a=Vt.keeperSpeed*(U.carrying?Vt.carrySlow:1)*(r?Vt.wadeSlow:1),o=e*a,l=n*a,c=(_=zt.isIce)!=null&&_.call(zt,U.x,U.z)?1.6:12;U.vx+=(o-U.vx)*Math.min(1,i*c),U.vz+=(l-U.vz)*Math.min(1,i*c);let u=U.x+U.vx*i,h=U.z+U.vz*i;zt.isWalkable(u,h)||(zt.isWalkable(u,U.z)?h=U.z:zt.isWalkable(U.x,h)?u=U.x:(u=U.x,h=U.z));for(const D of zt.colliders){const B=u-D.x,I=h-D.z,k=Math.hypot(B,I),G=D.r+.4;k<G&&k>1e-4&&(u=D.x+B/k*G,h=D.z+I/k*G)}U.x=u,U.z=h;const f=Math.hypot(U.vx,U.vz);if(f>.3){const D=Math.atan2(-U.vx,-U.vz);U.face+=oc(D,U.face)*Math.min(1,i*12),U.walk+=i*f*2.2}if(Qe.rotation.y=U.face,Qe.position.set(U.x,Math.max(zt.heightAt(U.x,U.z),-.25),U.z),r&&f>1&&(U.splash=(U.splash||0)-i,U.splash<=0)){U.splash=.22,Le.emit(U.x,.15,U.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const D=bf();D.position.set(U.x,.1,U.z),D.material.color.set("#f4fdff"),xe.add(D),tr.push({mesh:D,t:0,r:1.6,dur:.9})}const d=Math.min(1,f/3),v=Math.sin(U.walk)*d;t.legs[0].position.z=v*.2,t.legs[1].position.z=-v*.2,t.legs[0].position.y=.2+Math.max(0,v)*.12,t.legs[1].position.y=.2+Math.max(0,-v)*.12;const x=f>.6;x!==!!U.wasMoving&&(U.sq=x?1:-1,U.wasMoving=x),U.sq=(U.sq||0)*Math.exp(-i*7);const m=f<.3?Math.sin(Z.time*2.2)*.025:0;t.body.scale.set(1-m*.5-U.sq*.07,1+m+U.sq*.12,1-m*.5-U.sq*.07);const p=Math.sign(Math.sin(U.walk));f>2&&!r&&p!==U.lastStep&&Le.emit(U.x,Qe.position.y+.1,U.z,{n:2,color:"#d9c9a4",speed:.7,up:.6,life:.45,gravity:1}),U.lastStep=p,U.flinch=Math.max(0,(U.flinch||0)-i),U.cheer=Math.max(0,(U.cheer||0)-i);const y=f>.5&&((C=zt.isIce)==null?void 0:C.call(zt,U.x,U.z)),S=Math.abs(v)*.09+(U.cheer>0?Math.abs(Math.sin(U.cheer*9))*.35:0);t.body.position.y=S,t.body.rotation.x=U.faint>0?0:-.35*Math.min(1,U.flinch*2.5),t.body.rotation.z=U.faint>0?1.45:U.stun>0?.5:v*.05+(y?Math.sin(Z.time*7)*.12:0)+(U.flinch>0?Math.sin(U.flinch*40)*.08:0);let g=v*.6,E=-v*.45,T=0,w=0;y&&(T=-1.25+Math.sin(Z.time*9)*.25,w=1.25+Math.cos(Z.time*8)*.25,g=E=0),U.cheer>0&&(g=E=-2.9,T=-.3,w=.3),U.flinch>0&&(g=-2.5,T=.5);const A=Math.min(1,i*14);t.armL.rotation.x+=(g-t.armL.rotation.x)*A,t.armL.rotation.z+=(T-t.armL.rotation.z)*A,t.lanternArm.rotation.x+=(E-t.lanternArm.rotation.x)*A,t.lanternArm.rotation.z+=(w-t.lanternArm.rotation.z)*A,U.idle=f<.3?(U.idle||0)+i:0;const M=U.idle>2?Math.sin(Z.time*.55)*.7*Math.min(1,(U.idle-2)/1.5):0;t.head.rotation.y+=(M-t.head.rotation.y)*Math.min(1,i*4),U.blink=(U.blink??2)-i,U.blink<-.12&&(U.blink=2+Math.random()*3);for(const D of t.eyes)D.scale.y=U.faint>0?.1:U.blink<0?.12:1;t.carried.visible=U.carrying,t.carried.rotation.y+=i*2,t.carried.position.y=2.35+Math.sin(Z.time*3)*.08,zc.intensity=2.6+Math.sin(Z.time*11)*.3}function xM(){for(const i of ce.clicks.splice(0)){vu.setFromCamera(i,He);const t=vu.intersectObject(zt.terrain)[0];if(!t)continue;let e=t.point.x,n=t.point.z;const s=zt.lighthouse.pos,r=Zr(zt.plinths,e,n,2.2)||(Math.hypot(s.x-e,s.z-n)<4.5?{x:s.x,z:s.z,big:!0}:null);if(r){const a=r.big?4.3:1.95;let o=U.x-r.x,l=U.z-r.z;const c=Math.hypot(o,l)||1;e=r.x+o/c*a,n=r.z+l/c*a}U.goal={x:e,z:n,t:0,best:1/0,lastGain:0,spot:r,reach:r?r.big?Vt.lighthouseReach-.4:Vt.reach-.25:0},Le.emit(e,zt.heightAt(e,n)+.2,n,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}}function ir(i=!Z.paused,t=!1){Z.paused=i;const e=ce.labels();re("pause-keys").textContent=`${e.name}: fortsett med ${e.pause} · start på nytt med ${e.restart}`,re("pause").classList.toggle("hidden",!i),re("confirm").classList.toggle("hidden",!t),Z.confirming=i&&t}try{sessionStorage.getItem("glod-portrait")&&document.documentElement.classList.add("portrait-ok")}catch{}re("btn-portrait").addEventListener("click",()=>{document.documentElement.classList.add("portrait-ok");try{sessionStorage.setItem("glod-portrait","1")}catch{}ta()});re("btn-resume").addEventListener("click",()=>ir(!1));re("btn-restart").addEventListener("click",()=>ir(!0,!0));re("btn-yes").addEventListener("click",()=>Or());re("btn-no").addEventListener("click",()=>ir(!0,!1));re("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${bn}`});re("btn-lex").addEventListener("click",()=>{const i=re("lex");i.innerHTML||(i.innerHTML=Object.entries(oo).filter(([t])=>t!=="lobbyMini").map(([t,e])=>{const{tough:n,weak:s}=Of(e);return`<div class="lex-row"><b>${e.flying?"🪶":"🐾"} ${e.name}</b><small>${e.info||(e.flying?"flyr rett mot fyret":"går langs veien")}</small><span>${n?`🛡️ ${n}`:""} ${s?`💥 ${s}`:""}</span></div>`}).join("")+`<p class="lex-key">🛡️ tåler · 💥 svak mot · ${Object.entries(rc).map(([t,e])=>`${e} ${Qs[t].name}`).join(" · ")} · 📒 skjold forfra</p>`),i.classList.toggle("hidden")});function Or(){for(const i of er)i.el.remove();er.length=0;for(const i of[Tn,Fr,us,jn,tr]){for(const t of i)t.mesh&&xe.remove(t.mesh);i.length=0}for(const i of Un)xe.remove(i.mesh);Un.length=0;for(const i of zt.plinths)i.tower=null;for(let i=zt.colliders.length-1;i>=0;i--)zt.colliders[i].tower&&zt.colliders.splice(i,1);Z.buildMode=!1,U.chargeTower&&Yr(U.chargeTower,0),Object.assign(Z,{phase:"title",wave:0,timer:0,embers:Vt.startEmbers,lights:hr,spawnQueue:[],leaks:{},seen:{},waveClock:0,sel:0,paused:!1,confirming:!1}),Object.assign(U,{x:zt.lighthouse.pos.x+1,z:zt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,charge:0,chargeTower:null,goal:null,chill:Vt.chillMax,inv:0,faint:0,faints:0});for(const i of nr)xe.remove(i.mesh);nr.length=0,zt.lighthouse.setLights(hr),wM(),On=0,Za=0,Li={},Nn(Ze.lights,"lights",Z.lights),Nn(Ze.embers,"embers",Z.embers),Nn(Ze.wave,"wave",0),Ze.timer.textContent="",re("pause").classList.add("hidden"),re("confirm").classList.add("hidden"),re("overlay").classList.add("hidden"),ce.clear(),Z.phase="title",ho(!0),window.__restarts=(window.__restarts||0)+1}function _M(){const i=ce.device;if(Li.device===i+ce.padKind)return;Li.device=i+ce.padKind;const t=ce.labels();re("touch").classList.toggle("hidden",i!=="touch"||Z.phase==="title"),ci.querySelectorAll("button i").forEach((e,n)=>{e.textContent=i==="pad"?n===Z.sel?t.build:"":i==="touch"?"":String(n+1)}),Fc.textContent="Neste bølge ▶",Li.sel=-1}function MM(i){if(ce.consume("fps")&&Oc.classList.toggle("hidden"),ce.consume("music")&&Wf(),_M(),Z.phase==="title"){["build","carry","next","pause"].some(f=>ce.consume(f))&&ho(),ce.clear();return}if(Nn(Ze.embers,"embers",Z.embers),!(Z.phase==="prep"||Z.phase==="wave")){if((Z.phase==="won"||Z.phase==="lost")&&ce.consume("restart")){Or();return}ce.clear(),ci.classList.add("hidden"),xu("");return}if(ce.consume("restart")){Z.confirming?Or():ir(!0,!0);return}if(ce.consume("pause")&&ir(!Z.paused),Z.confirming){if(ce.consume("build")||ce.consume("next")){Or();return}ce.consume("carry")&&ir(!0,!1)}if(Z.paused){ce.clear();return}xM(),ce.consume("next")&&Z.phase==="prep"&&(Z.timer=0),ce.consume("selPrev")&&(Z.sel=(Z.sel+Vi.length-1)%Vi.length),ce.consume("selNext")&&(Z.sel=(Z.sel+1)%Vi.length);const e=Zr(zt.plinths,U.x,U.z,Vt.reach,f=>!f.tower),n=Zr(Un,U.x,U.z,Vt.reach),s=zt.lighthouse.pos,r=Math.hypot(s.x-U.x,s.z-U.z)<Vt.lighthouseReach,a=U.stun>0,o=Gc();ce.consume("build")&&!a&&(Z.buildMode||e?ja(Vi[Z.sel]):Z.buildMode=!0),Vi.forEach((f,d)=>{ce.consume("b"+(d+1))&&!a&&(Z.sel=d,ja(f))});const l=(Z.buildMode||!!e)&&!a&&!U.carrying;hM(l,o,Vi[Z.sel]),ci.classList.toggle("hidden",!l),l&&(ci.querySelectorAll("button").forEach((f,d)=>{f.disabled=Z.embers<Qs[f.dataset.tower].cost,f.classList.toggle("sel",d===Z.sel)}),Li.sel!==Z.sel&&ce.device==="pad"&&(Li.sel=Z.sel,ci.querySelectorAll("button i").forEach((f,d)=>f.textContent=d===Z.sel?ce.labels().build:""))),ce.consume("carry")&&!a&&(!U.carrying&&r?Z.embers>=Vt.stoneCost?(Z.embers-=Vt.stoneCost,U.carrying=!0,Nn(Ze.embers,"embers",Z.embers,"bump"),Le.emit(U.x,Qe.position.y+2.3,U.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),Ge.stone()):(Ge.deny(),Ke(`Rullepapir koster ${Vt.stoneCost} ✦`)):U.carrying&&r?(U.carrying=!1,Z.embers+=Vt.stoneCost,Ge.stone(),Ke("Rullepapiret er lagt tilbake")):!U.carrying&&Z.buildMode?Z.buildMode=!1:U.carrying?n||Ke("Bær rullepapiret til et tårn"):Ke("Rullepapir hentes ved fyret"));const c=U.carrying&&!a&&n&&n.level<Qo&&!n.upg?n:null;c!==U.chargeTower&&(U.chargeTower&&Yr(U.chargeTower,0),U.chargeTower=c,U.charge=0),c&&(U.charge+=i/Vt.chargeTime,Yr(c,Math.min(1,U.charge)),Math.random()<i*20&&Le.emit(U.x,Qe.position.y+2.2,U.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),U.charge>=1&&(c.upg={t:0,dur:Vt.upgradeTime[c.level-1]},U.carrying=!1,U.chargeTower=null,U.charge=0,Le.emit(c.x,c.y+1.2,c.z,{n:12,color:"#8ff0ff",speed:2,up:2,life:.6}),Ge.stone(),Ke(`${c.def.name}: bli stående i ${c.upg.dur} s for å oppgradere`)));const u=ce.labels();Za-=i;let h="";if(Za>0)h=Gf;else if(a)h="Moralpanikk! Måka slo deg ut";else if(c)h="Leverer rullepapiret …";else if(n!=null&&n.upg)h=`Lader ${n.def.name} … ${Math.ceil(n.upg.dur-n.upg.t)} s igjen (bli stående)`;else if(U.carrying&&n&&n.level>=Qo)h="Tårnet er på maks nivå";else if(U.carrying)h="Bær rullepapiret til et tårn";else if(r&&!U.carrying)h=`${u.carry} = hent rullepapir (${Vt.stoneCost} ✦)`;else if(r&&U.carrying)h=`${u.carry} = legg rullepapiret tilbake`;else if(n&&n.level<Qo)h=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(l&&!o.ok)h=`Ikke lov her: ${o.why} · ${u.carry} = avbryt`;else if(l){const f=`${Qs[Vi[Z.sel]].name} (${Qs[Vi[Z.sel]].tip})`,d=o.plinth?" (sokkel: +25 % rekkevidde)":"";h=ce.device==="pad"?`${u.sel} = velg tårn · ${u.build} = sett ned ${f}${d}`:ce.device==="touch"?`Trykk på et tårn, eller Bygg = ${f}${d}`:`1 / 2 / 3 eller ${u.build} = sett ned ${f}${d}`}else Z.phase==="prep"&&Z.wave===0&&(h=`${u.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);xu(h),J_(i)}const ms=new me;{const i=document.createElement("canvas");i.width=64,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,256),t.globalCompositeOperation="destination-in";const n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,256);const s=new Ri(i);for(let r=0;r<6;r++){const a=new Zt(new Vn(1,1),new Ee({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:ei,depthWrite:!1,depthTest:!1,fog:!1}));a.scale.set(2.5+r%3*1.8,34,1),a.position.set(-22+r*8.5,9,-4+r%2*6),a.rotation.set(-.95,0,.55),a.userData.phase=r*1.3,ms.add(a)}}ms.visible=Je.id==="tak";ms.renderOrder=50;xe.add(ms);function yM(i){ms.position.set(Sn.x,0,Sn.z),ms.rotation.y=Ti,ms.children.forEach(t=>t.material.opacity=.03+.025*Math.sin(i*.35+t.userData.phase))}let On=0;const Ae=new O,tl=new O,Xs=new O,za=new O,el=new O,Sn=new O(U.x,0,U.z);function SM(i){Sn.x+=(U.x-Sn.x)*Math.min(1,i*4),Sn.z+=(U.z-Sn.z)*Math.min(1,i*4),Sn.y=Qe.position.y;const t=Ui?1.15:1,e=ce.zoom*t,n=He.aspect<1.2?1.25:1;Ti+=ce.look;const s=6.6*e*n;He.position.set(Sn.x+Math.sin(Ti)*s,Sn.y+12.5*e*n,Sn.z+Math.cos(Ti)*s),On=Math.max(0,On-i),On>0&&(He.position.x+=(Math.random()-.5)*On*2,He.position.y+=(Math.random()-.5)*On),He.lookAt(Sn.x-Math.sin(Ti),Sn.y+.5,Sn.z-Math.cos(Ti)),He.updateMatrixWorld();let r=0,a=0,o=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([p,y])=>{const S=Ae.set(p,y,.5).unproject(He),g=S.sub(He.position).normalize(),E=g.y<-.05?(Sn.y-He.position.y)/g.y:80;return[He.position.x+g.x*Math.min(E,80),He.position.z+g.z*Math.min(E,80)]});for(const[p,y]of l)r+=p/4,a+=y/4;for(const[p,y]of l)o=Math.max(o,Math.hypot(p-r,y-a));const c=Ye.clamp(Math.ceil((o+4)/4)*4,16,80);sn.shadow.camera.right!==c&&(Object.assign(sn.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),sn.shadow.camera.updateProjectionMatrix());const u=2*c/sn.shadow.mapSize.x;Xs.set(Gn.sunDir[0],Gn.sunDir[1],Gn.sunDir[2]).normalize(),za.set(0,1,0).cross(Xs).normalize(),el.copy(Xs).cross(za).normalize(),Ae.set(r,Sn.y,a);const h=Math.round(Ae.dot(za)/u)*u,f=Math.round(Ae.dot(el)/u)*u,d=Ae.dot(Xs);tl.copy(za).multiplyScalar(h).addScaledVector(el,f).addScaledVector(Xs,d),sn.target.position.copy(tl),sn.position.copy(tl).addScaledVector(Xs,40),sn.shadow.camera.far=40+c+20,yM(Z.time),rM(),Ae.set(U.x,Qe.position.y+.9,U.z);const v=-Ae.clone().applyMatrix4(He.matrixWorldInverse).z;Ae.project(He);const x=innerWidth*xn.getPixelRatio(),m=innerHeight*xn.getPixelRatio();cr.uKeep.value.set((Ae.x*.5+.5)*x,(Ae.y*.5+.5)*m,v),cr.uRad.value=m*.3,eM(Z.paused?0:i)}const nl=Je.eruption,il=zt.extras.bridges??[];let Pr=0,Xi=null;function bM(i){if(!(!nl||!il.length||Z.phase!=="wave")){if(Pr+=i,Xi&&Pr>=nl.closed)Xi.setClosed(!1),Xi=null,En.setBlock(()=>!1);else if(!Xi&&Pr>=nl.every){Pr=0;const t=il[Math.random()*il.length|0];t.setClosed(!0),Xi=t,En.setBlock((e,n)=>(e-t.x)**2+(n-t.z)**2<2.8*2.8),On=Math.max(On,.35),Ge.boom(),Ke("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function wM(){Xi&&(Xi.setClosed(!1),En.setBlock(()=>!1)),Xi=null,Pr=0}function EM(i){if(bM(i),Z.phase==="prep")Z.timer-=i,Ze.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,Z.timer))} s`,Z.timer<=0&&(Ze.timer.textContent="",Ff());else if(Z.phase==="wave"){for(Z.waveClock+=i;Z.spawnQueue.length&&Z.spawnQueue[0].t<=Z.waveClock;){const t=Z.spawnQueue.shift();kc(t.type,t.path)}if(Ze.timer.textContent=`${Tn.length+Z.spawnQueue.length} monstre igjen`,!Z.spawnQueue.length&&!Tn.length){if(Ze.timer.textContent="",Z.wave>=Nc.length){Vf(!0);return}const t=Vt.waveBonus+Z.wave*Vt.waveBonusPer+Math.floor(Math.min(Z.embers,300)*Vt.interest);Z.embers+=t,Nn(Ze.embers,"embers",Z.embers,"bump"),Ke(`Bølge ${Z.wave} slått! +${t} ✦`),U.cheer=1.4,zf(Vt.prepTime),Re==null||Re.setIntensity(0)}}}function Vf(i){Z.phase=i?"won":"lost",re("touch").classList.add("hidden"),re("btn-pause").classList.add("hidden"),ci.classList.add("hidden");let t="";if(Re==null||Re.setIntensity(0),i){Ge.win();const n=qr();i_(bn),qr()>n&&(t=`<p class="lead">🔓 Ny verden låst opp: <b>${vr[bn+1].name}</b>!</p>`)}const e=re("overlay");e.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${Z.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${t}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${t?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${Z.wave}. Rull opp ermene og prøv igjen.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,e.classList.remove("hidden"),re("btn-again").addEventListener("click",()=>Or()),re("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${bn}`}),t&&re("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${bn+1}`})}let Re=null;const Su=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})();function Hf(){try{localStorage.setItem("glod-music",JSON.stringify({vol:Re.volume,muted:Re.muted}))}catch{}}function TM(){const i=Rf();Re||!i||an.has("nomusic")||(Re=W_(i.ctx,i.noiseBuf,Je.id),Re.setVolume(Su.vol??.7),Re.setMuted(!!Su.muted),Re.start(),re("music-vol").value=Math.round(Re.volume*100),re("btn-mute").textContent=Re.muted?"M: av":"M: på",window.__music=Re,window.__audioCtx=i.ctx)}function Wf(){Re&&(Re.setMuted(!Re.muted),re("btn-mute").textContent=Re.muted?"M: av":"M: på",Hf(),Ke(Re.muted?"🎶 Musikk av":"🎶 Musikk på"))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const t=Rf();t&&t.ctx.state!=="running"&&t.ctx.resume()},{passive:!0});re("music-vol").addEventListener("input",i=>{Re&&(Re.setVolume(i.target.value/100),Hf())});re("btn-mute").addEventListener("click",i=>{i.preventDefault(),Wf()});function ho(i=!1){Z.phase==="title"&&(V_(),TM(),Re==null||Re.setIntensity(0),i&&re("touch").classList.toggle("hidden",ce.device!=="touch"),re("overlay").classList.add("hidden"),Ui&&(ce.device="touch"),Li.device=null,re("btn-pause").classList.remove("hidden"),zt.lighthouse.setLights(Z.lights),Nn(Ze.embers,"embers",Z.embers),zf(Vt.firstPrep),Pf&&AM())}re("btn-start").addEventListener("click",ho);{const i=re("worlds"),t=qr();if(vr.forEach((e,n)=>{const s=document.createElement("button");s.className="world"+(n===bn?" sel":"")+(n>=t?" locked":""),s.innerHTML=`<b>${n>=t?"🔒 ":""}${e.name}</b><small>${n>=t?"Vinn forrige verden for å låse opp":e.blurb}</small>`,s.disabled=n>=t,s.addEventListener("click",()=>{n!==bn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),re("btn-start").textContent=`Tenn gløden på ${Je.name}`,Je.skyDusk){const e=document.createElement("button");e.id="btn-tod",e.className="tod",e.textContent=ds==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",e.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",ds==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${bn}&tid=${ds==="skumring"?"dag":"skumring"}`}),re("worlds").after(e)}}re("btn-quality").addEventListener("click",()=>Uf(ni==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&Uf(ni==="high"?"low":"high")});re("btn-quality").textContent=ni==="high"?"Høy":"Lav";re("btn-pause").classList.add("hidden");function AM(){Z.embers=999;const i=zt.lighthouse.pos,t=zt.plinths.slice().sort((e,n)=>Math.hypot(e.x-i.x,e.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((e,n)=>{const s=t[n];U.x=s.x+1.9,U.z=s.z,ja(e),n<3&&(Un[Un.length-1].level=n+1,yf(Un[Un.length-1],n+1))}),U.x=i.x+1,U.z=i.z+6,U.carrying=!0,Z.wave=Number(an.get("demo"))||4,Z.wave-=1,Ff(),Z.waveClock=6,Z.embers=142}const CM=new ff;let sl=0,Fa=0,Oa=0;window.__fpsSamples=[];window.__game={S:Z,monsters:Tn,towers:Un,embers:us,world:zt,K:U,renderer:xn,camera:He,input:ce,buildSpot:()=>Gc(),build:i=>ja(i),renderOnce:()=>Qr.render(0),outlineCats:df,spawnMonster:kc,projectiles:jn,damage:fs,dropBag:(i,t)=>Bf(i,t),ghost:Ai,get camYaw(){return Ti}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function Xf(){requestAnimationFrame(Xf);const i=CM.getDelta(),t=Math.min(i,.05);Z.paused||(Z.time+=t),ce.update(t),Z.paused||(zt.update(Z.time),Z_.update(Z.time));for(let e=0;e<Y_&&!Z.paused&&(Z.phase==="prep"||Z.phase==="wave");e++)e>0&&(Z.time+=t,yu(t)),EM(t),dM(t),uM(t),fM(t),vM(t),oM(t);if(Z.paused||yu(t),MM(t),!Z.paused){if(Le.update(t),Math.random()<t*(4+10*(Z.lights/hr))){const e=zt.lighthouse.tip;fr.emit(e.x,e.y,e.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}fr.update(t)}if(SM(t),xn.info.reset(),Qr.render(t),sl++,Fa+=i,Fa>=.5){const e=sl/Fa;window.__fpsSamples.push(e),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),Oc.textContent=`${e.toFixed(0)} fps · ${xn.info.render.calls} dc`,Oa=e<(Ui?28:45)?Oa+1:0,Oa>=6&&Wi>1&&(Wi=Math.max(1,Wi-.25),xn.setPixelRatio(Wi),ta(),Oa=0,window.__dprDrops=(window.__dprDrops||0)+1,an.has("debug")&&console.info(`[fps] ${e.toFixed(0)} fps over tid → dpr senket til ${Wi}`)),sl=0,Fa=0}}Xf();Pf&&an.has("autostart")&&ho();function oc(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}
