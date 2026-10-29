(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dc="170",od=0,$c=1,ld=2,Du=1,Lu=2,Di=3,ts=0,Pn=1,Je=2,pn=0,Ji=1,fi=2,jc=3,Zc=4,Iu=5,ai=100,cd=101,hd=102,ud=103,fd=104,Lr=200,dd=201,pd=202,md=203,cl=204,hl=205,ul=206,gd=207,fl=208,vd=209,xd=210,_d=211,Md=212,yd=213,Sd=214,dl=0,pl=1,ml=2,cr=3,gl=4,vl=5,xl=6,_l=7,pc=0,bd=1,wd=2,Qi=0,Uu=1,Nu=2,zu=3,mc=4,Ed=5,Fu=6,Ou=7,ku=300,hr=301,ur=302,Ml=303,yl=304,no=306,_i=1e3,ds=1001,Sl=1002,vn=1003,Td=1004,aa=1005,vi=1006,_o=1007,ps=1008,Mi=1009,Bu=1010,Gu=1011,Wr=1012,gc=1013,ys=1014,hi=1015,jn=1016,vc=1017,xc=1018,Ss=1020,Vu=35902,Hu=1021,Wu=1022,$n=1023,Xu=1024,qu=1025,tr=1026,bs=1027,io=1028,_c=1029,Yu=1030,Mc=1031,yc=1033,Va=33776,Ha=33777,Wa=33778,Xa=33779,bl=35840,wl=35841,El=35842,Tl=35843,Al=36196,Cl=37492,Rl=37496,Pl=37808,Dl=37809,Ll=37810,Il=37811,Ul=37812,Nl=37813,zl=37814,Fl=37815,Ol=37816,kl=37817,Bl=37818,Gl=37819,Vl=37820,Hl=37821,qa=36492,Wl=36494,Xl=36495,$u=36283,ql=36284,Yl=36285,$l=36286,Ad=3200,Cd=3201,Sc=0,Rd=1,ji="",mn="srgb",xr="srgb-linear",so="linear",Oe="srgb",Is=7680,Kc=519,Pd=512,Dd=513,Ld=514,ju=515,Id=516,Ud=517,Nd=518,zd=519,Jc=35044,Qc=35048,th="300 es",Ni=2e3,Ka=2001;class _r{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eh=1234567;const zr=Math.PI/180,Xr=180/Math.PI;function As(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function un(i,t,e){return Math.max(t,Math.min(e,i))}function bc(i,t){return(i%t+t)%t}function Fd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Od(i,t,e){return i!==t?(e-i)/(t-i):0}function Fr(i,t,e){return(1-e)*i+e*t}function kd(i,t,e,n){return Fr(i,t,1-Math.exp(-e*n))}function Bd(i,t=1){return t-Math.abs(bc(i,t*2)-t)}function Gd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Vd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wd(i,t){return i+Math.random()*(t-i)}function Xd(i){return i*(.5-Math.random())}function qd(i){i!==void 0&&(eh=i);let t=eh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yd(i){return i*zr}function $d(i){return i*Xr}function jd(i){return(i&i-1)===0&&i!==0}function Zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ks(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function En(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xe={DEG2RAD:zr,RAD2DEG:Xr,generateUUID:As,clamp:un,euclideanModulo:bc,mapLinear:Fd,inverseLerp:Od,lerp:Fr,damp:kd,pingpong:Bd,smoothstep:Gd,smootherstep:Vd,randInt:Hd,randFloat:Wd,randFloatSpread:Xd,seededRandom:qd,degToRad:Yd,radToDeg:$d,isPowerOfTwo:jd,ceilPowerOfTwo:Zd,floorPowerOfTwo:Kd,setQuaternionFromProperEuler:Jd,normalize:En,denormalize:Ks};class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Me{constructor(t,e,n,s,r,a,o,l,c){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],v=n[8],x=s[0],m=s[3],d=s[6],y=s[1],S=s[4],g=s[7],A=s[2],E=s[5],w=s[8];return r[0]=a*x+o*y+l*A,r[3]=a*m+o*S+l*E,r[6]=a*d+o*g+l*w,r[1]=c*x+u*y+h*A,r[4]=c*m+u*S+h*E,r[7]=c*d+u*g+h*w,r[2]=f*x+p*y+v*A,r[5]=f*m+p*S+v*E,r[8]=f*d+p*g+v*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,v=e*h+n*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Mo.makeScale(t,e)),this}rotate(t){return this.premultiply(Mo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new Me;function Zu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qd(){const i=Ja("canvas");return i.style.display="block",i}const nh={};function Ir(i){i in nh||(nh[i]=!0,console.warn(i))}function tp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ep(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function np(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pe={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Oe&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Oe&&(i.r=er(i.r),i.g=er(i.g),i.b=er(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ji?so:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ih=[.64,.33,.3,.6,.15,.06],sh=[.2126,.7152,.0722],rh=[.3127,.329],ah=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oh=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Pe.define({[xr]:{primaries:ih,whitePoint:rh,transfer:so,toXYZ:ah,fromXYZ:oh,luminanceCoefficients:sh,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:ih,whitePoint:rh,transfer:Oe,toXYZ:ah,fromXYZ:oh,luminanceCoefficients:sh,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});let Us;class ip{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Us===void 0&&(Us=Ja("canvas")),Us.width=t.width,Us.height=t.height;const n=Us.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ja("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fi(e[n]/255)*255):e[n]=Fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sp=0;class Ku{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=As(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yo(s[a].image)):r.push(yo(s[a]))}else r=yo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ip.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rp=0;class bn extends _r{constructor(t=bn.DEFAULT_IMAGE,e=bn.DEFAULT_MAPPING,n=ds,s=ds,r=vi,a=ps,o=$n,l=Mi,c=bn.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=As(),this.name="",this.source=new Ku(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _i:t.x=t.x-Math.floor(t.x);break;case ds:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _i:t.y=t.y-Math.floor(t.y);break;case ds:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=ku;bn.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,e=0,n=0,s=1){Ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],v=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,g=(p+1)/2,A=(d+1)/2,E=(u+f)/4,w=(h+x)/4,C=(v+m)/4;return S>g&&S>A?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=w/n):g>A?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=E/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(h-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ap extends _r{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new bn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ku(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends ap{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ju extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class op extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],p=r[a+1],v=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=v,t[e+3]=x;return}if(h!==x||l!==f||c!==p||u!==v){let m=1-o;const d=l*f+c*p+u*v+h*x,y=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const A=Math.sqrt(S),E=Math.atan2(A,d*y);m=Math.sin(m*E)/A,o=Math.sin(o*E)/A}const g=o*y;if(l=l*m+f*g,c=c*m+p*g,u=u*m+v*g,h=h*m+x*g,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return t[e]=o*v+u*h+l*p-c*f,t[e+1]=l*v+u*f+c*h-o*p,t[e+2]=c*v+u*p+o*f-l*h,t[e+3]=u*v-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"YZX":this._x=f*u*h+c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h-f*p*v;break;case"XZY":this._x=f*u*h-c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return So.copy(this).projectOnVector(t),this.sub(So)}reflect(t){return this.sub(So.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new k,lh=new ea;class Cs{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ni):ni.fromBufferAttribute(r,a),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),la.subVectors(this.max,Er),Ns.subVectors(t.a,Er),zs.subVectors(t.b,Er),Fs.subVectors(t.c,Er),Gi.subVectors(zs,Ns),Vi.subVectors(Fs,zs),ns.subVectors(Ns,Fs);let e=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-ns.z,ns.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,ns.z,0,-ns.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-ns.y,ns.x,0];return!bo(e,Ns,zs,Fs,la)||(e=[1,0,0,0,1,0,0,0,1],!bo(e,Ns,zs,Fs,la))?!1:(ca.crossVectors(Gi,Vi),e=[ca.x,ca.y,ca.z],bo(e,Ns,zs,Fs,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wi=[new k,new k,new k,new k,new k,new k,new k,new k],ni=new k,oa=new Cs,Ns=new k,zs=new k,Fs=new k,Gi=new k,Vi=new k,ns=new k,Er=new k,la=new k,ca=new k,is=new k;function bo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){is.fromArray(i,r);const o=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),u=n.dot(is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const lp=new Cs,Tr=new k,wo=new k;class Mr{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);const e=Tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(wo)),this.expandByPoint(Tr.copy(t.center).sub(wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new k,Eo=new k,ha=new k,Hi=new k,To=new k,ua=new k,Ao=new k;class wc{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Eo.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(Eo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ha),o=Hi.dot(this.direction),l=-Hi.dot(ha),c=Hi.lengthSq(),u=Math.abs(1-a*a);let h,f,p,v;if(u>0)if(h=a*l-o,f=a*o-l,v=r*u,h>=0)if(f>=-v)if(f<=v){const x=1/u;h*=x,f*=x,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Eo).addScaledVector(ha,f),p}intersectSphere(t,e){Ei.subVectors(t.center,this.origin);const n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,n,s,r){To.subVectors(e,t),ua.subVectors(n,t),Ao.crossVectors(To,ua);let a=this.direction.dot(Ao),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,t);const l=o*this.direction.dot(ua.crossVectors(Hi,ua));if(l<0)return null;const c=o*this.direction.dot(To.cross(Hi));if(c<0||l+c>a)return null;const u=-o*Hi.dot(Ao);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(t,e,n,s,r,a,o,l,c,u,h,f,p,v,x,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,f,p,v,x,m)}set(t,e,n,s,r,a,o,l,c,u,h,f,p,v,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),a=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,p=a*h,v=o*u,x=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+v*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=v+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,v=c*u,x=c*h;e[0]=f+x*o,e[4]=v*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-v,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,v=c*u,x=c*h;e[0]=f-x*o,e[4]=-a*h,e[8]=v+p*o,e[1]=p+v*o,e[5]=a*u,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*h,v=o*u,x=o*h;e[0]=l*u,e[4]=v*c-p,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=p*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,v=o*l,x=o*c;e[0]=l*u,e[4]=x-f*h,e[8]=v*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+v,e[10]=f-x*h}else if(t.order==="XZY"){const f=a*l,p=a*c,v=o*l,x=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=a*u,e[9]=p*h-v,e[2]=v*h-p,e[6]=o*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cp,t,hp)}lookAt(t,e,n){const s=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Wi.crossVectors(n,zn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Wi.crossVectors(n,zn)),Wi.normalize(),fa.crossVectors(zn,Wi),s[0]=Wi.x,s[4]=fa.x,s[8]=zn.x,s[1]=Wi.y,s[5]=fa.y,s[9]=zn.y,s[2]=Wi.z,s[6]=fa.z,s[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],v=n[2],x=n[6],m=n[10],d=n[14],y=n[3],S=n[7],g=n[11],A=n[15],E=s[0],w=s[4],C=s[8],M=s[12],_=s[1],T=s[5],O=s[9],G=s[13],D=s[2],F=s[6],B=s[10],W=s[14],V=s[3],$=s[7],tt=s[11],rt=s[15];return r[0]=a*E+o*_+l*D+c*V,r[4]=a*w+o*T+l*F+c*$,r[8]=a*C+o*O+l*B+c*tt,r[12]=a*M+o*G+l*W+c*rt,r[1]=u*E+h*_+f*D+p*V,r[5]=u*w+h*T+f*F+p*$,r[9]=u*C+h*O+f*B+p*tt,r[13]=u*M+h*G+f*W+p*rt,r[2]=v*E+x*_+m*D+d*V,r[6]=v*w+x*T+m*F+d*$,r[10]=v*C+x*O+m*B+d*tt,r[14]=v*M+x*G+m*W+d*rt,r[3]=y*E+S*_+g*D+A*V,r[7]=y*w+S*T+g*F+A*$,r[11]=y*C+S*O+g*B+A*tt,r[15]=y*M+S*G+g*W+A*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],v=t[3],x=t[7],m=t[11],d=t[15];return v*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+x*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+e*c*h-e*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-s*o*u-e*l*h+e*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],v=t[12],x=t[13],m=t[14],d=t[15],y=h*m*c-x*f*c+x*l*p-o*m*p-h*l*d+o*f*d,S=v*f*c-u*m*c-v*l*p+a*m*p+u*l*d-a*f*d,g=u*x*c-v*h*c+v*o*p-a*x*p-u*o*d+a*h*d,A=v*h*l-u*x*l-v*o*f+a*x*f+u*o*m-a*h*m,E=e*y+n*S+s*g+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=y*w,t[1]=(x*f*r-h*m*r-x*s*p+n*m*p+h*s*d-n*f*d)*w,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*d+n*l*d)*w,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*w,t[4]=S*w,t[5]=(u*m*r-v*f*r+v*s*p-e*m*p-u*s*d+e*f*d)*w,t[6]=(v*l*r-a*m*r-v*s*c+e*m*c+a*s*d-e*l*d)*w,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*p+e*l*p)*w,t[8]=g*w,t[9]=(v*h*r-u*x*r-v*n*p+e*x*p+u*n*d-e*h*d)*w,t[10]=(a*x*r-v*o*r+v*n*c-e*x*c-a*n*d+e*o*d)*w,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*p-e*o*p)*w,t[12]=A*w,t[13]=(u*x*s-v*h*s+v*n*f-e*x*f-u*n*m+e*h*m)*w,t[14]=(v*o*s-a*x*s-v*n*l+e*x*l+a*n*m-e*o*m)*w,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,v=r*h,x=a*u,m=a*h,d=o*h,y=l*c,S=l*u,g=l*h,A=n.x,E=n.y,w=n.z;return s[0]=(1-(x+d))*A,s[1]=(p+g)*A,s[2]=(v-S)*A,s[3]=0,s[4]=(p-g)*E,s[5]=(1-(f+d))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(v+S)*w,s[9]=(m-y)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Os.set(s[0],s[1],s[2]).length();const a=Os.set(s[4],s[5],s[6]).length(),o=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ii.copy(this);const c=1/r,u=1/a,h=1/o;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=h,ii.elements[9]*=h,ii.elements[10]*=h,e.setFromRotationMatrix(ii),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ni){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let p,v;if(o===Ni)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ka)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ni){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),f=(e+t)*c,p=(n+s)*u;let v,x;if(o===Ni)v=(a+r)*h,x=-2*h;else if(o===Ka)v=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Os=new k,ii=new Le,cp=new k(0,0,0),hp=new k(1,1,1),Wi=new k,fa=new k,zn=new k,ch=new Le,hh=new ea;class yi{constructor(t=0,e=0,n=0,s=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ch,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hh.setFromEuler(this),this.setFromQuaternion(hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Ec{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let up=0;const uh=new k,ks=new ea,Ti=new Le,da=new k,Ar=new k,fp=new k,dp=new ea,fh=new k(1,0,0),dh=new k(0,1,0),ph=new k(0,0,1),mh={type:"added"},pp={type:"removed"},Bs={type:"childadded",child:null},Co={type:"childremoved",child:null};class He extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new k,e=new yi,n=new ea,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Me}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(fh,t)}rotateY(t){return this.rotateOnAxis(dh,t)}rotateZ(t){return this.rotateOnAxis(ph,t)}translateOnAxis(t,e){return uh.copy(t).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fh,t)}translateY(t){return this.translateOnAxis(dh,t)}translateZ(t){return this.translateOnAxis(ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?da.copy(t):da.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Ar,da,this.up):Ti.lookAt(da,Ar,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Ti),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pp),Co.child=t,this.dispatchEvent(Co),Co.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,dp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}He.DEFAULT_UP=new k(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new k,Ai=new k,Ro=new k,Ci=new k,Gs=new k,Vs=new k,gh=new k,Po=new k,Do=new k,Lo=new k,Io=new Ge,Uo=new Ge,No=new Ge;class oi{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),si.subVectors(t,e),s.cross(si);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){si.subVectors(s,e),Ai.subVectors(n,e),Ro.subVectors(t,e);const a=si.dot(si),o=si.dot(Ai),l=si.dot(Ro),c=Ai.dot(Ai),u=Ai.dot(Ro),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,v=(a*u-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Io.setScalar(0),Uo.setScalar(0),No.setScalar(0),Io.fromBufferAttribute(t,e),Uo.fromBufferAttribute(t,n),No.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Io,r.x),a.addScaledVector(Uo,r.y),a.addScaledVector(No,r.z),a}static isFrontFacing(t,e,n,s){return si.subVectors(n,e),Ai.subVectors(t,e),si.cross(Ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),si.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return oi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return oi.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Gs.subVectors(s,n),Vs.subVectors(r,n),Po.subVectors(t,n);const l=Gs.dot(Po),c=Vs.dot(Po);if(l<=0&&c<=0)return e.copy(n);Do.subVectors(t,s);const u=Gs.dot(Do),h=Vs.dot(Do);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Gs,a);Lo.subVectors(t,r);const p=Gs.dot(Lo),v=Vs.dot(Lo);if(v>=0&&p<=v)return e.copy(r);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Vs,o);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return gh.subVectors(r,s),o=(h-u)/(h-u+(p-v)),e.copy(s).addScaledVector(gh,o);const d=1/(m+x+f);return a=x*d,o=f*d,e.copy(n).addScaledVector(Gs,a).addScaledVector(Vs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function zo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class At{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Pe.workingColorSpace){if(t=bc(t,1),e=un(e,0,1),n=un(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=zo(a,r,t+1/3),this.g=zo(a,r,t),this.b=zo(a,r,t-1/3)}return Pe.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=Qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return Pe.fromWorkingColorSpace(Sn.copy(this),t),Math.round(un(Sn.r*255,0,255))*65536+Math.round(un(Sn.g*255,0,255))*256+Math.round(un(Sn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.fromWorkingColorSpace(Sn.copy(this),e);const n=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Pe.workingColorSpace){return Pe.fromWorkingColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=mn){Pe.fromWorkingColorSpace(Sn.copy(this),t);const e=Sn.r,n=Sn.g,s=Sn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(pa);const n=Fr(Xi.h,pa.h,e),s=Fr(Xi.s,pa.s,e),r=Fr(Xi.l,pa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new At;At.NAMES=Qu;let mp=0;class Rs extends _r{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=As(),this.name="",this.blending=Ji,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=hl,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==ts&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cl&&(n.blendSrc=this.blendSrc),this.blendDst!==hl&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class De extends Rs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tn=new k,ma=new bt;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ma.fromBufferAttribute(this,e),ma.applyMatrix3(t),this.setXY(e,ma.x,ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array),r=En(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jc&&(t.usage=this.usage),t}}class tf extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ef extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gp=0;const qn=new Le,Fo=new He,Hs=new k,Fn=new Cs,Cr=new Cs,cn=new k;class ze extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zu(t)?ef:tf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return Fo.lookAt(t),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Fn.min,Cr.min),Fn.expandByPoint(cn),cn.addVectors(Fn.max,Cr.max),Fn.expandByPoint(cn)):(Fn.expandByPoint(Cr.min),Fn.expandByPoint(Cr.max))}Fn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)cn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(cn));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)cn.fromBufferAttribute(o,c),l&&(Hs.fromBufferAttribute(t,c),cn.add(Hs)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new k,l[C]=new k;const c=new k,u=new k,h=new k,f=new bt,p=new bt,v=new bt,x=new k,m=new k;function d(C,M,_){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,_),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,_),u.sub(c),h.sub(c),p.sub(f),v.sub(f);const T=1/(p.x*v.y-v.x*p.y);isFinite(T)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(T),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(T),o[C].add(x),o[M].add(x),o[_].add(x),l[C].add(m),l[M].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,M=y.length;C<M;++C){const _=y[C],T=_.start,O=_.count;for(let G=T,D=T+O;G<D;G+=3)d(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const S=new k,g=new k,A=new k,E=new k;function w(C){A.fromBufferAttribute(s,C),E.copy(A);const M=o[C];S.copy(M),S.sub(A.multiplyScalar(A.dot(M))).normalize(),g.crossVectors(E,M);const T=g.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,T)}for(let C=0,M=y.length;C<M;++C){const _=y[C],T=_.start,O=_.count;for(let G=T,D=T+O;G<D;G+=3)w(t.getX(G+0)),w(t.getX(G+1)),w(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)f[v++]=c[p++]}return new Ve(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vh=new Le,ss=new wc,ga=new Mr,xh=new k,va=new k,xa=new k,_a=new k,Oo=new k,Ma=new k,_h=new k,ya=new k;class oe extends He{constructor(t=new ze,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Oo.fromBufferAttribute(h,t),a?Ma.addScaledVector(Oo,u):Ma.addScaledVector(Oo.sub(e),u))}e.add(Ma)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(ga.containsPoint(ss.origin)===!1&&(ss.intersectSphere(ga,xh)===null||ss.origin.distanceToSquared(xh)>(t.far-t.near)**2))&&(vh.copy(r).invert(),ss.copy(t.ray).applyMatrix4(vh),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],d=a[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let g=y,A=S;g<A;g+=3){const E=o.getX(g),w=o.getX(g+1),C=o.getX(g+2);s=Sa(this,d,t,n,c,u,h,E,w,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const y=o.getX(m),S=o.getX(m+1),g=o.getX(m+2);s=Sa(this,a,t,n,c,u,h,y,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],d=a[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=y,A=S;g<A;g+=3){const E=g,w=g+1,C=g+2;s=Sa(this,d,t,n,c,u,h,E,w,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const y=m,S=m+1,g=m+2;s=Sa(this,a,t,n,c,u,h,y,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function vp(i,t,e,n,s,r,a,o){let l;if(t.side===Pn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ts,o),l===null)return null;ya.copy(o),ya.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ya);return c<e.near||c>e.far?null:{distance:c,point:ya.clone(),object:i}}function Sa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,va),i.getVertexPosition(l,xa),i.getVertexPosition(c,_a);const u=vp(i,t,e,n,va,xa,_a,_h);if(u){const h=new k;oi.getBarycoord(_h,va,xa,_a,h),s&&(u.uv=oi.getInterpolatedAttribute(s,o,l,c,h,new bt)),r&&(u.uv1=oi.getInterpolatedAttribute(r,o,l,c,h,new bt)),a&&(u.normal=oi.getInterpolatedAttribute(a,o,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new k,materialIndex:0};oi.getNormal(va,xa,_a,f.normal),u.face=f,u.barycoord=h}return u}class Cn extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(h,2));function v(x,m,d,y,S,g,A,E,w,C,M){const _=g/w,T=A/C,O=g/2,G=A/2,D=E/2,F=w+1,B=C+1;let W=0,V=0;const $=new k;for(let tt=0;tt<B;tt++){const rt=tt*T-G;for(let Ct=0;Ct<F;Ct++){const Bt=Ct*_-O;$[x]=Bt*y,$[m]=rt*S,$[d]=D,c.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[d]=E>0?1:-1,u.push($.x,$.y,$.z),h.push(Ct/w),h.push(1-tt/C),W+=1}}for(let tt=0;tt<C;tt++)for(let rt=0;rt<w;rt++){const Ct=f+rt+F*tt,Bt=f+rt+F*(tt+1),nt=f+(rt+1)+F*(tt+1),ut=f+(rt+1)+F*tt;l.push(Ct,Bt,ut),l.push(Bt,nt,ut),V+=6}o.addGroup(p,V,M),p+=V,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Tn(i){const t={};for(let e=0;e<i.length;e++){const n=fr(i[e]);for(const s in n)t[s]=n[s]}return t}function xp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const li={clone:fr,merge:Tn};var _p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends Rs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=Mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=xp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sf extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new k,Mh=new bt,yh=new bt;class kn extends sf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,Mh,yh),e.subVectors(yh,Mh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ws=-90,Xs=1;class yp extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kn(Ws,Xs,t,e);s.layers=this.layers,this.add(s);const r=new kn(Ws,Xs,t,e);r.layers=this.layers,this.add(r);const a=new kn(Ws,Xs,t,e);a.layers=this.layers,this.add(a);const o=new kn(Ws,Xs,t,e);o.layers=this.layers,this.add(o);const l=new kn(Ws,Xs,t,e);l.layers=this.layers,this.add(l);const c=new kn(Ws,Xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class rf extends bn{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:hr,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sp extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cn(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:pn});r.uniforms.tEquirect.value=e;const a=new oe(s,r),o=e.minFilter;return e.minFilter===ps&&(e.minFilter=vi),new yp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ko=new k,bp=new k,wp=new Me;class hs{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ko.subVectors(n,e).cross(bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ko),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wp.getNormalMatrix(t),s=this.coplanarPoint(ko).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Mr,ba=new k;class Tc{constructor(t=new hs,e=new hs,n=new hs,s=new hs,r=new hs,a=new hs){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ni){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],v=s[9],x=s[10],m=s[11],d=s[12],y=s[13],S=s[14],g=s[15];if(n[0].setComponents(l-r,f-c,m-p,g-d).normalize(),n[1].setComponents(l+r,f+c,m+p,g+d).normalize(),n[2].setComponents(l+a,f+u,m+v,g+y).normalize(),n[3].setComponents(l-a,f-u,m-v,g-y).normalize(),n[4].setComponents(l-o,f-h,m-x,g-S).normalize(),e===Ni)n[5].setComponents(l+o,f+h,m+x,g+S).normalize();else if(e===Ka)n[5].setComponents(o,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ba.x=s.normal.x>0?t.max.x:t.min.x,ba.y=s.normal.y>0?t.max.y:t.min.y,ba.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ba)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function af(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ep(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){const v=h[f],x=h[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){const x=h[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Zn extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,p=[],v=[],x=[],m=[];for(let d=0;d<u;d++){const y=d*f-a;for(let S=0;S<c;S++){const g=S*h-r;v.push(g,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const S=y+c*d,g=y+c*(d+1),A=y+1+c*(d+1),E=y+1+c*d;p.push(S,g,E),p.push(g,A,E)}this.setIndex(p),this.setAttribute("position",new pe(v,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
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
#endif`,Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
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
#endif`,Ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
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
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Bp=`#ifdef USE_BUMPMAP
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jp=`#define PI 3.141592653589793
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
} // validated`,Zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n0="gl_FragColor = linearToOutputTexel( gl_FragColor );",i0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d0=`#ifdef USE_GRADIENTMAP
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
}`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v0=`uniform bool receiveShadow;
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
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,_0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b0=`PhysicalMaterial material;
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
#endif`,w0=`struct PhysicalMaterial {
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
}`,E0=`
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N0=`#if defined( USE_POINTS_UV )
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
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`#ifdef USE_MORPHTARGETS
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
#endif`,V0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
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
#endif`,j0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hm=`float getShadowMask() {
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
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`#include <common>
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
}`,Lm=`#if DEPTH_PACKING == 3200
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
}`,Im=`#define DISTANCE
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
}`,Um=`#define DISTANCE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
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
}`,Om=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Bm=`uniform vec3 diffuse;
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
}`,Gm=`#define LAMBERT
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
}`,Vm=`#define LAMBERT
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
}`,Hm=`#define MATCAP
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define NORMAL
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
}`,qm=`#define NORMAL
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
}`,Ym=`#define PHONG
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
}`,$m=`#define PHONG
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
}`,jm=`#define STANDARD
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
}`,Zm=`#define STANDARD
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
}`,Km=`#define TOON
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
}`,Jm=`#define TOON
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
}`,Qm=`uniform float size;
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
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
}`,sg=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:Tp,alphahash_pars_fragment:Ap,alphamap_fragment:Cp,alphamap_pars_fragment:Rp,alphatest_fragment:Pp,alphatest_pars_fragment:Dp,aomap_fragment:Lp,aomap_pars_fragment:Ip,batching_pars_vertex:Up,batching_vertex:Np,begin_vertex:zp,beginnormal_vertex:Fp,bsdfs:Op,iridescence_fragment:kp,bumpmap_pars_fragment:Bp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:$p,common:jp,cube_uv_reflection_fragment:Zp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:Jp,displacementmap_vertex:Qp,emissivemap_fragment:t0,emissivemap_pars_fragment:e0,colorspace_fragment:n0,colorspace_pars_fragment:i0,envmap_fragment:s0,envmap_common_pars_fragment:r0,envmap_pars_fragment:a0,envmap_pars_vertex:o0,envmap_physical_pars_fragment:x0,envmap_vertex:l0,fog_vertex:c0,fog_pars_vertex:h0,fog_fragment:u0,fog_pars_fragment:f0,gradientmap_pars_fragment:d0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:v0,lights_toon_fragment:_0,lights_toon_pars_fragment:M0,lights_phong_fragment:y0,lights_phong_pars_fragment:S0,lights_physical_fragment:b0,lights_physical_pars_fragment:w0,lights_fragment_begin:E0,lights_fragment_maps:T0,lights_fragment_end:A0,logdepthbuf_fragment:C0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:D0,map_fragment:L0,map_pars_fragment:I0,map_particle_fragment:U0,map_particle_pars_fragment:N0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:F0,morphinstance_vertex:O0,morphcolor_vertex:k0,morphnormal_vertex:B0,morphtarget_pars_vertex:G0,morphtarget_vertex:V0,normal_fragment_begin:H0,normal_fragment_maps:W0,normal_pars_fragment:X0,normal_pars_vertex:q0,normal_vertex:Y0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:j0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:K0,iridescence_pars_fragment:J0,opaque_fragment:Q0,packing:tm,premultiplied_alpha_fragment:em,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:om,shadowmap_pars_vertex:lm,shadowmap_vertex:cm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:fm,skinning_vertex:dm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:vm,tonemapping_pars_fragment:xm,transmission_fragment:_m,transmission_pars_fragment:Mm,uv_pars_fragment:ym,uv_pars_vertex:Sm,uv_vertex:bm,worldpos_vertex:wm,background_vert:Em,background_frag:Tm,backgroundCube_vert:Am,backgroundCube_frag:Cm,cube_vert:Rm,cube_frag:Pm,depth_vert:Dm,depth_frag:Lm,distanceRGBA_vert:Im,distanceRGBA_frag:Um,equirect_vert:Nm,equirect_frag:zm,linedashed_vert:Fm,linedashed_frag:Om,meshbasic_vert:km,meshbasic_frag:Bm,meshlambert_vert:Gm,meshlambert_frag:Vm,meshmatcap_vert:Hm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:qm,meshphong_vert:Ym,meshphong_frag:$m,meshphysical_vert:jm,meshphysical_frag:Zm,meshtoon_vert:Km,meshtoon_frag:Jm,points_vert:Qm,points_frag:tg,shadow_vert:eg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},Gt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},gi={basic:{uniforms:Tn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:Tn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new At(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:Tn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:Tn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:Tn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new At(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:Tn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:Tn([Gt.points,Gt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:Tn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:Tn([Gt.common,Gt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:Tn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:Tn([Gt.sprite,Gt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:Tn([Gt.common,Gt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:Tn([Gt.lights,Gt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};gi.physical={uniforms:Tn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const wa={r:0,b:0,g:0},as=new yi,rg=new Le;function ag(i,t,e,n,s,r,a){const o=new At(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function v(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function x(y){let S=!1;const g=v(y);g===null?d(o,l):g&&g.isColor&&(d(g,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const g=v(S);g&&(g.isCubeTexture||g.mapping===no)?(u===void 0&&(u=new oe(new Cn(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:fr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),as.copy(S.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(as)),u.material.toneMapped=Pe.getTransfer(g.colorSpace)!==Oe,(h!==g||f!==g.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,f=g.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new oe(new Zn(2,2),new je({name:"BackgroundMaterial",uniforms:fr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Pe.getTransfer(g.colorSpace)!==Oe,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=g,f=g.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,S){y.getRGB(wa,nf(i)),n.buffers.color.setClear(wa.r,wa.g,wa.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:x,addToRenderList:m}}function og(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,T,O,G,D){let F=!1;const B=h(G,O,T);r!==B&&(r=B,c(r.object)),F=p(_,G,O,D),F&&v(_,G,O,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,g(_,T,O,G),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,T,O){const G=O.wireframe===!0;let D=n[_.id];D===void 0&&(D={},n[_.id]=D);let F=D[T.id];F===void 0&&(F={},D[T.id]=F);let B=F[G];return B===void 0&&(B=f(l()),F[G]=B),B}function f(_){const T=[],O=[],G=[];for(let D=0;D<e;D++)T[D]=0,O[D]=0,G[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:G,object:_,attributes:{},index:null}}function p(_,T,O,G){const D=r.attributes,F=T.attributes;let B=0;const W=O.getAttributes();for(const V in W)if(W[V].location>=0){const tt=D[V];let rt=F[V];if(rt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor)),tt===void 0||tt.attribute!==rt||rt&&tt.data!==rt.data)return!0;B++}return r.attributesNum!==B||r.index!==G}function v(_,T,O,G){const D={},F=T.attributes;let B=0;const W=O.getAttributes();for(const V in W)if(W[V].location>=0){let tt=F[V];tt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(tt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(tt=_.instanceColor));const rt={};rt.attribute=tt,tt&&tt.data&&(rt.data=tt.data),D[V]=rt,B++}r.attributes=D,r.attributesNum=B,r.index=G}function x(){const _=r.newAttributes;for(let T=0,O=_.length;T<O;T++)_[T]=0}function m(_){d(_,0)}function d(_,T){const O=r.newAttributes,G=r.enabledAttributes,D=r.attributeDivisors;O[_]=1,G[_]===0&&(i.enableVertexAttribArray(_),G[_]=1),D[_]!==T&&(i.vertexAttribDivisor(_,T),D[_]=T)}function y(){const _=r.newAttributes,T=r.enabledAttributes;for(let O=0,G=T.length;O<G;O++)T[O]!==_[O]&&(i.disableVertexAttribArray(O),T[O]=0)}function S(_,T,O,G,D,F,B){B===!0?i.vertexAttribIPointer(_,T,O,D,F):i.vertexAttribPointer(_,T,O,G,D,F)}function g(_,T,O,G){x();const D=G.attributes,F=O.getAttributes(),B=T.defaultAttributeValues;for(const W in F){const V=F[W];if(V.location>=0){let $=D[W];if($===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&($=_.instanceColor)),$!==void 0){const tt=$.normalized,rt=$.itemSize,Ct=t.get($);if(Ct===void 0)continue;const Bt=Ct.buffer,nt=Ct.type,ut=Ct.bytesPerElement,Rt=nt===i.INT||nt===i.UNSIGNED_INT||$.gpuType===gc;if($.isInterleavedBufferAttribute){const ft=$.data,zt=ft.stride,Ht=$.offset;if(ft.isInstancedInterleavedBuffer){for(let $t=0;$t<V.locationSize;$t++)d(V.location+$t,ft.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let $t=0;$t<V.locationSize;$t++)m(V.location+$t);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let $t=0;$t<V.locationSize;$t++)S(V.location+$t,rt/V.locationSize,nt,tt,zt*ut,(Ht+rt/V.locationSize*$t)*ut,Rt)}else{if($.isInstancedBufferAttribute){for(let ft=0;ft<V.locationSize;ft++)d(V.location+ft,$.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ft=0;ft<V.locationSize;ft++)m(V.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let ft=0;ft<V.locationSize;ft++)S(V.location+ft,rt/V.locationSize,nt,tt,rt*ut,rt/V.locationSize*ft*ut,Rt)}}else if(B!==void 0){const tt=B[W];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(V.location,tt);break;case 3:i.vertexAttrib3fv(V.location,tt);break;case 4:i.vertexAttrib4fv(V.location,tt);break;default:i.vertexAttrib1fv(V.location,tt)}}}}y()}function A(){C();for(const _ in n){const T=n[_];for(const O in T){const G=T[O];for(const D in G)u(G[D].object),delete G[D];delete T[O]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const T=n[_.id];for(const O in T){const G=T[O];for(const D in G)u(G[D].object),delete G[D];delete T[O]}delete n[_.id]}function w(_){for(const T in n){const O=n[T];if(O[_.id]===void 0)continue;const G=O[_.id];for(const D in G)u(G[D].object),delete G[D];delete O[_.id]}}function C(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function lg(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x]*f[x];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==$n&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Mi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==hi&&!C)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:g,vertexTextures:A,maxSamples:E}}function hg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new hs,o=new Me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,S=y*4;let g=d.clippingState||null;l.value=g,g=u(v,f,S,p);for(let A=0;A!==S;++A)g[A]=e[A];d.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const d=p+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,g=p;S!==x;++S,g+=4)a.copy(h[S]).applyMatrix4(y,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function ug(i){let t=new WeakMap;function e(a,o){return o===Ml?a.mapping=hr:o===yl&&(a.mapping=ur),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ml||o===yl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Sp(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ac extends sf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Js=4,Sh=[.125,.215,.35,.446,.526,.582],fs=20,Bo=new Ac,bh=new At;let Go=null,Vo=0,Ho=0,Wo=!1;const us=(1+Math.sqrt(5))/2,qs=1/us,wh=[new k(-us,qs,0),new k(us,qs,0),new k(-qs,0,us),new k(qs,0,us),new k(0,us,-qs),new k(0,us,qs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Eh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Go=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Go,Vo,Ho),this._renderer.xr.enabled=Wo,t.scissorTest=!1,Ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hr||t.mapping===ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Go=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:jn,format:$n,colorSpace:xr,depthBuffer:!1},s=Th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(r)),this._blurMaterial=dg(r,t,e)}return s}_compileMaterial(t){const e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,Bo)}_sceneToCubeUV(t,e,n,s){const o=new kn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(bh),u.toneMapping=Qi,u.autoClear=!1;const p=new De({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),v=new oe(new Cn,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(bh),x=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const S=this._cubeSize;Ea(s,y*S,d>2?S:0,S,S),u.setRenderTarget(s),x&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===hr||t.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ah());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ea(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Bo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wh[(s-r-1)%wh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new oe(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fs-1),x=r/v,m=isFinite(r)?1+Math.floor(u*x):fs;m>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);const d=[];let y=0;for(let w=0;w<fs;++w){const C=w/x,M=Math.exp(-C*C/2);d.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const g=this._sizeLods[s],A=3*g*(s>S-Js?s-S+Js:0),E=4*(this._cubeSize-g);Ea(e,A,E,3*g,2*g),l.setRenderTarget(e),l.render(h,Bo)}}function fg(i){const t=[],e=[],n=[];let s=i;const r=i-Js+1+Sh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Js?l=Sh[a-i+Js-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,x=3,m=2,d=1,y=new Float32Array(x*v*p),S=new Float32Array(m*v*p),g=new Float32Array(d*v*p);for(let E=0;E<p;E++){const w=E%3*2/3-1,C=E>2?0:-1,M=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(M,x*v*E),S.set(f,m*v*E);const _=[E,E,E,E,E,E];g.set(_,d*v*E)}const A=new ze;A.setAttribute("position",new Ve(y,x)),A.setAttribute("uv",new Ve(S,m)),A.setAttribute("faceIndex",new Ve(g,d)),t.push(A),s>Js&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Th(i,t,e){const n=new In(i,t,e);return n.texture.mapping=no,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dg(i,t,e){const n=new Float32Array(fs),s=new k(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ah(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ch(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Cc(){return`

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
	`}function pg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ml||l===yl,u=l===hr||l===ur;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Eh(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Eh(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function mg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gg(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const y=p.array;x=p.version;for(let S=0,g=y.length;S<g;S+=3){const A=y[S+0],E=y[S+1],w=y[S+2];f.push(A,E,E,w,w,A)}}else if(v!==void 0){const y=v.array;x=v.version;for(let S=0,g=y.length/3-1;S<g;S+=3){const A=S+0,E=S+1,w=S+2;f.push(A,E,E,w,w,A)}}else return;const m=new(Zu(f)?ef:tf)(f,1);m.version=x;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function vg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,f*a,v),e.update(p,n,v))}function u(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];e.update(m,n,1)}function h(f,p,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,v);let d=0;for(let y=0;y<v;y++)d+=p[y]*x[y];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function xg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _g(i,t,e){const n=new WeakMap,s=new Ge;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let _=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var p=_;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let g=0;v===!0&&(g=1),x===!0&&(g=2),m===!0&&(g=3);let A=o.attributes.position.count*g,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const w=new Float32Array(A*E*4*h),C=new Ju(w,A,E,h);C.type=hi,C.needsUpdate=!0;const M=g*4;for(let T=0;T<h;T++){const O=d[T],G=y[T],D=S[T],F=A*E*4*T;for(let B=0;B<O.count;B++){const W=B*M;v===!0&&(s.fromBufferAttribute(O,B),w[F+W+0]=s.x,w[F+W+1]=s.y,w[F+W+2]=s.z,w[F+W+3]=0),x===!0&&(s.fromBufferAttribute(G,B),w[F+W+4]=s.x,w[F+W+5]=s.y,w[F+W+6]=s.z,w[F+W+7]=0),m===!0&&(s.fromBufferAttribute(D,B),w[F+W+8]=s.x,w[F+W+9]=s.y,w[F+W+10]=s.z,w[F+W+11]=D.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new bt(A,E)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Mg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Rc extends bn{constructor(t,e,n,s,r,a,o,l,c,u=tr){if(u!==tr&&u!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===tr&&(n=ys),n===void 0&&u===bs&&(n=Ss),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const of=new bn,Rh=new Rc(1,1),lf=new Ju,cf=new op,hf=new rf,Ph=[],Dh=[],Lh=new Float32Array(16),Ih=new Float32Array(9),Uh=new Float32Array(4);function yr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ph[s];if(r===void 0&&(r=new Float32Array(s),Ph[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function on(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ro(i,t){let e=Dh[t];e===void 0&&(e=new Int32Array(t),Dh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function Eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Uh.set(n),i.uniformMatrix2fv(this.addr,!1,Uh),ln(e,n)}}function Tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Ih.set(n),i.uniformMatrix3fv(this.addr,!1,Ih),ln(e,n)}}function Ag(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Lh.set(n),i.uniformMatrix4fv(this.addr,!1,Lh),ln(e,n)}}function Cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function Dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function Lg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function Ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function Ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function zg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rh.compareFunction=ju,r=Rh):r=of,e.setTexture2D(t||r,s)}function Fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cf,s)}function Og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hf,s)}function kg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lf,s)}function Bg(i){switch(i){case 5126:return yg;case 35664:return Sg;case 35665:return bg;case 35666:return wg;case 35674:return Eg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Cg;case 35667:case 35671:return Rg;case 35668:case 35672:return Pg;case 35669:case 35673:return Dg;case 5125:return Lg;case 36294:return Ig;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return kg}}function Gg(i,t){i.uniform1fv(this.addr,t)}function Vg(i,t){const e=yr(t,this.size,2);i.uniform2fv(this.addr,e)}function Hg(i,t){const e=yr(t,this.size,3);i.uniform3fv(this.addr,e)}function Wg(i,t){const e=yr(t,this.size,4);i.uniform4fv(this.addr,e)}function Xg(i,t){const e=yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qg(i,t){const e=yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yg(i,t){const e=yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $g(i,t){i.uniform1iv(this.addr,t)}function jg(i,t){i.uniform2iv(this.addr,t)}function Zg(i,t){i.uniform3iv(this.addr,t)}function Kg(i,t){i.uniform4iv(this.addr,t)}function Jg(i,t){i.uniform1uiv(this.addr,t)}function Qg(i,t){i.uniform2uiv(this.addr,t)}function tv(i,t){i.uniform3uiv(this.addr,t)}function ev(i,t){i.uniform4uiv(this.addr,t)}function nv(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||of,r[a])}function iv(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cf,r[a])}function sv(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||hf,r[a])}function rv(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||lf,r[a])}function av(i){switch(i){case 5126:return Gg;case 35664:return Vg;case 35665:return Hg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return $g;case 35667:case 35671:return jg;case 35668:case 35672:return Zg;case 35669:case 35673:return Kg;case 5125:return Jg;case 36294:return Qg;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return rv}}class ov{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bg(e.type)}}class lv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=av(e.type)}}class cv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function Nh(i,t){i.seq.push(t),i.map[t.id]=t}function hv(i,t,e){const n=i.name,s=n.length;for(Xo.lastIndex=0;;){const r=Xo.exec(n),a=Xo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nh(e,c===void 0?new ov(o,i,t):new lv(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new cv(o),Nh(e,h)),e=h}}}class Ya{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);hv(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function zh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const uv=37297;let fv=0;function dv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Fh=new Me;function pv(i){Pe._getMatrix(Fh,Pe.workingColorSpace,i);const t=`mat3( ${Fh.elements.map(e=>e.toFixed(4))} )`;switch(Pe.getTransfer(i)){case so:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Oh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dv(i.getShaderSource(t),a)}else return s}function mv(i,t){const e=pv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gv(i,t){let e;switch(t){case Uu:e="Linear";break;case Nu:e="Reinhard";break;case zu:e="Cineon";break;case mc:e="ACESFilmic";break;case Fu:e="AgX";break;case Ou:e="Neutral";break;case Ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ta=new k;function vv(){Pe.getLuminanceCoefficients(Ta);const i=Ta.x.toFixed(4),t=Ta.y.toFixed(4),e=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function _v(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ur(i){return i!==""}function kh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(i){return i.replace(yv,bv)}const Sv=new Map;function bv(i,t){let e=be[t];if(e===void 0){const n=Sv.get(t);if(n!==void 0)e=be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jl(e)}const wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(wv,Ev)}function Ev(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Tv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Du?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function Av(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hr:case ur:t="ENVMAP_TYPE_CUBE";break;case no:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ur:t="ENVMAP_MODE_REFRACTION";break}return t}function Rv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pc:t="ENVMAP_BLENDING_MULTIPLY";break;case bd:t="ENVMAP_BLENDING_MIX";break;case wd:t="ENVMAP_BLENDING_ADD";break}return t}function Pv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Dv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Tv(e),c=Av(e),u=Cv(e),h=Rv(e),f=Pv(e),p=xv(e),v=_v(r),x=s.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ur).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ur).join(`
`),d.length>0&&(d+=`
`)):(m=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),d=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?be.tonemapping_pars_fragment:"",e.toneMapping!==Qi?gv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,mv("linearToOutputTexel",e.outputColorSpace),vv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),a=jl(a),a=kh(a,e),a=Bh(a,e),o=jl(o),o=kh(o,e),o=Bh(o,e),a=Gh(a),o=Gh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=y+m+a,g=y+d+o,A=zh(s,s.VERTEX_SHADER,S),E=zh(s,s.FRAGMENT_SHADER,g);s.attachShader(x,A),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(T){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(x).trim(),G=s.getShaderInfoLog(A).trim(),D=s.getShaderInfoLog(E).trim();let F=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{const W=Oh(s,A,"vertex"),V=Oh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+W+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(G===""||D==="")&&(B=!1);B&&(T.diagnostics={runnable:F,programLog:O,vertexShader:{log:G,prefix:m},fragmentShader:{log:D,prefix:d}})}s.deleteShader(A),s.deleteShader(E),C=new Ya(s,x),M=Mv(s,x)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,uv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let Lv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Uv(t),e.set(t,n)),n}}class Uv{constructor(t){this.id=Lv++,this.code=t,this.usedTimes=0}}function Nv(i,t,e,n,s,r,a){const o=new Ec,l=new Iv,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,T,O,G){const D=O.fog,F=G.geometry,B=M.isMeshStandardMaterial?O.environment:null,W=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),V=W&&W.mapping===no?W.image.height:null,$=v[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const tt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,rt=tt!==void 0?tt.length:0;let Ct=0;F.morphAttributes.position!==void 0&&(Ct=1),F.morphAttributes.normal!==void 0&&(Ct=2),F.morphAttributes.color!==void 0&&(Ct=3);let Bt,nt,ut,Rt;if($){const we=gi[$];Bt=we.vertexShader,nt=we.fragmentShader}else Bt=M.vertexShader,nt=M.fragmentShader,l.update(M),ut=l.getVertexShaderID(M),Rt=l.getFragmentShaderID(M);const ft=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Ht=G.isInstancedMesh===!0,$t=G.isBatchedMesh===!0,te=!!M.map,dt=!!M.matcap,wt=!!W,z=!!M.aoMap,Wt=!!M.lightMap,_t=!!M.bumpMap,Nt=!!M.normalMap,Dt=!!M.displacementMap,ee=!!M.emissiveMap,q=!!M.metalnessMap,R=!!M.roughnessMap,b=M.anisotropy>0,H=M.clearcoat>0,K=M.dispersion>0,et=M.iridescence>0,it=M.sheen>0,Ut=M.transmission>0,Mt=b&&!!M.anisotropyMap,Pt=H&&!!M.clearcoatMap,re=H&&!!M.clearcoatNormalMap,yt=H&&!!M.clearcoatRoughnessMap,Xt=et&&!!M.iridescenceMap,ae=et&&!!M.iridescenceThicknessMap,le=it&&!!M.sheenColorMap,jt=it&&!!M.sheenRoughnessMap,ye=!!M.specularMap,ce=!!M.specularColorMap,Se=!!M.specularIntensityMap,X=Ut&&!!M.transmissionMap,It=Ut&&!!M.thicknessMap,at=!!M.gradientMap,vt=!!M.alphaMap,Ft=M.alphaTest>0,Ot=!!M.alphaHash,he=!!M.extensions;let Fe=Qi;M.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const Be={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:Bt,fragmentShader:nt,defines:M.defines,customVertexShaderID:ut,customFragmentShaderID:Rt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:$t,batchingColor:$t&&G._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&G.instanceColor!==null,instancingMorph:Ht&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:xr,alphaToCoverage:!!M.alphaToCoverage,map:te,matcap:dt,envMap:wt,envMapMode:wt&&W.mapping,envMapCubeUVHeight:V,aoMap:z,lightMap:Wt,bumpMap:_t,normalMap:Nt,displacementMap:f&&Dt,emissiveMap:ee,normalMapObjectSpace:Nt&&M.normalMapType===Rd,normalMapTangentSpace:Nt&&M.normalMapType===Sc,metalnessMap:q,roughnessMap:R,anisotropy:b,anisotropyMap:Mt,clearcoat:H,clearcoatMap:Pt,clearcoatNormalMap:re,clearcoatRoughnessMap:yt,dispersion:K,iridescence:et,iridescenceMap:Xt,iridescenceThicknessMap:ae,sheen:it,sheenColorMap:le,sheenRoughnessMap:jt,specularMap:ye,specularColorMap:ce,specularIntensityMap:Se,transmission:Ut,transmissionMap:X,thicknessMap:It,gradientMap:at,opaque:M.transparent===!1&&M.blending===Ji&&M.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ft,alphaHash:Ot,combine:M.combine,mapUv:te&&x(M.map.channel),aoMapUv:z&&x(M.aoMap.channel),lightMapUv:Wt&&x(M.lightMap.channel),bumpMapUv:_t&&x(M.bumpMap.channel),normalMapUv:Nt&&x(M.normalMap.channel),displacementMapUv:Dt&&x(M.displacementMap.channel),emissiveMapUv:ee&&x(M.emissiveMap.channel),metalnessMapUv:q&&x(M.metalnessMap.channel),roughnessMapUv:R&&x(M.roughnessMap.channel),anisotropyMapUv:Mt&&x(M.anisotropyMap.channel),clearcoatMapUv:Pt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:le&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:jt&&x(M.sheenRoughnessMap.channel),specularMapUv:ye&&x(M.specularMap.channel),specularColorMapUv:ce&&x(M.specularColorMap.channel),specularIntensityMapUv:Se&&x(M.specularIntensityMap.channel),transmissionMapUv:X&&x(M.transmissionMap.channel),thicknessMapUv:It&&x(M.thicknessMap.channel),alphaMapUv:vt&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Nt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!F.attributes.uv&&(te||vt),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:zt,skinning:G.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Ct,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:te&&M.map.isVideoTexture===!0&&Pe.getTransfer(M.map.colorSpace)===Oe,decodeVideoTextureEmissive:ee&&M.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(M.emissiveMap.colorSpace)===Oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Je,flipSided:M.side===Pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:he&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&M.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function d(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)_.push(T),_.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(y(_,M),S(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function y(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function S(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function g(M){const _=v[M.type];let T;if(_){const O=gi[_];T=li.clone(O.uniforms)}else T=M.uniforms;return T}function A(M,_){let T;for(let O=0,G=u.length;O<G;O++){const D=u[O];if(D.cacheKey===_){T=D,++T.usedTimes;break}}return T===void 0&&(T=new Dv(i,_,M,r),u.push(T)),T}function E(M){if(--M.usedTimes===0){const _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:g,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:C}}function zv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Fv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,p,v,x,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=x,d.group=m),t++,d}function o(h,f,p,v,x,m){const d=a(h,f,p,v,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,f,p,v,x,m){const d=a(h,f,p,v,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||Fv),n.length>1&&n.sort(f||Hh),s.length>1&&s.sort(f||Hh)}function u(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Ov(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Wh,i.set(n,[a])):s>=r.length?(a=new Wh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function kv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new At};break;case"SpotLight":e={position:new k,direction:new k,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Bv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gv=0;function Vv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hv(i){const t=new kv,e=Bv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const s=new k,r=new Le,a=new Le;function o(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,v=0,x=0,m=0,d=0,y=0,S=0,g=0,A=0,E=0,w=0;c.sort(Vv);for(let M=0,_=c.length;M<_;M++){const T=c[M],O=T.color,G=T.intensity,D=T.distance,F=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=O.r*G,h+=O.g*G,f+=O.b*G;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],G);w++}else if(T.isDirectionalLight){const B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const W=T.shadow,V=e.get(T);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=F,n.directionalShadowMatrix[p]=T.shadow.matrix,y++}n.directional[p]=B,p++}else if(T.isSpotLight){const B=t.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(O).multiplyScalar(G),B.distance=D,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[x]=B;const W=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,W.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[x]=W.matrix,T.castShadow){const V=e.get(T);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=F,g++}x++}else if(T.isRectAreaLight){const B=t.get(T);B.color.copy(O).multiplyScalar(G),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=B,m++}else if(T.isPointLight){const B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){const W=T.shadow,V=e.get(T);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=F,n.pointShadowMatrix[v]=T.shadow.matrix,S++}n.point[v]=B,v++}else if(T.isHemisphereLight){const B=t.get(T);B.skyColor.copy(T.color).multiplyScalar(G),B.groundColor.copy(T.groundColor).multiplyScalar(G),n.hemi[d]=B,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Gt.LTC_FLOAT_1,n.rectAreaLTC2=Gt.LTC_FLOAT_2):(n.rectAreaLTC1=Gt.LTC_HALF_1,n.rectAreaLTC2=Gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==v||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==y||C.numPointShadows!==S||C.numSpotShadows!==g||C.numSpotMaps!==A||C.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=g+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,C.directionalLength=p,C.pointLength=v,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=y,C.numPointShadows=S,C.numSpotShadows=g,C.numSpotMaps=A,C.numLightProbes=w,n.version=Gv++)}function l(c,u){let h=0,f=0,p=0,v=0,x=0;const m=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const S=c[d];if(S.isDirectionalLight){const g=n.directional[h];g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),h++}else if(S.isSpotLight){const g=n.spot[p];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const g=n.rectArea[v];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(S.width*.5,0,0),g.halfHeight.set(0,S.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const g=n.point[f];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const g=n.hemi[x];g.direction.setFromMatrixPosition(S.matrixWorld),g.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Xh(i){const t=new Hv(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Wv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Xh(i),t.set(s,[o])):r>=a.length?(o=new Xh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Xv extends Rs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qv extends Rs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
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
}`;function jv(i,t,e){let n=new Tc;const s=new bt,r=new bt,a=new Ge,o=new Xv({depthPacking:Cd}),l=new qv,c={},u=e.maxTextureSize,h={[ts]:Pn,[Pn]:ts,[Je]:Je},f=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Yv,fragmentShader:$v}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new ze;v.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new oe(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let d=this.type;this.render=function(E,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),O=i.state;O.setBlending(pn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=d!==Di&&this.type===Di,D=d===Di&&this.type!==Di;for(let F=0,B=E.length;F<B;F++){const W=E[F],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const $=V.getFrameExtents();if(s.multiply($),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,V.mapSize.y=r.y)),V.map===null||G===!0||D===!0){const rt=this.type!==Di?{minFilter:vn,magFilter:vn}:{};V.map!==null&&V.map.dispose(),V.map=new In(s.x,s.y,rt),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const tt=V.getViewportCount();for(let rt=0;rt<tt;rt++){const Ct=V.getViewport(rt);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),O.viewport(a),V.updateMatrices(W,rt),n=V.getFrustum(),g(w,C,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===Di&&y(V,C),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,T)};function y(E,w){const C=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new In(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,C,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,C,p,x,null)}function S(E,w,C,M){let _=null;const T=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)_=T;else if(_=C.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=_.uuid,G=w.uuid;let D=c[O];D===void 0&&(D={},c[O]=D);let F=D[G];F===void 0&&(F=_.clone(),D[G]=F,w.addEventListener("dispose",A)),_=F}if(_.visible=w.visible,_.wireframe=w.wireframe,M===Di?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:h[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=i.properties.get(_);O.light=C}return _}function g(E,w,C,M,_){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Di)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const G=t.update(E),D=E.material;if(Array.isArray(D)){const F=G.groups;for(let B=0,W=F.length;B<W;B++){const V=F[B],$=D[V.materialIndex];if($&&$.visible){const tt=S(E,$,M,_);E.onBeforeShadow(i,E,w,C,G,tt,V),i.renderBufferDirect(C,null,G,tt,E,V),E.onAfterShadow(i,E,w,C,G,tt,V)}}}else if(D.visible){const F=S(E,D,M,_);E.onBeforeShadow(i,E,w,C,G,F,null),i.renderBufferDirect(C,null,G,F,E,null),E.onAfterShadow(i,E,w,C,G,F,null)}}const O=E.children;for(let G=0,D=O.length;G<D;G++)g(O[G],w,C,M,_)}function A(E){E.target.removeEventListener("dispose",A);for(const C in c){const M=c[C],_=E.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const Zv={[dl]:pl,[ml]:xl,[gl]:_l,[cr]:vl,[pl]:dl,[xl]:ml,[_l]:gl,[vl]:cr};function Kv(i,t){function e(){let X=!1;const It=new Ge;let at=null;const vt=new Ge(0,0,0,0);return{setMask:function(Ft){at!==Ft&&!X&&(i.colorMask(Ft,Ft,Ft,Ft),at=Ft)},setLocked:function(Ft){X=Ft},setClear:function(Ft,Ot,he,Fe,Be){Be===!0&&(Ft*=Fe,Ot*=Fe,he*=Fe),It.set(Ft,Ot,he,Fe),vt.equals(It)===!1&&(i.clearColor(Ft,Ot,he,Fe),vt.copy(It))},reset:function(){X=!1,at=null,vt.set(-1,0,0,0)}}}function n(){let X=!1,It=!1,at=null,vt=null,Ft=null;return{setReversed:function(Ot){if(It!==Ot){const he=t.get("EXT_clip_control");It?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT);const Fe=Ft;Ft=null,this.setClear(Fe)}It=Ot},getReversed:function(){return It},setTest:function(Ot){Ot?ft(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(Ot){at!==Ot&&!X&&(i.depthMask(Ot),at=Ot)},setFunc:function(Ot){if(It&&(Ot=Zv[Ot]),vt!==Ot){switch(Ot){case dl:i.depthFunc(i.NEVER);break;case pl:i.depthFunc(i.ALWAYS);break;case ml:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case gl:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case xl:i.depthFunc(i.GREATER);break;case _l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=Ot}},setLocked:function(Ot){X=Ot},setClear:function(Ot){Ft!==Ot&&(It&&(Ot=1-Ot),i.clearDepth(Ot),Ft=Ot)},reset:function(){X=!1,at=null,vt=null,Ft=null,It=!1}}}function s(){let X=!1,It=null,at=null,vt=null,Ft=null,Ot=null,he=null,Fe=null,Be=null;return{setTest:function(we){X||(we?ft(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(we){It!==we&&!X&&(i.stencilMask(we),It=we)},setFunc:function(we,xn,dn){(at!==we||vt!==xn||Ft!==dn)&&(i.stencilFunc(we,xn,dn),at=we,vt=xn,Ft=dn)},setOp:function(we,xn,dn){(Ot!==we||he!==xn||Fe!==dn)&&(i.stencilOp(we,xn,dn),Ot=we,he=xn,Fe=dn)},setLocked:function(we){X=we},setClear:function(we){Be!==we&&(i.clearStencil(we),Be=we)},reset:function(){X=!1,It=null,at=null,vt=null,Ft=null,Ot=null,he=null,Fe=null,Be=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],v=null,x=!1,m=null,d=null,y=null,S=null,g=null,A=null,E=null,w=new At(0,0,0),C=0,M=!1,_=null,T=null,O=null,G=null,D=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,W=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=W>=2);let $=null,tt={};const rt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),Bt=new Ge().fromArray(rt),nt=new Ge().fromArray(Ct);function ut(X,It,at,vt){const Ft=new Uint8Array(4),Ot=i.createTexture();i.bindTexture(X,Ot),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<at;he++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(It,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(It+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return Ot}const Rt={};Rt[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),a.setFunc(cr),_t(!1),Nt($c),ft(i.CULL_FACE),z(pn);function ft(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function zt(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function Ht(X,It){return h[X]!==It?(i.bindFramebuffer(X,It),h[X]=It,X===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=It),X===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=It),!0):!1}function $t(X,It){let at=p,vt=!1;if(X){at=f.get(It),at===void 0&&(at=[],f.set(It,at));const Ft=X.textures;if(at.length!==Ft.length||at[0]!==i.COLOR_ATTACHMENT0){for(let Ot=0,he=Ft.length;Ot<he;Ot++)at[Ot]=i.COLOR_ATTACHMENT0+Ot;at.length=Ft.length,vt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,vt=!0);vt&&i.drawBuffers(at)}function te(X){return v!==X?(i.useProgram(X),v=X,!0):!1}const dt={[ai]:i.FUNC_ADD,[cd]:i.FUNC_SUBTRACT,[hd]:i.FUNC_REVERSE_SUBTRACT};dt[ud]=i.MIN,dt[fd]=i.MAX;const wt={[Lr]:i.ZERO,[dd]:i.ONE,[pd]:i.SRC_COLOR,[cl]:i.SRC_ALPHA,[xd]:i.SRC_ALPHA_SATURATE,[fl]:i.DST_COLOR,[ul]:i.DST_ALPHA,[md]:i.ONE_MINUS_SRC_COLOR,[hl]:i.ONE_MINUS_SRC_ALPHA,[vd]:i.ONE_MINUS_DST_COLOR,[gd]:i.ONE_MINUS_DST_ALPHA,[_d]:i.CONSTANT_COLOR,[Md]:i.ONE_MINUS_CONSTANT_COLOR,[yd]:i.CONSTANT_ALPHA,[Sd]:i.ONE_MINUS_CONSTANT_ALPHA};function z(X,It,at,vt,Ft,Ot,he,Fe,Be,we){if(X===pn){x===!0&&(zt(i.BLEND),x=!1);return}if(x===!1&&(ft(i.BLEND),x=!0),X!==Iu){if(X!==m||we!==M){if((d!==ai||g!==ai)&&(i.blendEquation(i.FUNC_ADD),d=ai,g=ai),we)switch(X){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fi:i.blendFunc(i.ONE,i.ONE);break;case jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}y=null,S=null,A=null,E=null,w.set(0,0,0),C=0,m=X,M=we}return}Ft=Ft||It,Ot=Ot||at,he=he||vt,(It!==d||Ft!==g)&&(i.blendEquationSeparate(dt[It],dt[Ft]),d=It,g=Ft),(at!==y||vt!==S||Ot!==A||he!==E)&&(i.blendFuncSeparate(wt[at],wt[vt],wt[Ot],wt[he]),y=at,S=vt,A=Ot,E=he),(Fe.equals(w)===!1||Be!==C)&&(i.blendColor(Fe.r,Fe.g,Fe.b,Be),w.copy(Fe),C=Be),m=X,M=!1}function Wt(X,It){X.side===Je?zt(i.CULL_FACE):ft(i.CULL_FACE);let at=X.side===Pn;It&&(at=!at),_t(at),X.blending===Ji&&X.transparent===!1?z(pn):z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),r.setMask(X.colorWrite);const vt=X.stencilWrite;o.setTest(vt),vt&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ee(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(X){_!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),_=X)}function Nt(X){X!==od?(ft(i.CULL_FACE),X!==T&&(X===$c?i.cullFace(i.BACK):X===ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),T=X}function Dt(X){X!==O&&(B&&i.lineWidth(X),O=X)}function ee(X,It,at){X?(ft(i.POLYGON_OFFSET_FILL),(G!==It||D!==at)&&(i.polygonOffset(It,at),G=It,D=at)):zt(i.POLYGON_OFFSET_FILL)}function q(X){X?ft(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function R(X){X===void 0&&(X=i.TEXTURE0+F-1),$!==X&&(i.activeTexture(X),$=X)}function b(X,It,at){at===void 0&&($===null?at=i.TEXTURE0+F-1:at=$);let vt=tt[at];vt===void 0&&(vt={type:void 0,texture:void 0},tt[at]=vt),(vt.type!==X||vt.texture!==It)&&($!==at&&(i.activeTexture(at),$=at),i.bindTexture(X,It||Rt[X]),vt.type=X,vt.texture=It)}function H(){const X=tt[$];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ae(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function le(X){Bt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Bt.copy(X))}function jt(X){nt.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),nt.copy(X))}function ye(X,It){let at=c.get(It);at===void 0&&(at=new WeakMap,c.set(It,at));let vt=at.get(X);vt===void 0&&(vt=i.getUniformBlockIndex(It,X.name),at.set(X,vt))}function ce(X,It){const vt=c.get(It).get(X);l.get(It)!==vt&&(i.uniformBlockBinding(It,vt,X.__bindingPointIndex),l.set(It,vt))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},$=null,tt={},h={},f=new WeakMap,p=[],v=null,x=!1,m=null,d=null,y=null,S=null,g=null,A=null,E=null,w=new At(0,0,0),C=0,M=!1,_=null,T=null,O=null,G=null,D=null,Bt.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ft,disable:zt,bindFramebuffer:Ht,drawBuffers:$t,useProgram:te,setBlending:z,setMaterial:Wt,setFlipSided:_t,setCullFace:Nt,setLineWidth:Dt,setPolygonOffset:ee,setScissorTest:q,activeTexture:R,bindTexture:b,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:Xt,texImage3D:ae,updateUBOMapping:ye,uniformBlockBinding:ce,texStorage2D:re,texStorage3D:yt,texSubImage2D:it,texSubImage3D:Ut,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Pt,scissor:le,viewport:jt,reset:Se}}function qh(i,t,e,n){const s=Jv(n);switch(e){case Hu:return i*t;case Xu:return i*t;case qu:return i*t*2;case io:return i*t/s.components*s.byteLength;case _c:return i*t/s.components*s.byteLength;case Yu:return i*t*2/s.components*s.byteLength;case Mc:return i*t*2/s.components*s.byteLength;case Wu:return i*t*3/s.components*s.byteLength;case $n:return i*t*4/s.components*s.byteLength;case yc:return i*t*4/s.components*s.byteLength;case Va:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:case Tl:return Math.max(i,16)*Math.max(t,8)/4;case bl:case El:return Math.max(i,8)*Math.max(t,8)/2;case Al:case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qa:case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $u:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yl:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jv(i){switch(i){case Mi:case Bu:return{byteLength:1,components:1};case Wr:case Gu:case jn:return{byteLength:2,components:1};case vc:case xc:return{byteLength:2,components:4};case ys:case gc:case hi:return{byteLength:4,components:1};case Vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Qv(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,b){return p?new OffscreenCanvas(R,b):Ja("canvas")}function x(R,b,H){let K=1;const et=q(R);if((et.width>H||et.height>H)&&(K=H/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const it=Math.floor(K*et.width),Ut=Math.floor(K*et.height);h===void 0&&(h=v(it,Ut));const Mt=b?v(it,Ut):h;return Mt.width=it,Mt.height=Ut,Mt.getContext("2d").drawImage(R,0,0,it,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+it+"x"+Ut+")."),Mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,b,H,K,et=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let it=b;if(b===i.RED&&(H===i.FLOAT&&(it=i.R32F),H===i.HALF_FLOAT&&(it=i.R16F),H===i.UNSIGNED_BYTE&&(it=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.R8UI),H===i.UNSIGNED_SHORT&&(it=i.R16UI),H===i.UNSIGNED_INT&&(it=i.R32UI),H===i.BYTE&&(it=i.R8I),H===i.SHORT&&(it=i.R16I),H===i.INT&&(it=i.R32I)),b===i.RG&&(H===i.FLOAT&&(it=i.RG32F),H===i.HALF_FLOAT&&(it=i.RG16F),H===i.UNSIGNED_BYTE&&(it=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.RG8UI),H===i.UNSIGNED_SHORT&&(it=i.RG16UI),H===i.UNSIGNED_INT&&(it=i.RG32UI),H===i.BYTE&&(it=i.RG8I),H===i.SHORT&&(it=i.RG16I),H===i.INT&&(it=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.RGB8UI),H===i.UNSIGNED_SHORT&&(it=i.RGB16UI),H===i.UNSIGNED_INT&&(it=i.RGB32UI),H===i.BYTE&&(it=i.RGB8I),H===i.SHORT&&(it=i.RGB16I),H===i.INT&&(it=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),H===i.UNSIGNED_INT&&(it=i.RGBA32UI),H===i.BYTE&&(it=i.RGBA8I),H===i.SHORT&&(it=i.RGBA16I),H===i.INT&&(it=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),b===i.RGBA){const Ut=et?so:Pe.getTransfer(K);H===i.FLOAT&&(it=i.RGBA32F),H===i.HALF_FLOAT&&(it=i.RGBA16F),H===i.UNSIGNED_BYTE&&(it=Ut===Oe?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function g(R,b){let H;return R?b===null||b===ys||b===Ss?H=i.DEPTH24_STENCIL8:b===hi?H=i.DEPTH32F_STENCIL8:b===Wr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ys||b===Ss?H=i.DEPTH_COMPONENT24:b===hi?H=i.DEPTH_COMPONENT32F:b===Wr&&(H=i.DEPTH_COMPONENT16),H}function A(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==vn&&R.minFilter!==vi?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function E(R){const b=R.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&u.delete(b)}function w(R){const b=R.target;b.removeEventListener("dispose",w),_(b)}function C(R){const b=n.get(R);if(b.__webglInit===void 0)return;const H=R.source,K=f.get(H);if(K){const et=K[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(R),Object.keys(K).length===0&&f.delete(H)}n.remove(R)}function M(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const H=R.source,K=f.get(H);delete K[b.__cacheKey],a.memory.textures--}function _(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let et=0;et<b.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(b.__webglFramebuffer[K][et]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=R.textures;for(let K=0,et=H.length;K<et;K++){const it=n.get(H[K]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(H[K])}n.remove(R)}let T=0;function O(){T=0}function G(){const R=T;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),T+=1,R}function D(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function F(R,b){const H=n.get(R);if(R.isVideoTexture&&Dt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(H,R,b);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function B(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){nt(H,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function W(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){nt(H,R,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function V(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){ut(H,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const $={[_i]:i.REPEAT,[ds]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},tt={[vn]:i.NEAREST,[Td]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[vi]:i.LINEAR,[_o]:i.LINEAR_MIPMAP_NEAREST,[ps]:i.LINEAR_MIPMAP_LINEAR},rt={[Pd]:i.NEVER,[zd]:i.ALWAYS,[Dd]:i.LESS,[ju]:i.LEQUAL,[Ld]:i.EQUAL,[Nd]:i.GEQUAL,[Id]:i.GREATER,[Ud]:i.NOTEQUAL};function Ct(R,b){if(b.type===hi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===vi||b.magFilter===_o||b.magFilter===aa||b.magFilter===ps||b.minFilter===vi||b.minFilter===_o||b.minFilter===aa||b.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,$[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,$[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,$[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,tt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,tt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,rt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===vn||b.minFilter!==aa&&b.minFilter!==ps||b.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Bt(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",E));const K=b.source;let et=f.get(K);et===void 0&&(et={},f.set(K,et));const it=D(b);if(it!==R.__cacheKey){et[it]===void 0&&(et[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[it].usedTimes++;const Ut=et[R.__cacheKey];Ut!==void 0&&(et[R.__cacheKey].usedTimes--,Ut.usedTimes===0&&M(b)),R.__cacheKey=it,R.__webglTexture=et[it].texture}return H}function nt(R,b,H){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const et=Bt(R,b),it=b.source;e.bindTexture(K,R.__webglTexture,i.TEXTURE0+H);const Ut=n.get(it);if(it.version!==Ut.__version||et===!0){e.activeTexture(i.TEXTURE0+H);const Mt=Pe.getPrimaries(Pe.workingColorSpace),Pt=b.colorSpace===ji?null:Pe.getPrimaries(b.colorSpace),re=b.colorSpace===ji||Mt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let yt=x(b.image,!1,s.maxTextureSize);yt=ee(b,yt);const Xt=r.convert(b.format,b.colorSpace),ae=r.convert(b.type);let le=S(b.internalFormat,Xt,ae,b.colorSpace,b.isVideoTexture);Ct(K,b);let jt;const ye=b.mipmaps,ce=b.isVideoTexture!==!0,Se=Ut.__version===void 0||et===!0,X=it.dataReady,It=A(b,yt);if(b.isDepthTexture)le=g(b.format===bs,b.type),Se&&(ce?e.texStorage2D(i.TEXTURE_2D,1,le,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,le,yt.width,yt.height,0,Xt,ae,null));else if(b.isDataTexture)if(ye.length>0){ce&&Se&&e.texStorage2D(i.TEXTURE_2D,It,le,ye[0].width,ye[0].height);for(let at=0,vt=ye.length;at<vt;at++)jt=ye[at],ce?X&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,jt.width,jt.height,Xt,ae,jt.data):e.texImage2D(i.TEXTURE_2D,at,le,jt.width,jt.height,0,Xt,ae,jt.data);b.generateMipmaps=!1}else ce?(Se&&e.texStorage2D(i.TEXTURE_2D,It,le,yt.width,yt.height),X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt.width,yt.height,Xt,ae,yt.data)):e.texImage2D(i.TEXTURE_2D,0,le,yt.width,yt.height,0,Xt,ae,yt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ce&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,le,ye[0].width,ye[0].height,yt.depth);for(let at=0,vt=ye.length;at<vt;at++)if(jt=ye[at],b.format!==$n)if(Xt!==null)if(ce){if(X)if(b.layerUpdates.size>0){const Ft=qh(jt.width,jt.height,b.format,b.type);for(const Ot of b.layerUpdates){const he=jt.data.subarray(Ot*Ft/jt.data.BYTES_PER_ELEMENT,(Ot+1)*Ft/jt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,Ot,jt.width,jt.height,1,Xt,he)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,jt.width,jt.height,yt.depth,Xt,jt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,le,jt.width,jt.height,yt.depth,0,jt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,jt.width,jt.height,yt.depth,Xt,ae,jt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,le,jt.width,jt.height,yt.depth,0,Xt,ae,jt.data)}else{ce&&Se&&e.texStorage2D(i.TEXTURE_2D,It,le,ye[0].width,ye[0].height);for(let at=0,vt=ye.length;at<vt;at++)jt=ye[at],b.format!==$n?Xt!==null?ce?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,jt.width,jt.height,Xt,jt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,le,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?X&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,jt.width,jt.height,Xt,ae,jt.data):e.texImage2D(i.TEXTURE_2D,at,le,jt.width,jt.height,0,Xt,ae,jt.data)}else if(b.isDataArrayTexture)if(ce){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,le,yt.width,yt.height,yt.depth),X)if(b.layerUpdates.size>0){const at=qh(yt.width,yt.height,b.format,b.type);for(const vt of b.layerUpdates){const Ft=yt.data.subarray(vt*at/yt.data.BYTES_PER_ELEMENT,(vt+1)*at/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,yt.width,yt.height,1,Xt,ae,Ft)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Xt,ae,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,le,yt.width,yt.height,yt.depth,0,Xt,ae,yt.data);else if(b.isData3DTexture)ce?(Se&&e.texStorage3D(i.TEXTURE_3D,It,le,yt.width,yt.height,yt.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Xt,ae,yt.data)):e.texImage3D(i.TEXTURE_3D,0,le,yt.width,yt.height,yt.depth,0,Xt,ae,yt.data);else if(b.isFramebufferTexture){if(Se)if(ce)e.texStorage2D(i.TEXTURE_2D,It,le,yt.width,yt.height);else{let at=yt.width,vt=yt.height;for(let Ft=0;Ft<It;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,le,at,vt,0,Xt,ae,null),at>>=1,vt>>=1}}else if(ye.length>0){if(ce&&Se){const at=q(ye[0]);e.texStorage2D(i.TEXTURE_2D,It,le,at.width,at.height)}for(let at=0,vt=ye.length;at<vt;at++)jt=ye[at],ce?X&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Xt,ae,jt):e.texImage2D(i.TEXTURE_2D,at,le,Xt,ae,jt);b.generateMipmaps=!1}else if(ce){if(Se){const at=q(yt);e.texStorage2D(i.TEXTURE_2D,It,le,at.width,at.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Xt,ae,yt)}else e.texImage2D(i.TEXTURE_2D,0,le,Xt,ae,yt);m(b)&&d(K),Ut.__version=it.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ut(R,b,H){if(b.image.length!==6)return;const K=Bt(R,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const it=n.get(et);if(et.version!==it.__version||K===!0){e.activeTexture(i.TEXTURE0+H);const Ut=Pe.getPrimaries(Pe.workingColorSpace),Mt=b.colorSpace===ji?null:Pe.getPrimaries(b.colorSpace),Pt=b.colorSpace===ji||Ut===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const re=b.isCompressedTexture||b.image[0].isCompressedTexture,yt=b.image[0]&&b.image[0].isDataTexture,Xt=[];for(let vt=0;vt<6;vt++)!re&&!yt?Xt[vt]=x(b.image[vt],!0,s.maxCubemapSize):Xt[vt]=yt?b.image[vt].image:b.image[vt],Xt[vt]=ee(b,Xt[vt]);const ae=Xt[0],le=r.convert(b.format,b.colorSpace),jt=r.convert(b.type),ye=S(b.internalFormat,le,jt,b.colorSpace),ce=b.isVideoTexture!==!0,Se=it.__version===void 0||K===!0,X=et.dataReady;let It=A(b,ae);Ct(i.TEXTURE_CUBE_MAP,b);let at;if(re){ce&&Se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,ye,ae.width,ae.height);for(let vt=0;vt<6;vt++){at=Xt[vt].mipmaps;for(let Ft=0;Ft<at.length;Ft++){const Ot=at[Ft];b.format!==$n?le!==null?ce?X&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,Ot.width,Ot.height,le,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,ye,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,Ot.width,Ot.height,le,jt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,ye,Ot.width,Ot.height,0,le,jt,Ot.data)}}}else{if(at=b.mipmaps,ce&&Se){at.length>0&&It++;const vt=q(Xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,ye,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(yt){ce?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Xt[vt].width,Xt[vt].height,le,jt,Xt[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ye,Xt[vt].width,Xt[vt].height,0,le,jt,Xt[vt].data);for(let Ft=0;Ft<at.length;Ft++){const he=at[Ft].image[vt].image;ce?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,he.width,he.height,le,jt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,ye,he.width,he.height,0,le,jt,he.data)}}else{ce?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,le,jt,Xt[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ye,le,jt,Xt[vt]);for(let Ft=0;Ft<at.length;Ft++){const Ot=at[Ft];ce?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,le,jt,Ot.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,ye,le,jt,Ot.image[vt])}}}m(b)&&d(i.TEXTURE_CUBE_MAP),it.__version=et.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Rt(R,b,H,K,et,it){const Ut=r.convert(H.format,H.colorSpace),Mt=r.convert(H.type),Pt=S(H.internalFormat,Ut,Mt,H.colorSpace),re=n.get(b),yt=n.get(H);if(yt.__renderTarget=b,!re.__hasExternalTextures){const Xt=Math.max(1,b.width>>it),ae=Math.max(1,b.height>>it);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,it,Pt,Xt,ae,b.depth,0,Ut,Mt,null):e.texImage2D(et,it,Pt,Xt,ae,0,Ut,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Nt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,yt.__webglTexture,0,_t(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,yt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(R,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const K=b.depthTexture,et=K&&K.isDepthTexture?K.type:null,it=g(b.stencilBuffer,et),Ut=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=_t(b);Nt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,it,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,it,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,it,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,R)}else{const K=b.textures;for(let et=0;et<K.length;et++){const it=K[et],Ut=r.convert(it.format,it.colorSpace),Mt=r.convert(it.type),Pt=S(it.internalFormat,Ut,Mt,it.colorSpace),re=_t(b);H&&Nt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Pt,b.width,b.height):Nt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Pt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);const et=K.__webglTexture,it=_t(b);if(b.depthTexture.format===tr)Nt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(b.depthTexture.format===bs)Nt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ht(R){const b=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=K}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");zt(b.__webglFramebuffer,R)}else if(H){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),ft(b.__webglDepthbuffer[K],R,!1);else{const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ft(b.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(R,b,H){const K=n.get(R);b!==void 0&&Rt(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ht(R)}function te(R){const b=R.texture,H=n.get(R),K=n.get(b);R.addEventListener("dispose",w);const et=R.textures,it=R.isWebGLCubeRenderTarget===!0,Ut=et.length>1;if(Ut||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,a.memory.textures++),it){H.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[Mt]=[];for(let Pt=0;Pt<b.mipmaps.length;Pt++)H.__webglFramebuffer[Mt][Pt]=i.createFramebuffer()}else H.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)H.__webglFramebuffer[Mt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let Mt=0,Pt=et.length;Mt<Pt;Mt++){const re=n.get(et[Mt]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Nt(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Mt=0;Mt<et.length;Mt++){const Pt=et[Mt];H.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Mt]);const re=r.convert(Pt.format,Pt.colorSpace),yt=r.convert(Pt.type),Xt=S(Pt.internalFormat,re,yt,Pt.colorSpace,R.isXRRenderTarget===!0),ae=_t(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Xt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,H.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,b);for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)Rt(H.__webglFramebuffer[Mt][Pt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Pt);else Rt(H.__webglFramebuffer[Mt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(b)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let Mt=0,Pt=et.length;Mt<Pt;Mt++){const re=et[Mt],yt=n.get(re);e.bindTexture(i.TEXTURE_2D,yt.__webglTexture),Ct(i.TEXTURE_2D,re),Rt(H.__webglFramebuffer,R,re,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),m(re)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,K.__webglTexture),Ct(Mt,b),b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)Rt(H.__webglFramebuffer[Pt],R,b,i.COLOR_ATTACHMENT0,Mt,Pt);else Rt(H.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,Mt,0);m(b)&&d(Mt),e.unbindTexture()}R.depthBuffer&&Ht(R)}function dt(R){const b=R.textures;for(let H=0,K=b.length;H<K;H++){const et=b[H];if(m(et)){const it=y(R),Ut=n.get(et).__webglTexture;e.bindTexture(it,Ut),d(it),e.unbindTexture()}}}const wt=[],z=[];function Wt(R){if(R.samples>0){if(Nt(R)===!1){const b=R.textures,H=R.width,K=R.height;let et=i.COLOR_BUFFER_BIT;const it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(R),Mt=b.length>1;if(Mt)for(let Pt=0;Pt<b.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Pt=0;Pt<b.length;Pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);const re=n.get(b[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,et,i.NEAREST),l===!0&&(wt.length=0,z.length=0,wt.push(i.COLOR_ATTACHMENT0+Pt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(wt.push(it),z.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Pt=0;Pt<b.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);const re=n.get(b[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function _t(R){return Math.min(s.maxSamples,R.samples)}function Nt(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Dt(R){const b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function ee(R,b){const H=R.colorSpace,K=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==xr&&H!==ji&&(Pe.getTransfer(H)===Oe?(K!==$n||et!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function q(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=$t,this.setupRenderTarget=te,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Nt}function tx(i,t){function e(n,s=ji){let r;const a=Pe.getTransfer(s);if(n===Mi)return i.UNSIGNED_BYTE;if(n===vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bu)return i.BYTE;if(n===Gu)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===gc)return i.INT;if(n===ys)return i.UNSIGNED_INT;if(n===hi)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===Hu)return i.ALPHA;if(n===Wu)return i.RGB;if(n===$n)return i.RGBA;if(n===Xu)return i.LUMINANCE;if(n===qu)return i.LUMINANCE_ALPHA;if(n===tr)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===io)return i.RED;if(n===_c)return i.RED_INTEGER;if(n===Yu)return i.RG;if(n===Mc)return i.RG_INTEGER;if(n===yc)return i.RGBA_INTEGER;if(n===Va||n===Ha||n===Wa||n===Xa)if(a===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===wl||n===El||n===Tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Cl||n===Rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===Cl)return a===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Nl||n===zl||n===Fl||n===Ol||n===kl||n===Bl||n===Gl||n===Vl||n===Hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ol)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qa||n===Wl||n===Xl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qa)return a===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$u||n===ql||n===Yl||n===$l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ex extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _e extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nx={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sx=`
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

}`;class rx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new bn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new je({vertexShader:ix,fragmentShader:sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ax extends _r{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,v=null;const x=new rx,m=e.getContextAttributes();let d=null,y=null;const S=[],g=[],A=new bt;let E=null;const w=new kn;w.viewport=new Ge;const C=new kn;C.viewport=new Ge;const M=[w,C],_=new ex;let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ut=S[nt];return ut===void 0&&(ut=new qo,S[nt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(nt){let ut=S[nt];return ut===void 0&&(ut=new qo,S[nt]=ut),ut.getGripSpace()},this.getHand=function(nt){let ut=S[nt];return ut===void 0&&(ut=new qo,S[nt]=ut),ut.getHandSpace()};function G(nt){const ut=g.indexOf(nt.inputSource);if(ut===-1)return;const Rt=S[ut];Rt!==void 0&&(Rt.update(nt.inputSource,nt.frame,c||a),Rt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function D(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",F);for(let nt=0;nt<S.length;nt++){const ut=g[nt];ut!==null&&(g[nt]=null,S[nt].disconnect(ut))}T=null,O=null,x.reset(),t.setRenderTarget(d),p=null,f=null,h=null,s=null,y=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",D),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new In(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,Rt=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?bs:tr,Rt=m.stencil?Ss:ys);const zt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new In(f.textureWidth,f.textureHeight,{format:$n,type:Mi,depthTexture:new Rc(f.textureWidth,f.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(nt){for(let ut=0;ut<nt.removed.length;ut++){const Rt=nt.removed[ut],ft=g.indexOf(Rt);ft>=0&&(g[ft]=null,S[ft].disconnect(Rt))}for(let ut=0;ut<nt.added.length;ut++){const Rt=nt.added[ut];let ft=g.indexOf(Rt);if(ft===-1){for(let Ht=0;Ht<S.length;Ht++)if(Ht>=g.length){g.push(Rt),ft=Ht;break}else if(g[Ht]===null){g[Ht]=Rt,ft=Ht;break}if(ft===-1)break}const zt=S[ft];zt&&zt.connect(Rt)}}const B=new k,W=new k;function V(nt,ut,Rt){B.setFromMatrixPosition(ut.matrixWorld),W.setFromMatrixPosition(Rt.matrixWorld);const ft=B.distanceTo(W),zt=ut.projectionMatrix.elements,Ht=Rt.projectionMatrix.elements,$t=zt[14]/(zt[10]-1),te=zt[14]/(zt[10]+1),dt=(zt[9]+1)/zt[5],wt=(zt[9]-1)/zt[5],z=(zt[8]-1)/zt[0],Wt=(Ht[8]+1)/Ht[0],_t=$t*z,Nt=$t*Wt,Dt=ft/(-z+Wt),ee=Dt*-z;if(ut.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ee),nt.translateZ(Dt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),zt[10]===-1)nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const q=$t+Dt,R=te+Dt,b=_t-ee,H=Nt+(ft-ee),K=dt*te/R*q,et=wt*te/R*q;nt.projectionMatrix.makePerspective(b,H,K,et,q,R),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function $(nt,ut){ut===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ut.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ut=nt.near,Rt=nt.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(Rt=x.depthFar)),_.near=C.near=w.near=ut,_.far=C.far=w.far=Rt,(T!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,O=_.far),w.layers.mask=nt.layers.mask|2,C.layers.mask=nt.layers.mask|4,_.layers.mask=w.layers.mask|C.layers.mask;const ft=nt.parent,zt=_.cameras;$(_,ft);for(let Ht=0;Ht<zt.length;Ht++)$(zt[Ht],ft);zt.length===2?V(_,w,C):_.projectionMatrix.copy(w.projectionMatrix),tt(nt,_,ft)};function tt(nt,ut,Rt){Rt===null?nt.matrix.copy(ut.matrixWorld):(nt.matrix.copy(Rt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ut.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Xr*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(nt){l=nt,f!==null&&(f.fixedFoveation=nt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=nt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let rt=null;function Ct(nt,ut){if(u=ut.getViewerPose(c||a),v=ut,u!==null){const Rt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let ft=!1;Rt.length!==_.cameras.length&&(_.cameras.length=0,ft=!0);for(let Ht=0;Ht<Rt.length;Ht++){const $t=Rt[Ht];let te=null;if(p!==null)te=p.getViewport($t);else{const wt=h.getViewSubImage(f,$t);te=wt.viewport,Ht===0&&(t.setRenderTargetTextures(y,wt.colorTexture,f.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(y))}let dt=M[Ht];dt===void 0&&(dt=new kn,dt.layers.enable(Ht),dt.viewport=new Ge,M[Ht]=dt),dt.matrix.fromArray($t.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray($t.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(te.x,te.y,te.width,te.height),Ht===0&&(_.matrix.copy(dt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ft===!0&&_.cameras.push(dt)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Ht=h.getDepthInformation(Rt[0]);Ht&&Ht.isValid&&Ht.texture&&x.init(t,Ht,s.renderState)}}for(let Rt=0;Rt<S.length;Rt++){const ft=g[Rt],zt=S[Rt];ft!==null&&zt!==void 0&&zt.update(ft,ut,c||a)}rt&&rt(nt,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),v=null}const Bt=new af;Bt.setAnimationLoop(Ct),this.setAnimationLoop=function(nt){rt=nt},this.dispose=function(){}}}const os=new yi,ox=new Le;function lx(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,nf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,S,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,g)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d),S=y.envMap,g=y.envMapRotation;S&&(m.envMap.value=S,os.copy(g),os.x*=-1,os.y*=-1,os.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),m.envMapRotation.value.setFromMatrix4(ox.makeRotationFromEuler(os)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const g=S.program;n.uniformBlockBinding(y,g)}function c(y,S){let g=s[y.id];g===void 0&&(v(y),g=u(y),s[y.id]=g,y.addEventListener("dispose",m));const A=S.program;n.updateUBOMapping(y,A);const E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function u(y){const S=h();y.__bindingPointIndex=S;const g=i.createBuffer(),A=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,g),g}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=s[y.id],g=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,w=g.length;E<w;E++){const C=Array.isArray(g[E])?g[E]:[g[E]];for(let M=0,_=C.length;M<_;M++){const T=C[M];if(p(T,E,M,A)===!0){const O=T.__offset,G=Array.isArray(T.value)?T.value:[T.value];let D=0;for(let F=0;F<G.length;F++){const B=G[F],W=x(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,O+D,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,D),D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,S,g,A){const E=y.value,w=S+"_"+g;if(A[w]===void 0)return typeof E=="number"||typeof E=="boolean"?A[w]=E:A[w]=E.clone(),!0;{const C=A[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return A[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function v(y){const S=y.uniforms;let g=0;const A=16;for(let w=0,C=S.length;w<C;w++){const M=Array.isArray(S[w])?S[w]:[S[w]];for(let _=0,T=M.length;_<T;_++){const O=M[_],G=Array.isArray(O.value)?O.value:[O.value];for(let D=0,F=G.length;D<F;D++){const B=G[D],W=x(B),V=g%A,$=V%W.boundary,tt=V+$;g+=$,tt!==0&&A-tt<W.storage&&(g+=A-tt),O.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=g,g+=W.storage}}}const E=g%A;return E>0&&(g+=A-E),y.__size=g,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const g=a.indexOf(S.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class hx{constructor(t={}){const{canvas:e=Qd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=Qi,this.toneMappingExposure=1;const g=this;let A=!1,E=0,w=0,C=null,M=-1,_=null;const T=new Ge,O=new Ge;let G=null;const D=new At(0);let F=0,B=e.width,W=e.height,V=1,$=null,tt=null;const rt=new Ge(0,0,B,W),Ct=new Ge(0,0,B,W);let Bt=!1;const nt=new Tc;let ut=!1,Rt=!1;const ft=new Le,zt=new Le,Ht=new k,$t=new Ge,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function wt(){return C===null?V:1}let z=n;function Wt(P,j){return e.getContext(P,j)}try{const P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dc}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),z===null){const j="webgl2";if(z=Wt(j,P),z===null)throw Wt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let _t,Nt,Dt,ee,q,R,b,H,K,et,it,Ut,Mt,Pt,re,yt,Xt,ae,le,jt,ye,ce,Se,X;function It(){_t=new mg(z),_t.init(),ce=new tx(z,_t),Nt=new cg(z,_t,t,ce),Dt=new Kv(z,_t),Nt.reverseDepthBuffer&&f&&Dt.buffers.depth.setReversed(!0),ee=new xg(z),q=new zv,R=new Qv(z,_t,Dt,q,Nt,ce,ee),b=new ug(g),H=new pg(g),K=new Ep(z),Se=new og(z,K),et=new gg(z,K,ee,Se),it=new Mg(z,et,K,ee),le=new _g(z,Nt,R),yt=new hg(q),Ut=new Nv(g,b,H,_t,Nt,Se,yt),Mt=new lx(g,q),Pt=new Ov,re=new Wv(_t),ae=new ag(g,b,H,Dt,it,p,l),Xt=new jv(g,it,Nt),X=new cx(z,ee,Nt,Dt),jt=new lg(z,_t,ee),ye=new vg(z,_t,ee),ee.programs=Ut.programs,g.capabilities=Nt,g.extensions=_t,g.properties=q,g.renderLists=Pt,g.shadowMap=Xt,g.state=Dt,g.info=ee}It();const at=new ax(g,z);this.xr=at,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=_t.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=_t.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(B,W,!1))},this.getSize=function(P){return P.set(B,W)},this.setSize=function(P,j,st=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,W=j,e.width=Math.floor(P*V),e.height=Math.floor(j*V),st===!0&&(e.style.width=P+"px",e.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(B*V,W*V).floor()},this.setDrawingBufferSize=function(P,j,st){B=P,W=j,V=st,e.width=Math.floor(P*st),e.height=Math.floor(j*st),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(rt)},this.setViewport=function(P,j,st,ot){P.isVector4?rt.set(P.x,P.y,P.z,P.w):rt.set(P,j,st,ot),Dt.viewport(T.copy(rt).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(Ct)},this.setScissor=function(P,j,st,ot){P.isVector4?Ct.set(P.x,P.y,P.z,P.w):Ct.set(P,j,st,ot),Dt.scissor(O.copy(Ct).multiplyScalar(V).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(P){Dt.setScissorTest(Bt=P)},this.setOpaqueSort=function(P){$=P},this.setTransparentSort=function(P){tt=P},this.getClearColor=function(P){return P.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(P=!0,j=!0,st=!0){let ot=0;if(P){let Y=!1;if(C!==null){const Lt=C.texture.format;Y=Lt===yc||Lt===Mc||Lt===_c}if(Y){const Lt=C.texture.type,qt=Lt===Mi||Lt===ys||Lt===Wr||Lt===Ss||Lt===vc||Lt===xc,ne=ae.getClearColor(),ie=ae.getClearAlpha(),ge=ne.r,L=ne.g,N=ne.b;qt?(v[0]=ge,v[1]=L,v[2]=N,v[3]=ie,z.clearBufferuiv(z.COLOR,0,v)):(x[0]=ge,x[1]=L,x[2]=N,x[3]=ie,z.clearBufferiv(z.COLOR,0,x))}else ot|=z.COLOR_BUFFER_BIT}j&&(ot|=z.DEPTH_BUFFER_BIT),st&&(ot|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),Pt.dispose(),re.dispose(),q.dispose(),b.dispose(),H.dispose(),it.dispose(),Se.dispose(),X.dispose(),Ut.dispose(),at.dispose(),at.removeEventListener("sessionstart",Kn),at.removeEventListener("sessionend",U),gt.stop()};function vt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=ee.autoReset,j=Xt.enabled,st=Xt.autoUpdate,ot=Xt.needsUpdate,Y=Xt.type;It(),ee.autoReset=P,Xt.enabled=j,Xt.autoUpdate=st,Xt.needsUpdate=ot,Xt.type=Y}function Ot(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function he(P){const j=P.target;j.removeEventListener("dispose",he),Fe(j)}function Fe(P){Be(P),q.remove(P)}function Be(P){const j=q.get(P).programs;j!==void 0&&(j.forEach(function(st){Ut.releaseProgram(st)}),P.isShaderMaterial&&Ut.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,st,ot,Y,Lt){j===null&&(j=te);const qt=Y.isMesh&&Y.matrixWorld.determinant()<0,ne=nn(P,j,st,ot,Y);Dt.setMaterial(ot,qt);let ie=st.index,ge=1;if(ot.wireframe===!0){if(ie=et.getWireframeAttribute(st),ie===void 0)return;ge=2}const L=st.drawRange,N=st.attributes.position;let J=L.start*ge,ht=(L.start+L.count)*ge;Lt!==null&&(J=Math.max(J,Lt.start*ge),ht=Math.min(ht,(Lt.start+Lt.count)*ge)),ie!==null?(J=Math.max(J,0),ht=Math.min(ht,ie.count)):N!=null&&(J=Math.max(J,0),ht=Math.min(ht,N.count));const xt=ht-J;if(xt<0||xt===1/0)return;Se.setup(Y,ot,ne,st,ie);let Tt,St=jt;if(ie!==null&&(Tt=K.get(ie),St=ye,St.setIndex(Tt)),Y.isMesh)ot.wireframe===!0?(Dt.setLineWidth(ot.wireframeLinewidth*wt()),St.setMode(z.LINES)):St.setMode(z.TRIANGLES);else if(Y.isLine){let Q=ot.linewidth;Q===void 0&&(Q=1),Dt.setLineWidth(Q*wt()),Y.isLineSegments?St.setMode(z.LINES):Y.isLineLoop?St.setMode(z.LINE_LOOP):St.setMode(z.LINE_STRIP)}else Y.isPoints?St.setMode(z.POINTS):Y.isSprite&&St.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)St.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Q=Y._multiDrawStarts,Vt=Y._multiDrawCounts,kt=Y._multiDrawCount,ue=ie?K.get(ie).bytesPerElement:1,Ae=q.get(ot).currentProgram.getUniforms();for(let Re=0;Re<kt;Re++)Ae.setValue(z,"_gl_DrawID",Re),St.render(Q[Re]/ue,Vt[Re])}else if(Y.isInstancedMesh)St.renderInstances(J,xt,Y.count);else if(st.isInstancedBufferGeometry){const Q=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Vt=Math.min(st.instanceCount,Q);St.renderInstances(J,xt,Vt)}else St.render(J,xt)};function we(P,j,st){P.transparent===!0&&P.side===Je&&P.forceSinglePass===!1?(P.side=Pn,P.needsUpdate=!0,se(P,j,st),P.side=ts,P.needsUpdate=!0,se(P,j,st),P.side=Je):se(P,j,st)}this.compile=function(P,j,st=null){st===null&&(st=P),d=re.get(st),d.init(j),S.push(d),st.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),P!==st&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights();const ot=new Set;return P.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Lt=Y.material;if(Lt)if(Array.isArray(Lt))for(let qt=0;qt<Lt.length;qt++){const ne=Lt[qt];we(ne,st,Y),ot.add(ne)}else we(Lt,st,Y),ot.add(Lt)}),S.pop(),d=null,ot},this.compileAsync=function(P,j,st=null){const ot=this.compile(P,j,st);return new Promise(Y=>{function Lt(){if(ot.forEach(function(qt){q.get(qt).currentProgram.isReady()&&ot.delete(qt)}),ot.size===0){Y(P);return}setTimeout(Lt,10)}_t.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let xn=null;function dn(P){xn&&xn(P)}function Kn(){gt.stop()}function U(){gt.start()}const gt=new af;gt.setAnimationLoop(dn),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(P){xn=P,at.setAnimationLoop(P),P===null?gt.stop():gt.start()},at.addEventListener("sessionstart",Kn),at.addEventListener("sessionend",U),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(j),j=at.getCamera()),P.isScene===!0&&P.onBeforeRender(g,P,j,C),d=re.get(P,S.length),d.init(j),S.push(d),zt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),nt.setFromProjectionMatrix(zt),Rt=this.localClippingEnabled,ut=yt.init(this.clippingPlanes,Rt),m=Pt.get(P,y.length),m.init(),y.push(m),at.enabled===!0&&at.isPresenting===!0){const Lt=g.xr.getDepthSensingMesh();Lt!==null&&lt(Lt,j,-1/0,g.sortObjects)}lt(P,j,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort($,tt),dt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,dt&&ae.addToRenderList(m,P),this.info.render.frame++,ut===!0&&yt.beginShadows();const st=d.state.shadowsArray;Xt.render(st,P,j),ut===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=m.opaque,Y=m.transmissive;if(d.setupLights(),j.isArrayCamera){const Lt=j.cameras;if(Y.length>0)for(let qt=0,ne=Lt.length;qt<ne;qt++){const ie=Lt[qt];Qt(ot,Y,P,ie)}dt&&ae.render(P);for(let qt=0,ne=Lt.length;qt<ne;qt++){const ie=Lt[qt];Zt(m,P,ie,ie.viewport)}}else Y.length>0&&Qt(ot,Y,P,j),dt&&ae.render(P),Zt(m,P,j);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(g,P,j),Se.resetDefaultState(),M=-1,_=null,S.pop(),S.length>0?(d=S[S.length-1],ut===!0&&yt.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function lt(P,j,st,ot){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)st=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||nt.intersectsSprite(P)){ot&&$t.setFromMatrixPosition(P.matrixWorld).applyMatrix4(zt);const qt=it.update(P),ne=P.material;ne.visible&&m.push(P,qt,ne,st,$t.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||nt.intersectsObject(P))){const qt=it.update(P),ne=P.material;if(ot&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),$t.copy(P.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),$t.copy(qt.boundingSphere.center)),$t.applyMatrix4(P.matrixWorld).applyMatrix4(zt)),Array.isArray(ne)){const ie=qt.groups;for(let ge=0,L=ie.length;ge<L;ge++){const N=ie[ge],J=ne[N.materialIndex];J&&J.visible&&m.push(P,qt,J,st,$t.z,N)}}else ne.visible&&m.push(P,qt,ne,st,$t.z,null)}}const Lt=P.children;for(let qt=0,ne=Lt.length;qt<ne;qt++)lt(Lt[qt],j,st,ot)}function Zt(P,j,st,ot){const Y=P.opaque,Lt=P.transmissive,qt=P.transparent;d.setupLightsView(st),ut===!0&&yt.setGlobalState(g.clippingPlanes,st),ot&&Dt.viewport(T.copy(ot)),Y.length>0&&Et(Y,j,st),Lt.length>0&&Et(Lt,j,st),qt.length>0&&Et(qt,j,st),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Qt(P,j,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ot.id]===void 0&&(d.state.transmissionRenderTarget[ot.id]=new In(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?jn:Mi,minFilter:ps,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace}));const Lt=d.state.transmissionRenderTarget[ot.id],qt=ot.viewport||T;Lt.setSize(qt.z,qt.w);const ne=g.getRenderTarget();g.setRenderTarget(Lt),g.getClearColor(D),F=g.getClearAlpha(),F<1&&g.setClearColor(16777215,.5),g.clear(),dt&&ae.render(st);const ie=g.toneMapping;g.toneMapping=Qi;const ge=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),d.setupLightsView(ot),ut===!0&&yt.setGlobalState(g.clippingPlanes,ot),Et(P,st,ot),R.updateMultisampleRenderTarget(Lt),R.updateRenderTargetMipmap(Lt),_t.has("WEBGL_multisampled_render_to_texture")===!1){let L=!1;for(let N=0,J=j.length;N<J;N++){const ht=j[N],xt=ht.object,Tt=ht.geometry,St=ht.material,Q=ht.group;if(St.side===Je&&xt.layers.test(ot.layers)){const Vt=St.side;St.side=Pn,St.needsUpdate=!0,Kt(xt,st,ot,Tt,St,Q),St.side=Vt,St.needsUpdate=!0,L=!0}}L===!0&&(R.updateMultisampleRenderTarget(Lt),R.updateRenderTargetMipmap(Lt))}g.setRenderTarget(ne),g.setClearColor(D,F),ge!==void 0&&(ot.viewport=ge),g.toneMapping=ie}function Et(P,j,st){const ot=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,Lt=P.length;Y<Lt;Y++){const qt=P[Y],ne=qt.object,ie=qt.geometry,ge=ot===null?qt.material:ot,L=qt.group;ne.layers.test(st.layers)&&Kt(ne,j,st,ie,ge,L)}}function Kt(P,j,st,ot,Y,Lt){P.onBeforeRender(g,j,st,ot,Y,Lt),P.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(g,j,st,ot,P,Lt),Y.transparent===!0&&Y.side===Je&&Y.forceSinglePass===!1?(Y.side=Pn,Y.needsUpdate=!0,g.renderBufferDirect(st,j,ot,Y,P,Lt),Y.side=ts,Y.needsUpdate=!0,g.renderBufferDirect(st,j,ot,Y,P,Lt),Y.side=Je):g.renderBufferDirect(st,j,ot,Y,P,Lt),P.onAfterRender(g,j,st,ot,Y,Lt)}function se(P,j,st){j.isScene!==!0&&(j=te);const ot=q.get(P),Y=d.state.lights,Lt=d.state.shadowsArray,qt=Y.state.version,ne=Ut.getParameters(P,Y.state,Lt,j,st),ie=Ut.getProgramCacheKey(ne);let ge=ot.programs;ot.environment=P.isMeshStandardMaterial?j.environment:null,ot.fog=j.fog,ot.envMap=(P.isMeshStandardMaterial?H:b).get(P.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&P.envMap===null?j.environmentRotation:P.envMapRotation,ge===void 0&&(P.addEventListener("dispose",he),ge=new Map,ot.programs=ge);let L=ge.get(ie);if(L!==void 0){if(ot.currentProgram===L&&ot.lightsStateVersion===qt)return Ee(P,ne),L}else ne.uniforms=Ut.getUniforms(P),P.onBeforeCompile(ne,g),L=Ut.acquireProgram(ne,ie),ge.set(ie,L),ot.uniforms=ne.uniforms;const N=ot.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(N.clippingPlanes=yt.uniform),Ee(P,ne),ot.needsLights=Jn(P),ot.lightsStateVersion=qt,ot.needsLights&&(N.ambientLightColor.value=Y.state.ambient,N.lightProbe.value=Y.state.probe,N.directionalLights.value=Y.state.directional,N.directionalLightShadows.value=Y.state.directionalShadow,N.spotLights.value=Y.state.spot,N.spotLightShadows.value=Y.state.spotShadow,N.rectAreaLights.value=Y.state.rectArea,N.ltc_1.value=Y.state.rectAreaLTC1,N.ltc_2.value=Y.state.rectAreaLTC2,N.pointLights.value=Y.state.point,N.pointLightShadows.value=Y.state.pointShadow,N.hemisphereLights.value=Y.state.hemi,N.directionalShadowMap.value=Y.state.directionalShadowMap,N.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,N.spotShadowMap.value=Y.state.spotShadowMap,N.spotLightMatrix.value=Y.state.spotLightMatrix,N.spotLightMap.value=Y.state.spotLightMap,N.pointShadowMap.value=Y.state.pointShadowMap,N.pointShadowMatrix.value=Y.state.pointShadowMatrix),ot.currentProgram=L,ot.uniformsList=null,L}function me(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=Ya.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function Ee(P,j){const st=q.get(P);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function nn(P,j,st,ot,Y){j.isScene!==!0&&(j=te),R.resetTextureUnits();const Lt=j.fog,qt=ot.isMeshStandardMaterial?j.environment:null,ne=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:xr,ie=(ot.isMeshStandardMaterial?H:b).get(ot.envMap||qt),ge=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,L=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),N=!!st.morphAttributes.position,J=!!st.morphAttributes.normal,ht=!!st.morphAttributes.color;let xt=Qi;ot.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=g.toneMapping);const Tt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,St=Tt!==void 0?Tt.length:0,Q=q.get(ot),Vt=d.state.lights;if(ut===!0&&(Rt===!0||P!==_)){const Mn=P===_&&ot.id===M;yt.setState(ot,P,Mn)}let kt=!1;ot.version===Q.__version?(Q.needsLights&&Q.lightsStateVersion!==Vt.state.version||Q.outputColorSpace!==ne||Y.isBatchedMesh&&Q.batching===!1||!Y.isBatchedMesh&&Q.batching===!0||Y.isBatchedMesh&&Q.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Q.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Q.instancing===!1||!Y.isInstancedMesh&&Q.instancing===!0||Y.isSkinnedMesh&&Q.skinning===!1||!Y.isSkinnedMesh&&Q.skinning===!0||Y.isInstancedMesh&&Q.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Q.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Q.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Q.instancingMorph===!1&&Y.morphTexture!==null||Q.envMap!==ie||ot.fog===!0&&Q.fog!==Lt||Q.numClippingPlanes!==void 0&&(Q.numClippingPlanes!==yt.numPlanes||Q.numIntersection!==yt.numIntersection)||Q.vertexAlphas!==ge||Q.vertexTangents!==L||Q.morphTargets!==N||Q.morphNormals!==J||Q.morphColors!==ht||Q.toneMapping!==xt||Q.morphTargetsCount!==St)&&(kt=!0):(kt=!0,Q.__version=ot.version);let ue=Q.currentProgram;kt===!0&&(ue=se(ot,j,Y));let Ae=!1,Re=!1,bi=!1;const Ce=ue.getUniforms(),_n=Q.uniforms;if(Dt.useProgram(ue.program)&&(Ae=!0,Re=!0,bi=!0),ot.id!==M&&(M=ot.id,Re=!0),Ae||_!==P){Dt.buffers.depth.getReversed()?(ft.copy(P.projectionMatrix),ep(ft),np(ft),Ce.setValue(z,"projectionMatrix",ft)):Ce.setValue(z,"projectionMatrix",P.projectionMatrix),Ce.setValue(z,"viewMatrix",P.matrixWorldInverse);const Un=Ce.map.cameraPosition;Un!==void 0&&Un.setValue(z,Ht.setFromMatrixPosition(P.matrixWorld)),Nt.logarithmicDepthBuffer&&Ce.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ce.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,Re=!0,bi=!0)}if(Y.isSkinnedMesh){Ce.setOptional(z,Y,"bindMatrix"),Ce.setOptional(z,Y,"bindMatrixInverse");const Mn=Y.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ce.setValue(z,"boneTexture",Mn.boneTexture,R))}Y.isBatchedMesh&&(Ce.setOptional(z,Y,"batchingTexture"),Ce.setValue(z,"batchingTexture",Y._matricesTexture,R),Ce.setOptional(z,Y,"batchingIdTexture"),Ce.setValue(z,"batchingIdTexture",Y._indirectTexture,R),Ce.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ce.setValue(z,"batchingColorTexture",Y._colorsTexture,R));const Qn=st.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&le.update(Y,st,ue),(Re||Q.receiveShadow!==Y.receiveShadow)&&(Q.receiveShadow=Y.receiveShadow,Ce.setValue(z,"receiveShadow",Y.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(_n.envMap.value=ie,_n.flipEnvMap.value=ie.isCubeTexture&&ie.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&j.environment!==null&&(_n.envMapIntensity.value=j.environmentIntensity),Re&&(Ce.setValue(z,"toneMappingExposure",g.toneMappingExposure),Q.needsLights&&Xn(_n,bi),Lt&&ot.fog===!0&&Mt.refreshFogUniforms(_n,Lt),Mt.refreshMaterialUniforms(_n,ot,V,W,d.state.transmissionRenderTarget[P.id]),Ya.upload(z,me(Q),_n,R)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Ya.upload(z,me(Q),_n,R),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ce.setValue(z,"center",Y.center),Ce.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Ce.setValue(z,"normalMatrix",Y.normalMatrix),Ce.setValue(z,"modelMatrix",Y.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Mn=ot.uniformsGroups;for(let Un=0,Nn=Mn.length;Un<Nn;Un++){const Bi=Mn[Un];X.update(Bi,ue),X.bind(Bi,ue)}}return ue}function Xn(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function Jn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,j,st){q.get(P.texture).__webglTexture=j,q.get(P.depthTexture).__webglTexture=st;const ot=q.get(P);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=st===void 0,ot.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,j){const st=q.get(P);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,st=0){C=P,E=j,w=st;let ot=!0,Y=null,Lt=!1,qt=!1;if(P){const ie=q.get(P);if(ie.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(z.FRAMEBUFFER,null),ot=!1;else if(ie.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(ie.__hasExternalTextures)R.rebindTextures(P,q.get(P.texture).__webglTexture,q.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const N=P.depthTexture;if(ie.__boundDepthTexture!==N){if(N!==null&&q.has(N)&&(P.width!==N.image.width||P.height!==N.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const ge=P.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(qt=!0);const L=q.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(L[j])?Y=L[j][st]:Y=L[j],Lt=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?Y=q.get(P).__webglMultisampledFramebuffer:Array.isArray(L)?Y=L[st]:Y=L,T.copy(P.viewport),O.copy(P.scissor),G=P.scissorTest}else T.copy(rt).multiplyScalar(V).floor(),O.copy(Ct).multiplyScalar(V).floor(),G=Bt;if(Dt.bindFramebuffer(z.FRAMEBUFFER,Y)&&ot&&Dt.drawBuffers(P,Y),Dt.viewport(T),Dt.scissor(O),Dt.setScissorTest(G),Lt){const ie=q.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie.__webglTexture,st)}else if(qt){const ie=q.get(P.texture),ge=j||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ie.__webglTexture,st||0,ge)}M=-1},this.readRenderTargetPixels=function(P,j,st,ot,Y,Lt,qt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qt!==void 0&&(ne=ne[qt]),ne){Dt.bindFramebuffer(z.FRAMEBUFFER,ne);try{const ie=P.texture,ge=ie.format,L=ie.type;if(!Nt.textureFormatReadable(ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(L)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-ot&&st>=0&&st<=P.height-Y&&z.readPixels(j,st,ot,Y,ce.convert(ge),ce.convert(L),Lt)}finally{const ie=C!==null?q.get(C).__webglFramebuffer:null;Dt.bindFramebuffer(z.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(P,j,st,ot,Y,Lt,qt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qt!==void 0&&(ne=ne[qt]),ne){const ie=P.texture,ge=ie.format,L=ie.type;if(!Nt.textureFormatReadable(ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(L))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=P.width-ot&&st>=0&&st<=P.height-Y){Dt.bindFramebuffer(z.FRAMEBUFFER,ne);const N=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,N),z.bufferData(z.PIXEL_PACK_BUFFER,Lt.byteLength,z.STREAM_READ),z.readPixels(j,st,ot,Y,ce.convert(ge),ce.convert(L),0);const J=C!==null?q.get(C).__webglFramebuffer:null;Dt.bindFramebuffer(z.FRAMEBUFFER,J);const ht=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await tp(z,ht,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,N),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Lt),z.deleteBuffer(N),z.deleteSync(ht),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,j=null,st=0){P.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1]);const ot=Math.pow(2,-st),Y=Math.floor(P.image.width*ot),Lt=Math.floor(P.image.height*ot),qt=j!==null?j.x:0,ne=j!==null?j.y:0;R.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,st,0,0,qt,ne,Y,Lt),Dt.unbindTexture()},this.copyTextureToTexture=function(P,j,st=null,ot=null,Y=0){P.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,P=arguments[1],j=arguments[2],Y=arguments[3]||0,st=null);let Lt,qt,ne,ie,ge,L,N,J,ht;const xt=P.isCompressedTexture?P.mipmaps[Y]:P.image;st!==null?(Lt=st.max.x-st.min.x,qt=st.max.y-st.min.y,ne=st.isBox3?st.max.z-st.min.z:1,ie=st.min.x,ge=st.min.y,L=st.isBox3?st.min.z:0):(Lt=xt.width,qt=xt.height,ne=xt.depth||1,ie=0,ge=0,L=0),ot!==null?(N=ot.x,J=ot.y,ht=ot.z):(N=0,J=0,ht=0);const Tt=ce.convert(j.format),St=ce.convert(j.type);let Q;j.isData3DTexture?(R.setTexture3D(j,0),Q=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(R.setTexture2DArray(j,0),Q=z.TEXTURE_2D_ARRAY):(R.setTexture2D(j,0),Q=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const Vt=z.getParameter(z.UNPACK_ROW_LENGTH),kt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ue=z.getParameter(z.UNPACK_SKIP_PIXELS),Ae=z.getParameter(z.UNPACK_SKIP_ROWS),Re=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,xt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ie),z.pixelStorei(z.UNPACK_SKIP_ROWS,ge),z.pixelStorei(z.UNPACK_SKIP_IMAGES,L);const bi=P.isDataArrayTexture||P.isData3DTexture,Ce=j.isDataArrayTexture||j.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const _n=q.get(P),Qn=q.get(j),Mn=q.get(_n.__renderTarget),Un=q.get(Qn.__renderTarget);Dt.bindFramebuffer(z.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Dt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Nn=0;Nn<ne;Nn++)bi&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(P).__webglTexture,Y,L+Nn),P.isDepthTexture?(Ce&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(j).__webglTexture,Y,ht+Nn),z.blitFramebuffer(ie,ge,Lt,qt,N,J,Lt,qt,z.DEPTH_BUFFER_BIT,z.NEAREST)):Ce?z.copyTexSubImage3D(Q,Y,N,J,ht+Nn,ie,ge,Lt,qt):z.copyTexSubImage2D(Q,Y,N,J,ht+Nn,ie,ge,Lt,qt);Dt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ce?P.isDataTexture||P.isData3DTexture?z.texSubImage3D(Q,Y,N,J,ht,Lt,qt,ne,Tt,St,xt.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(Q,Y,N,J,ht,Lt,qt,ne,Tt,xt.data):z.texSubImage3D(Q,Y,N,J,ht,Lt,qt,ne,Tt,St,xt):P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Y,N,J,Lt,qt,Tt,St,xt.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Y,N,J,xt.width,xt.height,Tt,xt.data):z.texSubImage2D(z.TEXTURE_2D,Y,N,J,Lt,qt,Tt,St,xt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Vt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,kt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ue),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ae),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Re),Y===0&&j.generateMipmaps&&z.generateMipmap(Q),Dt.unbindTexture()},this.copyTextureToTexture3D=function(P,j,st=null,ot=null,Y=0){return P.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,ot=arguments[1]||null,P=arguments[2],j=arguments[3],Y=arguments[4]||0),Ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,j,st,ot,Y)},this.initRenderTarget=function(P){q.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),Dt.unbindTexture()},this.resetState=function(){E=0,w=0,C=null,Dt.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Pe._getUnpackColorSpace()}}class Pc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=n}clone(){return new Pc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ux extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ao extends bn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=vn,u=vn,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yh extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ys=new Le,$h=new Le,Aa=[],jh=new Cs,fx=new Le,Rr=new oe,Pr=new Mr;class gn extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,fx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),jh.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(jh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Pr.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),t.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),$h.multiplyMatrices(n,Ys),Rr.matrixWorld=$h,Rr.raycast(t,Aa);for(let a=0,o=Aa.length;a<o;a++){const l=Aa[a];l.instanceId=r,l.object=this,e.push(l)}Aa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ao(new Float32Array(s*this.count),s,this.count,io,hi));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class oo extends Rs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zh=new Le,Zl=new wc,Ca=new Mr,Ra=new k;class Dc extends He{constructor(t=new ze,e=new oo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,t.ray.intersectsSphere(Ca)===!1)return;Zh.copy(s).invert(),Zl.copy(t.ray).applyMatrix4(Zh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=f,x=p;v<x;v++){const m=c.getX(v);Ra.fromBufferAttribute(h,m),Kh(Ra,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,x=p;v<x;v++)Ra.fromBufferAttribute(h,v),Kh(Ra,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Kh(i,t,e,n,s,r,a){const o=Zl.distanceSqToPoint(i);if(o<e){const l=new k;Zl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ui extends bn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],f=n[s+1]-u,p=(a-u)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new bt:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new k,s=[],r=[],a=[],o=new k,l=new Le;for(let p=0;p<=t;p++){const v=p/t;s[p]=this.getTangentAt(v,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(un(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(un(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],p*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lc extends Si{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new bt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class dx extends Lc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ic(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,p*=u,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Pa=new k,Yo=new Ic,$o=new Ic,jo=new Ic;class Uc extends Si{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Pa.subVectors(s[0],s[1]).add(s[0]),c=Pa);const h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Pa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Yo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,v,x,m),$o.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,v,x,m),jo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,v,x,m)}else this.curveType==="catmullrom"&&(Yo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),$o.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),jo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Yo.calc(l),$o.calc(l),jo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Jh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function px(i,t){const e=1-i;return e*e*t}function mx(i,t){return 2*(1-i)*i*t}function gx(i,t){return i*i*t}function Or(i,t,e,n){return px(i,t)+mx(i,e)+gx(i,n)}function vx(i,t){const e=1-i;return e*e*e*t}function xx(i,t){const e=1-i;return 3*e*e*i*t}function _x(i,t){return 3*(1-i)*i*i*t}function Mx(i,t){return i*i*i*t}function kr(i,t,e,n,s){return vx(i,t)+xx(i,e)+_x(i,n)+Mx(i,s)}class uf extends Si{constructor(t=new bt,e=new bt,n=new bt,s=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new bt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(t,s.x,r.x,a.x,o.x),kr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yx extends Si{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(t,s.x,r.x,a.x,o.x),kr(t,s.y,r.y,a.y,o.y),kr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ff extends Si{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sx extends Si{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class df extends Si{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Or(t,s.x,r.x,a.x),Or(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bx extends Si{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Or(t,s.x,r.x,a.x),Or(t,s.y,r.y,a.y),Or(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pf extends Si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Jh(o,l.x,c.x,u.x,h.x),Jh(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new bt().fromArray(s))}return this}}var Kl=Object.freeze({__proto__:null,ArcCurve:dx,CatmullRomCurve3:Uc,CubicBezierCurve:uf,CubicBezierCurve3:yx,EllipseCurve:Lc,LineCurve:ff,LineCurve3:Sx,QuadraticBezierCurve:df,QuadraticBezierCurve3:bx,SplineCurve:pf});class wx extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Kl[s.type]().fromJSON(s))}return this}}class Jl extends wx{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ff(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new df(this.currentPoint.clone(),new bt(t,e),new bt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new uf(this.currentPoint.clone(),new bt(t,e),new bt(n,s),new bt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new pf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Lc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Nc extends ze{constructor(t=[new bt(0,-.5),new bt(.5,0),new bt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=un(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,h=new k,f=new bt,p=new k,v=new k,x=new k;let m=0,d=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,p.x=d*1,p.y=-m,p.z=d*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(v)}for(let y=0;y<=e;y++){const S=n+y*u*s,g=Math.sin(S),A=Math.cos(S);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*g,h.y=t[E].y,h.z=t[E].x*A,a.push(h.x,h.y,h.z),f.x=y/e,f.y=E/(t.length-1),o.push(f.x,f.y);const w=l[3*E+0]*g,C=l[3*E+1],M=l[3*E+0]*A;c.push(w,C,M)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){const g=S+y*t.length,A=g,E=g+t.length,w=g+t.length+1,C=g+1;r.push(A,E,C),r.push(w,C,E)}this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("uv",new pe(o,2)),this.setAttribute("normal",new pe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.points,t.segments,t.phiStart,t.phiLength)}}class lo extends Nc{constructor(t=1,e=1,n=4,s=8){const r=new Jl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new lo(t.radius,t.length,t.capSegments,t.radialSegments)}}class dr extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new k,u=new bt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=n+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class We extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let v=0;const x=[],m=n/2;let d=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new pe(h,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(p,2));function y(){const g=new k,A=new k;let E=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const M=[],_=C/r,T=_*(e-t)+t;for(let O=0;O<=s;O++){const G=O/s,D=G*l+o,F=Math.sin(D),B=Math.cos(D);A.x=T*F,A.y=-_*n+m,A.z=T*B,h.push(A.x,A.y,A.z),g.set(F,w,B).normalize(),f.push(g.x,g.y,g.z),p.push(G,1-_),M.push(v++)}x.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){const _=x[M][C],T=x[M+1][C],O=x[M+1][C+1],G=x[M][C+1];(t>0||M!==0)&&(u.push(_,T,G),E+=3),(e>0||M!==r-1)&&(u.push(T,O,G),E+=3)}c.addGroup(d,E,0),d+=E}function S(g){const A=v,E=new bt,w=new k;let C=0;const M=g===!0?t:e,_=g===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*_,0),f.push(0,_,0),p.push(.5,.5),v++;const T=v;for(let O=0;O<=s;O++){const D=O/s*l+o,F=Math.cos(D),B=Math.sin(D);w.x=M*B,w.y=m*_,w.z=M*F,h.push(w.x,w.y,w.z),f.push(0,_,0),E.x=F*.5+.5,E.y=B*.5*_+.5,p.push(E.x,E.y),v++}for(let O=0;O<s;O++){const G=A+O,D=T+O;g===!0?u.push(D,D+1,G):u.push(D+1,D,G),C+=3}c.addGroup(d,C,g===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bn extends We{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Bn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class na extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new k,g=new k,A=new k;for(let E=0;E<e.length;E+=3)p(e[E+0],S),p(e[E+1],g),p(e[E+2],A),l(S,g,A,y)}function l(y,S,g,A){const E=A+1,w=[];for(let C=0;C<=E;C++){w[C]=[];const M=y.clone().lerp(g,C/E),_=S.clone().lerp(g,C/E),T=E-C;for(let O=0;O<=T;O++)O===0&&C===E?w[C][O]=M:w[C][O]=M.clone().lerp(_,O/T)}for(let C=0;C<E;C++)for(let M=0;M<2*(E-C)-1;M++){const _=Math.floor(M/2);M%2===0?(f(w[C][_+1]),f(w[C+1][_]),f(w[C][_])):(f(w[C][_+1]),f(w[C+1][_+1]),f(w[C+1][_]))}}function c(y){const S=new k;for(let g=0;g<r.length;g+=3)S.x=r[g+0],S.y=r[g+1],S.z=r[g+2],S.normalize().multiplyScalar(y),r[g+0]=S.x,r[g+1]=S.y,r[g+2]=S.z}function u(){const y=new k;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const g=m(y)/2/Math.PI+.5,A=d(y)/Math.PI+.5;a.push(g,1-A)}v(),h()}function h(){for(let y=0;y<a.length;y+=6){const S=a[y+0],g=a[y+2],A=a[y+4],E=Math.max(S,g,A),w=Math.min(S,g,A);E>.9&&w<.1&&(S<.2&&(a[y+0]+=1),g<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,S){const g=y*3;S.x=t[g+0],S.y=t[g+1],S.z=t[g+2]}function v(){const y=new k,S=new k,g=new k,A=new k,E=new bt,w=new bt,C=new bt;for(let M=0,_=0;M<r.length;M+=9,_+=6){y.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),g.set(r[M+6],r[M+7],r[M+8]),E.set(a[_+0],a[_+1]),w.set(a[_+2],a[_+3]),C.set(a[_+4],a[_+5]),A.copy(y).add(S).add(g).divideScalar(3);const T=m(A);x(E,_+0,y,T),x(w,_+2,S,T),x(C,_+4,g,T)}}function x(y,S,g,A){A<0&&y.x===1&&(a[S]=y.x-1),g.x===0&&g.z===0&&(a[S]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new na(t.vertices,t.indices,t.radius,t.details)}}class co extends na{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new co(t.radius,t.detail)}}class mf extends Jl{constructor(t){super(t),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Jl().fromJSON(s))}return this}}const Ex={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=gf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,f,p;if(n&&(r=Px(i,t,r,e)),i.length>80*e){o=c=i[0],l=u=i[1];for(let v=e;v<s;v+=e)h=i[v],f=i[v+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return qr(r,a,e,o,l,p,0),a}};function gf(i,t,e,n,s){let r,a;if(s===Gx(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Qh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Qh(r,i[r],i[r+1],a);return a&&ho(a,a.next)&&($r(a),a=a.next),a}function ws(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ho(e,e.next)||Ze(e.prev,e,e.next)===0)){if($r(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Nx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Ax(i,n,s,r):Tx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),$r(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Cx(ws(i),t,e),qr(i,t,e,n,s,r,2)):a===2&&Rx(i,t,e,n,s,r):qr(ws(i),t,e,n,s,r,1);break}}}function Tx(i){const t=i.prev,e=i,n=i.next;if(Ze(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let v=n.next;for(;v!==t;){if(v.x>=u&&v.x<=f&&v.y>=h&&v.y<=p&&Qs(s,o,r,l,a,c,v.x,v.y)&&Ze(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Ax(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ze(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,v=u<h?u<f?u:f:h<f?h:f,x=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=Ql(p,v,t,e,n),y=Ql(x,m,t,e,n);let S=i.prevZ,g=i.nextZ;for(;S&&S.z>=d&&g&&g.z<=y;){if(S.x>=p&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&Qs(o,u,l,h,c,f,S.x,S.y)&&Ze(S.prev,S,S.next)>=0||(S=S.prevZ,g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==a&&Qs(o,u,l,h,c,f,g.x,g.y)&&Ze(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;S&&S.z>=d;){if(S.x>=p&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&Qs(o,u,l,h,c,f,S.x,S.y)&&Ze(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;g&&g.z<=y;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==a&&Qs(o,u,l,h,c,f,g.x,g.y)&&Ze(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Cx(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ho(s,r)&&vf(s,n,n.next,r)&&Yr(s,r)&&Yr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),$r(n),$r(n.next),n=i=r),n=n.next}while(n!==i);return ws(n)}function Rx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ox(a,o)){let l=xf(a,o);a=ws(a,a.next),l=ws(l,l.next),qr(a,t,e,n,s,r,0),qr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Px(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=gf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Fx(c));for(s.sort(Dx),r=0;r<s.length;r++)e=Lx(s[r],e);return e}function Dx(i,t){return i.x-t.x}function Lx(i,t){const e=Ix(i,t);if(!e)return t;const n=xf(e,i);return ws(n,n.next),ws(e,e.next)}function Ix(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Qs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),Yr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Ux(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function Ux(i,t){return Ze(i.prev,i,t.prev)<0&&Ze(t.next,i,i.next)<0}function Nx(i,t,e,n){let s=i;do s.z===0&&(s.z=Ql(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,zx(s)}function zx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Ql(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ox(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!kx(i,t)&&(Yr(i,t)&&Yr(t,i)&&Bx(i,t)&&(Ze(i.prev,i,t.prev)||Ze(i,t.prev,t))||ho(i,t)&&Ze(i.prev,i,i.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ho(i,t){return i.x===t.x&&i.y===t.y}function vf(i,t,e,n){const s=La(Ze(i,t,e)),r=La(Ze(i,t,n)),a=La(Ze(e,n,i)),o=La(Ze(e,n,t));return!!(s!==r&&a!==o||s===0&&Da(i,e,t)||r===0&&Da(i,n,t)||a===0&&Da(e,i,n)||o===0&&Da(e,t,n))}function Da(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function La(i){return i>0?1:i<0?-1:0}function kx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Yr(i,t){return Ze(i.prev,i,i.next)<0?Ze(i,t,i.next)>=0&&Ze(i,i.prev,t)>=0:Ze(i,t,i.prev)<0||Ze(i,i.next,t)<0}function Bx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xf(i,t){const e=new tc(i.i,i.x,i.y),n=new tc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qh(i,t,e,n){const s=new tc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Gx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Br{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Br.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];tu(t),eu(n,t);let a=t.length;e.forEach(tu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,eu(n,e[l]);const o=Ex.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function tu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function eu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class zc extends ze{constructor(t=new mf([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Vx;let S,g=!1,A,E,w,C;d&&(S=d.getSpacedPoints(u),g=!0,f=!1,A=d.computeFrenetFrames(u,!1),E=new k,w=new k,C=new k),f||(m=0,p=0,v=0,x=0);const M=o.extractPoints(c);let _=M.shape;const T=M.holes;if(!Br.isClockWise(_)){_=_.reverse();for(let dt=0,wt=T.length;dt<wt;dt++){const z=T[dt];Br.isClockWise(z)&&(T[dt]=z.reverse())}}const G=Br.triangulateShape(_,T),D=_;for(let dt=0,wt=T.length;dt<wt;dt++){const z=T[dt];_=_.concat(z)}function F(dt,wt,z){return wt||console.error("THREE.ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(wt,z)}const B=_.length,W=G.length;function V(dt,wt,z){let Wt,_t,Nt;const Dt=dt.x-wt.x,ee=dt.y-wt.y,q=z.x-dt.x,R=z.y-dt.y,b=Dt*Dt+ee*ee,H=Dt*R-ee*q;if(Math.abs(H)>Number.EPSILON){const K=Math.sqrt(b),et=Math.sqrt(q*q+R*R),it=wt.x-ee/K,Ut=wt.y+Dt/K,Mt=z.x-R/et,Pt=z.y+q/et,re=((Mt-it)*R-(Pt-Ut)*q)/(Dt*R-ee*q);Wt=it+Dt*re-dt.x,_t=Ut+ee*re-dt.y;const yt=Wt*Wt+_t*_t;if(yt<=2)return new bt(Wt,_t);Nt=Math.sqrt(yt/2)}else{let K=!1;Dt>Number.EPSILON?q>Number.EPSILON&&(K=!0):Dt<-Number.EPSILON?q<-Number.EPSILON&&(K=!0):Math.sign(ee)===Math.sign(R)&&(K=!0),K?(Wt=-ee,_t=Dt,Nt=Math.sqrt(b)):(Wt=Dt,_t=ee,Nt=Math.sqrt(b/2))}return new bt(Wt/Nt,_t/Nt)}const $=[];for(let dt=0,wt=D.length,z=wt-1,Wt=dt+1;dt<wt;dt++,z++,Wt++)z===wt&&(z=0),Wt===wt&&(Wt=0),$[dt]=V(D[dt],D[z],D[Wt]);const tt=[];let rt,Ct=$.concat();for(let dt=0,wt=T.length;dt<wt;dt++){const z=T[dt];rt=[];for(let Wt=0,_t=z.length,Nt=_t-1,Dt=Wt+1;Wt<_t;Wt++,Nt++,Dt++)Nt===_t&&(Nt=0),Dt===_t&&(Dt=0),rt[Wt]=V(z[Wt],z[Nt],z[Dt]);tt.push(rt),Ct=Ct.concat(rt)}for(let dt=0;dt<m;dt++){const wt=dt/m,z=p*Math.cos(wt*Math.PI/2),Wt=v*Math.sin(wt*Math.PI/2)+x;for(let _t=0,Nt=D.length;_t<Nt;_t++){const Dt=F(D[_t],$[_t],Wt);ft(Dt.x,Dt.y,-z)}for(let _t=0,Nt=T.length;_t<Nt;_t++){const Dt=T[_t];rt=tt[_t];for(let ee=0,q=Dt.length;ee<q;ee++){const R=F(Dt[ee],rt[ee],Wt);ft(R.x,R.y,-z)}}}const Bt=v+x;for(let dt=0;dt<B;dt++){const wt=f?F(_[dt],Ct[dt],Bt):_[dt];g?(w.copy(A.normals[0]).multiplyScalar(wt.x),E.copy(A.binormals[0]).multiplyScalar(wt.y),C.copy(S[0]).add(w).add(E),ft(C.x,C.y,C.z)):ft(wt.x,wt.y,0)}for(let dt=1;dt<=u;dt++)for(let wt=0;wt<B;wt++){const z=f?F(_[wt],Ct[wt],Bt):_[wt];g?(w.copy(A.normals[dt]).multiplyScalar(z.x),E.copy(A.binormals[dt]).multiplyScalar(z.y),C.copy(S[dt]).add(w).add(E),ft(C.x,C.y,C.z)):ft(z.x,z.y,h/u*dt)}for(let dt=m-1;dt>=0;dt--){const wt=dt/m,z=p*Math.cos(wt*Math.PI/2),Wt=v*Math.sin(wt*Math.PI/2)+x;for(let _t=0,Nt=D.length;_t<Nt;_t++){const Dt=F(D[_t],$[_t],Wt);ft(Dt.x,Dt.y,h+z)}for(let _t=0,Nt=T.length;_t<Nt;_t++){const Dt=T[_t];rt=tt[_t];for(let ee=0,q=Dt.length;ee<q;ee++){const R=F(Dt[ee],rt[ee],Wt);g?ft(R.x,R.y+S[u-1].y,S[u-1].x+z):ft(R.x,R.y,h+z)}}}nt(),ut();function nt(){const dt=s.length/3;if(f){let wt=0,z=B*wt;for(let Wt=0;Wt<W;Wt++){const _t=G[Wt];zt(_t[2]+z,_t[1]+z,_t[0]+z)}wt=u+m*2,z=B*wt;for(let Wt=0;Wt<W;Wt++){const _t=G[Wt];zt(_t[0]+z,_t[1]+z,_t[2]+z)}}else{for(let wt=0;wt<W;wt++){const z=G[wt];zt(z[2],z[1],z[0])}for(let wt=0;wt<W;wt++){const z=G[wt];zt(z[0]+B*u,z[1]+B*u,z[2]+B*u)}}n.addGroup(dt,s.length/3-dt,0)}function ut(){const dt=s.length/3;let wt=0;Rt(D,wt),wt+=D.length;for(let z=0,Wt=T.length;z<Wt;z++){const _t=T[z];Rt(_t,wt),wt+=_t.length}n.addGroup(dt,s.length/3-dt,1)}function Rt(dt,wt){let z=dt.length;for(;--z>=0;){const Wt=z;let _t=z-1;_t<0&&(_t=dt.length-1);for(let Nt=0,Dt=u+m*2;Nt<Dt;Nt++){const ee=B*Nt,q=B*(Nt+1),R=wt+Wt+ee,b=wt+_t+ee,H=wt+_t+q,K=wt+Wt+q;Ht(R,b,H,K)}}}function ft(dt,wt,z){l.push(dt),l.push(wt),l.push(z)}function zt(dt,wt,z){$t(dt),$t(wt),$t(z);const Wt=s.length/3,_t=y.generateTopUV(n,s,Wt-3,Wt-2,Wt-1);te(_t[0]),te(_t[1]),te(_t[2])}function Ht(dt,wt,z,Wt){$t(dt),$t(wt),$t(Wt),$t(wt),$t(z),$t(Wt);const _t=s.length/3,Nt=y.generateSideWallUV(n,s,_t-6,_t-3,_t-2,_t-1);te(Nt[0]),te(Nt[1]),te(Nt[3]),te(Nt[1]),te(Nt[2]),te(Nt[3])}function $t(dt){s.push(l[dt*3+0]),s.push(l[dt*3+1]),s.push(l[dt*3+2])}function te(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Kl[s.type]().fromJSON(s)),new zc(n,t.options)}}const Vx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new bt(r,a),new bt(o,l),new bt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],p=t[s*3+1],v=t[s*3+2],x=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new bt(a,1-l),new bt(c,1-h),new bt(f,1-v),new bt(x,1-d)]:[new bt(o,1-l),new bt(u,1-h),new bt(p,1-v),new bt(m,1-d)]}};function Hx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class vs extends na{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vs(t.radius,t.detail)}}class pr extends na{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new pr(t.radius,t.detail)}}class es extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,p=new k,v=new bt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/e+1)/2,v.y=(p.y/e+1)/2,u.push(v.x,v.y)}h+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let d=0;d<n;d++){const y=d+m,S=y,g=y+n+1,A=y+n+2,E=y+1;o.push(S,g,E),o.push(g,A,E)}}this.setIndex(o),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Gn extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new k,f=new k,p=[],v=[],x=[],m=[];for(let d=0;d<=n;d++){const y=[],S=d/n;let g=0;d===0&&a===0?g=.5/e:d===n&&l===Math.PI&&(g=-.5/e);for(let A=0;A<=e;A++){const E=A/e;h.x=-t*Math.cos(s+E*r)*Math.sin(a+S*o),h.y=t*Math.cos(a+S*o),h.z=t*Math.sin(s+E*r)*Math.sin(a+S*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(E+g,1-S),y.push(c++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const S=u[d][y+1],g=u[d][y],A=u[d+1][y],E=u[d+1][y+1];(d!==0||a>0)&&p.push(S,g,E),(d!==n-1||l<Math.PI)&&p.push(g,A,E)}this.setIndex(p),this.setAttribute("position",new pe(v,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nr extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new k,h=new k,f=new k;for(let p=0;p<=n;p++)for(let v=0;v<=s;v++){const x=v/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=s;v++){const x=(s+1)*p+v-1,m=(s+1)*(p-1)+v-1,d=(s+1)*(p-1)+v,y=(s+1)*p+v;a.push(x,m,y),a.push(m,d,y)}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Wx extends je{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Xx extends Rs{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sc,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Xe extends Rs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sc,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fc extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class qx extends Fc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Zo=new Le,nu=new k,iu=new k;class _f{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tc,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(nu),iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(iu),e.updateMatrixWorld(),Zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const su=new Le,Dr=new k,Ko=new k;class Yx extends _f{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Dr),Ko.copy(n.position),Ko.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ko),n.updateMatrixWorld(),s.makeTranslation(-Dr.x,-Dr.y,-Dr.z),su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su)}}class jr extends Fc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $x extends _f{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jx extends Fc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new $x}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Mf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ru(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ru();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ru(){return performance.now()}const au=new Le;class Zx{constructor(t,e,n=0,s=1/0){this.ray=new wc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ec,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return au.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(au),this}intersectObject(t,e=!0,n=[]){return ec(t,this,n,e),n.sort(ou),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ec(t[s],this,n,e);return n.sort(ou),n}}function ou(i,t){return i.distance-t.distance}function ec(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ec(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);const en=(i,t={})=>new Xe({color:i,flatShading:!0,...t});function Yi(i){const t=i.map(a=>a.toNonIndexed()),e=t.reduce((a,o)=>a+o.attributes.position.count,0),n=new Float32Array(e*3);let s=0;for(const a of t)n.set(a.attributes.position.array,s),s+=a.attributes.position.array.length;const r=new ze;return r.setAttribute("position",new Ve(n,3)),r.computeVertexNormals(),r}function Kx(i,t,e,n,s,r){const a=r.id,{heightAt:o,pathDist:l,plinths:c}=t,u=t.lighthouse.pos,h=new He,f=new At,p=[],v=(U,gt,lt,Zt=2,Qt=5)=>l(U,gt)>lt&&Math.hypot(U-u.x,gt-u.z)>Qt&&!c.some(Et=>Math.hypot(Et.x-U,Et.z-gt)<Zt),x=(U,gt,lt=U*20)=>{const Zt=[];for(let Qt=0;Qt<lt&&Zt.length<U;Qt++){const Et=(n()-.5)*104,Kt=(n()-.5)*104,se=o(Et,Kt);gt(Et,Kt,se)&&Zt.push({x:Et,z:Kt,h:se,r:n(),s:n()})}return Zt},m=(U,gt,lt,Zt,Qt=!1)=>{const Et=new gn(U,gt,Math.max(1,lt.length));return Et.count=lt.length,lt.forEach((Kt,se)=>{Zt(Kt,se,Et),h.updateMatrix(),Et.setMatrixAt(se,h.matrix)}),Et.instanceColor&&(Et.instanceColor.needsUpdate=!0),Et.castShadow=Qt,Et.receiveShadow=!0,i.add(Et),Et},d=(e.mobile?.55:1)*1.8,y=(()=>{const U=[[-.9,.5,.05],[-.45,.68,-.06],[0,.78,.02],[.45,.66,-.04],[.9,.48,.06]].map(([Qt,Et,Kt])=>{const se=new Bn(.045,Et,3);return se.translate(0,Et/2,0),se.rotateZ(Qt*.45),se.rotateX(Kt*3),se.translate(Qt*.09,0,Kt),se}),gt=Yi(U),lt=gt.attributes.position,Zt=[];for(let Qt=0;Qt<lt.count;Qt++){const Et=xe.clamp(lt.getY(Qt)/.7,0,1),Kt=.5+.7*Et;Zt.push(Kt,Kt,Kt*.95)}return gt.setAttribute("color",new pe(Zt,3)),gt})(),S=x(Math.round(280*d),(U,gt,lt)=>lt>.8&&v(U,gt,1.7,1.7,4.4));m(y,en("#ffffff",{vertexColors:!0}),S,(U,gt,lt)=>{h.position.set(U.x,U.h-.05,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.s*.7),lt.setColorAt(gt,f.set(a==="vinter"?U.s<.5?"#c8d4c0":"#e6eef4":a==="vulkan"?U.s<.5?"#5a6a3a":"#7a7a4a":U.s<.5?"#7fae4e":"#9cc45e"))});const g=x(Math.round((a==="vinter"?0:a==="vulkan"?30:120)*d),(U,gt,lt)=>lt>.85&&v(U,gt,1.9,2,4.5)),A=new We(.025,.03,.4,4);A.translate(0,.2,0);const E=new vs(.11,0);E.translate(0,.42,0);const w=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];if(m(A,en("#5f8f3a"),g,U=>{h.position.set(U.x,U.h-.03,U.z),h.rotation.set(0,0,0),h.scale.setScalar(.9+U.s*.6)}),m(E,en("#ffffff"),g,(U,gt,lt)=>{h.position.set(U.x,U.h-.03,U.z),h.scale.setScalar(.9+U.s*.6),lt.setColorAt(gt,f.set(w[Math.floor(U.r*w.length)]))}),a!=="vulkan"){const U=(()=>{const Zt=[],Qt=[];for(let se=0;se<8;se++){const me=se/8*Math.PI*2,Ee=.32;Zt.push(0,0,0,Math.cos(me)*.12,0,Math.sin(me)*.12,Math.cos(me-Ee)*.045,0,Math.sin(me-Ee)*.045),Zt.push(0,0,0,Math.cos(me+Ee)*.045,0,Math.sin(me+Ee)*.045,Math.cos(me)*.12,0,Math.sin(me)*.12);for(let nn=0;nn<6;nn++)Qt.push(1,1,1)}for(let se=0;se<6;se++){const me=se/6*Math.PI*2,Ee=(se+1)/6*Math.PI*2;Zt.push(0,.012,0,Math.cos(Ee)*.035,.012,Math.sin(Ee)*.035,Math.cos(me)*.035,.012,Math.sin(me)*.035);for(let nn=0;nn<3;nn++)Qt.push(1,.78,.18)}const Kt=new ze;return Kt.setAttribute("position",new pe(Zt,3)),Kt.setAttribute("color",new pe(Qt,3)),Kt.setAttribute("normal",new pe(new Array(Zt.length/3).fill(0).flatMap(()=>[0,1,0]),3)),Kt})(),gt=x(Math.round((a==="vinter"?10:60)*d),(Zt,Qt,Et)=>Et>.9&&v(Zt,Qt,1.6,2,4.5)),lt=[];for(const Zt of gt){const Qt=5+Math.floor(Zt.r*9);for(let Et=0;Et<Qt;Et++){const Kt=n()*6.28,se=Math.sqrt(n())*1.6,me=Zt.x+Math.cos(Kt)*se,Ee=Zt.z+Math.sin(Kt)*se,nn=o(me,Ee);nn>.85&&v(me,Ee,1.4,2,4.5)&&lt.push({x:me,z:Ee,h:nn,r:n(),s:n()})}}m(U,new Xe({color:"#ffffff",vertexColors:!0,side:Je}),lt,(Zt,Qt,Et)=>{h.position.set(Zt.x,Zt.h+.035,Zt.z),h.rotation.set((Zt.s-.5)*.3,Zt.r*6.28,0),h.scale.setScalar(1.3+Zt.s*.7),Et.setColorAt(Qt,f.setRGB(1,.97+Zt.r*.03,.94+Zt.s*.06))})}const C=x(Math.round((a==="tak"?36:0)*d),(U,gt,lt)=>lt>1&&v(U,gt,2.4,2.4,5)),M=new Gn(.22,8,4,0,Math.PI*2,0,Math.PI/2);M.scale(1,.7,1),M.translate(0,.28,0);const _=new We(.07,.09,.3,6);_.translate(0,.14,0),m(_,en("#f4ead6"),C,U=>{h.position.set(U.x,U.h-.03,U.z),h.rotation.set(0,0,(U.r-.5)*.3),h.scale.setScalar(.8+U.s)},!0),m(M,en("#ffffff"),C,(U,gt,lt)=>{h.position.set(U.x,U.h-.03,U.z),h.rotation.set(0,0,(U.r-.5)*.3),h.scale.setScalar(.8+U.s),lt.setColorAt(gt,f.set(U.r<.6?"#d8453a":"#c89a5a"))},!0);const T=Yi([[-.08,0],[.07,.05],[0,-.07]].map(([U,gt],lt)=>{const Zt=new Bn(.04,1.1+lt*.2,3);return Zt.translate(U,.55+lt*.1,gt),Zt}).concat([(()=>{const U=new lo(.05,.18,2,4);return U.translate(.07,1.25,.05),U})()])),O=x(Math.round(150*d),(U,gt,lt)=>lt>.05&&lt<.55&&v(U,gt,2.2,2,5),6e3),G=m(T,en(a==="vinter"?"#a89878":a==="vulkan"?"#5a5a3a":"#9aa856"),O,U=>{h.position.set(U.x,U.h-.1,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.s*.6)}),D=[],F=[];for(const U of t.paths)for(const gt of[-1,1]){let lt=null,Zt=0,Qt=0;for(let Et=2;Et<U.length-7;Et+=1.7){const Kt=Et/U.length,se=U.curve.getPointAt(Kt),me=U.curve.getTangentAt(Kt),Ee=se.x-me.z*gt*2.25,nn=se.z+me.x*gt*2.25,Xn=o(Ee,nn);if(!(Xn>.5&&Qt<=0&&v(Ee,nn,1.9,2.6,6))){lt=null,Qt>0&&Qt--;continue}D.push({x:Ee,z:nn,h:Xn}),lt&&F.push({a:lt,b:{x:Ee,z:nn,h:Xn}}),lt={x:Ee,z:nn,h:Xn},++Zt>4+Math.floor(n()*5)&&(Zt=0,lt=null,Qt=3+Math.floor(n()*5))}}const B=new Cn(.14,.8,.14);B.translate(0,.4,0);const W=new Cn(1,.07,.06),V=en("#a07650");m(B,V,D,U=>{h.position.set(U.x,U.h-.05,U.z),h.rotation.set(0,n()*.3,(n()-.5)*.12),h.scale.set(1,1,1)},!0);const $=F.flatMap(U=>[{...U,y:.32},{...U,y:.62}]);m(W,V,$,({a:U,b:gt,y:lt})=>{const Zt=Math.hypot(gt.x-U.x,gt.z-U.z);h.position.set((U.x+gt.x)/2,(U.h+gt.h)/2+lt-.05,(U.z+gt.z)/2),h.rotation.set(0,-Math.atan2(gt.z-U.z,gt.x-U.x),0),h.scale.set(Zt,1,1)},!0);const tt=r.dockTheta??-2.35,rt=new bt(Math.cos(tt),Math.sin(tt)),Ct=s(tt);let Bt=Ct-6;for(let U=Ct-10;U<Ct+4;U+=.25)if(o(rt.x*U,rt.y*U)<.3){Bt=U;break}const nt=new _e,ut=en("#b48a5e"),Rt=en("#6e4a2c"),ft=8,zt=Bt-2.5;for(let U=0;U<ft/.55;U++){const gt=new oe(new Cn(.5,.12,2.2),ut);gt.position.set(zt+U*.55,.75+(n()-.5)*.04,0),gt.rotation.y=(n()-.5)*.05,gt.castShadow=gt.receiveShadow=!0,nt.add(gt)}for(let U=0;U<=ft;U+=2)for(const gt of[-1,1]){const lt=new oe(new We(.12,.12,2.2,6),Rt);lt.position.set(zt+U,.1,gt*1.05),lt.castShadow=!0,nt.add(lt)}nt.rotation.y=-tt,i.add(nt);const Ht=new _e,$t=new We(.9,.9,3.4,10,1,!0,0,Math.PI);$t.rotateZ(Math.PI/2),$t.rotateX(Math.PI/2),$t.scale(1,.6,.7);const te=new oe($t,en("#3f6f9a",{side:Je}));te.rotation.y=Math.PI/2,te.castShadow=!0,Ht.add(te);for(const U of[-.6,.6]){const gt=new oe(new Cn(.3,.08,1.2),ut);gt.position.set(U,-.15,0),Ht.add(gt)}const dt=new oe(new Cn(2.4,.06,.12),ut);dt.position.set(.2,.05,.4),dt.rotation.y=.3,Ht.add(dt);const wt=rt.x*(zt+ft-1)+-rt.y*2.1,z=rt.y*(zt+ft-1)+rt.x*2.1;Ht.position.set(wt,.3,z),Ht.rotation.y=-tt,i.add(Ht);const Wt=new _e,_t=new oe(new Zn(3,1.4,10,5),new De({color:"#4a3a2a",wireframe:!0}));_t.position.y=1;const Nt=_t.geometry.attributes.position;for(let U=0;U<Nt.count;U++)Nt.setZ(U,Math.sin(Nt.getX(U)/3*Math.PI+1.5)*.15-Math.abs(Nt.getY(U))*.05);Wt.add(_t);for(const U of[-1.6,1.6]){const gt=new oe(new We(.07,.09,2,5),Rt);gt.position.set(U,.9,0),gt.castShadow=!0,Wt.add(gt)}for(let U=0;U<5;U++){const gt=new oe(new Gn(.09,6,4),en("#f0a43a"));gt.position.set(-1.2+U*.6,1.66,.05),Wt.add(gt)}const Dt=Bt-4.5,ee=4.2,q=rt.x*Dt-rt.y*ee,R=rt.y*Dt+rt.x*ee;Wt.position.set(q,o(q,R)-.1,R),Wt.rotation.y=-tt+Math.PI/2,i.add(Wt),p.push({x:q,z:R,r:1.4});const b=new We(.42,.42,.95,10);b.translate(0,.47,0);const H=new We(.44,.44,.08,10),K=new Cn(.8,.8,.8);K.translate(0,.4,0);const et=[],it=(U,gt,lt,Zt)=>{for(let Qt=0;Qt<60&&lt>0;Qt++){const Et=U+(n()-.5)*6,Kt=gt+(n()-.5)*6,se=o(Et,Kt);se<.4||!v(Et,Kt,2.3,2.4,4.6)||et.some(me=>Math.hypot(me.x-Et,me.z-Kt)<1.1)||(et.push({x:Et,z:Kt,h:se,kind:Zt??(n()<.6?"barrel":"crate"),r:n()}),lt--)}};it(rt.x*(Bt-2.5),rt.y*(Bt-2.5),5),it(u.x+6,u.z+1,3,"barrel"),it(u.x-6,u.z+2,2);const Ut=et.filter(U=>U.kind==="barrel"),Mt=et.filter(U=>U.kind==="crate");m(b,en("#8a5a36"),Ut,U=>{h.position.set(U.x,U.h-.05,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(1)},!0),m(H,en("#3e3a38"),Ut.flatMap(U=>[{...U,y:.2},{...U,y:.75}]),U=>{h.position.set(U.x,U.h-.05+U.y,U.z)},!1),m(K,en("#b8925e"),Mt,U=>{h.position.set(U.x,U.h-.05,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.r*.4)},!0);for(const U of et)p.push({x:U.x,z:U.z,r:.55});const Pt=x(Math.round(380*d),(U,gt,lt)=>lt>.9&&v(U,gt,1.6,1.6,4.4)),re=new vs(.06,0);re.translate(0,.06,0),m(re,new Xe({color:a==="vulkan"?"#ff9a5a":"#fffdf4"}),Pt,U=>{h.position.set(U.x,U.h-.02,U.z),h.rotation.set(0,0,0),h.scale.setScalar(.8+U.s*.8)});const yt=(U,gt,lt)=>{const Zt=[];for(let Qt=0;Qt<U*40&&Zt.length<U;Qt++){const Et=(n()-.5)*130,Kt=(n()-.5)*130,se=o(Et,Kt),me=.05-se;me>gt&&me<lt&&Math.hypot(Et-u.x,Kt-u.z)>6&&Zt.push({x:Et,z:Kt,h:se,r:n(),s:n()})}return Zt},Xt=Yi([0,1,2].map(U=>{const gt=new Bn(.08,.9+U*.25,3);return gt.translate((U-1)*.12,.45+U*.12,U%2*.1),gt.rotateZ((U-1)*.25),gt})),ae=yt(Math.round(90*d),.35,1.8),le=m(Xt,en("#4f9a5a"),ae,U=>{h.position.set(U.x,U.h,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.s*.7)}),jt=Yi([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([U,gt,lt])=>{const Zt=new vs(lt,0);return Zt.translate(U,lt*.8,gt),Zt})),ye=yt(Math.round((a==="tak"?28:0)*d),.5,1.6),ce=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];if(m(jt,en("#ffffff"),ye,(U,gt,lt)=>{h.position.set(U.x,U.h,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.s*.9),lt.setColorAt(gt,f.set(ce[Math.floor(U.r*ce.length)]))}),a==="tak"){const U=Yi([[0,0,0,.55],[.12,.05,.4,.42],[-.13,-.04,-.45,.4],[.05,.12,.2,.33],[-.06,-.1,-.15,.36]].map(([Et,Kt,se,me])=>{const Ee=new Bn(.05,me,4);return Ee.translate(0,me/2,0),Ee.rotateZ(se),Ee.rotateX(Kt*2),Ee.translate(Et,0,Kt),Ee})),gt=Yi([(()=>{const Et=new We(.12,.16,.12,7);return Et.translate(0,.06,0),Et})(),...Array.from({length:7},(Et,Kt)=>{const se=new Bn(.025,.2,3),me=Kt/7*6.28;return se.translate(0,.1,0),se.rotateZ(.5),se.rotateY(me),se.translate(Math.cos(me)*.08,.12,-Math.sin(me)*.08),se})]),lt=x(Math.round(16*d),(Et,Kt,se)=>.05-se>.08&&t.landDist(Et,Kt)>5,3e4).map(Et=>({...Et,big:2.4,pool:!0})),Zt=[...yt(Math.round(36*d),.12,.9),...lt],Qt=["#ff5a80","#a060ff","#ffb820","#ff5a2a","#ff7ad0","#f4d070"];m(U,en("#ffffff"),Zt.filter((Et,Kt)=>Kt%2===0),(Et,Kt,se)=>{h.position.set(Et.x,Et.h-.02,Et.z),h.rotation.set(0,Et.r*6,0),h.scale.setScalar((.8+Et.s*.8)*(Et.big??1)),se.setColorAt(Kt,f.set(Qt[Math.floor(Et.r*Qt.length)]).multiplyScalar(Et.pool?1.6:1))}),m(gt,en("#ffffff"),Zt.filter((Et,Kt)=>Kt%2===1),(Et,Kt,se)=>{h.position.set(Et.x,Et.h-.02,Et.z),h.rotation.set(0,Et.r*6,0),h.scale.setScalar((.9+Et.s*.9)*(Et.big??1)),se.setColorAt(Kt,f.set(Qt[(Math.floor(Et.s*Qt.length)+2)%Qt.length]).multiplyScalar(Et.pool?1.6:1))})}const Se=Yi([(()=>{const U=new Gn(.17,7,4);return U.scale(1.2,.5,.85),U.translate(0,.07,0),U})(),...[-1,1].map(U=>{const gt=new Gn(.06,5,3);return gt.scale(1.3,.7,1),gt.translate(U*.17,.08,.15),gt}),...[-1,1].flatMap(U=>[0,1,2].map(gt=>{const lt=new Cn(.16,.02,.02);return lt.rotateZ(U*-.5),lt.translate(U*.18,.04,-.06+gt*.07),lt})),...[-1,1].map(U=>{const gt=new Gn(.025,4,3);return gt.translate(U*.05,.13,.09),gt})]),X=a==="vulkan"?[]:x(Math.round((a==="vinter"?5:18)*d),(U,gt,lt)=>lt>.08&&lt<.42&&v(U,gt,2.2,2,5),12e3).map(U=>({...U,home:{x:U.x,z:U.z},dir:U.r*6.28,t:U.s*4,run:0})),It=m(Se,en(a==="vinter"?"#b8584a":"#d8553a"),X,U=>{h.position.set(U.x,U.h,U.z),h.rotation.set(0,U.dir,0),h.scale.setScalar(1)},!0),at=Yi([(()=>{const gt=new Gn(.07,6,4);return gt.scale(.6,.5,1.4),gt})(),(()=>{const gt=new Bn(.06,.1,3);return gt.rotateX(-Math.PI/2),gt.translate(0,0,-.13),gt})()]),vt=[...yt(Math.round(26*d),.1,.8),...x(Math.round(12*d),(U,gt,lt)=>.05-lt>.12&&t.landDist(U,gt)>5,3e4).map(U=>({...U,big:1.5}))].map(U=>({...U,rad:.5+U.s*.9,sp:(.5+U.r)*(U.s<.5?1:-1)})),Ft=["#ff9a3a","#3a7ad8","#f2c94c","#2f8f9a"],Ot=m(at,en("#ffffff"),vt,(U,gt,lt)=>{h.position.set(U.x,U.h,U.z),lt.setColorAt(gt,f.set(Ft[gt%Ft.length]))}),he=new pr(.16,0);he.scale(.45,.3,1.4);const Fe=yt(e.mobile?5:8,.9,2.6).map(U=>({...U,rad:2+U.s*3,speed:(.25+U.r*.3)*(U.r<.5?1:-1)})),Be=9,we=new gn(he,new De({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,Fe.length*Be));we.count=Fe.length*Be,we.renderOrder=1,i.add(we);const xn=Array.from({length:Be},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),dn=U=>{Ht.position.y=.3+Math.sin(U*1.2)*.08,Ht.rotation.z=Math.sin(U*.9)*.04,Ht.rotation.x=Math.sin(U*1.3+1)*.03,Fe.forEach((lt,Zt)=>{const Qt=U*lt.speed+lt.r*6,Et=lt.x+Math.cos(Qt)*lt.rad,Kt=lt.z+Math.sin(Qt)*lt.rad,se=Math.atan2(-Math.sin(Qt)*lt.speed,Math.cos(Qt)*lt.speed);for(let me=0;me<Be;me++){const[Ee,nn,Xn,Jn]=xn[me];h.position.set(Et+Ee+Math.sin(U*2+Jn)*.1,Math.max(o(Et,Kt)+.25,-.75)+nn,Kt+Xn),h.rotation.set(0,se+Math.sin(U*6+Jn)*.15,0),h.scale.setScalar(1),h.updateMatrix(),we.setMatrixAt(Zt*Be+me,h.matrix)}}),we.instanceMatrix.needsUpdate=!0,vt.forEach((lt,Zt)=>{const Qt=U*lt.sp+lt.r*6+Math.sin(U*.7+Zt)*.6,Et=lt.x+Math.cos(Qt)*lt.rad,Kt=lt.z+Math.sin(Qt)*lt.rad;h.position.set(Et,Math.min(o(Et,Kt)+.08,0),Kt),h.rotation.set(0,-Qt+(lt.sp>0?0:Math.PI),Math.sin(U*9+Zt)*.2),h.scale.setScalar((.9+lt.s*.5)*(lt.big??1)),h.updateMatrix(),Ot.setMatrixAt(Zt,h.matrix)}),Ot.instanceMatrix.needsUpdate=!0;const gt=Math.min(.05,Math.max(0,U-(dn.last??U)));dn.last=U,X.forEach((lt,Zt)=>{if(lt.t-=gt,lt.t<=0&&(lt.run>0?(lt.run=0,lt.t=.8+Math.random()*2.5):(lt.run=(Math.random()<.5?-1:1)*(.9+Math.random()*.8),lt.t=.4+Math.random()*.9,Math.random()<.3&&(lt.dir+=(Math.random()-.5)*1.5))),lt.run){const Qt=lt.x+Math.cos(lt.dir)*lt.run*gt,Et=lt.z-Math.sin(lt.dir)*lt.run*gt,Kt=o(Qt,Et);Kt>.05&&Kt<.5&&Math.hypot(Qt-lt.home.x,Et-lt.home.z)<3.5?(lt.x=Qt,lt.z=Et,lt.h=Kt):lt.run=-lt.run}h.position.set(lt.x,lt.h+(lt.run?Math.abs(Math.sin(U*30+Zt))*.015:0),lt.z),h.rotation.set(0,lt.dir,lt.run?Math.sin(U*30+Zt)*.08:0),h.scale.setScalar(1),h.updateMatrix(),It.setMatrixAt(Zt,h.matrix)}),It.instanceMatrix.needsUpdate=!0,!((U*60|0)%2)&&(O.forEach((lt,Zt)=>{h.position.set(lt.x,lt.h-.1,lt.z),h.rotation.set(Math.sin(U*1.7+lt.x*.3)*.08,lt.r*6,Math.cos(U*1.4+lt.z*.3)*.08),h.scale.setScalar(.8+lt.s*.6),h.updateMatrix(),G.setMatrixAt(Zt,h.matrix)}),G.instanceMatrix.needsUpdate=!0,ae.forEach((lt,Zt)=>{h.position.set(lt.x,lt.h,lt.z),h.rotation.set(Math.sin(U*1.1+lt.x)*.12,lt.r*6,Math.cos(U*.9+lt.z)*.12),h.scale.setScalar(.8+lt.s*.7),h.updateMatrix(),le.setMatrixAt(Zt,h.matrix)}),le.instanceMatrix.needsUpdate=!0)};nt.updateMatrixWorld(!0);const Kn=[];return nt.children.forEach(U=>{if(U.geometry.type==="CylinderGeometry"){const gt=U.getWorldPosition(new k);Kn.push({x:gt.x,z:gt.z,r:.15})}}),Kn.push({x:wt,z,r:.9}),{colliders:p,update:dn,obstacles:Kn}}function lu(i,{heightTex:t,ext:e,grid:n,quality:s,sunDir:r,colors:a,level:o=.05,size:l=220,center:c=[0,0],maxDepth:u=100}){const h=li.merge([Gt.fog,{uTime:{value:0},uHeight:{value:t},uExt:{value:e},uGrid:{value:n},uLevel:{value:o},uMaxDepth:{value:u},uShallow:{value:new At(a.shallow)},uMid:{value:new At(a.mid)},uDeep:{value:new At(a.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*a.caustic}}]);h.uHeight.value=t;const f=new je({uniforms:h,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
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
      }`}),p=l<50?8:s.mobile?40:64,v=new Zn(l,l,p,p);v.rotateX(-Math.PI/2);const x=new oe(v,f);return x.position.set(c[0],o,c[1]),x.renderOrder=2,i.add(x),{mesh:x,update(m){h.uTime.value=m}}}function cu(i,t){const e=new ao(Float32Array.from(i),t,t,io,hi);return e.magFilter=e.minFilter=vn,e.generateMipmaps=!1,e.needsUpdate=!0,e}const nc={uOlPx:{value:2},uOlRes:{value:new bt(1,1)},uInk:{value:new At("#1f1a1c")}},Jx=.16,Qx=.65,ic={rock:new Set,tree:new Set,tower:new Set,figure:new Set},sc={rock:!0,tree:!0,tower:!0,figure:!0};function t_(i,t,e,n){nc.uOlPx.value=i*t,nc.uOlRes.value.set(Math.max(1,e*t),Math.max(1,n*t))}function yf(i){for(const t in ic)sc[t]=!!i[t],ic[t].forEach(e=>e.visible=sc[t])}function Sf(i){if(i.attributes.olNormal)return;i.attributes.normal||i.computeVertexNormals();const t=i.attributes.position,e=i.attributes.normal,n=t.count,s=new Map,r=new Array(n);for(let o=0;o<n;o++){const l=`${Math.round(t.getX(o)*1e4)},${Math.round(t.getY(o)*1e4)},${Math.round(t.getZ(o)*1e4)}`;r[o]=l;const c=s.get(l)||[0,0,0];c[0]+=e.getX(o),c[1]+=e.getY(o),c[2]+=e.getZ(o),s.set(l,c)}const a=new Float32Array(n*3);for(let o=0;o<n;o++){const l=s.get(r[o]),c=Math.hypot(l[0],l[1],l[2])||1;a[o*3]=l[0]/c,a[o*3+1]=l[1]/c,a[o*3+2]=l[2]/c}i.setAttribute("olNormal",new Ve(a,3))}const Jo=new Map;function bf(i,t,e,n){const s=`${i?i.uuid:"batch"}|${t}|${e}|${n}`;if(Jo.has(s))return Jo.get(s);const r=new De({side:Pn,vertexColors:e});return r.color.copy(e||!i?new At(1,1,1):i.color).multiplyScalar(Jx),r.visible=sc[t],r.onBeforeCompile=a=>{Object.assign(a.uniforms,nc),a.vertexShader=`attribute vec3 olNormal;
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
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, ${Qx.toFixed(2)});`),n&&(a.uniforms.uKeep=mr.uKeep,a.uniforms.uRad=mr.uRad,a.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+a.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
          if (k > 0.0 && vOlZ < uKeep.z + 0.8) { // kronen ligger ~2 enheter nærmere kameraet enn foten
            float b = fract(52.9829189 * fract(dot(floor(gl_FragCoord.xy), vec2(0.06711056, 0.00583715)))); // samme støy som trærne (G7)
            if (k * 0.95 > b + 0.02) discard;
          }
        }`))},r.customProgramCacheKey=()=>`ol${n?"f":""}`,ic[t].add(r),Jo.set(s,r),r}const wf=i=>{const t=i.material;return i.isMesh&&!Array.isArray(t)&&(t.isMeshLambertMaterial||t.isMeshStandardMaterial)&&!t.transparent&&t.side!==Je};function rc(i,t,e=!1){if(!wf(i))return null;Sf(i.geometry);const n=!!(i.material.vertexColors&&i.geometry.attributes.color),s=new gn(i.geometry,bf(i.material,t,n,e),i.instanceMatrix.count);return s.instanceMatrix=i.instanceMatrix,s.count=i.count,s.frustumCulled=!1,s.renderOrder=1,s.onBeforeRender=()=>{s.count=i.count},i.add(s),s}const hu=512,uu=new Map;let ac=null;function e_(i){ac=i}function n_(i,t){const e=`${i.uuid}|${t}`;let n=uu.get(e);if(n)return n;Sf(i);const s=new gn(i,bf(null,t,!1,!1),hu);return s.instanceMatrix.setUsage(Qc),s.setColorAt(0,new At),s.instanceColor.setUsage(Qc),s.count=0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.renderOrder=1,s.raycast=()=>{},n={mesh:s,parts:[]},s.onBeforeRender=()=>{const r=s.instanceMatrix.array,a=s.instanceColor.array;let o=0;for(let l=n.parts.length-1;l>=0;l--){const c=n.parts[l];let u=c,h=!0;for(;u.parent;){if(!u.visible){h=!1;break}u=u.parent}if(u!==ac){++c.userData.olMiss>300&&n.parts.splice(l,1);continue}if(c.userData.olMiss=0,!h||o>=hu)continue;r.set(c.matrixWorld.elements,o*16);const f=c.material.color;a[o*3]=f.r,a[o*3+1]=f.g,a[o*3+2]=f.b,o++}s.count=o,o&&(s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,o*16),s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,o*3),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0)},ac.add(s),uu.set(e,n),n}function ia(i,t){return i.traverse(e=>{!wf(e)||e.userData.noOutline||(e.userData.olMiss=0,n_(e.geometry,t).parts.push(e))}),i}function Es(i){const t=i.map(([h])=>h.index?h.toNonIndexed():h),e=t.reduce((h,f)=>h+f.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new At,a=new k;let o=0;t.forEach((h,f)=>{const p=i[f][1],v=h.attributes.position;for(let x=0;x<v.count;x++)a.fromBufferAttribute(v,x),p(a,r),n.set([a.x,a.y,a.z],(o+x)*3),s.set([r.r,r.g,r.b],(o+x)*3);o+=v.count});const l=new ze;l.setAttribute("position",new Ve(n,3)),l.setAttribute("color",new Ve(s,3)),l.computeVertexNormals();let c=0;const u=l.attributes.normal;return t.forEach((h,f)=>{const p=i[f][2],v=h.attributes.position.count;if(p)for(let x=0;x<v;x++)a.fromBufferAttribute(l.attributes.position,c+x).sub(p).normalize(),u.setXYZ(c+x,a.x,a.y,a.z);c+=v}),l}const oc=.7,lc=3.8;function i_(){const i=[],e=lc/8,n=new At("#7a5434"),s=new At("#a57a4e");for(let r=0;r<8;r++){const a=r/8,o=(r+1)/8,l=.24-a*.08,c=.24-o*.08,u=new We(c,l*1.12,e,7,1),h=u.attributes.position;for(let f=0;f<h.count;f++){const p=h.getY(f)+e/2+r*e,v=p/lc;h.setXYZ(f,h.getX(f)+oc*v*v,p,h.getZ(f))}i.push([u,(f,p)=>p.copy(n).lerp(s,f.y/e%1).multiplyScalar(.55+.45*xe.smoothstep(f.y,0,1.3))])}return Es(i)}function s_(i){const n=[],s=[];for(let a=0;a<=12;a++){const o=a/12;s.push(new k(0,.35*o-1.25*o*o,o*2.7))}for(let a=0;a<12;a++){const o=a/12,l=s[a],c=s[a+1],u=.62*Math.sin(Math.PI*Math.min(1,o*1.1+.08))+.05;for(const h of[-1,1]){const f=new k(h*u,l.y-.08-u*.25,l.z+.32);h>0?n.push(l.x,l.y,l.z,c.x,c.y,c.z,f.x,f.y,f.z):n.push(l.x,l.y,l.z,f.x,f.y,f.z,c.x,c.y,c.z)}}const r=new ze;return r.setAttribute("position",new pe(n,3)),r}function r_(){const i=[],t=new At("#3f8a3a"),e=new At("#9ad25a"),n=8;for(let s=0;s<n;s++){const r=s_();r.rotateX(-.15+s%2*.25),r.rotateY(s/n*Math.PI*2+s%2*.2),i.push([r,(a,o)=>{const l=Math.hypot(a.x,a.z);o.copy(t).lerp(e,Math.min(1,l/2.4))}])}for(let s=0;s<3;s++){const r=new Gn(.16,6,4);r.translate(Math.cos(s*2.1)*.18,-.2,Math.sin(s*2.1)*.18),i.push([r,(a,o)=>o.set("#6b4a2a")])}return Es(i)}function fu(i,t,e){const n=i.map(([s,r,a,o],l)=>{const c=new vs(o,2),u=c.attributes.position;for(let h=0;h<u.count;h++){const f=u.getX(h),p=u.getY(h),v=u.getZ(h),x=1+.07*Math.sin(f*7+l)*Math.sin(p*6)+.05*Math.sin(v*9+p*4);u.setXYZ(h,f*x,p*x*.92,v*x)}return c.translate(s,r,a),[c,(h,f)=>f.copy(e).lerp(t,xe.smoothstep(h.y,r-o*.6,r+o*.9)).multiplyScalar((.6+.4*xe.smoothstep(h.y,r-o,r))*(.55+.45*xe.smoothstep(Math.hypot(h.x,h.z),.1,.9+o*.5))),new k(s,r,a)]});return Es(n)}function a_(i){const t=[],e=new At("#2f6a48"),n=new At("#4a8a5a"),s=new At("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,a,o])=>{const l=new Bn(r,a,10,2),c=l.attributes.position;for(let u=0;u<c.count;u++)c.getY(u)<-a/2+.01&&c.setY(u,c.getY(u)+Math.sin(u*1.7)*.12);l.translate(0,o,0),t.push([l,(u,h)=>{const f=(u.y-o+a/2)/a;h.copy(e).lerp(n,f),i&&f>.12&&h.lerp(s,Math.min(1,(f-.12)*2.6))}])}),Es(t)}function o_(){const i=[],t=new We(.12,.26,3,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getY(n);e.setX(n,e.getX(n)+Math.sin(s*1.7)*.12)}return t.translate(0,1.5,0),i.push([t,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,a])=>{const o=new We(.03,.08,a,4);o.translate(0,a/2,0),o.rotateZ(r),o.translate(n*.3,s,0),i.push([o,(l,c)=>c.set("#2e2622")])}),Es(i)}const mr={uKeep:{value:new k(-1e4,-1e4,0)},uRad:{value:120}};function du(i){return i.onBeforeCompile=t=>{t.uniforms.uKeep=mr.uKeep,t.uniforms.uRad=mr.uRad,t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
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
      }`)},i}function l_(i,t,e,n){const s=t.filter(D=>D.kind==="palm"),r=t.filter(D=>D.kind==="round"),a=t.filter(D=>D.kind==="bush"),o=t.filter(D=>D.kind==="pine"),l=t.filter(D=>D.kind==="dead"),c=du(new Xe({vertexColors:!0})),u=du(new Xe({vertexColors:!0,side:Je})),h=new At(n.trees.leaf[0]),f=new At(n.trees.leaf[1]),p=new We(.16,.26,1.6,7);p.translate(0,.8,0);const v=Es([[p,(D,F)=>F.set("#7a5434").multiplyScalar(.55+.45*xe.smoothstep(D.y,0,1.1))]]),x=fu([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],h,f),m=fu([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],h,f),d=(D,F,B)=>{const W=new gn(D,F,Math.max(1,B));return W.count=B,W.castShadow=!0,W.receiveShadow=!0,i.add(W),rc(W,"tree",!0),W},y=d(i_(),c,s.length),S=d(r_(),u,s.length),g=d(v,c,r.length),A=d(x,c,r.length),E=d(m,c,a.length),w=new We(.14,.22,1.2,6);w.translate(0,.6,0);const C=d(Es([[w,(D,F)=>F.set("#5a3e2a").multiplyScalar(.55+.45*xe.smoothstep(D.y,0,1))]]),c,o.length),M=d(a_(n.id==="vinter"),c,o.length),_=d(o_(),c,l.length),T=new He;s.forEach((D,F)=>{T.position.set(D.x,D.y-.1,D.z),T.rotation.set(0,D.phase,0),T.scale.setScalar(D.s),T.updateMatrix(),y.setMatrixAt(F,T.matrix)}),r.forEach((D,F)=>{T.position.set(D.x,D.y-.1,D.z),T.rotation.set(0,D.phase,0),T.scale.setScalar(D.s),T.updateMatrix(),g.setMatrixAt(F,T.matrix)}),o.forEach((D,F)=>{T.position.set(D.x,D.y-.1,D.z),T.rotation.set(0,D.phase,0),T.scale.setScalar(D.s),T.updateMatrix(),C.setMatrixAt(F,T.matrix)}),l.forEach((D,F)=>{T.position.set(D.x,D.y-.1,D.z),T.rotation.set(0,D.phase,(D.phase%1-.5)*.15),T.scale.setScalar(D.s),T.updateMatrix(),_.setMatrixAt(F,T.matrix)});const O=D=>{s.forEach((F,B)=>{const W=Math.cos(F.phase),V=Math.sin(F.phase);T.position.set(F.x+oc*W*F.s,F.y-.1+lc*F.s,F.z-oc*V*F.s),T.rotation.set(Math.sin(D*1.2+F.phase)*.07,F.phase+Math.sin(D*.7+F.phase)*.05,Math.cos(D*1+F.phase)*.07),T.scale.setScalar(F.s),T.updateMatrix(),S.setMatrixAt(B,T.matrix)}),S.instanceMatrix.needsUpdate=!0,r.forEach((F,B)=>{T.position.set(F.x,F.y-.1,F.z),T.rotation.set(Math.sin(D*1.1+F.phase)*.025,F.phase,Math.cos(D*.9+F.phase)*.025),T.scale.setScalar(F.s),T.updateMatrix(),A.setMatrixAt(B,T.matrix)}),A.instanceMatrix.needsUpdate=!0,a.forEach((F,B)=>{const W=1+Math.sin(D*1.6+F.phase)*.035;T.position.set(F.x,F.y-.12,F.z),T.rotation.set(0,F.phase,0),T.scale.set(F.s*W,F.s/W,F.s*W),T.updateMatrix(),E.setMatrixAt(B,T.matrix)}),E.instanceMatrix.needsUpdate=!0,o.forEach((F,B)=>{T.position.set(F.x,F.y-.1,F.z),T.rotation.set(Math.sin(D*.9+F.phase)*.02,F.phase,Math.cos(D*.8+F.phase)*.02),T.scale.setScalar(F.s),T.updateMatrix(),M.setMatrixAt(B,T.matrix)}),M.instanceMatrix.needsUpdate=!0};return O(0),{colliders:[...s.map(D=>({x:D.x,z:D.z,r:.35*D.s})),...r.map(D=>({x:D.x,z:D.z,r:.4*D.s})),...a.map(D=>({x:D.x,z:D.z,r:.7*D.s})),...o.map(D=>({x:D.x,z:D.z,r:.4*D.s})),...l.map(D=>({x:D.x,z:D.z,r:.3*D.s}))],update:O}}function Qo(i,t=5){const e=[],n=[],s=new At,r=new At;for(let o=0;o<t;o++){const l=i()*Math.PI*2,c=i()*.16,u=.28+i()*.3,h=.04+i()*.03,f=Math.cos(l)*c,p=Math.sin(l)*c,v=(i()-.5)*.25,x=i()*Math.PI,m=Math.cos(x)*h,d=Math.sin(x)*h;e.push(f-m,0,p-d,f+m,0,p+d,f+Math.cos(l)*v,u,p+Math.sin(l)*v),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const a=new ze;return a.setAttribute("position",new pe(e,3)),a.setAttribute("color",new pe(n,3)),a.setAttribute("normal",new pe(new Array(e.length/3).fill(0).flatMap(()=>[0,1,0]),3)),a}function c_(){const i=[];for(let a=0;a<3;a++){const o=new Gn(.07,6,3);o.scale(1,.25,1.15);const l=a*2.094;o.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(o.toNonIndexed())}const t=i.reduce((a,o)=>a+o.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const a of i)e.set(a.attributes.position.array,s*3),n.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count;const r=new ze;return r.setAttribute("position",new Ve(e,3)),r.setAttribute("normal",new Ve(n,3)),r}function h_(i,t,e,n,s){const{heightAt:r,pathDist:a,plinths:o}=t,l=t.lighthouse.pos,c={uTime:{value:0}},h=(T=>(T.onBeforeCompile=O=>{O.uniforms.uTime=c.uTime,O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),O.fragmentShader=O.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},T))(new Xe({vertexColors:!0,side:Je})),f=new Xe({color:"#ffffff"}),p=[Qo(s,7),Qo(s,8),Qo(s,6)],v=c_(),x={tak:{grass:["#4a8638","#86b452"],density:1,clover:.22,cloverCol:["#3a8a3a","#5aa84a"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(e.mobile?.45:1)*x.density,d=13,y=8,S=Math.round(720*m),g=[],A=new He,E=new At,w=new At(x.grass[0]),C=new At(x.grass[1]),M=(T,O,G)=>{if(G<.72)return!1;const D=a(T,O);if(D<1||D<1.7&&s()<.6||Math.hypot(T-l.x,O-l.z)<4.3||n.volcano&&Math.hypot(T-n.volcano.x,O-n.volcano.z)<n.volcano.r*.7)return!1;for(const F of o)if((F.x-T)**2+(F.z-O)**2<2.6)return!1;return!t.extrasBlock||!t.extrasBlock(T,O)};for(let T=0;T<y;T++)for(let O=0;O<y;O++){const G=-y*d/2+T*d,D=-y*d/2+O*d;for(const[F,B]of[[0,S*.4],[1,S*.35],[2,S*.25]]){const W=[];for(let $=0;$<B*3&&W.length<B;$++){const tt=G+s()*d,rt=D+s()*d,Ct=r(tt,rt);M(tt,rt,Ct)&&W.push([tt,rt,Ct])}if(!W.length)continue;const V=new gn(p[F],h,W.length);V.userData.tier=F,W.forEach(([$,tt,rt],Ct)=>{A.position.set($,rt-.04,tt),A.rotation.set(0,s()*6.28,0),A.scale.setScalar(.8+s()*.7),A.updateMatrix(),V.setMatrixAt(Ct,A.matrix),V.setColorAt(Ct,E.copy(w).lerp(C,s()).multiplyScalar(t.shadeAt?t.shadeAt($,tt):1))}),V.receiveShadow=!0,V.computeBoundingSphere(),i.add(V),g.push(V)}if(x.clover>0){const F=[],B=G+s()*d,W=D+s()*d;for(let V=0;V<S*x.clover*3&&F.length<S*x.clover;V++){const $=B+(s()-.5)*6,tt=W+(s()-.5)*6,rt=r($,tt);M($,tt,rt)&&F.push([$,tt,rt])}if(F.length){const V=new gn(v,f,F.length),$=new At(x.cloverCol[0]),tt=new At(x.cloverCol[1]);F.forEach(([rt,Ct,Bt],nt)=>{A.position.set(rt,Bt-.02,Ct),A.rotation.set(0,s()*6.28,0),A.scale.setScalar(.8+s()*.8),A.updateMatrix(),V.setMatrixAt(nt,A.matrix),V.setColorAt(nt,E.copy($).lerp(tt,s()).multiplyScalar(t.shadeAt?t.shadeAt(rt,Ct):1))}),V.receiveShadow=!0,V.userData.tier=1,V.computeBoundingSphere(),i.add(V),g.push(V)}}}return{update(T){c.uTime.value=T},setLevel:T=>g.forEach(O=>{O.visible=T==="high"||O.userData.tier===0,O.receiveShadow=T==="high"}),count:g.reduce((T,O)=>T+O.count,0)}}function pu(i,{arms:t=4,rStart:e=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:a=16}={}){const o=[];for(let l=0;l<t;l++){const c=r+l/t*Math.PI*2,u=[];for(let h=0;h<=a;h++){const f=h/a,p=e*(1-f)+n*f,v=c+f*s*Math.PI*2;u.push([i[0]+Math.cos(v)*p,i[1]+Math.sin(v)*p])}o.push(u)}return o}const u_={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},f_=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],d_=[90,210,330].map(i=>i*Math.PI/180),$a=11,p_=()=>{const i=[];for(let e=0;e<=48;e++){const n=e/48*Math.PI*2;i.push([Math.cos(n)*$a,Math.sin(n)*$a])}const t=d_.map(e=>[$a,20,30,40,50].map((n,s)=>{const r=e+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...t]},Sr=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:pu([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#d8bb88",grass:"#6c9f4a",grass2:"#4d8340",path:"#b49c74",deep:"#cdb987",pathMix:.35},water:{shallow:"#a6e6cc",mid:"#45c2ae",deep:"#1f9aa2",caustic:1},sky:{fog:"#c4d8dc",hemiSky:"#dce9ff",hemiGround:"#5a6650",hemi:1.35,sun:"#ffeccc",sunI:2.25,exposure:.92,sunDir:[14,30,10],lantern:.9,grade:{tint:[1.02,1,.965],lift:[.008,.02,.035],sat:.92,vignette:.2}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a2cc5c","#357238"]},rock:["#b6bab8","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.5,types:{clerk:{hp:.7},complainer:{hp:.7},tank:{hp:.65},gull:{hp:.75}},extra:null},intro:{complainer:2,drone:3,lobbyist:5,heli:6,auditor:7,balloon:8}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:f_,shape:"fjord",fjord:u_,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4"},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#a9b2bc","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,types:{tank:{hp:.95},clerk:{hp:1},lobbyMini:{hp:.9}},extra:{type:"tank",n:1,gap:4,path:"both",from:3}},intro:{balloon:3,auditor:4,lobbyist:5,drone:5,heli:6,complainer:6}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:pu([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:p_(),moat:$a,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,types:{lobbyist:{hp:.6},lobbyMini:{hp:.6},clerk:{hp:.72},complainer:{hp:.72},gull:{hp:.75},drone:{hp:.8}},extra:{type:"gull",n:1,gap:1.4,from:3}},intro:{complainer:2,drone:2,lobbyist:3,heli:4,auditor:5,balloon:7}}];function m_(i){const[t,e,n]=i.edgeAmp,s=i.seed;return r=>i.radius+t*Math.sin(3*r+.4*s)+e*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}const mu={clerk:["complainer","lobbyist"],swarm:["complainer"],tank:["auditor","lobbyist"],gull:["drone","heli","balloon"]},tl={clerk:22,swarm:7,tank:95,gull:16,complainer:17,lobbyist:97,auditor:112,drone:9,heli:62,balloon:150},el={complainer:.6,lobbyist:1.8,auditor:2.2,drone:.4,heli:2.4,balloon:3.5};function g_(i,t){let e=i.seed*9301+49297;const n=()=>(e=(e*9301+49297)%233280)/233280,s=i.intro||{};return t.map((r,a)=>{const o=a+1,l=r.map(f=>({...f})),c=i.balance.extra;c&&o>=c.from&&l.push({...c,n:c.n+Math.floor((o-c.from)/2),at:5});const u=(f,p,v)=>Math.max(1,Math.round(f*Math.min(1,tl[p]/tl[v]))),h=(f,p)=>{f.n=u(f.n,f.type,p),f.gap=el[p]??f.gap,f.type=p};for(const[f,p]of Object.entries(s)){if(p!==o)continue;const v=l.find(x=>{var m;return(m=mu[x.type])==null?void 0:m.includes(f)});if(v&&v.n>=2){const x=Math.floor(v.n/2);l.push({...v,type:f,n:u(x,v.type,f),gap:el[f]??v.gap,at:(v.at??0)+2}),v.n-=x}else v?h(v,f):l.push({type:f,n:Math.max(1,Math.min(3,Math.round(44/tl[f]))),gap:el[f],path:0,at:6})}for(const f of l){const p=(mu[f.type]||[]).filter(v=>s[v]&&s[v]<o);p.length&&n()<.45&&h(f,p[Math.floor(n()*p.length)])}return l})}function Zr(){try{return Math.max(1,Math.min(Sr.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function v_(i){try{i+2>Zr()&&localStorage.setItem("glod-unlocked",String(Math.min(Sr.length,i+2)))}catch{}}function Ia(i,t,{color:e,size:n,speed:s,drift:r,additive:a,area:o=46,top:l=22}){const c=new Float32Array(t*3),u=new Float32Array(t);for(let d=0;d<t;d++)c[d*3]=(Math.random()-.5)*o*2,c[d*3+1]=Math.random()*l,c[d*3+2]=(Math.random()-.5)*o*2,u[d]=Math.random()*6.28;const h=new ze;h.setAttribute("position",new Ve(c,3));const f=document.createElement("canvas");f.width=f.height=32;const p=f.getContext("2d"),v=p.createRadialGradient(16,16,0,16,16,16);v.addColorStop(0,"rgba(255,255,255,1)"),v.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=v,p.fillRect(0,0,32,32);const x=new oo({color:e,size:n,map:new ui(f),transparent:!0,depthWrite:!1,blending:a?fi:Ji,opacity:a?1:.85}),m=new Dc(h,x);return m.frustumCulled=!1,i.add(m),(d,y,S)=>{for(let g=0;g<t;g++){let A=c[g*3+1]-s*d*(.7+u[g]%1*.6);c[g*3]+=Math.sin(S*.7+u[g])*r*d,(s<0?A>l:A<0)&&(A=s<0?0:l,c[g*3]=y.x+(Math.random()-.5)*o*2,c[g*3+2]=y.z+(Math.random()-.5)*o*2),c[g*3+1]=A}h.attributes.position.needsUpdate=!0}}function x_(i,t,e,n,s=160){const r=new Uc(i.map(([h,f])=>new k(h,0,f))),a=r.getLength(),o=[],l=[],c=[];for(let h=0;h<=s;h++){const f=h/s,p=r.getPointAt(f),v=r.getTangentAt(f),x=-v.z,m=v.x,d=t*(.75+.25*Math.sin(f*9));for(const y of[-1,1]){const S=p.x+x*d*y,g=p.z+m*d*y;o.push(S,e(S,g)+n,g),l.push(f*a,(y+1)/2)}if(h<s){const y=h*2;c.push(y,y+1,y+2,y+1,y+3,y+2)}}const u=new ze;return u.setAttribute("position",new pe(o,3)),u.setAttribute("uv",new pe(l,2)),u.setIndex(c),u.computeVertexNormals(),{geo:u,curve:r,len:a}}function __(i,t,e,n){var x;const{heightAt:s}=t,r=[],a=[],o=[],l=[],c=[],u=e.mobile?.5:1,h=new Set(n.life);if(h.has("aurora")){const m=new je({transparent:!0,depthWrite:!1,blending:fi,side:Je,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const[d,y,S]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const g=new oe(new Zn(150,26,96,1),m);g.position.set(d,20,y),g.rotation.y=S,i.add(g)}a.push((d,y,S)=>m.uniforms.uTime.value=S)}if(h.has("snow")&&a.push(Ia(i,Math.round(900*u),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),h.has("ash")&&a.push(Ia(i,Math.round(500*u),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),h.has("embers")&&a.push(Ia(i,Math.round(160*u),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),h.has("icefloes")){const m=[];for(let A=0;A<6e3&&m.length<70*u;A++){const E=(Math.random()-.5)*120,w=(Math.random()-.5)*120,C=.05-s(E,w);C>.15&&C<1.4&&m.every(M=>Math.hypot(M.x-E,M.z-w)>2.2)&&m.push({x:E,z:w,s:.6+Math.random()*1.1,r:Math.random()*6})}const d=new We(1,.9,.18,7),y=d.attributes.position;for(let A=0;A<y.count;A++){const E=Math.atan2(y.getZ(A),y.getX(A)),w=.75+.35*Math.abs(Math.sin(E*2.3+A));y.setX(A,y.getX(A)*w),y.setZ(A,y.getZ(A)*w)}d.computeVertexNormals();const S=new gn(d,new Xe({color:"#eaf6ff"}),Math.max(1,m.length));S.count=m.length,S.receiveShadow=!0,i.add(S);const g=new He;a.push((A,E,w)=>{m.forEach((C,M)=>{g.position.set(C.x+Math.sin(w*.1+C.r)*.4,.08+Math.sin(w*1.1+C.r)*.03,C.z),g.rotation.set(Math.sin(w*.9+C.r)*.03,C.r+w*.02,Math.cos(w*.8+C.r)*.03),g.scale.set(C.s,1,C.s),g.updateMatrix(),S.setMatrixAt(M,g.matrix)}),S.instanceMatrix.needsUpdate=!0})}if(n.lava){const m=new je({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const g of n.lava){const A=x_(g,1.25,s,.07);i.add(new oe(A.geo,m));const E=[];let w=!1;for(let C=0;C<=1;C+=1.4/A.len){const M=A.curve.getPointAt(Math.min(1,C));if(t.pathDist(M.x,M.z)<2.4){w||c.push({x:M.x,z:M.z,tan:A.curve.getTangentAt(Math.min(1,C))}),w=!0;continue}w=!1,o.push({x:M.x,z:M.z,r:1.4})}for(const C of[.25,.7]){const M=A.curve.getPointAt(C),_=new jr("#ff6a2a",14,12,1.6);_.position.set(M.x,s(M.x,M.z)+1.2,M.z),i.add(_),E.push(_)}a.push((C,M,_)=>E.forEach((T,O)=>T.intensity=12+3*Math.sin(_*2.3+O)))}a.push((g,A,E)=>m.uniforms.uTime.value=E);const d=new Cn(3.4,.35,4.2),y=new Xe({color:((x=n.rock)==null?void 0:x[0])??"#555"}),S=new We(2.4,2.4,.1,18);for(const g of c){const A=s(g.x,g.z)+.12,E=new oe(d,y);E.position.set(g.x,A,g.z),E.rotation.y=-Math.atan2(g.tan.z,g.tan.x),E.castShadow=E.receiveShadow=!0,i.add(E);const w=new oe(S,new De({color:new At("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));w.position.set(g.x,A+.25,g.z),w.visible=!1,i.add(w);const C=new jr("#ff6a2a",0,14,1.6);C.position.set(g.x,A+1.6,g.z),i.add(C);let M=!1;l.push({x:g.x,z:g.z,get closed(){return M},setClosed(_){M=_,w.visible=_}}),a.push((_,T,O)=>{const G=M?1:0;w.material.opacity+=(G*.9-w.material.opacity)*Math.min(1,_*3),!M&&w.material.opacity<.02&&(w.visible=!1),C.intensity=w.material.opacity*(22+6*Math.sin(O*9))})}}if(n.volcano){const m=n.volcano;o.push({x:m.x,z:m.z,r:m.r*.55});const d=new oe(new dr(m.r*.22,20),new De({color:new At("#ff5a1a").multiplyScalar(2.4)}));d.rotation.x=-Math.PI/2,d.position.set(m.x,s(m.x,m.z)+.2,m.z),i.add(d);const y=new co(.35,0),S=[];for(let E=0;E<3e3&&S.length<50*u;E++){const w=(Math.random()-.5)*96,C=(Math.random()-.5)*96,M=s(w,C);M>.4&&t.pathDist(w,C)>2.2&&S.push({x:w,z:C,h:M,s:.5+Math.random()})}const g=new gn(y,new De({color:new At("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,S.length));g.count=S.length;const A=new He;S.forEach((E,w)=>{A.position.set(E.x,E.h,E.z),A.rotation.set(E.s,E.s*3,0),A.scale.set(E.s,E.s*.5,E.s),A.updateMatrix(),g.setMatrixAt(w,A.matrix)}),i.add(g)}if(n.waterfall&&n.waterfall._lvl!==void 0){const m=n.waterfall,d=m.basin[0]-m.lip[0],y=m.basin[1]-m.lip[1],S=Math.hypot(d,y),g=d/S,A=y/S,E=m._lvl-.1,w=14,C=1.25,M=[],_=[],T=[];for(let $=0;$<=w;$++){const tt=$/w,rt=.35+1.5*tt*tt,Ct=E-(E-.06)*(tt*tt*.6+tt*.4);for(const Bt of[-1,1])M.push(m.lip[0]+g*rt-A*C*Bt*(.85+tt*.3),Ct,m.lip[1]+A*rt+g*C*Bt*(.85+tt*.3)),_.push((Bt+1)/2,tt);if($<w){const Bt=$*2;T.push(Bt,Bt+1,Bt+2,Bt+1,Bt+3,Bt+2)}}const O=new ze;O.setAttribute("position",new pe(M,3)),O.setAttribute("uv",new pe(_,2)),O.setIndex(T);const G=new je({transparent:!0,depthWrite:!1,side:Je,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new oe(O,G));const D=(()=>{const $=document.createElement("canvas");$.width=$.height=128;const tt=$.getContext("2d"),rt=(()=>{let Bt=9;return()=>(Bt=Bt*16807%2147483647)/2147483647})();for(let Bt=0;Bt<260;Bt++){const nt=rt()*Math.PI*2,ut=Math.pow(rt(),.7)*58,Rt=1.5+rt()*5*(1-ut/70);tt.fillStyle=`rgba(255,255,255,${.55+rt()*.45})`,tt.beginPath(),tt.arc(64+Math.cos(nt)*ut,64+Math.sin(nt)*ut,Rt,0,Math.PI*2),tt.fill()}tt.globalCompositeOperation="destination-in";const Ct=tt.createRadialGradient(64,64,8,64,64,63);return Ct.addColorStop(0,"rgba(0,0,0,1)"),Ct.addColorStop(.6,"rgba(0,0,0,0.85)"),Ct.addColorStop(1,"rgba(0,0,0,0)"),tt.fillStyle=Ct,tt.fillRect(0,0,128,128),new ui($)})(),F=new oe(new dr(1.5,20),new De({map:D,color:"#ffffff",transparent:!0,opacity:.9,depthWrite:!1}));F.rotation.x=-Math.PI/2;const B=m.lip[0]+g*1.9,W=m.lip[1]+A*1.9;F.position.set(B,.1,W),i.add(F);const V=Ia(i,Math.round(60*u),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});a.push(($,tt,rt)=>{G.uniforms.uTime.value=rt,F.scale.setScalar(1+Math.sin(rt*5)*.06),F.rotation.z=rt*.4,F.material.opacity=.8+.12*Math.sin(rt*7),V($,{x:B,z:W},rt)}),o.push({x:B,z:W,r:.9})}const f=(m,d)=>o.some(y=>(y.x-m)**2+(y.z-d)**2<y.r*y.r);let p=0;return{colliders:r,update:(m,d=t.lighthouse.pos)=>{const y=Math.min(.05,Math.max(0,m-p));p=m;for(const S of a)S(y,d,m)},blocks:f,blockers:o,bridges:l}}function Ef(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ze;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let v=0;v<p.count;++v)h.push(p.getX(v)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=gu(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let x=0;x<a[u].length;++x)p.push(a[u][x][f]);const v=gu(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(v)}}return l}function gu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new Ve(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let f=0,p=u.count;f<p;f++)for(let v=0;v<e;v++){const x=u.getComponent(f,v);o.setComponent(f+h,v,x)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}function Tf(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,S=o.length;y<S;y++){const g=o[y],A=i.attributes[g];l[g]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const E=i.morphAttributes[g];E&&(c[g]||(c[g]=[]),E.forEach((w,C)=>{const M=new w.array.constructor(w.count*w.itemSize);c[g][C]=new w.constructor(M,w.itemSize,w.normalized)}))}const p=t*.5,v=Math.log10(1/t),x=Math.pow(10,v),m=p*x;for(let y=0;y<r;y++){const S=n?n.getX(y):y;let g="";for(let A=0,E=o.length;A<E;A++){const w=o[A],C=i.getAttribute(w),M=C.itemSize;for(let _=0;_<M;_++)g+=`${~~(C[h[_]](S)*x+m)},`}if(g in e)u.push(e[g]);else{for(let A=0,E=o.length;A<E;A++){const w=o[A],C=i.getAttribute(w),M=i.morphAttributes[w],_=C.itemSize,T=l[w],O=c[w];for(let G=0;G<_;G++){const D=h[G],F=f[G];if(T[F](a,C[D](S)),M)for(let B=0,W=M.length;B<W;B++)O[B][F](a,M[B][D](S))}}e[g]=a,u.push(a),a++}}const d=i.clone();for(const y in i.attributes){const S=l[y];if(d.setAttribute(y,new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)),y in c)for(let g=0;g<c[y].length;g++){const A=c[y][g];d.morphAttributes[y][g]=new A.constructor(A.array.slice(0,a*A.itemSize),A.itemSize,A.normalized)}}return d.setIndex(u),d}const fe=(i,t={})=>new Xe({color:i,flatShading:!0,...t}),$s=(i,t)=>new De({color:new At(i).multiplyScalar(t)}),ct={coat:fe("#f2c23c"),coatDark:fe("#c99a22"),skin:fe("#f1c7a0"),beanieG:fe("#3f8f4a"),beanieY:fe("#f2c94c"),beanieR:fe("#d4553a"),boot:fe("#3a2c22"),eyeW:new De({color:"#ffffff"}),eyeB:new De({color:"#1c1820"}),suit:fe("#6b6f78"),suitDark:fe("#3c4150"),suitNavy:fe("#2c3a5c"),shirt:fe("#f4f1ea"),tie:fe("#b8322a"),paper:fe("#fbfaf4"),stampInk:fe("#a8233a"),woodLight:fe("#c49360"),glasses:fe("#222428"),binderR:fe("#c94f3f"),binderB:fe("#3f6fc9"),binderY:fe("#e6b93f"),gull:fe("#f4f2ee"),gullWing:fe("#c4ccd4"),gullTip:fe("#2e3038"),gullBand:fe("#8e98a4"),beak:fe("#f0a43a"),megaRed:fe("#d8453a"),mouth:new De({color:"#4a2a2a"}),smile:new De({color:"#c8485a"}),wood:fe("#9a6a42"),woodDark:fe("#6e4a2c"),iron:fe("#55585e"),speaker:fe("#2a2a30"),cone:fe("#4a4a52"),rasG:fe("#3f9a4a"),rasY:fe("#f2c94c"),rasR:fe("#d4553a"),chipsBag:fe("#f2b632"),chipsRed:fe("#d8453a"),chip:fe("#f0c860"),ringMat:new Xe({color:"#f1efe9",transparent:!0,opacity:.8}),ember:$s("#ff9a3a",2.4),emberCore:$s("#fff1c2",2),rolling:fe("#5a9a5a"),rollingPaper:fe("#fffdf5"),lantern:$s("#ffd27a",2.2),hpBg:new De({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new De({color:"#d8553a",depthTest:!1}),levelPip:$s("#9fffb0",1.6),bottle:new Xe({color:"#7fd6ff",transparent:!0,opacity:.8}),bubble:new Xe({color:"#dff6ff",transparent:!0,opacity:.45,emissive:"#5a7a9a"}),kiteSail:new Xe({color:"#ff7a5a",side:Je}),rope:fe("#d9c8a0"),ledger:fe("#2f5a3a"),track:fe("#8a4ac8"),briefcase:fe("#6a3a1a"),brass:fe("#d8b040"),rotor:new De({color:"#cfd6dc",transparent:!0,opacity:.45}),redLight:$s("#ff3030",2),balloonA:fe("#e8e4d8"),balloonB:fe("#c8463a"),heli:fe("#f2c23c"),glassDark:fe("#2a3440"),spot:new De({color:"#fff6c8",transparent:!0,opacity:.18,blending:fi,depthWrite:!1,side:Je}),pizza:fe("#e8603a"),pizzaCrust:fe("#e8b866"),lampGlass:new Xe({color:"#ff8a5a",transparent:!0,opacity:.45,emissive:"#6a1a10"}),lampBlob:$s("#ff9a2a",2.2)},pt={sphere:new Gn(1,10,8),lowSphere:new vs(1,1),capsule:new lo(.5,.7,3,8),cyl:new We(1,1,1,10),cone:new Bn(1,1,10),box:new Cn(1,1,1),dome:new Gn(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new pr(.22,0),leaf:new pr(.3,0),plane:new Zn(1,1),smileArc:new nr(.06,.018,4,10,Math.PI),ring:new nr(.32,.12,6,14),bubbleRing:new nr(.18,.025,4,12)};function mt(i,t,e,n,s,r=0,a=0,o=0,l=!0){const c=new oe(i,t);return c.scale.set(e,n,s),c.position.set(r,a,o),c.castShadow=l,c}function Oc(i,t,e,n,s=.12,r=.18){const a=new _e;a.position.set(t,e,n),a.userData.isEyes=!0;for(const o of[-1,1])a.add(mt(pt.sphere,ct.eyeW,s,s,s,o*r,0,0,!1)),a.add(mt(pt.sphere,ct.eyeB,s*.55,s*.55,s*.55,o*r,.01,-s*.7,!1));return i.add(a),a}const Af=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,31);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.25)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ui(i)})(),M_=new De({map:Af,transparent:!0,depthWrite:!1,fog:!1}),Cf=new Zn(1,1).rotateX(-Math.PI/2);function kc(i,t){const e=new oe(Cf,M_);e.scale.set(t*2,1,t*2),e.position.y=.04,e.renderOrder=1,i.add(e),i.userData.blob=e}function y_(i,t,e=.8){const n=new De({map:Af,color:"#000000",transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new gn(Cf,n,Math.max(1,t.length));s.count=t.length;const r=new He;return t.forEach((a,o)=>{r.position.set(a.x,a.y+.04,a.z),r.scale.set(a.r*2,1,a.r*2),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.renderOrder=1,i.add(s),s}function Rf(i){const t=[];i.traverse(e=>{e.userData.isEyes&&t.push(e)}),i.userData.eyes=t}function Pf(i,t,e,n=1){const s=mt(pt.box,ct.mouth,.14*n,.025*n,.02,0,t,e,!1);s.rotation.z=.15;const r=mt(pt.smileArc,ct.smile,n,n,n,0,t+.03*n,e,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}const S_=(()=>{const i=new We(.07,.05,.55,8);return i.rotateZ(Math.PI/2),i})();function Df(){const i=new _e,t=mt(pt.box,ct.rollingPaper,.55,.012,.26,0,0,0,!1),e=mt(pt.lowSphere,ct.rasG,.22,.06,.07,0,.03,0,!1),n=new oe(S_,ct.rollingPaper),s=mt(pt.cone,ct.rollingPaper,.05,.1,.05,.32,0,0,!1);return s.rotation.z=-Math.PI/2,n.add(s),i.add(t,e,n),i.userData={paper:t,herb:e,joint:n,tip:s},Bc(i,0),i}function Bc(i,t){const{paper:e,herb:n,joint:s,tip:r}=i.userData,a=xe.smoothstep,o=a(t,.08,.45),l=a(t,.5,.85);e.visible=l<.98,e.scale.set(.55,.012,.26*(1-.7*l)),n.visible=o>.01&&l<.98,n.scale.set(.22*o+.001,.06*o+.001,.07*(1-.5*l)+.001),s.visible=l>.02,s.scale.set(1,.35+.65*l,.35+.65*l),r.visible=t>.88}function b_(){const i=new _e,t=new _e;i.add(t),t.add(mt(pt.capsule,ct.coat,.75,.75,.7,0,.75,0)),t.add(mt(pt.cyl,ct.coatDark,.4,.06,.38,0,.62,0));const e=new _e;e.position.y=1.62,e.scale.setScalar(1.22),e.add(mt(pt.sphere,ct.skin,.33,.32,.32)),e.add(mt(pt.cyl,ct.beanieG,.35,.1,.35,0,.14,0)),e.add(mt(pt.cyl,ct.beanieY,.31,.1,.31,0,.24,0)),e.add(mt(pt.dome,ct.beanieR,.27,.22,.27,0,.29,0)),e.add(mt(pt.sphere,ct.beanieY,.08,.08,.08,0,.52,0)),Oc(e,0,.02,-.26,.07,.12);const n=Pf(e,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,t.add(e);const s=[-1,1].map(h=>{const f=mt(pt.capsule,ct.boot,.24,.32,.24,h*.18,.2,0);return t.add(f),f}),r=new _e;r.position.set(.48,1,-.1),r.add(mt(pt.box,ct.iron,.2,.28,.2,0,-.25,0)),r.add(mt(pt.sphere,ct.lantern,.1,.13,.1,0,-.25,0,!1)),t.add(r);const a=new _e;a.position.set(-.46,1.08,0),a.add(mt(pt.capsule,ct.coat,.16,.34,.16,0,-.28,0)),a.add(mt(pt.sphere,ct.skin,.1,.1,.1,0,-.52,0)),t.add(a);const o=new _e;o.add(mt(pt.box,ct.rolling,.7,.12,.42,0,0,0,!1)),o.add(mt(pt.box,ct.rollingPaper,.6,.08,.36,.06,.08,0,!1)),o.add(mt(pt.leaf,ct.rasG,.35,.05,.35,-.12,.07,0,!1)),o.position.y=2.35,o.visible=!1,i.add(o);const l=new _e;l.position.y=2;for(let h=0;h<3;h++)l.add(mt(pt.ember,ct.emberCore,.6,.6,.6,Math.cos(h*2.1)*.45,0,Math.sin(h*2.1)*.45,!1));l.visible=!1,i.add(l);const c=new _e;c.position.set(.46,1.08,0),c.add(mt(pt.capsule,ct.coat,.16,.34,.16,0,-.28,0)),c.add(mt(pt.sphere,ct.skin,.1,.1,.1,0,-.52,0)),c.visible=!1,t.add(c);const u=Df();return u.position.set(0,1,-.62),u.scale.setScalar(1.6),u.visible=!1,t.add(u),kc(i,.62),i.userData={body:t,legs:s,head:e,lanternArm:r,armL:a,armR:c,roll:u,carried:o,stars:l,blob:i.userData.blob},Rf(i),i}function pi(i,t){const e=new _e;e.position.y=t;const n=new oe(pt.plane,ct.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new oe(pt.plane,ct.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,e.add(n,s),e.visible=!1,i.add(e),i.userData.hpBar=e,i.userData.hpFg=s}function js(i,{scale:t=1,suit:e=ct.suit,wide:n=1}={}){const s=t;i.add(mt(pt.capsule,e,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(mt(pt.box,ct.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(mt(pt.box,ct.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const o of[-1,1])i.add(mt(pt.capsule,ct.suitDark,.2*s,.25*s,.2*s,o*.16*s,.17*s,0));const r=new _e;r.position.y=1.5*s,r.add(mt(pt.sphere,ct.skin,.3*s,.3*s,.3*s)),r.add(mt(pt.dome,ct.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),Oc(r,0,.03*s,-.25*s,.065*s,.11*s);const a=Pf(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:a}}function w_(i){const t=new _e,e=new _e;if(t.add(e),t.userData.body=e,i==="clerk"){const{head:n,mouth:s}=js(e);for(const o of[-1,1])n.add(mt(pt.box,ct.glasses,.11,.07,.02,o*.11,.03,-.3,!1));n.add(mt(pt.box,ct.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new _e;r.position.set(.48,.9,-.15),r.add(mt(pt.cyl,ct.woodLight,.06,.25,.06,0,.12,0)),r.add(mt(pt.sphere,ct.woodLight,.09,.09,.09,0,.27,0)),r.add(mt(pt.box,ct.stampInk,.22,.08,.16,0,-.02,0)),e.add(r);const a=mt(pt.box,ct.paper,.3,.38,.02,-.46,.92,-.2);a.rotation.y=.4,e.add(a),t.userData.mouth=s,t.userData.arm=r,pi(t,2.15)}else if(i==="tank"){const{mouth:n}=js(e,{scale:1.25,suit:ct.suitNavy,wide:1.45}),s=new _e;s.position.set(0,0,-.95),s.add(mt(pt.box,ct.woodDark,.75,1.05,.45,0,.52,0));const r=mt(pt.box,ct.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(mt(pt.cyl,ct.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(mt(pt.sphere,ct.speaker,.05,.05,.05,.18,1.52,.04,!1)),e.add(s),t.userData.mouth=n,pi(t,2.6)}else if(i==="gull"){e.add(mt(pt.lowSphere,ct.gull,.36,.3,.6,0,0,0)),e.add(mt(pt.cone,ct.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=mt(pt.cone,ct.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,e.add(n),e.add(mt(pt.cyl,ct.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const a=new _e;a.position.set(r*.25,.05,0),a.add(mt(pt.box,ct.gullWing,.6,.06,.42,r*.3,0,0)),a.add(mt(pt.box,ct.gullBand,.58,.065,.1,r*.31,0,.17));const o=mt(pt.box,ct.gullTip,.42,.055,.3,r*.78,0,.04);return o.rotation.y=r*.18,a.add(o),e.add(a),a});t.userData.wings=s,Oc(e,0,.12,-.42,.06,.13),t.userData.mouth=null,pi(t,.8)}else if(i==="swarm"){const{mouth:n}=js(e,{scale:.6}),s=[ct.binderR,ct.binderB,ct.binderY],r=mt(pt.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);e.add(r),t.userData.mouth=n,pi(t,1.3)}else if(i==="auditor"){const{head:n,mouth:s}=js(e,{scale:1.1,suit:ct.suitDark});for(const a of[-1,1])n.add(mt(pt.box,ct.glasses,.12,.08,.02,a*.12,.03,-.33,!1));const r=new _e;r.position.set(0,.95,-.55),r.add(mt(pt.box,ct.ledger,1.05,1.2,.14)),r.add(mt(pt.box,ct.paper,.95,1.1,.1,0,0,.03,!1)),r.add(mt(pt.box,ct.brass,.3,.3,.02,0,.15,-.08,!1)),e.add(r),t.userData.mouth=s,t.userData.shield=r,pi(t,2.3)}else if(i==="complainer"){const{head:n,mouth:s}=js(e,{scale:.85,suit:ct.track});n.add(mt(pt.cyl,ct.rasR,.27,.06,.27,0,.1,0,!1));const r=new _e;r.position.set(.35,1.2,-.1),r.add(mt(pt.cyl,ct.track,.06,.45,.06,0,.2,0)),r.add(mt(pt.box,ct.paper,.32,.42,.02,0,.55,0)),e.add(r),t.userData.mouth=s,t.userData.arm=r,pi(t,1.8)}else if(i==="lobbyist"||i==="lobbyMini"){const n=i==="lobbyMini",{mouth:s}=js(e,{scale:n?.55:1.05,suit:ct.suitNavy});e.add(mt(pt.box,ct.brass,.08,.3,.05,0,n?.52:.99,n?-.17:-.32,!1)),e.add(mt(pt.box,ct.briefcase,n?.28:.5,n?.22:.36,.12,n?.3:.55,n?.3:.55,0)),t.userData.mouth=s,pi(t,n?1.2:2.1)}else if(i==="drone"){e.add(mt(pt.box,ct.iron,.42,.14,.42));const n=[];for(const[s,r]of[[1,1],[-1,1],[1,-1],[-1,-1]]){e.add(mt(pt.box,ct.speaker,.5,.04,.05,s*.22,0,r*.22).rotateY(s*r>0?Math.PI/4:-Math.PI/4));const a=mt(pt.cyl,ct.rotor,.2,.01,.2,s*.4,.08,r*.4,!1);e.add(a),n.push(a)}e.add(mt(pt.sphere,ct.redLight,.07,.07,.07,0,-.06,-.22,!1)),t.userData.rotors=n,t.userData.mouth=null,pi(t,.6)}else if(i==="balloon"){e.add(mt(pt.sphere,ct.balloonA,1.1,1.3,1.1,0,1.6,0));for(let n=0;n<4;n++)e.add(mt(pt.cyl,ct.balloonB,1.12-Math.abs(n-1.5)*.18,.18,1.12-Math.abs(n-1.5)*.18,0,1+n*.42,0,!1));e.add(mt(pt.box,ct.woodLight,.6,.4,.6,0,-.1,0)),e.add(mt(pt.sphere,ct.skin,.2,.2,.2,0,.25,0)),e.add(mt(pt.dome,ct.suitDark,.21,.1,.21,0,.32,0,!1));for(const[n,s]of[[1,1],[-1,1],[1,-1],[-1,-1]])e.add(mt(pt.cyl,ct.rope,.015,.8,.015,n*.28,.45,s*.28,!1));t.userData.mouth=null,pi(t,3.3)}else if(i==="heli"){e.add(mt(pt.capsule,ct.heli,.6,.55,.9,0,0,0).rotateX(Math.PI/2)),e.add(mt(pt.sphere,ct.glassDark,.28,.22,.24,0,.05,-.38,!1)),e.add(mt(pt.box,ct.heli,.12,.12,1.1,0,.05,.85));const n=mt(pt.box,ct.speaker,1.9,.02,.12,0,.4,0,!1),s=mt(pt.box,ct.speaker,.04,.5,.08,.08,.1,1.38,!1);e.add(n,s);const r=new oe(new Bn(1.2,4.5,14,1,!0),ct.spot);r.position.set(0,-2.3,-.2),r.visible=!1,e.add(r),t.userData.rotor=n,t.userData.tail=s,t.userData.beam=r,t.userData.mouth=null,pi(t,1)}return kc(t,{tank:.85,auditor:.7,balloon:.9,heli:.6,swarm:.35,lobbyMini:.35,drone:.35,gull:.45}[i]??.55),Rf(t),t}function E_(i){const t=i.mesh.userData.mouth;t&&(t.sour.visible=!1,t.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function T_(i){const t=new _e,e=new _e;if(t.add(e),i==="ring"){t.add(mt(pt.box,ct.wood,.9,.5,.9,0,.25,0)),e.position.y=.95;const a=mt(pt.cyl,ct.iron,.32,1.1,.32,0,0,-.15);a.rotation.x=Math.PI/2-.15,e.add(a),e.add(mt(pt.cyl,ct.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),e.add(mt(pt.sphere,ct.iron,.42,.42,.42,0,0,.42)),e.add(mt(pt.sphere,ct.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){t.add(mt(pt.cyl,ct.iron,.7,.3,.7,0,.15,0)),e.position.y=.3;const a=mt(pt.box,ct.chipsBag,.95,1.1,.6,0,.6,0);a.rotation.x=-.35,e.add(a),e.add(mt(pt.box,ct.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let o=0;o<5;o++)e.add(mt(pt.leaf,ct.chip,.3,.08,.3,(o-2)*.17,1.2,-.3-o%2*.1,!1))}else if(i==="speaker"){const a=new _e;a.add(mt(pt.box,ct.speaker,1,1.5,.75,0,.75,0)),a.add(mt(pt.box,ct.rasG,1.02,.12,.77,0,1.38,0,!1)),a.add(mt(pt.box,ct.rasY,1.02,.12,.77,0,1.26,0,!1)),a.add(mt(pt.box,ct.rasR,1.02,.12,.77,0,1.14,0,!1));const o=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const u=mt(pt.cyl,ct.cone,c,.08,c,0,l,-.38,!1);u.rotation.x=Math.PI/2,a.add(u),o.push(u)}e.add(a),t.userData.woofers=o}else if(i==="bubble"){t.add(mt(pt.cyl,ct.speaker,.5,.25,.5,0,.12,0)),e.position.y=.3,e.add(mt(pt.cyl,ct.bottle,.36,1,.36,0,.5,0)),e.add(mt(pt.cyl,ct.rasR,.22,.2,.22,0,1.08,0));const a=mt(pt.cyl,ct.wood,.03,.8,.03,0,1.4,-.2);a.rotation.x=.5,e.add(a),e.add(mt(pt.bubbleRing,ct.rasY,1,1,1,0,1.75,-.42,!1).rotateX(.5));for(let o=0;o<3;o++)e.add(mt(pt.sphere,ct.bubble,.14+o*.04,.14+o*.04,.14+o*.04,.3-o*.25,1.7+o*.3,-.7-o*.15,!1))}else if(i==="kite"){for(let o=0;o<3;o++){const l=o/3*Math.PI*2,c=mt(pt.cyl,ct.wood,.07,1.6,.07,Math.cos(l)*.45,.7,Math.sin(l)*.45);c.rotation.set(Math.sin(l)*.28,0,-Math.cos(l)*.28),t.add(c)}e.position.y=1.55,e.add(mt(pt.cyl,ct.iron,.22,.3,.22,0,0,0).rotateZ(Math.PI/2));const a=Nf();a.position.set(0,.7,0),a.scale.setScalar(.8),e.add(a),t.userData.kite=a}else if(i==="pizza"){t.add(mt(pt.box,ct.wood,1.2,.35,.9,0,.18,0));for(const o of[-1,1])t.add(mt(pt.box,ct.woodDark,.12,.9,.12,o*.45,.65,0));e.position.y=1;const a=new _e;a.add(mt(pt.box,ct.woodLight,.12,.12,1.5,0,0,-.4)),a.add(mt(pt.cyl,ct.pizzaCrust,.32,.06,.32,0,.08,-1.1)),a.add(mt(pt.cyl,ct.pizza,.27,.03,.27,0,.12,-1.1,!1)),a.rotation.x=-.35,e.add(a),t.userData.arm=a}else if(i==="lamp"){t.add(mt(pt.cone,ct.brass,.55,.7,.55,0,.35,0)),e.position.y=.7,e.add(mt(pt.capsule,ct.lampGlass,.75,.9,.75,0,.75,0,!1));const a=[];for(let o=0;o<3;o++){const l=mt(pt.sphere,ct.lampBlob,.16,.2,.16,0,.5+o*.3,0,!1);e.add(l),a.push(l)}e.add(mt(pt.cone,ct.brass,.3,.35,.3,0,1.55,0)),t.userData.blobs=a}const n=[];for(let a=0;a<5;a++){const o=mt(pt.leaf,ct.levelPip,.45,.1,.45,Math.cos(a*1.2566)*.95,.15,Math.sin(a*1.2566)*.95,!1);o.visible=a===0,t.add(o),n.push(o)}const s=new es(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new oe(s,new De({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,t.add(r),t.traverse(a=>{a.isMesh&&a!==r&&a.material!==ct.levelPip&&(a.castShadow=!0)}),kc(t,1),t.userData.head=e,t.userData.pips=n,t.userData.ring=r,t}function Lf(i,t){i.mesh.userData.pips.forEach((e,n)=>e.visible=n<t),i.mesh.scale.setScalar(1+(t-1)*.08)}function Kr(i,t){const e=i.mesh.userData.ring;if(e.visible=t>0,t<=0)return;e.geometry.dispose();const n=new es(1.45,1.7,40,1,0,Math.PI*2*t);n.rotateX(-Math.PI/2),e.geometry=n}function A_(){const i=new _e;return i.add(mt(pt.ember,ct.ember,1,1.3,1,0,0,0,!1)),i.add(mt(pt.ember,ct.emberCore,.5,.7,.5,0,0,0,!1)),i}function C_(){const i=new oe(pt.ring,ct.ringMat);return i.castShadow=!1,i}function If(){const i=new _e;return i.add(mt(pt.box,ct.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(mt(pt.box,ct.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function Uf(){const i=new nr(1,.08,4,32);return i.rotateX(Math.PI/2),new oe(i,new De({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}let Ua=null;function R_(){if(Ua)return Ua;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d");["#d8453a","#f2c94c","#d8453a","#f2c94c","#3f9a4a","#f2c94c","#d8453a","#f2c94c"].forEach((n,s)=>{t.fillStyle=n,t.fillRect(0,s*8,64,8)});const e=new ui(i);return e.colorSpace=mn,e.wrapS=e.wrapT=_i,e.repeat.set(1,1.4),e.magFilter=vn,Ua=new Xe({map:e,flatShading:!0}),Ua}function Nf(){const i=new _e,t=new mf([new bt(0,.55),new bt(.38,0),new bt(0,-.75),new bt(-.38,0)]),e=new zc(t,{depth:.035,bevelEnabled:!1});e.translate(0,0,-.0175);const n=new oe(e,R_());n.rotation.x=-Math.PI/2.4,n.castShadow=!0,i.add(n);const s=mt(pt.box,ct.woodDark,.025,1.3,.025,0,-.1,.03,!1),r=mt(pt.box,ct.woodDark,.76,.025,.025,0,0,.03,!1);n.add(s,r);const a=new _e;a.position.set(0,-.68,0),n.add(a);const o=[ct.rasR,ct.rasY,ct.rasG,ct.rasR,ct.rasY];let l=a;const c=[];for(let u=0;u<o.length;u++){const h=new _e;h.position.y=u?-.2:0,h.add(mt(pt.box,ct.rope,.015,.2,.015,0,-.1,0,!1));const f=new _e;f.position.y=-.2;for(const p of[-1,1]){const v=mt(pt.cone,o[u],.05,.1,.03,p*.05,0,0,!1);v.rotation.z=p*Math.PI/2,f.add(v)}h.add(f),l.add(h),l=h,c.push(h)}return i.userData.tailSegs=c,i}function zf(){return mt(pt.sphere,ct.bubble,.28,.28,.28,0,0,0,!1)}function P_(){const i=new _e;return i.add(mt(pt.cyl,ct.pizzaCrust,.3,.06,.3,0,0,0,!0)),i.add(mt(pt.cyl,ct.pizza,.25,.03,.25,0,.04,0,!1)),i}const gr=20;function On(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function D_(i){const t=new Uc(i.map(([s,r])=>new k(s,0,r)),!1,"catmullrom",.5),e=t.getLength(),n=t.getSpacedPoints(400);return{curve:t,length:e,samples:n}}function L_(i,t,e,n,s){const a=new Cn(1,1,1,5,5,5),o=a.attributes.position,l=new k,c=new k,u=i/2,h=t/2,f=e/2,p=Math.min(n,u,h,f)*.98,v=s()*10,x=(s()-.5)*.12;for(let d=0;d<o.count;d++){l.set(o.getX(d)*i,o.getY(d)*t,o.getZ(d)*e),c.set(xe.clamp(l.x,-u+p,u-p),xe.clamp(l.y,-h+p,h-p),xe.clamp(l.z,-f+p,f-p)),l.sub(c);const y=l.length();y>0&&l.multiplyScalar(p/y),l.add(c);const S=1+.035*Math.sin(l.x*4.1+v)*Math.sin(l.z*3.7-v)+.025*Math.sin(l.y*6+v*2);l.x*=S,l.z*=S,l.y+=l.x*x,o.setXYZ(d,l.x,l.y,l.z)}a.deleteAttribute("normal"),a.deleteAttribute("uv");const m=Tf(a);return m.computeVertexNormals(),m}function I_(i,t,e,n){const s=new At(t),r=new At(e),a=new At,o=[[[2.3,.85,1.9,0,0,0],[1.6,.7,1.4,.2,-.1,.35]],[[1.5,1.5,1.4,-.35,.1,.1],[1.4,.8,1.3,.75,-.2,-.3],[.9,.6,.85,-.3,.05,.6]],[[2.4,.7,2,0,0,.2],[1.8,.65,1.5,-.15,.15,-.25],[1.1,.55,1,.2,-.1,.5]]][n%3],l=[];let c=0,u=0;o.forEach(([d,y,S,g,A,E],w)=>{const C=.88+i()*.24,M=L_(d*C,y*(.9+i()*.2),S*C,Math.min(d,y,S)*.28,i);M.rotateY(E+(i()-.5)*.3);const _=n%3===1&&w===1?0:c;M.translate(g,_+y/2,A),n%3===1&&w===1||(c=_+y*.92),u=Math.max(u,_+y),l.push(M)});const h=Ef(l),f=h.attributes.position,p=h.attributes.normal,v=[],x=.95+i()*.1,m=i()*10;for(let d=0;d<f.count;d++){const y=f.getX(d),S=f.getY(d),g=f.getZ(d);a.copy(s).multiplyScalar(x*(.72+.28*xe.smoothstep(S,0,.9))*(p.getY(d)<-.3?.8:1));const A=Math.sin(y*2.3+m)*Math.sin(g*2.7-m)+.5*Math.sin(y*5.1-g*4.3+m),E=xe.smoothstep(p.getY(d),.6,.9)*xe.smoothstep(S,u-.3,u-.08)*xe.smoothstep(A,-.55,0);a.lerp(r,E),v.push(a.r,a.g,a.b)}return h.setAttribute("color",new pe(v,3)),h}function vu(i,t,e,n,s,r,a=12,o={}){const l=o.dressed?.3:1,c=new We(t,e,n,a,3,!0),u=new es(.001,t,a,4);u.rotateX(-Math.PI/2),u.translate(0,n/2,0);const h=Ef([c,u]),f=h.attributes.position,p=i()*10;for(let E=0;E<f.count;E++){const w=f.getX(E),C=f.getY(E),M=f.getZ(E),_=Math.hypot(w,M);if(_<1e-4)continue;const T=Math.atan2(M,w);let O=1+l*(.05*Math.sin(T*3+p)+.035*Math.sin(T*7-p*2)+.025*Math.sin(C*9+T*4)),G=C;C>n/2-1e-4&&_>t*.97&&(O*=.93,G-=.08),f.setXYZ(E,w*O,G,M*O)}h.deleteAttribute("normal"),h.deleteAttribute("uv");const v=Tf(h);v.computeVertexNormals(),v.translate(0,n/2,0);const x=new At(s),m=new At(r),d=new At,y=[],S=new At("#ece3cc"),g=v.attributes.position,A=v.attributes.normal;for(let E=0;E<g.count;E++){const w=g.getX(E),C=g.getY(E),M=g.getZ(E),_=Math.atan2(M,w),T=Math.hypot(w,M);if(d.copy(x).multiplyScalar(.55+.45*xe.smoothstep(C,0,n*.9)),o.dressed){const D=xe.smoothstep(A.getY(E),.75,.95)*xe.smoothstep(C,n-.15,n-.08),F=1-xe.smoothstep(Math.abs(T-t*.72),.04,.1);d.lerp(S,D*(1-.75*F)),d.multiplyScalar(1-.45*F*D),y.push(d.r,d.g,d.b);continue}const O=Math.sin(w*1.9+p)*Math.sin(M*2.3-p)+.5*Math.sin(_*5+p)+.3*Math.sin(T*4),G=xe.smoothstep(C,n-.25,n-.05)*xe.smoothstep(O,0,.5)*xe.smoothstep(A.getY(E),.2,.7);d.lerp(m,G),y.push(d.r,d.g,d.b)}return v.setAttribute("color",new pe(y,3)),v}function xu(i,t=.55){const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,256,256);const s=On(4242);for(let l=0;l<90;l++){const c=225+s()*30|0;n.fillStyle=`rgba(${c},${c},${c},0.5)`,n.beginPath(),n.ellipse(s()*256,s()*256,8+s()*22,4+s()*10,s()*3,0,Math.PI*2),n.fill()}n.lineCap="round",n.lineJoin="round";const r=(l,c,u,h,f)=>{n.lineWidth=f,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c);for(let p=0;p<h;p++)u+=(s()-.5)*.9,l+=Math.cos(u)*9,c+=Math.sin(u)*9,n.lineTo(l,c),s()<.12&&f>1.2&&(n.stroke(),r(l,c,u+(s()<.5?1:-1)*(.6+s()*.6),h>>1,f*.7),n.lineWidth=f,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c));n.stroke()};for(let l=0;l<9;l++){const c=s()*256,u=s()*256,h=s()*6.28,f=5+(s()*7|0),p=1.6+s()*1.2;for(const[v,x]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]])n.save(),n.translate(v,x),r(c,u,h,f,p),n.restore()}const a=new ui(e);a.colorSpace=mn,a.wrapS=a.wrapT=_i,a.anisotropy=4;const o=new Xe({vertexColors:!0});return o.onBeforeCompile=l=>{l.uniforms.uCrack={value:a},l.uniforms.uWaterC={value:new At(i)},l.vertexShader=`varying vec3 vRP;
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
      }`)},o.customProgramCacheKey=()=>`rock${t}`,o}function U_(i,t,e){const n=m_(e),s=new k(e.lighthouse[0],0,e.lighthouse[1]),r=e.paths.map(D_),a=r.flatMap(L=>L.samples),o=(L,N)=>{let J=1/0;for(let ht=0;ht<a.length;ht+=3){const xt=a[ht],Tt=(xt.x-L)**2+(xt.z-N)**2;Tt<J&&(J=Tt)}return Math.sqrt(J)};if(e.plateausAuto&&!e.plateaus){const L=On(500+e.seed),N=[];for(const J of e.plateausAuto){let ht=null,xt=-1;for(let Tt=0;Tt<500;Tt++){const St=L()*Math.PI*2,Q=12+L()*24,Vt=Math.cos(St)*Q,kt=Math.sin(St)*Q,ue=o(Vt,kt);if(ue<J.r+3.5||Math.hypot(Vt-s.x,kt-s.z)<J.r+9||N.some(Re=>Math.hypot(Re.x-Vt,Re.z-kt)<Re.r+J.r+5))continue;const Ae=Math.min(ue-J.r,9)+L()*.5;Ae>xt&&(xt=Ae,ht={x:Vt,z:kt,...J})}ht&&N.push(ht)}if(e.plateaus=N,e.waterfall&&N[0]){const J=N[0],ht=e.waterfall;let xt=0,Tt=-1;for(let Vt=0;Vt<16;Vt++){const kt=Vt/16*Math.PI*2,ue=J.x+Math.cos(kt)*(J.r+3.2),Ae=J.z+Math.sin(kt)*(J.r+3.2),Re=o(ue,Ae);Re>Tt&&(Tt=Re,xt=kt)}const St=Math.cos(xt),Q=Math.sin(xt);ht.pool=[J.x+St*(J.r-2.4),J.z+Q*(J.r-2.4)],ht.lip=[J.x+St*(J.r-.3),J.z+Q*(J.r-.3)],ht.basin=[J.x+St*(J.r+3),J.z+Q*(J.r+3)]}}const l=e.fjord,c=e.nes,u=(L,N)=>{if(e.shape==="fjord"){const J=N+30+2.2*Math.sin(L*.21)+1.2*Math.sin(L*.53+1),ht=xe.clamp(N,c.z1,c.z0),xt=c.r-Math.hypot(L-c.x,N-ht)+(N<c.z1?0:.6*Math.sin(N*.7));return Math.max(J,xt)}return n(Math.atan2(N,L))-Math.hypot(L,N)},h=(L,N,J=!1)=>{const ht=xe.smoothstep(u(L,N),-3,7),xt=.9+.7*Math.sin(L*.17+1)*Math.cos(N*.21)+.35*Math.sin(L*.5+N*.4)+.3*Math.sin(L*.31-N*.23+2.1)+.18*Math.cos(L*.73+N*.61),Tt=2.4*Math.exp(-((L-s.x-2)**2+(N-s.z+1)**2)/60);let St=-2.2+ht*(2.2+xt+Tt);if(ht>.85&&St<.35&&(St=Math.max(-.42,.35-(.35-St)*3.2)),l){const Q=Math.max(xe.smoothstep(Math.abs(L),l.wall-3,l.wall+6),xe.smoothstep(N,l.top+6,l.top+14));St+=Q*(7+1.5*Math.sin(N*.13+L*.05));const Vt=Math.abs(L-l.xc(N)),kt=1-xe.smoothstep(N,l.top-6,l.top+2);Vt<l.w+1.5&&kt>0&&(St=Math.min(St,xe.lerp(St,-1.6,kt*(1-xe.smoothstep(Vt,l.w-.8,l.w+1.5)))))}for(const Q of e.plateaus||[]){const Vt=Math.hypot(L-Q.x,N-Q.z),kt=Math.atan2(N-Q.z,L-Q.x),ue=Q.r+Math.sin(kt*5+Q.x)*.8+Math.sin(kt*11)*.3;St+=Q.h*xe.smoothstep(ue-Vt,0,1.3)}if(e.waterfall&&!J){const Q=e.waterfall,Vt=Math.hypot(L-Q.pool[0],N-Q.pool[1]);Vt<Q.poolR+.6&&(Q._lvl??(Q._lvl=h(Q.pool[0],Q.pool[1],!0)-.12),St=Math.min(St,Q._lvl-.48*Math.sqrt(Math.max(0,1-Vt/(Q.poolR+.6)))));const kt=xe.clamp(((L-Q.pool[0])*(Q.lip[0]-Q.pool[0])+(N-Q.pool[1])*(Q.lip[1]-Q.pool[1]))/((Q.lip[0]-Q.pool[0])**2+(Q.lip[1]-Q.pool[1])**2),0,1),ue=Q.pool[0]+(Q.lip[0]-Q.pool[0])*kt,Ae=Q.pool[1]+(Q.lip[1]-Q.pool[1])*kt;Math.hypot(L-ue,N-Ae)<.75&&Q._lvl!==void 0&&(St=Math.min(St,Q._lvl-.25));const Re=Math.hypot(L-Q.basin[0],N-Q.basin[1]);Re<Q.basinR&&(St=Math.min(St,Math.max(-.42,.05-.47*Math.sqrt(1-Re/Q.basinR))))}if(e.volcano){const Q=e.volcano,Vt=Math.hypot(L-Q.x,N-Q.z);St+=Q.h*Math.max(0,1-Vt/Q.r)**1.4-Q.h*.5*Math.max(0,1-Vt/(Q.r*.25))}return St},f=68,p=t.mobile?160:176,v=new Float32Array((p+1)*(p+1)),x=new Float32Array((p+1)*(p+1));for(let L=0;L<=p;L++)for(let N=0;N<=p;N++){const J=-f+N/p*f*2,ht=-f+L/p*f*2,xt=o(J,ht);x[L*(p+1)+N]=xt;let Tt=h(J,ht);const St=xe.smoothstep(xt,1.4,3.2),Q=Math.max(h(J,ht)*.6+.3,.45);Tt=xe.lerp(Math.min(Tt,Q+.1),Tt,St),l&&Math.abs(ht-l.bridgeZ)<4&&Math.abs(J-l.xc(ht))<l.w+2&&xt<2.2&&(Tt=Math.max(Tt,.5)),v[L*(p+1)+N]=Tt}const m=(L,N,J)=>{const ht=xe.clamp((N+f)/(f*2)*p,0,p-.001),xt=xe.clamp((J+f)/(f*2)*p,0,p-.001),Tt=Math.floor(ht),St=Math.floor(xt),Q=ht-Tt,Vt=xt-St,kt=L[St*(p+1)+Tt],ue=L[St*(p+1)+Tt+1],Ae=L[(St+1)*(p+1)+Tt],Re=L[(St+1)*(p+1)+Tt+1];return(kt*(1-Q)+ue*Q)*(1-Vt)+(Ae*(1-Q)+Re*Q)*Vt},d=(L,N)=>m(v,L,N),y=(L,N)=>m(x,L,N),S=(L,N)=>d(L,N)>.35,g=.5,A=(L,N)=>Math.max(Math.abs(d(L+.4,N)-d(L-.4,N)),Math.abs(d(L,N+.4)-d(L,N-.4)))/.8,E=(L,N)=>!!l&&Math.abs(N-l.bridgeZ)<4&&Math.abs(L-l.xc(N))<l.w+1.5&&y(L,N)<2.6,w=new At("#cfeaff"),C=(L,N)=>d(L,N)>.05-g&&A(L,N)<1.05,M=t.mobile?170:256,_=new Zn(f*2,f*2,M,M);_.rotateX(-Math.PI/2);const T=_.attributes.position,O=new Float32Array(T.count*3),G=new Float32Array(T.count*3),D=new Float32Array(T.count),F=new Float32Array(T.count*4),B=new At,W=new At,V=e.palette,$=new At(e.rock[0]).multiplyScalar(.7),tt=new At(e.rock[0]).multiplyScalar(1.08),rt=new At,Ct=new At(V.sand),Bt=new At(V.grass),nt=new At(V.grass2),ut=new At(V.path),Rt=new At(V.deep),ft=new At,zt=On(7);for(let L=0;L<T.count;L++){const N=T.getX(L),J=T.getZ(L),ht=d(N,J);T.setY(L,ht);const xt=y(N,J),Tt=(zt()-.5)*.04,St=ft.copy(Bt).lerp(nt,xe.clamp((ht-1)*.6+zt()*.3,0,1)).offsetHSL(0,0,Tt);G.set([St.r,St.g,St.b],L*3),B.copy(Rt).lerp(Ct,xe.smoothstep(ht,0,.3)).offsetHSL(0,0,Tt),O.set([B.r,B.g,B.b],L*3);const Q=.5+.5*Math.sin(N*1.7+J*.9)*Math.cos(J*1.3-N*.6);D[L]=1.9-Math.min(xt,6)+(Q-.5)*(V.pathMix??.3)*2.4-Math.max(0,.3-ht)*2.5;let Vt=0;l&&E(N,J)&&(W.copy(w),Vt=.85);const kt=A(N,J);if(kt>.75){const ue=.5+.5*Math.sin(ht*7.5+Math.sin(N*.7+J*.5)*1.5);rt.copy($).lerp(tt,ue);const Ae=xe.smoothstep(kt,.75,1.3);W.copy(Vt?W:rt).lerp(rt,Ae),Vt=Math.max(Vt,Ae)}F.set([W.r,W.g,W.b,Vt],L*4)}_.setAttribute("aLow",new Ve(O,3)),_.setAttribute("aGrass",new Ve(G,3)),_.setAttribute("aPathF",new Ve(D,1)),_.setAttribute("aOver",new Ve(F,4)),_.computeVertexNormals();const Ht=new Xe({color:"#ffffff"});Ht.onBeforeCompile=L=>{L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
attribute vec3 aLow, aGrass;
attribute vec4 aOver;
attribute float aPathF;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vLow = aLow; vGrass = aGrass; vOver = aOver; vPathF = aPathF;`),L.uniforms.uPath={value:ut},L.fragmentShader=L.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const $t=new oe(_,Ht);$t.receiveShadow=!0,i.add($t);const te=[],dt=(L,N)=>Math.hypot(L-s.x,N-s.z)>6;for(const[L,N]of r.entries()){let J=L%2===0?1:-1,ht=0;for(let xt=.16;xt<.95&&ht<6;xt+=.055){const Tt=N.curve.getPointAt(xt),St=N.curve.getTangentAt(xt),Q=new k(-St.z,0,St.x).normalize();for(const Vt of[J,-J]){const kt=Tt.x+Q.x*3.6*Vt,ue=Tt.z+Q.z*3.6*Vt;if(!(y(kt,ue)<2.7||!S(kt,ue)||!dt(kt,ue))&&!te.some(Ae=>Math.hypot(Ae.x-kt,Ae.z-ue)<5.2)&&!(e.volcano&&Math.hypot(kt-e.volcano.x,ue-e.volcano.z)<e.volcano.r+2)){te.push({x:kt,z:ue,tower:null}),ht++;break}}J=-J}}const wt=xu(e.water.mid),z=new De({color:new At("#ffd27a").multiplyScalar(1.6),transparent:!0,opacity:.75,depthWrite:!1}),Wt=new De({color:new At("#ffe9a8").multiplyScalar(2),transparent:!0,opacity:.85,depthWrite:!1}),_t=vu(On(61+e.seed),1.3,1.45,.98,e.rock[0],e.rock[1],8,{dressed:!0});_t.translate(0,-.1,0);const Nt=new es(.55,.75,6);Nt.rotateX(-Math.PI/2);const Dt=new pr(1,0),ee=te.length,q=new gn(_t,wt,ee),R=new gn(Nt,z,ee),b=new gn(Dt,Wt,ee*3);q.castShadow=q.receiveShadow=!0;const H=new He;te.forEach((L,N)=>{L.y0=d(L.x,L.z),L.y=L.y0+.88,H.position.set(L.x,L.y0,L.z),H.rotation.set(0,N,0),H.scale.setScalar(1),H.updateMatrix(),q.setMatrixAt(N,H.matrix)}),i.add(q,R,b),rc(q,"rock");const K=L=>{te.forEach((N,J)=>{const ht=!N.tower;H.position.set(N.x,N.y0+.9,N.z),H.rotation.set(0,L*.5,0),H.scale.setScalar(ht?1:0),H.updateMatrix(),R.setMatrixAt(J,H.matrix);for(let xt=0;xt<3;xt++){const Tt=L*.4+xt*2.1+N.x,St=(Tt%1+1)%1;H.position.set(N.x+Math.cos(Tt*2.3)*.55,N.y0+1+St*1.1,N.z+Math.sin(Tt*2.3)*.55),H.rotation.set(0,Tt*3,0);const Q=ht?.07*Math.sin(St*Math.PI):0;H.scale.set(Q,Q*1.6,Q),H.updateMatrix(),b.setMatrixAt(J*3+xt,H.matrix)}}),R.instanceMatrix.needsUpdate=!0,b.instanceMatrix.needsUpdate=!0},et=new _e,it=d(s.x,s.z);et.position.set(s.x,it,s.z);const Ut=(()=>{const L=document.createElement("canvas");L.width=512,L.height=512;const N=L.getContext("2d");N.fillStyle="#f6f1e6",N.fillRect(0,0,512,512);const J=On(5);for(let xt=0;xt<520;xt++){const Tt=J()*512,St=J()*512,Q=2+J()*9,Vt=J()<.65;N.fillStyle=Vt?`rgba(${90+J()*40},${120+J()*40},${60+J()*20},${.12+J()*.18})`:`rgba(${130+J()*30},${95+J()*20},60,${.12+J()*.15})`,N.beginPath(),N.ellipse(Tt,St,Q,Q*(.4+J()*.6),J()*3,0,Math.PI*2),N.fill()}for(let xt=0;xt<1200;xt++){N.strokeStyle=`rgba(190,170,140,${.04+J()*.07})`,N.lineWidth=1;const Tt=J()*512,St=J()*512;N.beginPath(),N.moveTo(Tt,St),N.lineTo(Tt+(J()-.5)*8,St+6+J()*20),N.stroke()}for(let xt=0;xt<26;xt++){const Tt=J()*512;N.strokeStyle=J()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",N.lineWidth=2+J()*5,N.beginPath(),N.moveTo(Tt,512),N.bezierCurveTo(Tt+40,350,Tt-30,160,Tt+20+J()*40,0),N.stroke()}N.strokeStyle="rgba(175,145,100,0.55)",N.lineWidth=4,N.beginPath(),N.moveTo(60,512),N.bezierCurveTo(90,330,110,180,150,0),N.stroke();const ht=new ui(L);return ht.colorSpace=mn,ht.wrapS=_i,ht})(),Mt=new Xe({map:Ut}),Pt=(()=>{const L=document.createElement("canvas");L.width=L.height=128;const N=L.getContext("2d");N.fillStyle="#e9dcbf",N.fillRect(0,0,128,128),N.strokeStyle="#a88d62",N.lineWidth=3,N.beginPath();for(let ht=0;ht<Math.PI*9;ht+=.1){const xt=4+ht*2;N.lineTo(64+Math.cos(ht)*xt,64+Math.sin(ht)*xt)}N.stroke();const J=new ui(L);return J.colorSpace=mn,J})(),re=new Xe({color:"#e6d8b8"}),yt=new Xe({map:Pt}),Xt=new Xe({color:"#3a3330",flatShading:!0}),ae=new Xe({color:"#b8b2aa",flatShading:!0}),le=(()=>{const L=document.createElement("canvas");L.width=256,L.height=128;const N=L.getContext("2d"),J=N.createLinearGradient(0,0,0,128);J.addColorStop(0,"#fff0b0"),J.addColorStop(.45,"#ffb040"),J.addColorStop(1,"#ff5a10"),N.fillStyle=J,N.fillRect(0,0,256,128);const ht=On(11);for(let Tt=0;Tt<70;Tt++){const St=ht();N.fillStyle=St<.5?`rgba(70,60,55,${.5+ht()*.4})`:`rgba(170,165,160,${.5+ht()*.4})`,N.beginPath(),N.ellipse(ht()*256,20+ht()*108,4+ht()*14,2+ht()*6,ht()*3,0,Math.PI*2),N.fill()}N.strokeStyle="rgba(60,30,20,0.6)",N.lineWidth=1.5;for(let Tt=0;Tt<40;Tt++){const St=ht()*256,Q=ht()*128;N.beginPath(),N.moveTo(St,Q),N.lineTo(St+(ht()-.5)*30,Q+(ht()-.5)*20),N.stroke()}const xt=new ui(L);return xt.colorSpace=mn,xt})(),jt=new De({map:le,color:new At("#ffffff").multiplyScalar(2.2)});function ye({len:L,rTop:N,rBot:J,crutchH:ht,seg:xt,bend:Tt,glowMat:St,shadow:Q}){const Vt=new _e,kt=new oe(new We(J*.98,J*.95,ht,xt),[re,re,yt]);kt.position.y=ht/2,kt.castShadow=Q,Vt.add(kt);const ue=new We(N,J,L,xt,8,!0),Ae=ue.attributes.position,Re=On(Math.round(L*100)),bi=Array.from({length:6},()=>[Re()*6.28,Re()*3,.03+Re()*.04]);for(let Ie=0;Ie<Ae.count;Ie++){const ti=Ae.getY(Ie),ei=(ti+L/2)/L,wr=Math.atan2(Ae.getZ(Ie),Ae.getX(Ie));let Ls=1+Math.sin(wr*7+ti*3)*.018;for(const[sd,rd,ad]of bi)Ls+=Math.cos(wr-sd)*Math.sin(ei*6+rd)*ad*.5;Ae.setXYZ(Ie,Ae.getX(Ie)*Ls+Tt*ei*ei*L,ti,Ae.getZ(Ie)*Ls)}ue.translate(0,L/2,0),ue.computeVertexNormals();const Ce=new oe(ue,Mt);Ce.position.y=ht,Ce.castShadow=Q,Ce.receiveShadow=!0,Vt.add(Ce);const _n=Tt*L,Qn=ht+L,Mn=new We(N*1.02,N*1.04,N*.35,xt,1,!0),Un=Mn.attributes.position;for(let Ie=0;Ie<Un.count;Ie++)Un.getY(Ie)>0&&Un.setY(Ie,Un.getY(Ie)+Math.sin(Ie*2.7)*N*.12);Mn.computeVertexNormals();const Nn=new oe(Mn,Xt);Nn.position.set(_n,Qn+N*.12,0),Vt.add(Nn);const Bi=new oe(new Gn(N*.97,xt,6,0,Math.PI*2,0,Math.PI/2),St);Bi.scale.y=.38,Bi.position.set(_n,Qn+N*.2,0),Vt.add(Bi);const vo=[];for(let Ie=0;Ie<5;Ie++){const ti=new oe(new co(N*(.2+Ie%3*.07),0),ae),ei=Ie*1.25+.3;ti.position.set(_n+Math.cos(ei)*N*.55,Qn+N*.33,Math.sin(ei)*N*.55),ti.scale.y=.4,Vt.add(ti),vo.push(ti)}const xo=new Bn(N*.28,N*1.1,6,4),Ds=xo.attributes.position;for(let Ie=0;Ie<Ds.count;Ie++){const ti=Ds.getY(Ie),ei=(ti/(N*1.1)+.5)*2.2,wr=Ds.getX(Ie),Ls=Ds.getZ(Ie);Ds.setX(Ie,wr*Math.cos(ei)-Ls*Math.sin(ei)+(ti+N*.55)*.25),Ds.setZ(Ie,wr*Math.sin(ei)+Ls*Math.cos(ei))}xo.computeVertexNormals();const br=new oe(xo,Xt);return br.position.set(_n+N*.1,Qn+N*.7,N*.1),br.rotation.z=-.35,Vt.add(br),Vt.userData={glow:Bi,top:new k(_n,Qn,0),charRing:Nn,ashFlakes:vo,body:Ce,twist:br,len:L,rTop:N,rBot:J,bend:Tt,crutchH:ht,base:Ce.geometry.attributes.position.array.slice(),topParts:[Nn,Bi,br,...vo].map(Ie=>[Ie,Ie.position.clone(),Ie.scale.clone()])},Vt}const ce=new At(e.rock[0]).multiplyScalar(.86),Se=new oe(vu(On(67+e.seed),3.3,3.9,1,ce,e.rock[1],16),xu(e.water.mid,.2));Se.position.y=-.2,Se.castShadow=Se.receiveShadow=!0,et.add(Se),ia(Se,"rock");const X=7.4,It=1.4,at=ye({len:X,rTop:2.35,rBot:.95,crutchH:It,seg:22,bend:.06,glowMat:jt,shadow:!0});at.position.y=.75,at.rotation.set(.06,0,-.03);const vt=at.userData.charRing;et.add(at);const Ft=new He;Ft.position.y=It+X+1.2,at.add(Ft);const Ot=new jr("#ff8a3a",40,34,1.5);Ot.position.y=It+X+1.4,at.add(Ot);const he=new Bn(2.2,16,16,6,!0);he.translate(0,-8,0);{const L=he.attributes.position,N=new Float32Array(L.count*3);for(let J=0;J<L.count;J++){const ht=Math.pow(1-Math.min(1,-L.getY(J)/16),1.6);N.set([ht,ht,ht],J*3)}he.setAttribute("color",new Ve(N,3))}he.rotateZ(Math.PI/2);const Fe=new De({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:fi,depthWrite:!1,side:Je,fog:!1}),Be=new _e;Be.position.y=It+X+.8;const we=new oe(he,Fe),xn=we.clone();xn.rotation.y=Math.PI,Be.add(we,xn),at.add(Be);const dn=new jr("#ffa050",12,10,1.4);dn.position.set(0,1.3,4.6),et.add(dn),i.add(et),et.updateMatrixWorld(!0);const Kn=new k;Ft.getWorldPosition(Kn);const U=at.userData,gt=[Ft,Ot,Be].map(L=>[L,L.position.y]),lt=L=>U.rBot+(U.rTop-U.rBot)*L;function Zt(L){const N=.15+.85*Math.max(0,Math.min(1,L)),J=U.body.geometry.attributes.position,ht=U.base;for(let Q=0;Q<J.count;Q++){const Vt=ht[Q*3+1],kt=Vt/U.len,ue=kt*N,Ae=lt(ue)/lt(kt);J.setXYZ(Q,(ht[Q*3]-U.bend*kt*kt*U.len)*Ae+U.bend*ue*ue*U.len,ue*U.len,ht[Q*3+2]*Ae)}J.needsUpdate=!0,U.body.geometry.computeVertexNormals(),U.body.geometry.computeBoundingSphere();const xt=(N-1)*U.len,Tt=lt(N)/U.rTop,St=U.bend*U.len*(N*N-1);for(const[Q,Vt,kt]of U.topParts)Q.position.set(U.top.x+(Vt.x-U.top.x)*Tt+St,Vt.y+xt,Vt.z*Tt),Q.scale.set(kt.x*Tt,kt.y*Tt,kt.z*Tt);for(const[Q,Vt]of gt)Q.position.y=Vt+xt;et.updateMatrixWorld(!0),Ft.getWorldPosition(Kn)}const Qt={tip:Kn,pos:new k(s.x,it,s.z),lights:gr,flamePos(){return Kn.clone()},setLights(L){this.lights=L;const N=L/gr;Zt(N),this.glow=N,dn.intensity=3+9*N,Fe.opacity=.01+.04*N,vt.scale.y*=1+(1-N)*2.5}},Et=On(42),Kt=[];for(let L=0;L<3e3&&Kt.length<(t.mobile?70:104);L++){const N=(Et()-.5)*102,J=(Et()-.5)*102,ht=d(N,J);if(ht<.75||y(N,J)<3.2||!dt(N,J)||te.some(Q=>Math.hypot(Q.x-N,Q.z-J)<3.2)||Kt.some(Q=>Math.hypot(Q.x-N,Q.z-J)<2.4)||e.volcano&&Math.hypot(N-e.volcano.x,J-e.volcano.z)<e.volcano.r)continue;const xt=ht<1.45?e.trees.beach:e.trees.inland;let Tt=Et(),St="bush";for(const[Q,Vt]of Object.entries(xt)){if(Tt<Vt){St=Q;break}Tt-=Vt}Kt.push({x:N,z:J,y:ht,s:(St==="bush"?.8:.75)+Et()*.45,phase:Et()*6.28,kind:St})}if(e.trees.inland.bush){const L=On(303+e.seed),N=Kt.filter(J=>J.kind!=="bush"&&J.y>=1);for(const J of N){if(L()>(t.mobile?.6:.75))continue;const ht=1+Math.floor(L()*3);for(let xt=0;xt<ht;xt++){const Tt=L()*6.28,St=1.3+L()*1,Q=J.x+Math.cos(Tt)*St,Vt=J.z+Math.sin(Tt)*St,kt=d(Q,Vt);kt<1||y(Q,Vt)<3||!dt(Q,Vt)||te.some(ue=>Math.hypot(ue.x-Q,ue.z-Vt)<3)||Kt.some(ue=>ue!==J&&Math.hypot(ue.x-Q,ue.z-Vt)<1.3)||Kt.push({x:Q,z:Vt,y:kt,s:.55+L()*.35,phase:L()*6.28,kind:"bush"})}}}const se=l_(i,Kt,t,e),me=new He,Ee=[];for(let L=0;L<1200&&Ee.length<(t.mobile?40:56);L++){const N=Et()*Math.PI*2,J=n(N)-3+Et()*5.5,ht=Math.cos(N)*J,xt=Math.sin(N)*J;y(ht,xt)<3.4||d(ht,xt)<-1.2||Ee.some(Tt=>Math.hypot(Tt.x-ht,Tt.z-xt)<2.2)||Ee.push({x:ht,z:xt,s:.6+Et()*1.2,r:Et()*6})}for(const L of e.plateaus||[]){const N=Math.round(L.r*2*Math.PI/2.3);for(let J=0;J<N;J++){const ht=J/N*Math.PI*2+Et()*.2,xt=L.r+Math.sin(ht*5+L.x)*.8+Math.sin(ht*11)*.3-.2,Tt=L.x+Math.cos(ht)*xt,St=L.z+Math.sin(ht)*xt;e.waterfall&&Math.hypot(Tt-e.waterfall.lip[0],St-e.waterfall.lip[1])<2.2||y(Tt,St)<2.6||Ee.push({x:Tt,z:St,s:1.3+Et()*.9,r:Et()*6,cliff:!0})}}[0,1,2].map(L=>I_(On(31+L*7+e.seed),e.rock[0],e.rock[1],L)).map((L,N)=>{const J=Ee.filter((xt,Tt)=>Tt%3===N),ht=new gn(L,wt,Math.max(1,J.length));return ht.count=J.length,J.forEach((xt,Tt)=>{me.position.set(xt.x,d(xt.x,xt.z)-.2*xt.s,xt.z),me.rotation.set(0,xt.r*2,0),me.scale.set(xt.s*1.1,xt.s*.9,xt.s),me.updateMatrix(),ht.setMatrixAt(Tt,me.matrix)}),ht.castShadow=ht.receiveShadow=!0,i.add(ht),rc(ht,"rock"),ht});const Xn=Kx(i,{heightAt:d,pathDist:y,plinths:te,paths:r,lighthouse:Qt,landDist:u},t,On(99+e.seed),n,e),Jn=__(i,{heightAt:d,pathDist:y,paths:r,lighthouse:Qt,islandEdge:n},t,e),P=[...Kt.map(L=>[L.x,L.z,1.3*L.s]),...Ee.map(L=>[L.x,L.z,L.s*1.6]),...te.map(L=>[L.x,L.z,1.9])],j=(L,N)=>{let J=1;for(const[ht,xt,Tt]of P){const St=(ht-L)**2+(xt-N)**2;St<Tt*Tt&&(J=Math.min(J,.55+.45*Math.sqrt(St)/Tt))}return J},st=h_(i,{heightAt:d,pathDist:y,plinths:te,lighthouse:Qt,extrasBlock:Jn.blocks,shadeAt:j},t,e,On(7+e.seed)),ot={palm:.9,round:1.45,bush:1,pine:1.35,dead:.6};y_(i,[...Kt.map(L=>({x:L.x,y:L.y,z:L.z,r:(ot[L.kind]??1)*L.s})),...Ee.map(L=>({x:L.x,y:d(L.x,L.z),z:L.z,r:L.s*(L.cliff?1.7:1.55)})).filter(L=>L.y>.05),...te.map(L=>({x:L.x,y:L.y0,z:L.z,r:1.95})),{x:s.x,y:it,z:s.z,r:4.8}]);const Y=Float32Array.from(v),Lt=[...Ee.map(L=>({x:L.x,z:L.z,r:L.s*.85})),...Xn.obstacles];for(const L of Lt){const N=L.r+1,J=f*2/p,ht=Math.floor((L.x-N+f)/J),xt=Math.ceil((L.x+N+f)/J),Tt=Math.floor((L.z-N+f)/J),St=Math.ceil((L.z+N+f)/J);for(let Q=Math.max(0,Tt);Q<=Math.min(p,St);Q++)for(let Vt=Math.max(0,ht);Vt<=Math.min(p,xt);Vt++){const kt=-f+Vt*J,ue=-f+Q*J,Ae=Math.max(0,Math.hypot(kt-L.x,ue-L.z)-L.r);if(Ae>.9)continue;const Re=Q*(p+1)+Vt,bi=.06-Ae*.35,Ce=1-Ae/.9;Y[Re]=Math.max(Y[Re],Y[Re]+(bi-Y[Re])*Ce*Ce)}}if(e.waterfall&&e.waterfall._lvl!==void 0){const L=e.waterfall;lu(i,{heightTex:cu(Y,p+1),ext:f,grid:p,quality:t,sunDir:new k(24,17,4),colors:e.water,level:L._lvl,size:9,maxDepth:.8,center:[(L.pool[0]+L.lip[0])/2,(L.pool[1]+L.lip[1])/2]})}const qt=lu(i,{heightTex:cu(Y,p+1),ext:f,grid:p,quality:t,sunDir:new k(24,17,4),colors:e.water}),ne=[{x:s.x,z:s.z,r:3.5},...te.map(L=>({x:L.x,z:L.z,r:1.4})),...se.colliders,...Ee.filter(L=>d(L.x,L.z)>-.45).map(L=>({x:L.x,z:L.z,r:L.s*.85})),...Xn.colliders,...Jn.colliders];return{def:e,paths:r,plinths:te,lighthouse:Qt,heightAt:d,pathDist:y,slopeAt:A,isLand:S,isIce:E,landDist:u,isWalkable:(L,N)=>C(L,N)&&!Jn.blocks(L,N),colliders:ne,update:L=>{qt.update(L),Xn.update(L),Jn.update(L),st.update(L);const N=Qt.glow??1,J=.75+.25*Math.sin(L*1.3)+.1*Math.sin(L*7.1);jt.color.setRGB(1,.85,.75).multiplyScalar(N>0?(.7+1.5*N)*J:.12),Ot.intensity=(8+40*N)*J,Be.rotation.y=L*.6,se.update(L),K(L)},terrain:$t,extras:Jn,grass:st}}const Gr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ps{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const N_=new Ac(-1,1,1,-1,0,1);class z_ extends ze{constructor(){super(),this.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pe([0,2,0,0,2,0],2))}}const F_=new z_;class uo{constructor(t){this._mesh=new oe(F_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,N_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ff extends Ps{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof je?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=li.clone(t.uniforms),this.material=new je({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new uo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _u extends Ps{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class O_ extends Ps{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class k_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new bt);this._width=n.width,this._height=n.height,e=new In(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ff(Gr),this.copyPass.material.blending=pn,this.clock=new Mf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_u!==void 0&&(a instanceof _u?n=!0:a instanceof O_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class B_ extends Ps{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new At}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Na={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new bt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Le},cameraProjectionMatrixInverse:{value:new Le},cameraWorldMatrix:{value:new Le},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new k(-1,-1,-1)},sceneBoxMax:{value:new k(1,1,1)}},vertexShader:`

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
		}`},za={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},nl={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function G_(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=V_(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=e[a],l=2*Math.PI*o/n,c=new k(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new ao(s,t,t);return r.wrapS=_i,r.wrapT=_i,r.needsUpdate=!0,r}function V_(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}const Fa={defines:{SAMPLES:16,SAMPLE_VECTORS:Of(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new bt},cameraProjectionMatrixInverse:{value:new Le},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Of(i,t,e){const n=H_(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function H_(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new k(Math.cos(r),Math.sin(r),a))}return n}class W_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,p=c-h,v=t-f,x=e-p;let m,d;v>x?(m=1,d=0):(m=0,d=1);const y=v-m+u,S=x-d+u,g=v-1+2*u,A=x-1+2*u,E=l&255,w=c&255,C=this.perm[E+this.perm[w]]%12,M=this.perm[E+m+this.perm[w+d]]%12,_=this.perm[E+1+this.perm[w+1]]%12;let T=.5-v*v-x*x;T<0?n=0:(T*=T,n=T*T*this.dot(this.grad3[C],v,x));let O=.5-y*y-S*S;O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[M],y,S));let G=.5-g*g-A*A;return G<0?r=0:(G*=G,r=G*G*this.dot(this.grad3[_],g,A)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const c=(t+e+n)*.3333333333333333,u=Math.floor(t+c),h=Math.floor(e+c),f=Math.floor(n+c),p=1/6,v=(u+h+f)*p,x=u-v,m=h-v,d=f-v,y=t-x,S=e-m,g=n-d;let A,E,w,C,M,_;y>=S?S>=g?(A=1,E=0,w=0,C=1,M=1,_=0):y>=g?(A=1,E=0,w=0,C=1,M=0,_=1):(A=0,E=0,w=1,C=1,M=0,_=1):S<g?(A=0,E=0,w=1,C=0,M=1,_=1):y<g?(A=0,E=1,w=0,C=0,M=1,_=1):(A=0,E=1,w=0,C=1,M=1,_=0);const T=y-A+p,O=S-E+p,G=g-w+p,D=y-C+2*p,F=S-M+2*p,B=g-_+2*p,W=y-1+3*p,V=S-1+3*p,$=g-1+3*p,tt=u&255,rt=h&255,Ct=f&255,Bt=this.perm[tt+this.perm[rt+this.perm[Ct]]]%12,nt=this.perm[tt+A+this.perm[rt+E+this.perm[Ct+w]]]%12,ut=this.perm[tt+C+this.perm[rt+M+this.perm[Ct+_]]]%12,Rt=this.perm[tt+1+this.perm[rt+1+this.perm[Ct+1]]]%12;let ft=.6-y*y-S*S-g*g;ft<0?s=0:(ft*=ft,s=ft*ft*this.dot3(this.grad3[Bt],y,S,g));let zt=.6-T*T-O*O-G*G;zt<0?r=0:(zt*=zt,r=zt*zt*this.dot3(this.grad3[nt],T,O,G));let Ht=.6-D*D-F*F-B*B;Ht<0?a=0:(Ht*=Ht,a=Ht*Ht*this.dot3(this.grad3[ut],D,F,B));let $t=.6-W*W-V*V-$*$;return $t<0?o=0:($t*=$t,o=$t*$t*this.dot3(this.grad3[Rt],W,V,$)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,f,p,v;const x=(t+e+n+s)*l,m=Math.floor(t+x),d=Math.floor(e+x),y=Math.floor(n+x),S=Math.floor(s+x),g=(m+d+y+S)*c,A=m-g,E=d-g,w=y-g,C=S-g,M=t-A,_=e-E,T=n-w,O=s-C,G=M>_?32:0,D=M>T?16:0,F=_>T?8:0,B=M>O?4:0,W=_>O?2:0,V=T>O?1:0,$=G+D+F+B+W+V,tt=a[$][0]>=3?1:0,rt=a[$][1]>=3?1:0,Ct=a[$][2]>=3?1:0,Bt=a[$][3]>=3?1:0,nt=a[$][0]>=2?1:0,ut=a[$][1]>=2?1:0,Rt=a[$][2]>=2?1:0,ft=a[$][3]>=2?1:0,zt=a[$][0]>=1?1:0,Ht=a[$][1]>=1?1:0,$t=a[$][2]>=1?1:0,te=a[$][3]>=1?1:0,dt=M-tt+c,wt=_-rt+c,z=T-Ct+c,Wt=O-Bt+c,_t=M-nt+2*c,Nt=_-ut+2*c,Dt=T-Rt+2*c,ee=O-ft+2*c,q=M-zt+3*c,R=_-Ht+3*c,b=T-$t+3*c,H=O-te+3*c,K=M-1+4*c,et=_-1+4*c,it=T-1+4*c,Ut=O-1+4*c,Mt=m&255,Pt=d&255,re=y&255,yt=S&255,Xt=o[Mt+o[Pt+o[re+o[yt]]]]%32,ae=o[Mt+tt+o[Pt+rt+o[re+Ct+o[yt+Bt]]]]%32,le=o[Mt+nt+o[Pt+ut+o[re+Rt+o[yt+ft]]]]%32,jt=o[Mt+zt+o[Pt+Ht+o[re+$t+o[yt+te]]]]%32,ye=o[Mt+1+o[Pt+1+o[re+1+o[yt+1]]]]%32;let ce=.6-M*M-_*_-T*T-O*O;ce<0?u=0:(ce*=ce,u=ce*ce*this.dot4(r[Xt],M,_,T,O));let Se=.6-dt*dt-wt*wt-z*z-Wt*Wt;Se<0?h=0:(Se*=Se,h=Se*Se*this.dot4(r[ae],dt,wt,z,Wt));let X=.6-_t*_t-Nt*Nt-Dt*Dt-ee*ee;X<0?f=0:(X*=X,f=X*X*this.dot4(r[le],_t,Nt,Dt,ee));let It=.6-q*q-R*R-b*b-H*H;It<0?p=0:(It*=It,p=It*It*this.dot4(r[jt],q,R,b,H));let at=.6-K*K-et*et-it*it-Ut*Ut;return at<0?v=0:(at*=at,v=at*at*this.dot4(r[ye],K,et,it,Ut)),27*(u+h+f+p+v)}}class mi extends Ps{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=G_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new In(this.width,this.height,{type:jn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new je({defines:Object.assign({},Na.defines),uniforms:li.clone(Na.uniforms),vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader,blending:pn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Xx,this.normalMaterial.blending=pn,this.pdMaterial=new je({defines:Object.assign({},Fa.defines),uniforms:li.clone(Fa.uniforms),vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new je({defines:Object.assign({},za.defines),uniforms:li.clone(za.uniforms),vertexShader:za.vertexShader,fragmentShader:za.fragmentShader,blending:pn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new je({uniforms:li.clone(Gr.uniforms),vertexShader:Gr.vertexShader,fragmentShader:Gr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:fl,blendDst:Lr,blendEquation:ai,blendSrcAlpha:ul,blendDstAlpha:Lr,blendEquationAlpha:ai}),this.blendMaterial=new je({uniforms:li.clone(nl.uniforms),vertexShader:nl.vertexShader,fragmentShader:nl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Iu,blendSrc:fl,blendDst:Lr,blendEquation:ai,blendSrcAlpha:ul,blendDstAlpha:Lr,blendEquationAlpha:ai}),this.fsQuad=new uo(null),this.originalClearColor=new At,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Rc,this.depthTexture.format=bs,this.depthTexture.type=Ss,this.normalRenderTarget=new In(this.width,this.height,{minFilter:vn,magFilter:vn,type:jn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Of(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case mi.OUTPUT.Off:break;case mi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case mi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case mi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case mi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case mi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case mi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new W_,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){const l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new ao(s,t,t,$n,Mi);return r.wrapS=_i,r.wrapT=_i,r.needsUpdate=!0,r}}mi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const X_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new At(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class vr extends Ps{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new bt(t.x,t.y):new bt(256,256),this.clearColor=new At(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new In(r,a,{type:jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new In(r,a,{type:jn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new In(r,a,{type:jn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=X_;this.highPassUniforms=li.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new je({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new bt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Gr;this.copyUniforms=li.clone(u.uniforms),this.blendMaterial=new je({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:fi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new At,this.oldClearAlpha=1,this.basic=new De,this.fsQuad=new uo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new bt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=vr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=vr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new je({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new bt(.5,.5)},direction:{value:new bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}vr.BlurDirectionX=new bt(1,0);vr.BlurDirectionY=new bt(0,1);const q_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Y_ extends Ps{constructor(){super();const t=q_;this.uniforms=li.clone(t.uniforms),this.material=new Wx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new uo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Pe.getTransfer(this._outputColorSpace)===Oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ou&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const $_={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new k(1,1,1)},uLift:{value:new k},uSat:{value:1.08}},vertexShader:`
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
    }`},j_=new URLSearchParams(location.search).get("ao")==="1";function Z_(i,t,e,n={}){const s=new k_(i,new In(1,1,{type:jn})),r=new B_(t,e),a=new mi(t,e,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});a.blendIntensity=1;const o=new vr(new bt(256,256),.6,.55,1),l=new Ff($_);n.tint&&l.uniforms.uTint.value.set(...n.tint),n.lift&&l.uniforms.uLift.value.set(...n.lift),n.sat&&(l.uniforms.uSat.value=n.sat),l.uniforms.uVignette.value=n.vignette??.25;const c=new Y_;for(const v of[r,a,o,l,c])s.addPass(v);let u="high",h=1,f=1;const p={composer:s,get level(){return u},setLevel(v){u=v,a.enabled=v==="high"&&j_,o.strength=v==="high"?.6:.5;const x=v==="high"?4:0;for(const m of[s.renderTarget1,s.renderTarget2])m.samples!==x&&(m.samples=x,m.dispose());p.setSize(h,f)},setSize(v,x){h=v,f=x;const m=i.getPixelRatio();s.setPixelRatio(m),s.setSize(v,x);const d=u==="high"?2:4;o.resolution.set(v*m/d,x*m/d),o.setSize(v*m/d,x*m/d)},render(v){s.render(v)}};return p}function K_(i,t,e,n,s,r=null){const{heightAt:a}=t,o=e.mobile?.5:1,l=new Set(n.life),c=new He,u=new At,h=[],f=()=>{for(let v=0;v<50;v++){const x=(Math.random()-.5)*80,m=(Math.random()-.5)*80,d=a(x,m);if(d>.8)return{x,z:m,h:d}}return{x:0,z:0,h:1}};if(l.has("butterflies")){const v=Math.round(26*o),x=new dr(.16,6,0,Math.PI);x.scale(1,1.3,1);const d=[-1,1].map(()=>new Xe({color:"#ffffff",side:Je})).map(g=>{const A=new gn(x,g,v);return i.add(A),A}),y=Array.from({length:v},(g,A)=>({...f(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),S=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];y.forEach((g,A)=>{g.home={x:g.x,z:g.z},d.forEach(E=>E.setColorAt(A,u.set(S[A%S.length])))}),d.forEach(g=>g.instanceColor.needsUpdate=!0),h.push((g,A)=>{y.forEach((E,w)=>{E.a+=Math.sin(A*.7+E.ph)*1.6*g,E.x+=Math.cos(E.a)*E.sp*g,E.z+=Math.sin(E.a)*E.sp*g,Math.hypot(E.x-E.home.x,E.z-E.home.z)>5&&(E.a=Math.atan2(E.home.z-E.z,E.home.x-E.x));const C=a(E.x,E.z)+.6+Math.sin(A*2+E.ph)*.25,M=Math.sin(A*18+E.ph)*1.1;d.forEach((_,T)=>{c.position.set(E.x,C,E.z),c.rotation.set(0,-E.a+Math.PI/2,0),c.rotateZ((T?1:-1)*(.3+M*.5)),c.rotateX(-Math.PI/2),c.scale.set(T?1:-1,1,1),c.updateMatrix(),_.setMatrixAt(w,c.matrix)})}),d.forEach(E=>E.instanceMatrix.needsUpdate=!0)})}if(l.has("birds")){const x=new ze;x.setAttribute("position",new pe([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),x.computeVertexNormals();const m=new gn(x,new Xe({color:"#f4f4f0",side:Je}),7);m.castShadow=!0,i.add(m);const d=Array.from({length:7},(y,S)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:S}));h.push((y,S)=>{d.forEach((g,A)=>{const E=S*g.sp+g.ph;c.position.set(g.cx+Math.cos(E)*g.r,g.y+Math.sin(S*.7+A)*.4,g.cz+Math.sin(E)*g.r),c.rotation.set(0,-E,Math.sin(S*.5+A)*.15);const w=1+Math.sin(S*6+A)*.35*(Math.sin(S*.4+A)>.3?1:.1),C=r?xe.smoothstep(c.position.distanceTo(r.position),3,7):1;c.scale.set(1.4*C,w*1.4*C,1.4*C),c.updateMatrix(),m.setMatrixAt(A,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("leaves")){const v=Math.round(60*o),x=new Zn(.16,.1),m=new gn(x,new Xe({color:"#ffffff",side:Je}),v);i.add(m);const d=Array.from({length:v},(y,S)=>({...f(),ph:Math.random()*6,sp:1+Math.random()*1.5}));d.forEach((y,S)=>m.setColorAt(S,u.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][S%4]))),m.instanceColor.needsUpdate=!0,h.push((y,S)=>{d.forEach((g,A)=>{g.x+=g.sp*y,g.z+=Math.sin(S*.8+g.ph)*.6*y,g.x>45&&Object.assign(g,f(),{x:-45});const E=Math.max(a(g.x,g.z),.1)+.3+Math.abs(Math.sin(S*1.3+g.ph))*.9;c.position.set(g.x,E,g.z),c.rotation.set(S*3+g.ph,S*2+g.ph,S*1.5),c.scale.setScalar(1),c.updateMatrix(),m.setMatrixAt(A,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("fireflies")&&s==="skumring"){const v=Math.round(120*o),x=new Float32Array(v*3),m=new Float32Array(v*3),d=Array.from({length:v},()=>({...f(),ph:Math.random()*6})),y=new ze;y.setAttribute("position",new Ve(x,3)),y.setAttribute("color",new Ve(m,3));const S=document.createElement("canvas");S.width=S.height=32;const g=S.getContext("2d"),A=g.createRadialGradient(16,16,0,16,16,16);A.addColorStop(0,"rgba(255,255,255,1)"),A.addColorStop(1,"rgba(255,255,255,0)"),g.fillStyle=A,g.fillRect(0,0,32,32);const E=new Dc(y,new oo({size:.35,map:new ui(S),vertexColors:!0,transparent:!0,blending:fi,depthWrite:!1}));E.frustumCulled=!1,i.add(E),h.push((w,C)=>{d.forEach((M,_)=>{x[_*3]=M.x+Math.sin(C*.4+M.ph)*1.2,x[_*3+1]=M.h+.5+Math.sin(C*.9+M.ph*2)*.4,x[_*3+2]=M.z+Math.cos(C*.35+M.ph)*1.2;const T=Math.max(0,Math.sin(C*1.7+M.ph*3))**3*2.5;m[_*3]=1*T,m[_*3+1]=.9*T,m[_*3+2]=.35*T}),y.attributes.position.needsUpdate=!0,y.attributes.color.needsUpdate=!0})}let p=0;return{update(v){const x=Math.min(.05,Math.max(0,v-p));p=v;for(const m of h)m(x,v)}}}function J_(i,{cell:t=.75,ext:e=68}={}){const n=Math.ceil(e*2/t)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),a=new Float32Array(n*n),o=i.lighthouse.pos,l=(w,C)=>[Math.round((w+e)/t),Math.round((C+e)/t)],c=(w,C)=>[-e+w*t,-e+C*t];let u=()=>!1;function h(){for(let w=0;w<n;w++)for(let C=0;C<n;C++){const[M,_]=c(C,w),T=i.heightAt(M,_),O=w*n+C,G=Math.hypot(M-o.x,_-o.z);let D=1.8;T<-.5||i.slopeAt(M,_)>1.1||i.extras.blocks(M,_)||u(M,_)||G<3.2?D=1/0:i.pathDist(M,_)<1.6?D=.2:T<.05&&(D=2.6),r[O]=D}}function f(){s.fill(1/0),a.fill(0);const w=[],C=(T,O)=>{w.push([T,O]);let G=w.length-1;for(;G>0;){const D=G-1>>1;if(w[D][0]<=w[G][0])break;[w[D],w[G]]=[w[G],w[D]],G=D}},M=()=>{const T=w[0],O=w.pop();if(w.length){w[0]=O;let G=0;for(;;){const D=2*G+1,F=D+1;let B=G;if(D<w.length&&w[D][0]<w[B][0]&&(B=D),F<w.length&&w[F][0]<w[B][0]&&(B=F),B===G)break;[w[B],w[G]]=[w[G],w[B]],G=B}}return T};for(let T=0;T<n;T++)for(let O=0;O<n;O++){const[G,D]=c(O,T),F=Math.hypot(G-o.x,D-o.z);F>=3.2&&F<4.2&&r[T*n+O]<1/0&&(s[T*n+O]=0,C(0,T*n+O))}const _=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;w.length;){const[T,O]=M();if(T>s[O])continue;const G=O%n,D=O/n|0;for(const[F,B,W]of _){const V=G+F,$=D+B;if(V<0||$<0||V>=n||$>=n)continue;const tt=$*n+V,rt=r[tt];if(rt===1/0)continue;const Ct=T+W*t*(rt+r[O])*.5;Ct<s[tt]&&(s[tt]=Ct,a[tt]=a[O]+W*t,C(Ct,tt))}}}const p=(w,C)=>{const[M,_]=l(w,C);return M<0||_<0||M>=n||_>=n?1/0:s[_*n+M]};function v(w,C){const[M,_]=l(w,C);let T=p(w,C),O=0,G=0;for(let F=-1;F<=1;F++)for(let B=-1;B<=1;B++){if(!B&&!F)continue;const W=M+B,V=_+F;if(W<0||V<0||W>=n||V>=n)continue;const $=s[V*n+W];$<T&&(T=$,O=B,G=F)}const D=Math.hypot(O,G)||1;return[O/D,G/D,T]}const x=(w,C)=>{const[M,_]=l(w,C);return M<0||_<0||M>=n||_>=n?-1:_*n+M},m=(w,C)=>{const M=x(w,C);return M<0||s[M]===1/0?0:a[M]};function d(){const w=[];for(const C of i.paths){const M=C.samples.find(_=>i.heightAt(_.x,_.z)>-.4&&m(_.x,_.z)>0);M&&w.push([M.x,M.z])}return w}function y(w,C=22,{near:M=8,minFrac:_=.6}={}){const T=d(),O=Math.max(0,...T.map(([B,W])=>m(B,W))),G=(B,W)=>{const V=i.heightAt(B,W);return V>-.4&&V<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([$,tt])=>i.heightAt(B+$,W+tt)<-.9)},D=T.map(([B,W])=>{const V=[],$=[],tt=Math.ceil(M/t),[rt,Ct]=l(B,W);for(let nt=-tt;nt<=tt;nt++)for(let ut=-tt;ut<=tt;ut++){const[Rt,ft]=c(rt+ut,Ct+nt);Math.hypot(Rt-B,ft-W)>M||m(Rt,ft)<_*O||(G(Rt,ft)?V.push([Rt,ft]):i.heightAt(Rt,ft)>.3&&i.slopeAt(Rt,ft)<.6&&$.push([Rt,ft]))}return(V.length?V:$).sort(()=>Math.random()-.5)}).filter(B=>B.length).sort(()=>Math.random()-.5),F=[];for(let B=0;F.length<w&&B<4;B++){for(const W of D){const V=W.find($=>F.every(tt=>Math.hypot(tt[0]-$[0],tt[1]-$[1])>C));if(V&&F.push(V),F.length>=w)break}C=Math.min(C,6)}return F}let S=null;function g(w,C){if(!S){S=new Float32Array(n*n);for(let B=0;B<n;B++)for(let W=0;W<n;W++){const[V,$]=c(W,B);S[B*n+W]=i.isWalkable(V,$)?i.heightAt(V,$)<.05?1.6:1:1/0}}const M=new Float64Array(n*n).fill(1/0),_=[],T=(B,W)=>{_.push([B,W]);let V=_.length-1;for(;V>0;){const $=V-1>>1;if(_[$][0]<=_[V][0])break;[_[$],_[V]]=[_[V],_[$]],V=$}},O=()=>{const B=_[0],W=_.pop();if(_.length){_[0]=W;let V=0;for(;;){const $=2*V+1,tt=$+1;let rt=V;if($<_.length&&_[$][0]<_[rt][0]&&(rt=$),tt<_.length&&_[tt][0]<_[rt][0]&&(rt=tt),rt===V)break;[_[rt],_[V]]=[_[V],_[rt]],V=rt}}return B},G=x(w,C);if(G<0)return null;M[G]=0,T(0,G);const D=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;_.length;){const[B,W]=O();if(B>M[W])continue;const V=W%n,$=W/n|0;for(const[tt,rt,Ct]of D){const Bt=V+tt,nt=$+rt;if(Bt<0||nt<0||Bt>=n||nt>=n)continue;const ut=nt*n+Bt,Rt=S[ut];if(Rt===1/0)continue;const ft=B+Ct*t*Rt;ft<M[ut]&&(M[ut]=ft,T(ft,ut))}}const F=(B,W)=>{const V=x(B,W);return V<0?1/0:M[V]};return{at:F,dir(B,W){const[V,$]=l(B,W);let tt=F(B,W),rt=0,Ct=0;for(let nt=-1;nt<=1;nt++)for(let ut=-1;ut<=1;ut++){if(!ut&&!nt)continue;const Rt=V+ut,ft=$+nt;Rt<0||ft<0||Rt>=n||ft>=n||M[ft*n+Rt]<tt&&(tt=M[ft*n+Rt],rt=ut,Ct=nt)}const Bt=Math.hypot(rt,Ct)||1;return[rt/Bt,Ct/Bt]}}}const A=()=>{let w=0;for(const C of s)C<1/0&&C>w&&(w=C);return w},E=()=>{h(),f()};return E(),{at:p,dir:v,coastPoints:y,roadEnds:d,routeLen:m,walkField:g,rebuild:E,setBlock(w){u=w,E()},maxDist:A(),N:n,cell:t}}function kf(i,t=700,{blending:e=fi,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const a=new At(r||"#000000"),o=new Float32Array(t*3),l=new Float32Array(t*3),c=new Float32Array(t*3),u=new Float32Array(t*3),h=new Float32Array(t),f=new Float32Array(t),p=new Float32Array(t);let v=0;const x=new ze;x.setAttribute("position",new Ve(o,3)),x.setAttribute("color",new Ve(l,3));const m=document.createElement("canvas");m.width=m.height=64;const d=m.getContext("2d"),y=d.createRadialGradient(32,32,0,32,32,32);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.4,"rgba(255,255,255,0.6)"),y.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=y,d.fillRect(0,0,64,64);const S=new oo({size:n,map:new ui(m),vertexColors:!0,transparent:!0,opacity:s,blending:e,depthWrite:!1}),g=new Dc(x,S);g.frustumCulled=!1,i.add(g);for(let C=0;C<t;C++)o[C*3+1]=-999;const A=new At;function E(C,M,_,{n:T=10,color:O="#ffb347",speed:G=4,up:D=3,life:F=.7,gravity:B=9,spread:W=1}={}){A.set(O);for(let V=0;V<T;V++){const $=v;v=(v+1)%t,o[$*3]=C,o[$*3+1]=M,o[$*3+2]=_;const tt=Math.random()*Math.PI*2,rt=G*(.4+Math.random()*.6)*W;c[$*3]=Math.cos(tt)*rt,c[$*3+1]=D*(.5+Math.random()),c[$*3+2]=Math.sin(tt)*rt,u[$*3]=A.r,u[$*3+1]=A.g,u[$*3+2]=A.b,f[$]=h[$]=F*(.6+Math.random()*.6),p[$]=B}}function w(C){for(let M=0;M<t;M++){if(h[M]<=0)continue;if(h[M]-=C,h[M]<=0){o[M*3+1]=-999,l[M*3]=l[M*3+1]=l[M*3+2]=0;continue}c[M*3+1]-=p[M]*C,o[M*3]+=c[M*3]*C,o[M*3+1]+=c[M*3+1]*C,o[M*3+2]+=c[M*3+2]*C;const _=h[M]/f[M];l[M*3]=u[M*3]*_+a.r*(1-_),l[M*3+1]=u[M*3+1]*_+a.g*(1-_),l[M*3+2]=u[M*3+2]*_+a.b*(1-_)}x.attributes.position.needsUpdate=!0,x.attributes.color.needsUpdate=!0}return{emit:E,update:w}}const Q_={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},t1={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},e1={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function Mu(i=""){const t=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(t)?"switch":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(t)?"ps":"xbox"}function n1(i){const t=i==="switch";return{build:t?1:0,carry:t?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function i1(i){const t=new Set,e={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=g=>e.pressed.add(g),s=g=>{e.device=g};addEventListener("keydown",g=>{if(s("kb"),(g.code==="Space"||g.code.startsWith("Arrow")||g.code==="Tab")&&g.preventDefault(),g.repeat)return;t.add(g.code);const A={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Digit4:"b4",Digit5:"b5",Digit6:"b6",Digit7:"b7",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",Numpad4:"b4",Numpad5:"b5",Numpad6:"b6",Numpad7:"b7",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};A[g.code]&&n(A[g.code])}),addEventListener("keyup",g=>t.delete(g.code)),addEventListener("blur",()=>t.clear()),i.addEventListener("wheel",g=>{g.preventDefault(),s("kb"),e.zoom=Oa(e.zoom*(g.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",g=>g.preventDefault());const r=new Map;let a=0,o=1,l=null;const c=g=>({x:g.clientX/innerWidth*2-1,y:-(g.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",g=>{if(s(g.pointerType==="touch"?"touch":"kb"),g.pointerType==="mouse"&&g.button===2){l={x:g.clientX},i.setPointerCapture(g.pointerId);return}g.pointerType==="mouse"&&g.button!==0||(r.set(g.pointerId,{e:g,t:performance.now(),x0:g.clientX,y0:g.clientY}),r.size===2&&(a=yu(r),o=e.zoom))}),i.addEventListener("pointermove",g=>{if(l){e.lookDelta+=(g.clientX-l.x)*.008,l.x=g.clientX;return}const A=r.get(g.pointerId);A&&(A.e=g,r.size===2&&a>0&&(e.zoom=Oa(o*(a/yu(r)),.55,4.5)))});const u=g=>{if(l&&g.button===2){l=null;return}const A=r.get(g.pointerId);A&&r.size===1&&a===0&&Math.hypot(g.clientX-A.x0,g.clientY-A.y0)<12&&e.clicks.push(c(g)),r.delete(g.pointerId),r.size<2&&(a=0)};i.addEventListener("pointerup",u),i.addEventListener("pointercancel",g=>{r.delete(g.pointerId),l=null,a=0});const h=document.getElementById("stick"),f=document.getElementById("knob"),p={x:0,z:0};let v=null;const x=g=>{const A=h.getBoundingClientRect();let E=g.clientX-(A.left+A.width/2),w=g.clientY-(A.top+A.height/2);const C=A.width/2,M=Math.hypot(E,w);M>C&&(E*=C/M,w*=C/M),f.style.transform=`translate(${E}px, ${w}px)`;const _=M/C<.15?0:1;p.x=E/C*_,p.z=w/C*_};h.addEventListener("pointerdown",g=>{s("touch"),v=g.pointerId,h.setPointerCapture(g.pointerId),x(g)}),h.addEventListener("pointermove",g=>{g.pointerId===v&&x(g)});const m=g=>{g.pointerId===v&&(v=null,p.x=p.z=0,f.style.transform="")};h.addEventListener("pointerup",m),h.addEventListener("pointercancel",m);const d=(g,A)=>g.addEventListener("pointerdown",E=>{E.preventDefault(),E.stopPropagation(),E.pointerType==="touch"&&s("touch"),n(A)});d(document.getElementById("btn-build"),"build"),d(document.getElementById("btn-carry"),"carry"),d(document.getElementById("btn-next"),"next"),d(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((g,A)=>d(g,"b"+(A+1)));let y=[];addEventListener("gamepadconnected",g=>{e.padId=g.gamepad.id,e.padKind=Mu(g.gamepad.id)});function S(){const A=[...navigator.getGamepads?navigator.getGamepads():[]].find(D=>D&&D.connected);if(!A)return null;A.id!==e.padId&&(e.padId=A.id,e.padKind=Mu(A.id));const E=n1(e.padKind),w=A.buttons.map(D=>D.pressed||D.value>.5),C=D=>w[D]&&!y[D],M=D=>Math.abs(D)<.2?0:(D-Math.sign(D)*.2)/.8;let _=M(A.axes[0]||0),T=M(A.axes[1]||0);w[14]&&(_=-1),w[15]&&(_=1),w[12]&&(T=-1),w[13]&&(T=1);const O=M(A.axes[2]||0);return(_||T||O||w.some(Boolean))&&s("pad"),C(E.build)&&n("build"),C(E.carry)&&n("carry"),C(E.next)&&n("next"),C(E.prev)&&n("selPrev"),C(E.nextSel)&&n("selNext"),C(E.pause)&&n("pause"),C(E.back)&&n("restart"),C(2)&&e.padKind!=="switch"&&n("next"),y=w,{x:_,z:T,look:O,zoomIn:w[E.zoomIn],zoomOut:w[E.zoomOut]}}return e.update=g=>{let A=0,E=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(A-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(A+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(E-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(E+=1);const w=S();w&&(w.x||w.z)&&(A=w.x,E=w.z),(p.x||p.z)&&(A=p.x,E=p.z);const C=Math.hypot(A,E);C>1&&(A/=C,E/=C),e.move.x=A,e.move.z=E,e.look=e.lookDelta+(w?w.look*2.2*g:0),e.lookDelta=0,w!=null&&w.zoomIn&&(e.zoom=Oa(e.zoom/(1+g*1.2),.55,4.5)),w!=null&&w.zoomOut&&(e.zoom=Oa(e.zoom*(1+g*1.2),.55,4.5))},e.labels=()=>e.device==="pad"?Q_[e.padKind]:e.device==="touch"?e1:t1,e.consume=g=>e.pressed.delete(g),e.clear=()=>{e.pressed.clear(),e.clicks.length=0},e}const Oa=(i,t,e)=>Math.max(t,Math.min(e,i));function yu(i){const[t,e]=[...i.values()].map(n=>n.e);return Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY)||1}let qe=null,ir=null,Jr=null;function s1(){if(qe){qe.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;qe=new i,ir=qe.createGain(),ir.gain.value=.5,ir.connect(qe.destination),Jr=qe.createBuffer(1,qe.sampleRate*2,qe.sampleRate);const t=Jr.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;r1()}const Bf=()=>qe?{ctx:qe,noiseBuf:Jr}:null;function Ke(i,t,{type:e="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!qe)return;const a=qe.currentTime+r,o=qe.createOscillator(),l=qe.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(ir),o.start(a),o.stop(a+t+.02)}function ls(i,{vol:t=.3,freq:e=800,q:n=.7,delay:s=0}={}){if(!qe)return;const r=qe.currentTime+s,a=qe.createBufferSource();a.buffer=Jr;const o=qe.createBiquadFilter();o.type="lowpass",o.frequency.value=e,o.Q.value=n;const l=qe.createGain();l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),a.connect(o).connect(l).connect(ir),a.start(r,Math.random()),a.stop(r+i+.02)}function r1(){const i=qe.createBufferSource();i.buffer=Jr,i.loop=!0;const t=qe.createBiquadFilter();t.type="lowpass",t.frequency.value=420;const e=qe.createGain();e.gain.value=.035;const n=qe.createOscillator(),s=qe.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(e.gain),i.connect(t).connect(e).connect(ir),i.start(),n.start()}let Su=0;const Ye={pickup(){if(!qe)return;const i=qe.currentTime,t=i-Su<.4?1.12:1;Su=i,Ke(880*t+Math.random()*60,.12,{type:"triangle",vol:.12}),Ke(1320*t,.1,{type:"sine",vol:.06,delay:.04})},puff(){ls(.18,{vol:.07,freq:600,q:.3}),Ke(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)ls(.05,{vol:.1,freq:3500,delay:i*.03});Ke(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>Ke(i,.11,{type:"square",vol:.025})),Ke(98,.3,{vol:.08})},chill(){Ke(330,.5,{type:"sine",vol:.07,slide:160}),Ke(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){Ke(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){ls(.12,{vol:.12,freq:500}),Ke(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){ls(.45,{vol:.28,freq:380}),Ke(90,.35,{vol:.18,slide:-50})},horn(){Ke(196,.5,{type:"sawtooth",vol:.035}),Ke(147,.55,{type:"sine",vol:.06})},hit(){ls(.05,{vol:.08,freq:2500})},die(){Ke(420,.18,{type:"triangle",vol:.09,slide:-280}),ls(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,t)=>Ke(i,.25,{type:"triangle",vol:.1,delay:t*.06}))},upgrade(){[523,659,784,1047].forEach((i,t)=>Ke(i,.22,{type:"triangle",vol:.1,delay:t*.07}))},stone(){Ke(660,.2,{type:"sine",vol:.1,slide:200})},lose(){Ke(220,.6,{type:"sawtooth",vol:.06,slide:-120}),ls(.3,{vol:.08,freq:300})},stun(){Ke(700,.4,{type:"square",vol:.05,slide:-500})},deny(){Ke(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,t)=>Ke(i,.3,{type:"sawtooth",vol:.04,delay:t*.18}))},win(){[523,659,784,1047,1319].forEach((i,t)=>Ke(i,.4,{type:"triangle",vol:.12,delay:t*.12}))}},cc=172,Ri=60/cc/4,cs=i=>440*Math.pow(2,(i-69)/12),bu={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},il={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},wu=[["build",8],["drop",16],["break",8],["drop",16]];function a1(i,t,e){const n=bu[e]||bu.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const a=i.createGain();a.gain.value=0,s.connect(r).connect(a).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,a.connect(o);const l={};for(const q of["drums","bass","pad","arp","lead"]){const R=i.createGain();R.gain.value=0,R.connect(s),l[q]=R}const c={};for(const q of["pad","bass"]){const R=i.createGain();R.gain.value=1,R.connect(l[q]),c[q]=R}const u=(q,R)=>{const b=i.createBuffer(2,Math.floor(i.sampleRate*q),i.sampleRate);for(let H=0;H<2;H++){const K=b.getChannelData(H);for(let et=0;et<K.length;et++)K[et]=(Math.random()*2-1)*Math.pow(1-et/K.length,R)}return b},h=i.createConvolver();h.buffer=u(2.4,2.5);const f=i.createGain();f.gain.value=n.space,h.connect(f).connect(s);const p=i.createConvolver();p.buffer=u(.5,.4);const v=i.createGain();v.gain.value=0,p.connect(v).connect(l.drums);const x=i.createDelay(1);x.delayTime.value=Ri*3;const m=i.createGain();m.gain.value=.38;const d=i.createBiquadFilter();d.type="lowpass",d.frequency.value=2400;const y=i.createStereoPanner(),S=i.createOscillator(),g=i.createGain();S.frequency.value=cc/60/3,g.gain.value=.8,S.connect(g).connect(y.pan),S.start(),x.connect(d).connect(m).connect(x),d.connect(y).connect(l.arp);const A=i.createBiquadFilter();A.type="highpass",A.frequency.value=180;const E=i.createBiquadFilter();E.type="lowpass",E.frequency.value=n.padCut,E.Q.value=2;const w=i.createOscillator(),C=i.createGain();w.frequency.value=.07,C.gain.value=n.padCut*.45,w.connect(C).connect(E.frequency),w.start();const M=i.createDelay(.05);M.delayTime.value=.014;const _=i.createOscillator(),T=i.createGain();_.frequency.value=.5,T.gain.value=.004,_.connect(T).connect(M.delayTime),_.start();const O=i.createStereoPanner();O.pan.value=.6,A.connect(E),E.connect(c.pad),E.connect(M).connect(O).connect(c.pad),E.connect(h);const G=i.createBiquadFilter();G.type="lowpass",G.frequency.value=420,G.Q.value=6;const D=i.createOscillator(),F=i.createGain();if(D.frequency.value=cc/60/4,F.gain.value=260,D.connect(F).connect(G.frequency),D.start(),n.drive>0){const q=i.createWaveShaper(),R=new Float32Array(1024);for(let b=0;b<1024;b++){const H=b/512-1;R[b]=Math.tanh(H*(1+n.drive*6))}q.curve=R,G.connect(q).connect(c.bass)}else G.connect(c.bass);const B=i.createBiquadFilter();B.type="lowpass",B.frequency.value=3600,B.Q.value=3,B.connect(l.lead),B.connect(x),B.connect(h);const W=(q,R,b,H,K,et)=>{q.gain.setValueAtTime(1e-4,R),q.gain.exponentialRampToValueAtTime(H,R+b),q.gain.setValueAtTime(H,R+Math.max(b,et-K)),q.gain.exponentialRampToValueAtTime(1e-4,R+et)},V=(q,R)=>{const b=i.createStereoPanner();return b.pan.value=R,q.connect(b),b},$=(q,R,b,H,K,et,it="bandpass",Ut=0)=>{const Mt=i.createBufferSource();Mt.buffer=t;const Pt=i.createBiquadFilter();Pt.type=it,Pt.frequency.value=b,Pt.Q.value=H;const re=i.createGain();W(re,q,.001,K,R*.8,R),Mt.connect(Pt).connect(re);const yt=Ut?V(re,Ut):re;for(const Xt of et)yt.connect(Xt);Mt.start(q,Math.random()*1.5),Mt.stop(q+R+.02)},tt=(q,R=1)=>{const b=i.createOscillator(),H=i.createGain();b.frequency.setValueAtTime(160,q),b.frequency.exponentialRampToValueAtTime(44,q+.11),W(H,q,.002,1*R,.2,.3),b.connect(H).connect(l.drums),b.start(q),b.stop(q+.32),$(q,.012,3500,.7,.35*R,[l.drums],"highpass");for(const K of Object.values(c))K.gain.cancelScheduledValues(q),K.gain.setValueAtTime(.35,q),K.gain.linearRampToValueAtTime(1,q+.2)},rt=(q,R=1)=>{$(q,.17,1900,.8,.5*R,[l.drums,p]);for(const[b,H,K]of[[200,160,.3],[340,260,.14]]){const et=i.createOscillator(),it=i.createGain();et.type="triangle",et.frequency.setValueAtTime(b,q),et.frequency.exponentialRampToValueAtTime(H,q+.08),W(it,q,.001,K*R,.06,.11),et.connect(it).connect(l.drums),et.start(q),et.stop(q+.13)}v.gain.setValueAtTime(.9*R,q),v.gain.setValueAtTime(1e-4,q+.21)};let Ct=1;const Bt=(q,R,b)=>{Ct=-Ct,$(q,b?.14:.035,9e3,.6,(b?.12:.08)*R,[l.drums],"highpass",Ct*.35)},nt=(q,R,b)=>{for(const et of[-n.reeseDetune,n.reeseDetune]){const it=i.createOscillator(),Ut=i.createGain();it.type="sawtooth",it.frequency.value=cs(R),it.detune.value=et,W(Ut,q,.02,.2,.1,b),V(it.connect(Ut),et>0?.25:-.25).connect(G),it.start(q),it.stop(q+b+.05)}const H=i.createOscillator(),K=i.createGain();H.frequency.value=cs(R-12),W(K,q,.02,.42,.1,b),H.connect(K).connect(c.bass),H.start(q),H.stop(q+b+.05)},ut=(q,R,b,H=1)=>{for(const K of R.slice(1))for(const[et,it]of[[-9,-.6],[0,0],[8,.6]]){const Ut=i.createOscillator(),Mt=i.createGain();Ut.type=n.pad,Ut.frequency.value=cs(K),Ut.detune.value=et,W(Mt,q,.8,.026*H,1.4,b),V(Ut.connect(Mt),it).connect(A),Ut.start(q),Ut.stop(q+b+.1)}},Rt=(q,R,b=1)=>{const H=i.createOscillator(),K=i.createGain();H.type="square",H.frequency.value=cs(R+n.arpOct);const et=i.createBiquadFilter();et.type="lowpass",et.frequency.value=3200,W(K,q,.003,.05*b,.08,Ri*1.6),H.connect(et).connect(K),K.connect(l.arp),K.connect(x),H.start(q),H.stop(q+Ri*2)},ft=(q,R,b,H)=>{const K=b*Ri;for(const et of[-6,6]){const it=i.createOscillator(),Ut=i.createGain();it.type=n.lead,H?(it.frequency.setValueAtTime(cs(H),q),it.frequency.exponentialRampToValueAtTime(cs(R),q+.05)):it.frequency.value=cs(R),it.detune.value=et;const Mt=i.createOscillator(),Pt=i.createGain();Mt.frequency.value=5.5,Pt.gain.value=9,Mt.connect(Pt).connect(it.detune),Mt.start(q+.12),Mt.stop(q+K+.05),W(Ut,q,.01,.07,Math.min(.12,K*.4),K),V(it.connect(Ut),et>0?.2:-.2).connect(B),it.start(q),it.stop(q+K+.05)}};let zt=0,Ht=0,$t=null,te=0,dt=.7,wt=!1,z=0;const Wt=wu.reduce((q,[,R])=>q+R,0),_t=()=>{if(te<.5)return"ambient";let q=z%Wt;for(const[R,b]of wu){if(q<b)return R;q-=b}return"drop"},Nt=()=>{const q=i.currentTime,R=(H,K)=>{H.gain.cancelScheduledValues(q),H.gain.setTargetAtTime(K,q,.8)},b=te;R(l.drums,.1+.85*b),R(l.bass,.3+.6*b),R(l.pad,.75-.2*b),R(l.arp,.35+.3*b),R(l.lead,.55+.35*b),a.gain.cancelScheduledValues(q),a.gain.setTargetAtTime(wt?0:dt*.8,q,.3)},Dt=q=>q%2?Ri*.12:0,ee=()=>{for(;Ht<i.currentTime+.15;){const q=zt%32,R=Math.floor(zt/16),b=Math.floor(zt/32)%n.chords.length,H=n.chords[b];q%16===0&&zt>0&&te>.5&&z++;const K=_t(),et=Ht+Dt(q),it=z%8;if(K==="drop"||K==="build"){const Mt=it%4===3&&q>=16?il.FILL:it>=6?il.B:il.A,Pt=K==="build"&&it<4;Mt.k[q]==="x"&&!(Pt&&q%8)&&tt(et),Mt.s[q]==="x"&&!Pt&&rt(et,K==="build"?.7:1),Mt.g[q]==="x"&&rt(et,.3),(!Pt||q%2===0)&&Bt(et,q%2?.6:1,q%8===6)}else K==="break"?(q%4===2&&Bt(et,.6,!1),(q===0||q===16)&&tt(et,.4)):q%4===2&&Bt(et,.45,!1);if(q===0&&(ut(et,H,Ri*32,K==="break"?1.3:1),nt(et,H[0],Ri*(K==="drop"?14:30))),K==="drop"&&q===16&&nt(et,H[0]+(b%2?3:7),Ri*14),q%n.arpRate===0&&K!=="break"&&Rt(et,H[1+q/n.arpRate%4]+(q>=16?12:0),K==="ambient"?.7:1),K==="drop"||(K==="break"||K==="ambient")&&Math.floor(R/4)%2===1){const Mt=n.hook.findIndex(([Pt])=>Pt===q);if(Mt>=0){const[,Pt,re]=n.hook[Mt];ft(et,Pt+(K==="ambient"?-12:0),re,Mt>0?n.hook[Mt-1][1]:0)}}Ht+=Ri,zt++}};return{start(){$t||(Ht=i.currentTime+.1,$t=setInterval(ee,25),Nt())},stop(){clearInterval($t),$t=null,a.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity(q){q>.5&&te<=.5&&(z=0),te=q,Nt()},setVolume(q){dt=q,Nt()},setMuted(q){wt=q,Nt()},get muted(){return wt},get volume(){return dt},rms(){const q=new Float32Array(o.fftSize);return o.getFloatTimeDomainData(q),Math.sqrt(q.reduce((R,b)=>R+b*b,0)/q.length)},get intensity(){return te},get section(){return _t()},tap(q){a.connect(q)}}}const Jt={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:.4,upgradeTime:[15,20,25,30],keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,chillMax:100,stressInvuln:1,stressPush:7,airStress:10,faintTime:6,faintLoss:.25,wakeChill:.6,regen:3,regenReach:9,bagChance:.05,bagHeal:25,bagLife:20,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8]},sr={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!0,tip:"rask · bakke + luft"},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5,tip:"splash · kun bakke"},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2,tip:"bremser i ring"},bubble:{name:"Bobleblåser",cost:20,range:7,dmg:2.5,cooldown:.38,air:!0,ground:!1,trap:1.4,tip:"fanger flyvere · kun luft"},kite:{name:"Papirdrage",cost:40,range:13,dmg:5,cooldown:2.8,air:!0,ground:!1,zone:3.4,hover:2.4,tip:"sone, lang · kun luft"},pizza:{name:"Pizza-katapult",cost:55,range:14,dmg:24,cooldown:3,air:!1,splash:2.9,tip:"lang splash · kun bakke"},lamp:{name:"Lavalampe",cost:50,range:4.6,dmg:1.1,cooldown:.3,air:!0,slowTime:.5,tip:"aura, bremser alt"}},fo={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0",stress:10},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0",resist:{ring:.5,chips:1.5},stress:15},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0,swoop:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a",stress:8},auditor:{name:"Revisoren",hp:70,speed:1.6,embers:8,anim:7,puff:"#9fffb0",shield:.25,resist:{lamp:1.5},info:"skjold forfra (×0,25), ikke mot aura",stress:14},complainer:{name:"Naboklageren",hp:12,speed:4.3,embers:3,anim:18,puff:"#ffb0f0",resist:{chips:.5,ring:1.5},info:"rask, mørtel bommer",stress:10},lobbyist:{name:"Lobbyisten",hp:55,speed:1.9,embers:6,anim:9,puff:"#ffe08a",splits:3,resist:{speaker:.5,pizza:1.5},noMood:!0,info:"deler seg i tre, immun mot stemning",stress:12},lobbyMini:{name:"Mini-lobbyist",hp:14,speed:2.7,embers:1,anim:14,puff:"#ffe08a",resist:{speaker:.5,pizza:1.5},noMood:!0,stress:8},drone:{name:"Overvåkings-drone",hp:9,speed:4.6,embers:1,anim:30,puff:"#c8d8ff",flying:!0,alt:3.6,resist:{bubble:1.5,lamp:1.5,kite:.5},info:"rask sverm i lufta"},balloon:{name:"Ballong-byråkraten",hp:150,speed:1.05,embers:14,anim:2,puff:"#ffffff",flying:!0,alt:5.6,resist:{bubble:.5,kite:1.5},info:"seig, høyt oppe"},heli:{name:"Mini-helikopteret",hp:48,speed:2.5,embers:7,anim:40,puff:"#ffffff",flying:!0,alt:4.6,blind:{every:6,dur:3,range:9},resist:{ring:.5,kite:1.5},info:"søkelys blender et tårn i 3 s"}},o1=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],fn=new URLSearchParams(location.search),Gf=fn.has("demo");if(fn.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(Sr.length))}catch{}let Rn=Number(fn.get("world"));if(!Number.isInteger(Rn))try{Rn=Number(localStorage.getItem("glod-world"))||0}catch{Rn=0}Rn=Math.max(0,Math.min(Zr()-1,Rn));try{localStorage.setItem("glod-world",String(Rn))}catch{}const an=Sr[Rn],Gc=g_(an,o1);function l1(){return 1}const c1=Math.max(1,Math.min(20,Number(fn.get("speed"))||1)),ki=matchMedia("(pointer: coarse)").matches||fn.has("mobile"),hc={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:2}};let di=ki?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(di=i)}catch{}(fn.get("q")==="high"||fn.get("q")==="low")&&(di=fn.get("q"));const Qr={mobile:ki,shadow:hc[di].shadow,dprCap:hc[di].dprCap},h1={high:["rock","tree","tower","figure"],low:["rock","tree","tower","figure"]};function Vf(i){const t=fn.has("ol")?fn.get("ol").split(","):h1[i];yf(Object.fromEntries(["rock","tree","tower","figure"].map(e=>[e,t.includes(e)])))}Vf(di);const Hf=document.getElementById("game"),wn=new hx({canvas:Hf,antialias:!ki,powerPreference:"high-performance",preserveDrawingBuffer:fn.has("shot")});let Zi=Math.min(devicePixelRatio||1,Qr.dprCap);wn.setPixelRatio(Zi);wn.shadowMap.enabled=!0;wn.shadowMap.type=Lu;wn.toneMapping=mc;let xs="dag";try{xs=localStorage.getItem("glod-tid")||"dag"}catch{}fn.get("tid")&&(xs=fn.get("tid"));const Hn=xs==="skumring"&&an.skyDusk?an.skyDusk:an.sky;wn.toneMappingExposure=Hn.exposure;wn.info.autoReset=!1;const Te=new ux,Wf=new At(Hn.fog);Te.background=Wf;Te.fog=new Pc(Wf,...an.fog??[55,115]);const $e=new kn(38,1,.5,200),u1=new qx(Hn.hemiSky,Hn.hemiGround,Hn.hemi);Te.add(u1);const hn=new jx(Hn.sun,Hn.sunI);hn.castShadow=!0;hn.shadow.mapSize.set(Qr.shadow,Qr.shadow);Object.assign(hn.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});hn.shadow.bias=-8e-4;hn.shadow.normalBias=.03;Te.add(hn,hn.target);e_(Te);const Yt=U_(Te,Qr,an);Yt.grass.setLevel(di);const f1=K_(Te,Yt,Qr,an,xs,$e),Dn=J_(Yt);window.__nav=Dn;const Ne=kf(Te,ki?450:800),Ts=kf(Te,ki?120:220,{blending:Ji,size:1.6,opacity:.45,fadeTo:Hn.fog}),sa=Z_(wn,Te,$e,Hn.grade);sa.setLevel(di);const ve=i1(Hf);function ra(){const i=innerWidth,t=innerHeight;wn.setSize(i,t,!1),$e.aspect=i/t,$e.updateProjectionMatrix(),sa.setSize(i,t),t_(ki?2:2.2,wn.getPixelRatio(),i,t)}function Xf(i){di=i;try{localStorage.setItem("glod-quality",i)}catch{}const t=hc[i];hn.shadow.mapSize.set(t.shadow,t.shadow),hn.shadow.map&&(hn.shadow.map.dispose(),hn.shadow.map=null),Zi=Math.min(devicePixelRatio||1,t.dprCap),wn.setPixelRatio(Zi),sa.setLevel(i),Yt.grass.setLevel(i),Vf(i),ra(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",ra);ra();const Z={phase:"title",wave:0,timer:0,embers:Jt.startEmbers,lights:gr,spawnQueue:[],leaks:{},seen:{},time:0,sel:0,paused:!1},sl=Jt.upgradeTime.length+1,$i=["ring","chips","speaker","bubble","kite","pizza","lamp"];let Ii=an.camYaw??0;const Eu=new Zx,Ln=[],Vn=[],ri=[],ms=[],rr=[],Vr=[],Qe=ia(b_(),"figure"),I={x:Yt.lighthouse.pos.x+1,z:Yt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:Jt.chillMax,inv:0,faint:0,faints:0};Qe.position.set(I.x,Yt.heightAt(I.x,I.z),I.z);Te.add(Qe);const qf=Hn.lantern??2.6,Vc=new jr("#ffcf70",qf,6,1.8);Vc.position.set(.8,.45,-.3);Qe.add(Vc);const de=i=>document.getElementById(i),sn={chill:de("hud-chill"),lights:de("hud-lights"),embers:de("hud-embers"),wave:de("hud-wave"),timer:de("hud-timer")},zi=de("hint"),xi=de("build-panel"),Hc=de("btn-next"),Wc=de("fps");fn.has("debug")||Wc.classList.add("hidden");let Oi={};function Wn(i,t,e,n){Oi[t]!==e&&(Oi[t]=e,i.querySelector("b").textContent=e,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const d1=4;let Yf=0;function Tu(i){if(zi.textContent===i)return;zi.textContent=i,Yf=0,zi.classList.remove("faded");const t=xi.classList.contains("hidden")?null:xi.getBoundingClientRect();zi.style.bottom=t&&t.height?`${Math.round(innerHeight-t.top+6)}px`:""}function p1(i){(Yf+=i)>d1&&zi.classList.add("faded")}function $f(i){Z.phase="prep",Z.timer=i,Hc.classList.remove("hidden"),m1()}function m1(){const i=Z.wave+1,t=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);Z.spawnPoints=Dn.coastPoints(t,24),Z.spawnPoints.length||(Z.spawnPoints=Dn.coastPoints(t,8,{near:12,minFrac:.5})),Z.spawnPoints.length||(Z.spawnPoints=Dn.roadEnds().slice(0,t)),_1()}function jf(){Z.wave+=1,Z.phase="wave",Hc.classList.add("hidden"),Z.spawnQueue=[];for(const i of Gc[Z.wave-1]){const t=Z.wave<=Jt.earlyScale.length?Z.wave-1:-1,e=Z.spawnPoints.length,n=fo[i.type].flying?an.balance.air??1:1,s=Math.max(1,Math.round(i.n*(an.balance.count||1)*n*(t>=0?Jt.earlyScale[t]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,e));for(let a=0;a<e;a++)for(let o=0;o<r;o++)Z.spawnQueue.push({t:(i.at??0)+o*i.gap+a*.3,type:i.type,path:a})}else{const r=i.path??0;for(let a=0;a<s;a++)Z.spawnQueue.push({t:(i.at??0)+a*i.gap,type:i.type,path:(r+a%2)%e})}}Z.spawnQueue.sort((i,t)=>i.t-t.t),Z.waveClock=0,Ye.wave(),ke==null||ke.setIntensity(1),Wn(sn.wave,"wave",Z.wave,"bump")}function Xc(i,t){var l,c;const e=fo[i],n=ia(w_(i),"figure"),s=e.hp*(1+Jt.hpGrowth*(Z.wave-1))*an.balance.hp*(((c=(l=an.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*l1(),r={type:i,def:e,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:an.balance.speed*(e.flying?an.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4};r.var=.95+Math.random()*.1,r.speedMul*=.95+Math.random()*.1,n.scale.setScalar(r.var),r.blinkT=Math.random()*4;const a=Z.spawnPoints[t%Z.spawnPoints.length]||[0,50],o=Yt.lighthouse.pos;if(e.flying){const u=Math.atan2(a[1]-o.z,a[0]-o.x)+(Math.random()-.5)*.5,h=o.x+Math.cos(u)*66,f=o.z+Math.sin(u)*66;r.x=h,r.z=f,r.y=e.alt||4,r.dist0=Math.hypot(o.x-h,o.z-f),r.hitCd=0}else r.x=a[0]+(Math.random()-.5)*1.5,r.z=a[1]+(Math.random()-.5)*1.5,r.y=Yt.heightAt(r.x,r.z),r.remain=Dn.at(r.x,r.z);return n.position.set(r.x,r.y,r.z),Te.add(n),Ln.push(r),!Z.seen[i]&&i!=="lobbyMini"&&(Z.seen[i]=!0,g1(r)),r}const uc={ring:"💨",chips:"🥔",speaker:"🔊",bubble:"🫧",kite:"🪁",pizza:"🍕",lamp:"🌋"};function Zf(i){const t=Object.entries(i.resist||{}),e=t.filter(([,s])=>s<1).map(([s])=>uc[s]).join(""),n=t.filter(([,s])=>s>1).map(([s])=>uc[s]).join("");return{tough:e+(i.shield?"📒":""),weak:n}}const Li=[],po=document.createElement("div");po.id="tags";document.body.appendChild(po);function g1(i){const{tough:t,weak:e}=Zf(i.def),n=document.createElement("div");n.className="enemy-tag",n.innerHTML=`<b>${i.def.flying?"🪶":"🐾"} ${i.def.name}</b>${t?`<span>🛡️${t}</span>`:""}${e?`<span>💥${e}</span>`:""}`,po.appendChild(n),Li.push({m:i,el:n,t:0}),(Z.wave>1||i.def.flying)&&rn(`Ny fiende: ${i.def.name}${t?` · tåler ${t}`:""}${e?` · svak mot ${e}`:""}`)}function v1(i){var n;const t=Li.length?de("hud").getBoundingClientRect().bottom:0;for(let s=Li.length-1;s>=0;s--){const r=Li[s];r.age=(r.age||0)+i,Ue.set(r.m.x,r.m.y+(((n=r.m.mesh.userData.hpBar)==null?void 0:n.position.y)??2.2)+.5,r.m.z).project($e);const a=Ue.z<1&&Math.abs(Ue.x)<1&&Math.abs(Ue.y)<1;r.el.style.display=a?"flex":"none",a&&(r.t+=i);const o=r.el.offsetWidth,l=r.el.offsetHeight;r.x=Math.min(Math.max((Ue.x*.5+.5)*innerWidth,o/2+6),innerWidth-o/2-6),r.y=Math.max((-Ue.y*.5+.5)*innerHeight,t+l+6),r.w=o,r.h=l,r.on=a,r.el.style.opacity=String(Math.min(1,(6-r.t)/.6)),(r.t>6||r.age>90||!r.m.alive)&&(r.el.remove(),Li.splice(s,1))}const e=[];for(const s of Li.filter(r=>r.on).sort((r,a)=>r.y-a.y)){let r=!0;for(let a=0;r&&a<8;a++){r=!1;for(const o of e)Math.abs(s.x-o.x)<(s.w+o.w)/2+4&&s.y>o.y-o.h-3&&s.y-s.h<o.y+3&&(s.y=o.y+s.h+4,r=!0)}e.push(s)}for(const s of Li)s.on&&(s.el.style.left=`${s.x}px`,s.el.style.top=`${s.y}px`)}function x1(i){return i.def.flying?1-Math.hypot(Yt.lighthouse.pos.x-i.x,Yt.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??Dn.maxDist)/Dn.maxDist)}const ja=[],_s=document.createElement("div");_s.id="warn";document.body.appendChild(_s);function _1(){for(const e of ja)Te.remove(e);ja.length=0,_s.innerHTML="";for(const[e,n]of Z.spawnPoints){const s=new oe(Kf,new De({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));s.position.set(e,Math.max(Yt.heightAt(e,n),.08)+.1,n);const r=new oe(M1,new De({color:"#ff8a3a",transparent:!0,opacity:.35,blending:fi,depthWrite:!1,fog:!1}));r.position.y=4,s.add(r),Te.add(s),ja.push(s);const a=document.createElement("div");a.className="warn-arrow",a.innerHTML='<span class="arr">➤</span><span class="kind"></span>',_s.appendChild(a)}const i=Z.spawnPoints.length,t=Z.spawnPoints.map(()=>({air:!1,ground:!1}));for(const e of Gc[Z.wave]||[]){const n=e.path==="both"?t.map((s,r)=>r):[(e.path??0)%i,((e.path??0)+1)%i];for(const s of n)t[s][fo[e.type].flying?"air":"ground"]=!0}t.forEach((e,n)=>{var r;const s=(r=_s.children[n])==null?void 0:r.querySelector(".kind");s&&(s.textContent=(e.air?"🪶":"")+(e.ground?"🐾":""))})}const Kf=new es(1.6,2.2,32);Kf.rotateX(-Math.PI/2);const M1=new We(.5,1.4,8,12,1,!0);function y1(){var a;const i=Z.phase==="prep"||Z.phase==="wave"&&Z.waveClock<8,t=_s.children,e=i&&!xi.classList.contains("hidden")?xi.getBoundingClientRect():null,n=e&&zi.textContent&&!zi.classList.contains("faded"),s=i?de("hud").getBoundingClientRect().bottom:0;_s.style.visibility=po.style.visibility=Z.paused?"hidden":"";const r=e?n?Math.min(e.top,zi.getBoundingClientRect().top):e.top:0;(a=Z.spawnPoints)==null||a.forEach(([o,l],c)=>{const u=ja[c],h=t[c];if(!u||!h)return;u.visible=i;const f=.5+.5*Math.sin(Z.time*6);u.scale.setScalar(1+f*.35),u.material.opacity=.35+.5*f,Ue.set(o,u.position.y,l).project($e);const p=Math.abs(Ue.x)>.92||Math.abs(Ue.y)>.88||Ue.z>1;if(h.style.display=i?"block":"none",h.classList.toggle("onscreen",!p),i&&!p&&(h.style.left=`${(Ue.x*.5+.5)*innerWidth}px`,h.style.top=`${Math.max((-Ue.y*.5+.5)*innerHeight-30,s+30)}px`,h.style.transform="translate(-50%, -50%)",h.firstChild.style.transform=""),i&&p){let v=Ue.x,x=Ue.y;Ue.z>1&&(v=-v,x=-x);const m=Math.atan2(-x,v),d=Math.max(Math.abs(v),Math.abs(x))||1,y=xe.clamp(v/d,-1,1),S=xe.clamp(x/d,-1,1),g=(y*.46+.5)*innerWidth;let A=(-S*.44+.5)*innerHeight;e&&g>e.left-24&&g<e.right+24&&A>r-24&&(A=r-24),A=Math.max(A,s+30),h.style.left=`${g}px`,h.style.top=`${A}px`,h.style.transform=`translate(-50%, -50%) scale(${1+f*.25})`,h.firstChild.style.transform=`rotate(${m}rad)`}})}function gs(i,t,e){var n;if(i.alive){if(e&&(t*=((n=i.def.resist)==null?void 0:n[e.type])??1,i.def.shield&&e.type!=="lamp")){const s=e.x-i.x,r=e.z-i.z,a=Math.hypot(s,r)||1,o=Math.hypot(i.hx||0,i.hz||0)||1;(s*(i.hx||0)+r*(i.hz||0))/(a*o)>.35&&(t*=i.def.shield,Math.random()<.3&&Ne.emit(i.x,i.y+1,i.z,{n:2,color:"#d8c890",speed:1.5,up:1,life:.3}))}i.hp-=t,i.hitT=.18,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&S1(i)}}function S1(i){i.alive=!1,i.chillT=0,E_(i),Vr.push(i),Ne.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),Ye.chill(),qc(i.x,i.y+.5,i.z,i.def.embers,i.def.flying),!i.def.flying&&Math.random()<Jt.bagChance&&Jf(i.x,i.z);for(let t=0;t<(i.def.splits||0);t++){const e=Xc("lobbyMini",0);e.x=i.x+(t-1)*.6,e.z=i.z+(t%2?.5:-.5),e.y=Yt.heightAt(e.x,e.z),e.mesh.position.set(e.x,e.y,e.z)}}function b1(i){var t;for(let e=Vr.length-1;e>=0;e--){const n=Vr[e];n.chillT+=i;const s=n.chillT,r=n.mesh.userData.body;if(n.def.flying)n.y+=i*2.5,n.z+=i*3,(t=n.mesh.userData.wings)==null||t.forEach((o,l)=>o.rotation.z=Math.sin(s*6)*.4*(l?-1:1));else if(s<1.4){const o=Math.min(1,s/.4);r.position.y=-.25*o*(n.type==="tank"?1.3:1),r.rotation.x=.25*o,r.rotation.z=Math.sin(s*3)*.05}else{r.rotation.x=0,r.position.y=Math.abs(Math.sin(s*7))*.06;const[o,l]=Dn.dir(n.x,n.z),c=n.x-o*n.def.speed*.45*i,u=n.z-l*n.def.speed*.45*i;Yt.isWalkable(c,u)&&(n.x=c,n.z=u),n.y=Yt.heightAt(n.x,n.z),(o||l)&&(n.mesh.rotation.y=Math.atan2(o,l))}Math.random()<i*1.5&&Ne.emit(n.x,n.y+1.8,n.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4}),s>2.6&&!n.popped&&(n.popped=!0,Ts.emit(n.x,n.y+.8,n.z,{n:8,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}));const a=Math.max(0,Math.min(1,(3.2-s)/.6));n.mesh.scale.setScalar(a*(n.var||1)*(s>2.6?1+Math.sin((s-2.6)*10)*.08:1)),n.mesh.position.set(n.x,n.y,n.z),s>3.2&&(Te.remove(n.mesh),Vr.splice(e,1))}}function qc(i,t,e,n,s=!1,r=1){const a=Math.min(n,n>=6?3:n>=3?2:1);let o=n;for(let l=0;l<a;l++){const c=l===a-1?o:Math.ceil(n/a);o-=c;const u=A_(),h=Math.random()*Math.PI*2,f=(1.2+Math.random()*1.8)*r,p={mesh:u,x:i,y:t,z:e,vx:Math.cos(h)*f,vz:Math.sin(h)*f,vy:5+Math.random()*2,life:Jt.emberLife,value:c,settled:!1,phase:Math.random()*6};u.scale.setScalar(.8+Math.min(c,6)*.08),Te.add(u),ms.push(p)}}function ta(i,t,e,n,s=()=>!0){let r=null,a=n;for(const o of i){if(!s(o))continue;const l=Math.hypot(o.x-t,o.z-e);l<a&&(a=l,r=o)}return r}function Yc(){const i=ta(Yt.plinths,I.x,I.z,Jt.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const t=-Math.sin(I.face),e=-Math.cos(I.face),n=I.x+t*Jt.placeAhead,s=I.z+e*Jt.placeAhead,r=Yt.heightAt(n,s),a=Yt.lighthouse.pos;let o="";return r<.35?o="i vannet":Yt.extras.blocks(n,s)?o="i lavaen":Yt.pathDist(n,s)<1.9?o="på stien":Yt.slopeAt(n,s)>.6?o="for bratt":Math.hypot(n-a.x,s-a.z)<5.5?o="for nær fyret":Vn.some(l=>Math.hypot(l.x-n,l.z-s)<Jt.minTowerGap)?o="for nær et annet tårn":Yt.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?o="oppå en sokkel (gå helt bort til den)":Yt.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(o="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!o,why:o}}function Qa(i){const t=Yc();if(!t.ok){Ye.deny(),rn(`Ikke lov å bygge her: ${t.why}`);return}const e=sr[i];if(Z.embers<e.cost){Ye.deny(),rn(`Trenger ${e.cost} ✦ glør`),Wn(sn.embers,"embersBad",Math.random(),"bad");return}Z.embers-=e.cost;const n=ia(T_(i),"tower");if(n.position.set(t.x,t.y,t.z),!t.plinth){const r=new oe(w1,E1);r.position.y=.04,r.receiveShadow=!0,n.add(r)}Te.add(n);const s={type:i,def:e,mesh:n,x:t.x,z:t.z,y:t.y,level:1,cd:.3,plinth:t.plinth,onPlinth:!!t.plinth};t.plinth&&(t.plinth.tower=s),Vn.push(s),Yt.colliders.push({x:t.x,z:t.z,r:1,tower:s}),Ne.emit(t.x,t.y+.3,t.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),Ye.build(),Z.buildMode=!1,t.plinth&&rn(`${e.name} på gammel sokkel: +25 % rekkevidde`)}const w1=new We(.95,1.05,.12,10),E1=new Xe({color:"#8a8478"}),Ui=new _e;{const i=new oe(new dr(1,24),new De({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const t=new es(.965,1,64);t.rotateX(-Math.PI/2);const e=new oe(t,new De({transparent:!0,opacity:.6,depthWrite:!1})),n=new oe(new We(.55,.7,1.6,10),new De({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,Ui.add(i,e,n),Ui.userData={disc:i,ring:e,pillar:n},Ui.visible=!1,Ui.renderOrder=20,Te.add(Ui)}function T1(i,t,e){if(Ui.visible=i,!i)return;const n=t.ok,s=n?t.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=sr[e].range*(t.plinth?Jt.plinthBonus:1);Ui.position.set(t.x,t.y+.06,t.z);const a=Ui.userData;for(const o of[a.disc,a.ring,a.pillar])o.material.color.set(s);a.ring.scale.setScalar(r),a.ring.visible=n,a.pillar.visible=!t.plinth}const Pi=(i,t)=>{const e=i.level-1;return t==="range"?i.def.range*(1+.12*e)*(i.onPlinth?Jt.plinthBonus:1):t==="dmg"?i.def.dmg*[1,1.7,2.6,3.9,5.85][e]:t==="rate"?i.def.cooldown/(1+.15*e):i.def[t]},Za=[];function A1(i){const t=Df();Bc(t,1),Qe.userData.roll.getWorldPosition(t.position),Te.add(t),Za.push({mesh:t,from:t.position.clone(),to:new k(i.x,i.y+1.3*i.mesh.scale.y,i.z),age:0})}function C1(i){for(let t=Za.length-1;t>=0;t--){const e=Za[t];e.age+=i;const n=Math.min(1,e.age/.45);e.mesh.position.lerpVectors(e.from,e.to,n),e.mesh.position.y+=Math.sin(n*Math.PI)*1.2,e.mesh.rotation.z+=i*14,n>=1&&(Te.remove(e.mesh),Za.splice(t,1),Ts.emit(e.to.x,e.to.y+.3,e.to.z,{n:6,color:"#e8e2dc",speed:1.2,up:1.4,life:1.2,gravity:-.3}))}}function R1(i){I.rollP=-1,C1(i);for(const t of Vn){if(t.cd-=i,t.upg){const c=I.stun<=0&&Math.hypot(I.x-t.x,I.z-t.z)<Jt.reach+.3;if(c)t.upg.t+=i,I.rollP=Math.min(1,t.upg.t/t.upg.dur),I.rollTower=t;else if(t.upg.t>0){const u=Qe.userData.roll.getWorldPosition(lr);Ne.emit(u.x,u.y,u.z,{n:14,color:"#4f8f3a",speed:1.4,up:.8,life:.8,gravity:6}),Ne.emit(u.x,u.y,u.z,{n:5,color:"#fffdf5",speed:1,up:.6,life:.7,gravity:5}),t.upg.t=0,mo("😩"),rn(`Rullingen ble avbrutt! Start på nytt ved ${t.def.name}`)}Kr(t,Math.min(1,t.upg.t/t.upg.dur)),c&&Math.random()<i*8&&Ne.emit(I.x,Qe.position.y+2.2,I.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),t.upg.t>=t.upg.dur&&(A1(t),I.rollP=-1,t.upg=null,t.level+=1,Lf(t,t.level),Kr(t,0),Ne.emit(t.x,t.y+1.2,t.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Ye.upgrade(),rn(`${t.def.name} er nå nivå ${t.level}`))}if(t.armBack>0&&(t.armBack-=i,t.armBack<=0&&(t.mesh.userData.arm.rotation.x=-.35)),t.type==="lamp"&&t.mesh.userData.blobs.forEach((c,u)=>c.position.y=.75+Math.sin(Z.time*.8+u*2.1)*.35),t.blind>0){t.blind-=i,Math.random()<i*8&&Ne.emit(t.x,t.y+2,t.z,{n:1,color:"#fff6c8",speed:.6,up:.8,life:.5,gravity:-.4});continue}const e=Pi(t,"range");let n=null,s=-1;for(const c of Ln){if(!c.alive||(c.def.flying?!t.def.air:t.def.ground===!1)||Math.hypot(c.x-t.x,c.z-t.z)>e)continue;const u=x1(c);u>s&&(s=u,n=c)}const r=t.mesh.userData.head;if(t.type==="speaker"){const c=Math.max(0,Math.sin(Z.time*7.3));r.rotation.z=Math.sin(Z.time*3.65)*.05,t.mesh.userData.woofers.forEach(u=>u.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=eo(Math.atan2(-(n.x-t.x),-(n.z-t.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-t.x),-(n.z-t.z));r.rotation.y+=eo(c,r.rotation.y)*Math.min(1,i*10)}if(!n||t.cd>0)continue;t.cd=Pi(t,"rate");const a=t.x,o=t.y+1.4*t.mesh.scale.y,l=t.z;if(t.type==="ring"){const c=C_();c.position.set(a,o-.3,l),Te.add(c),ri.push({kind:"bolt",src:t,mesh:c,target:n,dmg:Pi(t,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),Ye.puff()}else if(t.type==="chips"){const c=If();c.position.set(a,t.y+1,l),Te.add(c);const[u,h]=n.def.flying?[0,0]:Dn.dir(n.x,n.z),f=n.x+u*n.def.speed*.6,p=n.z+h*n.def.speed*.6;ri.push({kind:"shell",src:t,mesh:c,sx:a,sy:t.y+1,sz:l,ex:f,ez:p,ey:Yt.heightAt(f,p),t:0,dur:.95,dmg:Pi(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),Ne.emit(a,t.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),Ye.mortar()}else if(t.type==="speaker"){for(const u of Ln)!u.alive||Math.hypot(u.x-t.x,u.z-t.z)>e||(u.def.noMood||(u.slow=t.def.slowTime),gs(u,Pi(t,"dmg"),t));const c=Uf();c.position.set(t.x,t.y+.3,t.z),Te.add(c),rr.push({mesh:c,t:0,r:e}),Ne.emit(t.x,t.y+1.8,t.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),Ye.skank()}else if(t.type==="bubble"){const c=zf();c.position.set(a,o+.2,l),Te.add(c),ri.push({kind:"bubble",src:t,mesh:c,target:n,dmg:Pi(t,"dmg"),trap:t.def.trap,tx:n.x,ty:n.y,tz:n.z}),Ye.pickup()}else if(t.type==="kite"){if(ri.some(u=>u.kind==="kite"&&u.tower===t)){t.cd=.2;continue}const c=ia(Nf(),"tower");c.position.set(a,o,l),Te.add(c),ri.push({kind:"kite",mesh:c,tower:t,sx:a,sz:l,tx:n.x,tz:n.z,phase:"out",t:0,tick:0,dmg:Pi(t,"dmg"),zone:t.def.zone*(1+.1*(t.level-1)),hover:t.def.hover}),Ye.puff()}else if(t.type==="pizza"){const c=P_();c.position.set(a,t.y+1.2,l),Te.add(c);const[u,h]=Dn.dir(n.x,n.z),f=n.x+u*n.def.speed*1.1,p=n.z+h*n.def.speed*1.1;ri.push({kind:"shell",src:t,pizza:!0,mesh:c,sx:a,sy:t.y+1.2,sz:l,ex:f,ez:p,ey:Yt.heightAt(f,p),t:0,dur:1.3,arc:7,dmg:Pi(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),t.mesh.userData.arm.rotation.x=.9,t.armBack=.5,Ye.mortar()}else if(t.type==="lamp"){for(const c of Ln)!c.alive||Math.hypot(c.x-t.x,c.z-t.z)>e||(c.slow=Math.max(c.slow,t.def.slowTime),gs(c,Pi(t,"dmg"),t));Math.random()<.3&&Ne.emit(t.x,t.y+1.6,t.z,{n:2,color:"#ff9a3a",speed:.8,up:1.2,life:.8,gravity:-.3})}}}function P1(i){var t;for(let e=ri.length-1;e>=0;e--){const n=ri[e];let s=!1;if(n.kind==="bolt"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y+(n.target.def.flying?0:.5),n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),u=18*i;n.age+=i,n.mesh.lookAt(n.tx,n.ty,n.tz),n.mesh.scale.setScalar(.7+n.age*2.2),c<=u+.3?(s=!0,n.target.alive&&(gs(n.target,n.dmg,n.src),Ts.emit(n.tx,n.ty+.3,n.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),Ye.hit())):r.set(r.x+a/c*u,r.y+o/c*u,r.z+l/c*u)}else if(n.kind==="shell"){n.t+=i/n.dur;const r=Math.min(1,n.t);if(n.mesh.position.set(n.sx+(n.ex-n.sx)*r,n.sy+(n.ey-n.sy)*r+Math.sin(Math.PI*r)*(n.arc||5),n.sz+(n.ez-n.sz)*r),n.mesh.rotation.set(r*9,r*5,0),n.t>=1){s=!0;for(const a of Ln){if(!a.alive||a.def.flying)continue;const o=Math.hypot(a.x-n.ex,a.z-n.ez);o<n.splash&&gs(a,n.dmg*(o<n.splash*.4?1:.6),n.src)}Ne.emit(n.ex,n.ey+.3,n.ez,{n:26,color:n.pizza?"#ff7040":"#ffd060",speed:5,up:5,life:.7,gravity:12}),Ts.emit(n.ex,n.ey+.3,n.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),Ye.crunch(),Yn=Math.max(Yn,.12)}}else if(n.kind==="bubble"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y,n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),u=13*i;n.mesh.scale.setScalar(1+Math.sin(Z.time*12)*.06),c<=u+.3?(s=!0,n.target.alive&&(gs(n.target,n.dmg,n.src),n.target.trap=Math.max(n.target.trap||0,n.trap*Math.min(1,((t=n.target.def.resist)==null?void 0:t.bubble)??1))),Ne.emit(n.tx,n.ty,n.tz,{n:6,color:"#dff6ff",speed:2,up:1,life:.35})):r.set(r.x+a/c*u,r.y+o/c*u,r.z+l/c*u)}else if(n.kind==="kite"){n.t+=i;const r=n.mesh.position;if(n.mesh.userData.tailSegs.forEach((a,o)=>{a.rotation.x=Math.sin(Z.time*5-o*.9)*.35,a.rotation.z=Math.sin(Z.time*3.7-o*.7)*.25}),Vn.includes(n.tower)||(n.phase="back"),n.phase==="out"){const a=n.tx-r.x,o=n.tz-r.z,l=Math.hypot(a,o),c=9*i;r.y+=(4.2-r.y)*Math.min(1,i*2),l<c?(n.phase="hover",n.t=0):(r.x+=a/l*c,r.z+=o/l*c)}else if(n.phase==="hover"){if(r.x=n.tx+Math.sin(Z.time*1.7)*.6,r.z=n.tz+Math.cos(Z.time*1.3)*.4,r.y=4.2+Math.sin(Z.time*2.3)*.3,n.tick-=i,n.tick<=0){n.tick=.25;for(const a of Ln)a.alive&&a.def.flying&&Math.hypot(a.x-r.x,a.z-r.z)<n.zone&&(gs(a,n.dmg*.4,n.tower),a.slow=Math.max(a.slow,.4));Ne.emit(r.x,r.y-.3,r.z,{n:2,color:"#ffd0b0",speed:1.5,up:-.5,life:.5,gravity:0})}n.t>n.hover&&(n.phase="back")}else{const a=n.sx-r.x,o=n.sz-r.z,l=Math.hypot(a,o),c=11*i;l<c?s=!0:(r.x+=a/l*c,r.z+=o/l*c)}n.mesh.rotation.set(Math.sin(Z.time*3)*.2,Z.time*.5,Math.cos(Z.time*2.5)*.25)}s&&(Te.remove(n.mesh),ri.splice(e,1))}for(let e=rr.length-1;e>=0;e--){const n=rr[e];n.t+=i/(n.dur||.6),n.mesh.scale.setScalar(.5+n.t*n.r),n.mesh.material.opacity=.7*(1-n.t),n.t>=1&&(Te.remove(n.mesh),n.mesh.material.dispose(),rr.splice(e,1))}}function D1(i){var t,e;for(const n of Ln){if(!n.alive)continue;n.phase+=i*n.def.anim;const s=n.slow>0?.5:1;n.slow-=i;let r=n.def.speed*s*(n.speedMul||1);n.trap>0?(n.trap-=i,r*=.15,n.bubbleFx||(n.bubbleFx=zf(),n.bubbleFx.scale.setScalar(3.2),n.mesh.add(n.bubbleFx)),n.bubbleFx.visible=!0):n.bubbleFx&&(n.bubbleFx.visible=!1);const a=n.mesh.userData.body;if(n.def.flying){const l=Yt.lighthouse.pos;let c=l.x-n.x,u=l.z-n.z;const h=Math.hypot(I.x-n.x,I.z-n.z);let f=n.trap>0?1.1:n.def.alt||4.2;if(n.def.swoop&&h<6&&I.stun<=0&&n.hitCd<=0&&!(n.trap>0)){const y=Math.hypot(c,u);c=c/y*.5+(I.x-n.x)/h*.9,u=u/y*.5+(I.z-n.z)/h*.9,f=1.5}n.hitCd-=i;const p=Math.hypot(c,u)||1,v=Math.cos(Z.time*1.3+n.lane*4)*(n.type==="balloon"?.4:1.2);n.x+=(c/p+-u/p*v*.35)*r*i,n.z+=(u/p+c/p*v*.35)*r*i,n.mesh.rotation.z=-v*(n.type==="balloon"?.05:.25);const x=Math.max(Yt.heightAt(n.x,n.z),0);n.y+=(x+f-n.y)*Math.min(1,i*2.5);const m=n.mesh.userData.blob;m&&(m.position.y=(x-n.y)/n.var+.05,m.material.opacity=1,m.scale.setScalar(1)),n.mesh.rotation.y=Math.atan2(-c,-u);const d=n.mesh.userData;if((t=d.wings)==null||t.forEach((y,S)=>y.rotation.z=Math.sin(n.phase)*.45*(S?-1:1)),(e=d.rotors)==null||e.forEach(y=>y.rotation.y+=i*40),d.rotor&&(d.rotor.rotation.y+=i*30,d.tail.rotation.x+=i*30),a.position.y=Math.sin(n.phase*.5)*(n.type==="balloon"?.3:.15),n.def.blind&&(n.blindCd=(n.blindCd??n.def.blind.every*.5)-i,d.beam&&(d.beam.visible=n.blindCd>n.def.blind.every-.8),n.blindCd<=0)){n.blindCd=n.def.blind.every;const y=ta(Vn,n.x,n.z,n.def.blind.range);y&&(y.blind=n.def.blind.dur,rn(`${n.def.name} blendet ${y.def.name}!`)),Math.hypot(I.x-n.x,I.z-n.z)<5&&fc(Jt.airStress,n.x,n.z,!0)}n.def.swoop&&h<1.3&&Math.abs(n.y-Qe.position.y-1)<1.4&&I.stun<=0&&n.hitCd<=0&&U1(n),Math.hypot(l.x-n.x,l.z-n.z)<3.4&&Au(n)}else{const[l,c,u]=Dn.dir(n.x,n.z);n.remain=u;const h=Yt.lighthouse.pos,f=Math.hypot(h.x-n.x,h.z-n.z);if(f<4.3||u<.6){Au(n);continue}let p=l,v=c;!p&&!v&&(p=(h.x-n.x)/f,v=(h.z-n.z)/f),n.hx=(n.hx||0)+(p-(n.hx||0))*Math.min(1,i*6),n.hz=(n.hz||0)+(v-(n.hz||0))*Math.min(1,i*6);const x=Math.hypot(n.hx,n.hz)||1,m=n.lane*Math.min(1,f/10);if(n.x+=n.hx/x*r*i+-n.hz/x*m*i*.5,n.z+=n.hz/x*r*i+n.hx/x*m*i*.5,n.y=Yt.heightAt(n.x,n.z),n.mesh.rotation.y=Math.atan2(-n.hx,-n.hz),I.inv<=0&&I.faint<=0&&Math.abs(I.x-n.x)<1.2&&Math.abs(I.z-n.z)<1.2&&Math.hypot(I.x-n.x,I.z-n.z)<1.1&&fc(n.def.stress??10,n.x,n.z),n.type==="clerk")a.position.y=Math.abs(Math.sin(n.phase))*.12,a.rotation.z=Math.sin(n.phase)*.06,n.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(n.phase*.5))*.25;else if(n.type==="tank"){const d=Math.abs(Math.sin(n.phase));a.position.y=d*.05,a.rotation.z=Math.sin(n.phase)*.07;const y=Math.pow(1-d,6);a.scale.set(1+y*.06,1-y*.08,1+y*.06)}else n.type==="swarm"?(a.position.y=Math.abs(Math.sin(n.phase))*.14,a.rotation.y=Math.sin(n.phase*.5)*.3):n.type==="complainer"?(a.position.y=Math.abs(Math.sin(n.phase))*.16,n.mesh.userData.arm.rotation.z=Math.sin(n.phase*.5)*.4):n.type==="lobbyist"||n.type==="lobbyMini"?(a.position.y=Math.abs(Math.sin(n.phase))*.05,a.rotation.z=Math.sin(n.phase*.5)*.17):n.type==="auditor"?(a.position.y=Math.abs(Math.sin(n.phase))*.03,a.rotation.z=0):(a.position.y=Math.abs(Math.sin(n.phase))*.08,a.rotation.z=Math.sin(n.phase)*.05)}if(n.hitT>0){n.hitT-=i;const l=Math.max(0,n.hitT)/.18;a.scale.set(1+l*.16,1-l*.16,1+l*.16),a.position.z=l*.15,n.hitT<=0&&(a.scale.set(1,1,1),a.position.z=0)}n.blinkT-=i,n.blinkT<-.12&&(n.blinkT=2+Math.random()*3.5);for(const l of n.mesh.userData.eyes)l.scale.y=n.blinkT<0?.12:1;n.mesh.position.set(n.x,n.y,n.z),n.slow>0&&Math.random()<i*6&&Ne.emit(n.x,n.y+.8,n.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const o=n.mesh.userData.hpBar;if(o.visible){o.quaternion.copy($e.quaternion),o.quaternion.premultiply(n.mesh.quaternion.clone().invert());const l=Math.max(0,n.hp/n.maxHp),c=n.mesh.userData.hpFg;c.scale.x=.96*l,c.position.x=-.48*(1-l),c.material.color.setHSL(.33*(1-l),.7,.55)}}for(let n=Ln.length-1;n>=0;n--)Ln[n].alive||Ln.splice(n,1)}function Au(i){Z.leaks[i.type]=(Z.leaks[i.type]||0)+1,i.alive=!1,Te.remove(i.mesh),Z.lights=Math.max(0,Z.lights-1),Yt.lighthouse.setLights(Z.lights),Wn(sn.lights,"lights",Z.lights,"bad");const t=Yt.lighthouse.flamePos();Ts.emit(t.x,t.y,t.z,{n:10,color:"#b8b4b0",speed:.8,up:1.6,life:1.8,gravity:-.4}),Ne.emit(t.x,t.y,t.z,{n:14,color:"#8a8580",speed:1.6,up:.6,life:1.6,gravity:4}),rn(`${i.def.name} slukket litt glød!`),Ye.lose(),Yn=.3,Z.lights<=0&&td(!1)}const ar=[],ci=document.createElement("div");ci.id="chillbar";ci.innerHTML="<i></i>";document.body.appendChild(ci);let Cu=0;function mo(i){const t=document.createElement("div");t.className="pop-emoji",t.textContent=i,Ue.set(I.x,Qe.position.y+2.6,I.z).project($e),t.style.left=`${(Ue.x*.5+.5)*innerWidth}px`,t.style.top=`${(-Ue.y*.5+.5)*innerHeight}px`,document.body.appendChild(t),setTimeout(()=>t.remove(),900)}function fc(i,t,e,n=!1){if(!(I.faint>0||I.inv>0)){if(I.chill=Math.max(0,I.chill-i),I.inv=Jt.stressInvuln,I.flinch=.55,!n){const s=I.x-t,r=I.z-e,a=Math.hypot(s,r)||1;I.vx+=s/a*Jt.stressPush,I.vz+=r/a*Jt.stressPush,I.goal=null}Ne.emit(I.x,Qe.position.y+1.4,I.z,{n:8,color:"#ff6a5a",speed:2,up:1.5,life:.4}),mo("😓"),ci.classList.remove("hit"),ci.offsetWidth,ci.classList.add("hit"),Wn(sn.chill,"chillBad",Math.random(),"bad"),I.chill<=0&&L1()}}function L1(){I.faint=Jt.faintTime,I.stun=Jt.faintTime,I.faints++,I.goal=null,I.vx=I.vz=0;const i=Math.floor(Z.embers*Jt.faintLoss);i>0&&(Z.embers-=i,qc(I.x,Qe.position.y+1,I.z,i,!1,1.6)),I.carrying&&(I.carrying=!1),mo("😵"),rn(`😵 Vokteren besvimte av stress! Våkner ved fyret om ${Jt.faintTime} s`),Ye.stun()}function Jf(i,t){const e=If();e.scale.setScalar(1.8),e.position.set(i,Yt.heightAt(i,t)+.5,t),Te.add(e),ar.push({mesh:e,x:i,z:t,life:Jt.bagLife})}function I1(i){I.inv-=i;const t=Yt.lighthouse.pos;I.faint>0?(I.faint-=i,I.faint<=0&&(I.x=t.x+1,I.z=t.z+7.5,I.vx=I.vz=0,I.stun=0,I.chill=Jt.chillMax*Jt.wakeChill,I.inv=Jt.stressInvuln*2,Ne.emit(I.x,Yt.heightAt(I.x,I.z)+1,I.z,{n:14,color:"#9fffb0",speed:2,up:2,life:.7}))):Math.hypot(t.x-I.x,t.z-I.z)<Jt.regenReach&&(I.chill=Math.min(Jt.chillMax,I.chill+Jt.regen*i));for(let s=ar.length-1;s>=0;s--){const r=ar[s];r.life-=i,r.mesh.rotation.y+=i*1.5,r.mesh.position.y=Yt.heightAt(r.x,r.z)+.5+Math.sin(Z.time*3+s)*.12,r.mesh.visible=r.life>4||Math.sin(r.life*12)>0,I.faint<=0&&Math.hypot(r.x-I.x,r.z-I.z)<1.4&&(I.chill=Math.min(Jt.chillMax,I.chill+Jt.bagHeal),rn(`🥔 Chips! +${Jt.bagHeal} chill`),mo("😌"),Ye.pickup(),r.life=0),r.life<=0&&(Te.remove(r.mesh),ar.splice(s,1))}const e=Math.round(I.chill);Wn(sn.chill,"chill",e),sn.chill.classList.toggle("low",e<30),e!==Cu&&(Cu=e,ci.firstChild.style.width=`${100*I.chill/Jt.chillMax}%`,ci.classList.toggle("low",e<30));const n=(e<Jt.chillMax||I.faint>0)&&Z.phase!=="title";ci.style.display=n?"block":"none",n&&(Ue.set(I.x,Qe.position.y+2.3,I.z).project($e),ci.style.left=`${(Ue.x*.5+.5)*innerWidth}px`,ci.style.top=`${(-Ue.y*.5+.5)*innerHeight}px`)}function U1(i){if(fc(Jt.airStress,i.x,i.z,!0),I.faint>0)return;I.stun=Jt.stunTime,i.hitCd=4;const t=Math.floor(Z.embers*Jt.stunLoss);t>0&&(Z.embers-=t,qc(I.x,Qe.position.y+1,I.z,t,!1,1.6)),I.carrying&&(I.carrying=!1,rn("Rullepapiret blåste bort!")),Ne.emit(I.x,Qe.position.y+1.5,I.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),Ye.stun(),Yn=.2}function N1(i){for(let t=ms.length-1;t>=0;t--){const e=ms[t];e.life-=i,e.phase+=i;const n=Math.max(Yt.heightAt(e.x,e.z),.1)+.35;e.settled||(e.vy-=16*i,e.x+=e.vx*i,e.z+=e.vz*i,e.y+=e.vy*i,e.y<=n&&(e.y=n,Math.abs(e.vy)>2.5?(e.vy=-e.vy*.4,e.vx*=.6,e.vz*=.6):e.settled=!0));const s=Math.hypot(I.x-e.x,I.z-e.z);if(I.stun<=0&&s<Jt.magnet){const l=(1-s/Jt.magnet)*14+3;e.x+=(I.x-e.x)/s*l*i,e.z+=(I.z-e.z)/s*l*i,e.settled=!0,e.y=n}const r=e.settled?Math.sin(e.phase*3)*.12:0;e.mesh.position.set(e.x,e.y+r,e.z),e.mesh.rotation.y+=i*3;const a=e.life<5,o=(.8+Math.min(e.value,6)*.08)*(a?.55+.45*(e.life/5):1);if(e.mesh.scale.setScalar(o),e.mesh.visible=!a||Math.sin(e.life*(e.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Ne.emit(e.x,e.y+.2,e.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),I.stun<=0&&s<.9)Z.embers+=e.value,Wn(sn.embers,"embers",Z.embers,"bump"),Ne.emit(e.x,e.y+.3,e.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Ye.pickup(),Te.remove(e.mesh),ms.splice(t,1);else if(e.life<=0){const l=Math.max(1,Math.round(e.value*Jt.expiredRefund));Z.embers+=l,Ne.emit(e.x,e.y,e.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),Te.remove(e.mesh),ms.splice(t,1)}}}let to=0,Qf="";function rn(i){to=2,Qf=i,zi.textContent=""}function Ru(i){var O,G;const t=Qe.userData;(Z.phase==="prep"||Z.phase==="wave")&&I1(i),I.stun-=i,t.stars.visible=I.stun>0,t.stars.rotation.y+=i*6;let e=0,n=0;if(I.stun<=0&&(Z.phase==="prep"||Z.phase==="wave")){if(ve.move.x||ve.move.z){I.goal=null;const D=Math.cos(Ii),F=Math.sin(Ii);e=ve.move.x*D+ve.move.z*F,n=-ve.move.x*F+ve.move.z*D}else if(I.goal){const D=I.goal,F=D.x-I.x,B=D.z-I.z;if(D.field===void 0){D.field=null;const $=Math.ceil(Math.hypot(F,B)/.5);for(let tt=1;tt<$;tt++)if(!Yt.isWalkable(I.x+F*tt/$,I.z+B*tt/$)){D.field=Dn.walkField(D.x,D.z);break}}const W=D.field?Math.min(D.field.at(I.x,I.z),Math.hypot(F,B)+50):Math.hypot(F,B);D.t+=i;const V=W<.35||D.spot&&Math.hypot(D.spot.x-I.x,D.spot.z-I.z)<D.reach;if(W<D.best-.3&&(D.best=W,D.lastGain=D.t),V||D.t>12||D.t-D.lastGain>1.5)I.goal=null;else{const $=Math.min(1,W/.8),tt=D.field&&Math.hypot(F,B)>1.5?D.field.dir(I.x,I.z):null,rt=tt&&(tt[0]||tt[1])?tt[0]:F/Math.hypot(F,B),Ct=tt&&(tt[0]||tt[1])?tt[1]:B/Math.hypot(F,B);e=rt,n=Ct;for(const nt of Yt.colliders){if(D.spot&&nt.x===D.spot.x&&nt.z===D.spot.z)continue;const ut=nt.x-I.x,Rt=nt.z-I.z,ft=ut*rt+Rt*Ct;if(ft<=0||ft>nt.r+2.2||ft>W)continue;const zt=-ut*Ct+Rt*rt;if(Math.abs(zt)>nt.r+.6)continue;const Ht=(1-Math.abs(zt)/(nt.r+.6))*1.6*(zt>=0?1:-1);e-=-Ct*Ht,n-=rt*Ht}const Bt=Math.hypot(e,n)||1;e=e/Bt*$,n=n/Bt*$}}}const r=Yt.heightAt(I.x,I.z)<.05,a=Jt.keeperSpeed*(I.carrying?Jt.carrySlow:1)*(r?Jt.wadeSlow:1),o=e*a,l=n*a,c=(O=Yt.isIce)!=null&&O.call(Yt,I.x,I.z)?1.6:12;I.vx+=(o-I.vx)*Math.min(1,i*c),I.vz+=(l-I.vz)*Math.min(1,i*c);let u=I.x+I.vx*i,h=I.z+I.vz*i;Yt.isWalkable(u,h)||(Yt.isWalkable(u,I.z)?h=I.z:Yt.isWalkable(I.x,h)?u=I.x:(u=I.x,h=I.z));for(const D of Yt.colliders){const F=u-D.x,B=h-D.z,W=Math.hypot(F,B),V=D.r+.4;W<V&&W>1e-4&&(u=D.x+F/W*V,h=D.z+B/W*V)}I.x=u,I.z=h;const f=Math.hypot(I.vx,I.vz);if(f>.3){const D=Math.atan2(-I.vx,-I.vz);I.face+=eo(D,I.face)*Math.min(1,i*12),I.walk+=i*f*2.2}if(Qe.rotation.y=I.face,Qe.position.set(I.x,Math.max(Yt.heightAt(I.x,I.z),-.25),I.z),r&&f>1&&(I.splash=(I.splash||0)-i,I.splash<=0)){I.splash=.22,Ne.emit(I.x,.15,I.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const D=Uf();D.position.set(I.x,.1,I.z),D.material.color.set("#f4fdff"),Te.add(D),rr.push({mesh:D,t:0,r:1.6,dur:.9})}const p=Math.min(1,f/3),v=Math.sin(I.walk)*p;t.legs[0].position.z=v*.2,t.legs[1].position.z=-v*.2,t.legs[0].position.y=.2+Math.max(0,v)*.12,t.legs[1].position.y=.2+Math.max(0,-v)*.12;const x=f>.6;x!==!!I.wasMoving&&(I.sq=x?1:-1,I.wasMoving=x),I.sq=(I.sq||0)*Math.exp(-i*7);const m=f<.3?Math.sin(Z.time*2.2)*.025:0;t.body.scale.set(1-m*.5-I.sq*.07,1+m+I.sq*.12,1-m*.5-I.sq*.07);const d=Math.sign(Math.sin(I.walk));f>2&&!r&&d!==I.lastStep&&Ne.emit(I.x,Qe.position.y+.1,I.z,{n:2,color:"#d9c9a4",speed:.7,up:.6,life:.45,gravity:1}),I.lastStep=d,I.flinch=Math.max(0,(I.flinch||0)-i),I.cheer=Math.max(0,(I.cheer||0)-i);const y=f>.5&&((G=Yt.isIce)==null?void 0:G.call(Yt,I.x,I.z)),S=Math.abs(v)*.09+(I.cheer>0?Math.abs(Math.sin(I.cheer*9))*.35:0);t.body.position.y=S,t.body.rotation.x=I.faint>0?0:-.35*Math.min(1,I.flinch*2.5),t.body.rotation.z=I.faint>0?1.45:I.stun>0?.5:v*.05+(y?Math.sin(Z.time*7)*.12:0)+(I.flinch>0?Math.sin(I.flinch*40)*.08:0);let g=v*.6,A=-v*.45,E=0,w=0;y&&(E=-1.25+Math.sin(Z.time*9)*.25,w=1.25+Math.cos(Z.time*8)*.25,g=A=0),I.cheer>0&&(g=A=-2.9,E=-.3,w=.3),I.flinch>0&&(g=-2.5,E=.5);const C=I.rollP>=0&&f<.3&&I.faint<=0;if(C){const D=Math.sin(Z.time*7)*.12;g=1.35+D,E=.55,A=1.35-D,w=-.55;const F=I.rollTower,B=Math.atan2(-(F.x-I.x),-(F.z-I.z));if(I.face+=eo(B,I.face)*Math.min(1,i*8),Qe.rotation.y=I.face,Bc(t.roll,I.rollP),t.roll.rotation.x=Math.sin(Z.time*7)*.5,Math.random()<i*4&&I.rollP<.5){const W=t.roll.getWorldPosition(lr);Ne.emit(W.x,W.y,W.z,{n:1,color:"#5aa84a",speed:.4,up:.3,life:.5,gravity:4})}}t.roll.visible=C,t.armR.visible=C,C?t.lanternArm.position.set(.36,.72,.18):t.lanternArm.position.set(.48,1,-.1);const M=Math.min(1,i*14);t.armL.rotation.x+=(g-t.armL.rotation.x)*M,t.armL.rotation.z+=(E-t.armL.rotation.z)*M;const _=C?t.armR:t.lanternArm;C&&t.lanternArm.rotation.set(0,0,0),_.rotation.x+=(A-_.rotation.x)*M,_.rotation.z+=(w-_.rotation.z)*M,I.idle=f<.3?(I.idle||0)+i:0;const T=I.idle>2?Math.sin(Z.time*.55)*.7*Math.min(1,(I.idle-2)/1.5):0;t.head.rotation.y+=(T-t.head.rotation.y)*Math.min(1,i*4),I.blink=(I.blink??2)-i,I.blink<-.12&&(I.blink=2+Math.random()*3);for(const D of t.eyes)D.scale.y=I.faint>0?.1:I.blink<0?.12:1;t.carried.visible=I.carrying,I.chargeTower?(t.carried.position.lerp(lr.set(0,.95,-.5),Math.min(1,i*14)),t.carried.rotation.y=0,t.carried.scale.setScalar(Math.max(.55,t.carried.scale.x-i*3))):(t.carried.rotation.y+=i*2,t.carried.scale.setScalar(1),t.carried.position.set(0,2.35+Math.sin(Z.time*3)*.08,0)),Vc.intensity=qf*(1+Math.sin(Z.time*11)*.115)}function z1(){for(const i of ve.clicks.splice(0)){Eu.setFromCamera(i,$e);const t=Eu.intersectObject(Yt.terrain)[0];if(!t)continue;let e=t.point.x,n=t.point.z;const s=Yt.lighthouse.pos,r=ta(Yt.plinths,e,n,2.2)||(Math.hypot(s.x-e,s.z-n)<4.5?{x:s.x,z:s.z,big:!0}:null);if(r){const a=r.big?4.3:1.95;let o=I.x-r.x,l=I.z-r.z;const c=Math.hypot(o,l)||1;e=r.x+o/c*a,n=r.z+l/c*a}I.goal={x:e,z:n,t:0,best:1/0,lastGain:0,spot:r,reach:r?r.big?Jt.lighthouseReach-.4:Jt.reach-.25:0},Ne.emit(e,Yt.heightAt(e,n)+.2,n,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}}function or(i=!Z.paused,t=!1){Z.paused=i;const e=ve.labels();de("pause-keys").textContent=`${e.name}: fortsett med ${e.pause} · start på nytt med ${e.restart}`,de("pause").classList.toggle("hidden",!i),de("confirm").classList.toggle("hidden",!t),Z.confirming=i&&t}try{sessionStorage.getItem("glod-portrait")&&document.documentElement.classList.add("portrait-ok")}catch{}de("btn-portrait").addEventListener("click",()=>{document.documentElement.classList.add("portrait-ok");try{sessionStorage.setItem("glod-portrait","1")}catch{}ra()});de("btn-resume").addEventListener("click",()=>or(!1));de("btn-restart").addEventListener("click",()=>or(!0,!0));de("btn-yes").addEventListener("click",()=>Hr());de("btn-no").addEventListener("click",()=>or(!0,!1));de("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn}`});de("btn-lex").addEventListener("click",()=>{const i=de("lex");i.innerHTML||(i.innerHTML=Object.entries(fo).filter(([t])=>t!=="lobbyMini").map(([t,e])=>{const{tough:n,weak:s}=Zf(e);return`<div class="lex-row"><b>${e.flying?"🪶":"🐾"} ${e.name}</b><small>${e.info||(e.flying?"flyr rett mot fyret":"går langs veien")}</small><span>${n?`🛡️ ${n}`:""} ${s?`💥 ${s}`:""}</span></div>`}).join("")+`<p class="lex-key">🛡️ tåler · 💥 svak mot · ${Object.entries(uc).map(([t,e])=>`${e} ${sr[t].name}`).join(" · ")} · 📒 skjold forfra</p>`),i.classList.toggle("hidden")});function Hr(){for(const i of Li)i.el.remove();Li.length=0;for(const i of[Ln,Vr,ms,ri,rr]){for(const t of i)t.mesh&&Te.remove(t.mesh);i.length=0}for(const i of Vn)Te.remove(i.mesh);Vn.length=0;for(const i of Yt.plinths)i.tower=null;for(let i=Yt.colliders.length-1;i>=0;i--)Yt.colliders[i].tower&&Yt.colliders.splice(i,1);Z.buildMode=!1,I.chargeTower&&Kr(I.chargeTower,0),Object.assign(Z,{phase:"title",wave:0,timer:0,embers:Jt.startEmbers,lights:gr,spawnQueue:[],leaks:{},seen:{},waveClock:0,sel:0,paused:!1,confirming:!1}),Object.assign(I,{x:Yt.lighthouse.pos.x+1,z:Yt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,charge:0,chargeTower:null,goal:null,chill:Jt.chillMax,inv:0,faint:0,faints:0});for(const i of ar)Te.remove(i.mesh);ar.length=0,Yt.lighthouse.setLights(gr),V1(),Yn=0,to=0,Oi={},Wn(sn.lights,"lights",Z.lights),Wn(sn.embers,"embers",Z.embers),Wn(sn.wave,"wave",0),sn.timer.textContent="",de("pause").classList.add("hidden"),de("confirm").classList.add("hidden"),de("overlay").classList.add("hidden"),ve.clear(),Z.phase="title",go(!0),window.__restarts=(window.__restarts||0)+1}function F1(){const i=ve.device;if(Oi.device===i+ve.padKind)return;Oi.device=i+ve.padKind;const t=ve.labels();de("touch").classList.toggle("hidden",i!=="touch"||Z.phase==="title"),xi.querySelectorAll("button i").forEach((e,n)=>{e.textContent=i==="pad"?n===Z.sel?t.build:"":i==="touch"?"":String(n+1)}),Hc.textContent="Neste bølge ▶",Oi.sel=-1}function O1(i){if(ve.consume("fps")&&Wc.classList.toggle("hidden"),ve.consume("music")&&nd(),F1(),Z.phase==="title"){["build","carry","next","pause"].some(f=>ve.consume(f))&&go(),ve.clear();return}if(Wn(sn.embers,"embers",Z.embers),!(Z.phase==="prep"||Z.phase==="wave")){if((Z.phase==="won"||Z.phase==="lost")&&ve.consume("restart")){Hr();return}ve.clear(),xi.classList.add("hidden"),Tu("");return}if(ve.consume("restart")){Z.confirming?Hr():or(!0,!0);return}if(ve.consume("pause")&&or(!Z.paused),Z.confirming){if(ve.consume("build")||ve.consume("next")){Hr();return}ve.consume("carry")&&or(!0,!1)}if(Z.paused){ve.clear();return}z1(),ve.consume("next")&&Z.phase==="prep"&&(Z.timer=0),ve.consume("selPrev")&&(Z.sel=(Z.sel+$i.length-1)%$i.length),ve.consume("selNext")&&(Z.sel=(Z.sel+1)%$i.length);const e=ta(Yt.plinths,I.x,I.z,Jt.reach,f=>!f.tower),n=ta(Vn,I.x,I.z,Jt.reach),s=Yt.lighthouse.pos,r=Math.hypot(s.x-I.x,s.z-I.z)<Jt.lighthouseReach,a=I.stun>0,o=Yc();ve.consume("build")&&!a&&(Z.buildMode||e?Qa($i[Z.sel]):Z.buildMode=!0),$i.forEach((f,p)=>{ve.consume("b"+(p+1))&&!a&&(Z.sel=p,Qa(f))});const l=(Z.buildMode||!!e)&&!a&&!I.carrying;T1(l,o,$i[Z.sel]),xi.classList.toggle("hidden",!l),l&&(xi.querySelectorAll("button").forEach((f,p)=>{f.disabled=Z.embers<sr[f.dataset.tower].cost,f.classList.toggle("sel",p===Z.sel)}),Oi.sel!==Z.sel&&ve.device==="pad"&&(Oi.sel=Z.sel,xi.querySelectorAll("button i").forEach((f,p)=>f.textContent=p===Z.sel?ve.labels().build:""))),ve.consume("carry")&&!a&&(!I.carrying&&r?Z.embers>=Jt.stoneCost?(Z.embers-=Jt.stoneCost,I.carrying=!0,Wn(sn.embers,"embers",Z.embers,"bump"),Ne.emit(I.x,Qe.position.y+2.3,I.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),Ye.stone()):(Ye.deny(),rn(`Rullepapir koster ${Jt.stoneCost} ✦`)):I.carrying&&r?(I.carrying=!1,Z.embers+=Jt.stoneCost,Ye.stone(),rn("Rullepapiret er lagt tilbake")):!I.carrying&&Z.buildMode?Z.buildMode=!1:I.carrying?n||rn("Bær rullepapiret til et tårn"):rn("Rullepapir hentes ved fyret"));const c=I.carrying&&!a&&n&&n.level<sl&&!n.upg?n:null;c!==I.chargeTower&&(I.chargeTower&&Kr(I.chargeTower,0),I.chargeTower=c,I.charge=0),c&&(I.charge+=i/Jt.chargeTime,Kr(c,Math.min(1,I.charge)),Math.random()<i*20&&Ne.emit(I.x,Qe.position.y+2.2,I.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),I.charge>=1&&(c.upg={t:0,dur:Jt.upgradeTime[c.level-1]},I.carrying=!1,I.chargeTower=null,I.charge=0,Ne.emit(c.x,c.y+1.2,c.z,{n:12,color:"#8ff0ff",speed:2,up:2,life:.6}),Ye.stone(),rn(`${c.def.name}: bli stående i ${c.upg.dur} s for å oppgradere`)));const u=ve.labels();to-=i;let h="";if(to>0)h=Qf;else if(a)h="Moralpanikk! Måka slo deg ut";else if(c)h="Leverer rullepapiret …";else if(n!=null&&n.upg)h=`Lader ${n.def.name} … ${Math.ceil(n.upg.dur-n.upg.t)} s igjen (bli stående)`;else if(I.carrying&&n&&n.level>=sl)h="Tårnet er på maks nivå";else if(I.carrying)h="Bær rullepapiret til et tårn";else if(r&&!I.carrying)h=`${u.carry} = hent rullepapir (${Jt.stoneCost} ✦)`;else if(r&&I.carrying)h=`${u.carry} = legg rullepapiret tilbake`;else if(n&&n.level<sl)h=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(l&&!o.ok)h=`Ikke lov her: ${o.why} · ${u.carry} = avbryt`;else if(l){const f=`${sr[$i[Z.sel]].name} (${sr[$i[Z.sel]].tip})`,p=o.plinth?" (sokkel: +25 % rekkevidde)":"";h=ve.device==="pad"?`${u.sel} = velg tårn · ${u.build} = sett ned ${f}${p}`:ve.device==="touch"?`Trykk på et tårn, eller Bygg = ${f}${p}`:`1 / 2 / 3 eller ${u.build} = sett ned ${f}${p}`}else Z.phase==="prep"&&Z.wave===0&&(h=`${u.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);Tu(h),p1(i)}const Ms=new _e;{const i=document.createElement("canvas");i.width=64,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,256),t.globalCompositeOperation="destination-in";const n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,256);const s=new ui(i);for(let r=0;r<6;r++){const a=new oe(new Zn(1,1),new De({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:fi,depthWrite:!1,depthTest:!1,fog:!1}));a.scale.set(3.5+r%3*2.4,34,1),a.position.set(-22+r*8.5,9,-4+r%2*6),a.rotation.set(-.95,0,.55),a.userData.phase=r*1.3,Ms.add(a)}}Ms.visible=an.id==="tak";Ms.renderOrder=50;Te.add(Ms);function k1(i){Ms.position.set(An.x,0,An.z),Ms.rotation.y=Ii,Ms.children.forEach(t=>t.material.opacity=.06+.035*Math.sin(i*.35+t.userData.phase))}let Yn=0;const Ue=new k,lr=new k,Zs=new k,ka=new k,rl=new k,An=new k(I.x,0,I.z);function B1(i){An.x+=(I.x-An.x)*Math.min(1,i*4),An.z+=(I.z-An.z)*Math.min(1,i*4),An.y=Qe.position.y;const t=ki?1.15:1,e=ve.zoom*t,n=$e.aspect<1.2?1.25:1;Ii+=ve.look;const s=6.6*e*n;$e.position.set(An.x+Math.sin(Ii)*s,An.y+12.5*e*n,An.z+Math.cos(Ii)*s),Yn=Math.max(0,Yn-i),Yn>0&&($e.position.x+=(Math.random()-.5)*Yn*2,$e.position.y+=(Math.random()-.5)*Yn),$e.lookAt(An.x-Math.sin(Ii),An.y+.5,An.z-Math.cos(Ii)),$e.updateMatrixWorld();let r=0,a=0,o=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([d,y])=>{const S=Ue.set(d,y,.5).unproject($e),g=S.sub($e.position).normalize(),A=g.y<-.05?(An.y-$e.position.y)/g.y:80;return[$e.position.x+g.x*Math.min(A,80),$e.position.z+g.z*Math.min(A,80)]});for(const[d,y]of l)r+=d/4,a+=y/4;for(const[d,y]of l)o=Math.max(o,Math.hypot(d-r,y-a));const c=xe.clamp(Math.ceil((o+4)/4)*4,16,80);hn.shadow.camera.right!==c&&(Object.assign(hn.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),hn.shadow.camera.updateProjectionMatrix());const u=2*c/hn.shadow.mapSize.x;Zs.set(Hn.sunDir[0],Hn.sunDir[1],Hn.sunDir[2]).normalize(),ka.set(0,1,0).cross(Zs).normalize(),rl.copy(Zs).cross(ka).normalize(),Ue.set(r,An.y,a);const h=Math.round(Ue.dot(ka)/u)*u,f=Math.round(Ue.dot(rl)/u)*u,p=Ue.dot(Zs);lr.copy(ka).multiplyScalar(h).addScaledVector(rl,f).addScaledVector(Zs,p),hn.target.position.copy(lr),hn.position.copy(lr).addScaledVector(Zs,40),hn.shadow.camera.far=40+c+20,k1(Z.time),y1(),Ue.set(I.x,Qe.position.y+.9,I.z);const v=-Ue.clone().applyMatrix4($e.matrixWorldInverse).z;Ue.project($e);const x=innerWidth*wn.getPixelRatio(),m=innerHeight*wn.getPixelRatio();mr.uKeep.value.set((Ue.x*.5+.5)*x,(Ue.y*.5+.5)*m,v),mr.uRad.value=m*.3,v1(Z.paused?0:i)}const al=an.eruption,ol=Yt.extras.bridges??[];let Nr=0,Ki=null;function G1(i){if(!(!al||!ol.length||Z.phase!=="wave")){if(Nr+=i,Ki&&Nr>=al.closed)Ki.setClosed(!1),Ki=null,Dn.setBlock(()=>!1);else if(!Ki&&Nr>=al.every){Nr=0;const t=ol[Math.random()*ol.length|0];t.setClosed(!0),Ki=t,Dn.setBlock((e,n)=>(e-t.x)**2+(n-t.z)**2<2.8*2.8),Yn=Math.max(Yn,.35),Ye.boom(),rn("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function V1(){Ki&&(Ki.setClosed(!1),Dn.setBlock(()=>!1)),Ki=null,Nr=0}function H1(i){if(G1(i),Z.phase==="prep")Z.timer-=i,sn.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,Z.timer))} s`,Z.timer<=0&&(sn.timer.textContent="",jf());else if(Z.phase==="wave"){for(Z.waveClock+=i;Z.spawnQueue.length&&Z.spawnQueue[0].t<=Z.waveClock;){const t=Z.spawnQueue.shift();Xc(t.type,t.path)}if(sn.timer.textContent=`${Ln.length+Z.spawnQueue.length} monstre igjen`,!Z.spawnQueue.length&&!Ln.length){if(sn.timer.textContent="",Z.wave>=Gc.length){td(!0);return}const t=Jt.waveBonus+Z.wave*Jt.waveBonusPer+Math.floor(Math.min(Z.embers,300)*Jt.interest);Z.embers+=t,Wn(sn.embers,"embers",Z.embers,"bump"),rn(`Bølge ${Z.wave} slått! +${t} ✦`),I.cheer=1.4,$f(Jt.prepTime),ke==null||ke.setIntensity(0)}}}function td(i){Z.phase=i?"won":"lost",de("touch").classList.add("hidden"),de("btn-pause").classList.add("hidden"),xi.classList.add("hidden");let t="";if(ke==null||ke.setIntensity(0),i){Ye.win();const n=Zr();v_(Rn),Zr()>n&&(t=`<p class="lead">🔓 Ny verden låst opp: <b>${Sr[Rn+1].name}</b>!</p>`)}const e=de("overlay");e.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${Z.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${t}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${t?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${Z.wave}. Rull opp ermene og prøv igjen.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,e.classList.remove("hidden"),de("btn-again").addEventListener("click",()=>Hr()),de("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn}`}),t&&de("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn+1}`})}let ke=null;const Pu=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})();function ed(){try{localStorage.setItem("glod-music",JSON.stringify({vol:ke.volume,muted:ke.muted}))}catch{}}function W1(){const i=Bf();ke||!i||fn.has("nomusic")||(ke=a1(i.ctx,i.noiseBuf,an.id),ke.setVolume(Pu.vol??.7),ke.setMuted(!!Pu.muted),ke.start(),de("music-vol").value=Math.round(ke.volume*100),de("btn-mute").textContent=ke.muted?"M: av":"M: på",window.__music=ke,window.__audioCtx=i.ctx)}function nd(){ke&&(ke.setMuted(!ke.muted),de("btn-mute").textContent=ke.muted?"M: av":"M: på",ed(),rn(ke.muted?"🎶 Musikk av":"🎶 Musikk på"))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const t=Bf();t&&t.ctx.state!=="running"&&t.ctx.resume()},{passive:!0});de("music-vol").addEventListener("input",i=>{ke&&(ke.setVolume(i.target.value/100),ed())});de("btn-mute").addEventListener("click",i=>{i.preventDefault(),nd()});function go(i=!1){Z.phase==="title"&&(s1(),W1(),ke==null||ke.setIntensity(0),i&&de("touch").classList.toggle("hidden",ve.device!=="touch"),de("overlay").classList.add("hidden"),ki&&(ve.device="touch"),Oi.device=null,de("btn-pause").classList.remove("hidden"),Yt.lighthouse.setLights(Z.lights),Wn(sn.embers,"embers",Z.embers),$f(Jt.firstPrep),Gf&&X1())}de("btn-start").addEventListener("click",go);{const i=de("worlds"),t=Zr();if(Sr.forEach((e,n)=>{const s=document.createElement("button");s.className="world"+(n===Rn?" sel":"")+(n>=t?" locked":""),s.innerHTML=`<b>${n>=t?"🔒 ":""}${e.name}</b><small>${n>=t?"Vinn forrige verden for å låse opp":e.blurb}</small>`,s.disabled=n>=t,s.addEventListener("click",()=>{n!==Rn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),de("btn-start").textContent=`Tenn gløden på ${an.name}`,an.skyDusk){const e=document.createElement("button");e.id="btn-tod",e.className="tod",e.textContent=xs==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",e.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",xs==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${Rn}&tid=${xs==="skumring"?"dag":"skumring"}`}),de("worlds").after(e)}}de("btn-quality").addEventListener("click",()=>Xf(di==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&Xf(di==="high"?"low":"high")});de("btn-quality").textContent=di==="high"?"Høy":"Lav";de("btn-pause").classList.add("hidden");function X1(){Z.embers=999;const i=Yt.lighthouse.pos,t=Yt.plinths.slice().sort((e,n)=>Math.hypot(e.x-i.x,e.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((e,n)=>{const s=t[n];I.x=s.x+1.9,I.z=s.z,Qa(e),n<3&&(Vn[Vn.length-1].level=n+1,Lf(Vn[Vn.length-1],n+1))}),I.x=i.x+1,I.z=i.z+6,I.carrying=!0,Z.wave=Number(fn.get("demo"))||4,Z.wave-=1,jf(),Z.waveClock=6,Z.embers=142}const q1=new Mf;let ll=0,Ba=0,Ga=0;window.__fpsSamples=[];window.__game={S:Z,monsters:Ln,towers:Vn,embers:ms,world:Yt,K:I,renderer:wn,camera:$e,input:ve,buildSpot:()=>Yc(),build:i=>Qa(i),renderOnce:()=>sa.render(0),outlineCats:yf,spawnMonster:Xc,projectiles:ri,damage:gs,dropBag:(i,t)=>Jf(i,t),ghost:Ui,get camYaw(){return Ii}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function id(){requestAnimationFrame(id);const i=q1.getDelta(),t=Math.min(i,.05);Z.paused||(Z.time+=t),ve.update(t),Z.paused||(Yt.update(Z.time),f1.update(Z.time));for(let e=0;e<c1&&!Z.paused&&(Z.phase==="prep"||Z.phase==="wave");e++)e>0&&(Z.time+=t,Ru(t)),H1(t),D1(t),R1(t),P1(t),N1(t),b1(t);if(Z.paused||Ru(t),O1(t),!Z.paused){if(Ne.update(t),Math.random()<t*(4+10*(Z.lights/gr))){const e=Yt.lighthouse.tip;Ts.emit(e.x,e.y,e.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}Ts.update(t)}if(B1(t),wn.info.reset(),sa.render(t),ll++,Ba+=i,Ba>=.5){const e=ll/Ba;window.__fpsSamples.push(e),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),Wc.textContent=`${e.toFixed(0)} fps · ${wn.info.render.calls} dc`,Ga=e<(ki?28:45)?Ga+1:0,Ga>=6&&Zi>1&&(Zi=Math.max(1,Zi-.25),wn.setPixelRatio(Zi),ra(),Ga=0,window.__dprDrops=(window.__dprDrops||0)+1,fn.has("debug")&&console.info(`[fps] ${e.toFixed(0)} fps over tid → dpr senket til ${Zi}`)),ll=0,Ba=0}}id();Gf&&fn.has("autostart")&&go();function eo(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}
