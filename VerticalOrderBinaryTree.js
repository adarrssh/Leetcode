// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
  
  // Create an example binary tree
 // Build the binary tree [3, 9, 20, null, null, 15, 7]
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
  

  
  var verticalTraversal = function(root) {
    const nodes = new Map();
     const queue = [[root, { x: 0, y: 0 }]];
   
     while (queue.length > 0) {
       const [temp, { x, y }] = queue.shift();
   
       if (!nodes.has(x)) {
         nodes.set(x, new Map());
       }
   
       if (!nodes.get(x).has(y)) {
         nodes.get(x).set(y, []);
       }
   
       nodes.get(x).get(y).push(temp.val);
   
       if (temp.left) {
         queue.push([temp.left, { x: x - 1, y: y + 1 }]);
       }
   
       if (temp.right) {
         queue.push([temp.right, { x: x + 1, y: y + 1 }]);
       }
     }
     // this is the map
     //    Map(4) {
     //   0 => Map(2) { 0 => [ 3 ], 2 => [ 15 ] },
     //   -1 => Map(1) { 1 => [ 9 ] },
    //   1 => Map(1) { 1 => [ 20 ] },
    //   2 => Map(1) { 2 => [ 7 ] }
    // }
     

     const sortedKeys = [...nodes.keys()].sort((a, b) => a - b);
     // this step will get all the keys (cols -> -1, 0 , 1) in sorted order
     // -1 0 1 2
     console.log(sortedKeys)


     const ans = [];
     for (const x of sortedKeys) {
       const sortedLevels = [...nodes.get(x).keys()].sort((a, b) => a - b);
       // this will sort all the rows (0,1,2)
       // -1 -> 1
       // 0 -> {0,2}
       // 1 ->{1}
       // 2 ->{2}
       
       let col = [];
   
       for (const y of sortedLevels) {
        // this will get all the elements in one column
         col.push(...nodes.get(x).get(y).sort((a, b) => a - b));
         console.log(x,y,[...nodes.get(x).get(y).sort((a, b) => a - b)])
       }
   
       ans.push(col);
     }
   
     return ans;
   };

     // Run the verticalTraversal function
  const result = verticalTraversal(root);
  
  // Display the result
  console.log(result);
