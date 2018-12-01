(ns study.main
  (:require [reagent.core :as r]))


(defn some-component []
  [:div
   [:h3 "I am a component!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "blue"}} " and blue"]
    " text."]])

(r/render [some-component]
          (js/document.getElementById "app"))
; (.write js/document "<h3>Hi</h3>")
