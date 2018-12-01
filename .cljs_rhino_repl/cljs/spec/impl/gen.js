// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__8055__auto__,writer__8056__auto__,opt__8057__auto__){
return cljs.core._write.call(null,writer__8056__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13436 = arguments.length;
var i__8558__auto___13437 = (0);
while(true){
if((i__8558__auto___13437 < len__8557__auto___13436)){
args__8564__auto__.push((arguments[i__8558__auto___13437]));

var G__13438 = (i__8558__auto___13437 + (1));
i__8558__auto___13437 = G__13438;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq13435){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13435));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13440 = arguments.length;
var i__8558__auto___13441 = (0);
while(true){
if((i__8558__auto___13441 < len__8557__auto___13440)){
args__8564__auto__.push((arguments[i__8558__auto___13441]));

var G__13442 = (i__8558__auto___13441 + (1));
i__8558__auto___13441 = G__13442;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq13439){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13439));
});

var g_QMARK__13443 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_13444 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13443){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13443))
,null));
var mkg_13445 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13443,g_13444){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13443,g_13444))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__13443,g_13444,mkg_13445){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13443).call(null,x);
});})(g_QMARK__13443,g_13444,mkg_13445))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__13443,g_13444,mkg_13445){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_13445).call(null,gfn);
});})(g_QMARK__13443,g_13444,mkg_13445))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__13443,g_13444,mkg_13445){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_13444).call(null,generator);
});})(g_QMARK__13443,g_13444,mkg_13445))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8649__auto___13465 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__8649__auto___13465){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13466 = arguments.length;
var i__8558__auto___13467 = (0);
while(true){
if((i__8558__auto___13467 < len__8557__auto___13466)){
args__8564__auto__.push((arguments[i__8558__auto___13467]));

var G__13468 = (i__8558__auto___13467 + (1));
i__8558__auto___13467 = G__13468;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13465))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13465){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13465),args);
});})(g__8649__auto___13465))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__8649__auto___13465){
return (function (seq13446){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13446));
});})(g__8649__auto___13465))
;


var g__8649__auto___13469 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__8649__auto___13469){
return (function cljs$spec$impl$gen$list(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13470 = arguments.length;
var i__8558__auto___13471 = (0);
while(true){
if((i__8558__auto___13471 < len__8557__auto___13470)){
args__8564__auto__.push((arguments[i__8558__auto___13471]));

var G__13472 = (i__8558__auto___13471 + (1));
i__8558__auto___13471 = G__13472;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13469))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13469){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13469),args);
});})(g__8649__auto___13469))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__8649__auto___13469){
return (function (seq13447){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13447));
});})(g__8649__auto___13469))
;


var g__8649__auto___13473 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__8649__auto___13473){
return (function cljs$spec$impl$gen$map(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13474 = arguments.length;
var i__8558__auto___13475 = (0);
while(true){
if((i__8558__auto___13475 < len__8557__auto___13474)){
args__8564__auto__.push((arguments[i__8558__auto___13475]));

var G__13476 = (i__8558__auto___13475 + (1));
i__8558__auto___13475 = G__13476;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13473))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13473){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13473),args);
});})(g__8649__auto___13473))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__8649__auto___13473){
return (function (seq13448){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13448));
});})(g__8649__auto___13473))
;


var g__8649__auto___13477 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__8649__auto___13477){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13478 = arguments.length;
var i__8558__auto___13479 = (0);
while(true){
if((i__8558__auto___13479 < len__8557__auto___13478)){
args__8564__auto__.push((arguments[i__8558__auto___13479]));

var G__13480 = (i__8558__auto___13479 + (1));
i__8558__auto___13479 = G__13480;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13477))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13477){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13477),args);
});})(g__8649__auto___13477))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__8649__auto___13477){
return (function (seq13449){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13449));
});})(g__8649__auto___13477))
;


var g__8649__auto___13481 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__8649__auto___13481){
return (function cljs$spec$impl$gen$set(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13482 = arguments.length;
var i__8558__auto___13483 = (0);
while(true){
if((i__8558__auto___13483 < len__8557__auto___13482)){
args__8564__auto__.push((arguments[i__8558__auto___13483]));

var G__13484 = (i__8558__auto___13483 + (1));
i__8558__auto___13483 = G__13484;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13481))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13481){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13481),args);
});})(g__8649__auto___13481))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__8649__auto___13481){
return (function (seq13450){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13450));
});})(g__8649__auto___13481))
;


