from tortoise.models import Model
from tortoise import fields
from datetime import datetime
from tortoise.contrib.pydantic import pydantic_model_creator


class Client(Model):
    id = fields.IntField(pk=True,index = True)
    username = fields.CharField(max_length=20,index = True,null = False)
    email = fields.CharField(max_length=200,unique = True,null = False)
    password = fields.CharField(max_length=100,null = False)
    is_verified = fields.BooleanField(default = False)
    join_date = fields.DatetimeField(default = datetime.utcnow)
    company = fields.CharField(max_length=50,null = True)


class Project(Model):
    id = fields.IntField(pk=True,index = True)
    name = fields.CharField(max_length=50,null = False)
    description = fields.TextField(null = True)
    client = fields.ForeignKeyField('models.Client', related_name='projects', on_delete=fields.CASCADE)
    status = fields.CharField(max_length=200,null = True)
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)
    estimated_deadline = fields.DatetimeField(null = True)


class Developer(Model):
    id = fields.IntField(pk=True,index = True)
    name = fields.CharField(max_length=50,null = False)
    email = fields.CharField(max_length=50,unique = True,null = False)
    password = fields.CharField(max_length=100,null = False)
    is_verified = fields.BooleanField(default = True)
    join_date = fields.DatetimeField(default = datetime.utcnow)
    company = fields.CharField(max_length=50,null = True)
    current_assigned_project = fields.ForeignKeyField('models.Project', related_name='developers', on_delete=fields.CASCADE,null = True)
    specialization = fields.CharField(max_length=100,null = True)


class ProjectManager(Model):
    id = fields.IntField(pk=True,index = True)
    name = fields.CharField(max_length=50,null = False)
    email = fields.CharField(max_length=50,unique = True,null = False)
    password = fields.CharField(max_length=100,null = False)
    is_verified = fields.BooleanField(default = True)
    join_date = fields.DatetimeField(default = datetime.utcnow)



client_pydantic = pydantic_model_creator(Client,name = 'ClientPydantic',exclude = ('is_verified'))
client_pydanticInput = pydantic_model_creator(Client,name = 'ClientInput',exclude_readonly=True,exclude = ('is_verified','join_date'))
client_pydanticOutput = pydantic_model_creator(Client,name = 'ClientOutput',exclude = ('password','join_date'))


project_pydantic = pydantic_model_creator(Project,name = 'ProjectPydantic',exclude=('created_at','updated_at'))
project_pydanticInput = pydantic_model_creator(Project,name = 'ProjectInput',exclude_readonly=True,exclude=('created_at','updated_at'))
project_pydanticOutput = pydantic_model_creator(Project,name = 'ProjectOutput',exclude = ('id'))

developer_pydantic = pydantic_model_creator(Developer,name = 'DeveloperPydantic',exclude=('is_verified','current_assigned_project'))
developer_pydanticInput = pydantic_model_creator(Developer,name = 'DeveloperInput',exclude_readonly=True,exclude=('is_verified','current_assigned_project','join_date'))
developer_login = pydantic_model_creator(Developer,name = 'DeveloperLogin',exclude = ('id','is_verified','current_assigned_project','join_date','company','specialization','name'))
developer_pydanticOutput = pydantic_model_creator(Developer,name = 'DeveloperOutput',exclude = ('password','join_date'))

projectmanager_pydantic = pydantic_model_creator(ProjectManager,name = 'ProjectManagerPydantic',exclude=('is_verified'))
projectmanager_login = pydantic_model_creator(ProjectManager,name = 'ProjectManagerLogin',exclude = ('id','is_verified','join_date','name'))
projectmanager_pydanticInput = pydantic_model_creator(ProjectManager,name = 'ProjectManagerInput',exclude_readonly=True,exclude=('is_verified','join_date'))
projectmanager_pydanticOutput = pydantic_model_creator(ProjectManager,name = 'ProjectManagerOutput',exclude = ('password','join_date'))

