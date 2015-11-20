angular.module('service',[])

.factory('testfactory', function() {
  var tests = [{
    id: 1,
    Question: 'class A { final public int GetResult(int a, int b) { return 0; } } class B extends A { public int GetResult(int a, int b) {return 1; } } public class Test {',
    Answer: '2'
    ,state:false
  },
  {
    id: 2,
    Question: 'You work for a small software house which has won a contract with a new client to design, develop and implement a replacement database system. The client is a medical research organisation and has a very small IT section. Your company has little experience in this business area. Your company has decided to use a new rapid development method for this project, and you have been appointed project manager.Explain the difference between project and business risk. Give THREE examples of EACH of these two categories of risk that might affect your company when undertaking the IT project described above.',
    Answer: 'The distinction and difference between these two risk types was rarely explained well, with poor examples which (very often) confused the two types. Candidates needed to distinguish between those risks that:affect the client and the client’s business and the client’s business sector (with abrief explanation of their effect) and those that: are related directly to the project, the project staff and team, and its development.Some stated business risks were often too generalised – such as ‘currency exchange fluctuations’Candidates often did not provide three different examples of each risk type. Some assigned the same risk (wrongly) to both risk types.'
    ,state:false
  },
  {
    id: 3,
    Question: 'List and explain the TWO factors used in evaluating risk exposure. Explain how each of these factors might be assessed quantitatively.',
    Answer: 'This section is based almost entirely on the numerical measurement of risk, but very few candidates quoted, say, the use of %-ages as a numerical measurement (particularly of probability) or the use of some form of numerical scale. Several answers strayed into discussion of the methods that might be used to establish these assessments (or indeed deriving the list of risks in the first place)'
    ,state:false
  },
  {
    id: 4,
    Question: 'Risks can be assessed both quantitatively, as above, and qualitatively. Discuss the way in which risks could be assessed qualitatively and how these qualitative assessments could then be used to prioritise risks.',
    Answer: 'This part of the question required a clear understanding of the difference between qualitative assessment and numerical measurement (as covered in part b). Few candidates were able to provide this. Some confused this concept with (product) “quality”, and the various quality measures that might be taken, or with risk management (and the handling of different risk types)'
    ,state:false
  },
  {
    id: 5,
    Question: 'Draw up a table illustrating the qualitative assessment of risk exposure for the THREE project risks that you have identified in part (a) above.',
    Answer: 'This part was not often answered, but again some candidates strayed into consideration of risk management activities rather than risk assessment and prioritisation.'
    ,state:false
  },
  {
    id: 6,
    Question: 'Explain the difference between quality control and quality assurance.',
    Answer: 'Most candidates produced a reasonably accurate and well laid-out A-on-N diagram. Arrowheads were often omitted but this was not penalised unless any of the main dependencies were drawn flowing from right to left or bottom to top. There were a wide variety of node layouts, very few of which seemed to be to any recognised standard. '
    ,state:false
  },
  {
    id: 7,
    Question: 'Describe up to SIX different types of testing that might be carried out during a software development project. Explain how each type of testing contributes to the overall quality of the project’s deliverables.',
    Answer: 'The standard of drawing here was not good and many diagrams failed to show key features such as most/all dependencies and float. Some candidates used a bar chart format with no gap between the bars, which makes it very difficult to show dependencies clearly. Some seemed to confuse the concept of dependency with float.'
    ,state:false
  },
  {
    id: 8,
    Question: 'Identify and briefly explain the FOUR activities, apart from testing, that could be used to ensure the quality of the intermediate and deliverable products of software development project.',
    Answer: 'Most answers reflected correctly the second of the mid-project changes and showed task C finishing at the end of week 19 – with all dependent tasks then starting in the next week.'
    ,state:false
  },
  {
    id: 9,
    Question: 'One key characteristic of a successful project is that it is completed on time. Identify THREE other key characteristics of project success, explaining why they are important.',
    Answer: 'Quality control describes those procedures that check that the outputs of a process conform to the standards and qualities specified for them. For example, the software created by a software development process would be checked to see if it conforms to the software specification by means of testing.'
    ,state:false
  },
  {
    id: 10,
    Question: 'Identify THREE important reports needed to monitor and control a project. For each report identify who would produce the report, to whom it would go, and its purpose.',
    Answer: ' Unit testing – usually carried out by developers to check that individual software modules work as specified by low level software designs. System testing – tests that individual software components work correctly in conjunction with other units in the overall system.'
    ,state:false
  },
  {
    id: 11,
    Question: 'Describe what happens in each of the FIVE stages of team formation.',
    Answer: 'The five stages are: Forming, Storming, Norming, Performing and Adjourning.'
    ,state:false
  },
  {
    id:12,
    Question: 'Name and describe briefly THREE management styles.',
    Answer: 'There are various ways of tackling this question including : Autocratic/Democratic/Consultative,Directive Autocratic/Permissive Autocratic/Directive Democratic/Permissive Autocratic.Task-oriented versus Relationship-oriented.Etc.'
    ,state:false
  },
  {
    id:13,
    Question: 'Do you know the domain of http://www.tratser.tk',
    Answer: '你反过来读，去掉http://www和tk，明白了看14题'
    ,state:false
  },
  {
    id:14,
    Question: '小傻子，你知道你中计了吗？',
    Answer: '前面的都是骗你的，下面的才是重点，自己点15题吧'
    ,state:false
  },
  {
    id:15,
    Question: '你知道我们在一起多少天了吗？',
    Answer: '大于500天了，去16题吧'
    ,state:false
  },
  {
    id:16,
    Question: '你知道你最近很不乖吗？',
    Answer: '不管你知不知道，知错就改还能是好孩子，去17题吧'
    ,state:false
  },
  {
    id:17,
    Question: '你有想我吗？',
    Answer: '想的话，去18题'
    ,state:false
  },
  {
    id:18,
    Question: '你还爱我吗？',
    Answer: '爱的话，去19题吧'
    ,state:false
  },
  {
    id:19,
    Question: '你还想跟我在一起吗？',
    Answer: '想的话，去20题吧'
    ,state:false
  },
  {
    id: 20,
    Question: "和王键东在一起的时候，你觉得你做的好吗",
    Answer: "鉴于前面的问题，这位同学没有回答好，给你一次重新开始的机会，点击last这道题吧，答对了，就满分了"
    ,state:false
  }
  ];

  return {
    all: function() {
      return tests;
    },
    get: function(testId) {
      for (var i = 0; i < tests.length; i++) {
        if (tests[i].id === parseInt(testId)) {
          return tests[i];
        }
      }
      return null;
    }
  };
});