var g__8649__auto___13485 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__8649__auto___13485){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13486 = arguments.length;
var i__8558__auto___13487 = (0);
while(true){
if((i__8558__auto___13487 < len__8557__auto___13486)){
args__8564__auto__.push((arguments[i__8558__auto___13487]));

var G__13488 = (i__8558__auto___13487 + (1));
i__8558__auto___13487 = G__13488;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13485))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13485){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13485),args);
});})(g__8649__auto___13485))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__8649__auto___13485){
return (function (seq13451){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13451));
});})(g__8649__auto___13485))
;


var g__8649__auto___13489 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__8649__auto___13489){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13490 = arguments.length;
var i__8558__auto___13491 = (0);
while(true){
if((i__8558__auto___13491 < len__8557__auto___13490)){
args__8564__auto__.push((arguments[i__8558__auto___13491]));

var G__13492 = (i__8558__auto___13491 + (1));
i__8558__auto___13491 = G__13492;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13489))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13489){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13489),args);
});})(g__8649__auto___13489))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__8649__auto___13489){
return (function (seq13452){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13452));
});})(g__8649__auto___13489))
;


var g__8649__auto___13493 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__8649__auto___13493){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13494 = arguments.length;
var i__8558__auto___13495 = (0);
while(true){
if((i__8558__auto___13495 < len__8557__auto___13494)){
args__8564__auto__.push((arguments[i__8558__auto___13495]));

var G__13496 = (i__8558__auto___13495 + (1));
i__8558__auto___13495 = G__13496;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13493))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13493){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13493),args);
});})(g__8649__auto___13493))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__8649__auto___13493){
return (function (seq13453){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13453));
});})(g__8649__auto___13493))
;


var g__8649__auto___13497 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__8649__auto___13497){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13498 = arguments.length;
var i__8558__auto___13499 = (0);
while(true){
if((i__8558__auto___13499 < len__8557__auto___13498)){
args__8564__auto__.push((arguments[i__8558__auto___13499]));

var G__13500 = (i__8558__auto___13499 + (1));
i__8558__auto___13499 = G__13500;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13497))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13497){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13497),args);
});})(g__8649__auto___13497))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__8649__auto___13497){
return (function (seq13454){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13454));
});})(g__8649__auto___13497))
;


var g__8649__auto___13501 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__8649__auto___13501){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13502 = arguments.length;
var i__8558__auto___13503 = (0);
while(true){
if((i__8558__auto___13503 < len__8557__auto___13502)){
args__8564__auto__.push((arguments[i__8558__auto___13503]));

var G__13504 = (i__8558__auto___13503 + (1));
i__8558__auto___13503 = G__13504;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13501))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13501){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13501),args);
});})(g__8649__auto___13501))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__8649__auto___13501){
return (function (seq13455){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13455));
});})(g__8649__auto___13501))
;


var g__8649__auto___13505 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__8649__auto___13505){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13506 = arguments.length;
var i__8558__auto___13507 = (0);
while(true){
if((i__8558__auto___13507 < len__8557__auto___13506)){
args__8564__auto__.push((arguments[i__8558__auto___13507]));

var G__13508 = (i__8558__auto___13507 + (1));
i__8558__auto___13507 = G__13508;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13505))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13505){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13505),args);
});})(g__8649__auto___13505))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__8649__auto___13505){
return (function (seq13456){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13456));
});})(g__8649__auto___13505))
;


var g__8649__auto___13509 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__8649__auto___13509){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13510 = arguments.length;
var i__8558__auto___13511 = (0);
while(true){
if((i__8558__auto___13511 < len__8557__auto___13510)){
args__8564__auto__.push((arguments[i__8558__auto___13511]));

var G__13512 = (i__8558__auto___13511 + (1));
i__8558__auto___13511 = G__13512;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13509))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13509){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13509),args);
});})(g__8649__auto___13509))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__8649__auto___13509){
return (function (seq13457){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13457));
});})(g__8649__auto___13509))
;


