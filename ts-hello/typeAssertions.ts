let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let endsWithCAlt = (message as string).endsWith('c');