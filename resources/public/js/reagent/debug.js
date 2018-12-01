// Compiled by ClojureScript 1.9.854 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__9725__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9726__i = 0, G__9726__a = new Array(arguments.length -  0);
while (G__9726__i < G__9726__a.length) {G__9726__a[G__9726__i] = arguments[G__9726__i + 0]; ++G__9726__i;}
  args = new cljs.core.IndexedSeq(G__9726__a,0,null);
} 
return G__9725__delegate.call(this,args);};
G__9725.cljs$lang$maxFixedArity = 0;
G__9725.cljs$lang$applyTo = (function (arglist__9727){
var args = cljs.core.seq(arglist__9727);
return G__9725__delegate(args);
});
G__9725.cljs$core$IFn$_invoke$arity$variadic = G__9725__delegate;
return G__9725;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9728__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9729__i = 0, G__9729__a = new Array(arguments.length -  0);
while (G__9729__i < G__9729__a.length) {G__9729__a[G__9729__i] = arguments[G__9729__i + 0]; ++G__9729__i;}
  args = new cljs.core.IndexedSeq(G__9729__a,0,null);
} 
return G__9728__delegate.call(this,args);};
G__9728.cljs$lang$maxFixedArity = 0;
G__9728.cljs$lang$applyTo = (function (arglist__9730){
var args = cljs.core.seq(arglist__9730);
return G__9728__delegate(args);
});
G__9728.cljs$core$IFn$_invoke$arity$variadic = G__9728__delegate;
return G__9728;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