var g__8649__auto___13513 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__8649__auto___13513){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13514 = arguments.length;
var i__8558__auto___13515 = (0);
while(true){
if((i__8558__auto___13515 < len__8557__auto___13514)){
args__8564__auto__.push((arguments[i__8558__auto___13515]));

var G__13516 = (i__8558__auto___13515 + (1));
i__8558__auto___13515 = G__13516;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13513))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13513){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13513),args);
});})(g__8649__auto___13513))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__8649__auto___13513){
return (function (seq13458){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13458));
});})(g__8649__auto___13513))
;


var g__8649__auto___13517 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__8649__auto___13517){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13518 = arguments.length;
var i__8558__auto___13519 = (0);
while(true){
if((i__8558__auto___13519 < len__8557__auto___13518)){
args__8564__auto__.push((arguments[i__8558__auto___13519]));

var G__13520 = (i__8558__auto___13519 + (1));
i__8558__auto___13519 = G__13520;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13517))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13517){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13517),args);
});})(g__8649__auto___13517))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__8649__auto___13517){
return (function (seq13459){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13459));
});})(g__8649__auto___13517))
;


var g__8649__auto___13521 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__8649__auto___13521){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13522 = arguments.length;
var i__8558__auto___13523 = (0);
while(true){
if((i__8558__auto___13523 < len__8557__auto___13522)){
args__8564__auto__.push((arguments[i__8558__auto___13523]));

var G__13524 = (i__8558__auto___13523 + (1));
i__8558__auto___13523 = G__13524;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13521))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13521){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13521),args);
});})(g__8649__auto___13521))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__8649__auto___13521){
return (function (seq13460){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13460));
});})(g__8649__auto___13521))
;


var g__8649__auto___13525 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__8649__auto___13525){
return (function cljs$spec$impl$gen$return(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13526 = arguments.length;
var i__8558__auto___13527 = (0);
while(true){
if((i__8558__auto___13527 < len__8557__auto___13526)){
args__8564__auto__.push((arguments[i__8558__auto___13527]));

var G__13528 = (i__8558__auto___13527 + (1));
i__8558__auto___13527 = G__13528;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13525))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13525){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13525),args);
});})(g__8649__auto___13525))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__8649__auto___13525){
return (function (seq13461){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13461));
});})(g__8649__auto___13525))
;


var g__8649__auto___13529 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__8649__auto___13529){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13530 = arguments.length;
var i__8558__auto___13531 = (0);
while(true){
if((i__8558__auto___13531 < len__8557__auto___13530)){
args__8564__auto__.push((arguments[i__8558__auto___13531]));

var G__13532 = (i__8558__auto___13531 + (1));
i__8558__auto___13531 = G__13532;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13529))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13529){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13529),args);
});})(g__8649__auto___13529))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8649__auto___13529){
return (function (seq13462){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13462));
});})(g__8649__auto___13529))
;


var g__8649__auto___13533 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__8649__auto___13533){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13534 = arguments.length;
var i__8558__auto___13535 = (0);
while(true){
if((i__8558__auto___13535 < len__8557__auto___13534)){
args__8564__auto__.push((arguments[i__8558__auto___13535]));

var G__13536 = (i__8558__auto___13535 + (1));
i__8558__auto___13535 = G__13536;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13533))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13533){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13533),args);
});})(g__8649__auto___13533))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__8649__auto___13533){
return (function (seq13463){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13463));
});})(g__8649__auto___13533))
;


var g__8649__auto___13537 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__8649__auto___13537){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13538 = arguments.length;
var i__8558__auto___13539 = (0);
while(true){
if((i__8558__auto___13539 < len__8557__auto___13538)){
args__8564__auto__.push((arguments[i__8558__auto___13539]));

var G__13540 = (i__8558__auto___13539 + (1));
i__8558__auto___13539 = G__13540;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8649__auto___13537))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8649__auto___13537){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8649__auto___13537),args);
});})(g__8649__auto___13537))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__8649__auto___13537){
return (function (seq13464){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13464));
});})(g__8649__auto___13537))
;

