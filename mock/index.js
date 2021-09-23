const random_jokes = [
  {
    setup: 'What is the object oriented way to get wealthy ?',
    punchline: 'Inheritance',
  },
  {
    setup: 'To understand what recursion is...',
    punchline: 'You must first understand what recursion is',
  },
  {
    setup: 'What do you call a factory that sells passable products?',
    punchline: 'A satisfactory',
  },
]

let random_joke_call_count = 0

export default {
  'get /dev/random_joke': function (req, res) {
    const responseObj = random_jokes[random_joke_call_count % random_jokes.length]
    random_joke_call_count += 1
    setTimeout(() => {
      res.json(responseObj)
    }, 3000)
  },
  'get /api/login': {
    result: 1,
    resultNote: 'Success',
    failReson: '',
    failCode: '',
    detail: {
      custName: 'ssss', // 客户姓名, 游客模式不返回
      phoneNum: '155****5555', // 客户手机, 游客模式不返回
      orderId: '13', // 当前订单ID, 游客模式不返回
      orderStatus: '6', // 当前订单状态, 游客模式不返回, 7代表已逾期
      servicePhone: '13000000000', // 服务电话
    },
  },
}
