module.exports = {
    HTML: function(title, list, body, control) {
        return `
      <!doctype html>
      <html lang="ko">
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        ${control}
        ${body}
      </body>
      </html>
    `
    },
    list: function(filelist) {
        let list='<ul>';

        for(let i=0; i<filelist.length; i++) {
            list = list + `<li><a href="/page/${filelist[i]}">${filelist[i]}</a></li>`;
        }
        list += '</ul>';
        return list;
    }
};
