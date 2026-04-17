

export class test1{
    textboxData = ['student', 'Password123'];
    loginElements = ['Username', 'Password'];
    loginTypes = ['textbox', 'textbox'] as const;

}

export class test2{

  loginDetails = [{type: 'textbox', name: 'Username', value: 'student'}, {type: 'textbox', name: 'Password', value: 'Password123'}] as const;
}
export class test345{
    loginTestArray = [{type: 'textboxUsername', name: 'Username'},
     {type: 'textboxPassword', name: 'Password'}];
}

export class loginData{
    textBoxUsername = 'student';
    textBoxPassword = 'Password123';
  }