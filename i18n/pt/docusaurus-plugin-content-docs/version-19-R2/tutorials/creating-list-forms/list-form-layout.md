---
id: list-form-layout
title: Layout Android
---

Nesta seção você verá como criar sua interface de formulário lista Android com Android Studio.

Aqui está o resultado que queremos atingir:

![Storyboard custom listform](img/xml-custom-listform.png)

Para cada célula, vamos adicionar:

* Imagem de perfil
* Titulo
* Subtítulo

## Abrir um arquivo layout com Android Studio

A melhor forma de editar ou criar um modelo é:

* Abrir o Studio Android e criar um novo projeto móvel vazio clicando no Arquivo > New > New Project...

* Selecionar o modelo Empty Activity

![Android Studio project creation](img/template-selection.png)

* Configure seu projeto e clique em  **Finish**

![Configure Android project](img/configure-android-project.png)

* Copie o arquivo layout.xml no layout app > res > soltando diretamente na pasta de layout de projeto

![Copy layout.xml file](img/copy-layout.png)

* Nesse ponto deve ter:

![Android project](img/android-project.png)

* Clique na opção direita superior**Split** para visualizar a visualização do modeloassim como código xml.

Está vazio, então vamos adicionar conteúdo!


## Adicione um container CardView

Para melhorar a renderização de suas células vamos adicionar um [CardView](https://developer.android.com/guide/topics/ui/layout/cardview).

Adicionar um CardView container permite exibir as células de seu formulário lista como cartelas e dá a habilidade de adicionar sombras, elevação, cantos arredondados, cor de fundo...

Vamos adicionar o arquivo layout. Não esqueça de fechar o container adicionando `</androidx.cardview.widget. CardView>` logo antes `</layout>`.

```xml
   <androidx.cardview.widget.

        CardView
                android:id="@+id/cardView"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginStart="8dp"
                app:cardCornerRadius="20dp"
                app:layout_constraintStart_toStartOf="parent"

            <ImageView
                android:id="@+id/__SPECIFIC_ID_1__"
                android:layout_width="100dp"
                android:layout_height="100dp"
                android:contentDescription="Image"
                app:imageUrl="__IMAGE_1__"
                tools:background="@tools:sample/avatars" /> 

            </androidx.cardview.widget.

```

É crucial para **dá IDs a seus elementos de layout** para poder fazer referência e eles depois e seu posicionamento relativo entre si.

Defina a  **largura** e **altura** de seu container,  **margens** e como queremos que o conteúdo ocupe todo o espaço pai (menos as margens) só precisamos **adicionar restrições**.



Aqui está o código de layout completo nesse estágio:

```xml
<?xml version="1.0" encoding="utf-8"?>

<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    tools:ignore="HardcodedText">

    <data>
        <!--ENTITY_VARIABLE-->
    </data>

    <androidx.cardview.widget. CardView
        android:id="@+id/mainCardview"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginStart="8dp"
        android:layout_marginTop="8dp"
        android:layout_marginEnd="8dp"
        android:layout_marginBottom="8dp"
        app:cardBackgroundColor="#FFFFFF"
        app:cardCornerRadius="25dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent">

        <androidx.constraintlayout.widget. ConstraintLayout
        android:layout_width="match_parent"
            android:layout_height="wrap_content">

        </androidx.constraintlayout.widget. ConstraintLayout>

    </androidx.cardview.widget.

```

E aqui está a preview de resultado que deve obter:

![Add CardView container](img/add-cardView-container.png)


## Adicione uma "Image View"

Para ter uma boa exibição de Imagem vamos usar uma CardView container quando adicionamos um canto arredondado para a ImageView ter um design melhor.

```xml
            <androidx.cardview.widget. CardView
                android:id="@+id/cardView"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginStart="8dp"
                app:cardCornerRadius="20dp"
                app:layout_constraintStart_toStartOf="parent"

            <ImageView
                android:id="@+id/__SPECIFIC_ID_1__"
                android:layout_width="100dp"
                android:layout_height="100dp"
                android:contentDescription="Image"
                app:imageUrl="__IMAGE_1__"
                tools:background="@tools:sample/avatars" /> 

            </androidx.cardview.widget.
```

Como pode ver ImageView está embebido no CardView. Isso permite adicionar bordas arrendondadas.

A linha `app:imageUrl="__IMAGE_1__"` permite fixar, bind o valor de imagem que está situado na posição 1 do arquivo svg definido previamente.


A linha `tools:background="@tools:sample/avatars"` está simplesmente para exibir um valor provisório para ImageView.


![Add ImageView](img/add-imageview.png)


## Adicionar um título

Aqui queremos adicioanr um título para a direita da CardView que contenha uma ImageView.

Para fazer isso vamos adicionar um TextView:

```xml
 <TextView
                android:id="@+id/__SPECIFIC_ID_2__"
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_marginStart="12dp"
                android:layout_marginTop="20dp"
                android:layout_marginEnd="12dp"
                android:layout_marginBottom="6dp"
                android:scrollbars="none"
                android:text="__TEXT_2__"
                android:textAppearance="@style/TextAppearance. MaterialComponents. Body1"
                android:textColor="@color/black"
                android:textStyle="bold"
                app:layout_constraintEnd_toEndOf="parent"
                app:layout_constraintStart_toEndOf="@+id/cardView"
                app:layout_constraintTop_toTopOf="parent"
                tools:text="My field 2" />

```

A linha `app:imageUrl="__TEXT_2__"` permite fixar, bind o valor de imagem que está situado na posição 2 do arquivo svg definido previamente.

Queremos que o ImageView e o TextView estejam alinhados ao topo. Para fazer isso, usamos a Id do TextView. Precisa adicionar esta linha para o CardView que inclui a imagem de perfil:

```xml
app:layout_constraintTop_toTopOf="@id/__SPECIFIC_ID_2__"
```

![Add Title](img/add-title.png)


## Adicionar um subtítulo


Queremos adicionar um subtítulo para esta célula. Para isso precisa adicionar o mesmo bloco que o título:


```xml

<TextView
                android:id="@+id/__SPECIFIC_ID_3__"
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_marginStart="12dp"
                android:layout_marginTop="8dp"
                android:layout_marginEnd="12dp"
                android:layout_marginBottom="50dp"
                android:scrollbars="none"
                android:text="__TEXT_3__"
                android:textAppearance="@style/TextAppearance. MaterialComponents. Body1"
                   android:textColor="?colorPrimary"
                app:layout_constraintBottom_toBottomOf="parent"
                app:layout_constraintEnd_toEndOf="parent"
                app:layout_constraintStart_toEndOf="@+id/cardView"
                app:layout_constraintTop_toBottomOf="@+id/__SPECIFIC_ID_2__"
                tools:text="My field 3" />
```



A linha `app:text="__TEXT_3__"` permite fixar, bind o valor de imagem que está situado na posição 2 do arquivo svg definido previamente.

Queremos que o subtítulo esteja abaixo do título. Para fazer isso vamos uar a Id do TextView. Só precisa adicionar esta linha para o título TextView:

```xml
app:layout_constraintBottom_toTopOf="@+id/__SPECIFIC_ID_3__"
```


Seu primeiro modelo formulário lista:

![Final list form template](img/final-list-form-template.png)


Aqui está o código de layout completo nesse estágio:

```xml
<?xml version="1.0" encoding="utf-8"?>

<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    tools:ignore="HardcodedText">

    <data>

        <!--ENTITY_VARIABLE-->
    </data>

    <androidx.cardview.widget. CardView
        android:id="@+id/mainCardview"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginStart="8dp"
        android:layout_marginTop="8dp"
        android:layout_marginEnd="8dp"
        android:layout_marginBottom="8dp"
        app:cardBackgroundColor="#FFFFFF"
        app:cardCornerRadius="25dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent">

    <androidx.constraintlayout.widget. ConstraintLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

        <androidx.cardview.widget. CardView
            android:id="@+id/cardView"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginLeft="8dp"
            app:cardCornerRadius="20dp"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toTopOf="@id/__SPECIFIC_ID_2__">

        <ImageView
                android:id="@+id/__SPECIFIC_ID_1__"
                android:layout_width="100dp"
                android:layout_height="100dp"
                android:contentDescription="Image"
                app:imageUrl="__IMAGE_1__"
                tools:background="@tools:sample/avatars" />

        </androidx.cardview.widget. CardView>

        <TextView
            android:id="@+id/__SPECIFIC_ID_2__"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_marginStart="12dp"
            android:layout_marginTop="20dp"
            android:layout_marginEnd="12dp"
            android:layout_marginBottom="6dp"
            android:scrollbars="none"
            android:text="__TEXT_2__"
            android:textAppearance="@style/TextAppearance. Body1"
            android:textColor="@color/black"
            android:textStyle="bold"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toEndOf="@+id/cardView"
            app:layout_constraintTop_toTopOf="parent"
            app:layout_constraintBottom_toTopOf="@+id/__SPECIFIC_ID_3__"
            tools:text="My field 2" />

        <TextView
            android:id="@+id/__SPECIFIC_ID_3__"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_marginStart="12dp"
            android:layout_marginTop="8dp"
            android:layout_marginEnd="12dp"
            android:layout_marginBottom="50dp"
            android:scrollbars="none"
            android:text="__TEXT_3__"
            android:textAppearance="@style/TextAppearance. Body1"
            android:textColor="?colorPrimary"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toEndOf="@+id/cardView"
            app:layout_constraintTop_toBottomOf="@+id/__SPECIFIC_ID_2__"
            tools:text="My field 3" />

    </androidx.constraintlayout.widget. ConstraintLayout>

    </androidx.cardview.widget.

```

## Personalizar a etiqueta

Aqui pode personalizar suas etiquetas:

* color => android:textColor

* weight => android:textStyle com os valores possíveis **normal**, **negrito** ou **itálico**

* aparência da fonte => android:textAppearance

Tentar manter a consistência em seu tamanho de layout de texto com aparência. A melhor maneira de conseguir isso é seguir o  [Material Design type](https://material.io/design/typography/the-type-system.html#type-scale).


Por exemplo, um TextView básico deveria estar na escala `@Body1@`.

```xml
android:textAppearance="@style/TextAppearance. MaterialComponents. Body1"
```

## Como entrar os dados em suas células

### Image View

Em nosso modelo de formulário lista usamos `app:imageUrl="__IMAGE_1__"`

Aqui supomos que a  ImageView seja a primeira vsita no svg, e sua ID de vista é  `__SPECIFIC_ID_1__`. Se fosse a terceira vista, seria `__IMAGE_3__` e sua vista de ID seria `__SPECIFIC_ID_3__`.

### Etiquetas

Em nosso modelo formulário lista usamos `android:text="__TEXT_2__"` para o título.

Aqui supomos que o título seja a segunda vista no svg, e sua ID de vista é `__SPECIFIC_ID_2__`.


## O que fazer agora?

Neste tutorial cobrimos o básico da criação de modelos de formulário lista Android. Você já pode criar seus próprios modelos simples usando os recursos do Starter Project. Mas espere - ainda há mais! No próximo tutorial, você vai aprender como construir modelos de formulários detalhados Android!

Baixe a pasta do modelo de lista completo:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-CustomListForm/releases/latest/download/tutorial-CustomListForm.zip">Baixar</a>
</div>





