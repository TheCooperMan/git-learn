function displayProp(obj){      
    var names="";         
    for(var name in obj){         
        console.info(name);   
    }       
}  

window.onload = function() {
    var root = document.getElementById('root');

    // displayProp(root);
    console.info('Div节点的类型', Object.prototype.toString.call(root));
    console.info('Div.children节点的类型', Object.prototype.toString.call(root.children), root.children);
    console.info('Div.children[0]节点的类型', Object.prototype.toString.call(root.children[0]), root.children[0]);

    var htmlCollection = root.children;
    console.info('htmlCollection.item: ', htmlCollection.item(0));
    console.info('htmlCollection.namedItem: ', htmlCollection.namedItem('c1'));
}