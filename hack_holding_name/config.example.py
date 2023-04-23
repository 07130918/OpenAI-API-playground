GOOGLE_USER_MAIL = ""
GOOGLE_PASSWORD = ""
RESPONDER_NAME = ""

OPENAI_API_KEY = ""

FORM_BASE_URL = ""
FORM_VIEW_URL = FORM_BASE_URL + "/viewform"
FORM_FINISHED_URL = FORM_BASE_URL + "/formResponse"

PATH_TO_DRIVER = ""

PROMPT = """
        あなたは優秀な、コピーライターかつコンサルタントです。
        インパクトのある、新しい企業名を考えることができるという、能力を持ちます。
        あなたは、この度設立される新たなホールディングスの社名を考える必要があります。
        このホールディングスは、アララ株式会社とvaluedesign株式会社の2社を傘下に持ちます。
        どちらも、キャッシュレス決済システムを中心としたビジネスを展開するIT企業です。
        追加情報として、アララ株式会社はこの他にBtoBのAR関連の事業とBtoBのメッセージングサービス事業を手がけています。
        新たに設立される、これから名前を決めるホールディングスのグループミッションは、
        `アイデアとテクノロジーで、世界をもっとハッピーに。
        Making the world happier with ideas and technology`
        です。

        新たな社名に求めるものとして以下の条件があげられます。
        - 社員の想いや意味が詰まっている
        - 親しみがある、愛着が持てる
        - シンプルで短く覚えやすい
        - カッコいい
        - オリジナリティがある
        - 世界中で通じる
        - 商標が取れる
        - 末尾はグループかホールディングスであること(例: アララグループ、valuedesignホールディングス)

        以上の点を考慮し、あなたには、新グループ社名と社名の由来と社名への想いを150字から200字程度でまとめて下さい。

        例を以下に3つあげます。
        新グループ社名: デジタルヴァルホールディングス (Digital Val Holdings)
        社名の由来と社名への想い: Digital Valは、デジタル技術を活用して付加価値を創造することを表し、ValはValueの略であり、顧客や社員にとって価値のある企業であることを示しています。グループミッションであるMaking the world happier with ideas and technologyに則り、デジタルテクノロジーを使って社員、顧客、社会を幸せにするビジョンを持ちます。

        新グループ社名: キャッシュリフトホールディングス (Cashlift Holdings)
        社名の由来と社名への想い: Cashliftは、キャッシュレス社会への移行を促し、ビジネスや人々の暮らしを発展させることを表します。また、「Lift」は持ち上げること、高めることを意味し、企業や社員、顧客、社会全体をより良い方向へ導くことを目指します。グループミッションであるMaking the world happier with ideas and technologyを実現するため、キャッシュレス決済のみならず、AIやIoTなど最新技術を積極的に取り入れ、社会のニーズに応えながら世界をより幸せにすることを目指します。

        新グループ社名: ヴァリットホールディングス (Varit Holdings)
        社名の由来と社名への想い: Varitは、VarietyとTechnologyを組み合わせた造語であり、様々な技術を取り入れ、バラエティ豊かな価値を創造することを表します。グループミッションであるMaking the world happier with ideas and technologyを実現するため、多様性を尊重し、最新技術を駆使して、人々の生活に新たな幸せをもたらすことを目指します。また、Varitは日本語で色を表す言葉にも通じ、カラフルで明るい未来をイメージします。

        新グループ社名:
        社名の由来と社名への想い:
    """