var g__8662__auto___13562 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__8662__auto___13562){
return (function cljs$spec$impl$gen$any(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13563 = arguments.length;
var i__8558__auto___13564 = (0);
while(true){
if((i__8558__auto___13564 < len__8557__auto___13563)){
args__8564__auto__.push((arguments[i__8558__auto___13564]));

var G__13565 = (i__8558__auto___13564 + (1));
i__8558__auto___13564 = G__13565;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13562))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13562){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13562);
});})(g__8662__auto___13562))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__8662__auto___13562){
return (function (seq13541){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13541));
});})(g__8662__auto___13562))
;


var g__8662__auto___13566 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__8662__auto___13566){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13567 = arguments.length;
var i__8558__auto___13568 = (0);
while(true){
if((i__8558__auto___13568 < len__8557__auto___13567)){
args__8564__auto__.push((arguments[i__8558__auto___13568]));

var G__13569 = (i__8558__auto___13568 + (1));
i__8558__auto___13568 = G__13569;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13566))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13566){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13566);
});})(g__8662__auto___13566))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__8662__auto___13566){
return (function (seq13542){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13542));
});})(g__8662__auto___13566))
;


var g__8662__auto___13570 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__8662__auto___13570){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13571 = arguments.length;
var i__8558__auto___13572 = (0);
while(true){
if((i__8558__auto___13572 < len__8557__auto___13571)){
args__8564__auto__.push((arguments[i__8558__auto___13572]));

var G__13573 = (i__8558__auto___13572 + (1));
i__8558__auto___13572 = G__13573;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13570))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13570){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13570);
});})(g__8662__auto___13570))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__8662__auto___13570){
return (function (seq13543){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13543));
});})(g__8662__auto___13570))
;


var g__8662__auto___13574 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__8662__auto___13574){
return (function cljs$spec$impl$gen$char(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13575 = arguments.length;
var i__8558__auto___13576 = (0);
while(true){
if((i__8558__auto___13576 < len__8557__auto___13575)){
args__8564__auto__.push((arguments[i__8558__auto___13576]));

var G__13577 = (i__8558__auto___13576 + (1));
i__8558__auto___13576 = G__13577;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13574))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13574){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13574);
});})(g__8662__auto___13574))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__8662__auto___13574){
return (function (seq13544){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13544));
});})(g__8662__auto___13574))
;


var g__8662__auto___13578 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__8662__auto___13578){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13579 = arguments.length;
var i__8558__auto___13580 = (0);
while(true){
if((i__8558__auto___13580 < len__8557__auto___13579)){
args__8564__auto__.push((arguments[i__8558__auto___13580]));

var G__13581 = (i__8558__auto___13580 + (1));
i__8558__auto___13580 = G__13581;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13578))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13578){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13578);
});})(g__8662__auto___13578))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__8662__auto___13578){
return (function (seq13545){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13545));
});})(g__8662__auto___13578))
;


var g__8662__auto___13582 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__8662__auto___13582){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13583 = arguments.length;
var i__8558__auto___13584 = (0);
while(true){
if((i__8558__auto___13584 < len__8557__auto___13583)){
args__8564__auto__.push((arguments[i__8558__auto___13584]));

var G__13585 = (i__8558__auto___13584 + (1));
i__8558__auto___13584 = G__13585;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13582))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13582){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13582);
});})(g__8662__auto___13582))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__8662__auto___13582){
return (function (seq13546){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13546));
});})(g__8662__auto___13582))
;


var g__8662__auto___13586 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__8662__auto___13586){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13587 = arguments.length;
var i__8558__auto___13588 = (0);
while(true){
if((i__8558__auto___13588 < len__8557__auto___13587)){
args__8564__auto__.push((arguments[i__8558__auto___13588]));

var G__13589 = (i__8558__auto___13588 + (1));
i__8558__auto___13588 = G__13589;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13586))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13586){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13586);
});})(g__8662__auto___13586))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__8662__auto___13586){
return (function (seq13547){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13547));
});})(g__8662__auto___13586))
;


var g__8662__auto___13590 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__8662__auto___13590){
return (function cljs$spec$impl$gen$double(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13591 = arguments.length;
var i__8558__auto___13592 = (0);
while(true){
if((i__8558__auto___13592 < len__8557__auto___13591)){
args__8564__auto__.push((arguments[i__8558__auto___13592]));

var G__13593 = (i__8558__auto___13592 + (1));
i__8558__auto___13592 = G__13593;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13590))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13590){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13590);
});})(g__8662__auto___13590))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__8662__auto___13590){
return (function (seq13548){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13548));
});})(g__8662__auto___13590))
;


