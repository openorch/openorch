---
sidebar_position: 100
tags:
  - data-svc
  - data
  - permissions
  - roles
  - authentication
  - authorization
  - services
---

# Data Svc

The Data Service (Data Svc) is designed to facilitate backendless applications, allowing data to be saved and queried directly from the frontend, similar to Firebase.

> This page provides a high-level overview of `Data Svc`. For detailed information, refer to the [Data Svc API documentation](/docs/openorch/query).

## Purpose

Data Svc serves as a lightweight database abstraction designed for rapid prototyping. It allows direct reading, writing, and deletion from the frontend, eliminating the need for basic CRUD microservices that merely handle routine database operations.

## Data types

Currently, Data Svc supports only untyped, dynamic, and schemaless entries known as `Object`s.

## Objects

### Data model

Multiple tenants (users or services) write to shared tables. Access is governed by the permission model outlined below.

### Permission model

The `Data Svc` `Object` permission model is designed with two primary goals:

- Simplicity – Easy to understand and implement
- Flexibility – Versatile while maintaining simplicity

To illustrate the model, consider the following example entry:

```yaml
table: "pet"
id: "pet_67890"
data:
  yourCustomKey1: "yourCustomValue1"
  yourCustomKey2: 42
readers:
  - "usr_12345"
  - "org_67890"
writers:
  - "org_67890"
deleters:
  - "usr_12345"
authors:
  - "usr_99999"
  - "org_99999"
```

## Readers

The `readers` field defines which users, organizations, or roles have permission to view an entry.

- Users and organizations outside of your own can be granted access.
- This field can be set by the author or writers to include user IDs, organization IDs, or roles they themselves do not belong to.

## Authors

The `authors` field identifies the original creators of an entry. Unlike `readers`, `writers`, and `deleters`, which are user-defined, this field is system-assigned. It can only include the author's user ID, organization IDs they belong to, or roles they hold. This ensures it cannot be altered or spoofed, helping to prevent spam.

- In multi-tenant applications, spam can occur because anyone can "offer" a record to be read by another user or organization they are not part of. This can be problematic—for example, in a chat application where strangers could send unsolicited messages simply by knowing a company ID.
- The `authors` field helps prevent such abuse limiting the list to resources the author has.

## Writers

The `writers` field specifies which users, organizations, or roles have permission to modify an entry.

- This field can be set by the author or existing writers to include user IDs, organization IDs, or roles they themselves do not belong to.

## Deleters

The `deleters` field defines which users, organizations, or roles are authorized to delete an entry.

- This field can be set by the author or existing writers to include user IDs, organization IDs, or roles they themselves do not belong to.

### Conventions

#### Table name and object ID

Each object ID must be prefixed with the table name. Whenever possible, use singular table names.

```yaml
table: "pet"
id: "pet_67890"
```

#### `_self`

You can specify the reserved string `_self` in the `readers`, `writers` or `deleters` lists. It will be extrapolated to your user ID.
