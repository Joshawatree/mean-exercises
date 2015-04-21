__author__ = 'joshawa'
print 'welcome to pypet!'

mouse = {
'name': 'Tom',
'age' : 4,
'weight': 1,
'hungry' : True,
'photo' : '<:3 )~~~~',
}

cat = {
    'name': 'Jerry',
    'hungry': True,
    'weight': 9.5,
    'age': 5,
    'photo': '(=^o.o^=)__',
}

pets = [cat, mouse]

def feed(pet):
    if pet['hungry'] == True:
        pet['hungry'] = False
        pet['weight'] = pet['weight'] + 0.1
        print 'omnomnom!!'
    else:
        print 'The Pypet is not hungry!'

for pet in pets:
    print '--------------------------------------'
    print 'Hello ' + pet['name'] + '!'
    print pet['photo']
    print 'weight: ' + str(pet['weight'])
    feed(pet)
    print 'weight: ' + str(pet['weight'])
    if pet['hungry'] == False:
        print "Someone got fed"
    print '--------------------------------------'

