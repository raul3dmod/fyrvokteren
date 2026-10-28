(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="170",Jf=0,Xc=1,Qf=2,Tu=1,Au=2,Ai=3,Yi=0,En=1,je=2,un=0,Xi=1,si=2,qc=3,Yc=4,Cu=5,Jn=100,td=101,ed=102,nd=103,id=104,Cr=200,sd=201,rd=202,ad=203,ll=204,cl=205,hl=206,od=207,ul=208,ld=209,cd=210,hd=211,ud=212,fd=213,dd=214,fl=0,dl=1,pl=2,sr=3,ml=4,gl=5,vl=6,xl=7,dc=0,pd=1,md=2,qi=0,Ru=1,Pu=2,Du=3,pc=4,gd=5,Lu=6,Iu=7,Uu=300,rr=301,ar=302,_l=303,Ml=304,Qa=306,ri=1e3,ls=1001,yl=1002,dn=1003,vd=1004,sa=1005,ui=1006,vo=1007,cs=1008,pi=1009,Nu=1010,zu=1011,Br=1012,mc=1013,vs=1014,ni=1015,Gn=1016,gc=1017,vc=1018,xs=1020,Fu=35902,Ou=1021,ku=1022,Bn=1023,Bu=1024,Gu=1025,Zs=1026,_s=1027,to=1028,xc=1029,Vu=1030,_c=1031,Mc=1033,Ga=33776,Va=33777,Ha=33778,Wa=33779,Sl=35840,bl=35841,wl=35842,El=35843,Tl=36196,Al=37492,Cl=37496,Rl=37808,Pl=37809,Dl=37810,Ll=37811,Il=37812,Ul=37813,Nl=37814,zl=37815,Fl=37816,Ol=37817,kl=37818,Bl=37819,Gl=37820,Vl=37821,Xa=36492,Hl=36494,Wl=36495,Hu=36283,Xl=36284,ql=36285,Yl=36286,xd=3200,_d=3201,yc=0,Md=1,Vi="",on="srgb",dr="srgb-linear",eo="linear",Re="srgb",Rs=7680,$c=519,yd=512,Sd=513,bd=514,Wu=515,wd=516,Ed=517,Td=518,Ad=519,jc=35044,Zc=35048,Kc="300 es",Pi=2e3,ja=2001;class pr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jc=1234567;const Lr=Math.PI/180,Gr=180/Math.PI;function Ss(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function cn(i,t,e){return Math.max(t,Math.min(e,i))}function Sc(i,t){return(i%t+t)%t}function Cd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Rd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ir(i,t,e){return(1-e)*i+e*t}function Pd(i,t,e,n){return Ir(i,t,1-Math.exp(-e*n))}function Dd(i,t=1){return t-Math.abs(Sc(i,t*2)-t)}function Ld(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Id(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ud(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Nd(i,t){return i+Math.random()*(t-i)}function zd(i){return i*(.5-Math.random())}function Fd(i){i!==void 0&&(Jc=i);let t=Jc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Od(i){return i*Lr}function kd(i){return i*Gr}function Bd(i){return(i&i-1)===0&&i!==0}function Gd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ys(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Le={DEG2RAD:Lr,RAD2DEG:Gr,generateUUID:Ss,clamp:cn,euclideanModulo:Sc,mapLinear:Cd,inverseLerp:Rd,lerp:Ir,damp:Pd,pingpong:Dd,smoothstep:Ld,smootherstep:Id,randInt:Ud,randFloat:Nd,randFloatSpread:zd,seededRandom:Fd,degToRad:Od,radToDeg:kd,isPowerOfTwo:Bd,ceilPowerOfTwo:Gd,floorPowerOfTwo:Vd,setQuaternionFromProperEuler:Hd,normalize:yn,denormalize:Ys};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class me{constructor(t,e,n,s,r,a,o,l,c){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],v=n[8],x=s[0],m=s[3],p=s[6],y=s[1],S=s[4],g=s[7],A=s[2],E=s[5],w=s[8];return r[0]=a*x+o*y+l*A,r[3]=a*m+o*S+l*E,r[6]=a*p+o*g+l*w,r[1]=c*x+h*y+u*A,r[4]=c*m+h*S+u*E,r[7]=c*p+h*g+u*w,r[2]=f*x+d*y+v*A,r[5]=f*m+d*S+v*E,r[8]=f*p+d*g+v*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,v=e*u+n*f+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xo.makeScale(t,e)),this}rotate(t){return this.premultiply(xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xo=new me;function Xu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wd(){const i=Za("canvas");return i.style.display="block",i}const Qc={};function Rr(i){i in Qc||(Qc[i]=!0,console.warn(i))}function Xd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function qd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Se={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Re&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Re&&(i.r=Ks(i.r),i.g=Ks(i.g),i.b=Ks(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vi?eo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const th=[.64,.33,.3,.6,.15,.06],eh=[.2126,.7152,.0722],nh=[.3127,.329],ih=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Se.define({[dr]:{primaries:th,whitePoint:nh,transfer:eo,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:eh,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:th,whitePoint:nh,transfer:Re,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:eh,outputColorSpaceConfig:{drawingBufferColorSpace:on}}});let Ps;class $d{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ps===void 0&&(Ps=Za("canvas")),Ps.width=t.width,Ps.height=t.height;const n=Ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Za("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Li(e[n]/255)*255):e[n]=Li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jd=0;class qu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_o(s[a].image)):r.push(_o(s[a]))}else r=_o(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function _o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$d.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zd=0;class xn extends pr{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,n=ls,s=ls,r=ui,a=cs,o=Bn,l=pi,c=xn.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Ss(),this.name="",this.source=new qu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ri:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ri:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Uu;xn.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,n=0,s=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],v=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,g=(d+1)/2,A=(p+1)/2,E=(h+f)/4,w=(u+x)/4,C=(v+m)/4;return S>g&&S>A?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=w/n):g>A?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=E/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-v)*(m-v)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kd extends pr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new xn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Kd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yu extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jd extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],v=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=v,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==v){let m=1-o;const p=l*f+c*d+h*v+u*x,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const A=Math.sqrt(S),E=Math.atan2(A,p*y);m=Math.sin(m*E)/A,o=Math.sin(o*E)/A}const g=o*y;if(l=l*m+f*g,c=c*m+d*g,h=h*m+v*g,u=u*m+x*g,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],v=r[a+3];return t[e]=o*v+h*u+l*d-c*f,t[e+1]=l*v+h*f+c*u-o*d,t[e+2]=c*v+h*d+o*f-l*u,t[e+3]=h*v-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u-f*d*v;break;case"YXZ":this._x=f*h*u+c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u+f*d*v;break;case"ZXY":this._x=f*h*u-c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u-f*d*v;break;case"ZYX":this._x=f*h*u-c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u+f*d*v;break;case"YZX":this._x=f*h*u+c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u-f*d*v;break;case"XZY":this._x=f*h*u-c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new F,rh=new Jr;class bs{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(t.matrixWorld),this.union(ra)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),aa.subVectors(this.max,yr),Ds.subVectors(t.a,yr),Ls.subVectors(t.b,yr),Is.subVectors(t.c,yr),Ni.subVectors(Ls,Ds),zi.subVectors(Is,Ls),Ki.subVectors(Ds,Is);let e=[0,-Ni.z,Ni.y,0,-zi.z,zi.y,0,-Ki.z,Ki.y,Ni.z,0,-Ni.x,zi.z,0,-zi.x,Ki.z,0,-Ki.x,-Ni.y,Ni.x,0,-zi.y,zi.x,0,-Ki.y,Ki.x,0];return!yo(e,Ds,Ls,Is,aa)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,Ds,Ls,Is,aa))?!1:(oa.crossVectors(Ni,zi),e=[oa.x,oa.y,oa.z],yo(e,Ds,Ls,Is,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mi=[new F,new F,new F,new F,new F,new F,new F,new F],Yn=new F,ra=new bs,Ds=new F,Ls=new F,Is=new F,Ni=new F,zi=new F,Ki=new F,yr=new F,aa=new F,oa=new F,Ji=new F;function yo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ji.fromArray(i,r);const o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Qd=new bs,Sr=new F,So=new F;class mr{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(So)),this.expandByPoint(Sr.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new F,bo=new F,la=new F,Fi=new F,wo=new F,ca=new F,Eo=new F;class bc{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bo.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(bo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(la),o=Fi.dot(this.direction),l=-Fi.dot(la),c=Fi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,v;if(h>0)if(u=a*l-o,f=a*o-l,v=r*h,u>=0)if(f>=-v)if(f<=v){const x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(bo).addScaledVector(la,f),d}intersectSphere(t,e){yi.subVectors(t.center,this.origin);const n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,s,r){wo.subVectors(e,t),ca.subVectors(n,t),Eo.crossVectors(wo,ca);let a=this.direction.dot(Eo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,t);const l=o*this.direction.dot(ca.crossVectors(Fi,ca));if(l<0)return null;const c=o*this.direction.dot(wo.cross(Fi));if(c<0||l+c>a)return null;const h=-o*Fi.dot(Eo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,v,x,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,v,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,v,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=v,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),a=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,v=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+v*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=v+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,v=c*h,x=c*u;e[0]=f+x*o,e[4]=v*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-v,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,v=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=v+d*o,e[1]=d+v*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,v=o*h,x=o*u;e[0]=l*h,e[4]=v*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,v=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=v*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+v,e[10]=f-x*u}else if(t.order==="XZY"){const f=a*l,d=a*c,v=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-v,e[2]=v*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tp,t,ep)}lookAt(t,e,n){const s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Oi.crossVectors(n,Dn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Oi.crossVectors(n,Dn)),Oi.normalize(),ha.crossVectors(Dn,Oi),s[0]=Oi.x,s[4]=ha.x,s[8]=Dn.x,s[1]=Oi.y,s[5]=ha.y,s[9]=Dn.y,s[2]=Oi.z,s[6]=ha.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],v=n[2],x=n[6],m=n[10],p=n[14],y=n[3],S=n[7],g=n[11],A=n[15],E=s[0],w=s[4],C=s[8],M=s[12],_=s[1],T=s[5],D=s[9],G=s[13],L=s[2],O=s[6],V=s[10],X=s[14],k=s[3],Z=s[7],rt=s[11],ot=s[15];return r[0]=a*E+o*_+l*L+c*k,r[4]=a*w+o*T+l*O+c*Z,r[8]=a*C+o*D+l*V+c*rt,r[12]=a*M+o*G+l*X+c*ot,r[1]=h*E+u*_+f*L+d*k,r[5]=h*w+u*T+f*O+d*Z,r[9]=h*C+u*D+f*V+d*rt,r[13]=h*M+u*G+f*X+d*ot,r[2]=v*E+x*_+m*L+p*k,r[6]=v*w+x*T+m*O+p*Z,r[10]=v*C+x*D+m*V+p*rt,r[14]=v*M+x*G+m*X+p*ot,r[3]=y*E+S*_+g*L+A*k,r[7]=y*w+S*T+g*O+A*Z,r[11]=y*C+S*D+g*V+A*rt,r[15]=y*M+S*G+g*X+A*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],v=t[3],x=t[7],m=t[11],p=t[15];return v*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+x*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],v=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*f*c+x*l*d-o*m*d-u*l*p+o*f*p,S=v*f*c-h*m*c-v*l*d+a*m*d+h*l*p-a*f*p,g=h*x*c-v*u*c+v*o*d-a*x*d-h*o*p+a*u*p,A=v*u*l-h*x*l-v*o*f+a*x*f+h*o*m-a*u*m,E=e*y+n*S+s*g+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=y*w,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*w,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*w,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*w,t[4]=S*w,t[5]=(h*m*r-v*f*r+v*s*d-e*m*d-h*s*p+e*f*p)*w,t[6]=(v*l*r-a*m*r-v*s*c+e*m*c+a*s*p-e*l*p)*w,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*w,t[8]=g*w,t[9]=(v*u*r-h*x*r-v*n*d+e*x*d+h*n*p-e*u*p)*w,t[10]=(a*x*r-v*o*r+v*n*c-e*x*c-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*w,t[12]=A*w,t[13]=(h*x*s-v*u*s+v*n*f-e*x*f-h*n*m+e*u*m)*w,t[14]=(v*o*s-a*x*s-v*n*l+e*x*l+a*n*m-e*o*m)*w,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,v=r*u,x=a*h,m=a*u,p=o*u,y=l*c,S=l*h,g=l*u,A=n.x,E=n.y,w=n.z;return s[0]=(1-(x+p))*A,s[1]=(d+g)*A,s[2]=(v-S)*A,s[3]=0,s[4]=(d-g)*E,s[5]=(1-(f+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(v+S)*w,s[9]=(m-y)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Us.set(s[0],s[1],s[2]).length();const a=Us.set(s[4],s[5],s[6]).length(),o=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$n.copy(this);const c=1/r,h=1/a,u=1/o;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,e.setFromRotationMatrix($n),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Pi){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,v;if(o===Pi)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ja)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Pi){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,d=(n+s)*h;let v,x;if(o===Pi)v=(a+r)*u,x=-2*u;else if(o===ja)v=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Us=new F,$n=new be,tp=new F(0,0,0),ep=new F(1,1,1),Oi=new F,ha=new F,Dn=new F,ah=new be,oh=new Jr;class mi{constructor(t=0,e=0,n=0,s=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let np=0;const lh=new F,Ns=new Jr,Si=new be,ua=new F,br=new F,ip=new F,sp=new Jr,ch=new F(1,0,0),hh=new F(0,1,0),uh=new F(0,0,1),fh={type:"added"},rp={type:"removed"},zs={type:"childadded",child:null},To={type:"childremoved",child:null};class Oe extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new F,e=new mi,n=new Jr,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new me}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(hh,t)}rotateZ(t){return this.rotateOnAxis(uh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(hh,t)}translateZ(t){return this.translateOnAxis(uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ua.copy(t):ua.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(br,ua,this.up):Si.lookAt(ua,br,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(Si),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fh),zs.child=t,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rp),To.child=t,this.dispatchEvent(To),To.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fh),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Oe.DEFAULT_UP=new F(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new F,bi=new F,Ao=new F,wi=new F,Fs=new F,Os=new F,dh=new F,Co=new F,Ro=new F,Po=new F,Do=new Ue,Lo=new Ue,Io=new Ue;class Qn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),jn.subVectors(t,e),s.cross(jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){jn.subVectors(s,e),bi.subVectors(n,e),Ao.subVectors(t,e);const a=jn.dot(jn),o=jn.dot(bi),l=jn.dot(Ao),c=bi.dot(bi),h=bi.dot(Ao),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,v=(a*h-o*l)*f;return r.set(1-d-v,v,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Do.setScalar(0),Lo.setScalar(0),Io.setScalar(0),Do.fromBufferAttribute(t,e),Lo.fromBufferAttribute(t,n),Io.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Do,r.x),a.addScaledVector(Lo,r.y),a.addScaledVector(Io,r.z),a}static isFrontFacing(t,e,n,s){return jn.subVectors(n,e),bi.subVectors(t,e),jn.cross(bi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),jn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Qn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Fs.subVectors(s,n),Os.subVectors(r,n),Co.subVectors(t,n);const l=Fs.dot(Co),c=Os.dot(Co);if(l<=0&&c<=0)return e.copy(n);Ro.subVectors(t,s);const h=Fs.dot(Ro),u=Os.dot(Ro);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Fs,a);Po.subVectors(t,r);const d=Fs.dot(Po),v=Os.dot(Po);if(v>=0&&d<=v)return e.copy(r);const x=d*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Os,o);const m=h*v-d*u;if(m<=0&&u-h>=0&&d-v>=0)return dh.subVectors(r,s),o=(u-h)/(u-h+(d-v)),e.copy(s).addScaledVector(dh,o);const p=1/(m+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(Fs,a).addScaledVector(Os,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Uo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Se.workingColorSpace){if(t=Sc(t,1),e=cn(e,0,1),n=cn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Uo(a,r,t+1/3),this.g=Uo(a,r,t),this.b=Uo(a,r,t-1/3)}return Se.toWorkingColorSpace(this,s),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=$u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Se.fromWorkingColorSpace(gn.copy(this),t),Math.round(cn(gn.r*255,0,255))*65536+Math.round(cn(gn.g*255,0,255))*256+Math.round(cn(gn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(gn.copy(this),e);const n=gn.r,s=gn.g,r=gn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=on){Se.fromWorkingColorSpace(gn.copy(this),t);const e=gn.r,n=gn.g,s=gn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(fa);const n=Ir(ki.h,fa.h,e),s=Ir(ki.s,fa.s,e),r=Ir(ki.l,fa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Lt;Lt.NAMES=$u;let ap=0;class ws extends pr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Ss(),this.name="",this.blending=Xi,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ll&&(n.blendSrc=this.blendSrc),this.blendDst!==cl&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ee extends ws{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ke=new F,da=new St;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)da.fromBufferAttribute(this,e),da.applyMatrix3(t),this.setXY(e,da.x,da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ys(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),s=yn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),s=yn(s,this.array),r=yn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jc&&(t.usage=this.usage),t}}class ju extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zu extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let op=0;const On=new be,No=new Oe,ks=new F,Ln=new bs,wr=new bs,an=new F;class De extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xu(t)?Zu:ju)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return No.lookAt(t),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Ln.min,wr.min),Ln.expandByPoint(an),an.addVectors(Ln.max,wr.max),Ln.expandByPoint(an)):(Ln.expandByPoint(wr.min),Ln.expandByPoint(wr.max))}Ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)an.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(an));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)an.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(t,c),an.add(ks)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new F,l[C]=new F;const c=new F,h=new F,u=new F,f=new St,d=new St,v=new St,x=new F,m=new F;function p(C,M,_){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,M),v.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),v.sub(f);const T=1/(d.x*v.y-v.x*d.y);isFinite(T)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-d.y).multiplyScalar(T),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(T),o[C].add(x),o[M].add(x),o[_].add(x),l[C].add(m),l[M].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,M=y.length;C<M;++C){const _=y[C],T=_.start,D=_.count;for(let G=T,L=T+D;G<L;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const S=new F,g=new F,A=new F,E=new F;function w(C){A.fromBufferAttribute(s,C),E.copy(A);const M=o[C];S.copy(M),S.sub(A.multiplyScalar(A.dot(M))).normalize(),g.crossVectors(E,M);const T=g.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,T)}for(let C=0,M=y.length;C<M;++C){const _=y[C],T=_.start,D=_.count;for(let G=T,L=T+D;G<L;G+=3)w(t.getX(G+0)),w(t.getX(G+1)),w(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){const v=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[v++]=c[d++]}return new ze(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new be,Qi=new bc,pa=new mr,mh=new F,ma=new F,ga=new F,va=new F,zo=new F,xa=new F,gh=new F,_a=new F;class se extends Oe{constructor(t=new De,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(zo.fromBufferAttribute(u,t),a?xa.addScaledVector(zo,h):xa.addScaledVector(zo.sub(e),h))}e.add(xa)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(pa.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(pa,mh)===null||Qi.origin.distanceToSquared(mh)>(t.far-t.near)**2))&&(ph.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(ph),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],p=a[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let g=y,A=S;g<A;g+=3){const E=o.getX(g),w=o.getX(g+1),C=o.getX(g+2);s=Ma(this,p,t,n,c,h,u,E,w,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=v,p=x;m<p;m+=3){const y=o.getX(m),S=o.getX(m+1),g=o.getX(m+2);s=Ma(this,a,t,n,c,h,u,y,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],p=a[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let g=y,A=S;g<A;g+=3){const E=g,w=g+1,C=g+2;s=Ma(this,p,t,n,c,h,u,E,w,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=v,p=x;m<p;m+=3){const y=m,S=m+1,g=m+2;s=Ma(this,a,t,n,c,h,u,y,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function lp(i,t,e,n,s,r,a,o){let l;if(t.side===En?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Yi,o),l===null)return null;_a.copy(o),_a.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_a);return c<e.near||c>e.far?null:{distance:c,point:_a.clone(),object:i}}function Ma(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ma),i.getVertexPosition(l,ga),i.getVertexPosition(c,va);const h=lp(i,t,e,n,ma,ga,va,gh);if(h){const u=new F;Qn.getBarycoord(gh,ma,ga,va,u),s&&(h.uv=Qn.getInterpolatedAttribute(s,o,l,c,u,new St)),r&&(h.uv1=Qn.getInterpolatedAttribute(r,o,l,c,u,new St)),a&&(h.normal=Qn.getInterpolatedAttribute(a,o,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};Qn.getNormal(ma,ga,va,f.normal),h.face=f,h.barycoord=u}return h}class An extends De{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function v(x,m,p,y,S,g,A,E,w,C,M){const _=g/w,T=A/C,D=g/2,G=A/2,L=E/2,O=w+1,V=C+1;let X=0,k=0;const Z=new F;for(let rt=0;rt<V;rt++){const ot=rt*T-G;for(let Et=0;Et<O;Et++){const jt=Et*_-D;Z[x]=jt*y,Z[m]=ot*S,Z[p]=L,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[p]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Et/w),u.push(1-rt/C),X+=1}}for(let rt=0;rt<C;rt++)for(let ot=0;ot<w;ot++){const Et=f+ot+O*rt,jt=f+ot+O*(rt+1),et=f+(ot+1)+O*(rt+1),dt=f+(ot+1)+O*rt;l.push(Et,jt,dt),l.push(jt,et,dt),k+=6}o.addGroup(d,k,M),d+=k,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function or(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Sn(i){const t={};for(let e=0;e<i.length;e++){const n=or(i[e]);for(const s in n)t[s]=n[s]}return t}function cp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ku(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const ti={clone:or,merge:Sn};var hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xe extends ws{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ju extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new F,vh=new St,xh=new St;class In extends Ju{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,vh,xh),e.subVectors(xh,vh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bs=-90,Gs=1;class fp extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(Bs,Gs,t,e);s.layers=this.layers,this.add(s);const r=new In(Bs,Gs,t,e);r.layers=this.layers,this.add(r);const a=new In(Bs,Gs,t,e);a.layers=this.layers,this.add(a);const o=new In(Bs,Gs,t,e);o.layers=this.layers,this.add(o);const l=new In(Bs,Gs,t,e);l.layers=this.layers,this.add(l);const c=new In(Bs,Gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Qu extends xn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:rr,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dp extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new An(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:un});r.uniforms.tEquirect.value=e;const a=new se(s,r),o=e.minFilter;return e.minFilter===cs&&(e.minFilter=ui),new fp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Fo=new F,pp=new F,mp=new me;class rs{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Fo.subVectors(n,e).cross(pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mp.getNormalMatrix(t),s=this.coplanarPoint(Fo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new mr,ya=new F;class Ec{constructor(t=new rs,e=new rs,n=new rs,s=new rs,r=new rs,a=new rs){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pi){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],v=s[9],x=s[10],m=s[11],p=s[12],y=s[13],S=s[14],g=s[15];if(n[0].setComponents(l-r,f-c,m-d,g-p).normalize(),n[1].setComponents(l+r,f+c,m+d,g+p).normalize(),n[2].setComponents(l+a,f+h,m+v,g+y).normalize(),n[3].setComponents(l-a,f-h,m-v,g-y).normalize(),n[4].setComponents(l-o,f-u,m-x,g-S).normalize(),e===Pi)n[5].setComponents(l+o,f+u,m+x,g+S).normalize();else if(e===ja)n[5].setComponents(o,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ya.x=s.normal.x>0?t.max.x:t.min.x,ya.y=s.normal.y>0?t.max.y:t.min.y,ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gp(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<u.length;d++){const v=u[f],x=u[d];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,v=u.length;d<v;d++){const x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Hn extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],v=[],x=[],m=[];for(let p=0;p<h;p++){const y=p*f-a;for(let S=0;S<c;S++){const g=S*u-r;v.push(g,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const S=y+c*p,g=y+c*(p+1),A=y+1+c*(p+1),E=y+1+c*p;d.push(S,g,E),d.push(g,A,E)}this.setIndex(d),this.setAttribute("position",new de(v,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.widthSegments,t.heightSegments)}}var vp=`#ifdef USE_ALPHAHASH
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
}`,ge={alphahash_fragment:vp,alphahash_pars_fragment:xp,alphamap_fragment:_p,alphamap_pars_fragment:Mp,alphatest_fragment:yp,alphatest_pars_fragment:Sp,aomap_fragment:bp,aomap_pars_fragment:wp,batching_pars_vertex:Ep,batching_vertex:Tp,begin_vertex:Ap,beginnormal_vertex:Cp,bsdfs:Rp,iridescence_fragment:Pp,bumpmap_pars_fragment:Dp,clipping_planes_fragment:Lp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Np,color_fragment:zp,color_pars_fragment:Fp,color_pars_vertex:Op,color_vertex:kp,common:Bp,cube_uv_reflection_fragment:Gp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Hp,displacementmap_vertex:Wp,emissivemap_fragment:Xp,emissivemap_pars_fragment:qp,colorspace_fragment:Yp,colorspace_pars_fragment:$p,envmap_fragment:jp,envmap_common_pars_fragment:Zp,envmap_pars_fragment:Kp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:c0,envmap_vertex:Qp,fog_vertex:t0,fog_pars_vertex:e0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:s0,lightmap_pars_fragment:r0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:o0,lights_pars_begin:l0,lights_toon_fragment:h0,lights_toon_pars_fragment:u0,lights_phong_fragment:f0,lights_phong_pars_fragment:d0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:g0,lights_fragment_maps:v0,lights_fragment_end:x0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:S0,map_fragment:b0,map_pars_fragment:w0,map_particle_fragment:E0,map_particle_pars_fragment:T0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:C0,morphinstance_vertex:R0,morphcolor_vertex:P0,morphnormal_vertex:D0,morphtarget_pars_vertex:L0,morphtarget_vertex:I0,normal_fragment_begin:U0,normal_fragment_maps:N0,normal_pars_fragment:z0,normal_pars_vertex:F0,normal_vertex:O0,normalmap_pars_fragment:k0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:G0,clearcoat_pars_fragment:V0,iridescence_pars_fragment:H0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:q0,project_vertex:Y0,dithering_fragment:$0,dithering_pars_fragment:j0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:K0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:Q0,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:am,specularmap_pars_fragment:om,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:fm,uv_pars_vertex:dm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:vm,backgroundCube_vert:xm,backgroundCube_frag:_m,cube_vert:Mm,cube_frag:ym,depth_vert:Sm,depth_frag:bm,distanceRGBA_vert:wm,distanceRGBA_frag:Em,equirect_vert:Tm,equirect_frag:Am,linedashed_vert:Cm,linedashed_frag:Rm,meshbasic_vert:Pm,meshbasic_frag:Dm,meshlambert_vert:Lm,meshlambert_frag:Im,meshmatcap_vert:Um,meshmatcap_frag:Nm,meshnormal_vert:zm,meshnormal_frag:Fm,meshphong_vert:Om,meshphong_frag:km,meshphysical_vert:Bm,meshphysical_frag:Gm,meshtoon_vert:Vm,meshtoon_frag:Hm,points_vert:Wm,points_frag:Xm,shadow_vert:qm,shadow_frag:Ym,sprite_vert:$m,sprite_frag:jm},Ot={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},hi={basic:{uniforms:Sn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Sn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Sn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Sn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Sn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Sn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Sn([Ot.points,Ot.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Sn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Sn([Ot.common,Ot.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Sn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Sn([Ot.sprite,Ot.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Sn([Ot.common,Ot.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Sn([Ot.lights,Ot.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};hi.physical={uniforms:Sn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Sa={r:0,b:0,g:0},es=new mi,Zm=new be;function Km(i,t,e,n,s,r,a){const o=new Lt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function v(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function x(y){let S=!1;const g=v(y);g===null?p(o,l):g&&g.isColor&&(p(g,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const g=v(S);g&&(g.isCubeTexture||g.mapping===Qa)?(h===void 0&&(h=new se(new An(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:or(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),es.copy(S.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(es)),h.material.toneMapped=Se.getTransfer(g.colorSpace)!==Re,(u!==g||f!==g.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=g,f=g.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new se(new Hn(2,2),new Xe({name:"BackgroundMaterial",uniforms:or(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Se.getTransfer(g.colorSpace)!==Re,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=g,f=g.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(Sa,Ku(i)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:m}}function Jm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,T,D,G,L){let O=!1;const V=u(G,D,T);r!==V&&(r=V,c(r.object)),O=d(_,G,D,L),O&&v(_,G,D,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,g(_,T,D,G),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,T,D){const G=D.wireframe===!0;let L=n[_.id];L===void 0&&(L={},n[_.id]=L);let O=L[T.id];O===void 0&&(O={},L[T.id]=O);let V=O[G];return V===void 0&&(V=f(l()),O[G]=V),V}function f(_){const T=[],D=[],G=[];for(let L=0;L<e;L++)T[L]=0,D[L]=0,G[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:D,attributeDivisors:G,object:_,attributes:{},index:null}}function d(_,T,D,G){const L=r.attributes,O=T.attributes;let V=0;const X=D.getAttributes();for(const k in X)if(X[k].location>=0){const rt=L[k];let ot=O[k];if(ot===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor)),rt===void 0||rt.attribute!==ot||ot&&rt.data!==ot.data)return!0;V++}return r.attributesNum!==V||r.index!==G}function v(_,T,D,G){const L={},O=T.attributes;let V=0;const X=D.getAttributes();for(const k in X)if(X[k].location>=0){let rt=O[k];rt===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor));const ot={};ot.attribute=rt,rt&&rt.data&&(ot.data=rt.data),L[k]=ot,V++}r.attributes=L,r.attributesNum=V,r.index=G}function x(){const _=r.newAttributes;for(let T=0,D=_.length;T<D;T++)_[T]=0}function m(_){p(_,0)}function p(_,T){const D=r.newAttributes,G=r.enabledAttributes,L=r.attributeDivisors;D[_]=1,G[_]===0&&(i.enableVertexAttribArray(_),G[_]=1),L[_]!==T&&(i.vertexAttribDivisor(_,T),L[_]=T)}function y(){const _=r.newAttributes,T=r.enabledAttributes;for(let D=0,G=T.length;D<G;D++)T[D]!==_[D]&&(i.disableVertexAttribArray(D),T[D]=0)}function S(_,T,D,G,L,O,V){V===!0?i.vertexAttribIPointer(_,T,D,L,O):i.vertexAttribPointer(_,T,D,G,L,O)}function g(_,T,D,G){x();const L=G.attributes,O=D.getAttributes(),V=T.defaultAttributeValues;for(const X in O){const k=O[X];if(k.location>=0){let Z=L[X];if(Z===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),Z!==void 0){const rt=Z.normalized,ot=Z.itemSize,Et=t.get(Z);if(Et===void 0)continue;const jt=Et.buffer,et=Et.type,dt=Et.bytesPerElement,Ct=et===i.INT||et===i.UNSIGNED_INT||Z.gpuType===mc;if(Z.isInterleavedBufferAttribute){const ut=Z.data,kt=ut.stride,Vt=Z.offset;if(ut.isInstancedInterleavedBuffer){for(let Xt=0;Xt<k.locationSize;Xt++)p(k.location+Xt,ut.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Xt=0;Xt<k.locationSize;Xt++)m(k.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Xt=0;Xt<k.locationSize;Xt++)S(k.location+Xt,ot/k.locationSize,et,rt,kt*dt,(Vt+ot/k.locationSize*Xt)*dt,Ct)}else{if(Z.isInstancedBufferAttribute){for(let ut=0;ut<k.locationSize;ut++)p(k.location+ut,Z.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ut=0;ut<k.locationSize;ut++)m(k.location+ut);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let ut=0;ut<k.locationSize;ut++)S(k.location+ut,ot/k.locationSize,et,rt,ot*dt,ot/k.locationSize*ut*dt,Ct)}}else if(V!==void 0){const rt=V[X];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(k.location,rt);break;case 3:i.vertexAttrib3fv(k.location,rt);break;case 4:i.vertexAttrib4fv(k.location,rt);break;default:i.vertexAttrib1fv(k.location,rt)}}}}y()}function A(){C();for(const _ in n){const T=n[_];for(const D in T){const G=T[D];for(const L in G)h(G[L].object),delete G[L];delete T[D]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const T=n[_.id];for(const D in T){const G=T[D];for(const L in G)h(G[L].object),delete G[L];delete T[D]}delete n[_.id]}function w(_){for(const T in n){const D=n[T];if(D[_.id]===void 0)continue;const G=D[_.id];for(const L in G)h(G[L].object),delete G[L];delete D[_.id]}}function C(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Qm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let v=0;v<u;v++)d+=h[v];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)a(c[v],h[v],f[v]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x]*f[x];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==pi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ni&&!C)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:g,vertexTextures:A,maxSamples:E}}function eg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new rs,o=new me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const v=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,S=y*4;let g=p.clippingState||null;l.value=g,g=h(v,f,S,d);for(let A=0;A!==S;++A)g[A]=e[A];p.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,v){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const p=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,g=d;S!==x;++S,g+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function ng(i){let t=new WeakMap;function e(a,o){return o===_l?a.mapping=rr:o===Ml&&(a.mapping=ar),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===_l||o===Ml)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new dp(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Tc extends Ju{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $s=4,_h=[.125,.215,.35,.446,.526,.582],os=20,Oo=new Tc,Mh=new Lt;let ko=null,Bo=0,Go=0,Vo=!1;const as=(1+Math.sqrt(5))/2,Vs=1/as,yh=[new F(-as,Vs,0),new F(as,Vs,0),new F(-Vs,0,as),new F(Vs,0,as),new F(0,as,-Vs),new F(0,as,Vs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Sh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ko=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ko,Bo,Go),this._renderer.xr.enabled=Vo,t.scissorTest=!1,ba(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ko=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Gn,format:Bn,colorSpace:dr,depthBuffer:!1},s=bh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(r)),this._blurMaterial=sg(r,t,e)}return s}_compileMaterial(t){const e=new se(this._lodPlanes[0],t);this._renderer.compile(e,Oo)}_sceneToCubeUV(t,e,n,s){const o=new In(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Mh),h.toneMapping=qi,h.autoClear=!1;const d=new Ee({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),v=new se(new An,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Mh),x=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;ba(s,y*S,p>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===rr||t.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ba(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Oo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yh[(s-r-1)%yh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new se(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*os-1),x=r/v,m=isFinite(r)?1+Math.floor(h*x):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);const p=[];let y=0;for(let w=0;w<os;++w){const C=w/x,M=Math.exp(-C*C/2);p.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const g=this._sizeLods[s],A=3*g*(s>S-$s?s-S+$s:0),E=4*(this._cubeSize-g);ba(e,A,E,3*g,2*g),l.setRenderTarget(e),l.render(u,Oo)}}function ig(i){const t=[],e=[],n=[];let s=i;const r=i-$s+1+_h.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-$s?l=_h[a-i+$s-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,v=6,x=3,m=2,p=1,y=new Float32Array(x*v*d),S=new Float32Array(m*v*d),g=new Float32Array(p*v*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,C=E>2?0:-1,M=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(M,x*v*E),S.set(f,m*v*E);const _=[E,E,E,E,E,E];g.set(_,p*v*E)}const A=new De;A.setAttribute("position",new ze(y,x)),A.setAttribute("uv",new ze(S,m)),A.setAttribute("faceIndex",new ze(g,p)),t.push(A),s>$s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bh(i,t,e){const n=new Rn(i,t,e);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sg(i,t,e){const n=new Float32Array(os),s=new F(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function wh(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Eh(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Ac(){return`

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
	`}function rg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===_l||l===Ml,h=l===rr||l===ar;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Sh(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Sh(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ag(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function og(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const v in d){const x=d[v];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,v=u.attributes.position;let x=0;if(d!==null){const y=d.array;x=d.version;for(let S=0,g=y.length;S<g;S+=3){const A=y[S+0],E=y[S+1],w=y[S+2];f.push(A,E,E,w,w,A)}}else if(v!==void 0){const y=v.array;x=v.version;for(let S=0,g=y.length/3-1;S<g;S+=3){const A=S+0,E=S+1,w=S+2;f.push(A,E,E,w,w,A)}}else return;const m=new(Xu(f)?Zu:ju)(f,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function lg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,v){v!==0&&(i.drawElementsInstanced(n,d,r,f*a,v),e.update(d,n,v))}function h(f,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=d[p];e.update(m,n,1)}function u(f,d,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,v);let p=0;for(let y=0;y<v;y++)p+=d[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hg(i,t,e){const n=new WeakMap,s=new Ue;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let _=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let g=0;v===!0&&(g=1),x===!0&&(g=2),m===!0&&(g=3);let A=o.attributes.position.count*g,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const w=new Float32Array(A*E*4*u),C=new Yu(w,A,E,u);C.type=ni,C.needsUpdate=!0;const M=g*4;for(let T=0;T<u;T++){const D=p[T],G=y[T],L=S[T],O=A*E*4*T;for(let V=0;V<D.count;V++){const X=V*M;v===!0&&(s.fromBufferAttribute(D,V),w[O+X+0]=s.x,w[O+X+1]=s.y,w[O+X+2]=s.z,w[O+X+3]=0),x===!0&&(s.fromBufferAttribute(G,V),w[O+X+4]=s.x,w[O+X+5]=s.y,w[O+X+6]=s.z,w[O+X+7]=0),m===!0&&(s.fromBufferAttribute(L,V),w[O+X+8]=s.x,w[O+X+9]=s.y,w[O+X+10]=s.z,w[O+X+11]=L.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new St(A,E)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ug(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Cc extends xn{constructor(t,e,n,s,r,a,o,l,c,h=Zs){if(h!==Zs&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zs&&(n=vs),n===void 0&&h===_s&&(n=xs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ef=new xn,Th=new Cc(1,1),nf=new Yu,sf=new Jd,rf=new Qu,Ah=[],Ch=[],Rh=new Float32Array(16),Ph=new Float32Array(9),Dh=new Float32Array(4);function gr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function no(i,t){let e=Ch[t];e===void 0&&(e=new Int32Array(t),Ch[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function gg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Dh.set(n),i.uniformMatrix2fv(this.addr,!1,Dh),sn(e,n)}}function vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Ph.set(n),i.uniformMatrix3fv(this.addr,!1,Ph),sn(e,n)}}function xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Rh.set(n),i.uniformMatrix4fv(this.addr,!1,Rh),sn(e,n)}}function _g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function bg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function Ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Th.compareFunction=Wu,r=Th):r=ef,e.setTexture2D(t||r,s)}function Cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sf,s)}function Rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rf,s)}function Pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||nf,s)}function Dg(i){switch(i){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return vg;case 35676:return xg;case 5124:case 35670:return _g;case 35667:case 35671:return Mg;case 35668:case 35672:return yg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return wg;case 36295:return Eg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Lg(i,t){i.uniform1fv(this.addr,t)}function Ig(i,t){const e=gr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ug(i,t){const e=gr(t,this.size,3);i.uniform3fv(this.addr,e)}function Ng(i,t){const e=gr(t,this.size,4);i.uniform4fv(this.addr,e)}function zg(i,t){const e=gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fg(i,t){const e=gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Og(i,t){const e=gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kg(i,t){i.uniform1iv(this.addr,t)}function Bg(i,t){i.uniform2iv(this.addr,t)}function Gg(i,t){i.uniform3iv(this.addr,t)}function Vg(i,t){i.uniform4iv(this.addr,t)}function Hg(i,t){i.uniform1uiv(this.addr,t)}function Wg(i,t){i.uniform2uiv(this.addr,t)}function Xg(i,t){i.uniform3uiv(this.addr,t)}function qg(i,t){i.uniform4uiv(this.addr,t)}function Yg(i,t,e){const n=this.cache,s=t.length,r=no(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ef,r[a])}function $g(i,t,e){const n=this.cache,s=t.length,r=no(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||sf,r[a])}function jg(i,t,e){const n=this.cache,s=t.length,r=no(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||rf,r[a])}function Zg(i,t,e){const n=this.cache,s=t.length,r=no(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||nf,r[a])}function Kg(i){switch(i){case 5126:return Lg;case 35664:return Ig;case 35665:return Ug;case 35666:return Ng;case 35674:return zg;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return kg;case 35667:case 35671:return Bg;case 35668:case 35672:return Gg;case 35669:case 35673:return Vg;case 5125:return Hg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Zg}}class Jg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dg(e.type)}}class Qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kg(e.type)}}class tv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ho=/(\w+)(\])?(\[|\.)?/g;function Lh(i,t){i.seq.push(t),i.map[t.id]=t}function ev(i,t,e){const n=i.name,s=n.length;for(Ho.lastIndex=0;;){const r=Ho.exec(n),a=Ho.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lh(e,c===void 0?new Jg(o,i,t):new Qg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new tv(o),Lh(e,u)),e=u}}}class qa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);ev(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ih(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const nv=37297;let iv=0;function sv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Uh=new me;function rv(i){Se._getMatrix(Uh,Se.workingColorSpace,i);const t=`mat3( ${Uh.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(i)){case eo:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sv(i.getShaderSource(t),a)}else return s}function av(i,t){const e=rv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ov(i,t){let e;switch(t){case Ru:e="Linear";break;case Pu:e="Reinhard";break;case Du:e="Cineon";break;case pc:e="ACESFilmic";break;case Lu:e="AgX";break;case Iu:e="Neutral";break;case gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wa=new F;function lv(){Se.getLuminanceCoefficients(wa);const i=wa.x.toFixed(4),t=wa.y.toFixed(4),e=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function hv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function uv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Pr(i){return i!==""}function zh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(i){return i.replace(fv,pv)}const dv=new Map;function pv(i,t){let e=ge[t];if(e===void 0){const n=dv.get(t);if(n!==void 0)e=ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $l(e)}const mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(i){return i.replace(mv,gv)}function gv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function vv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Au?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ai&&(t="SHADOWMAP_TYPE_VSM"),t}function xv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rr:case ar:t="ENVMAP_TYPE_CUBE";break;case Qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _v(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:t="ENVMAP_MODE_REFRACTION";break}return t}function Mv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dc:t="ENVMAP_BLENDING_MULTIPLY";break;case pd:t="ENVMAP_BLENDING_MIX";break;case md:t="ENVMAP_BLENDING_ADD";break}return t}function yv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=vv(e),c=xv(e),h=_v(e),u=Mv(e),f=yv(e),d=cv(e),v=hv(r),x=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Pr).join(`
`),p.length>0&&(p+=`
`)):(m=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),p=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?ge.tonemapping_pars_fragment:"",e.toneMapping!==qi?ov("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,av("linearToOutputTexel",e.outputColorSpace),lv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pr).join(`
`)),a=$l(a),a=zh(a,e),a=Fh(a,e),o=$l(o),o=zh(o,e),o=Fh(o,e),a=Oh(a),o=Oh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+a,g=y+p+o,A=Ih(s,s.VERTEX_SHADER,S),E=Ih(s,s.FRAGMENT_SHADER,g);s.attachShader(x,A),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(T){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(x).trim(),G=s.getShaderInfoLog(A).trim(),L=s.getShaderInfoLog(E).trim();let O=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{const X=Nh(s,A,"vertex"),k=Nh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+D+`
`+X+`
`+k)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(G===""||L==="")&&(V=!1);V&&(T.diagnostics={runnable:O,programLog:D,vertexShader:{log:G,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(A),s.deleteShader(E),C=new qa(s,x),M=uv(s,x)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,nv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let bv=0;class wv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ev(t),e.set(t,n)),n}}class Ev{constructor(t){this.id=bv++,this.code=t,this.usedTimes=0}}function Tv(i,t,e,n,s,r,a){const o=new wc,l=new wv,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,T,D,G){const L=D.fog,O=G.geometry,V=M.isMeshStandardMaterial?D.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),k=X&&X.mapping===Qa?X.image.height:null,Z=v[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const rt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ot=rt!==void 0?rt.length:0;let Et=0;O.morphAttributes.position!==void 0&&(Et=1),O.morphAttributes.normal!==void 0&&(Et=2),O.morphAttributes.color!==void 0&&(Et=3);let jt,et,dt,Ct;if(Z){const Yt=hi[Z];jt=Yt.vertexShader,et=Yt.fragmentShader}else jt=M.vertexShader,et=M.fragmentShader,l.update(M),dt=l.getVertexShaderID(M),Ct=l.getFragmentShaderID(M);const ut=i.getRenderTarget(),kt=i.state.buffers.depth.getReversed(),Vt=G.isInstancedMesh===!0,Xt=G.isBatchedMesh===!0,Qt=!!M.map,ft=!!M.matcap,bt=!!X,N=!!M.aoMap,Bt=!!M.lightMap,_t=!!M.bumpMap,Nt=!!M.normalMap,Pt=!!M.displacementMap,Zt=!!M.emissiveMap,q=!!M.metalnessMap,R=!!M.roughnessMap,b=M.anisotropy>0,H=M.clearcoat>0,j=M.dispersion>0,Q=M.iridescence>0,tt=M.sheen>0,wt=M.transmission>0,Mt=b&&!!M.anisotropyMap,At=H&&!!M.clearcoatMap,ee=H&&!!M.clearcoatNormalMap,yt=H&&!!M.clearcoatRoughnessMap,Ht=Q&&!!M.iridescenceMap,ne=Q&&!!M.iridescenceThicknessMap,ie=tt&&!!M.sheenColorMap,qt=tt&&!!M.sheenRoughnessMap,pe=!!M.specularMap,re=!!M.specularColorMap,_e=!!M.specularIntensityMap,W=wt&&!!M.transmissionMap,It=wt&&!!M.thicknessMap,st=!!M.gradientMap,vt=!!M.alphaMap,Ft=M.alphaTest>0,Ut=!!M.alphaHash,B=!!M.extensions;let lt=qi;M.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(lt=i.toneMapping);const zt={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:jt,fragmentShader:et,defines:M.defines,customVertexShaderID:dt,customFragmentShaderID:Ct,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Xt,batchingColor:Xt&&G._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&G.instanceColor!==null,instancingMorph:Vt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:dr,alphaToCoverage:!!M.alphaToCoverage,map:Qt,matcap:ft,envMap:bt,envMapMode:bt&&X.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:Bt,bumpMap:_t,normalMap:Nt,displacementMap:f&&Pt,emissiveMap:Zt,normalMapObjectSpace:Nt&&M.normalMapType===Md,normalMapTangentSpace:Nt&&M.normalMapType===yc,metalnessMap:q,roughnessMap:R,anisotropy:b,anisotropyMap:Mt,clearcoat:H,clearcoatMap:At,clearcoatNormalMap:ee,clearcoatRoughnessMap:yt,dispersion:j,iridescence:Q,iridescenceMap:Ht,iridescenceThicknessMap:ne,sheen:tt,sheenColorMap:ie,sheenRoughnessMap:qt,specularMap:pe,specularColorMap:re,specularIntensityMap:_e,transmission:wt,transmissionMap:W,thicknessMap:It,gradientMap:st,opaque:M.transparent===!1&&M.blending===Xi&&M.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ft,alphaHash:Ut,combine:M.combine,mapUv:Qt&&x(M.map.channel),aoMapUv:N&&x(M.aoMap.channel),lightMapUv:Bt&&x(M.lightMap.channel),bumpMapUv:_t&&x(M.bumpMap.channel),normalMapUv:Nt&&x(M.normalMap.channel),displacementMapUv:Pt&&x(M.displacementMap.channel),emissiveMapUv:Zt&&x(M.emissiveMap.channel),metalnessMapUv:q&&x(M.metalnessMap.channel),roughnessMapUv:R&&x(M.roughnessMap.channel),anisotropyMapUv:Mt&&x(M.anisotropyMap.channel),clearcoatMapUv:At&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:qt&&x(M.sheenRoughnessMap.channel),specularMapUv:pe&&x(M.specularMap.channel),specularColorMapUv:re&&x(M.specularColorMap.channel),specularIntensityMapUv:_e&&x(M.specularIntensityMap.channel),transmissionMapUv:W&&x(M.transmissionMap.channel),thicknessMapUv:It&&x(M.thicknessMap.channel),alphaMapUv:vt&&x(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Nt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!O.attributes.uv&&(Qt||vt),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:kt,skinning:G.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Et,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,decodeVideoTexture:Qt&&M.map.isVideoTexture===!0&&Se.getTransfer(M.map.colorSpace)===Re,decodeVideoTextureEmissive:Zt&&M.emissiveMap.isVideoTexture===!0&&Se.getTransfer(M.emissiveMap.colorSpace)===Re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===je,flipSided:M.side===En,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:B&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(B&&M.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function p(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)_.push(T),_.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(y(_,M),S(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function y(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function S(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function g(M){const _=v[M.type];let T;if(_){const D=hi[_];T=ti.clone(D.uniforms)}else T=M.uniforms;return T}function A(M,_){let T;for(let D=0,G=h.length;D<G;D++){const L=h[D];if(L.cacheKey===_){T=L,++T.usedTimes;break}}return T===void 0&&(T=new Sv(i,_,M,r),h.push(T)),T}function E(M){if(--M.usedTimes===0){const _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function w(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:g,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:C}}function Av(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Cv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,v,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:v,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,f,d,v,x,m){const p=a(u,f,d,v,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,v,x,m){const p=a(u,f,d,v,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Cv),n.length>1&&n.sort(f||Bh),s.length>1&&s.sort(f||Bh)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Rv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Gh,i.set(n,[a])):s>=r.length?(a=new Gh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Pv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Lt};break;case"SpotLight":e={position:new F,direction:new F,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Dv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Lv=0;function Iv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Uv(i){const t=new Pv,e=Dv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new be,a=new be;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,v=0,x=0,m=0,p=0,y=0,S=0,g=0,A=0,E=0,w=0;c.sort(Iv);for(let M=0,_=c.length;M<_;M++){const T=c[M],D=T.color,G=T.intensity,L=T.distance,O=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=D.r*G,u+=D.g*G,f+=D.b*G;else if(T.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(T.sh.coefficients[V],G);w++}else if(T.isDirectionalLight){const V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const X=T.shadow,k=e.get(T);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=T.shadow.matrix,y++}n.directional[d]=V,d++}else if(T.isSpotLight){const V=t.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(D).multiplyScalar(G),V.distance=L,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,n.spot[x]=V;const X=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,X.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[x]=X.matrix,T.castShadow){const k=e.get(T);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=O,g++}x++}else if(T.isRectAreaLight){const V=t.get(T);V.color.copy(D).multiplyScalar(G),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=V,m++}else if(T.isPointLight){const V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){const X=T.shadow,k=e.get(T);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,n.pointShadow[v]=k,n.pointShadowMap[v]=O,n.pointShadowMatrix[v]=T.shadow.matrix,S++}n.point[v]=V,v++}else if(T.isHemisphereLight){const V=t.get(T);V.skyColor.copy(T.color).multiplyScalar(G),V.groundColor.copy(T.groundColor).multiplyScalar(G),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==v||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==S||C.numSpotShadows!==g||C.numSpotMaps!==A||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=g+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,C.directionalLength=d,C.pointLength=v,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=S,C.numSpotShadows=g,C.numSpotMaps=A,C.numLightProbes=w,n.version=Lv++)}function l(c,h){let u=0,f=0,d=0,v=0,x=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const g=n.directional[u];g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),u++}else if(S.isSpotLight){const g=n.spot[d];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const g=n.rectArea[v];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(S.width*.5,0,0),g.halfHeight.set(0,S.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const g=n.point[f];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const g=n.hemi[x];g.direction.setFromMatrixPosition(S.matrixWorld),g.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Vh(i){const t=new Uv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Nv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Vh(i),t.set(s,[o])):r>=a.length?(o=new Vh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class zv extends ws{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fv extends ws{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ov=`void main() {
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
}`;function Bv(i,t,e){let n=new Ec;const s=new St,r=new St,a=new Ue,o=new zv({depthPacking:_d}),l=new Fv,c={},h=e.maxTextureSize,u={[Yi]:En,[En]:Yi,[je]:je},f=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Ov,fragmentShader:kv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new De;v.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new se(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let p=this.type;this.render=function(E,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),D=i.state;D.setBlending(un),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const G=p!==Ai&&this.type===Ai,L=p===Ai&&this.type!==Ai;for(let O=0,V=E.length;O<V;O++){const X=E[O],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const Z=k.getFrameExtents();if(s.multiply(Z),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,k.mapSize.y=r.y)),k.map===null||G===!0||L===!0){const ot=this.type!==Ai?{minFilter:dn,magFilter:dn}:{};k.map!==null&&k.map.dispose(),k.map=new Rn(s.x,s.y,ot),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const rt=k.getViewportCount();for(let ot=0;ot<rt;ot++){const Et=k.getViewport(ot);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),D.viewport(a),k.updateMatrices(X,ot),n=k.getFrustum(),g(w,C,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===Ai&&y(k,C),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,T)};function y(E,w){const C=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Rn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,C,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,C,d,x,null)}function S(E,w,C,M){let _=null;const T=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)_=T;else if(_=C.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const D=_.uuid,G=w.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let O=L[G];O===void 0&&(O=_.clone(),L[G]=O,w.addEventListener("dispose",A)),_=O}if(_.visible=w.visible,_.wireframe=w.wireframe,M===Ai?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:u[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const D=i.properties.get(_);D.light=C}return _}function g(E,w,C,M,_){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Ai)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const G=t.update(E),L=E.material;if(Array.isArray(L)){const O=G.groups;for(let V=0,X=O.length;V<X;V++){const k=O[V],Z=L[k.materialIndex];if(Z&&Z.visible){const rt=S(E,Z,M,_);E.onBeforeShadow(i,E,w,C,G,rt,k),i.renderBufferDirect(C,null,G,rt,E,k),E.onAfterShadow(i,E,w,C,G,rt,k)}}}else if(L.visible){const O=S(E,L,M,_);E.onBeforeShadow(i,E,w,C,G,O,null),i.renderBufferDirect(C,null,G,O,E,null),E.onAfterShadow(i,E,w,C,G,O,null)}}const D=E.children;for(let G=0,L=D.length;G<L;G++)g(D[G],w,C,M,_)}function A(E){E.target.removeEventListener("dispose",A);for(const C in c){const M=c[C],_=E.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const Gv={[fl]:dl,[pl]:vl,[ml]:xl,[sr]:gl,[dl]:fl,[vl]:pl,[xl]:ml,[gl]:sr};function Vv(i,t){function e(){let W=!1;const It=new Ue;let st=null;const vt=new Ue(0,0,0,0);return{setMask:function(Ft){st!==Ft&&!W&&(i.colorMask(Ft,Ft,Ft,Ft),st=Ft)},setLocked:function(Ft){W=Ft},setClear:function(Ft,Ut,B,lt,zt){zt===!0&&(Ft*=lt,Ut*=lt,B*=lt),It.set(Ft,Ut,B,lt),vt.equals(It)===!1&&(i.clearColor(Ft,Ut,B,lt),vt.copy(It))},reset:function(){W=!1,st=null,vt.set(-1,0,0,0)}}}function n(){let W=!1,It=!1,st=null,vt=null,Ft=null;return{setReversed:function(Ut){if(It!==Ut){const B=t.get("EXT_clip_control");It?B.clipControlEXT(B.LOWER_LEFT_EXT,B.ZERO_TO_ONE_EXT):B.clipControlEXT(B.LOWER_LEFT_EXT,B.NEGATIVE_ONE_TO_ONE_EXT);const lt=Ft;Ft=null,this.setClear(lt)}It=Ut},getReversed:function(){return It},setTest:function(Ut){Ut?ut(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(Ut){st!==Ut&&!W&&(i.depthMask(Ut),st=Ut)},setFunc:function(Ut){if(It&&(Ut=Gv[Ut]),vt!==Ut){switch(Ut){case fl:i.depthFunc(i.NEVER);break;case dl:i.depthFunc(i.ALWAYS);break;case pl:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case ml:i.depthFunc(i.EQUAL);break;case gl:i.depthFunc(i.GEQUAL);break;case vl:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=Ut}},setLocked:function(Ut){W=Ut},setClear:function(Ut){Ft!==Ut&&(It&&(Ut=1-Ut),i.clearDepth(Ut),Ft=Ut)},reset:function(){W=!1,st=null,vt=null,Ft=null,It=!1}}}function s(){let W=!1,It=null,st=null,vt=null,Ft=null,Ut=null,B=null,lt=null,zt=null;return{setTest:function(Yt){W||(Yt?ut(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(Yt){It!==Yt&&!W&&(i.stencilMask(Yt),It=Yt)},setFunc:function(Yt,ye,oe){(st!==Yt||vt!==ye||Ft!==oe)&&(i.stencilFunc(Yt,ye,oe),st=Yt,vt=ye,Ft=oe)},setOp:function(Yt,ye,oe){(Ut!==Yt||B!==ye||lt!==oe)&&(i.stencilOp(Yt,ye,oe),Ut=Yt,B=ye,lt=oe)},setLocked:function(Yt){W=Yt},setClear:function(Yt){zt!==Yt&&(i.clearStencil(Yt),zt=Yt)},reset:function(){W=!1,It=null,st=null,vt=null,Ft=null,Ut=null,B=null,lt=null,zt=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],v=null,x=!1,m=null,p=null,y=null,S=null,g=null,A=null,E=null,w=new Lt(0,0,0),C=0,M=!1,_=null,T=null,D=null,G=null,L=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,X=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=X>=2);let Z=null,rt={};const ot=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),jt=new Ue().fromArray(ot),et=new Ue().fromArray(Et);function dt(W,It,st,vt){const Ft=new Uint8Array(4),Ut=i.createTexture();i.bindTexture(W,Ut),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let B=0;B<st;B++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(It,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(It+B,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return Ut}const Ct={};Ct[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),a.setFunc(sr),_t(!1),Nt(Xc),ut(i.CULL_FACE),N(un);function ut(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function kt(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function Vt(W,It){return u[W]!==It?(i.bindFramebuffer(W,It),u[W]=It,W===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=It),W===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=It),!0):!1}function Xt(W,It){let st=d,vt=!1;if(W){st=f.get(It),st===void 0&&(st=[],f.set(It,st));const Ft=W.textures;if(st.length!==Ft.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Ut=0,B=Ft.length;Ut<B;Ut++)st[Ut]=i.COLOR_ATTACHMENT0+Ut;st.length=Ft.length,vt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,vt=!0);vt&&i.drawBuffers(st)}function Qt(W){return v!==W?(i.useProgram(W),v=W,!0):!1}const ft={[Jn]:i.FUNC_ADD,[td]:i.FUNC_SUBTRACT,[ed]:i.FUNC_REVERSE_SUBTRACT};ft[nd]=i.MIN,ft[id]=i.MAX;const bt={[Cr]:i.ZERO,[sd]:i.ONE,[rd]:i.SRC_COLOR,[ll]:i.SRC_ALPHA,[cd]:i.SRC_ALPHA_SATURATE,[ul]:i.DST_COLOR,[hl]:i.DST_ALPHA,[ad]:i.ONE_MINUS_SRC_COLOR,[cl]:i.ONE_MINUS_SRC_ALPHA,[ld]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[hd]:i.CONSTANT_COLOR,[ud]:i.ONE_MINUS_CONSTANT_COLOR,[fd]:i.CONSTANT_ALPHA,[dd]:i.ONE_MINUS_CONSTANT_ALPHA};function N(W,It,st,vt,Ft,Ut,B,lt,zt,Yt){if(W===un){x===!0&&(kt(i.BLEND),x=!1);return}if(x===!1&&(ut(i.BLEND),x=!0),W!==Cu){if(W!==m||Yt!==M){if((p!==Jn||g!==Jn)&&(i.blendEquation(i.FUNC_ADD),p=Jn,g=Jn),Yt)switch(W){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case si:i.blendFunc(i.ONE,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case si:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}y=null,S=null,A=null,E=null,w.set(0,0,0),C=0,m=W,M=Yt}return}Ft=Ft||It,Ut=Ut||st,B=B||vt,(It!==p||Ft!==g)&&(i.blendEquationSeparate(ft[It],ft[Ft]),p=It,g=Ft),(st!==y||vt!==S||Ut!==A||B!==E)&&(i.blendFuncSeparate(bt[st],bt[vt],bt[Ut],bt[B]),y=st,S=vt,A=Ut,E=B),(lt.equals(w)===!1||zt!==C)&&(i.blendColor(lt.r,lt.g,lt.b,zt),w.copy(lt),C=zt),m=W,M=!1}function Bt(W,It){W.side===je?kt(i.CULL_FACE):ut(i.CULL_FACE);let st=W.side===En;It&&(st=!st),_t(st),W.blending===Xi&&W.transparent===!1?N(un):N(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);const vt=W.stencilWrite;o.setTest(vt),vt&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Zt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(W){_!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),_=W)}function Nt(W){W!==Jf?(ut(i.CULL_FACE),W!==T&&(W===Xc?i.cullFace(i.BACK):W===Qf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),T=W}function Pt(W){W!==D&&(V&&i.lineWidth(W),D=W)}function Zt(W,It,st){W?(ut(i.POLYGON_OFFSET_FILL),(G!==It||L!==st)&&(i.polygonOffset(It,st),G=It,L=st)):kt(i.POLYGON_OFFSET_FILL)}function q(W){W?ut(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function R(W){W===void 0&&(W=i.TEXTURE0+O-1),Z!==W&&(i.activeTexture(W),Z=W)}function b(W,It,st){st===void 0&&(Z===null?st=i.TEXTURE0+O-1:st=Z);let vt=rt[st];vt===void 0&&(vt={type:void 0,texture:void 0},rt[st]=vt),(vt.type!==W||vt.texture!==It)&&(Z!==st&&(i.activeTexture(st),Z=st),i.bindTexture(W,It||Ct[W]),vt.type=W,vt.texture=It)}function H(){const W=rt[Z];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function yt(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ht(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ne(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(W){jt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),jt.copy(W))}function qt(W){et.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),et.copy(W))}function pe(W,It){let st=c.get(It);st===void 0&&(st=new WeakMap,c.set(It,st));let vt=st.get(W);vt===void 0&&(vt=i.getUniformBlockIndex(It,W.name),st.set(W,vt))}function re(W,It){const vt=c.get(It).get(W);l.get(It)!==vt&&(i.uniformBlockBinding(It,vt,W.__bindingPointIndex),l.set(It,vt))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,rt={},u={},f=new WeakMap,d=[],v=null,x=!1,m=null,p=null,y=null,S=null,g=null,A=null,E=null,w=new Lt(0,0,0),C=0,M=!1,_=null,T=null,D=null,G=null,L=null,jt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:kt,bindFramebuffer:Vt,drawBuffers:Xt,useProgram:Qt,setBlending:N,setMaterial:Bt,setFlipSided:_t,setCullFace:Nt,setLineWidth:Pt,setPolygonOffset:Zt,setScissorTest:q,activeTexture:R,bindTexture:b,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:Ht,texImage3D:ne,updateUBOMapping:pe,uniformBlockBinding:re,texStorage2D:ee,texStorage3D:yt,texSubImage2D:tt,texSubImage3D:wt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:At,scissor:ie,viewport:qt,reset:_e}}function Hh(i,t,e,n){const s=Hv(n);switch(e){case Ou:return i*t;case Bu:return i*t;case Gu:return i*t*2;case to:return i*t/s.components*s.byteLength;case xc:return i*t/s.components*s.byteLength;case Vu:return i*t*2/s.components*s.byteLength;case _c:return i*t*2/s.components*s.byteLength;case ku:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case Mc:return i*t*4/s.components*s.byteLength;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:case El:return Math.max(i,16)*Math.max(t,8)/4;case Sl:case wl:return Math.max(i,8)*Math.max(t,8)/2;case Tl:case Al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xa:case Hl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Hu:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ql:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hv(i){switch(i){case pi:case Nu:return{byteLength:1,components:1};case Br:case zu:case Gn:return{byteLength:2,components:1};case gc:case vc:return{byteLength:2,components:4};case vs:case mc:case ni:return{byteLength:4,components:1};case Fu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Wv(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,b){return d?new OffscreenCanvas(R,b):Za("canvas")}function x(R,b,H){let j=1;const Q=q(R);if((Q.width>H||Q.height>H)&&(j=H/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const tt=Math.floor(j*Q.width),wt=Math.floor(j*Q.height);u===void 0&&(u=v(tt,wt));const Mt=b?v(tt,wt):u;return Mt.width=tt,Mt.height=wt,Mt.getContext("2d").drawImage(R,0,0,tt,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+tt+"x"+wt+")."),Mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,b,H,j,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let tt=b;if(b===i.RED&&(H===i.FLOAT&&(tt=i.R32F),H===i.HALF_FLOAT&&(tt=i.R16F),H===i.UNSIGNED_BYTE&&(tt=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.R8UI),H===i.UNSIGNED_SHORT&&(tt=i.R16UI),H===i.UNSIGNED_INT&&(tt=i.R32UI),H===i.BYTE&&(tt=i.R8I),H===i.SHORT&&(tt=i.R16I),H===i.INT&&(tt=i.R32I)),b===i.RG&&(H===i.FLOAT&&(tt=i.RG32F),H===i.HALF_FLOAT&&(tt=i.RG16F),H===i.UNSIGNED_BYTE&&(tt=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RG8UI),H===i.UNSIGNED_SHORT&&(tt=i.RG16UI),H===i.UNSIGNED_INT&&(tt=i.RG32UI),H===i.BYTE&&(tt=i.RG8I),H===i.SHORT&&(tt=i.RG16I),H===i.INT&&(tt=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),H===i.UNSIGNED_INT&&(tt=i.RGB32UI),H===i.BYTE&&(tt=i.RGB8I),H===i.SHORT&&(tt=i.RGB16I),H===i.INT&&(tt=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),H===i.UNSIGNED_INT&&(tt=i.RGBA32UI),H===i.BYTE&&(tt=i.RGBA8I),H===i.SHORT&&(tt=i.RGBA16I),H===i.INT&&(tt=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),b===i.RGBA){const wt=Q?eo:Se.getTransfer(j);H===i.FLOAT&&(tt=i.RGBA32F),H===i.HALF_FLOAT&&(tt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(tt=wt===Re?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function g(R,b){let H;return R?b===null||b===vs||b===xs?H=i.DEPTH24_STENCIL8:b===ni?H=i.DEPTH32F_STENCIL8:b===Br&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===vs||b===xs?H=i.DEPTH_COMPONENT24:b===ni?H=i.DEPTH_COMPONENT32F:b===Br&&(H=i.DEPTH_COMPONENT16),H}function A(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==dn&&R.minFilter!==ui?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function E(R){const b=R.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&h.delete(b)}function w(R){const b=R.target;b.removeEventListener("dispose",w),_(b)}function C(R){const b=n.get(R);if(b.__webglInit===void 0)return;const H=R.source,j=f.get(H);if(j){const Q=j[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(R),Object.keys(j).length===0&&f.delete(H)}n.remove(R)}function M(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const H=R.source,j=f.get(H);delete j[b.__cacheKey],a.memory.textures--}function _(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let Q=0;Q<b.__webglFramebuffer[j].length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[j][Q]);else i.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)i.deleteFramebuffer(b.__webglFramebuffer[j]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=R.textures;for(let j=0,Q=H.length;j<Q;j++){const tt=n.get(H[j]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(H[j])}n.remove(R)}let T=0;function D(){T=0}function G(){const R=T;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),T+=1,R}function L(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function O(R,b){const H=n.get(R);if(R.isVideoTexture&&Pt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(H,R,b);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function V(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){et(H,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function X(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){et(H,R,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function k(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){dt(H,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const Z={[ri]:i.REPEAT,[ls]:i.CLAMP_TO_EDGE,[yl]:i.MIRRORED_REPEAT},rt={[dn]:i.NEAREST,[vd]:i.NEAREST_MIPMAP_NEAREST,[sa]:i.NEAREST_MIPMAP_LINEAR,[ui]:i.LINEAR,[vo]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},ot={[yd]:i.NEVER,[Ad]:i.ALWAYS,[Sd]:i.LESS,[Wu]:i.LEQUAL,[bd]:i.EQUAL,[Td]:i.GEQUAL,[wd]:i.GREATER,[Ed]:i.NOTEQUAL};function Et(R,b){if(b.type===ni&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ui||b.magFilter===vo||b.magFilter===sa||b.magFilter===cs||b.minFilter===ui||b.minFilter===vo||b.minFilter===sa||b.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Z[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Z[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Z[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,rt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,rt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ot[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==sa&&b.minFilter!==cs||b.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function jt(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",E));const j=b.source;let Q=f.get(j);Q===void 0&&(Q={},f.set(j,Q));const tt=L(b);if(tt!==R.__cacheKey){Q[tt]===void 0&&(Q[tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[tt].usedTimes++;const wt=Q[R.__cacheKey];wt!==void 0&&(Q[R.__cacheKey].usedTimes--,wt.usedTimes===0&&M(b)),R.__cacheKey=tt,R.__webglTexture=Q[tt].texture}return H}function et(R,b,H){let j=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=i.TEXTURE_3D);const Q=jt(R,b),tt=b.source;e.bindTexture(j,R.__webglTexture,i.TEXTURE0+H);const wt=n.get(tt);if(tt.version!==wt.__version||Q===!0){e.activeTexture(i.TEXTURE0+H);const Mt=Se.getPrimaries(Se.workingColorSpace),At=b.colorSpace===Vi?null:Se.getPrimaries(b.colorSpace),ee=b.colorSpace===Vi||Mt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let yt=x(b.image,!1,s.maxTextureSize);yt=Zt(b,yt);const Ht=r.convert(b.format,b.colorSpace),ne=r.convert(b.type);let ie=S(b.internalFormat,Ht,ne,b.colorSpace,b.isVideoTexture);Et(j,b);let qt;const pe=b.mipmaps,re=b.isVideoTexture!==!0,_e=wt.__version===void 0||Q===!0,W=tt.dataReady,It=A(b,yt);if(b.isDepthTexture)ie=g(b.format===_s,b.type),_e&&(re?e.texStorage2D(i.TEXTURE_2D,1,ie,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,ie,yt.width,yt.height,0,Ht,ne,null));else if(b.isDataTexture)if(pe.length>0){re&&_e&&e.texStorage2D(i.TEXTURE_2D,It,ie,pe[0].width,pe[0].height);for(let st=0,vt=pe.length;st<vt;st++)qt=pe[st],re?W&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,qt.width,qt.height,Ht,ne,qt.data):e.texImage2D(i.TEXTURE_2D,st,ie,qt.width,qt.height,0,Ht,ne,qt.data);b.generateMipmaps=!1}else re?(_e&&e.texStorage2D(i.TEXTURE_2D,It,ie,yt.width,yt.height),W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt.width,yt.height,Ht,ne,yt.data)):e.texImage2D(i.TEXTURE_2D,0,ie,yt.width,yt.height,0,Ht,ne,yt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){re&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,ie,pe[0].width,pe[0].height,yt.depth);for(let st=0,vt=pe.length;st<vt;st++)if(qt=pe[st],b.format!==Bn)if(Ht!==null)if(re){if(W)if(b.layerUpdates.size>0){const Ft=Hh(qt.width,qt.height,b.format,b.type);for(const Ut of b.layerUpdates){const B=qt.data.subarray(Ut*Ft/qt.data.BYTES_PER_ELEMENT,(Ut+1)*Ft/qt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Ut,qt.width,qt.height,1,Ht,B)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,qt.width,qt.height,yt.depth,Ht,qt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,ie,qt.width,qt.height,yt.depth,0,qt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,qt.width,qt.height,yt.depth,Ht,ne,qt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,ie,qt.width,qt.height,yt.depth,0,Ht,ne,qt.data)}else{re&&_e&&e.texStorage2D(i.TEXTURE_2D,It,ie,pe[0].width,pe[0].height);for(let st=0,vt=pe.length;st<vt;st++)qt=pe[st],b.format!==Bn?Ht!==null?re?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,qt.width,qt.height,Ht,qt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,ie,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?W&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,qt.width,qt.height,Ht,ne,qt.data):e.texImage2D(i.TEXTURE_2D,st,ie,qt.width,qt.height,0,Ht,ne,qt.data)}else if(b.isDataArrayTexture)if(re){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,ie,yt.width,yt.height,yt.depth),W)if(b.layerUpdates.size>0){const st=Hh(yt.width,yt.height,b.format,b.type);for(const vt of b.layerUpdates){const Ft=yt.data.subarray(vt*st/yt.data.BYTES_PER_ELEMENT,(vt+1)*st/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,yt.width,yt.height,1,Ht,ne,Ft)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Ht,ne,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,yt.width,yt.height,yt.depth,0,Ht,ne,yt.data);else if(b.isData3DTexture)re?(_e&&e.texStorage3D(i.TEXTURE_3D,It,ie,yt.width,yt.height,yt.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Ht,ne,yt.data)):e.texImage3D(i.TEXTURE_3D,0,ie,yt.width,yt.height,yt.depth,0,Ht,ne,yt.data);else if(b.isFramebufferTexture){if(_e)if(re)e.texStorage2D(i.TEXTURE_2D,It,ie,yt.width,yt.height);else{let st=yt.width,vt=yt.height;for(let Ft=0;Ft<It;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,ie,st,vt,0,Ht,ne,null),st>>=1,vt>>=1}}else if(pe.length>0){if(re&&_e){const st=q(pe[0]);e.texStorage2D(i.TEXTURE_2D,It,ie,st.width,st.height)}for(let st=0,vt=pe.length;st<vt;st++)qt=pe[st],re?W&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Ht,ne,qt):e.texImage2D(i.TEXTURE_2D,st,ie,Ht,ne,qt);b.generateMipmaps=!1}else if(re){if(_e){const st=q(yt);e.texStorage2D(i.TEXTURE_2D,It,ie,st.width,st.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ht,ne,yt)}else e.texImage2D(i.TEXTURE_2D,0,ie,Ht,ne,yt);m(b)&&p(j),wt.__version=tt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function dt(R,b,H){if(b.image.length!==6)return;const j=jt(R,b),Q=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const tt=n.get(Q);if(Q.version!==tt.__version||j===!0){e.activeTexture(i.TEXTURE0+H);const wt=Se.getPrimaries(Se.workingColorSpace),Mt=b.colorSpace===Vi?null:Se.getPrimaries(b.colorSpace),At=b.colorSpace===Vi||wt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const ee=b.isCompressedTexture||b.image[0].isCompressedTexture,yt=b.image[0]&&b.image[0].isDataTexture,Ht=[];for(let vt=0;vt<6;vt++)!ee&&!yt?Ht[vt]=x(b.image[vt],!0,s.maxCubemapSize):Ht[vt]=yt?b.image[vt].image:b.image[vt],Ht[vt]=Zt(b,Ht[vt]);const ne=Ht[0],ie=r.convert(b.format,b.colorSpace),qt=r.convert(b.type),pe=S(b.internalFormat,ie,qt,b.colorSpace),re=b.isVideoTexture!==!0,_e=tt.__version===void 0||j===!0,W=Q.dataReady;let It=A(b,ne);Et(i.TEXTURE_CUBE_MAP,b);let st;if(ee){re&&_e&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,pe,ne.width,ne.height);for(let vt=0;vt<6;vt++){st=Ht[vt].mipmaps;for(let Ft=0;Ft<st.length;Ft++){const Ut=st[Ft];b.format!==Bn?ie!==null?re?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,Ut.width,Ut.height,ie,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,pe,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,Ut.width,Ut.height,ie,qt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,pe,Ut.width,Ut.height,0,ie,qt,Ut.data)}}}else{if(st=b.mipmaps,re&&_e){st.length>0&&It++;const vt=q(Ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,pe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(yt){re?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ht[vt].width,Ht[vt].height,ie,qt,Ht[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pe,Ht[vt].width,Ht[vt].height,0,ie,qt,Ht[vt].data);for(let Ft=0;Ft<st.length;Ft++){const B=st[Ft].image[vt].image;re?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,B.width,B.height,ie,qt,B.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,pe,B.width,B.height,0,ie,qt,B.data)}}else{re?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ie,qt,Ht[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pe,ie,qt,Ht[vt]);for(let Ft=0;Ft<st.length;Ft++){const Ut=st[Ft];re?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,ie,qt,Ut.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,pe,ie,qt,Ut.image[vt])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),tt.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ct(R,b,H,j,Q,tt){const wt=r.convert(H.format,H.colorSpace),Mt=r.convert(H.type),At=S(H.internalFormat,wt,Mt,H.colorSpace),ee=n.get(b),yt=n.get(H);if(yt.__renderTarget=b,!ee.__hasExternalTextures){const Ht=Math.max(1,b.width>>tt),ne=Math.max(1,b.height>>tt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,tt,At,Ht,ne,b.depth,0,wt,Mt,null):e.texImage2D(Q,tt,At,Ht,ne,0,wt,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Nt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Q,yt.__webglTexture,0,_t(b)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Q,yt.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(R,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const j=b.depthTexture,Q=j&&j.isDepthTexture?j.type:null,tt=g(b.stencilBuffer,Q),wt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=_t(b);Nt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,tt,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,tt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,tt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,R)}else{const j=b.textures;for(let Q=0;Q<j.length;Q++){const tt=j[Q],wt=r.convert(tt.format,tt.colorSpace),Mt=r.convert(tt.type),At=S(tt.internalFormat,wt,Mt,tt.colorSpace),ee=_t(b);H&&Nt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,At,b.width,b.height):Nt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,At,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,At,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const Q=j.__webglTexture,tt=_t(b);if(b.depthTexture.format===Zs)Nt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(b.depthTexture.format===_s)Nt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Vt(R){const b=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=j}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");kt(b.__webglFramebuffer,R)}else if(H){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=i.createRenderbuffer(),ut(b.__webglDepthbuffer[j],R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ut(b.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(R,b,H){const j=n.get(R);b!==void 0&&Ct(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Vt(R)}function Qt(R){const b=R.texture,H=n.get(R),j=n.get(b);R.addEventListener("dispose",w);const Q=R.textures,tt=R.isWebGLCubeRenderTarget===!0,wt=Q.length>1;if(wt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=b.version,a.memory.textures++),tt){H.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[Mt]=[];for(let At=0;At<b.mipmaps.length;At++)H.__webglFramebuffer[Mt][At]=i.createFramebuffer()}else H.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)H.__webglFramebuffer[Mt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(wt)for(let Mt=0,At=Q.length;Mt<At;Mt++){const ee=n.get(Q[Mt]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Nt(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Mt=0;Mt<Q.length;Mt++){const At=Q[Mt];H.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Mt]);const ee=r.convert(At.format,At.colorSpace),yt=r.convert(At.type),Ht=S(At.internalFormat,ee,yt,At.colorSpace,R.isXRRenderTarget===!0),ne=_t(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Ht,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,H.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Et(i.TEXTURE_CUBE_MAP,b);for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)Ct(H.__webglFramebuffer[Mt][At],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,At);else Ct(H.__webglFramebuffer[Mt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let Mt=0,At=Q.length;Mt<At;Mt++){const ee=Q[Mt],yt=n.get(ee);e.bindTexture(i.TEXTURE_2D,yt.__webglTexture),Et(i.TEXTURE_2D,ee),Ct(H.__webglFramebuffer,R,ee,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),m(ee)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,j.__webglTexture),Et(Mt,b),b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)Ct(H.__webglFramebuffer[At],R,b,i.COLOR_ATTACHMENT0,Mt,At);else Ct(H.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,Mt,0);m(b)&&p(Mt),e.unbindTexture()}R.depthBuffer&&Vt(R)}function ft(R){const b=R.textures;for(let H=0,j=b.length;H<j;H++){const Q=b[H];if(m(Q)){const tt=y(R),wt=n.get(Q).__webglTexture;e.bindTexture(tt,wt),p(tt),e.unbindTexture()}}}const bt=[],N=[];function Bt(R){if(R.samples>0){if(Nt(R)===!1){const b=R.textures,H=R.width,j=R.height;let Q=i.COLOR_BUFFER_BIT;const tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(R),Mt=b.length>1;if(Mt)for(let At=0;At<b.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<b.length;At++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const ee=n.get(b[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,Q,i.NEAREST),l===!0&&(bt.length=0,N.length=0,bt.push(i.COLOR_ATTACHMENT0+At),R.depthBuffer&&R.resolveDepthBuffer===!1&&(bt.push(tt),N.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let At=0;At<b.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const ee=n.get(b[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function _t(R){return Math.min(s.maxSamples,R.samples)}function Nt(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pt(R){const b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Zt(R,b){const H=R.colorSpace,j=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==dr&&H!==Vi&&(Se.getTransfer(H)===Re?(j!==Bn||Q!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function q(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=Xt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Nt}function Xv(i,t){function e(n,s=Vi){let r;const a=Se.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===gc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return i.BYTE;if(n===zu)return i.SHORT;if(n===Br)return i.UNSIGNED_SHORT;if(n===mc)return i.INT;if(n===vs)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===Ou)return i.ALPHA;if(n===ku)return i.RGB;if(n===Bn)return i.RGBA;if(n===Bu)return i.LUMINANCE;if(n===Gu)return i.LUMINANCE_ALPHA;if(n===Zs)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===to)return i.RED;if(n===xc)return i.RED_INTEGER;if(n===Vu)return i.RG;if(n===_c)return i.RG_INTEGER;if(n===Mc)return i.RGBA_INTEGER;if(n===Ga||n===Va||n===Ha||n===Wa)if(a===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sl||n===bl||n===wl||n===El)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tl||n===Al||n===Cl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tl||n===Al)return a===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rl||n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Nl||n===zl||n===Fl||n===Ol||n===kl||n===Bl||n===Gl||n===Vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ll)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Il)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===Hl||n===Wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return a===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hu||n===Xl||n===ql||n===Yl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class qv extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ve extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yv={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,v=.005;c.inputState.pinching&&f>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $v=`
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

}`;class Zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new xn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xe({vertexShader:$v,fragmentShader:jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kv extends pr{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,v=null;const x=new Zv,m=e.getContextAttributes();let p=null,y=null;const S=[],g=[],A=new St;let E=null;const w=new In;w.viewport=new Ue;const C=new In;C.viewport=new Ue;const M=[w,C],_=new qv;let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let dt=S[et];return dt===void 0&&(dt=new Wo,S[et]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(et){let dt=S[et];return dt===void 0&&(dt=new Wo,S[et]=dt),dt.getGripSpace()},this.getHand=function(et){let dt=S[et];return dt===void 0&&(dt=new Wo,S[et]=dt),dt.getHandSpace()};function G(et){const dt=g.indexOf(et.inputSource);if(dt===-1)return;const Ct=S[dt];Ct!==void 0&&(Ct.update(et.inputSource,et.frame,c||a),Ct.dispatchEvent({type:et.type,data:et.inputSource}))}function L(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",O);for(let et=0;et<S.length;et++){const dt=g[et];dt!==null&&(g[et]=null,S[et].disconnect(dt))}T=null,D=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,y=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",L),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Rn(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let dt=null,Ct=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=m.stencil?_s:Zs,Ct=m.stencil?xs:vs);const kt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Rn(f.textureWidth,f.textureHeight,{format:Bn,type:pi,depthTexture:new Cc(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(et){for(let dt=0;dt<et.removed.length;dt++){const Ct=et.removed[dt],ut=g.indexOf(Ct);ut>=0&&(g[ut]=null,S[ut].disconnect(Ct))}for(let dt=0;dt<et.added.length;dt++){const Ct=et.added[dt];let ut=g.indexOf(Ct);if(ut===-1){for(let Vt=0;Vt<S.length;Vt++)if(Vt>=g.length){g.push(Ct),ut=Vt;break}else if(g[Vt]===null){g[Vt]=Ct,ut=Vt;break}if(ut===-1)break}const kt=S[ut];kt&&kt.connect(Ct)}}const V=new F,X=new F;function k(et,dt,Ct){V.setFromMatrixPosition(dt.matrixWorld),X.setFromMatrixPosition(Ct.matrixWorld);const ut=V.distanceTo(X),kt=dt.projectionMatrix.elements,Vt=Ct.projectionMatrix.elements,Xt=kt[14]/(kt[10]-1),Qt=kt[14]/(kt[10]+1),ft=(kt[9]+1)/kt[5],bt=(kt[9]-1)/kt[5],N=(kt[8]-1)/kt[0],Bt=(Vt[8]+1)/Vt[0],_t=Xt*N,Nt=Xt*Bt,Pt=ut/(-N+Bt),Zt=Pt*-N;if(dt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Zt),et.translateZ(Pt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),kt[10]===-1)et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const q=Xt+Pt,R=Qt+Pt,b=_t-Zt,H=Nt+(ut-Zt),j=ft*Qt/R*q,Q=bt*Qt/R*q;et.projectionMatrix.makePerspective(b,H,j,Q,q,R),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Z(et,dt){dt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(dt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let dt=et.near,Ct=et.far;x.texture!==null&&(x.depthNear>0&&(dt=x.depthNear),x.depthFar>0&&(Ct=x.depthFar)),_.near=C.near=w.near=dt,_.far=C.far=w.far=Ct,(T!==_.near||D!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,D=_.far),w.layers.mask=et.layers.mask|2,C.layers.mask=et.layers.mask|4,_.layers.mask=w.layers.mask|C.layers.mask;const ut=et.parent,kt=_.cameras;Z(_,ut);for(let Vt=0;Vt<kt.length;Vt++)Z(kt[Vt],ut);kt.length===2?k(_,w,C):_.projectionMatrix.copy(w.projectionMatrix),rt(et,_,ut)};function rt(et,dt,Ct){Ct===null?et.matrix.copy(dt.matrixWorld):(et.matrix.copy(Ct.matrixWorld),et.matrix.invert(),et.matrix.multiply(dt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Gr*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ot=null;function Et(et,dt){if(h=dt.getViewerPose(c||a),v=dt,h!==null){const Ct=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ut=!1;Ct.length!==_.cameras.length&&(_.cameras.length=0,ut=!0);for(let Vt=0;Vt<Ct.length;Vt++){const Xt=Ct[Vt];let Qt=null;if(d!==null)Qt=d.getViewport(Xt);else{const bt=u.getViewSubImage(f,Xt);Qt=bt.viewport,Vt===0&&(t.setRenderTargetTextures(y,bt.colorTexture,f.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(y))}let ft=M[Vt];ft===void 0&&(ft=new In,ft.layers.enable(Vt),ft.viewport=new Ue,M[Vt]=ft),ft.matrix.fromArray(Xt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Xt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Vt===0&&(_.matrix.copy(ft.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ut===!0&&_.cameras.push(ft)}const kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const Vt=u.getDepthInformation(Ct[0]);Vt&&Vt.isValid&&Vt.texture&&x.init(t,Vt,s.renderState)}}for(let Ct=0;Ct<S.length;Ct++){const ut=g[Ct],kt=S[Ct];ut!==null&&kt!==void 0&&kt.update(ut,dt,c||a)}ot&&ot(et,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),v=null}const jt=new tf;jt.setAnimationLoop(Et),this.setAnimationLoop=function(et){ot=et},this.dispose=function(){}}}const ns=new mi,Jv=new be;function Qv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ku(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,g){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,g)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),S=y.envMap,g=y.envMapRotation;S&&(m.envMap.value=S,ns.copy(g),ns.x*=-1,ns.y*=-1,ns.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(Jv.makeRotationFromEuler(ns)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const g=S.program;n.uniformBlockBinding(y,g)}function c(y,S){let g=s[y.id];g===void 0&&(v(y),g=h(y),s[y.id]=g,y.addEventListener("dispose",m));const A=S.program;n.updateUBOMapping(y,A);const E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){const S=u();y.__bindingPointIndex=S;const g=i.createBuffer(),A=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,g),g}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=s[y.id],g=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,w=g.length;E<w;E++){const C=Array.isArray(g[E])?g[E]:[g[E]];for(let M=0,_=C.length;M<_;M++){const T=C[M];if(d(T,E,M,A)===!0){const D=T.__offset,G=Array.isArray(T.value)?T.value:[T.value];let L=0;for(let O=0;O<G.length;O++){const V=G[O],X=x(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,D+L,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,S,g,A){const E=y.value,w=S+"_"+g;if(A[w]===void 0)return typeof E=="number"||typeof E=="boolean"?A[w]=E:A[w]=E.clone(),!0;{const C=A[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return A[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function v(y){const S=y.uniforms;let g=0;const A=16;for(let w=0,C=S.length;w<C;w++){const M=Array.isArray(S[w])?S[w]:[S[w]];for(let _=0,T=M.length;_<T;_++){const D=M[_],G=Array.isArray(D.value)?D.value:[D.value];for(let L=0,O=G.length;L<O;L++){const V=G[L],X=x(V),k=g%A,Z=k%X.boundary,rt=k+Z;g+=Z,rt!==0&&A-rt<X.storage&&(g+=A-rt),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=g,g+=X.storage}}}const E=g%A;return E>0&&(g+=A-E),y.__size=g,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const g=a.indexOf(S.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ex{constructor(t={}){const{canvas:e=Wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=qi,this.toneMappingExposure=1;const g=this;let A=!1,E=0,w=0,C=null,M=-1,_=null;const T=new Ue,D=new Ue;let G=null;const L=new Lt(0);let O=0,V=e.width,X=e.height,k=1,Z=null,rt=null;const ot=new Ue(0,0,V,X),Et=new Ue(0,0,V,X);let jt=!1;const et=new Ec;let dt=!1,Ct=!1;const ut=new be,kt=new be,Vt=new F,Xt=new Ue,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function bt(){return C===null?k:1}let N=n;function Bt(P,$){return e.getContext(P,$)}try{const P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fc}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),N===null){const $="webgl2";if(N=Bt($,P),N===null)throw Bt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let _t,Nt,Pt,Zt,q,R,b,H,j,Q,tt,wt,Mt,At,ee,yt,Ht,ne,ie,qt,pe,re,_e,W;function It(){_t=new ag(N),_t.init(),re=new Xv(N,_t),Nt=new tg(N,_t,t,re),Pt=new Vv(N,_t),Nt.reverseDepthBuffer&&f&&Pt.buffers.depth.setReversed(!0),Zt=new cg(N),q=new Av,R=new Wv(N,_t,Pt,q,Nt,re,Zt),b=new ng(g),H=new rg(g),j=new gp(N),_e=new Jm(N,j),Q=new og(N,j,Zt,_e),tt=new ug(N,Q,j,Zt),ie=new hg(N,Nt,R),yt=new eg(q),wt=new Tv(g,b,H,_t,Nt,_e,yt),Mt=new Qv(g,q),At=new Rv,ee=new Nv(_t),ne=new Km(g,b,H,Pt,tt,d,l),Ht=new Bv(g,tt,Nt),W=new tx(N,Zt,Nt,Pt),qt=new Qm(N,_t,Zt),pe=new lg(N,_t,Zt),Zt.programs=wt.programs,g.capabilities=Nt,g.extensions=_t,g.properties=q,g.renderLists=At,g.shadowMap=Ht,g.state=Pt,g.info=Zt}It();const st=new Kv(g,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const P=_t.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=_t.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(P){P!==void 0&&(k=P,this.setSize(V,X,!1))},this.getSize=function(P){return P.set(V,X)},this.setSize=function(P,$,it=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=P,X=$,e.width=Math.floor(P*k),e.height=Math.floor($*k),it===!0&&(e.style.width=P+"px",e.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(V*k,X*k).floor()},this.setDrawingBufferSize=function(P,$,it){V=P,X=$,k=it,e.width=Math.floor(P*it),e.height=Math.floor($*it),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(ot)},this.setViewport=function(P,$,it,nt){P.isVector4?ot.set(P.x,P.y,P.z,P.w):ot.set(P,$,it,nt),Pt.viewport(T.copy(ot).multiplyScalar(k).round())},this.getScissor=function(P){return P.copy(Et)},this.setScissor=function(P,$,it,nt){P.isVector4?Et.set(P.x,P.y,P.z,P.w):Et.set(P,$,it,nt),Pt.scissor(D.copy(Et).multiplyScalar(k).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(P){Pt.setScissorTest(jt=P)},this.setOpaqueSort=function(P){Z=P},this.setTransparentSort=function(P){rt=P},this.getClearColor=function(P){return P.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(P=!0,$=!0,it=!0){let nt=0;if(P){let Y=!1;if(C!==null){const Rt=C.texture.format;Y=Rt===Mc||Rt===_c||Rt===xc}if(Y){const Rt=C.texture.type,Gt=Rt===pi||Rt===vs||Rt===Br||Rt===xs||Rt===gc||Rt===vc,Kt=ne.getClearColor(),Jt=ne.getClearAlpha(),ce=Kt.r,ue=Kt.g,I=Kt.b;Gt?(v[0]=ce,v[1]=ue,v[2]=I,v[3]=Jt,N.clearBufferuiv(N.COLOR,0,v)):(x[0]=ce,x[1]=ue,x[2]=I,x[3]=Jt,N.clearBufferiv(N.COLOR,0,x))}else nt|=N.COLOR_BUFFER_BIT}$&&(nt|=N.DEPTH_BUFFER_BIT),it&&(nt|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),At.dispose(),ee.dispose(),q.dispose(),b.dispose(),H.dispose(),tt.dispose(),_e.dispose(),W.dispose(),wt.dispose(),st.dispose(),st.removeEventListener("sessionstart",Ge),st.removeEventListener("sessionend",Ve),Ye.stop()};function vt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=Zt.autoReset,$=Ht.enabled,it=Ht.autoUpdate,nt=Ht.needsUpdate,Y=Ht.type;It(),Zt.autoReset=P,Ht.enabled=$,Ht.autoUpdate=it,Ht.needsUpdate=nt,Ht.type=Y}function Ut(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function B(P){const $=P.target;$.removeEventListener("dispose",B),lt($)}function lt(P){zt(P),q.remove(P)}function zt(P){const $=q.get(P).programs;$!==void 0&&($.forEach(function(it){wt.releaseProgram(it)}),P.isShaderMaterial&&wt.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,it,nt,Y,Rt){$===null&&($=Qt);const Gt=Y.isMesh&&Y.matrixWorld.determinant()<0,Kt=ia(P,$,it,nt,Y);Pt.setMaterial(nt,Gt);let Jt=it.index,ce=1;if(nt.wireframe===!0){if(Jt=Q.getWireframeAttribute(it),Jt===void 0)return;ce=2}const ue=it.drawRange,I=it.attributes.position;let z=ue.start*ce,J=(ue.start+ue.count)*ce;Rt!==null&&(z=Math.max(z,Rt.start*ce),J=Math.min(J,(Rt.start+Rt.count)*ce)),Jt!==null?(z=Math.max(z,0),J=Math.min(J,Jt.count)):I!=null&&(z=Math.max(z,0),J=Math.min(J,I.count));const at=J-z;if(at<0||at===1/0)return;_e.setup(Y,nt,Kt,it,Jt);let Tt,mt=qt;if(Jt!==null&&(Tt=j.get(Jt),mt=pe,mt.setIndex(Tt)),Y.isMesh)nt.wireframe===!0?(Pt.setLineWidth(nt.wireframeLinewidth*bt()),mt.setMode(N.LINES)):mt.setMode(N.TRIANGLES);else if(Y.isLine){let ct=nt.linewidth;ct===void 0&&(ct=1),Pt.setLineWidth(ct*bt()),Y.isLineSegments?mt.setMode(N.LINES):Y.isLineLoop?mt.setMode(N.LINE_LOOP):mt.setMode(N.LINE_STRIP)}else Y.isPoints?mt.setMode(N.POINTS):Y.isSprite&&mt.setMode(N.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)mt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))mt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const ct=Y._multiDrawStarts,pt=Y._multiDrawCounts,Dt=Y._multiDrawCount,te=Jt?j.get(Jt).bytesPerElement:1,xe=q.get(nt).currentProgram.getUniforms();for(let he=0;he<Dt;he++)xe.setValue(N,"_gl_DrawID",he),mt.render(ct[he]/te,pt[he])}else if(Y.isInstancedMesh)mt.renderInstances(z,at,Y.count);else if(it.isInstancedBufferGeometry){const ct=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,pt=Math.min(it.instanceCount,ct);mt.renderInstances(z,at,pt)}else mt.render(z,at)};function Yt(P,$,it){P.transparent===!0&&P.side===je&&P.forceSinglePass===!1?(P.side=En,P.needsUpdate=!0,oi(P,$,it),P.side=Yi,P.needsUpdate=!0,oi(P,$,it),P.side=je):oi(P,$,it)}this.compile=function(P,$,it=null){it===null&&(it=P),p=ee.get(it),p.init($),S.push(p),it.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),P!==it&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const nt=new Set;return P.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Rt=Y.material;if(Rt)if(Array.isArray(Rt))for(let Gt=0;Gt<Rt.length;Gt++){const Kt=Rt[Gt];Yt(Kt,it,Y),nt.add(Kt)}else Yt(Rt,it,Y),nt.add(Rt)}),S.pop(),p=null,nt},this.compileAsync=function(P,$,it=null){const nt=this.compile(P,$,it);return new Promise(Y=>{function Rt(){if(nt.forEach(function(Gt){q.get(Gt).currentProgram.isReady()&&nt.delete(Gt)}),nt.size===0){Y(P);return}setTimeout(Rt,10)}_t.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ye=null;function oe(P){ye&&ye(P)}function Ge(){Ye.stop()}function Ve(){Ye.start()}const Ye=new tf;Ye.setAnimationLoop(oe),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(P){ye=P,st.setAnimationLoop(P),P===null?Ye.stop():Ye.start()},st.addEventListener("sessionstart",Ge),st.addEventListener("sessionend",Ve),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera($),$=st.getCamera()),P.isScene===!0&&P.onBeforeRender(g,P,$,C),p=ee.get(P,S.length),p.init($),S.push(p),kt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),et.setFromProjectionMatrix(kt),Ct=this.localClippingEnabled,dt=yt.init(this.clippingPlanes,Ct),m=At.get(P,y.length),m.init(),y.push(m),st.enabled===!0&&st.isPresenting===!0){const Rt=g.xr.getDepthSensingMesh();Rt!==null&&pn(Rt,$,-1/0,g.sortObjects)}pn(P,$,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(Z,rt),ft=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,ft&&ne.addToRenderList(m,P),this.info.render.frame++,dt===!0&&yt.beginShadows();const it=p.state.shadowsArray;Ht.render(it,P,$),dt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=m.opaque,Y=m.transmissive;if(p.setupLights(),$.isArrayCamera){const Rt=$.cameras;if(Y.length>0)for(let Gt=0,Kt=Rt.length;Gt<Kt;Gt++){const Jt=Rt[Gt];zn(nt,Y,P,Jt)}ft&&ne.render(P);for(let Gt=0,Kt=Rt.length;Gt<Kt;Gt++){const Jt=Rt[Gt];Te(m,P,Jt,Jt.viewport)}}else Y.length>0&&zn(nt,Y,P,$),ft&&ne.render(P),Te(m,P,$);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(g,P,$),_e.resetDefaultState(),M=-1,_=null,S.pop(),S.length>0?(p=S[S.length-1],dt===!0&&yt.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function pn(P,$,it,nt){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)it=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||et.intersectsSprite(P)){nt&&Xt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(kt);const Gt=tt.update(P),Kt=P.material;Kt.visible&&m.push(P,Gt,Kt,it,Xt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||et.intersectsObject(P))){const Gt=tt.update(P),Kt=P.material;if(nt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Xt.copy(P.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),Xt.copy(Gt.boundingSphere.center)),Xt.applyMatrix4(P.matrixWorld).applyMatrix4(kt)),Array.isArray(Kt)){const Jt=Gt.groups;for(let ce=0,ue=Jt.length;ce<ue;ce++){const I=Jt[ce],z=Kt[I.materialIndex];z&&z.visible&&m.push(P,Gt,z,it,Xt.z,I)}}else Kt.visible&&m.push(P,Gt,Kt,it,Xt.z,null)}}const Rt=P.children;for(let Gt=0,Kt=Rt.length;Gt<Kt;Gt++)pn(Rt[Gt],$,it,nt)}function Te(P,$,it,nt){const Y=P.opaque,Rt=P.transmissive,Gt=P.transparent;p.setupLightsView(it),dt===!0&&yt.setGlobalState(g.clippingPlanes,it),nt&&Pt.viewport(T.copy(nt)),Y.length>0&&xi(Y,$,it),Rt.length>0&&xi(Rt,$,it),Gt.length>0&&xi(Gt,$,it),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function zn(P,$,it,nt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[nt.id]===void 0&&(p.state.transmissionRenderTarget[nt.id]=new Rn(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Gn:pi,minFilter:cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));const Rt=p.state.transmissionRenderTarget[nt.id],Gt=nt.viewport||T;Rt.setSize(Gt.z,Gt.w);const Kt=g.getRenderTarget();g.setRenderTarget(Rt),g.getClearColor(L),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear(),ft&&ne.render(it);const Jt=g.toneMapping;g.toneMapping=qi;const ce=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),p.setupLightsView(nt),dt===!0&&yt.setGlobalState(g.clippingPlanes,nt),xi(P,it,nt),R.updateMultisampleRenderTarget(Rt),R.updateRenderTargetMipmap(Rt),_t.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let I=0,z=$.length;I<z;I++){const J=$[I],at=J.object,Tt=J.geometry,mt=J.material,ct=J.group;if(mt.side===je&&at.layers.test(nt.layers)){const pt=mt.side;mt.side=En,mt.needsUpdate=!0,na(at,it,nt,Tt,mt,ct),mt.side=pt,mt.needsUpdate=!0,ue=!0}}ue===!0&&(R.updateMultisampleRenderTarget(Rt),R.updateRenderTargetMipmap(Rt))}g.setRenderTarget(Kt),g.setClearColor(L,O),ce!==void 0&&(nt.viewport=ce),g.toneMapping=Jt}function xi(P,$,it){const nt=$.isScene===!0?$.overrideMaterial:null;for(let Y=0,Rt=P.length;Y<Rt;Y++){const Gt=P[Y],Kt=Gt.object,Jt=Gt.geometry,ce=nt===null?Gt.material:nt,ue=Gt.group;Kt.layers.test(it.layers)&&na(Kt,$,it,Jt,ce,ue)}}function na(P,$,it,nt,Y,Rt){P.onBeforeRender(g,$,it,nt,Y,Rt),P.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(g,$,it,nt,P,Rt),Y.transparent===!0&&Y.side===je&&Y.forceSinglePass===!1?(Y.side=En,Y.needsUpdate=!0,g.renderBufferDirect(it,$,nt,Y,P,Rt),Y.side=Yi,Y.needsUpdate=!0,g.renderBufferDirect(it,$,nt,Y,P,Rt),Y.side=je):g.renderBufferDirect(it,$,nt,Y,P,Rt),P.onAfterRender(g,$,it,nt,Y,Rt)}function oi(P,$,it){$.isScene!==!0&&($=Qt);const nt=q.get(P),Y=p.state.lights,Rt=p.state.shadowsArray,Gt=Y.state.version,Kt=wt.getParameters(P,Y.state,Rt,$,it),Jt=wt.getProgramCacheKey(Kt);let ce=nt.programs;nt.environment=P.isMeshStandardMaterial?$.environment:null,nt.fog=$.fog,nt.envMap=(P.isMeshStandardMaterial?H:b).get(P.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,ce===void 0&&(P.addEventListener("dispose",B),ce=new Map,nt.programs=ce);let ue=ce.get(Jt);if(ue!==void 0){if(nt.currentProgram===ue&&nt.lightsStateVersion===Gt)return $i(P,Kt),ue}else Kt.uniforms=wt.getUniforms(P),P.onBeforeCompile(Kt,g),ue=wt.acquireProgram(Kt,Jt),ce.set(Jt,ue),nt.uniforms=Kt.uniforms;const I=nt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(I.clippingPlanes=yt.uniform),$i(P,Kt),nt.needsLights=_i(P),nt.lightsStateVersion=Gt,nt.needsLights&&(I.ambientLightColor.value=Y.state.ambient,I.lightProbe.value=Y.state.probe,I.directionalLights.value=Y.state.directional,I.directionalLightShadows.value=Y.state.directionalShadow,I.spotLights.value=Y.state.spot,I.spotLightShadows.value=Y.state.spotShadow,I.rectAreaLights.value=Y.state.rectArea,I.ltc_1.value=Y.state.rectAreaLTC1,I.ltc_2.value=Y.state.rectAreaLTC2,I.pointLights.value=Y.state.point,I.pointLightShadows.value=Y.state.pointShadow,I.hemisphereLights.value=Y.state.hemi,I.directionalShadowMap.value=Y.state.directionalShadowMap,I.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,I.spotShadowMap.value=Y.state.spotShadowMap,I.spotLightMatrix.value=Y.state.spotLightMatrix,I.spotLightMap.value=Y.state.spotLightMap,I.pointShadowMap.value=Y.state.pointShadowMap,I.pointShadowMatrix.value=Y.state.pointShadowMatrix),nt.currentProgram=ue,nt.uniformsList=null,ue}function Mn(P){if(P.uniformsList===null){const $=P.currentProgram.getUniforms();P.uniformsList=qa.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function $i(P,$){const it=q.get(P);it.outputColorSpace=$.outputColorSpace,it.batching=$.batching,it.batchingColor=$.batchingColor,it.instancing=$.instancing,it.instancingColor=$.instancingColor,it.instancingMorph=$.instancingMorph,it.skinning=$.skinning,it.morphTargets=$.morphTargets,it.morphNormals=$.morphNormals,it.morphColors=$.morphColors,it.morphTargetsCount=$.morphTargetsCount,it.numClippingPlanes=$.numClippingPlanes,it.numIntersection=$.numClipIntersection,it.vertexAlphas=$.vertexAlphas,it.vertexTangents=$.vertexTangents,it.toneMapping=$.toneMapping}function ia(P,$,it,nt,Y){$.isScene!==!0&&($=Qt),R.resetTextureUnits();const Rt=$.fog,Gt=nt.isMeshStandardMaterial?$.environment:null,Kt=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:dr,Jt=(nt.isMeshStandardMaterial?H:b).get(nt.envMap||Gt),ce=nt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ue=!!it.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),I=!!it.morphAttributes.position,z=!!it.morphAttributes.normal,J=!!it.morphAttributes.color;let at=qi;nt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(at=g.toneMapping);const Tt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,mt=Tt!==void 0?Tt.length:0,ct=q.get(nt),pt=p.state.lights;if(dt===!0&&(Ct===!0||P!==_)){const rn=P===_&&nt.id===M;yt.setState(nt,P,rn)}let Dt=!1;nt.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==pt.state.version||ct.outputColorSpace!==Kt||Y.isBatchedMesh&&ct.batching===!1||!Y.isBatchedMesh&&ct.batching===!0||Y.isBatchedMesh&&ct.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ct.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ct.instancing===!1||!Y.isInstancedMesh&&ct.instancing===!0||Y.isSkinnedMesh&&ct.skinning===!1||!Y.isSkinnedMesh&&ct.skinning===!0||Y.isInstancedMesh&&ct.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ct.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ct.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ct.instancingMorph===!1&&Y.morphTexture!==null||ct.envMap!==Jt||nt.fog===!0&&ct.fog!==Rt||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==yt.numPlanes||ct.numIntersection!==yt.numIntersection)||ct.vertexAlphas!==ce||ct.vertexTangents!==ue||ct.morphTargets!==I||ct.morphNormals!==z||ct.morphColors!==J||ct.toneMapping!==at||ct.morphTargetsCount!==mt)&&(Dt=!0):(Dt=!0,ct.__version=nt.version);let te=ct.currentProgram;Dt===!0&&(te=oi(nt,$,Y));let xe=!1,he=!1,ke=!1;const Ce=te.getUniforms(),Ze=ct.uniforms;if(Pt.useProgram(te.program)&&(xe=!0,he=!0,ke=!0),nt.id!==M&&(M=nt.id,he=!0),xe||_!==P){Pt.buffers.depth.getReversed()?(ut.copy(P.projectionMatrix),qd(ut),Yd(ut),Ce.setValue(N,"projectionMatrix",ut)):Ce.setValue(N,"projectionMatrix",P.projectionMatrix),Ce.setValue(N,"viewMatrix",P.matrixWorldInverse);const Fn=Ce.map.cameraPosition;Fn!==void 0&&Fn.setValue(N,Vt.setFromMatrixPosition(P.matrixWorld)),Nt.logarithmicDepthBuffer&&Ce.setValue(N,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ce.setValue(N,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,he=!0,ke=!0)}if(Y.isSkinnedMesh){Ce.setOptional(N,Y,"bindMatrix"),Ce.setOptional(N,Y,"bindMatrixInverse");const rn=Y.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ce.setValue(N,"boneTexture",rn.boneTexture,R))}Y.isBatchedMesh&&(Ce.setOptional(N,Y,"batchingTexture"),Ce.setValue(N,"batchingTexture",Y._matricesTexture,R),Ce.setOptional(N,Y,"batchingIdTexture"),Ce.setValue(N,"batchingIdTexture",Y._indirectTexture,R),Ce.setOptional(N,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ce.setValue(N,"batchingColorTexture",Y._colorsTexture,R));const Wn=it.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&ie.update(Y,it,te),(he||ct.receiveShadow!==Y.receiveShadow)&&(ct.receiveShadow=Y.receiveShadow,Ce.setValue(N,"receiveShadow",Y.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Ze.envMap.value=Jt,Ze.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&$.environment!==null&&(Ze.envMapIntensity.value=$.environmentIntensity),he&&(Ce.setValue(N,"toneMappingExposure",g.toneMappingExposure),ct.needsLights&&ji(Ze,ke),Rt&&nt.fog===!0&&Mt.refreshFogUniforms(Ze,Rt),Mt.refreshMaterialUniforms(Ze,nt,k,X,p.state.transmissionRenderTarget[P.id]),qa.upload(N,Mn(ct),Ze,R)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(qa.upload(N,Mn(ct),Ze,R),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ce.setValue(N,"center",Y.center),Ce.setValue(N,"modelViewMatrix",Y.modelViewMatrix),Ce.setValue(N,"normalMatrix",Y.normalMatrix),Ce.setValue(N,"modelMatrix",Y.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const rn=nt.uniformsGroups;for(let Fn=0,Pn=rn.length;Fn<Pn;Fn++){const Zi=rn[Fn];W.update(Zi,te),W.bind(Zi,te)}}return te}function ji(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function _i(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,$,it){q.get(P.texture).__webglTexture=$,q.get(P.depthTexture).__webglTexture=it;const nt=q.get(P);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=it===void 0,nt.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,$){const it=q.get(P);it.__webglFramebuffer=$,it.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(P,$=0,it=0){C=P,E=$,w=it;let nt=!0,Y=null,Rt=!1,Gt=!1;if(P){const Jt=q.get(P);if(Jt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(N.FRAMEBUFFER,null),nt=!1;else if(Jt.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(Jt.__hasExternalTextures)R.rebindTextures(P,q.get(P.texture).__webglTexture,q.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const I=P.depthTexture;if(Jt.__boundDepthTexture!==I){if(I!==null&&q.has(I)&&(P.width!==I.image.width||P.height!==I.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const ce=P.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(Gt=!0);const ue=q.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ue[$])?Y=ue[$][it]:Y=ue[$],Rt=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?Y=q.get(P).__webglMultisampledFramebuffer:Array.isArray(ue)?Y=ue[it]:Y=ue,T.copy(P.viewport),D.copy(P.scissor),G=P.scissorTest}else T.copy(ot).multiplyScalar(k).floor(),D.copy(Et).multiplyScalar(k).floor(),G=jt;if(Pt.bindFramebuffer(N.FRAMEBUFFER,Y)&&nt&&Pt.drawBuffers(P,Y),Pt.viewport(T),Pt.scissor(D),Pt.setScissorTest(G),Rt){const Jt=q.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+$,Jt.__webglTexture,it)}else if(Gt){const Jt=q.get(P.texture),ce=$||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Jt.__webglTexture,it||0,ce)}M=-1},this.readRenderTargetPixels=function(P,$,it,nt,Y,Rt,Gt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Gt!==void 0&&(Kt=Kt[Gt]),Kt){Pt.bindFramebuffer(N.FRAMEBUFFER,Kt);try{const Jt=P.texture,ce=Jt.format,ue=Jt.type;if(!Nt.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-nt&&it>=0&&it<=P.height-Y&&N.readPixels($,it,nt,Y,re.convert(ce),re.convert(ue),Rt)}finally{const Jt=C!==null?q.get(C).__webglFramebuffer:null;Pt.bindFramebuffer(N.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(P,$,it,nt,Y,Rt,Gt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Gt!==void 0&&(Kt=Kt[Gt]),Kt){const Jt=P.texture,ce=Jt.format,ue=Jt.type;if(!Nt.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=P.width-nt&&it>=0&&it<=P.height-Y){Pt.bindFramebuffer(N.FRAMEBUFFER,Kt);const I=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,I),N.bufferData(N.PIXEL_PACK_BUFFER,Rt.byteLength,N.STREAM_READ),N.readPixels($,it,nt,Y,re.convert(ce),re.convert(ue),0);const z=C!==null?q.get(C).__webglFramebuffer:null;Pt.bindFramebuffer(N.FRAMEBUFFER,z);const J=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Xd(N,J,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,I),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Rt),N.deleteBuffer(I),N.deleteSync(J),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,$=null,it=0){P.isTexture!==!0&&(Rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1]);const nt=Math.pow(2,-it),Y=Math.floor(P.image.width*nt),Rt=Math.floor(P.image.height*nt),Gt=$!==null?$.x:0,Kt=$!==null?$.y:0;R.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,it,0,0,Gt,Kt,Y,Rt),Pt.unbindTexture()},this.copyTextureToTexture=function(P,$,it=null,nt=null,Y=0){P.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,P=arguments[1],$=arguments[2],Y=arguments[3]||0,it=null);let Rt,Gt,Kt,Jt,ce,ue,I,z,J;const at=P.isCompressedTexture?P.mipmaps[Y]:P.image;it!==null?(Rt=it.max.x-it.min.x,Gt=it.max.y-it.min.y,Kt=it.isBox3?it.max.z-it.min.z:1,Jt=it.min.x,ce=it.min.y,ue=it.isBox3?it.min.z:0):(Rt=at.width,Gt=at.height,Kt=at.depth||1,Jt=0,ce=0,ue=0),nt!==null?(I=nt.x,z=nt.y,J=nt.z):(I=0,z=0,J=0);const Tt=re.convert($.format),mt=re.convert($.type);let ct;$.isData3DTexture?(R.setTexture3D($,0),ct=N.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(R.setTexture2DArray($,0),ct=N.TEXTURE_2D_ARRAY):(R.setTexture2D($,0),ct=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,$.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,$.unpackAlignment);const pt=N.getParameter(N.UNPACK_ROW_LENGTH),Dt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),te=N.getParameter(N.UNPACK_SKIP_PIXELS),xe=N.getParameter(N.UNPACK_SKIP_ROWS),he=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,at.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Jt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ce),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ue);const ke=P.isDataArrayTexture||P.isData3DTexture,Ce=$.isDataArrayTexture||$.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const Ze=q.get(P),Wn=q.get($),rn=q.get(Ze.__renderTarget),Fn=q.get(Wn.__renderTarget);Pt.bindFramebuffer(N.READ_FRAMEBUFFER,rn.__webglFramebuffer),Pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let Pn=0;Pn<Kt;Pn++)ke&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(P).__webglTexture,Y,ue+Pn),P.isDepthTexture?(Ce&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get($).__webglTexture,Y,J+Pn),N.blitFramebuffer(Jt,ce,Rt,Gt,I,z,Rt,Gt,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ce?N.copyTexSubImage3D(ct,Y,I,z,J+Pn,Jt,ce,Rt,Gt):N.copyTexSubImage2D(ct,Y,I,z,J+Pn,Jt,ce,Rt,Gt);Pt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ce?P.isDataTexture||P.isData3DTexture?N.texSubImage3D(ct,Y,I,z,J,Rt,Gt,Kt,Tt,mt,at.data):$.isCompressedArrayTexture?N.compressedTexSubImage3D(ct,Y,I,z,J,Rt,Gt,Kt,Tt,at.data):N.texSubImage3D(ct,Y,I,z,J,Rt,Gt,Kt,Tt,mt,at):P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Y,I,z,Rt,Gt,Tt,mt,at.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Y,I,z,at.width,at.height,Tt,at.data):N.texSubImage2D(N.TEXTURE_2D,Y,I,z,Rt,Gt,Tt,mt,at);N.pixelStorei(N.UNPACK_ROW_LENGTH,pt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Dt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,te),N.pixelStorei(N.UNPACK_SKIP_ROWS,xe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,he),Y===0&&$.generateMipmaps&&N.generateMipmap(ct),Pt.unbindTexture()},this.copyTextureToTexture3D=function(P,$,it=null,nt=null,Y=0){return P.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,nt=arguments[1]||null,P=arguments[2],$=arguments[3],Y=arguments[4]||0),Rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,$,it,nt,Y)},this.initRenderTarget=function(P){q.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),Pt.unbindTexture()},this.resetState=function(){E=0,w=0,C=null,Pt.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}}class Rc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new Rc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nx extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class io extends xn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=dn,h=dn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wh extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hs=new be,Xh=new be,Ea=[],qh=new bs,ix=new be,Er=new se,Tr=new mr;class fn extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ix)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),qh.copy(t.boundingBox).applyMatrix4(Hs),this.boundingBox.union(qh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),Tr.copy(t.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(n),t.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),Xh.multiplyMatrices(n,Hs),Er.matrixWorld=Xh,Er.raycast(t,Ea);for(let a=0,o=Ea.length;a<o;a++){const l=Ea[a];l.instanceId=r,l.object=this,e.push(l)}Ea.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new io(new Float32Array(s*this.count),s,this.count,to,ni));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class so extends ws{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Yh=new be,jl=new bc,Ta=new mr,Aa=new F;class Pc extends Oe{constructor(t=new De,e=new so){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,t.ray.intersectsSphere(Ta)===!1)return;Yh.copy(s).invert(),jl.copy(t.ray).applyMatrix4(Yh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let v=f,x=d;v<x;v++){const m=c.getX(v);Aa.fromBufferAttribute(u,m),$h(Aa,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let v=f,x=d;v<x;v++)Aa.fromBufferAttribute(u,v),$h(Aa,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $h(i,t,e,n,s,r,a){const o=jl.distanceSqToPoint(i);if(o<e){const l=new F;jl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ii extends xn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new St:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,s=[],r=[],a=[],o=new F,l=new be;for(let d=0;d<=t;d++){const v=d/t;s[d]=this.getTangentAt(v,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(cn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(cn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dc extends vi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new St){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class sx extends Dc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Lc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ca=new F,Xo=new Lc,qo=new Lc,Yo=new Lc;class Ic extends vi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ca.subVectors(s[0],s[1]).add(s[0]),c=Ca);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ca.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ca),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Xo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,v,x,m),qo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,v,x,m),Yo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,v,x,m)}else this.curveType==="catmullrom"&&(Xo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),qo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Yo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Xo.calc(l),qo.calc(l),Yo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function rx(i,t){const e=1-i;return e*e*t}function ax(i,t){return 2*(1-i)*i*t}function ox(i,t){return i*i*t}function Ur(i,t,e,n){return rx(i,t)+ax(i,e)+ox(i,n)}function lx(i,t){const e=1-i;return e*e*e*t}function cx(i,t){const e=1-i;return 3*e*e*i*t}function hx(i,t){return 3*(1-i)*i*i*t}function ux(i,t){return i*i*i*t}function Nr(i,t,e,n,s){return lx(i,t)+cx(i,e)+hx(i,n)+ux(i,s)}class af extends vi{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Nr(t,s.x,r.x,a.x,o.x),Nr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fx extends vi{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Nr(t,s.x,r.x,a.x,o.x),Nr(t,s.y,r.y,a.y,o.y),Nr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class of extends vi{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dx extends vi{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lf extends vi{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ur(t,s.x,r.x,a.x),Ur(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class px extends vi{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ur(t,s.x,r.x,a.x),Ur(t,s.y,r.y,a.y),Ur(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cf extends vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(jh(o,l.x,c.x,h.x,u.x),jh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new St().fromArray(s))}return this}}var Zl=Object.freeze({__proto__:null,ArcCurve:sx,CatmullRomCurve3:Ic,CubicBezierCurve:af,CubicBezierCurve3:fx,EllipseCurve:Dc,LineCurve:of,LineCurve3:dx,QuadraticBezierCurve:lf,QuadraticBezierCurve3:px,SplineCurve:cf});class mx extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Zl[s.type]().fromJSON(s))}return this}}class Kl extends mx{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new of(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new lf(this.currentPoint.clone(),new St(t,e),new St(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new af(this.currentPoint.clone(),new St(t,e),new St(n,s),new St(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new cf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Dc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Uc extends De{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=cn(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new F,f=new St,d=new F,v=new F,x=new F;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(v)}for(let y=0;y<=e;y++){const S=n+y*h*s,g=Math.sin(S),A=Math.cos(S);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*g,u.y=t[E].y,u.z=t[E].x*A,a.push(u.x,u.y,u.z),f.x=y/e,f.y=E/(t.length-1),o.push(f.x,f.y);const w=l[3*E+0]*g,C=l[3*E+1],M=l[3*E+0]*A;c.push(w,C,M)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){const g=S+y*t.length,A=g,E=g+t.length,w=g+t.length+1,C=g+1;r.push(A,E,C),r.push(w,C,E)}this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("uv",new de(o,2)),this.setAttribute("normal",new de(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.points,t.segments,t.phiStart,t.phiLength)}}class ro extends Uc{constructor(t=1,e=1,n=4,s=8){const r=new Kl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ro(t.radius,t.length,t.capSegments,t.radialSegments)}}class lr extends De{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new F,h=new St;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fe extends De{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let v=0;const x=[],m=n/2;let p=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(d,2));function y(){const g=new F,A=new F;let E=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const M=[],_=C/r,T=_*(e-t)+t;for(let D=0;D<=s;D++){const G=D/s,L=G*l+o,O=Math.sin(L),V=Math.cos(L);A.x=T*O,A.y=-_*n+m,A.z=T*V,u.push(A.x,A.y,A.z),g.set(O,w,V).normalize(),f.push(g.x,g.y,g.z),d.push(G,1-_),M.push(v++)}x.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){const _=x[M][C],T=x[M+1][C],D=x[M+1][C+1],G=x[M][C+1];(t>0||M!==0)&&(h.push(_,T,G),E+=3),(e>0||M!==r-1)&&(h.push(T,D,G),E+=3)}c.addGroup(p,E,0),p+=E}function S(g){const A=v,E=new St,w=new F;let C=0;const M=g===!0?t:e,_=g===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),v++;const T=v;for(let D=0;D<=s;D++){const L=D/s*l+o,O=Math.cos(L),V=Math.sin(L);w.x=M*V,w.y=m*_,w.z=M*O,u.push(w.x,w.y,w.z),f.push(0,_,0),E.x=O*.5+.5,E.y=V*.5*_+.5,d.push(E.x,E.y),v++}for(let D=0;D<s;D++){const G=A+D,L=T+D;g===!0?h.push(L,L+1,G):h.push(L+1,L,G),C+=3}c.addGroup(p,C,g===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class di extends Fe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new di(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qr extends De{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new F,g=new F,A=new F;for(let E=0;E<e.length;E+=3)d(e[E+0],S),d(e[E+1],g),d(e[E+2],A),l(S,g,A,y)}function l(y,S,g,A){const E=A+1,w=[];for(let C=0;C<=E;C++){w[C]=[];const M=y.clone().lerp(g,C/E),_=S.clone().lerp(g,C/E),T=E-C;for(let D=0;D<=T;D++)D===0&&C===E?w[C][D]=M:w[C][D]=M.clone().lerp(_,D/T)}for(let C=0;C<E;C++)for(let M=0;M<2*(E-C)-1;M++){const _=Math.floor(M/2);M%2===0?(f(w[C][_+1]),f(w[C+1][_]),f(w[C][_])):(f(w[C][_+1]),f(w[C+1][_+1]),f(w[C+1][_]))}}function c(y){const S=new F;for(let g=0;g<r.length;g+=3)S.x=r[g+0],S.y=r[g+1],S.z=r[g+2],S.normalize().multiplyScalar(y),r[g+0]=S.x,r[g+1]=S.y,r[g+2]=S.z}function h(){const y=new F;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const g=m(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;a.push(g,1-A)}v(),u()}function u(){for(let y=0;y<a.length;y+=6){const S=a[y+0],g=a[y+2],A=a[y+4],E=Math.max(S,g,A),w=Math.min(S,g,A);E>.9&&w<.1&&(S<.2&&(a[y+0]+=1),g<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,S){const g=y*3;S.x=t[g+0],S.y=t[g+1],S.z=t[g+2]}function v(){const y=new F,S=new F,g=new F,A=new F,E=new St,w=new St,C=new St;for(let M=0,_=0;M<r.length;M+=9,_+=6){y.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),g.set(r[M+6],r[M+7],r[M+8]),E.set(a[_+0],a[_+1]),w.set(a[_+2],a[_+3]),C.set(a[_+4],a[_+5]),A.copy(y).add(S).add(g).divideScalar(3);const T=m(A);x(E,_+0,y,T),x(w,_+2,S,T),x(C,_+4,g,T)}}function x(y,S,g,A){A<0&&y.x===1&&(a[S]=y.x-1),g.x===0&&g.z===0&&(a[S]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.vertices,t.indices,t.radius,t.details)}}class ao extends Qr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ao(t.radius,t.detail)}}class hf extends Kl{constructor(t){super(t),this.uuid=Ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Kl().fromJSON(s))}return this}}const gx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=uf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=yx(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let v=e;v<s;v+=e)u=i[v],f=i[v+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Vr(r,a,e,o,l,d,0),a}};function uf(i,t,e,n,s){let r,a;if(s===Lx(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Zh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Zh(r,i[r],i[r+1],a);return a&&oo(a,a.next)&&(Wr(a),a=a.next),a}function Ms(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(oo(e,e.next)||qe(e.prev,e,e.next)===0)){if(Wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Vr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Tx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?xx(i,n,s,r):vx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Wr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=_x(Ms(i),t,e),Vr(i,t,e,n,s,r,2)):a===2&&Mx(i,t,e,n,s,r):Vr(Ms(i),t,e,n,s,r,1);break}}}function vx(i){const t=i.prev,e=i,n=i.next;if(qe(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let v=n.next;for(;v!==t;){if(v.x>=h&&v.x<=f&&v.y>=u&&v.y<=d&&js(s,o,r,l,a,c,v.x,v.y)&&qe(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function xx(i,t,e,n){const s=i.prev,r=i,a=i.next;if(qe(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,v=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Jl(d,v,t,e,n),y=Jl(x,m,t,e,n);let S=i.prevZ,g=i.nextZ;for(;S&&S.z>=p&&g&&g.z<=y;){if(S.x>=d&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&js(o,h,l,u,c,f,S.x,S.y)&&qe(S.prev,S,S.next)>=0||(S=S.prevZ,g.x>=d&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==a&&js(o,h,l,u,c,f,g.x,g.y)&&qe(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&js(o,h,l,u,c,f,S.x,S.y)&&qe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;g&&g.z<=y;){if(g.x>=d&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==a&&js(o,h,l,u,c,f,g.x,g.y)&&qe(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function _x(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!oo(s,r)&&ff(s,n,n.next,r)&&Hr(s,r)&&Hr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Wr(n),Wr(n.next),n=i=r),n=n.next}while(n!==i);return Ms(n)}function Mx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rx(a,o)){let l=df(a,o);a=Ms(a,a.next),l=Ms(l,l.next),Vr(a,t,e,n,s,r,0),Vr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function yx(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=uf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Cx(c));for(s.sort(Sx),r=0;r<s.length;r++)e=bx(s[r],e);return e}function Sx(i,t){return i.x-t.x}function bx(i,t){const e=wx(i,t);if(!e)return t;const n=df(e,i);return Ms(n,n.next),Ms(e,e.next)}function wx(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&js(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Hr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Ex(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Ex(i,t){return qe(i.prev,i,t.prev)<0&&qe(t.next,i,i.next)<0}function Tx(i,t,e,n){let s=i;do s.z===0&&(s.z=Jl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ax(s)}function Ax(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Jl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Cx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function js(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Rx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Px(i,t)&&(Hr(i,t)&&Hr(t,i)&&Dx(i,t)&&(qe(i.prev,i,t.prev)||qe(i,t.prev,t))||oo(i,t)&&qe(i.prev,i,i.next)>0&&qe(t.prev,t,t.next)>0)}function qe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function oo(i,t){return i.x===t.x&&i.y===t.y}function ff(i,t,e,n){const s=Pa(qe(i,t,e)),r=Pa(qe(i,t,n)),a=Pa(qe(e,n,i)),o=Pa(qe(e,n,t));return!!(s!==r&&a!==o||s===0&&Ra(i,e,t)||r===0&&Ra(i,n,t)||a===0&&Ra(e,i,n)||o===0&&Ra(e,t,n))}function Ra(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Pa(i){return i>0?1:i<0?-1:0}function Px(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ff(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Hr(i,t){return qe(i.prev,i,i.next)<0?qe(i,t,i.next)>=0&&qe(i,i.prev,t)>=0:qe(i,t,i.prev)<0||qe(i,i.next,t)<0}function Dx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function df(i,t){const e=new Ql(i.i,i.x,i.y),n=new Ql(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Zh(i,t,e,n){const s=new Ql(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ql(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class zr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return zr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Kh(t),Jh(n,t);let a=t.length;e.forEach(Kh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Jh(n,e[l]);const o=gx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Kh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Jh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Nc extends De{constructor(t=new hf([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new de(s,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Ix;let S,g=!1,A,E,w,C;p&&(S=p.getSpacedPoints(h),g=!0,f=!1,A=p.computeFrenetFrames(h,!1),E=new F,w=new F,C=new F),f||(m=0,d=0,v=0,x=0);const M=o.extractPoints(c);let _=M.shape;const T=M.holes;if(!zr.isClockWise(_)){_=_.reverse();for(let ft=0,bt=T.length;ft<bt;ft++){const N=T[ft];zr.isClockWise(N)&&(T[ft]=N.reverse())}}const G=zr.triangulateShape(_,T),L=_;for(let ft=0,bt=T.length;ft<bt;ft++){const N=T[ft];_=_.concat(N)}function O(ft,bt,N){return bt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ft.clone().addScaledVector(bt,N)}const V=_.length,X=G.length;function k(ft,bt,N){let Bt,_t,Nt;const Pt=ft.x-bt.x,Zt=ft.y-bt.y,q=N.x-ft.x,R=N.y-ft.y,b=Pt*Pt+Zt*Zt,H=Pt*R-Zt*q;if(Math.abs(H)>Number.EPSILON){const j=Math.sqrt(b),Q=Math.sqrt(q*q+R*R),tt=bt.x-Zt/j,wt=bt.y+Pt/j,Mt=N.x-R/Q,At=N.y+q/Q,ee=((Mt-tt)*R-(At-wt)*q)/(Pt*R-Zt*q);Bt=tt+Pt*ee-ft.x,_t=wt+Zt*ee-ft.y;const yt=Bt*Bt+_t*_t;if(yt<=2)return new St(Bt,_t);Nt=Math.sqrt(yt/2)}else{let j=!1;Pt>Number.EPSILON?q>Number.EPSILON&&(j=!0):Pt<-Number.EPSILON?q<-Number.EPSILON&&(j=!0):Math.sign(Zt)===Math.sign(R)&&(j=!0),j?(Bt=-Zt,_t=Pt,Nt=Math.sqrt(b)):(Bt=Pt,_t=Zt,Nt=Math.sqrt(b/2))}return new St(Bt/Nt,_t/Nt)}const Z=[];for(let ft=0,bt=L.length,N=bt-1,Bt=ft+1;ft<bt;ft++,N++,Bt++)N===bt&&(N=0),Bt===bt&&(Bt=0),Z[ft]=k(L[ft],L[N],L[Bt]);const rt=[];let ot,Et=Z.concat();for(let ft=0,bt=T.length;ft<bt;ft++){const N=T[ft];ot=[];for(let Bt=0,_t=N.length,Nt=_t-1,Pt=Bt+1;Bt<_t;Bt++,Nt++,Pt++)Nt===_t&&(Nt=0),Pt===_t&&(Pt=0),ot[Bt]=k(N[Bt],N[Nt],N[Pt]);rt.push(ot),Et=Et.concat(ot)}for(let ft=0;ft<m;ft++){const bt=ft/m,N=d*Math.cos(bt*Math.PI/2),Bt=v*Math.sin(bt*Math.PI/2)+x;for(let _t=0,Nt=L.length;_t<Nt;_t++){const Pt=O(L[_t],Z[_t],Bt);ut(Pt.x,Pt.y,-N)}for(let _t=0,Nt=T.length;_t<Nt;_t++){const Pt=T[_t];ot=rt[_t];for(let Zt=0,q=Pt.length;Zt<q;Zt++){const R=O(Pt[Zt],ot[Zt],Bt);ut(R.x,R.y,-N)}}}const jt=v+x;for(let ft=0;ft<V;ft++){const bt=f?O(_[ft],Et[ft],jt):_[ft];g?(w.copy(A.normals[0]).multiplyScalar(bt.x),E.copy(A.binormals[0]).multiplyScalar(bt.y),C.copy(S[0]).add(w).add(E),ut(C.x,C.y,C.z)):ut(bt.x,bt.y,0)}for(let ft=1;ft<=h;ft++)for(let bt=0;bt<V;bt++){const N=f?O(_[bt],Et[bt],jt):_[bt];g?(w.copy(A.normals[ft]).multiplyScalar(N.x),E.copy(A.binormals[ft]).multiplyScalar(N.y),C.copy(S[ft]).add(w).add(E),ut(C.x,C.y,C.z)):ut(N.x,N.y,u/h*ft)}for(let ft=m-1;ft>=0;ft--){const bt=ft/m,N=d*Math.cos(bt*Math.PI/2),Bt=v*Math.sin(bt*Math.PI/2)+x;for(let _t=0,Nt=L.length;_t<Nt;_t++){const Pt=O(L[_t],Z[_t],Bt);ut(Pt.x,Pt.y,u+N)}for(let _t=0,Nt=T.length;_t<Nt;_t++){const Pt=T[_t];ot=rt[_t];for(let Zt=0,q=Pt.length;Zt<q;Zt++){const R=O(Pt[Zt],ot[Zt],Bt);g?ut(R.x,R.y+S[h-1].y,S[h-1].x+N):ut(R.x,R.y,u+N)}}}et(),dt();function et(){const ft=s.length/3;if(f){let bt=0,N=V*bt;for(let Bt=0;Bt<X;Bt++){const _t=G[Bt];kt(_t[2]+N,_t[1]+N,_t[0]+N)}bt=h+m*2,N=V*bt;for(let Bt=0;Bt<X;Bt++){const _t=G[Bt];kt(_t[0]+N,_t[1]+N,_t[2]+N)}}else{for(let bt=0;bt<X;bt++){const N=G[bt];kt(N[2],N[1],N[0])}for(let bt=0;bt<X;bt++){const N=G[bt];kt(N[0]+V*h,N[1]+V*h,N[2]+V*h)}}n.addGroup(ft,s.length/3-ft,0)}function dt(){const ft=s.length/3;let bt=0;Ct(L,bt),bt+=L.length;for(let N=0,Bt=T.length;N<Bt;N++){const _t=T[N];Ct(_t,bt),bt+=_t.length}n.addGroup(ft,s.length/3-ft,1)}function Ct(ft,bt){let N=ft.length;for(;--N>=0;){const Bt=N;let _t=N-1;_t<0&&(_t=ft.length-1);for(let Nt=0,Pt=h+m*2;Nt<Pt;Nt++){const Zt=V*Nt,q=V*(Nt+1),R=bt+Bt+Zt,b=bt+_t+Zt,H=bt+_t+q,j=bt+Bt+q;Vt(R,b,H,j)}}}function ut(ft,bt,N){l.push(ft),l.push(bt),l.push(N)}function kt(ft,bt,N){Xt(ft),Xt(bt),Xt(N);const Bt=s.length/3,_t=y.generateTopUV(n,s,Bt-3,Bt-2,Bt-1);Qt(_t[0]),Qt(_t[1]),Qt(_t[2])}function Vt(ft,bt,N,Bt){Xt(ft),Xt(bt),Xt(Bt),Xt(bt),Xt(N),Xt(Bt);const _t=s.length/3,Nt=y.generateSideWallUV(n,s,_t-6,_t-3,_t-2,_t-1);Qt(Nt[0]),Qt(Nt[1]),Qt(Nt[3]),Qt(Nt[1]),Qt(Nt[2]),Qt(Nt[3])}function Xt(ft){s.push(l[ft*3+0]),s.push(l[ft*3+1]),s.push(l[ft*3+2])}function Qt(ft){r.push(ft.x),r.push(ft.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ux(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Zl[s.type]().fromJSON(s)),new Nc(n,t.options)}}const Ix={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new St(r,a),new St(o,l),new St(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],v=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new St(a,1-l),new St(c,1-u),new St(f,1-v),new St(x,1-p)]:[new St(o,1-l),new St(h,1-u),new St(d,1-v),new St(m,1-p)]}};function Ux(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ds extends Qr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ds(t.radius,t.detail)}}class Xr extends Qr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xr(t.radius,t.detail)}}class Es extends De{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new F,v=new St;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),v.x=(d.x/e+1)/2,v.y=(d.y/e+1)/2,h.push(v.x,v.y)}u+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const y=p+m,S=y,g=y+n+1,A=y+n+2,E=y+1;o.push(S,g,E),o.push(g,A,E)}}this.setIndex(o),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class gi extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new F,f=new F,d=[],v=[],x=[],m=[];for(let p=0;p<=n;p++){const y=[],S=p/n;let g=0;p===0&&a===0?g=.5/e:p===n&&l===Math.PI&&(g=-.5/e);for(let A=0;A<=e;A++){const E=A/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+S*o),v.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+g,1-S),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const S=h[p][y+1],g=h[p][y],A=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&d.push(S,g,E),(p!==n-1||l<Math.PI)&&d.push(g,A,E)}this.setIndex(d),this.setAttribute("position",new de(v,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Js extends De{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new F,u=new F,f=new F;for(let d=0;d<=n;d++)for(let v=0;v<=s;v++){const x=v/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let v=1;v<=s;v++){const x=(s+1)*d+v-1,m=(s+1)*(d-1)+v-1,p=(s+1)*(d-1)+v,y=(s+1)*d+v;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Nx extends Xe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class zx extends ws{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Ie extends ws{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zc extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Fx extends zc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $o=new be,Qh=new F,tu=new F;class pf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qh),tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tu),e.updateMatrixWorld(),$o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($o)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const eu=new be,Ar=new F,jo=new F;class Ox extends pf{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ar.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ar),jo.copy(n.position),jo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(jo),n.updateMatrixWorld(),s.makeTranslation(-Ar.x,-Ar.y,-Ar.z),eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eu)}}class qr extends zc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ox}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kx extends pf{constructor(){super(new Tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bx extends zc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new kx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class mf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=nu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function nu(){return performance.now()}const iu=new be;class Gx{constructor(t,e,n=0,s=1/0){this.ray=new bc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return iu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iu),this}intersectObject(t,e=!0,n=[]){return tc(t,this,n,e),n.sort(su),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)tc(t[s],this,n,e);return n.sort(su),n}}function su(i,t){return i.distance-t.distance}function tc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)tc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);const vn=(i,t={})=>new Ie({color:i,flatShading:!0,...t});function Da(i){const t=i.map(a=>a.toNonIndexed()),e=t.reduce((a,o)=>a+o.attributes.position.count,0),n=new Float32Array(e*3);let s=0;for(const a of t)n.set(a.attributes.position.array,s),s+=a.attributes.position.array.length;const r=new De;return r.setAttribute("position",new ze(n,3)),r.computeVertexNormals(),r}function Vx(i,t,e,n,s,r){const a=r.id,{heightAt:o,pathDist:l,plinths:c}=t,h=t.lighthouse.pos,u=new Oe,f=new Lt,d=[],v=(B,lt,zt,Yt=2,ye=5)=>l(B,lt)>zt&&Math.hypot(B-h.x,lt-h.z)>ye&&!c.some(oe=>Math.hypot(oe.x-B,oe.z-lt)<Yt),x=(B,lt,zt=B*20)=>{const Yt=[];for(let ye=0;ye<zt&&Yt.length<B;ye++){const oe=(n()-.5)*104,Ge=(n()-.5)*104,Ve=o(oe,Ge);lt(oe,Ge,Ve)&&Yt.push({x:oe,z:Ge,h:Ve,r:n(),s:n()})}return Yt},m=(B,lt,zt,Yt,ye=!1)=>{const oe=new fn(B,lt,Math.max(1,zt.length));return oe.count=zt.length,zt.forEach((Ge,Ve)=>{Yt(Ge,Ve,oe),u.updateMatrix(),oe.setMatrixAt(Ve,u.matrix)}),oe.instanceColor&&(oe.instanceColor.needsUpdate=!0),oe.castShadow=ye,oe.receiveShadow=!0,i.add(oe),oe},p=(e.mobile?.55:1)*1.8,y=Da([-.5,0,.5].map(B=>{const lt=new di(.07,.55,3);return lt.translate(0,.27,0),lt.rotateZ(B*.5),lt.translate(B*.12,0,(B*B-.2)*.1),lt})),S=x(Math.round(280*p),(B,lt,zt)=>zt>.8&&v(B,lt,1.7,1.7,4.4));m(y,vn("#ffffff"),S,(B,lt,zt)=>{u.position.set(B.x,B.h-.05,B.z),u.rotation.set(0,B.r*6,0),u.scale.setScalar(.8+B.s*.7),zt.setColorAt(lt,f.set(a==="vinter"?B.s<.5?"#c8d4c0":"#e6eef4":a==="vulkan"?B.s<.5?"#5a6a3a":"#7a7a4a":B.s<.5?"#7fae4e":"#9cc45e"))});const g=x(Math.round((a==="vinter"?0:a==="vulkan"?30:120)*p),(B,lt,zt)=>zt>.85&&v(B,lt,1.9,2,4.5)),A=new Fe(.025,.03,.4,4);A.translate(0,.2,0);const E=new ds(.11,0);E.translate(0,.42,0);const w=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];m(A,vn("#5f8f3a"),g,B=>{u.position.set(B.x,B.h-.03,B.z),u.rotation.set(0,0,0),u.scale.setScalar(.9+B.s*.6)}),m(E,vn("#ffffff"),g,(B,lt,zt)=>{u.position.set(B.x,B.h-.03,B.z),u.scale.setScalar(.9+B.s*.6),zt.setColorAt(lt,f.set(w[Math.floor(B.r*w.length)]))});const C=x(Math.round((a==="tak"?36:0)*p),(B,lt,zt)=>zt>1&&v(B,lt,2.4,2.4,5)),M=new gi(.22,8,4,0,Math.PI*2,0,Math.PI/2);M.scale(1,.7,1),M.translate(0,.28,0);const _=new Fe(.07,.09,.3,6);_.translate(0,.14,0),m(_,vn("#f4ead6"),C,B=>{u.position.set(B.x,B.h-.03,B.z),u.rotation.set(0,0,(B.r-.5)*.3),u.scale.setScalar(.8+B.s)},!0),m(M,vn("#ffffff"),C,(B,lt,zt)=>{u.position.set(B.x,B.h-.03,B.z),u.rotation.set(0,0,(B.r-.5)*.3),u.scale.setScalar(.8+B.s),zt.setColorAt(lt,f.set(B.r<.6?"#d8453a":"#c89a5a"))},!0);const T=Da([[-.08,0],[.07,.05],[0,-.07]].map(([B,lt],zt)=>{const Yt=new di(.04,1.1+zt*.2,3);return Yt.translate(B,.55+zt*.1,lt),Yt}).concat([(()=>{const B=new ro(.05,.18,2,4);return B.translate(.07,1.25,.05),B})()])),D=x(Math.round(150*p),(B,lt,zt)=>zt>.05&&zt<.55&&v(B,lt,2.2,2,5),6e3),G=m(T,vn(a==="vinter"?"#a89878":a==="vulkan"?"#5a5a3a":"#9aa856"),D,B=>{u.position.set(B.x,B.h-.1,B.z),u.rotation.set(0,B.r*6,0),u.scale.setScalar(.8+B.s*.6)}),L=[],O=[];for(const B of t.paths)for(const lt of[-1,1]){let zt=null,Yt=0,ye=0;for(let oe=2;oe<B.length-7;oe+=1.7){const Ge=oe/B.length,Ve=B.curve.getPointAt(Ge),Ye=B.curve.getTangentAt(Ge),pn=Ve.x-Ye.z*lt*2.25,Te=Ve.z+Ye.x*lt*2.25,zn=o(pn,Te);if(!(zn>.5&&ye<=0&&v(pn,Te,1.9,2.6,6))){zt=null,ye>0&&ye--;continue}L.push({x:pn,z:Te,h:zn}),zt&&O.push({a:zt,b:{x:pn,z:Te,h:zn}}),zt={x:pn,z:Te,h:zn},++Yt>4+Math.floor(n()*5)&&(Yt=0,zt=null,ye=3+Math.floor(n()*5))}}const V=new An(.14,.8,.14);V.translate(0,.4,0);const X=new An(1,.07,.06),k=vn("#a07650");m(V,k,L,B=>{u.position.set(B.x,B.h-.05,B.z),u.rotation.set(0,n()*.3,(n()-.5)*.12),u.scale.set(1,1,1)},!0);const Z=O.flatMap(B=>[{...B,y:.32},{...B,y:.62}]);m(X,k,Z,({a:B,b:lt,y:zt})=>{const Yt=Math.hypot(lt.x-B.x,lt.z-B.z);u.position.set((B.x+lt.x)/2,(B.h+lt.h)/2+zt-.05,(B.z+lt.z)/2),u.rotation.set(0,-Math.atan2(lt.z-B.z,lt.x-B.x),0),u.scale.set(Yt,1,1)},!0);const rt=r.dockTheta??-2.35,ot=new St(Math.cos(rt),Math.sin(rt)),Et=s(rt);let jt=Et-6;for(let B=Et-10;B<Et+4;B+=.25)if(o(ot.x*B,ot.y*B)<.3){jt=B;break}const et=new ve,dt=vn("#b48a5e"),Ct=vn("#6e4a2c"),ut=8,kt=jt-2.5;for(let B=0;B<ut/.55;B++){const lt=new se(new An(.5,.12,2.2),dt);lt.position.set(kt+B*.55,.75+(n()-.5)*.04,0),lt.rotation.y=(n()-.5)*.05,lt.castShadow=lt.receiveShadow=!0,et.add(lt)}for(let B=0;B<=ut;B+=2)for(const lt of[-1,1]){const zt=new se(new Fe(.12,.12,2.2,6),Ct);zt.position.set(kt+B,.1,lt*1.05),zt.castShadow=!0,et.add(zt)}et.rotation.y=-rt,i.add(et);const Vt=new ve,Xt=new Fe(.9,.9,3.4,10,1,!0,0,Math.PI);Xt.rotateZ(Math.PI/2),Xt.rotateX(Math.PI/2),Xt.scale(1,.6,.7);const Qt=new se(Xt,vn("#3f6f9a",{side:je}));Qt.rotation.y=Math.PI/2,Qt.castShadow=!0,Vt.add(Qt);for(const B of[-.6,.6]){const lt=new se(new An(.3,.08,1.2),dt);lt.position.set(B,-.15,0),Vt.add(lt)}const ft=new se(new An(2.4,.06,.12),dt);ft.position.set(.2,.05,.4),ft.rotation.y=.3,Vt.add(ft);const bt=ot.x*(kt+ut-1)+-ot.y*2.1,N=ot.y*(kt+ut-1)+ot.x*2.1;Vt.position.set(bt,.3,N),Vt.rotation.y=-rt,i.add(Vt);const Bt=new ve,_t=new se(new Hn(3,1.4,10,5),new Ee({color:"#4a3a2a",wireframe:!0}));_t.position.y=1;const Nt=_t.geometry.attributes.position;for(let B=0;B<Nt.count;B++)Nt.setZ(B,Math.sin(Nt.getX(B)/3*Math.PI+1.5)*.15-Math.abs(Nt.getY(B))*.05);Bt.add(_t);for(const B of[-1.6,1.6]){const lt=new se(new Fe(.07,.09,2,5),Ct);lt.position.set(B,.9,0),lt.castShadow=!0,Bt.add(lt)}for(let B=0;B<5;B++){const lt=new se(new gi(.09,6,4),vn("#f0a43a"));lt.position.set(-1.2+B*.6,1.66,.05),Bt.add(lt)}const Pt=jt-4.5,Zt=4.2,q=ot.x*Pt-ot.y*Zt,R=ot.y*Pt+ot.x*Zt;Bt.position.set(q,o(q,R)-.1,R),Bt.rotation.y=-rt+Math.PI/2,i.add(Bt),d.push({x:q,z:R,r:1.4});const b=new Fe(.42,.42,.95,10);b.translate(0,.47,0);const H=new Fe(.44,.44,.08,10),j=new An(.8,.8,.8);j.translate(0,.4,0);const Q=[],tt=(B,lt,zt,Yt)=>{for(let ye=0;ye<60&&zt>0;ye++){const oe=B+(n()-.5)*6,Ge=lt+(n()-.5)*6,Ve=o(oe,Ge);Ve<.4||!v(oe,Ge,2.3,2.4,4.6)||Q.some(Ye=>Math.hypot(Ye.x-oe,Ye.z-Ge)<1.1)||(Q.push({x:oe,z:Ge,h:Ve,kind:Yt??(n()<.6?"barrel":"crate"),r:n()}),zt--)}};tt(ot.x*(jt-2.5),ot.y*(jt-2.5),5),tt(h.x+6,h.z+1,3,"barrel"),tt(h.x-6,h.z+2,2);const wt=Q.filter(B=>B.kind==="barrel"),Mt=Q.filter(B=>B.kind==="crate");m(b,vn("#8a5a36"),wt,B=>{u.position.set(B.x,B.h-.05,B.z),u.rotation.set(0,B.r*6,0),u.scale.setScalar(1)},!0),m(H,vn("#3e3a38"),wt.flatMap(B=>[{...B,y:.2},{...B,y:.75}]),B=>{u.position.set(B.x,B.h-.05+B.y,B.z)},!1),m(j,vn("#b8925e"),Mt,B=>{u.position.set(B.x,B.h-.05,B.z),u.rotation.set(0,B.r*6,0),u.scale.setScalar(.8+B.r*.4)},!0);for(const B of Q)d.push({x:B.x,z:B.z,r:.55});const At=x(Math.round(380*p),(B,lt,zt)=>zt>.9&&v(B,lt,1.6,1.6,4.4)),ee=new ds(.06,0);ee.translate(0,.06,0),m(ee,new Ie({color:a==="vulkan"?"#ff9a5a":"#fffdf4"}),At,B=>{u.position.set(B.x,B.h-.02,B.z),u.rotation.set(0,0,0),u.scale.setScalar(.8+B.s*.8)});const yt=(B,lt,zt)=>{const Yt=[];for(let ye=0;ye<B*40&&Yt.length<B;ye++){const oe=(n()-.5)*130,Ge=(n()-.5)*130,Ve=o(oe,Ge),Ye=.05-Ve;Ye>lt&&Ye<zt&&Math.hypot(oe-h.x,Ge-h.z)>6&&Yt.push({x:oe,z:Ge,h:Ve,r:n(),s:n()})}return Yt},Ht=Da([0,1,2].map(B=>{const lt=new di(.08,.9+B*.25,3);return lt.translate((B-1)*.12,.45+B*.12,B%2*.1),lt.rotateZ((B-1)*.25),lt})),ne=yt(Math.round(90*p),.35,1.8),ie=m(Ht,vn("#4f9a5a"),ne,B=>{u.position.set(B.x,B.h,B.z),u.rotation.set(0,B.r*6,0),u.scale.setScalar(.8+B.s*.7)}),qt=Da([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([B,lt,zt])=>{const Yt=new ds(zt,0);return Yt.translate(B,zt*.8,lt),Yt})),pe=yt(Math.round((a==="tak"?28:0)*p),.5,1.6),re=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];m(qt,vn("#ffffff"),pe,(B,lt,zt)=>{u.position.set(B.x,B.h,B.z),u.rotation.set(0,B.r*6,0),u.scale.setScalar(.8+B.s*.9),zt.setColorAt(lt,f.set(re[Math.floor(B.r*re.length)]))});const _e=new Xr(.16,0);_e.scale(.45,.3,1.4);const W=yt(e.mobile?5:8,.9,2.6).map(B=>({...B,rad:2+B.s*3,speed:(.25+B.r*.3)*(B.r<.5?1:-1)})),It=9,st=new fn(_e,new Ee({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,W.length*It));st.count=W.length*It,st.renderOrder=1,i.add(st);const vt=Array.from({length:It},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),Ft=B=>{Vt.position.y=.3+Math.sin(B*1.2)*.08,Vt.rotation.z=Math.sin(B*.9)*.04,Vt.rotation.x=Math.sin(B*1.3+1)*.03,W.forEach((lt,zt)=>{const Yt=B*lt.speed+lt.r*6,ye=lt.x+Math.cos(Yt)*lt.rad,oe=lt.z+Math.sin(Yt)*lt.rad,Ge=Math.atan2(-Math.sin(Yt)*lt.speed,Math.cos(Yt)*lt.speed);for(let Ve=0;Ve<It;Ve++){const[Ye,pn,Te,zn]=vt[Ve];u.position.set(ye+Ye+Math.sin(B*2+zn)*.1,Math.max(o(ye,oe)+.25,-.75)+pn,oe+Te),u.rotation.set(0,Ge+Math.sin(B*6+zn)*.15,0),u.scale.setScalar(1),u.updateMatrix(),st.setMatrixAt(zt*It+Ve,u.matrix)}}),st.instanceMatrix.needsUpdate=!0,!((B*60|0)%2)&&(D.forEach((lt,zt)=>{u.position.set(lt.x,lt.h-.1,lt.z),u.rotation.set(Math.sin(B*1.7+lt.x*.3)*.08,lt.r*6,Math.cos(B*1.4+lt.z*.3)*.08),u.scale.setScalar(.8+lt.s*.6),u.updateMatrix(),G.setMatrixAt(zt,u.matrix)}),G.instanceMatrix.needsUpdate=!0,ne.forEach((lt,zt)=>{u.position.set(lt.x,lt.h,lt.z),u.rotation.set(Math.sin(B*1.1+lt.x)*.12,lt.r*6,Math.cos(B*.9+lt.z)*.12),u.scale.setScalar(.8+lt.s*.7),u.updateMatrix(),ie.setMatrixAt(zt,u.matrix)}),ie.instanceMatrix.needsUpdate=!0)};et.updateMatrixWorld(!0);const Ut=[];return et.children.forEach(B=>{if(B.geometry.type==="CylinderGeometry"){const lt=B.getWorldPosition(new F);Ut.push({x:lt.x,z:lt.z,r:.15})}}),Ut.push({x:bt,z:N,r:.9}),{colliders:d,update:Ft,obstacles:Ut}}function ru(i,{heightTex:t,ext:e,grid:n,quality:s,sunDir:r,colors:a,level:o=.05,size:l=220,center:c=[0,0],maxDepth:h=100}){const u=ti.merge([Ot.fog,{uTime:{value:0},uHeight:{value:t},uExt:{value:e},uGrid:{value:n},uLevel:{value:o},uMaxDepth:{value:h},uShallow:{value:new Lt(a.shallow)},uMid:{value:new Lt(a.mid)},uDeep:{value:new Lt(a.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*a.caustic}}]);u.uHeight.value=t;const f=new Xe({uniforms:u,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
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
      }`}),d=l<50?8:s.mobile?40:64,v=new Hn(l,l,d,d);v.rotateX(-Math.PI/2);const x=new se(v,f);return x.position.set(c[0],o,c[1]),x.renderOrder=2,i.add(x),{mesh:x,update(m){u.uTime.value=m}}}function au(i,t){const e=new io(Float32Array.from(i),t,t,to,ni);return e.magFilter=e.minFilter=dn,e.generateMipmaps=!1,e.needsUpdate=!0,e}const ec={uOlPx:{value:2},uOlRes:{value:new St(1,1)},uInk:{value:new Lt("#1f1a1c")}},Hx=.16,Wx=.65,nc={rock:new Set,tree:new Set,tower:new Set,figure:new Set},ic={rock:!0,tree:!0,tower:!0,figure:!0};function Xx(i,t,e,n){ec.uOlPx.value=i*t,ec.uOlRes.value.set(Math.max(1,e*t),Math.max(1,n*t))}function gf(i){for(const t in nc)ic[t]=!!i[t],nc[t].forEach(e=>e.visible=ic[t])}function vf(i){if(i.attributes.olNormal)return;i.attributes.normal||i.computeVertexNormals();const t=i.attributes.position,e=i.attributes.normal,n=t.count,s=new Map,r=new Array(n);for(let o=0;o<n;o++){const l=`${Math.round(t.getX(o)*1e4)},${Math.round(t.getY(o)*1e4)},${Math.round(t.getZ(o)*1e4)}`;r[o]=l;const c=s.get(l)||[0,0,0];c[0]+=e.getX(o),c[1]+=e.getY(o),c[2]+=e.getZ(o),s.set(l,c)}const a=new Float32Array(n*3);for(let o=0;o<n;o++){const l=s.get(r[o]),c=Math.hypot(l[0],l[1],l[2])||1;a[o*3]=l[0]/c,a[o*3+1]=l[1]/c,a[o*3+2]=l[2]/c}i.setAttribute("olNormal",new ze(a,3))}const Zo=new Map;function xf(i,t,e,n){const s=`${i?i.uuid:"batch"}|${t}|${e}|${n}`;if(Zo.has(s))return Zo.get(s);const r=new Ee({side:En,vertexColors:e});return r.color.copy(e||!i?new Lt(1,1,1):i.color).multiplyScalar(Hx),r.visible=ic[t],r.onBeforeCompile=a=>{Object.assign(a.uniforms,ec),a.vertexShader=`attribute vec3 olNormal;
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
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, ${Wx.toFixed(2)});`),n&&(a.uniforms.uKeep=cr.uKeep,a.uniforms.uRad=cr.uRad,a.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+a.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
          if (k > 0.0 && vOlZ < uKeep.z + 0.8) { // kronen ligger ~2 enheter nærmere kameraet enn foten
            float b = mod(floor(gl_FragCoord.x) + 2.0 * floor(gl_FragCoord.y), 4.0) / 4.0;
            if (k * 0.9 > b + 0.05) discard;
          }
        }`))},r.customProgramCacheKey=()=>`ol${n?"f":""}`,nc[t].add(r),Zo.set(s,r),r}const _f=i=>{const t=i.material;return i.isMesh&&!Array.isArray(t)&&(t.isMeshLambertMaterial||t.isMeshStandardMaterial)&&!t.transparent&&t.side!==je};function Mf(i,t,e=!1){if(!_f(i))return null;vf(i.geometry);const n=!!(i.material.vertexColors&&i.geometry.attributes.color),s=new fn(i.geometry,xf(i.material,t,n,e),i.instanceMatrix.count);return s.instanceMatrix=i.instanceMatrix,s.count=i.count,s.frustumCulled=!1,s.renderOrder=1,s.onBeforeRender=()=>{s.count=i.count},i.add(s),s}const ou=512,lu=new Map;let sc=null;function qx(i){sc=i}function Yx(i,t){const e=`${i.uuid}|${t}`;let n=lu.get(e);if(n)return n;vf(i);const s=new fn(i,xf(null,t,!1,!1),ou);return s.instanceMatrix.setUsage(Zc),s.setColorAt(0,new Lt),s.instanceColor.setUsage(Zc),s.count=0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.renderOrder=1,s.raycast=()=>{},n={mesh:s,parts:[]},s.onBeforeRender=()=>{const r=s.instanceMatrix.array,a=s.instanceColor.array;let o=0;for(let l=n.parts.length-1;l>=0;l--){const c=n.parts[l];let h=c,u=!0;for(;h.parent;){if(!h.visible){u=!1;break}h=h.parent}if(h!==sc){++c.userData.olMiss>300&&n.parts.splice(l,1);continue}if(c.userData.olMiss=0,!u||o>=ou)continue;r.set(c.matrixWorld.elements,o*16);const f=c.material.color;a[o*3]=f.r,a[o*3+1]=f.g,a[o*3+2]=f.b,o++}s.count=o,o&&(s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,o*16),s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,o*3),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0)},sc.add(s),lu.set(e,n),n}function lo(i,t){return i.traverse(e=>{!_f(e)||e.userData.noOutline||(e.userData.olMiss=0,Yx(e.geometry,t).parts.push(e))}),i}function ys(i){const t=i.map(([u])=>u.index?u.toNonIndexed():u),e=t.reduce((u,f)=>u+f.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Lt,a=new F;let o=0;t.forEach((u,f)=>{const d=i[f][1],v=u.attributes.position;for(let x=0;x<v.count;x++)a.fromBufferAttribute(v,x),d(a,r),n.set([a.x,a.y,a.z],(o+x)*3),s.set([r.r,r.g,r.b],(o+x)*3);o+=v.count});const l=new De;l.setAttribute("position",new ze(n,3)),l.setAttribute("color",new ze(s,3)),l.computeVertexNormals();let c=0;const h=l.attributes.normal;return t.forEach((u,f)=>{const d=i[f][2],v=u.attributes.position.count;if(d)for(let x=0;x<v;x++)a.fromBufferAttribute(l.attributes.position,c+x).sub(d).normalize(),h.setXYZ(c+x,a.x,a.y,a.z);c+=v}),l}const rc=.7,ac=3.8;function $x(){const i=[],e=ac/8,n=new Lt("#7a5434"),s=new Lt("#a57a4e");for(let r=0;r<8;r++){const a=r/8,o=(r+1)/8,l=.24-a*.08,c=.24-o*.08,h=new Fe(c,l*1.12,e,7,1),u=h.attributes.position;for(let f=0;f<u.count;f++){const d=u.getY(f)+e/2+r*e,v=d/ac;u.setXYZ(f,u.getX(f)+rc*v*v,d,u.getZ(f))}i.push([h,(f,d)=>d.copy(n).lerp(s,f.y/e%1)])}return ys(i)}function jx(i){const n=[],s=[];for(let a=0;a<=12;a++){const o=a/12;s.push(new F(0,.35*o-1.25*o*o,o*2.7))}for(let a=0;a<12;a++){const o=a/12,l=s[a],c=s[a+1],h=.62*Math.sin(Math.PI*Math.min(1,o*1.1+.08))+.05;for(const u of[-1,1]){const f=new F(u*h,l.y-.08-h*.25,l.z+.32);n.push(l.x,l.y,l.z,c.x,c.y,c.z,f.x,f.y,f.z)}}const r=new De;return r.setAttribute("position",new de(n,3)),r}function Zx(){const i=[],t=new Lt("#3f8a3a"),e=new Lt("#9ad25a"),n=8;for(let s=0;s<n;s++){const r=jx();r.rotateX(-.15+s%2*.25),r.rotateY(s/n*Math.PI*2+s%2*.2),i.push([r,(a,o)=>{const l=Math.hypot(a.x,a.z);o.copy(t).lerp(e,Math.min(1,l/2.4))}])}for(let s=0;s<3;s++){const r=new gi(.16,6,4);r.translate(Math.cos(s*2.1)*.18,-.2,Math.sin(s*2.1)*.18),i.push([r,(a,o)=>o.set("#6b4a2a")])}return ys(i)}function cu(i,t,e){const n=i.map(([s,r,a,o],l)=>{const c=new ds(o,2),h=c.attributes.position;for(let u=0;u<h.count;u++){const f=h.getX(u),d=h.getY(u),v=h.getZ(u),x=1+.07*Math.sin(f*7+l)*Math.sin(d*6)+.05*Math.sin(v*9+d*4);h.setXYZ(u,f*x,d*x*.92,v*x)}return c.translate(s,r,a),[c,(u,f)=>f.copy(e).lerp(t,Le.smoothstep(u.y,r-o*.6,r+o*.9)),new F(s,r,a)]});return ys(n)}function Kx(i){const t=[],e=new Lt("#2f6a48"),n=new Lt("#4a8a5a"),s=new Lt("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,a,o])=>{const l=new di(r,a,10,2),c=l.attributes.position;for(let h=0;h<c.count;h++)c.getY(h)<-a/2+.01&&c.setY(h,c.getY(h)+Math.sin(h*1.7)*.12);l.translate(0,o,0),t.push([l,(h,u)=>{const f=(h.y-o+a/2)/a;u.copy(e).lerp(n,f),i&&f>.12&&u.lerp(s,Math.min(1,(f-.12)*2.6))}])}),ys(t)}function Jx(){const i=[],t=new Fe(.12,.26,3,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getY(n);e.setX(n,e.getX(n)+Math.sin(s*1.7)*.12)}return t.translate(0,1.5,0),i.push([t,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,a])=>{const o=new Fe(.03,.08,a,4);o.translate(0,a/2,0),o.rotateZ(r),o.translate(n*.3,s,0),i.push([o,(l,c)=>c.set("#2e2622")])}),ys(i)}const cr={uKeep:{value:new F(-1e4,-1e4,0)},uRad:{value:120}};function hu(i){return i.onBeforeCompile=t=>{t.uniforms.uKeep=cr.uKeep,t.uniforms.uRad=cr.uRad,t.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+t.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      {
        float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
        if (k > 0.0 && -vViewPosition.z < uKeep.z - 1.2) {
          float b = mod(floor(gl_FragCoord.x) + 2.0 * floor(gl_FragCoord.y), 4.0) / 4.0;
          if (k * 0.9 > b + 0.05) discard;
        }
      }`)},i}function Qx(i,t,e,n){const s=t.filter(L=>L.kind==="palm"),r=t.filter(L=>L.kind==="round"),a=t.filter(L=>L.kind==="bush"),o=t.filter(L=>L.kind==="pine"),l=t.filter(L=>L.kind==="dead"),c=hu(new Ie({vertexColors:!0})),h=hu(new Ie({vertexColors:!0,side:je})),u=new Lt(n.trees.leaf[0]),f=new Lt(n.trees.leaf[1]),d=new Fe(.16,.26,1.6,7);d.translate(0,.8,0);const v=ys([[d,(L,O)=>O.set("#7a5434")]]),x=cu([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],u,f),m=cu([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],u,f),p=(L,O,V)=>{const X=new fn(L,O,Math.max(1,V));return X.count=V,X.castShadow=!0,X.receiveShadow=!0,i.add(X),Mf(X,"tree",!0),X},y=p($x(),c,s.length),S=p(Zx(),h,s.length),g=p(v,c,r.length),A=p(x,c,r.length),E=p(m,c,a.length),w=new Fe(.14,.22,1.2,6);w.translate(0,.6,0);const C=p(ys([[w,(L,O)=>O.set("#5a3e2a")]]),c,o.length),M=p(Kx(n.id==="vinter"),c,o.length),_=p(Jx(),c,l.length),T=new Oe;s.forEach((L,O)=>{T.position.set(L.x,L.y-.1,L.z),T.rotation.set(0,L.phase,0),T.scale.setScalar(L.s),T.updateMatrix(),y.setMatrixAt(O,T.matrix)}),r.forEach((L,O)=>{T.position.set(L.x,L.y-.1,L.z),T.rotation.set(0,L.phase,0),T.scale.setScalar(L.s),T.updateMatrix(),g.setMatrixAt(O,T.matrix)}),o.forEach((L,O)=>{T.position.set(L.x,L.y-.1,L.z),T.rotation.set(0,L.phase,0),T.scale.setScalar(L.s),T.updateMatrix(),C.setMatrixAt(O,T.matrix)}),l.forEach((L,O)=>{T.position.set(L.x,L.y-.1,L.z),T.rotation.set(0,L.phase,(L.phase%1-.5)*.15),T.scale.setScalar(L.s),T.updateMatrix(),_.setMatrixAt(O,T.matrix)});const D=L=>{s.forEach((O,V)=>{const X=Math.cos(O.phase),k=Math.sin(O.phase);T.position.set(O.x+rc*X*O.s,O.y-.1+ac*O.s,O.z-rc*k*O.s),T.rotation.set(Math.sin(L*1.2+O.phase)*.07,O.phase+Math.sin(L*.7+O.phase)*.05,Math.cos(L*1+O.phase)*.07),T.scale.setScalar(O.s),T.updateMatrix(),S.setMatrixAt(V,T.matrix)}),S.instanceMatrix.needsUpdate=!0,r.forEach((O,V)=>{T.position.set(O.x,O.y-.1,O.z),T.rotation.set(Math.sin(L*1.1+O.phase)*.025,O.phase,Math.cos(L*.9+O.phase)*.025),T.scale.setScalar(O.s),T.updateMatrix(),A.setMatrixAt(V,T.matrix)}),A.instanceMatrix.needsUpdate=!0,a.forEach((O,V)=>{const X=1+Math.sin(L*1.6+O.phase)*.035;T.position.set(O.x,O.y-.12,O.z),T.rotation.set(0,O.phase,0),T.scale.set(O.s*X,O.s/X,O.s*X),T.updateMatrix(),E.setMatrixAt(V,T.matrix)}),E.instanceMatrix.needsUpdate=!0,o.forEach((O,V)=>{T.position.set(O.x,O.y-.1,O.z),T.rotation.set(Math.sin(L*.9+O.phase)*.02,O.phase,Math.cos(L*.8+O.phase)*.02),T.scale.setScalar(O.s),T.updateMatrix(),M.setMatrixAt(V,T.matrix)}),M.instanceMatrix.needsUpdate=!0};return D(0),{colliders:[...s.map(L=>({x:L.x,z:L.z,r:.35*L.s})),...r.map(L=>({x:L.x,z:L.z,r:.4*L.s})),...a.map(L=>({x:L.x,z:L.z,r:.7*L.s})),...o.map(L=>({x:L.x,z:L.z,r:.4*L.s})),...l.map(L=>({x:L.x,z:L.z,r:.3*L.s}))],update:D}}function Ko(i,t=5){const e=[],n=[],s=new Lt,r=new Lt;for(let o=0;o<t;o++){const l=i()*Math.PI*2,c=i()*.16,h=.28+i()*.3,u=.04+i()*.03,f=Math.cos(l)*c,d=Math.sin(l)*c,v=(i()-.5)*.25,x=i()*Math.PI,m=Math.cos(x)*u,p=Math.sin(x)*u;e.push(f-m,0,d-p,f+m,0,d+p,f+Math.cos(l)*v,h,d+Math.sin(l)*v),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const a=new De;return a.setAttribute("position",new de(e,3)),a.setAttribute("color",new de(n,3)),a.setAttribute("normal",new de(new Array(e.length/3).fill(0).flatMap(()=>[0,1,0]),3)),a}function t_(){const i=[];for(let a=0;a<3;a++){const o=new gi(.07,6,3);o.scale(1,.25,1.15);const l=a*2.094;o.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(o.toNonIndexed())}const t=i.reduce((a,o)=>a+o.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const a of i)e.set(a.attributes.position.array,s*3),n.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count;const r=new De;return r.setAttribute("position",new ze(e,3)),r.setAttribute("normal",new ze(n,3)),r}function e_(i,t,e,n,s){const{heightAt:r,pathDist:a,plinths:o}=t,l=t.lighthouse.pos,c={uTime:{value:0}},u=(T=>(T.onBeforeCompile=D=>{D.uniforms.uTime=c.uTime,D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),D.fragmentShader=D.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},T))(new Ie({vertexColors:!0,side:je})),f=new Ie({color:"#ffffff"}),d=[Ko(s,7),Ko(s,8),Ko(s,6)],v=t_(),x={tak:{grass:["#3f8a3a","#6fbf4a"],density:1,clover:.22,cloverCol:["#3a8a3a","#5aa84a"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(e.mobile?.45:1)*x.density,p=13,y=8,S=Math.round(720*m),g=[],A=new Oe,E=new Lt,w=new Lt(x.grass[0]),C=new Lt(x.grass[1]),M=(T,D,G)=>{if(G<.72)return!1;const L=a(T,D);if(L<1||L<1.7&&s()<.6||Math.hypot(T-l.x,D-l.z)<4.3||n.volcano&&Math.hypot(T-n.volcano.x,D-n.volcano.z)<n.volcano.r*.7)return!1;for(const O of o)if((O.x-T)**2+(O.z-D)**2<2.6)return!1;return!t.extrasBlock||!t.extrasBlock(T,D)};for(let T=0;T<y;T++)for(let D=0;D<y;D++){const G=-y*p/2+T*p,L=-y*p/2+D*p;for(const[O,V]of[[0,S*.4],[1,S*.35],[2,S*.25]]){const X=[];for(let Z=0;Z<V*3&&X.length<V;Z++){const rt=G+s()*p,ot=L+s()*p,Et=r(rt,ot);M(rt,ot,Et)&&X.push([rt,ot,Et])}if(!X.length)continue;const k=new fn(d[O],u,X.length);k.userData.tier=O,X.forEach(([Z,rt,ot],Et)=>{A.position.set(Z,ot-.04,rt),A.rotation.set(0,s()*6.28,0),A.scale.setScalar(.8+s()*.7),A.updateMatrix(),k.setMatrixAt(Et,A.matrix),k.setColorAt(Et,E.copy(w).lerp(C,s()))}),k.receiveShadow=!0,k.computeBoundingSphere(),i.add(k),g.push(k)}if(x.clover>0){const O=[],V=G+s()*p,X=L+s()*p;for(let k=0;k<S*x.clover*3&&O.length<S*x.clover;k++){const Z=V+(s()-.5)*6,rt=X+(s()-.5)*6,ot=r(Z,rt);M(Z,rt,ot)&&O.push([Z,rt,ot])}if(O.length){const k=new fn(v,f,O.length),Z=new Lt(x.cloverCol[0]),rt=new Lt(x.cloverCol[1]);O.forEach(([ot,Et,jt],et)=>{A.position.set(ot,jt-.02,Et),A.rotation.set(0,s()*6.28,0),A.scale.setScalar(.8+s()*.8),A.updateMatrix(),k.setMatrixAt(et,A.matrix),k.setColorAt(et,E.copy(Z).lerp(rt,s()))}),k.receiveShadow=!0,k.userData.tier=1,k.computeBoundingSphere(),i.add(k),g.push(k)}}}return{update(T){c.uTime.value=T},setLevel:T=>g.forEach(D=>{D.visible=T==="high"||D.userData.tier===0,D.receiveShadow=T==="high"}),count:g.reduce((T,D)=>T+D.count,0)}}function uu(i,{arms:t=4,rStart:e=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:a=16}={}){const o=[];for(let l=0;l<t;l++){const c=r+l/t*Math.PI*2,h=[];for(let u=0;u<=a;u++){const f=u/a,d=e*(1-f)+n*f,v=c+f*s*Math.PI*2;h.push([i[0]+Math.cos(v)*d,i[1]+Math.sin(v)*d])}o.push(h)}return o}const n_={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},i_=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],s_=[90,210,330].map(i=>i*Math.PI/180),Ya=11,r_=()=>{const i=[];for(let e=0;e<=48;e++){const n=e/48*Math.PI*2;i.push([Math.cos(n)*Ya,Math.sin(n)*Ya])}const t=s_.map(e=>[Ya,20,30,40,50].map((n,s)=>{const r=e+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...t]},vr=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:uu([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#dcc796",grass:"#62a84a",grass2:"#44893a",path:"#b49c74",deep:"#cdb987",pathMix:.35},water:{shallow:"#a6e6cc",mid:"#45c2ae",deep:"#1f9aa2",caustic:1},sky:{fog:"#b9d4dc",hemiSky:"#eaf4ff",hemiGround:"#4a5a44",hemi:1.1,sun:"#fff1d8",sunI:2.5,exposure:1,sunDir:[14,30,10],grade:{tint:[1,1,.99],lift:[0,.006,.02],sat:1.06,vignette:.22}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a8d85a","#2f7a3a"]},rock:["#b6bab8","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.5,types:{clerk:{hp:.7},complainer:{hp:.7},tank:{hp:.75}},extra:null},intro:{complainer:2,drone:3,lobbyist:5,heli:6,auditor:7,balloon:8}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:i_,shape:"fjord",fjord:n_,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4"},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#a9b2bc","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,types:{tank:{hp:.95},clerk:{hp:1},lobbyMini:{hp:.9}},extra:{type:"tank",n:1,gap:4,path:"both",from:3}},intro:{balloon:3,auditor:4,lobbyist:5,drone:5,heli:6,complainer:6}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:uu([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:r_(),moat:Ya,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,types:{lobbyist:{hp:.6},lobbyMini:{hp:.6},clerk:{hp:.85},complainer:{hp:.85}},extra:{type:"gull",n:1,gap:1.4,from:3}},intro:{complainer:2,drone:2,lobbyist:3,heli:4,auditor:5,balloon:7}}];function a_(i){const[t,e,n]=i.edgeAmp,s=i.seed;return r=>i.radius+t*Math.sin(3*r+.4*s)+e*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}const fu={clerk:["complainer","lobbyist"],swarm:["complainer"],tank:["auditor","lobbyist"],gull:["drone","heli","balloon"]},Jo={clerk:22,swarm:7,tank:95,gull:16,complainer:17,lobbyist:97,auditor:112,drone:9,heli:62,balloon:150},Qo={complainer:.6,lobbyist:1.8,auditor:2.2,drone:.4,heli:2.4,balloon:3.5};function o_(i,t){let e=i.seed*9301+49297;const n=()=>(e=(e*9301+49297)%233280)/233280,s=i.intro||{};return t.map((r,a)=>{const o=a+1,l=r.map(f=>({...f})),c=i.balance.extra;c&&o>=c.from&&l.push({...c,n:c.n+Math.floor((o-c.from)/2),at:5});const h=(f,d,v)=>Math.max(1,Math.round(f*Math.min(1,Jo[d]/Jo[v]))),u=(f,d)=>{f.n=h(f.n,f.type,d),f.gap=Qo[d]??f.gap,f.type=d};for(const[f,d]of Object.entries(s)){if(d!==o)continue;const v=l.find(x=>{var m;return(m=fu[x.type])==null?void 0:m.includes(f)});if(v&&v.n>=2){const x=Math.floor(v.n/2);l.push({...v,type:f,n:h(x,v.type,f),gap:Qo[f]??v.gap,at:(v.at??0)+2}),v.n-=x}else v?u(v,f):l.push({type:f,n:Math.max(1,Math.min(3,Math.round(44/Jo[f]))),gap:Qo[f],path:0,at:6})}for(const f of l){const d=(fu[f.type]||[]).filter(v=>s[v]&&s[v]<o);d.length&&n()<.45&&u(f,d[Math.floor(n()*d.length)])}return l})}function Yr(){try{return Math.max(1,Math.min(vr.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function l_(i){try{i+2>Yr()&&localStorage.setItem("glod-unlocked",String(Math.min(vr.length,i+2)))}catch{}}function La(i,t,{color:e,size:n,speed:s,drift:r,additive:a,area:o=46,top:l=22}){const c=new Float32Array(t*3),h=new Float32Array(t);for(let p=0;p<t;p++)c[p*3]=(Math.random()-.5)*o*2,c[p*3+1]=Math.random()*l,c[p*3+2]=(Math.random()-.5)*o*2,h[p]=Math.random()*6.28;const u=new De;u.setAttribute("position",new ze(c,3));const f=document.createElement("canvas");f.width=f.height=32;const d=f.getContext("2d"),v=d.createRadialGradient(16,16,0,16,16,16);v.addColorStop(0,"rgba(255,255,255,1)"),v.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=v,d.fillRect(0,0,32,32);const x=new so({color:e,size:n,map:new ii(f),transparent:!0,depthWrite:!1,blending:a?si:Xi,opacity:a?1:.85}),m=new Pc(u,x);return m.frustumCulled=!1,i.add(m),(p,y,S)=>{for(let g=0;g<t;g++){let A=c[g*3+1]-s*p*(.7+h[g]%1*.6);c[g*3]+=Math.sin(S*.7+h[g])*r*p,(s<0?A>l:A<0)&&(A=s<0?0:l,c[g*3]=y.x+(Math.random()-.5)*o*2,c[g*3+2]=y.z+(Math.random()-.5)*o*2),c[g*3+1]=A}u.attributes.position.needsUpdate=!0}}function c_(i,t,e,n,s=160){const r=new Ic(i.map(([u,f])=>new F(u,0,f))),a=r.getLength(),o=[],l=[],c=[];for(let u=0;u<=s;u++){const f=u/s,d=r.getPointAt(f),v=r.getTangentAt(f),x=-v.z,m=v.x,p=t*(.75+.25*Math.sin(f*9));for(const y of[-1,1]){const S=d.x+x*p*y,g=d.z+m*p*y;o.push(S,e(S,g)+n,g),l.push(f*a,(y+1)/2)}if(u<s){const y=u*2;c.push(y,y+1,y+2,y+1,y+3,y+2)}}const h=new De;return h.setAttribute("position",new de(o,3)),h.setAttribute("uv",new de(l,2)),h.setIndex(c),h.computeVertexNormals(),{geo:h,curve:r,len:a}}function h_(i,t,e,n){var x;const{heightAt:s}=t,r=[],a=[],o=[],l=[],c=[],h=e.mobile?.5:1,u=new Set(n.life);if(u.has("aurora")){const m=new Xe({transparent:!0,depthWrite:!1,blending:si,side:je,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const[p,y,S]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const g=new se(new Hn(150,26,96,1),m);g.position.set(p,20,y),g.rotation.y=S,i.add(g)}a.push((p,y,S)=>m.uniforms.uTime.value=S)}if(u.has("snow")&&a.push(La(i,Math.round(900*h),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),u.has("ash")&&a.push(La(i,Math.round(500*h),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),u.has("embers")&&a.push(La(i,Math.round(160*h),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),u.has("icefloes")){const m=[];for(let A=0;A<6e3&&m.length<70*h;A++){const E=(Math.random()-.5)*120,w=(Math.random()-.5)*120,C=.05-s(E,w);C>.15&&C<1.4&&m.every(M=>Math.hypot(M.x-E,M.z-w)>2.2)&&m.push({x:E,z:w,s:.6+Math.random()*1.1,r:Math.random()*6})}const p=new Fe(1,.9,.18,7),y=p.attributes.position;for(let A=0;A<y.count;A++){const E=Math.atan2(y.getZ(A),y.getX(A)),w=.75+.35*Math.abs(Math.sin(E*2.3+A));y.setX(A,y.getX(A)*w),y.setZ(A,y.getZ(A)*w)}p.computeVertexNormals();const S=new fn(p,new Ie({color:"#eaf6ff"}),Math.max(1,m.length));S.count=m.length,S.receiveShadow=!0,i.add(S);const g=new Oe;a.push((A,E,w)=>{m.forEach((C,M)=>{g.position.set(C.x+Math.sin(w*.1+C.r)*.4,.08+Math.sin(w*1.1+C.r)*.03,C.z),g.rotation.set(Math.sin(w*.9+C.r)*.03,C.r+w*.02,Math.cos(w*.8+C.r)*.03),g.scale.set(C.s,1,C.s),g.updateMatrix(),S.setMatrixAt(M,g.matrix)}),S.instanceMatrix.needsUpdate=!0})}if(n.lava){const m=new Xe({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const g of n.lava){const A=c_(g,1.25,s,.07);i.add(new se(A.geo,m));const E=[];let w=!1;for(let C=0;C<=1;C+=1.4/A.len){const M=A.curve.getPointAt(Math.min(1,C));if(t.pathDist(M.x,M.z)<2.4){w||c.push({x:M.x,z:M.z,tan:A.curve.getTangentAt(Math.min(1,C))}),w=!0;continue}w=!1,o.push({x:M.x,z:M.z,r:1.4})}for(const C of[.25,.7]){const M=A.curve.getPointAt(C),_=new qr("#ff6a2a",14,12,1.6);_.position.set(M.x,s(M.x,M.z)+1.2,M.z),i.add(_),E.push(_)}a.push((C,M,_)=>E.forEach((T,D)=>T.intensity=12+3*Math.sin(_*2.3+D)))}a.push((g,A,E)=>m.uniforms.uTime.value=E);const p=new An(3.4,.35,4.2),y=new Ie({color:((x=n.rock)==null?void 0:x[0])??"#555"}),S=new Fe(2.4,2.4,.1,18);for(const g of c){const A=s(g.x,g.z)+.12,E=new se(p,y);E.position.set(g.x,A,g.z),E.rotation.y=-Math.atan2(g.tan.z,g.tan.x),E.castShadow=E.receiveShadow=!0,i.add(E);const w=new se(S,new Ee({color:new Lt("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));w.position.set(g.x,A+.25,g.z),w.visible=!1,i.add(w);const C=new qr("#ff6a2a",0,14,1.6);C.position.set(g.x,A+1.6,g.z),i.add(C);let M=!1;l.push({x:g.x,z:g.z,get closed(){return M},setClosed(_){M=_,w.visible=_}}),a.push((_,T,D)=>{const G=M?1:0;w.material.opacity+=(G*.9-w.material.opacity)*Math.min(1,_*3),!M&&w.material.opacity<.02&&(w.visible=!1),C.intensity=w.material.opacity*(22+6*Math.sin(D*9))})}}if(n.volcano){const m=n.volcano;o.push({x:m.x,z:m.z,r:m.r*.55});const p=new se(new lr(m.r*.22,20),new Ee({color:new Lt("#ff5a1a").multiplyScalar(2.4)}));p.rotation.x=-Math.PI/2,p.position.set(m.x,s(m.x,m.z)+.2,m.z),i.add(p);const y=new ao(.35,0),S=[];for(let E=0;E<3e3&&S.length<50*h;E++){const w=(Math.random()-.5)*96,C=(Math.random()-.5)*96,M=s(w,C);M>.4&&t.pathDist(w,C)>2.2&&S.push({x:w,z:C,h:M,s:.5+Math.random()})}const g=new fn(y,new Ee({color:new Lt("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,S.length));g.count=S.length;const A=new Oe;S.forEach((E,w)=>{A.position.set(E.x,E.h,E.z),A.rotation.set(E.s,E.s*3,0),A.scale.set(E.s,E.s*.5,E.s),A.updateMatrix(),g.setMatrixAt(w,A.matrix)}),i.add(g)}if(n.waterfall&&n.waterfall._lvl!==void 0){const m=n.waterfall,p=m.basin[0]-m.lip[0],y=m.basin[1]-m.lip[1],S=Math.hypot(p,y),g=p/S,A=y/S,E=m._lvl-.1,w=14,C=1.25,M=[],_=[],T=[];for(let k=0;k<=w;k++){const Z=k/w,rt=.35+1.5*Z*Z,ot=E-(E-.06)*(Z*Z*.6+Z*.4);for(const Et of[-1,1])M.push(m.lip[0]+g*rt-A*C*Et*(.85+Z*.3),ot,m.lip[1]+A*rt+g*C*Et*(.85+Z*.3)),_.push((Et+1)/2,Z);if(k<w){const Et=k*2;T.push(Et,Et+1,Et+2,Et+1,Et+3,Et+2)}}const D=new De;D.setAttribute("position",new de(M,3)),D.setAttribute("uv",new de(_,2)),D.setIndex(T);const G=new Xe({transparent:!0,depthWrite:!1,side:je,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new se(D,G));const L=new se(new lr(1.4,20),new Ee({color:"#ffffff",transparent:!0,opacity:.7,depthWrite:!1}));L.rotation.x=-Math.PI/2;const O=m.lip[0]+g*1.9,V=m.lip[1]+A*1.9;L.position.set(O,.1,V),i.add(L);const X=La(i,Math.round(60*h),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});a.push((k,Z,rt)=>{G.uniforms.uTime.value=rt,L.scale.setScalar(1+Math.sin(rt*5)*.08),L.material.opacity=.55+.15*Math.sin(rt*7),X(k,{x:O,z:V},rt)}),o.push({x:O,z:V,r:.9})}const f=(m,p)=>o.some(y=>(y.x-m)**2+(y.z-p)**2<y.r*y.r);let d=0;return{colliders:r,update:(m,p=t.lighthouse.pos)=>{const y=Math.min(.05,Math.max(0,m-d));d=m;for(const S of a)S(y,p,m)},blocks:f,blockers:o,bridges:l}}function u_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new De;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let v=0;v<d.count;++v)u.push(d.getX(v)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=du(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);const v=du(d);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function du(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new ze(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let v=0;v<e;v++){const x=h.getComponent(f,v);o.setComponent(f+u,v,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function f_(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,S=o.length;y<S;y++){const g=o[y],A=i.attributes[g];l[g]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const E=i.morphAttributes[g];E&&(c[g]||(c[g]=[]),E.forEach((w,C)=>{const M=new w.array.constructor(w.count*w.itemSize);c[g][C]=new w.constructor(M,w.itemSize,w.normalized)}))}const d=t*.5,v=Math.log10(1/t),x=Math.pow(10,v),m=d*x;for(let y=0;y<r;y++){const S=n?n.getX(y):y;let g="";for(let A=0,E=o.length;A<E;A++){const w=o[A],C=i.getAttribute(w),M=C.itemSize;for(let _=0;_<M;_++)g+=`${~~(C[u[_]](S)*x+m)},`}if(g in e)h.push(e[g]);else{for(let A=0,E=o.length;A<E;A++){const w=o[A],C=i.getAttribute(w),M=i.morphAttributes[w],_=C.itemSize,T=l[w],D=c[w];for(let G=0;G<_;G++){const L=u[G],O=f[G];if(T[O](a,C[L](S)),M)for(let V=0,X=M.length;V<X;V++)D[V][O](a,M[V][L](S))}}e[g]=a,h.push(a),a++}}const p=i.clone();for(const y in i.attributes){const S=l[y];if(p.setAttribute(y,new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)),y in c)for(let g=0;g<c[y].length;g++){const A=c[y][g];p.morphAttributes[y][g]=new A.constructor(A.array.slice(0,a*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(h),p}const hr=20;function Zn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function d_(i){const t=new Ic(i.map(([s,r])=>new F(s,0,r)),!1,"catmullrom",.5),e=t.getLength(),n=t.getSpacedPoints(400);return{curve:t,length:e,samples:n}}function p_(i,t,e,n,s){const a=new An(1,1,1,5,5,5),o=a.attributes.position,l=new F,c=new F,h=i/2,u=t/2,f=e/2,d=Math.min(n,h,u,f)*.98,v=s()*10,x=(s()-.5)*.12;for(let p=0;p<o.count;p++){l.set(o.getX(p)*i,o.getY(p)*t,o.getZ(p)*e),c.set(Le.clamp(l.x,-h+d,h-d),Le.clamp(l.y,-u+d,u-d),Le.clamp(l.z,-f+d,f-d)),l.sub(c);const y=l.length();y>0&&l.multiplyScalar(d/y),l.add(c);const S=1+.035*Math.sin(l.x*4.1+v)*Math.sin(l.z*3.7-v)+.025*Math.sin(l.y*6+v*2);l.x*=S,l.z*=S,l.y+=l.x*x,o.setXYZ(p,l.x,l.y,l.z)}a.deleteAttribute("normal"),a.deleteAttribute("uv");const m=f_(a);return m.computeVertexNormals(),m}function m_(i,t,e,n){const s=new Lt(t),r=new Lt(e),a=new Lt,o=[[[2.3,.85,1.9,0,0,0],[1.6,.7,1.4,.2,-.1,.35]],[[1.5,1.5,1.4,-.35,.1,.1],[1.4,.8,1.3,.75,-.2,-.3],[.9,.6,.85,-.3,.05,.6]],[[2.4,.7,2,0,0,.2],[1.8,.65,1.5,-.15,.15,-.25],[1.1,.55,1,.2,-.1,.5]]][n%3],l=[];let c=0,h=0;o.forEach(([p,y,S,g,A,E],w)=>{const C=.88+i()*.24,M=p_(p*C,y*(.9+i()*.2),S*C,Math.min(p,y,S)*.28,i);M.rotateY(E+(i()-.5)*.3);const _=n%3===1&&w===1?0:c;M.translate(g,_+y/2,A),n%3===1&&w===1||(c=_+y*.92),h=Math.max(h,_+y),l.push(M)});const u=u_(l),f=u.attributes.position,d=u.attributes.normal,v=[],x=.95+i()*.1,m=i()*10;for(let p=0;p<f.count;p++){const y=f.getX(p),S=f.getY(p),g=f.getZ(p);a.copy(s).multiplyScalar(x*(.72+.28*Le.smoothstep(S,0,.9))*(d.getY(p)<-.3?.8:1));const A=Math.sin(y*2.3+m)*Math.sin(g*2.7-m)+.5*Math.sin(y*5.1-g*4.3+m),E=Le.smoothstep(d.getY(p),.6,.9)*Le.smoothstep(S,h-.3,h-.08)*Le.smoothstep(A,-.55,0);a.lerp(r,E),v.push(a.r,a.g,a.b)}return u.setAttribute("color",new de(v,3)),u}function g_(i){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,256,256);const n=Zn(4242);for(let o=0;o<90;o++){const l=225+n()*30|0;e.fillStyle=`rgba(${l},${l},${l},0.5)`,e.beginPath(),e.ellipse(n()*256,n()*256,8+n()*22,4+n()*10,n()*3,0,Math.PI*2),e.fill()}e.lineCap="round",e.lineJoin="round";const s=(o,l,c,h,u)=>{e.lineWidth=u,e.strokeStyle="rgba(46,44,50,0.85)",e.beginPath(),e.moveTo(o,l);for(let f=0;f<h;f++)c+=(n()-.5)*.9,o+=Math.cos(c)*9,l+=Math.sin(c)*9,e.lineTo(o,l),n()<.12&&u>1.2&&(e.stroke(),s(o,l,c+(n()<.5?1:-1)*(.6+n()*.6),h>>1,u*.7),e.lineWidth=u,e.strokeStyle="rgba(46,44,50,0.85)",e.beginPath(),e.moveTo(o,l));e.stroke()};for(let o=0;o<9;o++){const l=n()*256,c=n()*256,h=n()*6.28,u=5+(n()*7|0),f=1.6+n()*1.2;for(const[d,v]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]])e.save(),e.translate(d,v),s(l,c,h,u,f),e.restore()}const r=new ii(t);r.colorSpace=on,r.wrapS=r.wrapT=ri,r.anisotropy=4;const a=new Ie({vertexColors:!0});return a.onBeforeCompile=o=>{o.uniforms.uCrack={value:r},o.uniforms.uWaterC={value:new Lt(i)},o.vertexShader=`varying vec3 vRP;
varying vec3 vRN;
varying float vRWY;
`+o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vRP = position; vRN = normal;
  vec4 rw = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    rw = instanceMatrix * rw;
  #endif
  vRWY = (modelMatrix * rw).y;`),o.fragmentShader=`uniform sampler2D uCrack;
uniform vec3 uWaterC;
varying vec3 vRP;
varying vec3 vRN;
varying float vRWY;
`+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      {
        vec3 w = pow(abs(normalize(vRN)), vec3(4.0)); w /= (w.x + w.y + w.z);
        vec3 q = vRP * 0.55;
        vec3 cr = texture2D(uCrack, q.zy).rgb * w.x + texture2D(uCrack, q.xz).rgb * w.y + texture2D(uCrack, q.xy).rgb * w.z;
        diffuseColor.rgb *= cr;
        // Under vannflata (0,05) tar steinen vannets farge (som de turkise undervannssteinene i raw1):
        // flate blokk-topper rett under overflata viste seg ellers som lyse grå firkanter i det klare vannet
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.35 + uWaterC * 0.55, 0.8 * smoothstep(-0.03, 0.06, 0.05 - vRWY));
      }`)},a}function v_(i,t,e){const n=a_(e),s=new F(e.lighthouse[0],0,e.lighthouse[1]),r=e.paths.map(d_),a=r.flatMap(I=>I.samples),o=(I,z)=>{let J=1/0;for(let at=0;at<a.length;at+=3){const Tt=a[at],mt=(Tt.x-I)**2+(Tt.z-z)**2;mt<J&&(J=mt)}return Math.sqrt(J)};if(e.plateausAuto&&!e.plateaus){const I=Zn(500+e.seed),z=[];for(const J of e.plateausAuto){let at=null,Tt=-1;for(let mt=0;mt<500;mt++){const ct=I()*Math.PI*2,pt=12+I()*24,Dt=Math.cos(ct)*pt,te=Math.sin(ct)*pt,xe=o(Dt,te);if(xe<J.r+3.5||Math.hypot(Dt-s.x,te-s.z)<J.r+9||z.some(ke=>Math.hypot(ke.x-Dt,ke.z-te)<ke.r+J.r+5))continue;const he=Math.min(xe-J.r,9)+I()*.5;he>Tt&&(Tt=he,at={x:Dt,z:te,...J})}at&&z.push(at)}if(e.plateaus=z,e.waterfall&&z[0]){const J=z[0],at=e.waterfall;let Tt=0,mt=-1;for(let Dt=0;Dt<16;Dt++){const te=Dt/16*Math.PI*2,xe=J.x+Math.cos(te)*(J.r+3.2),he=J.z+Math.sin(te)*(J.r+3.2),ke=o(xe,he);ke>mt&&(mt=ke,Tt=te)}const ct=Math.cos(Tt),pt=Math.sin(Tt);at.pool=[J.x+ct*(J.r-2.4),J.z+pt*(J.r-2.4)],at.lip=[J.x+ct*(J.r-.3),J.z+pt*(J.r-.3)],at.basin=[J.x+ct*(J.r+3),J.z+pt*(J.r+3)]}}const l=e.fjord,c=e.nes,h=(I,z)=>{if(e.shape==="fjord"){const J=z+30+2.2*Math.sin(I*.21)+1.2*Math.sin(I*.53+1),at=Le.clamp(z,c.z1,c.z0),Tt=c.r-Math.hypot(I-c.x,z-at)+(z<c.z1?0:.6*Math.sin(z*.7));return Math.max(J,Tt)}return n(Math.atan2(z,I))-Math.hypot(I,z)},u=(I,z,J=!1)=>{const at=Le.smoothstep(h(I,z),-3,7),Tt=.9+.7*Math.sin(I*.17+1)*Math.cos(z*.21)+.35*Math.sin(I*.5+z*.4)+.3*Math.sin(I*.31-z*.23+2.1)+.18*Math.cos(I*.73+z*.61),mt=2.4*Math.exp(-((I-s.x-2)**2+(z-s.z+1)**2)/60);let ct=-2.2+at*(2.2+Tt+mt);if(at>.85&&ct<.35&&(ct=Math.max(-.42,.35-(.35-ct)*3.2)),l){const pt=Math.max(Le.smoothstep(Math.abs(I),l.wall-3,l.wall+6),Le.smoothstep(z,l.top+6,l.top+14));ct+=pt*(7+1.5*Math.sin(z*.13+I*.05));const Dt=Math.abs(I-l.xc(z)),te=1-Le.smoothstep(z,l.top-6,l.top+2);Dt<l.w+1.5&&te>0&&(ct=Math.min(ct,Le.lerp(ct,-1.6,te*(1-Le.smoothstep(Dt,l.w-.8,l.w+1.5)))))}for(const pt of e.plateaus||[]){const Dt=Math.hypot(I-pt.x,z-pt.z),te=Math.atan2(z-pt.z,I-pt.x),xe=pt.r+Math.sin(te*5+pt.x)*.8+Math.sin(te*11)*.3;ct+=pt.h*Le.smoothstep(xe-Dt,0,1.3)}if(e.waterfall&&!J){const pt=e.waterfall,Dt=Math.hypot(I-pt.pool[0],z-pt.pool[1]);Dt<pt.poolR+.6&&(pt._lvl??(pt._lvl=u(pt.pool[0],pt.pool[1],!0)-.12),ct=Math.min(ct,pt._lvl-.48*Math.sqrt(Math.max(0,1-Dt/(pt.poolR+.6)))));const te=Le.clamp(((I-pt.pool[0])*(pt.lip[0]-pt.pool[0])+(z-pt.pool[1])*(pt.lip[1]-pt.pool[1]))/((pt.lip[0]-pt.pool[0])**2+(pt.lip[1]-pt.pool[1])**2),0,1),xe=pt.pool[0]+(pt.lip[0]-pt.pool[0])*te,he=pt.pool[1]+(pt.lip[1]-pt.pool[1])*te;Math.hypot(I-xe,z-he)<.75&&pt._lvl!==void 0&&(ct=Math.min(ct,pt._lvl-.25));const ke=Math.hypot(I-pt.basin[0],z-pt.basin[1]);ke<pt.basinR&&(ct=Math.min(ct,Math.max(-.42,.05-.47*Math.sqrt(1-ke/pt.basinR))))}if(e.volcano){const pt=e.volcano,Dt=Math.hypot(I-pt.x,z-pt.z);ct+=pt.h*Math.max(0,1-Dt/pt.r)**1.4-pt.h*.5*Math.max(0,1-Dt/(pt.r*.25))}return ct},f=68,d=t.mobile?160:176,v=new Float32Array((d+1)*(d+1)),x=new Float32Array((d+1)*(d+1));for(let I=0;I<=d;I++)for(let z=0;z<=d;z++){const J=-f+z/d*f*2,at=-f+I/d*f*2,Tt=o(J,at);x[I*(d+1)+z]=Tt;let mt=u(J,at);const ct=Le.smoothstep(Tt,1.4,3.2),pt=Math.max(u(J,at)*.6+.3,.45);mt=Le.lerp(Math.min(mt,pt+.1),mt,ct),l&&Math.abs(at-l.bridgeZ)<4&&Math.abs(J-l.xc(at))<l.w+2&&Tt<2.2&&(mt=Math.max(mt,.5)),v[I*(d+1)+z]=mt}const m=(I,z,J)=>{const at=Le.clamp((z+f)/(f*2)*d,0,d-.001),Tt=Le.clamp((J+f)/(f*2)*d,0,d-.001),mt=Math.floor(at),ct=Math.floor(Tt),pt=at-mt,Dt=Tt-ct,te=I[ct*(d+1)+mt],xe=I[ct*(d+1)+mt+1],he=I[(ct+1)*(d+1)+mt],ke=I[(ct+1)*(d+1)+mt+1];return(te*(1-pt)+xe*pt)*(1-Dt)+(he*(1-pt)+ke*pt)*Dt},p=(I,z)=>m(v,I,z),y=(I,z)=>m(x,I,z),S=(I,z)=>p(I,z)>.35,g=.5,A=(I,z)=>Math.max(Math.abs(p(I+.4,z)-p(I-.4,z)),Math.abs(p(I,z+.4)-p(I,z-.4)))/.8,E=(I,z)=>!!l&&Math.abs(z-l.bridgeZ)<4&&Math.abs(I-l.xc(z))<l.w+1.5&&y(I,z)<2.6,w=new Lt("#cfeaff"),C=(I,z)=>p(I,z)>.05-g&&A(I,z)<1.05,M=t.mobile?170:256,_=new Hn(f*2,f*2,M,M);_.rotateX(-Math.PI/2);const T=_.attributes.position,D=new Float32Array(T.count*3),G=new Float32Array(T.count*3),L=new Float32Array(T.count),O=new Float32Array(T.count*4),V=new Lt,X=new Lt,k=e.palette,Z=new Lt(e.rock[0]).multiplyScalar(.7),rt=new Lt(e.rock[0]).multiplyScalar(1.08),ot=new Lt,Et=new Lt(k.sand),jt=new Lt(k.grass),et=new Lt(k.grass2),dt=new Lt(k.path),Ct=new Lt(k.deep),ut=new Lt,kt=Zn(7);for(let I=0;I<T.count;I++){const z=T.getX(I),J=T.getZ(I),at=p(z,J);T.setY(I,at);const Tt=y(z,J),mt=(kt()-.5)*.04,ct=ut.copy(jt).lerp(et,Le.clamp((at-1)*.6+kt()*.3,0,1)).offsetHSL(0,0,mt);G.set([ct.r,ct.g,ct.b],I*3),V.copy(Ct).lerp(Et,Le.smoothstep(at,0,.3)).offsetHSL(0,0,mt),D.set([V.r,V.g,V.b],I*3);const pt=.5+.5*Math.sin(z*1.7+J*.9)*Math.cos(J*1.3-z*.6);L[I]=1.9-Math.min(Tt,6)+(pt-.5)*(k.pathMix??.3)*2.4-Math.max(0,.3-at)*2.5;let Dt=0;l&&E(z,J)&&(X.copy(w),Dt=.85);const te=A(z,J);if(te>.75){const xe=.5+.5*Math.sin(at*7.5+Math.sin(z*.7+J*.5)*1.5);ot.copy(Z).lerp(rt,xe);const he=Le.smoothstep(te,.75,1.3);X.copy(Dt?X:ot).lerp(ot,he),Dt=Math.max(Dt,he)}O.set([X.r,X.g,X.b,Dt],I*4)}_.setAttribute("aLow",new ze(D,3)),_.setAttribute("aGrass",new ze(G,3)),_.setAttribute("aPathF",new ze(L,1)),_.setAttribute("aOver",new ze(O,4)),_.computeVertexNormals();const Vt=new Ie({color:"#ffffff"});Vt.onBeforeCompile=I=>{I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
attribute vec3 aLow, aGrass;
attribute vec4 aOver;
attribute float aPathF;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vLow = aLow; vGrass = aGrass; vOver = aOver; vPathF = aPathF;`),I.uniforms.uPath={value:dt},I.fragmentShader=I.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const Xt=new se(_,Vt);Xt.receiveShadow=!0,i.add(Xt);const Qt=[],ft=(I,z)=>Math.hypot(I-s.x,z-s.z)>6;for(const[I,z]of r.entries()){let J=I%2===0?1:-1,at=0;for(let Tt=.16;Tt<.95&&at<6;Tt+=.055){const mt=z.curve.getPointAt(Tt),ct=z.curve.getTangentAt(Tt),pt=new F(-ct.z,0,ct.x).normalize();for(const Dt of[J,-J]){const te=mt.x+pt.x*3.6*Dt,xe=mt.z+pt.z*3.6*Dt;if(!(y(te,xe)<2.7||!S(te,xe)||!ft(te,xe))&&!Qt.some(he=>Math.hypot(he.x-te,he.z-xe)<5.2)&&!(e.volcano&&Math.hypot(te-e.volcano.x,xe-e.volcano.z)<e.volcano.r+2)){Qt.push({x:te,z:xe,tower:null}),at++;break}}J=-J}}const bt=(()=>{const I=document.createElement("canvas");I.width=I.height=256;const z=I.getContext("2d");z.fillStyle="#ffffff",z.fillRect(0,0,256,256);const J=Zn(77);for(let Tt=0;Tt<260;Tt++){const mt=200+J()*55|0;z.fillStyle=`rgba(${mt},${mt},${mt-6},${.25+J()*.35})`,z.beginPath(),z.ellipse(J()*256,J()*256,6+J()*26,3+J()*12,J()*3,0,Math.PI*2),z.fill()}z.strokeStyle="rgba(90,90,90,0.35)",z.lineWidth=1.5;for(let Tt=0;Tt<26;Tt++){let mt=J()*256,ct=J()*256;z.beginPath(),z.moveTo(mt,ct);for(let pt=0;pt<4;pt++)mt+=(J()-.5)*30,ct+=J()*18,z.lineTo(mt,ct);z.stroke()}const at=new ii(I);return at.colorSpace=on,at.wrapS=at.wrapT=ri,at})(),N=new Ie({color:"#8c8f88",map:bt}),Bt=new Ie({color:"#5f8a42",map:bt}),_t=new Ee({color:"#ffe3a0",transparent:!0,opacity:.28,depthWrite:!1}),Nt=new Ee({color:"#f5f7f8",transparent:!0,opacity:.12,depthWrite:!1}),Pt=new Fe(1.25,1.5,.9,8);Pt.translate(0,.35,0);const Zt=new Fe(1.28,1.28,.12,8);Zt.translate(0,.82,0);const q=new Es(.55,.75,6);q.rotateX(-Math.PI/2);const R=new gi(1,7,5),b=Qt.length,H=new fn(Pt,N,b),j=new fn(Zt,Bt,b),Q=new fn(q,_t,b),tt=new fn(R,Nt,b*3);H.castShadow=H.receiveShadow=j.receiveShadow=!0;const wt=new Oe;Qt.forEach((I,z)=>{I.y0=p(I.x,I.z),I.y=I.y0+.88,wt.position.set(I.x,I.y0,I.z),wt.rotation.set(0,z,0),wt.scale.setScalar(1),wt.updateMatrix(),H.setMatrixAt(z,wt.matrix),j.setMatrixAt(z,wt.matrix)}),i.add(H,j,Q,tt);const Mt=I=>{Qt.forEach((z,J)=>{const at=!z.tower;wt.position.set(z.x,z.y0+.9,z.z),wt.rotation.set(0,I*.5,0),wt.scale.setScalar(at?1:0),wt.updateMatrix(),Q.setMatrixAt(J,wt.matrix);for(let Tt=0;Tt<3;Tt++){const mt=I*.4+Tt*2.1+z.x,ct=(mt%1+1)%1;wt.position.set(z.x+Math.cos(mt*2.3)*.9,z.y0+.5+ct*.9,z.z+Math.sin(mt*2.3)*.9),wt.rotation.set(0,0,0),wt.scale.set(at?.6+ct*.5:0,at?.3+ct*.2:0,at?.6+ct*.5:0),wt.updateMatrix(),tt.setMatrixAt(J*3+Tt,wt.matrix)}}),Q.instanceMatrix.needsUpdate=!0,tt.instanceMatrix.needsUpdate=!0},At=new ve,ee=p(s.x,s.z);At.position.set(s.x,ee,s.z);const yt=(()=>{const I=document.createElement("canvas");I.width=512,I.height=512;const z=I.getContext("2d");z.fillStyle="#f6f1e6",z.fillRect(0,0,512,512);const J=Zn(5);for(let Tt=0;Tt<520;Tt++){const mt=J()*512,ct=J()*512,pt=2+J()*9,Dt=J()<.65;z.fillStyle=Dt?`rgba(${90+J()*40},${120+J()*40},${60+J()*20},${.12+J()*.18})`:`rgba(${130+J()*30},${95+J()*20},60,${.12+J()*.15})`,z.beginPath(),z.ellipse(mt,ct,pt,pt*(.4+J()*.6),J()*3,0,Math.PI*2),z.fill()}for(let Tt=0;Tt<1200;Tt++){z.strokeStyle=`rgba(190,170,140,${.04+J()*.07})`,z.lineWidth=1;const mt=J()*512,ct=J()*512;z.beginPath(),z.moveTo(mt,ct),z.lineTo(mt+(J()-.5)*8,ct+6+J()*20),z.stroke()}for(let Tt=0;Tt<26;Tt++){const mt=J()*512;z.strokeStyle=J()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",z.lineWidth=2+J()*5,z.beginPath(),z.moveTo(mt,512),z.bezierCurveTo(mt+40,350,mt-30,160,mt+20+J()*40,0),z.stroke()}z.strokeStyle="rgba(175,145,100,0.55)",z.lineWidth=4,z.beginPath(),z.moveTo(60,512),z.bezierCurveTo(90,330,110,180,150,0),z.stroke();const at=new ii(I);return at.colorSpace=on,at.wrapS=ri,at})(),Ht=new Ie({map:yt}),ne=(()=>{const I=document.createElement("canvas");I.width=I.height=128;const z=I.getContext("2d");z.fillStyle="#e9dcbf",z.fillRect(0,0,128,128),z.strokeStyle="#a88d62",z.lineWidth=3,z.beginPath();for(let at=0;at<Math.PI*9;at+=.1){const Tt=4+at*2;z.lineTo(64+Math.cos(at)*Tt,64+Math.sin(at)*Tt)}z.stroke();const J=new ii(I);return J.colorSpace=on,J})(),ie=new Ie({color:"#e6d8b8"}),qt=new Ie({map:ne}),pe=new Ie({color:"#3a3330",flatShading:!0}),re=new Ie({color:"#b8b2aa",flatShading:!0}),_e=(()=>{const I=document.createElement("canvas");I.width=256,I.height=128;const z=I.getContext("2d"),J=z.createLinearGradient(0,0,0,128);J.addColorStop(0,"#fff0b0"),J.addColorStop(.45,"#ffb040"),J.addColorStop(1,"#ff5a10"),z.fillStyle=J,z.fillRect(0,0,256,128);const at=Zn(11);for(let mt=0;mt<70;mt++){const ct=at();z.fillStyle=ct<.5?`rgba(70,60,55,${.5+at()*.4})`:`rgba(170,165,160,${.5+at()*.4})`,z.beginPath(),z.ellipse(at()*256,20+at()*108,4+at()*14,2+at()*6,at()*3,0,Math.PI*2),z.fill()}z.strokeStyle="rgba(60,30,20,0.6)",z.lineWidth=1.5;for(let mt=0;mt<40;mt++){const ct=at()*256,pt=at()*128;z.beginPath(),z.moveTo(ct,pt),z.lineTo(ct+(at()-.5)*30,pt+(at()-.5)*20),z.stroke()}const Tt=new ii(I);return Tt.colorSpace=on,Tt})(),W=new Ee({map:_e,color:new Lt("#ffffff").multiplyScalar(2.2)});function It({len:I,rTop:z,rBot:J,crutchH:at,seg:Tt,bend:mt,glowMat:ct,shadow:pt}){const Dt=new ve,te=new se(new Fe(J*.98,J*.95,at,Tt),[ie,ie,qt]);te.position.y=at/2,te.castShadow=pt,Dt.add(te);const xe=new Fe(z,J,I,Tt,8,!0),he=xe.attributes.position,ke=Zn(Math.round(I*100)),Ce=Array.from({length:6},()=>[ke()*6.28,ke()*3,.03+ke()*.04]);for(let we=0;we<he.count;we++){const Xn=he.getY(we),qn=(Xn+I/2)/I,Mr=Math.atan2(he.getZ(we),he.getX(we));let Cs=1+Math.sin(Mr*7+Xn*3)*.018;for(const[jf,Zf,Kf]of Ce)Cs+=Math.cos(Mr-jf)*Math.sin(qn*6+Zf)*Kf*.5;he.setXYZ(we,he.getX(we)*Cs+mt*qn*qn*I,Xn,he.getZ(we)*Cs)}xe.translate(0,I/2,0),xe.computeVertexNormals();const Ze=new se(xe,Ht);Ze.position.y=at,Ze.castShadow=pt,Ze.receiveShadow=!0,Dt.add(Ze);const Wn=mt*I,rn=at+I,Fn=new Fe(z*1.02,z*1.04,z*.35,Tt,1,!0),Pn=Fn.attributes.position;for(let we=0;we<Pn.count;we++)Pn.getY(we)>0&&Pn.setY(we,Pn.getY(we)+Math.sin(we*2.7)*z*.12);Fn.computeVertexNormals();const Zi=new se(Fn,pe);Zi.position.set(Wn,rn+z*.12,0),Dt.add(Zi);const xr=new se(new gi(z*.97,Tt,6,0,Math.PI*2,0,Math.PI/2),ct);xr.scale.y=.38,xr.position.set(Wn,rn+z*.2,0),Dt.add(xr);const mo=[];for(let we=0;we<5;we++){const Xn=new se(new ao(z*(.2+we%3*.07),0),re),qn=we*1.25+.3;Xn.position.set(Wn+Math.cos(qn)*z*.55,rn+z*.33,Math.sin(qn)*z*.55),Xn.scale.y=.4,Dt.add(Xn),mo.push(Xn)}const go=new di(z*.28,z*1.1,6,4),As=go.attributes.position;for(let we=0;we<As.count;we++){const Xn=As.getY(we),qn=(Xn/(z*1.1)+.5)*2.2,Mr=As.getX(we),Cs=As.getZ(we);As.setX(we,Mr*Math.cos(qn)-Cs*Math.sin(qn)+(Xn+z*.55)*.25),As.setZ(we,Mr*Math.sin(qn)+Cs*Math.cos(qn))}go.computeVertexNormals();const _r=new se(go,pe);return _r.position.set(Wn+z*.1,rn+z*.7,z*.1),_r.rotation.z=-.35,Dt.add(_r),Dt.userData={glow:xr,top:new F(Wn,rn,0),charRing:Zi,ashFlakes:mo,body:Ze,twist:_r,len:I,rTop:z,rBot:J,bend:mt,crutchH:at,base:Ze.geometry.attributes.position.array.slice(),topParts:[Zi,xr,_r,...mo].map(we=>[we,we.position.clone(),we.scale.clone()])},Dt}const st=new se(new Fe(3.3,3.9,1,9),N);st.position.y=.3,st.castShadow=st.receiveShadow=!0,At.add(st);const vt=7.4,Ft=1.4,Ut=It({len:vt,rTop:2.35,rBot:.95,crutchH:Ft,seg:22,bend:.06,glowMat:W,shadow:!0});Ut.position.y=.75,Ut.rotation.set(.06,0,-.03);const B=Ut.userData.charRing;At.add(Ut);const lt=new Oe;lt.position.y=Ft+vt+1.2,Ut.add(lt);const zt=new qr("#ff8a3a",40,34,1.5);zt.position.y=Ft+vt+1.4,Ut.add(zt);const Yt=new di(2.2,16,16,6,!0);Yt.translate(0,-8,0);{const I=Yt.attributes.position,z=new Float32Array(I.count*3);for(let J=0;J<I.count;J++){const at=Math.pow(1-Math.min(1,-I.getY(J)/16),1.6);z.set([at,at,at],J*3)}Yt.setAttribute("color",new ze(z,3))}Yt.rotateZ(Math.PI/2);const ye=new Ee({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:si,depthWrite:!1,side:je,fog:!1}),oe=new ve;oe.position.y=Ft+vt+.8;const Ge=new se(Yt,ye),Ve=Ge.clone();Ve.rotation.y=Math.PI,oe.add(Ge,Ve),Ut.add(oe);const Ye=new qr("#ffa050",12,10,1.4);Ye.position.set(0,1.3,4.6),At.add(Ye),i.add(At),At.updateMatrixWorld(!0);const pn=new F;lt.getWorldPosition(pn);const Te=Ut.userData,zn=[lt,zt,oe].map(I=>[I,I.position.y]),xi=I=>Te.rBot+(Te.rTop-Te.rBot)*I;function na(I){const z=.15+.85*Math.max(0,Math.min(1,I)),J=Te.body.geometry.attributes.position,at=Te.base;for(let pt=0;pt<J.count;pt++){const Dt=at[pt*3+1],te=Dt/Te.len,xe=te*z,he=xi(xe)/xi(te);J.setXYZ(pt,(at[pt*3]-Te.bend*te*te*Te.len)*he+Te.bend*xe*xe*Te.len,xe*Te.len,at[pt*3+2]*he)}J.needsUpdate=!0,Te.body.geometry.computeVertexNormals(),Te.body.geometry.computeBoundingSphere();const Tt=(z-1)*Te.len,mt=xi(z)/Te.rTop,ct=Te.bend*Te.len*(z*z-1);for(const[pt,Dt,te]of Te.topParts)pt.position.set(Te.top.x+(Dt.x-Te.top.x)*mt+ct,Dt.y+Tt,Dt.z*mt),pt.scale.set(te.x*mt,te.y*mt,te.z*mt);for(const[pt,Dt]of zn)pt.position.y=Dt+Tt;At.updateMatrixWorld(!0),lt.getWorldPosition(pn)}const oi={tip:pn,pos:new F(s.x,ee,s.z),lights:hr,flamePos(){return pn.clone()},setLights(I){this.lights=I;const z=I/hr;na(z),this.glow=z,Ye.intensity=3+9*z,ye.opacity=.01+.04*z,B.scale.y*=1+(1-z)*2.5}},Mn=Zn(42),$i=[];for(let I=0;I<3e3&&$i.length<(t.mobile?70:104);I++){const z=(Mn()-.5)*102,J=(Mn()-.5)*102,at=p(z,J);if(at<.75||y(z,J)<3.2||!ft(z,J)||Qt.some(pt=>Math.hypot(pt.x-z,pt.z-J)<3.2)||$i.some(pt=>Math.hypot(pt.x-z,pt.z-J)<2.4)||e.volcano&&Math.hypot(z-e.volcano.x,J-e.volcano.z)<e.volcano.r)continue;const Tt=at<1.45?e.trees.beach:e.trees.inland;let mt=Mn(),ct="bush";for(const[pt,Dt]of Object.entries(Tt)){if(mt<Dt){ct=pt;break}mt-=Dt}$i.push({x:z,z:J,y:at,s:(ct==="bush"?.8:.75)+Mn()*.45,phase:Mn()*6.28,kind:ct})}const ia=Qx(i,$i,t,e),ji=new Oe,_i=[];for(let I=0;I<1200&&_i.length<(t.mobile?40:56);I++){const z=Mn()*Math.PI*2,J=n(z)-3+Mn()*5.5,at=Math.cos(z)*J,Tt=Math.sin(z)*J;y(at,Tt)<3.4||p(at,Tt)<-1.2||_i.some(mt=>Math.hypot(mt.x-at,mt.z-Tt)<2.2)||_i.push({x:at,z:Tt,s:.6+Mn()*1.2,r:Mn()*6})}for(const I of e.plateaus||[]){const z=Math.round(I.r*2*Math.PI/2.3);for(let J=0;J<z;J++){const at=J/z*Math.PI*2+Mn()*.2,Tt=I.r+Math.sin(at*5+I.x)*.8+Math.sin(at*11)*.3-.2,mt=I.x+Math.cos(at)*Tt,ct=I.z+Math.sin(at)*Tt;e.waterfall&&Math.hypot(mt-e.waterfall.lip[0],ct-e.waterfall.lip[1])<2.2||y(mt,ct)<2.6||_i.push({x:mt,z:ct,s:1.3+Mn()*.9,r:Mn()*6,cliff:!0})}}const P=g_(e.water.mid);[0,1,2].map(I=>m_(Zn(31+I*7+e.seed),e.rock[0],e.rock[1],I)).map((I,z)=>{const J=_i.filter((Tt,mt)=>mt%3===z),at=new fn(I,P,Math.max(1,J.length));return at.count=J.length,J.forEach((Tt,mt)=>{ji.position.set(Tt.x,p(Tt.x,Tt.z)-.2*Tt.s,Tt.z),ji.rotation.set(0,Tt.r*2,0),ji.scale.set(Tt.s*1.1,Tt.s*.9,Tt.s),ji.updateMatrix(),at.setMatrixAt(mt,ji.matrix)}),at.castShadow=at.receiveShadow=!0,i.add(at),Mf(at,"rock"),at});const it=Vx(i,{heightAt:p,pathDist:y,plinths:Qt,paths:r,lighthouse:oi},t,Zn(99+e.seed),n,e),nt=h_(i,{heightAt:p,pathDist:y,paths:r,lighthouse:oi,islandEdge:n},t,e),Y=e_(i,{heightAt:p,pathDist:y,plinths:Qt,lighthouse:oi,extrasBlock:nt.blocks},t,e,Zn(7+e.seed)),Rt=Float32Array.from(v),Gt=[..._i.map(I=>({x:I.x,z:I.z,r:I.s*.85})),...it.obstacles];for(const I of Gt){const z=I.r+1,J=f*2/d,at=Math.floor((I.x-z+f)/J),Tt=Math.ceil((I.x+z+f)/J),mt=Math.floor((I.z-z+f)/J),ct=Math.ceil((I.z+z+f)/J);for(let pt=Math.max(0,mt);pt<=Math.min(d,ct);pt++)for(let Dt=Math.max(0,at);Dt<=Math.min(d,Tt);Dt++){const te=-f+Dt*J,xe=-f+pt*J,he=Math.max(0,Math.hypot(te-I.x,xe-I.z)-I.r);if(he>.9)continue;const ke=pt*(d+1)+Dt,Ce=.06-he*.35,Ze=1-he/.9;Rt[ke]=Math.max(Rt[ke],Rt[ke]+(Ce-Rt[ke])*Ze*Ze)}}if(e.waterfall&&e.waterfall._lvl!==void 0){const I=e.waterfall;ru(i,{heightTex:au(Rt,d+1),ext:f,grid:d,quality:t,sunDir:new F(24,17,4),colors:e.water,level:I._lvl,size:9,maxDepth:.8,center:[(I.pool[0]+I.lip[0])/2,(I.pool[1]+I.lip[1])/2]})}const Kt=ru(i,{heightTex:au(Rt,d+1),ext:f,grid:d,quality:t,sunDir:new F(24,17,4),colors:e.water}),Jt=[{x:s.x,z:s.z,r:3.5},...Qt.map(I=>({x:I.x,z:I.z,r:1.4})),...ia.colliders,..._i.filter(I=>p(I.x,I.z)>-.45).map(I=>({x:I.x,z:I.z,r:I.s*.85})),...it.colliders,...nt.colliders];return{def:e,paths:r,plinths:Qt,lighthouse:oi,heightAt:p,pathDist:y,slopeAt:A,isLand:S,isIce:E,landDist:h,isWalkable:(I,z)=>C(I,z)&&!nt.blocks(I,z),colliders:Jt,update:I=>{Kt.update(I),it.update(I),nt.update(I),Y.update(I);const z=oi.glow??1,J=.75+.25*Math.sin(I*1.3)+.1*Math.sin(I*7.1);W.color.setRGB(1,.85,.75).multiplyScalar(z>0?(.7+1.5*z)*J:.12),zt.intensity=(8+40*z)*J,oe.rotation.y=I*.6,ia.update(I),Mt(I)},terrain:Xt,extras:nt,grass:Y}}const ae=(i,t={})=>new Ie({color:i,flatShading:!0,...t}),Ws=(i,t)=>new Ee({color:new Lt(i).multiplyScalar(t)}),ht={coat:ae("#f2c23c"),coatDark:ae("#c99a22"),skin:ae("#f1c7a0"),beanieG:ae("#3f8f4a"),beanieY:ae("#f2c94c"),beanieR:ae("#d4553a"),boot:ae("#3a2c22"),eyeW:new Ee({color:"#ffffff"}),eyeB:new Ee({color:"#1c1820"}),suit:ae("#6b6f78"),suitDark:ae("#3c4150"),suitNavy:ae("#2c3a5c"),shirt:ae("#f4f1ea"),tie:ae("#b8322a"),paper:ae("#fbfaf4"),stampInk:ae("#a8233a"),woodLight:ae("#c49360"),glasses:ae("#222428"),binderR:ae("#c94f3f"),binderB:ae("#3f6fc9"),binderY:ae("#e6b93f"),gull:ae("#f4f2ee"),gullWing:ae("#c4ccd4"),gullTip:ae("#2e3038"),gullBand:ae("#8e98a4"),beak:ae("#f0a43a"),megaRed:ae("#d8453a"),mouth:new Ee({color:"#4a2a2a"}),smile:new Ee({color:"#c8485a"}),wood:ae("#9a6a42"),woodDark:ae("#6e4a2c"),iron:ae("#55585e"),speaker:ae("#2a2a30"),cone:ae("#4a4a52"),rasG:ae("#3f9a4a"),rasY:ae("#f2c94c"),rasR:ae("#d4553a"),chipsBag:ae("#f2b632"),chipsRed:ae("#d8453a"),chip:ae("#f0c860"),ringMat:new Ie({color:"#f1efe9",transparent:!0,opacity:.8}),ember:Ws("#ff9a3a",2.4),emberCore:Ws("#fff1c2",2),rolling:ae("#5a9a5a"),rollingPaper:ae("#fffdf5"),lantern:Ws("#ffd27a",2.2),hpBg:new Ee({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new Ee({color:"#d8553a",depthTest:!1}),levelPip:Ws("#9fffb0",1.6),bottle:new Ie({color:"#7fd6ff",transparent:!0,opacity:.8}),bubble:new Ie({color:"#dff6ff",transparent:!0,opacity:.45,emissive:"#5a7a9a"}),kiteSail:new Ie({color:"#ff7a5a",side:je}),rope:ae("#d9c8a0"),ledger:ae("#2f5a3a"),track:ae("#8a4ac8"),briefcase:ae("#6a3a1a"),brass:ae("#d8b040"),rotor:new Ee({color:"#cfd6dc",transparent:!0,opacity:.45}),redLight:Ws("#ff3030",2),balloonA:ae("#e8e4d8"),balloonB:ae("#c8463a"),heli:ae("#f2c23c"),glassDark:ae("#2a3440"),spot:new Ee({color:"#fff6c8",transparent:!0,opacity:.18,blending:si,depthWrite:!1,side:je}),pizza:ae("#e8603a"),pizzaCrust:ae("#e8b866"),lampGlass:new Ie({color:"#ff8a5a",transparent:!0,opacity:.45,emissive:"#6a1a10"}),lampBlob:Ws("#ff9a2a",2.2)},gt={sphere:new gi(1,10,8),lowSphere:new ds(1,1),capsule:new ro(.5,.7,3,8),cyl:new Fe(1,1,1,10),cone:new di(1,1,10),box:new An(1,1,1),dome:new gi(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new Xr(.22,0),leaf:new Xr(.3,0),plane:new Hn(1,1),smileArc:new Js(.06,.018,4,10,Math.PI),ring:new Js(.32,.12,6,14),bubbleRing:new Js(.18,.025,4,12)};function xt(i,t,e,n,s,r=0,a=0,o=0,l=!0){const c=new se(i,t);return c.scale.set(e,n,s),c.position.set(r,a,o),c.castShadow=l,c}function Fc(i,t,e,n,s=.12,r=.18){const a=new ve;a.position.set(t,e,n),a.userData.isEyes=!0;for(const o of[-1,1])a.add(xt(gt.sphere,ht.eyeW,s,s,s,o*r,0,0,!1)),a.add(xt(gt.sphere,ht.eyeB,s*.55,s*.55,s*.55,o*r,.01,-s*.7,!1));return i.add(a),a}const x_=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,31);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.25)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ii(i)})(),__=new Ee({map:x_,transparent:!0,depthWrite:!1,fog:!1}),M_=new Hn(1,1).rotateX(-Math.PI/2);function yf(i,t){const e=new se(M_,__);e.scale.set(t*2,1,t*2),e.position.y=.04,e.renderOrder=1,i.add(e),i.userData.blob=e}function Sf(i){const t=[];i.traverse(e=>{e.userData.isEyes&&t.push(e)}),i.userData.eyes=t}function bf(i,t,e,n=1){const s=xt(gt.box,ht.mouth,.14*n,.025*n,.02,0,t,e,!1);s.rotation.z=.15;const r=xt(gt.smileArc,ht.smile,n,n,n,0,t+.03*n,e,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}function y_(){const i=new ve,t=new ve;i.add(t),t.add(xt(gt.capsule,ht.coat,.75,.75,.7,0,.75,0)),t.add(xt(gt.cyl,ht.coatDark,.4,.06,.38,0,.62,0));const e=new ve;e.position.y=1.62,e.scale.setScalar(1.22),e.add(xt(gt.sphere,ht.skin,.33,.32,.32)),e.add(xt(gt.cyl,ht.beanieG,.35,.1,.35,0,.14,0)),e.add(xt(gt.cyl,ht.beanieY,.31,.1,.31,0,.24,0)),e.add(xt(gt.dome,ht.beanieR,.27,.22,.27,0,.29,0)),e.add(xt(gt.sphere,ht.beanieY,.08,.08,.08,0,.52,0)),Fc(e,0,.02,-.26,.07,.12);const n=bf(e,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,t.add(e);const s=[-1,1].map(c=>{const h=xt(gt.capsule,ht.boot,.24,.32,.24,c*.18,.2,0);return t.add(h),h}),r=new ve;r.position.set(.48,1,-.1),r.add(xt(gt.box,ht.iron,.2,.28,.2,0,-.25,0)),r.add(xt(gt.sphere,ht.lantern,.1,.13,.1,0,-.25,0,!1)),t.add(r);const a=new ve;a.position.set(-.46,1.08,0),a.add(xt(gt.capsule,ht.coat,.16,.34,.16,0,-.28,0)),a.add(xt(gt.sphere,ht.skin,.1,.1,.1,0,-.52,0)),t.add(a);const o=new ve;o.add(xt(gt.box,ht.rolling,.7,.12,.42,0,0,0,!1)),o.add(xt(gt.box,ht.rollingPaper,.6,.08,.36,.06,.08,0,!1)),o.add(xt(gt.leaf,ht.rasG,.35,.05,.35,-.12,.07,0,!1)),o.position.y=2.35,o.visible=!1,i.add(o);const l=new ve;l.position.y=2;for(let c=0;c<3;c++)l.add(xt(gt.ember,ht.emberCore,.6,.6,.6,Math.cos(c*2.1)*.45,0,Math.sin(c*2.1)*.45,!1));return l.visible=!1,i.add(l),yf(i,.62),i.userData={body:t,legs:s,head:e,lanternArm:r,armL:a,carried:o,stars:l,blob:i.userData.blob},Sf(i),i}function li(i,t){const e=new ve;e.position.y=t;const n=new se(gt.plane,ht.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new se(gt.plane,ht.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,e.add(n,s),e.visible=!1,i.add(e),i.userData.hpBar=e,i.userData.hpFg=s}function Xs(i,{scale:t=1,suit:e=ht.suit,wide:n=1}={}){const s=t;i.add(xt(gt.capsule,e,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(xt(gt.box,ht.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(xt(gt.box,ht.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const o of[-1,1])i.add(xt(gt.capsule,ht.suitDark,.2*s,.25*s,.2*s,o*.16*s,.17*s,0));const r=new ve;r.position.y=1.5*s,r.add(xt(gt.sphere,ht.skin,.3*s,.3*s,.3*s)),r.add(xt(gt.dome,ht.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),Fc(r,0,.03*s,-.25*s,.065*s,.11*s);const a=bf(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:a}}function S_(i){const t=new ve,e=new ve;if(t.add(e),t.userData.body=e,i==="clerk"){const{head:n,mouth:s}=Xs(e);for(const o of[-1,1])n.add(xt(gt.box,ht.glasses,.11,.07,.02,o*.11,.03,-.3,!1));n.add(xt(gt.box,ht.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new ve;r.position.set(.48,.9,-.15),r.add(xt(gt.cyl,ht.woodLight,.06,.25,.06,0,.12,0)),r.add(xt(gt.sphere,ht.woodLight,.09,.09,.09,0,.27,0)),r.add(xt(gt.box,ht.stampInk,.22,.08,.16,0,-.02,0)),e.add(r);const a=xt(gt.box,ht.paper,.3,.38,.02,-.46,.92,-.2);a.rotation.y=.4,e.add(a),t.userData.mouth=s,t.userData.arm=r,li(t,2.15)}else if(i==="tank"){const{mouth:n}=Xs(e,{scale:1.25,suit:ht.suitNavy,wide:1.45}),s=new ve;s.position.set(0,0,-.95),s.add(xt(gt.box,ht.woodDark,.75,1.05,.45,0,.52,0));const r=xt(gt.box,ht.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(xt(gt.cyl,ht.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(xt(gt.sphere,ht.speaker,.05,.05,.05,.18,1.52,.04,!1)),e.add(s),t.userData.mouth=n,li(t,2.6)}else if(i==="gull"){e.add(xt(gt.lowSphere,ht.gull,.36,.3,.6,0,0,0)),e.add(xt(gt.cone,ht.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=xt(gt.cone,ht.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,e.add(n),e.add(xt(gt.cyl,ht.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const a=new ve;a.position.set(r*.25,.05,0),a.add(xt(gt.box,ht.gullWing,.6,.06,.42,r*.3,0,0)),a.add(xt(gt.box,ht.gullBand,.58,.065,.1,r*.31,0,.17));const o=xt(gt.box,ht.gullTip,.42,.055,.3,r*.78,0,.04);return o.rotation.y=r*.18,a.add(o),e.add(a),a});t.userData.wings=s,Fc(e,0,.12,-.42,.06,.13),t.userData.mouth=null,li(t,.8)}else if(i==="swarm"){const{mouth:n}=Xs(e,{scale:.6}),s=[ht.binderR,ht.binderB,ht.binderY],r=xt(gt.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);e.add(r),t.userData.mouth=n,li(t,1.3)}else if(i==="auditor"){const{head:n,mouth:s}=Xs(e,{scale:1.1,suit:ht.suitDark});for(const a of[-1,1])n.add(xt(gt.box,ht.glasses,.12,.08,.02,a*.12,.03,-.33,!1));const r=new ve;r.position.set(0,.95,-.55),r.add(xt(gt.box,ht.ledger,1.05,1.2,.14)),r.add(xt(gt.box,ht.paper,.95,1.1,.1,0,0,.03,!1)),r.add(xt(gt.box,ht.brass,.3,.3,.02,0,.15,-.08,!1)),e.add(r),t.userData.mouth=s,t.userData.shield=r,li(t,2.3)}else if(i==="complainer"){const{head:n,mouth:s}=Xs(e,{scale:.85,suit:ht.track});n.add(xt(gt.cyl,ht.rasR,.27,.06,.27,0,.1,0,!1));const r=new ve;r.position.set(.35,1.2,-.1),r.add(xt(gt.cyl,ht.track,.06,.45,.06,0,.2,0)),r.add(xt(gt.box,ht.paper,.32,.42,.02,0,.55,0)),e.add(r),t.userData.mouth=s,t.userData.arm=r,li(t,1.8)}else if(i==="lobbyist"||i==="lobbyMini"){const n=i==="lobbyMini",{mouth:s}=Xs(e,{scale:n?.55:1.05,suit:ht.suitNavy});e.add(xt(gt.box,ht.brass,.08,.3,.05,0,n?.52:.99,n?-.17:-.32,!1)),e.add(xt(gt.box,ht.briefcase,n?.28:.5,n?.22:.36,.12,n?.3:.55,n?.3:.55,0)),t.userData.mouth=s,li(t,n?1.2:2.1)}else if(i==="drone"){e.add(xt(gt.box,ht.iron,.42,.14,.42));const n=[];for(const[s,r]of[[1,1],[-1,1],[1,-1],[-1,-1]]){e.add(xt(gt.box,ht.speaker,.5,.04,.05,s*.22,0,r*.22).rotateY(s*r>0?Math.PI/4:-Math.PI/4));const a=xt(gt.cyl,ht.rotor,.2,.01,.2,s*.4,.08,r*.4,!1);e.add(a),n.push(a)}e.add(xt(gt.sphere,ht.redLight,.07,.07,.07,0,-.06,-.22,!1)),t.userData.rotors=n,t.userData.mouth=null,li(t,.6)}else if(i==="balloon"){e.add(xt(gt.sphere,ht.balloonA,1.1,1.3,1.1,0,1.6,0));for(let n=0;n<4;n++)e.add(xt(gt.cyl,ht.balloonB,1.12-Math.abs(n-1.5)*.18,.18,1.12-Math.abs(n-1.5)*.18,0,1+n*.42,0,!1));e.add(xt(gt.box,ht.woodLight,.6,.4,.6,0,-.1,0)),e.add(xt(gt.sphere,ht.skin,.2,.2,.2,0,.25,0)),e.add(xt(gt.dome,ht.suitDark,.21,.1,.21,0,.32,0,!1));for(const[n,s]of[[1,1],[-1,1],[1,-1],[-1,-1]])e.add(xt(gt.cyl,ht.rope,.015,.8,.015,n*.28,.45,s*.28,!1));t.userData.mouth=null,li(t,3.3)}else if(i==="heli"){e.add(xt(gt.capsule,ht.heli,.6,.55,.9,0,0,0).rotateX(Math.PI/2)),e.add(xt(gt.sphere,ht.glassDark,.28,.22,.24,0,.05,-.38,!1)),e.add(xt(gt.box,ht.heli,.12,.12,1.1,0,.05,.85));const n=xt(gt.box,ht.speaker,1.9,.02,.12,0,.4,0,!1),s=xt(gt.box,ht.speaker,.04,.5,.08,.08,.1,1.38,!1);e.add(n,s);const r=new se(new di(1.2,4.5,14,1,!0),ht.spot);r.position.set(0,-2.3,-.2),r.visible=!1,e.add(r),t.userData.rotor=n,t.userData.tail=s,t.userData.beam=r,t.userData.mouth=null,li(t,1)}return yf(t,{tank:.85,auditor:.7,balloon:.9,heli:.6,swarm:.35,lobbyMini:.35,drone:.35,gull:.45}[i]??.55),Sf(t),t}function b_(i){const t=i.mesh.userData.mouth;t&&(t.sour.visible=!1,t.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function w_(i){const t=new ve,e=new ve;if(t.add(e),i==="ring"){t.add(xt(gt.box,ht.wood,.9,.5,.9,0,.25,0)),e.position.y=.95;const a=xt(gt.cyl,ht.iron,.32,1.1,.32,0,0,-.15);a.rotation.x=Math.PI/2-.15,e.add(a),e.add(xt(gt.cyl,ht.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),e.add(xt(gt.sphere,ht.iron,.42,.42,.42,0,0,.42)),e.add(xt(gt.sphere,ht.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){t.add(xt(gt.cyl,ht.iron,.7,.3,.7,0,.15,0)),e.position.y=.3;const a=xt(gt.box,ht.chipsBag,.95,1.1,.6,0,.6,0);a.rotation.x=-.35,e.add(a),e.add(xt(gt.box,ht.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let o=0;o<5;o++)e.add(xt(gt.leaf,ht.chip,.3,.08,.3,(o-2)*.17,1.2,-.3-o%2*.1,!1))}else if(i==="speaker"){const a=new ve;a.add(xt(gt.box,ht.speaker,1,1.5,.75,0,.75,0)),a.add(xt(gt.box,ht.rasG,1.02,.12,.77,0,1.38,0,!1)),a.add(xt(gt.box,ht.rasY,1.02,.12,.77,0,1.26,0,!1)),a.add(xt(gt.box,ht.rasR,1.02,.12,.77,0,1.14,0,!1));const o=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const h=xt(gt.cyl,ht.cone,c,.08,c,0,l,-.38,!1);h.rotation.x=Math.PI/2,a.add(h),o.push(h)}e.add(a),t.userData.woofers=o}else if(i==="bubble"){t.add(xt(gt.cyl,ht.speaker,.5,.25,.5,0,.12,0)),e.position.y=.3,e.add(xt(gt.cyl,ht.bottle,.36,1,.36,0,.5,0)),e.add(xt(gt.cyl,ht.rasR,.22,.2,.22,0,1.08,0));const a=xt(gt.cyl,ht.wood,.03,.8,.03,0,1.4,-.2);a.rotation.x=.5,e.add(a),e.add(xt(gt.bubbleRing,ht.rasY,1,1,1,0,1.75,-.42,!1).rotateX(.5));for(let o=0;o<3;o++)e.add(xt(gt.sphere,ht.bubble,.14+o*.04,.14+o*.04,.14+o*.04,.3-o*.25,1.7+o*.3,-.7-o*.15,!1))}else if(i==="kite"){for(let o=0;o<3;o++){const l=o/3*Math.PI*2,c=xt(gt.cyl,ht.wood,.07,1.6,.07,Math.cos(l)*.45,.7,Math.sin(l)*.45);c.rotation.set(Math.sin(l)*.28,0,-Math.cos(l)*.28),t.add(c)}e.position.y=1.55,e.add(xt(gt.cyl,ht.iron,.22,.3,.22,0,0,0).rotateZ(Math.PI/2));const a=Af();a.position.set(0,.7,0),a.scale.setScalar(.8),e.add(a),t.userData.kite=a}else if(i==="pizza"){t.add(xt(gt.box,ht.wood,1.2,.35,.9,0,.18,0));for(const o of[-1,1])t.add(xt(gt.box,ht.woodDark,.12,.9,.12,o*.45,.65,0));e.position.y=1;const a=new ve;a.add(xt(gt.box,ht.woodLight,.12,.12,1.5,0,0,-.4)),a.add(xt(gt.cyl,ht.pizzaCrust,.32,.06,.32,0,.08,-1.1)),a.add(xt(gt.cyl,ht.pizza,.27,.03,.27,0,.12,-1.1,!1)),a.rotation.x=-.35,e.add(a),t.userData.arm=a}else if(i==="lamp"){t.add(xt(gt.cone,ht.brass,.55,.7,.55,0,.35,0)),e.position.y=.7,e.add(xt(gt.capsule,ht.lampGlass,.75,.9,.75,0,.75,0,!1));const a=[];for(let o=0;o<3;o++){const l=xt(gt.sphere,ht.lampBlob,.16,.2,.16,0,.5+o*.3,0,!1);e.add(l),a.push(l)}e.add(xt(gt.cone,ht.brass,.3,.35,.3,0,1.55,0)),t.userData.blobs=a}const n=[];for(let a=0;a<5;a++){const o=xt(gt.leaf,ht.levelPip,.45,.1,.45,Math.cos(a*1.2566)*.95,.15,Math.sin(a*1.2566)*.95,!1);o.visible=a===0,t.add(o),n.push(o)}const s=new Es(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new se(s,new Ee({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,t.add(r),t.traverse(a=>{a.isMesh&&a!==r&&a.material!==ht.levelPip&&(a.castShadow=!0)}),t.userData.head=e,t.userData.pips=n,t.userData.ring=r,t}function wf(i,t){i.mesh.userData.pips.forEach((e,n)=>e.visible=n<t),i.mesh.scale.setScalar(1+(t-1)*.08)}function $r(i,t){const e=i.mesh.userData.ring;if(e.visible=t>0,t<=0)return;e.geometry.dispose();const n=new Es(1.45,1.7,40,1,0,Math.PI*2*t);n.rotateX(-Math.PI/2),e.geometry=n}function E_(){const i=new ve;return i.add(xt(gt.ember,ht.ember,1,1.3,1,0,0,0,!1)),i.add(xt(gt.ember,ht.emberCore,.5,.7,.5,0,0,0,!1)),i}function T_(){const i=new se(gt.ring,ht.ringMat);return i.castShadow=!1,i}function Ef(){const i=new ve;return i.add(xt(gt.box,ht.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(xt(gt.box,ht.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function Tf(){const i=new Js(1,.08,4,32);return i.rotateX(Math.PI/2),new se(i,new Ee({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}let Ia=null;function A_(){if(Ia)return Ia;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d");["#d8453a","#f2c94c","#d8453a","#f2c94c","#3f9a4a","#f2c94c","#d8453a","#f2c94c"].forEach((n,s)=>{t.fillStyle=n,t.fillRect(0,s*8,64,8)});const e=new ii(i);return e.colorSpace=on,e.wrapS=e.wrapT=ri,e.repeat.set(1,1.4),e.magFilter=dn,Ia=new Ie({map:e,flatShading:!0}),Ia}function Af(){const i=new ve,t=new hf([new St(0,.55),new St(.38,0),new St(0,-.75),new St(-.38,0)]),e=new Nc(t,{depth:.035,bevelEnabled:!1});e.translate(0,0,-.0175);const n=new se(e,A_());n.rotation.x=-Math.PI/2.4,n.castShadow=!0,i.add(n);const s=xt(gt.box,ht.woodDark,.025,1.3,.025,0,-.1,.03,!1),r=xt(gt.box,ht.woodDark,.76,.025,.025,0,0,.03,!1);n.add(s,r);const a=new ve;a.position.set(0,-.68,0),n.add(a);const o=[ht.rasR,ht.rasY,ht.rasG,ht.rasR,ht.rasY];let l=a;const c=[];for(let h=0;h<o.length;h++){const u=new ve;u.position.y=h?-.2:0,u.add(xt(gt.box,ht.rope,.015,.2,.015,0,-.1,0,!1));const f=new ve;f.position.y=-.2;for(const d of[-1,1]){const v=xt(gt.cone,o[h],.05,.1,.03,d*.05,0,0,!1);v.rotation.z=d*Math.PI/2,f.add(v)}u.add(f),l.add(u),l=u,c.push(u)}return i.userData.tailSegs=c,i}function Cf(){return xt(gt.sphere,ht.bubble,.28,.28,.28,0,0,0,!1)}function C_(){const i=new ve;return i.add(xt(gt.cyl,ht.pizzaCrust,.3,.06,.3,0,0,0,!0)),i.add(xt(gt.cyl,ht.pizza,.25,.03,.25,0,.04,0,!1)),i}const Fr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const R_=new Tc(-1,1,1,-1,0,1);class P_ extends De{constructor(){super(),this.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new de([0,2,0,0,2,0],2))}}const D_=new P_;class co{constructor(t){this._mesh=new se(D_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,R_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Rf extends Ts{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ti.clone(t.uniforms),this.material=new Xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new co(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class pu extends Ts{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class L_ extends Ts{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class I_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new St);this._width=n.width,this._height=n.height,e=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rf(Fr),this.copyPass.material.blending=un,this.clock=new mf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}pu!==void 0&&(a instanceof pu?n=!0:a instanceof L_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new St);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class U_ extends Ts{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Ua={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new St},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new be},cameraProjectionMatrixInverse:{value:new be},cameraWorldMatrix:{value:new be},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

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

		}`},tl={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function N_(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=z_(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=e[a],l=2*Math.PI*o/n,c=new F(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new io(s,t,t);return r.wrapS=ri,r.wrapT=ri,r.needsUpdate=!0,r}function z_(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}const za={defines:{SAMPLES:16,SAMPLE_VECTORS:Pf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new St},cameraProjectionMatrixInverse:{value:new be},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Pf(i,t,e){const n=F_(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function F_(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new F(Math.cos(r),Math.sin(r),a))}return n}class O_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,v=t-f,x=e-d;let m,p;v>x?(m=1,p=0):(m=0,p=1);const y=v-m+h,S=x-p+h,g=v-1+2*h,A=x-1+2*h,E=l&255,w=c&255,C=this.perm[E+this.perm[w]]%12,M=this.perm[E+m+this.perm[w+p]]%12,_=this.perm[E+1+this.perm[w+1]]%12;let T=.5-v*v-x*x;T<0?n=0:(T*=T,n=T*T*this.dot(this.grad3[C],v,x));let D=.5-y*y-S*S;D<0?s=0:(D*=D,s=D*D*this.dot(this.grad3[M],y,S));let G=.5-g*g-A*A;return G<0?r=0:(G*=G,r=G*G*this.dot(this.grad3[_],g,A)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),f=Math.floor(n+c),d=1/6,v=(h+u+f)*d,x=h-v,m=u-v,p=f-v,y=t-x,S=e-m,g=n-p;let A,E,w,C,M,_;y>=S?S>=g?(A=1,E=0,w=0,C=1,M=1,_=0):y>=g?(A=1,E=0,w=0,C=1,M=0,_=1):(A=0,E=0,w=1,C=1,M=0,_=1):S<g?(A=0,E=0,w=1,C=0,M=1,_=1):y<g?(A=0,E=1,w=0,C=0,M=1,_=1):(A=0,E=1,w=0,C=1,M=1,_=0);const T=y-A+d,D=S-E+d,G=g-w+d,L=y-C+2*d,O=S-M+2*d,V=g-_+2*d,X=y-1+3*d,k=S-1+3*d,Z=g-1+3*d,rt=h&255,ot=u&255,Et=f&255,jt=this.perm[rt+this.perm[ot+this.perm[Et]]]%12,et=this.perm[rt+A+this.perm[ot+E+this.perm[Et+w]]]%12,dt=this.perm[rt+C+this.perm[ot+M+this.perm[Et+_]]]%12,Ct=this.perm[rt+1+this.perm[ot+1+this.perm[Et+1]]]%12;let ut=.6-y*y-S*S-g*g;ut<0?s=0:(ut*=ut,s=ut*ut*this.dot3(this.grad3[jt],y,S,g));let kt=.6-T*T-D*D-G*G;kt<0?r=0:(kt*=kt,r=kt*kt*this.dot3(this.grad3[et],T,D,G));let Vt=.6-L*L-O*O-V*V;Vt<0?a=0:(Vt*=Vt,a=Vt*Vt*this.dot3(this.grad3[dt],L,O,V));let Xt=.6-X*X-k*k-Z*Z;return Xt<0?o=0:(Xt*=Xt,o=Xt*Xt*this.dot3(this.grad3[Ct],X,k,Z)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,f,d,v;const x=(t+e+n+s)*l,m=Math.floor(t+x),p=Math.floor(e+x),y=Math.floor(n+x),S=Math.floor(s+x),g=(m+p+y+S)*c,A=m-g,E=p-g,w=y-g,C=S-g,M=t-A,_=e-E,T=n-w,D=s-C,G=M>_?32:0,L=M>T?16:0,O=_>T?8:0,V=M>D?4:0,X=_>D?2:0,k=T>D?1:0,Z=G+L+O+V+X+k,rt=a[Z][0]>=3?1:0,ot=a[Z][1]>=3?1:0,Et=a[Z][2]>=3?1:0,jt=a[Z][3]>=3?1:0,et=a[Z][0]>=2?1:0,dt=a[Z][1]>=2?1:0,Ct=a[Z][2]>=2?1:0,ut=a[Z][3]>=2?1:0,kt=a[Z][0]>=1?1:0,Vt=a[Z][1]>=1?1:0,Xt=a[Z][2]>=1?1:0,Qt=a[Z][3]>=1?1:0,ft=M-rt+c,bt=_-ot+c,N=T-Et+c,Bt=D-jt+c,_t=M-et+2*c,Nt=_-dt+2*c,Pt=T-Ct+2*c,Zt=D-ut+2*c,q=M-kt+3*c,R=_-Vt+3*c,b=T-Xt+3*c,H=D-Qt+3*c,j=M-1+4*c,Q=_-1+4*c,tt=T-1+4*c,wt=D-1+4*c,Mt=m&255,At=p&255,ee=y&255,yt=S&255,Ht=o[Mt+o[At+o[ee+o[yt]]]]%32,ne=o[Mt+rt+o[At+ot+o[ee+Et+o[yt+jt]]]]%32,ie=o[Mt+et+o[At+dt+o[ee+Ct+o[yt+ut]]]]%32,qt=o[Mt+kt+o[At+Vt+o[ee+Xt+o[yt+Qt]]]]%32,pe=o[Mt+1+o[At+1+o[ee+1+o[yt+1]]]]%32;let re=.6-M*M-_*_-T*T-D*D;re<0?h=0:(re*=re,h=re*re*this.dot4(r[Ht],M,_,T,D));let _e=.6-ft*ft-bt*bt-N*N-Bt*Bt;_e<0?u=0:(_e*=_e,u=_e*_e*this.dot4(r[ne],ft,bt,N,Bt));let W=.6-_t*_t-Nt*Nt-Pt*Pt-Zt*Zt;W<0?f=0:(W*=W,f=W*W*this.dot4(r[ie],_t,Nt,Pt,Zt));let It=.6-q*q-R*R-b*b-H*H;It<0?d=0:(It*=It,d=It*It*this.dot4(r[qt],q,R,b,H));let st=.6-j*j-Q*Q-tt*tt-wt*wt;return st<0?v=0:(st*=st,v=st*st*this.dot4(r[pe],j,Q,tt,wt)),27*(h+u+f+d+v)}}class ci extends Ts{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=N_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Rn(this.width,this.height,{type:Gn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Xe({defines:Object.assign({},Ua.defines),uniforms:ti.clone(Ua.uniforms),vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader,blending:un,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new zx,this.normalMaterial.blending=un,this.pdMaterial=new Xe({defines:Object.assign({},za.defines),uniforms:ti.clone(za.uniforms),vertexShader:za.vertexShader,fragmentShader:za.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Xe({defines:Object.assign({},Na.defines),uniforms:ti.clone(Na.uniforms),vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader,blending:un}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Xe({uniforms:ti.clone(Fr.uniforms),vertexShader:Fr.vertexShader,fragmentShader:Fr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ul,blendDst:Cr,blendEquation:Jn,blendSrcAlpha:hl,blendDstAlpha:Cr,blendEquationAlpha:Jn}),this.blendMaterial=new Xe({uniforms:ti.clone(tl.uniforms),vertexShader:tl.vertexShader,fragmentShader:tl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Cu,blendSrc:ul,blendDst:Cr,blendEquation:Jn,blendSrcAlpha:hl,blendDstAlpha:Cr,blendEquationAlpha:Jn}),this.fsQuad=new co(null),this.originalClearColor=new Lt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Cc,this.depthTexture.format=_s,this.depthTexture.type=xs,this.normalRenderTarget=new Rn(this.width,this.height,{minFilter:dn,magFilter:dn,type:Gn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Pf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case ci.OUTPUT.Off:break;case ci.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=un,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ci.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=un,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ci.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=un,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ci.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case ci.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=un,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ci.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=un,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new O_,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){const l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new io(s,t,t,Bn,pi);return r.wrapS=ri,r.wrapT=ri,r.needsUpdate=!0,r}}ci.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const k_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ur extends Ts{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new St(t.x,t.y):new St(256,256),this.clearColor=new Lt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(r,a,{type:Gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Rn(r,a,{type:Gn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Rn(r,a,{type:Gn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=k_;this.highPassUniforms=ti.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new St(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Fr;this.copyUniforms=ti.clone(h.uniforms),this.blendMaterial=new Xe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:si,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Lt,this.oldClearAlpha=1,this.basic=new Ee,this.fsQuad=new co(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new St(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ur.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ur.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new St(.5,.5)},direction:{value:new St(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ur.BlurDirectionX=new St(1,0);ur.BlurDirectionY=new St(0,1);const B_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class G_ extends Ts{constructor(){super();const t=B_;this.uniforms=ti.clone(t.uniforms),this.material=new Nx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new co(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Se.getTransfer(this._outputColorSpace)===Re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ru?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Du?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===pc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Iu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const V_={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new F(1,1,1)},uLift:{value:new F},uSat:{value:1.08}},vertexShader:`
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
    }`},H_=new URLSearchParams(location.search).get("ao")==="1";function W_(i,t,e,n={}){const s=new I_(i,new Rn(1,1,{type:Gn})),r=new U_(t,e),a=new ci(t,e,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});a.blendIntensity=1;const o=new ur(new St(256,256),.6,.55,1),l=new Rf(V_);n.tint&&l.uniforms.uTint.value.set(...n.tint),n.lift&&l.uniforms.uLift.value.set(...n.lift),n.sat&&(l.uniforms.uSat.value=n.sat),l.uniforms.uVignette.value=n.vignette??.25;const c=new G_;for(const v of[r,a,o,l,c])s.addPass(v);let h="high",u=1,f=1;const d={composer:s,get level(){return h},setLevel(v){h=v,a.enabled=v==="high"&&H_,o.strength=v==="high"?.6:.5;const x=v==="high"?4:0;for(const m of[s.renderTarget1,s.renderTarget2])m.samples!==x&&(m.samples=x,m.dispose());d.setSize(u,f)},setSize(v,x){u=v,f=x;const m=i.getPixelRatio();s.setPixelRatio(m),s.setSize(v,x);const p=h==="high"?2:4;o.resolution.set(v*m/p,x*m/p),o.setSize(v*m/p,x*m/p)},render(v){s.render(v)}};return d}function X_(i,t,e,n,s,r=null){const{heightAt:a}=t,o=e.mobile?.5:1,l=new Set(n.life),c=new Oe,h=new Lt,u=[],f=()=>{for(let v=0;v<50;v++){const x=(Math.random()-.5)*80,m=(Math.random()-.5)*80,p=a(x,m);if(p>.8)return{x,z:m,h:p}}return{x:0,z:0,h:1}};if(l.has("butterflies")){const v=Math.round(26*o),x=new lr(.16,6,0,Math.PI);x.scale(1,1.3,1);const p=[-1,1].map(()=>new Ie({color:"#ffffff",side:je})).map(g=>{const A=new fn(x,g,v);return i.add(A),A}),y=Array.from({length:v},(g,A)=>({...f(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),S=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];y.forEach((g,A)=>{g.home={x:g.x,z:g.z},p.forEach(E=>E.setColorAt(A,h.set(S[A%S.length])))}),p.forEach(g=>g.instanceColor.needsUpdate=!0),u.push((g,A)=>{y.forEach((E,w)=>{E.a+=Math.sin(A*.7+E.ph)*1.6*g,E.x+=Math.cos(E.a)*E.sp*g,E.z+=Math.sin(E.a)*E.sp*g,Math.hypot(E.x-E.home.x,E.z-E.home.z)>5&&(E.a=Math.atan2(E.home.z-E.z,E.home.x-E.x));const C=a(E.x,E.z)+.6+Math.sin(A*2+E.ph)*.25,M=Math.sin(A*18+E.ph)*1.1;p.forEach((_,T)=>{c.position.set(E.x,C,E.z),c.rotation.set(0,-E.a+Math.PI/2,0),c.rotateZ((T?1:-1)*(.3+M*.5)),c.rotateX(-Math.PI/2),c.scale.set(T?1:-1,1,1),c.updateMatrix(),_.setMatrixAt(w,c.matrix)})}),p.forEach(E=>E.instanceMatrix.needsUpdate=!0)})}if(l.has("birds")){const x=new De;x.setAttribute("position",new de([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),x.computeVertexNormals();const m=new fn(x,new Ie({color:"#f4f4f0",side:je}),7);m.castShadow=!0,i.add(m);const p=Array.from({length:7},(y,S)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:S}));u.push((y,S)=>{p.forEach((g,A)=>{const E=S*g.sp+g.ph;c.position.set(g.cx+Math.cos(E)*g.r,g.y+Math.sin(S*.7+A)*.4,g.cz+Math.sin(E)*g.r),c.rotation.set(0,-E,Math.sin(S*.5+A)*.15);const w=1+Math.sin(S*6+A)*.35*(Math.sin(S*.4+A)>.3?1:.1),C=r?Le.smoothstep(c.position.distanceTo(r.position),3,7):1;c.scale.set(1.4*C,w*1.4*C,1.4*C),c.updateMatrix(),m.setMatrixAt(A,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("leaves")){const v=Math.round(60*o),x=new Hn(.16,.1),m=new fn(x,new Ie({color:"#ffffff",side:je}),v);i.add(m);const p=Array.from({length:v},(y,S)=>({...f(),ph:Math.random()*6,sp:1+Math.random()*1.5}));p.forEach((y,S)=>m.setColorAt(S,h.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][S%4]))),m.instanceColor.needsUpdate=!0,u.push((y,S)=>{p.forEach((g,A)=>{g.x+=g.sp*y,g.z+=Math.sin(S*.8+g.ph)*.6*y,g.x>45&&Object.assign(g,f(),{x:-45});const E=Math.max(a(g.x,g.z),.1)+.3+Math.abs(Math.sin(S*1.3+g.ph))*.9;c.position.set(g.x,E,g.z),c.rotation.set(S*3+g.ph,S*2+g.ph,S*1.5),c.scale.setScalar(1),c.updateMatrix(),m.setMatrixAt(A,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("fireflies")&&s==="skumring"){const v=Math.round(120*o),x=new Float32Array(v*3),m=new Float32Array(v*3),p=Array.from({length:v},()=>({...f(),ph:Math.random()*6})),y=new De;y.setAttribute("position",new ze(x,3)),y.setAttribute("color",new ze(m,3));const S=document.createElement("canvas");S.width=S.height=32;const g=S.getContext("2d"),A=g.createRadialGradient(16,16,0,16,16,16);A.addColorStop(0,"rgba(255,255,255,1)"),A.addColorStop(1,"rgba(255,255,255,0)"),g.fillStyle=A,g.fillRect(0,0,32,32);const E=new Pc(y,new so({size:.35,map:new ii(S),vertexColors:!0,transparent:!0,blending:si,depthWrite:!1}));E.frustumCulled=!1,i.add(E),u.push((w,C)=>{p.forEach((M,_)=>{x[_*3]=M.x+Math.sin(C*.4+M.ph)*1.2,x[_*3+1]=M.h+.5+Math.sin(C*.9+M.ph*2)*.4,x[_*3+2]=M.z+Math.cos(C*.35+M.ph)*1.2;const T=Math.max(0,Math.sin(C*1.7+M.ph*3))**3*2.5;m[_*3]=1*T,m[_*3+1]=.9*T,m[_*3+2]=.35*T}),y.attributes.position.needsUpdate=!0,y.attributes.color.needsUpdate=!0})}let d=0;return{update(v){const x=Math.min(.05,Math.max(0,v-d));d=v;for(const m of u)m(x,v)}}}function q_(i,{cell:t=.75,ext:e=68}={}){const n=Math.ceil(e*2/t)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),a=new Float32Array(n*n),o=i.lighthouse.pos,l=(w,C)=>[Math.round((w+e)/t),Math.round((C+e)/t)],c=(w,C)=>[-e+w*t,-e+C*t];let h=()=>!1;function u(){for(let w=0;w<n;w++)for(let C=0;C<n;C++){const[M,_]=c(C,w),T=i.heightAt(M,_),D=w*n+C,G=Math.hypot(M-o.x,_-o.z);let L=1.8;T<-.5||i.slopeAt(M,_)>1.1||i.extras.blocks(M,_)||h(M,_)||G<3.2?L=1/0:i.pathDist(M,_)<1.6?L=.2:T<.05&&(L=2.6),r[D]=L}}function f(){s.fill(1/0),a.fill(0);const w=[],C=(T,D)=>{w.push([T,D]);let G=w.length-1;for(;G>0;){const L=G-1>>1;if(w[L][0]<=w[G][0])break;[w[L],w[G]]=[w[G],w[L]],G=L}},M=()=>{const T=w[0],D=w.pop();if(w.length){w[0]=D;let G=0;for(;;){const L=2*G+1,O=L+1;let V=G;if(L<w.length&&w[L][0]<w[V][0]&&(V=L),O<w.length&&w[O][0]<w[V][0]&&(V=O),V===G)break;[w[V],w[G]]=[w[G],w[V]],G=V}}return T};for(let T=0;T<n;T++)for(let D=0;D<n;D++){const[G,L]=c(D,T),O=Math.hypot(G-o.x,L-o.z);O>=3.2&&O<4.2&&r[T*n+D]<1/0&&(s[T*n+D]=0,C(0,T*n+D))}const _=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;w.length;){const[T,D]=M();if(T>s[D])continue;const G=D%n,L=D/n|0;for(const[O,V,X]of _){const k=G+O,Z=L+V;if(k<0||Z<0||k>=n||Z>=n)continue;const rt=Z*n+k,ot=r[rt];if(ot===1/0)continue;const Et=T+X*t*(ot+r[D])*.5;Et<s[rt]&&(s[rt]=Et,a[rt]=a[D]+X*t,C(Et,rt))}}}const d=(w,C)=>{const[M,_]=l(w,C);return M<0||_<0||M>=n||_>=n?1/0:s[_*n+M]};function v(w,C){const[M,_]=l(w,C);let T=d(w,C),D=0,G=0;for(let O=-1;O<=1;O++)for(let V=-1;V<=1;V++){if(!V&&!O)continue;const X=M+V,k=_+O;if(X<0||k<0||X>=n||k>=n)continue;const Z=s[k*n+X];Z<T&&(T=Z,D=V,G=O)}const L=Math.hypot(D,G)||1;return[D/L,G/L,T]}const x=(w,C)=>{const[M,_]=l(w,C);return M<0||_<0||M>=n||_>=n?-1:_*n+M},m=(w,C)=>{const M=x(w,C);return M<0||s[M]===1/0?0:a[M]};function p(){const w=[];for(const C of i.paths){const M=C.samples.find(_=>i.heightAt(_.x,_.z)>-.4&&m(_.x,_.z)>0);M&&w.push([M.x,M.z])}return w}function y(w,C=22,{near:M=8,minFrac:_=.6}={}){const T=p(),D=Math.max(0,...T.map(([V,X])=>m(V,X))),G=(V,X)=>{const k=i.heightAt(V,X);return k>-.4&&k<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([Z,rt])=>i.heightAt(V+Z,X+rt)<-.9)},L=T.map(([V,X])=>{const k=[],Z=[],rt=Math.ceil(M/t),[ot,Et]=l(V,X);for(let et=-rt;et<=rt;et++)for(let dt=-rt;dt<=rt;dt++){const[Ct,ut]=c(ot+dt,Et+et);Math.hypot(Ct-V,ut-X)>M||m(Ct,ut)<_*D||(G(Ct,ut)?k.push([Ct,ut]):i.heightAt(Ct,ut)>.3&&i.slopeAt(Ct,ut)<.6&&Z.push([Ct,ut]))}return(k.length?k:Z).sort(()=>Math.random()-.5)}).filter(V=>V.length).sort(()=>Math.random()-.5),O=[];for(let V=0;O.length<w&&V<4;V++){for(const X of L){const k=X.find(Z=>O.every(rt=>Math.hypot(rt[0]-Z[0],rt[1]-Z[1])>C));if(k&&O.push(k),O.length>=w)break}C=Math.min(C,6)}return O}let S=null;function g(w,C){if(!S){S=new Float32Array(n*n);for(let V=0;V<n;V++)for(let X=0;X<n;X++){const[k,Z]=c(X,V);S[V*n+X]=i.isWalkable(k,Z)?i.heightAt(k,Z)<.05?1.6:1:1/0}}const M=new Float64Array(n*n).fill(1/0),_=[],T=(V,X)=>{_.push([V,X]);let k=_.length-1;for(;k>0;){const Z=k-1>>1;if(_[Z][0]<=_[k][0])break;[_[Z],_[k]]=[_[k],_[Z]],k=Z}},D=()=>{const V=_[0],X=_.pop();if(_.length){_[0]=X;let k=0;for(;;){const Z=2*k+1,rt=Z+1;let ot=k;if(Z<_.length&&_[Z][0]<_[ot][0]&&(ot=Z),rt<_.length&&_[rt][0]<_[ot][0]&&(ot=rt),ot===k)break;[_[ot],_[k]]=[_[k],_[ot]],k=ot}}return V},G=x(w,C);if(G<0)return null;M[G]=0,T(0,G);const L=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;_.length;){const[V,X]=D();if(V>M[X])continue;const k=X%n,Z=X/n|0;for(const[rt,ot,Et]of L){const jt=k+rt,et=Z+ot;if(jt<0||et<0||jt>=n||et>=n)continue;const dt=et*n+jt,Ct=S[dt];if(Ct===1/0)continue;const ut=V+Et*t*Ct;ut<M[dt]&&(M[dt]=ut,T(ut,dt))}}const O=(V,X)=>{const k=x(V,X);return k<0?1/0:M[k]};return{at:O,dir(V,X){const[k,Z]=l(V,X);let rt=O(V,X),ot=0,Et=0;for(let et=-1;et<=1;et++)for(let dt=-1;dt<=1;dt++){if(!dt&&!et)continue;const Ct=k+dt,ut=Z+et;Ct<0||ut<0||Ct>=n||ut>=n||M[ut*n+Ct]<rt&&(rt=M[ut*n+Ct],ot=dt,Et=et)}const jt=Math.hypot(ot,Et)||1;return[ot/jt,Et/jt]}}}const A=()=>{let w=0;for(const C of s)C<1/0&&C>w&&(w=C);return w},E=()=>{u(),f()};return E(),{at:d,dir:v,coastPoints:y,roadEnds:p,routeLen:m,walkField:g,rebuild:E,setBlock(w){h=w,E()},maxDist:A(),N:n,cell:t}}function Df(i,t=700,{blending:e=si,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const a=new Lt(r||"#000000"),o=new Float32Array(t*3),l=new Float32Array(t*3),c=new Float32Array(t*3),h=new Float32Array(t*3),u=new Float32Array(t),f=new Float32Array(t),d=new Float32Array(t);let v=0;const x=new De;x.setAttribute("position",new ze(o,3)),x.setAttribute("color",new ze(l,3));const m=document.createElement("canvas");m.width=m.height=64;const p=m.getContext("2d"),y=p.createRadialGradient(32,32,0,32,32,32);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.4,"rgba(255,255,255,0.6)"),y.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=y,p.fillRect(0,0,64,64);const S=new so({size:n,map:new ii(m),vertexColors:!0,transparent:!0,opacity:s,blending:e,depthWrite:!1}),g=new Pc(x,S);g.frustumCulled=!1,i.add(g);for(let C=0;C<t;C++)o[C*3+1]=-999;const A=new Lt;function E(C,M,_,{n:T=10,color:D="#ffb347",speed:G=4,up:L=3,life:O=.7,gravity:V=9,spread:X=1}={}){A.set(D);for(let k=0;k<T;k++){const Z=v;v=(v+1)%t,o[Z*3]=C,o[Z*3+1]=M,o[Z*3+2]=_;const rt=Math.random()*Math.PI*2,ot=G*(.4+Math.random()*.6)*X;c[Z*3]=Math.cos(rt)*ot,c[Z*3+1]=L*(.5+Math.random()),c[Z*3+2]=Math.sin(rt)*ot,h[Z*3]=A.r,h[Z*3+1]=A.g,h[Z*3+2]=A.b,f[Z]=u[Z]=O*(.6+Math.random()*.6),d[Z]=V}}function w(C){for(let M=0;M<t;M++){if(u[M]<=0)continue;if(u[M]-=C,u[M]<=0){o[M*3+1]=-999,l[M*3]=l[M*3+1]=l[M*3+2]=0;continue}c[M*3+1]-=d[M]*C,o[M*3]+=c[M*3]*C,o[M*3+1]+=c[M*3+1]*C,o[M*3+2]+=c[M*3+2]*C;const _=u[M]/f[M];l[M*3]=h[M*3]*_+a.r*(1-_),l[M*3+1]=h[M*3+1]*_+a.g*(1-_),l[M*3+2]=h[M*3+2]*_+a.b*(1-_)}x.attributes.position.needsUpdate=!0,x.attributes.color.needsUpdate=!0}return{emit:E,update:w}}const Y_={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},$_={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},j_={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function mu(i=""){const t=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(t)?"switch":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(t)?"ps":"xbox"}function Z_(i){const t=i==="switch";return{build:t?1:0,carry:t?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function K_(i){const t=new Set,e={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=g=>e.pressed.add(g),s=g=>{e.device=g};addEventListener("keydown",g=>{if(s("kb"),(g.code==="Space"||g.code.startsWith("Arrow")||g.code==="Tab")&&g.preventDefault(),g.repeat)return;t.add(g.code);const A={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Digit4:"b4",Digit5:"b5",Digit6:"b6",Digit7:"b7",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",Numpad4:"b4",Numpad5:"b5",Numpad6:"b6",Numpad7:"b7",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};A[g.code]&&n(A[g.code])}),addEventListener("keyup",g=>t.delete(g.code)),addEventListener("blur",()=>t.clear()),i.addEventListener("wheel",g=>{g.preventDefault(),s("kb"),e.zoom=Fa(e.zoom*(g.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",g=>g.preventDefault());const r=new Map;let a=0,o=1,l=null;const c=g=>({x:g.clientX/innerWidth*2-1,y:-(g.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",g=>{if(s(g.pointerType==="touch"?"touch":"kb"),g.pointerType==="mouse"&&g.button===2){l={x:g.clientX},i.setPointerCapture(g.pointerId);return}g.pointerType==="mouse"&&g.button!==0||(r.set(g.pointerId,{e:g,t:performance.now(),x0:g.clientX,y0:g.clientY}),r.size===2&&(a=gu(r),o=e.zoom))}),i.addEventListener("pointermove",g=>{if(l){e.lookDelta+=(g.clientX-l.x)*.008,l.x=g.clientX;return}const A=r.get(g.pointerId);A&&(A.e=g,r.size===2&&a>0&&(e.zoom=Fa(o*(a/gu(r)),.55,4.5)))});const h=g=>{if(l&&g.button===2){l=null;return}const A=r.get(g.pointerId);A&&r.size===1&&a===0&&Math.hypot(g.clientX-A.x0,g.clientY-A.y0)<12&&e.clicks.push(c(g)),r.delete(g.pointerId),r.size<2&&(a=0)};i.addEventListener("pointerup",h),i.addEventListener("pointercancel",g=>{r.delete(g.pointerId),l=null,a=0});const u=document.getElementById("stick"),f=document.getElementById("knob"),d={x:0,z:0};let v=null;const x=g=>{const A=u.getBoundingClientRect();let E=g.clientX-(A.left+A.width/2),w=g.clientY-(A.top+A.height/2);const C=A.width/2,M=Math.hypot(E,w);M>C&&(E*=C/M,w*=C/M),f.style.transform=`translate(${E}px, ${w}px)`;const _=M/C<.15?0:1;d.x=E/C*_,d.z=w/C*_};u.addEventListener("pointerdown",g=>{s("touch"),v=g.pointerId,u.setPointerCapture(g.pointerId),x(g)}),u.addEventListener("pointermove",g=>{g.pointerId===v&&x(g)});const m=g=>{g.pointerId===v&&(v=null,d.x=d.z=0,f.style.transform="")};u.addEventListener("pointerup",m),u.addEventListener("pointercancel",m);const p=(g,A)=>g.addEventListener("pointerdown",E=>{E.preventDefault(),E.stopPropagation(),E.pointerType==="touch"&&s("touch"),n(A)});p(document.getElementById("btn-build"),"build"),p(document.getElementById("btn-carry"),"carry"),p(document.getElementById("btn-next"),"next"),p(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((g,A)=>p(g,"b"+(A+1)));let y=[];addEventListener("gamepadconnected",g=>{e.padId=g.gamepad.id,e.padKind=mu(g.gamepad.id)});function S(){const A=[...navigator.getGamepads?navigator.getGamepads():[]].find(L=>L&&L.connected);if(!A)return null;A.id!==e.padId&&(e.padId=A.id,e.padKind=mu(A.id));const E=Z_(e.padKind),w=A.buttons.map(L=>L.pressed||L.value>.5),C=L=>w[L]&&!y[L],M=L=>Math.abs(L)<.2?0:(L-Math.sign(L)*.2)/.8;let _=M(A.axes[0]||0),T=M(A.axes[1]||0);w[14]&&(_=-1),w[15]&&(_=1),w[12]&&(T=-1),w[13]&&(T=1);const D=M(A.axes[2]||0);return(_||T||D||w.some(Boolean))&&s("pad"),C(E.build)&&n("build"),C(E.carry)&&n("carry"),C(E.next)&&n("next"),C(E.prev)&&n("selPrev"),C(E.nextSel)&&n("selNext"),C(E.pause)&&n("pause"),C(E.back)&&n("restart"),C(2)&&e.padKind!=="switch"&&n("next"),y=w,{x:_,z:T,look:D,zoomIn:w[E.zoomIn],zoomOut:w[E.zoomOut]}}return e.update=g=>{let A=0,E=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(A-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(A+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(E-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(E+=1);const w=S();w&&(w.x||w.z)&&(A=w.x,E=w.z),(d.x||d.z)&&(A=d.x,E=d.z);const C=Math.hypot(A,E);C>1&&(A/=C,E/=C),e.move.x=A,e.move.z=E,e.look=e.lookDelta+(w?w.look*2.2*g:0),e.lookDelta=0,w!=null&&w.zoomIn&&(e.zoom=Fa(e.zoom/(1+g*1.2),.55,4.5)),w!=null&&w.zoomOut&&(e.zoom=Fa(e.zoom*(1+g*1.2),.55,4.5))},e.labels=()=>e.device==="pad"?Y_[e.padKind]:e.device==="touch"?j_:$_,e.consume=g=>e.pressed.delete(g),e.clear=()=>{e.pressed.clear(),e.clicks.length=0},e}const Fa=(i,t,e)=>Math.max(t,Math.min(e,i));function gu(i){const[t,e]=[...i.values()].map(n=>n.e);return Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY)||1}let Be=null,Qs=null,jr=null;function J_(){if(Be){Be.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;Be=new i,Qs=Be.createGain(),Qs.gain.value=.5,Qs.connect(Be.destination),jr=Be.createBuffer(1,Be.sampleRate*2,Be.sampleRate);const t=jr.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;Q_()}const Lf=()=>Be?{ctx:Be,noiseBuf:jr}:null;function $e(i,t,{type:e="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!Be)return;const a=Be.currentTime+r,o=Be.createOscillator(),l=Be.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(Qs),o.start(a),o.stop(a+t+.02)}function is(i,{vol:t=.3,freq:e=800,q:n=.7,delay:s=0}={}){if(!Be)return;const r=Be.currentTime+s,a=Be.createBufferSource();a.buffer=jr;const o=Be.createBiquadFilter();o.type="lowpass",o.frequency.value=e,o.Q.value=n;const l=Be.createGain();l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),a.connect(o).connect(l).connect(Qs),a.start(r,Math.random()),a.stop(r+i+.02)}function Q_(){const i=Be.createBufferSource();i.buffer=jr,i.loop=!0;const t=Be.createBiquadFilter();t.type="lowpass",t.frequency.value=420;const e=Be.createGain();e.gain.value=.035;const n=Be.createOscillator(),s=Be.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(e.gain),i.connect(t).connect(e).connect(Qs),i.start(),n.start()}let vu=0;const He={pickup(){if(!Be)return;const i=Be.currentTime,t=i-vu<.4?1.12:1;vu=i,$e(880*t+Math.random()*60,.12,{type:"triangle",vol:.12}),$e(1320*t,.1,{type:"sine",vol:.06,delay:.04})},puff(){is(.18,{vol:.07,freq:600,q:.3}),$e(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)is(.05,{vol:.1,freq:3500,delay:i*.03});$e(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>$e(i,.11,{type:"square",vol:.025})),$e(98,.3,{vol:.08})},chill(){$e(330,.5,{type:"sine",vol:.07,slide:160}),$e(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){$e(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){is(.12,{vol:.12,freq:500}),$e(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){is(.45,{vol:.28,freq:380}),$e(90,.35,{vol:.18,slide:-50})},horn(){$e(196,.5,{type:"sawtooth",vol:.035}),$e(147,.55,{type:"sine",vol:.06})},hit(){is(.05,{vol:.08,freq:2500})},die(){$e(420,.18,{type:"triangle",vol:.09,slide:-280}),is(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,t)=>$e(i,.25,{type:"triangle",vol:.1,delay:t*.06}))},upgrade(){[523,659,784,1047].forEach((i,t)=>$e(i,.22,{type:"triangle",vol:.1,delay:t*.07}))},stone(){$e(660,.2,{type:"sine",vol:.1,slide:200})},lose(){$e(220,.6,{type:"sawtooth",vol:.06,slide:-120}),is(.3,{vol:.08,freq:300})},stun(){$e(700,.4,{type:"square",vol:.05,slide:-500})},deny(){$e(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,t)=>$e(i,.3,{type:"sawtooth",vol:.04,delay:t*.18}))},win(){[523,659,784,1047,1319].forEach((i,t)=>$e(i,.4,{type:"triangle",vol:.12,delay:t*.12}))}},oc=172,Ei=60/oc/4,ss=i=>440*Math.pow(2,(i-69)/12),xu={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},el={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},_u=[["build",8],["drop",16],["break",8],["drop",16]];function tM(i,t,e){const n=xu[e]||xu.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const a=i.createGain();a.gain.value=0,s.connect(r).connect(a).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,a.connect(o);const l={};for(const q of["drums","bass","pad","arp","lead"]){const R=i.createGain();R.gain.value=0,R.connect(s),l[q]=R}const c={};for(const q of["pad","bass"]){const R=i.createGain();R.gain.value=1,R.connect(l[q]),c[q]=R}const h=(q,R)=>{const b=i.createBuffer(2,Math.floor(i.sampleRate*q),i.sampleRate);for(let H=0;H<2;H++){const j=b.getChannelData(H);for(let Q=0;Q<j.length;Q++)j[Q]=(Math.random()*2-1)*Math.pow(1-Q/j.length,R)}return b},u=i.createConvolver();u.buffer=h(2.4,2.5);const f=i.createGain();f.gain.value=n.space,u.connect(f).connect(s);const d=i.createConvolver();d.buffer=h(.5,.4);const v=i.createGain();v.gain.value=0,d.connect(v).connect(l.drums);const x=i.createDelay(1);x.delayTime.value=Ei*3;const m=i.createGain();m.gain.value=.38;const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=2400;const y=i.createStereoPanner(),S=i.createOscillator(),g=i.createGain();S.frequency.value=oc/60/3,g.gain.value=.8,S.connect(g).connect(y.pan),S.start(),x.connect(p).connect(m).connect(x),p.connect(y).connect(l.arp);const A=i.createBiquadFilter();A.type="highpass",A.frequency.value=180;const E=i.createBiquadFilter();E.type="lowpass",E.frequency.value=n.padCut,E.Q.value=2;const w=i.createOscillator(),C=i.createGain();w.frequency.value=.07,C.gain.value=n.padCut*.45,w.connect(C).connect(E.frequency),w.start();const M=i.createDelay(.05);M.delayTime.value=.014;const _=i.createOscillator(),T=i.createGain();_.frequency.value=.5,T.gain.value=.004,_.connect(T).connect(M.delayTime),_.start();const D=i.createStereoPanner();D.pan.value=.6,A.connect(E),E.connect(c.pad),E.connect(M).connect(D).connect(c.pad),E.connect(u);const G=i.createBiquadFilter();G.type="lowpass",G.frequency.value=420,G.Q.value=6;const L=i.createOscillator(),O=i.createGain();if(L.frequency.value=oc/60/4,O.gain.value=260,L.connect(O).connect(G.frequency),L.start(),n.drive>0){const q=i.createWaveShaper(),R=new Float32Array(1024);for(let b=0;b<1024;b++){const H=b/512-1;R[b]=Math.tanh(H*(1+n.drive*6))}q.curve=R,G.connect(q).connect(c.bass)}else G.connect(c.bass);const V=i.createBiquadFilter();V.type="lowpass",V.frequency.value=3600,V.Q.value=3,V.connect(l.lead),V.connect(x),V.connect(u);const X=(q,R,b,H,j,Q)=>{q.gain.setValueAtTime(1e-4,R),q.gain.exponentialRampToValueAtTime(H,R+b),q.gain.setValueAtTime(H,R+Math.max(b,Q-j)),q.gain.exponentialRampToValueAtTime(1e-4,R+Q)},k=(q,R)=>{const b=i.createStereoPanner();return b.pan.value=R,q.connect(b),b},Z=(q,R,b,H,j,Q,tt="bandpass",wt=0)=>{const Mt=i.createBufferSource();Mt.buffer=t;const At=i.createBiquadFilter();At.type=tt,At.frequency.value=b,At.Q.value=H;const ee=i.createGain();X(ee,q,.001,j,R*.8,R),Mt.connect(At).connect(ee);const yt=wt?k(ee,wt):ee;for(const Ht of Q)yt.connect(Ht);Mt.start(q,Math.random()*1.5),Mt.stop(q+R+.02)},rt=(q,R=1)=>{const b=i.createOscillator(),H=i.createGain();b.frequency.setValueAtTime(160,q),b.frequency.exponentialRampToValueAtTime(44,q+.11),X(H,q,.002,1*R,.2,.3),b.connect(H).connect(l.drums),b.start(q),b.stop(q+.32),Z(q,.012,3500,.7,.35*R,[l.drums],"highpass");for(const j of Object.values(c))j.gain.cancelScheduledValues(q),j.gain.setValueAtTime(.35,q),j.gain.linearRampToValueAtTime(1,q+.2)},ot=(q,R=1)=>{Z(q,.17,1900,.8,.5*R,[l.drums,d]);for(const[b,H,j]of[[200,160,.3],[340,260,.14]]){const Q=i.createOscillator(),tt=i.createGain();Q.type="triangle",Q.frequency.setValueAtTime(b,q),Q.frequency.exponentialRampToValueAtTime(H,q+.08),X(tt,q,.001,j*R,.06,.11),Q.connect(tt).connect(l.drums),Q.start(q),Q.stop(q+.13)}v.gain.setValueAtTime(.9*R,q),v.gain.setValueAtTime(1e-4,q+.21)};let Et=1;const jt=(q,R,b)=>{Et=-Et,Z(q,b?.14:.035,9e3,.6,(b?.12:.08)*R,[l.drums],"highpass",Et*.35)},et=(q,R,b)=>{for(const Q of[-n.reeseDetune,n.reeseDetune]){const tt=i.createOscillator(),wt=i.createGain();tt.type="sawtooth",tt.frequency.value=ss(R),tt.detune.value=Q,X(wt,q,.02,.2,.1,b),k(tt.connect(wt),Q>0?.25:-.25).connect(G),tt.start(q),tt.stop(q+b+.05)}const H=i.createOscillator(),j=i.createGain();H.frequency.value=ss(R-12),X(j,q,.02,.42,.1,b),H.connect(j).connect(c.bass),H.start(q),H.stop(q+b+.05)},dt=(q,R,b,H=1)=>{for(const j of R.slice(1))for(const[Q,tt]of[[-9,-.6],[0,0],[8,.6]]){const wt=i.createOscillator(),Mt=i.createGain();wt.type=n.pad,wt.frequency.value=ss(j),wt.detune.value=Q,X(Mt,q,.8,.026*H,1.4,b),k(wt.connect(Mt),tt).connect(A),wt.start(q),wt.stop(q+b+.1)}},Ct=(q,R,b=1)=>{const H=i.createOscillator(),j=i.createGain();H.type="square",H.frequency.value=ss(R+n.arpOct);const Q=i.createBiquadFilter();Q.type="lowpass",Q.frequency.value=3200,X(j,q,.003,.05*b,.08,Ei*1.6),H.connect(Q).connect(j),j.connect(l.arp),j.connect(x),H.start(q),H.stop(q+Ei*2)},ut=(q,R,b,H)=>{const j=b*Ei;for(const Q of[-6,6]){const tt=i.createOscillator(),wt=i.createGain();tt.type=n.lead,H?(tt.frequency.setValueAtTime(ss(H),q),tt.frequency.exponentialRampToValueAtTime(ss(R),q+.05)):tt.frequency.value=ss(R),tt.detune.value=Q;const Mt=i.createOscillator(),At=i.createGain();Mt.frequency.value=5.5,At.gain.value=9,Mt.connect(At).connect(tt.detune),Mt.start(q+.12),Mt.stop(q+j+.05),X(wt,q,.01,.07,Math.min(.12,j*.4),j),k(tt.connect(wt),Q>0?.2:-.2).connect(V),tt.start(q),tt.stop(q+j+.05)}};let kt=0,Vt=0,Xt=null,Qt=0,ft=.7,bt=!1,N=0;const Bt=_u.reduce((q,[,R])=>q+R,0),_t=()=>{if(Qt<.5)return"ambient";let q=N%Bt;for(const[R,b]of _u){if(q<b)return R;q-=b}return"drop"},Nt=()=>{const q=i.currentTime,R=(H,j)=>{H.gain.cancelScheduledValues(q),H.gain.setTargetAtTime(j,q,.8)},b=Qt;R(l.drums,.1+.85*b),R(l.bass,.3+.6*b),R(l.pad,.75-.2*b),R(l.arp,.35+.3*b),R(l.lead,.55+.35*b),a.gain.cancelScheduledValues(q),a.gain.setTargetAtTime(bt?0:ft*.8,q,.3)},Pt=q=>q%2?Ei*.12:0,Zt=()=>{for(;Vt<i.currentTime+.15;){const q=kt%32,R=Math.floor(kt/16),b=Math.floor(kt/32)%n.chords.length,H=n.chords[b];q%16===0&&kt>0&&Qt>.5&&N++;const j=_t(),Q=Vt+Pt(q),tt=N%8;if(j==="drop"||j==="build"){const Mt=tt%4===3&&q>=16?el.FILL:tt>=6?el.B:el.A,At=j==="build"&&tt<4;Mt.k[q]==="x"&&!(At&&q%8)&&rt(Q),Mt.s[q]==="x"&&!At&&ot(Q,j==="build"?.7:1),Mt.g[q]==="x"&&ot(Q,.3),(!At||q%2===0)&&jt(Q,q%2?.6:1,q%8===6)}else j==="break"?(q%4===2&&jt(Q,.6,!1),(q===0||q===16)&&rt(Q,.4)):q%4===2&&jt(Q,.45,!1);if(q===0&&(dt(Q,H,Ei*32,j==="break"?1.3:1),et(Q,H[0],Ei*(j==="drop"?14:30))),j==="drop"&&q===16&&et(Q,H[0]+(b%2?3:7),Ei*14),q%n.arpRate===0&&j!=="break"&&Ct(Q,H[1+q/n.arpRate%4]+(q>=16?12:0),j==="ambient"?.7:1),j==="drop"||(j==="break"||j==="ambient")&&Math.floor(R/4)%2===1){const Mt=n.hook.findIndex(([At])=>At===q);if(Mt>=0){const[,At,ee]=n.hook[Mt];ut(Q,At+(j==="ambient"?-12:0),ee,Mt>0?n.hook[Mt-1][1]:0)}}Vt+=Ei,kt++}};return{start(){Xt||(Vt=i.currentTime+.1,Xt=setInterval(Zt,25),Nt())},stop(){clearInterval(Xt),Xt=null,a.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity(q){q>.5&&Qt<=.5&&(N=0),Qt=q,Nt()},setVolume(q){ft=q,Nt()},setMuted(q){bt=q,Nt()},get muted(){return bt},get volume(){return ft},rms(){const q=new Float32Array(o.fftSize);return o.getFloatTimeDomainData(q),Math.sqrt(q.reduce((R,b)=>R+b*b,0)/q.length)},get intensity(){return Qt},get section(){return _t()},tap(q){a.connect(q)}}}const $t={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:.4,upgradeTime:[15,20,25,30],keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,chillMax:100,stressInvuln:1,stressPush:7,airStress:10,faintTime:6,faintLoss:.25,wakeChill:.6,regen:3,regenReach:9,bagChance:.05,bagHeal:25,bagLife:20,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8]},tr={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!0,tip:"rask · bakke + luft"},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5,tip:"splash · kun bakke"},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2,tip:"bremser i ring"},bubble:{name:"Bobleblåser",cost:20,range:7,dmg:2.5,cooldown:.38,air:!0,ground:!1,trap:1.4,tip:"fanger flyvere · kun luft"},kite:{name:"Papirdrage",cost:40,range:13,dmg:5,cooldown:2.8,air:!0,ground:!1,zone:3.4,hover:2.4,tip:"sone, lang · kun luft"},pizza:{name:"Pizza-katapult",cost:55,range:14,dmg:24,cooldown:3,air:!1,splash:2.9,tip:"lang splash · kun bakke"},lamp:{name:"Lavalampe",cost:50,range:4.6,dmg:1.1,cooldown:.3,air:!0,slowTime:.5,tip:"aura, bremser alt"}},ho={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0",stress:10},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0",resist:{ring:.5,chips:1.5},stress:15},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0,swoop:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a",stress:8},auditor:{name:"Revisoren",hp:70,speed:1.6,embers:8,anim:7,puff:"#9fffb0",shield:.25,resist:{lamp:1.5},info:"skjold forfra (×0,25), ikke mot aura",stress:14},complainer:{name:"Naboklageren",hp:12,speed:4.3,embers:3,anim:18,puff:"#ffb0f0",resist:{chips:.5,ring:1.5},info:"rask, mørtel bommer",stress:10},lobbyist:{name:"Lobbyisten",hp:55,speed:1.9,embers:6,anim:9,puff:"#ffe08a",splits:3,resist:{speaker:.5,pizza:1.5},noMood:!0,info:"deler seg i tre, immun mot stemning",stress:12},lobbyMini:{name:"Mini-lobbyist",hp:14,speed:2.7,embers:1,anim:14,puff:"#ffe08a",resist:{speaker:.5,pizza:1.5},noMood:!0,stress:8},drone:{name:"Overvåkings-drone",hp:9,speed:4.6,embers:1,anim:30,puff:"#c8d8ff",flying:!0,alt:3.6,resist:{bubble:1.5,lamp:1.5,kite:.5},info:"rask sverm i lufta"},balloon:{name:"Ballong-byråkraten",hp:150,speed:1.05,embers:14,anim:2,puff:"#ffffff",flying:!0,alt:5.6,resist:{bubble:.5,kite:1.5},info:"seig, høyt oppe"},heli:{name:"Mini-helikopteret",hp:48,speed:2.5,embers:7,anim:40,puff:"#ffffff",flying:!0,alt:4.6,blind:{every:6,dur:3,range:9},resist:{ring:.5,kite:1.5},info:"søkelys blender et tårn i 3 s"}},eM=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],hn=new URLSearchParams(location.search),If=hn.has("demo");if(hn.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(vr.length))}catch{}let wn=Number(hn.get("world"));if(!Number.isInteger(wn))try{wn=Number(localStorage.getItem("glod-world"))||0}catch{wn=0}wn=Math.max(0,Math.min(Yr()-1,wn));try{localStorage.setItem("glod-world",String(wn))}catch{}const tn=vr[wn],Oc=o_(tn,eM);function nM(){return 1}const iM=Math.max(1,Math.min(20,Number(hn.get("speed"))||1)),Ui=matchMedia("(pointer: coarse)").matches||hn.has("mobile"),lc={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:2}};let ai=Ui?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(ai=i)}catch{}(hn.get("q")==="high"||hn.get("q")==="low")&&(ai=hn.get("q"));const Zr={mobile:Ui,shadow:lc[ai].shadow,dprCap:lc[ai].dprCap},sM={high:["rock","tree","tower","figure"],low:["rock","tree","tower","figure"]};function Uf(i){const t=hn.has("ol")?hn.get("ol").split(","):sM[i];gf(Object.fromEntries(["rock","tree","tower","figure"].map(e=>[e,t.includes(e)])))}Uf(ai);const Nf=document.getElementById("game"),_n=new ex({canvas:Nf,antialias:!Ui,powerPreference:"high-performance",preserveDrawingBuffer:hn.has("shot")});let Hi=Math.min(devicePixelRatio||1,Zr.dprCap);_n.setPixelRatio(Hi);_n.shadowMap.enabled=!0;_n.shadowMap.type=Au;_n.toneMapping=pc;let ps="dag";try{ps=localStorage.getItem("glod-tid")||"dag"}catch{}hn.get("tid")&&(ps=hn.get("tid"));const Vn=ps==="skumring"&&tn.skyDusk?tn.skyDusk:tn.sky;_n.toneMappingExposure=Vn.exposure;_n.info.autoReset=!1;const Me=new nx,zf=new Lt(Vn.fog);Me.background=zf;Me.fog=new Rc(zf,...tn.fog??[55,115]);const We=new In(38,1,.5,200),rM=new Fx(Vn.hemiSky,Vn.hemiGround,Vn.hemi);Me.add(rM);const ln=new Bx(Vn.sun,Vn.sunI);ln.castShadow=!0;ln.shadow.mapSize.set(Zr.shadow,Zr.shadow);Object.assign(ln.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});ln.shadow.bias=-8e-4;ln.shadow.normalBias=.03;Me.add(ln,ln.target);qx(Me);const Wt=v_(Me,Zr,tn);Wt.grass.setLevel(ai);const aM=X_(Me,Wt,Zr,tn,ps,We),Tn=q_(Wt);window.__nav=Tn;const Ne=Df(Me,Ui?450:800),fr=Df(Me,Ui?120:220,{blending:Xi,size:1.6,opacity:.45,fadeTo:Vn.fog}),ta=W_(_n,Me,We,Vn.grade);ta.setLevel(ai);const fe=K_(Nf);function ea(){const i=innerWidth,t=innerHeight;_n.setSize(i,t,!1),We.aspect=i/t,We.updateProjectionMatrix(),ta.setSize(i,t),Xx(Ui?2:2.2,_n.getPixelRatio(),i,t)}function Ff(i){ai=i;try{localStorage.setItem("glod-quality",i)}catch{}const t=lc[i];ln.shadow.mapSize.set(t.shadow,t.shadow),ln.shadow.map&&(ln.shadow.map.dispose(),ln.shadow.map=null),Hi=Math.min(devicePixelRatio||1,t.dprCap),_n.setPixelRatio(Hi),ta.setLevel(i),Wt.grass.setLevel(i),Uf(i),ea(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",ea);ea();const K={phase:"title",wave:0,timer:0,embers:$t.startEmbers,lights:hr,spawnQueue:[],leaks:{},seen:{},time:0,sel:0,paused:!1},nl=$t.upgradeTime.length+1,Gi=["ring","chips","speaker","bubble","kite","pizza","lamp"];let Ci=tn.camYaw??0;const Mu=new Gx,Cn=[],Un=[],Kn=[],hs=[],er=[],Or=[],en=lo(y_(),"figure"),U={x:Wt.lighthouse.pos.x+1,z:Wt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:$t.chillMax,inv:0,faint:0,faints:0};en.position.set(U.x,Wt.heightAt(U.x,U.z),U.z);Me.add(en);const kc=new qr("#ffcf70",2.6,6,1.8);kc.position.set(.8,.45,-.3);en.add(kc);const le=i=>document.getElementById(i),Je={chill:le("hud-chill"),lights:le("hud-lights"),embers:le("hud-embers"),wave:le("hud-wave"),timer:le("hud-timer")},Di=le("hint"),fi=le("build-panel"),Bc=le("btn-next"),Gc=le("fps");hn.has("debug")||Gc.classList.add("hidden");let Ii={};function Nn(i,t,e,n){Ii[t]!==e&&(Ii[t]=e,i.querySelector("b").textContent=e,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const oM=4;let Of=0;function yu(i){if(Di.textContent===i)return;Di.textContent=i,Of=0,Di.classList.remove("faded");const t=fi.classList.contains("hidden")?null:fi.getBoundingClientRect();Di.style.bottom=t&&t.height?`${Math.round(innerHeight-t.top+6)}px`:""}function lM(i){(Of+=i)>oM&&Di.classList.add("faded")}function kf(i){K.phase="prep",K.timer=i,Bc.classList.remove("hidden"),cM()}function cM(){const i=K.wave+1,t=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);K.spawnPoints=Tn.coastPoints(t,24),K.spawnPoints.length||(K.spawnPoints=Tn.coastPoints(t,8,{near:12,minFrac:.5})),K.spawnPoints.length||(K.spawnPoints=Tn.roadEnds().slice(0,t)),dM()}function Bf(){K.wave+=1,K.phase="wave",Bc.classList.add("hidden"),K.spawnQueue=[];for(const i of Oc[K.wave-1]){const t=K.wave<=$t.earlyScale.length?K.wave-1:-1,e=K.spawnPoints.length,n=ho[i.type].flying?tn.balance.air??1:1,s=Math.max(1,Math.round(i.n*(tn.balance.count||1)*n*(t>=0?$t.earlyScale[t]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,e));for(let a=0;a<e;a++)for(let o=0;o<r;o++)K.spawnQueue.push({t:(i.at??0)+o*i.gap+a*.3,type:i.type,path:a})}else{const r=i.path??0;for(let a=0;a<s;a++)K.spawnQueue.push({t:(i.at??0)+a*i.gap,type:i.type,path:(r+a%2)%e})}}K.spawnQueue.sort((i,t)=>i.t-t.t),K.waveClock=0,He.wave(),Pe==null||Pe.setIntensity(1),Nn(Je.wave,"wave",K.wave,"bump")}function Vc(i,t){var l,c;const e=ho[i],n=lo(S_(i),"figure"),s=e.hp*(1+$t.hpGrowth*(K.wave-1))*tn.balance.hp*(((c=(l=tn.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*nM(),r={type:i,def:e,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:tn.balance.speed*(e.flying?tn.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4};r.var=.95+Math.random()*.1,r.speedMul*=.95+Math.random()*.1,n.scale.setScalar(r.var),r.blinkT=Math.random()*4;const a=K.spawnPoints[t%K.spawnPoints.length]||[0,50],o=Wt.lighthouse.pos;if(e.flying){const h=Math.atan2(a[1]-o.z,a[0]-o.x)+(Math.random()-.5)*.5,u=o.x+Math.cos(h)*66,f=o.z+Math.sin(h)*66;r.x=u,r.z=f,r.y=e.alt||4,r.dist0=Math.hypot(o.x-u,o.z-f),r.hitCd=0}else r.x=a[0]+(Math.random()-.5)*1.5,r.z=a[1]+(Math.random()-.5)*1.5,r.y=Wt.heightAt(r.x,r.z),r.remain=Tn.at(r.x,r.z);return n.position.set(r.x,r.y,r.z),Me.add(n),Cn.push(r),!K.seen[i]&&i!=="lobbyMini"&&(K.seen[i]=!0,hM(r)),r}const cc={ring:"💨",chips:"🥔",speaker:"🔊",bubble:"🫧",kite:"🪁",pizza:"🍕",lamp:"🌋"};function Gf(i){const t=Object.entries(i.resist||{}),e=t.filter(([,s])=>s<1).map(([s])=>cc[s]).join(""),n=t.filter(([,s])=>s>1).map(([s])=>cc[s]).join("");return{tough:e+(i.shield?"📒":""),weak:n}}const us=[],uo=document.createElement("div");uo.id="tags";document.body.appendChild(uo);function hM(i){const{tough:t,weak:e}=Gf(i.def),n=document.createElement("div");n.className="enemy-tag",n.innerHTML=`<b>${i.def.flying?"🪶":"🐾"} ${i.def.name}</b>${t?`<span>🛡️${t}</span>`:""}${e?`<span>💥${e}</span>`:""}`,uo.appendChild(n),us.push({m:i,el:n,t:0}),(K.wave>1||i.def.flying)&&Qe(`Ny fiende: ${i.def.name}${t?` · tåler ${t}`:""}${e?` · svak mot ${e}`:""}`)}function uM(i){var e;const t=us.length?le("hud").getBoundingClientRect().bottom:0;for(let n=us.length-1;n>=0;n--){const s=us[n];s.age=(s.age||0)+i,Ae.set(s.m.x,s.m.y+(((e=s.m.mesh.userData.hpBar)==null?void 0:e.position.y)??2.2)+.5,s.m.z).project(We);const r=Ae.z<1&&Math.abs(Ae.x)<1&&Math.abs(Ae.y)<1;s.el.style.display=r?"flex":"none",r&&(s.t+=i);const a=s.el.offsetWidth,o=s.el.offsetHeight;s.el.style.left=`${Math.min(Math.max((Ae.x*.5+.5)*innerWidth,a/2+6),innerWidth-a/2-6)}px`,s.el.style.top=`${Math.max((-Ae.y*.5+.5)*innerHeight,t+o+6)}px`,s.el.style.opacity=String(Math.min(1,(6-s.t)/.6)),(s.t>6||s.age>90||!s.m.alive)&&(s.el.remove(),us.splice(n,1))}}function fM(i){return i.def.flying?1-Math.hypot(Wt.lighthouse.pos.x-i.x,Wt.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??Tn.maxDist)/Tn.maxDist)}const $a=[],ms=document.createElement("div");ms.id="warn";document.body.appendChild(ms);function dM(){for(const e of $a)Me.remove(e);$a.length=0,ms.innerHTML="";for(const[e,n]of K.spawnPoints){const s=new se(Vf,new Ee({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));s.position.set(e,Math.max(Wt.heightAt(e,n),.08)+.1,n);const r=new se(pM,new Ee({color:"#ff8a3a",transparent:!0,opacity:.35,blending:si,depthWrite:!1,fog:!1}));r.position.y=4,s.add(r),Me.add(s),$a.push(s);const a=document.createElement("div");a.className="warn-arrow",a.innerHTML='<span class="arr">➤</span><span class="kind"></span>',ms.appendChild(a)}const i=K.spawnPoints.length,t=K.spawnPoints.map(()=>({air:!1,ground:!1}));for(const e of Oc[K.wave]||[]){const n=e.path==="both"?t.map((s,r)=>r):[(e.path??0)%i,((e.path??0)+1)%i];for(const s of n)t[s][ho[e.type].flying?"air":"ground"]=!0}t.forEach((e,n)=>{var r;const s=(r=ms.children[n])==null?void 0:r.querySelector(".kind");s&&(s.textContent=(e.air?"🪶":"")+(e.ground?"🐾":""))})}const Vf=new Es(1.6,2.2,32);Vf.rotateX(-Math.PI/2);const pM=new Fe(.5,1.4,8,12,1,!0);function mM(){var a;const i=K.phase==="prep"||K.phase==="wave"&&K.waveClock<8,t=ms.children,e=i&&!fi.classList.contains("hidden")?fi.getBoundingClientRect():null,n=e&&Di.textContent&&!Di.classList.contains("faded"),s=i?le("hud").getBoundingClientRect().bottom:0;ms.style.visibility=uo.style.visibility=K.paused?"hidden":"";const r=e?n?Math.min(e.top,Di.getBoundingClientRect().top):e.top:0;(a=K.spawnPoints)==null||a.forEach(([o,l],c)=>{const h=$a[c],u=t[c];if(!h||!u)return;h.visible=i;const f=.5+.5*Math.sin(K.time*6);h.scale.setScalar(1+f*.35),h.material.opacity=.35+.5*f,Ae.set(o,h.position.y,l).project(We);const d=Math.abs(Ae.x)>.92||Math.abs(Ae.y)>.88||Ae.z>1;if(u.style.display=i?"block":"none",u.classList.toggle("onscreen",!d),i&&!d&&(u.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,u.style.top=`${Math.max((-Ae.y*.5+.5)*innerHeight-30,s+30)}px`,u.style.transform="translate(-50%, -50%)",u.firstChild.style.transform=""),i&&d){let v=Ae.x,x=Ae.y;Ae.z>1&&(v=-v,x=-x);const m=Math.atan2(-x,v),p=Math.max(Math.abs(v),Math.abs(x))||1,y=Le.clamp(v/p,-1,1),S=Le.clamp(x/p,-1,1),g=(y*.46+.5)*innerWidth;let A=(-S*.44+.5)*innerHeight;e&&g>e.left-24&&g<e.right+24&&A>r-24&&(A=r-24),A=Math.max(A,s+30),u.style.left=`${g}px`,u.style.top=`${A}px`,u.style.transform=`translate(-50%, -50%) scale(${1+f*.25})`,u.firstChild.style.transform=`rotate(${m}rad)`}})}function fs(i,t,e){var n;if(i.alive){if(e&&(t*=((n=i.def.resist)==null?void 0:n[e.type])??1,i.def.shield&&e.type!=="lamp")){const s=e.x-i.x,r=e.z-i.z,a=Math.hypot(s,r)||1,o=Math.hypot(i.hx||0,i.hz||0)||1;(s*(i.hx||0)+r*(i.hz||0))/(a*o)>.35&&(t*=i.def.shield,Math.random()<.3&&Ne.emit(i.x,i.y+1,i.z,{n:2,color:"#d8c890",speed:1.5,up:1,life:.3}))}i.hp-=t,i.hitT=.18,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&gM(i)}}function gM(i){i.alive=!1,i.chillT=0,b_(i),Or.push(i),Ne.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),He.chill(),Hc(i.x,i.y+.5,i.z,i.def.embers,i.def.flying),!i.def.flying&&Math.random()<$t.bagChance&&Hf(i.x,i.z);for(let t=0;t<(i.def.splits||0);t++){const e=Vc("lobbyMini",0);e.x=i.x+(t-1)*.6,e.z=i.z+(t%2?.5:-.5),e.y=Wt.heightAt(e.x,e.z),e.mesh.position.set(e.x,e.y,e.z)}}function vM(i){var t;for(let e=Or.length-1;e>=0;e--){const n=Or[e];n.chillT+=i;const s=n.chillT,r=n.mesh.userData.body;if(n.def.flying)n.y+=i*2.5,n.z+=i*3,(t=n.mesh.userData.wings)==null||t.forEach((o,l)=>o.rotation.z=Math.sin(s*6)*.4*(l?-1:1));else if(s<1.4){const o=Math.min(1,s/.4);r.position.y=-.25*o*(n.type==="tank"?1.3:1),r.rotation.x=.25*o,r.rotation.z=Math.sin(s*3)*.05}else{r.rotation.x=0,r.position.y=Math.abs(Math.sin(s*7))*.06;const[o,l]=Tn.dir(n.x,n.z),c=n.x-o*n.def.speed*.45*i,h=n.z-l*n.def.speed*.45*i;Wt.isWalkable(c,h)&&(n.x=c,n.z=h),n.y=Wt.heightAt(n.x,n.z),(o||l)&&(n.mesh.rotation.y=Math.atan2(o,l))}Math.random()<i*1.5&&Ne.emit(n.x,n.y+1.8,n.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4}),s>2.6&&!n.popped&&(n.popped=!0,fr.emit(n.x,n.y+.8,n.z,{n:8,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}));const a=Math.max(0,Math.min(1,(3.2-s)/.6));n.mesh.scale.setScalar(a*(n.var||1)*(s>2.6?1+Math.sin((s-2.6)*10)*.08:1)),n.mesh.position.set(n.x,n.y,n.z),s>3.2&&(Me.remove(n.mesh),Or.splice(e,1))}}function Hc(i,t,e,n,s=!1,r=1){const a=Math.min(n,n>=6?3:n>=3?2:1);let o=n;for(let l=0;l<a;l++){const c=l===a-1?o:Math.ceil(n/a);o-=c;const h=E_(),u=Math.random()*Math.PI*2,f=(1.2+Math.random()*1.8)*r,d={mesh:h,x:i,y:t,z:e,vx:Math.cos(u)*f,vz:Math.sin(u)*f,vy:5+Math.random()*2,life:$t.emberLife,value:c,settled:!1,phase:Math.random()*6};h.scale.setScalar(.8+Math.min(c,6)*.08),Me.add(h),hs.push(d)}}function Kr(i,t,e,n,s=()=>!0){let r=null,a=n;for(const o of i){if(!s(o))continue;const l=Math.hypot(o.x-t,o.z-e);l<a&&(a=l,r=o)}return r}function Wc(){const i=Kr(Wt.plinths,U.x,U.z,$t.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const t=-Math.sin(U.face),e=-Math.cos(U.face),n=U.x+t*$t.placeAhead,s=U.z+e*$t.placeAhead,r=Wt.heightAt(n,s),a=Wt.lighthouse.pos;let o="";return r<.35?o="i vannet":Wt.extras.blocks(n,s)?o="i lavaen":Wt.pathDist(n,s)<1.9?o="på stien":Wt.slopeAt(n,s)>.6?o="for bratt":Math.hypot(n-a.x,s-a.z)<5.5?o="for nær fyret":Un.some(l=>Math.hypot(l.x-n,l.z-s)<$t.minTowerGap)?o="for nær et annet tårn":Wt.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?o="oppå en sokkel (gå helt bort til den)":Wt.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(o="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!o,why:o}}function Ka(i){const t=Wc();if(!t.ok){He.deny(),Qe(`Ikke lov å bygge her: ${t.why}`);return}const e=tr[i];if(K.embers<e.cost){He.deny(),Qe(`Trenger ${e.cost} ✦ glør`),Nn(Je.embers,"embersBad",Math.random(),"bad");return}K.embers-=e.cost;const n=lo(w_(i),"tower");if(n.position.set(t.x,t.y,t.z),!t.plinth){const r=new se(xM,_M);r.position.y=.04,r.receiveShadow=!0,n.add(r)}Me.add(n);const s={type:i,def:e,mesh:n,x:t.x,z:t.z,y:t.y,level:1,cd:.3,plinth:t.plinth,onPlinth:!!t.plinth};t.plinth&&(t.plinth.tower=s),Un.push(s),Wt.colliders.push({x:t.x,z:t.z,r:1,tower:s}),Ne.emit(t.x,t.y+.3,t.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),He.build(),K.buildMode=!1,t.plinth&&Qe(`${e.name} på gammel sokkel: +25 % rekkevidde`)}const xM=new Fe(.95,1.05,.12,10),_M=new Ie({color:"#8a8478"}),Ri=new ve;{const i=new se(new lr(1,24),new Ee({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const t=new Es(.965,1,64);t.rotateX(-Math.PI/2);const e=new se(t,new Ee({transparent:!0,opacity:.6,depthWrite:!1})),n=new se(new Fe(.55,.7,1.6,10),new Ee({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,Ri.add(i,e,n),Ri.userData={disc:i,ring:e,pillar:n},Ri.visible=!1,Ri.renderOrder=20,Me.add(Ri)}function MM(i,t,e){if(Ri.visible=i,!i)return;const n=t.ok,s=n?t.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=tr[e].range*(t.plinth?$t.plinthBonus:1);Ri.position.set(t.x,t.y+.06,t.z);const a=Ri.userData;for(const o of[a.disc,a.ring,a.pillar])o.material.color.set(s);a.ring.scale.setScalar(r),a.ring.visible=n,a.pillar.visible=!t.plinth}const Ti=(i,t)=>{const e=i.level-1;return t==="range"?i.def.range*(1+.12*e)*(i.onPlinth?$t.plinthBonus:1):t==="dmg"?i.def.dmg*[1,1.7,2.6,3.9,5.85][e]:t==="rate"?i.def.cooldown/(1+.15*e):i.def[t]};function yM(i){for(const t of Un){if(t.cd-=i,t.upg){const c=U.stun<=0&&Math.hypot(U.x-t.x,U.z-t.z)<$t.reach+.3;c?t.upg.t+=i:t.upg.t>0&&(t.upg.t=0,fo("😩"),Qe(`Rullingen ble avbrutt! Start på nytt ved ${t.def.name}`)),$r(t,Math.min(1,t.upg.t/t.upg.dur)),c&&Math.random()<i*8&&Ne.emit(U.x,en.position.y+2.2,U.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),t.upg.t>=t.upg.dur&&(t.upg=null,t.level+=1,wf(t,t.level),$r(t,0),Ne.emit(t.x,t.y+1.2,t.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),He.upgrade(),Qe(`${t.def.name} er nå nivå ${t.level}`))}if(t.armBack>0&&(t.armBack-=i,t.armBack<=0&&(t.mesh.userData.arm.rotation.x=-.35)),t.type==="lamp"&&t.mesh.userData.blobs.forEach((c,h)=>c.position.y=.75+Math.sin(K.time*.8+h*2.1)*.35),t.blind>0){t.blind-=i,Math.random()<i*8&&Ne.emit(t.x,t.y+2,t.z,{n:1,color:"#fff6c8",speed:.6,up:.8,life:.5,gravity:-.4});continue}const e=Ti(t,"range");let n=null,s=-1;for(const c of Cn){if(!c.alive||(c.def.flying?!t.def.air:t.def.ground===!1)||Math.hypot(c.x-t.x,c.z-t.z)>e)continue;const h=fM(c);h>s&&(s=h,n=c)}const r=t.mesh.userData.head;if(t.type==="speaker"){const c=Math.max(0,Math.sin(K.time*7.3));r.rotation.z=Math.sin(K.time*3.65)*.05,t.mesh.userData.woofers.forEach(h=>h.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=uc(Math.atan2(-(n.x-t.x),-(n.z-t.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-t.x),-(n.z-t.z));r.rotation.y+=uc(c,r.rotation.y)*Math.min(1,i*10)}if(!n||t.cd>0)continue;t.cd=Ti(t,"rate");const a=t.x,o=t.y+1.4*t.mesh.scale.y,l=t.z;if(t.type==="ring"){const c=T_();c.position.set(a,o-.3,l),Me.add(c),Kn.push({kind:"bolt",src:t,mesh:c,target:n,dmg:Ti(t,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),He.puff()}else if(t.type==="chips"){const c=Ef();c.position.set(a,t.y+1,l),Me.add(c);const[h,u]=n.def.flying?[0,0]:Tn.dir(n.x,n.z),f=n.x+h*n.def.speed*.6,d=n.z+u*n.def.speed*.6;Kn.push({kind:"shell",src:t,mesh:c,sx:a,sy:t.y+1,sz:l,ex:f,ez:d,ey:Wt.heightAt(f,d),t:0,dur:.95,dmg:Ti(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),Ne.emit(a,t.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),He.mortar()}else if(t.type==="speaker"){for(const h of Cn)!h.alive||Math.hypot(h.x-t.x,h.z-t.z)>e||(h.def.noMood||(h.slow=t.def.slowTime),fs(h,Ti(t,"dmg"),t));const c=Tf();c.position.set(t.x,t.y+.3,t.z),Me.add(c),er.push({mesh:c,t:0,r:e}),Ne.emit(t.x,t.y+1.8,t.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),He.skank()}else if(t.type==="bubble"){const c=Cf();c.position.set(a,o+.2,l),Me.add(c),Kn.push({kind:"bubble",src:t,mesh:c,target:n,dmg:Ti(t,"dmg"),trap:t.def.trap,tx:n.x,ty:n.y,tz:n.z}),He.pickup()}else if(t.type==="kite"){if(Kn.some(h=>h.kind==="kite"&&h.tower===t)){t.cd=.2;continue}const c=lo(Af(),"tower");c.position.set(a,o,l),Me.add(c),Kn.push({kind:"kite",mesh:c,tower:t,sx:a,sz:l,tx:n.x,tz:n.z,phase:"out",t:0,tick:0,dmg:Ti(t,"dmg"),zone:t.def.zone*(1+.1*(t.level-1)),hover:t.def.hover}),He.puff()}else if(t.type==="pizza"){const c=C_();c.position.set(a,t.y+1.2,l),Me.add(c);const[h,u]=Tn.dir(n.x,n.z),f=n.x+h*n.def.speed*1.1,d=n.z+u*n.def.speed*1.1;Kn.push({kind:"shell",src:t,pizza:!0,mesh:c,sx:a,sy:t.y+1.2,sz:l,ex:f,ez:d,ey:Wt.heightAt(f,d),t:0,dur:1.3,arc:7,dmg:Ti(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),t.mesh.userData.arm.rotation.x=.9,t.armBack=.5,He.mortar()}else if(t.type==="lamp"){for(const c of Cn)!c.alive||Math.hypot(c.x-t.x,c.z-t.z)>e||(c.slow=Math.max(c.slow,t.def.slowTime),fs(c,Ti(t,"dmg"),t));Math.random()<.3&&Ne.emit(t.x,t.y+1.6,t.z,{n:2,color:"#ff9a3a",speed:.8,up:1.2,life:.8,gravity:-.3})}}}function SM(i){var t;for(let e=Kn.length-1;e>=0;e--){const n=Kn[e];let s=!1;if(n.kind==="bolt"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y+(n.target.def.flying?0:.5),n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),h=18*i;n.age+=i,n.mesh.lookAt(n.tx,n.ty,n.tz),n.mesh.scale.setScalar(.7+n.age*2.2),c<=h+.3?(s=!0,n.target.alive&&(fs(n.target,n.dmg,n.src),fr.emit(n.tx,n.ty+.3,n.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),He.hit())):r.set(r.x+a/c*h,r.y+o/c*h,r.z+l/c*h)}else if(n.kind==="shell"){n.t+=i/n.dur;const r=Math.min(1,n.t);if(n.mesh.position.set(n.sx+(n.ex-n.sx)*r,n.sy+(n.ey-n.sy)*r+Math.sin(Math.PI*r)*(n.arc||5),n.sz+(n.ez-n.sz)*r),n.mesh.rotation.set(r*9,r*5,0),n.t>=1){s=!0;for(const a of Cn){if(!a.alive||a.def.flying)continue;const o=Math.hypot(a.x-n.ex,a.z-n.ez);o<n.splash&&fs(a,n.dmg*(o<n.splash*.4?1:.6),n.src)}Ne.emit(n.ex,n.ey+.3,n.ez,{n:26,color:n.pizza?"#ff7040":"#ffd060",speed:5,up:5,life:.7,gravity:12}),fr.emit(n.ex,n.ey+.3,n.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),He.crunch(),kn=Math.max(kn,.12)}}else if(n.kind==="bubble"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y,n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),h=13*i;n.mesh.scale.setScalar(1+Math.sin(K.time*12)*.06),c<=h+.3?(s=!0,n.target.alive&&(fs(n.target,n.dmg,n.src),n.target.trap=Math.max(n.target.trap||0,n.trap*Math.min(1,((t=n.target.def.resist)==null?void 0:t.bubble)??1))),Ne.emit(n.tx,n.ty,n.tz,{n:6,color:"#dff6ff",speed:2,up:1,life:.35})):r.set(r.x+a/c*h,r.y+o/c*h,r.z+l/c*h)}else if(n.kind==="kite"){n.t+=i;const r=n.mesh.position;if(n.mesh.userData.tailSegs.forEach((a,o)=>{a.rotation.x=Math.sin(K.time*5-o*.9)*.35,a.rotation.z=Math.sin(K.time*3.7-o*.7)*.25}),Un.includes(n.tower)||(n.phase="back"),n.phase==="out"){const a=n.tx-r.x,o=n.tz-r.z,l=Math.hypot(a,o),c=9*i;r.y+=(4.2-r.y)*Math.min(1,i*2),l<c?(n.phase="hover",n.t=0):(r.x+=a/l*c,r.z+=o/l*c)}else if(n.phase==="hover"){if(r.x=n.tx+Math.sin(K.time*1.7)*.6,r.z=n.tz+Math.cos(K.time*1.3)*.4,r.y=4.2+Math.sin(K.time*2.3)*.3,n.tick-=i,n.tick<=0){n.tick=.25;for(const a of Cn)a.alive&&a.def.flying&&Math.hypot(a.x-r.x,a.z-r.z)<n.zone&&(fs(a,n.dmg*.4,n.tower),a.slow=Math.max(a.slow,.4));Ne.emit(r.x,r.y-.3,r.z,{n:2,color:"#ffd0b0",speed:1.5,up:-.5,life:.5,gravity:0})}n.t>n.hover&&(n.phase="back")}else{const a=n.sx-r.x,o=n.sz-r.z,l=Math.hypot(a,o),c=11*i;l<c?s=!0:(r.x+=a/l*c,r.z+=o/l*c)}n.mesh.rotation.set(Math.sin(K.time*3)*.2,K.time*.5,Math.cos(K.time*2.5)*.25)}s&&(Me.remove(n.mesh),Kn.splice(e,1))}for(let e=er.length-1;e>=0;e--){const n=er[e];n.t+=i/(n.dur||.6),n.mesh.scale.setScalar(.5+n.t*n.r),n.mesh.material.opacity=.7*(1-n.t),n.t>=1&&(Me.remove(n.mesh),n.mesh.material.dispose(),er.splice(e,1))}}function bM(i){var t,e;for(const n of Cn){if(!n.alive)continue;n.phase+=i*n.def.anim;const s=n.slow>0?.5:1;n.slow-=i;let r=n.def.speed*s*(n.speedMul||1);n.trap>0?(n.trap-=i,r*=.15,n.bubbleFx||(n.bubbleFx=Cf(),n.bubbleFx.scale.setScalar(3.2),n.mesh.add(n.bubbleFx)),n.bubbleFx.visible=!0):n.bubbleFx&&(n.bubbleFx.visible=!1);const a=n.mesh.userData.body;if(n.def.flying){const l=Wt.lighthouse.pos;let c=l.x-n.x,h=l.z-n.z;const u=Math.hypot(U.x-n.x,U.z-n.z);let f=n.trap>0?1.1:n.def.alt||4.2;if(n.def.swoop&&u<6&&U.stun<=0&&n.hitCd<=0&&!(n.trap>0)){const y=Math.hypot(c,h);c=c/y*.5+(U.x-n.x)/u*.9,h=h/y*.5+(U.z-n.z)/u*.9,f=1.5}n.hitCd-=i;const d=Math.hypot(c,h)||1,v=Math.cos(K.time*1.3+n.lane*4)*(n.type==="balloon"?.4:1.2);n.x+=(c/d+-h/d*v*.35)*r*i,n.z+=(h/d+c/d*v*.35)*r*i,n.mesh.rotation.z=-v*(n.type==="balloon"?.05:.25);const x=Math.max(Wt.heightAt(n.x,n.z),0);n.y+=(x+f-n.y)*Math.min(1,i*2.5);const m=n.mesh.userData.blob;m&&(m.position.y=(x-n.y)/n.var+.05,m.material.opacity=1,m.scale.setScalar(1)),n.mesh.rotation.y=Math.atan2(-c,-h);const p=n.mesh.userData;if((t=p.wings)==null||t.forEach((y,S)=>y.rotation.z=Math.sin(n.phase)*.45*(S?-1:1)),(e=p.rotors)==null||e.forEach(y=>y.rotation.y+=i*40),p.rotor&&(p.rotor.rotation.y+=i*30,p.tail.rotation.x+=i*30),a.position.y=Math.sin(n.phase*.5)*(n.type==="balloon"?.3:.15),n.def.blind&&(n.blindCd=(n.blindCd??n.def.blind.every*.5)-i,p.beam&&(p.beam.visible=n.blindCd>n.def.blind.every-.8),n.blindCd<=0)){n.blindCd=n.def.blind.every;const y=Kr(Un,n.x,n.z,n.def.blind.range);y&&(y.blind=n.def.blind.dur,Qe(`${n.def.name} blendet ${y.def.name}!`)),Math.hypot(U.x-n.x,U.z-n.z)<5&&hc($t.airStress,n.x,n.z,!0)}n.def.swoop&&u<1.3&&Math.abs(n.y-en.position.y-1)<1.4&&U.stun<=0&&n.hitCd<=0&&TM(n),Math.hypot(l.x-n.x,l.z-n.z)<3.4&&Su(n)}else{const[l,c,h]=Tn.dir(n.x,n.z);n.remain=h;const u=Wt.lighthouse.pos,f=Math.hypot(u.x-n.x,u.z-n.z);if(f<4.3||h<.6){Su(n);continue}let d=l,v=c;!d&&!v&&(d=(u.x-n.x)/f,v=(u.z-n.z)/f),n.hx=(n.hx||0)+(d-(n.hx||0))*Math.min(1,i*6),n.hz=(n.hz||0)+(v-(n.hz||0))*Math.min(1,i*6);const x=Math.hypot(n.hx,n.hz)||1,m=n.lane*Math.min(1,f/10);if(n.x+=n.hx/x*r*i+-n.hz/x*m*i*.5,n.z+=n.hz/x*r*i+n.hx/x*m*i*.5,n.y=Wt.heightAt(n.x,n.z),n.mesh.rotation.y=Math.atan2(-n.hx,-n.hz),U.inv<=0&&U.faint<=0&&Math.abs(U.x-n.x)<1.2&&Math.abs(U.z-n.z)<1.2&&Math.hypot(U.x-n.x,U.z-n.z)<1.1&&hc(n.def.stress??10,n.x,n.z),n.type==="clerk")a.position.y=Math.abs(Math.sin(n.phase))*.12,a.rotation.z=Math.sin(n.phase)*.06,n.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(n.phase*.5))*.25;else if(n.type==="tank"){const p=Math.abs(Math.sin(n.phase));a.position.y=p*.05,a.rotation.z=Math.sin(n.phase)*.07;const y=Math.pow(1-p,6);a.scale.set(1+y*.06,1-y*.08,1+y*.06)}else n.type==="swarm"?(a.position.y=Math.abs(Math.sin(n.phase))*.14,a.rotation.y=Math.sin(n.phase*.5)*.3):n.type==="complainer"?(a.position.y=Math.abs(Math.sin(n.phase))*.16,n.mesh.userData.arm.rotation.z=Math.sin(n.phase*.5)*.4):n.type==="lobbyist"||n.type==="lobbyMini"?(a.position.y=Math.abs(Math.sin(n.phase))*.05,a.rotation.z=Math.sin(n.phase*.5)*.17):n.type==="auditor"?(a.position.y=Math.abs(Math.sin(n.phase))*.03,a.rotation.z=0):(a.position.y=Math.abs(Math.sin(n.phase))*.08,a.rotation.z=Math.sin(n.phase)*.05)}if(n.hitT>0){n.hitT-=i;const l=Math.max(0,n.hitT)/.18;a.scale.set(1+l*.16,1-l*.16,1+l*.16),a.position.z=l*.15,n.hitT<=0&&(a.scale.set(1,1,1),a.position.z=0)}n.blinkT-=i,n.blinkT<-.12&&(n.blinkT=2+Math.random()*3.5);for(const l of n.mesh.userData.eyes)l.scale.y=n.blinkT<0?.12:1;n.mesh.position.set(n.x,n.y,n.z),n.slow>0&&Math.random()<i*6&&Ne.emit(n.x,n.y+.8,n.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const o=n.mesh.userData.hpBar;if(o.visible){o.quaternion.copy(We.quaternion),o.quaternion.premultiply(n.mesh.quaternion.clone().invert());const l=Math.max(0,n.hp/n.maxHp),c=n.mesh.userData.hpFg;c.scale.x=.96*l,c.position.x=-.48*(1-l),c.material.color.setHSL(.33*(1-l),.7,.55)}}for(let n=Cn.length-1;n>=0;n--)Cn[n].alive||Cn.splice(n,1)}function Su(i){K.leaks[i.type]=(K.leaks[i.type]||0)+1,i.alive=!1,Me.remove(i.mesh),K.lights=Math.max(0,K.lights-1),Wt.lighthouse.setLights(K.lights),Nn(Je.lights,"lights",K.lights,"bad");const t=Wt.lighthouse.flamePos();fr.emit(t.x,t.y,t.z,{n:10,color:"#b8b4b0",speed:.8,up:1.6,life:1.8,gravity:-.4}),Ne.emit(t.x,t.y,t.z,{n:14,color:"#8a8580",speed:1.6,up:.6,life:1.6,gravity:4}),Qe(`${i.def.name} slukket litt glød!`),He.lose(),kn=.3,K.lights<=0&&Xf(!1)}const nr=[],ei=document.createElement("div");ei.id="chillbar";ei.innerHTML="<i></i>";document.body.appendChild(ei);let bu=0;function fo(i){const t=document.createElement("div");t.className="pop-emoji",t.textContent=i,Ae.set(U.x,en.position.y+2.6,U.z).project(We),t.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,t.style.top=`${(-Ae.y*.5+.5)*innerHeight}px`,document.body.appendChild(t),setTimeout(()=>t.remove(),900)}function hc(i,t,e,n=!1){if(!(U.faint>0||U.inv>0)){if(U.chill=Math.max(0,U.chill-i),U.inv=$t.stressInvuln,U.flinch=.55,!n){const s=U.x-t,r=U.z-e,a=Math.hypot(s,r)||1;U.vx+=s/a*$t.stressPush,U.vz+=r/a*$t.stressPush,U.goal=null}Ne.emit(U.x,en.position.y+1.4,U.z,{n:8,color:"#ff6a5a",speed:2,up:1.5,life:.4}),fo("😓"),ei.classList.remove("hit"),ei.offsetWidth,ei.classList.add("hit"),Nn(Je.chill,"chillBad",Math.random(),"bad"),U.chill<=0&&wM()}}function wM(){U.faint=$t.faintTime,U.stun=$t.faintTime,U.faints++,U.goal=null,U.vx=U.vz=0;const i=Math.floor(K.embers*$t.faintLoss);i>0&&(K.embers-=i,Hc(U.x,en.position.y+1,U.z,i,!1,1.6)),U.carrying&&(U.carrying=!1),fo("😵"),Qe(`😵 Vokteren besvimte av stress! Våkner ved fyret om ${$t.faintTime} s`),He.stun()}function Hf(i,t){const e=Ef();e.scale.setScalar(1.8),e.position.set(i,Wt.heightAt(i,t)+.5,t),Me.add(e),nr.push({mesh:e,x:i,z:t,life:$t.bagLife})}function EM(i){U.inv-=i;const t=Wt.lighthouse.pos;U.faint>0?(U.faint-=i,U.faint<=0&&(U.x=t.x+1,U.z=t.z+7.5,U.vx=U.vz=0,U.stun=0,U.chill=$t.chillMax*$t.wakeChill,U.inv=$t.stressInvuln*2,Ne.emit(U.x,Wt.heightAt(U.x,U.z)+1,U.z,{n:14,color:"#9fffb0",speed:2,up:2,life:.7}))):Math.hypot(t.x-U.x,t.z-U.z)<$t.regenReach&&(U.chill=Math.min($t.chillMax,U.chill+$t.regen*i));for(let s=nr.length-1;s>=0;s--){const r=nr[s];r.life-=i,r.mesh.rotation.y+=i*1.5,r.mesh.position.y=Wt.heightAt(r.x,r.z)+.5+Math.sin(K.time*3+s)*.12,r.mesh.visible=r.life>4||Math.sin(r.life*12)>0,U.faint<=0&&Math.hypot(r.x-U.x,r.z-U.z)<1.4&&(U.chill=Math.min($t.chillMax,U.chill+$t.bagHeal),Qe(`🥔 Chips! +${$t.bagHeal} chill`),fo("😌"),He.pickup(),r.life=0),r.life<=0&&(Me.remove(r.mesh),nr.splice(s,1))}const e=Math.round(U.chill);Nn(Je.chill,"chill",e),Je.chill.classList.toggle("low",e<30),e!==bu&&(bu=e,ei.firstChild.style.width=`${100*U.chill/$t.chillMax}%`,ei.classList.toggle("low",e<30));const n=(e<$t.chillMax||U.faint>0)&&K.phase!=="title";ei.style.display=n?"block":"none",n&&(Ae.set(U.x,en.position.y+2.3,U.z).project(We),ei.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,ei.style.top=`${(-Ae.y*.5+.5)*innerHeight}px`)}function TM(i){if(hc($t.airStress,i.x,i.z,!0),U.faint>0)return;U.stun=$t.stunTime,i.hitCd=4;const t=Math.floor(K.embers*$t.stunLoss);t>0&&(K.embers-=t,Hc(U.x,en.position.y+1,U.z,t,!1,1.6)),U.carrying&&(U.carrying=!1,Qe("Rullepapiret blåste bort!")),Ne.emit(U.x,en.position.y+1.5,U.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),He.stun(),kn=.2}function AM(i){for(let t=hs.length-1;t>=0;t--){const e=hs[t];e.life-=i,e.phase+=i;const n=Math.max(Wt.heightAt(e.x,e.z),.1)+.35;e.settled||(e.vy-=16*i,e.x+=e.vx*i,e.z+=e.vz*i,e.y+=e.vy*i,e.y<=n&&(e.y=n,Math.abs(e.vy)>2.5?(e.vy=-e.vy*.4,e.vx*=.6,e.vz*=.6):e.settled=!0));const s=Math.hypot(U.x-e.x,U.z-e.z);if(U.stun<=0&&s<$t.magnet){const l=(1-s/$t.magnet)*14+3;e.x+=(U.x-e.x)/s*l*i,e.z+=(U.z-e.z)/s*l*i,e.settled=!0,e.y=n}const r=e.settled?Math.sin(e.phase*3)*.12:0;e.mesh.position.set(e.x,e.y+r,e.z),e.mesh.rotation.y+=i*3;const a=e.life<5,o=(.8+Math.min(e.value,6)*.08)*(a?.55+.45*(e.life/5):1);if(e.mesh.scale.setScalar(o),e.mesh.visible=!a||Math.sin(e.life*(e.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Ne.emit(e.x,e.y+.2,e.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),U.stun<=0&&s<.9)K.embers+=e.value,Nn(Je.embers,"embers",K.embers,"bump"),Ne.emit(e.x,e.y+.3,e.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),He.pickup(),Me.remove(e.mesh),hs.splice(t,1);else if(e.life<=0){const l=Math.max(1,Math.round(e.value*$t.expiredRefund));K.embers+=l,Ne.emit(e.x,e.y,e.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),Me.remove(e.mesh),hs.splice(t,1)}}}let Ja=0,Wf="";function Qe(i){Ja=2,Wf=i,Di.textContent=""}function wu(i){var _,T;const t=en.userData;(K.phase==="prep"||K.phase==="wave")&&EM(i),U.stun-=i,t.stars.visible=U.stun>0,t.stars.rotation.y+=i*6;let e=0,n=0;if(U.stun<=0&&(K.phase==="prep"||K.phase==="wave")){if(fe.move.x||fe.move.z){U.goal=null;const D=Math.cos(Ci),G=Math.sin(Ci);e=fe.move.x*D+fe.move.z*G,n=-fe.move.x*G+fe.move.z*D}else if(U.goal){const D=U.goal,G=D.x-U.x,L=D.z-U.z;if(D.field===void 0){D.field=null;const X=Math.ceil(Math.hypot(G,L)/.5);for(let k=1;k<X;k++)if(!Wt.isWalkable(U.x+G*k/X,U.z+L*k/X)){D.field=Tn.walkField(D.x,D.z);break}}const O=D.field?Math.min(D.field.at(U.x,U.z),Math.hypot(G,L)+50):Math.hypot(G,L);D.t+=i;const V=O<.35||D.spot&&Math.hypot(D.spot.x-U.x,D.spot.z-U.z)<D.reach;if(O<D.best-.3&&(D.best=O,D.lastGain=D.t),V||D.t>12||D.t-D.lastGain>1.5)U.goal=null;else{const X=Math.min(1,O/.8),k=D.field&&Math.hypot(G,L)>1.5?D.field.dir(U.x,U.z):null,Z=k&&(k[0]||k[1])?k[0]:G/Math.hypot(G,L),rt=k&&(k[0]||k[1])?k[1]:L/Math.hypot(G,L);e=Z,n=rt;for(const Et of Wt.colliders){if(D.spot&&Et.x===D.spot.x&&Et.z===D.spot.z)continue;const jt=Et.x-U.x,et=Et.z-U.z,dt=jt*Z+et*rt;if(dt<=0||dt>Et.r+2.2||dt>O)continue;const Ct=-jt*rt+et*Z;if(Math.abs(Ct)>Et.r+.6)continue;const ut=(1-Math.abs(Ct)/(Et.r+.6))*1.6*(Ct>=0?1:-1);e-=-rt*ut,n-=Z*ut}const ot=Math.hypot(e,n)||1;e=e/ot*X,n=n/ot*X}}}const r=Wt.heightAt(U.x,U.z)<.05,a=$t.keeperSpeed*(U.carrying?$t.carrySlow:1)*(r?$t.wadeSlow:1),o=e*a,l=n*a,c=(_=Wt.isIce)!=null&&_.call(Wt,U.x,U.z)?1.6:12;U.vx+=(o-U.vx)*Math.min(1,i*c),U.vz+=(l-U.vz)*Math.min(1,i*c);let h=U.x+U.vx*i,u=U.z+U.vz*i;Wt.isWalkable(h,u)||(Wt.isWalkable(h,U.z)?u=U.z:Wt.isWalkable(U.x,u)?h=U.x:(h=U.x,u=U.z));for(const D of Wt.colliders){const G=h-D.x,L=u-D.z,O=Math.hypot(G,L),V=D.r+.4;O<V&&O>1e-4&&(h=D.x+G/O*V,u=D.z+L/O*V)}U.x=h,U.z=u;const f=Math.hypot(U.vx,U.vz);if(f>.3){const D=Math.atan2(-U.vx,-U.vz);U.face+=uc(D,U.face)*Math.min(1,i*12),U.walk+=i*f*2.2}if(en.rotation.y=U.face,en.position.set(U.x,Math.max(Wt.heightAt(U.x,U.z),-.25),U.z),r&&f>1&&(U.splash=(U.splash||0)-i,U.splash<=0)){U.splash=.22,Ne.emit(U.x,.15,U.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const D=Tf();D.position.set(U.x,.1,U.z),D.material.color.set("#f4fdff"),Me.add(D),er.push({mesh:D,t:0,r:1.6,dur:.9})}const d=Math.min(1,f/3),v=Math.sin(U.walk)*d;t.legs[0].position.z=v*.2,t.legs[1].position.z=-v*.2,t.legs[0].position.y=.2+Math.max(0,v)*.12,t.legs[1].position.y=.2+Math.max(0,-v)*.12;const x=f>.6;x!==!!U.wasMoving&&(U.sq=x?1:-1,U.wasMoving=x),U.sq=(U.sq||0)*Math.exp(-i*7);const m=f<.3?Math.sin(K.time*2.2)*.025:0;t.body.scale.set(1-m*.5-U.sq*.07,1+m+U.sq*.12,1-m*.5-U.sq*.07);const p=Math.sign(Math.sin(U.walk));f>2&&!r&&p!==U.lastStep&&Ne.emit(U.x,en.position.y+.1,U.z,{n:2,color:"#d9c9a4",speed:.7,up:.6,life:.45,gravity:1}),U.lastStep=p,U.flinch=Math.max(0,(U.flinch||0)-i),U.cheer=Math.max(0,(U.cheer||0)-i);const y=f>.5&&((T=Wt.isIce)==null?void 0:T.call(Wt,U.x,U.z)),S=Math.abs(v)*.09+(U.cheer>0?Math.abs(Math.sin(U.cheer*9))*.35:0);t.body.position.y=S,t.body.rotation.x=U.faint>0?0:-.35*Math.min(1,U.flinch*2.5),t.body.rotation.z=U.faint>0?1.45:U.stun>0?.5:v*.05+(y?Math.sin(K.time*7)*.12:0)+(U.flinch>0?Math.sin(U.flinch*40)*.08:0);let g=v*.6,A=-v*.45,E=0,w=0;y&&(E=-1.25+Math.sin(K.time*9)*.25,w=1.25+Math.cos(K.time*8)*.25,g=A=0),U.cheer>0&&(g=A=-2.9,E=-.3,w=.3),U.flinch>0&&(g=-2.5,E=.5);const C=Math.min(1,i*14);t.armL.rotation.x+=(g-t.armL.rotation.x)*C,t.armL.rotation.z+=(E-t.armL.rotation.z)*C,t.lanternArm.rotation.x+=(A-t.lanternArm.rotation.x)*C,t.lanternArm.rotation.z+=(w-t.lanternArm.rotation.z)*C,U.idle=f<.3?(U.idle||0)+i:0;const M=U.idle>2?Math.sin(K.time*.55)*.7*Math.min(1,(U.idle-2)/1.5):0;t.head.rotation.y+=(M-t.head.rotation.y)*Math.min(1,i*4),U.blink=(U.blink??2)-i,U.blink<-.12&&(U.blink=2+Math.random()*3);for(const D of t.eyes)D.scale.y=U.faint>0?.1:U.blink<0?.12:1;t.carried.visible=U.carrying,t.carried.rotation.y+=i*2,t.carried.position.y=2.35+Math.sin(K.time*3)*.08,kc.intensity=2.6+Math.sin(K.time*11)*.3}function CM(){for(const i of fe.clicks.splice(0)){Mu.setFromCamera(i,We);const t=Mu.intersectObject(Wt.terrain)[0];if(!t)continue;let e=t.point.x,n=t.point.z;const s=Wt.lighthouse.pos,r=Kr(Wt.plinths,e,n,2.2)||(Math.hypot(s.x-e,s.z-n)<4.5?{x:s.x,z:s.z,big:!0}:null);if(r){const a=r.big?4.3:1.95;let o=U.x-r.x,l=U.z-r.z;const c=Math.hypot(o,l)||1;e=r.x+o/c*a,n=r.z+l/c*a}U.goal={x:e,z:n,t:0,best:1/0,lastGain:0,spot:r,reach:r?r.big?$t.lighthouseReach-.4:$t.reach-.25:0},Ne.emit(e,Wt.heightAt(e,n)+.2,n,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}}function ir(i=!K.paused,t=!1){K.paused=i;const e=fe.labels();le("pause-keys").textContent=`${e.name}: fortsett med ${e.pause} · start på nytt med ${e.restart}`,le("pause").classList.toggle("hidden",!i),le("confirm").classList.toggle("hidden",!t),K.confirming=i&&t}try{sessionStorage.getItem("glod-portrait")&&document.documentElement.classList.add("portrait-ok")}catch{}le("btn-portrait").addEventListener("click",()=>{document.documentElement.classList.add("portrait-ok");try{sessionStorage.setItem("glod-portrait","1")}catch{}ea()});le("btn-resume").addEventListener("click",()=>ir(!1));le("btn-restart").addEventListener("click",()=>ir(!0,!0));le("btn-yes").addEventListener("click",()=>kr());le("btn-no").addEventListener("click",()=>ir(!0,!1));le("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${wn}`});le("btn-lex").addEventListener("click",()=>{const i=le("lex");i.innerHTML||(i.innerHTML=Object.entries(ho).filter(([t])=>t!=="lobbyMini").map(([t,e])=>{const{tough:n,weak:s}=Gf(e);return`<div class="lex-row"><b>${e.flying?"🪶":"🐾"} ${e.name}</b><small>${e.info||(e.flying?"flyr rett mot fyret":"går langs veien")}</small><span>${n?`🛡️ ${n}`:""} ${s?`💥 ${s}`:""}</span></div>`}).join("")+`<p class="lex-key">🛡️ tåler · 💥 svak mot · ${Object.entries(cc).map(([t,e])=>`${e} ${tr[t].name}`).join(" · ")} · 📒 skjold forfra</p>`),i.classList.toggle("hidden")});function kr(){for(const i of us)i.el.remove();us.length=0;for(const i of[Cn,Or,hs,Kn,er]){for(const t of i)t.mesh&&Me.remove(t.mesh);i.length=0}for(const i of Un)Me.remove(i.mesh);Un.length=0;for(const i of Wt.plinths)i.tower=null;for(let i=Wt.colliders.length-1;i>=0;i--)Wt.colliders[i].tower&&Wt.colliders.splice(i,1);K.buildMode=!1,U.chargeTower&&$r(U.chargeTower,0),Object.assign(K,{phase:"title",wave:0,timer:0,embers:$t.startEmbers,lights:hr,spawnQueue:[],leaks:{},seen:{},waveClock:0,sel:0,paused:!1,confirming:!1}),Object.assign(U,{x:Wt.lighthouse.pos.x+1,z:Wt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,charge:0,chargeTower:null,goal:null,chill:$t.chillMax,inv:0,faint:0,faints:0});for(const i of nr)Me.remove(i.mesh);nr.length=0,Wt.lighthouse.setLights(hr),UM(),kn=0,Ja=0,Ii={},Nn(Je.lights,"lights",K.lights),Nn(Je.embers,"embers",K.embers),Nn(Je.wave,"wave",0),Je.timer.textContent="",le("pause").classList.add("hidden"),le("confirm").classList.add("hidden"),le("overlay").classList.add("hidden"),fe.clear(),K.phase="title",po(!0),window.__restarts=(window.__restarts||0)+1}function RM(){const i=fe.device;if(Ii.device===i+fe.padKind)return;Ii.device=i+fe.padKind;const t=fe.labels();le("touch").classList.toggle("hidden",i!=="touch"||K.phase==="title"),fi.querySelectorAll("button i").forEach((e,n)=>{e.textContent=i==="pad"?n===K.sel?t.build:"":i==="touch"?"":String(n+1)}),Bc.textContent="Neste bølge ▶",Ii.sel=-1}function PM(i){if(fe.consume("fps")&&Gc.classList.toggle("hidden"),fe.consume("music")&&Yf(),RM(),K.phase==="title"){["build","carry","next","pause"].some(f=>fe.consume(f))&&po(),fe.clear();return}if(Nn(Je.embers,"embers",K.embers),!(K.phase==="prep"||K.phase==="wave")){if((K.phase==="won"||K.phase==="lost")&&fe.consume("restart")){kr();return}fe.clear(),fi.classList.add("hidden"),yu("");return}if(fe.consume("restart")){K.confirming?kr():ir(!0,!0);return}if(fe.consume("pause")&&ir(!K.paused),K.confirming){if(fe.consume("build")||fe.consume("next")){kr();return}fe.consume("carry")&&ir(!0,!1)}if(K.paused){fe.clear();return}CM(),fe.consume("next")&&K.phase==="prep"&&(K.timer=0),fe.consume("selPrev")&&(K.sel=(K.sel+Gi.length-1)%Gi.length),fe.consume("selNext")&&(K.sel=(K.sel+1)%Gi.length);const e=Kr(Wt.plinths,U.x,U.z,$t.reach,f=>!f.tower),n=Kr(Un,U.x,U.z,$t.reach),s=Wt.lighthouse.pos,r=Math.hypot(s.x-U.x,s.z-U.z)<$t.lighthouseReach,a=U.stun>0,o=Wc();fe.consume("build")&&!a&&(K.buildMode||e?Ka(Gi[K.sel]):K.buildMode=!0),Gi.forEach((f,d)=>{fe.consume("b"+(d+1))&&!a&&(K.sel=d,Ka(f))});const l=(K.buildMode||!!e)&&!a&&!U.carrying;MM(l,o,Gi[K.sel]),fi.classList.toggle("hidden",!l),l&&(fi.querySelectorAll("button").forEach((f,d)=>{f.disabled=K.embers<tr[f.dataset.tower].cost,f.classList.toggle("sel",d===K.sel)}),Ii.sel!==K.sel&&fe.device==="pad"&&(Ii.sel=K.sel,fi.querySelectorAll("button i").forEach((f,d)=>f.textContent=d===K.sel?fe.labels().build:""))),fe.consume("carry")&&!a&&(!U.carrying&&r?K.embers>=$t.stoneCost?(K.embers-=$t.stoneCost,U.carrying=!0,Nn(Je.embers,"embers",K.embers,"bump"),Ne.emit(U.x,en.position.y+2.3,U.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),He.stone()):(He.deny(),Qe(`Rullepapir koster ${$t.stoneCost} ✦`)):U.carrying&&r?(U.carrying=!1,K.embers+=$t.stoneCost,He.stone(),Qe("Rullepapiret er lagt tilbake")):!U.carrying&&K.buildMode?K.buildMode=!1:U.carrying?n||Qe("Bær rullepapiret til et tårn"):Qe("Rullepapir hentes ved fyret"));const c=U.carrying&&!a&&n&&n.level<nl&&!n.upg?n:null;c!==U.chargeTower&&(U.chargeTower&&$r(U.chargeTower,0),U.chargeTower=c,U.charge=0),c&&(U.charge+=i/$t.chargeTime,$r(c,Math.min(1,U.charge)),Math.random()<i*20&&Ne.emit(U.x,en.position.y+2.2,U.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),U.charge>=1&&(c.upg={t:0,dur:$t.upgradeTime[c.level-1]},U.carrying=!1,U.chargeTower=null,U.charge=0,Ne.emit(c.x,c.y+1.2,c.z,{n:12,color:"#8ff0ff",speed:2,up:2,life:.6}),He.stone(),Qe(`${c.def.name}: bli stående i ${c.upg.dur} s for å oppgradere`)));const h=fe.labels();Ja-=i;let u="";if(Ja>0)u=Wf;else if(a)u="Moralpanikk! Måka slo deg ut";else if(c)u="Leverer rullepapiret …";else if(n!=null&&n.upg)u=`Lader ${n.def.name} … ${Math.ceil(n.upg.dur-n.upg.t)} s igjen (bli stående)`;else if(U.carrying&&n&&n.level>=nl)u="Tårnet er på maks nivå";else if(U.carrying)u="Bær rullepapiret til et tårn";else if(r&&!U.carrying)u=`${h.carry} = hent rullepapir (${$t.stoneCost} ✦)`;else if(r&&U.carrying)u=`${h.carry} = legg rullepapiret tilbake`;else if(n&&n.level<nl)u=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(l&&!o.ok)u=`Ikke lov her: ${o.why} · ${h.carry} = avbryt`;else if(l){const f=`${tr[Gi[K.sel]].name} (${tr[Gi[K.sel]].tip})`,d=o.plinth?" (sokkel: +25 % rekkevidde)":"";u=fe.device==="pad"?`${h.sel} = velg tårn · ${h.build} = sett ned ${f}${d}`:fe.device==="touch"?`Trykk på et tårn, eller Bygg = ${f}${d}`:`1 / 2 / 3 eller ${h.build} = sett ned ${f}${d}`}else K.phase==="prep"&&K.wave===0&&(u=`${h.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);yu(u),lM(i)}const gs=new ve;{const i=document.createElement("canvas");i.width=64,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,256),t.globalCompositeOperation="destination-in";const n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,256);const s=new ii(i);for(let r=0;r<6;r++){const a=new se(new Hn(1,1),new Ee({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:si,depthWrite:!1,depthTest:!1,fog:!1}));a.scale.set(2.5+r%3*1.8,34,1),a.position.set(-22+r*8.5,9,-4+r%2*6),a.rotation.set(-.95,0,.55),a.userData.phase=r*1.3,gs.add(a)}}gs.visible=tn.id==="tak";gs.renderOrder=50;Me.add(gs);function DM(i){gs.position.set(bn.x,0,bn.z),gs.rotation.y=Ci,gs.children.forEach(t=>t.material.opacity=.03+.025*Math.sin(i*.35+t.userData.phase))}let kn=0;const Ae=new F,il=new F,qs=new F,Oa=new F,sl=new F,bn=new F(U.x,0,U.z);function LM(i){bn.x+=(U.x-bn.x)*Math.min(1,i*4),bn.z+=(U.z-bn.z)*Math.min(1,i*4),bn.y=en.position.y;const t=Ui?1.15:1,e=fe.zoom*t,n=We.aspect<1.2?1.25:1;Ci+=fe.look;const s=6.6*e*n;We.position.set(bn.x+Math.sin(Ci)*s,bn.y+12.5*e*n,bn.z+Math.cos(Ci)*s),kn=Math.max(0,kn-i),kn>0&&(We.position.x+=(Math.random()-.5)*kn*2,We.position.y+=(Math.random()-.5)*kn),We.lookAt(bn.x-Math.sin(Ci),bn.y+.5,bn.z-Math.cos(Ci)),We.updateMatrixWorld();let r=0,a=0,o=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([p,y])=>{const S=Ae.set(p,y,.5).unproject(We),g=S.sub(We.position).normalize(),A=g.y<-.05?(bn.y-We.position.y)/g.y:80;return[We.position.x+g.x*Math.min(A,80),We.position.z+g.z*Math.min(A,80)]});for(const[p,y]of l)r+=p/4,a+=y/4;for(const[p,y]of l)o=Math.max(o,Math.hypot(p-r,y-a));const c=Le.clamp(Math.ceil((o+4)/4)*4,16,80);ln.shadow.camera.right!==c&&(Object.assign(ln.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),ln.shadow.camera.updateProjectionMatrix());const h=2*c/ln.shadow.mapSize.x;qs.set(Vn.sunDir[0],Vn.sunDir[1],Vn.sunDir[2]).normalize(),Oa.set(0,1,0).cross(qs).normalize(),sl.copy(qs).cross(Oa).normalize(),Ae.set(r,bn.y,a);const u=Math.round(Ae.dot(Oa)/h)*h,f=Math.round(Ae.dot(sl)/h)*h,d=Ae.dot(qs);il.copy(Oa).multiplyScalar(u).addScaledVector(sl,f).addScaledVector(qs,d),ln.target.position.copy(il),ln.position.copy(il).addScaledVector(qs,40),ln.shadow.camera.far=40+c+20,DM(K.time),mM(),Ae.set(U.x,en.position.y+.9,U.z);const v=-Ae.clone().applyMatrix4(We.matrixWorldInverse).z;Ae.project(We);const x=innerWidth*_n.getPixelRatio(),m=innerHeight*_n.getPixelRatio();cr.uKeep.value.set((Ae.x*.5+.5)*x,(Ae.y*.5+.5)*m,v),cr.uRad.value=m*.3,uM(K.paused?0:i)}const rl=tn.eruption,al=Wt.extras.bridges??[];let Dr=0,Wi=null;function IM(i){if(!(!rl||!al.length||K.phase!=="wave")){if(Dr+=i,Wi&&Dr>=rl.closed)Wi.setClosed(!1),Wi=null,Tn.setBlock(()=>!1);else if(!Wi&&Dr>=rl.every){Dr=0;const t=al[Math.random()*al.length|0];t.setClosed(!0),Wi=t,Tn.setBlock((e,n)=>(e-t.x)**2+(n-t.z)**2<2.8*2.8),kn=Math.max(kn,.35),He.boom(),Qe("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function UM(){Wi&&(Wi.setClosed(!1),Tn.setBlock(()=>!1)),Wi=null,Dr=0}function NM(i){if(IM(i),K.phase==="prep")K.timer-=i,Je.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,K.timer))} s`,K.timer<=0&&(Je.timer.textContent="",Bf());else if(K.phase==="wave"){for(K.waveClock+=i;K.spawnQueue.length&&K.spawnQueue[0].t<=K.waveClock;){const t=K.spawnQueue.shift();Vc(t.type,t.path)}if(Je.timer.textContent=`${Cn.length+K.spawnQueue.length} monstre igjen`,!K.spawnQueue.length&&!Cn.length){if(Je.timer.textContent="",K.wave>=Oc.length){Xf(!0);return}const t=$t.waveBonus+K.wave*$t.waveBonusPer+Math.floor(Math.min(K.embers,300)*$t.interest);K.embers+=t,Nn(Je.embers,"embers",K.embers,"bump"),Qe(`Bølge ${K.wave} slått! +${t} ✦`),U.cheer=1.4,kf($t.prepTime),Pe==null||Pe.setIntensity(0)}}}function Xf(i){K.phase=i?"won":"lost",le("touch").classList.add("hidden"),le("btn-pause").classList.add("hidden"),fi.classList.add("hidden");let t="";if(Pe==null||Pe.setIntensity(0),i){He.win();const n=Yr();l_(wn),Yr()>n&&(t=`<p class="lead">🔓 Ny verden låst opp: <b>${vr[wn+1].name}</b>!</p>`)}const e=le("overlay");e.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${K.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${t}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${t?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${K.wave}. Rull opp ermene og prøv igjen.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,e.classList.remove("hidden"),le("btn-again").addEventListener("click",()=>kr()),le("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${wn}`}),t&&le("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${wn+1}`})}let Pe=null;const Eu=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})();function qf(){try{localStorage.setItem("glod-music",JSON.stringify({vol:Pe.volume,muted:Pe.muted}))}catch{}}function zM(){const i=Lf();Pe||!i||hn.has("nomusic")||(Pe=tM(i.ctx,i.noiseBuf,tn.id),Pe.setVolume(Eu.vol??.7),Pe.setMuted(!!Eu.muted),Pe.start(),le("music-vol").value=Math.round(Pe.volume*100),le("btn-mute").textContent=Pe.muted?"M: av":"M: på",window.__music=Pe,window.__audioCtx=i.ctx)}function Yf(){Pe&&(Pe.setMuted(!Pe.muted),le("btn-mute").textContent=Pe.muted?"M: av":"M: på",qf(),Qe(Pe.muted?"🎶 Musikk av":"🎶 Musikk på"))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const t=Lf();t&&t.ctx.state!=="running"&&t.ctx.resume()},{passive:!0});le("music-vol").addEventListener("input",i=>{Pe&&(Pe.setVolume(i.target.value/100),qf())});le("btn-mute").addEventListener("click",i=>{i.preventDefault(),Yf()});function po(i=!1){K.phase==="title"&&(J_(),zM(),Pe==null||Pe.setIntensity(0),i&&le("touch").classList.toggle("hidden",fe.device!=="touch"),le("overlay").classList.add("hidden"),Ui&&(fe.device="touch"),Ii.device=null,le("btn-pause").classList.remove("hidden"),Wt.lighthouse.setLights(K.lights),Nn(Je.embers,"embers",K.embers),kf($t.firstPrep),If&&FM())}le("btn-start").addEventListener("click",po);{const i=le("worlds"),t=Yr();if(vr.forEach((e,n)=>{const s=document.createElement("button");s.className="world"+(n===wn?" sel":"")+(n>=t?" locked":""),s.innerHTML=`<b>${n>=t?"🔒 ":""}${e.name}</b><small>${n>=t?"Vinn forrige verden for å låse opp":e.blurb}</small>`,s.disabled=n>=t,s.addEventListener("click",()=>{n!==wn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),le("btn-start").textContent=`Tenn gløden på ${tn.name}`,tn.skyDusk){const e=document.createElement("button");e.id="btn-tod",e.className="tod",e.textContent=ps==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",e.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",ps==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${wn}&tid=${ps==="skumring"?"dag":"skumring"}`}),le("worlds").after(e)}}le("btn-quality").addEventListener("click",()=>Ff(ai==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&Ff(ai==="high"?"low":"high")});le("btn-quality").textContent=ai==="high"?"Høy":"Lav";le("btn-pause").classList.add("hidden");function FM(){K.embers=999;const i=Wt.lighthouse.pos,t=Wt.plinths.slice().sort((e,n)=>Math.hypot(e.x-i.x,e.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((e,n)=>{const s=t[n];U.x=s.x+1.9,U.z=s.z,Ka(e),n<3&&(Un[Un.length-1].level=n+1,wf(Un[Un.length-1],n+1))}),U.x=i.x+1,U.z=i.z+6,U.carrying=!0,K.wave=Number(hn.get("demo"))||4,K.wave-=1,Bf(),K.waveClock=6,K.embers=142}const OM=new mf;let ol=0,ka=0,Ba=0;window.__fpsSamples=[];window.__game={S:K,monsters:Cn,towers:Un,embers:hs,world:Wt,K:U,renderer:_n,camera:We,input:fe,buildSpot:()=>Wc(),build:i=>Ka(i),renderOnce:()=>ta.render(0),outlineCats:gf,spawnMonster:Vc,projectiles:Kn,damage:fs,dropBag:(i,t)=>Hf(i,t),ghost:Ri,get camYaw(){return Ci}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function $f(){requestAnimationFrame($f);const i=OM.getDelta(),t=Math.min(i,.05);K.paused||(K.time+=t),fe.update(t),K.paused||(Wt.update(K.time),aM.update(K.time));for(let e=0;e<iM&&!K.paused&&(K.phase==="prep"||K.phase==="wave");e++)e>0&&(K.time+=t,wu(t)),NM(t),bM(t),yM(t),SM(t),AM(t),vM(t);if(K.paused||wu(t),PM(t),!K.paused){if(Ne.update(t),Math.random()<t*(4+10*(K.lights/hr))){const e=Wt.lighthouse.tip;fr.emit(e.x,e.y,e.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}fr.update(t)}if(LM(t),_n.info.reset(),ta.render(t),ol++,ka+=i,ka>=.5){const e=ol/ka;window.__fpsSamples.push(e),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),Gc.textContent=`${e.toFixed(0)} fps · ${_n.info.render.calls} dc`,Ba=e<(Ui?28:45)?Ba+1:0,Ba>=6&&Hi>1&&(Hi=Math.max(1,Hi-.25),_n.setPixelRatio(Hi),ea(),Ba=0,window.__dprDrops=(window.__dprDrops||0)+1,hn.has("debug")&&console.info(`[fps] ${e.toFixed(0)} fps over tid → dpr senket til ${Hi}`)),ol=0,ka=0}}$f();If&&hn.has("autostart")&&po();function uc(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}
