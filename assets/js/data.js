$(document).ready(function() {
    $.ajax({
      url: "https://api.cny911.com/get-recent-calls",
      method: "GET",
      dataType: "json",
      success: function(data) {
        // Create a table
        var $table = $("<table></table>")
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
        $.each(data, function(index, call) {
          var $tr = $("<tr></tr>");
          $tr.append(
            `<td style="border:1px solid #ccc; padding:8px;">${call.incident_number || ""}</td>`
          );
          $tr.append(
            `<td style="border:1px solid #ccc; padding:8px;">${call.date_time || ""}</td>`
          );
          $tr.append(
            `<td style="border:1px solid #ccc; padding:8px;">${call.agency || ""}</td>`
          );
          $tr.append(
            `<td style="border:1px solid #ccc; padding:8px;">${call.type || ""}</td>`
          );
          $tr.append(
            `<td style="border:1px solid #ccc; padding:8px;">${call.address || ""}</td>`
          );

          $tbody.append($tr);
        });

        $table.append($thead).append($tbody);

        // Clear the #recent-calls div and place our table inside it
        $("#recent-calls").empty().append($table);
      },
      error: function(xhr, status, error) {
        console.error("Error fetching data:", error);
        $("#recent-calls").html("Unable to load recent calls at this time.");
      }
    });
  });