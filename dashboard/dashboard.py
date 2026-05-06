# pip install streamlit pandas seaborn
# streamlit run dashboard.py

import streamlit as st
import seaborn as sns
from matplotlib import pyplot as plt

@st.cache_data   # Python decorator
def load_data():
    return sns.load_dataset('penguins')

df = load_data()

st.write("# Penguins")

tab1, tab2, tab3, tab4 = st.tabs(["Table", "Barplot", "Scatterplot", "Histogram"])

with tab1:
    st.write(df.head(5))

with tab2:
    # create a bar plot
    fig = plt.figure()
    df["species"].value_counts().plot.bar()
    st.pyplot(fig)

    st.write(df["species"].value_counts())

with tab3:
    # create a scatter plot
    fig = plt.figure()
    sns.scatterplot(data=df, x="body_mass_g", y="bill_length_mm", hue="species")
    st.pyplot(fig)

with tab4:
    # histogram
    options = ["bill_length_mm", "bill_depth_mm", "flipper_length_mm", "body_mass_g"]
    column = st.selectbox("pick a data column", options)

    fig = plt.figure()
    sns.histplot(data=df, x=column, kde=True)
    st.pyplot(fig)



st.write("""
## TODO
         
* show a table
* show 1-2 plots
* add a control element
* create nice tabs
         
""")
