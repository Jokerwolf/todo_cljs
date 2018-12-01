(defproject cljs-study "0.1.0-SNAPSHOT"
  :source-paths ["src/clj"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.854"]
                 [cljsjs/react "16.3.2-0"]
                 [cljsjs/react-dom "16.3.2-0"]
                 [reagent "0.8.1"]]

  :plugins [[lein-cljsbuild "1.1.7"]]
  :cljsbuild {
              :builds [{:source-paths ["src/cljs"]
                        :compiler {:output-dir "resources/public/js"
                                   :output-to "resources/public/js/main.js"}
                                 :optimizations :whitespace
                                 :pretty-print true}]})
