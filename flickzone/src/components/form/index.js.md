## Form Component Documentation 

**Table of Contents** 

* [Form Component](#form-component)
    * [Props](#props)
    * [Usage Example](#usage-example)
* [Form.Base Component](#formbase-component)
    * [Props](#props-1)
    * [Usage Example](#usage-example-1)
* [Form.Error Component](#formerror-component)
    * [Props](#props-2)
    * [Usage Example](#usage-example-2)
* [Form.Title Component](#formtitle-component)
    * [Props](#props-3)
    * [Usage Example](#usage-example-3)
* [Form.Text Component](#formtext-component)
    * [Props](#props-4)
    * [Usage Example](#usage-example-4)
* [Form.TextSmall Component](#formtextsmall-component)
    * [Props](#props-5)
    * [Usage Example](#usage-example-5)
* [Form.Link Component](#formlink-component)
    * [Props](#props-6)
    * [Usage Example](#usage-example-6)
* [Form.Input Component](#forminput-component)
    * [Props](#props-7)
    * [Usage Example](#usage-example-7)
* [Form.Submit Component](#formsubmit-component)
    * [Props](#props-8)
    * [Usage Example](#usage-example-8)

### Form Component

The `Form` component provides a basic container for form elements. It accepts children components and passes any additional props to the underlying `Container` styled component. 

#### Props

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The content of the form, typically other form components |
| ...restProps | any | Any additional props to be passed to the `Container` component |

#### Usage Example

```javascript
import Form from './Form';

const MyForm = () => {
  return (
    <Form>
      <Form.Title>Login</Form.Title>
      <Form.Input type="text" placeholder="Username" />
      <Form.Input type="password" placeholder="Password" />
      <Form.Submit type="submit">Login</Form.Submit>
    </Form>
  );
};
```

### Form.Base Component

The `Form.Base` component provides a styled base container for the form content. 

#### Props

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The content of the form base, typically other form components |
| ...restProps | any | Any additional props to be passed to the `Base` component |

#### Usage Example

```javascript
import Form from './Form';

const MyForm = () => {
  return (
    <Form>
      <Form.Base>
        <Form.Title>Login</Form.Title>
        <Form.Input type="text" placeholder="Username" />
        <Form.Input type="password" placeholder="Password" />
        <Form.Submit type="submit">Login</Form.Submit>
      </Form.Base>
    </Form>
  );
};
```

### Form.Error Component

The `Form.Error` component displays an error message within the form.

#### Props

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The error message to display |
| ...restProps | any | Any additional props to be passed to the `Error` component |

#### Usage Example

```javascript
import Form from './Form';

const MyForm = () => {
  const [error, setError] = useState(null);

  return (
    <Form>
      {error && <Form.Error>{error}</Form.Error>}
      <Form.Input type="text" placeholder="Username" />
      <Form.Input type="password" placeholder="Password" />
      <Form.Submit type="submit">Login</Form.Submit>
    </Form>
  );
};
```

### Form.Title Component

The `Form.Title` component displays a title for the form. 

#### Props

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The title text |
| ...restProps | any | Any additional props to be passed to the `Title` component |

#### Usage Example

```javascript
import Form from './Form';

const MyForm = () => {
  return (
    <Form>
      <Form.Title>Login</Form.Title>
      <Form.Input type="text" placeholder="Username" />
      <Form.Input type="password" placeholder="Password" />
      <Form.Submit type="submit">Login</Form.Submit>
    </Form>
  );
};
```

### Form.Text Component

The `Form.Text` component displays regular text within the form. 

#### Props

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The text content |
| ...restProps | any | Any additional props to be passed to the `Text` component |

#### Usage Example

```javascript
import Form from './Form';

const MyForm = () => {
  return (
    <Form>
      <Form.Text>Don't have an account? <Form.Link href="/signup">Sign up</Form.Link></Form.Text>
      <Form.Input type="text" placeholder="Username" />
      <Form.Input type="password" placeholder="Password" />
      <Form.Submit type="submit">Login</Form.Submit>
    </Form>
  );
};
```

### Form.TextSmall Component

The `Form.TextSmall` component displays smaller text within the form. 

#### Props

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The text content |
| ...restProps | any | Any additional props to be passed to the `TextSmall` component |

#### Usage Example

```javascript
import Form from './Form';

const MyForm = () => {
  return (
    <Form>
      <Form.TextSmall>Forgot your password?</Form.TextSmall>
      <Form.Input type="text" placeholder="Username" />
      <Form.Input type="password" placeholder="Password" />
      <Form.Submit type="submit">Login</Form.Submit>
    </Form>
  );
};
```

### Form.Link Component

The `Form.Link` component displays a styled link within the form. 

#### Props

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The link text |
| ...restProps | any | Any additional props to be passed to the `Link` component |

#### Usage Example

```javascript
import Form from './Form';

const MyForm = () => {
  return (
    <Form>
      <Form.Text>Don't have an account? <Form.Link href="/signup">Sign up</Form.Link></Form.Text>
      <Form.Input type="text" placeholder="Username" />
      <Form.Input type="password" placeholder="Password" />
      <Form.Submit type="submit">Login</Form.Submit>
    </Form>
  );
};
```

### Form.Input Component

The `Form.Input` component displays a styled input field within the form. 

#### Props

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The input field content |
| ...restProps | any | Any additional props to be passed to the `Input` component |

#### Usage Example

```javascript
import Form from './Form';

const MyForm = () => {
  return (
    <Form>
      <Form.Input type="text" placeholder="Username" />
      <Form.Input type="password" placeholder="Password" />
      <Form.Submit type="submit">Login</Form.Submit>
    </Form>
  );
};
```

### Form.Submit Component

The `Form.Submit` component displays a styled submit button within the form. 

#### Props

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The button text |
| ...restProps | any | Any additional props to be passed to the `Submit` component |

#### Usage Example

```javascript
import Form from './Form';

const MyForm = () => {
  return (
    <Form>
      <Form.Input type="text" placeholder="Username" />
      <Form.Input type="password" placeholder="Password" />
      <Form.Submit type="submit">Login</Form.Submit>
    </Form>
  );
};
```
