from app import add

def test_add():
    assert add(10, 20) == 30

def test_add_negative():
    assert add(-1, 1) == 0