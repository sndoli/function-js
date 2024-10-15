// The functuation mark ( ) is called parentheses
// জাভাস্ক্রিপ্ট প্যারামিটার কি?
// জাভাস্ক্রিপ্টে, প্যারামিটারগুলি হল ভেরিয়েবল যা আপনি একটি ফাংশন সংজ্ঞার অংশ হিসাবে তালিকাভুক্ত করেন
//1.( Code-Drive-Invocation) user call ,first of all amra funcation nibo and amra eta k call korbo.
function myDihan(fullName, age, dateOfBirth) {
    console.log('hello'+ fullName+' i am '+age + dateOfBirth
    );
}
//() it"s called Argument
myDihan('doli',23 , "  my date of birth 1997");
myDihan('mili',34);
myDihan();


myDihan();

// 2.(Event-Drive-Invocation) amra funcation ready kore reke dibo, user eta k use kortey parbe tar moto kore
function isBuy() {
    console.log("Buy");
}
document.getElementById('btn').addEventListener('click',isBuy);
// addEventListener (dom)

// 3.(Automatic (self-invoked) Invocation)
// neje neje run korbe
// eta neje neje run kortey pare ,tai er kuno nam neoa dorkar nei, jar karone kuno funcation nam use kora hoy ni


(function(message){
    console.log('i am woman', message);
})
('hello');