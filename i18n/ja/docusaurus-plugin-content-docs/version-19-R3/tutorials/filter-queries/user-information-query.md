---
id: user-information-query
title: ユーザー情報に基づくクエリ
---

ユーザーのログインメールアドレス（ユーザー情報）に基づき，アプリに表示されるデータがフィルターされるようにしましょう。

* Go to the **Data section**.
* Right-click in the **Filter query** field to make **Field, Comparators and Operators buttons** appear.
* Click on the **Operators** button and select **AND**.
* Now define the user information you want to get from the database method, **:email**.
* Remember to validate the query by clicking on the **Validate** button. これを忘れてしまうと，アプリがビルドできません。

![ユーザー情報に基づくクエリ](img/user-information-query.png)

```4d
Status = 'In Progress' & manager.Email = :email 
```

The query will filter data depending on the **In Progress** status AND the **Account manager's email address** (accessible from the AccountManager table thanks to the *Many-to-One* relation on the manager's name).

> **NOTE**
> 
> * A **user icon** is displayed on the right of each table when a user information filter is applied to it.
> * As soon as a query is based on user information and validated, you need to edit the **Mobile app authentication method**. To do so, right-click on the **Edit authentication method** button to open the database method edition window.

データベースメソッドに下記のコードを追加します。

```4d
$response.userInfo:=New object("email";$request.email)
```

表示できるデータを判定するための条件として，営業担当者のログインメールアドレスが参照できるようになります。

![ユーザー情報に基づくクエリ](img/database-method-user-information-query.png)

Now if you build your app and enter "michelle.simpson@mail.com" as login email, you'll find all of Michelle Simpson's *"In progress"* contracts.

![Final result](img/restricted-queries-final-result.png)




