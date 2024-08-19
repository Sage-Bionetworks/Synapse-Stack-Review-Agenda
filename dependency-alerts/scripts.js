function fetchRepos(pathToJson, callback) {
  $.getJSON(pathToJson).done(callback);
}

function injectRows(data, tbodyId, urlSuffix) {
  const innerHTML = data
    .map(function (repo) {
      urlTemplate = 'https://github.com/'+repo+'/security/'+urlSuffix;
      return `
            <tr>
                <td style="text-align: left;">
                    <a target="_blank" rel=\"noopener noreferrer\" href=${urlTemplate}>${repo.replace("Sage-Bionetworks/", "")}</a>
                </td>
                <td style="text-align: center;">
                    <input type="checkbox" />
                </td>
            </tr>`;
    })
    .join("");
  $(tbodyId).html(innerHTML);
}

function addOpenAllReposLink(data, linkId, urlSuffix) {
  function openAll() {
    data.forEach((repo) => {
      const url = `https://github.com/${repo}/security/${urlSuffix}`;
      window.open(url);
    });
  }
  const link = document.createElement("a");
  link.href = "#";
  link.innerHTML = "Open All Repos in Multiple Tabs";
  link.addEventListener("click", openAll);

  document.getElementById(linkId).appendChild(link);
}
