// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12432){
var map__12457 = p__12432;
var map__12457__$1 = ((((!((map__12457 == null)))?((((map__12457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12457):map__12457);
var m = map__12457__$1;
var n = cljs.core.get.call(null,map__12457__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12457__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12459_12481 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12460_12482 = null;
var count__12461_12483 = (0);
var i__12462_12484 = (0);
while(true){
if((i__12462_12484 < count__12461_12483)){
var f_12485 = cljs.core._nth.call(null,chunk__12460_12482,i__12462_12484);
cljs.core.println.call(null,"  ",f_12485);

var G__12486 = seq__12459_12481;
var G__12487 = chunk__12460_12482;
var G__12488 = count__12461_12483;
var G__12489 = (i__12462_12484 + (1));
seq__12459_12481 = G__12486;
chunk__12460_12482 = G__12487;
count__12461_12483 = G__12488;
i__12462_12484 = G__12489;
continue;
} else {
var temp__4657__auto___12490 = cljs.core.seq.call(null,seq__12459_12481);
if(temp__4657__auto___12490){
var seq__12459_12491__$1 = temp__4657__auto___12490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12459_12491__$1)){
var c__8263__auto___12492 = cljs.core.chunk_first.call(null,seq__12459_12491__$1);
var G__12493 = cljs.core.chunk_rest.call(null,seq__12459_12491__$1);
var G__12494 = c__8263__auto___12492;
var G__12495 = cljs.core.count.call(null,c__8263__auto___12492);
var G__12496 = (0);
seq__12459_12481 = G__12493;
chunk__12460_12482 = G__12494;
count__12461_12483 = G__12495;
i__12462_12484 = G__12496;
continue;
} else {
var f_12497 = cljs.core.first.call(null,seq__12459_12491__$1);
cljs.core.println.call(null,"  ",f_12497);

var G__12498 = cljs.core.next.call(null,seq__12459_12491__$1);
var G__12499 = null;
var G__12500 = (0);
var G__12501 = (0);
seq__12459_12481 = G__12498;
chunk__12460_12482 = G__12499;
count__12461_12483 = G__12500;
i__12462_12484 = G__12501;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12502 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7444__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7444__auto__)){
return or__7444__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12502);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12502)))?cljs.core.second.call(null,arglists_12502):arglists_12502));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12463_12503 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12464_12504 = null;
var count__12465_12505 = (0);
var i__12466_12506 = (0);
while(true){
if((i__12466_12506 < count__12465_12505)){
var vec__12467_12507 = cljs.core._nth.call(null,chunk__12464_12504,i__12466_12506);
var name_12508 = cljs.core.nth.call(null,vec__12467_12507,(0),null);
var map__12470_12509 = cljs.core.nth.call(null,vec__12467_12507,(1),null);
var map__12470_12510__$1 = ((((!((map__12470_12509 == null)))?((((map__12470_12509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12470_12509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12470_12509):map__12470_12509);
var doc_12511 = cljs.core.get.call(null,map__12470_12510__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12512 = cljs.core.get.call(null,map__12470_12510__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12508);

cljs.core.println.call(null," ",arglists_12512);

if(cljs.core.truth_(doc_12511)){
cljs.core.println.call(null," ",doc_12511);
} else {
}

var G__12513 = seq__12463_12503;
var G__12514 = chunk__12464_12504;
var G__12515 = count__12465_12505;
var G__12516 = (i__12466_12506 + (1));
seq__12463_12503 = G__12513;
chunk__12464_12504 = G__12514;
count__12465_12505 = G__12515;
i__12466_12506 = G__12516;
continue;
} else {
var temp__4657__auto___12517 = cljs.core.seq.call(null,seq__12463_12503);
if(temp__4657__auto___12517){
var seq__12463_12518__$1 = temp__4657__auto___12517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12463_12518__$1)){
var c__8263__auto___12519 = cljs.core.chunk_first.call(null,seq__12463_12518__$1);
var G__12520 = cljs.core.chunk_rest.call(null,seq__12463_12518__$1);
var G__12521 = c__8263__auto___12519;
var G__12522 = cljs.core.count.call(null,c__8263__auto___12519);
var G__12523 = (0);
seq__12463_12503 = G__12520;
chunk__12464_12504 = G__12521;
count__12465_12505 = G__12522;
i__12466_12506 = G__12523;
continue;
} else {
var vec__12472_12524 = cljs.core.first.call(null,seq__12463_12518__$1);
var name_12525 = cljs.core.nth.call(null,vec__12472_12524,(0),null);
var map__12475_12526 = cljs.core.nth.call(null,vec__12472_12524,(1),null);
var map__12475_12527__$1 = ((((!((map__12475_12526 == null)))?((((map__12475_12526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12475_12526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12475_12526):map__12475_12526);
var doc_12528 = cljs.core.get.call(null,map__12475_12527__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12529 = cljs.core.get.call(null,map__12475_12527__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12525);

cljs.core.println.call(null," ",arglists_12529);

if(cljs.core.truth_(doc_12528)){
cljs.core.println.call(null," ",doc_12528);
} else {
}

var G__12530 = cljs.core.next.call(null,seq__12463_12518__$1);
var G__12531 = null;
var G__12532 = (0);
var G__12533 = (0);
seq__12463_12503 = G__12530;
chunk__12464_12504 = G__12531;
count__12465_12505 = G__12532;
i__12466_12506 = G__12533;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__12477 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12478 = null;
var count__12479 = (0);
var i__12480 = (0);
while(true){
if((i__12480 < count__12479)){
var role = cljs.core._nth.call(null,chunk__12478,i__12480);
var temp__4657__auto___12534__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12534__$1)){
var spec_12535 = temp__4657__auto___12534__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12535));
} else {
}

var G__12536 = seq__12477;
var G__12537 = chunk__12478;
var G__12538 = count__12479;
var G__12539 = (i__12480 + (1));
seq__12477 = G__12536;
chunk__12478 = G__12537;
count__12479 = G__12538;
i__12480 = G__12539;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12477);
if(temp__4657__auto____$1){
var seq__12477__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12477__$1)){
var c__8263__auto__ = cljs.core.chunk_first.call(null,seq__12477__$1);
var G__12540 = cljs.core.chunk_rest.call(null,seq__12477__$1);
var G__12541 = c__8263__auto__;
var G__12542 = cljs.core.count.call(null,c__8263__auto__);
var G__12543 = (0);
seq__12477 = G__12540;
chunk__12478 = G__12541;
count__12479 = G__12542;
i__12480 = G__12543;
continue;
} else {
var role = cljs.core.first.call(null,seq__12477__$1);
var temp__4657__auto___12544__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12544__$2)){
var spec_12545 = temp__4657__auto___12544__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12545));
} else {
}

var G__12546 = cljs.core.next.call(null,seq__12477__$1);
var G__12547 = null;
var G__12548 = (0);
var G__12549 = (0);
seq__12477 = G__12546;
chunk__12478 = G__12547;
count__12479 = G__12548;
i__12480 = G__12549;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map