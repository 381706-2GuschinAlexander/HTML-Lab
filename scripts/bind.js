function bindImageSwap(left_button, rigth_button, image_element="none", image_path="none", global_counter, img_count){

    function setImage(name){
        image_element.src= image_path + name + ".jpg";
    };

    setImage(global_counter.toString())

    global_counter = 0;
    left_button.onclick = function(){
        --global_counter;
        if( global_counter < 0)
            global_counter = img_count - 1;

        setImage(global_counter.toString())
    };

    rigth_button.onclick = function(){
        global_counter = (global_counter + 1) % img_count;

        setImage(global_counter.toString())
    };
}
