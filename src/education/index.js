import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <Text>
          There are plenty of reasons to save money as a teenager. Whether
          you're looking to save for your first car, college, or a gap-year trip
          around the world, the most important part of saving as a teen is
          getting started. Saving for life goals and big purchases is a great
          way to start to understand the value of money and work. And an even
          bigger benefit of learning how to save money as a teenager is that you
          can start building a savings habit that will last forever. If you
          haven't already started to build a savings account, it's never too
          late to get going, whether you're 13, 19, or anywhere in between. Here
          are the steps to get started, and how to keep the habit going.
        </Text>
        <Text> </Text>
        <Text style={styles.title}>
          {" "}
          1. Start by opening a savings account{" "}
        </Text>
        <Text>
          Start your savings account now, and you'll always have a place to put
          the money you want to save for later. If you're under age 18, you'll
          likely need a parent to help you set it up. Almost all banks offer
          savings accounts — ask your parents where they do their banking for a
          recommendation, or look into local credit unions.
        </Text>
        <Text> </Text>
        <Text style={styles.title}>2. Then, use that savings account</Text>
        <Text>
          As you start to use your new account, you'll learn about all the
          things you can do with it, like automating your savings, earning
          interest, and more. Start using it as soon as you open it. Deposit
          gifts, a certain amount each month, or any other money you might have
          laying around. It won't do you any good if you forget about it.
        </Text>
        <Text> </Text>
        <Text style={styles.title}>3. Start earning to start saving</Text>
        <Text>
          There are plenty of ways to make money as a teen. And they're not all
          traditional jobs, either — some opportunities flexible enough to fit
          with your school schedule and keep you earning all year long. Having a
          summer job can also be a great way to earn and save.
        </Text>
        <Text> </Text>
        <Text style={styles.title}>4. Set a goal for yourself</Text>
        <Text>
          It's a lot harder to do things when you don't have a goal in mind. To
          make saving easier, make a specific and measurable goal. Want to have
          $1,000 by graduation for a trip? Need $2,000 as a down payment for
          your first car by the time you finish high school? Break those amounts
          into smaller monthly or weekly goals — it will make saving feel more
          attainable.
        </Text>
        <Text> </Text>
        <Text style={styles.title}>5. Make a budget</Text>
        <Text>
          If you know how much you need to save in order to meet your goal,
          you'll also be able to make a clear budget that prioritizes your
          savings. Getting into the habit of budgeting now will be a big help
          when you take on more bills and other financial responsibilities.
        </Text>
        <Text> </Text>
        <Text style={styles.title}>6. And stick to the budget</Text>
        <Text>
          The hardest part of having a budget is sticking to it, and that's true
          whether you're 16 or 66. Unfortunately, many get into the habit of
          skipping their monthly savings when they need more cash flow. If you
          can break that habit early and see saving as a necessary part of your
          monthly expenses, you'll be one step ahead later in life.
        </Text>
        <Text> </Text>
        <Text style={styles.title}>
          7. Look for ways to save on your expenses, and put those savings away
        </Text>
        <Text>
          If you can find ways to save on the things you already spend on,
          you'll have a lot more money available to save. Going to the mall with
          friends? Scope out the clearance section of your favorite stores to
          save on the things you'd normally buy. Suggest a movie night at home
          instead of going out to the movie theater. Then, take the money you
          would have spent and put it in your savings account.
        </Text>
        <Text> </Text>
        <Text style={styles.title}>
          8. Start planning ahead and get motivated
        </Text>
        <Text>
          One of the most exciting parts about saving is thinking about what
          those savings will eventually become. Start thinking ahead about how
          you'll use the money you're saving, and how to maximize that money.
          Doing things today to work towards your savings goal will help you to
          stay motivated as you start saving. You'll be more likely to do the
          legwork of saving if your goal is in sight.
        </Text>
        <Text></Text>
        <Text>
          Knueven, L. (2023). How to save money as a teenager in 9 steps, so you
          can get yourself a car, pay for college, or take a trip. Business
          Insider.
          https://www.businessinsider.com/personal-finance/how-to-save-money-as-a-teenager{" "}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
