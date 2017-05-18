---
---
/*
 * GotToVote RCI .js
 * -----------------
 * GotToVote's registration centres information javascript file to fetch information from fusion tables and require no
 * backend server.
 *
 * Requirements
 * ------------
 * Requires the following things to run:
 *  - jQuery 1.11.3
 *
 * AUTHORS
 * -------
 * David Lemayian <david@codeforafrica.org>
 *
 * LICENSE
 * -------
 * GNU General Public License v3.0 (http://choosealicense.com/licenses/gpl-3.0/)
 * The GPL (V2 or V3) is a copyleft license that requires anyone who distributes your code or a derivative work to make
 * the source available under the same terms. V3 is similar to V2, but further restricts use in hardware that forbids
 * software alterations. Linux, Git, and WordPress use GPL.
 *
 * Contribution
 * ------------
 * Would you like to contribute to this file? Just follow Google's JS style guide:
 * https://google.github.io/styleguide/javascriptguide.xml
 *
 */
;

if (typeof gtv !== "object") {
  var gtv = {};
}

gtv.rci = {
  API_KEY: "{{ site.api_key }}",
  TABLE_ID: "{{ site.table_id }}",

  FT_SQL_URL: "https://www.googleapis.com/fusiontables/v2/query?sql=",

  config: {},
  columns: {
    data: {}
  },
  rows: {
    data: {}
  }
};

(function ($) {

  gtv.rci.columns.set = function (columns) {
    return this.data = columns;
  };

  gtv.rci.columns.get = function (index) {
    if (typeof this.data.items === "undefined") {
      return this.fetch();
    } else {
      return this.data.items[index];
    }
  };

  gtv.rci.columns.fetch = function (index) {
    $.ajax({
      url: "https://www.googleapis.com/fusiontables/v2/tables/" + gtv.rci.TABLE_ID + "/columns",
      data: {key: gtv.rci.API_KEY},
    }).done(function (msg) {
      gtv.rci.columns.set(msg);
      if (typeof index === "number") {
        return gtv.rci.columns.data.items[index];
      } else {
        return gtv.rci.columns.data;
      }
    });
  };

  console.log(gtv.rci.columns.get(0));

  console.log(gtv.rci);

})(jQuery);


