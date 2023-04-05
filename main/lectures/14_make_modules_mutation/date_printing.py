import datetime

formats = ["nice", "slashes"]


def get_date_nice(date: datetime.date) -> str:
    year = date.year
    month = date.strftime("%B")
    day = date.day
    return f"{month} {day}, {year}"


def get_with_slashes(date: datetime.date) -> str:
    year = date.year
    month = date.month
    day = date.day
    return f"{month}/{day}/{year}"


def print_date(date: datetime.date, format: str) -> None:
    if format == "nice":
        print(get_date_nice(date))
    elif format == "slashes":
        print(get_with_slashes(date))
    else:
        raise ValueError("Unknown format")


