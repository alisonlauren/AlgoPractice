
bad_words = ["mean", "ugly", "I hate"]
good_words = ["worthy", "matter", "good", "proud"]
user_input = input("Send a Text? ")
print(" ")
question_parts = user_input.split(" ")
for part in question_parts:
    if part.lower() in bad_words:
        user_choice = input("are you sure you want to send this text? It seems hurtful. Type Y or N?  ")
        if user_choice == "Y":
            print("wow ok, text is sent")
        elif user_choice == "N":
            print("good choice, text deleted")
    if part.lower() in good_words:
        print("Awesome, very sweet. Keep up the kindness!")
    




    
        