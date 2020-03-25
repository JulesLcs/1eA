function repeat (s, n){
    return s.repeat(n);
}


function truncate(s, n){
    if (s.length <= n) {
        return s
    }
    return s.slice(0, n-3) + '...'
}


function isPalindrome(s){
    if(s.length === 0 ||s.length === 1){
        return true;
    }
    if(s[0]!== s[s.length - 1]){
        return false;
    }
    return isPalindrome(s.substr(1,s.length - 2));
}


function swapCase(s){
    let size = s.length;
    let news = "";
    for(let i = 0; i < size; i++){
        if(s[i] == s[i].toUpperCase()){
            news += s[i].toLowerCase();
        }
        else if(s[i] == s[i].toLowerCase()){
            news += s[i].toUpperCase();
        }
        else{
            news += s[i];
        }
    }

    return news;
}