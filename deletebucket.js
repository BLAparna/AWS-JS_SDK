
var docs = [{"id":"1",
             "type":{"id":1,"desc":"Category 1"},
             "title":"Foo","date":"2018-06-21",
             "attachments":[{"id":51,
                              "filename":"foo.pdf",
                              "title":"Foo"},
                            {"id":20,
                            "filename":"bar.doc",
                            "title":"Bar"}]},{"id":"2","type":{"id":2,"desc":"Category 2"},"title":"Bar","date":"2018-06-21","attachments":[{"id":15,"filename":"foobar.xls","title":"Foobar"},{"id":201,"filename":"example.doc","title":"Example"}]}];

const result = docs.map(({id,type,attachments})=>{
    let doc={id,type};
    doc.attachments=attachments.map(({id})=>({id}));
    return doc;
});

console.log(result);