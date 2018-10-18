[@genType]
type t = int;

[@genType]
let someIntList = [1, 2, 3];

[@genType]
let map = List.map;

[@genType]
type typeWithVars('x, 'y, 'z) =
  | A('x, 'y)
  | B('z);

[@genType]
type selfRecursive = {selfRecursive};

[@genType]
type mutuallyRecursiveA = {b: mutuallyRecursiveB}
and  mutuallyRecursiveB = {a: mutuallyRecursiveA};