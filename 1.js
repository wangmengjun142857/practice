<!--
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
-->
    <script type="text/javascript">
        
        //方法调用模式
        
        var myObject = {
            value: 0,
            increment: function (inc) {
                this.value += typeof inc === 'number' ? inc : 1;
            }
        };
            myObject.increment();
            document.writeln(myObject.value);
            myObject.increment(2);
            alert(myObject.value);
        
        
        
        //hanoi的一个寻常解
        
        var hanoi = function (disc, src, aux, dst) {
            if (disc > 0) {
                hanoi(disc - 1, src, dst, aux);
                document.writeln('Move disc '+ disc + 'from ' + src + 'to' + dst);
                hanoi(disc - 1, aux, src, dst);
            }
        }
        hanoi(3, 'Src', 'Aux', 'Dst');
        
        
        
        
        // 定义 walk_the_DOM 函数，它从某个指定的节点开始，按HTML源码中的顺序访问该
        // 树的每个节点。
        // 它会调用一个函数，并以此传递每个节点给它。 walk_the_DOM 调用自身去处理每
        // 一个子节点。
        
        var walk_the_DOM = function walk(node,func) {
            func(node);
            node = node.firstChild;
            while (node) {
                walk(node,func);
                node = node,nextSibing;
            }
        };
        
        // 定义 getElementsByAttribute 函数。它以一个属性名称字符串和一个可选的匹配
        // 值作为参数。
        // 它调用 walk_the_DOM，传递一个用来查找节点属性名的函数作为参数。
        // 匹配的节点会累加到一个结果数组中。
        
        var getElementsByAttribute = function (att, value) {
            var results = [];
            
            walk_the_DOM(document.body, function (node) {
                var actual = node.nodeType === 1 && node.getAttribute(att);
                if (typeof actual === 'string' &&(actual === value || typeof value !== 'string')) {
                    results.push(node);
                }
            });
            return results;
        };
        
        
        
        // 构建一个带尾递归的函数。因为他会返回自身调用的结果，所以它是尾递归。
        // JavaScript 当前没有对这种形式的递归做出优化。
        
        var factotrial = function factorial (i,a) {
            a = a || 1;
            if (i < 2) {
                return a;
            }
            return factorial (i - 1, a * 1);
        };
        
        document.writeln(factorial(4));
        
        
        
        var foo = function () {
            var a = 3, b = 5;
            var bar = function () {
                var b = 7, c = 11;
                //此时，a=3,b=7,c=11.
                
                a += b + c;
                //此时，a=21,b=7,c=11.
                console.log(a);
                
            };
            //此时，a=3,b=5,而c还没有定义。
            bar();
            //此时，a=21, b=5.
        };
        

    </script>
<!--
</head>
<body>

</body>
</html>
-->