var g__8662__auto___13594 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__8662__auto___13594){
return (function cljs$spec$impl$gen$int(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13595 = arguments.length;
var i__8558__auto___13596 = (0);
while(true){
if((i__8558__auto___13596 < len__8557__auto___13595)){
args__8564__auto__.push((arguments[i__8558__auto___13596]));

var G__13597 = (i__8558__auto___13596 + (1));
i__8558__auto___13596 = G__13597;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13594))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13594){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13594);
});})(g__8662__auto___13594))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__8662__auto___13594){
return (function (seq13549){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13549));
});})(g__8662__auto___13594))
;


var g__8662__auto___13598 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__8662__auto___13598){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13599 = arguments.length;
var i__8558__auto___13600 = (0);
while(true){
if((i__8558__auto___13600 < len__8557__auto___13599)){
args__8564__auto__.push((arguments[i__8558__auto___13600]));

var G__13601 = (i__8558__auto___13600 + (1));
i__8558__auto___13600 = G__13601;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13598))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13598){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13598);
});})(g__8662__auto___13598))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__8662__auto___13598){
return (function (seq13550){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13550));
});})(g__8662__auto___13598))
;


var g__8662__auto___13602 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__8662__auto___13602){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13603 = arguments.length;
var i__8558__auto___13604 = (0);
while(true){
if((i__8558__auto___13604 < len__8557__auto___13603)){
args__8564__auto__.push((arguments[i__8558__auto___13604]));

var G__13605 = (i__8558__auto___13604 + (1));
i__8558__auto___13604 = G__13605;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13602))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13602){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13602);
});})(g__8662__auto___13602))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__8662__auto___13602){
return (function (seq13551){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13551));
});})(g__8662__auto___13602))
;


var g__8662__auto___13606 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__8662__auto___13606){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13607 = arguments.length;
var i__8558__auto___13608 = (0);
while(true){
if((i__8558__auto___13608 < len__8557__auto___13607)){
args__8564__auto__.push((arguments[i__8558__auto___13608]));

var G__13609 = (i__8558__auto___13608 + (1));
i__8558__auto___13608 = G__13609;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13606))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13606){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13606);
});})(g__8662__auto___13606))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__8662__auto___13606){
return (function (seq13552){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13552));
});})(g__8662__auto___13606))
;


var g__8662__auto___13610 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__8662__auto___13610){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13611 = arguments.length;
var i__8558__auto___13612 = (0);
while(true){
if((i__8558__auto___13612 < len__8557__auto___13611)){
args__8564__auto__.push((arguments[i__8558__auto___13612]));

var G__13613 = (i__8558__auto___13612 + (1));
i__8558__auto___13612 = G__13613;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13610))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13610){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13610);
});})(g__8662__auto___13610))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__8662__auto___13610){
return (function (seq13553){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13553));
});})(g__8662__auto___13610))
;


var g__8662__auto___13614 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__8662__auto___13614){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13615 = arguments.length;
var i__8558__auto___13616 = (0);
while(true){
if((i__8558__auto___13616 < len__8557__auto___13615)){
args__8564__auto__.push((arguments[i__8558__auto___13616]));

var G__13617 = (i__8558__auto___13616 + (1));
i__8558__auto___13616 = G__13617;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13614))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13614){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13614);
});})(g__8662__auto___13614))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__8662__auto___13614){
return (function (seq13554){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13554));
});})(g__8662__auto___13614))
;


var g__8662__auto___13618 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__8662__auto___13618){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13619 = arguments.length;
var i__8558__auto___13620 = (0);
while(true){
if((i__8558__auto___13620 < len__8557__auto___13619)){
args__8564__auto__.push((arguments[i__8558__auto___13620]));

var G__13621 = (i__8558__auto___13620 + (1));
i__8558__auto___13620 = G__13621;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13618))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13618){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13618);
});})(g__8662__auto___13618))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__8662__auto___13618){
return (function (seq13555){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13555));
});})(g__8662__auto___13618))
;


