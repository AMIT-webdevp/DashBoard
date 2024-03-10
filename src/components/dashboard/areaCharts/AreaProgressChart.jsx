  const data = [
    {
      "Class of Business": "Financial Institution",
      "ClassType": "Crime",
      "Business Plan": 3394741,
      "Earned Premium": 997433,
      "GWP": 1296662
    },
    {
      "Class of Business": "Financial Institution",
      "ClassType": "FIPI",
      "Business Plan": 3176909,
      "Earned Premium": 286415,
      "GWP": 372339
    },
    {
      "Class of Business": "Financial Institution",
      "ClassType": "D&O",
      "Business Plan": 753794,
      "Earned Premium": 20313,
      "GWP": 26407
    },
    {
      "Class of Business": "Financial Institution",
      "ClassType": "Crime",
      "Business Plan": 1233886,
      "Earned Premium": 964000,
      "GWP": 1253199
    },
    {
      "Class of Business": "Financial Institution",
      "ClassType": "FIPI",
      "Business Plan": 4274607,
      "Earned Premium": 181602,
      "GWP": 236082
    },
    {
      "Class of Business": "Financial Institution",
      "ClassType": "D&O",
      "Business Plan": 2763863,
      "Earned Premium": 554720,
      "GWP": 721136
    },
    {
      "Class of Business": "Financial Institution",
      "ClassType": "Crime",
      "Business Plan": 547030,
      "Earned Premium": 113394,
      "GWP": 147412
    },
    {
      "Class of Business": "Financial Institution",
      "ClassType": "FIPI",
      "Business Plan": 3427263,
      "Earned Premium": 781318,
      "GWP": 1015714
    },
    {
      "Class of Business": "Financial Institution",
      "ClassType": "D&O",
      "Business Plan": 2027759,
      "Earned Premium": 323575,
      "GWP": 420648
    },
    {
      "Class of Business": "Financial Institution",
      "ClassType": "Crime",
      "Business Plan": 97834,
      "Earned Premium": 337040,
      "GWP": 438151
    },
    {
      "Class of Business": "Financial Institution",
      "ClassType": "FIPI",
      "Business Plan": 220407,
      "Earned Premium": 803516,
      "GWP": 1044571
    },
  {
    "Class of Business": "Financial Institution",
    "ClassType": "D&O",
    "Business Plan": 890532,
    "Earned Premium": 611878,
    "GWP": 1157691
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 393736,
    "Earned Premium": 50607,
    "GWP": 511857
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 26155,
    "Earned Premium": 201318,
    "GWP": 34001
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 880534,
    "Earned Premium": 391246,
    "GWP": 1144694
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 419011,
    "Earned Premium": 816784,
    "GWP": 544714
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 144535,
    "Earned Premium": 330032,
    "GWP": 187895
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 906945,
    "Earned Premium": 778406,
    "GWP": 1179029
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 450145,
    "Earned Premium": 260897,
    "GWP": 585189
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 904679,
    "Earned Premium": 313715,
    "GWP": 1176083
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 629789,
    "Earned Premium": 643565,
    "GWP": 818726
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 119251,
    "Earned Premium": 280734,
    "GWP": 155026
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 768374,
    "Earned Premium": 598304,
    "GWP": 998887
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 400844,
    "Earned Premium": 756721,
    "GWP": 521097
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 609807,
    "Earned Premium": 472576,
    "GWP": 792749
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 384931,
    "Earned Premium": 513460,
    "GWP": 500410
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 239681,
    "Earned Premium": 506542,
    "GWP": 311586
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 446797,
    "Earned Premium": 942128,
    "GWP": 580835
  },
  {
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": 140457,
    "Earned Premium": 952097,
    "GWP": 182593
  }
];

const AreaProgressChart = () => {
  // Sort the data based on GWP in descending order
  const sortedData = data.sort((a, b) => b.GWP - a.GWP);

  // Take the top 10 entries
  const top10Data = sortedData.slice(0, 10);

  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Top 10 Gross Written Premium (GWP)</h4>
      </div>
      <div className="progress-bar-list">
        {top10Data.map((progressbar, index) => (
          <div className="progress-bar-item" key={index}>
            <div className="bar-item-info">
              <p className="bar-item-info-name">{progressbar['Class of Business']}</p>
              <p className="bar-item-info-value">{progressbar.GWP}</p>
            </div>
            <div className="bar-item-full">
              <div
                className="bar-item-filled"
                style={{
                  width: `${(progressbar.GWP / top10Data[0].GWP) * 100}%`, // Calculate width based on percentage
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaProgressChart;