import nltk
nltk.download('punkt')
nltk.download('punkt_tab')   # 👈 ye new resource bhi download karega
nltk.download('stopwords')
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

# Question 1

# text = "Hello World"
# characters = list(text)
# print("Characters:", characters)


# Question 2


# text = "I love Python. NLTK is powerful!"
# words = word_tokenize(text)
# print("Words:", words)


# Question 3


# text = "This is a simple example showing how stopword removal works."
# words = word_tokenize(text)

# stop_words = set(stopwords.words('english'))

# # Filter non-stopwords
# non_stopwords = [w for w in words if w.lower() not in stop_words]

# print("Non-stopwords:", non_stopwords)
# print("Count:", len(non_stopwords))

# Question 4

text = "Python is fun and programming is awesome"

# Custom stopwords list
my_stopwords = {"python", "programming"}

words = word_tokenize(text)
filtered_words = [w for w in words if w.lower() not in my_stopwords]

print("Original:", words)
print("Filtered:", filtered_words)
