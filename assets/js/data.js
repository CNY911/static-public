function getRecentCalls() {
    console.log("CN911: Fetching recent calls...");
    // Fetch the recent calls from the API
    $.ajax({
        url: "https://api.cny911.com/get-recent-calls",
        method: "GET",
        dataType: "json",
        success: function (data) {
            console.log("Recent calls data:", data);
            // Create a table
            var $table = $("<table id='data-table'></table>")
                .css({
                    "border-collapse": "collapse",
                    "width": "100%"
                });

            // Create the header
            var $thead = $(`
          <thead>
            <tr>
              <th style="border:1px solid #ccc; padding:8px;">Incident Number</th>
              <th style="border:1px solid #ccc; padding:8px;">Date/Time</th>
              <th style="border:1px solid #ccc; padding:8px;">Agency</th>
              <th style="border:1px solid #ccc; padding:8px;">Type</th>
              <th style="border:1px solid #ccc; padding:8px;">Address</th>
            </tr>
          </thead>
        `);

            var $tbody = $("<tbody></tbody>");

            // Populate table rows from the API data
            $.each(data.data, function (index, call) {
                var $tr = $("<tr></tr>");
                $tr.append(
                    `<td style="border:1px solid #ccc; padding:8px;">${call.id || ""}</td>`
                );
                $tr.append(
                    `<td style="border:1px solid #ccc; padding:8px;">${call.time || ""}</td>`
                );
                $tr.append(
                    `<td style="border:1px solid #ccc; padding:8px;">${call.agency || ""}</td>`
                );
                $tr.append(
                    `<td style="border:1px solid #ccc; padding:8px;">${call.type || ""} ${call.sub_type || ""}</td>`
                );
                address_string = call.address_prefix + " " + call.address_complex + " " + call.address_street + " " + call.address_street_type + " " + call.address_suffix + "<br>Cross Streets: " + call.xstreet1 + call.xstreet_sep + call.xstreet2;
                $tr.append(
                    `<td style="border:1px solid #ccc; padding:8px;">${address_string || ""}</td>`
                );

                $tbody.append($tr);
            });

            $table.append($thead).append($tbody);

            // Clear the #data div and place our table inside it
            $("#data").empty().append($table);
            console.log("CN911: Recent calls table updated!");
        },
        error: function (xhr, status, error) {
            console.error("CNY911: Error fetching data:", error);
            $("#data").html("Unable to load recent calls at this time.");
        }
    });
}

function archiveCalls() {
    console.log("CN911: Fetching recent calls...");
    // Fetch the recent calls from the API
    $.ajax({
        url: "https://api.cny911.com/archive?limit=1000&offset=0",
        method: "GET",
        dataType: "json",
        success: function (data) {
            console.log("Archive calls data:", data.data);
            // Create a table
            var $table = $("<table id='data-table'></table>")
                .css({
                    "border-collapse": "collapse",
                    "width": "100%"
                });

            // Create the header
            var $thead = $(`
          <thead>
            <tr>
              <th style="border:1px solid #ccc; padding:8px;">Incident Number</th>
              <th style="border:1px solid #ccc; padding:8px;">Date/Time</th>
              <th style="border:1px solid #ccc; padding:8px;">Agency</th>
              <th style="border:1px solid #ccc; padding:8px;">Type</th>
              <th style="border:1px solid #ccc; padding:8px;">Address</th>
            </tr>
          </thead>
        `);

            var $tbody = $("<tbody></tbody>");

            // Populate table rows from the API data
            $.each(data.data, function (index, call) {
                var $tr = $("<tr></tr>");
                $tr.append(
                    `<td style="border:1px solid #ccc; padding:8px;">${call.id || ""}</td>`
                );
                $tr.append(
                    `<td style="border:1px solid #ccc; padding:8px;">${call.time || ""}</td>`
                );
                $tr.append(
                    `<td style="border:1px solid #ccc; padding:8px;">${call.agency || ""}</td>`
                );
                $tr.append(
                    `<td style="border:1px solid #ccc; padding:8px;">${call.type || ""} ${call.sub_type || ""}</td>`
                );
                address_string = call.address_prefix + " " + call.address_complex + " " + call.address_street + " " + call.address_street_type + " " + call.address_suffix + "<br>Cross Streets: " + call.xstreet1 + call.xstreet_sep + call.xstreet2;
                $tr.append(
                    `<td style="border:1px solid #ccc; padding:8px;">${address_string || ""}</td>`
                );

                $tbody.append($tr);
            });

            $table.append($thead).append($tbody);

            // Clear the #data div and place our table inside it
            $("#data").empty().append($table);
            console.log("CN911: Archive calls table updated!");
        },
        error: function (xhr, status, error) {
            console.error("CNY911: Error fetching data:", error);
            $("#data").html("Unable to load archive calls at this time.");
        }
    });
}