var g__8662__auto___13622 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__8662__auto___13622){
return (function cljs$spec$impl$gen$string(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13623 = arguments.length;
var i__8558__auto___13624 = (0);
while(true){
if((i__8558__auto___13624 < len__8557__auto___13623)){
args__8564__auto__.push((arguments[i__8558__auto___13624]));

var G__13625 = (i__8558__auto___13624 + (1));
i__8558__auto___13624 = G__13625;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13622))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13622){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13622);
});})(g__8662__auto___13622))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__8662__auto___13622){
return (function (seq13556){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13556));
});})(g__8662__auto___13622))
;


var g__8662__auto___13626 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__8662__auto___13626){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13627 = arguments.length;
var i__8558__auto___13628 = (0);
while(true){
if((i__8558__auto___13628 < len__8557__auto___13627)){
args__8564__auto__.push((arguments[i__8558__auto___13628]));

var G__13629 = (i__8558__auto___13628 + (1));
i__8558__auto___13628 = G__13629;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13626))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13626){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13626);
});})(g__8662__auto___13626))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__8662__auto___13626){
return (function (seq13557){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13557));
});})(g__8662__auto___13626))
;


var g__8662__auto___13630 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__8662__auto___13630){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13631 = arguments.length;
var i__8558__auto___13632 = (0);
while(true){
if((i__8558__auto___13632 < len__8557__auto___13631)){
args__8564__auto__.push((arguments[i__8558__auto___13632]));

var G__13633 = (i__8558__auto___13632 + (1));
i__8558__auto___13632 = G__13633;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13630))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13630){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13630);
});})(g__8662__auto___13630))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__8662__auto___13630){
return (function (seq13558){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13558));
});})(g__8662__auto___13630))
;


var g__8662__auto___13634 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__8662__auto___13634){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13635 = arguments.length;
var i__8558__auto___13636 = (0);
while(true){
if((i__8558__auto___13636 < len__8557__auto___13635)){
args__8564__auto__.push((arguments[i__8558__auto___13636]));

var G__13637 = (i__8558__auto___13636 + (1));
i__8558__auto___13636 = G__13637;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13634))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13634){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13634);
});})(g__8662__auto___13634))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__8662__auto___13634){
return (function (seq13559){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13559));
});})(g__8662__auto___13634))
;


var g__8662__auto___13638 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__8662__auto___13638){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13639 = arguments.length;
var i__8558__auto___13640 = (0);
while(true){
if((i__8558__auto___13640 < len__8557__auto___13639)){
args__8564__auto__.push((arguments[i__8558__auto___13640]));

var G__13641 = (i__8558__auto___13640 + (1));
i__8558__auto___13640 = G__13641;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13638))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13638){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13638);
});})(g__8662__auto___13638))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__8662__auto___13638){
return (function (seq13560){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13560));
});})(g__8662__auto___13638))
;


var g__8662__auto___13642 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__8662__auto___13642){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13643 = arguments.length;
var i__8558__auto___13644 = (0);
while(true){
if((i__8558__auto___13644 < len__8557__auto___13643)){
args__8564__auto__.push((arguments[i__8558__auto___13644]));

var G__13645 = (i__8558__auto___13644 + (1));
i__8558__auto___13644 = G__13645;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});})(g__8662__auto___13642))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8662__auto___13642){
return (function (args){
return cljs.core.deref.call(null,g__8662__auto___13642);
});})(g__8662__auto___13642))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__8662__auto___13642){
return (function (seq13561){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13561));
});})(g__8662__auto___13642))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8564__auto__ = [];
var len__8557__auto___13648 = arguments.length;
var i__8558__auto___13649 = (0);
while(true){
if((i__8558__auto___13649 < len__8557__auto___13648)){
args__8564__auto__.push((arguments[i__8558__auto___13649]));

var G__13650 = (i__8558__auto___13649 + (1));
i__8558__auto___13649 = G__13650;
continue;
} else {
}
break;
}

var argseq__8565__auto__ = ((((0) < args__8564__auto__.length))?(new cljs.core.IndexedSeq(args__8564__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8565__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__13646_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13646_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq13647){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13647));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__13651_SHARP_){
return (new Date(p1__13651_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map