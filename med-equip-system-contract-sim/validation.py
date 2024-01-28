from datetime import datetime, date 

def validate_date():
    while True: 
        date_input = input("Enter date (dd.mm.yyyy): ")
        try: 
            date = datetime.strptime(date_input, "%d.%m.%Y").date()
            if(date <date.today()):
                break 
            else: 
                print("Date must be before today's date")
        except ValueError: 
            print("Invalid format")

    date = date.strftime("%d.%m.%Y")
    print(str(date))
    return str(date) 
    
def validate_time():
    while True: 
        time_input = input("Enter time (hh:mm): ")
        try: 
            time = datetime.strptime(time_input, "%H:%M").time()
            break 
        except ValueError: 
            print("Invalid format")

    
    time = time.strftime("%H:%M")
    print(str(time))
    return str(time) 

def validate_int(): 
    while True: 
        count_input = input("Enter total count: ")
        try: 
            count = int(count_input)
            break 
        except ValueError: 
            print("Not an integer")
    
    return count 
def validate_day(): 
    while True: 
        day_input = input("Enter day of monthly delivery: ")
        try: 
            count = int(day_input)
            break 
        except ValueError: 
            print("Not an integer")
    
    return count 