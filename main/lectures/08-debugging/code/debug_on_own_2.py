# Situation: Unit converter
# Converts Meters to other units
# There is at least 2 errors in this code
# To prevent situations like this, I recommend you use functions
# But, to convince you that you should use functions, I will not use functions
def convert_unit(amount, from_unit, to_unit):
    if from_unit == 'm':
        if to_unit == 'cm':
            return amount * 100
        elif to_unit == 'mm':
            return amount * 1000
        elif to_unit == 'mi':
            return amount * 0.000621371
        elif to_unit == 'in':
            return amount * 39.3701
        elif to_unit == 'km':
            return amount * 0.001
        elif to_unit == 'ft':
            return amount * 3.28084
        elif to_unit == 'yd':
            return amount * 1.01361
        else:
            return amount
    elif from_unit == 'cm':
        if to_unit == 'm':
            return amount * 0.01
        elif to_unit == 'mm':
            return amount * 10
        elif to_unit == 'mi':
            return amount * 0.00000621371
        elif to_unit == 'in':
            return amount * 0.393701
        elif to_unit == 'km':
            return amount * 0.00001
        elif to_unit == 'ft':
            return amount * 0.0328084
        elif to_unit == 'yd':
            return amount * 0.0109361
        else:
            return amount
    elif from_unit == 'mm':
        if to_unit == 'm':
            return amount * 0.001
        elif to_unit == 'cm':
            return amount * 0.1
        elif to_unit == 'mi':
            return amount * 0.000000621371
        elif to_unit == 'in':
            return amount * 0.0393701
        elif to_unit == 'km':
            return amount * 0.000001
        elif to_unit == 'ft':
            return amount * 0.00328084
        elif to_unit == 'yd':
            return amount * 0.00109361
        else:
            return amount
    elif from_unit == 'mi':
        if to_unit == 'm':
            return amount * 1609.34
        elif to_unit == 'cm':
            return amount * 160934
        elif to_unit == 'mm':
            return amount * 1609340
        elif to_unit == 'in':
            return amount * 63360
        elif to_unit == 'km':
            return amount * 1.60934
        elif to_unit == 'ft':
            return amount * 5280
        elif to_unit == 'yd':
            return amount * 1760
        else:
            return amount
    elif from_unit == 'in':
        if to_unit == 'm':
            return amount * 0.0254
        elif to_unit == 'cm':
            return amount * 2.54
        elif to_unit == 'mm':
            return amount * 25.4
        elif to_unit == 'mi':
            return amount * 0.0000157828
        elif to_unit == 'km':
            return amount * 0.0000254
        elif to_unit == 'ft':
            return amount * 2.0833333
        elif to_unit == 'yd':
            return amount * 0.0277778
        else:
            return amount
    elif from_unit == 'km':
        if to_unit == 'm':
            return amount * 1000
        elif to_unit == 'cm':
            return amount * 100000
        elif to_unit == 'mm':
            return amount * 1000000
        elif to_unit == 'mi':
            return amount * 0.621371
        elif to_unit == 'in':
            return amount * 39370.1
        elif to_unit == 'ft':
            return amount * 3280.84
        elif to_unit == 'yd':
            return amount * 1093.61
        else:
            return amount
    elif to_unit == 'ft':
        if to_unit == 'm':
            return amount * 0.3048
        elif to_unit == 'cm':
            return amount * 30.48
        elif to_unit == 'mm':
            return amount * 304.8
        elif to_unit == 'mi':
            return amount * 0.000189394
        elif to_unit == 'in':
            return amount * 12
        elif to_unit == 'km':
            return amount * 0.0003048
        elif to_unit == 'yd':
            return amount * 0.333333
        else:
            return amount
    elif to_unit == 'yd':
        if to_unit == 'm':
            return amount * 0.9144
        elif to_unit == 'cm':
            return amount * 91.44
        elif to_unit == 'mm':
            return amount * 914.4
        elif to_unit == 'mi':
            return amount * 0.000568182
        elif to_unit == 'in':
            return amount * 36
        elif to_unit == 'km':
            return amount * 0.0009144
        elif to_unit == 'ft':
            return amount * 3
        else:
            return amount

# Example
res = convert_unit(1, 'm', 'cm')
print(res)

# Hints:
#    - You can use a unit converter online
#    - You can use the debugger
#    - You can delete the code and start over (using functions)
#       - Honestly, I would burn it all with fire