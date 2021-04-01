var name = 'abc'

var letter = 'Lorem abc ipsum dolor sit amet, abc consectetur adipisicing abc elit');
 console.log(letter);
//abc를 부분 부분 바꾸고 싶은데 어케 할까...? abc중에 바꾸고 싶은 부분에 name을 넣어준다.
//이후 바꿀 부분에 대해서는 name 만 바꾸면 한번에 바꿔 진다.
letter = 'Lorem'+name+ 'ipsum dolor sit amet, abc consectetur adipisicing abc elit');
name = 'cba'
console.log(letter);
