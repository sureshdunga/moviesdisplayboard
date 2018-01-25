import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  attributeBindings: ["_layout:layout"],
  _layout: "column center-center",

  trailerObjects: computed("movie.videos.results", function() {
    let videoResults = this.get("movie.videos.results");
    if (!videoResults.length) {
      return null;
    }

    return videoResults.filter(t => t.type === "Trailer").map(t => {
      switch (t.site) {
        //TODO: Should find all possible sites, and a fallback state
        case "YouTube":
          t.url = `https://www.youtube.com/watch?v=${t.key}`;
          break;
        default:
          t.url = `https://www.youtube.com/watch?v=${t.key}`;
      }
      return t;
    });
  })
});
