const questions = [
    // 单项选择题
    {
        type: "单选题",
        question: "在互联网软件开发过程中，形成项目计划这一工作所在的阶段是",
        options: ["规划阶段", "设计阶段", "建设和测试阶段", "投入使用阶段"],
        answer: 0
    },
    {
        type: "单选题",
        question: "下列UML模型描述图中，元素有节点和连接的是",
        options: ["包图", "部署图", "构件图", "合作图"],
        answer: 1
    },
    {
        type: "单选题",
        question: "规定一个表中的两行在指定列没有相同值的数据库完整性约束是",
        options: ["外键完整性约束", "检查完整性约束", "非空值完整性约束", "键值唯一完整性约束"],
        answer: 3
    },
    {
        type: "单选题",
        question: "关于IP地址和物理地址说法不正确的是",
        options: [
            "IP地址和网上设备不是一一对应关系",
            "物理地址固化在网络设备中，通常无法修改",
            "互联网上的主机每个接口可以有多个IP地址",
            "IP地址把原来主机物理地址隐藏起来，使用统一的地址格式"
        ],
        answer: 2
    },
    {
        type: "单选题",
        question: "下面属于Microsoft IIS 6.0提供的服务是",
        options: ["IP", "DNS", "TCP", "WWW"],
        answer: 3
    },
    {
        type: "单选题",
        question: "以下关于虚拟主机说法不正确的是",
        options: [
            "可以在一台服务器建立虚拟主机创建多个网站",
            "虚拟主机创建的虚拟Web网站可使用不同的IP地址",
            "使用虚拟主机技术创建的多个Web网站必须具有相同IP地址",
            "使用虚拟主机技术可将一个主机分割成多个逻辑上的虚拟主机使用"
        ],
        answer: 2
    },
    {
        type: "单选题",
        question: "在下列HTML标记中，能实现给文档命名的是",
        options: ["<title>…</title>", "<head>…</head>", "<body>…</body>", "<name>…</name>"],
        answer: 0
    },
    {
        type: "单选题",
        question: "在页面中创建超链接并指明正在链接的URL，以下用法正确的是",
        options: [
            "<ahttp://www.internet.com.cn></a>公司网址</a>",
            "<a url=\"http://www.internet.com.cn\"> 公司网址</a>",
            "<a href=\"http://www.internet.com.cn\">公司网址</a>",
            "<a name==\"http://www.internet.com.cn\">公司网址</a>"
        ],
        answer: 2
    },
    {
        type: "单选题",
        question: "在JavaScript中，对变量命名要求不正确的是",
        options: [
            "变量名不能有空格",
            "变量名不区分大小写",
            "变量名必须以字母或下划线开头",
            "变量名不能使用JavaScript中的关键字(保留字)"
        ],
        answer: 1
    },
    {
        type: "单选题",
        question: "在JavaScript中，不. 属. 于. 逻辑运算符的是",
        options: ["!", "||", "!=", "&&"],
        answer: 2
    },
    {
        type: "单选题",
        question: "在J2EE关键技术中，用来在远程对象上调用一些方法的是",
        options: ["EJB", "JMS", "JTA", "RMI"],
        answer: 3
    },
    {
        type: "单选题",
        question: "由普通的HTML语句和特殊的基于Java语言的嵌入标记组成的代码是",
        options: ["JSP页面代码", "Java页面代码", "JScript页面代码", "JavaScript页面代码"],
        answer: 0
    },
    {
        type: "单选题",
        question: "在JSP中，声明的有效范围是",
        options: [
            "在session中有效",
            "在所有的页面中有效",
            "在文件夹下的页面中有效",
            "仅在当前的JSP页面中有效"
        ],
        answer: 3
    },
    {
        type: "单选题",
        question: "在JSP中，通过java lanClass类的静态方法可以加载数据库驱动，该方法是",
        options: ["forName", "getConnection", "createStatement", "createPreparedStatement"],
        answer: 0
    },
    {
        type: "单选题",
        question: "在PHP语言中，下面属于整型的是",
        options: ["'12'", "\"12\"", "12.0", "0x12"],
        answer: 3
    },
    {
        type: "单选题",
        question: "使用ODBC开发数据库应用程序时，应用程序调用的是",
        options: [
            "标准的ODBC函数和SQL语言",
            "标准的JDBC函数和SQL语言",
            "标准的JDBC函数和JAVA语言",
            "标准的ODBC函数和JAVA语言"
        ],
        answer: 0
    },
    {
        type: "单选题",
        question: ".NET的组成包括两部分，.NET平台和",
        options: [".NET体验", ".NET框架", ".NET内容", ".NET系统"],
        answer: 1
    },
    {
        type: "单选题",
        question: "可以删除表中数据的SQL语句是",
        options: ["DELETE语句", "INSERT语句", "SELECT语句", "UPDATE语句"],
        answer: 0
    },
    {
        type: "单选题",
        question: "就与网页结合的能力，最强的是",
        options: ["NSAPI", "CGI", "PHP", "ISAPI"],
        answer: 2
    },
    {
        type: "单选题",
        question: "对PHP环境进行配置的主要文件是",
        options: ["php.sys", "php.exe", "php.bat", "php.ini"],
        answer: 3
    },
    {
        type: "单选题",
        question: "以下关于Microsoft.NET的说法错误的是",
        options: [
            "Microsoft.NET是Microsoft的XML Web服务平台",
            ".NET是一种面向网络、支持各种用户终端的开发平台环境",
            ".NET用户体验，包括如自然界面、信息代理和只能标签这样的功能",
            ".NET基础结构， 由.NET框架（ Framework ）、.NET企业服务器（ Enterprise Server）和Microsoft Windows.NET组成"
        ],
        answer: 3
    },
    {
        type: "单选题",
        question: "下列属于UML构造型元素表示的是",
        options: ["（使用）", "{扩展}", "[使用]", "<扩展>"],
        answer: 3
    },
    {
        type: "单选题",
        question: "ODBC规范定义的驱动程序类型有",
        options: ["两种", "三种", "四种", "五种"],
        answer: 0
    },
    {
        type: "单选题",
        question: "JSP动作元素中允许在请求时间内在现成的JSP页面里包含静态或者动态资源的是",
        options: ["<jsp:param>", "<jsp:include>", "<jsp:getProperty>", "<jsp:setProperty>"],
        answer: 1
    },
    {
        type: "单选题",
        question: "在JavaScript 中声明一个变量，使用",
        options: ["Dim语句", "Var语句", "Public语句", "Private语句"],
        answer: 1
    },
    {
        type: "单选题",
        question: "用于分担主DNS服务器查询负载的DNS服务器是",
        options: ["从DNS服务器", "主DNS服务器", "备份DNS服务器", "缓冲DNS服务器"],
        answer: 0
    },
    {
        type: "单选题",
        question: "使用SSL加密方式访问端口为444的Web网站a.com,正确的链接写法是",
        options: [
            "http://a.com",
            "https://a.com",
            "http://a.com:444",
            "https://a.com:444"
        ],
        answer: 3
    },
    {
        type: "单选题",
        question: "在HTML的表单标记中，可在一个滚动列表中显示一列选项的标记是",
        options: ["<input>", "<table>", "<select>", "<textarea>"],
        answer: 2
    },
    {
        type: "单选题",
        question: "运行如下的JavaScript程序代码片段后，变量sum的值是\nvar sum=0; var i=10; while (i>0) { if(i%2!=0) sum=sum+i; i--; }",
        options: ["10", "20", "25", "30"],
        answer: 2
    },
    {
        type: "单选题",
        question: "在J2EE的关键技术中，提供了一个框架来开发和实施分布式商务逻辑的是",
        options: ["EJB", "JMS", "JTA", "JDBC"],
        answer: 0
    },
    {
        type: "单选题",
        question: "对 HTML 语句<img src =\"boat.gif' alt = \"big boat\"/>描述不正确的是",
        options: [
            "定义了一个图像",
            "指定了图像的存储位置",
            "为图像定义了一个可替换文本，将文字\"bigboat\"显示在图片上",
            "为图像定义了一个可替换文本，在图像无法载入时显示\"big boat\""
        ],
        answer: 2
    },
    {
        type: "单选题",
        question: "以下关于JavaScript语言的描述不正确的是",
        options: [
            "JavaScript应用于Internet网页制作中",
            "JavaScript是由Microsoft公司开发的一种脚本语言",
            "在HTML基础上使用JavaScript可以开发交互式Web页面",
            "JavaScript是适应动态网页制作的需要而诞生的一种编程语言"
        ],
        answer: 1
    },
    {
        type: "单选题",
        question: "在C#数据类型中，属于引用类型的是",
        options: ["int", "shor", "char", "class"],
        answer: 3
    },
    {
        type: "单选题",
        question: "在JSP中，区分HTML和Java代码的标记是",
        options: ["<//>", "<* *>", "<? ?>", "<%%>"],
        answer: 3
    },
    {
        type: "单选题",
        question: "在PHP中，下面各项不. 是. 字符串的是",
        options: ["T", "123", "'123'", "\"123\""],
        answer: 1
    },
    {
        type: "单选题",
        question: "生成项目计划是在",
        options: ["规划阶段", "设计阶段", "投入使用阶段", "建设和测试阶段"],
        answer: 0
    },
    {
        type: "单选题",
        question: "可以在HTML文档中加上阅读者看不见的注释，其句法是",
        options: [
            "以\"/*\"标记开始注释，以\"*/\"标记结束",
            "以\"｛\"标记开始注释，以\"｝\"标记结束",
            "以\"<*\"标记开始注释，以\"*>\"标记结束",
            "以\"<!――\"标记开始注释，以\"－>\"标记结束"
        ],
        answer: 3
    },
    {
        type: "单选题",
        question: "表单中的SELECT标记，其内容不. 包. 括.",
        options: ["NAME", "SIZE", "RADIO", "VALUE"],
        answer: 2
    },
    {
        type: "单选题",
        question: "在表单的相关标记中，表示重置当前表单内元素的内容到初始状态的标记是",
        options: [
            "INPUT TYPE = TEXT",
            "INPUT TYPE = RESET",
            "INPUT TYPE = SUBMIT",
            "INPUT TYPE = HIDDEN"
        ],
        answer: 1
    },
    {
        type: "单选题",
        question: "下列INPUT标记的属性值中，代表密码框的是",
        options: ["TEXT", "RADIO", "PASSWORD", "CHECK BOX"],
        answer: 2
    },
    {
        type: "单选题",
        question: "J2EE技术中的一项核心技术是EJB，EJB主要由3种Bean组成。下列选项中不. 属. 于. EJB3种Bean的是",
        options: ["会话Bean", "实体Bean", "消息Bean", "过程Bean"],
        answer: 3
    },
    {
        type: "单选题",
        question: "JSP元素中，用于从JSP发送到容器上的一个信息的是",
        options: ["模板元素", "指令元素", "动作元素", "脚本元素"],
        answer: 1
    },
    {
        type: "单选题",
        question: "构成DHTML的各种技术中不. 包. 括.",
        options: ["CSS", "DOM", "客户机端脚本", "服务器端脚本"],
        answer: 3
    },
    {
        type: "单选题",
        question: "在ADO的对象模型中，下列包含了一次数据库操作产生的错误的详细信息的是",
        options: ["Error", "Property", "Recordset", "Connection"],
        answer: 0
    },
    {
        type: "单选题",
        question: "下面关于MIME类型说法不正确的是",
        options: [
            "MIME最初用于BBS系统",
            "利用MIME类型可以直接发送非ASCII码文件",
            "MIME类型是Web服务器与浏览器间一种重要的传送规范，也是CGI中的规范",
            "MIME是一种技术规范，它定义了七种在国际互联网Internet上传送的基本数据类型"
        ],
        answer: 1
    },
    {
        type: "单选题",
        question: "文件传输所使用的协议是",
        options: ["FTP协议", "HTTP协议", "TCP/IP协议", "TELNET协议"],
        answer: 0
    },
    {
        type: "单选题",
        question: "以下说法中正确的是",
        options: [
            "域名是网络中主机的字符标识，与IP地址无关",
            "IP地址不能够唯一标识网络中的主机或网络设备",
            "URL通过定义资源位置的抽象标识来定位网络资源",
            "基本的HTML页面以<BODY>开始，以</BODY>结束"
        ],
        answer: 2
    },
    {
        type: "单选题",
        question: "关于JavaScript说法不正确的是",
        options: [
            "JavaScript是大小写敏感的，这一点与C++类似",
            "客户端的JavaScript可以直接由浏览器解释执行",
            "JavaScript程序中定义变量时，同时要指明相应的数据类型",
            "最初JavaScript只作为客户端编程语言，后来扩展到服务器端"
        ],
        answer: 2
    },
    {
        type: "单选题",
        question: "在DHTML语言中，要修改元素及其内容，应当使用以下哪一项属性？",
        options: ["Submit", "innerText", "outerHTML", "innerHTML"],
        answer: 3
    },
    {
        type: "单选题",
        question: "在ASP中，与response.write( )语句等价的标记是",
        options: ["<%= %>", "output（）", "<*=	*>", "<%	%>"],
        answer: 0
    },
    {
        type: "单选题",
        question: "完成开发符合项目设计规划的高质量的Web应用的工作是在",
        options: ["规划阶段", "设计阶段", "投入使用阶段", "建设和测试阶段"],
        answer: 3
    },
    {
        type: "单选题",
        question: "196.10.109.200是以下哪一类IP地址？",
        options: ["A类", "B类", "C类", "D类"],
        answer: 2
    },
    {
        type: "单选题",
        question: "因特网上分配给政府部门的域名是",
        options: ["mil", "org", "com", "gov"],
        answer: 3
    },
    {
        type: "单选题",
        question: "下面正确的URL格式是",
        options: [
            "10.1.134",
            "\\\\ServerA\\Sharedfiles",
            "C:\\InetPub\\wwwroot\\index.html",
            "http://www.starlingtech.com/index.html"
        ],
        answer: 3
    },
    {
        type: "单选题",
        question: "创建超级链接使用的标记对是",
        options: ["<A>和</A>", "<BODY>和</BODY>", "<TITLE>和</TITLE>", "<ADDRESS>和</ADDRESS>"],
        answer: 0
    },
    {
        type: "单选题",
        question: "有关HTML中表格的写法，下列表示一个表格数据（单元格）的是",
        options: ["<TR>", "<TH>", "<TD>", "<TABLE>"],
        answer: 2
    },
    {
        type: "单选题",
        question: "下列阶段中，属于软件定义期的是",
        options: ["编码", "测试", "软件设计", "需求分析"],
        answer: 3
    },
    {
        type: "单选题",
        question: "在HTML页面中插入一条水平线的句法是",
        options: ["<TD>", "<BR>", "<HR>", "<LINE>"],
        answer: 2
    },
    {
        type: "单选题",
        question: "JSP内建对象中，用于向客户端浏览器发送数据,用户可以使用该对象将服务器的数据发送到用户端的浏览器的是",
        options: ["Request", "Session", "Response", "Application"],
        answer: 2
    },
    {
        type: "单选题",
        question: "UML的模型元素有两种，分别是基元素和",
        options: ["再生元素", "通用元素", "特殊元素", "构造型元素"],
        answer: 3
    },
    {
        type: "单选题",
        question: "关于HTML中的FORM(表单)，其ACTION功能，下列哪一项表述是不. 准. 确. 的？",
        options: [
            "ACTION包括POST和GET",
            "ACTION不是表单的唯一属性",
            "ACTION可以将表单信息送给当前脚本",
            "ACTION指向一个接收表单全部信息的URL"
        ],
        answer: 0
    },
    {
        type: "单选题",
        question: "在表单的相关标记中，表示重置当前表单内元素的内容到初始状态的按钮标记是",
        options: [
            "INPUT TYPE = TEXT",
            "INPUT TYPE = RESET",
            "INPUT TYPE = SUBMIT",
            "INPUT TYPE = HIDDEN"
        ],
        answer: 1
    },
    {
        type: "单选题",
        question: "在BODY的属性中，与颜色无关的属性是",
        options: ["TEXT", "VLINK", "BGCOLOR", "TOPMARGIN"],
        answer: 3
    },
    {
        type: "单选题",
        question: "在表单的相关标记中，表示只允许用户选择一项相关设置的标记是",
        options: [
            "INPUT TYPE=\"RESET",
            "INPUT TYPE=\"RADIO\"",
            "INPUT TYPE=\"SUBMIT\"",
            "INPUT TYPE=\"CHECKBOX\""
        ],
        answer: 1
    },
    {
        type: "单选题",
        question: "Servlet 运行在",
        options: ["客户端", "服务器端", "浏览器", "客户端和服务器端"],
        answer: 1
    },
    {
        type: "单选题",
        question: "在互联网软件开发过程的编写项目计划中，不. 包. 括.",
        options: ["预算", "时间", "合同", "风险和假设"],
        answer: 2
    },
    {
        type: "单选题",
        question: "下列正确的URL引用是",
        options: [
            "10.1.134",
            "\\\\200.108.4.120",
            "http://www.sohu.com",
            "http:\\\\ServerA\\Sharedfiles"
        ],
        answer: 2
    },
    {
        type: "单选题",
        question: "中国的顶级域名是",
        options: ["uk", "cn", "org", "edu"],
        answer: 1
    },
    {
        type: "单选题",
        question: "负责一个具有3488台计算机的TCP／IP域，假设没有对原始的12位本地地址空间划分子网，子网掩码应该是",
        options: ["255.255.240.0", "255.255.248.0", "255.255.254.0", "255.255.255.0"],
        answer: 0
    },
    {
        type: "单选题",
        question: "表单中的INPUT标记，其类型不. 包. 括.",
        options: ["TEXT", "RESET", "OPTION", "SUBMIT"],
        answer: 2
    },
    {
        type: "单选题",
        question: "创建超级链接使用的标记对是",
        options: ["<A>和</A>", "<BODY>和</BODY>", "<TITLE>和</TITLE>", "<ADDRESS>和</ADDRESS>"],
        answer: 0
    },
    {
        type: "单选题",
        question: "一般来说，Web服务器提供的安全保护措施是",
        options: [
            "授权",
            "链接加密",
            "授权和链接加密",
            "不能提供安全保护措施"
        ],
        answer: 2
    },
    {
        type: "单选题",
        question: "在DHTML中，TextRange对象的文本属性是",
        options: ["只读的", "不确定的", "可以读写的", "不能读写的"],
        answer: 2
    },
    {
        type: "单选题",
        question: "互联网项目开发是分阶段进行的，其中在阶段转换时出现的判断点被称为",
        options: ["阶段", "界标", "测试点", "投入点"],
        answer: 1
    },
    {
        type: "单选题",
        question: "UML中用于表示不同实体如何彼此相关，显示系统静态结构的是",
        options: ["类图", "用例图", "序列图", "状态图"],
        answer: 0
    },
    {
        type: "单选题",
        question: "如果想保持现有的元素或文本，并添加新的元素或文本到现有代码中，所用的方法是",
        options: ["insertPipeText", "insertAdjacent", "insertMovedText", "insertHackedText"],
        answer: 1
    },
    {
        type: "单选题",
        question: "假设$ a=5, 有$ a+=2, 则$ a的值为",
        options: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        type: "单选题",
        question: "有关HTML中表格的写法，下列表示一个表格头的是",
        options: ["〈TR〉", "〈TH〉", "〈TD〉", "〈TABLE〉"],
        answer: 1
    },
    {
        type: "单选题",
        question: "ODBC规范定义的驱动程序类型有",
        options: ["两种", "三种", "四种", "五种"],
        answer: 0
    },
    {
        type: "单选题",
        question: "下列UML模型描述图中，元素有节点和连接的是",
        options: ["包图", "部署图", "构件图", "合作图"],
        answer: 1
    },
    {
        type: "单选题",
        question: "在软件定义期中，确定项目规模的阶段是",
        options: ["问题定义", "需求分析", "软件设计", "可行性研究"],
        answer: 0
    },
    {
        type: "单选题",
        question: "UML模型描述图中，用于对系统功能进行建模的是",
        options: ["包图", "类图", "构件图", "用例图"],
        answer: 3
    },
    {
        type: "单选题",
        question: "在SQL语言中，创建新表的语句是",
        options: ["INSERT", "DROP TABLE", "ALTER TABLE", "CREATE TABLE"],
        answer: 3
    },
    {
        type: "单选题",
        question: "在UML模型图中，用于描述相互合作的对象之间交互关系的是",
        options: ["包图", "类图", "合作图", "序列图"],
        answer: 2
    },
    {
        type: "单选题",
        question: "可以删除表中数据的SQL语句是",
        options: ["INSERT语句", "SELECT语句", "DELETE语句", "UPDATE语句"],
        answer: 2
    },
    {
        type: "单选题",
        question: "用于分担主DNS服务器查询负载的DNS服务器是",
        options: ["主DNS 服务器", "从DNS服务器", "顶层DNS 服务器", "缓冲 DNS 服务器"],
        answer: 1
    },
    {
        type: "单选题",
        question: "在 HTML 的文档体body元素的属性中，用来指向文档背景图像的URL是",
        options: ["color", "bgcolor", "backcolor", "background"],
        answer: 3
    },
    {
        type: "单选题",
        question: "负责维护所管辖域的域名服务信息的DNS服务器所属的分类是",
        options: ["主DNS服务器", "从DNS服务器", "缓冲DNS服务器", "顶层DNS服务器"],
        answer: 0
    },
    {
        type: "单选题",
        question: "运行如下的JavaScript语句后，变量sum的值是\nvar sum =0;\nfor (i=0; i<=10; i++)\n{\nif(i%3 != 0) continue;\nsum = sum + i;\n}",
        options: ["9", "15", "18", "37"],
        answer: 2
    },
    {
        type: "单选题",
        question: "在IIS 6.0中，使用不同主机头架设多个Web网站时，这些网站",
        options: [
            "能有各自独立的域名",
            "能直接使用IP地址访问",
            "不能有各自独立的IP地址",
            "不能直接使用IP地址访问"
        ],
        answer: 3
    },
    {
        type: "单选题",
        question: "在Web浏览器中，非匿名访问FTP服务器的格式为",
        options: [
            "ftp://服务器地址",
            "http://服务器地址",
            "ftp://用户名:密码@服务器地址",
            "http://用户名:密码@服务器地址"
        ],
        answer: 2
    },
    {
        type: "单选题",
        question: "不. 属. 于. .NET应用程序框架组成部分的是",
        options: ["JRE", "统一的编程类", "活动服务器页面", "公共语言运行时(CLR)"],
        answer: 0
    },
    {
        type: "单选题",
        question: "下列不. 属. 于. JavaScript事件处理程序的方法是",
        options: [
            "通过超链接关联",
            "在JavaScript中说明",
            "直接在HTML标记中指定",
            "编写特定对象特定事件的JavaScript"
        ],
        answer: 0
    },
    {
        type: "单选题",
        question: "下列不. 属. 于. J2EE开发框架的是",
        options: ["Spring", "Struts", "ADO.NET", "Hibernate"],
        answer: 2
    },
    {
        type: "单选题",
        question: "Tomcat服务器默认占用的端口是",
        options: ["80", "8000", "8080", "9000"],
        answer: 2
    },
    {
        type: "单选题",
        question: "下列关于JavaScript变量命名的说法中正确的是",
        options: [
            "可以包含空格",
            "不区分大小写",
            "可以使用数字开头",
            "不能使用JavaScript关键字"
        ],
        answer: 3
    },
    {
        type: "单选题",
        question: "以下属于Microsoft．NET应用程序框架组成部分的是",
        options: ["CLR", "JMS", "PDO", "JDBC"],
        answer: 0
    },
    {
        type: "单选题",
        question: "对于PHP的索引数组，其默认索引的起始值是",
        options: ["-1", "0", "1", "2"],
        answer: 1
    },
    {
        type: "单选题",
        question: "运行如下C#语句后，变量temp的值是\nint a=51,temp; temp= ++a;",
        options: ["49", "50", "51", "52"],
        answer: 3
    },
    {
        type: "单选题",
        question: "以下文件中能实现关闭Tomcat服务器的是",
        options: ["exit．bat", "close．bat", "logout．bat", "shutdown．Bat"],
        answer: 3
    },
    {
        type: "单选题",
        question: "UML中常用的十种图分为五类，属于交互图的是",
        options: ["部署图", "序列图", "对象图", "状态图"],
        answer: 1
    },
    {
        type: "单选题",
        question: "在HTML 中，要提供一个文本输入框，用法正确的是",
        options: [
            "<form>文本框:<input type=\"text\" name=\"text1\"> </form>",
            "<form>文本框:<input type=\"reset\" name=\"text1 \"> </form>",
            "<form>文本框:<input type=\"submit\" name=\"text1 \"> </form>",
            "<form>文本框:<input type=\"checkbox\" name=\"text1\"> </form>"
        ],
        answer: 0
    },
    {
        type: "单选题",
        question: "用于向表中添加数据的SQL语句是",
        options: ["DELETE 语句", "SELECT 语句", "INSERT 语句", "UPDATE 语句"],
        answer: 2
    },
    {
        type: "单选题",
        question: "Web开发团队一般包括五个角色，这五个角色中不. 包. 括.",
        options: ["客户", "美工", "项目经理", "销售人员"],
        answer: 0
    },
    {
        type: "单选题",
        question: "在SQL语言的聚合函数中，用来求和的是",
        options: ["AVG", "MAX", "SUM", "COUNT"],
        answer: 2
    },
    {
        type: "单选题",
        question: "用SSL加密方式访问端口为1254的Web网站abc.cn，正确的URL是",
        options: [
            "http://abc.cn",
            "https://abc.cn",
            "http://abc.cn:1254",
            "https://abc.cn:1254"
        ],
        answer: 3
    },
    {
        type: "单选题",
        question: "在HTML表格标记中，用来定义一个单元的标记是",
        options: ["<tc></tc>", "<td></td>", "<th></th>", "<tr></tr>"],
        answer: 1
    },
    {
        type: "单选题",
        question: "Internet由全世界几方个网络互联组成，它们共同遵循的协议是",
        options: ["FTP", "WWW", "HTTP", "TCP／IP"],
        answer: 3
    },
    {
        type: "单选题",
        question: "在C#数据类型中， 属于引用类型的是",
        options: ["im", "char", "short", "class"],
        answer: 3
    },
    {
        type: "单选题",
        question: "在JavaScript中，当表单中的元素失去焦点时所触发的事件是",
        options: ["onblur", "onfocus", "onreset", "onchange"],
        answer: 0
    },
    {
        type: "单选题",
        question: "在HTML表单中，为用户提供输入多行信息字段的标记是",
        options: ["<text>", "<input>", "<select>", "<textarea>"],
        answer: 3
    },
    {
        type: "单选题",
        question: "在C#中，Byte类型变量所占的字节数是",
        options: ["1字节", "2字节", "4字节", "8字节"],
        answer: 0
    },
    {
        type: "单选题",
        question: "在HTML标签中，空标签是",
        options: ["<img>", "<body>", "<html>", "<title>"],
        answer: 0
    },
    {
        type: "单选题",
        question: "在JSP中，允许直接访问HttpServletResponse对象的内置对象是",
        options: ["out", "config", "request", "response"],
        answer: 3
    },
    {
        type: "单选题",
        question: "下列接口不. 属. 于. DOM接口规范的是",
        options: ["HTML", "Node", "Document", "NodeList"],
        answer: 0
    },
    {
        type: "单选题",
        question: "在C#语言中，用来获取数组中元素个数的方法是",
        options: ["Size", "Clone", "Length", "Reverse"],
        answer: 2
    },
    {
        type: "单选题",
        question: "在满足一定条件的情况下，反复执行某一个操作的JavaScript流程控制语句是",
        options: ["判断语句", "条件语句", "跳转语句", "循环语句"],
        answer: 3
    },
    {
        type: "单选题",
        question: "用于将客户端请求从一个页面转发到另一个JSP页面的JSP动作元素是",
        options: ["<jsp:to>", "<jsp:plugin>", "<jsp:forward>", "<jsp:include>"],
        answer: 2
    },
    {
        type: "单选题",
        question: "Microsoft推出的ASP的下一代Web开发技术是",
        options: ["JSP", "PHP", "Perl", "ASP．NET"],
        answer: 3
    },
    {
        type: "单选题",
        question: "在PHP的函数中，返回一个值的语句是",
        options: ["break", "return", "while", "continue"],
        answer: 1
    },
    
    // 多项选择题
    {
        type: "多选题",
        question: "Web服务器性能的主要标准包括",
        options: ["速度", "安全性", "建立和维护", "数据在线分析", "对用户保持追踪"],
        answer: [0, 1, 2, 4]
    },
    {
        type: "多选题",
        question: "以下关于.NET的描述正确的有",
        options: [
            "Microsoft.NET减少了程序员要写的代码量",
            "Microsoft.NET对\"用户界面友好\"做了重新定义",
            "Microsoft.NET使编程工作变得更加容易，开发投资的回报率也趋于最大化",
            "Microsoft.NET开创了全新的商业模型，它使得一个公司可以用多种方法来把自己的技术商品化",
            "Microsoft.NET允许IT部门使用其他提供商的XML Web服务，减少内部研发的开销，并能提高工作效率"
        ],
        answer: [0, 1, 2, 3, 4]
    },
    {
        type: "多选题",
        question: "JSP中标准的动作元素有",
        options: [
            "<jsp: param>",
            "<jsp: include>",
            "<jsp: forward>",
            "<jsp: setproperty>",
            "<jsp: getProperty>"
        ],
        answer: [0, 1, 2, 3, 4]
    },
    {
        type: "多选题",
        question: "在PHP中，可以读取数据库内数据的函数有",
        options: [
            "MySQL_result()",
            "MySQL_select_db()",
            "MySQL_fetch_row()",
            "MySQL_fetch_array()",
            "MySQL_fetch_object()"
        ],
        answer: [0, 2, 3, 4]
    },
    {
        type: "多选题",
        question: "PHP语言中，属于位运算符的有",
        options: ["$", "&", "～", "|", "!"],
        answer: [1, 2, 3]
    },
    {
        type: "多选题",
        question: "在BODY的属性中，和颜色有关的属性包括",
        options: ["LINK", "TEXT", "ALINK", "VLINK", "BGCOLOR"],
        answer: [0, 1, 2, 3, 4]
    },
    {
        type: "多选题",
        question: "关于IP地址下列说法正确的是",
        options: [
            "202.112.139.140属于B类地址",
            "每个C类网络的主机号数最多为28个",
            "B类IP地址适用于有大量主机的大型网络",
            "根据不同的取值范围IP地址可以分为五类",
            "IP地址采用分层结构，它由网络号与主机号两部分组成"
        ],
        answer: [3, 4]
    },
    {
        type: "多选题",
        question: "以下属于UML模型描述图的有",
        options: ["例图", "用例图", "序列图", "状态图", "活动图"],
        answer: [1, 2, 3, 4]
    },
    {
        type: "多选题",
        question: "提供了对象的文本内容，同时还包括了所有的HTML标记的属性有",
        options: ["Inner", "innerTEXT", "innerHTML", "outerHTML", "outerTEXT"],
        answer: [2, 3]
    },
    {
        type: "多选题",
        question: "以下说法正确的有",
        options: [
            "ADO的数据采用了两层的基于连接的编程模型",
            "Managed Provider提供了DataSet和数据中心之间的联系",
            "Managed Provider利用本地的OLEDB通过COM Interop来实现数据存取",
            "ADO.NET的Managed Provider是一个多层结构的无连接的一致的编程模型",
            "DataSet使程序员在编译程序时可以屏蔽数据库之间的差异，获得一致的编程模型"
        ],
        answer: [0, 1, 2, 3, 4]
    },
    {
        type: "多选题",
        question: "在Web应用开发过程中，项目管理员必须不断使用的技能包括",
        options: ["规划", "测试", "追踪", "估计和度量", "设计图形界面"],
        answer: [0, 2, 3]
    },
    {
        type: "多选题",
        question: "IP地址根据不同的取值范围分为五类，其中主要的IP地址有",
        options: ["A类地址", "B类地址", "C类地址", "D类地址", "E类地址"],
        answer: [0, 1, 2]
    },
    {
        type: "多选题",
        question: "C#数组主要形式有",
        options: ["一维数组", "多维数组", "二维数组", "规则数组", "不规则数组"],
        answer: [0, 1, 4]
    },
    {
        type: "多选题",
        question: "下列是C类IP地址的有",
        options: ["200.9.2.9", "110.0.0.30", "80.123.0.0", "210.12.13.5", "240.12.12.30"],
        answer: [0, 3]
    },
    {
        type: "多选题",
        question: "面向对象的基本原则有",
        options: ["继承", "方法", "转移", "多态", "控制"],
        answer: [0, 3]
    },
    {
        type: "多选题",
        question: "以下关于ASP.NET的优越性说法正确的有",
        options: [
            "简化开发操作",
            "提高执行效率",
            "简化部署与组态的操作",
            "分离程序代码和网页内容",
            "支持多种客户端类型"
        ],
        answer: [0, 1, 2, 3, 4]
    },
    {
        type: "多选题",
        question: "通过使用ALIGN和VALIGN属性，可以以不同方式在单元中对齐表格元素，<TR> 表格元素的ALIGN属性可能值有",
        options: ["TOPD", "LEFT", "RIGHT", "BOTTOM", "CENTER"],
        answer: [1, 2, 3, 4]
    },
    {
        type: "多选题",
        question: "触发DHTML操作的方式有",
        options: [
            "事件触发",
            "由软件中断触发",
            "由硬件中断触发",
            "以既定时间间隔反复触发",
            "由其他设定好的触发器触发"
        ],
        answer: [0, 3, 4]
    },
    {
        type: "多选题",
        question: "HTML使用一个十六进制编码系统来定义颜色，该系统基于的颜色单元有",
        options: ["蓝色", "黄色", "绿色", "白色", "红色"],
        answer: [0, 2, 4]
    },
    {
        type: "多选题",
        question: "以下关于UML描述正确的有",
        options: [
            "统一了面向对象方法的基本概念",
            "UML既是建模语言,又是开发语言",
            "UML描述图包括用例图、类图、序列图、活动图等七类图",
            "UML中的类图表示不同实体如何彼此相关，显示了系统的静态结构",
            "UML提供的约束条件描述了元素及其构成要素应遵守的限制和应满足的条件"
        ],
        answer: [0, 2, 3, 4]
    },
    {
        type: "多选题",
        question: "现阶段Web的基本技术包括",
        options: ["CGI技术", "Java技术", "HTML技术", "服务器技术", "JavaScript技术"],
        answer: [0, 1, 2, 3, 4]
    },
    {
        type: "多选题",
        question: "下列域名类型表述正确的有",
        options: [
            ".Mil代表军事部门",
            "Com代表商业组织",
            ".Int代表国际组织",
            "Edu代表教育机构",
            "Org代表各种盈利性组织"
        ],
        answer: [0, 1, 2, 3]
    },
    {
        type: "多选题",
        question: "构成DHTML的技术包括",
        options: ["ASP", "CSS", "ADO", "DOM", "客户端的脚本语言"],
        answer: [1, 3, 4]
    },
    {
        type: "多选题",
        question: "如果想保持现有的元素或文本，并添加新的元素或文本到现有的代码中，可以用的方法有",
        options: [
            "insertAdjacent",
            "insertMovedText",
            "insertAdjacentText",
            "insertHackedText",
            "insertPipeText"
        ],
        answer: [0, 2]
    },
    {
        type: "多选题",
        question: "Servlet的基本流程包括",
        options: [
            "客户端通过HTTP提出请求",
            "Servlet将向Web服务器返回应答",
            "Web服务器接收该请求，并将其发给Servlet",
            "Servlet将接收该HTTP请求并执行某种处理",
            "Web服务器将从Servlet收到的应答发送给客户端"
        ],
        answer: [0, 1, 2, 3, 4]
    },
    {
        type: "多选题",
        question: "用来设置文本和浏览器之间边距的属性有",
        options: ["TOPMARGIN", "LEFTMARGIN", "CENTERMARGIN", "RIGHTMARGIN", "BOTTOMMARGIN"],
        answer: [0, 1]
    },
    {
        type: "多选题",
        question: "ASP网页程序支持的语言有",
        options: ["C#", "VB", "C++", "Jscript", "VBScript"],
        answer: [3, 4]
    },
    {
        type: "多选题",
        question: "Field对象中的源数据属性包括",
        options: ["Name", "Text", "Type", "Precision", "DefinedSize"],
        answer: [0, 2, 3, 4]
    },
    {
        type: "多选题",
        question: "PHP支持的数据类型有",
        options: ["Date", "Array", "Double", "Binary", "String"],
        answer: [1, 2, 4]
    },
    {
        type: "多选题",
        question: "下列关于Microsoft.NET的描述正确的有",
        options: [
            "Microsoft.NET体验是以开发人员为中心的",
            "Microsoft.NET是Microsoft的XML Web服务平台",
            "Microsoft.NET是一种面向网络、支持各种用户终端的开发平台环境",
            "程序员在用Microsoft.NET编写程序时，需为每一设备编写一个不同的版本",
            "Microsoft.NET开创了全新的商业模型，使一个公司可以用多种方法来把自己的技术商品化"
        ],
        answer: [1, 2, 4]
    },
    
    // 名词解释题
    {
        type: "名词解释题",
        question: "C/S结构",
        answer: "C/S（Client /Server）结构结构，即客户机和服务器结构。它是软件系统体系结构，通过它可以充分利用两端硬件环境的优势，将任务合理分配到Client端和Server端来实现，降低了系统的通讯开销。"
    },
    {
        type: "名词解释题",
        question: "HTML",
        answer: "HTML（HyperTextMark-upLanguage）即超文本标记语言或超文本链接标示语言，是目前网络上应用最为广泛的语言,也是构成网页文档的主要语言。"
    },
    {
        type: "名词解释题",
        question: "JavaScript",
        answer: "JavaScript（简称\"JS\"）是一种解释型或即时编译型的高级编程语言，是最流行的脚本语言，通常JavaScript脚本是通过嵌入在HTML中来用于Web应用开发。"
    },
    {
        type: "名词解释题",
        question: "腐烂搜索（Scavenging）",
        answer: "比较类似于\"最近最少使用\"替换原则，当内存变得比较紧张时，缓存机制会找出最不常用和最不重要的对象，把它从内存中移出，以减轻系统压力。"
    },
    {
        type: "名词解释题",
        question: "Cookie",
        answer: "一种\"小型文本文件\"，是某些网站为了辨别用户身份，进行Session跟踪而储存在用户本地终端上的数据（通常经过加密），由用户客户端计算机暂时或永久保存信息"
    },
    {
        type: "名词解释题",
        question: "CSS",
        answer: "CSS是一组格式设置规则，用于控制Web页面的外观"
    },
    {
        type: "名词解释题",
        question: "JSP",
        answer: "JSP内置对象是JSP页面中内置的默认对象，这些对象不要预先声明就可以在脚本代码和表达式中随意使用。"
    },
    {
        type: "名词解释题",
        question: "顺序结构",
        answer: "顺序结构就是按照语句出现的先后次序自上而下顺序执行的流程控制结构。"
    },
    {
        type: "名词解释题",
        question: "URL的相对引用",
        answer: "URL相对引用：对同一个计算机上的文件的URL引用。"
    },
    {
        type: "名词解释题",
        question: "头文件",
        answer: "头文件：是一个外部文件，它的内容可以被多个程序文件所引用，并包含在引用它的文件之中。"
    },
    {
        type: "名词解释题",
        question: "ODBC",
        answer: "ODBC(Open Database Connectivity，开放数据库互连)是微软公司开放服务结构(WOSA，Windows Open Services Architecture)主要组成部分，它提供了一组对数据库访问的标准（应用程序编程接口）"
    },
    {
        type: "名词解释题",
        question: "JSP的指令",
        answer: "JSP指令是用于从JSP发送到容器上的一个信息。它用来设置全局变量，声明类要实现的方法和输出内容的类型等。"
    },
    {
        type: "名词解释题",
        question: "模块元素",
        answer: "模块元素：是指JSP的静态HTML或者XML内容，它对JSP的显示是非常必要的。"
    },
    {
        type: "名词解释题",
        question: "J2EE",
        answer: "J2EE：是开放的、基于标准的平台，用于开发、部署和管理N层结构，面向Web、以服务器为中心的企业级应用。换句话说，它是一套体系结构，而不是一个具体的软件"
    },
    {
        type: "名词解释题",
        question: "JDBC",
        answer: "JDBC是一种用于执行SQL语句的Java APL，是Java与数据库之间的一个桥梁。"
    },
    {
        type: "名词解释题",
        question: "DHTML",
        answer: "（Dynamic HTMNL，动态HTMIL）是相对传统的静态的HTTML而言的一种制作网页的概念。"
    },
    {
        type: "名词解释题",
        question: "数据库",
        answer: "数据库（Database）:是组织、存储和管理数据的仓库，仓库是建立在计算机存储设备上的，其中存放的数据是以某种组织方式存储的"
    },
    {
        type: "名词解释题",
        question: "VBScript",
        answer: "（Visual Basic Script, Visual Basic脚本语言）有时也被缩写为VBS，它是ASP动态网页默认的编成语言，配合ASP内建对象和ADO对象，用户很快就能掌握访问数据库的ASP动态网页开发技术"
    },
    {
        type: "名词解释题",
        question: "Web数据库",
        answer: "也叫网络数据库，就是将数据库技术与Web技术融合在一起，使数据库系统成为Web的重要有机组成部分，从而实现数据库与网络技术的无缝结合。"
    },
    {
        type: "名词解释题",
        question: "数据库设计",
        answer: "是指对于一个给定的应用环境，构造最优的数据库模式，建立数据库及其应用系统，使之能够有效地存储和管理数据，满足各种用户的应用需求（信息管理要求和数据操作要求）。"
    },
    {
        type: "名词解释题",
        question: "HTTP",
        answer: "(Hypertext Transfer Protocol，超文本传输协议)是Web的核心，是Web浏览器与服务器之间的通信协议"
    },
    {
        type: "名词解释题",
        question: "DOM",
        answer: "文档对象模型，是用来表示文档和访问、操作构成文档的元素的应用程序接口"
    },
    {
        type: "名词解释题",
        question: "JSP内置对象",
        answer: "是为了方便Web应用程序开发,JSP页面中内置的一些默认的对象，这些对象不需要预先声明就可以在脚本代码和表达式中使用。"
    },
    {
        type: "名词解释题",
        question: "DHTML",
        answer: "DHTML 是HTML、CSS和客户端脚本的一种集成，其中CSS和客户端脚本是直接在页面上写而不是链接上相关文件。"
    },
    {
        type: "名词解释题",
        question: "浏览器",
        answer: "浏览器是用来浏览互联网主页的工具软件。"
    },
    {
        type: "名词解释题",
        question: "FTP",
        answer: "是TCP/IP网络中的计算机文件传输协议"
    },
    {
        type: "名词解释题",
        question: "数据库完整性",
        answer: "数据库完整性是指数据的正确性和相容性"
    },
    {
        type: "名词解释题",
        question: "EJB容器",
        answer: "提供给运行在其中的组件EJB各种管理功能。只要满足J2EE规范的 EJB放入该容器，马上就会被容器进行高效率的管理，并且可以通过现成的接口来获得系统级别的服务。"
    },
    {
        type: "名词解释题",
        question: "绝对引用",
        answer: "绝对引用是指明Web页的精确的计算机、目录和文件的URL引用。"
    },
    {
        type: "名词解释题",
        question: "类",
        answer: "类定义了对象的特征，对对象进行了描述。"
    },
    
    // 简答题
    {
        type: "简答题",
        question: "简述UML中的依赖关系。",
        answer: "有两个元素X、Y，若修改元素X的定义，可能会引起对另一个元素Y的定义的修改，则称元素Y依赖于元素X。"
    },
    {
        type: "简答题",
        question: "简述ODBC规范定义的两种类型的驱动程序。",
        answer: "单层驱动：不仅要处理ODBC调用，还要解释执行SQL语句，执行DBMS的功能。\n多层驱动：仅仅处理应用程序的ODBC函数调用和数据转换。"
    },
    {
        type: "简答题",
        question: "简述Microsoft.Net平台的四个组件。",
        answer: "（1）.NET框架和 Visual Studio.NET \n（2）服务器基本结构。\n（3）Building Block Services \n（4）智能设备。"
    },
    {
        type: "简答题",
        question: "简述比较常见的站点模型。",
        answer: "（1）信息出版模型。\n（2）公司基础结构模型。\n（3）售后支持模型\n（4）电子商务模型。\n（5）产品和服务模型 。"
    },
    {
        type: "简答题",
        question: "简述实现Web服务器上SSL的操作步骤。",
        answer: "（1）生成密钥对文件和请求文件。\n（2）从身份验证权限中请求一个整数。\n（3）在服务器上安装整数。 \n（4）激活WWW服务器文件夹上的SSL安全性。"
    },
    {
        type: "简答题",
        question: "简述DOM。",
        answer: "DOM是文档对象模型，是动态HTML的真正核心内容，使HTML具备了变动性。"
    },
    {
        type: "简答题",
        question: "简述J2EE。",
        answer: "J2EE是一种技术规范，它给开发人员提供了一种工作平台，定义了整个标准的应用开发体系结构和一个部署环境。"
    },
    {
        type: "简答题",
        question: "简述链接到Mail的超链接的实现方式。",
        answer: "<A href = \"mailto: 邮箱名\"> 文本</A>。"
    },
    {
        type: "简答题",
        question: "简述ASP.NET中的页面数据缓存技术。",
        answer: "ASP.NET提供了一个相当出色的缓存引擎机制，它允许页面保存和索引HTTP请求所要求的各种各样的对象。ASP．NET的缓存对各个应用来说是私有的， 是存储各种对象的存储器。缓存的生存周期取决于应用的生存周期，也就是说，当应用重新启动时，缓存实际上也已重建。"
    },
    {
        type: "简答题",
        question: "简述Web开发过程的规划阶段的目的与内容。",
        answer: "规划目的：生成项目计划。\n内容包括：确定日程表；确定项目的高级时间期限和每个阶段的最后期限。 明确项目目标，Web应用的目标，开发方法，项目任务分配，项目设想和风险"
    },
    {
        type: "简答题",
        question: "简述SSI的优缺点。",
        answer: "SSI的优点：运行于服务器端的，减轻了客户端的负担，所有关于SSI的动作都在服务端计算完成\n缺点：在商业的站点加入SSI要求有强大的Web 服务器平台，在页面中加入太多的SSI标记，会让Web 承担太大的负担。会带来安全隐患。"
    },
    {
        type: "简答题",
        question: "简述风格漂移。",
        answer: "风格漂移就是一种缓慢的不易被发现的项目风格、特点逐渐变化的过程。"
    },
    {
        type: "简答题",
        question: "简述ADO的Response对象。",
        answer: "ADO的Response对象可以用来控制发送给用户的信息；包括直接发送信息给浏览器、重定向浏览器到另一个URL或设置Cookie的值。"
    },
    {
        type: "简答题",
        question: "简述在Web服务器的工作过程中客户机和服务器的对话过程。",
        answer: "Web中，客户机和服务器的对话过程如下： 客户机：\n（1）向用户提供请求的方法;\n（2）将你的请求发送给某个服务器;\n（3）接收服务器返回的结果，经过适当解释，呈交HTML文档或传递各种文件给适当的浏览器。\n服务器：\n（1）接受请求；\n（2）对请求进行合法性检查及安全性屏蔽。"
    },
    {
        type: "简答题",
        question: "简述在确定项目规模时估价项目与步骤。",
        answer: "可以按照下列步骤估价项目：\n（1）确定Web应用的功能和特点\n（2）选择站点模型。\n（3）选择浏览器。\n（4）确定具体内容。\n（5）确定用户重点。\n（6）对开发方法取得一致。"
    },
    {
        type: "简答题",
        question: "简述Servlet与JSP的区别。",
        answer: "JSP是Servlet的一种简化，使用JSP只需要完成程序员需要输出到客户端的内容，JSP中的Java脚本如何镶嵌到一个类中，由JSP容器完成。\n（1）jsp经编译后就变成了Servlet。\n（2）jsp更擅长表现于页面显示, servlet更擅长于逻辑控制。\n（3）Servlet中没有内置对象，Jsp中的内置对象都是必须通过HttpServletResponse 对象以及HttpServlet对象得到。\n（4）而Servlet则是个完整的Java类，这个类的Service方法用于生成对客户端的响应。"
    },
    {
        type: "简答题",
        question: "简述ADO.NET访问数据库的步骤。",
        answer: "（1）创建一个数据库链路\n（2）请求一个记录集合。\n（3）把记录集合暂存到DataSet\n（4）如果需要，返回第二步（DataSet可以容纳多个数据集合）。\n（5）关闭数据库链路。\n（6）在DataSet上进行所需要的操作"
    },
    {
        type: "简答题",
        question: "列举五种常用的站点模型。",
        answer: "（1）信息出版模型。\n（2）公司基础结构模型。\n（3）售后支持模型。\n（4）电子商务模型。\n（5）产品和服务模型。"
    },
    {
        type: "简答题",
        question: "简述PHP语言的特点。",
        answer: "（1）支持多种系统平台。\n（2）具有自由软件的特性\n（3）版本更新速度快。\n（4）容易与现有的网页整合。\n（5）具有丰富的功能。\n（6）系统移植速度快"
    },
    {
        type: "简答题",
        question: "简述项目计划中必须包括的几个部分。",
        answer: "（1）确定日程表。\n（2）确定项目的高级时间期限和每个阶段的对后期限。\n（3）明确项目目标、Web应用目标。\n（4）开发方法、项目任务分配。\n（5）项目设想和风险。"
    },
    {
        type: "简答题",
        question: "简述序列图中消息的表示方法。",
        answer: "消息用对象生命线之间的带箭头连线表示，箭头的方向由消息的发送对象指向消息的接收对象，消息的连线上标注有消息名。"
    },
    {
        type: "简答题",
        question: "列举DOM的四个基本接口。",
        answer: "DOM的4个基本接口是:\n(1)Document接口。\n(2)Node接口。\n(3)NodeList接口。\n(4)NamedNodeMap接口。"
    },
    {
        type: "简答题",
        question: "简述IIS 6.0中基本身份验证的含义。",
        answer: "基本身份验证需要用户输入用户名和密码，然后以明文方式将用户名和密码通过网络发送到服务器进行验证，经过验证后方允许用户访问"
    },
    {
        type: "简答题",
        question: "简述创建Servlet的步骤。",
        answer: "(1)继承HttpServlet抽象类\n(2)重载适当的方法。\n(3)如果有HTTP请求信息，获取该信息\n(4)生成HTTP响应。"
    },
    {
        type: "简答题",
        question: "列举JDBC的四种驱动程序。",
        answer: "JDBC的四种驱动程序如下:\n(1)JDBC-ODBCBridge(JDBC-ODBC桥)\n(2)JDBC-Native Driver Bridge(JDBC本地驱动程序桥\n(3)JDBC-Network Bridge(JDBC 网络桥)\n(4)Pure Java Driver(纯Java数据库驱动程序)"
    },
    {
        type: "简答题",
        question: "简述数据库实施阶段的主要工作。",
        answer: "数据库实施阶段主要包括以下工作: (1)用DDL定义数据库结构。\n(2)组织数据入库。\n(3)编制与调试应用程序。 (4)数据库试运行。"
    },
    {
        type: "简答题",
        question: "列出ASP.NET中Request对象三个常用的属性并写出含义。",
        answer: "(1)QueryString:获取HTTP查询字符串变量的集合。(2)Path:获取当前请求的虚拟路径。\n(3)UserHostAddress:获取远程客户端IP主机的地址。\n(4)Browser:获取有关正在请求的客户端浏览器功能的信息"
    },
    {
        type: "简答题",
        question: "列举数据库完整性约束限制的五种类型。",
        answer: "(1)非空值完整性约束。(2)键值唯一性约束。(3)主键完整性约束。(4)外键(参照)完整性约束。(5)检查完整性约束。"
    },
    {
        type: "简答题",
        question: "简述JavaScript中变量的命名要求。",
        answer: "JavaScript 中变量命名的要求如下:\n(1)必须以字母或下划线开头，中间可以是字母、数字或下划线。 (2)区分大小写。\n(3)不能使用JavaScript中的关键字(保留字)。"
    },
    {
        type: "简答题",
        question: "简述session对象的作用。",
        answer: "session 中的ID标识是唯一的，用来标识每个用户，当刷新浏览器时，该标识的值不变。这样在一定时间内，服务器和客户端之间的连接就会一直保持下去。"
    },
    
    // 论述题
    {
        type: "论述题",
        question: "论述.NET的新特性。",
        answer: "（1）一致的编程模式。\n（2）运行于多个平台。\n（3）自动资源管理。\n（4）支持多语言的综合。 \n（5）一致的出错处理方式。"
    },
    {
        type: "论述题",
        question: "论述UML的特点。",
        answer: "（1）统一了面向对象方法的基本概念。\n（2）建模能力更强。吸收了不同面向对象方法及非面向对象方法的长处。\n（3）独立于开发过程。\n（4）UML提出了许多新概念。\n如：构造型、职责、扩展机制等。"
    },
    {
        type: "论述题",
        question: "论述现阶段Web的基本技术。",
        answer: "（1）服务器技术。主要包括服务器策略与结构的设计、服务器软硬件的选择及其他有关服务器构建的问题。\n（2）HTML和DHTML技术。HTML是一种超文本标识语言，它是构成Web页面的主要工具。DHTML即动态的HTML语言。\n（3）CGl技术。CGl是Web动态页面的基础，也是Web与其他应用交流的基础。\n（4）PHP技术。 PHP是超文本预处理器，也称Professional Home Page，是利用服务器端脚本创建动态网站的技术。\n（5）JSP技术。JSP是以Java语言作为脚本语言的，使 用JSP标识或者Java Servlet 小脚本来生成页面上的动态内容。它具有Java的许多特性，但比Java更为简单有效，而且不需要编译。\n（6）JavaScript和VBScript脚本技术。是嵌入在HTML文档中的程序，可用于设计交互的Web页面。使用脚本程序可以创建动态页面，大大提高交互性。\n（7）ActiveX控件技术。ActiveX是Microsoft对于一系列策略性面向对象程序技术和工具的称呼，其中主要的技术是组件对象模型（COM）。\n（8）VRML技术。VRML是目前创建三维对象最重要的工具。它也是一种基于文本的语言，并可运行于任何平台。"
    },
    {
        type: "论述题",
        question: "论述Internet域名系统的实现原理。",
        answer: "当用户使用主机域名进行通信时，必须首先将其映射成IP地址，这种将主机域名映射为IP地址的过程称为域名解析。域名解析包括正向域名解析和反向域名解析两种方式。\n如果要寻找一个主机名所对应的IP地址，则需要借助域名服务器来完成。当Internet应用程序收到一个主机域名时，它向本地域名服务器查询该主机域名所对应的IP地址。\n如果本地域名服务器中找不到该主机域名对应IP地址，则本地域名服务器向其他域名服务器发生请求，要求其他域名服务器协助查找，并将找到的IP地址返回给发出请示的应用程序。"
    },
    {
        type: "论述题",
        question: "论述EJB的三个组成部分及其调用过程。",
        answer: "(1)EJB主要由三种Bean组成会话Bean、体Bean、消息Bean。\n(2)EJB的调用过程可以分为三步：首先根据传入的属性，初始化上下文(1分)其次获取远程或本地的Home接口，最后进行Home create()获取远程 EJB对象。"
    },
    {
        type: "论述题",
        question: "论述ADONET访问数据库的过程。",
        answer: "ADO.NET访问数据库的过程如下: (1)创建一个数据库链路。\n(2)请求一个记录集合。\n(3)把记录集合暂存到DataSet。 (4)如果需要，返回第2步。\n(5)关闭数据库链路。\n(6)在DataSet上进行所需要的操作。"
    },
    
    // 应用题
    {
        type: "应用题",
        question: "使用HTML为某公司的产品设计一个标题为\"公司产品\"的Web页面，要求效果如下题图所示。其中的图片名为\"chanpin.jpg\"，显示宽度和高度均为128。图片下面显示\"点击查看产品介绍\"，链接到公司主页\"http://www.gongsi.com.cn\"。",
        answer: "<html>\n<head>\n<title>公司产品</title>\n</head>\n<body>\n<p>\n<img src=\"chanpin.jpg\" width=\"128\" height=\"128\">\n</p>\n<a href=\"http://www.gongsi.com.cn\">点击查看产品介绍</a>\n</body>\n</html>"
    },
    {
        type: "应用题",
        question: "请编写一个HTML文件，制作如下大学生消费调查问卷",
        answer: "<html>\n<head>\n<title>用户调查表</title>\n</head>\n<body>\n<br><br>\n<p align=center>大学生消费调查问卷 </p>\n<br>\n<hr>\n<table align=center>\n<form method=post action=\"showdetail.php\"> \n1、 您的专业是什么？<br>\n<input type=\"radio\" name=\"major\" value=\"1\" >理工类<br>\n<input type=\"radio\" name=\"major\" value=\"2\" >文史类<br>\n<input type=\"radio\" name=\"major\" value=\"3\" >艺术类<br>\n<input type=\"radio\" name=\"major\" value=\"4\" >其他 <br>\n请填写<INPUT type=text size=19 name=mymajor >\n<br><br> \n2、您每月的基本消费在:\n<select name=question> \n<option selected value=\"\">--请您选择--</option>\n<option value=\"400以下\">800元以下</option>\n<option value=\"400-600元\">800-1500元</option>\n<option value=\"600-800元\">1500-2000元</option>\n<option value=\"800元以上\">2000元以上</option>\n</select>\n<br><br> \n3、 您消费的来源：<br>\n<input type=\"checkbox\" name=\"way[]\" value=\"parents\" >父母提供<br>\n<input type=\"checkbox\" name=\"way[]\" value=\"relatives\" >亲友济助 <br>\n<input type=\"checkbox\" name=\"way[]\" value=\"funds\" >贷学金/助学金<br>\n<input type=\"checkbox\" name=\"way[]\" value=\"working\" >勤工俭学<br> \n<input type=\"submit\" value=\"提交\"> \n<input type=\"reset\" value=\"重填\"> \n<br>\n</form>\n</table>\n<hr>\n</body>\n</html>"
    },
    {
        type: "应用题",
        question: "某网站做一个用户调查，请编写一个HTML文件，制作以下用户调查表。要求：密码查询问题提供任意四个可选项供用户选择。\n欢迎光临本网站，请首先输入以下个人资料",
        answer: "<html>\n<head>\n<title>用户调查表</title>\n</head>\n<body>\n<br><br>\n<p align=center>欢迎光临本网站，请首先输入以下个人资料</p>\n<br>\n<hr>\n<table align=center>\n<form method=post action=\"showdetail.php\"> \n姓名：<INPUT type=text size=19 name=yourname ><br>\n密码：<INPUT type=password size=19 name=passwd ><br>\n确认密码：<INPUT type=password size=19 name=passwd ><br>\n查询密码问题：\n<select name=question> \n<option selected value=\"\">--请您选择--</option>\n<option value=\"我的宠物名字？\">我的宠物名字？</option>\n<option value=\"我最好的朋友是谁？\">我最好的朋友是谁？</option>\n<option value=\"我最喜爱的颜色？\">我最喜爱的颜色？</option>\n<option value=\"我最喜爱的电影？\">我最喜爱的电影？</option>\n</select>\n<br>\n查询密码答案：<br> \n<input name=question2 size=10><br>\n性别：<input type=\"radio\" name=\"gender\" value=\"1\" checked>男\n<input type=\"radio\" name=\"gender\" value=\"2\" > 女 \n<br>\n请选择你的爱好：<br>\n<input type=\"checkbox\" name=\"hobby[]\" value=\"dance\" >跳舞<br>\n<input type=\"checkbox\" name=\"hobby[]\" value=\"tour\" >旅游<br>\n<input type=\"checkbox\" name=\"hobby[]\" value=\"sing\" >唱歌<br>\n<input type=\"checkbox\" name=\"hobby[]\" value=\"dance\" >打球<br> \n<input type=\"submit\" value=\"提交\">\n<input type=\"reset\" value=\"重填\"> \n<br>\n</form>\n</table>\n<hr>\n</body>\n</html>"
    },
    {
        type: "应用题",
        question: "JavaScript和HTML结合可以开发动态的Web页面,试回答下列问题：\n（1）简述JavaScript程序在HTML页面中的位置。\n（2）写出下面程序运行后在Web页面中的显示内容。\n<html>\n<body>\n<script type=\"text/javascript\"> var intA=20;\nvar intB=intA%3;\nvar retum Value=2000; switch(intB){\ncase 1: retum Value=2011; break;\ncase 2: retum Value=2012; break;\ncase 3: retumValue=2013; break;\n}\ndocument.write(\"return Value=\"+retum Value+\"<br>\"); document.write(\"intA=\"+intA+\"<br>\"); document.write(\"intB=\"+intB);\n</script>\n</body>\n</html>",
        answer: "(1)行内式，是指将单行或少量的JavaScript代码写在HTML标签的事件属性中(也就是以on开头的属性，如onclick)。\n内嵌式，是使用<script>标签包裹JavaScript代码，<script>标签可以写在<head>或<body>标签中\n外部式，是指将JavaScript代码写在一个单独的文件中，一般使用\"js\"作为文件的扩展名，在HTML页面中使用<script>标签进行引入，适合JavaScript代码量比较多的情况。\n(2)输出：return Value=2012 intA=20 \nintB=2"
    },
    {
        type: "应用题",
        question: "用HTML语言建立一个简单的网页，页面内容为一个表格。该网页在IE浏览器中显示效果如题37图所示，要求网页标题为\"天气预报\"，表格的标题为\"2024年12月15 日\"、边界像素宽度值为1、第一行是表头、第二行的内容水平居中显示。",
        answer: "<HTML>\n<HEAD>\n<TITLE>天气预报</TITLE>\n</HEAD>\n<BODY>\n<TABLE BORDER=\"1\">\n<CAPTION>2024年12月15日</CAPTION>\n<TR><TH>城市</TH><TH>最高气温</TH><TH>最低气温</TH></TR>\n<TR ALIGN=\"CENTER\"><TD>南京</TD><TD >0℃</TD><TD>-2℃</TD></TR>\n</TABLE>\n</BODY>\n</HTML>"
    },
    {
        type: "应用题",
        question: "现有MySQL数据库exam2025，库中有表products，表中数据如题\n写出以下程序的输出结果。\n<?php\n$con=mysql_connect(\"localhost\", \"root\",\"root\"); mysql_select_db(\"exam2022\",$con); mysql_query(\"delete from products where pno='1004'\");\n$result=mysql_query(\"select * from products order by pno\"); while($row=mysql_fetch_array($result)){\nprint $row[\"pno\"]; print(\",\");\nprint $row[\"pname\"]; print(\",\");\nprint $row[\"price\"]; print(\",\");\nprint $row[\"address\"]; print(\"<p>\");\n}\n?>",
        answer: "程序输出的结果如下:\n1001,产品1,20,上海\n1002,产品2,27,北京\n1003,产品3,25,天津"
    }
];