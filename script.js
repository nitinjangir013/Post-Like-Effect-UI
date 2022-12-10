let likeImg = document.getElementsByClassName('like_img')[0];
let likeEmojiContainer = document.getElementsByClassName('like_emoji_container')[0];
var isLikeOpen = false;
function likeIcons()
{
  if(isLikeOpen == false)
    {
      likeEmojiContainer.style.width = "250px";
      isLikeOpen = true;
    }
  else
    {
      likeEmojiContainer.style.width = "0px";
      isLikeOpen = false;
    }
}


function selectEmoji(value)
{
  if(value == 0)
    {
      likeImg.innerHTML = '<img class="emoji_icon" src="https://i.pinimg.com/originals/bd/f6/f3/bdf6f3a1d20e40ddea6c51a3af40b36e.gif" alt="...">';
      likeEmojiContainer.style.width = "0px";
      isLikeOpen = false;      
    }
 if(value == 1)
    {
      likeImg.innerHTML = '<img class="emoji_icon" src="https://acegif.com/wp-content/gif/laughing-emoji-3.gif" alt="...">';  
      likeEmojiContainer.style.width = "0px";
      isLikeOpen = false;    
    }
 if(value == 2)
    {
      likeImg.innerHTML = '<img class="emoji_icon" src="https://cliply.co/wp-content/uploads/2021/03/392103020_WOW_EMOJI_400px.gif" alt="...">'; 
      likeEmojiContainer.style.width = "0px";
      isLikeOpen = false;     
    }
 if(value == 3)
    {
      likeImg.innerHTML = '<img class="emoji_icon" src="https://i.pinimg.com/originals/4c/6c/69/4c6c693465e89a914c40ba485cc721b4.gif" alt="...">';
      likeEmojiContainer.style.width = "0px";
      isLikeOpen = false;     
    }
 if(value == 4)
    {
      likeImg.innerHTML = '<img class="emoji_icon" src="https://i.pinimg.com/originals/c4/07/04/c4070448ce8174b2b3e121081ddbbee5.gif" alt="...">';
      likeEmojiContainer.style.width = "0px";
      isLikeOpen = false;     
    }
}